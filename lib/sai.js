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
var __context={"name":"sai.sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-10T16:01:46.795Z","fetched":"2018-03-10T16:36:22.795Z"};
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
var _CONSTRUCTS = ['StateC', 'PromisingC', 'ReturnC', 'IterateC', 'TryCatchC', 'IfElseC', 'SwitchC', 'ListsP', 'QueryP'];
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
prototype.__tobelocked = prototype.__tobelocked.concat(["Instantiate", "Clean", "Dedenter", "WrapExtract", "Contextualize", "GetParser", "GetSourceFromPaths", "Compile", "GetProtogen", "Expression", "GetAncestors", "GetPrototype", "GetSource", "Require", "Create", "Configure", "isa"]);
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
  var $_d, $_c, $15, $14, $13, $12, $11, $10, $9, $8, $7, $6, $5, $4, $3, _type, _val, _clauseName, _requestedSyntax, $2, $1, _element, _description, _constructName, _construct, _category, _library, _manifest, _implementation, _fn, _file, _msg, _fail, _requiredElements, _validSyntax, $0, $ = this['Clean'] ? this : $bindfail('Clean'); {
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
      constructs: {
        block: true,
        exprout: true,
        exproutblock: true,
        exprs: true,
        exprsblock: true,
        exprsoutblock: true,
        exprusing: true,
        none: true,
        outblock: true,
        verb: true
      },
      pipers: {
        expr: true,
        exprs: true,
        none: true,
        outblock: true,
        use: true,
        valexpr: true,
        valuse: true,
        valoutblock: true
      }
    };
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
    var $13 = _CONSTRUCTS,
      $12;
    if (undefined === $13) $13 = [];
    var $14 = $13.length;
    for ($12 = 0; $12 < $14; $12++) {
      _file = $13[$12];
      try {
        _fn = ('./' + _file);
        _implementation = require(_fn);
        _manifest = _implementation.manifest;
        var $9 = _manifest,
          _category = undefined;
        if (undefined === $9) $9 = {};
        for (_category in $9) {
          _library = $9[_category];
          if (!(_validSyntax[_category])) {
            _fail(' unsupported category type');
          }
          var $7 = _library,
            _constructName = undefined;
          if (undefined === $7) $7 = {};
          for (_constructName in $7) {
            _construct = $7[_constructName];
            var $1 = _requiredElements[_category],
              _element = undefined;
            if (undefined === $1) $1 = {};
            for (_element in $1) {
              _description = $1[_element];
              if (!((undefined !== _construct[_element]))) {
                _fail(' is missing ' + _description + '.');
              };
            }
            if ($6 = (_requiredElements[_category].clauses)) {
              var $5 = _construct.clauses,
                _clauseName = undefined;
              if (undefined === $5) $5 = {};
              for (_clauseName in $5) {
                _requestedSyntax = $5[_clauseName];
                var $3 = _requestedSyntax,
                  _type = undefined;
                if (undefined === $3) $3 = {};
                for (_type in $3) {
                  _val = $3[_type];
                  if (!(_validSyntax[_category][_type])) {
                    _fail('/' + _clauseName + ' asks for illegal syntax "' + _type + '"');
                  };
                };
              }
              if (_clauseName === undefined) {
                _fail(' has no clauses defined');
              }
            };
          }
          $.config[_category] = $AI.update_op($.config[_category], _library);;
        }
      } catch ($11) {
        $AI.debug_op($11);
      };
    }
  }
};
var $5g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $37, $36, $35, $34, $33, $32, $31, $30, $29, $28, $27, $26, $25, _heredoc, _isBlank, _isComment, _trimmed, $24, _depth, $23, _trail, _line, $22, $21, $20, $19, $18, $17, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $16, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $18 = (_lineno - 3),
          $19 = (_lineno + 4),
          $20 = 1;
        if ($20 <= 0) throw new Error("SAI Runtime: COUNT STEP value should be positive.");
        for (; $18 < $19; $18 = $18 + $20) {
          if (undefined !== ($17 = (_rawlines[$18]))) {
            _result += '' + $18 + ':' + ((($18 === _lineno)) ? ('->') : ('  ')) + ' ' + $17 + '\n';
          };
        }
        return (_result);
      }
    };
    if ($22 = (('#!' === $AI.slice_op(_rawlines[0], 0, 2)))) {
      _rawlines.shift();
    }
    var $34 = _rawlines,
      _lineno;
    if (undefined === $34) $34 = [];
    var $35 = $34.length;
    for (_lineno = 0; _lineno < $35; _lineno++) {
      _line = $34[_lineno];
      _trail = _line.length;
      var $23;
      while ($23 = ((' ' === _line[(_trail - 1)]))) {
        _trail--;;
      }
      _line = $AI.slice_op(_line, 0, _trail);
      _depth = 0;
      var $24;
      while ($24 = ((' ' === _line[_depth]))) {
        _depth = (_depth || 0) + 1;;
      }
      _trimmed = $AI.slice_op(_line, _depth, undefined);
      _isComment = ('//' === $AI.slice_op(_trimmed, 0, 2));
      _isBlank = (0 === _trimmed.length);
      if (!((_isComment || _isBlank))) {
        _heredoc = ('\'\'\'' === $AI.slice_op(_line, undefined, (0 - (3))));
        switch ($30 = (_heredocstate)) {
          case 0:
            if ($25 = (_heredoc)) {
              _heredocstate = 1;
              _heredepth = _depth;
            }
            if ($26 = ((_depth > _indent[0]))) {
              _indent.unshift(_depth);
              _lines.push(_INDENT);
            }
            break;
          case 1:
            if ($27 = ((_depth <= _heredepth))) {
              throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
            }
            _lines.push(_INDENT);
            _indent.unshift(_depth);
            _heredepth = _depth;
            _heredocstate = 2;
            break;
          case 2:
            if ($28 = ((_depth < _heredepth))) {
              _heredocstate = 0;
            } else if ($29 = ((_depth > _heredepth))) {
              _trimmed = $AI.slice_op(_line, _heredepth, undefined);
            }
            break;
          default:
            throw new Error('unknown heredoc state');
            break;
        }
        if ($33 = ((_depth < _indent[0]))) {
          var $31;
          while ($31 = ((_depth < _indent[0]))) {
            _lines.push(_DEDENT);
            _indent.shift();
          }
          if ($32 = ((_depth !== _indent[0]))) {
            throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
          }
        }
      }
      _lines.push(_trimmed);;
    }
    var $37;
    while ($37 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return (_lines);
  }
};
var $6g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $38, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
  }
};
var $7g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $51, $50, $49, $48, $47, $46, $45, $44, $43, $42, $41, $40, _line, _newcontext, _minind, _ind, _lines, _context, $39, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $43 = _lines,
      $42;
    if (undefined === $43) $43 = [];
    var $44 = $43.length;
    for ($42 = 0; $42 < $44; $42++) {
      _line = $43[$42];
      if ($40 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($41 = ((_line === _DEDENT))) {
        _ind--;;
      }
      _minind = Math.min(_minind, _ind);;
    }
    _ind = (0 - (_minind));
    var $49 = _lines,
      $48;
    if (undefined === $49) $49 = [];
    var $50 = $49.length;
    for ($48 = 0; $48 < $50; $48++) {
      _line = $49[$48];
      if ($46 = ((_line === _INDENT))) {
        _ind = (_ind || 0) + 1;;
      } else if ($47 = ((_line === _DEDENT))) {
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
  var $_d, $_c, $64, $63, $62, $61, $60, _location, $59, $58, $57, _meta, $56, _js, _opts, _source, _fn, _bound, _rawsource, $55, $54, _msg, $53, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $52, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if ($53 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime)))) {
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
    } catch ($55) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $55 + '\n' + '';
      if ($54 = (_grammar)) {
        _msg = $.WrapExtract(_grammar, $55.location.start.offset);
      }
      throw new Error(_msg);
    }
    _mainParser = eval(_mainParser);
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
          _js = _mainParser.parse(_source, _opts);
          if ($56 = (_opts.failures)) {
            throw new Error(_opts.failures);
          }
        } catch ($63) {
          _meta = $AI.reduce_op_fast(_fn, function($59, $57, $58) {
            var $t = '  ' + $58.toUpperCase() + ': ' + $57 + '\n';
            return (undefined === $59) ? $t : ($59 + $t);
          }, undefined);
          _location = undefined;
          if ($60 = ($63.location)) {
            _location = $60.start.offset;
          }
          if ($61 = ($63.message.match(/at:([0-9]+)/))) {
            _location = ($AI.number_op($61[1]));
          }
          if (undefined !== ($62 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in\n' + _meta + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $63.message + '\n' + '');
          } else {
            $AI.debug_op($63);
            throw new Error('SAI: Error creating prototype in\n' + _meta + '\n' + '' + '\n' + '' + $63 + '\n' + '');
          }
        }
        if ($64 = ($.config.options.beautify)) {
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
  var $_d, $_c, $74, $73, $72, $71, $70, $69, $68, $67, $66, _filename, _extension, _path, $65, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $72 = $.config.paths,
      $71;
    if (undefined === $72) $72 = [];
    var $73 = $72.length;
    for ($71 = 0; $71 < $73; $71++) {
      _path = $72[$71];
      var $68 = ['.sai', ''],
        $67;
      if (undefined === $68) $68 = [];
      var $69 = $68.length;
      for ($67 = 0; $67 < $69; $67++) {
        _extension = $68[$67];
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
        } catch ($66) {;
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
  var $_d, $_c, $76, $75, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    try {
      return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
    } catch ($76) {
      $AI.debug_op('ERROR IN HERE');
      $AI.debug_op(_source);
      $AI.debug_op($76);
    }
  }
};
var $11g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $78, _s2, _protogen, _source, _load, _s1, $77, _name = p,
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
        if ($78 = ($.config.options.speedometer)) {
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
  var _js, $79, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
  }
};
var $13g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $85, $84, $83, $82, $81, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $80, _name = p,
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
        var $86 = _obj.__inherits;
        _ancestors[_leaf] = $86;
        var $83 = $86,
          $82;
        if (undefined === $83) $83 = [];
        var $84 = $83.length;
        for ($82 = 0; $82 < $84; $82++) {
          $81 = $83[$82];
          _heritage.push($81);;
        }
      }
    }
    return (_ancestors);
  }
};
var $14g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $93, _protogen, $92, $91, $90, $89, $88, _adopt, _prototype, _ancestors, $87, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $90 = _ancestors[_name],
              $89;
            if (undefined === $90) $90 = [];
            var $91 = $90.length;
            for ($89 = 0; $89 < $91; $89++) {
              $88 = $90[$89];
              _adopt($88);;
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
        if ($93 = ($.isas[_prototype.isa])) {
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
  var $_d, $_c, $100, $99, $98, $97, $96, _adopt, _source, $95, _islib, _ancestors, $94, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if ($95 = (_islib)) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transpiled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $98 = _ancestors[_name],
          $97;
        if (undefined === $98) $98 = [];
        var $99 = $98.length;
        for ($97 = 0; $97 < $99; $97++) {
          $96 = $98[$97];
          _adopt($96);;
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
  var $_d, $_c, $103, $102, $101, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($103 = ($.GetPrototype(_name)))) {
      if (undefined !== ($102 = ($103.constructor))) {
        return ($102);
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $17g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $107, $106, $105, _obj, $104, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($107 = ($.GetPrototype(_name)))) {
      _obj = Object.create($107);
      if ($105 = (_obj.Constructor)) {
        _obj.Constructor();;
      }
      if ($106 = (_obj.Instantiate)) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $114, $113, $112, $111, $110, $109, $108, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($109 = (_c.paths))) {
      $.config.paths = $109;
    }
    if (undefined !== ($110 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $110);
    }
    if (undefined !== ($111 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $111);
    }
    if (undefined !== ($112 = (_c.constructs))) {
      $.config.constructs = $AI.update_op($.config.constructs, $112);
    }
    if (undefined !== ($113 = (_c.Loader))) {
      $.config.Loader = $113;
    }
    if ($114 = ($.config.options.beautify)) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
