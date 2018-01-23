## Pending Issues


### Documentation

 - tutorial
 

### Toolchain

 - need a way to pre-compile a project so that files don't have to be compiled on every run


### Test suite

 - test suite needs to support async tests


### Language Changes

#### Enhancement

 - 100% test coverage of parser -- is this even practical?
 - integrate support for Map and Set
 - SUPER does not properly handle multiple inheritance, instead only calling the last applied parent
 - ''' here document operator needs to support indenting
 - source code lookup for exceptions or debugging
 - state machine construct

  
#### Bugs

 - parser can't handle slashes in comments 
 - dedenter incorrectly adds comments to here documents 
 

#### Breaking

 - considering removal of pipe accessor as it can very easily parse in a way that is unclear
