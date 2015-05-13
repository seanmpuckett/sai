
## Keyword Reference

SAI keyword reference.

#### Legend

	.. - elided code
	... - repeating pattern
	A/B/C - alternatives
	( .. ) - optional syntax or component
	
	[block] - an indented block of code
	[expr] - any expression/value
	[function] - a function value
	[identifier] - a variable or method name
	
	lexpr / rexpr - an expression on the left/right side of an operator


#### Keyword Types

**Clause** - a component of a larger construct

**Comprehension** - a special class of operator intended for use with collections.

**Declaration** - describes or defines behaviour

**Literal** - declares a value or collection of values

**Mvar** - (magic variable) an identifier that holds context-specific data

**Operator** - a process that produces a new, likely modified value while leaving the original value(s) unchanged

**Scoping Prefix** - symbol used at the beginning of a variable to specifiy context.

**Statement** - a unit of code, occuping one or more lines, that performs some useful action

**Verb** - a function reference that may be used as a statement or in an expression as a computation returning a value


#### Sample Data

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
	  width to 10
	  height to 5
	  angle to 45o


### != (not equal) _operator_

	.. [expr] != [expr]

Compares two values for value equality; returns **true** if the values appear to be the same, **false** otherwise. This is implemented with Javascript’s != operator and the behaviour is identical.


### ‘ and “ (string)_literal_

	.. 'Type your string literal here.'
	.. 'Use a backslash to escape \' and \" and \\ in your strings.'
	.. "Double quote is semantically identical to single quote."

Declare a single line delimited literal string.

String literals support embedded expressions (a.k.a. string compositions) using the EcmaScript 6 syntax: `${expr}`. Any normal expression can be evaluated and will be concatenated in-place.

Use backslash as an escape for string delimiters `\'` and `\"`, dollar signs before braces `\${`, and the standard control characters `\n \r \t \b \f`.

	debug 'This here\'s ${'a'} test using \${} composition.'
	> This here's is a test using ${} composition.


### ‘’’ (multi-line string) _literal_

	.. '''
	  Now you can type as much text as you want,
	  remembering that leading and trailing whitespace 
	  will be stripped, though newlines will be preserved.
	  So it's perfect for markup.
	
	  The string goes on as long as the indenting does.
	
	  And you can include ${'compo'+'sitions'} as well.

That’s three single quotes in a row, then an indented block.

Declare a multi-line string ideal for embedding longer passages of markup.


### \# (hashtag) _literal_ / _comprehension_

Declares or searches for a _hashtag_.

#### \#hashtag literal

	.. traits #[tagname]
	.. fields #[tagname]

When defining fields or traits, using a hash in front of a trait _name_ will automatically assign a value of **true** to that trait. 

The following two definitions are identical:

	set row1 to: name 'John', age 19, #cat, #dog
	set row2 to: name 'John', age 19, cat true, dog true


#### \#hashtag comprehension

	.. [collection] #[tagname] // require field to be truthy
	.. [collection] !#[tagname] // require field to be falsy

When used as a comprehension, the hashtag creates a simple filter that returns only records that have a _truthy_ value for the named field.

The following two comprehensions are identical:

	set results1 to friends #cat
	set results2 to friends has .cat

A negated hashtag createsa  filter that returns only records that have a _falsy_ value for the named field. Not having that field at all is also a match.

These comprehensions are identical:

	set results1 to friends !#dog
	set results2 to friends has not .dog

Hashtag comprehensions can be chained inline, and the filtering is done efficiently.

	set results3 to friends #cat !#dog


### $ (parameter) _scoping prefix_

	.. $ 
	.. $[attribute]

When alone, **$** returns the first parameter a function was called with. 

	set ShowParameter to task
	  debug $
	ShowParameter 'Bianca'
	
	> Bianca

When followed immediately by an attribute name, that attribute of the first parameter in a function. (It is not necessary to include the dot.)

	set ShowAttribute to task
	  debug $name
	ShowAttribute friends[0]
	
	> Sara

Even if you use **as** to name your parameters, **$** continues to refer to the first parameter. 

	set ShowParameters to task as p1, p2
	  debug $
	  debug p1
	  debug p2
	ShowParameters 'First', 'Second'
	
	> First
	> First
	> Second


### $$ (arguments) _mvar_

	.. $$

Equivalent to Javascript’s `arguments` and can be used the same way.


### $\{ } (string compose) _modifier_

	.. 'String ${ [expr] } continues.'
	.. "String ${ [expr] } continues."
	.. `String ${ [expr] } continues.
	.. '''
	  String ${ [expr] } continues.

Allows the insertion of any arbitrary expression in the middle of a string literal. As shown above, this is supported in all four string literal formats.

	set FriendSummary to task 
	  return 'Name: ${$name}, age: ${$age}'
	ply friends limit 3 as friend
	  debug 'Subject ${key+1}: ${FriendSummary(friend)}'
	
	> Subject 1: Sara, age 23
	> Subject 2: John, age 19
	> Subject 3: Ellie, age 22

Use `\${` to represent `${` in a string literal. 

	debug 'But I really need to include \${} in my output!'
	
	> But I really need to include ${} in my output! 


### % (modulo) _operator_

	.. [expr] % [expr]

Calculates the mathematical **modulus**; returns the remainder of the left expression divided by the right.

	debug 5 % 2
	debug 6.2 % 1
	
	> 1
	> 0.2


### \* (multiply) _operator_

	.. [expr] * [expr]

Multiplies the two expressions.

	debug 2 * 3
	
	> 6


### \*\* (exponent) _operator_

	.. [lexpr] ** [rexpr]

Calculates an exponent; equivalent to `Math.pow([lexpr],[rexpr])`.

	debug 2 ** 3
	
	> 8


### + (plus) _operator_

	.. [expr] + [expr]

Adds two numbers OR concatenates two strings.  If both expressions are numbers, adds them. Otherwise converts them both to strings and concatenates.

	 debug 1+2     
	 debug '1'+2   
	 debug 1+'2'   
	 debug '1'+'2' 
	
	> 3
	> 12
	> 12
	> 12


### - (minus) _operator_

	.. [lexpr] - [rexpr]
	.. - [expr]

Used as a binary operator, subtracts the right expression from the left. Used as a unary operator, negates the expression (subtracts it from 0).

	debug 3 - 5
	debug 3 + -5
	
	> -2
	> -2


### . (attribute) _syntax_

	.. [expression].[attribute]
	.. .[attribute]
	
	[value].[attribute]
	.[attribute]

Looks up the trait named _attribute_ in the expression. When used without a leading value, references the named attribute in the **it** magic variable.

	set friend to friends[0]
	debug friend.name
	with friend 
	  debug it.name
	  debug .name
	
	// prints 'Sara' three times


### .. (caboose) _style_

You can use the two-dot caboose to stitch a *single line* child code block onto the end of a statement that requires it. Don't use the caboose unless it will help make your code clearer.

The following are functionally identical:

    if error 
      return -1
      
    if error .. return -1


### ... (continue) _style_

You can use the three-dot continue syntax to insert line breaks, or multiple child code blocks, into a single statement. 

This is not considered good practice (period), as most overly complex statements should be broken down into multiple statements (period), just like a run-on sentence should be clarified by a good editor.

But should you really need it, it is there.

The three dot continuation must start at the same indent as the line it continues.

    debug traits
      name Sally
      age 32
      province QC
    ... overlay traits
      #cat
      province ON
      
    > { name: 'Sally', age: 32, province: 'ON', cat: true }

Or even:

    debug 1
    ... +
    ... 2
    ... +
    ... 3
    
    > 6
  
  Syntactically, the continue is equivalent to a whitespace character with a bonus ability to resent level of indent.
  
  
### / (divide) _operator_

	.. [lexpr] / [rexpr]

Divides the left expression by the right expression.

	debug 22 / 7
	debug 355 / 113
	
	> 3.142857142857143
	> 3.1415929203539825


### // (comment) _syntax_

	// any text goes here, is ignored through the end of line.

Format of comments in SAI source files. 


### : (declare structure) _literal_ / _clause_

To define an array, single line:

	.. : [expr] (, [expr], [expr], ...) (;)
 
Multiple line variant:

	.. : 
	  [expr] ( , [expr], ... )
	 ( [expr], [expr], ...
	   [expr]
	   ... )

To define fields:

	.. : [name] [expr], [name] [expr], [name] [expr], ... (;)

Multiple line variation:

	.. :
	  [name] [expr] (, [name] [expr], ...)
	 ( [name] [expr], [name] [expr], ...
	   [name] [expr]
	   ... )

The **:** structure definition parser determines whether to create an array or fields by whether or not a field name is included before the first expression.

	debug :1,2,3  
	> [ 1, 2, 3 ]
	
	debug :a 1, b 2, c 3  
	> { a: 1, b: 2, c: 3 }


### ; (end structure) _syntax_

	.. [structure definition] (;)

Optional, closes the current structure definition when needed for clarity. Only needed when there is additional code on the same line that might mistakenly bind too tightly to the final value in the structure.

	debug list 3, 2, 1 by it
	debug array 3, 2, 1 by it
	debug array 3, 2, 1; by it  
	
	> [ 1, 2, 3 ]
	> [ 3, 2, 1 ] // undesired result
	> [ 1, 2, 3 ]

In the example above, the **list** literal sorts properly because **list** elements are not allowed to be mathematical expressions, so the parser can correctly bind `by it` to the entire list.

However, the first **array** literal _doesn’t_ sort correctly because array elements can be expressions, and `by it` is binding to the final term in the literal. Thus, the definition is parsed as `array (3), (2), (1 by it)`.

One can force **list** to parse incorrectly by using the **=** list element expression evaluation flag, but that’s ridiculous.

	debug list =3, =2, =1 by it   // don't write code like this
	debug list =3, =2, =1; by it  // just don't
	
	> [ 3, 2, 1 ]
	> [ 1, 2, 3 ]

The semicolon can also close parameter lists if using the **from** form of function invocation. The following examples are identical:

    set x to ~Math.sin(angle) * magnitude
    set x from ~Math.sin angle; * magnitude


### \< (less than) _operator_

	.. [lexpr] < [rexpr]

Evaluates **true** if lexpr is numerically or lexically lower than rexpr, **false** otherwise.

	debug 1 < 1 // false 
	debug 1 < 2 // true
	debug 'a' < 'b' // true
	debug 'a' < 'B' // false, case matters

If you want a case insensitive comparison, you must ensure both expressions are of the same case.


### \<= (less or equal) _operator_

	.. [lexpr] <= [rexpr]

Evaluates to **true** if lexpr is numerically or lexically lower or equal to rexpr, **false** otherwise.


### \<=\> (compare) _operator_

	.. [lexpr] <=> [rexpr]

Evaluates to **-1** if lexpr is lower than rexpr, **1** if it is greater, and **0** if they are equal.

	debug 1 <=> 0      // returns 1
	debug 1 <=> 1      // returns 0
	debug 1 <=> 2      // returns -1
	debug 'b' <=> 'a'  // returns 1
	debug 'b' <=> 'b'  // returns 0
	debug 'b' <=> 'c'  // returns -1


### = (equal) _operator_

	.. [expr] = [expr]

Evaluates to **true** if the two expressions are equivalent. This compiles directly to Javascript’s `==` operator and has the same occasionally bizarre side effects. Basically, don’t use = except for comparing numeric, boolean or string values. 

Use **is** or **isnt** to compare objects or object types, except when dealing with **NaN** in which case the only reliable way to test for its existence is to use **isNaN**. That’s Javascript for you.


### \> (greater than) _operator_

	.. [lexpr] > [rexpr]

Evaluates to **true** if lexpr is numerically or lexically greater than rexpr, **false** otherwise.


### \>= (greater or equal) _operator_

	.. [lexpr] <= [rexpr]

Evaluates to **true** if lexpr is numerically or lexically greater or equal to rexpr, **false** otherwise.


### ? (safe fetch) _operator_

	.. ? [expr]

Adds extra type-checking to an expression ensuring that it will not throw an exception if roots are undefined; instead just returning **undefined**.

	set a to undefined
	debug a.a
	// throws an exception
	
	debug ?a.a
	> undefined


### ?\< (minimum) _operator_

	.. [lexpr] ?< [rexpr]

Evaluates to whichever expression is numerically or lexically lower.

	debug 1 ?< 2   // returns 1
	debug 2 ?< 1   // returns 1


### ?\> (maximum) _operator_

	.. [lexpr] ?> [rexpr]

Evaluates to whichever expression is numerically or lexically higher.

	debug 1 ?> 2   // returns 2
	debug 2 ?> 1   // returns 2


### ?? :: (if/this/that) _operator_

	.. [expr] ?? [expr1] :: [expr2]

Evaluates to expr1 if the left expression is _truthy_, otherwise evaluates to expr2.

	debug true ?? 'True' :: 'False'   // prints 'True'
	debug false ?? 'True' :: 'False'  // prints 'False'


### \[ ] (lookup) _syntax_

	.. [value] '[' [expr] ']'

Performs an indirect lookup of a trait/element in the given value.

The following debug statements print identical results.

	set field to 'name'
	set friend to friends[0]
	debug friend.name
	debug friend['name']
	debug friend['na'+'me']
	debug friend[field]
	
	// prints 'Sara' four times.


### @ (object) _scoping prefix_

	.. @
	.. @attribute 
	@Attribute

Reference a trait or method attached to the current object. Equivalent to Javascript’s `this.`.

Here’s a short implementation of a 2D vector by way of illustration.

	object Vector 1.0.0
	
	instance:
	  x 0
	  y 0
	
	Instantiate task as x,y
	  if x isof 'Vector'
	    set @x to x.x
	    set @y to x.y
	  else
	    set @x to x
	    set @y to y
	
	angle set as radians // dynamic trait
	  @SetPolar radians, @magnitude
	get 
	  return ~Math.atan2(@y,@x)
	
	magnitude set as units // dynamic trait
	  @SetPolar @angle, units
	get
	  return ~Math.sqrt((@x*@x)+(@y*@y))
	
	SetXY task as x, y
	  set @x to x
	  set @y to y
	
	SetPolar task as radians, units
	  set @x to units * ~Math.cos(radians)
	  set @y to units * ~Math.sin(radians)


### \` (full line string) _literal_

	.. `text

Signifies the start of a string literal that will occupy the rest of the source code line.

	debug `It's nice not to have to worry about "delimiters."
	
	> It's nice not to have to worry about "delimiters."


### | (lookup) _syntax_

	.. [var]|[value]
	.. |[value]
  
A cleaner way of doing indirect lookups when only using a single literal or variable. Without a leading identifier, refers to the **it** value.

The following debug statements print identical results.

	set field to 'name'
	with friends|0 
	  debug it.name
	  debug .name
	  debug it['name'] 
	  debug it|'name' 
	  debug |'name' 
	  debug it[field]
	  debug it|field
	  debug |field
	
	// prints 'Sara' eight times.

The **|** lookup syntax can only be used with _simple_ values; that is, single variable names or literals. If you need to use an expression, you should use the **[expr]** form of lookup.


### accum _mvar_

A magic variable active only within a **into** clause or code block. Represents the static value that accumulates changes during **into** iteration over a data set.

	debug friends into 0
	  set accum + .age
	
	> 185

**Accum** is initialized with the value following **into**, or, if the **into it** variant is used, with the value in the first iteration; accumulation then begins directly with the second iteration.

	debug friends into blank
	  set accum|.province to (self default 0)+1
	
	> { ON: 5, QC: 3 }


### alter _operator_

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


### and _operator_

	.. [expr] and [expr]

Logical and operator. If the left expression evaluates to **falsy**, returns it, otherwise returns the right expression.

	debug 1 and 0     // prints '0'
	debug 1 and false // prints 'false'
	debug 0 and 1     // prints '0'
	debug false and 1 // prints 'false'
	debug 1 and 1     // prints '1'
	
	debug true and 'Fred'
	> Fred


### andb _operator_

	.. [expr] andb [expr]

Bitwise and operator. Converts, if possible, both left and right expressions into 32 bit signed integers, and performs a bitwise AND operation on them.

	debug 5 andb 11
	
	> 1
	
	//  5 in binary: 00000000000000000000000000000101
	// 11 in binary: 00000000000000000000000000001011
	//  1 in binary: 00000000000000000000000000000001


### array _literal_

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


### as _clause_
 
As declares named locally scoped variables within a code block based on values passed into the block.  (In general, **as** is optional because one can usually access such passed-in values through magic variables.)

**As** is used in conjunction with the following SAI keywords: set, task, process, promise, switch, catch, if, exists, with, iterate, each, ply, count, by, thru, audit, gather, has, alter, observe, and within parenthesis as the “parenthetic as”.


#### as with parameters

    set [ident] (as [$ var]) // dynamic trait
    .. task (as [parameter1], [parameter2], ...)
    .. process (as [parameter1], [parameter2], ...)
    .. promise (as [parameter1], [parameter2], ...)

An example of parameter naming:

	set tally to blank
	set AddRow to task as item, quantity
	  set tally|item to (self default 0) + quantity
	
	AddRow 'socks', 3
	AddRow 'pants', 6
	debug tally 
	
	> { socks: 3, pants: 6 }


#### as value reclaimation

	switch [expr] (as [trial var]) 
	catch (as [error var])
	if [expression] (as [trial var])
	exists [expression] (as [it var])
	with [expression] (as [it var]) 

An example of **if** value reclamation with **as**:

    if @keydown as charcode
      switch charcode
        case 27
          @Escape
        case 32
          @Continue
  

#### as with iterators
 
	iterate [expr] (as [it var])
	each [expr] (as [it var] (, [key var] ) )
	ply [expr] (as [it ident] (, [key var] ) )
	count [expr] (as [key var])

An example, renaming **it** and **key** in an each iterator:

    each friends first as value, field
      debug `${field}: ${value}
    
    > name: Sara
    > age: 23
    > cat: true
    > province: ON


#### as with comprehensions

	[expr] by (as [a var], [b var] )
	[expr] thru (as [it var] (, [key var] ) )
	[expr] audit (as [it ident] (, [key var] ) )
	[expr] into [expr] (as [accum var] (, [it var] (, [key var] ) ) )
	[expr] filter (as [it var] (, [key var] ) )
	[expr] alter (as [it var])
	[expr] observe (as [it var])

An example, renaming **it** and **key** in the block handler of a **thru** comprehension:

    debug friends thru as friend, index
      return `${index}) ${friend.name} lives in ${friend.province}
    
    > [ '0) Sara lives in ON',
        '1) Jon lives in QC',
        '2) Ellie lives in QC',
        '3) Marshal lives in ON',
        '4) Doug lives in ON',
        '5) Ann lives in QC',
        '6) Harry lives in QC',
        '7) Jenna lives in ON' ]

  
#### as parenthetic

	.. ( [expr] as [var] )

The parenthetic **as** assigns the value of the parenthesised expression to a named identifier. The assignment happens as soon as the parethesis is evaluated, so you can use the identifier in the same expression as the parenthetical, as long as the parenthetical is evaluated first.

	  set six to (1+2 as three)+three
	  debug array three, six
    
    > [ 3, 6 ]


### ascending / asc _modifier_

	.. [expr] by [expr] (ascending) 
	.. [expr] by [expr] (asc)
	.. [expr] by ascending
	.. [expr] by asc

Used with the **by** sort comprehension to indicate the sort order should be lowest to highest. **Asc** is an abbreviation for **ascending**. 

Because sort order is by default ascending, this keyword is never truly needed except in the simplest case where sorting by value itself.

	debug list Bob, Carol, Ted, Alice by ascending
    
    > [ 'Alice', 'Bob', 'Carol', 'Ted' ]


### assert _verb_

	assert [expr], [expr]

If the first expression is _falsy_, throw an exception with the second expression as a message.

    assert everythingIsAwesome, 'I have some bad news...'
    
    Error: SAI: failed assertion: I have some bad news...


### audit _comprehension_

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


### blank _literal_

	.. blank

The keyword **blank** creates a plain object with no traits. It is the SAI equivalent of Javascript’s `{}`.

	set player to blank
	set player.age to 21
	debug player
	
	> { age: 21 }


### break _statement_

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


### by _comprehension_

	[expr] by [expr] (ASC/ASCENDING/DESC/DESCENDING)
	[expr] by ASC/ASCENDING/DESC/DESCENDING
	[expr] by ( as [first ident], [second ident] )
	  [block]
	[expr] by using [function]

To create sorted array, use **by**. The newly resulting array will be sorted by the specified inline expression or code block. (**By** does not sort in-place; it always returns a new array.)

If **by** is used on an iterable, it will **collect** all values before sorting.

#### by inline

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


#### by block

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


#### by using

If you’ll recall, **has using** provides the ability to use a named function for your sorting facilitator, and **by using** allows the same thing.

	set ProvinceAge to task as a, b
	 return a.province <=> b.province or a.age <=> b.age
	
	set result to friends by using ProvinceAge
	
	// same result as previous example


### case _clause_

	switch [trial expr] ( as [trial ident] )
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


### catch _clause_

	try
	  [code]
	catch ( as [error ident] )
	  [code]
	finally
	  [code]

The **catch** clause heads a section of code that executes if and only if any code within the **try** clause throws an exception. 

The exception thrown is caught and placed in the **error** magic variable (or the variable named in the **as** clause), as follows:

    try
      throw new ~Error 'This is an error message!'
    catch 
      return error.message

Alternately:

    try
      throw new ~Error 'This is another error message!'
    catch as e
      return e.message

For details on how try/catch/finally exceptions work, see the Jasacript exception documentation.


### chain _operator_

	.. chain [expr]
	  [comprehension/method] 
	  [comprehension/method]
	  ...

The **chain** clause allows you to compose (string together) a series of operations that will each be applied in turn to a value, object, collection or iterator.

**Chain** is another way of writing `value.method().method().method().method()` that offers cleaner code and more possibilities. You start with an object, then apply a sequence of verbs to it. Each verb is a new link in the chain.

    set mirror to task 
      return chain $
        split ''
        reverse
        join ''
    debug mirror('A man, a plan, a canal, Panama!')
      
    > !amanaP ,lanac a ,nalp a ,nam A  

In the previous case, each verb was a trait (a method) of the string itself. 

You can also chain comprehensions:

    debug chain friends
      #cat
      by .name
      thru 'My friend ${.name} likes cats.'
    
    > [ 'My friend Ann likes cats.',
    >   'My friend Jon likes cats.',
    >   'My friend Sara likes cats.' ]

And because one of the comprehensions is **alter**, you can actually chain any function at all.

    set double to task
      return chain empty
        concat $
        concat $
    
    debug chain fruit
      alter double(it)
      
    > [ 'Apple',
        'Banana',
        'Citron',
        'Apple',
        'Banana',
        'Citron' ]

Functions you use in **chain** typically return a value; this is used as the object to pass to the next link in the chain. However, some methods and functions don't return a value, instead modifying their context in-place. If a function returns **undefined**, **chain** will reuse the previous object for the next call.


### collect _comprehension_

	.. [iterable] collect

Converts an iterator into an Array by draining the iterator. If the iterator never ends, your system will lock up until you run out of memory. (You could use a **limit** comprehension to keep that from happening.)

	set Odds to process
	  set local i to 1
	  while i
	    yield i
	    set i + 2
	
	debug Odds() collect // locks up
	debug Odds() limit 10 collect
	
	> [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

The opposite of **collect** is **iterate**.


### continue _statement_

	[iterator/loop]
	  [code]
	  continue

In a loop or otherwise iterating block of code, **continue** short-cuts the remaining code in the block, causing the loop to continue its next iteration immediately.

    count 10
      unless key % 2
        continue
      debug key
     
    > 1
    > 3
    > 5
    > 7
    > 9


### contract _declaration_

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
 

### copy _operator_

	.. copy [expr]

Use the **copy** unary operator to create a _shallow copy_ of the expression it precedes.  You sometimes need this because ordinarily SAI and Javascript assign objects, rather than copies of object values. 

    set plate to fruit       // i want some fruit
    plate.push 'Ice cream'   // and also dessert
    debug fruit              // but now fruit has changed
    
    > [ 'Apple', 'Banana', 'Citron', 'Ice Cream' ]
    
    fruit.pop                 // get rid of the ice cream
    debug fruit
    
    > [ 'Apple', 'Banana', 'Citron' ]
    
    set plate to copy fruit  
    plate.push 'Ice cream'
    debug fruit
    
    > [ 'Apple', 'Banana', 'Citron' ]
    
    debug plate               // there we go
     
    > [ 'Apple', 'Banana', 'Citron', 'Ice Cream' ]

Note that **copy** only copies enumerable values.


### count _statement_

	count [high expr] ( step [expr] ) ( as [key ident] )
	  [block]
	( none 
	  [none block] )
	
	// variants
	count [low expr] to [high expr] ( step [expr] ) ( as [key ident] )
	count down [high expr] ( step [expr] ) ( as [key ident] )
	count down [high expr] to [low expr] ( step [expr] ) ( as [key ident])

Specifically designed as an integer iterator for list elements, **count** always counts 1 at a time (unless a **step** clause is provided), and its highest value is always the step value less than the high value provided (both when counting up and down). To reiterate, **count** _never_ outputs the high value.

	count 10
	  debug it
	// prints numbers from 0 to 9 
	
	count 5 to 10
	// prints numbers 5 to 9
	
	count down 10
	// prints numbers from 9 to 0
	
	count down 25 to 15
	// prints numbers 24 to 15
	
	count 50 step 10
	// prints 0, 10, 20, 30, 40
	
	count down 45 step -10
	// prints 35, 25, 15, 5

When using the **step** clause with **count down**, be sure that the step expression is negative, otherwise an infinite loop will result.

 
	count aList.length
	  debug 'List element ${key} is ${aList|key}'
	else
	  debug 'The list is empty.'

The optional **else** clause is executed instead of the main block if the **count** range length computes to 0 (or less). 


### create _operator_

	.. create [expr] [parameters]

Creates a SAI object by name. 

Will attempt to find the object’s source by using the `SAI.config.Loader` function, which defaults to `SAI.GetSourceFromPaths`, which tries to find a file named `[expr].sai` in the provided paths. 

    reference:
      Tally 'Tally ^1.0.0'
    .. 
    
    set inventory to create ~Tally

The example follows best practices of placing object names in a **reference** section, aliasing versioned names into 


### debug _adhoc verb_

	debug [expr]

Prints the value of the expression to the console. 

Compiles directly to `console.log([expr])`.


### dec _statement_

	dec [var]

Decrements (reduces by 1) the value in the given variable.

	set a to 2
	dec a
	debug a
	
	> 1


### default _operator_

	... [expr] default [expr]

If and only if the left expression evaluates to `undefined`, returns the right expression, otherwise returns the left expression.

Like **or** except instead of checking for _truthy_ tests to see if a value is available. Most useful in expressions where you’re not sure if a variable is initialized.

	set 
	  magnitude to undefined
	  angle to 60o
	debug (magnitude default 1) * ~Math.cos(angle)
	
	> 0.5


### delete _statement_ / _operator_

	delete [variable]
	set [variable] delete
	set [variable] delete [attribute(s)]

Undefines the named variable or attribute(s) of a variable.

This just calls the underlying Javascript version of **delete**, with all the same rules and caveats. The only clever addition is the ability to delete multiple attributes at once by supplying a collection:

    set obj to: a 1, b 2, c 3, d 4, e 5, f 6
    set obj delete 'a'
    debug obj
    
    > { b: 2, c: 3, d: 4, e: 5, f: 6 }
     
    set obj delete: 'c', 'f'
    debug obj
     
    > { b: 2, d: 4, e: 5 }
     
    set obj delete: b 'B is for Bonobo.', d 'D is for Dixie cups.'
    debug obj
    
    > { e: 5 }


### descending / desc _modifier_

	.. [expr] by [expr] (descending) 
	.. [expr] by [expr] (desc)
	.. [expr] by descending
	.. [expr] by desc

Used with the **by** comprehension just like **ascending/asc** but the sort order will be highest to lowest.

	debug list Bob, Carol, Ted, Alice by desc
	
	> [ 'Ted', 'Carol', 'Bob', 'Alice' ]

See also: **by**


### do _modifier_

	do while [expr]
	  [code]
	
	do until [expr]
	  [code]

Alters a **while** or **until** statement so that the test is performed after the code block, not before. This guarantees the code block will be executed at least once.

Check out these wacky examples.

	do until true
	  debug 'Hello, World!' 
	
	do while false
	  debug 'Hello, World!'


### down _modifier_

	count down [start]
	count down [start] to [stop]

Used only with **count**; signifies the count is to proceed by _decrementing_ the key. The first key value is the start value minus one, and the last key value is the stop value, or zero.

	count down 5
	  debug key
	
	> 4
	> 3
	> 2
	> 1
	> 0

**Down** can seem freaky because you never get the value you begin with, and it seems to be even freakier when you're using a step value other than 1.

    count down 15 step -4
      debug key 
      
    > 11
    > 7
    > 3

Here's an important safety tip, illustrated above: if you're using **down** with **step**, be sure the step value is negative. Otherwise the loop will never terminate.

See also: **count** and **step**.


### each _statement_

	each [collection] ( as [it var] ( , [key var] )
	  [code block]
	( else
	  [code] )
	
	each [collection] using [function]

**Each** uses Javascript's `for-in` loop construct to iterate through an object's enumerable properties. It steps through each element of the collection, in arbitrary order, setting **it** and **key** variables, and executing the code block for each one. 

If the collection is empty, executes the (optional) **else** block instead. Unlike **ply**, which works well with length-based arrays, **each** is intended for use with objects containing arbitrary traits/fields. 

    set friend to friends first
    each friend
      debug `${key}: ${it}
    else
      debug `You have no friends.
      
    > name: Jon
    > age: 19
    > cat: true
    > dog: true
    > province: QC
  
Recall that you can rename **it** and **key** with the **as** clause:

    each friend as value, field
      debug `${field}: ${value}

**Each** can also call out to a function with the **each using** variation.

    set handler to task as value, field
      debug `${field}: ${value}
    
    each friend using handler


### else _clause_

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
 

### enlist _comprehension_

    .. [expr] enlist

Converts various collection types into a list/array using the following rules:

    undefined -> undefined
    value -> [ value ]
    list -> self
    object -> [ [ key, value ], [ key, value ], ... ]
    iterable -> [ value, value, value, ... ]

Note specifically that **enlist** will turn a set of key, value pairs into an array of [key,value] arrays thus no data is lost in the conversion.

### entrait _comprehension_

    .. [expr] entrait

Converts various collection types into traits/fields using the following rules:

    undefined -> undefined
    value -> { value: true }
    list -> { [0][0]: [0][1], [1][0]: [1][1], ... }
    object -> self
    iterable -> { value[0]: value[1], value[0]: value[1] }

Notice that **entrait** is designed primarily to losslessly process the results of enlist and iterators that produce arrays of key/value pairs.

### enum _literal_

	.. empty

A literal value indicating an empty list/array. The equivalent of Javascript’s `[]`, **empty** creates an Array with no elements.


### enum _modifier_

	fields [identifier] enum, ( [identifier] enum, ... )

When declaring a set of fields, specifies a value 1 higher than the value of the previous definition. If there is no previous definition, 1.

	debug fields a enum, b enum, c 10, d enum
	> { a: 1, b: 2, c:10, d: 11}


### error _mvar_

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


### exists

	exists [expr] ( as [it ident] )
	  [code]
	else 
	  [code]

Executes the indented code if the expression is a defined value, e.g. if it is not **undefined**.  The tested value will be available as **it** within the scope of the code block.  (This is different from the _truthy_ testing **if**, which uses **trial**.)

**Exists** is quite handy when working with caches and lookups.

    exists @cache|$key
      return it
    else
      set @cache|key from @ExpensiveCalculation $key
      return @cache|key

Though an even slicker way of dealing with that particular idiom is to use **initialized**:

    return @cache|$key initialized from @ExpensiveCalculation $key

...Though it's only actually useful if you really have nothing else to do besides look something or calculate it. **Exists** gives you a lot more flexibility.


### expects _clause_ / _operator_

	... task/promise/process expects [rules definition]
	.. [expr] expects [rules object]

Used to check whether a function’s named parameters (or any arbitrary object) has certain traits, and optionally if those traits are of a particular type.

#### expects clause

When used as the clause in a **task**, **promise** or **process** function definition. **expects** adds run-time parameter checking to the function, passing the first argument (the one that holds named parameters) through an *expects check* based on the rules that follow. If any expectations are not met, a runtime error is thrown.

Names appearing in **expects** clauses, and thus being used to check parameters, _must_ be preceeded by **$**. This is intended as a reminder that *named parameters are always referenced with the $ scoping operator*.

#### expects operator

Expects compares an object againt a set of rules and returns a list of rules that are **violated**. Thus, a successful test of expectations is an empty array. An array with one or more elements contains a list of the rules that were broken.

#### expects rules

Rules for **expects** take the form of a set of traits. Their names correspond to names of traits that must be found in the expression under test. The value, if not _true_, is interpreted as an object type; the trait must be of that type (or a child of that type).
 
Any violations to the rules are returned in a list; that list being made up of plain objects with the following fields:

    .trait - name expected
    .expects - type expected
    .found - type found
  
Here are some examples, finally:

    AddStudent task expects $name string, $age number
      @students.push copy $ 
    ..
    @AddStudent name 'Sally', age '12'
    
    > Error: SAI: parameter exception in AddStudent
    > age should be number, but it's string

Performing this same test in an ad-hoc fashion using the **expects** operator would look like this:

    set newStudent to: name 'Sally', age '12'
    set studentRules to: name 'string', age 'number'
    debug newStudent expects studentRules
     
    > [ { trait: 'age', expects: 'number', found: 'string' } ]    

N.B. the **expects** clause rule format is identical to that of a single-line **traits** definition, with the additional requirement of a **$** before every trait name.


### false _literal_

	.. false

The boolean value **false**.


### finally

	try 
	  [block]
	catch ( as [error ident])
	  [block]
	finally
	  [block]

An exception handling clause identifying a block of code that is executed whether or not an exception occurs. (Even executes if you re-**throw** an exception within the **catch** clause.)

For details, see the Jasacript exception documentation.


### fields _literal_

	.. fields [key] [expr], [key] [expr], ... (;)
	.. fields 
	  [key] [expr], [key] [expr], ...
	  [key] [expr]
	  ...

Used to specify the creation of a plain object with a set of key/value pairs. (Contrast with **traits**.)  In general, the **colon** structure constructor will figure out what you want, but when you want to be specific about creating a plain object with of keyed values & expressions, use **fields**. Compare with **list**, **array** and **traits**.

The **key** is an identifying word or other string, specified without quotes (although quotes may be used if desired/necessary). If a **\\\\\\\\\\#** preceeds the key (a hashtag), the key will be assigned a value of **true**. The **expr** is any valid literal, variable, object or expression.

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


### first _comprehension_

	.. [expr] first

Returns the first value in a list or iterator.

	debug fruit first
	> Apple


### from _operator_

	.. from [identifier] ([parameters]) (;)

**From** invokes the identifier as a function call that returns a value, passing in any parameters that follow.  It is the preferred syntax for function calls in **set** statements.

The following pairs are synonymous:

	set record from cursor.FetchRow
	set record to cursor.FetchRow()
	
	set cursor from db.Query 'select * from names'
	set cursor to db.Query('select * from names')

**From** is the encouraged form for **set** statements because it allows a more natural reading of source code. From indicates that the identifier that follows will be used as a verb and returning a value. 

Neither **From** nor parenthesis are not needed when the verb begins the line as in the `cursor.Close` statement below.

	set cursor from db.Query 'select * from names'
	set records from cursor.FetchAll
	cursor.Close

If you wish to use **from** in a continuing expression, close the parameter clause with a semicolon (like you'd close a structural literal). The following two examples are equivalent.

    set @x to ~Math.sin($angle) * $magnitude
    set @x from ~Math.sin $angle; * $magnitude    


### get _declaration_

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


### given _declaration_

	given [definition]

Defines immutable traits when declaring an object. These traits are assigned to the object prototype itself and locked/frozen; they cannot be changed and yet are available in every instance of an object. Givens are useful for static data. 

	object Apple
	instance: varietal 'unknown'
	given: species 'M. domestica'
	Describe task
	  return '${@species} var ${@varietal}
	..
	set apple to create 'Apple'
	set apple.varietal to 'Macintosh'
	debug from apple.Describe
	> M. domestica var Macintosh
  
**Given** traits can only be changed/overridden through inheritance.
 
	object Crabapple
	inherit: Apple
	given: species 'M. coronaria
	..
	set specimen to create 'Crabapple'
	debug from specimen.Describe
	> 'M. coronaria var unknown'


### has _comprehension_

	.. [collection] has [expr]
	.. [collection] has
	  [block]
	.. [collection] has using [function]

The comprehension operator **has** indicates an expression based filter using the **it** _magical value_ to represent the item currently under examination. Since **it** is in play, the associated **dot** scoping prefix is also active within the expression for easy access to item fields. 

#### has inline

	debug friends has (.province = 'QC') and (.cat or .dog)
	
	> [ { name: 'Ann', age: 23, cat: true, province: 'QC' } ]
 
Any valid expression can be used in a **has** comprehension, and one can refer to values outside the expression as well.

	set rentAge to: ON 25, QC 21
	debug friends has .age >= rentAge[.province]
	
	> [ { name: 'Ellie', age: 22, province: 'QC' },
	>   { name: 'Ann', age: 23, cat: true, province: 'QC' },
	>   { name: 'Harry', age: 31, province: 'QC' },
	>   { name: 'Jenna', age: 28, dog: true, province: 'ON' } ]
 
#### has block

Keyword **has** can reference a block of code directly, which makes the **it** magic value available within that block, or be given the name of a task (or a task definition). You must **return** a _truthy_ (keep) or _falsy_ (discard) value from the block so the filter can take the according action. If you don’t return a value, all rows will be discarded.

	    friends has
	      return .age >= rentAge[.province]

#### has using

You can integrate function calls into a composed comprehension by adding the **using** keyword immediately following the comprehension keyword itself.

	    set CanRent to task as row
	      return row.age >= rentAge[row.province]
	debug friends has using CanRent


### highest _comprehension_

	.. [collection] highest [expr]

Returns the collection element with the highest value of the expression. Prepares the magic variables **it** and **key** for use by the expression.

	debug friends highest .age
	
	> { name: 'Harry', age: 31, province: 'QC' }


### if _statement_

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


### initialized _operator_

	.. [var] initialized [expr]

If the variable on the left is **undefined**, stores the value on the right to it. Then returns the value of the variable.

	debug friends into blank
	  (accum|.province initialized empty).push .name
	
	{ ON: [ 'Sara', 'John', 'Marshal', 'Doug', 'Jenna' ],
	  QC: [ 'Ellie', 'Ann', 'Harry' ] }


### into _comprehension_

	.. into [initial accumulator value] [expr]
	.. into [initial accumulator value]
	  [code block]
	.. into [initial accumulator value] using [function]

Javascript features the array method `Array.prototype.reduce` which performs the reduction function, and SAI extends its applicability with the **into** compherension keyword.

In addition to the item (**it**) and the item key (**key**) available in other comprehensions, an accumulator variable (**accum**) is used when evaluating **into** expressions. The value of the expression becomes the value of **accum** the next time the expression is evaluated.

#### into inline

The **accum** variable is initialized by the value following **into** — in the example below `0` — and then each row in the collection is visited and we add `.age` to it. This adds up the ages of every friend.

	debug friends into 0 accum + .age
	
	> 185

#### into block

The **into** comprehension, like other comprehensions, has an inline version with an expression, and a long-form which takes a block of code.

A more complex example.  See if you can suss out how it works.

	    debug friends into blank
	  set accum[.province] to (self default 0) + 1
	
	> { ON: 5, QC: 3 }

Here’s a hint: **self** is a _magic variable_ used only in **set** statements. It is initialized to the previous value of the variable being changed by **set**. 

Another hint: **default** is an operator that evaluates to its right hand value if and only if the left hand value is _undefined_.

Last hint: **blank** initializes an object with no traits; it is the SAI equivalent of Javascript’s `{}`.  The comparable word for arrays/lists with no elements is **empty**; in Javascript you’d write `[]`.

#### into using

The addition of **using** lets you call an external function.  The function must always `return` the value you wish to be used as the accumulator so the value can be preserved across function calls.  (The block version of **into** takes care of this for you.)

	    set ageTotal to task as accumulator, row
	      return accumulator + row.age
	debug friends into 0 using ageTotal 
	
	> 185


### inc _statement_

	inc [var]

Increments (adds 1 to) the given variable.

	set a to 1
	inc a
	debug a
	
	> 2


### Infinity _literal_

	.. Infinity

Represents an infinitely large value. Generally obtained by attempting to evaluate an expression with a divisor of zero.

	debug 1/0
	
	> Infinity


### inherit _declaration_

	inherit:
	  [classname]
	  ...

Specify inheritance during object definition. 

An object can have multiple parents at each level of inheritance, as in the following example.

	object Licensed
	instance: licenseTag false
	..
	object Passengers
	instance: paxCount 0
	contract: paxMaximum
	..
	object Automobile
	inherit: Licensed, Passengers
	.. 
	object Sedan
	inherit: Automobile
	instance: paxMaximum 6
	..
	set myCar to create 'Sedan'
	debug myCar 
	> { licenseTag: false, paxCount: 0, paxMaximum: 6 }
	 
	debug myCar.isa
	> Sedan
	
	debug myCar.isof
	> { Licensed: 
	   { version: '0.0.0-unspecified',
	     isa: 'Licensed',
	     load: './sample/Keywords/Licensed.sai' },
	  Passengers: 
	   { version: '0.0.0-unspecified',
	     isa: 'Passengers',
	     load: './sample/Keywords/Passengers.sai' },
	  Automobile: 
	   { version: '0.0.0-unspecified',
	     isa: 'Automobile',
	     load: './sample/Keywords/Automobile.sai',
	     inherit: [ 'Licensed', 'Passengers' ] },
	  Sedan: 
	   { version: '0.0.0-unspecified',
	     isa: 'Sedan',
	     load: './sample/Keywords/Sedan.sai',
	     inherit: [ 'Automobile' ] } }

Note the use of **contract** in the _Passengers_ object; this requires any child object to offer a `paxMaximum` trait. Contracts can be fulfilled by class functions (**task**/**process**/**promise**), class traits (**given**) or **instance** traits.


### instance _declaration_

	instance:
	  [varname] [initial value]
	  ...

Define initial values for an object’s traits. When an object is created, instance traits are assigned the given values before the object’s **Instantiate** task is called.

	object Sock 1.0.0
	
	instance:
	  colour 'Brown'
	  pattern 'Argyle'
	  size 'M'
	  kind 'dress'
	
	Instantiate task
	  debug @ select list colour, pattern, size, kind
	
	....
	
	set aSock to create 'Sock'
	> { colour: 'Brown', pattern: 'Argyle', size: 'M', kind: 'dress' }


### is _operator_

	.. [expr] is [expr]

Returns **true** if the two expressions are completely indistinguishable.  More rigorous than **=** when objects differ in type.

	debug 0 = false
	debug 0 is false
	
	> true
	> false


### isa (object name) _trait_

	.. [object].isa

All prototyped SAI objects have an **isa** trait that identifies the object name. Further details about the object and its inheritance are found in the **isof** trait.

	object Fruit 1.0.0
	Instantiate task
	  debug 'I am a ${@isa}'
	
	set a to create 'Fruit'
	> I am a Fruit
	
	object Pear 1.0.0
	inherit: Fruit
	
	set b to create 'Apple'
	> I am a Pear


### isnt _operator_

	.. [expr] isnt [expr]

Returns **true** if the two expressions are in any way distinguishable. More rigorous than **!=** when objects are of differing types.

	debug 1 != true
	debug 1 isnt true
	
	> false
	> true


### isof (object info) _trait_ / _operator_

#### .isof trait

	.. [object].isof

All prototyped SAI objects have an **isof** trait that is a plain object that encapsulates detailed information about the SAI object and its heritage. 

Continuing from the **isa** example:

	debug a.isof
	
	> { Fruit: 
	>   { version: '1.0.0',
	>     isa: 'Fruit',
	>     info: './sample/Keywords/Fruit.sai' } }
	
	debug b.isof
	
	> { Fruit: 
	>   { version: '1.0.0',
	>     isa: 'Fruit',
	>     load: './sai/sample/Keywords/Fruit.sai' },
	>  Pear: 
	>   { version: '1.0.0',
	>     isa: 'Pear',
	>     load: './sai/sample/Keywords/Pear.sai',
	>     inherit: [ 'Fruit' ] } }

You can trace an object’s creation in order recursively by starting at the **isof** entry for the present object — `@isof[@isa]` — and stepping through the **inherit** array.

#### isof operator

	.. [object] isof [class name expr]

Returns true if the object is an instance of a class that is, or inherits from, the given class name.  

	class Parent 1.0.0
	 
	class Child 1.0.0
	inherits: Parent
	 
	set a to create 'Child'
	debug a isof 'Child'   // true
	debug a isof 'Parent'  // true


### isNaN _operator_

	.. isNaN \[expr]

Returns true if the expression is the **NaN** flag.  Note there is no other way to test for NaN than by using **isNaN**. Note also that capitalization matters.

	set a from ~parseInt 'This is not a number.'
	debug a           // NaN
	debug a = 0      // false
	debug a = false  // false
	debug a = NaN   // false
	debug isNaN a    // true


### iterate _statement_ / _comprehension_

What’s an iterable expression?  It’s an object that **yield**s values for iteration, or an object that on demand (via call to **[Symbol.iterator]** produces such an expression. (In ES6, native collection types based on **Array**, **Map**, and **Set** support lazy iteration.)

#### iterate statement

	iterate [iterable expression] (as [term ident])
	  [block]
	( else
	  [block] )
	
	iterate [iterable expression] using [function]
	( else
	  [block] )

Step through each result of an _iterable expression_, passing it through a block of code via the **it** magic variable.  If an **else** clause is present, that code is executed only if there is no iteration.

A disadvantage of using **iterate** is that you don’t get a **key** value, you only get the **it** value. There is also a performance penalty when compared to imperative types of processing.

    set seen to new ~Set
    seen.add 'horse'
    seen.add 'pig'
    seen.add 'horse'
    iterate seen
      debug it
    
    > horse
    > pig

The example uses the new *Set* collection from ES6.


#### iterate comprehension

	.. [collection] iterate
    
    .. chain [collection]
      iterate

Ensures the collection is an iterable. If it already is an iterable, return it unchanged. If it has a **Iterate** method, call it and return that iterable. If it's an Array, produce an iterator over its values. If it's an object, produce an iterator that returns for each trait a 2-element array with trait name, trait value. If it's just a plain value, produce an iterator that returns that value.

Using **iterate** in this way allows you to guarantee that processing is being done using an iteration rather than a static collection. To go the other way, use **collect**, which turns an iterable into an Array.

The following example follows the one in **Iterator**:

    ply inventory by it|1
      debug it
      
    > [ apple: 2, banana: 1 ]  // undesired result
    
    ply inventory iterate by it|1
      debug it
      
    > [ 'banana', 1 ]          // correct result
    > [ 'apple', 2 ]

The example wants to print out a sorted list of inventory items. 

The undesired result comes about because **by**, like most comprehensions, would prefer to process imperatively. So, even if you give **by** an object with a **Iterate** method, which all objects and arrays do, whether you put it there yourself or not, that method will not naturally be called. 

So, **by** converts the `inventory ` object into an array so it can be sorted. The array conversion produces an array of all enumerable traits; in the case of `Tally` objects, the only enumerable trait is `bag`, and so an array that looks like `[ bag ]` is sorted (to no effect) and then printed one element at a time.

When you force a call to **Iterator** with the **iterate** comprehension, you get the correct result you're expecting, as you thereby force **by** to use your custom iterator rather than a naive array conversion.

The upshot is that right now SAI favours imperative collections rather than lazy iterators except when specifically using the **iterate** statement or comprehension. I'm not sure that's the right way to go.


### Iterator _syntax_

    Iterator process (as [parameter list])
      [block]

This will be a little gritty, because ES6 is gritty. When you name an object process **Iterator** (note the specific uppercase initial), the function won't be assigned to the object trait `object.Iterator`. Instead, it will be assigned to `object[Symbol.iterator]`. 

The bad news is that this means you can't specifically refer to that trait by name in SAI without using the convoluted approach of `object[~Symbol.iterator]` (because **Symbol** is a global and globals must use the global scoping prefix).

The good news is this means you probably won't ever *have to* refer to it by name, because all of SAI's comprehensions, as well as the **iterate** statement, and ES6's `for-of` loop, all implicitly check for the existence of the magic `Symbol.iterator` function and will use it if present.

    object Tally 1.0.0
    instance:
      bag empty
    Count task 
      set bag|$ to (self default 0) + 1
    Iterator process
      each bag
        yield: key, it
      
    set inventory to create 'Tally'
    inventory.Count 'apple'
    inventory.Count 'banana'
    inventory.Count 'apple'
    iterate inventory
      debug it
      
    > [ 'apple', 2 ]
    > [ 'banana', 1 ]

In the example, when we **iterate** over `inventory`, a check is made to see if the object to iterate has an **Iterator** process, which in this case it does, so it is called, and then iteration takes place over the result. See the previous entry, **iterate comprehension**, for more on this.

Note that this sleight-of-hand doesn't apply to an object **task** (as opposed to **process**) named "Iterator"; in fact SAI will not let you use that name for an object task, because doing so would break expectations of what an iterator is supposed to do (e.g. yield things).  Gah, the cruft, it burns.


### it _mvar_

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
	.. [expr] observe 
	
	.. [collection] thru // it: each value in the collection
	.. [collection] audit 
	.. [collection] into 
	.. [collection] has
	.. [collection] highest
	.. [collection] lowest

When nesting contexts that create a **it** context, you will be unable to access “outer” values of **it** within the inner contexts unless you assign them to a name other than **it** using the **as** clause.

	ply: 1,2,3
	  ply: 4,5,6
	    debug it 
	
	// prints 4 5 6 4 5 6 4 5 6
	
	ply: 1,2,3
	  ply: 4,5,6 as inner
	    debug it
	
	// still prints 4 5 6 4 5 6 4 5 6
	
	ply: 1,2,3 as outer
	  ply: 4,5,6
	    debug outer
	
	// prints 1 1 1 2 2 2 3 3 3

When **it** is populated, you can also use the “unrooted” **attribute** ( . dot) and **lookup** ( | pipe) operators.  The following are all synonymous:

	set field to 'province'
	
	set quebeckers to friends has it.province='QC'
	set quebeckers to friends has it[field]='QC'
	set quebeckers to friends has it|field='QC'
	set quebeckers to friends has .province='QC'
	set quebeckers to friends has |field='QC'
 
(There is no unrooted [] lookup available.)


### keys _comprehension_

	.. [collection] keys 

Returns the keys (or indices) of a collection’s elements.

	debug fruit keys
	debug friends first keys
	
	> [ 0, 1, 2 ]
	> [ 'name', 'age', 'cat', 'province']


### key _mvar_

	.. key

Often a partner to **it**, **key** is the second most commonly used _magic variable_, populated by most iterators and comprehensions. Like all mvars, **keys** is only visible in attached expressions or code blocks, not in any functions that may be called within those expressions.

A complete list of **keys** enabled events:

	each [collection] // it: the trait name of each value in the collection
	ply [list] // key: the array index of each element in the array
	count [expr] // key: the number being counted
	
	.. [collection] thru // key: each trait name/array index of the collection
	.. [collection] audit 
	.. [collection] into 
	.. [collection] has 

An example:

	ply friends
	  debug key
	
	// prints: 0 1 2 3 4 5 6 7
	
	each friends[0]
	  debug key
	
	// prints: name age cat province

Similar to **it** in nested contexts, you are unable to access “outer” values of **key** within inner contexts unless you assign them to a name other than **key** using the **as** clause.

	count 3
	  count 3
	    debug key
	    // only the inner loop's 'key' is visible here. 
	
	// prints 0 1 2 0 1 2 0 1 2
	
	count 3 as i
	  count 3
	    debug i+','+key
	    // outer loop's 'key' now available here as 'i'
	
	// prints 0,0  0,1  0,2  1,0  1,1  1,2  2,0  2,1  2,2
	
	count 3
	  count 3 as j
	    debug key+','+j
	    // no, this doesn't work, you still can't access the outer 'key'
	    // 'key' always has the value of the innermost context
	
	// prints 0,0  1,1  2,2  0,0  1,1  2,2  0,0  1,1  2,2


### last _comprehension_

	.. [collection] last

Returns the last element in a collection as a stand-alone value or object. (If the collection is an iterator, it will be exhausted.)

	debug fruit last
	
	> Citron


### limit _comprehension_

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

If the collection is an iterable, it will only be fetched as many times as needed. (If you ask for elements offset from the end, the iterator will be exhausted because an iterator’s length can only be ascertained by exhausting it.)


### list _literal_

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


### local _declaration_

	local [varname] (, [varname], ... )
	set local [varname] to [expr]

Declare the modified variable to be limited to the current function scope. (Normally, variables are scoped to the object method they’re used in.)

Generally only needed when providing callback functions in poorly architected code.


### lowest _comprehension_

	.. [collection] lowest [expr]

Returns the collection element with the lowest value of the expression. Prepares the magic variables **it** and **key** for use by the expression.

	debug friends lowest .age
	> { name: 'Doug', age: 18, province: 'ON' }


### NaN _literal_

	.. NaN

**NaN** (capitalization matters) means Not a Number.  **NaN** is returned from some library calls on failure to convert a value into a number.  (The **number** operator returns 0 instead.)

	debug ~parseInt('The one ring.')
	> NaN
	
	debug number 'The one ring.'
	> 0

The _only_ way to test for **NaN** is to use the **isNaN** operator. 

	debug NaN = ~parseInt('The one ring.')
	> false  // !
	
	debug NaN is ~parseInt('The one ring.')
	> false  // !!!!
	
	debug isNan ~parseInt('The one ring.')
	> true


### nand _operator_

	.. [expr] nand [expr]

Performs the logical not-and operation. Returns **false** only if left or right expression are both _truthy_. Otherwise returns **true**.  

A semantic simplification of `not ([expr] and [expr])`.

	debug 0 nand 0 // prints 'true'
	debug 1 nand 0 // prints 'true'
	debug 0 nand 1 // prints 'true'
	debug 1 nand 1 // prints 'false'


### new _operator_

	.. new [prototype] ( [parameters] )

Instantiates a new object with the given prototype. If parameters are supplied, passes them to the object’s constructor.

**New** is used for traditional Javascript objects; objects where you have in-hand the prototype used to fabricate an instance that object. **New** trusts that the code to create that object has already been located and compiled.

**Create** is used for SAI objects; objects where you have in-hand an object name (as a string). **Create** doesn't assume pre-compiled prototypes; if the prototype isn't cached, it will attempt to load it via the `SAI.config.Loader` function. 

Since **new**'s prototypes are often created with **require**, and require is often found in **reference**, it is also often the case that the prototype is a *global* value, thus you will need to reference it with the **~** global scoping prefix:

    reference:
      express from require 'express'
      
    object HelloHTTP 1.0.0
    
    Instantiate task
      set @app from ~express // <--- note the use of ~ to access global
      
      @app.get '/', task as req, res
        res.send 'Hello HTTP!'
      
      set @server from @app.listen 3000, 'localhost', task
        with @server.address()
          debug 'Example app listening at http://${.address}:${.port}'

You'll also need to use **~** when creating Javascript built-in objects such as `Error`:

    if crocodiles
      throw new ~Error "Why do we even have that lever?"


### nop _statement_

	nop

No operation; no data; do nothing. This statement (or one like it) is necessary as a syntactical placeholder when a white-space indent is expected but you do not wish to put code in it.

	if x>26
	  nop
	else if x>13
	  set x - 13
	else if x>0
	  set x + 13


### nor _operator_

	.. [expr] nor [expr]

Performs the logical not-or operation. Returns **true** only if left or right expression are both _falsy_. Otherwise returns **false**.

A semantic simplification of `not ([expr] or [expr])`.

	debug 0 nor 0 // prints 'true'
	debug 1 nor 0 // prints 'false'
	debug 0 nor 1 // prints 'false'
	debug 1 nor 1 // prints 'false'


### not _operator_

	.. not [expr]

Performs the logical not operation. Returns **false** if the right expression is _truthy_, otherwise returns **true**.

	debug not false  // prints 'true'
	debug not 0      // prints 'true'
	debug not 'Sam' // prints 'false'
	debug not empty  // prints 'false'


### notb _operator_

	.. notb [expr]

Performs a bitwise logical not on a 32-bit signed integer.

	debug notb -8  // prints '7'
	
	 -8 in binary: 11111111111111111111111111111000
	 +7 in binary: 00000000000000000000000000000111


### number _operator_

	.. number [expr]

Attempts to convert the following expression into a numeric value. If it cannot, the result is 0.

	debug number '12'
	debug number 'ralph'
	> 12
	> 0


### null _literal_

	.. null

An empty value. I don’t have any example code for this.


### object _declaration_

	object [identifier] [version]

Begins the definition of an object. Only one object definition is permitted per file, and the object name must be the same name as the file name. 

In an object definition, the following sections are supported. See each keyword for more details. Also review the _Defining an Object_ document.

	reference:
    [object references]
    
	object [identifier] [version]
    
	inherit:
	  [list of objects to inherit from]
	
	contract:
	  [list of traits that child objects must provide]
	
	given:
	  [list of immutable object traits]
	
	instance:
	  [list of initial trait values for each instance]
	
	get [trait name to implement dynamically]
	  [code]
	set as [value]
	  [code] 
	
	[name] task/process/promise
	  [code that implements this task/process/promise] 


### observe _operator_

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

A warning: while you can **observe** an iterable expression, be careful that you don't drain it through observation. Heisenberg's uncertainty principle is very much at play with iterables: you can either have it or know what's in it.

N.B. **observe** very useful in **chain** expressions.


### orphan _declaration_

	.. task
	  orphan

It causes the @ scoping prefix within the function to refer to the context of the function call instead of the context of the function definition. 

You probably want to use this in combination with **local** variable definitions.

For clarifications and example code on this, see **task**.


### or _operator_

	[expr] or [expr]

If the left expression is **truthy**, returns it without executing the right expression, otherwise returns the right expression.

	debug 0 or 0  // prints '0'
	debug 1 or 0  // prints '1'
	debug 0 or 2  // prints '2'
	debug 1 or 2  // prints '1'


### orb _operator_

	[expr] orb [expr]

Performs a bitwise or on two 32-bit integers.

	debug 5 orb 11 // prints '15'
	
	 5 in binary: 00000000000000000000000000000101
	11 in binary: 00000000000000000000000000001011
	15 in binary: 00000000000000000000000000001111


### overlay _operator_

	.. [collection] overlay [collection]

Creates a new collection that is a composite of a copy of the left collection with all of the values in the right collection overlaid. If discrete keys are available in the left or right collection, they will be used intelligently. Undefined values on the right will not be assigned.

	Sample data
	
	set list1 to list Apple, Banana, Citron
	set list2 to list Kiwi, undefined, Mango
	set traits1 to: a 1, b 2, c 3
	set traits2 to: '1' 4, d 5
	
	debug list1 overlay list2
	> [ 'Kiwi', 'Banana', 'Mango' ]
	
	debug list1 overlay traits1
	> [ 'Apple', 4, 'Citron', d: 5 ]
	
	debug traits1 overlay traits2
	> { '1': 4, a: 1, b: 2, c: 3, d: 5 }
	
	debug traits1 overlay list2
	{ '0': 'Kiwi', '2': 'Mango', a: 1, b: 2, c: 3 }

Overlay also works with iterators and treats them like arrays.


### ply _statement_

	ply [list-like collection] ( as [item ident] ( , [key ident] ) )
	  [code block]
	( else 
	  [code block] )
	
	ply [list-like collection] using [function]
	( else
	  [code block] )

The **ply** iterator sequentially steps through all elements in an _array-like_ collection; it works on any object that has a **length** trait.  It accesses numeric traits from 0 to **length**-1, sending each trait value to the code block or function. If **length** is 0, the **else** clause is invoked instead.

The trait value is captured in the **it** mvar, and the trait number is captured as **key**.

	ply fruit 
	  debug '${key}: ${it}'
	else
	  debug 'There is no fruit.'
	
	> 0: Apple
	> 1: Banana
	> 2: Citron


### promise _declaration_

	[identifier] promise ( as [parameter list] )
	  [code block]
	
	.. promise ( as [parameter list] )
	  [code block]

Wraps the code block in a Promise-like function shell. Along with **resolve** and **reject**, forms a convenient bit of syntactic sugar for making Promise-like functionality.

This is probably best explained by just showing you what happens when you use it.

    set doThing to promise as url
      HeyServer url, task as request, result
        if result.success
          resolve result
        else
          reject result
    ..
    debug doThing.toString()
     
    function (p) {
      return new Promise(function($_resolve, $_reject) {
        var $url = p;
        $HeyServer($url, function(p, $result) {
          var $request = p;
          if (($56 = ($result.success))) {
            $_resolve($result);
          } else {
            $_reject($result);
          }
        });
      });
    }

So basically it throws a **Promise** wrapper around the function and allows you to use **resolve** and **reject** as statements. (The $56 in there is housekeeping for the **trial** mvar; V8 optimizes unused assignments like this away.)

It's not a big deal, just syntactic sugar, but in combination with chaining, can make code much cleaner. And that's why I made SAI.


### process _declaration_

	[identifier] process ( as [parameter list] )
	  [yielding code block]
	
	.. process ( as [parameter list] )
	  [yielding code block]

Creates a function that is expected to **yield** one or more values. This is an ES6 feature. **Process** does exactly the same thing as **task** except the generated code uses `function*` instead of `function`. 

If you're not familiar with generators/yielding, here is a very simplified overview.

    set Candidates to process
      count 1 to 100 as x
        count 1 to 100 as y
          if 1<x and x<y and x+y<100
            yield: x x, y y, s x+y, p x*y

The Candidates process, when invoked, runs all of the code in the process up until the first **yield**, then returns, handing you a process object, here stored in the variable `iter`:

    set iter from Candidates

That object is an _iterator_; it is a stateful representation of a `Candidates` process. Each time you call a process, you get a new iterator. Once you have an iterator, you can _iterate_ through it. Each iteration returns the next value _yielded_ by the process.

Iteration takes place by calling the **.next** task on the iterator.

    debug from iter.next
     
    > { value: { x: 2, y: 3, s: 5, p: 6 }, done: false }

You can see that **.next** returns a simple object with two fields, **.value** and **.done**.  (In our iterator, the value is the first qualified candidate represented by a simple object with four fields: x, y, s and p.)

**.value** holds whatever was **yield**ed. **.done** is a boolean flag that indicates whether the iteration is complete; that is, whether another call to **.next** would result in a newly generated value.

Each time you call **.next** you will get a new value.

    debug from iter.next
    debug from iter.next
    debug from iter.next
     
    > { value: { x: 2, y: 4, s: 6, p: 8 }, done: false }
    > { value: { x: 2, y: 5, s: 7, p: 10 }, done: false }
    > { value: { x: 2, y: 6, s: 8, p: 12 }, done: false }

Here is a bit of code that will keep calling **.next** until the **.done** flag is set, saving the result in a four item list.

    set cache to empty            // empty array
    do until result.done          // check .done at the end of each loop
      set result from iter.next   // next iteration to result
      cache.push result           // save result in cache
    debug cache limit -4          // print last four rows
     
    > [ { value: { x: 48, y: 50, s: 98, p: 2400 }, done: false },
        { value: { x: 48, y: 51, s: 99, p: 2448 }, done: false },
        { value: { x: 49, y: 50, s: 99, p: 2450 }, done: false },
        { value: undefined, done: true } ]
 
Once the **.done** flag is set, the iterator is said to be _exhausted_. Notice that **.value** is *undefined* when the **.done** flag is set.

Processes, generators and iterators are very powerful tools because they allow computations to be *lazy*, that is, for data to be generated only as it is needed, thus vastly reducing memory requirements. (The Python language is very useful for scientific computing because it is a primarily lazy language because large data sets can be manipulated with modest resources.)

SAI has many affordances for processes and iterators, including native support with all comprehensions. As a very simple example, all of the above code could be replaced with this simple expression:

    debug Candidates() limit -4
    
    > [ { x: 48, y: 49, s: 97, p: 2352 },
        { x: 48, y: 50, s: 98, p: 2400 },
        { x: 48, y: 51, s: 99, p: 2448 },
        { x: 49, y: 50, s: 99, p: 2450 } ]
 
 (Notice how the limit comprehension itself deals silently with **.next** and **.done**, and automatically gives you just a list with only the **.value** of each iteration.)


### reference _declaration_

	reference:
	  [name] [expr]
	  ...

Declare global variables at the top of a **.SAI** source file. This is the only way to make global variables; inside a reference declaration. The syntax is the same as a **fields** structure definition, with name/value pairs separated by commas or newlines.

    reference:
      MIN 0, MAX 100
      express require('express')
      Vector2D 'Vector2D ^1.0.0'

Recall that all global variables can only be referenced in code by use of the **~** global scoping prefix. So while you define globals as above, you use them as below:

    count to ~MAX
      debug key
    ..  
    set @app from ~express
    ..
    set origin to create ~Vector2D 0, 0
    ..


### reject _statement_

	reject ( [expr] )

Call the failed potential outcome for a function declared with **promise**. This does not implicity end execution, however, the way **return** does.

For an example, see **promise**.


### require _verb_

	.. require [filename]

As in Javascript, and for clarity should be exclusively reserved for use in **reference** sections.

    reference:
      express require('express')
    ..
    set @app to ~express()


### resolve _statement_

	resolve ( [expr] )

Call the successful potential outcome for a function declared with **promise**. Doesn't implicitly end execution the way **return** does, so make sure you mind the code path.

For an example, see **promise**.


### return _statement_

	return ( [expr] )

Return a value to the caller of a **task**. Works just like Javascript.

    set multiply to task as a, b
      return a*b
      
    debug from multiply 2, 4
    
    > 8


### select _statement_

	.. [collection] select [keys]

Return a new collection that is the subset of the original collection identified by the provided list of keys/indices.

	debug fruits select: 2, 0;
	> [ 'Citron', 'Apple' ]
	
	debug friends thru it select list name, age;
	> [ { name: 'Sara', age: 32 },
	     { name: 'John', age: 19 },
	     [ name: 'Ann', age: 23 } ]


### self _mvar_

	set [var] .. self ..

A magic variable used only in a **set** statement that contains the original value of the variable that is being set/modified.

The following lines are equivalent; one of them is easier to read than the other.

    set totals|key to (cache|key default 0) + amount
    set totals|key to (self default 0) + amount
  

### set _declaration_

	[identifier] set ( as [ident] )
	  [code block]
	( get 
	  [code block] )

Declare a _setter_ for a dynamic object trait. Cannot be used inside a function body.

This example object implements *Distance*, storing the value normalized to meters. You can get and set the value in centimeters and miles through the use of dynamic traits.

    object Distance 1.0.0
    instance: meters 0
    
    centimeters set as val
      set @meters to val/100
    get
      return @meters * 100
    
    miles set as val
      set @meters to val * 1609.344
    get
      return @meters / 1609.344
 
 And in use:
 
    set trip to create 'Distance'
    set trip.meters to 500
    debug trip.meters       // > 500
    debug trip.centimeters  // > 50000
    debug trip.miles        // > 0.31068559611867
    set trip.miles to 10
    debug trip.meters       // > 16093.44


### set _statement_

	  set [ident] to [expr]
	  set [ident] from [function] ( [parameters] )
    set [ident] via [function]
	  set [ident] [operator] [expr]  
	  set [ident] [unary operator]

Assign a value to an identifier. That's right, you don't use the equals sign for assignment. Ugh, whose idea was that anyway? 

    set a to 2
    set a from ~Math.pow self, 2
    set a via ~Math.sqrt
    set a * 4
    set a -
    debug a
    
    > -8    

Note: The **self** mvar refers to the current value of the variable presently being set.


### super _verb_

	super ( [ parameters ] )
	.. super ( [ parameters ] )

Call the previous ancestral version of the current object method. This doesn't happen by default; if you want to chain backwards up the inheritance tree you must do it with **super**.

Note there is *no other way* to access an overridden ancestral object method than by using **super** within that specific overriding method itself. SAI is very strict about inheritance that way. Don't even bother exploring the prototype chain.

    object Parent 
    instance: name 'unknown'
    Instantiate task as name
      set @name to name
      
    object Child
    inherit: 'Parent'
    instance: age 'unknown'
    Instantiate task as name, age
      super name
      set @age to age
      
    set billy to create 'Child' 'Billy', 12
    debug billy
    
    > { name: 'Billy', age: 12 }    

Contrary to what you might expect, **super** _does not_ use the **@** scoping prefix; that's because super _always and only_ refers to the current object. You cannot call **super** on any other object.

If you want to pass arguments to a **super** method without specifying them discretely, the following really ugly idiom gets the job done.

    super.apply @ $$


### switch _statement_

	switch [expr] ( as [trial ident] )
	  case [expr] ( , [expr] ... )
	    [code]
	  ( default
	    [code] )

Choose among alternatives based on expression equality. The expression under evaluation is available to all codepaths as **trial** (which can be renamed with the **as** clause).

	switch from ~System.IO.Keypress as key
	  case 'n', 'N'
	    @Move 0,-1
	  case 's', 'S'
	    @Move 0,1
	  case 'e', 'E'
	    @Move 1,0
	  case 'w', 'W'
	    @Move -1,0
	  case ' '
	    @Jump
	  case '?'
	    @Help
	  default
	    @Emit 'Key [${key}] isn't used; type ? for help.'


### task _declaration_

	[identifier] task ( as [parameters] ) / ( expects [parameters] )
	  [code]
	
	.. [task] ( as [parameters] ) / ( expects [parameters] )
	  [code]

Define a block of code as an object trait or anonymous function. It’s probably best to explain this by showing what Javascript is made.

#### task trait

The first example is a task trait on an object. It takes two standard parameters, name and value.

	Instrument task as name, value
	  debug `${@context} ${name}: ${value}

Generated code:

	function (p, $value) {
	  var $name = p,
	    $ = this;
	  console.log('' + $.context + ' ' + $name + ': ' + $value);
	}
	

You’ll note that the first parameter in a SAI-generated function is always `p`, which is explained below. More importantly, however, note the assignation `$ = this`.

In SAI-generated code, the `$` variable is used as a buffer for the _this_ context. When executing a task trait, SAI captures the current _this_ with `$=this` to provide a reliable context for anonymous functions.

#### anonymous task

Here’s the same task but for anonymous use:

	set anon to task as name, value
	  debug `${@context} ${name}: ${value}

Generated code:

	function (p, $value) {
	  var $name = p;
	  console.log('' + $.context + ' ' + $name + ': ' + $value);
	}

Notice how the anonymous task doesn’t capture `this.` into the `$` variable the way the trait task does. 

Thus, anonymous tasks automatically bind to the context that created them. This is usually what you want when creating anonymous tasks, and is why the `var self=this` idiom has so much traction in Javascript. SAI builds this idiom into the language.

However, if you don’t want this behaviour for a particular anonymous task, include the **orphan** statement in it.

	set anon to task as name, value
	  orphan
	  debug `${@context} ${name}: ${value}

Generated code:

	function (p, $value) {
	  var $name = p;
	  var $ = this;
	  console.log('' + $.context + ' ' + $name + ': ' + $value);
	}

Orphan anonymous tasks bind to the _calling_ context, rather than to the context that created them.

#### positional vs. named parameters

The second example is a task which expects two named parameters, $angle and $magnitude. As shown above, the first parameter in generated code is always `p`. Named parameters are passed as traits within `p`.

	SetPolar task expects $angle, $magnitude
	  set @x to $magnitude * ~Math.cos($angle)
	  set @y to $magnitude * ~Math.cos($angle)

Generated code:

	function (p) {
	  var $ = this;
	  _$AI.expectsThrow(p, {
	    "angle": true,
	    "magnitude": true
	  }, 'SetPolar');
	  $.x = (p.magnitude * Math.cos(p.angle));
	  $.y = (p.magnitude * Math.sin(p.angle));
	} 

When you use **expects**, a call to _expectsThrow_ is included to validate your assumptions. 

This task is called by naming the parameters:

	@SetPolar angle 45o, magnitude 3

Which generates this code:

	 $.SetPolar({
	    angle: 0.7853981633974483,
	    magnitude: 3
	  });

Notice how named parameters are encapsulated in a plain JS object and passed in the first function call argument (which is always named `p`). 

It is not necessary to use the **expects** clause to used named parameters. All **expects** does for you is check to see if the names (and types) are as expected. Here is the function without it:

	SetPolar task
	  set @x to $magnitude * ~Math.cos($angle)
	  set @y to $magnitude * ~Math.cos($angle)

Generating this:

	function (p) {
	  var $ = this;
	  $.x = (p.magnitude * Math.cos(p.angle));
	  $.y = (p.magnitude * Math.sin(p.angle));
	}

The use of named parameters with the **$** scoping prefix generates code that assumes the first argument `p` will have the expected named traits.

Refer to the entry on **expects** for more on what it does.


### throw _verb_

	throw [expr]

Trigger exception handling.

    try
      throw new ~Error 'Oh no!'
    catch 
      return error.message

You should probably look at the Javascript documentation.


### thru _comprehension_

	.. [collection] thru [expr]
	
	.. [collection] thru ( as [it ident] (, [key ident] ) )
	  [code]
	  return [new item value]
	
	.. [collection] thru using [function]

Pass each element of a collection “thru’ an expression, code block, or previously defined function. The result of the expression becomes the new value in a copy of the collection. 

Conversion to uppercase:

	debug fruit thru .toUpperCase()
	 
	> [ 'APPLE', 'BANANA', 'CITRON' ]

A more complex formatting that could be an expression but I needed a block example:

	debug friends #cat thru
	  return '${key+1}) ${.name}, age ${.age}, lives in ${.province}'
	 
	> [ '1) Sara, age 23, lives in ON',
	     '2) Jon, age 19, lives in QC',
	     '3) Ann, age 23, lives in QC' ]

Passing values **thru** a function:

	set rot13 to task
	  set out to ''
	  count $length
	    set char to $charCodeAt(key)
	    switch char >> 5
	      case 2,3
	        with char andb 31
	          if it > 26
	            nop
	          else if it > 13
	            set char - 13
	          else if it > 0
	            set char + 13
	    set out + ~String.fromCharCode(char)
	  return out
	
	debug fruit thru using rot13
	 
	> [ 'Nccyr', 'Onanan', 'Pvgeba' ]
  
The function called by the **using** variant receives two parameters:

	set instrument to task
	  debug $$ 
	  return $
	 
	debug fruit thru using instrument
	
	> { '0': 'Apple', '1': 0 }
	> { '0': 'Banana', '1': 1 }
	> { '0': 'Citron', '1': 2 }
	> [ 'Apple', 'Banana', 'Citron' ]


### traits _literal_

	.. traits [key] [term], [key] [term], ... (;)
	.. traits 
	  [key] [term], [key] [term], ...
	  [key] [term]
	  ...

Used to specify the creation of a plain object with a set of key/term pairs. (Contrast with **fields**.)  When you want to be specific about creating a plain object from a set of of keyed values & literal terms, use **traits**. 

The **key** is an identifying word or other string, specified without quotes (although quotes may be used if desired/necessary). If a **\\#** preceeds the key (a hashtag), the key will be assigned a value of **true**. The **term** is any valid term (see **list** for a description of valid terms).

See **fields** for examples.


### trial _mvar_

	if [expr] 
	  .. trial ..
	 
	switch [expr] 
	  case [match] 
	    .. trial ..
	  default
	    .. trial ..

A magic variable set to the value tested in an **if** or **switch** statement. 

In an **if** statement, **trial** is only valid in the body of the first code block.

	if readline()
	  // trial is available here 
	else
	  // trial is undefined here

In a **switch** statement, **trial** is available through all **case**s and the **default**.

	switch @Keypress.toUpperCase()
	  case 'N'
	    @Move 0,-1
	  case 'S'
	    @Move 0,1
	  default
	    debug 'I don't know what ${trial} means.'
	...

You can grant a specific name to the tested value with the **as** clause:

	if @Keypress as key
	  switch key.toUpperCase()
	...

Note that **trial** receives the tested value; the final result of the **if** or **switch** expression, not the value of any component:

	if @Keypress>0
	  debug trial
	
	// the debug statement can only ever print 'true'

Using the parenthetical **as** is one solution to this problem, but there are better ways of writing this code:

	if (@Keypress as key) > 0
	  debug key
	
	// reports the actual value of key


### true _literal_

	.. true

The boolean value true. 


### try _statement_

	try
	  [risky code]
	catch ( as [error ident] )
	  [error handling code]
	( finally
	  [clean-up code] )

Exception handling construct. For details, see the Jasacript exception documentation.

    set file to new File 'output.log'
    try
      file.Open
      file.Write 'Hey, it's a log'
    catch 
      return error.message
    finally
      file.Close
  
  
### to _clause_

	set [varname] to [expr]
	count [start] to [end]
	count down [start] to [end]

Used as a syntactic clarifier in **set** and **count** statements.


### typeof _operator_

	.. typeof [expr]

Returns the Javascript-native type of an expression.  See e.g. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof][2] for details.


### undefined _literal_

	.. undefined

A literal indicating no value, or a variable that has not been assigned. 

This compiles directly to Javascript’s `undefined`.


### unless _statement_

	unless [expr]
	  [code if expr is false]
	else 
	  [code if expr is true]

Execute the following code block if the given expression evaluates to _falsy_. Executes from an **else** clause otherwise. All this really does is prepend a logical **not** to the expression. It’s for clarity, see?


### until _statement_

	until [expr] 
	  [code]
	  ( break ) // optional exit the loop
	  ( continue ) // optional short-cut the loop 
	  [more code]
	
	do until [expr] 
	  [code]

Executes the code block repeatedly, as long as the expression is false. This is essentially a **while** statement with the test inverted.

The basic **until** variation performs the test first, so there is a chance the code will not execute. The **do until** variation executes the block first, then performs the test.

	until true
	  debug 'You will never see this.'
	
	do until true
	  debug 'You will see this once.'

**Until** _does not_ make its test value available for use as **it**. Because the code block only executes when the test value is _falsy_, there’s really no point.


### update _operator_

	set [variable] update [collection]

Update a collection variable with a set of keys/values. Much like **overlay** except that the original data is overlaid in-place. Works on lists and traits, and accepts lists, traits and iterators for update data.

Updating a list:

	debug fruit
	
	> [ 'Apple', 'Banana', 'Citron' ]
	
	set fruit update: '1' 'Pear', '3' 'Guava'
	debug fruit
	
	> [ 'Apple', 'Pear', 'Citron', 'Guava' ]
	
	set fruit update list Grape, undefined, Melon
	debug fruit
	
	> [ 'Grape', 'Pear', 'Melon', 'Guava' ]

Updating traits:

	set friend to friends|1
	debug friend
	
	> { name: 'John', age: 19, cat: true, dog: true, province: 'ON' }
	
	set friend update: name 'Jon', province 'QC'
	debug friend
	
	> { name: 'Jon', age: 19, cat: true, dog: true, province: 'QC' }
	
	set friends update: undefined, friend
	debug friends
	
	[ { name: 'Sara', age: 23, cat: true, province: 'ON' },
	  { name: 'Jon', age: 19, cat: true, dog: true, province: 'QC' },
	  { name: 'Ellie', age: 22, province: 'QC' },
	  { name: 'Marshal', age: 21, dog: true, province: 'ON' },
	  { name: 'Doug', age: 18, province: 'ON' },
	  { name: 'Ann', age: 23, cat: true, province: 'QC' },
	  { name: 'Harry', age: 31, province: 'QC' },
	  { name: 'Jenna', age: 28, dog: true, province: 'ON' } ]


### using _clause_

	iterate [expr] using [function]
	each [expr] using [function]
	ply [expr] using [function]
	.. [expr] by using [function]
	.. [expr] audit using [function]
	.. [expr] has using [function]
	.. [expr] into [value] using [function]
	.. [expr] observe using [function]
	.. [expr] alter using [function]

Use a previously defined function with an iterator or comprehension. Please see the relevant comprehension for examples and details on the use of **using**.


### values _comperension_

	.. [collection] values 

Returns the values of a collection’s elements.

	debug fruit values
	debug friends first values
	
	> [ 'Apple', 'Banana', 'Citron' ]
	> [ 'Sara', 23, true, 'ON' ]


### via _operator_

	.. [expr] via [function]

A syntactical shortcut for `function(expr)`; the following are synonymous:

	  set a from ~Math.sin b
	  set a to b via ~Math.sin

Much more useful in this case, though:

    set b via ~Math.sin

I'm not real happy with **via**, let's see how it ages.


### while _statement_

	while [expr] ( as [ident] )
	  [code]
	  ( break ) // optional exit the loop
	  ( continue ) // optional short-cut the loop 
	  [more code]
	
	do while [expr] 
	  [code]

Executes the code block repeatedly, as long as the expression is true.

The basic **while** variation performs the test first, so there is a chance the code will not execute. The **do while** variation executes the block first, then performs the test.

	while false
	  debug 'You will never see this.'
	
	do while false
	  debug 'You will see this once.'

**While** makes its value available for use as **it**, as below. 

	while from file.NextLine
	  @story.push it

**Do while** _does not_ use **it**, because the expression is not evaluated until after the first pass through the code, thus the first **it** result would always be **undefined**.


### with _statement_

	with [expr] ( as [ident] )
	  [code]

Allows the use of the **it** magic variable (and the . and | lookups) within an arbitrary block of code. 

	with customer
	  set label to '''
	    ${.name}
	    ${.address1}
	    ${.address2}
	    ${.city} ${.region} ${.postcode}


### xor _operator_

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

 
### xorb _operator_

	.. [expr] xorb [expr]

Performs a bitwise XOR operation on two 32-bit integers.

	debug 3 xorb 6 // prints '5'
	
	3 binary: 00000000000000000000000000000011
	6 binary: 00000000000000000000000000000110
	5 binary: 00000000000000000000000000000101


### yield _verb_

	yield [expr]
	.. yield [expr]

Used with functions defined as **process**; see that keyword in this documentation, and the EcmaScript 6 documentation for details.

    set OddNumbers to process
      set i to 1
      while true
        yield i
        set i + 2
        
    set myOdds from OddNumbers
    debug myOdds.next
    debug myOdds.next
    debug myOdds.next
    
    > { value: 1, done: false }
    > { value: 3, done: false }
    > { value: 5, done: false }
    
    iterate OddNumbers() limit 4
      debug it
    
    > 1
    > 3
    > 5
    > 7


### yielding _verb_

	yielding [process]
	.. yielding [process]

Yields to another process until that process is done yielding. Equivalent to Javascript’s `yield *` syntax. Essentially, **yielding** calls another process as a subroutine.

    // The Mirror process yields its first argument
    // then reverses it (in ASCII), yields that
    // then terminates
    
    set Mirror to process as str
      yield str
      yield str.split('').reverse().join('')
    
    // FruitSalad process is yielding an invocation of Mirror 
    // for each fruit, then terminates
    
    set FruitSalad to process
      ply fruit
        yielding Mirror(it)
      
    // access each generated value in FruitSalad in turn
    iterate FruitSalad()
      debug it
      
    > Apple
    > elppA
    > Banana
    > ananaB
    > Citron
    > nortiC

In the example, Mirror yields twice, and FruitSalad yields to Mirror three times (once for each fruit), so the final iteration result is six values. 


[1]:	http://www.sitepoint.com/javascript-truthy-falsy/
[2]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof