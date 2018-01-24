## Change log

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
