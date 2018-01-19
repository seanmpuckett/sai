## Pending Issues


### Documentation

 - tone down rhetoric in readme
 - tutorial
 

### Toolchain

 - need a way to pre-compile a project so that files don't have to be compiled on every run


### Test suite

 - test suite needs to support async tests


### Language Changes

#### Enhancement

 - 100% test coverage of library
 - integrate support for Map and Set
 - SUPER does not properly handle multiple inheritance, instead only calling the last applied parent

#### Bugs

 - parser can't handle slashes in comments 

#### Breaking

 - considering eliminating upper-case variants of keywords as being unnecessary
 - considering removal of pipe accessor as it can very easily parse in a way that is unclear
