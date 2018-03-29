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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-29T00:44:57.238Z"};
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
  var $0_this, $1_key, $2_list, $3_length, $4_none, $5_trial, $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'),
    $_c, $_d, _out = p,
    _vars; {
    _vars = [];
    /*@:10*/
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
    /*@:13*/
    return (_vars);
    /*@:14*/
  }
};
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/ReturnC.sai","mtime":"2018-03-15T12:42:00.237Z","fetched":"2018-03-29T00:44:57.195Z"};
var isa = prototype.isa = 'ReturnC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ReturnC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "ReturnConstruct", "Documents", "isa"]);
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
Object.defineProperty(prototype, "docs", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $0_this, $ = this,
      $_c, $_d; {
      return ($.Documents());
      /*@:44*/
    }
  },
  set: undefined
});
var $3g = prototype['ReturnConstruct'] || function() {};
prototype['ReturnConstruct'] = function(p) {
  var $1_this, $2_trial, $3, $4_this, $5_key, $6_list, $7_none, $ = this['ReturnConstruct'] ? this : $bindfail('ReturnConstruct'),
    $_c, $_d, _body; {
    if ($2_trial = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI bug: error parsing RETURN-type constructs with multiple clauses: ' + $AI.keys_op(p.clauses).join(', ')
      });
      /*@:50*/
    }
    /*@:51*/
    _body = '';
    /*@:52*/
    var $6_list = p.clauses,
      $5_key = undefined;
    if (undefined === $6_list) $6_list = {};
    for ($5_key in $6_list) {
      $4_this = $6_list[$5_key];
      switch ($3 = ($4_this.type)) {
        case 'return.exprs':
          _body = 'return (' + $4_this.args.exprs[1] + ');\n';
          /*@:62*/
          break;
        case 'return.none':
          _body = 'return;\n';
          /*@:65*/
          break;
        case 'resolve.exprs':
          _body = 'return $_resolve(' + $4_this.args.exprs[1] + ');\n';
          /*@:68*/
          break;
        case 'resolve.none':
          _body = 'return $_resolve();\n';
          /*@:71*/
          break;
        case 'reject.exprs':
          _body = 'return $_reject(' + $4_this.args.exprs[1] + ');\n';
          /*@:74*/
          break;
        case 'reject.none':
          _body = 'return $_reject();\n';
          /*@:77*/
          break;
        case 'yielding.exprs':
          _body = 'yield *(' + $4_this.args.exprs[1] + ');\n';
          /*@:80*/
          break;
        case 'yield.exprs':
          _body = 'yield (' + $4_this.args.exprs[1] + ');\n';
          /*@:83*/
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $4_this.type + ' in ReturnConstruct'
          });
          /*@:86*/
          break;
      };
    }
    /*@:87*/
    return ({
      body: _body
    });
    /*@:88*/
  }
};
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $8_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'reject': {
          category: 'keywords',
          subtitle: 'mark a Promise as having failed',
          summary: 'Call the failed potential outcome for a function declared with **promise**.',
          detail: 'This does not implicity end execution, however, the way **return** does.' + '\n' + '' + '\n' + 'For an example, see **promise**.' + '\n' + '' + '\n' + ''
        },
        'resolve': {
          category: 'keywords',
          subtitle: 'mark a Promise as succeeding',
          summary: 'Call the successful potential outcome for a function declared with **promise**.',
          detail: 'Doesn\'t implicitly end execution the way **return** does, so make sure you mind the code path.' + '\n' + '' + '\n' + 'For an example, see **promise**.' + '\n' + '' + '\n' + ''
        },
        'return': {
          category: 'keywords',
          subtitle: 'exit a function, returning a value maybe',
          summary: 'Return a value to the caller of a **task**.',
          detail: 'Works just like Javascript.' + '\n' + '' + '\n' + '    set multiply to task given a, b' + '\n' + '      return a*b' + '\n' + '' + '\n' + '    debug multiply(2, 4)' + '\n' + '' + '\n' + '    > 8' + '\n' + '' + '\n' + ''
        },
        'yielding': {
          category: 'keywords',
          subtitle: 'process inclusion',
          summary: 'Yields to another process until that process is done yielding.',
          detail: 'Equivalent to Javascript’s `yield *` syntax.' + '\n' + 'Essentially, **yielding** calls another process given a subroutine.' + '\n' + '' + '\n' + '    // The Mirror process yields its first argument' + '\n' + '    // then reverses it (in ASCII), yields that' + '\n' + '    // then terminates' + '\n' + '' + '\n' + '    set Mirror to process given str' + '\n' + '      yield str' + '\n' + '      yield str.split(\'\').reverse().join(\'\')' + '\n' + '' + '\n' + '    // FruitSalad process is yielding an invocation of Mirror' + '\n' + '    // for each fruit, then terminates' + '\n' + '' + '\n' + '    set FruitSalad to process' + '\n' + '      ply fruit' + '\n' + '        yielding Mirror(it)' + '\n' + '' + '\n' + '    // access each generated value in FruitSalad in turn' + '\n' + '    iterate FruitSalad()' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > Apple' + '\n' + '    > elppA' + '\n' + '    > Banana' + '\n' + '    > ananaB' + '\n' + '    > Citron' + '\n' + '    > nortiC' + '\n' + '' + '\n' + 'In the example, Mirror yields twice, and FruitSalad yields to Mirror three times (once for each fruit), so the final iteration result is six values.' + '\n' + '' + '\n' + ''
        },
        'yield': {
          category: 'keywords',
          subtitle: 'process product',
          summary: 'Produces the _next_ value in a __process__.',
          detail: 'Used with functions defined as **process**; see that keyword in this documentation,' + '\n' + 'and the EcmaScript 6 documentation for details.' + '\n' + '' + '\n' + '    set OddNumbers to process' + '\n' + '      set i to 1' + '\n' + '      while true' + '\n' + '        yield i' + '\n' + '        set i + 2' + '\n' + '' + '\n' + '    set myOdds OddNumbers()' + '\n' + '    debug myOdds.next' + '\n' + '    debug myOdds.next' + '\n' + '    debug myOdds.next' + '\n' + '' + '\n' + '    > { value: 1, done: false }' + '\n' + '    > { value: 3, done: false }' + '\n' + '    > { value: 5, done: false }' + '\n' + '' + '\n' + '    iterate OddNumbers() | limit 4' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > 1' + '\n' + '    > 3' + '\n' + '    > 5' + '\n' + '    > 7' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
