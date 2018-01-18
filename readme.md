# SAI
An attempt to add rigour, elegance and clarity to programs in the Javascript ecosystem.

### About

SAI is a transpiler for the Node Javascript environment. 

Your source files are written in another programming language (called SAI) and _transpiled_ into the equivalent Javascript, which is then executed like any other Javascript. SAI objects are compatible with regular JS objects, and a project can mix SAI and JS code on a file-level basis. 

SAI embraces Javascript's capabilities, including new features of ES6 such as promises and generators, but removes the heavy reliance on arcane symbology. SAI was designed primarily as a humane language one could simply read aloud. This has the side effect that SAI programs look more or less like pseudo-code; they can be their own design documents.

SAI, like Python and CoffeeScript, treats whitespace as semantically relevant: level of indent is used to identify code blocks, and line breaks are always significant. Indeed, SAI's parser is quite rigid as to what constitutes a single 'statement'; run-on code with heavily nested calls is strongly discouraged (if not impossible) -- and this is intentional.

SAI exists to encourage understandable and maintainable programs through the affordance of a straightforward programming style. While Javascript allows (and perhaps even encourages) heavily nested expressions, opaque idioms and clever uses of the prototyping system, and while many people find use of these techniques to be personally rewarding, professional code should never strive to be clever. Instead, SAI encourages simplicity and elegance.

My feeling is that if someone else of reasonable competency cannot easily understand what a program is doing on a cursory read-through, then one has failed as a professional programmer. James Joyce created some remarkable literary works of lasting significance, but when software used in a production environment is just as difficult to understand as _Finnegans Wake_, then as engineers we have utterly failed in our duty to our employers, co-workers and ultimately our customers. Good software should be written in the style of the New York Times, not Thomas Pynchon's _Gravity's Rainbow_. 

SAI, then, exists to encourage a _New York Times_ style of programming that results in software that is easy to read, easy to write and easy to maintain. 

#### What it isn't

While SAI appears to look a little like Coffeescript (in particular due to their semantic use of whitespace), SAI is not a derivation of Coffeescript. I am however thankful to the developers of CS for demonstrating that creating a transpiler is a viable approach to fixing some of the shortcomings of Javascript. 

SAI doesn't make it impossible to write sloppy, ugly and buggy code.  However, SAI's _affordances_ tend to emphasise clear code, while making some of the more egregiously obnoxious Javascript hacks and idioms either impossible, or just very difficult. Just because you _can_ do something a certain way in JS doesn't mean you _should_.


### Usage Notes

Note that it is computationally unwise to compile the same SAI expression over and over. Assign things your results to a variable and re-use the compiled Javascript.

#### To evaluate a SAI expression

    var SAI = require('SAI');
    var fruit = SAI.Expression('list apple, banana, cherry');

Result:

    console.log(fruit);
    
    > [ 'apple', 'banana', 'cherry' ]

#### To define a function using SAI

    var SAI = require('SAI');
    var ReverseItems=SAI.Expression(`task as items
      return items thru chain .
        split ''
        reverse
        join ''
    `);

Result:
    
    console.log(ReverseItems(fruit));
    
    > [ 'elppa', 'ananab', 'yrrehc' ]

#### To define a process (generator) using SAI

    var SAI = require('SAI');
    var FibonacciGenerator=SAI.Expression(`process as n
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
    


#### To create a SAI object given a .SAI source file:

    var SAI = require('SAI');
    SAI.Configure({options:{},paths:[__dirname]});
    var ObjectPrototype=SAI.Require('ObjectName'); // builds prototype from ObjectName.sai in __dirname
    var Object = new ObjectPrototype(instantiation task parameters);

    
#### Notes

Modules used: 
- PEGjs, needed to compile the grammar (not necessary if it hasn't changed).
- JS-beautify, if present, will be used to tidy up the generated Javascript. 

Parser compilation: The first time SAI runs, the *saigrammar.peg* language specification (2k lines) is compiled by PEGjs, which takes several seconds. The resulting Javascript parser (~3K lines) is saved as *saigrammar.js*, which will be reused on subsequent runs if possible.

When creating SAI objects, the pre-compiled parser is used to create a native Javascript prototype for each object, just once. This may take several to hundreds of milliseconds based on the complexity of the file. Subsequent calls to SAI.Require or SAI.Create for the same object run at Javascript speeds. You can re-use the prototypes once created just like any other Javascript prototype. 


### Documentation

The _docs_ directory contains the documentation.  

The 20.Keywords file is the reference documentation and is the most definitive information about SAI.

SAI does not yet have a beautiful and competently written introduction to the language, e.g. "Learn you a SAI for Great Justice," which sucks. Maybe someday this will happen.

### Additional Samples

The _samples_ folder has several sample bits of code, some of which are reproduced here.

You may also look at my solutions to Advent of Code 2017 which were all written in SAI: https://github.com/seanmpuckett/advent-of-code-2017



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

    set Permutations process as cards
      local Pick to process as hand, deck
        unless deck count
          yield hand
        else
          ply deck as card, index
            yielding from Pick hand concat card, deck delete index
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
      set @app from ~express
  
      @app.get '/', task as req, res
        res.send 'Hello HTTP!'

      set @server from @app.listen 3000, 'localhost', task
        with @server.address()
          debug 'Example app listening at http://${.address}:${.port}'       
      
   
#### Promises sample

    set 
      willIGetNewPhone promise as isMomHappy
        if isMomHappy
          resolve:
            brand 'Wangdoodle'
            colour 'paisley'
        else
          reject new ~Error 'Mom is not happy.'
    
      showOff promise as phone
        with phone
          debug 'Hey friend, I have a new ${.colour} ${.brand} phone'
  
      askMom task as happiness
        chain from willIGetNewPhone happiness
          then showOff
          catch promise as e
            debug '${e}\nNo phone for you.'
      
    askMom true
    askMom false
    
    > Hey friend, I have a new paisley Wangdoodle phone
    > Error: Mom is not happy.
    > No phone for you.
    
