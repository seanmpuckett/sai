## Pending Issues


### Documentation

 - The documentation (except from Keywords) is getting a little frayed around the edges.
 

### Toolchain

 - need a way to pre-compile a project so that files don't have to be compiled on every run


### Test suite

 - test suite needs to support async tests


### Language Changes

#### Enhancement

 - 100% test coverage of parser -- is this even practical?
 - integrate support for Map and Set
 - SUPER does not properly handle multiple inheritance, instead only calling the last applied parent
 - source code lookup for exceptions or debugging
 - state machine construct
 - need a 'strict' behaviour that yells about variables being used before being assigned

  
#### Bugs

 - parser can't handle slashes in comments 
 - blank character after `return ` is a parse error
 - can't use `{` or `}` in a here document
 

#### Breaking




## Notes

### async syntax

    async [coerced promise] executed
      await [coerced promise]
      await as a
        code here
      catch as b
        error handler
      finally
        always runs
            
    chain from [promise]
      then [coerced promise]
      then promise
        code here
      catch
        code
    // finally
    always runs

### state machine syntax

    machine 'a' 
      every
        readline
      case 'a'
        code
        state 'b'
      case 'b'
        code
        done
      catch
        debug error
      finally
        debug "task complete"
  
    set state 'a'
    until state is 'done'
      try
        readline
        switch state
          case 'a'
            code
            set state 'b'
          case 'b'
            code
            set state 'done'
      catch
        debug error
      finally
        task complete
      

      
      
### op


    
    
    
    
      
    

