#!/usr/bin/env node

// Javascript source for sai.sai.md transpiled by SAI
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

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/sai.sai.md","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-11T20:11:40.219Z","fetched":"2018-04-11T21:09:45.099Z"};
var __path=require('path');
var __require=function(fn) {
  try {
    return require(fn);
  } catch (e) {
    try {
      return require(__path.join(process.cwd(),fn));
    } catch (e) {
      return require(__path.join(process.cwd(),'node_modules',fn));
    }
  }
}
var $count$stepup = function(v) {
  throw new Error("SAI Runtime: COUNT STEP value should be positive, not " + v);
};
var _FS = __require('fs');
var _PATH = __require('path');
var _SAILIB = __require('sai-library');
var _DIRNAME = __dirname;
var _INDENT = '%%INDENT%%';
var _DEDENT = '%%DEDENT%%';
var _DEFAULT_config = {
  globals: {
    'debug': '$AI.debug_op',
    'require': '__require',
    'assert': '$AI.assert',
    'environment': '$AI.environment',
    'jsprocess': 'process',
    'jsconsole': 'console'
  },
  imports: ['parseFloat', 'parseInt', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'Object', 'Function', 'Boolean', 'Symbol', 'Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError', 'Math', 'Number', 'Date', 'String', 'RegExp', 'Intl', 'Array', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'Set', 'WeakMap', 'WeakSet', 'ArrayBuffer', 'DataView', 'JSON'],
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true,
    linenos: false
  },
  Loader: undefined
};
var _CONSTRUCTS = ['StateC', 'PromisingC', 'ReturnC', 'IterateC', 'TryCatchC', 'IfElseC', 'SwitchC', 'MiscC', 'ListsP', 'QueryP', 'CrudP', 'Keywords'];
var _VALIDSYNTAX = {
  constructs: {
    'block': '[indent code block]',
    'exprout': '[expr] (AS var1, var2...)',
    'exproutblock': '[expr] (AS var1, var2...) [indent code block]',
    'exprs': '[expr1 (, expr2, ...)]',
    'exprsblock': '[expr1 (, expr2, ...)] [indent code block]',
    'exprsoutblock': '[expr1 (, expr2, ...)] (AS var1, var2, ...) [indent code block]',
    'exprsusing': '[expr1 (, expr2, ...)] USING [function reference]',
    'exprusing': '[expr] USING [function reference]',
    'none': ' ',
    'outblock': '(AS var1, var2...) [indent code block]',
    'rvalue': '[variable]',
    'verb': '[verb sentence]'
  },
  pipers: {
    'expr': '[expr]',
    'exprs': '[expr1 (, expr2, ...)]',
    'none': ' ',
    'outblock': '(AS var1, var2...) [indent code block]',
    'use': 'USING [function reference]',
    'valexpr': '[value] [expr]',
    'valuse': '[value] USING [function reference]',
    'valoutblock': '[value] (AS var1, var2...) [indent code block]'
  },
  globals: {},
  keywords: {},
  operators: {},
  pronouns: {},
  syntax: {}
};
var isa = prototype.isa = 'SAI';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['SAI'] = {
  version: '0.2.8',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Clean", "IntegrateConstruct", "IntegrateBasicConstructs", "Document", "Dedenter", "WrapExtract", "Contextualize", "GetParser", "GetSourceFromFilename", "GetSourceFromPaths", "Compile", "GetProtogen", "Expression", "GetAncestors", "GetPrototype", "GetSource", "Require", "Create", "Configure", "RegisterWithNode", "Environment", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = function() {
  var $ = this;
  return {
    prototypes: {},
    sources: {},
    protogens: {},
    isas: {},
    config: {},
    persist: {},
    secondclass: {},
    mainParser: undefined,
    ProtoConstructor: undefined,
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
  var $ = this['Instantiate'] ? this : $bindfail('Instantiate'),
    $_c, $_d; {
    $.Parse = $.GetParser();
    $.ProtoConstructor = function(p) {
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
        return (this);
      }
    };
    _SAILIB.import = function() {
      return ($.Require).apply($, arguments);
    };
    _SAILIB.create_op = function() {
      return ($.Create).apply($, arguments);
    };
    _SAILIB.environment = function() {
      return ($.Environment).apply($, arguments);
    };
    $.IntegrateBasicConstructs();
    $.Clean();
  }
};
var $4g = prototype['Clean'] || function() {};
prototype['Clean'] = function(p) {
  var $0_this, $1_this, $2_key, $3_list, $4_length, $5_none, $ = this['Clean'] ? this : $bindfail('Clean'); {
    $.prototypes = {};
    $.sources = {};
    $.protogens = {};
    $.isas = {};
    $.config = $AI.clone_op(_DEFAULT_config);
    $.persist = {
      globalcount: 1
    };
    $.config.Loader = function() {
      return ($.GetSourceFromPaths).apply($, arguments);
    };
    var $3_list = $.config.imports,
      $2_key;
    if (undefined === $3_list) $3_list = [];
    var $4_length = $3_list.length;
    for ($2_key = 0; $2_key < $4_length; $2_key++) {
      $1_this = $3_list[$2_key];
      $.config.globals[$1_this] = $1_this;;
    }
  }
};
var $5g = prototype['IntegrateConstruct'] || function() {};
prototype['IntegrateConstruct'] = function(p) {
  var $10_trial, $11_this, $12_key, $13_list, $14_none, $15_list, $16_trial, $17_list, $18_none, $19_list, $20_none, $6_this, $7_trial, $8_list, $9_none, $ = this['IntegrateConstruct'] ? this : $bindfail('IntegrateConstruct'),
    $_b, $_c, $_d, _Fail, _category, _clauseName, _construct, _constructName, _desc, _elem, _library, _manifest = p,
    _msg, _requiredElements, _syntax; {
    _requiredElements = {
      constructs: {
        'clauses': 'clauses list',
        'repeats': 'repeats flag',
        'handler': 'handler function'
      },
      pipers: {
        'clauses': 'clauses list',
        'handler': 'handler function'
      }
    };
    _Fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _category + '/' + _constructName + _msg);
      }
    };
    var $19_list = _manifest,
      _category = undefined;
    if (undefined === $19_list) $19_list = {};
    for (_category in $19_list) {
      _library = $19_list[_category];
      if (undefined === $.secondclass[_category]) $.secondclass[_category] = {};
      if (!(_VALIDSYNTAX[_category])) {
        _Fail(' unsupported category type');
      }
      var $17_list = _library,
        _constructName = undefined;
      if (undefined === $17_list) $17_list = {};
      for (_constructName in $17_list) {
        _construct = $17_list[_constructName];
        if ($7_trial = ($.secondclass[_category][_constructName])) {
          _Fail(' overwriting previously declared handler');
        }
        var $8_list = _requiredElements[_category],
          _elem = undefined;
        if (undefined === $8_list) $8_list = {};
        for (_elem in $8_list) {
          _desc = $8_list[_elem];
          if (!((undefined !== _construct[_elem]))) {
            _Fail(' is missing ' + _desc + '.');
          };
        }
        if ($10_trial = (((undefined !== _construct.clauses) && (!((undefined !== _construct.clauses[_constructName])))))) {
          _Fail(' is missing a clause definition for itself');
        }
        if ($16_trial = ((undefined === ($_b = ((undefined === ($_b = (_requiredElements)) ? undefined : ($_b[_category])))) ? undefined : ($_b.clauses)))) {
          var $15_list = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $15_list) $15_list = {};
          for (_clauseName in $15_list) {
            _syntax = $15_list[_clauseName];
            var $13_list = _syntax,
              $12_key = undefined;
            if (undefined === $13_list) $13_list = {};
            for ($12_key in $13_list) {
              $11_this = $13_list[$12_key];
              if (!(_VALIDSYNTAX[_category][$12_key])) {
                _Fail('/' + _clauseName + ' asks for illegal syntax "' + $12_key + '"');
              };
            };
          }
          if (_clauseName === undefined) {
            _Fail(' has no clauses defined');
          }
        }
        $.secondclass[_category][_constructName] = $AI.clone_op(_construct);;
      };
    }
  }
};
var $6g = prototype['IntegrateBasicConstructs'] || function() {};
prototype['IntegrateBasicConstructs'] = function(p) {
  var $21_this, $22_error, $23_key, $24_list, $25_length, $26_none, $ = this['IntegrateBasicConstructs'] ? this : $bindfail('IntegrateBasicConstructs'),
    $_c, $_d, _file, _fn, _implementation, _manifest; {
    var $24_list = _CONSTRUCTS,
      $23_key;
    if (undefined === $24_list) $24_list = [];
    var $25_length = $24_list.length;
    for ($23_key = 0; $23_key < $25_length; $23_key++) {
      _file = $24_list[$23_key];
      try {
        _fn = ('./' + _file);
        _implementation = __require(_fn);
        _implementation.SAI = $;
        _manifest = _implementation.manifest;
        $.IntegrateConstruct(_manifest);
      } catch ($22_error) {
        $22_error.message = ('In Construct file ' + _file + ' ---\n  ' + $22_error.message);
        $AI.debug_op($22_error);
      };
    }
  }
};
var $7g = prototype['Document'] || function() {};
prototype['Document'] = function(p) {
  var $27_this, $28_list, $29_none, $30_list, $31_none, $32_list, $33_none, $34_list, $35_none, $36_key, $37_list, $38_length, $39_none, $ = this['Document'] ? this : $bindfail('Document'),
    $_b, $_c, $_d, _category, _clauseName, _construct, _constructName, _doc, _docs, _documents, _file, _fn, _implementation, _library, _manifest, _page, _prefix, _requestedSyntax, _seealso, _sub, _synref, _type, _val; {
    _documents = {};
    _prefix = {
      'pipers': {
        main: '... | ',
        aux: '(optional) '
      }
    };
    _seealso = {};
    var $37_list = _CONSTRUCTS,
      $36_key;
    if (undefined === $37_list) $37_list = [];
    var $38_length = $37_list.length;
    for ($36_key = 0; $36_key < $38_length; $36_key++) {
      _file = $37_list[$36_key];
      _fn = ('./' + _file);
      _implementation = __require(_fn);
      _implementation.SAI = $;
      _manifest = _implementation.manifest;
      _docs = _implementation.docs;
      var $34_list = _manifest,
        _category = undefined;
      if (undefined === $34_list) $34_list = {};
      for (_category in $34_list) {
        _library = $34_list[_category];
        if (undefined === _documents[_category]) _documents[_category] = {};
        var $32_list = _library,
          _constructName = undefined;
        if (undefined === $32_list) $32_list = {};
        for (_constructName in $32_list) {
          _construct = $32_list[_constructName];
          _doc = (_docs[_category][_constructName] || {});
          _synref = [];
          var $30_list = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $30_list) $30_list = {};
          for (_clauseName in $30_list) {
            _requestedSyntax = $30_list[_clauseName];
            if (undefined === _seealso[_clauseName]) _seealso[_clauseName] = [];
            _seealso[_clauseName].push([((undefined !== ($_b = _doc.category)) ? $_b : _category), _constructName, ((undefined !== ($_b = _doc.title)) ? $_b : _clauseName)]);
            var $28_list = _requestedSyntax,
              _type = undefined;
            if (undefined === $28_list) $28_list = {};
            for (_type in $28_list) {
              _val = $28_list[_type];
              _sub = (((_clauseName === _constructName)) ? ('main') : ('aux'));
              _synref.push('' + ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_prefix)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_sub])))) ? $_b : '') + _clauseName + ' ' + _VALIDSYNTAX[_category][_type]);;
            }
            _synref.push('');;
          }
          _page = {
            name: _constructName,
            subtitle: 'subtitle',
            summary: 'summary',
            synref: _synref.join('\n'),
            detail: 'detail'
          };
          _documents[_category][_constructName] = $AI.overlay_op(_page, _doc);;
        };
      };
    }
    return ({
      documents: _documents,
      references: _seealso
    });
  }
};
var $8g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $40_this, $41_this, $42_counter, $43_stop, $44_step, $45_none, $46_trial, $47_trial, $48_stop, $49_step, $50_none, $51_trial, $52_this, $53_this, $54_trial, $55_trial, $56_trial, $57_trial, $58_trial, $59_trial, $60_trial, $61_trial, $62_trial, $63_trial, $64_trial, $65_trial, $66_this, $67_trial, $68_trial, $69_trial, $70_list, $71_length, $72_none, $73_this, $ = this['Dedenter'] ? this : $bindfail('Dedenter'),
    $_c, $_d, _Context, _depth, _heredepth, _heredoc, _heredocstate, _i, _indent, _isBlank, _isComment, _isExample, _line, _lineno, _lines, _literate, _offset, _rawlines, _result, _src = p,
    _trail, _trimmed; {
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _literate = false;
    _offset = 1;
    _lines = [];
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $42_counter = (_lineno - 3),
          $43_stop = (_lineno + 4),
          $44_step = 1;
        if (!($44_step > 0)) $count$stepup($44_step);
        for (; $42_counter < $43_stop; $42_counter = $42_counter + $44_step) {
          if (undefined !== ($41_this = (_rawlines[$42_counter]))) {
            _result += '' + $42_counter + ':' + ((($42_counter === _lineno)) ? ('->') : ('  ')) + ' ' + $41_this + '\n';
          };
        }
        return (_result);
      }
    };
    if ($46_trial = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
      _offset = (_offset || 0) + 1;
    }
    var _i = 0,
      $48_stop = $AI.min_op(10, _rawlines.length),
      $49_step = 1;
    if (!($49_step > 0)) $count$stepup($49_step);
    for (; _i < $48_stop; _i = _i + $49_step) {
      if ($47_trial = (_rawlines[_i].match(/^\#+\s/))) {
        _literate = true;
      };
    }
    var $70_list = _rawlines,
      _lineno;
    if (undefined === $70_list) $70_list = [];
    var $71_length = $70_list.length;
    for (_lineno = 0; _lineno < $71_length; _lineno++) {
      _line = $70_list[_lineno];
      if ($51_trial = ((_line.indexOf('\t') >= 0))) {
        throw new Error('SAI Compiler: tab characters are not supported in source files ' + _Context(_lineno));
      }
      _trail = _line.length;
      var $52_this;
      while ($52_this = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      _line = $AI.slice_op(_line, 0, _trail);
      _depth = 0;
      var $53_this;
      while ($53_this = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      _isBlank = (0 === _trimmed.length);
      if ($58_trial = (_literate)) {
        if ($54_trial = ((_depth < 2))) {
          if (!(_isBlank)) {
            _isExample = false;
          }
          if (!((_isBlank && (_heredocstate === 2)))) {
            continue;
          }
        } else if ($55_trial = ((_depth < 4))) {
          throw new Error('SAI Compiler: file looks \'literate\' with a # header up top, but has lines with an indent of 2 or 3 spaces.' + '\n' + 'Literate SAI files should have left justified markdown (one space indent allowed for lists)' + '\n' + 'and all code should be indented four spaces or more.  So, basically, this looks wrong: ' + _Context(_lineno));
        } else if ($56_trial = (_isExample)) {
          continue;
        } else if ($57_trial = (('// example' === $AI.slice_op(_line, undefined, (0 - (10)))))) {
          _isExample = true;
          continue;
        } else {
          _depth = (_depth - 4);
          _line = $AI.slice_op(_line, 4, undefined);
        }
      }
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        if ($60_trial = ((_heredocstate === 2))) {
          if ($59_trial = ((_depth < _heredepth))) {
            _heredocstate = 0;
          }
        }
        if ($62_trial = ((_heredocstate === 1))) {
          if ($61_trial = ((_depth <= _heredepth))) {
            throw new Error('SAI: multi-line quotes (a.k.a. here documents) must be indented ' + _Context(_lineno));
          }
          _lines.push(_INDENT);
          _indent.unshift(_depth);
          _heredepth = _depth;
          _heredocstate = 2;
        }
        if ($65_trial = ((_heredocstate === 0))) {
          if ($63_trial = (_heredoc)) {
            _heredocstate = 1;
            _heredepth = _depth;
          }
          if ($64_trial = ((_depth > _indent[0]))) {
            _indent.unshift(_depth);
            _lines.push(_INDENT);
          }
        }
        if ($68_trial = ((_depth < _indent[0]))) {
          var $66_this;
          while ($66_this = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            _indent.shift();
          }
          if ($67_trial = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
          }
        }
      }
      if (!((_isComment && (_heredocstate && (_depth < _heredepth))))) {
        if ($69_trial = ((_heredocstate && (_depth > _heredepth)))) {
          _trimmed = $AI.slice_op(_line, _heredepth, undefined);
        }
        _lines.push('@' + (_lineno + _offset) + ':' + _trimmed);
      };
    }
    var $73_this;
    while ($73_this = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.unshift('');
    _lines.push('');
    _lines = _lines.join('\n');
    return (_lines);
  }
};
var $9g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $74_this, $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'),
    _source = p; {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
  }
};
var $10g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $75_this, $76_trial, $77_trial, $78_key, $79_list, $80_length, $81_none, $82_trial, $83_trial, $84_trial, $85_key, $86_list, $87_length, $88_none, $ = this['Contextualize'] ? this : $bindfail('Contextualize'),
    $_c, $_d, _context, _ind, _line, _linenorex, _lines, _ln, _minind, _newcontext, _source = p; {
    _linenorex = /^\@([0-9]+):(.*)/;
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $79_list = _lines,
      $78_key;
    if (undefined === $79_list) $79_list = [];
    var $80_length = $79_list.length;
    for ($78_key = 0; $78_key < $80_length; $78_key++) {
      _line = $79_list[$78_key];
      if ($76_trial = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($77_trial = ((_line === _DEDENT))) {
        _ind--;;
      }
      _minind = Math.min(_minind, _ind);;
    }
    _ind = (0 - (_minind));
    var $86_list = _lines,
      $85_key;
    if (undefined === $86_list) $86_list = [];
    var $87_length = $86_list.length;
    for ($85_key = 0; $85_key < $87_length; $85_key++) {
      _line = $86_list[$85_key];
      if ($83_trial = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($84_trial = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _ln = _linenorex.exec(_line);
        if ($82_trial = (_ln)) {
          _newcontext += (_ln[1] + (': ' + ('  '.repeat(_ind) + (_ln[2] + '\n'))));
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
        }
      };
    }
    return (_newcontext);
  }
};
var $11g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $100_error, $101_trial, $89_this, $90_trial, $91_trial, $92_error, $93_trial, $94_this, $95_key, $96_sum, $97_trial, $98_trial, $99_this, $ = this['GetParser'] ? this : $bindfail('GetParser'),
    $_c, $_d, _PEG, _bound, _context, _grammar, _grammarFile, _js, _location, _meta, _msg, _opts, _parserFile, _rawsource, _source; {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if ($90_trial = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
        _PEG = __require('pegjs');
        _grammar = _FS.readFileSync(_grammarFile).toString();
        $.mainParser = _PEG.generate(_grammar, {
          allowedStartRules: ['startFile', 'startExpression'],
          output: 'source',
          optimize: 'size',
          trace: 0,
          cache: true
        });
        _FS.writeFileSync(_parserFile, $.mainParser);
      } else {
        $.mainParser = _FS.readFileSync(_parserFile).toString();
      }
    } catch ($92_error) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $92_error + '\n' + '';
      if ($91_trial = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $92_error.location.start.offset);
      }
      throw new Error(_msg);
    }
    $.mainParser = eval($.mainParser);
    return (function(p, _bound, _context) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        try {
          _opts = {
            startrule: ((_context) ? ('startFile') : ('startExpression')),
            bound: _bound,
            globals: $.config.globals,
            constructs: $.secondclass.constructs,
            pipers: $.secondclass.pipers,
            persist: $.persist,
            filename: _context,
            failures: undefined
          };
          _js = $.mainParser.parse(_source, _opts);
          if ($93_trial = (_opts.failures)) {
            throw new Error(_opts.failures);
          }
        } catch ($100_error) {
          _meta = $AI.sum_op(_context, function($96_sum, $94_this, $95_key) {
            var $t = '  ' + $95_key.toUpperCase() + ': ' + $94_this + '\n';
            return (undefined === $96_sum) ? $t : ($96_sum + $t);
          }, undefined);
          _location = undefined;
          if ($97_trial = ($100_error.location)) {
            _location = $97_trial.start.offset;
          }
          if ($98_trial = ($100_error.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($98_trial[1]));
          }
          if (undefined !== ($99_this = (_location))) {
            $100_error.message = 'SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $100_error.message + '\n' + '' + '\n' + '';
          } else {
            $100_error.message = 'SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $100_error.message + '\n' + '' + '\n' + '';
          }
          throw $100_error;
        }
        if ($101_trial = ($.config.options.beautify)) {
          _js = $.Beautify(_js, {
            indent_size: 2,
            preserve_newlines: false,
            brace_style: 'collapse'
          });
        }
        return (_js);
      }
    });
  }
};
var $12g = prototype['GetSourceFromFilename'] || function() {};
prototype['GetSourceFromFilename'] = function(p) {
  var $102_this, $103_error, $ = this['GetSourceFromFilename'] ? this : $bindfail('GetSourceFromFilename'),
    $_c, $_d, _filename = p; {
    try {
      return ({
        success: true,
        source: _FS.readFileSync(_filename).toString(),
        context: {
          loader: 'SAI.GetSourceFromFilename',
          path: _filename,
          workdir: _PATH.resolve(_PATH.dirname(_filename)),
          mtime: _FS.statSync(_filename).mtime,
          fetched: new Date()
        }
      });
    } catch ($103_error) {
      return (undefined);
    }
  }
};
var $13g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $104_this, $105_this, $106_key, $107_list, $108_length, $109_none, $110_key, $111_list, $112_length, $113_none, $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'),
    $_c, $_d, _attempts, _extension, _filename, _name = p,
    _path; {
    _attempts = [];
    var $111_list = $.config.paths,
      $110_key;
    if (undefined === $111_list) $111_list = [];
    var $112_length = $111_list.length;
    for ($110_key = 0; $110_key < $112_length; $110_key++) {
      _path = $111_list[$110_key];
      var $107_list = ['.sai.md', '.sai', '.md', ''],
        $106_key;
      if (undefined === $107_list) $107_list = [];
      var $108_length = $107_list.length;
      for ($106_key = 0; $106_key < $108_length; $106_key++) {
        _extension = $107_list[$106_key];
        _filename = _PATH.resolve(_PATH.join(_path, (_name + _extension)));
        _attempts.push(_filename);
        if (undefined !== ($105_this = ($.GetSourceFromFilename(_filename)))) {
          $105_this.name = _name;
          $105_this.loader += '/GetSourceFromPaths';
          return ($105_this);
        };
      };
    }
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + '' + '\n' + 'Tried:' + '\n' + '' + _attempts.join('\n') + '\n' + '' + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
    });
  }
};
var $14g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $114_this, $115_this, $116_key, $117_iter, $118_elem, $119_none, $120_error, $ = this['Compile'] ? this : $bindfail('Compile'),
    $_c, $_d, _source = p; {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($120_error) {
      $AI.debug_op('ERROR IN HERE');
      $AI.debug_op(_source);
      var $117_iter = $AI.kviterate_op($120_error);
      var $118_elem = $117_iter.next();
      if (!$118_elem.done)
        do {
          $115_this = $118_elem.value[1];
          $116_key = $118_elem.value[0];
          $AI.debug_op('' + $116_key + ': ' + $115_this);
          $118_elem = $117_iter.next();
        } while (!$118_elem.done);
      throw $120_error;
    }
  }
};
var $15g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $121_this, $122_trial, $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'),
    $_b, $_c, $_d, _cwd, _load, _name = p,
    _pg, _protogen, _ret, _s1, _s2, _source; {
    return (((undefined !== ($_b = $.protogens[_name])) ? $_b : ($.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        _load = $.config.Loader(_name);
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context);
        }
        _source = 'var __context=' + JSON.stringify(_load.context) + ';' + '\n' + 'var __path=require(\'path\');' + '\n' + 'var __require=function(fn) {' + '\n' + '  try {' + '\n' + '    return require(fn);' + '\n' + '  } catch (e) {' + '\n' + '    try {' + '\n' + '      return require(__path.join(process.cwd(),fn));' + '\n' + '    } catch (e) {' + '\n' + '      return require(__path.join(process.cwd(),\'node_modules\',fn));' + '\n' + '    }' + '\n' + '  }' + '\n' + '}' + '\n' + '' + $.Parse(_load.source, undefined, _load.context) + '\n' + '' + '\n' + '';
        _pg = $.Compile(_source);
        _protogen = function(p) {
          {
            _cwd = process.cwd();
            process.chdir(_load.context.workdir);
            _ret = _pg.apply(null, arguments);
            process.chdir(_cwd);
            return (_ret);
          }
        };
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        _s2 = new Date();
        if ($122_trial = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return (_protogen);
      }
    }())));
  }
};
var $16g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var $123_this, $ = this['Expression'] ? this : $bindfail('Expression'),
    _js, _source = p; {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
  }
};
var $17g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $124_this, $125_this, $126_key, $127_list, $128_length, $129_none, $130_this, $ = this['GetAncestors'] ? this : $bindfail('GetAncestors'),
    $_c, $_d, _ancestors, _heritage, _leaf, _name = p,
    _nodupes, _obj, _opts, _protogen; {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        _obj = new $.ProtoConstructor(_name);
        _protogen = $.GetProtogen(_leaf);
        _opts = {
          name: _leaf
        };
        _protogen(_obj, _opts, require, _SAILIB, _DIRNAME);
        _obj.Constructor();
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        var $130_this = _obj.__inherits;
        _ancestors[_leaf] = $130_this;
        var $127_list = $130_this,
          $126_key;
        if (undefined === $127_list) $127_list = [];
        var $128_length = $127_list.length;
        for ($126_key = 0; $126_key < $128_length; $126_key++) {
          $125_this = $127_list[$126_key];
          _heritage.push($125_this);;
        };
      }
    }
    return (_ancestors);
  }
};
var $18g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $131_this, $132_this, $133_key, $134_list, $135_length, $136_none, $137_trial, $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'),
    $_b, $_c, $_d, _Adopt, _ancestors, _name = p,
    _protogen, _prototype; {
    return (((undefined !== ($_b = $.prototypes[_name])) ? $_b : ($.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.ProtoConstructor(_name);
        _Adopt = function(p) {
          var _name = p; {
            var $134_list = _ancestors[_name],
              $133_key;
            if (undefined === $134_list) $134_list = [];
            var $135_length = $134_list.length;
            for ($133_key = 0; $133_key < $135_length; $133_key++) {
              $132_this = $134_list[$133_key];
              _Adopt($132_this);;
            }
            _protogen = $.GetProtogen(_name);
            _protogen(_prototype, {
              name: _name
            }, __require, _SAILIB, _DIRNAME);
          }
        };
        _Adopt(_name);
        Object.defineProperty(_prototype, 'isa', {
          enumerable: false,
          value: _prototype.isa
        });
        if ($137_trial = ($.isas[_prototype.isa])) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        $.isas[_prototype.isa] = _name;
        _SAILIB.finalizePrototype(_prototype);
        return (_prototype);
      }
    }())));
  }
};
var $19g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $138_this, $139_this, $140_key, $141_list, $142_length, $143_none, $144_trial, $ = this['GetSource'] ? this : $bindfail('GetSource'),
    $_c, $_d, _Adopt, _ancestors, _islib, _name = p,
    _source; {
    _source = '';
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    _Adopt = function(p) {
      var _name = p; {
        var $141_list = _ancestors[_name],
          $140_key;
        if (undefined === $141_list) $141_list = [];
        var $142_length = $141_list.length;
        for ($140_key = 0; $140_key < $142_length; $140_key++) {
          $139_this = $141_list[$140_key];
          _Adopt($139_this);;
        }
        _source += ($.sources[_name] + '\n');
      }
    };
    if ($144_trial = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _Adopt(_name);
    return ('#!/usr/bin/env node' + '\n' + '' + '\n' + '// Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '//' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() {' + '\n' + '  this.Constructor=function(){};' + '\n' + '  this.__tobelocked=[];' + '\n' + '  this.__tobefrozen=[];' + '\n' + '  this.__contracts=[];' + '\n' + '  this.__unverified=true;' + '\n' + '  this.isof={};' + '\n' + '  return this;' + '\n' + '}();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '' + '\n' + '// Generated code follows' + '\n' + '' + '\n' + '' + _source + '\n' + '' + '\n' + '// End of generated code' + '\n' + '' + '\n' + '$AI.finalizePrototype(prototype);' + '\n' + 'var result=prototype;' + '\n' + 'switch (prototype.isof[prototype.isa].type) {' + '\n' + 'case \'singleton\':' + '\n' + '  prototype.Constructor();' + '\n' + '  if (prototype.Instantiate) prototype.Instantiate();' + '\n' + '  break;' + '\n' + 'case \'main\':' + '\n' + '  result=prototype.constructor();' + '\n' + '  break;' + '\n' + 'default:' + '\n' + '  result=prototype.constructor;' + '\n' + '  break;' + '\n' + '}' + '\n' + 'exports=result; try { module.exports=result; } catch(e) {};' + '\n' + 'return result;' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '');
  }
};
var $20g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $145_this, $146_trial, $ = this['Require'] ? this : $bindfail('Require'),
    _ctor, _name = p,
    _proto; {
    if (undefined !== (_proto = ($.GetPrototype(_name)))) {
      if (undefined !== (_ctor = (_proto.constructor))) {
        return (_ctor);
      }
      if ($146_trial = (('function' === typeof(_proto)))) {
        return (_proto);
      }
    }
    throw new Error('SAI.Require: require could not find a constructor for ' + _name);
  }
};
var $21g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $147_this, $148_trial, $149_trial, $150_this, $ = this['Create'] ? this : $bindfail('Create'),
    $_c, $_d, _name = p,
    _obj; {
    if (undefined !== ($150_this = ($.GetPrototype(_name)))) {
      _obj = Object.create($150_this);
      if ($148_trial = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      if ($149_trial = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $22g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $151_this, $152_this, $153, $154_this, $155, $156_this, $157_this, $158_this, $159_key, $160_list, $161_length, $162_none, $163_this, $164_trial, $ = this['Configure'] ? this : $bindfail('Configure'),
    $_c, $_d, _c = p; {
    if (undefined !== ($152_this = (_c.paths))) {
      $.config.paths = $152_this;
    }
    if (undefined !== ($154_this = (_c.globals))) {
      $153 = $.config.globals;
      $.config.globals = $AI.overlay_op($153, $154_this);
    }
    if (undefined !== ($156_this = (_c.options))) {
      $155 = $.config.options;
      $.config.options = $AI.overlay_op($155, $156_this);
    }
    if (undefined !== ($157_this = (_c.Loader))) {
      $.config.Loader = $157_this;
    }
    if (undefined !== ($163_this = (_c.secondclass))) {
      var $160_list = $163_this,
        $159_key;
      if (undefined === $160_list) $160_list = [];
      var $161_length = $160_list.length;
      for ($159_key = 0; $159_key < $161_length; $159_key++) {
        $158_this = $160_list[$159_key];
        $.IntegrateConstruct($158_this);;
      }
    }
    if ($164_trial = ($.config.options.beautify)) {
      $.Beautify = __require('js-beautify').js_beautify;
    }
  }
};
var $23g = prototype['RegisterWithNode'] || function() {};
prototype['RegisterWithNode'] = function(p) {
  var $165_this, $166_this, $ = this['RegisterWithNode'] ? this : $bindfail('RegisterWithNode'),
    $_c, $_d, _REQUIRE, _filename, _module, _result; {
    _REQUIRE = require;
    if (undefined !== ($166_this = (_REQUIRE.extensions))) {
      $166_this.sai = function(p, _filename) {
        var _module = p; {
          $.config.paths.unshift(_PATH.dirname(_filename));
          _result = $.Require(_PATH.basename(_filename));
          $.config.paths.shift();
          return (_result);
        }
      };
    } else {
      throw new Error('SAI Runtime: Could not find require.extensions to register .sai files with node');
    }
  }
};
var $24g = prototype['Environment'] || function() {};
prototype['Environment'] = function(p) {
  var $167_this, $ = this['Environment'] ? this : $bindfail('Environment'); {
    return ({
      dynamic: true,
      static: false,
      paths: $AI.clone_op($.config.paths),
      Clean: function() {
        return ($.Clean).apply($, arguments);
      },
      Configure: function() {
        return ($.Configure).apply($, arguments);
      },
      GetSource: function() {
        return ($.GetSource).apply($, arguments);
      },
      RegisterWithNode: function() {
        return ($.RegisterWithNode).apply($, arguments);
      },
      Require: function() {
        return ($.Require).apply($, arguments);
      }
    });
  }
};




// End of generated code

$AI.finalizePrototype(prototype);
var result=prototype;
switch (prototype.isof[prototype.isa].type) {
case 'singleton':
  prototype.Constructor();
  if (prototype.Instantiate) prototype.Instantiate();
  break;
case 'main':
  result=prototype.constructor();
  break;
default:
  result=prototype.constructor;
  break;
}
exports=result; try { module.exports=result; } catch(e) {};
return result;



