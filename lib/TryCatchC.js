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

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/Construct.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-04T23:09:42.435Z","fetched":"2018-04-11T21:09:45.094Z"};
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
var $6g = prototype['OutVarHelper'] || function() {};
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
var $7g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};


var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/TryCatchC.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-09T15:46:08.209Z","fetched":"2018-04-11T21:09:45.070Z"};
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
var isa = prototype.isa = 'TryCatchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['TryCatchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "TryConstruct", "ThrowConstruct", "Documents", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
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
var $3g = prototype['TryConstruct'] || function() {};
prototype['TryConstruct'] = function(p) {
  var $1_this, $2_this, $3_key, $4_sum, $5, $6_this, $7_key, $8_list, $9_none, $ = this['TryConstruct'] ? this : $bindfail('TryConstruct'),
    $_c, $_d, _body, _outs, _pattern, _text, _vars;
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'TryConstruct\''); {
    _pattern = $AI.sum_op(p.clauses, function($4_sum, $2_this, $3_key) {
      var $t = $AI.slice_op($2_this.type, undefined, 1);
      return (undefined === $4_sum) ? $t : ($4_sum + $t);
    }, undefined);
    if (!(((_pattern === 'tc') || ((_pattern === 'tf') || (_pattern === 'tcf'))))) {
      return ({
        error: 'SAI compiler: error in structure of TRY/CATCH/FINALLY: expected tc/tf/tcf, got ' + _pattern
      });
    }
    _body = '';
    var $8_list = p.clauses,
      $7_key = undefined;
    if (undefined === $8_list) $8_list = {};
    for ($7_key in $8_list) {
      $6_this = $8_list[$7_key];
      switch ($5 = ($6_this.type)) {
        case 'try.block':
          _body += 'try { ' + $6_this.args.block + ' }\n';
          break;
        case 'catch.outblock':
          _outs = $.OutVarHelper($6_this.args.out);
          _vars = {
            'error': _outs[0],
            'block': $6_this.args.block
          };
          _text = 'catch(\x5e{error}) { \x5e{block} }' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'finally.block':
          _body += 'finally { ' + $6_this.args.block + ' }\n';
          break;
        default:
          return ({
            error: 'SAI compiler: unhandled ' + $6_this.type + ' in TryConstruct -- this is a compiler bug.'
          });
          break;
      };
    }
    return ({
      body: _body
    });
  }
};
var $4g = prototype['ThrowConstruct'] || function() {};
prototype['ThrowConstruct'] = function(p) {
  var $10_this, $11, $12_this, $ = this['ThrowConstruct'] ? this : $bindfail('ThrowConstruct'),
    _body;
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'ThrowConstruct\''); {
    _body = '';
    var $12_this = p.clauses[0];
    switch ($11 = ($12_this.type)) {
      case 'throw.exprs':
        _body = 'throw ' + $12_this.args.exprs[1] + ';\n';
        break;
      default:
        return ({
          error: 'SAI compiler: unhandled ' + $12_this.type + ' in ThrowConstruct -- this is a compiler bug.'
        });
        break;
    };
    return ({
      body: _body
    });
  }
};
var $5g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $13_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'try': {
          subtitle: 'handle exceptional errors',
          summary: 'Exception handling construct.',
          detail: 'In addition to the standard Javascript stuff, SAI\'s "try" uses the' + '\n' + '__error__ pronoun within the __catch__ clause to expose the caught error,' + '\n' + 'as seen in the example below.' + '\n' + '' + '\n' + '    set file to new File \'output.log\'' + '\n' + '    try' + '\n' + '      file.Open' + '\n' + '      file.Write \'Hey, it\'s a log\'' + '\n' + '    catch' + '\n' + '      return error.message' + '\n' + '    finally' + '\n' + '      file.Close' + '\n' + '' + '\n' + 'For details, see the Javacript exception documentation.' + '\n' + '' + '\n' + ''
        },
        'throw': {
          subtitle: 'generate an exception',
          summary: 'Trigger exception handling.',
          detail: 'Example:' + '\n' + '' + '\n' + '  try' + '\n' + '    throw new Error \'Oh no!\'' + '\n' + '  catch' + '\n' + '    return error.message' + '\n' + '' + '\n' + 'You should probably look at the Javascript documentation.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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



