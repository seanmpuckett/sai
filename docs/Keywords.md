
## Keyword samples

Sample code for each keyword.

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
	() - optional syntax or component
	
	\[block] - an indented block of code
	\[expr] - any expression/value
	\[function] - a function value
	\[identifier] - a variable or method name
	
	Left/right expression - an expression on the left/right side of an operator

### ACCUM

A magic variable active only within a **gather** clause or code block. Represents the static value that accumulates changes during gather’s iteration over a data set.

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

A non-mutating comprehension, audit is used to pass all values in a collection into an expression, code block or method. Audit doesn’t alter the collection, it just ‘pipes’ all values and keys/indices.

_Note: **audit** cannot be used with true iterators, as an iterator cannot be examined without exhausting it._
 
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

Neither **observe** nor **audit** alter chained data in any way. This example shows how one could add instrumentation to a process in a light-weight fashion.




BLANK = 'blank'i
BREAK = 'break'i
BY = 'by'i
CASE = 'case'i
CATCH = 'catch'i
CHAIN = 'chain'i
COPY = 'copy'i
CONTINUE = 'continue'i
CONTRACT = 'contract'i
COUNT = 'count'i
CREATE = 'create'i
DEC = 'dec'i
DEFAULT = 'default'i
DELETE = 'delete'i
DESC = 'desc'i
DESCENDING = 'descending'i
DOWN = 'down'i
EACH = 'each'i
ELSE = 'else'i 
EMPTY = 'empty'i
END = 'end'i
EQ = 'eq'i 
ERROR = 'error'i
EXISTS = 'exists'i
EXPECTS = 'expects'i
FINALLY = 'finally'i
FIELDS = 'fields'i
FIRST = 'first'i
FROM = 'from'i
GATHER = 'gather'i
GET = 'get'i
GIVEN = 'given'i
HAS = 'has'i
HIGHEST = 'highest'i
IF = 'if'i
INITIALIZED = 'initialized'i
INTO = 'into'i
INC = 'inc'i
INHERIT = 'inherit'i
ISNT = 'isnt'i
IS = 'is'i
ITERATE = 'iterate'i
IT = 'it'i 
KEYS = 'keys'i
KEY = 'key'i
LAST = 'last'i
LIMIT = 'limit'i
LIST = 'list'i
LSH = 'lsh'i
LOCAL = 'local'i
LOWEST = 'lowest'i
MOD = 'mod'i
NAND = 'nand'i
NEW = 'new'i
NOR = 'nor'i
NOT = 'not'i
NOTB = 'notb'i
NUMBER = 'number'i
OBJECT = 'object'i
OBSERVE = 'observe'i
ORPHAN = 'orphan'i
OR = 'or'i
ORB = 'orb'i
OVERLAY = 'overlay'i
TRUE = 'true'i
FALSE = 'false'i
PLY = 'ply'i
PROMISE = 'promise'i
PROCESS = 'process'i
REAP = 'reap'i
RESOLVE = 'resolve'i
REJECT = 'reject'i
REFERENCE = 'reference'i
RETURN = 'return'i
RSH = 'rsh'i
SELECT = 'select'i
SELF = 'self'i
SET = 'set'i
SOW = 'sow'i
SUPER = 'super'i
SWITCH = 'switch'i
TASK = 'task'i
THROW = 'throw'i
THRU = 'thru'i
TRAITS = 'traits'i
TRIAL = 'trial'i
TRY = 'try'i
TO = 'to'i
TYPEOF = 'typeof'i
UNLESS = 'unless'i 
UNDEFINED = 'undefined'i
UPDATE = 'update'i
USING = 'using'i
VALUES = 'values'i
VIA = 'via'i
WHILE = 'while'i
WITH = 'with'i
XOR  = 'xor'i
XORB  = 'xorb'i
YIELDING = 'yielding'i
YIELD = 'yield'i
