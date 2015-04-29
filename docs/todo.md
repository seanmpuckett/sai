


es6 check
multiple assignment???????
source code lookup for exceptions or debugging
more character escapes




TESTS TO WRITE
  what do highest/lowest/first/last do when given non-arrays?
  inheritance
  Map and Set iterables
  promise
  
  
  
  
set thing to machine:
  then @Churn
  
  
  
thing machine:
  state @Start
  queue empty
  Start task
    then @Churn
  Churn 
    yield 'working'
    continue
  Post task
    @queue.push $
    fetchthing task state bob $
  Pull task
    if @queue.length
      return @queue.shift
      
      
  