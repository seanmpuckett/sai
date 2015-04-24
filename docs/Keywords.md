
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

**Mvar** - (magic variable) an identifier that holds context-specific data

**Operator** - a process that produces a new, likely modified value while leaving the original value(s) unchanged

**Scoping Prefix** - symbol used at the beginning of a variable to specifiy context.

**Statement** - a unit of code, occuping one or more lines, that performs some useful action

**Verb** - a function reference that may be used as a statement or in an expression as a computation returning a value


### != (not equal) _operator_

	.. [expr] != [expr]

Compares two values for value equality; returns **true** if the values appear to be the same, **false** otherwise.

\<\>

### ‘ and “ (string)_literal_

	.. 'Type your string literal here.'
	.. 'Use a backslash to escape \' and \" and \\ in your strings.'
	.. "Double quote is semantically identical to single quote."

Declare a literal string.

\<\>


### ‘’’ (multi-line string) _literal_

	.. '''
	  Now you can type as much text as you want,
	  with any characters you want, though you must
	  remember that leading and trailing whitespace 
	  will be stripped.
	
	  The string goes on as long as the indention does.
	  Empty newlines will be folded away.
	
	  And you can include compositions as well.

Declare a multi-line string ideal for embedding longer passages of markup.

\<\>


### \# (hashtag) _literal_ / _comprehension_

As a literal:

	.. traits #[tagname]
	.. fields #[tagname]

As a comprehension:

	.. [collection] #[tagname]

\<\>


### $ (parameter) _scoping prefix_

	.. $
	.. $[attribute]

When by itself, the first parameter a function was called with. With an attribute, that attribute of the first parameter in a function.

\<\>

### $$ (arguments) _mvar_

	.. $$

Equivalent to Javascript’s `arguments` and can be used the same way.

\<\>


### $\{ \} (string compose) _modifier_

	.. 'String literal ${ [expr] } continues.'
	.. "String literal ${ [expr] } continues."
	.. `String literal ${ [expr] } continues.
	.. '''
	  String literal ${ [expr] } continues.

Allows the insertion of any arbitrary expression in the middle of a string literal of any type.  Use `\${` to represent `${` in a string literal. 

\<\>


### % (modulo) _operator_

	.. [expr] % [expr]

Calculates the mathematical **modulus**; returns the remainder of the left expression divided by the right.

\<\>


### \* (multiply) _operator_

	.. [expr] * [expr]

Multiplies the two expressions.

\<\>


### \*\* (exponent) _operator_

	.. [lexpr] ** [rexpr]

Calculates an exponent; equivalent to `Math.pow([lexpr],[rexpr])`.

\<\>


### + (plus) _operator_

	.. [expr] + [expr]

Adds two numbers OR concatenates two strings.  If the first expression is numeric, tries to add. Otherwise, concatenates.

\<\>


### - (minus) _operator_

	.. [expr] - [expr]
	.. - [expr]

Subtracts one value from another, or when used without a value on the left, negates the value on the right.

### . (attribute) _syntax_

	.. [value].[attribute]
	.. .[attribute]
	
	[value].[attribute]
	.[attribute]

Looks up the trait named _attribute_ in the value. 

When used without a leading value, references the named attribute in the **it** magic variable.

\<\>


### \/ (divide) _operator_

	.. [expr] / [expr]

Divides one number by another.

\<\>


### \// (comment) _syntax_

	// any text goes here, is ignored

Format of comments in SAI source files.


### \: (declare structure) _literal_ / _clause_


	
\<\>

### \; (end structure) _literal_

	.. [structure definition] ;

Optional, closes the current structure definition when needed for clarity.

\<\>


### \< (less than) _operator_

	.. [lexpr] < [rexpr]

Evaluates **true** if lexpr is numerically lower than rexpr, **false** otherwise.

\<\>


### \<= (less or equal) _operator_

	.. [lexpr] <= [rexpr]

Evaluates to **true** if lexpr is numerically lower or equal to rexpr, **false** otherwise.

\<\>


### \<=\> (compare) _operator_

	.. [lexpr] <=> [rexpr]

Evaluates to **-1** if lexpr is lower than rexpr, **1** if it is greater, and **0** if they are equal.

\<\>


### \= (equal) _operator_

	.. [lexpr] = [rexpr]

Evaluates to **true** if the two expressions are equal. Not to be used when comparing with `undefined`, `null` or `NaN`.

\<\>


### \> (greater than) _operator_

	.. [lexpr] > [rexpr]

Evaluates to **true** if lexpr is numerically greater than rexpr, **false** otherwise.

\<\>


### \>= (greater or equal) _operator_

	.. [lexpr] <= [rexpr]

Evaluates to **true** if lexpr is numerically greater or equal to rexpr, **false** otherwise.

\<\>


### ?\< (minimum) _operator_

	.. [lexpr] ?< [rexpr]

Evaluates to whichever expression is numerically lowest.

\<\>


### ?\> (maximum) _operator_

	.. [lexpr] ?> [rexpr]

Evaluates to whichever expression is numerically highest.

\<\>


### ?? :: (if/this/that) _operator_

	.. [expr] ?? [expr1] :: [expr2]

Evaluates to expr1 if the left expression is _truthy_, otherwise evaluates to expr2.

\<\>


### [ ] (lookup) _syntax_

	.. [value] \[ [expr] \]

Performs an indirect lookup of a trait/element in the given value.

\<\>


### @ (object) _scoping prefix_

	.. @
	.. @attribute 
	@Attribute

Reference a trait or method attached to the current object. Equivalent to Javascript’s `this.`.

\<\>


### \` (full line string) _literal_

	.. `Type as much stuff as you want here with any character except EOL.

Signifies the start of a string literal that will occupy the rest of the source code line.

\<\>


### | (lookup) _syntax_

	.. [value]|[value]
	.. |[value]

A cleaner way of doing indirect lookups when only using a single value or variable. Without a leading identifier, refers to the **it** value.

\<\>


### ACCUM _magic variable_

A magic variable active only within a **into** clause or code block. Represents the static value that accumulates changes during **into** iteration over a data set.

	debug friends into 0
	  set accum + .age

**Accum** is initialized with the value following **into**.

\<\>


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


### BY \_comprehension

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

Calculate list of ages by province (using named task)\*\* 
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

	.. create [object name]

Creates a SAI object by name. Will attempt to find the object’s source by using a lookup function.

\<\>


### DEBUG _verb_

	debug [expr]

Prints the value of the expression to the console.

\<\>


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

	delete [variable]
	set [variable] delete
	set [variable] delete [attribute(s)]

Undefines the named variable or attribute(s) of a variable.

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

	each [collection] ( as [it ident] ( , [key ident] )
	  [code block]
	each [collection] using [function]

Enumerates through each element of the collection, in arbitrary order, setting **it** and **key** variables, and executing the code block for each one.

\<\>


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

	exists [expr] ( as [it ident] )
	  [code]
	else 
	  [code]

Executes the indented code if the expression is a defined value, e.g. if it is not **undefined**.  The tested value will be available as **it** within the scope of the code block.  (This is different from the _truthy_ testing **if**, which uses **trial**.)

\<\>


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

The **key** is an identifying word or other string, specified without quotes (although quotes may be used if desired/necessary). If a **\\\\#** preceeds the key (a hashtag), the key will be assigned a value of **true**. The **expr** is any valid literal, variable, object or expression.

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

	.. from [identifier] ([parameters]) (;)

**From** invokes the identifier as a function call that returns a value, passing in any parameters that follow.  It is the preferred syntax for function calls in **set** statements.

The following pairs are synonymous:

	set record from cursor.FetchRow
	set record to cursor.FetchRow()
	
	set cursor from db.Query 'select * from names'
	set cursor to db.Query('select * from names')

**From** is the encouraged form because it allows a more natural reading of source code, indicating that the identifier that follows will be used as a verb and returning a value.

When calling a function as a verb without a value, **from** is not needed.

	set cursor from db.Query 'select * from names'
	set records from cursor.FetchAll
	cursor.Close


### GET _declaration_

	object [name] [version]
	
	[ident] get 
	  [code]
	  return [value]
	( set ( as [ident] )
	  [code]

Declares a _getter_ for a dynamic object trait; that is, a trait that has a value that is only calculated upon request. 

	object Vector2 1.0.0
	
	magnitude get // dynamic getter for 'magnitude' trait
	  return from ~Math.sqrt (@x * @x) + (@y * @y)
	set as m // dynamic setter for 'magnitude' trait
	  set a to @angle
	  set @x to m * ~Math.cos(a)
	  set @y to m * ~Math.sin(a)


### GIVEN _declaration_

	given [identifier] [expr]
	given [structural expr]

Defines immutable traits when declaring an object.

\<\>


### HAS _comprehension_

	.. [collection] has [expr]
	.. [collection] has
	  [block]
	.. [collection] has using [function]

The comprehension operator **has** indicates an expression based filter using the **it** _magical value_ to represent the item currently under examination. Since **it** is in play, the associated **dot** scoping prefix is also active within the expression for easy access to item fields. 

#### HAS (inline)

	debug friends has (.province = 'QC') and (.cat or .dog)
	
	> [ { name: 'Ann', age: 23, cat: true, province: 'QC' } ]
 
Any valid expression can be used in a **has** comprehension, and one can refer to values outside the expression as well.

	    set rentAge to: ON 25, QC 21
	debug friends has .age >= rentAge[.province]
	
	> [ { name: 'Ellie', age: 22, province: 'QC' },
	>   { name: 'Ann', age: 23, cat: true, province: 'QC' },
	>   { name: 'Harry', age: 31, province: 'QC' },
	>   { name: 'Jenna', age: 28, dog: true, province: 'ON' } ]
 
 
#### HAS (block)

Keyword **has** can reference a block of code directly, which makes the **it** magic value available within that block, or be given the name of a task (or a task definition). You must **return** a _truthy_ (keep) or _falsy_ (discard) value from the block so the filter can take the according action. If you don’t return a value, all rows will be discarded.

	    friends has
	      return .age >= rentAge[.province]

#### HAS USING

You can integrate function calls into a composed comprehension by adding the **using** keyword immediately following the comprehension keyword itself.

	    set CanRent to task as row
	      return row.age >= rentAge[row.province]
	debug friends has using CanRent


### HIGHEST _comprehension_

	.. [collection] highest [expr]

Returns the collection element with the highest value of the expression. Prepares the magic variables **it** and **key** for use by the expression.

	debug friends highest .age
	
	> { name: 'Harry', age: 31, province: 'QC' }


### IF _statement_

	if [expr] ( as [ident] )
	  [code]
	( else if [expr] ( as [ident] )
	  [code] )
	( else
	  [code] )

If the expression is _truthy_, the code directly after the **if** is executed then exit the statement. Otherwise, perform additional tests if specified by any **else if** or **else unless** clauses, or failing those, perform the code after the optional **else** clause.

What is _truthy_?  Any value which is not _falsy_.  See [http://www.sitepoint.com/javascript-truthy-falsy/][1] for specifics; excerpted here.

_Falsy_ values are: `false`, `0` (zero), `""` (empty string), `null`, `undefined`, and `NaN` (not-a-number).  Everything else is _truthy_.  

The value used in the test of the **if** is available in the _magic variable_ **trial**, which can be reassigned using an **as** clause.

	if names|pk
	  debug trial // prints the contents of names|pk
	
	if names|pk as row
	  debug row // prints the contents of names|pk


### INITIALIZED _operator_

	.. [var] initialized [expr]

If the variable on the left is **undefined**, stores the value on the right to it. Then returns the value of the variable.

	debug friends into blank
	  (accum|.province initialized empty).push .name
	
	{ ON: [ 'Sara', 'John', 'Marshal', 'Doug', 'Jenna' ],
	  QC: [ 'Ellie', 'Ann', 'Harry' ] }


### INTO _comprehension_

	.. into [initial accumulator value] [expr]
	.. into [initial accumulator value]
	  [code block]
	.. into [initial accumulator value] using [function]

Javascript features the array method `Array.prototype.reduce` which performs the reduction function, and SAI extends its applicability with the **into** compherension keyword.

In addition to the item (**it**) and the item key (**key**) available in other comprehensions, an accumulator variable (**accum**) is used when evaluating **into** expressions. The value of the expression becomes the value of **accum** the next time the expression is evaluated.

#### INTO (inline)

The **accum** variable is initialized by the value following **into** — in the example below `0` — and then each row in the collection is visited and we add `.age` to it. This adds up the ages of every friend.

	debug friends into 0 accum + .age
	
	> 185

#### INTO (block)

The **into** comprehension, like other comprehensions, has an inline version with an expression, and a long-form which takes a block of code.

A more complex example.  See if you can suss out how it works.

	    debug friends into blank
	  set accum[.province] to (self default 0) + 1
	
	> { ON: 5, QC: 3 }

Here’s a hint: **self** is a _magic variable_ used only in **set** statements. It is initialized to the previous value of the variable being changed by **set**. 

Another hint: **default** is an operator that evaluates to its right hand value if and only if the left hand value is _undefined_.

Last hint: **blank** initializes an object with no traits; it is the SAI equivalent of Javascript’s `{}`.  The comparable word for arrays/lists with no elements is **empty**; in Javascript you’d write `[]`.

#### INTO USING

The addition of **using** lets you call an external function.  The function must always `return` the value you wish to be used as the accumulator so the value can be preserved across function calls.  (The block version of **into** takes care of this for you.)

	    set ageTotal to task as accumulator, row
	      return accumulator + row.age
	debug friends into 0 using ageTotal 
	
	> 185


### INC _statement_

	inc [var]

Increments (adds 1 to) the given variable.

	set a to 1
	inc a
	debug a
	
	> 2


### INHERIT _declaration_

	inherit:
	  [classname]
	  ...

Specify inheritance during object definition.

\<\>


### ISNT _operator_

	.. [expr] isnt [expr]

Returns **true** if the two expressions are in any way distinguishable. More rigorous than **!=** when objects are of differing types.

	debug 1 != true
	debug 1 isnt true
	
	> false
	> true


### IS _operator_

	.. [expr] is [expr]

Returns **true** if the two expressions are completely indistinguishable.  More rigorous than **=** when objects differ in type.

	debug 0 = false
	debug 0 is false
	
	> true
	> false


### ITERATE \_statement

	iterate [iterable expression] (as [term ident])
	  [block]


### IT _magic variable_

	.. it

_Magic variables_ have values when provided by the system during certain code events. **It** is the most commonly used mvar, populated by all most iterators and comprehensions, as well as the **exists** conditional and **with** contextualizer.

The **it** variable is only available in attached expressions or code blocks, not in any functions that may be called within those expressions.

A complete list of **it** enabled events:

	exists [expr] // it: expr
	with [expr] // it: expr
	
	iterate [iterable] // it: each iterated value
	each [collection] // it: each value in the collection
	ply [list] // it: each element in the array
	
	.. [expr] alter // it: the expression
	.. [expr] observe // it: the expression
	
	.. [collection] thru // it: each value in the collection
	.. [collection] audit // it: each value in the collection
	.. [collection] into // it: each value in the collection
	.. [collection] has // it: each value in the collection
	.. [collection] highest // it: each value in the collection
	.. [collection] lowest // it: each value in the collection

When nesting contexts that create a **it** context, you will be unable to access “outer” values of **it** within the inner contexts unless assign them to a name other than **it**, using the **as** clause.

	count to 5
	  count to 3
	    // only the inner loop's 'it' is visible here.
	
	count to 5 as i
	  count to 3
	    // outer loop's 'it' now available here as 'i'
	
	count to 5
	  count to 3 as j
	    // no, this doesn't work, you still can't access the outer 'it'
	    // 'it' always has the value of the innermost context

When **it** is populated, you can also use the “unrooted” **attribute** ( . dot) and **lookup** ( | pipe) operators.  The following are all synonymous:

	set field to 'province'
	
	set quebeckers to friends has it.province='QC'
	set quebeckers to friends has it[field]='QC'
	set quebeckers to friends has it|field='QC'
	set quebeckers to friends has .province='QC'
	set quebeckers to friends has |field='QC'
 
(There is no unrooted [] lookup available.)


### KEYS _operator_ / _comprehension_

	.. keys [collection] // unary operator
	.. [collection] keys // comprehension operator

Returns the keys (or indices) of a collection’s elements.

	debug keys fruit
	debug friends first keys
	
	> [ 0, 1, 2 ]
	> [ 'name', 'age', 'cat', 'province']


### KEY _magic variable_

	.. key

\<\>

### LAST _comprehension_

	.. [collection] last

Returns the last element in a collection as a stand-alone value or object.

	debug fruit last
	
	> Citron


### LIMIT _comprehension_

	.. [collection] limit [qty]
	.. [collection] limit [index], [qty]

Returns the first **qty** elements in the collection if **qty** is positive. If negative, returns the last (absolute) **qty** number of elemens.

If an **index** is supplied, return **qty** elements starting at **index**.  Negative index values are not supported for index.

You always get a list back, even if just one element will be returned.

	debug fruit limit 1  
	debug fruit limit -1 
	debug fruit limit 1,1 
	
	> [ 'Apple']
	> [ 'Citron']
	> [ 'Banana']


### LIST _literal_

	.. list [term], [term], ... (;)
	.. list
	  [term], [term], ...
	  [term]
	  ...

Used to specify the creation of a plain array of literal values. As opposed to **array**, which is an array of mathematical expressions. 

The following are acceptable terms:

	true or false
	number literal
	string literal quoted with ' or " or ` or '''
	unquoted bare string literal
	   all characters available except } , ) ; | [cr]
	   (note the comma, that will trip you up; comma separates terms)
	an equal sign (=) followed by an expression
	a nested definition starting with :, list, array, traits, or fields

Lists may be specified on one line:

	debug list Apple, Banana, Citron
	
	> [ 'Apple', 'Banana', 'Citron' ]

Or multiple lines in the form of an indented block, or a combination:

	debug list
	  Vladimir, Estragon
	  Pozzo, Lucky, The Boy
	
	> [  'Vladimir', 'Estragon', 'Pozzo', 'Lucky', 'The Boy' ]

When using a list literal in an expression that might make the end of the array a matter of question, use a **semicolon** to close the array literal:

	debug list Vash, Spike, Jack, Cat thru '${it} the cat'
	> { 'Vash', 'Spike', 'Jack', 'Cat the cat' ] // undesired result
	
	debug list Vash, Spike, Jack, Cat; thru '${it} the cat' // with semicolon
	> [ 'Vash the cat', 'Spike the cat', 'Jack the cat', 'Cat the cat' ]

Or enclose the array in parenthesis:

	debug (list Vash, Spike, Jack, Cat).length 
	> 4

Arrays can be nested by use of either parenthesis or semicolons, or by using multiple levels of indent. Note that commas separate expressions on one line but are not included at the end of a line.


### LOCAL _declaration_

	local [varname] (, [varname], ... )
	set local [varname] to [expr]

Declare the modified variable to be limited to the current function scope. (Normally, variables are scoped to the object method they’re used in.)


### LOWEST _comprehension_

	.. [collection] lowest [expr]

Returns the collection element with the lowest value of the expression. Prepares the magic variables **it** and **key** for use by the expression.

	debug friends lowest .age
	> { name: 'Doug', age: 18, province: 'ON' }


### NAND _operator_

	.. [expr] nand [expr]

Performs the logical not-and operation. Returns **false** only if left or right expression are both _truthy_. Otherwise returns **true**.  

A semantic simplification of `not ([expr] and [expr])`.

	debug 0 nand 0 // prints 'true'
	debug 1 nand 0 // prints 'true'
	debug 0 nand 1 // prints 'true'
	debug 1 nand 1 // prints 'false'


### NEW _operator_

	.. new [prototype] ( [parameters] )

Instantiates a new object with the given prototype. If parameters are supplied, passes them to the object’s constructor.


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

	object [identifier] [version]

Begins the definition of an object.

\<\>


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

	.. [collection] overlay [collection]

Creates a new collection that is a composite of a copy of the left collection with all of the values in the right collection overlaid. If discrete keys are available in the left or right collection, they will be used intelligently. 

\<\>


### TRUE _literal_

	.. true

The boolean value true.


### PLY _statement_

	ply [list-like collection] ( as [item ident] ( , [key ident] ) )
	  [code block]

The **ply** iterator sequentially steps through all elements in an array-like collection. 

\<\>


### PROMISE _declaration_

	[identifier] promise ( as [parameter list] )
	  [code block]
	.. promise ( as [parameter list] )
	  [code block]

Wraps the code block in a Promise-like function shell. Purely syntactic sugar.

\<\>


### PROCESS _declaration_

	[identifier] process ( as [parameter list] )
	  [yielding code block]
	.. process ( as [parameter list] )
	  [yielding code block]

Creates a function that is expected to **yield** one or more values.

\<\>


### REAP _comprehension_

	.. [iterable] reap

Converts an iterator into an array by draining the iterator. If the iterator never ends, your system will lock up.

\<\>


### REQUIRE _verb_

	.. require [filename]

As in Javascript.


### RESOLVE _statement_

	resolve ( [expr] )

Call the successful potential outcome for a function declared with **promise**.

\<\>


### REJECT _statement_

	reject ( [expr] )

Call the failed potential outcome for a function declared with **promise**.

\<\>


### REFERENCE _declaration_

	reference:
	  [name] [expr]
	  ...

Declare global variables at the top of a **.SAI** source file.

\<\>


### RETURN _statement_

	return ( [expr] )

Return a value to the caller of a function.

\<\>


### SELECT _statement_

	.. [collection] select [keys]

Return a new collection that is the subset of the original collection identified by the provided list of keys/indices.

	debug fruits select: 2, 0;
	> [ 'Citron', 'Apple' ]
	
	debug friends thru it select list name, age;
	> [ { name: 'Sara', age: 32 },
	     { name: 'John', age: 19 },
	     [ name: 'Ann', age: 23 } ]


### SELF _mvar_

	set [var] .. self ..

A magic variable to be used in a **set** statement that contains the original value of the variable that is being set/modified.

\<\>


### SET _declaration_

	[identifier] set ( as [ident] )
	  [code block]
	( get 
	  [code block] )

Declare a _setter_ for a dynamic object trait. Cannot be used inside a function body.

\<\>


### SET _statement_

	set [ident] to [expr]
	set [ident] from [function] ( [parameters] )
	set [ident] [operator] [expr]
	set [ident] [unary operator]

Assign a value to an identifier.

\<\>


### SOW _comprehension_

	.. [collection] sow

Convert a static collection into an iterable.  Makes a copy of the collection to ensure the iterable doesn’t mutate even if the original collection changes.

\<\>


### SUPER _verb_

	super ( [ parameters ] )
	.. super ( [ parameters ] )

Call the previous ancestral version of the current object task.

\<\>


### SWITCH _statement_

	switch [expr]
	  case [expr] ( , [expr] ... )
	    [code]
	  ( default
	    [code] )

Choose among alternatives based on expression equality.

\<\>


### TASK _declaration_

	[identifier] task ( as [parameters] ) / ( expects [parameters] )
	  [code]
	.. [task] ( as [parameters] ) / ( expects [parameters] )
	  [code]

Define a block of code as an object trait, or anonymous function.

\<\>


### THROW _verb_

	throw [expr]

Trigger exception handling.


### THRU _comprehension_

	.. [collection] thru [expr]
	.. [collection] thru ( as [item ident] (, [key ident] ) )
	  [code block]
	  return [new item value]
	.. [collection] thru using [function]

Pass each element of a collection through an expression, code block, or previously defined function.

\<\>


### TRAITS _literal_

	.. traits [key] [term], [key] [term], ... (;)
	.. traits 
	  [key] [term], [key] [term], ...
	  [key] [term]
	  ...

Used to specify the creation of a plain object with a set of key/term pairs. (Contrast with **fields**.)  When you want to be specific about creating a plain object from a set of of keyed values & literal terms, use **traits**. 

The **key** is an identifying word or other string, specified without quotes (although quotes may be used if desired/necessary). If a **\\\\#** preceeds the key (a hashtag), the key will be assigned a value of **true**. The **term** is any valid term (see **list** for a description of valid terms).

See **fields** for examples.


### TRIAL _magic variable_

	if [expr] 
	  .. trial ..

A magic variable set to the value tested in an **if** statement. Only valid in the body of the first code block.

\<\>


### TRY _statement_

	try
	  [risky code]
	catch ( as [error ident] )
	  [error handling code]
	( finally
	  [clean-up code] )

Exception handling construct.

\<\>


### TO _clause_

	set [varname] to [expr]
	count [start] to [end]
	count down [start] to [end]

Used as a syntactic clarifier in **set** and **count** statements.

\<\>


### TYPEOF _operator_

	.. typeof [expr]

Returns the Javascript-native type of an expression.

\<\>


### UNLESS _statement_

	unless [expr]
	  [code if expr is false]
	else 
	  [code if expr is true]

Execute the following code block if the given expression evaluates to _falsy_.

\<\>


### UNDEFINED _literal_

	.. undefined

A value representing no value, or a variable that has not been assigned.

\<\>


### UPDATE _operator_

	set [variable] update [collection]

Update a collection variable with a set of keys/values. 

\<\>


### USING _clause_

	iterate [expr] using [function]
	each [expr] using [function]
	ply [expr] using [function]
	.. [expr] by using [function]
	.. [expr] audit using [function]
	.. [expr] has using [function]
	.. [expr] into [value] using [function]
	.. [expr] observe using [function]
	.. [expr] alter using [function]

Use a previously defined function as the process for an iterator or comprehension.

\<\>


### VALUES _operator_ / _compherension_

	.. values [collection] // unary operator
	.. [collection] values // comprehension operator

Returns the values of a collection’s elements.

	debug values fruit
	debug friends first values
	
	> [ 'Apple', 'Banana', 'Citron' ]
	> [ 'Sara', 23, true, 'ON' ]


### VIA _operator_

	.. [expr] via [function]

A syntactical shortcut for `function(expr)`; the following are synonymous:

	set a from ~Math.sin(b)
	set a to b via ~Math.sin

Probably not long for this world.


### WHILE _statement_

	while [expr] ( as [ident] )
	  [code]
	  ( break ) // optional exit the loop
	  ( continue ) // optional short-cut the loop 
	  [more code]

Executes the code block repeatedly, as long as the expression is true.


### WITH _statement_

	with [expr] ( as [ident] )
	  [code]

Allows the use of the **it** magic variable (and the . and | lookups) within an arbitrary block of code. 

	with customer
	  set label to '''
	    <b>${.name}</b>
	    ${.address1}
	    ${.address2}
	    ${.city} ${.region} ${.postcode}


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

	yield [expr]
	.. yield [expr]

Used with functions defined as **process**; see the EcmaScript 6 documentation for details.

\<\>


### YIELDING _verb_

	yielding [process]
	.. yielding [process]

Yields to a yielding process, until that process is done yielding. Equivalent to Javascript’s `yield *` syntax. See **yield**.

\<\>


[1]:	http://www.sitepoint.com/javascript-truthy-falsy/