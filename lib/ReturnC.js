#!/usr/bin/env node

// Javascript source for ReturnC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-09T22:04:14.998Z","fetched":"2018-03-10T16:36:22.709Z"};
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
var __context={"name":"ReturnC.sai","loader":"SAI.GetSourceFromPaths","path":"src/ReturnC.sai","mtime":"2018-03-09T17:03:16.297Z","fetched":"2018-03-10T16:36:22.690Z"};
var isa = prototype.isa = 'ReturnC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ReturnC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "ReturnConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
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
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['ReturnConstruct'] || function() {};
prototype['ReturnConstruct'] = function(p) {
  var $_d, $_c, $6, $5, $4, $3, $2, _body, $1, $0, $ = this['ReturnConstruct'] ? this : $bindfail('ReturnConstruct'); {
    if ($1 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI bug: error parsing RETURN-type constructs with multiple clauses: ' + $AI.keys_op(p.clauses).join(', ')
      });
    }
    _body = '';
    var $5 = p.clauses,
      $4 = undefined;
    if (undefined === $5) $5 = {};
    for ($4 in $5) {
      $3 = $5[$4];
      switch ($2 = ($3.type)) {
        case 'return.exprs':
          _body = 'return (' + $3.args.exprs[1] + ');\n';
          break;
        case 'return.none':
          _body = 'return;\n';
          break;
        case 'resolve.exprs':
          _body = 'return $_resolve(' + $3.args.exprs[1] + ');\n';
          break;
        case 'resolve.none':
          _body = 'return $_resolve();\n';
          break;
        case 'reject.exprs':
          _body = 'return $_reject(' + $3.args.exprs[1] + ');\n';
          break;
        case 'reject.none':
          _body = 'return $_reject();\n';
          break;
        case 'yielding.exprs':
          _body = 'yield *(' + $3.args.exprs[1] + ');\n';
          break;
        case 'yield.exprs':
          _body = 'yield (' + $3.args.exprs[1] + ');\n';
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $3.type + ' in ReturnConstruct'
          });
          break;
      };
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
