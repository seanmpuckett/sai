## Pending Issues


### Documentation

 - The documentation (except from Keywords) is getting a little frayed around the edges.
 

### Toolchain

 - 


### Test suite

 - test suite needs to support async tests


### Language Changes

#### Enhancement

 - 100% test coverage of parser -- is this even practical?
 - integrate support for Map and Set
 - source code lookup for exceptions or debugging
 - state machine construct

  
#### Bugs

 - parser can't handle slashes in comments 
 - blank character after `return ` is a parse error
 - can't use `{` or `}` in a here document
 

#### Breaking




## Notes


  
you want a thing to happen. 

it has actions to undertake VERB
it has parameters that control those actions  INPUT
it has the results of those actions  OUTPUT
it has the context within which those actions happen  CONTEXT

it has metadata describing a specific time/place where thing will/is/did(or did not) happen  STATUS


(context) 
do 
  (verb)(input) 


    async
      database.open options, #
    then given h
      set database.handle h
      database.query queryString, #
    then given stream

    catch 
      log.error
    finally
  
  
















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


    
    
    
    
      
    

