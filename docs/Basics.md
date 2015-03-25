# Basics

Here are some typical small programs rendered in SAI. All are coded within the NodeJS ecosystem.


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

> > Hello World

So what do these three lines have to say to us? 

Let’s have a look, line by line.

	object HelloWorld 0.1.0

SAI is an object-oriented language, and in order to execute any code at all, you must create an object that contains and defines it. SAI object definitions are saved as plain text files with the extension __.sai__, and each file defines one (and only one) object.  

Objects must have formal names that describe what kind of object it is, and should have version numbers (_SemVer_ numbers, to be specific). 

So, in the first line, we define an object called _HelloWorld_ and give it the version number 0.1.0.

	Instantiate task

When an object is instantiated -- when memory is allocated for an instance that object -- the first thing that object does after setting up its traits is call its own __Instantiate__ task. One could think of Instantiate as a constructor, but the formal object construction happens behind the scenes. Instantiate takes place after everything is ready.

The keyword __task__ is essentially equivalent to JS's __function__ in that it is used to define a chunk of code that can be called. In this example we don't have any parameters to our object's __Instantiate__, so no parameters are described after __task__.

	    debug 'Hello, World!'
 
Because indent whitespace is semantically significant in SAI, braces are not needed. Instead, the code that forms the body of the task is indented by one or more spaces (two preferred).

__debug__ is a task; a built-in function that puts a line of text on the output console. In SAI, all lines of code begin with a verb directing some action to take place. Because of this consistency, parentheses are typically not needed where it is clear they are not needed (however, they can be used at will).  

Because line endings are also significant, it is not necessary to signify the end of a line of code with a semi-colon or other indicator. So this line of code is functionally equivalent to debug('Hello, World!');

SAI discourages complex run-on code by making multi-line statements difficult (but not impossible), except in specific instances where clarity can instead be encouraged through using multiple-lines.

And that's a simple three line example of a trivial yet functional SAI object that with source code that contains only words, white space and common punctuation. In general, SAI code does not become too much more symbol-laden. However, three symbols in particular are important as a means of asserting variable scope, and we’ll introduce two of them next.


### Hello, World HTTP

Keep in mind, however, that SAI isn't a new environment, it's just a new way of creating programs in the old one. This sample shows bringing up a trivial HTTP server in node using express.

We'll omit the __index.js__ in these future examples; it looks just like the one above though requiring a different SAI object each time. Just remember: all it does is require the SAI framework, specify what directory SAI objects are found in, then instantiates a single object. That object takes it all from there.

**HelloHTTP.sai**

	reference:
	  express from require 'express'
	
	object HelloHTTP
	
	Instantiate task
	  set @app from ~express
	
	  @app.get '/', task as req, res
	    res.send 'Hello HTTP!'
	
	  set server from @app.listen 3000, 'localhost', task
	    with server.address()
	      debug 'Example app listening at http://{.address}:{.port}'       
  


\#\## 