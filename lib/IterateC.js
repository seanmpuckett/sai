#!/usr/bin/env node

// Javascript source for IterateC.sai transipled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-05T21:51:09.424Z","fetched":"2018-03-06T19:07:44.170Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var __context={"name":"IterateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/IterateC.sai","mtime":"2018-03-06T19:06:13.500Z","fetched":"2018-03-06T19:07:44.097Z"};
var isa = prototype.isa = 'IterateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['IterateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "'OutVarHelper'", "'EveryConstruct'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'every': {
          repeats: false,
          clauses: {
            'every': {
              exprusing: true,
              exproutblock: true
            },
            'else': {
              block: true
            }
          },
          handler: function() {
            return ($.EveryConstruct).apply($, arguments);
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $_d, $_c, $8, $7, $6, $5, $4, _vars, $0, _out = p,
    $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'); {
    _vars = [];
    if (($8 = (_out))) {
      var $6 = _out;
      if (undefined === $6) $6 = [];
      var $3 = $6.length;
      if ($3) {
        var $4, $5 = 0;
        for (; $5 < $3; $5++) {
          $4 = $6[$5];
          _vars.push($4[0][1]);
        }
      }
    }
    return (_vars);
  }
};
var $3g = prototype['EveryConstruct'] || function() {};
prototype['EveryConstruct'] = function(p) {
  var $_d, $_c, $_b, $12, $11, _text, _loop, _elseclause, _preface, _vars, _outs, _none, _main, $10, $9, $ = this['EveryConstruct'] ? this : $bindfail('EveryConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'EveryConstruct\''); {
    if (($10 = ((p.clauses.length > 2)))) {
      return ({
        error: 'SAI compile: EVERY can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      switch ($11 = (_main.type)) {
        case ('every.exproutblock'):
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            iter: false,
            elem: false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{iter}=$AI.kviterate_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'do {' + '\n' + '\x5e{this}=\x5e{elem}.value[1];' + '\n' + '\x5e{key}=\x5e{elem}.value[0];' + '\n' + '\x5e{block}' + '\n' + '\x5e{elem}=\x5e{iter}.next();' + '\n' + '} while (!\x5e{elem}.done);' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        case ('every.exprusing'):
          _vars = {
            'task': _main.args.using,
            source: _main.args.expr,
            iter: false,
            elem: false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{iter}=$AI.kviterate_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'do {' + '\n' + '\x5e{task}(\x5e{elem}.value[1], \x5e{elem}.value[0]);' + '\n' + '\x5e{elem}=\x5e{iter}.next();' + '\n' + '} while (!\x5e{elem}.done);' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
      }
    } catch ($12) {
      $AI.debug_op($12);
    }
    return ({
      body: _text
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
