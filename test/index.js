var SAI = require('../SAI');
SAI.Configure({
  options:{speedometer:true},
  paths:[__dirname]
});
var Test=SAI.Require('Test');

console.log(SAI.GetSource('ITChild'));
process.exit();

var results=new Test();
