
# This is the LITERATE test suite

It basically tests whether the compiler is handling literate code.

This should be allowed:

 - one space indent for lists
 - bullets, whatever
 
 1. numbered lists
 2. just a great time
 
And then there's an example

    oh crap       // example
    continuing
    this is crap
    
    and this is still crap


And then there's the code: 

    object Literate


We'll inherit our test harness.

    inherit list
      Harness


And do absolutely nothing, because the compile is the thing.

    Execute task
      nop
  
  
And so that should do it!

