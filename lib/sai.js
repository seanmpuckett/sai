#!/usr/bin/env node

// Javascript source for sai.sai transpiled by SAI
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
var __context={"name":"sai.sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-14T20:32:44.279Z","fetched":"2018-03-15T00:31:41.509Z"};
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
  constructs: {},
  pipers: {},
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true
  },
  Loader: ['default source loader linked later in file']
};
var _CONSTRUCTS = ['StateC', 'PromisingC', 'ReturnC', 'IterateC', 'TryCatchC', 'IfElseC', 'SwitchC', 'MiscC', 'ListsP', 'QueryP', 'CrudP', 'Keywords'];
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
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Clean", "IntegrateConstructs", "Document", "DocumentConstructs", "Dedenter", "WrapExtract", "Contextualize", "GetParser", "GetSourceFromPaths", "Compile", "GetProtogen", "Expression", "GetAncestors", "GetPrototype", "GetSource", "Require", "Create", "Configure", "isa"]);
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
    mainParser: undefined,
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
var t = {
  validSyntax: {
    keywords: {},
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
    globals: [{}],
    keywords: [{}],
    operators: [{}],
    pronouns: [{}],
    syntax: [{}]
  }
};
for (var i in t) {
  prototype.__tobelocked.push(i);
  prototype[i] = t[i];
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
        return (this);
      }
    };
    $.Parse = $.GetParser();
    $.config.Loader = function() {
      return ($.GetSourceFromPaths).apply($, arguments);
    };
    _SAILIB.import = function() {
      return ($.Require).apply($, arguments);
    };
    _SAILIB.create_op = function() {
      return ($.Create).apply($, arguments);
    };
    $.IntegrateConstructs();
  }
};
var $5g = prototype['IntegrateConstructs'] || function() {};
prototype['IntegrateConstructs'] = function(p) {
  var $_d, $_c, $_b, $17, $16, $15, $14, $13, $12, $11, $10, $9, $8, $7, $6, $5, $4, _type, _val, _clauseName, _requestedSyntax, $3, $2, _element, _description, _constructName, _construct, _category, _library, _manifest, _implementation, _fn, _file, _msg, _fail, _requiredElements, $1, $ = this['IntegrateConstructs'] ? this : $bindfail('IntegrateConstructs'); {
    _requiredElements = {
      constructs: {
        'clauses': 'clauses list',
        'repeats': 'repeats flag',
        'handler': 'handler function'
      },
      pipers: {
        'clauses': 'clauses list',
        'handler': 'handler function',
        'tools': 'tools to include in object definition (set to false if none)'
      }
    };
    _fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _file + '/' + _category + '/' + _constructName + _msg);
      }
    };
    var $15 = _CONSTRUCTS,
      $14;
    if (undefined === $15) $15 = [];
    var $16 = $15.length;
    for ($14 = 0; $14 < $16; $14++) {
      _file = $15[$14];
      try {
        _fn = ('./' + _file);
        _implementation = require(_fn);
        _implementation.SAI = $;
        _manifest = _implementation.manifest;
        var $11 = _manifest,
          _category = undefined;
        if (undefined === $11) $11 = {};
        for (_category in $11) {
          _library = $11[_category];
          if (!($.validSyntax[_category])) {
            _fail(' unsupported category type');
          }
          var $8 = _library,
            _constructName = undefined;
          if (undefined === $8) $8 = {};
          for (_constructName in $8) {
            _construct = $8[_constructName];
            var $2 = _requiredElements[_category],
              _element = undefined;
            if (undefined === $2) $2 = {};
            for (_element in $2) {
              _description = $2[_element];
              if (!((undefined !== _construct[_element]))) {
                _fail(' is missing ' + _description + '.');
              };
            }
            if ($7 = ((undefined === ($_b = ((undefined === ($_b = (_requiredElements)) ? undefined : ($_b[_category])))) ? undefined : ($_b.clauses)))) {
              var $6 = _construct.clauses,
                _clauseName = undefined;
              if (undefined === $6) $6 = {};
              for (_clauseName in $6) {
                _requestedSyntax = $6[_clauseName];
                var $4 = _requestedSyntax,
                  _type = undefined;
                if (undefined === $4) $4 = {};
                for (_type in $4) {
                  _val = $4[_type];
                  if (!($.validSyntax[_category][_type])) {
                    _fail('/' + _clauseName + ' asks for illegal syntax "' + _type + '"');
                  };
                };
              }
              if (_clauseName === undefined) {
                _fail(' has no clauses defined');
              }
            };
          }
          $10 = $.config[_category];
          $.config[_category] = $AI.overlay_op($10, _library);;
        }
      } catch ($13) {
        $AI.debug_op($13);
      };
    }
  }
};
var $6g = prototype['Document'] || function() {};
prototype['Document'] = function(p) {
  var $_d, $_c, $18, $ = this['Document'] ? this : $bindfail('Document'); {
    return ($.DocumentConstructs());
  }
};
var $7g = prototype['DocumentConstructs'] || function() {};
prototype['DocumentConstructs'] = function(p) {
  var $_d, $_c, $_b, $31, $30, $29, $28, $27, $26, $25, $24, _page, $23, $22, $21, $20, _sub, _type, _val, _clauseName, _requestedSyntax, _synref, _doc, _constructName, _construct, _category, _library, _docs, _manifest, _implementation, _fn, _file, _seealso, _prefix, _documents, $19, $ = this['DocumentConstructs'] ? this : $bindfail('DocumentConstructs'); {
    _documents = {};
    _prefix = {
      'pipers': {
        main: '... | ',
        aux: '(optional) '
      }
    };
    _seealso = {};
    var $29 = _CONSTRUCTS,
      $28;
    if (undefined === $29) $29 = [];
    var $30 = $29.length;
    for ($28 = 0; $28 < $30; $28++) {
      _file = $29[$28];
      _fn = ('./' + _file);
      _implementation = require(_fn);
      _implementation.SAI = $;
      _manifest = _implementation.manifest;
      _docs = _implementation.docs;
      var $26 = _manifest,
        _category = undefined;
      if (undefined === $26) $26 = {};
      for (_category in $26) {
        _library = $26[_category];
        if (undefined === _documents[_category]) _documents[_category] = {};
        var $24 = _library,
          _constructName = undefined;
        if (undefined === $24) $24 = {};
        for (_constructName in $24) {
          _construct = $24[_constructName];
          _doc = ((undefined === ($_b = ((undefined === ($_b = (_docs)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_constructName])) || {});
          _synref = [];
          var $22 = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $22) $22 = {};
          for (_clauseName in $22) {
            _requestedSyntax = $22[_clauseName];
            if (undefined === _seealso[_clauseName]) _seealso[_clauseName] = [];
            _seealso[_clauseName].push([_category, _constructName]);
            var $20 = _requestedSyntax,
              _type = undefined;
            if (undefined === $20) $20 = {};
            for (_type in $20) {
              _val = $20[_type];
              _sub = (((_clauseName === _constructName)) ? ('main') : ('aux'));
              _synref.push('' + ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_prefix)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_sub])))) ? $_b : '') + _clauseName + ' ' + $.validSyntax[_category][_type]);;
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
  var $_d, $_c, $56, $55, $54, $53, $52, $51, $50, $49, $48, $47, $46, $45, $44, $43, $42, _heredoc, _isBlank, _isComment, _trimmed, $41, _depth, $40, _trail, $39, _line, $38, $37, $36, $35, $34, $33, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $32, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $34 = (_lineno - 3),
          $35 = (_lineno + 4),
          $36 = 1;
        if ($36 <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
        for (; $34 < $35; $34 = $34 + $36) {
          if (undefined !== ($33 = (_rawlines[$34]))) {
            _result += '' + $34 + ':' + ((($34 === _lineno)) ? ('->') : ('  ')) + ' ' + $33 + '\n';
          };
        }
        return (_result);
      }
    };
    if ($38 = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
    }
    var $53 = _rawlines,
      _lineno;
    if (undefined === $53) $53 = [];
    var $54 = $53.length;
    for (_lineno = 0; _lineno < $54; _lineno++) {
      _line = $53[_lineno];
      if ($39 = ((_line.indexOf('\t') >= 0))) {
        throw new Error('SAI Compiler: tab characters are not supported in source files ' + _Context(_lineno));
      }
      _trail = _line.length;
      var $40;
      while ($40 = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      _line = $AI.slice_op(_line, 0, _trail);
      _depth = 0;
      var $41;
      while ($41 = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      _isBlank = (0 === _trimmed.length);
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        if ($43 = ((_heredocstate === 2))) {
          if ($42 = ((_depth < _heredepth))) {
            _heredocstate = 0;
          }
        }
        if ($45 = ((_heredocstate === 1))) {
          if ($44 = ((_depth <= _heredepth))) {
            throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
          }
          _lines.push(_INDENT);
          _indent.unshift(_depth);
          _heredepth = _depth;
          _heredocstate = 2;
        }
        if ($48 = ((_heredocstate === 0))) {
          if ($46 = (_heredoc)) {
            _heredocstate = 1;
            _heredepth = _depth;
          }
          if ($47 = ((_depth > _indent[0]))) {
            _indent.unshift(_depth);
            _lines.push(_INDENT);
          }
        }
        if ($51 = ((_depth < _indent[0]))) {
          var $49;
          while ($49 = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            _indent.shift();
          }
          if ($50 = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
          }
        }
      }
      if (!((_isComment && (_heredocstate && (_depth < _heredepth))))) {
        if ($52 = ((_heredocstate && (_depth > _heredepth)))) {
          _trimmed = $AI.slice_op(_line, _heredepth, undefined);
        }
        _lines.push(_trimmed);
      };
    }
    var $56;
    while ($56 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return (_lines);
  }
};
var $9g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $57, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
  }
};
var $10g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $70, $69, $68, $67, $66, $65, $64, $63, $62, $61, $60, $59, _line, _newcontext, _minind, _ind, _lines, _context, $58, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $62 = _lines,
      $61;
    if (undefined === $62) $62 = [];
    var $63 = $62.length;
    for ($61 = 0; $61 < $63; $61++) {
      _line = $62[$61];
      if ($59 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($60 = ((_line === _DEDENT))) {
        _ind--;;
      }
      _minind = Math.min(_minind, _ind);;
    }
    _ind = (0 - (_minind));
    var $68 = _lines,
      $67;
    if (undefined === $68) $68 = [];
    var $69 = $68.length;
    for ($67 = 0; $67 < $69; $67++) {
      _line = $68[$67];
      if ($65 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($66 = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
      };
    }
    return (_newcontext);
  }
};
var $11g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $83, $82, $81, $80, $79, _location, $78, $77, $76, _meta, $75, _js, _opts, _source, _fn, _bound, _rawsource, $74, $73, _msg, $72, _grammar, _PEG, _parserFile, _grammarFile, $71, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if ($72 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
        _PEG = require('pegjs');
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
    } catch ($74) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $74 + '\n' + '';
      if ($73 = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $74.location.start.offset);
      }
      throw new Error(_msg);
    }
    $.mainParser = eval($.mainParser);
    return (function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        try {
          _opts = {
            startrule: ((_fn) ? ('startFile') : ('startExpression')),
            bound: _bound,
            globals: $.config.verbs,
            constructs: $.config.constructs,
            pipers: $.config.pipers,
            persist: $.persist,
            filename: _fn,
            failures: undefined
          };
          _js = $.mainParser.parse(_source, _opts);
          if ($75 = (_opts.failures)) {
            throw new Error(_opts.failures);
          }
        } catch ($82) {
          _meta = $AI.reduce_op_fast(_fn, function($78, $76, $77) {
            var $t = '  ' + $77.toUpperCase() + ': ' + $76 + '\n';
            return (undefined === $78) ? $t : ($78 + $t);
          }, undefined);
          _location = undefined;
          if ($79 = ($82.location)) {
            _location = $79.start.offset;
          }
          if ($80 = ($82.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($80[1]));
          }
          if (undefined !== ($81 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $82.message + '\n' + '');
          } else {
            $AI.debug_op($82);
            throw new Error('SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $82 + '\n' + '');
          }
        }
        if ($83 = ($.config.options.beautify)) {
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
var $12g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $93, $92, $91, $90, $89, $88, $87, $86, $85, _filename, _extension, _path, $84, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $91 = $.config.paths,
      $90;
    if (undefined === $91) $91 = [];
    var $92 = $91.length;
    for ($90 = 0; $90 < $92; $90++) {
      _path = $91[$90];
      var $87 = ['.sai', ''],
        $86;
      if (undefined === $87) $87 = [];
      var $88 = $87.length;
      for ($86 = 0; $86 < $88; $86++) {
        _extension = $87[$86];
        _filename = _PATH.join(_path, (_name + _extension));
        try {
          return ({
            success: true,
            source: _FS.readFileSync(_filename).toString(),
            context: {
              name: _name,
              loader: 'SAI.GetSourceFromPaths',
              path: _filename,
              mtime: _FS.statSync(_filename).mtime,
              fetched: new Date()
            }
          });
        } catch ($85) {;
        };
      };
    }
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + ''
    });
  }
};
var $13g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $_d, $_c, $95, $94, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($95) {
      $AI.debug_op('ERROR IN HERE');
      $AI.debug_op(_source);
      $AI.debug_op($95);
    }
  }
};
var $14g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $97, _s2, _protogen, _source, _load, _s1, $96, _name = p,
    $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'); {
    if (undefined === $.protogens[_name]) $.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        _load = $.config.Loader(_name);
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context);
        }
        _source = $.Parse(_load.source, undefined, _load.context);
        _source = 'var __context=' + JSON.stringify(_load.context) + ';\n' + _source;
        _protogen = $.Compile(_source);
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        _s2 = new Date();
        if ($97 = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return (_protogen);
      }
    }();
    return ($.protogens[_name]);
  }
};
var $15g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $98, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
  }
};
var $16g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $105, $104, $103, $102, $101, $100, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $99, _name = p,
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
        var $105 = _obj.__inherits;
        _ancestors[_leaf] = $105;
        var $102 = $105,
          $101;
        if (undefined === $102) $102 = [];
        var $103 = $102.length;
        for ($101 = 0; $101 < $103; $101++) {
          $100 = $102[$101];
          _heritage.push($100);;
        };
      }
    }
    return (_ancestors);
  }
};
var $17g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $112, _protogen, $111, $110, $109, $108, $107, _adopt, _prototype, _ancestors, $106, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $109 = _ancestors[_name],
              $108;
            if (undefined === $109) $109 = [];
            var $110 = $109.length;
            for ($108 = 0; $108 < $110; $108++) {
              $107 = $109[$108];
              _adopt($107);;
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
        if ($112 = ($.isas[_prototype.isa])) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        $.isas[_prototype.isa] = _name;
        _SAILIB.finalizePrototype(_prototype);
        return (_prototype);
      }
    }();
    return ($.prototypes[_name]);
  }
};
var $18g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $119, $118, $117, $116, $115, _adopt, _source, $114, _islib, _ancestors, $113, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if ($114 = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $117 = _ancestors[_name],
          $116;
        if (undefined === $117) $117 = [];
        var $118 = $117.length;
        for ($116 = 0; $116 < $118; $116++) {
          $115 = $117[$116];
          _adopt($115);;
        }
        _source += ($.sources[_name] + '\n');
      }
    };
    _adopt(_name);
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    return (_source);
  }
};
var $19g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $122, $121, $120, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($122 = ($.GetPrototype(_name)))) {
      if (undefined !== ($121 = ($122.constructor))) {
        return ($121);
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $20g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $126, $125, $124, _obj, $123, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($126 = ($.GetPrototype(_name)))) {
      _obj = Object.create($126);
      if ($124 = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      if ($125 = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $21g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $136, $135, $134, $133, $132, $131, $130, $129, $128, $127, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($128 = (_c.paths))) {
      $.config.paths = $128;
    }
    if (undefined !== ($130 = (_c.verbs))) {
      $129 = $.config.verbs;
      $.config.verbs = $AI.overlay_op($129, $130);
    }
    if (undefined !== ($132 = (_c.options))) {
      $131 = $.config.options;
      $.config.options = $AI.overlay_op($131, $132);
    }
    if (undefined !== ($134 = (_c.constructs))) {
      $133 = $.config.constructs;
      $.config.constructs = $AI.overlay_op($133, $134);
    }
    if (undefined !== ($135 = (_c.Loader))) {
      $.config.Loader = $135;
    }
    if ($136 = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
