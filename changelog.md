## Change log

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
