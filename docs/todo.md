
  
es6 check
multiple assignment???????
comprehensions should be cognizant of generators
expects as a verb
source code lookup for exceptions or debugging
"YOU GOT AN ERROR IN YOUR SAI CODE" needs to be more useful.





TESTS TO WRITE
  what do highest/lowest/first/last do when given non-arrays?
  inheritance
  promise
  literal formats
  regex parsing
  multiple assignment / SET variations
  merge/select/overlay/delete all combinations
  
  
  
  
  
  
thing machine:
  state @Start
  queue empty
  Start task
    state @Churn
  Churn 
    yield 'working'
    continue
  Post task
    @queue.push $
  Pull task
    if @queue.length
      return @queue.shift
      
    
  