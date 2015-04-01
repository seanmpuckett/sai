## Hello Basics

Here are some small programs rendered in SAI. All are coded within the NodeJS ecosystem.


### Hello, World!

We need some way to launch the SAI runtime from native Javascript. In most cases it looks just like this, though your installation may vary. 


**index.js**

	var SAI = require('SAI'); 
	SAI.configure({paths:[__dirname]});
	new SAI.require('HelloWorld')();

The important thing to note is the call to __SAI.configure__ which sets the directory where SAI object source files live.

Then __SAI.require__ is called to create a standard Javascript prototype for the HelloWorld object. Calling __new__ on a prototype, as always, creates a new object with that prototype and runs its constructor.


**HelloWorld.sai**

	object HelloWorld 0.1.0
	Instantiation task
	   debug 'Hello, World!'

Run this, and on the console appears:

> Hello World

So what do these three lines have to say to us? 

Let’s have a look, line by line.

	object HelloWorld 0.1.0

SAI is an object-oriented language, and in order to execute any code at all, you must create an object that contains and defines that code. SAI object definitions are saved as plain text files with the extension __.sai__, and each file defines one (and only one) object.  

Objects must have formal names that describe what kind of object it is, and should have version numbers (_SemVer_ numbers, to be specific). 

So, in the first line, we define an object called _HelloWorld_ and give it the version number 0.1.0.

	Instantiate task

When an object is instantiated -- when memory is allocated for an instance that object -- the first thing that object does after setting up its traits is call its own __Instantiate__ task. One could think of Instantiate as a constructor, but the formal object construction happens behind the scenes. Instantiate takes place after everything is ready.

_Note: object verbs/tasks/methods should properly be capitalized in order to differentiate them from object fields/traits/properties. While this differs from JS’s traditional coding style, it does make code clearer, and clarity trumps tradition._

The keyword __task__ is essentially equivalent to JS's __function__ in that it is used to define a chunk of code that can be called. In this example we don't have any parameters to our object's __Instantiate__, so no parameters are described after __task__.

	    debug 'Hello, World!'
 
Because indent whitespace is semantically significant in SAI, braces are not needed. Instead, the code that forms the body of the task is indented by one or more spaces (two spaces per level of indent is preferred).

__debug__ is a verb; a built-in code function that puts a line of text on the output console. In SAI, all lines of code begin with a verb directing some action to take place. Because of this consistency, parentheses around parameters are typically not needed for simple expressions (however, they can be used at will).  

Because line endings are also significant in SAI, it is not necessary to signify the end of a line of code with a semi-colon or other indicator. So this line of code is functionally equivalent to `debug('Hello, World!');`.

SAI discourages complex run-on code by making multi-line statements difficult (but not impossible), except in specific instances where clarity can instead be encouraged through using multiple lines.

And that's a simple three line example of a trivial yet functional SAI object that with source code that contains only words, white space and common punctuation. 

In general, SAI code does not become too much more symbol-laden. However, four symbols in particular are very important as a means of asserting variable scope, and we’ll introduce three of them in the next example.


### Hello HTTP

Keep in mind that SAI isn't a new environment, it's just a new way of creating programs in the old one. This sample shows bringing up a trivial HTTP server in node using express.

We'll omit the __index.js__ in these future examples; it looks just like the one above though requiring a different SAI object each time. Just remember: all it does is require the SAI framework, specify what directory SAI objects are found in, then instantiates a single object. That object takes it all from there.

**HelloHTTP.sai**

	reference:
	  express from require 'express'
	
	object HelloHTTP 1.0.0
	
	Instantiate task
	  set @app from ~express
	
	  @app.get '/', task as req, res
	    res.send 'Hello HTTP!'
	
	  set @server from @app.listen 3000, 'localhost', task
	    with @server.address()
	      debug 'Example app listening at http://${.address}:${.port}'       
  
On my system, this prints
  
>  Example app listening at http://127.0.0.1:3000
  
And when I access http:/127.0.0.1:3000 with a browser, I get the response:

> Hello HTTP!

Let's take it line by line again.
  
	reference:

References are global variables. They should only be used for __require__ and for preset constants or configuration values. The colon __:__ begins the definition of a series of named fields, like {} would be used in Javascript.

	  express from require 'express'

The first term in a field definition is the field name, in this case `express`. Everything after that term is an expression that provides the value of the field, in this case `from require 'express'`. 

Here, `require` is the same require function provided by Node. If a verb isn't at the beginning of a line, we can invoke it one of two ways, as in `from require 'express'`, or by using parenthesis immediately following it as one would in Javascript: `require('express')`. Because SAI seeks to reduce the need for symbology and encourages readability, __from__ is the preferred form. (By putting `from` _in front_ of the verb, it is more clear when one is reading source that a verb is being invoked, rather than a value being referenced.)

All references must be declared before any objects are defined, and now that that’s done we can continue.

	object HelloHTTP 1.0.0
	Instantiate task
  
These lines are familiar; they declare the beginning of an object named 'HelloHTTP' and define code that will execute when that object is instantiated.
  
	  set @app from ~express

This line introduces two of the four major _scoping prefixes_ used in SAI. 

It also introduces the __set__ verb, which is how one assigns values in code. In SAI, one does not use the equals sign __=__ for assignment. Equals is _only used in comparisons_. 

The first scoping prefix used here is the at sign __@__, which translates directly in Javascript to `this.`.  Variables prefixed with @ always belong to the instance of the object that is running the current code. You also use the @ prefix to refer to tasks that are attached to an object.  (If __@__ appears by itself, it translates to `this` by itself.)

The other prefix is the tildis __\~__ which is always used to indicate a global variable or function. A good mnemonic for the global scope prefix is to think of the variable as just waving in the wind \~\~\~\~ it's unattached to anything.

Now, knowing what you know about `from` you can see that this statement executes the global verb `~express` (which we defined in the references) and assigns the resulting value to the object variable `@app`. In Javascript, this would be `this.app=express();`

	  @app.get '/', task as req, res
	    res.send 'Hello HTTP!'

First term in a line is a verb: `@app.get` followed by comma-separated parameters. First `'/'`, and then `task as req, res` -- but note that the keyword __task__ also requires an indented block of code following as the task definition, so the next line, indented, is part of the second parameter. 

Here the appearance of __task__ is followed by the __as__ keyword, which names any top-level parameters that might be passed to the task. In this case, __req__ and __res__. In SAI, variables that don't have a scoping prefix are _local_ variables and exist only within the scope of the task that encloses them (exceptions apply, see the reference docs). 

The body of the task is a simple verb call: `res.send 'Hello HTTP!'`, which sends that message to the connecting web browser. 

	  set @server from @app.listen 3000, 'localhost', task
  
Another easy to parse line, we're setting the object variable __server__ to the result of a call to `@app.listen` with the parameters `3000`, `'localhost'` and a task which itself has no parameters of its own but has the body:

	    with @server.address()
	      debug 'Example app listening at http://${.address}:${.port}'       

SAI, like Javascript, has a __with__ keyword, but they do not work the same way. Javascript's __with__ is mysterious and dangerous, and can dramatically slow down your code because what it does is inobvious. SAI fixes the problems of JS's __with__ and in so doing allows your code to be shorter and clearer.

SAI's __with__ takes the value of the expression following, and for the indented code block that follows, makes it available with the third scoping prefix; the dot __.__.  A dot with nothing before it is a shorthand way of referring to, quite literally, __it__.  In English, _it_ is used as a shorthand to help us avoid repeating the same nouns over and over, and in SAI grammatical shorthands like the dot prefix are used in the same way.

In the `debug` line, notice that the string enclosed within quotes uses the EcmaScript 6 string composition operator __${ _expression_ }__ to embed the server's listening address and port, which are specified using the dot scoping prefix. If we weren't using string composition or the `with` shortcut, that statement would look more like this:

	debug 'Example app listening at http://' + @server.address().address + ':' + @server.address().port

Using `with`, that becomes the less repetitive:

	with @server.address()
	  debug 'Example app listening at http://' + .address + ':' + .port
  
And with string composition as in the example, it's very nice and tidy.

	with @server.address()
	  debug 'Example app listening at http://${.address}:${.port}'       

You’re not forced to use `with` or string composition. But they do make code clearer and shorter, reduce the possibility of mistakes and make reviews simpler. That’s what I mean by _affordances_. 

### FizzBuzz

One of those stupid interview questions: _Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”._

It does introduce a couple of iterators, so it makes for a fine example.

	object FizzBuzz 1.0.0
	Instantiate task
	  set words to: Fizz 3, Buzz 5
	  count 1 to 101 as num
	    set out to ''
	    each words as divisor, word
	      unless num % divisor
	        set out + word
	    if out.length
	      debug out
	    else
	      debug num

This is a version that is not as efficient as possible, but it is readable and does allow the trivial addition of more “trick” divisors by putting them in a small database.

The first two lines used to set up an object are familiar; we’ll skip them and continue directly with:

	  set wordlist to: Fizz 3, Buzz 5

This is an assignment, which takes the general form of `set varname to value` (though there are variations). In this statement, the _value_ is quite interesting: `: Fizz 3, Buzz 5`.

SAI uses a colon at the beginning of both array and field literals. It knows the difference between arrays and traits at parse time because each field has a name _and_ a value, whereas each array element _only_ has a value.  

We end up with a local variable called `wordlist` which is a small set of fields where `Fizz` has the value `3` and `Buzz` has the value 5.

	  count 1 to 101 as num

SAI has several different iterators, each tuned for a specific use. It also includes the more generic `while` iterator.

The **count** iterator is designed specifically for incrementing or decrementing an integer between a range of numbers. The most important thing to remember about **count** is that whether it’s counting up or down, the produced value never visits the highest number. It is a 0-based numeric iterator designed for expressly for stepping through lists. Therefore, `count 1 to 101` will produce the integer values from 1-100 inclusive.

The **as** clause appears frequently in SAI, not only in iterators but in comparisons as well as in task parameter definitions. **As** gives programmer-specified names(s) to values that will be exposed within the following code block. 

Without the **as** clause in the example, the count value would be available only in the **key** _magic variable_. Because we’re going to be nesting iterators, we should use the **as** clause to ensure the necessary values are available throughout the code block.

	    set out to ''

Assigning the empty string to our output buffer.

	    each wordlist as divisor, word

The **each** iterator is used to visit each field in an object. Here, we want to examine the words in our word list. The **as** clause allows the assignment of each iterated field’s value and name to variables for use in the nested code block:

	      unless num % divisor

Here we’re using **unless**, instead of **if**, because it is clearer to write `unless num % divisor` instead of `if not (num % divisor)`. 

	        set out + word

You might thing something is missing here, but it isn’t. The **set** statement has a number of variations that make for simpler, clearer, less repetitive code. This one is the equivalent of the Javascript code `out+=word`. One could also write it as `set out to out + word` or even `set out to self + word`.

	    if out.length
	      debug out
	    else
	      debug num

And the rest of the code is fairly mundane and hardly worth discussing.