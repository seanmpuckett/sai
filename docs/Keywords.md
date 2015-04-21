
## Keyword Reference

Uses the following data:

	set fruit to list Apple, Banana, Citron
	
	set friends to:
	   :name 'Sara', age 23, #cat, province 'ON'
	   :name 'John', age 19, #cat, #dog, province 'ON'
	   :name 'Ellie', age 22, province 'QC'
	   :name 'Marshal', age 21, #dog, province 'ON'
	   :name 'Doug', age 18, province 'ON'
	   :name 'Ann', age 23, #cat, province 'QC'
	   :name 'Harry', age 31, province 'QC'
	   :name 'Jenna', age 28, #dog, province 'ON'
	 
	set
	  width 10
	  height 5
	  angle 45o


And these syntactic indicators:

	... - repeating pattern
	A/B/C - alternatives
	() - optional syntax or component
	
	\[block] - an indented block of code
	\[expr] - any expression/value
	\[function] - a function value
	\[identifier] - a variable or method name
	
	Left/right expression - an expression on the left/right side of an operator

### ACCUM

A magic variable active only within a **gather** clause or code block. Represents the static value that accumulates changes during **gather** iteration over a data set.

	debug friends gather into 0
	  set accum + .age

**Accum** is initialized with the value in the **into** clause.


### ALTER

	[expr] alter [expr]
	[expr] alter
	  [block]
	[expr] alter using [function]

A chainable comprehension operator that allows direct reference of the incoming dataset within an expression or code block, using the  **it**  magic variable. 

**Alter** can be used with an expression:

	debug 4 alter 5*it+2 alter it/7 

> 3.142857142857143

**Alter** can use an indented code block:

	debug friends by .age alter
	  set .length to 3

> [ { name: 'Doug', age: 18, province: 'ON' },
>    { name: 'John', age: 19, cat: true, dog: true, province: 'ON' },
>    { name: 'Marshal', age: 21, dog: true, province: 'ON' } ]

_If you don’t specifically **return** a value or object from within an alter code block, the original value will be used (as in the example above). In other words, there is an implicit `return it` at the end of every alter block._

**Alter** supports the **using** clause, in which case the function specified receives the original value as its first parameter, and the return value is passed forward.

	set ExtractFirst to task
	  return $[0]
	debug friends #cat alter using Extract

> \{ name: 'Sara', age: 23, cat: true, province: 'ON' }

_You must specifically return a value in the function called by alter, or `undefined` will be passed forward; there is no implicit return._

### AND

	[expr] and [expr]

Logical and operator. Returns the right expression if both left side and right side expressions evaluate to **truthy**.

	debug 1 and 2

> 2

	debug true and 'Fred'

> Fred


### ANDB

	[expr] andb [expr]

Bitwise and operator. Converts, if possible, both left and right expressions into 32 bit signed integers, and performs a bitwise AND operation on them.

	debug 5 andb 11

> 1


### ARRAY

	array [expr], [expr], ... (;)
	array
	  [expr], [expr], ...
	  [expr]
	  ...
	(array [expr], [expr], ...)

Used to specify the creation of a plain array of mathematical values; e.g. the result of a series of expressions. As opposed to **list**, which is a plain array of bare literals. 

In general, the **colon** structure constructor will figure out what you want, but when you want to be specific about creating an array of expressions, use **array**. Compare with **list**, **fields** and **traits**.

Arrays may be specified on one line:

	debug array 1+1, 2*3, 'Fred'

> [ 2, 6, ‘Fred’ ]

Or multiple lines in the form of an indented block:

	debug array
	  width * ~Math.cos(angle)
	  height * ~Math.sin(angle)

> [  7.0710678118654755, 3.5355339059327373 ]

Or a combination of both:

	debug array
	  1, 1, 2, 5
	  14, 42, 132, 429
	  1430, 4862

When using an array literal in an expression that might make the end of the array a matter of question, use a **semicolon** to close the array literal:

	debug array 5, 3, 2, 7, 4; has it%2

> [ 5, 3, 7 ]

Or enclose the array in parenthesis:

	debug (array  4, 3, 2, 1) by it

> [ 1, 2, 3, 4 ]

Arrays can be nested by use of either parenthesis or semicolons, or by using multiple levels of indent. Note that commas separate expressions on one line but are not included at the end of a line.

	debug array
	  array 1, 2, 3;, array 4, 5, 6
	  array
	    7, 8, 9

> [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


### AS
 
As declares named locally scoped variables within a code block based on values passed into the block.  (In general, **as** is optional because one can usually access such passed-in values through magic variables.)

**As** is used in conjunction with the following SAI keywords: set, task, process, promise, switch, catch, if, exists, with, iterate, each, ply, count, by, thru, audit, gather, has, alter, observe, and within parenthesis as the “parenthetic as”.


#### AS when declaring parameters

	set [ident] (as [ident])
	  [block]
	
	[ident] task (as [ident], [identifer], ...)
	  [block]
	
	[ident] process (as [ident], [ident], ...)
	  [block]
	
	task (as [ident], [identifer], ...)
	  [block]
	
	process (as [ident], [ident], ...)
	  [block]
	
	promise (as [ident], [ident], ...)
	  [block]

An example of parameter naming:

	set tally to blank
	set AddRow to task as item, quantity
	  set tally|item to (self default 0) + quantity
	
	AddRow 'socks', 3
	AddRow 'pants', 6
	
	debug tally 

> \{ socks: 3, pants: 6 }


#### AS when reclaiming values

	switch [expr] (as [ident])
	  [block]
	
	catch (as [ident])
	  [block]
	
	if [expression] (as [ident])
	  [block]
	
	exists [expression] (as [ident])
	  [block]
	
	with [expression] (as [ident]) 
	  [block]

An expression of value reclamation with **as**:

\<\> example needed


#### AS within iterators
 
	iterate [expr] (as [value ident])
	  [block]
	 
	each [expr] (as [value ident] (, [key ident] ) )
	  [block]
	
	ply [expr] (as [value ident] (, [key ident] ) )
	  [block]
	 
	count [expr] (as [key ident])
	  [block]
	 

\<\> example needed


#### AS within comprehensions

	[expr] by (as [first ident], [second ident] )
	  [block]
	 
	[expr] thru (as [value ident] (, [key ident] ) )
	  [block]
	 
	[expr] audit (as [value ident] (, [key ident] ) )
	  [block]
	
	[expr] gather into [expr] (as [accumulator ident] (, [value ident] (, [key identi] ) ) )
	  [block]
	 
	[expr] filter (as [value ident] (, [key ident] ) )
	  [block]
	 
	[expr] alter (as [ident])
	  [block]
	 
	[expr] observe (as [ident])
	  [block] 

\<\> example needed


#### Parenthetic AS

	( [expr] ( as [ident] )

The parenthetic as assigns the value of the parenthesised expression to a named identifier. The assignment happens as soon as the parethesis is evaluated, so you can use the identifier in the same expression as the parenthetical, as long as the parenthetical is evaluated first.

	set six to (1+2 as three)+three
	debug array three, six


### ASCENDING and ASC

	[expr] by [expr] (ascending) 
	[expr] by [expr] (asc)
	[expr] by ascending
	[expr] by asc

Used with the **by** sort comprehension to indicate the sort order should be lowest to highest. **Asc** is an abbreviation for **ascending**. 

Because sort order is by default ascending, this keyword is never truly needed except in the simplest case where sorting by value itself.

	debug list Bob, Carol, Ted, Alice by ascending

> [ 'Alice', 'Bob', 'Carol', 'Ted' ]


### AUDIT

	[expr] audit [expr]
	[expr] audit (as [value ident] (, [key ident]) )
	  [block]
	[expr] audit using [function]

A non-mutating chainable comprehension, audit is used to pass all values in a collection into an expression, code block or method. Audit doesn’t alter the collection, it just ‘pipes’ all values and keys/indices.
 
	set b to chain fruit 
	  observe debug('Pre-sort')
	  audit debug('Fruit #${key} is ${it}') 
	  by desc
	  observe debug('Post-sort')
	  audit debug('Fruit #${key} is ${it}') 
	debug b

> Pre-sort
> Fruit #0 is Apple
> Fruit #1 is Banana
> Fruit #2 is Citron
> Post-sort
> Fruit #0 is Citron
> Fruit #1 is Banana
> Fruit #2 is Apple
> [ 'Citron', 'Banana', 'Apple’ ] 

This example shows how one could add instrumentation to a process in a light-weight fashion.

Neither **observe** nor **audit** alter the chained data. _A side effect of this is that **observe** can’t be used with true iterators as it’s impossible to statically observe an iterator without draining it. _

### BLANK

	blank

The keyword **blank** creates a plain object with no traits. It is the SAI equivalent of Javascript’s `{}`.

	set player to blank
	set player.age to 21
	debug player

> { age: 21 }


### BREAK

	[loop/iterator]
	  [code]
	  break
	 
	switch
	  case [expr]
	    break
	  default
	    break

To exit a loop, iterator or switch case before its natural end, use the **break** keyword. 

	count 5
	  debug it
	  if it=2 
	    debug 'Nevermind...'
	    break

> 1
> 2
> Nevermind…


### BY

	[expr] by [expr] (ASC/ASCENDING/DESC/DESCENDING)
	[expr] by ASC/ASCENDING/DESC/DESCENDING
	[expr] by ( as [first ident], [second ident] )
	  [block]
	[expr] by using [function]

To sort a collection, use the **by** comprehension. 

\<\> example needed


### CASE

	switch [trial expr]
	  case [match expr] (, [match expr] (, ...) )
	    [code]
	  case [match expr]
	    [code]
	  ...

Use one or more **case** clauses within a **switch** statement to specify one or more matching expressions to be tested against with the trial expression.

\<\> example needed


### CATCH

	try
	  [code]
	catch ( as [error ident] )
	  [code]
	finally
	  [code]

The **catch** clause heads a section of code that executes if and only if any code within the **try** clause throws an exception. The exception thrown is caught and placed in the **error** magic variable (or the variable named in the **as** clause).

\<\>


### CHAIN

	chain [expr]
	  [comprehension/method] 
	  [comprehension/method]
	  ...

The **chain** clause allows you to compose (string together) a series of operations that will each be applied in turn to a value, object, collection or iterator.

\<\>


### COPY

	copy [expr]

Use the **copy** unary operator to create a _shallow copy_ of the expression it precedes.  

\<\>


### CONTINUE 

	[iterator/loop]
	  [code]
	  continue

In a loop or otherwise iterating block of code, **continue** short-cuts the remaining code in the block, causing the loop to continue its next iteration immediately.

\<\>


### CONTRACT

CONTRACT = 'contract'i


### COUNT

COUNT = 'count'i


### CREATE

CREATE = 'create'i



### DEC 


### DEFAULT 

### DELETE

### DESCENDING and DESC

### DOWN

### EACH

### ELSE

### EMPTY

### END

### ERROR

### EXISTS


### EXPECTS

### FALSE

### FINALLY

### FIELDS

### FIRST

### FROM

### GET

### GIVEN

### HAS

### HIGHEST

### IF

### INITIALIZED

### INTO

### INC

### INHERIT

### ISNT

### IS

### ITERATE

### IT

### KEYS

### KEY

### LAST

### LIMIT

### LIST

### LOCAL

### LOWEST

### NAND

### NEW

### NOR

### NOT

### NOTB

### NUMBER

### OBJECT

### OBSERVE

### ORPHAN

	orphan

Compiles to `@=this` which in effect detaches a function defined within an object-owned function from that object. It causes the @ scoping prefix within the function to refer to the context of the function call instead of the context of the function definition.

### OR

### ORB

### OVERLAY

### TRUE

### PLY

### PROMISE

### PROCESS

### REAP

### RESOLVE

### REJECT

### REFERENCE

### RETURN

### SELECT

### SELF

### SET

### SOW

### SUPER

### SWITCH

### TASK

### THROW

### THRU

### TRAITS

### TRIAL

### TRY

### TO

### TYPEOF

### UNLESS

### UNDEFINED

### UPDATE

### USING

### VALUES

### VIA

### WHILE

### WITH

### XOR

### XORB

### YIELD

### YIELDING

### Mathematical Operators

\+ - \* / %
?\> ?\< 
\<=\>

\>\>\> \>\> \<\<
andb orb xorb

### Logical Operators

not
and
or
nand
nor
xor

### 

### Unary Operators