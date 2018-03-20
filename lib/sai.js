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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/sai.sai","mtime":"2018-03-19T13:54:56.630Z","fetched":"2018-03-20T19:27:10.651Z"};
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
  Loader: undefined
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
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Clean", "IntegrateConstructs", "Document", "Dedenter", "WrapExtract", "Contextualize", "GetParser", "GetSourceFromFilename", "GetSourceFromPaths", "Compile", "GetProtogen", "Expression", "GetAncestors", "GetPrototype", "GetSource", "Require", "Create", "Configure", "RegisterWithNode", "isa"]);
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
    globals: {},
    keywords: {},
    operators: {},
    pronouns: {},
    syntax: {}
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
    /*@:141*/
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
        /*@:166*/
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
    /*@:174*/
    $.IntegrateConstructs();
    /*@:175*/
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
    /*@:193*/
    _fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _file + '/' + _category + '/' + _constructName + _msg);
        /*@:195*/
      }
    };
    /*@:196*/
    var $16 = _CONSTRUCTS,
      $15;
    if (undefined === $16) $16 = [];
    var $17 = $16.length;
    for ($15 = 0; $15 < $17; $15++) {
      _file = $16[$15];
      try {
        _fn = ('./' + _file);
        /*@:199*/
        _implementation = require(_fn);
        /*@:200*/
        _implementation.SAI = $;
        /*@:201*/
        _manifest = _implementation.manifest;
        /*@:202*/
        var $12 = _manifest,
          _category = undefined;
        if (undefined === $12) $12 = {};
        for (_category in $12) {
          _library = $12[_category];
          if (!($.validSyntax[_category])) {
            _fail(' unsupported category type');
            /*@:207*/
          }
          /*@:208*/
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
            /*@:212*/
            if ($4 = (((undefined !== _construct.clauses) && (!((undefined !== _construct.clauses[_constructName])))))) {
              _fail(' is missing a clause definition for itself');
            }
            /*@:214*/
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
          /*@:221*/
          $11 = $.config[_category];
          $.config[_category] = $AI.overlay_op($11, _library);
          /*@:222*/
          ;
        }
      } catch ($14) {
        $AI.debug_op($14);
        /*@:225*/
      };
    }
  }
};
var $6g = prototype['Document'] || function() {};
prototype['Document'] = function(p) {
  var $_d, $_c, $_b, $31, $30, $29, $28, $27, $26, $25, $24, _page, $23, $22, $21, $20, _sub, _type, _val, _clauseName, _requestedSyntax, _synref, _doc, _constructName, _construct, _category, _library, _docs, _manifest, _implementation, _fn, _file, _seealso, _prefix, _documents, $19, $ = this['Document'] ? this : $bindfail('Document'); {
    _documents = {};
    /*@:235*/
    _prefix = {
      'pipers': {
        main: '... | ',
        aux: '(optional) '
      }
    };
    /*@:240*/
    _seealso = {};
    /*@:241*/
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
      /*@:250*/
      var $26 = _manifest,
        _category = undefined;
      if (undefined === $26) $26 = {};
      for (_category in $26) {
        _library = $26[_category];
        if (undefined === _documents[_category]) _documents[_category] = {};
        /*@:252*/
        var $24 = _library,
          _constructName = undefined;
        if (undefined === $24) $24 = {};
        for (_constructName in $24) {
          _construct = $24[_constructName];
          _doc = ((undefined === ($_b = ((undefined === ($_b = (_docs)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_constructName])) || {});
          /*@:256*/
          _synref = [];
          /*@:257*/
          var $22 = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $22) $22 = {};
          for (_clauseName in $22) {
            _requestedSyntax = $22[_clauseName];
            if (undefined === _seealso[_clauseName]) _seealso[_clauseName] = [];
            /*@:260*/
            _seealso[_clauseName].push([((undefined !== ($_b = _doc.category)) ? $_b : _category), _constructName, ((undefined !== ($_b = _doc.title)) ? $_b : _clauseName)]);
            /*@:261*/
            var $20 = _requestedSyntax,
              _type = undefined;
            if (undefined === $20) $20 = {};
            for (_type in $20) {
              _val = $20[_type];
              _sub = (((_clauseName === _constructName)) ? ('main') : ('aux'));
              /*@:263*/
              _synref.push('' + ((undefined !== ($_b = (undefined === ($_b = ((undefined === ($_b = (_prefix)) ? undefined : ($_b[_category])))) ? undefined : ($_b[_sub])))) ? $_b : '') + _clauseName + ' ' + $.validSyntax[_category][_type]);;
            }
            /*@:264*/
            _synref.push('');
            /*@:265*/
            ;
          }
          /*@:266*/
          _page = {
            name: _constructName,
            subtitle: 'subtitle',
            summary: 'summary',
            synref: _synref.join('\n'),
            detail: 'detail'
          };
          /*@:273*/
          _documents[_category][_constructName] = $AI.overlay_op(_page, _doc);
          /*@:274*/
          ;
        };
      };
    }
    /*@:275*/
    return ({
      documents: _documents,
      references: _seealso
    });
  }
};
var $7g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $56, $55, $54, $53, $52, $51, $50, $49, $48, $47, $46, $45, $44, $43, $42, _heredoc, _isBlank, _isComment, _trimmed, $41, _depth, $40, _trail, $39, _line, $38, $37, $36, $35, $34, $33, _result, _lineno, _Context, _lines, _offset, _indent, _heredepth, _heredocstate, _rawlines, $32, _src = p,
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
        /*@:298*/
        var $34 = (_lineno - 3),
          $35 = (_lineno + 4),
          $36 = 1;
        if ($36 <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
        for (; $34 < $35; $34 = $34 + $36) {
          if (undefined !== ($33 = (_rawlines[$34]))) {
            _result += '' + $34 + ':' + ((($34 === _lineno)) ? ('->') : ('  ')) + ' ' + $33 + '\n';
          };
        }
        /*@:301*/
        return (_result);
        /*@:302*/
      }
    };
    /*@:304*/
    if ($38 = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
      /*@:306*/
      _offset = (_offset || 0) + 1;
      /*@:307*/
    }
    /*@:308*/
    var $53 = _rawlines,
      _lineno;
    if (undefined === $53) $53 = [];
    var $54 = $53.length;
    for (_lineno = 0; _lineno < $54; _lineno++) {
      _line = $53[_lineno];
      if ($39 = ((_line.indexOf('\t') >= 0))) {
        throw new Error('SAI Compiler: tab characters are not supported in source files ' + _Context(_lineno));
        /*@:312*/
      }
      /*@:313*/
      _trail = _line.length;
      /*@:314*/
      var $40;
      while ($40 = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      /*@:315*/
      _line = $AI.slice_op(_line, 0, _trail);
      /*@:316*/
      _depth = 0;
      /*@:318*/
      var $41;
      while ($41 = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      /*@:319*/
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      /*@:320*/
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      /*@:322*/
      _isBlank = (0 === _trimmed.length);
      /*@:323*/
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        /*@:326*/
        if ($43 = ((_heredocstate === 2))) {
          if ($42 = ((_depth < _heredepth))) {
            _heredocstate = 0;
            /*@:330*/
          }
        }
        /*@:331*/
        if ($45 = ((_heredocstate === 1))) {
          if ($44 = ((_depth <= _heredepth))) {
            throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
          }
          /*@:334*/
          _lines.push(_INDENT);
          /*@:335*/
          _indent.unshift(_depth);
          /*@:336*/
          _heredepth = _depth;
          /*@:337*/
          _heredocstate = 2;
          /*@:338*/
        }
        /*@:339*/
        if ($48 = ((_heredocstate === 0))) {
          if ($46 = (_heredoc)) {
            _heredocstate = 1;
            /*@:342*/
            _heredepth = _depth;
          }
          /*@:343*/
          if ($47 = ((_depth > _indent[0]))) {
            _indent.unshift(_depth);
            /*@:345*/
            _lines.push(_INDENT);
            /*@:346*/
          }
        }
        /*@:347*/
        if ($51 = ((_depth < _indent[0]))) {
          var $49;
          while ($49 = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            /*@:350*/
            _indent.shift();
          }
          /*@:351*/
          if ($50 = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            /*@:353*/
          }
        }
      }
      /*@:354*/
      if (!((_isComment && (_heredocstate && (_depth < _heredepth))))) {
        if ($52 = ((_heredocstate && (_depth > _heredepth)))) {
          _trimmed = $AI.slice_op(_line, _heredepth, undefined);
        }
        /*@:357*/
        _lines.push('@' + (_lineno + _offset) + ':' + _trimmed);
        /*@:358*/
      };
    }
    /*@:359*/
    var $56;
    while ($56 = (_indent.shift())) {
      _lines.push(_DEDENT);
      /*@:361*/
    }
    /*@:362*/
    _lines.unshift('');
    /*@:363*/
    _lines.push('');
    /*@:364*/
    _lines = _lines.join('\n');
    /*@:365*/
    return (_lines);
    /*@:367*/
  }
};
var $8g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $57, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
    /*@:376*/
  }
};
var $9g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $71, $70, $69, $68, $67, $66, $65, _ln, $64, $63, $62, $61, $60, $59, _line, _newcontext, _minind, _ind, _lines, _context, _linenorex, $58, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _linenorex = /^\@([0-9]+):(.*)/;
    /*@:385*/
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    /*@:393*/
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
      /*@:396*/
      _minind = Math.min(_minind, _ind);
      /*@:397*/
      ;
    }
    /*@:398*/
    _ind = (0 - (_minind));
    /*@:399*/
    var $69 = _lines,
      $68;
    if (undefined === $69) $69 = [];
    var $70 = $69.length;
    for ($68 = 0; $68 < $70; $68++) {
      _line = $69[$68];
      if ($66 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($67 = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _ln = _linenorex.exec(_line);
        /*@:405*/
        if ($65 = (_ln)) {
          _newcontext += (_ln[1] + (': ' + ('  '.repeat(_ind) + (_ln[2] + '\n'))));
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
          /*@:409*/
        }
      };
    }
    /*@:410*/
    return (_newcontext);
    /*@:411*/
  }
};
var $10g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $84, $83, $82, $81, $80, _location, $79, $78, $77, _meta, $76, _js, _opts, _source, _fn, _bound, _rawsource, $75, $74, _msg, $73, _grammar, _PEG, _parserFile, _grammarFile, $72, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      /*@:427*/
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      /*@:428*/
      if ($73 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
        _PEG = require('pegjs');
        _grammar = _FS.readFileSync(_grammarFile).toString();
        $.mainParser = _PEG.generate(_grammar, {
          allowedStartRules: ['startFile', 'startExpression'],
          output: 'source',
          optimize: 'size',
          trace: 0,
          cache: true
        });
        /*@:443*/
        _FS.writeFileSync(_parserFile, $.mainParser);
        /*@:444*/
      } else {
        $.mainParser = _FS.readFileSync(_parserFile).toString();
        /*@:447*/
      }
    } catch ($75) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $75 + '\n' + '';
      /*@:456*/
      if ($74 = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $75.location.start.offset);
        /*@:458*/
      }
      /*@:459*/
      throw new Error(_msg);
      /*@:460*/
    }
    /*@:461*/
    $.mainParser = eval($.mainParser);
    /*@:462*/
    return (function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _source = $.Dedenter(_rawsource);
        /*@:469*/
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
          /*@:480*/
          _js = $.mainParser.parse(_source, _opts);
          /*@:481*/
          if ($76 = (_opts.failures)) {
            throw new Error(_opts.failures);
            /*@:484*/
          }
        } catch ($83) {
          _meta = $AI.reduce_op_fast(_fn, function($79, $77, $78) {
            var $t = '  ' + $78.toUpperCase() + ': ' + $77 + '\n';
            return (undefined === $79) ? $t : ($79 + $t);
          }, undefined);
          /*@:487*/
          _location = undefined;
          /*@:489*/
          if ($80 = ($83.location)) {
            _location = $80.start.offset;
          }
          /*@:491*/
          if ($81 = ($83.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($81[1]));
            /*@:493*/
          }
          /*@:494*/
          if (undefined !== ($82 = (_location))) {
            $83.message = 'SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $83.message + '\n' + '';
          } else {
            $83.message = 'SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $83.message + '\n' + '';
          }
          /*@:508*/
          throw $83;
          /*@:509*/
        }
        /*@:510*/
        if ($84 = ($.config.options.beautify)) {
          _js = $.Beautify(_js, {
            indent_size: 2,
            preserve_newlines: false,
            brace_style: 'collapse'
          });
        }
        /*@:516*/
        return (_js);
        /*@:517*/
      }
    });
  }
};
var $11g = prototype['GetSourceFromFilename'] || function() {};
prototype['GetSourceFromFilename'] = function(p) {
  var $_d, $_c, $86, $85, _filename = p,
    $ = this['GetSourceFromFilename'] ? this : $bindfail('GetSourceFromFilename'); {
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
    } catch ($86) {
      return (undefined);
      /*@:533*/
    }
  }
};
var $12g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $96, $95, $94, $93, $92, $91, $90, $89, $88, _filename, _extension, _path, $87, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $94 = $.config.paths,
      $93;
    if (undefined === $94) $94 = [];
    var $95 = $94.length;
    for ($93 = 0; $93 < $95; $93++) {
      _path = $94[$93];
      var $90 = ['.sai', ''],
        $89;
      if (undefined === $90) $90 = [];
      var $91 = $90.length;
      for ($89 = 0; $89 < $91; $89++) {
        _extension = $90[$89];
        _filename = _PATH.join(_path, (_name + _extension));
        /*@:546*/
        if (undefined !== ($88 = ($.GetSourceFromFilename(_filename)))) {
          $88.name = _name;
          /*@:548*/
          $88.loader += '/GetSourceFromPaths';
          /*@:549*/
          return ($88);
          /*@:550*/
        };
      };
    }
    /*@:551*/
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + ''
    });
  }
};
var $13g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $_d, $_c, $98, $97, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($98) {
      $AI.debug_op('ERROR IN HERE');
      /*@:569*/
      $AI.debug_op(_source);
      /*@:570*/
      $AI.debug_op($98);
      /*@:571*/
    }
  }
};
var $14g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $100, _s2, _protogen, _source, _load, _s1, $99, _name = p,
    $ = this['GetProtogen'] ? this : $bindfail('GetProtogen'); {
    if (undefined === $.protogens[_name]) $.protogens[_name] = function(p) {
      {
        _s1 = new Date();
        /*@:582*/
        _load = $.config.Loader(_name);
        /*@:583*/
        if (!(_load.success)) {
          throw new Error('SAI.GetProtogen: Could not load object ' + _name + ', reason given: ' + _load.context);
        }
        /*@:585*/
        _source = $.Parse(_load.source, undefined, _load.context);
        /*@:586*/
        _source = 'var __context=' + JSON.stringify(_load.context) + ';\n' + _source;
        /*@:587*/
        _protogen = $.Compile(_source);
        /*@:588*/
        if (!(_protogen)) {
          throw new Error('SAI.GetProtogen: Error in generated code ' + _name);
        }
        /*@:591*/
        _s2 = new Date();
        /*@:592*/
        if ($100 = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        /*@:594*/
        $.sources[_name] = _source;
        /*@:595*/
        return (_protogen);
        /*@:596*/
      }
    }();
    /*@:597*/
    return ($.protogens[_name]);
    /*@:598*/
  }
};
var $15g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $101, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    /*@:607*/
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
    /*@:608*/
  }
};
var $16g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $108, $107, $106, $105, $104, $103, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $102, _name = p,
    $ = this['GetAncestors'] ? this : $bindfail('GetAncestors'); {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    /*@:621*/
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        /*@:624*/
        _obj = new $.protoConstructor(_name);
        /*@:625*/
        _protogen = $.GetProtogen(_leaf);
        /*@:626*/
        _opts = {
          name: _leaf
        };
        /*@:627*/
        _protogen(_obj, _opts, require, _SAILIB, _DIRNAME);
        /*@:628*/
        _obj.Constructor();
        /*@:629*/
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        /*@:631*/
        var $108 = _obj.__inherits;
        _ancestors[_leaf] = $108;
        /*@:633*/
        var $105 = $108,
          $104;
        if (undefined === $105) $105 = [];
        var $106 = $105.length;
        for ($104 = 0; $104 < $106; $104++) {
          $103 = $105[$104];
          _heritage.push($103);
          /*@:635*/
          ;
        };
      }
    }
    /*@:636*/
    return (_ancestors);
    /*@:637*/
  }
};
var $17g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $115, _protogen, $114, $113, $112, $111, $110, _adopt, _prototype, _ancestors, $109, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        /*@:649*/
        _prototype = new $.protoConstructor(_name);
        /*@:650*/
        _adopt = function(p) {
          var _name = p; {
            var $112 = _ancestors[_name],
              $111;
            if (undefined === $112) $112 = [];
            var $113 = $112.length;
            for ($111 = 0; $111 < $113; $111++) {
              $110 = $112[$111];
              _adopt($110);;
            }
            /*@:653*/
            _protogen = $.GetProtogen(_name);
            /*@:654*/
            _protogen(_prototype, {
              name: _name
            }, require, _SAILIB, _DIRNAME);
            /*@:655*/
          }
        };
        /*@:656*/
        _adopt(_name);
        /*@:657*/
        Object.defineProperty(_prototype, 'isa', {
          enumerable: false,
          value: _prototype.isa
        });
        /*@:659*/
        if ($115 = ($.isas[_prototype.isa])) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _prototype.isa + ' identical to ' + $.isas[_prototype.isa]);
        }
        /*@:661*/
        $.isas[_prototype.isa] = _name;
        /*@:662*/
        _SAILIB.finalizePrototype(_prototype);
        /*@:664*/
        return (_prototype);
        /*@:665*/
      }
    }();
    /*@:666*/
    return ($.prototypes[_name]);
    /*@:667*/
  }
};
var $18g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $122, $121, $120, $119, $118, _adopt, _source, $117, _islib, _ancestors, $116, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    /*@:676*/
    _islib = (0 <= _name.indexOf('sailib'));
    /*@:677*/
    if ($117 = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
      /*@:680*/
    }
    /*@:681*/
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '// Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '//' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() {' + '\n' + '  this.Constructor=function(){};' + '\n' + '  this.__tobelocked=[];' + '\n' + '  this.__tobefrozen=[];' + '\n' + '  this.__contracts=[];' + '\n' + '  this.__unverified=true;' + '\n' + '  this.isof={};' + '\n' + '  return this;' + '\n' + '}();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    /*@:701*/
    _adopt = function(p) {
      var _name = p; {
        var $120 = _ancestors[_name],
          $119;
        if (undefined === $120) $120 = [];
        var $121 = $120.length;
        for ($119 = 0; $119 < $121; $119++) {
          $118 = $120[$119];
          _adopt($118);;
        }
        /*@:704*/
        _source += ($.sources[_name] + '\n');
        /*@:705*/
      }
    };
    /*@:706*/
    _adopt(_name);
    /*@:707*/
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    /*@:717*/
    return (_source);
    /*@:718*/
  }
};
var $19g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $125, $124, $123, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($125 = ($.GetPrototype(_name)))) {
      if (undefined !== ($124 = ($125.constructor))) {
        return ($124);
      }
    }
    /*@:729*/
    throw new Error('SAI.Require: do not know how to create object ' + _name);
    /*@:730*/
  }
};
var $20g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $129, $128, $127, _obj, $126, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($129 = ($.GetPrototype(_name)))) {
      _obj = Object.create($129);
      /*@:741*/
      if ($127 = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      /*@:742*/
      if ($128 = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      /*@:743*/
      return (_obj);
    }
    /*@:744*/
    throw new Error('SAI.Create: do not know how to create object ' + _name);
    /*@:745*/
  }
};
var $21g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $139, $138, $137, $136, $135, $134, $133, $132, $131, $130, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($131 = (_c.paths))) {
      $.config.paths = $131;
    }
    /*@:755*/
    if (undefined !== ($133 = (_c.verbs))) {
      $132 = $.config.verbs;
      $.config.verbs = $AI.overlay_op($132, $133);
    }
    /*@:757*/
    if (undefined !== ($135 = (_c.options))) {
      $134 = $.config.options;
      $.config.options = $AI.overlay_op($134, $135);
    }
    /*@:759*/
    if (undefined !== ($137 = (_c.constructs))) {
      $136 = $.config.constructs;
      $.config.constructs = $AI.overlay_op($136, $137);
    }
    /*@:761*/
    if (undefined !== ($138 = (_c.Loader))) {
      $.config.Loader = $138;
      /*@:763*/
    }
    /*@:764*/
    if ($139 = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
      /*@:766*/
    }
  }
};
var $22g = prototype['RegisterWithNode'] || function() {};
prototype['RegisterWithNode'] = function(p) {
  var $_d, $_c, $141, _result, _filename, _module, _REQUIRE, $140, $ = this['RegisterWithNode'] ? this : $bindfail('RegisterWithNode'); {
    _REQUIRE = require;
    /*@:775*/
    if (undefined !== ($141 = (_REQUIRE.extensions))) {
      $141.sai = function(p, _filename) {
        var _module = p; {
          $.config.paths.unshift(_PATH.dirname(_filename));
          /*@:779*/
          _result = $.Require(_PATH.basename(_filename));
          /*@:780*/
          $.config.paths.shift();
          /*@:781*/
          return (_result);
        }
      };
    } else {
      throw new Error('SAI Runtime: Could not find require.extensions to register .sai files with node');
      /*@:784*/
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
