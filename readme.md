# SAI

An attempt to add rigour, elegance and clarity to programs in the Javascript ecosystem.

## About

SAI is a transpiler for the Node Javascript environment. 

Your source files are written in another programming language (called SAI) and _transpiled_ into the equivalent Javascript, which is then executed like any other Javascript. SAI objects are compatible with regular JS objects, and a project can mix SAI and JS code on a file-level basis. 

### What does it look like?

The quickest way to get a feel for real code written in SAI is to look at the GitHub source for SAI itself -- the compiler and its runtime library are all self-compiled SAI code.  

- The main compiler: [https://github.com/seanmpuckett/sai/blob/master/src/sai.sai]
- The runtime library: [https://github.com/seanmpuckett/sai-library/blob/master/src/sailib.sai]

SAI, like Python and CoffeeScript, treats whitespace as semantically relevant: level of indent is used to identify code blocks, and line breaks are always significant. SAI's parser is quite rigid as to what constitutes a single 'statement'; run-on code with heavily nested calls is strongly discouraged (if not impossible) -- and this is intentional.

### Why a new transpiler?

SAI embraces Javascript's capabilities but removes the heavy reliance on arcane symbology. SAI was designed primarily as a humane language one could simply read aloud. This has the side effect that SAI programs look more or less like pseudo-code; they can be their own design documents.

That doesn't mean SAI is a lightweight. Its constructs for asynchronous tasks including Promises and finite state machines, flexible and simply applied collection manipulators, compile-time sanity checks, and truly object-oriented coding style, all allow you to get complex projects done more effectively by encouraging the creation of cleaner and more straightforward code.

SAI, then, exists to encourage understandable and maintainable programs through the affordance of a straightforward programming style. While Javascript allows heavily nested expressions, opaque idioms and clever uses of the prototyping system, this often results in difficult to maintain code. Instead, SAI encourages simplicity and elegance that results in software that is easy to write, easy to read, and easy to maintain. 

### What it isn't

While SAI appears to look a little like Coffeescript (in particular due to their semantic use of whitespace), SAI is not a derivation of Coffeescript. I am however thankful to the developers of CS for demonstrating that creating a transpiler is a viable approach to fixing some of the shortcomings of Javascript. 

SAI doesn't make it impossible to write sloppy, ugly and buggy code.  However, SAI's _affordances_ tend to emphasise clear code, while making some of the more egregiously obnoxious Javascript hacks and idioms either impossible, or just very difficult. Just because you _can_ do something a certain way in JS doesn't mean you _should_.


## Usage 

SAI can be used in dynamic or runtime modes.  Dynamic mode requires that the compiler `sai-language` be required into the running program. You can reference SAI language files, with the extension `.sai`, and they will be compiled immediately and turned into standard Javascript prototypes.

Runtime mode necessitates a build pass with `sai-build` during which all of the SAI source is pre-compiled into Javascript modules that can be `required` just like any other JS. A small run-time package, `sai-library` will be needed; however once compiled the full language package is not necessary.


#### To run a SAI object from the command line

    $ ./sai-run [path/objectname]

The object will be created and instantiated immediately.  

For example:

    // HelloWorld.sai
    object HelloWorld main 1.0.0
    
    Instantiate task
      debug 'Hello world!'
    
Then compiling and executing:
  
    $ ./sai-run HelloWorld 
    
    Hello world!


#### To compile an object to native JS (create a runtime module)

`sai-build` can be executed on the command line with a path to a SAI object. 

    $ ./sai-build [path/objectname]

A full prototype for that object will be saved as `objectname.js`.  

For example:

    $ ./sai-build sample/Impossible/Impossible 
    $ node impossible.js
    
    Mathemetician's "Impossible" puzzle solver.
    Initial candidate count: 2304
    Phase 2 candidate count: 145
    Phase 3 candidate count: 86
    Results candidate count: 1
    Solution 1: X=4, Y=13; sum=17, product=52


#### To reference a SAI object from a Javascript module (dynamic mode)

Start with the require, and tell the compiler where to find your SAI source.

    var SAI = require('sai-language');
    SAI.Configure({options:{},paths:[__dirname]});

This is how you create a JS object from a `.sai` file:

    var ObjectPrototype=SAI.Require('ObjectName'); 
    
Everything else is pure Javascript:

    var Object = new ObjectPrototype(instantiation task parameters);


#### To evaluate a SAI expression in a JS file, e.g. to play around:

    var SAI = require('sai-language');
    var fruit = SAI.Expression('list apple, banana, cherry');

Result:

    console.log(fruit);
    
    > [ 'apple', 'banana', 'cherry' ]

_Note that it is computationally unwise to compile the same SAI expression over and over. Assign things your results to a variable and re-use the compiled Javascript._

Here's creating a function from Javascript:

    var SAI = require('sai-language');
    var ReverseItems=SAI.Expression(`task given items
      return items thru chain .
        | split ''
        | reverse
        | join ''
    `);

Result:
    
    console.log(ReverseItems(fruit));
    
    > [ 'elppa', 'ananab', 'yrrehc' ]

Making a process (generator) from Javascript:

    var SAI = require('sai-language');
    var FibonacciGenerator=SAI.Expression(`process given n
      local stack array 1, 1
      count n
        yield stack.0
        stack.push stack.0 + stack.1
        stack.shift
    `);

Result:

    var results=[];
    for (var i of FibonacciGenerator(10)) {
      results.push(i);
    }
    console.log(results);
    
    > [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
    
    
## Notes 

Modules used: 
- `sai-library` is the runtime library, and is necessary.

Optional modules:
- `pegjs` is only needed to compile the grammar which should not be necessary
- `js-beautify`, if present, will be used to tidy up the generated Javascript. 

The parser is described in PEGjs, and the parser is pre-compiled to native Javascript. It is unlikely that the parser would need to be recompiled (unless you change it), so PEGjs is not `required` unless it is actually needed.

When creating SAI objects, this pre-compiled parser is used to create a native Javascript prototype for each object, just once. Compilation may take several to hundreds of milliseconds based on the complexity of the file. Subsequent calls to `SAI.Require` or `SAI.Create` for the same object, or using `new` or `create` run at Javascript speeds. You can re-use the prototypes once created just like any other Javascript prototype. 


### Documentation

The `docs` directory contains the documentation.  

The `20.Keywords` file is the reference documentation and is the most definitive information about SAI.

There are other documents out there in varying degrees of revision. Sadly, SAI does not yet have a beautiful and competently written introduction to the language, e.g. "Learn you a SAI for Great Justice," which sucks. Maybe someday this will happen. Probably some time after breaking changes are so frequent.


### Additional Samples

The `samples` folder has several sample bits of code, some of which are reproduced here.

To run the samples, invoke e.g. `./sai-run sample/FizzBuzz/FizzBuzz`

You may also look at my solutions to Advent of Code 2017 which were all written in SAI: [https://github.com/seanmpuckett/advent-of-code-2017].


#### FizzBuzz

    set words to array
      fields word 'Fizz', divisor 3
      fields word 'Buzz', divisor 5
    
    count 1 to 101 as num
      set out to ''
      each words
        unless num % .divisor
          set out + .word
      debug out ?? out :: num


#### Permutation generator

    set Permutations process given cards
      local Pick to process given hand, deck
        unless deck.length
          yield hand
        else
          ply deck as card, index
            yielding from Pick (hand | concat card), (deck | delete index)
      yielding from Pick empty, cards

    iterate from Permutations list apple, banana, cherry
      debug .
      
    > [ 'apple', 'banana', 'cherry' ]
    > [ 'apple', 'cherry', 'banana' ]
    > [ 'banana', 'apple', 'cherry' ]
    > [ 'banana', 'cherry', 'apple' ]
    > [ 'cherry', 'apple', 'banana' ]
    > [ 'cherry', 'banana', 'apple' ]


#### Minimal HTTP Server

    reference:
      express from require 'express'

    object HelloHTTP 1.0.0

    Instantiate task
      set app from express
  
      app.get '/', task given req, res
        res.send 'Hello HTTP!'

      set server from app.listen 3000, 'localhost', task
        with server.address()
          debug 'Example app listening at http://${.address}:${.port}'       
      
   
#### Promises sample

    set 
      couch from require 'node-couchdb'
      cnx new couch:
        auth:
          user 'admin'
          pass 'couch'
      dbName 'test'

    promising cnx.dropDatabase dbName
    catch
      unless 'EDBMISSING' is $code
        throw $
    then cnx.createDatabase dbName
    then cnx.listDatabases
    all $ | thru from cnx.get it, '/'
    then 
      debug $ | total "Database ${.data.db_name} is ${.data.disk_size} bytes.\n"
    catch
      debug $
    
    > Database _global_changes is 86394 bytes.
    > Database _replicator is 12622 bytes.
    > Database _users is 12622 bytes.
    > Database test is 8488 bytes.


    
