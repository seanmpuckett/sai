var SAI = require('../SAI');

SAI.configure({paths:[
  __dirname+'/',
]});

var Test=SAI.require('Test');
var results=new Test();



console.log("ok.");