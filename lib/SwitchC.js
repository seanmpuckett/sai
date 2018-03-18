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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-18T20:07:21.744Z"};
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
var $5g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $_d, $_c, $5, $4, $3, $2, $1, $0, _vars, _out = p,
    $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'); {
    _vars = [];
    /*@:10*/
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
    /*@:13*/
    return (_vars);
    /*@:14*/
  }
};
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"name":"SwitchC.sai","loader":"SAI.GetSourceFromPaths","path":"src/SwitchC.sai","mtime":"2018-03-14T19:44:22.859Z","fetched":"2018-03-18T20:07:21.713Z"};
var isa = prototype.isa = 'SwitchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SwitchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "SwitchConstruct", "Documents", "isa"]);
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
Object.defineProperty(prototype, "docs", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $_d, $_c, $0, $ = this; {
      return ($.Documents());
      /*@:22*/
    }
  },
  set: undefined
});
var $3g = prototype['SwitchConstruct'] || function() {};
prototype['SwitchConstruct'] = function(p) {
  var $_d, $_c, $15, $14, $13, $12, $11, $10, $9, $8, $7, _cases, _text, _vars, _trialvar, _outs, _body, $6, $5, $4, $3, $2, $1, $ = this['SwitchConstruct'] ? this : $bindfail('SwitchConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'SwitchConstruct\''); {
    if ($2 = ((($AI.element_op($AI.slice_op(p.clauses, undefined, -1), 0)).clause !== 'else'))) {
      return ({
        error: 'SAI Complier: Every SWITCH statement should have an ELSE clause at the end. (If it\'s in the middle of the CASES, move it to the end.)'
      });
      /*@:33*/
    }
    /*@:34*/
    var $6 = $AI.count_op($AI.filter_op(p.clauses, function($3, $4) {
      return ($3.clause === 'else');
    }));
    if ($5 = (($6 > 1))) {
      return ({
        error: 'SAI Compiler: Found ' + $6 + ' ELSE clauses in SWITCH; only one is required.'
      });
      /*@:37*/
    }; /*@:38*/
    _body = '';
    _outs = $.OutVarHelper(p.clauses[0].args.out);
    _trialvar = {
      'trial': (_outs[0] || p.tools.addlocal())
    };
    /*@:43*/
    var $13 = p.clauses,
      $12;
    if (undefined === $13) $13 = [];
    var $14 = $13.length;
    for ($12 = 0; $12 < $14; $12++) {
      $11 = $13[$12];
      switch ($10 = ($11.type)) {
        case 'switch.exprout':
          _vars = $AI.overlay_op(_trialvar, {
            'condition': $11.args.expr
          });
          _text = 'switch (\x5e{trial}=(\x5e{condition})) {' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'case.exprsblock':
          _cases = $AI.reduce_op_fast($11.args.exprs[2], function($9, $7, $8) {
            var $t = 'case ' + $7 + ':\n';
            return (undefined === $9) ? $t : ($9 + $t);
          }, undefined);
          _vars = $AI.overlay_op(_trialvar, {
            'cases': _cases,
            'block': $11.args.block
          });
          _text = '\x5e{cases}' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'else.block':
          _vars = $AI.overlay_op(_trialvar, {
            'block': $11.args.block
          });
          _text = 'default:' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $11.type + ' in SwitchConstruct'
          });
          /*@:85*/
          break;
      };
    }
    /*@:86*/
    _body += '}';
    /*@:87*/
    return ({
      body: _body
    });
    /*@:89*/
  }
};
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $16, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'switch': {
          subtitle: 'choice-based conditional',
          summary: 'Choose among alternatives based on expression equality.',
          detail: 'The expression under evaluation is available to all codepaths' + '\n' + 'as **trial** (which can be renamed with the **as** clause).' + '\n' + '' + '\n' + 'Unlike the native Javascript `switch` these __case__ clauses do not fall through;' + '\n' + 'the break is implicit.  (Though you can break out early.)' + '\n' + '' + '\n' + '    switch ~System.IO.Keypress() as key' + '\n' + '    case \'n\', \'N\'' + '\n' + '      Move 0,-1' + '\n' + '    case \'s\', \'S\'' + '\n' + '      Move 0,1' + '\n' + '    case \'e\', \'E\'' + '\n' + '      Move 1,0' + '\n' + '    case \'w\', \'W\'' + '\n' + '      Move -1,0' + '\n' + '    case \' \'' + '\n' + '      Jump' + '\n' + '    case \'?\'' + '\n' + '      Help' + '\n' + '    else' + '\n' + '      Emit \'Key [$\{key}] isn\'t used; type ? for help.\'' + '\n' + '' + '\n' + 'The compiler will insist on an __else__ clause as a matter of good programming hygeine.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      }
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
