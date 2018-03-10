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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-09T22:04:14.998Z","fetched":"2018-03-10T21:16:24.202Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "isa"]);
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
var __context={"name":"CrudP.sai","loader":"SAI.GetSourceFromPaths","path":"src/CrudP.sai","mtime":"2018-03-10T21:08:26.105Z","fetched":"2018-03-10T21:16:24.136Z"};
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
            tools: []
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
            tools: []
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
            tools: []
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
            tools: []
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
