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
var __context={"name":"sai.sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-18T19:37:56.001Z","fetched":"2018-03-18T20:07:21.797Z"};
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
    /*@:139*/
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
        /*@:164*/
        return (this);
        /*@:165*/
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
    /*@:173*/
    $.IntegrateConstructs();
    /*@:174*/
  }
};
var $5g = prototype['IntegrateConstructs'] || function() {};
prototype['IntegrateConstructs'] = function(p) {
  var $_d, $_c, $_b, $18, $17, $16, $15, $14, $13, $12, $11, $10, $9, $8, $7, $6, $5, _type, _val, _clauseName, _requestedSyntax, $4, $3, $2, _element, _description, _constructName, _construct, _category, _library, _manifest, _implementation, _fn, _file, _msg, _fail, _requiredElements, $1, $ = this['IntegrateConstructs'] ? this : $bindfail('IntegrateConstructs'); {
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
    /*@:188*/
    _fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _file + '/' + _category + '/' + _constructName + _msg);
        /*@:190*/
      }
    };
    /*@:191*/
    var $16 = _CONSTRUCTS,
      $15;
    if (undefined === $16) $16 = [];
    var $17 = $16.length;
    for ($15 = 0; $15 < $17; $15++) {
      _file = $16[$15];
      try {
        _fn = ('./' + _file);
        /*@:194*/
        _implementation = require(_fn);
        /*@:195*/
        _implementation.SAI = $;
        /*@:196*/
        _manifest = _implementation.manifest;
        /*@:197*/
        var $12 = _manifest,
          _category = undefined;
        if (undefined === $12) $12 = {};
        for (_category in $12) {
          _library = $12[_category];
          if (!($.validSyntax[_category])) {
            _fail(' unsupported category type');
            /*@:202*/
          }
          /*@:203*/
          var $9 = _library,
            _constructName = undefined;
          if (undefined === $9) $9 = {};
          for (_constructName in $9) {
            _construct = $9[_constructName];
            var $2 = _requiredElements[_category],
              _element = undefined;
            if (undefined === $2) $2 = {};
            for (_element in $2) {
              _description = $2[_element];
              if (!((undefined !== _construct[_element]))) {
                _fail(' is missing ' + _description + '.');
              };
            }
            /*@:207*/
            if ($4 = (((undefined !== _construct.clauses) && (!((undefined !== _construct.clauses[_constructName])))))) {
              _fail(' is missing a clause definition for itself');
            }
            /*@:209*/
            if ($8 = ((undefined === ($_b = ((undefined === ($_b = (_requiredElements)) ? undefined : ($_b[_category])))) ? undefined : ($_b.clauses)))) {
              var $7 = _construct.clauses,
                _clauseName = undefined;
              if (undefined === $7) $7 = {};
              for (_clauseName in $7) {
                _requestedSyntax = $7[_clauseName];
                var $5 = _requestedSyntax,
                  _type = undefined;
                if (undefined === $5) $5 = {};
                for (_type in $5) {
                  _val = $5[_type];
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
          /*@:216*/
          $11 = $.config[_category];
          $.config[_category] = $AI.overlay_op($11, _library);
          /*@:217*/
          ;
        }
      } catch ($14) {
        $AI.debug_op($14);
        /*@:220*/
      };
    }
  }
};
var $6g = prototype['Document'] || function() {};
prototype['Document'] = function(p) {
  var $_d, $_c, $19, $ = this['Document'] ? this : $bindfail('Document'); {
    return ($.DocumentConstructs());
    /*@:224*/
  }
};
var $7g = prototype['DocumentConstructs'] || function() {};
prototype['DocumentConstructs'] = function(p) {
  var $_d, $_c, $_b, $32, $31, $30, $29, $28, $27, $26, $25, _page, $24, $23, $22, $21, _sub, _type, _val, _clauseName, _requestedSyntax, _synref, _doc, _constructName, _construct, _category, _library, _docs, _manifest, _implementation, _fn, _file, _seealso, _prefix, _documents, $20, $ = this['DocumentConstructs'] ? this : $bindfail('DocumentConstructs'); {
    _documents = {};
    /*@:229*/
    _prefix = {
      'pipers': {
        main: '... | ',
        aux: '(optional) '
      }
    };
    /*@:234*/
    _seealso = {};
    /*@:235*/
    var $30 = _CONSTRUCTS,
      $29;
    if (undefined === $30) $30 = [];
    var $31 = $30.length;
    for ($29 = 0; $29 < $31; $29++) {
      _file = $30[$29];
      _fn = ('./' + _file);
      _implementation = require(_fn);
      _implementation.SAI = $;
      _manifest = _implementation.manifest;
      _docs = _implementation.docs;
      /*@:244*/
      var $27 = _manifest,
        _category = undefined;
      if (undefined === $27) $27 = {};
      for (_category in $27) {
        _library = $27[_category];
        if (undefined === _documents[_category]) _documents[_category] = {};
        /*@:246*/
        var $25 = _library,
          _constructName = undefined;
        if (undefined === $25) $25 = {};
        for (_constructName in $25) {
          _construct = $25[_constructName];
          _doc = ((undefined === ($_b = ((undefined === ($_b = (_docs)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_constructName])) || {});
          /*@:250*/
          _synref = [];
          /*@:251*/
          var $23 = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $23) $23 = {};
          for (_clauseName in $23) {
            _requestedSyntax = $23[_clauseName];
            if (undefined === _seealso[_clauseName]) _seealso[_clauseName] = [];
            /*@:254*/
            _seealso[_clauseName].push([((undefined !== ($_b = _doc.category)) ? $_b : _category), _constructName, ((undefined !== ($_b = _doc.title)) ? $_b : _clauseName)]);
            /*@:255*/
            var $21 = _requestedSyntax,
              _type = undefined;
            if (undefined === $21) $21 = {};
            for (_type in $21) {
              _val = $21[_type];
              _sub = (((_clauseName === _constructName)) ? ('main') : ('aux'));
              /*@:257*/
              _synref.push('' + ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_prefix)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_sub])))) ? $_b : '') + _clauseName + ' ' + $.validSyntax[_category][_type]);;
            }
            /*@:258*/
            _synref.push('');
            /*@:259*/
            ;
          }
          /*@:260*/
          _page = {
            name: _constructName,
            subtitle: 'subtitle',
            summary: 'summary',
            synref: _synref.join('\n'),
            detail: 'detail'
          };
          /*@:267*/
          _documents[_category][_constructName] = $AI.overlay_op(_page, _doc);
          /*@:268*/
          ;
        };
      };
    }
    /*@:269*/
    return ({
      documents: _documents,
      references: _seealso
    });
  }
};
var $8g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $57, $56, $55, $54, $53, $52, $51, $50, $49, $48, $47, $46, $45, $44, $43, _heredoc, _isBlank, _isComment, _trimmed, $42, _depth, $41, _trail, $40, _line, $39, $38, $37, $36, $35, $34, _result, _lineno, _Context, _lines, _offset, _indent, _heredepth, _heredocstate, _rawlines, $33, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _offset = 1;
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        /*@:292*/
        var $35 = (_lineno - 3),
          $36 = (_lineno + 4),
          $37 = 1;
        if ($37 <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
        for (; $35 < $36; $35 = $35 + $37) {
          if (undefined !== ($34 = (_rawlines[$35]))) {
            _result += '' + $35 + ':' + ((($35 === _lineno)) ? ('->') : ('  ')) + ' ' + $34 + '\n';
          };
        }
        /*@:295*/
        return (_result);
        /*@:296*/
      }
    };
    /*@:298*/
    if ($39 = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
      /*@:300*/
      _offset = (_offset || 0) + 1;
      /*@:301*/
    }
    /*@:302*/
    var $54 = _rawlines,
      _lineno;
    if (undefined === $54) $54 = [];
    var $55 = $54.length;
    for (_lineno = 0; _lineno < $55; _lineno++) {
      _line = $54[_lineno];
      if ($40 = ((_line.indexOf('\t') >= 0))) {
        throw new Error('SAI Compiler: tab characters are not supported in source files ' + _Context(_lineno));
        /*@:306*/
      }
      /*@:307*/
      _trail = _line.length;
      /*@:308*/
      var $41;
      while ($41 = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      /*@:309*/
      _line = $AI.slice_op(_line, 0, _trail);
      /*@:310*/
      _depth = 0;
      /*@:312*/
      var $42;
      while ($42 = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      /*@:313*/
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      /*@:314*/
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      /*@:316*/
      _isBlank = (0 === _trimmed.length);
      /*@:317*/
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        /*@:320*/
        if ($44 = ((_heredocstate === 2))) {
          if ($43 = ((_depth < _heredepth))) {
            _heredocstate = 0;
            /*@:324*/
          }
        }
        /*@:325*/
        if ($46 = ((_heredocstate === 1))) {
          if ($45 = ((_depth <= _heredepth))) {
            throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
          }
          /*@:328*/
          _lines.push(_INDENT);
          /*@:329*/
          _indent.unshift(_depth);
          /*@:330*/
          _heredepth = _depth;
          /*@:331*/
          _heredocstate = 2;
          /*@:332*/
        }
        /*@:333*/
        if ($49 = ((_heredocstate === 0))) {
          if ($47 = (_heredoc)) {
            _heredocstate = 1;
            /*@:336*/
            _heredepth = _depth;
          }
          /*@:337*/
          if ($48 = ((_depth > _indent[0]))) {
            _indent.unshift(_depth);
            /*@:339*/
            _lines.push(_INDENT);
            /*@:340*/
          }
        }
        /*@:341*/
        if ($52 = ((_depth < _indent[0]))) {
          var $50;
          while ($50 = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            /*@:344*/
            _indent.shift();
          }
          /*@:345*/
          if ($51 = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            /*@:347*/
          }
        }
      }
      /*@:348*/
      if (!((_isComment && (_heredocstate && (_depth < _heredepth))))) {
        if ($53 = ((_heredocstate && (_depth > _heredepth)))) {
          _trimmed = $AI.slice_op(_line, _heredepth, undefined);
        }
        /*@:351*/
        _lines.push('@' + (_lineno + _offset) + ':' + _trimmed);
        /*@:352*/
      };
    }
    /*@:353*/
    var $57;
    while ($57 = (_indent.shift())) {
      _lines.push(_DEDENT);
      /*@:355*/
    }
    /*@:356*/
    _lines.unshift('');
    /*@:357*/
    _lines.push('');
    /*@:358*/
    _lines = _lines.join('\n');
    /*@:359*/
    return (_lines);
    /*@:361*/
  }
};
var $9g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $58, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
    /*@:370*/
  }
};
var $10g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $72, $71, $70, $69, $68, $67, $66, _ln, $65, $64, $63, $62, $61, $60, _line, _newcontext, _minind, _ind, _lines, _context, _linenorex, $59, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _linenorex = /^\@([0-9]+):(.*)/;
    /*@:379*/
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    /*@:387*/
    var $63 = _lines,
      $62;
    if (undefined === $63) $63 = [];
    var $64 = $63.length;
    for ($62 = 0; $62 < $64; $62++) {
      _line = $63[$62];
      if ($60 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($61 = ((_line === _DEDENT))) {
        _ind--;;
      }
      /*@:390*/
      _minind = Math.min(_minind, _ind);
      /*@:391*/
      ;
    }
    /*@:392*/
    _ind = (0 - (_minind));
    /*@:393*/
    var $70 = _lines,
      $69;
    if (undefined === $70) $70 = [];
    var $71 = $70.length;
    for ($69 = 0; $69 < $71; $69++) {
      _line = $70[$69];
      if ($67 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($68 = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _ln = _linenorex.exec(_line);
        /*@:399*/
        if ($66 = (_ln)) {
          _newcontext += (_ln[1] + (': ' + ('  '.repeat(_ind) + (_ln[2] + '\n'))));
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
          /*@:403*/
        }
      };
    }
    /*@:404*/
    return (_newcontext);
    /*@:405*/
  }
};
var $11g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $85, $84, $83, $82, $81, _location, $80, $79, $78, _meta, $77, _js, _opts, _source, _fn, _bound, _rawsource, $76, $75, _msg, $74, _grammar, _PEG, _parserFile, _grammarFile, $73, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      /*@:421*/
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      /*@:422*/
      if ($74 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
        _PEG = require('pegjs');
        _grammar = _FS.readFileSync(_grammarFile).toString();
        $.mainParser = _PEG.generate(_grammar, {
          allowedStartRules: ['startFile', 'startExpression'],
          output: 'source',
          optimize: 'size',
          trace: 0,
          cache: true
        });
        /*@:437*/
        _FS.writeFileSync(_parserFile, $.mainParser);
        /*@:438*/
      } else {
        $.mainParser = _FS.readFileSync(_parserFile).toString();
        /*@:441*/
      }
    } catch ($76) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $76 + '\n' + '';
      /*@:450*/
      if ($75 = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $76.location.start.offset);
        /*@:452*/
      }
      /*@:453*/
      throw new Error(_msg);
      /*@:454*/
    }
    /*@:455*/
    $.mainParser = eval($.mainParser);
    /*@:456*/
    return (function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        /*@:463*/
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
          /*@:474*/
          _js = $.mainParser.parse(_source, _opts);
          /*@:475*/
          if ($77 = (_opts.failures)) {
            throw new Error(_opts.failures);
            /*@:478*/
          }
        } catch ($84) {
          _meta = $AI.reduce_op_fast(_fn, function($80, $78, $79) {
            var $t = '  ' + $79.toUpperCase() + ': ' + $78 + '\n';
            return (undefined === $80) ? $t : ($80 + $t);
          }, undefined);
          /*@:481*/
          _location = undefined;
          /*@:483*/
          if ($81 = ($84.location)) {
            _location = $81.start.offset;
          }
          /*@:485*/
          if ($82 = ($84.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($82[1]));
            /*@:487*/
          }
          /*@:488*/
          if (undefined !== ($83 = (_location))) {
            $84.message = 'SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $84.message + '\n' + '';
          } else {
            $84.message = 'SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $84.message + '\n' + '';
          }
          /*@:502*/
          throw $84;
          /*@:503*/
        }
        /*@:504*/
        if ($85 = ($.config.options.beautify)) {
          _js = $.Beautify(_js, {
            indent_size: 2,
            preserve_newlines: false,
            brace_style: 'collapse'
          });
        }
        /*@:510*/
        return (_js);
        /*@:511*/
      }
    });
  }
};
var $12g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $95, $94, $93, $92, $91, $90, $89, $88, $87, _filename, _extension, _path, $86, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $93 = $.config.paths,
      $92;
    if (undefined === $93) $93 = [];
    var $94 = $93.length;
    for ($92 = 0; $92 < $94; $92++) {
      _path = $93[$92];
      var $89 = ['.sai', ''],
        $88;
      if (undefined === $89) $89 = [];
      var $90 = $89.length;
      for ($88 = 0; $88 < $90; $88++) {
        _extension = $89[$88];
        _filename = _PATH.join(_path, (_name + _extension));
        /*@:531*/
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
        } catch ($87) {; /*@:543*/
        };
      };
    }
    /*@:544*/
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + ''
    });
  }
};
var $13g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $_d, $_c, $97, $96, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($97) {
      $AI.debug_op('ERROR IN HERE');
      /*@:562*/
      $AI.debug_op(_source);
      /*@:563*/
      $AI.debug_op($97);
      /*@:564*/
    }
  }
};
var $14g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $99, _s2, _protogen, _source, _load, _s1, $98, _name = p,
    $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'); {
    if (undefined === $.protogens[_name]) $.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        /*@:574*/
        _load = $.config.Loader(_name);
        /*@:575*/
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context);
        }
        /*@:577*/
        _source = $.Parse(_load.source, undefined, _load.context);
        /*@:578*/
        _source = 'var __context=' + JSON.stringify(_load.context) + ';\n' + _source;
        /*@:579*/
        _protogen = $.Compile(_source);
        /*@:580*/
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        /*@:583*/
        _s2 = new Date();
        /*@:584*/
        if ($99 = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        /*@:586*/
        $.sources[_name] = _source;
        /*@:587*/
        return (_protogen);
        /*@:588*/
      }
    }();
    /*@:589*/
    return ($.protogens[_name]);
    /*@:590*/
  }
};
var $15g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $100, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    /*@:599*/
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
    /*@:600*/
  }
};
var $16g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $107, $106, $105, $104, $103, $102, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $101, _name = p,
    $ = this['GetAncestors'] ? this : $bindfail('GetAncestors'); {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    /*@:613*/
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        /*@:616*/
        _obj = new $.protoConstructor(_name);
        /*@:617*/
        _protogen = $.GetProtogen(_leaf);
        /*@:618*/
        _opts = {
          name: _leaf
        };
        /*@:619*/
        _protogen(_obj, _opts, require, _SAILIB, _DIRNAME);
        /*@:620*/
        _obj.Constructor();
        /*@:621*/
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        /*@:623*/
        var $107 = _obj.__inherits;
        _ancestors[_leaf] = $107;
        /*@:625*/
        var $104 = $107,
          $103;
        if (undefined === $104) $104 = [];
        var $105 = $104.length;
        for ($103 = 0; $103 < $105; $103++) {
          $102 = $104[$103];
          _heritage.push($102);
          /*@:627*/
          ;
        };
      }
    }
    /*@:628*/
    return (_ancestors);
    /*@:629*/
  }
};
var $17g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $114, _protogen, $113, $112, $111, $110, $109, _adopt, _prototype, _ancestors, $108, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        /*@:641*/
        _prototype = new $.protoConstructor(_name);
        /*@:642*/
        _adopt = function(p) {
          var _name = p; {
            var $111 = _ancestors[_name],
              $110;
            if (undefined === $111) $111 = [];
            var $112 = $111.length;
            for ($110 = 0; $110 < $112; $110++) {
              $109 = $111[$110];
              _adopt($109);;
            }
            /*@:645*/
            _protogen = $.GetProtogen(_name);
            /*@:646*/
            _protogen(_prototype, {
              name: _name
            }, require, _SAILIB, _DIRNAME);
            /*@:647*/
          }
        };
        /*@:648*/
        _adopt(_name);
        /*@:649*/
        Object.defineProperty(_prototype, 'isa', {
          enumerable: false,
          value: _prototype.isa
        });
        /*@:651*/
        if ($114 = ($.isas[_prototype.isa])) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        /*@:653*/
        $.isas[_prototype.isa] = _name;
        /*@:654*/
        _SAILIB.finalizePrototype(_prototype);
        /*@:656*/
        return (_prototype);
        /*@:657*/
      }
    }();
    /*@:658*/
    return ($.prototypes[_name]);
    /*@:659*/
  }
};
var $18g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $121, $120, $119, $118, $117, _adopt, _source, $116, _islib, _ancestors, $115, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    /*@:668*/
    _islib = (0 <= _name.indexOf('sailib'));
    /*@:669*/
    if ($116 = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
      /*@:672*/
    }
    /*@:673*/
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '// Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '//' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() {' + '\n' + '  this.Constructor=function(){};' + '\n' + '  this.__tobelocked=[];' + '\n' + '  this.__tobefrozen=[];' + '\n' + '  this.__contracts=[];' + '\n' + '  this.__unverified=true;' + '\n' + '  this.isof={};' + '\n' + '  return this;' + '\n' + '}();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    /*@:693*/
    _adopt = function(p) {
      var _name = p; {
        var $119 = _ancestors[_name],
          $118;
        if (undefined === $119) $119 = [];
        var $120 = $119.length;
        for ($118 = 0; $118 < $120; $118++) {
          $117 = $119[$118];
          _adopt($117);;
        }
        /*@:696*/
        _source += ($.sources[_name] + '\n');
        /*@:697*/
      }
    };
    /*@:698*/
    _adopt(_name);
    /*@:699*/
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    /*@:709*/
    return (_source);
    /*@:710*/
  }
};
var $19g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $124, $123, $122, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($124 = ($.GetPrototype(_name)))) {
      if (undefined !== ($123 = ($124.constructor))) {
        return ($123);
      }
    }
    /*@:721*/
    throw new Error('SAI.Require: do not know how to create object ' + _name);
    /*@:722*/
  }
};
var $20g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $128, $127, $126, _obj, $125, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($128 = ($.GetPrototype(_name)))) {
      _obj = Object.create($128);
      /*@:733*/
      if ($126 = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      /*@:734*/
      if ($127 = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      /*@:735*/
      return (_obj);
    }
    /*@:736*/
    throw new Error('SAI.Create: do not know how to create object ' + _name);
    /*@:737*/
  }
};
var $21g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $138, $137, $136, $135, $134, $133, $132, $131, $130, $129, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($130 = (_c.paths))) {
      $.config.paths = $130;
    }
    /*@:747*/
    if (undefined !== ($132 = (_c.verbs))) {
      $131 = $.config.verbs;
      $.config.verbs = $AI.overlay_op($131, $132);
    }
    /*@:749*/
    if (undefined !== ($134 = (_c.options))) {
      $133 = $.config.options;
      $.config.options = $AI.overlay_op($133, $134);
    }
    /*@:751*/
    if (undefined !== ($136 = (_c.constructs))) {
      $135 = $.config.constructs;
      $.config.constructs = $AI.overlay_op($135, $136);
    }
    /*@:753*/
    if (undefined !== ($137 = (_c.Loader))) {
      $.config.Loader = $137;
      /*@:755*/
    }
    /*@:756*/
    if ($138 = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
      /*@:758*/
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
