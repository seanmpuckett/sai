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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-18T20:07:19.637Z"};
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
var $12g = prototype['OutVarHelper'] || function() {};
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
var $13g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"name":"IterateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/IterateC.sai","mtime":"2018-03-14T12:48:47.995Z","fetched":"2018-03-18T20:07:19.273Z"};
var isa = prototype.isa = 'IterateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['IterateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "FlowControlConstruct", "EveryConstruct", "IndexedConstruct", "IterateConstruct", "EachConstruct", "PlyConstruct", "WhileConstruct", "CountConstruct", "Documents", "isa"]);
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
Object.defineProperty(prototype, "docs", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $_d, $_c, $0, $ = this; {
      return ($.Documents());
      /*@:100*/
    }
  },
  set: undefined
});
var $3g = prototype['FlowControlConstruct'] || function() {};
prototype['FlowControlConstruct'] = function(p) {
  var $3, $2, _body, $1, $ = this['FlowControlConstruct'] ? this : $bindfail('FlowControlConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'FlowControlConstruct\''); {
    _body = '';
    /*@:110*/
    var $3 = p.clauses[0];
    switch ($2 = ($3.type)) {
      case 'break.none':
        _body = 'break;\n';
        /*@:115*/
        break;
      case 'continue.none':
        _body = 'continue;\n';
        /*@:118*/
        break;
      default:
        return ({
          error: 'SAI compiler: unhandled ' + $3.type + ' in FlowControlConstruct -- this is a compiler bug.'
        });
        /*@:121*/
        break;
    }; /*@:122*/
    return ({
      body: _body
    });
    /*@:123*/
  }
};
var $4g = prototype['EveryConstruct'] || function() {};
prototype['EveryConstruct'] = function(p) {
  var $_d, $_c, $_b, $7, $6, _text, _loop, _elseclause, _preface, _vars, _outs, _none, _main, $5, $4, $ = this['EveryConstruct'] ? this : $bindfail('EveryConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'EveryConstruct\''); {
    if ($5 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: EVERY can have at most one ELSE clause.'
      });
      /*@:135*/
    }
    /*@:136*/
    _main = p.clauses[0];
    /*@:137*/
    _none = p.clauses[1];
    /*@:138*/
    try {
      switch ($6 = (_main.type)) {
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
          /*@:211*/
          break;
      }
    } catch ($7) {
      $AI.debug_op($7);
      /*@:214*/
    }
    /*@:215*/
    return ({
      body: _text
    });
    /*@:216*/
  }
};
var $5g = prototype['IndexedConstruct'] || function() {};
prototype['IndexedConstruct'] = function(p) {
  var $_d, $_c, $_b, $11, $10, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $9, $8, $ = this['IndexedConstruct'] ? this : $bindfail('IndexedConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IndexedConstruct\''); {
    if ($9 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: INDEX can have at most one ELSE clause.'
      });
      /*@:227*/
    }
    /*@:228*/
    _main = p.clauses[0];
    /*@:229*/
    _none = p.clauses[1];
    /*@:230*/
    if (!((_main.args.exprs.length === 2))) {
      return ({
        error: 'SAI Compiler: the INDEX construct requires two comma-separated expressions, the first is the array/object to traverse, the second an array of keys.'
      });
      /*@:233*/
    }
    /*@:234*/
    try {
      switch ($10 = (_main.type)) {
        case 'index.exprsoutblock':
          _outs = $.OutVarHelper(_main.args.out);
          _vars = {
            'rawlist': _main.args.exprs[0],
            'rawkeys': _main.args.exprs[1],
            'this': ((undefined !== ($_b = _outs[0])) ? $_b : false),
            'key': ((undefined !== ($_b = _outs[1])) ? $_b : false),
            'list': ((undefined !== ($_b = _outs[2])) ? $_b : false),
            'iterator': false,
            'next': false,
            'block': _main.args.block,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{rawlist},\x5e{key},' + '\n' + '    \x5e{iterator}=$AI.kviterate_op(\x5e{rawkeys});' + '\n' + '    \x5e{next}=\x5e{iterator}.next();' + '\n' + '';
          _loop = 'while (!\x5e{next}.done) {' + '\n' + '  \x5e{key}=\x5e{next}.value[1]; \x5e{this}=\x5e{list}[\x5e{key}];' + '\n' + '  \x5e{block};' + '\n' + '  \x5e{next}=\x5e{iterator}.next();' + '\n' + '}' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{next}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        case 'index.exprsusing':
          _vars = {
            'rawlist': _main.args.exprs[0],
            'rawkeys': _main.args.exprs[1],
            'list': false,
            'iterator': false,
            'next': false,
            'fn': _main.args.using,
            none: ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_none)) ? undefined : ($_b.args)))) ? undefined : ($_b.block)))) ? $_b : false)
          };
          _preface = 'var \x5e{list}=\x5e{rawlist},' + '\n' + '    \x5e{iterator}=$AI.kviterate_op(\x5e{rawkeys});' + '\n' + '    \x5e{next}=\x5e{iterator}.next();' + '\n' + '';
          _loop = 'while (!\x5e{next}.done) {' + '\n' + '  \x5e{fn}(\x5e{list}[\x5e{next}.value[1]],\x5e{next}.value[1],\x5e{list});' + '\n' + '  \x5e{next}=\x5e{iterator}.next();' + '\n' + '}' + '\n' + '';
          _elseclause = function(p) {
            {
              if (!(_none)) {
                return ('');
              } else {
                return ('if (\x5e{next}.done) { \x5e{none} } else' + '\n' + '');
              }
            }
          }();
          _text = p.tools.replacer((_preface + (_elseclause + _loop)), _vars);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + _main.type + ' in IndexConstruct'
          });
          /*@:307*/
          break;
      }
    } catch ($11) {
      $AI.debug_op($11);
      /*@:310*/
    }
    /*@:311*/
    return ({
      body: _text
    });
    /*@:312*/
  }
};
var $6g = prototype['IterateConstruct'] || function() {};
prototype['IterateConstruct'] = function(p) {
  var $_d, $_c, $_b, $15, $14, _text, _loop, _elseclause, _preface, _vars, _outs, _none, _main, $13, $12, $ = this['IterateConstruct'] ? this : $bindfail('IterateConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'IterateConstruct\''); {
    if ($13 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: ITERATE can have at most one ELSE clause.'
      });
      /*@:323*/
    }
    /*@:324*/
    _main = p.clauses[0];
    /*@:325*/
    _none = p.clauses[1];
    /*@:326*/
    try {
      switch ($14 = (_main.type)) {
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
          /*@:401*/
          break;
      }
    } catch ($15) {
      $AI.debug_op($15);
      /*@:404*/
    }
    /*@:405*/
    return ({
      body: _text
    });
    /*@:406*/
  }
};
var $7g = prototype['EachConstruct'] || function() {};
prototype['EachConstruct'] = function(p) {
  var $_d, $_c, $_b, $19, $18, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $17, $16, $ = this['EachConstruct'] ? this : $bindfail('EachConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'EachConstruct\''); {
    if ($17 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: EACH can have at most one ELSE clause.'
      });
      /*@:417*/
    }
    /*@:418*/
    _main = p.clauses[0];
    /*@:419*/
    _none = p.clauses[1];
    /*@:420*/
    try {
      switch ($18 = (_main.type)) {
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
          /*@:487*/
          break;
      }
    } catch ($19) {
      $AI.debug_op($19);
      /*@:490*/
    }
    /*@:491*/
    return ({
      body: _text
    });
    /*@:492*/
  }
};
var $8g = prototype['PlyConstruct'] || function() {};
prototype['PlyConstruct'] = function(p) {
  var $_d, $_c, $_b, $23, $22, _text, _elseclause, _loop, _preface, _vars, _outs, _none, _main, $21, $20, $ = this['PlyConstruct'] ? this : $bindfail('PlyConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'PlyConstruct\''); {
    if ($21 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: PLY can have at most one ELSE clause.'
      });
      /*@:503*/
    }
    /*@:504*/
    _main = p.clauses[0];
    /*@:505*/
    _none = p.clauses[1];
    /*@:506*/
    try {
      switch ($22 = (_main.type)) {
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
          /*@:577*/
          break;
      }
    } catch ($23) {
      $AI.debug_op($23);
      /*@:580*/
    }
    /*@:581*/
    return ({
      body: _text
    });
    /*@:582*/
  }
};
var $9g = prototype['WhileConstruct'] || function() {};
prototype['WhileConstruct'] = function(p) {
  var $_d, $_c, $_b, $26, $25, _text, _loop, _preface, _vars, _outs, _main, $24, $ = this['WhileConstruct'] ? this : $bindfail('WhileConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'WhileConstruct\''); {
    _main = p.clauses[0];
    /*@:591*/
    try {
      switch ($25 = (_main.type)) {
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
          /*@:661*/
          break;
      }
    } catch ($26) {
      $AI.debug_op($26);
      /*@:664*/
    }
    /*@:665*/
    return ({
      body: _text
    });
    /*@:666*/
  }
};
var $10g = prototype['CountConstruct'] || function() {};
prototype['CountConstruct'] = function(p) {
  var $_d, $_c, $_b, $31, $30, _text, _loop, _elseclause, _preface, _vars, $29, _iStep, _iStop, _iStart, _outs, _none, _main, $28, $27, $ = this['CountConstruct'] ? this : $bindfail('CountConstruct');
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'CountConstruct\''); {
    if ($28 = ((p.clauses.length > 2))) {
      return ({
        error: 'SAI compile: COUNT can have at most one ELSE clause.'
      });
      /*@:676*/
    }
    /*@:677*/
    _main = p.clauses[0];
    /*@:678*/
    _none = p.clauses[1];
    /*@:679*/
    try {
      _outs = $.OutVarHelper(_main.args.out);
      /*@:683*/
      switch ($30 = (_main.type)) {
        case 'count.exprsoutblock':
          if (!(_main.args.exprs[0])) {
            return ({
              error: 'SAI Compiler: Missing end value in COUNT'
            });
            /*@:692*/
          }
          /*@:693*/
          _iStart = _main.args.exprs[0];
          _iStop = _main.args.exprs[1];
          _iStep = ((undefined !== ($_b = _main.args.exprs[2])) ? $_b : 1);
          /*@:698*/
          if ($29 = ((undefined === _iStop))) {
            _iStop = _iStart;
            /*@:700*/
            _iStart = 0;
            /*@:701*/
          }
          /*@:702*/
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
            /*@:735*/
          }
          /*@:736*/
          _iStart = _main.args.exprs[0];
          _iStop = ((undefined !== ($_b = _main.args.exprs[1])) ? $_b : 0);
          _iStep = ((undefined !== ($_b = _main.args.exprs[2])) ? $_b : (0 - (1)));
          /*@:741*/
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
          /*@:772*/
          break;
      }
    } catch ($31) {
      $AI.debug_op($31);
      /*@:775*/
    }
    /*@:776*/
    return ({
      body: _text
    });
    /*@:777*/
  }
};
var $11g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $32, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'every': {
          subtitle: 'general-purpose collection iterator',
          summary: '**Every** is a general-purpose iterator that can handle any collection -- array, object or iterable -- or a even single value (which case it executes the block once).',
          detail: '__Every__ steps through each element of the collection, in order if possible (array, iterable), in' + '\n' + 'random order otherwise (objects), setting **it** and **key** pronouns, and executing the code block.' + '\n' + '' + '\n' + 'The **key** pronoun will be the index number for arrays, the attribute name for objects, or a row' + '\n' + 'counter for iterables. It will be `0` for the single pass granted a single value.' + '\n' + '' + '\n' + 'If the collection is empty, executes the (optional) **else** block instead.' + '\n' + '' + '\n' + '    set friend to friends first' + '\n' + '    every friend' + '\n' + '      debug `$\{key}: $\{it}' + '\n' + '    else' + '\n' + '      debug `You have no friends.' + '\n' + '' + '\n' + '    > name: Jon' + '\n' + '    > age: 19' + '\n' + '    > cat: true' + '\n' + '    > dog: true' + '\n' + '    > province: QC' + '\n' + '' + '\n' + 'Recall that you can rename **it** and **key** with the **as** clause:' + '\n' + '' + '\n' + '    every friend as value, fieldname' + '\n' + '      debug `$\{fieldname}: $\{value}' + '\n' + '' + '\n' + '' + '\n' + '_Note:_ there is a slight performance penalty associated with using __every__ instead of a more specific iterator, as SAI must wrap the collection in a thin iteration in order to generically handle all cases. It is, however, very useful when you are not sure what kind of collection you\'ll be working with.' + '\n' + '' + '\n' + '#### every ... using' + '\n' + '' + '\n' + '**Every** can also call out to a function with the **every ... using** variation.' + '\n' + '' + '\n' + '    set handler to task given value, field' + '\n' + '      debug `$\{field}: $\{value}' + '\n' + '' + '\n' + '    every friend using handler' + '\n' + '' + '\n' + 'The function is called for each attribute of the collection with two parameters:' + '\n' + '' + '\n' + '   - attribute value (e.g. __it__)' + '\n' + '   - attribute name (e.g. __key__)' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'iterate': {
          subtitle: 'sequentially examine values from a generator/iterator',
          summary: 'The **iterate** statement steps through each value in an _iterable expression_.' + '\n' + 'This can be an object with fields/traits, an array/list with numbered elements, or a passive' + '\n' + 'iterator/generator that **yield**s values for iteration.',
          detail: 'What’s an iterable expression?  It’s an object that **yield**s values for iteration, or an object that' + '\n' + 'on demand (via call to **[Symbol.iterator]** produces such an expression. (In ES6, native collection' + '\n' + 'types based on **Array**, **Map**, and **Set** support lazy iteration.)' + '\n' + '' + '\n' + 'This construct steps through each result of an _iterable expression_, passing it through a block' + '\n' + 'of code via the **it** pronoun.  If an **else** clause is present, that code is executed only if there is' + '\n' + 'no iteration.' + '\n' + '' + '\n' + 'Even though generators don\'t provide a key to match the value, when using a generator **iterate**' + '\n' + 'nevertheless provides **key**, giving you the row number of each value returned.' + '\n' + '' + '\n' + '    set seen to new ~Set' + '\n' + '    seen.add \'horse\'' + '\n' + '    seen.add \'pig\'' + '\n' + '    seen.add \'horse\'' + '\n' + '    iterate seen' + '\n' + '      debug \'$\{key} - $\{it}\'' + '\n' + '' + '\n' + '    > 0 - horse' + '\n' + '    > 1 - pig' + '\n' + '' + '\n' + '#### iterate ... using' + '\n' + '' + '\n' + 'This variation calls the given function with two parameters, the iteration value and the current row number:' + '\n' + '' + '\n' + '    set fruit list Apple, Banana, Citron, Durian' + '\n' + '    set SeeFunctionParameters to task' + '\n' + '      debug $$' + '\n' + '' + '\n' + '    iterate (fruit iterate) using SeeFunctionParameters' + '\n' + '' + '\n' + '    > { \'0\': \'Apple\', \'1\': 0 }' + '\n' + '    > { \'0\': \'Banana\', \'1\': 1 }' + '\n' + '    > { \'0\': \'Citron\', \'1\': 2 }' + '\n' + '    > { \'0\': \'Durian\', \'1\': 3 }' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'each': {
          subtitle: 'object attribute enumeration',
          summary: '**Each** uses Javascript\'s `for-in` loop construct to iterate through an object\'s' + '\n' + 'enumerable properties. It steps through each element of the collection, in arbitrary' + '\n' + 'order, setting **it** and **key** variables, and executing the code block for each one.' + '\n' + 'If the collection is empty, executes the (optional) **else** block instead.',
          detail: 'Example:' + '\n' + '' + '\n' + '    set friend to friends | first' + '\n' + '    each friend' + '\n' + '      debug `$\{key}: $\{it}' + '\n' + '    else' + '\n' + '      debug `You have no friends.' + '\n' + '' + '\n' + '    > name: Jon' + '\n' + '    > age: 19' + '\n' + '    > cat: true' + '\n' + '    > dog: true' + '\n' + '    > province: QC' + '\n' + '' + '\n' + 'Recall that you can rename **it** and **key** with the **as** clause:' + '\n' + '' + '\n' + '    each friend as value, field' + '\n' + '      debug `$\{field}: $\{value}' + '\n' + '' + '\n' + '#### each ... using' + '\n' + '' + '\n' + '**Each** can also call out to a function with the **each using** variation.' + '\n' + '' + '\n' + '    set handler to task given value, field, collection' + '\n' + '      debug `$\{field}: $\{value}' + '\n' + '' + '\n' + '    each friend using handler' + '\n' + '' + '\n' + 'The function is called for each attribute of the collection with three parameters:' + '\n' + '' + '\n' + ' - attribute value (e.g. __it__)' + '\n' + ' - attribute name (e.g. __key__)' + '\n' + ' - reference to the collection itself' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'index': {
          subtitle: 'custom order iterator',
          summary: '__Index__ iterates through an array or object sequentially using a separately provided collection of' + '\n' + 'keys. The index is stepped through one row at a time, and the value of the object with that index is' + '\n' + 'presented in the enclosed block of code.',
          detail: 'You provide a collection, and the index, separated by a comma.' + '\n' + '' + '\n' + '    index [collection], [index]' + '\n' + '' + '\n' + 'In pseudo-code, this happens:' + '\n' + '' + '\n' + '    ply index as key' + '\n' + '      with collection\key as it' + '\n' + '        [ code ]' + '\n' + '' + '\n' + 'A real example:' + '\n' + '' + '\n' + '    set fruit to traits a Apple, b Banana, c Cherry' + '\n' + '    index fruit, list b, c, a, c' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > Banana' + '\n' + '    > Cherry' + '\n' + '    > Apple' + '\n' + '    > Cherry' + '\n' + '' + '\n' + 'It is relatively easy to synthesize the function of __index__ using a normal iterator and __with__,' + '\n' + 'nevertheless it is such a common pattern it makes sense to abstract it slightly for better clarity.' + '\n' + '' + '\n' + '__Index__ can accept an iterator as the index, in which case it will be stepped through until it is' + '\n' + 'exhausted (or you  __break__ out of the loop).' + '\n' + '' + '\n' + 'If the index requests a key that does not exist in the collection, __undefined__ is presented to the block.' + '\n' + 'In other words, missing values are neither skipped nor thrown as an error.' + '\n' + '' + '\n' + '#### index using' + '\n' + '' + '\n' + '__Index__ also offers the __using__ variant, where a function is called rather than a block of code executed.' + '\n' + '' + '\n' + '    set tally blank' + '\n' + '    set Tally to task as name' + '\n' + '      inc tally\name' + '\n' + '' + '\n' + '    set fruit to traits a Apple, b Banana, c Cherry' + '\n' + '    index fruit, list b, c, a, c' + '\n' + '      Tally it' + '\n' + '' + '\n' + '    debug tally' + '\n' + '' + '\n' + '    > { Banana: 1, Cherry: 2, Apple: 1 }' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'ply': {
          subtitle: 'iterate over an array-like collection',
          summary: 'The **ply** iterator sequentially steps through all elements in an _array-like_ collection;' + '\n' + 'it works on any object that has a **length** trait.' + '\n' + 'It accesses numeric traits from 0 to **length**-1, sending each trait value to the code' + '\n' + 'block or function. If **length** is 0, the **else** clause is invoked instead.',
          detail: 'The trait value is captured in the **it** pronoun, and the trait number is captured as **key**.' + '\n' + '' + '\n' + '    ply fruit' + '\n' + '      debug \'$\{key}: $\{it}\'' + '\n' + '    else' + '\n' + '      debug \'There is no fruit.\'' + '\n' + '' + '\n' + '    > 0: Apple' + '\n' + '    > 1: Banana' + '\n' + '    > 2: Citron' + '\n' + '' + '\n' + '#### ply ... using' + '\n' + '' + '\n' + '**Ply** can also call out to a function with the **ply using** variation.' + '\n' + '' + '\n' + '  set handler to task given value, field, collection' + '\n' + '    debug `$\{field}: $\{value}' + '\n' + '' + '\n' + '  ply fruit using handler' + '\n' + '' + '\n' + 'The function is called for each element of the array with three parameters:' + '\n' + '' + '\n' + ' - element value (__it__)' + '\n' + ' - element index # (__key__)' + '\n' + ' - a reference to the array itself' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'while': {
          subtitle: 'loop over a block of code while an expression is true',
          summary: 'Executes the code block repeatedly, as long as the expression is true.',
          detail: 'The basic **while** variation performs the test first, so there is a chance the code will not execute.' + '\n' + 'The **dowhile** variation executes the block first, then performs the test.' + '\n' + '' + '\n' + '    while false' + '\n' + '      debug \'You will never see this.\'' + '\n' + '' + '\n' + '    dowhile false' + '\n' + '      debug \'You will see this once.\'' + '\n' + '' + '\n' + '**While** makes its value available for use as **it**, as below.' + '\n' + '' + '\n' + '    while file.NextLine()' + '\n' + '      @story.push it' + '\n' + '' + '\n' + '**Dowhile** _does not_ use **it**, because the expression is not evaluated until after the first pass' + '\n' + 'through the code, thus the first **it** result would always be **undefined**.' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'until': {
          subtitle: 'loop over a block of code while an expression is false',
          summary: 'Executes the code block repeatedly, as long as the expression is false. This is essentially' + '\n' + 'a **while** statement with the test inverted.',
          detail: 'The basic **until** variation performs the test first, so there is a chance the code will not execute.' + '\n' + 'The **dountil** variation executes the block first, then performs the test.' + '\n' + '' + '\n' + '    until true' + '\n' + '      debug \'You will never see this.\'' + '\n' + '' + '\n' + '    dountil true' + '\n' + '      debug \'You will see this once.\'' + '\n' + '' + '\n' + '**Until** _does not_ make its test value available for use as **it**. Because the code block' + '\n' + 'only executes when the test value is _falsy_, there’s really no point.' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'dowhile': {
          subtitle: 'while variant that always executes the loop once',
          summary: 'Functions just like the __while__ loop, except that the block of code is always executed once _first_,' + '\n' + 'before the test.',
          detail: 'Check out these wacky examples.' + '\n' + '' + '\n' + '    dountil true' + '\n' + '      debug \'Hello, World!\'' + '\n' + '' + '\n' + '    dowhile false' + '\n' + '      debug \'Hello, World!\'' + '\n' + '' + '\n' + 'Note there\'s no space in there. It\'s __dowhile__ and __dountil__. Makes parsing easier when it\'s one word.' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.  See __while__ for more.' + '\n' + '' + '\n' + ''
        },
        'dountil': {
          subtitle: 'until variant that always executes the loop once',
          summary: 'Functions just like the __until__ loop, except that the block of code is always executed once _first_,' + '\n' + 'before the test.',
          detail: 'I could duplicate text here or just refer you to __dowhile__ and __while__.  Which would you like?' + '\n' + '' + '\n' + ''
        },
        'break': {
          subtitle: 'exit a loop or switch case',
          summary: 'To exit a loop, iterator or switch case before its natural end, use the **break** keyword.',
          detail: 'As in:' + '\n' + '' + '\n' + '    ply collection' + '\n' + '      unless FileExists(collection)' + '\n' + '        break' + '\n' + '' + '\n' + 'or ..' + '\n' + '' + '\n' + '    switch choice' + '\n' + '    case \'exit\'' + '\n' + '      if exiting' + '\n' + '        break' + '\n' + '      set exiting true' + '\n' + '      ...' + '\n' + '' + '\n' + 'or ...' + '\n' + '' + '\n' + '    count 5' + '\n' + '      debug it' + '\n' + '      if it=2' + '\n' + '        debug \'Nevermind...\'' + '\n' + '        break' + '\n' + '' + '\n' + '    > 1' + '\n' + '    > 2' + '\n' + '    > Nevermind…' + '\n' + '' + '\n' + ''
        },
        'continue': {
          subtitle: 'shortcut to the next iteration of a loop',
          summary: 'In a loop or otherwise iterating block of code, **continue** short-cuts the remaining code in' + '\n' + 'the block, causing the loop to continue its next iteration immediately.',
          detail: 'An example:' + '\n' + '' + '\n' + '    count 10' + '\n' + '      unless key % 2' + '\n' + '        continue' + '\n' + '      debug key' + '\n' + '' + '\n' + '    > 1' + '\n' + '    > 3' + '\n' + '    > 5' + '\n' + '    > 7' + '\n' + '    > 9' + '\n' + '' + '\n' + ''
        },
        'count': {
          subtitle: 'numerically controlled looping',
          summary: 'In this most basic kind of loop, a block of code is executed a certain number of times with a counter' + '\n' + 'keeping track of iteration count. More complexity is available if needed.',
          detail: 'Specifically designed as an integer iterator for list elements, **count** always counts 1 at a time' + '\n' + '(unless a **step** value is provided), and its highest value is always the step value less than the' + '\n' + 'high value provided (both when counting up and down).' + '\n' + '' + '\n' + 'To reiterate, **count** _never_ outputs the high value.' + '\n' + '' + '\n' + 'Variants:' + '\n' + '' + '\n' + '    count [low expr], [high expr] ( as [counter ident] )' + '\n' + '    count [low expr], [high expr], [step amount expr] ( as [counter ident] )' + '\n' + '' + '\n' + '    countdown [high expr] ( as [counter ident] )' + '\n' + '    countdown [high expr], [low expr] ( as [counter ident])' + '\n' + '    countdown [high expr], [low expr],  [step expr] ( as [counter ident])' + '\n' + '' + '\n' + '**Count** uses the pronoun **counter** for the value.' + '\n' + '' + '\n' + '    count 10' + '\n' + '      debug counter' + '\n' + '    .. counts from 0 to 9' + '\n' + '' + '\n' + '    count 5, 10' + '\n' + '    ... numbers 5 to 9' + '\n' + '' + '\n' + '    countdown 10 as i' + '\n' + '    ... numbers from 9 to 0' + '\n' + '' + '\n' + '    countdown 25, 15' + '\n' + '    ... numbers 24 to 15' + '\n' + '' + '\n' + '    count 0, 50, 10' + '\n' + '    ... 0, 10, 20, 30, 40' + '\n' + '' + '\n' + '    countdown 45, 0, -10' + '\n' + '    ... 35, 25, 15, 5' + '\n' + '' + '\n' + 'When using a step with **count down**, be sure that the step expression is negative, otherwise an infinite loop will result.' + '\n' + '' + '\n' + '    count aList.length' + '\n' + '      debug \'List element $\{counter} is $\{aList[counter]}\'' + '\n' + '    else' + '\n' + '      debug \'The list is empty.\'' + '\n' + '' + '\n' + 'The optional **else** clause is executed instead of the main block if the **count** range length computes to 0 (or less).' + '\n' + '' + '\n' + 'You can use __break__ to exit out of the loop prematurely, and __continue__ to shortcut to the start.' + '\n' + 'See the documentation on these terms for more.' + '\n' + '' + '\n' + ''
        },
        'countdown': {
          subtitle: 'numerically controlled looping in reverse',
          summary: 'Very similar to __count__ except that __countdown__ is designed to operate with a negative step. That is,' + '\n' + 'the first value will be higher than the last value.',
          detail: 'See the entry for __count__ for details.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
