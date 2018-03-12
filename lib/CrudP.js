#!/usr/bin/env node

// Javascript source for CrudP.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T01:03:09.192Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "ExprsHelper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var $3g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $_d, $_c, $5, $4, $3, $2, $1, $0, _vars, _out = p,
    $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'); {
    _vars = [];
    if ($5 = (_out)) {
      var $2 = _out,
        $1;
      if (undefined === $2) $2 = [];
      var $3 = $2.length;
      for ($1 = 0; $1 < $3; $1++) {
        $0 = $2[$1];
        _vars.push($0[0][1]);;
      }
    }
    return (_vars);
  }
};
var $4g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"CrudP.sai","loader":"SAI.GetSourceFromPaths","path":"src/CrudP.sai","mtime":"2018-03-11T17:53:21.023Z","fetched":"2018-03-12T01:03:09.132Z"};
var isa = prototype.isa = 'QueryP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['QueryP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "CrudPiper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  SPLIT: ('^&*SP.L.I.' + (Math.random() + 'T.H.E.RE*&^'))
};
for (var i in t) {
  prototype.__tobelocked.push(i);
  prototype[i] = t[i];
};
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'pipers': {
          'select': {
            clauses: {
              'select': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            },
            tools: [],
            subtitle: 'multi-attribute query',
            summary: 'Returns a new collection that is the subset of the original collection' + '\n' + 'identified by the provided list of keys/indices.',
            details: ''
          },
          'update': {
            clauses: {
              'update': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            },
            tools: [],
            subtitle: 'multi-attribute update',
            summary: 'Creates a new collection that is a composite of a copy of the left collection with all' + '\n' + 'of the values in the right collection overlaid. If discrete keys are available in the' + '\n' + 'left or right collection, they will be used intelligently.' + '\n' + 'Undefined values on the right will not be assigned.',
            details: ''
          },
          'delete': {
            clauses: {
              'delete': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            },
            tools: [],
            subtitle: 'multi-attribute removal',
            summary: 'Returns a copy of the collection with the specified attributes removed.' + '\n' + 'Elements in an array are removed in order, so sequence does matter.',
            details: ''
          },
          'expects': {
            clauses: {
              'expects': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            },
            tools: [],
            subtitle: 'attribute rule validator (internal use)',
            summary: 'Expects compares an object againt a set of rules and returns a list of rules' + '\n' + 'that are **violated**. Thus, a successful test of expectations is an empty array.' + '\n' + 'An array with one or more elements is returned that contains a list of the' + '\n' + 'rules that were broken.',
            details: ''
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['CrudPiper'] || function() {};
prototype['CrudPiper'] = function(p) {
  var $2, $1, _work, _tools, _pattern, $0, $ = this['CrudPiper'] ? this : $bindfail('CrudPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'CrudPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    if ($1 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
    }
    switch ($2 = (_work.type)) {
      case 'select.expr':
        _pattern = '$AI.select_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      case 'update.expr':
        _pattern = '$AI.overlay_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      case 'delete.expr':
        _pattern = '$AI.delete_op(' + $.SPLIT + ',' + _work.args.expr + ',true)';
        break;
      case 'expects.expr':
        _pattern = '$AI.expects_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $2 + ' in CrudPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
