#!/usr/bin/env node

// Javascript source for sai transipled by SAI
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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-04T16:32:04.875Z","fetched":"2018-03-04T16:32:07.487Z"};
var _FS = require('fs');
var _PATH = require('path');
var _SAILIB = require('sai-library');
var _DIRNAME = __dirname;
var _INDENT = '%%INDENT%%';
var _DEDENT = '%%DEDENT%%';
var _DEFAULT_config = {
  verbs: {
    'debug': '$AI.debug_op',
    'require': 'require',
    'assert': '$AI.assert',
    'Error': 'Error',
    'Math': 'Math'
  },
  constructs: [{}],
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true
  },
  Loader: ['default source loader linked later in file']
};
var isa = prototype.isa = 'SAI';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SAI'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'Clean'", "'StateConstruct'", "'PromisingConstruct'", "'Dedenter'", "'WrapExtract'", "'Contextualize'", "'GetParser'", "'GetSourceFromPaths'", "'Compile'", "'GetProtogen'", "'Expression'", "'GetAncestors'", "'GetPrototype'", "'GetSource'", "'Require'", "'Create'", "'Configure'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    prototypes: {},
    sources: {},
    protogens: {},
    isas: {},
    config: undefined,
    persist: {
      globalcount: 1
    },
    protoConstructor: undefined,
    Parse: undefined,
    Beautify: undefined
  };
}
for (var i in $1g()) {
  prototype[i] = undefined;
};
var $2g = prototype.Constructor || function() {};
prototype.Constructor = function() {
  $2g.call(this);
  var t = $1g();
  for (var i in t)
    if (t[i] !== undefined) this[i] = t[i];
};
var $3g = prototype['Instantiate'] || function() {};
prototype['Instantiate'] = function(p) {
  var $_d, $_c, $ = this['Instantiate'] ? this : $bindfail('Instantiate'); {
    $.Clean();
  }
};
var $4g = prototype['Clean'] || function() {};
prototype['Clean'] = function(p) {
  var $_d, $_c, $0, $ = this['Clean'] ? this : $bindfail('Clean'); {
    $.prototypes = {};
    $.sources = {};
    $.protogens = {};
    $.isas = {};
    $.config = $AI.clone_op(_DEFAULT_config);
    $.persist = {
      globalcount: 1
    };
    $.protoConstructor = function(p) {
      {
        this.Constructor = function(p) {
          {;
          }
        };
        this.__tobelocked = [];
        this.__tobefrozen = [];
        this.__contracts = [];
        this.__unverified = true;
        this.isof = {};
        return this;
      }
    };
    $.Parse = $.GetParser();
    $.config.Loader = $.GetSourceFromPaths.bind($);
    _SAILIB.import = $.Require.bind($);
    _SAILIB.create_op = $.Create.bind($);
    $.config.constructs = {
      promising: {
        repeats: false,
        clauses: {
          promising: {
            verb: true,
            block: true
          },
          then: {
            verb: true,
            block: true
          },
          catch: {
            verb: true,
            block: true
          },
          finally: {
            verb: true,
            block: true
          },
          all: {
            exprs: true,
            none: true
          },
          any: {
            exprs: true,
            none: true
          },
          resolving: {
            exprs: true,
            none: true
          },
          rejecting: {
            exprs: true,
            none: true
          },
          finalizing: {
            none: true
          }
        },
        handler: function() {
          return ($.PromisingConstruct).apply($, arguments);
        }
      },
      state: {
        repeats: true,
        clauses: {
          state: {
            exprblock: true
          }
        },
        handler: function() {
          return ($.StateConstruct).apply($, arguments);
        }
      }
    };
  }
};
var $5g = prototype['StateConstruct'] || function() {};
prototype['StateConstruct'] = function(p) {
  var $_d, $_c, _body, $9, $8, $7, $6, $3, _block, $2, _name, _states, _names, _trailer, _header, _tools, $1, _work = p,
    $ = this['StateConstruct'] ? this : $bindfail('StateConstruct'); {
    _tools = _work.tools;
    _header = 'var \x5e{temp}=function (){' + '\n' + 'var _goto,_then;' + '\n' + 'var $states={' + '\n' + '';
    _header = _tools.replacer(_header, {
      temp: undefined
    });
    _trailer = '}' + '\n' + '  var $getstatefn=function(state) {' + '\n' + '    return $AI.assert($states[state],"SAI runtime: STATE "+state+" does not exist; available states are "+$AI.keys_op($states).join(\',\'));' + '\n' + '  }' + '\n' + '  _goto=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    var fn=undefined;' + '\n' + '    var l=arguments.length, args=new Array(l-1);' + '\n' + '    for (var li=1; li<l; li++) args[li-1]=arguments[li];' + '\n' + '    fn=function(){statefn.apply(undefined,args)};' + '\n' + '    setImmediate(fn);' + '\n' + '  };' + '\n' + '  _then=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    return function(){statefn.apply(undefined,arguments);};' + '\n' + '  };' + '\n' + '  _goto(' + _work.clauses[0].args[1] + ');' + '\n' + '}();' + '\n' + '';
    _names = {};
    _states = [];
    var $8 = _work.clauses;
    if (undefined === $8) $8 = [];
    for (var $7 in $8) {
      var $6 = $8[$7];
      switch ($3 = ($6.type)) {
        case ('state.exprblock'):
          _name = $6.args[1];
          if (($2 = (_names[_name]))) {
            return {
              error: 'SAI compile: duplicate state ' + _name + ' in STATE construct'
            };
          }
          _names[_name] = (_names[_name] || 0) + 1;
          _block = _tools.tasker({
            'as': $6.args[2],
            block: $6.args[3],
            kind: 'function'
          });
          _states.push('' + _name + ':' + _block);
          break;
      }
    }
    _tools.addlocal('_goto');
    _tools.addlocal('_then');
    _body = '' + _header + _states.join(',') + _trailer;
    return {
      body: _body
    };
  }
};
var $6g = prototype['PromisingConstruct'] || function() {};
prototype['PromisingConstruct'] = function(p) {
  var $_d, $_c, $19, $18, $17, $16, $13, _block, _body, $12, _options, _tasker, $10, _work = p,
    $ = this['PromisingConstruct'] ? this : $bindfail('PromisingConstruct'); {
    var $11 = $AI.element_op($AI.slice_op((_work.clauses), -1, undefined), 0).clause;
    if (!((($11 === 'finally') || (($11 === 'catch') || (($11 === 'rejecting') || ($11 === 'finalizing')))))) {
      return {
        error: 'SAI compiler: final clause in PROMISING must be CATCH, FINALLY, REJECTING or FINALIZING, not ' + $11.toUpperCase()
      };
    }
    _tasker = function(p) {
      {
        _options = {
          'as': p.args[1],
          block: p.args[2],
          kind: 'function',
          execute: p.execute
        };
        if (($12 = (p.ispromise))) {
          _options = $AI.update_op(_options, {
            preface: 'return new Promise(function($_resolve,$_reject) {',
            postface: 'if ($_resolve) return $_resolve();})'
          });
        }
        return _work.tools.tasker(_options);
      }
    };
    _body = 'var $tthen=function(t){if (!t || !t.then) throw new Error("SAI Runtime: THEN should be followed by a verb returning a promise (or an indented block of code)."); return t;};\n';
    var $18 = _work.clauses;
    if (undefined === $18) $18 = [];
    for (var $17 in $18) {
      var $16 = $18[$17];
      switch ($13 = ($16.type)) {
        case ('promising.verb'):
          _body += '$tthen(' + $16.args[1] + ')';
          break;
        case ('promising.block'):
          _block = _tasker({
            args: $16.args,
            ispromise: true,
            execute: true
          });
          _body += '(' + _block + ')';
          break;
        case ('then.verb'):
          _body += '.then(function(p){return $tthen(' + $16.args[1] + ');})';
          break;
        case ('then.block'):
          _block = _tasker({
            args: $16.args,
            ispromise: true
          });
          _body += '.then(' + _block + ')';
          break;
        case ('catch.verb'):
          _body += '.catch(function(p){return $tthen(' + $16.args[1] + ');})';
          break;
        case ('catch.block'):
          _block = _tasker({
            args: $16.args
          });
          _body += '.catch(' + _block + ')';
          break;
        case ('finally.verb'):
          _body += '.finally(function(p){return $tthen(' + $16.args[1] + ');})';
          break;
        case ('finally.block'):
          _block = _tasker({
            args: $16.args
          });
          _body += '.finally(' + _block + ')';
          break;
        case ('resolving.exprs'):
          _body += '.then(function(p){return $_resolve(' + $16.args[1][1] + ');})';
          break;
        case ('resolving.none'):
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          break;
        case ('rejecting.exprs'):
          _body += '.catch(function(p){return $_reject(' + $16.args[1][1] + ');})';
          break;
        case ('rejecting.none'):
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case ('finalizing.none'):
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case ('all.exprs'):
          _body += '.then(function(p){return Promise.all(' + $16.args[1][1] + ');})';
          break;
        case ('all.none'):
          _body += '.then(function(){return Promise.all.apply(null,arguments);})';
          break;
        case ('any.exprs'):
          _body += '.then(function(p){return Promise.any(' + $16.args[1][1] + ');})';
          break;
        case ('any.none'):
          _body += '.then(function(){return Promise.any.apply(null,arguments);})';
          break;
        default:
          return {
            error: 'SAI compiler: PROMISING construct unhandled type ' + $16.type
          };
          break;
      }
    }
    _body += ';\n';
    return {
      body: _body
    };
  }
};
var $7g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $43, $42, $41, $37, $36, $35, $34, $33, $32, $31, $30, $29, _heredoc, _isBlank, _isComment, _trimmed, $28, _depth, $27, _trail, _line, $26, $25, $24, $23, $21, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $20, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $23 = (_lineno - 3),
          $22 = (_lineno + 4);
        for (; $23 < $22; $23 += 1) {
          if (undefined !== ($21 = (_rawlines[$23]))) {
            _result += '' + $23 + ':' + ((($23 === _lineno)) ? ('->') : ('  ')) + ' ' + $21 + '\n';
          }
        }
        return _result;
      }
    };
    if (($26 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2))))) {
      _rawlines.shift();
    }
    var $41 = _rawlines;
    if (undefined === $41) $41 = [];
    var $40 = $41.length;
    if ($40) {
      var _line, _lineno = 0;
      for (; _lineno < $40; _lineno++) {
        _line = $41[_lineno];
        _trail = _line.length;
        var $27;
        while ($27 = ((' ' === _line[(_trail - 1)]))) {
          _trail--;;
        }
        _line = $AI.slice_op((_line), 0, _trail);
        _depth = 0;
        var $28;
        while ($28 = ((' ' === _line[_depth]))) {
          _depth = (_depth || 0) + 1;;
        }
        _trimmed = $AI.slice_op((_line), _depth, undefined);
        _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
        _isBlank = (0 === _trimmed.length);
        if (!((_isComment || _isBlank))) {
          _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
          switch ($34 = (_heredocstate)) {
            case (0):
              if (($29 = (_heredoc))) {
                _heredocstate = 1;
                _heredepth = _depth;
              }
              if (($30 = ((_depth > _indent[0])))) {
                _indent.unshift(_depth);
                _lines.push(_INDENT);
              }
              break;
            case (1):
              if (($31 = ((_depth <= _heredepth)))) {
                throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
              }
              _lines.push(_INDENT);
              _indent.unshift(_depth);
              _heredepth = _depth;
              _heredocstate = 2;
              break;
            case (2):
              if (($32 = ((_depth < _heredepth)))) {
                _heredocstate = 0;
              } else if (($33 = ((_depth > _heredepth)))) {
                _trimmed = $AI.slice_op((_line), _heredepth, undefined);
              }
              break;
          }
          if (($37 = ((_depth < _indent[0])))) {
            var $35;
            while ($35 = ((_depth < _indent[0]))) {
              _lines.push(_DEDENT);
              _indent.shift();
            }
            if (($36 = ((_depth !== _indent[0])))) {
              throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            }
          }
        }
        _lines.push(_trimmed);
      }
    }
    var $43;
    while ($43 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return _lines;
  }
};
var $8g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $44, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return (_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100))));
  }
};
var $9g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $61, $60, $59, $55, $54, $53, $52, $51, $47, $46, _line, _newcontext, _minind, _ind, _lines, _context, $45, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $52 = _lines;
    if (undefined === $52) $52 = [];
    var $50 = $52.length;
    if ($50) {
      var _line, $51 = 0;
      for (; $51 < $50; $51++) {
        _line = $52[$51];
        if (($46 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($47 = ((_line === _DEDENT)))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $60 = _lines;
    if (undefined === $60) $60 = [];
    var $58 = $60.length;
    if ($58) {
      var _line, $59 = 0;
      for (; $59 < $58; $59++) {
        _line = $60[$59];
        if (($54 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($55 = ((_line === _DEDENT)))) {
          _ind--;;
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
        }
      }
    }
    return _newcontext;
  }
};
var $10g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $70, $69, $68, $67, $66, _location, _js, _source, _fn, _bound, _rawsource, $65, $64, _msg, $63, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $62, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if (($63 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
        _PEG = require('pegjs');
        _grammar = _FS.readFileSync(_grammarFile).toString();
        _mainParser = _PEG.generate(_grammar, {
          allowedStartRules: ['startFile', 'startExpression'],
          output: 'source',
          optimize: 'size',
          trace: 0,
          cache: true
        });
        _FS.writeFileSync(_parserFile, _mainParser);
      } else {
        _mainParser = _FS.readFileSync(_parserFile).toString();
      }
    } catch ($65) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $65 + '\n' + '';
      if (($64 = (_grammar))) {
        _msg = $.WrapExtract(_grammar, $65.location.start.offset);
      }
      throw new Error(_msg);
    }
    _mainParser = eval(_mainParser);
    return function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        try {
          _js = _mainParser.parse(_source, {
            startrule: ((_fn) ? ('startFile') : ('startExpression')),
            bound: _bound,
            globals: $.config.verbs,
            constructs: $.config.constructs,
            persist: $.persist,
            filename: _fn
          });
        } catch ($69) {
          _location = undefined;
          if (($66 = ($69.location))) {
            _location = $66.start.offset;
          }
          if (($67 = ($69.message.match(/at:([0-9]+)/)))) {
            _location = ($AI.number_op($67[1]));
          }
          if (($68 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $69.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $69.toString() + '\n' + '');
          }
        }
        if (($70 = ($.config.options.beautify))) {
          _js = $.Beautify(_js, {
            indent_size: 2,
            preserve_newlines: false,
            brace_style: 'collapse'
          });
        }
        return _js;
      }
    };
  }
};
var $11g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $84, $83, $82, $78, $77, $76, $72, _filename, _extension, _path, $71, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $83 = $.config.paths;
    if (undefined === $83) $83 = [];
    var $81 = $83.length;
    if ($81) {
      var _path, $82 = 0;
      for (; $82 < $81; $82++) {
        _path = $83[$82];
        var $77 = ['.sai', ''];
        if (undefined === $77) $77 = [];
        var $75 = $77.length;
        if ($75) {
          var _extension, $76 = 0;
          for (; $76 < $75; $76++) {
            _extension = $77[$76];
            _filename = _PATH.join(_path, (_name + _extension));
            try {
              return {
                success: true,
                source: _FS.readFileSync(_filename).toString(),
                context: {
                  name: _name,
                  loader: 'SAI.GetSourceFromPaths',
                  path: _filename,
                  mtime: _FS.statSync(_filename).mtime,
                  fetched: new Date()
                }
              };
            } catch ($72) {;
            }
          }
        }
      }
    }
    return {
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + '// Compile' + '\n' + '//' + '\n' + '// Create a function that compiles parsed SAI source, binding the variables' + '\n' + '// needed to integrate necessary scope and the SAI runtime library.' + '\n' + '//' + '\n' + ''
    };
  }
};
var $12g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $85, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $13g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $87, _s2, _protogen, _source, _load, _s1, $86, _name = p,
    $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'); {
    if (undefined === $.protogens[_name]) $.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        _load = $.config.Loader(_name);
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context + '\'');
        }
        _source = $.Parse(_load.source, undefined, _load.context);
        _source = 'var __context=' + JSON.stringify(_load.context) + ';\n' + _source;
        _protogen = $.Compile(_source);
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        _s2 = new Date();
        if (($87 = ($.config.options.speedometer))) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return _protogen;
      }
    }();
    return $.protogens[_name];
  }
};
var $14g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $88, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME);
  }
};
var $15g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $96, $95, $94, $93, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $89, _name = p,
    $ = this['GetAncestors'] ? this : $bindfail('GetAncestors'); {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        _obj = new $.protoConstructor(_name);
        _protogen = $.GetProtogen(_leaf);
        _opts = {
          name: _leaf
        };
        _protogen(_obj, _opts, require, _SAILIB, _DIRNAME);
        _obj.Constructor();
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        var $97 = _obj.__inherits;
        _ancestors[_leaf] = $97;
        var $95 = $97;
        if (undefined === $95) $95 = [];
        var $92 = $95.length;
        if ($92) {
          var $93, $94 = 0;
          for (; $94 < $92; $94++) {
            $93 = $95[$94];
            _heritage.push($93);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $16g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $106, _protogen, $105, $104, $103, $102, _adopt, _prototype, _ancestors, $98, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $104 = _ancestors[_name];
            if (undefined === $104) $104 = [];
            var $101 = $104.length;
            if ($101) {
              var $102, $103 = 0;
              for (; $103 < $101; $103++) {
                $102 = $104[$103];
                _adopt($102);
              }
            }
            _protogen = $.GetProtogen(_name);
            _protogen(_prototype, {
              name: _name
            }, require, _SAILIB, _DIRNAME);
          }
        };
        _adopt(_name);
        Object.defineProperty(_prototype, 'isa', {
          enumerable: false,
          value: _prototype.isa
        });
        if (($106 = ($.isas[_prototype.isa]))) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        $.isas[_prototype.isa] = _name;
        _SAILIB.finalizePrototype(_prototype);
        return _prototype;
      }
    }();
    return $.prototypes[_name];
  }
};
var $17g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $115, $114, $113, $112, _adopt, _source, $108, _islib, _ancestors, $107, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($108 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $114 = _ancestors[_name];
        if (undefined === $114) $114 = [];
        var $111 = $114.length;
        if ($111) {
          var $112, $113 = 0;
          for (; $113 < $111; $113++) {
            $112 = $114[$113];
            _adopt($112);
          }
        }
        _source += ($.sources[_name] + '\n');
      }
    };
    _adopt(_name);
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    return _source;
  }
};
var $18g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $118, $117, $116, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($118 = ($.GetPrototype(_name)))) {
      if (undefined !== ($117 = ($118.constructor))) {
        return $117;
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $19g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $122, $121, $120, _obj, $119, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($122 = ($.GetPrototype(_name)))) {
      _obj = Object.create($122);
      if (($120 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($121 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $20g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $129, $128, $127, $126, $125, $124, $123, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($124 = (_c.paths))) {
      $.config.paths = $124;
    }
    if (undefined !== ($125 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $125);
    }
    if (undefined !== ($126 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $126);
    }
    if (undefined !== ($127 = (_c.constructs))) {
      $.config.constructs = $AI.update_op($.config.constructs, $127);
    }
    if (undefined !== ($128 = (_c.Loader))) {
      $.config.Loader = $128;
    }
    if (($129 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
