
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

	.. - elided code
	... - repeating pattern
	A/B/C - alternatives
	() - optional syntax or component
	
	\[block] - an indented block of code
	\[expr] - any expression/value
	\[function] - a function value
	\[identifier] - a variable or method name
	
	Left/right expression - an expression on the left/right side of an operator


And these types:

**Clause** - a component of a larger construct

** Comprehension** - a special class of operator intended for use with collections.

**Declaration** - describes or defines behaviour

**Literal** - declares a value or collection of values

**Magic variable** - an identifier that holds system-provided data

**Operator** - a process that produces a new, likely modified value while leaving the original value(s) unchanged

**Scoping Prefix** - symbol used at the beginning of a variable name to specifiy context.

**Statement** - a unit of code, occuping one or more lines, that performs some useful action

**Verb** - a function reference that may be used as a statement or in an expression as a computation returning a value


### != (not equal) _operator_

### ‘ and “ (string)_literal_

### ‘’’ (multi-line string) _literal_

### \# (hashtag) _literal_ / _comprehension_

### $ (parameter) _scoping prefix_

### $\{ \} (literal compose) _modifier_

### % (modulo) _operator_

### \* (multiply) _operator_

### \*\* (exponent) _operator_

### + (plus) _operator_

### - (minus) _operator_

### . (it) _scoping prefix_

### \/ (divide) _operator_

### \: (begin structure) _literal_ / _clause_

### \; (end structure) _literal_

### \< (less than) _operator_

### \<= (less or equal) _operator_

### \<=\> (compare) _operator_

### \= (equal) _operator_

### \> (greater than) _operator_

### \>= (greater or equal) _operator_

### ?\< (minimum) _operator_

### ?\> (maximum) _operator_

### ?? :: (if/this/that) _operator_

### @ (object) _scoping prefix_

### ACCUM _magic variable_

A magic variable active only within a **into** clause or code block. Represents the static value that accumulates changes during **into** iteration over a data set.

	debug friends into 0
	  set accum + .age

**Accum** is initialized with the value following **into**.


### ALTER _operator_

	.. [expr] alter [expr]
	.. [expr] alter
	  [block]
	.. [expr] alter using [function]

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
	
	> { name: 'Sara', age: 23, cat: true, province: 'ON' }

_You must specifically return a value in the function called by alter, or `undefined` will be passed forward; there is no implicit return._


### AND _operator_

	.. [expr] and [expr]

Logical and operator. If the left expression evaluates to **falsy**, returns it, otherwise returns the right expression.

	debug 1 and 0     // prints '0'
	debug 1 and false // prints 'false'
	debug 0 and 1     // prints '0'
	debug false and 1 // prints 'false'
	debug 1 and 1     // prints '1'
	
	debug true and 'Fred'
	> Fred


### ANDB _operator_

	.. [expr] andb [expr]

Bitwise and operator. Converts, if possible, both left and right expressions into 32 bit signed integers, and performs a bitwise AND operation on them.

	debug 5 andb 11
	
	> 1
	 
	//  5 in binary: 00000000000000000000000000000101
	// 11 in binary: 00000000000000000000000000001011
	//  1 in binary: 00000000000000000000000000000001


### ARRAY _literal_

	.. array [expr], [expr], ... (;)
	.. array
	  [expr], [expr], ...
	  [expr]
	  ...

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


### AS _clause_
 
As declares named locally scoped variables within a code block based on values passed into the block.  (In general, **as** is optional because one can usually access such passed-in values through magic variables.)

**As** is used in conjunction with the following SAI keywords: set, task, process, promise, switch, catch, if, exists, with, iterate, each, ply, count, by, thru, audit, gather, has, alter, observe, and within parenthesis as the “parenthetic as”.


#### AS (parameters)

	set [ident] (as [ident])
	  [block] // n.b. omitted below to conserve space)
	
	[ident] task (as [ident], [identifer], ...)
	[ident] process (as [ident], [ident], ...)
	task (as [ident], [identifer], ...)
	process (as [ident], [ident], ...)
	promise (as [ident], [ident], ...)

An example of parameter naming:

	set tally to blank
	set AddRow to task as item, quantity
	  set tally|item to (self default 0) + quantity
	
	AddRow 'socks', 3
	AddRow 'pants', 6
	debug tally 
	
	> { socks: 3, pants: 6 }


#### AS (value reclaimation)

	switch [expr] (as [ident]) 
	catch (as [ident])
	if [expression] (as [ident])
	exists [expression] (as [ident])
	with [expression] (as [ident]) 

An of value reclamation with **as**:

\<\> example needed


#### AS (iterators)
 
	iterate [expr] (as [value ident])
	each [expr] (as [value ident] (, [key ident] ) )
	ply [expr] (as [value ident] (, [key ident] ) )
	count [expr] (as [key ident])

\<\> example needed


#### AS (comprehensions)

	[expr] by (as [first ident], [second ident] )
	[expr] thru (as [value ident] (, [key ident] ) )
	[expr] audit (as [value ident] (, [key ident] ) )
	[expr] into [expr] (as [accum ident] (, [value ident] (, [key ident] ) ) )
	[expr] filter (as [value ident] (, [key ident] ) )
	[expr] alter (as [ident])
	[expr] observe (as [ident])

\<\> example needed


#### AS (parenthetic)
 
	( [expr] ( as [ident] )

The parenthetic as assigns the value of the parenthesised expression to a named identifier. The assignment happens as soon as the parethesis is evaluated, so you can use the identifier in the same expression as the parenthetical, as long as the parenthetical is evaluated first.

	set six to (1+2 as three)+three
	debug array three, six


### ASCENDING and ASC _modifier_

	.. [expr] by [expr] (ascending) 
	.. [expr] by [expr] (asc)
	.. [expr] by ascending
	.. [expr] by asc

Used with the **by** sort comprehension to indicate the sort order should be lowest to highest. **Asc** is an abbreviation for **ascending**. 

Because sort order is by default ascending, this keyword is never truly needed except in the simplest case where sorting by value itself.

	debug list Bob, Carol, Ted, Alice by ascending

> [ 'Alice', 'Bob', 'Carol', 'Ted' ]


### AUDIT _comprehension_

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

### BLANK _literal_

	.. blank

The keyword **blank** creates a plain object with no traits. It is the SAI equivalent of Javascript’s `{}`.

	set player to blank
	set player.age to 21
	debug player
	 
	> { age: 21 }


### BREAK _statement_

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


### BY _comprehension

	[expr] by [expr] (ASC/ASCENDING/DESC/DESCENDING)
	[expr] by ASC/ASCENDING/DESC/DESCENDING
	[expr] by ( as [first ident], [second ident] )
	  [block]
	[expr] by using [function]

To create sorted array, use **by**. The newly resulting array will be sorted by the specified inline expression or code block. (**By** does not sort in-place; it always returns a new array.)


#### BY (inline)

When you use the inline expression form, the provided expression is used to extract a value from a single record, which is then compared against other records to determine the sort order.

The **it** magic variable and its **dot** scoping prefix are available within the expression.

Print a list of friends sorted alphabetically by name:

	set result to friends by .name
	
	debug (result thru .name).join(', ')
	
	> Ann, Doug, Ellie, Harry, Jenna, John, Marshal, Sara 

You may sort by more than one value by adding another **by** clause. Multiple sort clauses are handled the way a database would: if a clause provides no guidance (the values are identical), subsequent clauses are each checked in turn.

Print sorted by length of name, then age:

	set result to friends by .name.length by .age
	
	debug (result thru '${.name}: ${.age}').join('\n')
	 
	> Ann: 23
	> Doug: 18
	> John: 19
	> Sara: 23
	> Ellie: 22
	> Jenna: 28
	> Harry: 31
	> Marshal: 21


#### BY (block)

When using **by** with a block of code, the magic variables change. You are given both records under consideration just as you would using the Javascript `.sort` method. And perhaps unsurprisingly to those who have ever seen a programming textbook, the magic variables are the letters **a** and **b**.

Print a sorted list of ages by province:

	set result to friends by
	  return a.province <=> b.province or a.age <=> b.age
	 
	debug (result thru '${.name}: ${.province}, ${.age}').join('\n')
	
	> Doug: ON, 18
	> John: ON, 19
	> Marshal: ON, 21
	> Sara: ON, 23
	> Jenna: ON, 28
	> Ellie: QC, 22
	> Ann: QC, 23
	> Harry: QC, 31


#### BY USING

If you’ll recall, **has using** provides the ability to use a named function for your sorting facilitator, and **by using** allows the same thing.

Calculate list of ages by province (using named task)** 
	set ProvinceAge to task as a, b
	 return a.province <=> b.province or a.age <=> b.age
	
	set result to friends by using ProvinceAge
	
	// same result as previous example


### CASE _clause_

	switch [trial expr]
	  case [match expr] (, [match expr] (, ...) )
	    [code]
	  case [match expr]
	    [code]
	  default
	    [code]
	  ...

Use one or more **case** clauses within a **switch** statement to specify one or more matching expressions to be tested against with the trial expression. 

	switch keystroke
	  case 'n', 'N'
	    @move: x 0, y -1
	  case 'e', 'E'
	    @move: x 1, y 0
	  case 'w', 'W'
	    @move: x -1, y 0
	  case 's', 'S'
	    @move: x 0, y 1
	  case ' '
	    @skipturn
	  default
	    @display 'Use n/e/s/w to move, space to pause.' 

Unlike Javascript, execution within a **case** statement does not fall through to the next case, so you don’t need to add **break** at the end of a code block.


### CATCH _clause_

	try
	  [code]
	catch ( as [error ident] )
	  [code]
	finally
	  [code]

The **catch** clause heads a section of code that executes if and only if any code within the **try** clause throws an exception. The exception thrown is caught and placed in the **error** magic variable (or the variable named in the **as** clause).

\<\>


### CHAIN _operator_

	.. chain [expr]
	  [comprehension/method] 
	  [comprehension/method]
	  ...

The **chain** clause allows you to compose (string together) a series of operations that will each be applied in turn to a value, object, collection or iterator.

\<\>


### COPY _operator_

	.. copy [expr]

Use the **copy** unary operator to create a _shallow copy_ of the expression it precedes.  

\<\>


### CONTINUE _statement_

	[iterator/loop]
	  [code]
	  continue

In a loop or otherwise iterating block of code, **continue** short-cuts the remaining code in the block, causing the loop to continue its next iteration immediately.

\<\>


### CONTRACT _declaration_

	contract:
	  [task/trait name]
	  [task/trait name]
	  ...

When defining an object, **contract** is used to specify tasks or traits that _children_ inheriting from this object are intended to implement. 

Inheriting from an object that has contracts, and then not providing implementations for those contracts, will result in a SAI exception.

	object fruit
	contract:
	  Consume
	
	object apple
	inherit:
	 fruit
	Consume task
	  debug 'You ate an apple.'
	
	object pear
	inherit:
	  fruit

> exception thrown: “SAI: Contractually required task ‘Consume’ does not exist in object ‘pear’.”
 

### COUNT _statement_

	count [high expr] ( as [key ident] )
	  [block]
	( none 
	  [none block] )
	
	// variants
	count [low expr] to [high expr] ( as [key ident] )
	count down [high expr] ( as [key ident] )
	count down [high expr] to [low expr] ( as [key ident])

Specifically designed as an integer iterator for list elements, **count** always counts 1 at a time, and its highest value is always 1 less than the high value provided (both when counting up and down).

	count 10
	  debug it
	
	( prints numbers from 0 to 9 )
	
	count 5 to 10
	> 5 to 14
	
	count down 10
	> 9 to 0
	
	count down 25 to 15
	> 24 to 15
	
	count aList.length
	  debug 'List element ${key} is ${aList|key}'
	else
	  debug 'The list is empty.'

The optional **else** clause is executed instead of the main block if the **count** range length computes to 0 (or less). 


### CREATE _operator_

CREATE = 'create'i

\<\>

### DEBUG _verb_

### DEC _statement_

	dec [var]

Decrements (reduces by 1) the value in the given variable.

	set a to 2
	dec a
	debug a
	
	> 1


### DEFAULT _operator_

	... [expr] default [expr]

If and only if the left expression evaluates to `undefined`, returns the right expression, otherwise returns the left expression.

Like **or** except instead of checking for _truthy_ tests to see if a value is available. Most useful in expressions where you’re not sure if a variable is initialized.

	set 
	  magnitude to undefined
	  angle to 60o
	debug (magnitude default 1) * ~Math.cos(angle)
	 
	> 0.5


### DELETE

\<\>


### DESCENDING and DESC

	.. [expr] by [expr] (descending) 
	.. [expr] by [expr] (desc)
	.. [expr] by descending
	.. [expr] by desc

Used with the **by** comprehension just like **ascending/asc** but the sort order will be highest to lowest.

	debug list Bob, Carol, Ted, Alice by desc
	 
	> [ 'Ted', 'Carol', 'Bob', 'Alice' ]

See also: **by**


### DOWN _modifier_

	count down [start]
	count down [start] to [stop]

Used only with **count**; signifies the count is to proceed by _decrementing_ the key. The first key value is the start value minus one, and the last key value is the stop value, or zero.

	count down 5
	  debug it
	 
	> 4
	> 3
	> 2
	> 1
	> 0

See also: **count**


### EACH

### ELSE _clause_

	if [expr] 
	/ unless [expr]
	/ exists [expr]
	/ each [expr]
	/ ply [expr]
	/ iterate [expr]
	/ count [expr]
	  [block]
	else
	  [block]

Specifies a block of code that will be executed if the condition leading to the previous block fails. Can be used with conditional statements **if/unless/exists** as well as iterating loops **each/ply/iterate/count**.

	if b
	  debug 'b is truthy'
	else
	  debug 'b is falsy'

	each obj
	  debug '${key}: ${it}'
	else
	  debug 'No traits.'
 

### EMPTY _literal_

	.. empty

A literal value indicating an empty list/array. The equivalent of Javascript’s `[]`, **empty** creates an Array with no elements.


### ERROR _magic variable_

	.. error

Valid only within the **catch** exception handler clause of a **try/catch/finally** construct. Receives the exception thrown.

	try
	  noFunction
	catch
	  debug error
	 
	> [TypeError: undefined is not a function]

You can override this behaviour by using an **as** clause with the **catch** statement:

	try
	  noFunction
	catch as e
	  debug e
	 
	> [TypeError: undefined is not a function]


### EXISTS



### EXPECTS _clause_ / _operator_

	.. task expects [$name] ([type]), ...
	.. [expr] expects [traits expr]

Used to check whether a function’s named parameters (or any arbitrary object) has traits, and optionally if those traits are of a particular type.

\<\>


### FALSE _literal_

	.. false

The boolean value **false**.


### FINALLY

	try 
	  [block]
	catch ( as [error ident])
	  [block]
	finally
	  [block]

An exception handling clause identifying a block of code that is executed whether or not an exception occurs. (Even executes if you re-**throw** an exception within the **catch** clause.)



### FIELDS _literal_

	.. fields [key] [expr], [key] [expr], ... (;)
	.. fields 
	  [key] [expr], [key] [expr], ...
	  [key] [expr]
	  ...

Used to specify the creation of a plain object with a set of key/value pairs. (Contrast with **traits**.)  In general, the **colon** structure constructor will figure out what you want, but when you want to be specific about creating a plain object with of keyed values & expressions, use **fields**. Compare with **list**, **array** and **traits**.

The **key** is an identifying word or other string, specified without quotes (although quotes may be used if desired/necessary). If a **\\#** preceeds the key (a hashtag), the key will be assigned a value of **true**. The **expr** is any valid literal, variable, object or expression.

Fields may be specified on one line:

	fields name 'Sera', class 'Rogue', level 21, #focus
	
	> { class: 'Rogue', level: 21, name: 'Sera', focus: true }

Or multiple lines in the form of an indented block:

	fields
	  x width * ~Math.cos(angle)
	  y height * ~Math.sin(angle)
	
	> { x: 0.5, y: 0.866 }

Or a combination of both:

	fields
	  str 16, dex 34, mag 14
	  con 42, wil 21, cun 45
	 
	> { str: 16, dex: 34, mag: 14, con: 42, wil: 21, cun: 45 }

When using a fields literal in an expression that might make the end of the literal a matter of question, use a **semicolon** to close the literal, or enclose it in parenthesis:

	fields x 5, y 4, z 3; thru it*2
	(fields x 5, y 4, z 3) thru it *2
	
	> { x: 10, y: 8, z: 6 }

Fields initializers can be nested by use of either parenthesis or semicolons, or by using multiple levels of indent.


### FIRST _comprehension_

	.. [expr] first

Returns the first value in a list or iterator.

	debug fruit first
	> Apple


### FROM _operator_

### GET _declaration_

### GIVEN _declaration_

### HAS _comprehension_

### HIGHEST _comprehension_

### IF _statement_

### INITIALIZED _operator_

### INTO _modifier_

### INC _statement_

### INHERIT _declaration_

### ISNT _operator_

### IS _operator_

### ITERATE _statement_

### IT _magic variable_

### KEYS _operator_ / _comprehension_

### KEY _magic variable_

### LAST _comprehension_

### LIMIT _comprehension_

### LIST _literal_

### LOCAL _declaration_

### LOWEST _comprehension_

### NAND _operator_

	.. [expr] nand [expr]

Performs the logical not-and operation. Returns **false** only if left or right expression are both _truthy_. Otherwise returns **true**.  

A semantic simplification of `not ([expr] and [expr])`.

	debug 0 nand 0 // prints 'true'
	debug 1 nand 0 // prints 'true'
	debug 0 nand 1 // prints 'true'
	debug 1 nand 1 // prints 'false'


### NEW _operator_


### NOR _operator_

	.. [expr] nor [expr]

Performs the logical not-or operation. Returns **true** only if left or right expression are both _falsy_. Otherwise returns **false**.

A semantic simplification of `not ([expr] or [expr])`.

	debug 0 nor 0 // prints 'true'
	debug 1 nor 0 // prints 'false'
	debug 0 nor 1 // prints 'false'
	debug 1 nor 1 // prints 'false'


### NOT _operator_

	.. not [expr]

Performs the logical not operation. Returns **false** if the right expression is _truthy_, otherwise returns **true**.

	debug not false  // prints 'true'
	debug not 0      // prints 'true'
	debug not 'Sam' // prints 'false'
	debug not empty  // prints 'false'


### NOTB _operator_

	.. notb [expr]

Performs a bitwise logical not on a 32-bit signed integer.

	debug notb -8  // prints '7'
	
	 -8 in binary: 11111111111111111111111111111000
	 +7 in binary: 00000000000000000000000000000111


### NUMBER _operator_

	.. number [expr]

Attempts to convert the following expression into a numeric value. If it cannot, the result is 0.

	debug number '12'
	debug number 'ralph'
	> 12
	> 0


### OBJECT _declaration_


### OBSERVE _operator_

	.. [expr] observe [expr]
	.. [expr] observe ( as [value ident] )
	  [block]
	.. [expr] observe using [function]

Evaluates the right expression using the left expression value as the **it** magic variable; however, **observe** always returns the original left hand expression, no matter the result of the right expression.

	set b to 'Fred'
	set c to b observe debug '${it.length} letters.'
	debug c

> 4 letters.
> Fred

N.B. useful in **chain** expressions.


### ORPHAN _declaration_

	.. task
	  orphan

Compiles to `@=this` which in effect detaches a function defined within an object-owned function from that object. It causes the @ scoping prefix within the function to refer to the context of the function call instead of the context of the function definition.

\<\>


### OR _operator_

	[expr] or [expr]

If the left expression is **truthy**, returns it without executing the right expression, otherwise returns the right expression.

	debug 0 or 0  // prints '0'
	debug 1 or 0  // prints '1'
	debug 0 or 2  // prints '2'
	debug 1 or 2  // prints '1'


### ORB _operator_

	[expr] orb [expr]

Performs a bitwise or on two 32-bit integers.

	debug 5 orb 11 // prints '15'
	 
	 5 in binary: 00000000000000000000000000000101
	11 in binary: 00000000000000000000000000001011
	15 in binary: 00000000000000000000000000001111


### OVERLAY _operator_

### TRUE _literal_

	.. true

The boolean value true.


### PLY _statement_

### PROMISE _declaration_

### PROCESS _declaration_

### REAP _comprehension_

### REQUIRE _verb_

### RESOLVE _statement_

### REJECT _statement_

### REFERENCE _declaration_

### RETURN _statement_

### SELECT _statement_

### SELF _magic variable_

### SET _declaration_

### SET _statement_

### SOW _comprehension_

### SUPER _verb_

### SWITCH _statement_

### TASK _declaration_

### THROW _verb_

### THRU _comprehension_

### TRAITS _literal_

### TRIAL _magic variable_

### TRY _statement_

### TO _clause_

### TYPEOF _operator_

### UNLESS _statement_

### UNDEFINED _literal_

### UPDATE _operator_

### USING _clause_

### VALUES _operator_ / _compherension_

### VIA _operator_

### WHILE _statement_

### WITH _statement_

### XOR _operator_

	.. [expr] xor [expr]

If both expressions are _truthy_, or both expressions are _falsy_, return `false`. Otherwise return the expression that is _truthy_.

	debug 'Fred' xor 'Daphne'
	debug 'Shaggy' xor 0
	debug 0 xor 'Scooby'
	debug 0 xor 0
	
	> false
	> Shaggy
	> Scooby
	> false


### XORB _operator_

	.. [expr] xorb [expr]

Performs a bitwise XOR operation on two 32-bit integers.

	debug 3 xorb 6 // prints '5'
	
	3 binary: 00000000000000000000000000000011
	6 binary: 00000000000000000000000000000110
	5 binary: 00000000000000000000000000000101


### YIELD _verb_

### YIELDING _verb_

