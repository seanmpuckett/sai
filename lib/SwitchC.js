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

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/Construct.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-04T23:09:42.435Z","fetched":"2018-04-11T22:24:04.525Z"};
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
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "ExprsHelper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var $5g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $0_this, $1_key, $2_list, $3_length, $4_none, $5_trial, $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'),
    $_c, $_d, _out = p,
    _vars; {
    _vars = [];
    if ($5_trial = (_out)) {
      var $2_list = _out,
        $1_key;
      if (undefined === $2_list) $2_list = [];
      var $3_length = $2_list.length;
      for ($1_key = 0; $1_key < $3_length; $1_key++) {
        $0_this = $2_list[$1_key];
        _vars.push($0_this[0][1]);;
      }
    }
    return (_vars);
  }
};
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};


var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/SwitchC.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-09T15:45:53.345Z","fetched":"2018-04-11T22:24:04.500Z"};
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
var isa = prototype.isa = 'SwitchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SwitchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
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
    var $0_this, $ = this,
      $_c, $_d; {
      return ($.Documents());
    }
  },
  set: undefined
});
var $3g = prototype['SwitchConstruct'] || function() {};
prototype['SwitchConstruct'] = function(p) {
  var $10, $11_this, $12_key, $13_list, $14_length, $15_none, $1_this, $2_trial, $3_this, $4_key, $5_trial, $6_this, $7_this, $8_key, $9_sum, $ = this['SwitchConstruct'] ? this : $bindfail('SwitchConstruct'),
    $_b, $_c, $_d, _body, _cases, _outs, _text, _trialvar, _vars;
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'SwitchConstruct\''); {
    if ($2_trial = (((Array.isArray($_b = p.clauses) ? $_b[$_b.length - 1] : $AI.element_op($AI.slice_op($_b, undefined, -1), 0)).clause !== 'else'))) {
      return ({
        error: 'SAI Complier: Every SWITCH statement should have an ELSE clause at the end. (If it\'s in the middle of the CASES, move it to the end.)'
      });
    }
    var $6_this = $AI.count_op($AI.filter_op(p.clauses, function($3_this, $4_key) {
      return ($3_this.clause === 'else');
    }, false));
    if ($5_trial = (($6_this > 1))) {
      return ({
        error: 'SAI Compiler: Found ' + $6_this + ' ELSE clauses in SWITCH; only one is required.'
      });
    };
    _body = '';
    _outs = $.OutVarHelper(p.clauses[0].args.out);
    _trialvar = {
      'trial': (_outs[0] || p.tools.addlocal())
    };
    var $13_list = p.clauses,
      $12_key;
    if (undefined === $13_list) $13_list = [];
    var $14_length = $13_list.length;
    for ($12_key = 0; $12_key < $14_length; $12_key++) {
      $11_this = $13_list[$12_key];
      switch ($10 = ($11_this.type)) {
        case 'switch.exprout':
          _vars = $AI.overlay_op(_trialvar, {
            'condition': $11_this.args.expr
          });
          _text = 'switch (\x5e{trial}=(\x5e{condition})) {' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'case.exprsblock':
          _cases = $AI.sum_op($11_this.args.exprs[2], function($9_sum, $7_this, $8_key) {
            var $t = 'case ' + $7_this + ':\n';
            return (undefined === $9_sum) ? $t : ($9_sum + $t);
          }, undefined);
          _vars = $AI.overlay_op(_trialvar, {
            'cases': _cases,
            'block': $11_this.args.block
          });
          _text = '\x5e{cases}' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'else.block':
          _vars = $AI.overlay_op(_trialvar, {
            'block': $11_this.args.block
          });
          _text = 'default:' + '\n' + '\x5e{block}' + '\n' + 'break;' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $11_this.type + ' in SwitchConstruct'
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
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $16_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
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




// End of generated code

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



