var SAI = require('../SAI');
SAI.Configure({
  paths:[__dirname]
});

var Test=SAI.Require('Test');
/*
var X=SAI.Expression;

var fruit=X('list apple, banana, cherry');

console.log(fruit);

var ReverseItems=X(`task as items
  return items thru chain .
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
  set a blank
  set a.0 update: b 2
  debug a
  `)();
*/
  var t1 = new Date();
var results=new Test();
var t2 = new Date();
console.log(`Time: ${t2-t1}`);


