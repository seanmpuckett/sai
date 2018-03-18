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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-18T20:07:19.262Z"};
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
var __context={"name":"IfElseC.sai","loader":"SAI.GetSourceFromPaths","path":"src/IfElseC.sai","mtime":"2018-03-14T19:44:58.449Z","fetched":"2018-03-18T20:07:19.126Z"};
var isa = prototype.isa = 'IfElseC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['IfElseC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "IfElseConstruct", "Documentation", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
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
      return ($.Documentation());
      /*@:44*/
    }
  },
  set: undefined
});
var $3g = prototype['IfElseConstruct'] || function() {};
prototype['IfElseConstruct'] = function(p) {
  var $_d, $_c, $13, $12, $11, $10, $9, $8, _text, _vars, _outs, _body, $7, $6, $5, $4, $3, $2, $1, $ = this['IfElseConstruct'] ? this : $bindfail('IfElseConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IfElseConstruct\''); {
    var $5 = $AI.slice_op(p.clauses, 0, (0 - (1))),
      $4;
    if (undefined === $5) $5 = [];
    var $6 = $5.length;
    for ($4 = 0; $4 < $6; $4++) {
      $3 = $5[$4];
      if ($2 = (($3.clause === 'else'))) {
        return ({
          error: 'SAI Compiler: ELSE, if present, must be the last clause in an IF/UNLESS/EXISTS construct.'
        });
        /*@:56*/
      };
    }
    /*@:57*/
    _body = '';
    /*@:58*/
    var $11 = p.clauses,
      $10;
    if (undefined === $11) $11 = [];
    var $12 = $11.length;
    for ($10 = 0; $10 < $12; $10++) {
      $9 = $11[$10];
      _outs = $.OutVarHelper($9.args.out);
      /*@:62*/
      switch ($8 = ($9.type)) {
        case 'if.exproutblock':
          _vars = {
            'trial': _outs[0],
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'if (\x5e{trial}=(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'unless.exproutblock':
          _vars = {
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'if (!(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'exists.exproutblock':
          _vars = {
            'this': _outs[0],
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'if (undefined !== (\x5e{this}=(\x5e{condition}))) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsif.exproutblock':
          _vars = {
            'trial': _outs[0],
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'else if (\x5e{trial}=(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsexists.exproutblock':
          _vars = {
            'this': _outs[0],
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'else if (undefined !== (\x5e{this}=(\x5e{condition}))) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'elsunless.exproutblock':
          _vars = {
            'condition': $9.args.expr,
            'block': $9.args.block
          };
          _text = 'else if (!(\x5e{condition})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        case 'else.block':
          _vars = {
            'block': $9.args.block
          };
          _text = 'else {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _body += p.tools.replacer(_text, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $9.type + ' in IfElseConstruct'
          });
          /*@:160*/
          break;
      };
    }
    /*@:161*/
    return ({
      body: _body
    });
    /*@:162*/
  }
};
var $4g = prototype['Documentation'] || function() {};
prototype['Documentation'] = function(p) {
  var $14, $ = this['Documentation'] ? this : $bindfail('Documentation'); {
    return ({
      'constructs': {
        'if': {
          subtitle: 'conditional flow control',
          summary: 'If the expression is _truthy_, the code directly after the **if** is executed.' + '\n' + 'Otherwise, perform additional tests if specified by any **elsif**, **elsexists** or **elsunless** clauses,' + '\n' + 'or failing those, perform the code after the optional **else** clause.',
          detail: 'What is _truthy_?  Any value which is not _falsy_.  See [http://www.sitepoint.com/javascript-truthy-falsy/][1] for specifics; excerpted here.' + '\n' + '' + '\n' + '_Falsy_ values are: `false`, `0` (zero), `""` (empty string), `null`, `undefined`, and `NaN` (not-a-number).  Everything else is _truthy_.' + '\n' + '' + '\n' + 'The value used in the test of the **if** is available in the _pronoun_ **trial**, which can be reassigned using an **as** clause.' + '\n' + '' + '\n' + '    if names[pk]' + '\n' + '      debug trial // prints the contents of names[pk]' + '\n' + '' + '\n' + '    if names[pk] as row' + '\n' + '      debug row // prints the contents of names[pk]' + '\n' + '' + '\n' + 'N.B. that __trial__ holds the value of the entire condition, not any sub-elements.' + '\n' + '' + '\n' + '    if key is \'esc\'' + '\n' + '      debug \'the value of trial is: \' + trial   // this prints \'true\', not \'esc\'' + '\n' + '' + '\n' + '#### else' + '\n' + '' + '\n' + 'Specifies a block of code that will be executed if the condition leading to the previous block fails.' + '\n' + 'Used with conditional statements **if/unless/exists**.' + '\n' + '' + '\n' + '    if b' + '\n' + '      debug \'b is truthy\'' + '\n' + '    else' + '\n' + '      debug \'b is falsy\'' + '\n' + '' + '\n' + '#### elsif _clause_' + '\n' + '' + '\n' + 'Combines __else__ and __if__. If the test succeeds, the tested value will be placed in the __trial__ pronoun.' + '\n' + '' + '\n' + '    if b' + '\n' + '      debug \'b is truthy: \' + trial    // trial holds value of b' + '\n' + '    elsif c' + '\n' + '      debug \'b is falsy, but c is truthy: \' + trial   // trial now holds c' + '\n' + '    else' + '\n' + '      debug \'neither b nor c is truthy.\'' + '\n' + '' + '\n' + '' + '\n' + '#### elsexists' + '\n' + '' + '\n' + 'Combines __else__ and __exists__. If the test succeeds, the tested value will be placed in the __it__ pronoun.' + '\n' + '' + '\n' + '    exists a' + '\n' + '      debug "a exists: " + it   // it holds the value of a' + '\n' + '    elsexists b' + '\n' + '      debug "a does not exist, but b does: " + it  // it holds the value of b' + '\n' + '    else' + '\n' + '      debug "neither a nor b exists."' + '\n' + '' + '\n' + '### elsunless _clause_' + '\n' + '' + '\n' + 'Combines __else__ and __unless__.' + '\n' + '' + '\n' + '    if a' + '\n' + '      debug "a is truthy: " + trial' + '\n' + '    elsunless b' + '\n' + '      debug \'b is falsy!  And there is no pronoun for this clause.\'' + '\n' + '    else' + '\n' + '      debug \'a is falsy and b is truthy.  No pronoun because else dosent\' get one.\'' + '\n' + '' + '\n' + ''
        },
        'unless': {
          subtitle: 'conditional flow control',
          summary: 'If the expression is _falsy_, the code directly after the **unless** is executed.' + '\n' + 'Otherwise, perform additional tests if specified by any **elsif**, **elsexists** or **elsunless** clauses,' + '\n' + 'or failing those, perform the code after the optional **else** clause.',
          detail: 'See __if__ for more details on th if/exists/unless constructions.' + '\n' + '' + '\n' + 'Values that trigger an __unless__ clause are those that are _falsy_, that is:' + '\n' + '`false`, `null`, `undefined`, `0`, `NaN`, `\'\'` (empty string).' + '\n' + '' + '\n' + 'Objects are generally _truthy_, including empty arrays and blank traits.' + '\n' + '' + '\n' + 'Another JS trap, the following is false:' + '\n' + '' + '\n' + '    debug NaN is NaN' + '\n' + '    > false' + '\n' + '' + '\n' + '    The only way to check for NaN is to use isNan:' + '\n' + '    debug isNaN NaN' + '\n' + '    > true' + '\n' + '' + '\n' + ''
        },
        'exists': {
          subtitle: 'conditional flow control',
          summary: 'If the expression is _not_ __undefined__, the code directly after the **exists** is executed.' + '\n' + 'Otherwise, perform additional tests if specified by any **elsif**, **elsexists** or **elsunless** clauses,' + '\n' + 'or failing those, perform the code after the optional **else** clause.',
          detail: 'See __if__ for more details on th if/exists/unless constructions.' + '\n' + '' + '\n' + 'The only thing that does _not_ exist are things that are __undefined__.' + '\n' + '' + '\n' + '( the following information should be in the EXISTS keyword )' + '\n' + '' + '\n' + 'However, there is an annoying trick. You can set a variable\'s value to __undefined__,' + '\n' + 'in which case the variable' + '\n' + 'technically exists, it is just the _value_ of the variable that is undefined.' + '\n' + '' + '\n' + '    debug newvar' + '\n' + '    > undefined' + '\n' + '    debug newvar.attribute' + '\n' + '    // throws an error, can\'t look up an attribute on an undefined value' + '\n' + '' + '\n' + '    set newvar blank' + '\n' + '    debug newvar' + '\n' + '    > {}' + '\n' + '    debug newvar.attribute' + '\n' + '    > undefined' + '\n' + '' + '\n' + '    set newvar.attribute \'a value\'' + '\n' + '    debug newvar.attribute' + '\n' + '    > a value' + '\n' + '' + '\n' + '    set newvar.attribute undefined' + '\n' + '    debug newvar.attribute' + '\n' + '    > undefined' + '\n' + '' + '\n' + '    debug newvar' + '\n' + '    > { \'attribute\': undefined }' + '\n' + '' + '\n' + 'If you want to differentiate between an attribute that is not there' + '\n' + 'and one that is there but holds the __undefined__ value, use `.hasOwnProperty` as follows' + '\n' + '' + '\n' + '    debug newvar.attribute' + '\n' + '    > undefined' + '\n' + '    debug newvar.hasOwnProperty(\'attribute\')' + '\n' + '    > true' + '\n' + '' + '\n' + '    delete newvar.attribute' + '\n' + '' + '\n' + '    debug newvar.attribute' + '\n' + '    > undefined' + '\n' + '    debug newvar.hasOwnProperty(\'attribute\')' + '\n' + '    > false' + '\n' + '' + '\n' + '' + '\n' + ''
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
