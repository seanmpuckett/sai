#!/usr/bin/env node

// Javascript source for TryCatchC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-07T14:21:44.851Z","fetched":"2018-03-07T23:19:31.973Z"};
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
var $4g = prototype['OutVarHelper'] || function() {};
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
var __context={"name":"TryCatchC.sai","loader":"SAI.GetSourceFromPaths","path":"src/TryCatchC.sai","mtime":"2018-03-07T20:47:53.908Z","fetched":"2018-03-07T23:19:31.952Z"};
var isa = prototype.isa = 'TryCatchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['TryCatchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "TryConstruct", "ThrowConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'try': {
          repeats: false,
          clauses: {
            'try': {
              block: true
            },
            'catch': {
              outblock: true
            },
            'finally': {
              block: true
            }
          },
          handler: function() {
            return ($.TryConstruct).apply($, arguments);
          }
        },
        'throw': {
          repeats: false,
          clauses: {
            'throw': {
              exprs: true
            }
          },
          handler: function() {
            return ($.ThrowConstruct).apply($, arguments);
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['TryConstruct'] || function() {};
prototype['TryConstruct'] = function(p) {
  var $_d, $_c, $5, $4, $3, $2, $1, _text, _vars, _outs, _body, _pattern, $0, $ = this['TryConstruct'] ? this : $bindfail('TryConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'TryConstruct\''); {
    _pattern = $AI.reduce_op(p.clauses, function(_sum, $_v, $_k) {
      return (_sum + $AI.slice_op(($_v.type), undefined, 1));
    }, '');
    if (!(((_pattern === 'tc') || ((_pattern === 'tf') || (_pattern === 'tcf'))))) {
      return ({
        error: 'SAI compiler: error in structure of TRY/CATCH/FINALLY: expected tc/tf/tcf, got ' + _pattern
      });
    }
    _body = '';
    var $4 = p.clauses,
      $3 = undefined;
    if (undefined === $4) $4 = {};
    for ($3 in $4) {
      $2 = $4[$3];
      switch ($1 = ($2.type)) {
        case 'try.block':
          _body += 'try { ' + $2.args.block + ' }\n';
          break;
        case 'catch.outblock':
          _outs = $.OutVarHelper($2.args.out);
          _vars = {
            'error': _outs[0],
            'block': $2.args.block
          };
          _text = 'catch(\x5e{error}) { \x5e{block} }' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'finally.block':
          _body += 'finally { ' + $2.args.block + ' }\n';
          break;
        default:
          return ({
            error: 'SAI compiler: unhandled ' + $2.type + ' in TryConstruct -- this is a compiler bug.'
          });
          break;
      };
    }
    return ({
      body: _body
    });
  }
};
var $3g = prototype['ThrowConstruct'] || function() {};
prototype['ThrowConstruct'] = function(p) {
  var $7, _body, $6, $ = this['ThrowConstruct'] ? this : $bindfail('ThrowConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'ThrowConstruct\''); {
    _body = '';
    var $8 = p.clauses[0];
    switch ($7 = ($8.type)) {
      case 'throw.exprs':
        _body = 'throw ' + $8.args.exprs[1] + ';\n';
        break;
      default:
        return ({
          error: 'SAI compiler: unhandled ' + $8.type + ' in ThrowConstruct -- this is a compiler bug.'
        });
        break;
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
