#!/usr/bin/env node

// Javascript source for ReturnC.sai transipled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-05T21:51:09.424Z","fetched":"2018-03-06T19:07:44.269Z"};
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
var __context={"name":"ReturnC.sai","loader":"SAI.GetSourceFromPaths","path":"src/ReturnC.sai","mtime":"2018-03-06T14:30:01.050Z","fetched":"2018-03-06T19:07:44.236Z"};
var isa = prototype.isa = 'ReturnC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ReturnC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "'ReturnConstruct'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'return': {
          repeats: false,
          clauses: {
            'return': {
              exprs: true,
              none: true
            }
          },
          handler: function() {
            return ($.ReturnConstruct).apply($, arguments);
          }
        },
        'resolve': {
          repeats: false,
          clauses: {
            'resolve': {
              exprs: true,
              none: true
            }
          },
          handler: function() {
            return ($.ReturnConstruct).apply($, arguments);
          }
        },
        'reject': {
          repeats: false,
          clauses: {
            'reject': {
              exprs: true,
              none: true
            }
          },
          handler: function() {
            return ($.ReturnConstruct).apply($, arguments);
          }
        },
        'yielding': {
          repeats: false,
          clauses: {
            'yielding': {
              exprs: true
            }
          },
          handler: function() {
            return ($.ReturnConstruct).apply($, arguments);
          }
        },
        'yield': {
          repeats: false,
          clauses: {
            'yield': {
              exprs: true
            }
          },
          handler: function() {
            return ($.ReturnConstruct).apply($, arguments);
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['ReturnConstruct'] || function() {};
prototype['ReturnConstruct'] = function(p) {
  var $_d, $_c, $8, $7, $6, $5, $2, _body, $1, $0, $ = this['ReturnConstruct'] ? this : $bindfail('ReturnConstruct'); {
    if (($1 = ((p.clauses.length > 1)))) {
      return ({
        error: 'SAI bug: error parsing RETURN-type constructs with multiple clauses: ' + $AI.keys_op(p.clauses).join(', ')
      });
    }
    _body = '';
    var $7 = p.clauses;
    if (undefined === $7) $7 = [];
    for (var $6 in $7) {
      var $5 = $7[$6];
      switch ($2 = ($5.type)) {
        case ('return.exprs'):
          _body = 'return (' + $5.args.exprs[1] + ');\n';
          break;
        case ('return.none'):
          _body = 'return;\n';
          break;
        case ('resolve.exprs'):
          _body = 'return $_resolve(' + $5.args.exprs[1] + ');\n';
          break;
        case ('resolve.none'):
          _body = 'return $_resolve();\n';
          break;
        case ('reject.exprs'):
          _body = 'return $_reject(' + $5.args.exprs[1] + ');\n';
          break;
        case ('reject.none'):
          _body = 'return $_reject();\n';
          break;
        case ('yielding.exprs'):
          _body = 'yield *(' + $5.args.exprs[1] + ');\n';
          break;
        case ('yield.exprs'):
          _body = 'yield (' + $5.args.exprs[1] + ');\n';
          break;
        default:
          return ({
            error: 'SAI compiler: unhandled ' + $5.type + ' -- this is a compiler bug.'
          });
          break;
      }
    }
    return ({
      body: _body
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
