#!/usr/bin/env sai-run

# SAI "Sums and Products" a.k.a. "Impossible Puzzle" solver

X and Y are two different integers, greater than 1, with sum less than 100.

S and P are two mathematicians; S knows the sum X+Y, P knows the product X*Y, 
and both know the information in these two sentences. 

The following conversation occurs.

1. P says "I cannot find these numbers."
2. S says "I was sure that you could not find them. I cannot find them either."
3. P says "Then, I found these numbers."
4. S says "if you could find them, then I also found them."

What are these numbers?
This solution based in part on sample Python and Scala code in <http://en.wikipedia.org/wiki/Impossible_Puzzle>

## Implementation

### Solution Framework

Declare a global variable:

    reference:
      max 100

Object declaration. With `main` this object is instantiated automatically when `require`d.

    object Impossible main 1.0.0

Declare a __task__ using a special name __Instantiate__ which will be invoked on object creation:

    Instantiate task

Define an iterable __process__ yielding candidate solutions. What is being __yield__ed for each valid candidate is a plain object with named traits for `x`, `y`, `sum` and `product`.

SAI does not use `=` for assignment. Every line of code begins with a verb. Here it is `set`, used to assign a value into a variable. So, here we are describing a __process__ and naming it `Candidates`.

      set Candidates to process

__count__ is a looping construct, basically a simple `for` loop. 

        count 2, max as x                      // greater than 1 
          count x+1, max as y                  // greater than x
            if x+y<max                         // sum less than max 
              yield fields
                x x
                y y
                sum x+y
                product x*y

The task `Countem` is a simple observation tool to display the length of an array. 

Unlike a __process__, a __task__ is just a simple function that can return a value.  Use __given__ to name the parameters it receives.  The __debug__ global verb prints a line of text to the console.  The `${...}` within a string will include the results of an expression in the string.

      set Countem to task given obj, label
        debug '${label} candidate count: ${obj.length}'

Declare some working storage. The constant `empty` means an array with no elements. 
The `set` verb can perform multiple assignments when they are indented, as below. 

      set
        pgood to empty
        sbad to empty
        pgood2 to empty    
        sgood to empty

Display a banner.
  
      debug 'Mathemetician\'s "Impossible" puzzle solver.'

Print the result -- wait what?

Exclamation mark invokes a function. Triple-dot (chain) allows an indented series of operations to be applied to a value, in this case to iterator produced by the `Candidates` __process__.

      debug !Candidates ...
      
Notice the indent level after this point has changed, we're now in the "chain"
 
The `|` is known as a pipe. In SAI the pipe is used to announce a special class
of operators known as _pipers_.  Pipers are all named after the functions they
perform. 

Because the algorithm uses tabular accumulation, it won't work as a lazy iterator.
Nevertheless, it's clearer and more maintainable to abstract away the
candidate generator into a process and then pull the candidates out of it into a list. 
  
In a chain, each line receives the value the previous line created. This is the first line in the chain, so the value in question is a live iterator; the result of invoking `Candidates`. 

Here, __| collect__ gathers all of the rows from an iterator and stores them in an array.  

        |collect
    
The __|observe__ piper receives the current object, and does not change it. It allows you to inspect a value, in this case the array of __|collect__ed values from `Candidates`. We call `Countem` with the array (as `it`)  and a label.

        |observe !Countem it, 'Initial'

And now that we have our working set of data -- an array of candidates -- we tackle the problem in phases, as in the problem statement.


## The solution

### Phase 1 -- establish P's knowledge

Count how many rows have a given product as a solution (PGood)
 
The __| audit__ piper is similar to __|observe__, but is triggered for every item in a container.

In this case we're counting solutions by product (.p) in the pgood array.

The __inc__ (increment) verb has a special behaviour where if the value to be 
incremented is undefined, it is set to 1.  

In SAI, you can access object/array attributes indirectly with the backslash syntax, as long as the indirection is just a variable name or attribute, like below.  The code `pgood\.product` is equivalent to `pgood[.product]`.  

Unrooted attribute accesses like `.product` are pronouns; the dot means "whatever object is currently under examination."  For more on this, see the _pronouns_ reference in the documentation.

        |audit 
          inc pgood\.product 

### Phase 2 -- if P could have known, S knows it isn't the answer.

Remove trivial solutions for `.product` from the solutions for `.sum`.  

If `pgood` indicates a trivial solution for P, then flag S's solution as bad : 
    
        |audit 
          if pgood\.product is 1
            set sbad\.sum to true

__| has__ is a filtration operator: if the expression is true, the row is kept.

We keep all solutions that are not marked bad, and display status.
    
        |has not sbad\.sum 
        |observe from Countem it, 'Phase 2'

### Phase 3 -- Since S didn't know either, P can eliminate non-trivial solutions

Filter for a new list of solutions where there is only one answer for `.product`

The remaining patterns should be familiar.

        |audit 
          inc pgood2\.product 
        |has pgood2\.product is 1
        |observe from Countem it, 'Phase 3'

### Phase 4 -- Since P now knows, S can eliminate non-trivial solutions 

Filter for a new list of solutions where there is only one answer for `.sum`

        |audit 
          inc sgood\.sum
        |has sgood\.sum is 1
        |observe from Countem it, 'Results'

### Phase 5 -- Nicely format remaining solution(s)

__| thru__  is a map-like operator used as a transformation tool. Used on one
line instead of as an indented block of code, we just supply
an expression to be evaluated; in this case a string literal 
that uses the ${} string composition tool.  

`Key` is another pronoun, referencing the row number of the array item currently being examined by __thru__.
     
        |thru 'Solution ${key+1}: X=${.x}, Y=${.y}; sum=${.sum}, product=${.product}'
    
__join__ is not a piper or a keyword, it's a member method of Array (which the chained object is). 
The chain knows how to apply object methods, and is smart enough to handle situations where the methd
doesn't return a usable "this" by passing forward the previous "this".

Here we're turning a list into a single string with elements delimited 
by newlines. And as this is the last indented clause in the chain,
the resulting string is the final value that is given to debug to display.
    
        join '\n'

## The Result

This is the final printed output:

    Mathemetician's "Impossible" puzzle solver.               // example
    Initial candidate count: 2304
    Phase 2 candidate count: 145
    Phase 3 candidate count: 86
    Results candidate count: 1
    Solution 1: X=4, Y=13; sum=17, product=52

We found one solution with X=4 and Y=13.


## Recap

Here's the code of the solution without all the commentary and instrumentation:

    debug !Candidates ...                                   // example
      |collect
      |audit 
        inc pgood\.product 
      |audit 
        if pgood\.product is 1
          set sbad\.sum to true
      |has not sbad\.sum 
      |audit 
        inc pgood2\.product 
      |has pgood2\.product is 1
      |audit 
        inc sgood\.sum
      |has sgood\.sum is 1
      |thru 'Solution ${key+1}: X=${.x}, Y=${.y}; sum=${.sum}, product=${.product}'


