import random
import datetime
import logging

from google.appengine.ext import ndb


def _shard_key(cls, id, shard_num):
    # return ndb.Key(cls,
        #"scaling_shard_%s_%d" % (cls.__name__, shard_num))
    return ndb.Key(cls, "scaling_shard_%s_%d" % (id, shard_num))


# def _stat_key(cls):
#     return ndb.Key(ScalingShardStat, "scaling_shard_stat_%s" % cls.__name__)


# class ScalingShardStat(ndb.Model):
#     num_shards = ndb.IntegerProperty(default=0)


class ScalingModel(ndb.Model):
    """A model to automatically shard inherited models.

    Inherit from `ScalingModel` TODO

    This is based on the idea of a sharding counter, but generalized. Instead
    of just recording a count, models using this class can hold any kind of
    data, as long as it can be recombined with `combine`.
    """
    # How many accesses to record
    N = 5

    # If the average time between accesses gets lower than this, split the
    # current shard into two. By default this is 2 seconds. Based on the fact
    # that the datastore supports at the very least 1 transaction per second
    # (I've even seen 1 to 5 / s) and transactions are retried by default, this
    # should provide a decent safety margin.
    MIN_TIME = datetime.timedelta(seconds=2)

    # A random number in the range [0, 1), used to randomly select an entity
    random = ndb.FloatProperty()

    last_n_access_times = ndb.DateTimeProperty(repeated=True)

    scaling_shard_id = ndb.StringProperty()

    # def put(self):
    #     # Monkey-patching sucks but `_pre_put_hook` is called after the key is
    #     # generated.
    #     if self.key is None:
    #         cls = self.__class__
    #         num_shards = (cls
    #             .query(cls.scaling_shard_id == self.scaling_shard_id)
    #             .count())
    #         self.key = _shard_key(self.__class__, self.scaling_shard_id,
    #             num_shards)
    #     super(ScalingModel, self).put()

    @classmethod
    #@ndb.transactional
    def _new_shard(cls, id, **kwargs):
        """Create a new shard with scaling_shard_id = id."""
        # stat = _stat_key(cls).get()
        # if stat is None:
        #     stat = ScalingShardStat(key=_stat_key(cls))
        # num_shards = cls.query(cls.scaling_shard_id == id).count()
        # kwargs["key"] = _shard_key(cls, id, num_shards)
        # stat.num_shards += 1
        ret = cls(**kwargs)
        ret.random = random.random()
        ret.last_n_access_times = [datetime.datetime.now()]
        ret.scaling_shard_id = id
        # ndb.put_multi([ret, stat])
        ret.put()
        return ret
        #return [stat, cls(**kwargs)]

    @classmethod
    def combine():
        """Associative operation to combine shards (implemented by subclasses).
        """
        # Possible to implement a default version with introspection, but may
        # not be worth it.
        raise NotImplementedError

    @classmethod
    #@ndb.transactional
    def get_shard(cls, id):
        """Get a random shard - for writing data only."""
        rand_float = random.random()
        entity = cls.query(cls.scaling_shard_id == id, cls.random >= rand_float).order(cls.random).get()
        if entity is None:
            entity = cls.query(cls.scaling_shard_id == id).order(cls.random).get()
        if entity is None:
            return None

        # Monitor accesses to this shard, split if accesses are too frequent
        num_accesses = len(entity.last_n_access_times)
        entity.last_n_access_times.insert(0, datetime.datetime.now())
        entities_to_put = [entity]
        if (num_accesses > entity.N):
            entity.last_n_access_times.pop()
        elif (num_accesses > 1):
            oldest = entity.last_n_access_times[0]
            newest = entity.last_n_access_times[-1]
            if (newest - oldest < num_accesses * entity.MIN_TIME):
                entities_to_put.append(cls._new_shard(id))
        ndb.put_multi_async(entities_to_put)

        return entity

    @classmethod
    #@ndb.transactional
    def get_results(cls, id):
        """Get the read only result of combining all shards."""
        # stat = _stat_key(cls).get()
        # if stat is None:
        #     return cls()
        # 
        # shard_keys = [_shard_key(cls, i) for i in range(stat.num_shards)]
        # num_shards = cls.query(cls.scaling_shard_id == id).count()
        # if num_shards == 0:
        #     return None
        # shard_keys = [_shard_key(cls, id, i) for i in range(num_shards)]
        # shards = ndb.get_multi(shard_keys)
        shards = cls.query(cls.scaling_shard_id == id).run()
        if shards == []:
            return None
        return reduce(cls.combine, shards)
