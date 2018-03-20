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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-20T19:27:10.362Z"};
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
var $8g = prototype['OutVarHelper'] || function() {};
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
var $9g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/QueryP.sai","mtime":"2018-03-18T19:43:39.510Z","fetched":"2018-03-20T19:27:10.155Z"};
var isa = prototype.isa = 'QueryP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['QueryP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "FilterPiper", "LowestPiper", "SortPiper", "LimitPiper", "Documents", "isa"]);
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
          'limit': {
            clauses: {
              'limit': {
                exprs: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            }
          },
          'first': {
            clauses: {
              'first': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            }
          },
          'last': {
            clauses: {
              'last': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            }
          },
          'count': {
            clauses: {
              'count': {
                none: true
              }
            },
            handler: function() {
              return ($.LimitPiper).apply($, arguments);
            }
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
            }
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
            }
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
            }
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
      /*@:61*/
    }
  },
  set: undefined
});
var $3g = prototype['FilterPiper'] || function() {};
prototype['FilterPiper'] = function(p) {
  var $_d, $_c, $3, _outs, _fn, _vars, $2, _work, _tools, _pattern, $1, $ = this['FilterPiper'] ? this : $bindfail('FilterPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'FilterPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    /*@:71*/
    if ($2 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
      /*@:73*/
    }
    /*@:74*/
    switch ($3 = (_work.type)) {
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
        /*@:105*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $3 + ' in FilterPiper'
        });
        /*@:108*/
        break;
    } /*@:109*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:110*/
  }
};
var $4g = prototype['LowestPiper'] || function() {};
prototype['LowestPiper'] = function(p) {
  var $_d, $_c, $_b, $7, _vars, _outs, _fn, _whichway, _bfetch, _afetch, $6, $5, _work, _ascending, _Repl, _tools, _pattern, $4, $ = this['LowestPiper'] ? this : $bindfail('LowestPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'LowestPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _Repl = p.tools.replacer;
    _ascending = 1;
    _work = p.clauses[0];
    /*@:126*/
    if ($5 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
      /*@:128*/
    }
    /*@:129*/
    if ($6 = ((_work.clause === 'highest'))) {
      _ascending = (0 - (1));
      /*@:131*/
    }
    /*@:132*/
    switch ($7 = (_work.type)) {
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
      case 'highest.none':
        _whichway = (((_ascending > 0)) ? ('a>b') : ('a<b'));
        _pattern = '$AI.reduce_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  if (undefined===a) return b;' + '\n' + '  return (' + _whichway + ') ? b : a;' + '\n' + '})' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $7 + ' in LowestPiper'
        });
        /*@:189*/
        break;
    } /*@:190*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:191*/
  }
};
var $5g = prototype['SortPiper'] || function() {};
prototype['SortPiper'] = function(p) {
  var $_d, $_c, $_b, $24, $23, $22, _fn, _vars, _outs, $21, $20, _msg, $19, $18, $17, $16, $15, $14, $13, $12, _keyed, _work, $11, $10, $9, _grammar, _Repl, _tools, _pattern, $8, $ = this['SortPiper'] ? this : $bindfail('SortPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'SortPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _Repl = p.tools.replacer;
    _grammar = $AI.reduce_op_fast(p.clauses, function($11, $9, $10) {
      var $t = $9.clause;
      return (undefined === $11) ? $t : ($11 + $t);
    }, undefined);
    _work = p.clauses[0];
    /*@:206*/
    switch ($24 = (_work.type)) {
      case 'by.expr':
        try {
          _keyed = false;
          _pattern = $AI.alter_op($AI.reduce_op_fast($AI.map_op($AI.reduce_op_fast(p.clauses, function($15, $13, $14) {
            switch ($12 = ($13.clause)) {
              case 'by':
                if (!(_keyed)) {
                  _keyed = ($13.args.expr.indexOf('\x5e{key}') >= 0);
                }
                /*@:218*/
                $15.push({
                  expr: ((undefined !== ($_b = $13.args.expr)) ? $_b : '\x5e{this}'),
                  order: 1
                });
                break;
              case 'asc':
                ($AI.element_op($AI.slice_op($15, undefined, -1), 0)).order = 1;
                break;
              case 'desc':
                ($AI.element_op($AI.slice_op($15, undefined, -1), 0)).order = (0 - (1));
                break;
              default:
                throw 'SAI Compiler: unexpected clause in BY: ' + $12;
                break;
            };
            return $15;
          }, []), function($16, $17) {
            return 'aa=' + _Repl($16.expr, {
              'this': ((_keyed) ? ('a[1]') : ('a')),
              'key': 'a[0]'
            }) + ';' + '\n' + 'bb=' + _Repl($16.expr, {
              'this': ((_keyed) ? ('b[1]') : ('b')),
              'key': 'b[0]'
            }) + ';' + '\n' + 'if (aa<bb) return ' + (0 - ($16.order)) + '; if (aa>bb) return ' + $16.order + ';';
          }), function(s, i) {
            return (undefined === s) ? i : s + i;
          }, undefined), function($18, $19) {
            if (!(_keyed)) {
              return ('$AI.sort_op(' + $.SPLIT + ',function(a,b){' + '\n' + '  var aa,bb;' + '\n' + '  ' + $18 + ';' + '\n' + '  return 0;' + '\n' + '})');;
            } else {
              return ('$AI.map_op($AI.sort_op($by$enlistcheck(' + $.SPLIT + '),function(a,b){' + '\n' + '  var aa,bb;' + '\n' + '  ' + $18 + ';' + '\n' + '  return 0;' + '\n' + '}),function(a,b){return a[1];})');;
            };
            return $18;
          });
        } catch (_msg) {
          return ({
            error: _msg
          });
          /*@:247*/
        }
        /*@:248*/
        if ($20 = (_keyed)) {
          _tools.push('var $by$enlistcheck=function(o) {' + '\n' + '  if ($AI.isArray(o) || $AI.mustIterate(o)) {' + '\n' + '    throw new Error("SAI Runtime: call to BY using the key pronoun applied to something that isn\'t a true object.");' + '\n' + '  }' + '\n' + '  return $AI.enlist_op(o);' + '\n' + '}' + '\n' + '');
        }
        break;
      case 'by.outblock':
        if ($21 = ((p.clauses.length > 1))) {
          return ({
            error: 'SAI Compiler: BY.outblock should not have any extra clauses'
          });
          /*@:260*/
        }
        /*@:261*/
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
        if ($22 = ((p.clauses.length > 1))) {
          return ({
            error: 'SAI Compiler: BY.use should not have any extra clauses'
          });
        }
        /*@:277*/
        _pattern = '$AI.sort_op(' + $.SPLIT + ',' + _work.args.use + ')';
        /*@:278*/
        break;
      case 'by.none':
        if ($23 = ((p.clauses.length > 1))) {
          return ({
            error: 'SAI Compiler: BY with no sort expression should not have any extra clauses. If you wish to sort descending, use by it desc.'
          });
        }
        /*@:282*/
        _pattern = '$AI.sort_op(' + $.SPLIT + ',function(a,b){return $AI.compare_op(a,b);})' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $24 + ' in SortPiper'
        });
        /*@:288*/
        break;
    } /*@:289*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:290*/
  }
};
var $6g = prototype['LimitPiper'] || function() {};
prototype['LimitPiper'] = function(p) {
  var $28, $27, _ct, _st, $26, _work, _tools, _pattern, $25, $ = this['LimitPiper'] ? this : $bindfail('LimitPiper');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'LimitPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    /*@:304*/
    if ($26 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
      /*@:306*/
    }
    /*@:307*/
    switch ($28 = (_work.type)) {
      case 'limit.exprs':
        if ($27 = ((_work.args.exprs.length === 1))) {
          _st = undefined;
          _ct = _work.args.exprs[0];
        } else {
          _st = _work.args.exprs[0];
          _ct = _work.args.exprs[1];
        }
        /*@:318*/
        _pattern = '$AI.slice_op(' + $.SPLIT + ',' + _st + ',' + _ct + ')';
        /*@:319*/
        break;
      case 'first.none':
        _pattern = '($AI.element_op($AI.slice_op(' + $.SPLIT + ',0,1),0))';
        /*@:322*/
        break;
      case 'last.none':
        _pattern = '($AI.element_op($AI.slice_op(' + $.SPLIT + ',undefined,-1),0))';
        /*@:325*/
        break;
      case 'count.none':
        _pattern = '$AI.count_op(' + $.SPLIT + ')';
        /*@:328*/
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $28 + ' in LimitPiper'
        });
        /*@:331*/
        break;
    } /*@:332*/
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
    /*@:333*/
  }
};
var $7g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $29, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'pipers': {
        'limit': {
          subtitle: 'select certain array/iterator elements',
          summary: 'Returns a subset of elements from an array, string, or iterator.',
          detail: 'If one parameter is provided, returns the first **qty** elements in the' + '\n' + 'collection if **qty** is positive. If negative, returns the last (absolute) **qty**' + '\n' + 'number of elements.' + '\n' + '' + '\n' + 'If an **index** is supplied, return **qty** elements starting at **index**.' + '\n' + 'Negative index values do interesting things, there\'s a chart below.' + '\n' + '' + '\n' + '  .. [collection] | limit [qty]' + '\n' + '  .. [collection] | limit [index], [qty]' + '\n' + '' + '\n' + '  .. [string] | limit [character count]' + '\n' + '  .. [string] | limit [start character], [character count]' + '\n' + '' + '\n' + 'You always get a list back, even if just one element will be returned.' + '\n' + '' + '\n' + '    limit -y            last y rows' + '\n' + '    limit 0             empty' + '\n' + '    limit undefined     everything' + '\n' + '    limit +y            first y rows' + '\n' + '' + '\n' + '    limit -x, -y        everything except last y rows starting x from end of list' + '\n' + '    limit -x, 0         empty' + '\n' + '    limit -x, undef     last x rows' + '\n' + '    limit -x, +y        y rows starting x from end of list' + '\n' + '' + '\n' + '    limit 0, -y         everything except last y rows' + '\n' + '    limit 0, 0          empty' + '\n' + '    limit 0, undef      everything' + '\n' + '    limit 0, +y         first y rows' + '\n' + '' + '\n' + '    limit +x, -y        everything except last y rows starting at x' + '\n' + '    limit +x, 0         empty' + '\n' + '    limit +x, undef     everything starting at x' + '\n' + '    limit +x, +y        y rows starting at x' + '\n' + '' + '\n' + 'If the collection is an iterable, it will only be fetched as many times as needed.' + '\n' + '(If you ask for elements offset from the end, the iterator will be exhausted because an' + '\n' + 'iterator’s length can only be ascertained by exhausting it.)' + '\n' + '' + '\n' + 'If the iterator is infinite and you ask for an offset from the end, you\'ll run out of' + '\n' + 'memory as it will cache an infinite number of intermediate results order to comply' + '\n' + 'with your impossible request. (Infinite iterators have no end.)' + '\n' + '' + '\n' + '#### limit with strings' + '\n' + '' + '\n' + 'You can use __limit__ to extract substrings. For this purpose characters are' + '\n' + 'treated as elements in the array.' + '\n' + '' + '\n' + '    debug \'abcdef\' | limit 2,2      // cd' + '\n' + '    debug \'abcdef\' | limit -3       // def' + '\n' + '    debug \'abcdef\' | limit -3,2     // de' + '\n' + '    debug \'abcdef\' | limit 1,-1     // bcde' + '\n' + '' + '\n' + 'And so on. One "gotcha" is operator precedence; pipers have the lowest' + '\n' + 'priority, so you will need to wrap them in parenthesis if using __limit__ in any' + '\n' + 'logical expression.' + '\n' + '' + '\n' + '    Do this:' + '\n' + '      if \'#!\' is (line | limit 0,2)   // correct code' + '\n' + '' + '\n' + '    Not this:' + '\n' + '      if \'#!\' is line | limit 0,2     // bad code' + '\n' + '      if (\'#!\' is line) | limit 0,2   // also bad' + '\n' + '' + '\n' + 'Another "gotcha" is the way  __limit__ intentionally changes behaviour when its' + '\n' + 'arguments change from negative to positive. If you pass calculated values that' + '\n' + 'could become negative, __limit__ may return things you don\'t expect.' + '\n' + '' + '\n' + ''
        },
        'first': {
          subtitle: 'first value',
          summary: 'Returns the first value in a list or iterator.',
          detail: 'Example:' + '\n' + '' + '\n' + '    debug fruit | first' + '\n' + '    > Apple' + '\n' + '' + '\n' + '__First__ doesn\'t just crop the array, it unwraps whatever value is there, as' + '\n' + 'if you\'d coded `array.[0]`.' + '\n' + '' + '\n' + ''
        },
        'last': {
          subtitle: 'last value',
          summary: 'Returns the last value in a list or iterator.',
          detail: 'If the collection is an iterator, it will be exhausted. If it\'s an infinite iterator, the machine will stop' + '\n' + 'responding.' + '\n' + '' + '\n' + '    debug fruit | last' + '\n' + '' + '\n' + '    > Citron' + '\n' + '' + '\n' + '__Last__ doesn\'t just crop the array, it unwraps whatever value is there, as' + '\n' + 'if you\'d coded `array.[array.length-1]`.' + '\n' + '' + '\n' + ''
        },
        'count': {
          subtitle: 'collection item count',
          summary: 'Returns the number of elements in the collection.',
          detail: 'If the collection is an iterator, it will be drained.' + '\n' + '' + '\n' + '    debug undefined count' + '\n' + '    debug 1 count' + '\n' + '    debug fruit count' + '\n' + '' + '\n' + '    > 0' + '\n' + '    > 1' + '\n' + '    > 3' + '\n' + '' + '\n' + ''
        },
        'by': {
          subtitle: 'collection sorting',
          summary: 'To create a sorted array, use **by**. The newly resulting array will be sorted by the specified' + '\n' + 'inline expression or code block.',
          detail: '**By** does not sort in-place; it always returns a new array.' + '\n' + 'If **by** is used on an iterable, it will **collect** all values before sorting.' + '\n' + 'If **by** is used on a true object, it will be converted to an array.' + '\n' + '' + '\n' + '#### by inline' + '\n' + '' + '\n' + 'When you use the inline expression form, the provided expression is used to extract a' + '\n' + 'value from a single record, which is then compared against other records to determine the sort order.' + '\n' + '' + '\n' + 'The **it** pronoun and its **dot** scoping prefix are available within the expression.' + '\n' + '' + '\n' + 'Print a list of friends sorted alphabetically by name:' + '\n' + '' + '\n' + '    set result to friends | by .name' + '\n' + '' + '\n' + '    debug ( result | thru .name ).join(\', \')' + '\n' + '' + '\n' + '    > Ann, Doug, Ellie, Harry, Jenna, John, Marshal, Sara' + '\n' + '' + '\n' + 'You may sort by more than one value by adding another **by** clause. Multiple sort clauses' + '\n' + 'are handled the way a database would: if a clause provides no guidance (the values are' + '\n' + 'identical), subsequent clauses are each checked in turn.' + '\n' + '' + '\n' + 'Print sorted by length of name, then age:' + '\n' + '' + '\n' + '    set result to friends | by .name.length by .age' + '\n' + '' + '\n' + '    debug (result | thru \'$\{.name}: $\{.age}\').join(\'\\n\')' + '\n' + '' + '\n' + '    > Ann: 23' + '\n' + '    > Doug: 18' + '\n' + '    > John: 19' + '\n' + '    > Sara: 23' + '\n' + '    > Ellie: 22' + '\n' + '    > Jenna: 28' + '\n' + '    > Harry: 31' + '\n' + '    > Marshal: 21' + '\n' + '' + '\n' + '#### Sorting of objects by the property/key' + '\n' + '' + '\n' + 'In _inline_ expression sorting only, if your source collection is an object, you can use the __key__' + '\n' + 'pronoun as sort criteria, in addition to the __it__ pronoun and related accessors. The key is the' + '\n' + 'property name. In the example below, `rejections` is one of the keys in the folder object,' + '\n' + 'while `34` is its value.' + '\n' + '' + '\n' + '    set folder:' + '\n' + '      rejections 34' + '\n' + '      acceptances 23' + '\n' + '      pending 4' + '\n' + '    debug folder | by key' + '\n' + '' + '\n' + '    > [ 4, 23, 34 ]' + '\n' + '' + '\n' + 'As you can see, the key is discarded in the final array output.  If you need' + '\n' + 'different behaviour, you\'ll need to partition the task into simpler components, e.g. by using' + '\n' + '__enlist__, __by__ and __thru__ in turn to preserve the data in the form you need.' + '\n' + '' + '\n' + 'Using __key__ as sort criteria on something that isn\'t an object will throw a runtime exception.' + '\n' + '' + '\n' + '#### by block' + '\n' + '' + '\n' + 'When using **by** with a block of code, the pronouns change. You are given both records' + '\n' + 'under consideration just as you would using the Javascript `.sort` method. And' + '\n' + 'perhaps unsurprisingly to those who have ever seen a programming textbook, the pronouns' + '\n' + 'are the letters **a** and **b**.' + '\n' + '' + '\n' + 'Print a sorted list of ages by province:' + '\n' + '' + '\n' + '    set result to friends | by' + '\n' + '      return a.province <=> b.province or a.age <=> b.age' + '\n' + '' + '\n' + '    debug (result | thru \'$\{.name}: $\{.province}, $\{.age}\').join(\'\n\')' + '\n' + '' + '\n' + '    > Doug: ON, 18' + '\n' + '    > John: ON, 19' + '\n' + '    > Marshal: ON, 21' + '\n' + '    > Sara: ON, 23' + '\n' + '    > Jenna: ON, 28' + '\n' + '    > Ellie: QC, 22' + '\n' + '    > Ann: QC, 23' + '\n' + '    > Harry: QC, 31' + '\n' + '' + '\n' + 'Note the __key__ pronoun is not available with block expression sorting.' + '\n' + '' + '\n' + '#### by using' + '\n' + '' + '\n' + '__By using__ provides the ability to use a named function for your' + '\n' + 'sorting facilitator.' + '\n' + '' + '\n' + '    set ProvinceAge to task given a, b' + '\n' + '     return a.province <=> b.province or a.age <=> b.age' + '\n' + '' + '\n' + '    set result to friends | by using ProvinceAge' + '\n' + '' + '\n' + '    // same result as previous example' + '\n' + '' + '\n' + '#### desc (descending) _modifier_' + '\n' + '' + '\n' + '    .. [expr] | by [expr] (desc)' + '\n' + '' + '\n' + 'Used with the **by** comprehension just like **asc** but the sort order will be highest to lowest.' + '\n' + '' + '\n' + '    debug list Bob, Carol, Ted, Alice | by it desc' + '\n' + '' + '\n' + '    > [ \'Ted\', \'Carol\', \'Bob\', \'Alice\' ]' + '\n' + '' + '\n' + ''
        },
        'has': {
          subtitle: 'collection filtering',
          summary: 'Use __has__ to test for exclusion each object in a collection.',
          detail: 'The pipe operator **has** indicates an expression based filter using the **it**' + '\n' + '_pronoun_ to represent the item currently under examination. Since **it** is in play,' + '\n' + 'the associated **dot** scoping prefix is also active within the expression for' + '\n' + 'easy access to item fields.' + '\n' + '' + '\n' + '#### has inline' + '\n' + '' + '\n' + '    debug friends | has (.province = \'QC\') and (.cat or .dog)' + '\n' + '' + '\n' + '    > [ { name: \'Ann\', age: 23, cat: true, province: \'QC\' } ]' + '\n' + '' + '\n' + 'Any valid expression can be used in a **has** piper, and one can refer' + '\n' + 'to values outside the expression as well.' + '\n' + '' + '\n' + '    set rentAge to: ON 25, QC 21' + '\n' + '    debug friends | has .age >= rentAge[.province]' + '\n' + '' + '\n' + '    > [ { name: \'Ellie\', age: 22, province: \'QC\' },' + '\n' + '    >   { name: \'Ann\', age: 23, cat: true, province: \'QC\' },' + '\n' + '    >   { name: \'Harry\', age: 31, province: \'QC\' },' + '\n' + '    >   { name: \'Jenna\', age: 28, dog: true, province: \'ON\' } ]' + '\n' + '' + '\n' + '#### has block' + '\n' + '' + '\n' + '**Has** can reference a block of code directly, which makes' + '\n' + 'the **it** pronoun available within that block, or be given the name of a' + '\n' + 'task (or a task definition).' + '\n' + '' + '\n' + 'You must **return** a _truthy_ (keep) or' + '\n' + '_falsy_ (discard) value from the block so the filter can take the according' + '\n' + 'action. If you don’t return a value, all rows will be discarded.' + '\n' + '' + '\n' + '    friends | has' + '\n' + '      return .age >= rentAge[.province]' + '\n' + '' + '\n' + '#### has using' + '\n' + '' + '\n' + 'You can integrate function calls by adding the' + '\n' + '**using** keyword immediately following the __has__ keyword itself.' + '\n' + '' + '\n' + '    set CanRent to task given row' + '\n' + '      return row.age >= rentAge[row.province]' + '\n' + '' + '\n' + '    debug friends | has using CanRent' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'lowest': {
          subtitle: 'search collection for lowest value',
          summary: 'Returns the collection element with the lowest value of the expression.',
          detail: 'Prepares the pronouns **it** and **key** for use by the expression.' + '\n' + '' + '\n' + '    debug friends lowest .age' + '\n' + '' + '\n' + '    > { name: \'Doug\', age: 18, province: \'ON\' }' + '\n' + '' + '\n' + '__Lowest__ is like a combination of __by__ and __first__, except that instead of' + '\n' + 'sorting, it just runs through the collection and finds the correct answer. (This is faster.)' + '\n' + '' + '\n' + ''
        },
        'highest': {
          subtitle: 'search collection for highest value',
          summary: 'Returns the collection element with the highest value of the expression.',
          detail: 'Prepares the pronouns **it** and **key** for use by the expression.' + '\n' + '' + '\n' + '    debug friends highest .age' + '\n' + '' + '\n' + '    > { name: \'Harry\', age: 31, province: \'QC\' }' + '\n' + '' + '\n' + '__Highest__ is like a combination of __by__ and __first__, except that instead of' + '\n' + 'sorting, it just runs through the collection and finds the correct answer. (This is faster.)' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
