#!/usr/bin/env node

// Javascript source for sai.sai transipled by SAI
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
var __context={"name":"sai.sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-07T16:59:20.136Z","fetched":"2018-03-07T17:04:42.009Z"};
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
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true
  },
  Loader: ['default source loader linked later in file']
};
var _CONSTRUCTS = ['StateC', 'PromisingC', 'ReturnC', 'IterateC', 'TryCatchC', 'IfElseC'];
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
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'Clean'", "'Dedenter'", "'WrapExtract'", "'Contextualize'", "'GetParser'", "'GetSourceFromPaths'", "'Compile'", "'GetProtogen'", "'Expression'", "'GetAncestors'", "'GetPrototype'", "'GetSource'", "'Require'", "'Create'", "'Configure'", "isa"]);
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
  var $_d, $_c, $13, $12, $11, $10, $9, $8, $7, $6, $5, $4, $3, _type, _x, _clauseName, _requestedSyntax, $2, $1, _element, _description, _constructName, _construct, _manifest, _implementation, _fn, _file, _msg, _fail, _requiredElements, _validSyntax, $0, $ = this['Clean'] ? this : $bindfail('Clean'); {
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
    $.config.Loader = $.GetSourceFromPaths.bind($);
    _SAILIB.import = $.Require.bind($);
    _SAILIB.create_op = $.Create.bind($);
    _validSyntax = {
      block: true,
      exproutblock: true,
      exprs: true,
      exprusing: true,
      none: true,
      outblock: true,
      verb: true
    };
    _requiredElements = {
      'clauses': 'clauses list',
      'repeats': 'repeats flag',
      'handler': 'handler function'
    };
    _fail = function(p) {
      var _msg = p; {
        throw new Error('SAI Construct Manager: manifest for ' + _file + '/' + _constructName + _msg);
      }
    };
    var $11 = _CONSTRUCTS,
      $10;
    if (undefined === $11) $11 = [];
    var $12 = $11.length;
    for ($10 = 0; $10 < $12; $10++) {
      _file = $11[$10];
      try {
        _fn = ('./' + _file);
        _implementation = require(_fn);
        _manifest = _implementation.manifest;
        var $7 = _manifest,
          _constructName = undefined;
        if (undefined === $7) $7 = {};
        for (_constructName in $7) {
          _construct = $7[_constructName];
          var $1 = _requiredElements,
            _element = undefined;
          if (undefined === $1) $1 = {};
          for (_element in $1) {
            _description = $1[_element];
            if (!((undefined !== _construct[_element]))) {
              _fail(' is missing ' + _description + '.');
            };
          }
          var $5 = _construct.clauses,
            _clauseName = undefined;
          if (undefined === $5) $5 = {};
          for (_clauseName in $5) {
            _requestedSyntax = $5[_clauseName];
            var $3 = _requestedSyntax,
              _type = undefined;
            if (undefined === $3) $3 = {};
            for (_type in $3) {
              _x = $3[_type];
              if (!(_validSyntax[_type])) {
                _fail('/' + _clauseName + ' asks for illegal syntax "' + _type + '"');
              };
            };
          };
        }
        $.config.constructs = $AI.update_op($.config.constructs, _manifest);
      } catch ($9) {
        $AI.debug_op($9);
      };
    }
  }
};
var $5g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $35, $34, $33, $32, $31, $30, $29, $28, $27, $26, $25, $24, $23, _heredoc, _isBlank, _isComment, _trimmed, $22, _depth, $21, _trail, _line, $20, $19, $18, $17, $15, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $14, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $17 = (_lineno - 3),
          $16 = (_lineno + 4);
        for (; $17 < $16; $17 += 1) {
          if (undefined !== ($15 = (_rawlines[$17]))) {
            _result += '' + $17 + ':' + ((($17 === _lineno)) ? ('->') : ('  ')) + ' ' + $15 + '\n';
          }
        }
        return (_result);
      }
    };
    if ($20 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2)))) {
      _rawlines.shift();
    }
    var $32 = _rawlines,
      _lineno;
    if (undefined === $32) $32 = [];
    var $33 = $32.length;
    for (_lineno = 0; _lineno < $33; _lineno++) {
      _line = $32[_lineno];
      _trail = _line.length;
      var $21;
      while ($21 = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      _line = $AI.slice_op((_line), 0, _trail);
      _depth = 0;
      var $22;
      while ($22 = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      _trimmed = $AI.slice_op((_line), _depth, undefined);
      _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
      _isBlank = (0 === _trimmed.length);
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
        switch ($28 = (_heredocstate)) {
          case (0):
            if ($23 = (_heredoc)) {
              _heredocstate = 1;
              _heredepth = _depth;
            }
            if ($24 = ((_depth > _indent[0]))) {
              _indent.unshift(_depth);
              _lines.push(_INDENT);
            }
            break;
          case (1):
            if ($25 = ((_depth <= _heredepth))) {
              throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
            }
            _lines.push(_INDENT);
            _indent.unshift(_depth);
            _heredepth = _depth;
            _heredocstate = 2;
            break;
          case (2):
            if ($26 = ((_depth < _heredepth))) {
              _heredocstate = 0;
            } else if ($27 = ((_depth > _heredepth))) {
              _trimmed = $AI.slice_op((_line), _heredepth, undefined);
            }
            break;
        }
        if ($31 = ((_depth < _indent[0]))) {
          var $29;
          while ($29 = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            _indent.shift();
          }
          if ($30 = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
          }
        }
      }
      _lines.push(_trimmed);;
    }
    var $35;
    while ($35 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return (_lines);
  }
};
var $6g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $36, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
  }
};
var $7g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $49, $48, $47, $46, $45, $44, $43, $42, $41, $40, $39, $38, _line, _newcontext, _minind, _ind, _lines, _context, $37, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $41 = _lines,
      $40;
    if (undefined === $41) $41 = [];
    var $42 = $41.length;
    for ($40 = 0; $40 < $42; $40++) {
      _line = $41[$40];
      if ($38 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($39 = ((_line === _DEDENT))) {
        _ind--;;
      }
      _minind = Math.min(_minind, _ind);;
    }
    _ind = (0 - (_minind));
    var $47 = _lines,
      $46;
    if (undefined === $47) $47 = [];
    var $48 = $47.length;
    for ($46 = 0; $46 < $48; $46++) {
      _line = $47[$46];
      if ($44 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($45 = ((_line === _DEDENT))) {
        _ind--;;
      } else {
        _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
      };
    }
    return (_newcontext);
  }
};
var $8g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $58, $57, $56, $55, $54, _location, _js, _source, _fn, _bound, _rawsource, $53, $52, _msg, $51, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $50, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if ($51 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
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
    } catch ($53) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $53 + '\n' + '';
      if ($52 = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $53.location.start.offset);
      }
      throw new Error(_msg);
    }
    _mainParser = eval(_mainParser);
    return (function(p, _bound, _fn) {
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
        } catch ($57) {
          _location = undefined;
          if ($54 = ($57.location)) {
            _location = $54.start.offset;
          }
          if ($55 = ($57.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($55[1]));
          }
          if ($56 = (_location)) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $57.message + '\n' + '');
          } else {
            $AI.debug_op($57);
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $57 + '\n' + '');
          }
        }
        if ($58 = ($.config.options.beautify)) {
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
var $9g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $68, $67, $66, $65, $64, $63, $62, $61, $60, _filename, _extension, _path, $59, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $66 = $.config.paths,
      $65;
    if (undefined === $66) $66 = [];
    var $67 = $66.length;
    for ($65 = 0; $65 < $67; $65++) {
      _path = $66[$65];
      var $62 = ['.sai', ''],
        $61;
      if (undefined === $62) $62 = [];
      var $63 = $62.length;
      for ($61 = 0; $61 < $63; $61++) {
        _extension = $62[$61];
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
        } catch ($60) {;
        };
      };
    }
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + '// Compile' + '\n' + '//' + '\n' + '// Create a function that compiles parsed SAI source, binding the variables' + '\n' + '// needed to integrate necessary scope and the SAI runtime library.' + '\n' + '//' + '\n' + ''
    });
  }
};
var $10g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $69, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
  }
};
var $11g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $71, _s2, _protogen, _source, _load, _s1, $70, _name = p,
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
        if ($71 = ($.config.options.speedometer)) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return (_protogen);
      }
    }();
    return ($.protogens[_name]);
  }
};
var $12g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $72, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
  }
};
var $13g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $78, $77, $76, $75, $74, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $73, _name = p,
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
        var $79 = _obj.__inherits;
        _ancestors[_leaf] = $79;
        var $76 = $79,
          $75;
        if (undefined === $76) $76 = [];
        var $77 = $76.length;
        for ($75 = 0; $75 < $77; $75++) {
          $74 = $76[$75];
          _heritage.push($74);;
        }
      }
    }
    return (_ancestors);
  }
};
var $14g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $86, _protogen, $85, $84, $83, $82, $81, _adopt, _prototype, _ancestors, $80, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $83 = _ancestors[_name],
              $82;
            if (undefined === $83) $83 = [];
            var $84 = $83.length;
            for ($82 = 0; $82 < $84; $82++) {
              $81 = $83[$82];
              _adopt($81);;
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
        if ($86 = ($.isas[_prototype.isa])) {
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
var $15g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $93, $92, $91, $90, $89, _adopt, _source, $88, _islib, _ancestors, $87, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if ($88 = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $91 = _ancestors[_name],
          $90;
        if (undefined === $91) $91 = [];
        var $92 = $91.length;
        for ($90 = 0; $90 < $92; $90++) {
          $89 = $91[$90];
          _adopt($89);;
        }
        _source += ($.sources[_name] + '\n');
      }
    };
    _adopt(_name);
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    return (_source);
  }
};
var $16g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $96, $95, $94, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($96 = ($.GetPrototype(_name)))) {
      if (undefined !== ($95 = ($96.constructor))) {
        return ($95);
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $17g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $100, $99, $98, _obj, $97, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($100 = ($.GetPrototype(_name)))) {
      _obj = Object.create($100);
      if ($98 = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      if ($99 = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $107, $106, $105, $104, $103, $102, $101, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($102 = (_c.paths))) {
      $.config.paths = $102;
    }
    if (undefined !== ($103 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $103);
    }
    if (undefined !== ($104 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $104);
    }
    if (undefined !== ($105 = (_c.constructs))) {
      $.config.constructs = $AI.update_op($.config.constructs, $105);
    }
    if (undefined !== ($106 = (_c.Loader))) {
      $.config.Loader = $106;
    }
    if ($107 = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
