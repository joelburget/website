---
title: The Lost Book of App Engine Tricks
published: January 15, 2013
description: the secrets you were never meant to know about ndb and more
header: <link rel="stylesheet" type="text/css" href="/media/css/syntax.css" media="screen, projection" />
---
# The Lost Book of App Engine Tricks

## ndb

I'll pick up where [Dylan left
off](http://dylanv.org/2012/08/22/a-hitchhikers-guide-to-upgrading-app-engine-models-to-ndb/).
Be sure to ready his guide on converting your models to ndb.

### Motivation

You have to solve the following problem: Say you work for an education website
with a computer science curriculum. You're writing a handler for the page that
displays a program. Pretty simple so far. You must also show links to 30
related programs. Let's make things a little more complicated; there's voting
data associated with every program, so we'll show the user their vote, if any,
on each program, including the main one.

To solve the program we have to do something like the following - get the main
program and at the same time query for the related programs. Then when those
come back

### Code

Have you ever used this pattern in your code?

```python
future_1 = task_1_async()
future_2 = task_2_async()

x = future_1.get_result()
y = future_2.get_result()

# At least this beats (performance-wise) the synchronous version
x = task_1()
y = task_2()
```

I admit, I've done it a couple times. Please, after you read this, don't ever
do it again. If you do you should feel really bad about yourself. Really bad.

It makes sense, right. We send off the first task, then the second, then we
wait for them to come back. But you can't shake that feeling in the back of
your mind that doubling the line count plus sprinkling in `_async` and
`get_result()` doesn't make for very readable code.

If you read the [ndb async documentation] you might think to use a tasklet
here, but you might also not think to use a tasklet because the documentation
doesn't do a very good job of explaining what they're good for.
