#!/usr/bin/env node

// Javascript source for IterateC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T01:03:09.507Z"};
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
var __context={"name":"IterateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/IterateC.sai","mtime":"2018-03-12T00:25:36.031Z","fetched":"2018-03-12T01:03:09.264Z"};
var isa = prototype.isa = 'IterateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['IterateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "FlowControlConstruct", "EveryConstruct", "IndexedConstruct", "IterateConstruct", "EachConstruct", "PlyConstruct", "WhileConstruct", "CountConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
          'every': {
            repeats: false,
            clauses: {
              'every': {
                exprusing: true,
                exproutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.EveryConstruct).apply($, arguments);
            }
          },
          'iterate': {
            repeats: false,
            clauses: {
              'iterate': {
                exprusing: true,
                exproutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.IterateConstruct).apply($, arguments);
            }
          },
          'each': {
            repeats: false,
            clauses: {
              'each': {
                exprusing: true,
                exproutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.EachConstruct).apply($, arguments);
            }
          },
          'index': {
            repeats: false,
            clauses: {
              'index': {
                exprsusing: true,
                exprsoutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.IndexedConstruct).apply($, arguments);
            }
          },
          'ply': {
            repeats: false,
            clauses: {
              'ply': {
                exprusing: true,
                exproutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.PlyConstruct).apply($, arguments);
            }
          },
          'while': {
            repeats: false,
            clauses: {
              'while': {
                exproutblock: true
              }
            },
            handler: function() {
              return ($.WhileConstruct).apply($, arguments);
            }
          },
          'until': {
            repeats: false,
            clauses: {
              'until': {
                exproutblock: true
              }
            },
            handler: function() {
              return ($.WhileConstruct).apply($, arguments);
            }
          },
          'dowhile': {
            repeats: false,
            clauses: {
              'dowhile': {
                exproutblock: true
              }
            },
            handler: function() {
              return ($.WhileConstruct).apply($, arguments);
            }
          },
          'dountil': {
            repeats: false,
            clauses: {
              'dountil': {
                exproutblock: true
              }
            },
            handler: function() {
              return ($.WhileConstruct).apply($, arguments);
            }
          },
          'break': {
            repeats: false,
            clauses: {
              'break': {
                none: true
              }
            },
            handler: function() {
              return ($.FlowControlConstruct).apply($, arguments);
            }
          },
          'continue': {
            repeats: false,
            clauses: {
              'continue': {
                none: true
              }
            },
            handler: function() {
              return ($.FlowControlConstruct).apply($, arguments);
            }
          },
          'count': {
            repeats: false,
            clauses: {
              'count': {
                exprsoutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.CountConstruct).apply($, arguments);
            }
          },
          'countdown': {
            repeats: false,
            clauses: {
              'countdown': {
                exprsoutblock: true
              },
              'else': {
                block: true
              }
            },
            handler: function() {
              return ($.CountConstruct).apply($, arguments);
            }
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['FlowControlConstruct'] || function() {};
prototype['FlowControlConstruct'] = function(p) {
  var $1, _body, $0, $ = this['FlowControlConstruct'] ? this : $bindfail('FlowControlConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'FlowControlConstruct\''); {
    _body = '';
    var $2 = p.clauses[0];
    switch ($1 = ($2.type)) {
      case 'break.none':
        _body = 'break;\n';
        break;
      case 'continue.none':
        _body = 'continue;\n';
        break;
      default:
        return ({
          error: 'SAI compiler: unhandled ' + $2.type + ' in FlowControlConstruct -- this is a compiler bug.'
        });
        break;
    }
    return ({
      body: _body
    });
  }
};
var $3g = prototype['EveryConstruct'] || function() {};
prototype['EveryConstruct'] = function(p) {
  var $_d, $_c, $_b, $6, $5, _text, _loop, _elseclause, _preface, _vars, _outs, _none, _main, $4, $3, $ = this['EveryConstruct'] ? this : $bindfail('EveryConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'EveryConstruct\''); {
    if ($4 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: EVERY can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      switch ($5 = (_main.type)) {
        case 'every.exproutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            iter: false,
            elem: false,
            none: (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block))
          };
          _preface = 'var \x5e{iter}=$AI.kviterate_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'do {' + '\n' + '\x5e{this}=\x5e{elem}.value[1];' + '\n' + '\x5e{key}=\x5e{elem}.value[0];' + '\n' + '\x5e{block}' + '\n' + '\x5e{elem}=\x5e{iter}.next();' + '\n' + '} while (!\x5e{elem}.done);' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        case 'every.exprusing':
          _vars = {
            'task': _main.args.using,
            source: _main.args.expr,
            iter: false,
            elem: false,
            none: (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block))
          };
          _preface = 'var \x5e{iter}=$AI.kviterate_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'do {' + '\n' + '\x5e{task}(\x5e{elem}.value[1], \x5e{elem}.value[0]);' + '\n' + '\x5e{elem}=\x5e{iter}.next();' + '\n' + '} while (!\x5e{elem}.done);' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in EveryConstruct'
          });
          break;
      }
    } catch ($6) {
      $AI.debug_op($6);
    }
    return ({
      body: _text
    });
  }
};
var $4g = prototype['IndexedConstruct'] || function() {};
prototype['IndexedConstruct'] = function(p) {
  var $_d, $_c, $_b, $10, $9, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $8, $7, $ = this['IndexedConstruct'] ? this : $bindfail('IndexedConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IndexedConstruct\''); {
    if ($8 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: INDEX can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    if (!((_main.args.exprs.length === 2))) {
      return ({
        error: 'SAI Compiler: the INDEX construct requires two comma-separated expressions, the first is the array/object to traverse, the second an array of keys.'
      });
    }
    try {
      switch ($9 = (_main.type)) {
        case 'index.exprsoutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'rawlist': _main.args.exprs[0],
            'rawkeys': _main.args.exprs[1],
            'keys': false,
            'index': false,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            'list': ((undefined !== ($_b = _outs[2])) ? $_b : false),
            'length': false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{rawlist},\x5e{keys}=\x5e{rawkeys},\x5e{key};' + '\n' + 'if (undefined===\x5e{keys}) \x5e{keys}=[];' + '\n' + 'var \x5e{length}=\x5e{keys}.length,\x5e{index};' + '\n' + '';
          _loop = 'for (\x5e{index}=0; \x5e{index}<\x5e{length}; \x5e{index}++) {' + '\n' + '\x5e{key}=\x5e{keys}[\x5e{index}]; \x5e{this}=\x5e{list}[\x5e{key}];' + '\n' + '\x5e{block};' + '\n' + '}' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===0) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        case 'index.exprsusing':
          _vars = {
            'task': _main.args.using,
            'rawlist': _main.args.exprs[0],
            'rawkeys': _main.args.exprs[1],
            'index': false,
            'keys': false,
            'key': false,
            'list': false,
            'length': false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{rawlist},\x5e{keys}=\x5e{rawkeys},\x5e{key};' + '\n' + 'if (undefined===\x5e{keys}) \x5e{keys}=[];' + '\n' + 'var \x5e{length}=\x5e{keys}.length,\x5e{index};' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===0) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _loop = 'for (\x5e{index}=0; \x5e{index}<\x5e{length}; \x5e{index}++) {' + '\n' + '\x5e{key}=\x5e{keys}[\x5e{index}]; \x5e{task}(\x5e{list}[\x5e{key}],\x5e{key},\x5e{list});' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in IndexConstruct'
          });
          break;
      }
    } catch ($10) {
      $AI.debug_op($10);
    }
    return ({
      body: _text
    });
  }
};
var $5g = prototype['IterateConstruct'] || function() {};
prototype['IterateConstruct'] = function(p) {
  var $_d, $_c, $_b, $14, $13, _text, _loop, _elseclause, _preface, _vars, _outs, _none, _main, $12, $11, $ = this['IterateConstruct'] ? this : $bindfail('IterateConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IterateConstruct\''); {
    if ($12 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: ITERATE can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      switch ($13 = (_main.type)) {
        case 'iterate.exproutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            iter: false,
            elem: false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{iter}=$AI.iterator_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'for (var \x5e{key}=0; !\x5e{elem}.done; \x5e{elem}=\x5e{iter}.next()){' + '\n' + '\x5e{this}=\x5e{elem}.value;' + '\n' + '\x5e{block};' + '\n' + '\x5e{key}++;' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        case 'iterate.exprusing':
          _vars = {
            'task': _main.args.using,
            source: _main.args.expr,
            'key': false,
            iter: false,
            elem: false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{iter}=$AI.iterator_op(\x5e{source});' + '\n' + 'var \x5e{elem}=\x5e{iter}.next();' + '\n' + 'var \x5e{key}=0;' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('if (!\x5e{elem}.done)');
              } else {
                return ('if (\x5e{elem}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'do {' + '\n' + '\x5e{task}(\x5e{elem}.value, \x5e{key});' + '\n' + '\x5e{key}++;' + '\n' + '\x5e{elem}=\x5e{iter}.next();' + '\n' + '} while (!\x5e{elem}.done);' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in IterateConstruct'
          });
          break;
      }
    } catch ($14) {
      $AI.debug_op($14);
    }
    return ({
      body: _text
    });
  }
};
var $6g = prototype['EachConstruct'] || function() {};
prototype['EachConstruct'] = function(p) {
  var $_d, $_c, $_b, $18, $17, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $16, $15, $ = this['EachConstruct'] ? this : $bindfail('EachConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'EachConstruct\''); {
    if ($16 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: EACH can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      switch ($17 = (_main.type)) {
        case 'each.exproutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            'list': ((undefined !== ($_b = _outs[2])) ? $_b : false),
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{source},\x5e{key}=undefined;' + '\n' + 'if (undefined===\x5e{list}) \x5e{list}={};' + '\n' + '';
          _loop = 'for (\x5e{key} in \x5e{list}) {' + '\n' + '\x5e{this}=\x5e{list}[\x5e{key}];' + '\n' + '\x5e{block};' + '\n' + '}' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===undefined) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        case 'each.exprusing':
          _vars = {
            'task': _main.args.using,
            source: _main.args.expr,
            'key': false,
            'list': false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{source},\x5e{key}=undefined;' + '\n' + 'if (undefined===\x5e{list}) \x5e{list}={};' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===undefined) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _loop = 'for (\x5e{key} in \x5e{list}) {' + '\n' + '\x5e{task}(\x5e{list}[\x5e{key}],\x5e{key},\x5e{list});' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in EachConstruct'
          });
          break;
      }
    } catch ($18) {
      $AI.debug_op($18);
    }
    return ({
      body: _text
    });
  }
};
var $7g = prototype['PlyConstruct'] || function() {};
prototype['PlyConstruct'] = function(p) {
  var $_d, $_c, $_b, $22, $21, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $20, $19, $ = this['PlyConstruct'] ? this : $bindfail('PlyConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'PlyConstruct\''); {
    if ($20 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: PLY can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      switch ($21 = (_main.type)) {
        case 'ply.exproutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            'list': ((undefined !== ($_b = _outs[2])) ? $_b : false),
            'length': false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{source},\x5e{key};' + '\n' + 'if (undefined===\x5e{list}) \x5e{list}=[];' + '\n' + 'var \x5e{length}=\x5e{list}.length;' + '\n' + '';
          _loop = 'for (\x5e{key}=0; \x5e{key}<\x5e{length}; \x5e{key}++) {' + '\n' + '\x5e{this}=\x5e{list}[\x5e{key}];' + '\n' + '\x5e{block};' + '\n' + '}' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===0) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        case 'ply.exprusing':
          _vars = {
            'task': _main.args.using,
            source: _main.args.expr,
            'key': false,
            'list': false,
            'length': false,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{source},\x5e{key};' + '\n' + 'if (undefined===\x5e{list}) \x5e{list}=[];' + '\n' + 'var \x5e{length}=\x5e{list}.length;' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{key}===0) { \x5e{none} }' + '\n' + '');
              }
            }
          }();
          _loop = 'for (\x5e{key}=0; \x5e{key}<\x5e{length}; \x5e{key}++) {' + '\n' + '\x5e{task}(\x5e{list}[\x5e{key}],\x5e{key},\x5e{list});' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_loop + _elseclause)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in PlyConstruct'
          });
          break;
      }
    } catch ($22) {
      $AI.debug_op($22);
    }
    return ({
      body: _text
    });
  }
};
var $8g = prototype['WhileConstruct'] || function() {};
prototype['WhileConstruct'] = function(p) {
  var $_d, $_c, $_b, $25, $24, _text, _loop, _preface, _vars, _outs, _main, $23, $ = this['WhileConstruct'] ? this : $bindfail('WhileConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'WhileConstruct\''); {
    _main = p.clauses[0];
    try {
      switch ($24 = (_main.type)) {
        case 'while.exproutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr,
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false)
          };
          _preface = 'var \x5e{this};' + '\n' + '';
          _loop = 'while (\x5e{this}=(\x5e{source})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + _loop), _vars);
          break;
        case 'until.exproutblock':
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr
          };
          _loop = 'while (!(\x5e{source})) {' + '\n' + '\x5e{block}' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer(_loop, _vars);
          break;
        case 'dowhile.exproutblock':
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr
          };
          _loop = 'do {' + '\n' + '\x5e{block}' + '\n' + '} while (\x5e{source});' + '\n' + '';
          _text = p.tools.replacer(_loop, _vars);
          break;
        case 'dountil.exproutblock':
          _vars = {
            block: _main.args.block,
            'source': _main.args.expr
          };
          _loop = 'do {' + '\n' + '\x5e{block}' + '\n' + '} while (!(\x5e{source}));' + '\n' + '';
          _text = p.tools.replacer(_loop, _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in WhileConstruct'
          });
          break;
      }
    } catch ($25) {
      $AI.debug_op($25);
    }
    return ({
      body: _text
    });
  }
};
var $9g = prototype['CountConstruct'] || function() {};
prototype['CountConstruct'] = function(p) {
  var $_d, $_c, $_b, $30, $29, _text, _loop, _elseclause, _preface, _vars, $28, _iStep, _iStop, _iStart, _outs, _none, _main, $27, $26, $ = this['CountConstruct'] ? this : $bindfail('CountConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'CountConstruct\''); {
    if ($27 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: COUNT can have at most one ELSE clause.'
      });
    }
    _main = p.clauses[0];
    _none = p.clauses[1];
    try {
      _outs = $.OutVarHelper(_main.args.out);
      switch ($29 = (_main.type)) {
        case 'count.exprsoutblock':
          if (!(_main.args.exprs[0])) {
            return ({
              error: 'SAI Compiler: Missing end value in COUNT'
            });
          }
          _iStart = _main.args.exprs[0];
          _iStop = _main.args.exprs[1];
          _iStep = ((undefined !== ($_b = _main.args.exprs[2])) ? $_b : 1);
          if ($28 = ((undefined === _iStop))) {
            _iStop = _iStart;
            _iStart = 0;
          }
          _vars = {
            block: _main.args.block,
            'start': _iStart,
            'kstop': _iStop,
            'stop': false,
            'kstep': _iStep,
            'step': false,
            'counter': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{counter}=\x5e{start},\x5e{stop}=\x5e{kstop},\x5e{step}=\x5e{kstep};' + '\n' + 'if (\x5e{step}<=0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{counter}>=\x5e{stop}) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'for (; \x5e{counter}<\x5e{stop}; \x5e{counter}=\x5e{counter}+\x5e{step}) {' + '\n' + '\x5e{block};' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        case 'countdown.exprsoutblock':
          if (!(_main.args.exprs[0])) {
            return ({
              error: 'SAI Compiler: Missing start value in COUNTDOWN'
            });
          }
          _iStart = _main.args.exprs[0];
          _iStop = ((undefined !== ($_b = _main.args.exprs[1])) ? $_b : 0);
          _iStep = ((undefined !== ($_b = _main.args.exprs[2])) ? $_b : (0 - (1)));
          _vars = {
            block: _main.args.block,
            'start': _iStart,
            'kstop': _iStop,
            'stop': false,
            'kstep': _iStep,
            'step': false,
            'counter': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{stop}=\x5e{kstop},\x5e{step}=\x5e{kstep},\x5e{counter}=\x5e{start}+\x5e{step};' + '\n' + 'if (\x5e{step}>=0) throw new Error("SAI Runtime: COUNTDOWN STEP value should be negative.");' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{counter}<\x5e{stop}) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _loop = 'for (; \x5e{counter}>=\x5e{stop}; \x5e{counter}=\x5e{counter}+\x5e{step}) {' + '\n' + '\x5e{block};' + '\n' + '}' + '\n' + '';
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in CountConstruct'
          });
          break;
      }
    } catch ($30) {
      $AI.debug_op($30);
    }
    return ({
      body: _text
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
