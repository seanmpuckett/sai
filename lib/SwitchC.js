#!/usr/bin/env node

// Javascript source for SwitchC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T01:03:10.014Z"};
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
var __context={"name":"SwitchC.sai","loader":"SAI.GetSourceFromPaths","path":"src/SwitchC.sai","mtime":"2018-03-10T20:09:49.837Z","fetched":"2018-03-12T01:03:09.997Z"};
var isa = prototype.isa = 'SwitchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SwitchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "SwitchConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
          'switch': {
            repeats: false,
            clauses: {
              'switch': {
                exprout: true
              },
              'case': {
                exprsblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.SwitchConstruct).apply($, arguments);
            }
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['SwitchConstruct'] || function() {};
prototype['SwitchConstruct'] = function(p) {
  var $_d, $_c, $14, $13, $12, $11, $10, $9, $8, $7, $6, _cases, _text, _vars, _trialvar, _outs, _body, $4, $3, $2, $1, $0, $ = this['SwitchConstruct'] ? this : $bindfail('SwitchConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'SwitchConstruct\''); {
    if ($1 = ((($AI.element_op($AI.slice_op(p.clauses, undefined, -1), 0)).clause !== 'else'))) {
      return ({
        error: 'SAI Complier: Every SWITCH statement should have an ELSE clause at the end. (If it\'s in the middle of the CASES, move it to the end.)'
      });
    }
    var $5 = $AI.count_op($AI.filter_op(p.clauses, function($2, $3) {
      return ($2.clause === 'else');
    }));
    if ($4 = (($5 > 1))) {
      return ({
        error: 'SAI Compiler: Found ' + $5 + ' ELSE clauses in SWITCH; only one is required.'
      });
    }
    _body = '';
    _outs = $.OutVarHelper(p.clauses[0].args.out);
    _trialvar = {
      'trial': (_outs[0] || p.tools.addlocal())
    };
    var $12 = p.clauses,
      $11;
    if (undefined === $12) $12 = [];
    var $13 = $12.length;
    for ($11 = 0; $11 < $13; $11++) {
      $10 = $12[$11];
      switch ($9 = ($10.type)) {
        case 'switch.exprout':
          _vars = $AI.overlay_op(_trialvar, {
            'condition': $10.args.expr
          });
          _text = 'switch (\x5e{trial}=(\x5e{condition})) {' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'case.exprsblock':
          _cases = $AI.reduce_op_fast($10.args.exprs[2], function($8, $6, $7) {
            var $t = 'case ' + $6 + ':\n';
            return (undefined === $8) ? $t : ($8 + $t);
          }, undefined);
          _vars = $AI.overlay_op(_trialvar, {
            'cases': _cases,
            'block': $10.args.block
          });
          _text = '\x5e{cases}' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'else.block':
          _vars = $AI.overlay_op(_trialvar, {
            'block': $10.args.block
          });
          _text = 'default:' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $10.type + ' in SwitchConstruct'
          });
          break;
      };
    }
    _body += '}';
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
