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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T15:31:31.292Z"};
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
var $10g = prototype['OutVarHelper'] || function() {};
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
var $11g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"ListsP.sai","loader":"SAI.GetSourceFromPaths","path":"src/ListsP.sai","mtime":"2018-03-12T01:01:15.450Z","fetched":"2018-03-12T15:31:31.143Z"};
var isa = prototype.isa = 'ListsP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ListsP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "IntoPiper", "TotalPiper", "AuditPiper", "ThruPiper", "ArraysPiper", "KVPiper", "ReplicatePiper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  SPLIT: ('^&*SP.L.I.' + (Math.random() + 'T.H.E.RE*&^'))
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
            },
            tools: []
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
            },
            tools: []
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
            },
            tools: []
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
            },
            tools: []
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
            },
            tools: []
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
            },
            tools: []
          },
          'keys': {
            clauses: {
              'keys': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            },
            tools: []
          },
          'values': {
            clauses: {
              'values': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            },
            tools: []
          },
          'iterate': {
            clauses: {
              'iterate': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'concat': {
            clauses: {
              'concat': {
                expr: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'collect': {
            clauses: {
              'collect': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'enlist': {
            clauses: {
              'enlist': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'entrait': {
            clauses: {
              'entrait': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
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
            },
            tools: []
          },
          'replicate': {
            clauses: {
              'replicate': {
                expr: true
              }
            },
            handler: function() {
              return ($.ReplicatePiper).apply($, arguments);
            },
            tools: ['var $piper$replicate=function(a,c){' + '\n' + '  var r=new Array(c);' + '\n' + '  while (c>0) r[--c]=a;' + '\n' + '  return r;' + '\n' + '}' + '\n' + '' + '\n' + '' + '\n' + '']
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
    var $0, $ = this; {
      return ({
        pipers: {
          'observe': {
            subtitle: 'inspect a value without changing it',
            summary: 'Evaluates the right expression using the left expression value as the **it** pronoun;' + '\n' + 'however, **observe** always returns the original left hand expression, no matter the result' + '\n' + 'of the right expression.',
            detail: 'For example:' + '\n' + '' + '\n' + '    set b to \'Fred\'' + '\n' + '    set c to b observe debug \'$\{it.length} letters.\'' + '\n' + '    debug c' + '\n' + '' + '\n' + '    > 4 letters.' + '\n' + '    > Fred' + '\n' + '' + '\n' + 'See the example for __audit__ for a more interesting reason why __observe__ is nice.' + '\n' + '' + '\n' + 'A warning: while you can **observe** an iterable expression, all you will see is a function.' + '\n' + 'Take care not to invoke it, lest you drain it inadvertently.' + '\n' + 'Heisenberg\'s uncertainty principle is very much at play with iterables:' + '\n' + 'you can either have it or know what\'s in it.' + '\n' + '' + '\n' + 'N.B. **observe** very useful in **chain** expressions.' + '\n' + ''
          },
          'set': {
            subtitle: 'replacement operator',
            summary: 'A chainable comprehension operator that allows direct reference and replacement of the incoming dataset within an expression or code block, using the  **it**  pronoun.',
            detail: '**Set** can be used with an expression:' + '\n' + '' + '\n' + '    debug 4 | set 5*it+2 | set it/7' + '\n' + '' + '\n' + '    > 3.142857142857143' + '\n' + '' + '\n' + '**Set** can use an indented code block:' + '\n' + '' + '\n' + '    debug friends by .age | set' + '\n' + '      set .length to 3' + '\n' + '' + '\n' + '    > [ { name: \'Doug\', age: 18, province: \'ON\' },' + '\n' + '    >    { name: \'John\', age: 19, cat: true, dog: true, province: \'ON\' },' + '\n' + '    >    { name: \'Marshal\', age: 21, dog: true, province: \'ON\' } ]' + '\n' + '' + '\n' + '_If you don’t specifically **return** a value or object from within an **set** code block, the original value will be used (as in the example above). In other words, there is an implicit `return it` at the end of every **set** block._' + '\n' + '' + '\n' + '**Set** supports the **using** clause, in which case the function specified receives the original value as its first parameter, and the return value is passed forward. The two debug statements below are equivalent' + '\n' + '' + '\n' + '    set ExtractFirst to task' + '\n' + '      return $[0]' + '\n' + '' + '\n' + '    debug friends #cat | set Extract(it)' + '\n' + '    debug friends #cat | set using Extract' + '\n' + '' + '\n' + '    > { name: \'Sara\', age: 23, cat: true, province: \'ON\' }' + '\n' + '    > { name: \'Sara\', age: 23, cat: true, province: \'ON\' }' + '\n' + '' + '\n' + 'You must specifically return a value in the function called by **set using**.' + '\n' + '' + '\n' + '' + '\n' + ''
          },
          'audit': {
            subtitle: 'observe the elements of a collection',
            summary: 'Audit is used to pass all values in a collection into an expression, code block or method.' + '\n' + 'Audit doesn’t alter the collection, it just observes all values and keys/indices going by.',
            detail: 'For example:' + '\n' + '' + '\n' + '    set b to chain fruit' + '\n' + '      |observe debug(\'Pre-sort\')' + '\n' + '      |audit debug(\'Fruit #$\{key} is $\{it}\')' + '\n' + '      |by desc' + '\n' + '      |observe debug(\'Post-sort\')' + '\n' + '      |audit debug(\'Fruit #$\{key} is $\{it}\')' + '\n' + '    debug b' + '\n' + '' + '\n' + '    > Pre-sort' + '\n' + '    > Fruit #0 is Apple' + '\n' + '    > Fruit #1 is Banana' + '\n' + '    > Fruit #2 is Citron' + '\n' + '    > Post-sort' + '\n' + '    > Fruit #0 is Citron' + '\n' + '    > Fruit #1 is Banana' + '\n' + '    > Fruit #2 is Apple' + '\n' + '    > [ \'Citron\', \'Banana\', \'Apple’ ]' + '\n' + '' + '\n' + 'This example shows how one could add instrumentation to a process in a light-weight fashion.' + '\n' + '' + '\n' + 'Neither **observe** nor **audit** alter the chained data. _A side effect of this is that' + '\n' + '**observe** can’t be used with non-reproducible iterators as it’s impossible to statically observe' + '\n' + 'an iterator without draining it._' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
          }
        }
      });
    }
  },
  set: undefined
});
var $3g = prototype['IntoPiper'] || function() {};
prototype['IntoPiper'] = function(p) {
  var $_d, $_c, $2, _fn, _vars, _startvalue, _outs, _tools, _pattern, $1, $ = this['IntoPiper'] ? this : $bindfail('IntoPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'IntoPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _outs = $.OutVarHelper(p.work.args.out);
    _startvalue = p.work.args.val;
    switch ($2 = (p.work.type)) {
      case 'into.valexpr':
      case 'total.expr':
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
      case 'total.outblock':
        _vars = {
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
      case 'total.use':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + p.work.args.use + ',' + _startvalue + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $2 + ' in IntoPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $4g = prototype['TotalPiper'] || function() {};
prototype['TotalPiper'] = function(p) {
  var $_d, $_c, $4, _fn, _vars, _tools, _pattern, $3, $ = this['TotalPiper'] ? this : $bindfail('TotalPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'TotalPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
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
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + p.work.args.use + ',undefined)';
        break;
      case 'total.none':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',function(s,i){' + '\n' + '  return (undefined===s) ? i : s+i;' + '\n' + '},undefined)' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $4 + ' in IntoPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $5g = prototype['AuditPiper'] || function() {};
prototype['AuditPiper'] = function(p) {
  var $_d, $_c, $6, _outs, _fn, _vars, _op, _tools, _pattern, $5, $ = this['AuditPiper'] ? this : $bindfail('AuditPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'AuditPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'audit')) ? ('audit_op') : ('observe_op'));
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
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $6 + ' in ThruPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $6g = prototype['ThruPiper'] || function() {};
prototype['ThruPiper'] = function(p) {
  var $_d, $_c, $8, _outs, _fn, _vars, _op, _tools, _pattern, $7, $ = this['ThruPiper'] ? this : $bindfail('ThruPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ThruPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'thru')) ? ('map_op') : ('alter_op'));
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
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $8 + ' in ThruPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $7g = prototype['ArraysPiper'] || function() {};
prototype['ArraysPiper'] = function(p) {
  var $_d, $_c, $10, _fn, _vars, _tools, _pattern, $9, $ = this['ArraysPiper'] ? this : $bindfail('ArraysPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ArraysPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($10 = (p.work.type)) {
      case 'iterate.none':
        _pattern = '$AI.iterate_op(' + $.SPLIT + ')';
        break;
      case 'concat.expr':
        _pattern = '$AI.concat_op(' + $.SPLIT + ',' + p.work.args.expr + ')';
        break;
      case 'collect.none':
        _pattern = '$AI.collect_op(' + $.SPLIT + ')';
        break;
      case 'enlist.none':
        _pattern = '$AI.enlist_op(' + $.SPLIT + ')';
        break;
      case 'entrait.none':
        _pattern = '$AI.entrait_op(' + $.SPLIT + ')';
        break;
      case 'enkey.none':
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(s,a){s[a]=true;return s;},{})';
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
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $8g = prototype['KVPiper'] || function() {};
prototype['KVPiper'] = function(p) {
  var $12, _tools, _pattern, $11, $ = this['KVPiper'] ? this : $bindfail('KVPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'KVPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($12 = (p.work.type)) {
      case 'keys.none':
        _pattern = '$AI.keys_op(' + $.SPLIT + ')';
        break;
      case 'values.none':
        _pattern = '$AI.values_op(' + $.SPLIT + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $12 + ' in KVPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $9g = prototype['ReplicatePiper'] || function() {};
prototype['ReplicatePiper'] = function(p) {
  var $14, _tools, _pattern, $13, $ = this['ReplicatePiper'] ? this : $bindfail('ReplicatePiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ReplicatePiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($14 = (p.work.type)) {
      case 'replicate.expr':
        _pattern = '$piper$replicate((' + $.SPLIT + '),(' + p.work.args.expr + '))';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $14 + ' in ReplicatePiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
