#!/usr/bin/env node

// Javascript source for SourceMap.sai transpiled by SAI
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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/SourceMap.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-03-22T02:10:08.989Z","fetched":"2018-04-07T15:20:52.132Z"};
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
var _VLQ_SHIFT = 5;
var _VLQ_CONTINUATION_BIT = (1 << _VLQ_SHIFT);
var _VLQ_VALUE_MASK = (_VLQ_CONTINUATION_BIT - 1);
var _BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var isa = prototype.isa = 'SourceMap';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SourceMap'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Add", "SourceLocation", "Generate", "EncodeVlq", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    lines: []
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
var $3g = prototype['Add'] || function() {};
prototype['Add'] = function(p, _genLoc, _options) {
  var $ = this['Add'] ? this : $bindfail('Add'),
    $_b, $_c, $_d, _column, _line, _lineMap, _sourceLoc = p; {
    var $_ = _genLoc;
    _line = $_[0];
    _column = $_[1];
    _lineMap = ((undefined !== ($_b = $.lines[_line])) ? $_b : ($.lines[_line] = $AI.create_op('LineMap', [_line])));
    _lineMap.add(_column, _sourceLoc, _options);
  }
};
var $4g = prototype['SourceLocation'] || function() {};
prototype['SourceLocation'] = function(p) {
  var $0_this, $1_this, $ = this['SourceLocation'] ? this : $bindfail('SourceLocation'),
    $_c, $_d, _column, _line, _loc = p; {
    var $_ = _loc;
    _line = $_[0];
    _column = $_[1];
    while (!((_line < 0))) {
      if (undefined !== ($1_this = ($.lines[_line]))) {
        return ($1_this.sourceLocation(_column));
      }
    }
    return (undefined);
  }
};
var $5g = prototype['Generate'] || function() {};
prototype['Generate'] = function(p, _code) {
  var $10_list, $11_length, $12_none, $2_this, $3_this, $4_trial, $5_key, $6_list, $7_length, $8_none, $9_trial, $ = this['Generate'] ? this : $bindfail('Generate'),
    $_b, $_c, $_d, _buffer, _lastColumn, _lastSourceColumn, _lastSourceLine, _lineMap, _lineNumber, _mapping, _needComma, _options = p,
    _v3, _writingLine; {
    _writingLine = 0;
    _lastColumn = 0;
    _lastSourceLine = 0;
    _lastSourceColumn = 0;
    _needComma = false;
    _buffer = '';
    var $10_list = $.lines,
      _lineNumber;
    if (undefined === $10_list) $10_list = [];
    var $11_length = $10_list.length;
    for (_lineNumber = 0; _lineNumber < $11_length; _lineNumber++) {
      _lineMap = $10_list[_lineNumber];
      var $6_list = _lineMap.columns,
        $5_key;
      if (undefined === $6_list) $6_list = [];
      var $7_length = $6_list.length;
      for ($5_key = 0; $5_key < $7_length; $5_key++) {
        _mapping = $6_list[$5_key];
        var $3_this;
        while ($3_this = ((_writingLine < _mapping.line))) {
          _lastColumn = 0;
          _needComma = false;
          _buffer += ';';
          _writingLine += 1;
        }
        if ($4_trial = (_needComma)) {
          _buffer += ',';
          _needComma = false;
        }
        _buffer += $.EncodeVlq((_mapping.column - _lastColumn));
        _lastColumn = _mapping.column;
        _buffer += $.EncodeVlq(0);
        _buffer += $.EncodeVlq((_mapping.sourceLine - _lastSourceLine));
        _lastSourceLine = _mapping.sourceLine;
        _buffer += $.EncodeVlq((_mapping.sourceColumn - _lastSourceColumn));
        _lastSourceColumn = _mapping.sourceColumn;
        _needComma = true;;
      }
      _v3 = {
        version: 3,
        file: ((undefined !== ($_b = _options.generatedFile)) ? $_b : ''),
        sourceRoot: ((undefined !== ($_b = _options.sourceRoot)) ? $_b : ''),
        sources: ((undefined !== ($_b = _options.sourceFiles)) ? $_b : ((undefined !== ($_b = [_options.filename])) ? $_b : ['<anonymous>'])),
        names: [],
        mappings: _buffer
      };
      if ($9_trial = ((_options.sourceMap || _options.inlineMap))) {
        _v3.sourcesContent = [_code];
      }
      return (_v3);;
    }
  }
};
var $6g = prototype['EncodeVlq'] || function() {};
prototype['EncodeVlq'] = function(p) {
  var $13_this, $14_trial, $15_this, $ = this['EncodeVlq'] ? this : $bindfail('EncodeVlq'),
    _answer, _nextChunk, _value = p,
    _valueToEncode; {
    _answer = '';
    _valueToEncode = ((Math.abs(_value) << 1) | (((_value < 0)) ? (1) : (0)));
    var $15_this;
    while ($15_this = ((_valueToEncode || (!(_answer))))) {
      _nextChunk = (_valueToEncode & _VLQ_VALUE_MASK);
      _valueToEncode >>= _VLQ_SHIFT;
      if ($14_trial = (_valueToEncode)) {
        _nextChunk |= _VLQ_CONTINUATION_BIT;
      }
      _answer += _BASE64_CHARS[_nextChunk];
    }
    return (_answer);
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
