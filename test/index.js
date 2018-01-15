var SAI = require('../SAI');
SAI.Configure({
  options:{speedometer:true},
  paths:[__dirname]
});

var Test=SAI.Require('Test');

/* Bunch-a test code

var X=SAI.Expression;

var fruit=X('list apple, banana, cherry');

console.log(fruit);

var ReverseItems=X(`task as items
  return chain items
    thru chain .
      split ''
      reverse
      join ''
`);

console.log(ReverseItems(fruit));

var FibonacciGenerator=X(`process as n
  local stack array 1, 1
  count n
    yield stack.0
    stack.push stack.0 + stack.1
    stack.shift
`);

var results=[];
for (var i of FibonacciGenerator(10)) {
  results.push(i);
}
console.log(results);

X(`task
  set Permutations process as cards
    local Pick to process as hand, deck
      unless deck count
        yield hand
      else
        ply deck as card, index
          yielding from Pick hand concat card, deck delete index
    yielding from Pick empty, cards

  iterate from Permutations list apple, banana, cherry
    debug .
        `)();
*/


var results=new Test();


