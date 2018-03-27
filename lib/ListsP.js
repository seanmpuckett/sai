#!/usr/bin/env node

// Javascript source for ListsP.sai transpiled by SAI
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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-27T22:47:34.832Z"};
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
var $11g = prototype['OutVarHelper'] || function() {};
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
var $12g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/ListsP.sai","mtime":"2018-03-26T16:49:48.746Z","fetched":"2018-03-27T22:47:34.506Z"};
var isa = prototype.isa = 'ListsP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ListsP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "IntoPiper", "TotalPiper", "AuditPiper", "ThruPiper", "ArraysPiper", "KVPiper", "ReplicatePiper", "Documents", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  SPLIT: ('\x5e&*SP.L.I.' + (Math.random() + 'T.H.E.RE*&\x5e'))
};
for (var i in t) {
  prototype.__tobelocked.push(i);
  prototype[i] = t[i];
};
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'pipers': {
          'set': {
            clauses: {
              'set': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.ThruPiper).apply($, arguments);
            }
          },
          'thru': {
            clauses: {
              'thru': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.ThruPiper).apply($, arguments);
            }
          },
          'audit': {
            clauses: {
              'audit': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.AuditPiper).apply($, arguments);
            }
          },
          'observe': {
            clauses: {
              'observe': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.AuditPiper).apply($, arguments);
            }
          },
          'into': {
            clauses: {
              'into': {
                valexpr: true,
                valoutblock: true,
                valuse: true
              }
            },
            handler: function() {
              return ($.IntoPiper).apply($, arguments);
            }
          },
          'total': {
            clauses: {
              'total': {
                expr: true,
                use: true,
                none: true
              }
            },
            handler: function() {
              return ($.TotalPiper).apply($, arguments);
            }
          },
          'keys': {
            clauses: {
              'keys': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            }
          },
          'values': {
            clauses: {
              'values': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            }
          },
          'iterate': {
            clauses: {
              'iterate': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'concat': {
            clauses: {
              'concat': {
                expr: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'collect': {
            clauses: {
              'collect': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'enlist': {
            clauses: {
              'enlist': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'entrait': {
            clauses: {
              'entrait': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'enkey': {
            clauses: {
              'enkey': {
                none: true,
                expr: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'and': {
            clauses: {
              'and': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'or': {
            clauses: {
              'or': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            }
          },
          'replicate': {
            clauses: {
              'replicate': {
                expr: true
              }
            },
            handler: function() {
              return ($.ReplicatePiper).apply($, arguments);
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
      /*@:105*/
    }
  },
  set: undefined
});
var $3g = prototype['IntoPiper'] || function() {};
prototype['IntoPiper'] = function(p) {
  var $1_this, $2, $ = this['IntoPiper'] ? this : $bindfail('IntoPiper'),
    $_c, $_d, _fn, _outs, _pattern, _startvalue, _tools, _vars;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'IntoPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _outs = $.OutVarHelper(p.work.args.out);
    _startvalue = p.work.args.val;
    /*@:117*/
    switch ($2 = (p.work.type)) {
      case 'into.valexpr':
        _vars = {
          'this': false,
          'key': false,
          'sum': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  return \x5e{block};' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',' + _startvalue + ')';
        break;
      case 'into.valoutblock':
        _vars = {
          _prefix: 'into',
          'this': _outs[0],
          'key': _outs[1],
          'sum': _outs[2],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  \x5e{block};' + '\n' + '  return \x5e{sum};' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',' + _startvalue + ')';
        break;
      case 'into.valuse':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + p.work.args.use + ',' + _startvalue + ')';
        /*@:154*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $2 + ' in IntoPiper'
        });
        /*@:157*/
        break;
    } /*@:158*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:159*/
  }
};
var $4g = prototype['TotalPiper'] || function() {};
prototype['TotalPiper'] = function(p) {
  var $3_this, $4, $ = this['TotalPiper'] ? this : $bindfail('TotalPiper'),
    $_c, $_d, _fn, _pattern, _tools, _vars;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'TotalPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    /*@:170*/
    switch ($4 = (p.work.type)) {
      case 'total.expr':
        _vars = {
          'this': false,
          'key': false,
          'sum': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  var $t=\x5e{block};' + '\n' + '  return (undefined===\x5e{sum}) ? $t : (\x5e{sum}+$t);' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',undefined)';
        break;
      case 'total.use':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',function(s,v,k){ var t=(' + p.work.args.use + ').call($,v,k); return (s===undefined)?t:s+t; },undefined)';
        /*@:190*/
        break;
      case 'total.none':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',function(s,i){' + '\n' + '  return (undefined===s) ? i : s+i;' + '\n' + '},undefined)' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $4 + ' in IntoPiper'
        });
        /*@:199*/
        break;
    } /*@:200*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:201*/
  }
};
var $5g = prototype['AuditPiper'] || function() {};
prototype['AuditPiper'] = function(p) {
  var $5_this, $6, $ = this['AuditPiper'] ? this : $bindfail('AuditPiper'),
    $_c, $_d, _fn, _op, _outs, _pattern, _tools, _vars;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'AuditPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'audit')) ? ('audit_op') : ('observe_op'));
    /*@:212*/
    switch ($6 = (p.work.type)) {
      case 'audit.expr':
      case 'observe.expr':
        _vars = {
          'this': false,
          'key': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'audit.outblock':
      case 'observe.outblock':
        _outs = $.OutVarHelper(p.work.args.out);
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'audit.use':
      case 'observe.use':
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + p.work.args.use + ')';
        /*@:243*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $6 + ' in ThruPiper'
        });
        /*@:246*/
        break;
    } /*@:247*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:248*/
  }
};
var $6g = prototype['ThruPiper'] || function() {};
prototype['ThruPiper'] = function(p) {
  var $7_this, $8, $ = this['ThruPiper'] ? this : $bindfail('ThruPiper'),
    $_c, $_d, _fn, _op, _outs, _pattern, _tools, _vars;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ThruPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'thru')) ? ('map_op') : ('alter_op'));
    /*@:259*/
    switch ($8 = (p.work.type)) {
      case 'thru.expr':
      case 'set.expr':
        _vars = {
          'this': false,
          'key': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  return \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'thru.outblock':
      case 'set.outblock':
        _outs = $.OutVarHelper(p.work.args.out);
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '  return \x5e{this};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'thru.use':
      case 'set.use':
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + p.work.args.use + ')';
        /*@:291*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $8 + ' in ThruPiper'
        });
        /*@:294*/
        break;
    } /*@:295*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:296*/
  }
};
var $7g = prototype['ArraysPiper'] || function() {};
prototype['ArraysPiper'] = function(p) {
  var $10, $9_this, $ = this['ArraysPiper'] ? this : $bindfail('ArraysPiper'),
    $_c, $_d, _fn, _pattern, _tools, _vars;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ArraysPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    /*@:303*/
    _tools = [];
    /*@:304*/
    switch ($10 = (p.work.type)) {
      case 'or.none':
        _pattern = '$AI.l_op("or",' + $.SPLIT + ')';
        /*@:309*/
        break;
      case 'and.none':
        _pattern = '$AI.l_op("and",' + $.SPLIT + ')';
        /*@:312*/
        break;
      case 'iterate.none':
        _pattern = '$AI.iterate_op(' + $.SPLIT + ')';
        /*@:315*/
        break;
      case 'concat.expr':
        _pattern = '$AI.concat_op(' + $.SPLIT + ',' + p.work.args.expr + ')';
        /*@:318*/
        break;
      case 'collect.none':
        _pattern = '$AI.collect_op(' + $.SPLIT + ')';
        /*@:321*/
        break;
      case 'enlist.none':
        _pattern = '$AI.enlist_op(' + $.SPLIT + ')';
        /*@:324*/
        break;
      case 'entrait.none':
        _pattern = '$AI.entrait_op(' + $.SPLIT + ')';
        /*@:327*/
        break;
      case 'enkey.none':
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(s,a){s[a]=true;return s;},{})';
        /*@:330*/
        break;
      case 'enkey.expr':
        _vars = {
          'this': 'v',
          'key': 'k',
          'block': p.work.args.expr
        };
        _fn = '\x5e{block}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(s,v,k){s[v]=' + _fn + ';return s;},{})';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $10 + ' in KVPiper'
        });
        /*@:345*/
        break;
    } /*@:346*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:347*/
  }
};
var $8g = prototype['KVPiper'] || function() {};
prototype['KVPiper'] = function(p) {
  var $11_this, $12, $ = this['KVPiper'] ? this : $bindfail('KVPiper'),
    _pattern, _tools;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'KVPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    /*@:354*/
    _tools = [];
    /*@:355*/
    switch ($12 = (p.work.type)) {
      case 'keys.none':
        _pattern = '$AI.keys_op(' + $.SPLIT + ')';
        /*@:360*/
        break;
      case 'values.none':
        _pattern = '$AI.values_op(' + $.SPLIT + ')';
        /*@:363*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $12 + ' in KVPiper'
        });
        /*@:366*/
        break;
    } /*@:367*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:368*/
  }
};
var $9g = prototype['ReplicatePiper'] || function() {};
prototype['ReplicatePiper'] = function(p) {
  var $13_this, $14, $ = this['ReplicatePiper'] ? this : $bindfail('ReplicatePiper'),
    $_c, $_d, _pattern, _tools;
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ReplicatePiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    /*@:375*/
    _tools = [];
    /*@:376*/
    switch ($14 = (p.work.type)) {
      case 'replicate.expr':
        _pattern = '$piper$replicate((' + $.SPLIT + '),(' + p.work.args.expr + '))';
        /*@:382*/
        _tools.push('var $piper$replicate=function(a,c){' + '\n' + '  var r=new Array(c);' + '\n' + '  while (c>0) r[--c]=a;' + '\n' + '  return r;' + '\n' + '}' + '\n' + '');
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $14 + ' in ReplicatePiper'
        });
        /*@:391*/
        break;
    } /*@:392*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:393*/
  }
};
var $10g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $15_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      pipers: {
        'set': {
          subtitle: 'replacement operator',
          summary: 'A chainable comprehension operator that allows direct reference and replacement of the incoming dataset within an expression or code block, using the  **it**  pronoun.',
          detail: '**Set** can be used with an expression:' + '\n' + '' + '\n' + '    debug 4 | set 5*it+2 | set it/7' + '\n' + '' + '\n' + '    > 3.142857142857143' + '\n' + '' + '\n' + '**Set** can use an indented code block:' + '\n' + '' + '\n' + '    debug friends by .age | set' + '\n' + '      set .length to 3' + '\n' + '' + '\n' + '    > [ { name: \'Doug\', age: 18, province: \'ON\' },' + '\n' + '    >    { name: \'John\', age: 19, cat: true, dog: true, province: \'ON\' },' + '\n' + '    >    { name: \'Marshal\', age: 21, dog: true, province: \'ON\' } ]' + '\n' + '' + '\n' + '_If you don’t specifically **return** a value or object from within an **set** code block, the original value will be used (as in the example above). In other words, there is an implicit `return it` at the end of every **set** block._' + '\n' + '' + '\n' + '**Set** supports the **using** clause, in which case the function specified receives the original value as its first parameter, and the return value is passed forward. The two debug statements below are equivalent' + '\n' + '' + '\n' + '    set ExtractFirst to task' + '\n' + '      return $[0]' + '\n' + '' + '\n' + '    debug friends #cat | set Extract(it)' + '\n' + '    debug friends #cat | set using Extract' + '\n' + '' + '\n' + '    > { name: \'Sara\', age: 23, cat: true, province: \'ON\' }' + '\n' + '    > { name: \'Sara\', age: 23, cat: true, province: \'ON\' }' + '\n' + '' + '\n' + 'You must specifically return a value in the function called by **set using**.' + '\n' + '' + '\n' + ''
        },
        'thru': {
          subtitle: 'transform a collection with a map-like operation',
          summary: 'Pass each element of a collection “thru’ an expression, code block, or previously defined' + '\n' + 'function. The result of the expression becomes the new value in a copy of the collection.',
          detail: '__Thru__ returns the same type of collection it is given. An array yields an array, an object' + '\n' + 'an object, and an iterator another iterator. (There are other pipers for transforming' + '\n' + 'between types of collection.)' + '\n' + '' + '\n' + 'Conversion to uppercase:' + '\n' + '' + '\n' + '    debug fruit | thru .toUpperCase()' + '\n' + '' + '\n' + '    > [ \'APPLE\', \'BANANA\', \'CITRON\' ]' + '\n' + '' + '\n' + 'A more complex formatting that could be an expression but I needed a block example:' + '\n' + '' + '\n' + '    debug friends | has .cat | thru' + '\n' + '      return \'$\{key+1}) $\{.name}, age $\{.age}, lives in $\{.province}\'' + '\n' + '' + '\n' + '    > [ \'1) Sara, age 23, lives in ON\',' + '\n' + '         \'2) Jon, age 19, lives in QC\',' + '\n' + '         \'3) Ann, age 23, lives in QC\' ]' + '\n' + '' + '\n' + 'Passing values **thru** a function:' + '\n' + '' + '\n' + '    set rot13 to task' + '\n' + '      set out to \'\'' + '\n' + '      count $length' + '\n' + '        set char to $charCodeAt(key)' + '\n' + '        switch char >> 5' + '\n' + '          case 2,3' + '\n' + '            with char andb 31' + '\n' + '              if it > 26' + '\n' + '                nop' + '\n' + '              elsif it > 13' + '\n' + '                set char - 13' + '\n' + '              elsif it > 0' + '\n' + '                set char + 13' + '\n' + '        set out + ~String.fromCharCode(char)' + '\n' + '      return out' + '\n' + '' + '\n' + '    debug fruit | thru using rot13' + '\n' + '' + '\n' + '    > [ \'Nccyr\', \'Onanan\', \'Pvgeba\' ]' + '\n' + '' + '\n' + 'The function called by the **using** variant receives three parameters for every iteration:' + '\n' + '' + '\n' + ' - item value' + '\n' + ' - item key' + '\n' + ' - reference to the entire collection' + '\n' + '' + '\n' + ''
        },
        'audit': {
          subtitle: 'observe the elements of a collection',
          summary: 'Audit is used to pass all values in a collection into an expression, code block or method.' + '\n' + 'Audit doesn’t alter the collection, it just observes all values and keys/indices going by.',
          detail: 'For example:' + '\n' + '' + '\n' + '    set b to chain fruit' + '\n' + '      |observe debug(\'Pre-sort\')' + '\n' + '      |audit debug(\'Fruit #$\{key} is $\{it}\')' + '\n' + '      |by desc' + '\n' + '      |observe debug(\'Post-sort\')' + '\n' + '      |audit debug(\'Fruit #$\{key} is $\{it}\')' + '\n' + '    debug b' + '\n' + '' + '\n' + '    > Pre-sort' + '\n' + '    > Fruit #0 is Apple' + '\n' + '    > Fruit #1 is Banana' + '\n' + '    > Fruit #2 is Citron' + '\n' + '    > Post-sort' + '\n' + '    > Fruit #0 is Citron' + '\n' + '    > Fruit #1 is Banana' + '\n' + '    > Fruit #2 is Apple' + '\n' + '    > [ \'Citron\', \'Banana\', \'Apple’ ]' + '\n' + '' + '\n' + 'This example shows how one could add instrumentation to a process in a light-weight fashion.' + '\n' + '' + '\n' + 'Neither **observe** nor **audit** alter the chained data. _A side effect of this is that' + '\n' + '**observe** can’t be used with non-reproducible iterators as it’s impossible to statically observe' + '\n' + 'an iterator without draining it._' + '\n' + '' + '\n' + ''
        },
        'observe': {
          subtitle: 'inspect a value without changing it',
          summary: 'Evaluates the right expression using the left expression value as the **it** pronoun;' + '\n' + 'however, **observe** always returns the original left hand expression, no matter the result' + '\n' + 'of the right expression.',
          detail: 'For example:' + '\n' + '' + '\n' + '    set b to \'Fred\'' + '\n' + '    set c to b observe debug \'$\{it.length} letters.\'' + '\n' + '    debug c' + '\n' + '' + '\n' + '    > 4 letters.' + '\n' + '    > Fred' + '\n' + '' + '\n' + 'See the example for __audit__ for a more interesting reason why __observe__ is nice.' + '\n' + '' + '\n' + 'A warning: while you can **observe** an iterable expression, all you will see is a function.' + '\n' + 'Take care not to invoke it, lest you drain it inadvertently.' + '\n' + 'Heisenberg\'s uncertainty principle is very much at play with iterables:' + '\n' + 'you can either have it or know what\'s in it.' + '\n' + '' + '\n' + 'N.B. **observe** very useful in **chain** expressions.' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'into': {
          subtitle: 'reduce-like collection transformation',
          summary: 'Javascript features the array method `Array.prototype.reduce` which performs the reduction function,' + '\n' + 'and SAI extends its applicability with the **into** compherension keyword.',
          detail: 'In addition to the item (**it**) and the item key (**key**) available in other comprehensions,' + '\n' + 'an sum variable (**sum**) is used when evaluating **into** expressions. The value' + '\n' + 'of the expression becomes the value of **sum** the next time the expression is evaluated.' + '\n' + '' + '\n' + '#### into inline' + '\n' + '' + '\n' + 'The **sum** variable is initialized by the value following **into** — in the example below' + '\n' + '`0` — and then each row in the collection is visited and we add `.age` to it. This adds up' + '\n' + 'the ages of every friend.' + '\n' + '' + '\n' + '    debug friends | into 0 sum + .age' + '\n' + '' + '\n' + '    > 185' + '\n' + '' + '\n' + '#### into block' + '\n' + '' + '\n' + 'The **into** comprehension, like other comprehensions, has an inline version with an' + '\n' + 'expression, and a long-form which takes a block of code.' + '\n' + '' + '\n' + 'A more complex example.  See if you can suss out how it works.' + '\n' + '' + '\n' + '    debug friends | into blank' + '\n' + '      set sum[.province] to (self default 0) + 1' + '\n' + '' + '\n' + '    > { ON: 5, QC: 3 }' + '\n' + '' + '\n' + 'Here’s a hint: **self** is a _pronoun_ used only in **set** statements. It is initialized to' + '\n' + 'the previous value of the variable being changed by **set**.' + '\n' + '' + '\n' + 'Another hint: **default** is an operator that evaluates to its right hand value if' + '\n' + 'and only if the left hand value is _undefined_.' + '\n' + '' + '\n' + 'Last hint: **blank** initializes an object with no traits; it is the SAI equivalent' + '\n' + 'of Javascript’s `{}`.  The comparable word for arrays/lists with no elements is **empty**;' + '\n' + 'in Javascript you’d write `[]`.' + '\n' + '' + '\n' + '#### into using' + '\n' + '' + '\n' + 'The addition of **using** lets you call an external function.  The function must' + '\n' + 'always `return` the value you wish to be used as the sum so the value can be preserved' + '\n' + 'across function calls.  (The block version of **into** takes care of this for you.)' + '\n' + '' + '\n' + '    set ageTotal to task given accumulator, row' + '\n' + '      return accumulator + row.age' + '\n' + '' + '\n' + '    debug friends | into 0 using ageTotal' + '\n' + '' + '\n' + '    > 185' + '\n' + '' + '\n' + ''
        },
        'total': {
          subtitle: 'reduction with addition/concatenation',
          summary: '__Total__ is very like __into__ however the emphasis is on addition.',
          detail: '__Total__ is a reduction operator that is specialized for adding numbers, or concatenating strings.' + '\n' + '' + '\n' + '    debug list a,b,c; | total' + '\n' + '' + '\n' + '    > abc' + '\n' + '' + '\n' + 'Here, total has iterated through the three elements of the `list a, b, c` and added them together.' + '\n' + 'Because they are strings, the result is a concatenated version of the array of strings.' + '\n' + '' + '\n' + '    debug array 5, 10, 15, 20 | total' + '\n' + '' + '\n' + '    > 50' + '\n' + '' + '\n' + 'Similarly, total has added up the numbers.' + '\n' + '' + '\n' + 'You can pass an expression (or function) to __total__ just like with __into__, in which case the' + '\n' + 'addition is whatever value the expression returns on each iteration.' + '\n' + '' + '\n' + '    debug fruit | total .length' + '\n' + '' + '\n' + '    > 16' + '\n' + '' + '\n' + 'The length of the three strings in the fruit array.' + '\n' + '' + '\n' + '#### total using' + '\n' + '' + '\n' + 'The addition of **using** lets you call an external function.  The function must' + '\n' + 'always `return` the value you wish to be added. You get two parameters, the value, and' + '\n' + 'the key.' + '\n' + '' + '\n' + '    set ageTotal to task given row, id' + '\n' + '      return row.age' + '\n' + '' + '\n' + '    debug friends | total using ageTotal' + '\n' + '' + '\n' + '    > 185' + '\n' + '' + '\n' + ''
        },
        'keys': {
          subtitle: 'return a list of trait names',
          summary: 'Returns the keys (or indices) of a collection’s elements.',
          detail: '__Keys__ returns a list comprising the keys/indices of the collection it is given.' + '\n' + '' + '\n' + 'If you give it an object/traits, you get the trait names.' + '\n' + '' + '\n' + '    debug friends | first | keys' + '\n' + '' + '\n' + '    > [ \'name\', \'age\', \'cat\', \'province\']' + '\n' + '' + '\n' + 'If you give it an array, it returns an array of indexes.' + '\n' + '' + '\n' + '    debug fruit | keys' + '\n' + '' + '\n' + '    > [ 0, 1, 2 ]' + '\n' + '' + '\n' + 'Given an iterator, it returns an iterator that counts from 0 to the number of results in the source.' + '\n' + 'Of course, you lose the values, but you didn\'t want them, did you.' + '\n' + '' + '\n' + ''
        },
        'values': {
          subtitle: 'return a list of collection values',
          summary: 'Returns the values of a collection\'s elements.',
          detail: '__Values__ returns a list of all of the values in a collection.' + '\n' + '' + '\n' + 'If you give it an object/traits, you get the the values.' + '\n' + '' + '\n' + '    debug friends | first | values' + '\n' + '    > [ \'Sara\', 23, true, \'ON\' ]' + '\n' + '' + '\n' + 'Given an array, you get a copy of the array.' + '\n' + '' + '\n' + '    debug fruit | values' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\' ]' + '\n' + '' + '\n' + 'With an iterator, it returns that iterator; that is, it does nothing.' + '\n' + '' + '\n' + ''
        },
        'iterate': {
          subtitle: 'transforms a static collection into an iterated form',
          summary: 'Ensures the collection is an iterable. If it already is an iterable, return it unchanged.' + '\n' + 'If it has a **Iterate** method, call it and return that iterable. If it\'s an Array,' + '\n' + 'produce an iterator over its values. If it\'s an object, produce an iterator that returns' + '\n' + 'for each trait a 2-element array with trait name, trait value.' + '\n' + 'If it\'s just a plain value, produce an iterator that returns that value.',
          detail: 'Using **iterate** in this way allows you to guarantee that processing is being done using an' + '\n' + 'iteration rather than a static collection. To go the other way, use **collect**, which turns an' + '\n' + 'iterable into an Array.' + '\n' + '' + '\n' + 'The following example follows the one in the keyword **Iterator**:' + '\n' + '' + '\n' + '    ply inventory | by it.1' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > [ apple: 2, banana: 1 ]  // undesired result' + '\n' + '' + '\n' + '    ply inventory | iterate | by it.1' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > [ \'banana\', 1 ]          // correct result' + '\n' + '    > [ \'apple\', 2 ]' + '\n' + '' + '\n' + 'The example wants to print out a sorted list of inventory items.' + '\n' + '' + '\n' + 'The undesired result comes about because **by** needs access to the entire collection' + '\n' + 'in order to sort it, so must process imperatively. Even if you give **by** an object' + '\n' + 'with a **Iterate** method, which all objects and arrays have whether you put it there' + '\n' + 'yourself or not, that method will not naturally be called.' + '\n' + '' + '\n' + 'So, **by** converts the `inventory` object into an array so it can be sorted. The' + '\n' + 'array conversion produces an array of all enumerable traits; in the case of `Tally`' + '\n' + 'objects, the only enumerable trait is `bag`, and so an array that looks like `[ bag ]`' + '\n' + 'is sorted (to no effect) and then printed one element at a time.' + '\n' + '' + '\n' + 'When you force a call to **Iterator** with the **iterate** comprehension, you get the' + '\n' + 'correct result you\'re expecting, as you thereby force **by** to use your custom iterator' + '\n' + 'rather than a naive array conversion.' + '\n' + '' + '\n' + 'The upshot is that right now SAI favours imperative collections rather than lazy' + '\n' + 'iterators except when specifically using the **iterate** statement or comprehension.' + '\n' + '' + '\n' + ''
        },
        'concat': {
          subtitle: 'assemble two collections into a single list',
          summary: 'A list operator, not a string operator, **concat** returns a list that consists of a copy of' + '\n' + 'set 1 followed by a copy of set 2. Set 1 is not modified, a new array or iterable is returned.',
          detail: 'Undefined values are ignored, and scalar values are promoted to single element arrays.' + '\n' + '' + '\n' + 'As follows:' + '\n' + '' + '\n' + '    [1, 2] concat [3, 4] -> [1, 2, 3, 4]' + '\n' + '    [1, 2] concat [[3, 4], [5, 6]] -> [1, 2, [3, 4], [5, 6]]' + '\n' + '    [1, 2] concat 3 -> [1, 2, 3]' + '\n' + '    [1, 2] concat {c:3, d:4} -> [1, 2, {c:3, d:4}]' + '\n' + '    [1, 2] concat undef -> [1, 2]' + '\n' + '' + '\n' + '    1 concat [3, 4] -> [1, 3, 4]' + '\n' + '    1 concat 3 -> [1, 3]' + '\n' + '    1 concat {c:3, d:4} -> [1, {c:3, d:4}]' + '\n' + '    1 concat undef -> [1]' + '\n' + '' + '\n' + '    {a:1, b:2} concat [3, 4] -> [{a:1, b:2}, 3, 4]' + '\n' + '    {a:1, b:2} concat 3 -> [{a:1, b:2}, 3]' + '\n' + '    {a:1, b:2} concat {c:3, d:4} -> [{a:1, b:2}, {c:3, d:4}]' + '\n' + '    {a:1, b:2} concat undef -> [{a:1, b:2}]' + '\n' + '' + '\n' + '    undef concat undef -> undef' + '\n' + '    undef concat 3 -> [3]' + '\n' + '    undef concat {c:3, d:4} -> [{c:3, d:4}]' + '\n' + '    undef concat [3, 4] -> [3, 4]' + '\n' + '' + '\n' + 'If the first set is an iterable, **concat** will return an iterable, otherwise' + '\n' + 'it returns a list (draining the second list if it is an iterable).' + '\n' + '' + '\n' + ''
        },
        'collect': {
          subtitle: 'collect values from an iterator into a static list',
          summary: 'If the expression on the left is an iterator, converts it to an array/list by draining' + '\n' + 'the iterator; otherwise do nothing. If the iterator never ends, your system will' + '\n' + 'lock up until you run out of memory. (You could use a **limit** comprehension to keep that from happening.)',
          detail: 'Example:' + '\n' + '' + '\n' + '    set Odds to process' + '\n' + '      local i to 1' + '\n' + '      while i' + '\n' + '        yield i' + '\n' + '        set i + 2' + '\n' + '' + '\n' + '    debug Odds() | collect //           !!!! this locks up the computer' + '\n' + '' + '\n' + '    debug Odds() | limit 10 | collect' + '\n' + '' + '\n' + '    > [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]' + '\n' + '' + '\n' + 'The opposite of **collect** is **iterate**. The difference between **enlist** and' + '\n' + '**collect** is that collect will only transform an iterator, while **enlist** will' + '\n' + 'transform all values.' + '\n' + '' + '\n' + ''
        },
        'enlist': {
          subtitle: 'convert a collection to an array',
          summary: 'Converts various collection types into a list/array such that it should be possible to' + '\n' + 'reverse the transformation later without losing data.',
          detail: 'Here are the basic rules:' + '\n' + '' + '\n' + '    undefined -> undefined' + '\n' + '    value -> [ value ]' + '\n' + '    list -> self' + '\n' + '    object -> [ [ key, value ], [ key, value ], ... ]' + '\n' + '    iterable -> [ value, value, value, ... ]' + '\n' + '' + '\n' + 'Note specifically that **enlist** will turn a set of key, value pairs into an array' + '\n' + 'of [key,value] arrays thus no data is lost in the conversion.' + '\n' + '' + '\n' + '    set data to:' + '\n' + '      cats 7' + '\n' + '      dogs 12' + '\n' + '' + '\n' + '    debug data' + '\n' + '    debug data | enlist' + '\n' + '' + '\n' + '    > { cats: 7, dogs: 12 }' + '\n' + '    > [ [ \'cats\', 7 ], [ \'dogs\', 12 ] ]' + '\n' + '' + '\n' + 'Such a result can be turned back into traits with **entrait**.' + '\n' + '' + '\n' + 'The difference between **enlist** and **collect** is that **enlist** will always transform its' + '\n' + 'source data into an array/list, while **collect** will only transform an iterator.' + '\n' + '' + '\n' + ''
        },
        'entrait': {
          subtitle: 'convert collections to object/traits',
          summary: 'Converts various collection types into traits/fields using rules that allow the' + '\n' + 'transformation to be reversed later without losing data.',
          detail: 'Here are the rules:' + '\n' + '' + '\n' + '    undefined -> undefined' + '\n' + '    value -> { value: true }' + '\n' + '    list -> { [0][0]: [0][1], [1][0]: [1][1], ... }' + '\n' + '    object -> self' + '\n' + '    iterable -> { first[0]: first[1], next[0]: next[1]... }' + '\n' + '' + '\n' + '**Entrait** is designed primarily to losslessly restore the results of enlist and iterators' + '\n' + 'that produce arrays of key/value pairs.' + '\n' + '' + '\n' + '    debug \'Coyote\' | entrait' + '\n' + '' + '\n' + '    > { Coyote: true }' + '\n' + '' + '\n' + '    set data to:' + '\n' + '      list cats, 7' + '\n' + '      list dogs, 12' + '\n' + '' + '\n' + '    debug data' + '\n' + '    debug data | entrait' + '\n' + '' + '\n' + '    > [ [ \'cats\', 7 ], [ \'dogs\', 12 ] ]' + '\n' + '    > { cats: 7, dogs: 12 }' + '\n' + '' + '\n' + '**Entrait** ignores input data that does not conform to expectations; if given a list that' + '\n' + 'does not contain two-element key/value lists, it will not create traits.' + '\n' + '' + '\n' + 'You could, however, use **enkey** to transform this data:' + '\n' + '' + '\n' + '     debug fruit | enkey' + '\n' + '' + '\n' + '     > { Apple: true, Banana: true, Citron: true, Durian: true }' + '\n' + '' + '\n' + ''
        },
        'enkey': {
          subtitle: 'convert a list/iterator into a set of traits',
          summary: '__Enkey__ transforms a list into an object (set of traits) by turning each value in the list' + '\n' + 'into a trait with the value of `true`.',
          detail: 'This is similar to __entrait__ except that instead of assuming the source list has' + '\n' + 'embedded key/value pairs, the source list is used for the keys only, and the value is' + '\n' + 'either `true` or some other expression that is calculated.' + '\n' + '' + '\n' + 'Examples:' + '\n' + '' + '\n' + '    set a list a, b, c' + '\n' + '    set a | enkey' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > { \'a\': true, \'b\': true, \'c\': true }' + '\n' + '' + '\n' + '    set a list a, b, c' + '\n' + '    set a | enkey \'$\{it.toUpperCase()}$\{key}\'' + '\n' + '    > { \'a\': \'A0\', \'b\': \'B1\', \'c\': \'C2\' }' + '\n' + '' + '\n' + 'Dry, but very useful.' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'and': {
          subtitle: 'confirms a collection',
          summary: 'Examines every item in a collection, returning the collection itself if all of them are _truthy_.',
          detail: 'For example:' + '\n' + '' + '\n' + '    set t: \'horse\', 9, true' + '\n' + '    set f: 0, \'goat\', 99' + '\n' + '' + '\n' + '    debug t | and' + '\n' + '    debug f | and' + '\n' + '' + '\n' + '    > [ \'horse\', 9, true ]' + '\n' + '    > 0' + '\n' + '' + '\n' + 'Rules for source data:' + '\n' + '' + '\n' + '- __undefined__: returns `undefined`.' + '\n' + '' + '\n' + '- __value__: returns the value.' + '\n' + '' + '\n' + '- __array__: returns _the array_ itself if _every_ element in the array is _truthy_,' + '\n' + 'otherwise returns the first _falsy_ element.' + '\n' + '' + '\n' + '- __traits__: returns _the object_ itself if _every_ value in the object is _truthy_,' + '\n' + 'otherwise returns the first _falsy_ value.' + '\n' + '' + '\n' + '- __iterable__: yields `true` if _every_ value returned by the iterator is _truthy_,' + '\n' + 'otherwise yields the first _falsy_ value. This _vill_ lock up on infinite _truthy_' + '\n' + 'generators as it will try forever to find a _falsy_ value.' + '\n' + '' + '\n' + 'If given an iterator, __and__ returns an iterator that will yield one value (or lock up).' + '\n' + '' + '\n' + ''
        },
        'or': {
          subtitle: 'explores a collection',
          summary: 'Examines every item in a collection, returning the first one found _truthy_.',
          detail: 'For example:' + '\n' + '' + '\n' + '    set t: undefined, 9, true' + '\n' + '    set f: 0, null, false' + '\n' + '' + '\n' + '    debug t | or' + '\n' + '    debug f | or' + '\n' + '' + '\n' + '    > 9' + '\n' + '    > undefined' + '\n' + '' + '\n' + 'Rules for source data:' + '\n' + '' + '\n' + '- __undefined__: returns `undefined`.' + '\n' + '' + '\n' + '- __value__, returns the value.' + '\n' + '' + '\n' + '- __array__, returns the first _truthy_ element found in the array, otherwise `undefined`.' + '\n' + 'The array is searched starting at index 0.' + '\n' + '' + '\n' + '- __traits__: returns that value if _any_ value in the collection is _truthy_,' + '\n' + 'otherwise `undefined`. The collection is searched in no defined order.' + '\n' + '' + '\n' + '- __iterable__: yields the _first_ truthy value returned by the iterator.' + '\n' + 'Yields `undefined` if the iterator ends before one is found.' + '\n' + 'Will lock up if an infinite iterator never yields a truthy value.' + '\n' + '' + '\n' + 'If given an iterator, __or__ returns an iterator that will yield one value (or lock up).' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'replicate': {
          subtitle: 'create a list by copying an element',
          summary: 'Replicate sucks, it should be removed.',
          detail: 'What it does:' + '\n' + '' + '\n' + '    set b \'a\' | replicate 3' + '\n' + '    debug b' + '\n' + '' + '\n' + '    > [ \'a\', \'a\', \'a\' ]' + '\n' + '' + '\n' + 'I dunno, this doesn\'t feel meaty.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
