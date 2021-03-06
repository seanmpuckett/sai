## Change log

### 0.2.9

#### Enhancements

 - Strings started with `'` and `"` are now automatically terminated by the end of line, so you don't have to close a quote if there is nothing else on that line. 


### 0.2.8

#### Breaking Changes

 - Removed __via__ again.  Gone for good.  
 - The __first__ and __last__ pipers no longer return iterators in any case; they drain iterators if they exist and either return a value or __undefined__.  If you need to limit an iterator without converting it to a value, use the __limit__ piper.
 
 
#### Enhancements

 - extended operation of __first__ and __last__ pipers to   accept a comparison function
 - new __any__ and __all__ pipers for testing a haystack for multiple needles.
 - Reformatted main source into literate form, refactored a few things.
 - Extended the __!__ function invokation operator to work in binary form, not just unary.  This will probably eventually take the place of `'d`, like I am probably going to retire `from` and `call` and those guys because I am arguing with myself all the time. But now that `!=` isn't used as an inequivalency operator (and it was never used as a boolean _not_), it's easier to spy its use on its own. Might even retire `'s` but that's just crazy.
 

### 0.2.7

#### Breaking changes

 - The arithmatic/string inequality operator is now `<>` as opposed to `!=` which is good because `!` means something entirely different. You still should use __is__ and __isnt__ whenever possible, though.
 
#### Enhancements

 - Fixed(?) some problems with `require` not knowing what its correct working directory should be when using `sai-run` or `sai-build` on projects that are in different folders than the compiler. The current fix has a `__require` patch in generated source that catches exceptions and tries a few additional paths -- local to the SAI source code -- to see if we can catch what the user's looking for.
 

### 0.2.6

#### Enhancements

 - fixed the omission of blank lines in heredocuments while in literate mode (shave the yak)
 - added supported extension of `.sai.md` while deprecating `.md` by itself. `saibuild` will not automatically build `.md` files unless they're `.sai.md`. More clarity is good.
 - new `environment` global function returns an object with information about your module's SAI context. Most especially important is whether or not you're running in static or dynamic mode, and if dynamic, what additional functionality you have.
 - Requires `sai-library 1.0.20`.
 - Added `call` as a synonym to `from` which MAYBE will finally be retired?  Finding the right invocation thingy has been terrible.
 - Added several documentation extracts, including 05.filestructure, 21.keywords, etc.  All derived from the big reference list.
 

### 0.2.5

#### Enhacements

 - new __reduce__ piper; a true reduce operator.
 

### 0.2.4

#### Literate Source

Exciting new support for _literate_ source code.  The compiler now supports SAI source in Markdown format. Basically what you have to do is within the first 10 lines of source, use a markdown header, e.g. `# Exciting Object` or `## The Larch` and then the file will be treated _literate_.  

Literate files are treated as comments, _except_ that all of the code blocks are strung together and then given to the compiler.  Remember that in Markdown, code blocks must be indented by four spaces.

This is completely optional, but makes editing and creating maintainable code much, much nicer.

Also the compiler will look for files with the `.md` extension as well as the `.sai` extension when trying to find source by name.

#### Additional enhancements

 - performance improvement: smarter handling of __unbound__ functions; they can now call other unbound functions, and this happens without indirection.
 - added __initialized__ back as an operator because I'm a big lazy suck.
 - added __lsh__, __rsh__ and __ursh__ as synonyms for __<<__  __>>__ and __>>>__ 
 - removed a few more binary operators from the reserved words list. anything that's also a unary operator (including __and__, __or__, __nand__ and __nor__), has to stay reserved.
 - more efficient __| first__ and __| last__ in the typical array case.
 - when the code generator needs a temporary variable, now it gets a somewhat more descriptive name. This, along with the line number cues, should help with low level debugging.  (Source maps are still a work in progress.)

#### Breaking changes

 - Fixed __total using__ to send two parameters (value, key), not three (sum, value, key). Total adds, it doesn't need to pass the sum, it can figure things out on its own.
 - The __promising__ construct no longer accepts verb clauses, instead it wants values, with __promising__, __then__, __catch__ and __finally__.  Any code written that assumes verb invocation will need a `from` inserted to explicitly invoke the function.  This allows us to get rid of the `adopt` clause, as well as trivially pass forward arbitrary values with __then__ and __catch__.


### 0.2.3

#### Enhancements

 - picking up the `$` parameter in `promising/adopt` now works
 - added __| or__ and __| and__ logical pipe operators.
 - added a unary list-based and multi-line capable version of __and__, __or__, __nor__ and __nand__ to help simplify complicated logical expressions. These compile down into standard JS logical expressions for speed & expected behaviour.
 - updated `sai-library` requirement to `1.0.17` for comprehensible logical operator support.


### 0.2.2

#### Breaking changes

 - The parser seemed to be intended to allow `set a 1, b 2`  which is no good because multiple side effects per line, so I took that out. It didn't seem to work anyway. And so confusing.
 - Removed the `any` `all` and `adopt` modifiers to the `promise` creator. My feeling is these are better handled with the `promising` construct rather than by creating discrete promises. In any case, it's easy enough to use the `.all` `.race` and `.resolve` methods of the native `Promise` object if you want to do this stuff. Yes this is a parser simplification bender.
  
 
#### Enhancements

 - __promising/catch [block]__ is now wrapped in a promise, so you can properly chain rejections. 
 - rolled original source line numbers through into both compile-time error reporting and as comments in the generated Javascript.  Comments look like `/*@:744*/` and will appear in the JS code after the generated code that line produced.  Not every line will produce a referencing comment, however most lines of code will.


### 0.2.1

#### Enhancements

 - updated `finalizing` `rejecting` and `resolving` to be `finalized`, `rejected` and `resolved`. These are part of the __promising__ construct (which is still `promising`). The gerund didn't make sense to describe something that was complete (or, in grammar speak, perfect).
 - also enhanced the promise value checker to wrap non-promise values in a `Promise.resolve` wrapper. I think that's how it's supposed to work. I am still disturbed by some aspects of the promise system but it is getting better.
 - updated `then` in the `state` construct to pass along arguments from both creation and callback. There's documentation.
 - added `adopt` clause to `promising` construct to make dealing with pre-existing promises less ugly.  May retire the extra clauses on the `promise` creation keyword as I believe everything that needs to be done is now handled more cleanly by the construct.
 - more improvements to error handling, propogating errors rather than throwing new ones.  
 - upgrades to test suite to handle asynchronous code paths, which means we'll now be doing continuous integration on all of that garbage.  Once the tests are written.

 
### 0.2.0

#### Breaking Changes

 - This one is going to hurt.  All of the comprehensions and list operators have been converted to __piper__ style. Which for the most part just means that you will need to now use a `|` (pipe) before each of those operator words.  This was done to streamline and speed up the parser and to add flexibility to the language. Also, since these operators are now visually indicated as such with a pipe, it's easier to visually parse more complicated expressions. I was originally going to wait and just deprecate the old operators before tearing them out, but i am pretty sure no one is using this but me so let's just pull the bandaid off. I think this will be the last major shift in syntax.
 - Good news, though, you can mostly just search/replace for those operators, adding a `|` before each one, and everything should work just fine. 
 - Bad news: support for `|into it` has been removed. You will now always need to provide a type-appropriate starting value for the accumulator used in with `|into`.  However, see the new __total__ piper which may get you most of the way there anyhow.
 - I've removed the bareline quote, which was the backtick.  Seemed an unwarranted use for a character that might be needed for something else some day. 
 - got rid of `me` and `my` synonyms for `@` because of the big effort to reduce reserved words.
 

#### Enhancements

 - completely revisited all of the reference documentation. All of the reference docs are built into the source and generated automatically, which is really nice.
- found a way to propogate syntax and grammar errors so that reporting is more finely detailed.
 - support for __pipers__ which are like constructs, but as operators. The plan is eventually to roll the standard set of comprehensions into piper land so as to free up keyword space and, at the expense of introducing one symbol, make human parsing perhaps a little easier as well.
 - The good news is that it's now trivial to add additional cool functionality via pipers without polluting the global namespace.
 
#### Bugs

 - Really dumb parsing error made it impossible to have any identifier start with `me`


### 0.1.22

#### Breaking Changes

 - refactoring the `do while` and `do until` loops into the constructs system means they can no longer have a two-word keyword. So now they're __dowhile__ and __dountil__.
 
-  `else if` `else unless` and `else exists` are now __elsif__, __elsunless__ and __elsexists__.  This should be just a simple search / replace to fix.

- `switch` has been updated -- each __case__ element should _no longer be indented_ and the `default` clause has been renamed __else__.  Also, the compiler will _insist_ that there is an __else__ clause at the end of every switch statement. It's good programming practice.

- __count__ is the biggest and most annoying change; its complex syntax with `to` and `step` has been eliminated to take one, two or three comma-separated parameters. Further the `count down` variant has been renamed __countdown__, with the same one, two or three comma separated parameters.  On the other hand, the runtime will throw an error if there's a risk of an infinite loop, so that's a plus.

#### Infrastructure

 - moved support code for Constructs outside of main sai file to facilitate additional refactoring

#### Bugs

 - Fixed long standing invisible error that resulted in object methods not actually being locked/frozen.  Oops.


### 0.1.21

#### Enhancements

 - `promising` and `state` constructs, plus general construct support to empower DSL creation.
 - See new documentation file `21.Constructs.md` for preliminary info on both of these.
 - added `Math` to be used as an unscoped global.  I don't like polluting the name space though. Thinky.
 - better handling of reserved words results in 2x compile speed-up.  So that's cool.

#### Bug fixes
 
 - fixed parsing of braces in here documents. Still some character combinations that will make it barf, e.g. `^{...}`  
 

### 0.1.20

 - More compile-time checks for inappropriate usage of bareword members, especially in functions marked as `unbound`.  If ya want to use self-member variables in unbound functions, you have to use the scoping prefix.
 - added `promise any`, `promise all` and `promise adopt` variants of the `promise` function syntax.
 - added `Error` as a defined global, mapping to the regular Error object. It's about time.
 

### 0.1.19

#### Breaking changes

 - the `overlay` operator keyword has been replaced with `update`. No change in functionality, you can just search/replace carefully to fix this. The intent is to reducing excess reserved words.

#### Enhancements

 - member methods now do a quick-and-dirty test to very that their `this` value is valid -- if not, an error is thrown. This should be only a very minor performance impact but really helps chase down hard to find errors, especially in programs with lots of callbacks.
 - new `unbound` modifier for object method definitions `task`, `process` and `promise` that disables that binding check
 - new `bind` operator for binding function references to specific object contexts.
 - runtime manager updated to not use `my` which was a little fraught because bad variable choices
 - you can now create `promise` member functions. Yay?
 

### 0.1.18

 - instance variables intended to be 'undefined' were not.
 - fixed problem with forward bareword referencing of instance variables from 0.1.16, you can now use them before an object declares them and a linker will clean it up!  Yay.
 - fixed another problem with instance variables
 - errors thrown by parser and runtime now identify themselves a bit better


### 0.1.17

 - better whitespace parsing
 

### 0.1.16

#### Breaking Changes

 - removed unary set operators `inc` and `dec`. Instead use those terms as verbs
 - removed `ascending` and `descending` synonyms for `asc` and `desc` because there's too many reserverd words.
 - compile order now requires that object tasks must be declared _after_ all other object attributes. A lot of these annoying limitations are due to the strictly lexical one-pass transformation. Maybe someday that will change.
 
#### Enhancements

 - the `inc` verb is now written to set _falsy_ values to 1, as if they were originally 0.
 - it is _always_ now safe to call `super` in any object method, as even if there is no explicit function, there is an implicit nil function. This also overcomes a shortcoming with the order of multiply inherited objects sometimes hiding super functions. 
 - added `'s` as a synonym for `.` accessors. Super dorky but I like how it reads.
 - added `'d` as a synonym for accessing object verbs in a more readable way.  Like how this reads too.
 - added `\` back in (though it used to be `|`). This is actually a useful construct and makes sense as backslash because it is kind of like a subdirectory symbol. Also anything that gets rid of unnecessary braces, brackets and parens is going to help.
 - added `?` synonym for the `default` operator and increased its precedence to just above multiplication
 - Object attributes declared in `instance`, `given`,  `get`, and `set` can be used as barewords. When you do so, they refer to attributes of the current (this) object.
 - You must declare attributes before you can use them in this way, and the compiler will not let you re-use these names as function parameters or local variables. 
 - Caveat: this takes effect only for the current file, objects inheriting from other objects will need to redeclare instance variables they want to access as barewords from their parents.  
 - The compiler will nag you about obvious usage of variables before they're given a value.  It won't catch every bug but it should help.
 - More tests
 

### 0.1.15

#### Bugs

 - Problem printing indenting errors
 - triple-quote "here documents" now support indenting
 

### 0.1.14

#### Refactoring

 - Both `sai-language` and `sai-library` are now written in self-compiled SAI.  I'm pretty proud of that.

#### Enhancements

 - the phrase `set val - expr` will now throw an error, warning you to use either `set val (-expr)` or `set val self - expr` as appropriate, so you know what you're going to get. 

#### Bug Fixes

 - sai-build won't accidentally overwrite source files now, also can handle bare object names
 

### 0.1.13

#### Enhancements

 - added `!` as a synonym for `from` but I kind of hate it so don't use it.
 - support for octal numeric literals of the form 0o01234567
 - support for hex literals of the form 0x0123456789ABCDEFabcdef
 - support for binary literals of the form 0b0101010101
 - `sai-build` can now build a project, and what is more it seems to actually work sometimes.  feels fragile though. 


### 0.1.12

#### Enhancements

 - clarification in documentation on the best iterator to use when
 - added `singleton` operator to create and manage singleton objects. 
 - operator `via` is back but in a slightly different incarnation that allows it to be used as a customising operator.
 

### 0.1.11

#### Enhancements

 - new keyword `every` is a multi-purpose iterator, performing the functions of `ply` `each` and `iterate`. There is a slight performance penalty with using `every` compared to the more specific iterators. I
 
 - now preferring the keyword `given` to describe parameters to a function, rather than `as`.  The compiler will continue to accept `as` for now, but this usage is deprecated. You can easily update source by search/replace for `task as` `process as` `promise as` `set as` and replacing with `task given` `process given` `promise given` and `set given`.


### 0.1.10

#### Documentation

 - `it`, `key`, `counter` and other formerly so-called "magic variables" are now collectively referred to as _pronouns_ which is a much more useful and accurate description of their function. 

#### Enhancements

 - Changed prefix of local variables in the generated Javascript from `$` to `_` which I think makes them a little clearer in error messages. I guess clearer still would be `local_` but we'll see how it goes. There's work to be done cleaning up the JS.  Temporary variables still start with `$` so it's clearer what's going on.
 - other work variable name changes for less clutter etc.
 - `audit`, `thru`, `has` and `into` comprehensions, when used with iterators, now provide a row counter as the `key`.
 - when using `chain` as a verb, if the result is an iterator, we drain it (otherwise the chain never executes)
 - added `key` pronoun to `iterate` verb blocks and `using` function calls.
 
#### Bug Fixes

 - local variables set at the same level of indent as a method start caused a JS compiler error (let collision with var). Solved by wrapping function bodies in `{}` which hopefully is clean syntax. Otherwise you know it could be `if(1){}` ifykwim.
 

### 0.1.9

#### Breaking Changes

 - removed `|` shorthand attribute accessor -- where `b|a` was equivalent to `b[a]` as the notion of a "simple value" is too easy to miscode. The most common use of | was to allow access to numeric indices anyway (e.g. `a|2` for `a[2]`), and the dot accessor offers these in a clearer way, e.g. `a.2`.  I doubt anyone was using this; I even stopped after too many syntax errors. It also looked ugly. So, if this was you, sorry. 
 - when using `reference` 
   - variables defined with reference no longer need to be scoped with `~` within code; they are automatically promoted to bareword scoping.
   - variables defined with reference cannot be assigned to; you cannot override them with `local` and you cannot use `set` to assign them. There are probably ways around this but if I find them I'll fix them if possible.

#### Enhancements

 - Strip out first line of .sai file if it's a shebang `#!`
 - Use `#!/usr/bin/env sai-run` on the first line of a file and mark it executable.
 - moved `sai-run` and `sai-build` to `bin/` directory
 - for some reason the `~` scoping prefix was undocumented?


### 0.1.8

#### Enhancements

 - Object loader handles file extensions properly, but will try to load `.sai` files preferentially.
 - documentation updates
 - update samples to rely on `sai-run` for invokation.
 - update package.json to put `sai-run` and `sai-build` into the bin


### 0.1.7

#### Enhancements

 - additional documentation / clean-ups
 - removed several entries from reserved words list
 - command line runner `sai-run` added, can compile and instantiate a SAI object from the command line.
 - removed redundant code path in sailib

 
### 0.1.6

#### Breaking changes

 - removed ability to specify keywords as uppercase. The biggest issue here was the clutter in the parse tree. Sorry about that.

#### Enhancements

 - command line compiler `sai-build`, can create a native JS version of a single object (see 07.Commandline document).
 - rewrote `limit` library function for more versatility.  See 20.keywords for `limit` for full table of possibilities.
 - `first` / `last` no longer throw exceptions if applied to singletons/objects; they return the object itself.
 - added `main` clause to `object` declarations, flagging an object as needing to be instantiated when required from a pre-compiled .js file. See the `main` keyword for details.
 - `'''` here document now support blank lines (but not indenting, not yet)
 
 
### 0.1.5

#### Enhancements

 - The default implementation for DEBUG now goes through SAILib.debug which offers some more clarity on various object types
 - "canIterate" internal check now returns TRUE for functions, assuming that any function used in this way is likely a generator that will want to be invoked. (Current implementation will invoke generators automatically, this just ties up a a loose end.)
 - added issues.md -- list of current issues
 - full coverage testing of runtime library methods in SAILib
 
#### Bug fixes

 - Several impossible code paths in SAILib removed

 
### 0.1.4

#### Breaking changes

 - removed `local` as a modifier for `set`; instead `local` must now be used in place of `set`, e.g. instead of `set local a to true` you now use `local a to true` 
 - `local` now uses javascript's `let` instead of `let` to ensure tighter, more predictable scoping.

#### Enhancements

 - Added sample code for `promise`.  Also added test code for it but it's not executing right now because the test harness isn't async-ready.

 
### 0.1.3

#### Breaking changes

 - remove `via` keyword as being unnecessarily obscure in function, and hardly ever useful anyway.
 - remove `initialized` keyword as being too hard to use without generating JS errors about what an acceptable lvalue is. Keyword `default` allows similiar levels of simplification but without the side-effects of an assignment in the middle of an expression (which I don't like at all anyway).

#### Enhancements

 - fix syntax error reporting to be more descriptive of the containing file
 - expand usage of `default` to allow usage in an lvalue. This sets the variable ONLY if its current value is undefined. As in `set a default 4`
 - both `overlay` and `update` will now silently initialize an undefined lvalue to BLANK before attempting to merge
 - tidy up example code


### 0.1.2 

- Added a change-log
- Added 02.Parameters document file
- Updated other documents
- Added comments to sailib.js describing what things do
