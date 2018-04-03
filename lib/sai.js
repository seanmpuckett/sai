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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/sai.sai","mtime":"2018-04-02T23:29:39.777Z","fetched":"2018-04-03T18:15:35.775Z"};
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
    'environment': '$AI.environment',
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
  version: '0.2.6',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Clean", "IntegrateConstructs", "Document", "Dedenter", "WrapExtract", "Contextualize", "GetParser", "GetSourceFromFilename", "GetSourceFromPaths", "Compile", "GetProtogen", "Expression", "GetAncestors", "GetPrototype", "GetSource", "Require", "Create", "Configure", "RegisterWithNode", "Environment", "isa"]);
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
var $3g = prototype['Instantiate'] || function() {};
prototype['Instantiate'] = function(p) {
  var $ = this['Instantiate'] ? this : $bindfail('Instantiate'),
    $_c, $_d; {
    $.Clean();
    /*@:144*/
  }
};
var $4g = prototype['Clean'] || function() {};
prototype['Clean'] = function(p) {
  var $0_this, $ = this['Clean'] ? this : $bindfail('Clean'),
    $_c, $_d; {
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
        /*@:169*/
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
    _SAILIB.environment = function() {
      return ($.Environment).apply($, arguments);
    };
    /*@:178*/
    $.IntegrateConstructs();
    /*@:179*/
  }
};
var $5g = prototype['IntegrateConstructs'] || function() {};
prototype['IntegrateConstructs'] = function(p) {
  var $10_none, $11, $12_list, $13_none, $14_error, $15_key, $16_list, $17_length, $18_none, $1_this, $2_list, $3_none, $4_trial, $5_list, $6_none, $7_list, $8_trial, $9_list, $ = this['IntegrateConstructs'] ? this : $bindfail('IntegrateConstructs'),
    $_b, $_c, $_d, _category, _clauseName, _construct, _constructName, _description, _element, _fail, _file, _fn, _implementation, _library, _manifest, _msg, _requestedSyntax, _requiredElements, _type, _val; {
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
    /*@:197*/
    _fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _file + '/' + _category + '/' + _constructName + _msg);
        /*@:199*/
      }
    };
    /*@:200*/
    var $16_list = _CONSTRUCTS,
      $15_key;
    if (undefined === $16_list) $16_list = [];
    var $17_length = $16_list.length;
    for ($15_key = 0; $15_key < $17_length; $15_key++) {
      _file = $16_list[$15_key];
      try {
        _fn = ('./' + _file);
        /*@:203*/
        _implementation = require(_fn);
        /*@:204*/
        _implementation.SAI = $;
        /*@:205*/
        _manifest = _implementation.manifest;
        /*@:206*/
        var $12_list = _manifest,
          _category = undefined;
        if (undefined === $12_list) $12_list = {};
        for (_category in $12_list) {
          _library = $12_list[_category];
          if (!(_VALIDSYNTAX[_category])) {
            _fail(' unsupported category type');
            /*@:211*/
          }
          /*@:212*/
          var $9_list = _library,
            _constructName = undefined;
          if (undefined === $9_list) $9_list = {};
          for (_constructName in $9_list) {
            _construct = $9_list[_constructName];
            var $2_list = _requiredElements[_category],
              _element = undefined;
            if (undefined === $2_list) $2_list = {};
            for (_element in $2_list) {
              _description = $2_list[_element];
              if (!((undefined !== _construct[_element]))) {
                _fail(' is missing ' + _description + '.');
              };
            }
            /*@:216*/
            if ($4_trial = (((undefined !== _construct.clauses) && (!((undefined !== _construct.clauses[_constructName])))))) {
              _fail(' is missing a clause definition for itself');
            }
            /*@:218*/
            if ($8_trial = ((undefined === ($_b = ((undefined === ($_b = (_requiredElements)) ? undefined : ($_b[_category])))) ? undefined : ($_b.clauses)))) {
              var $7_list = _construct.clauses,
                _clauseName = undefined;
              if (undefined === $7_list) $7_list = {};
              for (_clauseName in $7_list) {
                _requestedSyntax = $7_list[_clauseName];
                var $5_list = _requestedSyntax,
                  _type = undefined;
                if (undefined === $5_list) $5_list = {};
                for (_type in $5_list) {
                  _val = $5_list[_type];
                  if (!(_VALIDSYNTAX[_category][_type])) {
                    _fail('/' + _clauseName + ' asks for illegal syntax "' + _type + '"');
                  };
                };
              }
              if (_clauseName === undefined) {
                _fail(' has no clauses defined');
              }
            };
          }
          /*@:225*/
          $11 = $.config[_category];
          $.config[_category] = $AI.overlay_op($11, _library);
          /*@:226*/
          ;
        }
      } catch ($14_error) {
        $AI.debug_op($14_error);
        /*@:229*/
      };
    }
  }
};
var $6g = prototype['Document'] || function() {};
prototype['Document'] = function(p) {
  var $19_this, $20_list, $21_none, $22_list, $23_none, $24_list, $25_none, $26_list, $27_none, $28_key, $29_list, $30_length, $31_none, $ = this['Document'] ? this : $bindfail('Document'),
    $_b, $_c, $_d, _category, _clauseName, _construct, _constructName, _doc, _docs, _documents, _file, _fn, _implementation, _library, _manifest, _page, _prefix, _requestedSyntax, _seealso, _sub, _synref, _type, _val; {
    _documents = {};
    /*@:239*/
    _prefix = {
      'pipers': {
        main: '... | ',
        aux: '(optional) '
      }
    };
    /*@:244*/
    _seealso = {};
    /*@:245*/
    var $29_list = _CONSTRUCTS,
      $28_key;
    if (undefined === $29_list) $29_list = [];
    var $30_length = $29_list.length;
    for ($28_key = 0; $28_key < $30_length; $28_key++) {
      _file = $29_list[$28_key];
      _fn = ('./' + _file);
      _implementation = require(_fn);
      _implementation.SAI = $;
      _manifest = _implementation.manifest;
      _docs = _implementation.docs;
      /*@:254*/
      var $26_list = _manifest,
        _category = undefined;
      if (undefined === $26_list) $26_list = {};
      for (_category in $26_list) {
        _library = $26_list[_category];
        if (undefined === _documents[_category]) _documents[_category] = {};
        /*@:256*/
        var $24_list = _library,
          _constructName = undefined;
        if (undefined === $24_list) $24_list = {};
        for (_constructName in $24_list) {
          _construct = $24_list[_constructName];
          _doc = (_docs[_category][_constructName] || {});
          /*@:260*/
          _synref = [];
          /*@:261*/
          var $22_list = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $22_list) $22_list = {};
          for (_clauseName in $22_list) {
            _requestedSyntax = $22_list[_clauseName];
            if (undefined === _seealso[_clauseName]) _seealso[_clauseName] = [];
            /*@:264*/
            _seealso[_clauseName].push([((undefined !== ($_b = _doc.category)) ? $_b : _category), _constructName, ((undefined !== ($_b = _doc.title)) ? $_b : _clauseName)]);
            /*@:265*/
            var $20_list = _requestedSyntax,
              _type = undefined;
            if (undefined === $20_list) $20_list = {};
            for (_type in $20_list) {
              _val = $20_list[_type];
              _sub = (((_clauseName === _constructName)) ? ('main') : ('aux'));
              /*@:267*/
              _synref.push('' + ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_prefix)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_sub])))) ? $_b : '') + _clauseName + ' ' + _VALIDSYNTAX[_category][_type]);;
            }
            /*@:268*/
            _synref.push('');
            /*@:269*/
            ;
          }
          /*@:270*/
          _page = {
            name: _constructName,
            subtitle: 'subtitle',
            summary: 'summary',
            synref: _synref.join('\n'),
            detail: 'detail'
          };
          /*@:277*/
          _documents[_category][_constructName] = $AI.overlay_op(_page, _doc);
          /*@:278*/
          ;
        };
      };
    }
    /*@:279*/
    return ({
      documents: _documents,
      references: _seealso
    });
  }
};
var $7g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $32_this, $33_this, $34_counter, $35_stop, $36_step, $37_none, $38_trial, $39_trial, $40_stop, $41_step, $42_none, $43_trial, $44_this, $45_this, $46_trial, $47_trial, $48_trial, $49_trial, $50_trial, $51_trial, $52_trial, $53_trial, $54_trial, $55_trial, $56_trial, $57_trial, $58_this, $59_trial, $60_trial, $61_trial, $62_list, $63_length, $64_none, $65_this, $ = this['Dedenter'] ? this : $bindfail('Dedenter'),
    $_c, $_d, _Context, _depth, _heredepth, _heredoc, _heredocstate, _i, _indent, _isBlank, _isComment, _isExample, _line, _lineno, _lines, _literate, _offset, _rawlines, _result, _src = p,
    _trail, _trimmed; {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _literate = false;
    _offset = 1;
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        /*@:303*/
        var $34_counter = (_lineno - 3),
          $35_stop = (_lineno + 4),
          $36_step = 1;
        if ($36_step <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
        for (; $34_counter < $35_stop; $34_counter = $34_counter + $36_step) {
          if (undefined !== ($33_this = (_rawlines[$34_counter]))) {
            _result += '' + $34_counter + ':' + ((($34_counter === _lineno)) ? ('->') : ('  ')) + ' ' + $33_this + '\n';
          };
        }
        /*@:306*/
        return (_result);
        /*@:307*/
      }
    };
    /*@:309*/
    if ($38_trial = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
      /*@:311*/
      _offset = (_offset || 0) + 1;
      /*@:312*/
    }
    /*@:313*/
    var _i = 0,
      $40_stop = $AI.min_op(10, _rawlines.length),
      $41_step = 1;
    if ($41_step <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
    for (; _i < $40_stop; _i = _i + $41_step) {
      if ($39_trial = (_rawlines[_i].match(/^\#+\s/))) {
        _literate = true;
        /*@:316*/
      };
    }
    /*@:317*/
    var $62_list = _rawlines,
      _lineno;
    if (undefined === $62_list) $62_list = [];
    var $63_length = $62_list.length;
    for (_lineno = 0; _lineno < $63_length; _lineno++) {
      _line = $62_list[_lineno];
      if ($43_trial = ((_line.indexOf('\t') >= 0))) {
        throw new Error('SAI Compiler: tab characters are not supported in source files ' + _Context(_lineno));
        /*@:321*/
      }
      /*@:322*/
      _trail = _line.length;
      /*@:323*/
      var $44_this;
      while ($44_this = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      /*@:324*/
      _line = $AI.slice_op(_line, 0, _trail);
      /*@:325*/
      _depth = 0;
      /*@:327*/
      var $45_this;
      while ($45_this = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      /*@:328*/
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      /*@:329*/
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      /*@:331*/
      _isBlank = (0 === _trimmed.length);
      /*@:332*/
      if ($50_trial = (_literate)) {
        if ($46_trial = ((_depth < 2))) {
          if (!(_isBlank)) {
            _isExample = false;
          }
          /*@:337*/
          if (!((_isBlank && (_heredocstate === 2)))) {
            continue;
          }
        } else if ($47_trial = ((_depth < 4))) {
          throw new Error('SAI Compiler: file looks \'literate\' with a # header up top, but has lines with an indent of 2 or 3 spaces.' + '\n' + 'Literate SAI files should have left justified markdown (one space indent allowed for lists)' + '\n' + 'and all code should be indented four spaces or more.  So, basically, this looks wrong: ' + _Context(_lineno));
        } else if ($48_trial = (_isExample)) {
          continue;
        } else if ($49_trial = (('// example' === $AI.slice_op(_line, undefined, (0 - (10)))))) {
          _isExample = true;
          /*@:348*/
          continue;
        } else {
          _depth = (_depth - 4);
          /*@:351*/
          _line = $AI.slice_op(_line, 4, undefined);
          /*@:352*/
        }
      }
      /*@:353*/
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        /*@:355*/
        if ($52_trial = ((_heredocstate === 2))) {
          if ($51_trial = ((_depth < _heredepth))) {
            _heredocstate = 0;
            /*@:359*/
          }
        }
        /*@:360*/
        if ($54_trial = ((_heredocstate === 1))) {
          if ($53_trial = ((_depth <= _heredepth))) {
            throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
          }
          /*@:363*/
          _lines.push(_INDENT);
          /*@:364*/
          _indent.unshift(_depth);
          /*@:365*/
          _heredepth = _depth;
          /*@:366*/
          _heredocstate = 2;
          /*@:367*/
        }
        /*@:368*/
        if ($57_trial = ((_heredocstate === 0))) {
          if ($55_trial = (_heredoc)) {
            _heredocstate = 1;
            /*@:371*/
            _heredepth = _depth;
          }
          /*@:372*/
          if ($56_trial = ((_depth > _indent[0]))) {
            _indent.unshift(_depth);
            /*@:374*/
            _lines.push(_INDENT);
            /*@:375*/
          }
        }
        /*@:376*/
        if ($60_trial = ((_depth < _indent[0]))) {
          var $58_this;
          while ($58_this = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            /*@:379*/
            _indent.shift();
          }
          /*@:380*/
          if ($59_trial = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            /*@:382*/
          }
        }
      }
      /*@:383*/
      if (!((_isComment && (_heredocstate && (_depth < _heredepth))))) {
        if ($61_trial = ((_heredocstate && (_depth > _heredepth)))) {
          _trimmed = $AI.slice_op(_line, _heredepth, undefined);
        }
        /*@:386*/
        _lines.push('@' + (_lineno + _offset) + ':' + _trimmed);
        /*@:387*/
      };
    }
    /*@:388*/
    var $65_this;
    while ($65_this = (_indent.shift())) {
      _lines.push(_DEDENT);
      /*@:390*/
    }
    /*@:391*/
    _lines.unshift('');
    /*@:392*/
    _lines.push('');
    /*@:393*/
    _lines = _lines.join('\n');
    /*@:394*/
    return (_lines);
    /*@:396*/
  }
};
var $8g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $66_this, $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'),
    _source = p; {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
    /*@:405*/
  }
};
var $9g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $67_this, $68_trial, $69_trial, $70_key, $71_list, $72_length, $73_none, $74_trial, $75_trial, $76_trial, $77_key, $78_list, $79_length, $80_none, $ = this['Contextualize'] ? this : $bindfail('Contextualize'),
    $_c, $_d, _context, _ind, _line, _linenorex, _lines, _ln, _minind, _newcontext, _source = p; {
    _linenorex = /^\@([0-9]+):(.*)/;
    /*@:414*/
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    /*@:422*/
    var $71_list = _lines,
      $70_key;
    if (undefined === $71_list) $71_list = [];
    var $72_length = $71_list.length;
    for ($70_key = 0; $70_key < $72_length; $70_key++) {
      _line = $71_list[$70_key];
      if ($68_trial = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($69_trial = ((_line === _DEDENT))) {
        _ind--;;
      }
      /*@:425*/
      _minind = Math.min(_minind, _ind);
      /*@:426*/
      ;
    }
    /*@:427*/
    _ind = (0 - (_minind));
    /*@:428*/
    var $78_list = _lines,
      $77_key;
    if (undefined === $78_list) $78_list = [];
    var $79_length = $78_list.length;
    for ($77_key = 0; $77_key < $79_length; $77_key++) {
      _line = $78_list[$77_key];
      if ($75_trial = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($76_trial = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _ln = _linenorex.exec(_line);
        /*@:434*/
        if ($74_trial = (_ln)) {
          _newcontext += (_ln[1] + (': ' + ('  '.repeat(_ind) + (_ln[2] + '\n'))));
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
          /*@:438*/
        }
      };
    }
    /*@:439*/
    return (_newcontext);
    /*@:440*/
  }
};
var $10g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $81_this, $82_trial, $83_trial, $84_error, $85_trial, $86_this, $87_key, $88_sum, $89_trial, $90_trial, $91_this, $92_error, $93_trial, $ = this['GetParser'] ? this : $bindfail('GetParser'),
    $_c, $_d, _PEG, _bound, _fn, _grammar, _grammarFile, _js, _location, _meta, _msg, _opts, _parserFile, _rawsource, _source; {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      /*@:456*/
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      /*@:457*/
      if ($82_trial = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
        _PEG = require('pegjs');
        _grammar = _FS.readFileSync(_grammarFile).toString();
        $.mainParser = _PEG.generate(_grammar, {
          allowedStartRules: ['startFile', 'startExpression'],
          output: 'source',
          optimize: 'size',
          trace: 0,
          cache: true
        });
        /*@:472*/
        _FS.writeFileSync(_parserFile, $.mainParser);
        /*@:473*/
      } else {
        $.mainParser = _FS.readFileSync(_parserFile).toString();
        /*@:476*/
      }
    } catch ($84_error) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $84_error + '\n' + '';
      /*@:485*/
      if ($83_trial = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $84_error.location.start.offset);
        /*@:487*/
      }
      /*@:488*/
      throw new Error(_msg);
      /*@:489*/
    }
    /*@:490*/
    $.mainParser = eval($.mainParser);
    /*@:491*/
    return (function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        /*@:498*/
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
          /*@:509*/
          _js = $.mainParser.parse(_source, _opts);
          /*@:510*/
          if ($85_trial = (_opts.failures)) {
            throw new Error(_opts.failures);
            /*@:513*/
          }
        } catch ($92_error) {
          _meta = $AI.sum_op(_fn, function($88_sum, $86_this, $87_key) {
            var $t = '  ' + $87_key.toUpperCase() + ': ' + $86_this + '\n';
            return (undefined === $88_sum) ? $t : ($88_sum + $t);
          }, undefined);
          /*@:516*/
          _location = undefined;
          /*@:518*/
          if ($89_trial = ($92_error.location)) {
            _location = $89_trial.start.offset;
          }
          /*@:520*/
          if ($90_trial = ($92_error.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($90_trial[1]));
            /*@:522*/
          }
          /*@:523*/
          if (undefined !== ($91_this = (_location))) {
            $92_error.message = 'SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $92_error.message + '\n' + '';
          } else {
            $92_error.message = 'SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $92_error.message + '\n' + '';
          }
          /*@:537*/
          throw $92_error;
          /*@:538*/
        }
        /*@:539*/
        if ($93_trial = ($.config.options.beautify)) {
          _js = $.Beautify(_js, {
            indent_size: 2,
            preserve_newlines: false,
            brace_style: 'collapse'
          });
        }
        /*@:545*/
        return (_js);
        /*@:546*/
      }
    });
  }
};
var $11g = prototype['GetSourceFromFilename'] || function() {};
prototype['GetSourceFromFilename'] = function(p) {
  var $94_this, $95_error, $ = this['GetSourceFromFilename'] ? this : $bindfail('GetSourceFromFilename'),
    $_c, $_d, _filename = p; {
    try {
      return ({
        success: true,
        source: _FS.readFileSync(_filename).toString(),
        context: {
          loader: 'SAI.GetSourceFromFilename',
          path: _filename,
          mtime: _FS.statSync(_filename).mtime,
          fetched: new Date()
        }
      });
    } catch ($95_error) {
      return (undefined);
      /*@:562*/
    }
  }
};
var $12g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $100_length, $101_none, $102_key, $103_list, $104_length, $105_none, $96_this, $97_this, $98_key, $99_list, $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'),
    _extension, _filename, _name = p,
    _path; {
    var $103_list = $.config.paths,
      $102_key;
    if (undefined === $103_list) $103_list = [];
    var $104_length = $103_list.length;
    for ($102_key = 0; $102_key < $104_length; $102_key++) {
      _path = $103_list[$102_key];
      var $99_list = ['.sai.md', '.sai', '.md', ''],
        $98_key;
      if (undefined === $99_list) $99_list = [];
      var $100_length = $99_list.length;
      for ($98_key = 0; $98_key < $100_length; $98_key++) {
        _extension = $99_list[$98_key];
        _filename = _PATH.join(_path, (_name + _extension));
        /*@:575*/
        if (undefined !== ($97_this = ($.GetSourceFromFilename(_filename)))) {
          $97_this.name = _name;
          /*@:577*/
          $97_this.loader += '/GetSourceFromPaths';
          /*@:578*/
          return ($97_this);
          /*@:579*/
        };
      };
    }
    /*@:580*/
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + ''
    });
  }
};
var $13g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $106_this, $107_error, $ = this['Compile'] ? this : $bindfail('Compile'),
    $_c, $_d, _source = p; {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($107_error) {
      $AI.debug_op('ERROR IN HERE');
      /*@:598*/
      $AI.debug_op(_source);
      /*@:599*/
      $AI.debug_op($107_error);
      /*@:600*/
    }
  }
};
var $14g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $108_this, $109_trial, $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'),
    $_c, $_d, _load, _name = p,
    _protogen, _s1, _s2, _source; {
    if (undefined === $.protogens[_name]) $.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        /*@:611*/
        _load = $.config.Loader(_name);
        /*@:612*/
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context);
        }
        /*@:614*/
        _source = $.Parse(_load.source, undefined, _load.context);
        /*@:615*/
        _source = 'var __context=' + JSON.stringify(_load.context) + ';\n' + _source;
        /*@:616*/
        _protogen = $.Compile(_source);
        /*@:617*/
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        /*@:620*/
        _s2 = new Date();
        /*@:621*/
        if ($109_trial = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        /*@:623*/
        $.sources[_name] = _source;
        /*@:624*/
        return (_protogen);
        /*@:625*/
      }
    }();
    /*@:626*/
    return ($.protogens[_name]);
    /*@:627*/
  }
};
var $15g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var $110_this, $ = this['Expression'] ? this : $bindfail('Expression'),
    _js, _source = p; {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    /*@:636*/
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
    /*@:637*/
  }
};
var $16g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $111_this, $112_this, $113_key, $114_list, $115_length, $116_none, $117_this, $ = this['GetAncestors'] ? this : $bindfail('GetAncestors'),
    $_c, $_d, _ancestors, _heritage, _leaf, _name = p,
    _nodupes, _obj, _opts, _protogen; {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    /*@:650*/
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        /*@:653*/
        _obj = new $.protoConstructor(_name);
        /*@:654*/
        _protogen = $.GetProtogen(_leaf);
        /*@:655*/
        _opts = {
          name: _leaf
        };
        /*@:656*/
        _protogen(_obj, _opts, require, _SAILIB, _DIRNAME);
        /*@:657*/
        _obj.Constructor();
        /*@:658*/
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        /*@:660*/
        var $117_this = _obj.__inherits;
        _ancestors[_leaf] = $117_this;
        /*@:662*/
        var $114_list = $117_this,
          $113_key;
        if (undefined === $114_list) $114_list = [];
        var $115_length = $114_list.length;
        for ($113_key = 0; $113_key < $115_length; $113_key++) {
          $112_this = $114_list[$113_key];
          _heritage.push($112_this);
          /*@:664*/
          ;
        };
      }
    }
    /*@:665*/
    return (_ancestors);
    /*@:666*/
  }
};
var $17g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $118_this, $119_this, $120_key, $121_list, $122_length, $123_none, $124_trial, $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'),
    $_c, $_d, _adopt, _ancestors, _name = p,
    _protogen, _prototype; {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        /*@:678*/
        _prototype = new $.protoConstructor(_name);
        /*@:679*/
        _adopt = function(p) {
          var _name = p; {
            var $121_list = _ancestors[_name],
              $120_key;
            if (undefined === $121_list) $121_list = [];
            var $122_length = $121_list.length;
            for ($120_key = 0; $120_key < $122_length; $120_key++) {
              $119_this = $121_list[$120_key];
              _adopt($119_this);;
            }
            /*@:682*/
            _protogen = $.GetProtogen(_name);
            /*@:683*/
            _protogen(_prototype, {
              name: _name
            }, require, _SAILIB, _DIRNAME);
            /*@:684*/
          }
        };
        /*@:685*/
        _adopt(_name);
        /*@:686*/
        Object.defineProperty(_prototype, 'isa', {
          enumerable: false,
          value: _prototype.isa
        });
        /*@:688*/
        if ($124_trial = ($.isas[_prototype.isa])) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        /*@:690*/
        $.isas[_prototype.isa] = _name;
        /*@:691*/
        _SAILIB.finalizePrototype(_prototype);
        /*@:693*/
        return (_prototype);
        /*@:694*/
      }
    }();
    /*@:695*/
    return ($.prototypes[_name]);
    /*@:696*/
  }
};
var $18g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $125_this, $126_trial, $127_this, $128_key, $129_list, $130_length, $131_none, $ = this['GetSource'] ? this : $bindfail('GetSource'),
    $_c, $_d, _adopt, _ancestors, _islib, _name = p,
    _source; {
    _ancestors = $.GetAncestors(_name);
    /*@:705*/
    _islib = (0 <= _name.indexOf('sailib'));
    /*@:706*/
    if ($126_trial = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
      /*@:709*/
    }
    /*@:710*/
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '// Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '//' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() {' + '\n' + '  this.Constructor=function(){};' + '\n' + '  this.__tobelocked=[];' + '\n' + '  this.__tobefrozen=[];' + '\n' + '  this.__contracts=[];' + '\n' + '  this.__unverified=true;' + '\n' + '  this.isof={};' + '\n' + '  return this;' + '\n' + '}();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    /*@:730*/
    _adopt = function(p) {
      var _name = p; {
        var $129_list = _ancestors[_name],
          $128_key;
        if (undefined === $129_list) $129_list = [];
        var $130_length = $129_list.length;
        for ($128_key = 0; $128_key < $130_length; $128_key++) {
          $127_this = $129_list[$128_key];
          _adopt($127_this);;
        }
        /*@:733*/
        _source += ($.sources[_name] + '\n');
        /*@:734*/
      }
    };
    /*@:735*/
    _adopt(_name);
    /*@:736*/
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    /*@:746*/
    return (_source);
    /*@:747*/
  }
};
var $19g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $132_this, $133_this, $134_this, $ = this['Require'] ? this : $bindfail('Require'),
    _name = p; {
    if (undefined !== ($134_this = ($.GetPrototype(_name)))) {
      if (undefined !== ($133_this = ($134_this.constructor))) {
        return ($133_this);
      }
    }
    /*@:758*/
    throw new Error('SAI.Require: do not know how to create object ' + _name);
    /*@:759*/
  }
};
var $20g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $135_this, $136_trial, $137_trial, $138_this, $ = this['Create'] ? this : $bindfail('Create'),
    $_c, $_d, _name = p,
    _obj; {
    if (undefined !== ($138_this = ($.GetPrototype(_name)))) {
      _obj = Object.create($138_this);
      /*@:770*/
      if ($136_trial = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      /*@:771*/
      if ($137_trial = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      /*@:772*/
      return (_obj);
    }
    /*@:773*/
    throw new Error('SAI.Create: do not know how to create object ' + _name);
    /*@:774*/
  }
};
var $21g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $139_this, $140_this, $141, $142_this, $143, $144_this, $145, $146_this, $147_this, $148_trial, $ = this['Configure'] ? this : $bindfail('Configure'),
    _c = p; {
    if (undefined !== ($140_this = (_c.paths))) {
      $.config.paths = $140_this;
    }
    /*@:784*/
    if (undefined !== ($142_this = (_c.verbs))) {
      $141 = $.config.verbs;
      $.config.verbs = $AI.overlay_op($141, $142_this);
    }
    /*@:786*/
    if (undefined !== ($144_this = (_c.options))) {
      $143 = $.config.options;
      $.config.options = $AI.overlay_op($143, $144_this);
    }
    /*@:788*/
    if (undefined !== ($146_this = (_c.constructs))) {
      $145 = $.config.constructs;
      $.config.constructs = $AI.overlay_op($145, $146_this);
    }
    /*@:790*/
    if (undefined !== ($147_this = (_c.Loader))) {
      $.config.Loader = $147_this;
      /*@:792*/
    }
    /*@:793*/
    if ($148_trial = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
      /*@:795*/
    }
  }
};
var $22g = prototype['RegisterWithNode'] || function() {};
prototype['RegisterWithNode'] = function(p) {
  var $149_this, $150_this, $ = this['RegisterWithNode'] ? this : $bindfail('RegisterWithNode'),
    $_c, $_d, _REQUIRE, _filename, _module, _result; {
    _REQUIRE = require;
    /*@:804*/
    if (undefined !== ($150_this = (_REQUIRE.extensions))) {
      $150_this.sai = function(p, _filename) {
        var _module = p; {
          $.config.paths.unshift(_PATH.dirname(_filename));
          /*@:808*/
          _result = $.Require(_PATH.basename(_filename));
          /*@:809*/
          $.config.paths.shift();
          /*@:810*/
          return (_result);
        }
      };
    } else {
      throw new Error('SAI Runtime: Could not find require.extensions to register .sai files with node');
      /*@:813*/
    }
  }
};
var $23g = prototype['Environment'] || function() {};
prototype['Environment'] = function(p) {
  var $151_this, $ = this['Environment'] ? this : $bindfail('Environment'); {
    return ({
      dynamic: true,
      static: false,
      paths: $.config.paths,
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
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
