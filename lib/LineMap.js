#!/usr/bin/env node

// Javascript source for LineMap.sai transpiled by SAI
//

"use strict";

var prototype=new function() {
  this.Constructor=function(){};
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof={};
  return this;
}();
var $AI=require("sai-library");
// Generated code follows
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/LineMap.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-03-24T13:35:01.928Z","fetched":"2018-04-07T15:20:51.129Z"};
var __path=require('path');
var __require=function(fn) {
  try {
    return require(fn);
  } catch (e) {
    try {
      return require(__path.join(process.cwd(),fn));
    } catch (e) {
      return require(__path.join(process.cwd(),'node_modules',fn));
    }
  }
}
var isa = prototype.isa = 'LineMap';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['LineMap'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Add", "SourceLocation", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    line: undefined,
    columns: []
  };
}
for (var i in $1g()) {
  prototype[i] = undefined;
};
var $2g = prototype.Constructor || function() {};
prototype.Constructor = function() {
  $2g.call(this);
  var t = $1g();
  for (var i in t)
    if (t[i] !== undefined) this[i] = t[i];
};
var $3g = prototype['Instantiate'] || function() {};
prototype['Instantiate'] = function(p) {
  var $ = this['Instantiate'] ? this : $bindfail('Instantiate'),
    _pLine = p; {
    $.line = _pLine;
  }
};
var $4g = prototype['Add'] || function() {};
prototype['Add'] = function(p, _source, _options) {
  var $0_this, $1_trial, $ = this['Add'] ? this : $bindfail('Add'),
    _column = p; {
    if ($1_trial = ((_options.noReplace && $.columns[_column]))) {
      return;
    }
    $.columns[_column] = {
      line: $.line,
      column: _column,
      sourceLine: _source[0],
      sourceColumn: _source[1]
    };
  }
};
var $5g = prototype['SourceLocation'] || function() {};
prototype['SourceLocation'] = function(p) {
  var $2_this, $3_this, $4_this, $ = this['SourceLocation'] ? this : $bindfail('SourceLocation'),
    _column = p; {
    var $4_this;
    while ($4_this = ((_column >= 0))) {
      if (undefined !== ($3_this = ($.columns[_column]))) {
        return ([$3_this.sourceLine, $3_this.sourceColumn]);
      }
      _column--;
    }
    return (undefined);
  }
};

$AI.finalizePrototype(prototype);
var result=prototype;
switch (prototype.isof[prototype.isa].type) {
case 'singleton':
  prototype.Constructor();
  if (prototype.Instantiate) prototype.Instantiate();
  break;
case 'main':
  result=prototype.constructor();
  break;
default:
  result=prototype.constructor;
  break;
}
exports=result; try { module.exports=result; } catch(e) {};
return result;
