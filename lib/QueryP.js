#!/usr/bin/env node

// Javascript source for QueryP.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-09T22:04:14.998Z","fetched":"2018-03-10T16:36:22.683Z"};
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
var __context={"name":"QueryP.sai","loader":"SAI.GetSourceFromPaths","path":"src/QueryP.sai","mtime":"2018-03-10T15:58:27.805Z","fetched":"2018-03-10T16:36:22.587Z"};
var isa = prototype.isa = 'QueryP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['QueryP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "FilterPiper", "LowestPiper", "SortPiper", "LimitPiper", "isa"]);
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
          'limit': {
            clauses: {
              'limit': {
                exprs: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            },
            tools: []
          },
          'first': {
            clauses: {
              'first': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            },
            tools: []
          },
          'last': {
            clauses: {
              'last': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            },
            tools: []
          },
          'count': {
            clauses: {
              'count': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            },
            tools: []
          },
          'by': {
            clauses: {
              'by': {
                expr: true,
                outblock: true,
                use: true,
                none: true
              },
              'asc': {
                none: true
              },
              'desc': {
                none: true
              }
            },
            handler: function() {
              return ($.SortPiper).apply($, arguments);
            },
            tools: []
          },
          'has': {
            clauses: {
              'has': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.FilterPiper).apply($, arguments);
            },
            tools: []
          },
          'lowest': {
            clauses: {
              'lowest': {
                expr: true,
                use: true,
                none: true,
                outblock: true
              }
            },
            handler: function() {
              return ($.LowestPiper).apply($, arguments);
            },
            tools: []
          },
          'highest': {
            clauses: {
              'highest': {
                expr: true,
                use: true,
                none: true,
                outblock: true
              }
            },
            handler: function() {
              return ($.LowestPiper).apply($, arguments);
            },
            tools: []
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['FilterPiper'] || function() {};
prototype['FilterPiper'] = function(p) {
  var $_d, $_c, $2, _outs, _fn, _vars, $1, _work, _tools, _pattern, $0, $ = this['FilterPiper'] ? this : $bindfail('FilterPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'FilterPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    if ($1 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
    }
    switch ($2 = (_work.type)) {
      case 'has.expr':
        _vars = {
          'this': false,
          'key': false,
          'block': _work.args.expr
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  return \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.filter_op(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'has.outblock':
        _outs = $.OutVarHelper(_work.args.out);
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'block': _work.args.block
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '  return \x5e{this};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.filter_op(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'has.use':
        _pattern = '$AI.filter_op(' + $.SPLIT + ',' + _work.args.use + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $2 + ' in FilterPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $3g = prototype['LowestPiper'] || function() {};
prototype['LowestPiper'] = function(p) {
  var $_d, $_c, $_b, $6, _vars, _outs, _fn, _whichway, _bfetch, _afetch, $5, $4, _work, _ascending, _Repl, _tools, _pattern, $3, $ = this['LowestPiper'] ? this : $bindfail('LowestPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'LowestPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _Repl = p.tools.replacer;
    _ascending = 1;
    _work = p.clauses[0];
    if ($4 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
    }
    if ($5 = ((_work.clause === 'highest'))) {
      _ascending = (0 - (1));
    }
    switch ($6 = (_work.type)) {
      case 'lowest.expr':
      case 'highest.expr':
        _afetch = _Repl(_work.args.expr, {
          'this': 'a'
        });
        _bfetch = _Repl(_work.args.expr, {
          'this': 'b'
        });
        _whichway = (((_ascending > 0)) ? ('aa>bb') : ('aa<bb'));
        _fn = 'function(a,b){' + '\n' + '  if (undefined===a) return b;' + '\n' + '  var aa=' + _afetch + ';' + '\n' + '  var bb=' + _bfetch + ';' + '\n' + '  return (' + _whichway + ') ? b : a;' + '\n' + '}' + '\n' + '';
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'lowest.outblock':
      case 'highest.outblock':
        _outs = $.OutVarHelper(_work.args.out);
        _whichway = (((_ascending > 0)) ? ('>0') : ('<=0'));
        _vars = {
          'a': ((undefined !== ($_b = _outs[0])) ? $_b : '_a'),
          'b': ((undefined !== ($_b = _outs[1])) ? $_b : '_b'),
          'block': _work.args.block
        };
        _fn = 'function(\x5e{a},\x5e{b}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  if (undefined===a) return b;' + '\n' + '  return (' + _fn + '(a,b)' + _whichway + ') ? b : a;' + '\n' + '})' + '\n' + '';
        break;
      case 'lowest.use':
      case 'highest.use':
        _whichway = (((_ascending > 0)) ? ('>0') : ('<=0'));
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  if (undefined===a) return b;' + '\n' + '  return (' + _work.args.use + '(a,b)' + _whichway + ') ? b : a;' + '\n' + '})' + '\n' + '';
        break;
      case 'lowest.none':
      case 'higest.none':
        _whichway = (((_ascending > 0)) ? ('a>b') : ('a<b'));
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  if (undefined===a) return b;' + '\n' + '  return (' + _whichway + ') ? b : a;' + '\n' + '})' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $6 + ' in LowestPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $4g = prototype['SortPiper'] || function() {};
prototype['SortPiper'] = function(p) {
  var $_d, $_c, $_b, $12, _whichway, _vars, _outs, _fn, _tester, _bfetch, _afetch, _source, $11, _work, $10, $9, $8, _grammar, _ascending, _Repl, _tools, _pattern, $7, $ = this['SortPiper'] ? this : $bindfail('SortPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'SortPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _Repl = p.tools.replacer;
    _ascending = 1;
    _grammar = $AI.reduce_op_fast(p.clauses, function($10, $8, $9) {
      var $t = $8.clause;
      return (undefined === $10) ? $t : ($10 + $t);
    }, undefined);
    _work = p.clauses[0];
    if (!(((_grammar === 'by') || ((_grammar === 'byasc') || (_grammar === 'bydesc'))))) {
      return ({
        error: 'SAI Compiler: bad grammar in BY; expecting BY or BY...ASC or BY...DESC '
      });
    }
    if ($11 = ((_grammar === 'bydesc'))) {
      _ascending = (0 - (1));
    }
    switch ($12 = (_work.type)) {
      case 'by.expr':
        _source = ((undefined !== ($_b = _work.args.expr)) ? $_b : '^\{this}');
        _afetch = _Repl('aa=' + _source + '; ', {
          'this': 'a'
        });
        _bfetch = _Repl('bb=' + _source + '; ', {
          'this': 'b'
        });
        _tester = _Repl((_afetch + (_bfetch + 'if (aa<bb) return ^\{lt}; if (aa>bb) return ^\{gt}; ')), {
          lt: (0 - (_ascending)),
          gt: _ascending
        });
        _fn = 'function(a,b){' + '\n' + '  var aa,bb;' + '\n' + '  ' + _tester + ';' + '\n' + '  return 0;' + '\n' + '}' + '\n' + '';
        _pattern = '$AI.sort_op(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'by.outblock':
        _outs = $.OutVarHelper(_work.args.out);
        _vars = {
          'a': ((undefined !== ($_b = _outs[0])) ? $_b : '_a'),
          'b': ((undefined !== ($_b = _outs[1])) ? $_b : '_b'),
          'block': _work.args.block
        };
        _fn = 'function(\x5e{a},\x5e{b}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.sort_op(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'by.use':
        _pattern = '$AI.sort_op(' + $.SPLIT + ',' + _work.args.use + ')';
        break;
      case 'by.none':
        _whichway = (((_ascending > 0)) ? ('a>b') : ('b>a'));
        _pattern = '$AI.sort_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  return (' + _whichway + ') ? 1 : 0;' + '\n' + '})' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $12 + ' in SortPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $5g = prototype['LimitPiper'] || function() {};
prototype['LimitPiper'] = function(p) {
  var $16, $15, _ct, _st, $14, _work, _tools, _pattern, $13, $ = this['LimitPiper'] ? this : $bindfail('LimitPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'LimitPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    if ($14 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
    }
    switch ($16 = (_work.type)) {
      case 'limit.exprs':
        if ($15 = ((_work.args.exprs.length === 1))) {
          _st = undefined;
          _ct = _work.args.exprs[0];
        } else {
          _st = _work.args.exprs[0];
          _ct = _work.args.exprs[1];
        }
        _pattern = '$AI.slice_op(' + $.SPLIT + ',' + _st + ',' + _ct + ')';
        break;
      case 'first.none':
        _pattern = '($AI.element_op($AI.slice_op(' + $.SPLIT + ',0,1),0))';
        break;
      case 'last.none':
        _pattern = '($AI.element_op($AI.slice_op(' + $.SPLIT + ',undefined,-1),0))';
        break;
      case 'count.none':
        _pattern = '$AI.count_op(' + $.SPLIT + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $16 + ' in LimitPiper'
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
