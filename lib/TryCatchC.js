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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-15T22:23:43.354Z"};
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
var $6g = prototype['OutVarHelper'] || function() {};
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
var $7g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"TryCatchC.sai","loader":"SAI.GetSourceFromPaths","path":"src/TryCatchC.sai","mtime":"2018-03-14T19:43:06.680Z","fetched":"2018-03-15T22:23:43.327Z"};
var isa = prototype.isa = 'TryCatchC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['TryCatchC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
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
    var $_d, $_c, $0, $ = this; {
      return ($.Documents());
    }
  },
  set: undefined
});
var $3g = prototype['TryConstruct'] || function() {};
prototype['TryConstruct'] = function(p) {
  var $_d, $_c, $9, $8, $7, $6, $5, _text, _vars, _outs, _body, $4, $3, $2, _pattern, $1, $ = this['TryConstruct'] ? this : $bindfail('TryConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'TryConstruct\''); {
    _pattern = $AI.reduce_op_fast(p.clauses, function($4, $2, $3) {
      var $t = $AI.slice_op($2.type, undefined, 1);
      return (undefined === $4) ? $t : ($4 + $t);
    }, undefined);
    if (!(((_pattern === 'tc') || ((_pattern === 'tf') || (_pattern === 'tcf'))))) {
      return ({
        error: 'SAI compiler: error in structure of TRY/CATCH/FINALLY: expected tc/tf/tcf, got ' + _pattern
      });
    }
    _body = '';
    var $8 = p.clauses,
      $7 = undefined;
    if (undefined === $8) $8 = {};
    for ($7 in $8) {
      $6 = $8[$7];
      switch ($5 = ($6.type)) {
        case 'try.block':
          _body += 'try { ' + $6.args.block + ' }\n';
          break;
        case 'catch.outblock':
          _outs = $.OutVarHelper($6.args.out);
          _vars = {
            'error': _outs[0],
            'block': $6.args.block
          };
          _text = 'catch(\x5e{error}) { \x5e{block} }' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'finally.block':
          _body += 'finally { ' + $6.args.block + ' }\n';
          break;
        default:
          return ({
            error: 'SAI compiler: unhandled ' + $6.type + ' in TryConstruct -- this is a compiler bug.'
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
  var $12, $11, _body, $10, $ = this['ThrowConstruct'] ? this : $bindfail('ThrowConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'ThrowConstruct\''); {
    _body = '';
    var $12 = p.clauses[0];
    switch ($11 = ($12.type)) {
      case 'throw.exprs':
        _body = 'throw ' + $12.args.exprs[1] + ';\n';
        break;
      default:
        return ({
          error: 'SAI compiler: unhandled ' + $12.type + ' in ThrowConstruct -- this is a compiler bug.'
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
  var $13, $ = this['Documents'] ? this : $bindfail('Documents'); {
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
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
