---
layout: post
title: Plain Text is not Expressive Enough
category: posts
published: March 7, 2015
description: Programmer Tooling Beyond Plain Text
authorName: Joel Burget
header: <link rel="stylesheet" type="text/css" href="/media/css/pigment.css" media="screen, projection" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min.js"></script>
---

# Programmer Tooling Beyond Plain Text

This is a companion to my last post on the expression problem and tables. In this post I explore other ways we can benefit by adding new display types to our programming environment, beyond plain text.

### Haskell Operators

In Haskell we often use ASCII symbols as analogs to concepts.

<blockquote class="twitter-tweet" lang="en"><p>The lamest bottle-neck in language design is running out of ASCII punctuation for built-in syntax</p>&mdash; Gabriel Gonzalez (@GabrielG439) <a href="https://twitter.com/GabrielG439/status/582682741973512192">March 30, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

```haskell
-- if `a` is a Num, go from `a` to `a` to `a`
(+) :: Num a => a -> a -> a

-- pull `x` out of `getChar`
do x <- getChar
   putChar x

-- pull `x` and `y` out of those lists
[ (x,y) | x <- [1..10], y <- ['a'..'z'], x > 42 ]

-- push the result of x into y
x >>= y
```

Those worked pretty well! But applicative syntax suffers. These two expressions are equivalent parsing code. The first uses [idiom brackets](https://personal.cis.strath.ac.uk/conor.mcbride/pub/she/idiom.html) to make the code slightly easier to read and write.

```haskell
pExp :: P Char Exp
pExp =
  (| Neg    (%teq '-'%) pExp
   | (:+:)  (%teq '('%) pExp (%teq '+'%) pExp (%teq ')'%)
   | V      (tok isAlpha)
   |)

pExp = Neg <$> teq '-' *> pExp
   <|> (:+:) teq '(' <$> pExp <* teq '+' <*> pExp <* teq ')'
   <|> V <$> tok isAlpha
```

In the second expression implicit associativity makes it a nightmare to read (and write). There are nine operators and no parentheses, so in order to reason about what this code does you must understand how to group them. You need to be an expert in the associativity rules of your chosen language or just wrap everything in parens.

Let's see the exact same code again, but this time with a subtle indication of associativity.

<div id="assoc"></div>

### Argument Order

Choosing an argument ordering is usually rather arbitrary

```haskell
mapM_ :: (a -> m b) -> [a] -> m ()
forM_ :: [a] -> (a -> m b) -> m ()
forM_ = flip mapM_

cmp x y = compare (f x) (f y)
-- alternatively
cmp = ((. f) . compare .)
```

Javascript copes with argument ordering through the option object pattern (example: [`jQuery.ajax`](http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings) and lambdas (arrow functions make this lighter-weight).

```javascript
// call $.ajax with any set of options, in any order
$.ajax({
  url: "http://fiddle.jshell.net/favicon.png",
  beforeSend: function( xhr ) {
    xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  }
})

$.ajax({
  method: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
```

```javascript
// we can use arrow functions to adapt the parameters
> [1,2,3].forEach(console.log.bind(console));
1 0 [1, 2, 3]
2 1 [1, 2, 3]
3 2 [1, 2, 3]

> [1,2,3].forEach(x => console.log(x));
1
2
3

> [1,2,3].forEach((x, ix) => console.log(ix));
0
1
2
```

There's an art to adapting functions in this way:

* In [javascript](https://leanpub.com/javascript-allonge/read#leanpub-auto-unary)
* In [haskell](https://wiki.haskell.org/Pointfree)
* Heck, even in the [lambda calculus](http://en.wikipedia.org/wiki/Combinatory_logic)

But a more elegant solution is to forgo argument ordering.

### Math Notation

These express the same thing. I'd *really* prefer to deal with the latter.

```python
x = symbol('x')

Integral((x**4 + x**2*exp(x) - x**2 - 2*x*exp(x) - 2*x -
    exp(x))*exp(x)/((x - 1)**2*(x + 1)**2*(exp(x) + 1)), x)
```

<p id="katex-integral"></p>

### Tables

Tables are the best way to represent some types of data. In my [last post](/the-expression-problem-and-tables/) I talked about some ways they'd be useful additions to the programming language itself.

TODO

### Etc

One more example. Khan Academy's Programming platform shows off what can be done with very concrete data types like images, colors, and numbers. Try changing the color, position, or image in the sample below.

<script src="http://www.khanacademy.org/computer-programming/image-color-demo/6690729609658368/embed.js?editor=yes&amp;buttons=yes&amp;author=yes&amp;embed=yes"></script>

## Source Control

Let's look at a couple examples of source control handling plain text in a disappointing way. We'll use Python in these examples (this does not highlight any deficiency in Python, a language I like).

Our code deals with billing a customer.

```python
def calculateBill():
    pass

def calculateTax():
    return calculateBill() * taxRate
```

Now Alice refactors, renaming `calculateBill` to `billTotal`.

```diff
- def calculateBill():
+ def billTotal():
      pass

  def calculateTax():
- 	return calculateBill() * taxRate
+ 	return billTotal() * taxRate
```

But Bob simultaneously adds `calculateTip`.

```diff
  def calculateBill():
      pass

  def calculateTax():
      return calculateBill() * taxRate
+
+ def calculateTip():
+     return calculateBill() * 0.2
```

The merge succeeds, producing broken code on the last line.

```python
def billTotal():
    pass

def calculateTax():
    return billTotal() * taxRate

def calculateTip():
    return calculateBill() * 0.2 # this should say "billTotal"
```

Why did the merge break? Because the merge tool has no way of knowing what the changes *mean*. It only sees intra-line changes on the one hand and added lines on the other.

<!--
* Alice changed line 1 from `def calculateBill():` to `def billTotal():` and line 5 from `    return calculateBill() * taxRate` to `	return billTotal() * taxRate`.
* Bill added lines 6 and 7:
      ```
      def calculateTip():
      return calculateBill() * 0.2
      ```
-->

However, in the structured editing case, the job of the merge is to resolve two actions:

* rename `calculateBill` to `billTotal`
* add `calculateTip`

The merge tool *knows all of this*. Don't quote me on this, but I'm hopeful we can use a language aware [patch theory](http://en.wikibooks.org/wiki/Understanding_Darcs/Patch_theory) to find a sequence of patches (if this sequence exists) that can be safely applied to yield a working program.

In the move from text munging to structure manipulations, our actions gain *intention* with the language / environment.

Another example:

We start with

```python
import X
```

Alice decides to import `Y`.

```diff
  import X
+ import Y
```

Bill decides to import `Z`.

```diff
  import X
+ import Z
```

Git can't handle this. It only knows that both Alice and Bob are modifying the same line.

### Editor Integrations are Flaky

TODO
* typechecking
* go to source
* folding
* autocomplete
* etc

All require parsing (potentially incomplete) code.

### Types (and Metadata in General) become Convenient

TODO

Types become much more convenient when you no longer have to write them yourself, when you're no longer submitting programs to the compiler to have them rejected. Rather, your terms always match their type, in fact, construction of terms is guided by the type. (link to Epigram paper)

## Forget Parsing

Quoting someone much smarter than me, djb, on [avoiding parsing](http://cr.yp.to/qmail/qmailsec-20071101.pdf).

> I have discovered that there are two types of command
> interfaces in the world of computing: good interfaces and
> user interfaces.

> The essence of user interfaces is parsing: converting an
> unstructured sequence of commands, in a format usually
> determined more by psychology than by solid engineering,
> into structured data.

> When another programmer wants to talk to a user interface,
> he has to quote: convert his structured data into an
> unstructured sequence of commands that the parser will, he
> hopes, convert back into the original structured data.

> This situation is a recipe for disaster. The parser often
> has bugs: it fails to handle some inputs according to the
> documented interface. The quoter often has bugs: it produces
> outputs that do not have the right meaning. Only on
> rare joyous occasions does it happen that the parser and the
> quoter both misinterpret the interface in the same way.

TODO

By directly manipulating data we can avoid two types of parse errors.

User parse errors are obvious but ultimately unimportant errors to avoid.

Less obvious, but arguably as important, is avoiding parser implementation errors.

As a language implementor I'm particularly interested in the time saved from not having to implement a parser in the first place.

## Sacrifices

<div class="aside" markdown="1">

### Aside:

* Making your system better in one way *almost always* make it worse in another.
    - Examples:
        + performance usually comes at the cost of simplicity (and therefore developer time and correctness)
        + You can have consistency, availability, or partition tolerance, but [not all three](http://en.wikipedia.org/wiki/CAP_theorem)
        + Immutable data structures have simpler semantics and can go back in time, but there are fundamental performance limitations.
        + etc.
    - The exceptions are exceedingly rare.
* When designing any system, take care to consider not only what you've won, but also what you've given up.
* Also: Make the same considerations for any system you're considering using.
  - Corollary: Be suspicious of any system claiming to be strictly better than what currently exists.
  - Second corollary: Be doubly suspicious if the creators of the system actually believe it's strictly better (ie. disregarding marketing, the engineers better understand the tradeoffs they've made)
* Savor hard choices. Be decisive. A handful of small decisions constrains the direction of your project.
    - Want a distributed database with consistent transactions? You need to grapple with the complexity of PAXOS, GPS, and atomic clocks.
    - An [append-only database](http://blog.confluent.io/2015/03/04/turning-the-database-inside-out-with-apache-samza/) with streaming materialized views never loses data. You no longer have to worry corrupting data or migrating it, a huge win. But Postgres has been around for 20 years, is stable, performant, and is well understood.

</div>

So, what have we given up by moving away from plain text?

Graydon Hoare has some [thoughts on the matter](http://graydon2.dreamwidth.org/193447.html):

> text is the most powerful, useful, effective communication technology ever, period

> Text is the most socially useful communication technology. It works well in 1:1, 1:N, and M:N modes. It can be indexed and searched efficiently, even by hand. It can be translated. It can be produced and consumed at variable speeds. It is asynchronous. It can be compared, diffed, clustered, corrected, summarized and filtered algorithmically. It permits multiparty editing. It permits branching conversations, lurking, annotation, quoting, reviewing, summarizing, structured responses, exegesis, even fan fic. The breadth, scale and depth of ways people use text is unmatched by anything. There is no equivalent in any other communication technology for the social, communicative, cognitive and reflective complexity of a library full of books or an internet full of postings. Nothing else comes close.

Go read the [original](http://graydon2.dreamwidth.org/193447.html), it's short and powerful.

From a developer point of view, the biggest thing I can see that we're giving up is well-known, finely tuned tools (vim, grep, etc). These tools have had man-years of work put in, by *really* good developers.[^grep]

So, is giving up plain text worth it? Maybe not initially. We'll have to give up tools we've been using for years. They're comfortable and familiar, but they haven't changed much in years. It feels like we're approaching the limit of what can be done with the current generation of tooling. I can't see programmers 30 years from now programming in fundamentally the same way as we program today. The benefits of a richer representation are overwhelming.

## Conclusion

Structured editing can remove an entire class of errors - syntax errors.

Conspicuously missing from this post is discussion of how to *actually* edit structurally. I.E. how keypresses translate to editing actions. I have some ideas about this which I'll go over in a later post, along with we can avoid type errors at the same time.

[^grep]: see [why GNU grep is fast](https://lists.freebsd.org/pipermail/freebsd-current/2010-August/019310.html) for one example of the engineering poured in

<script src="/media/js/plaintext.js"></script>
