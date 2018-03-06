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
var __context={"name":"sai.sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-06T16:46:09.037Z","fetched":"2018-03-06T19:07:44.327Z"};
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
var _CONSTRUCTS = ['StateC', 'PromisingC', 'ReturnC', 'IterateC'];
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
  var $_d, $_c, $23, $22, $21, $17, $16, $15, $12, $11, $8, $7, _type, _x, _clauseName, _requestedSyntax, $4, $3, _element, _description, _constructName, _construct, _manifest, _implementation, _fn, _file, _msg, _fail, _requiredElements, _validSyntax, $0, $ = this['Clean'] ? this : $bindfail('Clean'); {
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
    var $22 = _CONSTRUCTS;
    if (undefined === $22) $22 = [];
    var $20 = $22.length;
    if ($20) {
      var _file, $21 = 0;
      for (; $21 < $20; $21++) {
        _file = $22[$21];
        try {
          _fn = ('./' + _file);
          _implementation = require(_fn);
          _manifest = _implementation.manifest;
          var $15 = _manifest;
          if (undefined === $15) $15 = [];
          for (var _constructName in $15) {
            var _construct = $15[_constructName];
            var $3 = _requiredElements;
            if (undefined === $3) $3 = [];
            for (var _element in $3) {
              var _description = $3[_element];
              if (!((undefined !== _construct[_element]))) {
                _fail(' is missing ' + _description + '.');
              }
            }
            var $11 = _construct.clauses;
            if (undefined === $11) $11 = [];
            for (var _clauseName in $11) {
              var _requestedSyntax = $11[_clauseName];
              var $7 = _requestedSyntax;
              if (undefined === $7) $7 = [];
              for (var _type in $7) {
                var _x = $7[_type];
                if (!(_validSyntax[_type])) {
                  _fail('/' + _clauseName + ' asks for illegal syntax "' + _type + '"');
                }
              }
            }
          }
          $.config.constructs = $AI.update_op($.config.constructs, _manifest);
        } catch ($17) {
          $AI.debug_op($17);
        }
      }
    }
  }
};
var $5g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $47, $46, $45, $41, $40, $39, $38, $37, $36, $35, $34, $33, _heredoc, _isBlank, _isComment, _trimmed, $32, _depth, $31, _trail, _line, $30, $29, $28, $27, $25, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $24, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $27 = (_lineno - 3),
          $26 = (_lineno + 4);
        for (; $27 < $26; $27 += 1) {
          if (undefined !== ($25 = (_rawlines[$27]))) {
            _result += '' + $27 + ':' + ((($27 === _lineno)) ? ('->') : ('  ')) + ' ' + $25 + '\n';
          }
        }
        return (_result);
      }
    };
    if (($30 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2))))) {
      _rawlines.shift();
    }
    var $45 = _rawlines;
    if (undefined === $45) $45 = [];
    var $44 = $45.length;
    if ($44) {
      var _line, _lineno = 0;
      for (; _lineno < $44; _lineno++) {
        _line = $45[_lineno];
        _trail = _line.length;
        var $31;
        while ($31 = ((' ' === _line[(_trail - 1)]))) {
          _trail--;;
        }
        _line = $AI.slice_op((_line), 0, _trail);
        _depth = 0;
        var $32;
        while ($32 = ((' ' === _line[_depth]))) {
          _depth = (_depth || 0) + 1;;
        }
        _trimmed = $AI.slice_op((_line), _depth, undefined);
        _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
        _isBlank = (0 === _trimmed.length);
        if (!((_isComment || _isBlank))) {
          _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
          switch ($38 = (_heredocstate)) {
            case (0):
              if (($33 = (_heredoc))) {
                _heredocstate = 1;
                _heredepth = _depth;
              }
              if (($34 = ((_depth > _indent[0])))) {
                _indent.unshift(_depth);
                _lines.push(_INDENT);
              }
              break;
            case (1):
              if (($35 = ((_depth <= _heredepth)))) {
                throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
              }
              _lines.push(_INDENT);
              _indent.unshift(_depth);
              _heredepth = _depth;
              _heredocstate = 2;
              break;
            case (2):
              if (($36 = ((_depth < _heredepth)))) {
                _heredocstate = 0;
              } else if (($37 = ((_depth > _heredepth)))) {
                _trimmed = $AI.slice_op((_line), _heredepth, undefined);
              }
              break;
          }
          if (($41 = ((_depth < _indent[0])))) {
            var $39;
            while ($39 = ((_depth < _indent[0]))) {
              _lines.push(_DEDENT);
              _indent.shift();
            }
            if (($40 = ((_depth !== _indent[0])))) {
              throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            }
          }
        }
        _lines.push(_trimmed);
      }
    }
    var $47;
    while ($47 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return (_lines);
  }
};
var $6g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $48, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return ((_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100)))));
  }
};
var $7g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $65, $64, $63, $59, $58, $57, $56, $55, $51, $50, _line, _newcontext, _minind, _ind, _lines, _context, $49, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $56 = _lines;
    if (undefined === $56) $56 = [];
    var $54 = $56.length;
    if ($54) {
      var _line, $55 = 0;
      for (; $55 < $54; $55++) {
        _line = $56[$55];
        if (($50 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($51 = ((_line === _DEDENT)))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $64 = _lines;
    if (undefined === $64) $64 = [];
    var $62 = $64.length;
    if ($62) {
      var _line, $63 = 0;
      for (; $63 < $62; $63++) {
        _line = $64[$63];
        if (($58 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($59 = ((_line === _DEDENT)))) {
          _ind--;;
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
        }
      }
    }
    return (_newcontext);
  }
};
var $8g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $74, $73, $72, $71, $70, _location, _js, _source, _fn, _bound, _rawsource, $69, $68, _msg, $67, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $66, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if (($67 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
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
    } catch ($69) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $69 + '\n' + '';
      if (($68 = (_grammar))) {
        _msg = $.WrapExtract(_grammar, $69.location.start.offset);
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
        } catch ($73) {
          _location = undefined;
          if (($70 = ($73.location))) {
            _location = $70.start.offset;
          }
          if (($71 = ($73.message.match(/at:([0-9]+)/)))) {
            _location = ($AI.number_op($71[1]));
          }
          if (($72 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $73.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $73.toString() + '\n' + '');
          }
        }
        if (($74 = ($.config.options.beautify))) {
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
  var $_d, $_c, $88, $87, $86, $82, $81, $80, $76, _filename, _extension, _path, $75, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $87 = $.config.paths;
    if (undefined === $87) $87 = [];
    var $85 = $87.length;
    if ($85) {
      var _path, $86 = 0;
      for (; $86 < $85; $86++) {
        _path = $87[$86];
        var $81 = ['.sai', ''];
        if (undefined === $81) $81 = [];
        var $79 = $81.length;
        if ($79) {
          var _extension, $80 = 0;
          for (; $80 < $79; $80++) {
            _extension = $81[$80];
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
            } catch ($76) {;
            }
          }
        }
      }
    }
    return ({
      success: false,
      context: 'SAI.GetSourceFromPaths: cannot load ' + _name + '\n' + 'Check paths: ' + $.config.paths.join(';') + '\n' + '' + '\n' + '' + '\n' + '// Compile' + '\n' + '//' + '\n' + '// Create a function that compiles parsed SAI source, binding the variables' + '\n' + '// needed to integrate necessary scope and the SAI runtime library.' + '\n' + '//' + '\n' + ''
    });
  }
};
var $10g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $89, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    return (new Function('prototype', 'options', 'require', '$AI', '__dirname', _source));
  }
};
var $11g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $91, _s2, _protogen, _source, _load, _s1, $90, _name = p,
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
        if (($91 = ($.config.options.speedometer))) {
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
  var _js, $92, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return ($.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME));
  }
};
var $13g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $100, $99, $98, $97, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $93, _name = p,
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
        var $101 = _obj.__inherits;
        _ancestors[_leaf] = $101;
        var $99 = $101;
        if (undefined === $99) $99 = [];
        var $96 = $99.length;
        if ($96) {
          var $97, $98 = 0;
          for (; $98 < $96; $98++) {
            $97 = $99[$98];
            _heritage.push($97);
          }
        }
      }
    }
    return (_ancestors);
  }
};
var $14g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $110, _protogen, $109, $108, $107, $106, _adopt, _prototype, _ancestors, $102, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $108 = _ancestors[_name];
            if (undefined === $108) $108 = [];
            var $105 = $108.length;
            if ($105) {
              var $106, $107 = 0;
              for (; $107 < $105; $107++) {
                $106 = $108[$107];
                _adopt($106);
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
        if (($110 = ($.isas[_prototype.isa]))) {
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
  var $_d, $_c, $119, $118, $117, $116, _adopt, _source, $112, _islib, _ancestors, $111, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($112 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $118 = _ancestors[_name];
        if (undefined === $118) $118 = [];
        var $115 = $118.length;
        if ($115) {
          var $116, $117 = 0;
          for (; $117 < $115; $117++) {
            $116 = $118[$117];
            _adopt($116);
          }
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
var $17g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $126, $125, $124, _obj, $123, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($126 = ($.GetPrototype(_name)))) {
      _obj = Object.create($126);
      if (($124 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($125 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return (_obj);
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $133, $132, $131, $130, $129, $128, $127, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($128 = (_c.paths))) {
      $.config.paths = $128;
    }
    if (undefined !== ($129 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $129);
    }
    if (undefined !== ($130 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $130);
    }
    if (undefined !== ($131 = (_c.constructs))) {
      $.config.constructs = $AI.update_op($.config.constructs, $131);
    }
    if (undefined !== ($132 = (_c.Loader))) {
      $.config.Loader = $132;
    }
    if (($133 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
