#!/usr/bin/env node

// Javascript source for IfElseC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-07T14:21:44.851Z","fetched":"2018-03-07T23:19:31.476Z"};
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
var __context={"name":"IfElseC.sai","loader":"SAI.GetSourceFromPaths","path":"src/IfElseC.sai","mtime":"2018-03-07T20:51:22.359Z","fetched":"2018-03-07T23:19:31.399Z"};
var isa = prototype.isa = 'IfElseC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['IfElseC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "IfElseConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'if': {
          repeats: false,
          clauses: {
            'if': {
              exproutblock: true
            },
            'elsif': {
              exproutblock: true
            },
            'elsunless': {
              exproutblock: true
            },
            'elsexists': {
              exproutblock: true
            },
            'else': {
              block: true
            }
          },
          handler: function() {
            return ($.IfElseConstruct).apply($, arguments);
          }
        },
        'unless': {
          repeats: false,
          clauses: {
            'unless': {
              exproutblock: true
            },
            'elsif': {
              exproutblock: true
            },
            'elsunless': {
              exproutblock: true
            },
            'elsexists': {
              exproutblock: true
            },
            'else': {
              block: true
            }
          },
          handler: function() {
            return ($.IfElseConstruct).apply($, arguments);
          }
        },
        'exists': {
          repeats: false,
          clauses: {
            'exists': {
              exproutblock: true
            },
            'elsif': {
              exproutblock: true
            },
            'elsunless': {
              exproutblock: true
            },
            'elsexists': {
              exproutblock: true
            },
            'else': {
              block: true
            }
          },
          handler: function() {
            return ($.IfElseConstruct).apply($, arguments);
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['IfElseConstruct'] || function() {};
prototype['IfElseConstruct'] = function(p) {
  var $_d, $_c, $12, $11, $10, $9, $8, $7, _text, _vars, _outs, _body, $6, $5, $4, $3, $2, $1, $0, $ = this['IfElseConstruct'] ? this : $bindfail('IfElseConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IfElseConstruct\''); {
    var $4 = $AI.slice_op((p.clauses), 0, (0 - (1))),
      $3;
    if (undefined === $4) $4 = [];
    var $5 = $4.length;
    for ($3 = 0; $3 < $5; $3++) {
      $2 = $4[$3];
      if ($1 = (($2.clause === 'else'))) {
        return ({
          error: 'SAI Compiler: ELSE, if present, must be the last clause in an IF/UNLESS/EXISTS construct.'
        });
      };
    }
    _body = '';
    var $10 = p.clauses,
      $9;
    if (undefined === $10) $10 = [];
    var $11 = $10.length;
    for ($9 = 0; $9 < $11; $9++) {
      $8 = $10[$9];
      _outs = $.OutVarHelper($8.args.out);
      switch ($7 = ($8.type)) {
        case 'if.exproutblock':
          _vars = {
            'trial': _outs[0],
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'if (\x5e{trial}=(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'unless.exproutblock':
          _vars = {
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'if (!(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'exists.exproutblock':
          _vars = {
            'this': _outs[0],
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'if (undefined !== (\x5e{this}=(\x5e{condition}))) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsif.exproutblock':
          _vars = {
            'trial': _outs[0],
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'else if (\x5e{trial}=(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsexists.exproutblock':
          _vars = {
            'this': _outs[0],
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'else if (undefined !== (\x5e{this}=(\x5e{condition}))) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsunless.exproutblock':
          _vars = {
            'condition': $8.args.expr,
            'block': $8.args.block
          };
          _text = 'else if (!(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'else.block':
          _vars = {
            'block': $8.args.block
          };
          _text = 'else {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $8.type + ' in IfElseConstruct'
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
