var SAI = require('../SAI');
SAI.Configure({
  options:{kkspeedometer:true},
  paths:[__dirname]
});
var Test=SAI.Require('Test');

var results=new Test();
