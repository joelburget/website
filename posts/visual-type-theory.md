---
layout: post
title: Visual Type Theory, Part 1
category: posts
published: September 8, 2013
description: Constraint propagation and unification of `fib = 0:1:zipWith (+) fib (tail fib)`
header: <link rel="stylesheet" type="text/css" href="/media/css/how-series-pygments_scr_pro.css" media="screen, projection" />
        <link rel='stylesheet' type='text/css' href='/media/css/data-type-newtype-instance-class.css'>
        <link rel='stylesheet' type='text/css' href='/media/css/syntax.css'>
---

Visual Type Theory, Part 1
==========================

Programming in a language like Haskell I find that I understand the workings of
the type system in a visual way. Here's an example of constraint propagation
and unification of the expression
`fib = 0:1:zipWith (+) fib (tail fib)`{.haskell}.

![Constraint Propagation Diagram](/media/img/constraints.jpg)

For reference:

```haskell
0, 1 :: Int
(:) :: a -> [a] -> [a]
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
(+) :: Int -> Int -> Int
tail :: [a] -> [a]
```

How does this diagram work? Constraints propagate from each parent and each
child - the parent propagates the type it expects of its child and the child
propagates its type. These are then unified (I used -> ^u syntax to represent
unification). Unification results in constraints like `Int = a_1` and `a_1 =
a_2`. It's not shown in this diagram, but all of those constraints need to
continue to be unified until either there are no type variables left, giving us
the final result, or an unsatisfiable constraint, like `Int = Float`{.haskell},
is observed. In this case type inference would result in `fib =
[Int]`{.haskell}.

Note that I skipped over the complication of typeclasses - for example, usually
`0`{.haskell} would result in this constraint: `Num a => a`{.haskell}. I may
cover that in the next post. Other possibilities include a more formal
description of the typechecking algorithm and a more powerful visual metaphor
for working with types.
