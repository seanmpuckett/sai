## Change log

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
 - rewrote slice/LIMIT library function for more versatility.  See keywords for LIMIT for full table of possibilities.
 - FIRST / LAST no longer throw exceptions if applied to singletons/objects; they return the object itself.
 - added MAIN clause to OBJECT declarations, flagging an object as needing to be instantiated when required from a pre-compiled .js file. See the MAIN keyword for details.
 - ''' here document now support blank lines (but not indenting, not yet)
 
 
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

 - removed LOCAL as a modifier for SET; instead LOCAL must now be used in place of SET, e.g. instead of `set local a to true` you now use `local a to true` 
 - LOCAL now uses javascript's LET instead of VAR to ensure tighter, more predictable scoping.

#### Enhancements

 - Added sample code for PROMISE.  Also added test code for it but it's not executing right now because the test harness isn't async-ready.

 
### 0.1.3

#### Breaking changes

 - remove VIA keyword as being unnecessarily obscure in function, and hardly ever useful anyway.
 - remove INITIALIZED keyword as being too hard to use without generating JS errors about what an acceptable lvalue is. Keyword DEFAULT allows similiar levels of simplification but without the side-effects of an assignment in the middle of an expression (which I don't like at all anyway).

#### Enhancements

 - fix syntax error reporting to be more descriptive of the containing file
 - expand usage of DEFAULT to allow usage in an lvalue. This sets the variable ONLY if its current value is undefined. As in `set a default 4`
 - both OVERLAY and UPDATE will now silently initialize an undefined lvalue to BLANK before attempting to merge
 - tidy up example code


### 0.1.2 

- Added a change-log
- Added 02.Parameters document file
- Updated other documents
- Added comments to sailib.js describing what things do
