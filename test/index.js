var SAI = require('../SAI');
SAI.Configure({
  options:{speedometer:true},
  paths:[__dirname]
});
var Test=SAI.Require('Test');

var results=new Test();
