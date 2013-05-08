import scaling_model
from testutil import gae_model
#from testutil import testsize
#import logging

from google.appengine.ext import ndb

class VotesCounter(scaling_model.ScalingModel):
    """An example of something that might be sharded.

    If a lot of people will be voting on an item then it could easily cause
    contention if a vote might be written more often than once per second.
    """
    upvotes = ndb.IntegerProperty(default=0)
    downvotes = ndb.IntegerProperty(default=0)

    @staticmethod
    def combine(x, y):
        upvotes = x.upvotes + y.upvotes
        downvotes = x.downvotes + y.downvotes
        return VotesCounter(upvotes=upvotes, downvotes=downvotes)


class ScalingShardTest(gae_model.GAEModelTestCase):
    """Tests to verify that Scaling Shards behave as expected."""

    def setUp(self):
        super(ScalingShardTest, self).setUp()
        self.set_consistency_probability(1)
        self.id = "vote"

    def tearDown(self):
        super(ScalingShardTest, self).tearDown()

    def test_get_no_results(self):
        vc = VotesCounter.get_results(self.id)
        self.assertEquals(vc, None)

    def test_get_one_result(self):
        VotesCounter(scaling_shard_id=self.id).put()
        vc = VotesCounter.get_results(self.id)
        self.assertIsNotNone(vc)

    def test_get_multiple_results(self):
        shard1 = VotesCounter._new_shard(self.id)
        shard2 = VotesCounter._new_shard(self.id)
        shard1.upvotes = 1
        shard1.downvotes = 1
        shard2.upvotes = -1
        shard2.downvotes = 100
        ndb.put_multi([shard1, shard2])

        votes = VotesCounter.get_results(self.id)
        self.assertEqual(votes.upvotes, 0)
        self.assertEqual(votes.downvotes, 101)

    def test_sharding_occurs(self):
        VotesCounter(scaling_shard_id=self.id).put()
        for i in range(50):
            shard = VotesCounter.get_shard(self.id)
            shard.upvotes += 1
            shard.put()
        count = VotesCounter.query(VotesCounter.scaling_shard_id == self.id).count()
        self.assertTrue(count > 1)
        self.assertTrue(count < 50)
        res = VotesCounter.get_results(self.id)
        self.assertEqual(res.upvotes, 50)
        self.assertEqual(res.downvotes, 0)

    def test_get_shard_iff_shard_exists(self):
        shard = VotesCounter.get_shard(self.id)
        self.assertEquals(shard, None)

        VotesCounter(scaling_shard_id=self.id).put()
        shard = VotesCounter.get_shard(self.id)
        self.assertIsNotNone(shard)

    def test_shard_groups_dont_interact(self):
        VotesCounter(scaling_shard_id="vc1", upvotes=1).put()
        vc1_ = VotesCounter._new_shard("vc1")
        vc1_.upvotes = 1
        vc1_.put()

        VotesCounter(scaling_shard_id="vc2", downvotes=1).put()
        vc2_ = VotesCounter._new_shard("vc2")
        vc2_.downvotes = 1
        vc2_.put()

        self.assertEqual(VotesCounter.get_results("vc1").upvotes, 2)
        self.assertEqual(VotesCounter.get_results("vc2").downvotes, 2)
