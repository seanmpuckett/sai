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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-03-05T23:25:27.190Z","fetched":"2018-03-06T00:05:20.535Z"};
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
var _CONSTRUCTS = ['StateC', 'PromisingC'];
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
  var $_d, $_c, $8, $7, $6, $5, $1, _construct, _p, $0, $ = this['Clean'] ? this : $bindfail('Clean'); {
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
    var $7 = _CONSTRUCTS;
    if (undefined === $7) $7 = [];
    var $4 = $7.length;
    if ($4) {
      var $5, $6 = 0;
      for (; $6 < $4; $6++) {
        $5 = $7[$6];
        try {
          _p = ('./' + $5);
          _construct = require(_p);
          $.config.constructs = $AI.update_op($.config.constructs, _construct.manifest);
        } catch ($1) {
          $AI.debug_op($1);
        }
      }
    }
  }
};
var $5g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $32, $31, $30, $26, $25, $24, $23, $22, $21, $20, $19, $18, _heredoc, _isBlank, _isComment, _trimmed, $17, _depth, $16, _trail, _line, $15, $14, $13, $12, $10, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $9, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $12 = (_lineno - 3),
          $11 = (_lineno + 4);
        for (; $12 < $11; $12 += 1) {
          if (undefined !== ($10 = (_rawlines[$12]))) {
            _result += '' + $12 + ':' + ((($12 === _lineno)) ? ('->') : ('  ')) + ' ' + $10 + '\n';
          }
        }
        return _result;
      }
    };
    if (($15 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2))))) {
      _rawlines.shift();
    }
    var $30 = _rawlines;
    if (undefined === $30) $30 = [];
    var $29 = $30.length;
    if ($29) {
      var _line, _lineno = 0;
      for (; _lineno < $29; _lineno++) {
        _line = $30[_lineno];
        _trail = _line.length;
        var $16;
        while ($16 = ((' ' === _line[(_trail - 1)]))) {
          _trail--;;
        }
        _line = $AI.slice_op((_line), 0, _trail);
        _depth = 0;
        var $17;
        while ($17 = ((' ' === _line[_depth]))) {
          _depth = (_depth || 0) + 1;;
        }
        _trimmed = $AI.slice_op((_line), _depth, undefined);
        _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
        _isBlank = (0 === _trimmed.length);
        if (!((_isComment || _isBlank))) {
          _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
          switch ($23 = (_heredocstate)) {
            case (0):
              if (($18 = (_heredoc))) {
                _heredocstate = 1;
                _heredepth = _depth;
              }
              if (($19 = ((_depth > _indent[0])))) {
                _indent.unshift(_depth);
                _lines.push(_INDENT);
              }
              break;
            case (1):
              if (($20 = ((_depth <= _heredepth)))) {
                throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
              }
              _lines.push(_INDENT);
              _indent.unshift(_depth);
              _heredepth = _depth;
              _heredocstate = 2;
              break;
            case (2):
              if (($21 = ((_depth < _heredepth)))) {
                _heredocstate = 0;
              } else if (($22 = ((_depth > _heredepth)))) {
                _trimmed = $AI.slice_op((_line), _heredepth, undefined);
              }
              break;
          }
          if (($26 = ((_depth < _indent[0])))) {
            var $24;
            while ($24 = ((_depth < _indent[0]))) {
              _lines.push(_DEDENT);
              _indent.shift();
            }
            if (($25 = ((_depth !== _indent[0])))) {
              throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            }
          }
        }
        _lines.push(_trimmed);
      }
    }
    var $32;
    while ($32 = (_indent.shift())) {
      _lines.push(_DEDENT);
    }
    _lines.push('');
    _lines = _lines.join('\n');
    return _lines;
  }
};
var $6g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $33, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return (_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100))));
  }
};
var $7g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $50, $49, $48, $44, $43, $42, $41, $40, $36, $35, _line, _newcontext, _minind, _ind, _lines, _context, $34, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $41 = _lines;
    if (undefined === $41) $41 = [];
    var $39 = $41.length;
    if ($39) {
      var _line, $40 = 0;
      for (; $40 < $39; $40++) {
        _line = $41[$40];
        if (($35 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($36 = ((_line === _DEDENT)))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $49 = _lines;
    if (undefined === $49) $49 = [];
    var $47 = $49.length;
    if ($47) {
      var _line, $48 = 0;
      for (; $48 < $47; $48++) {
        _line = $49[$48];
        if (($43 = ((_line === _INDENT)))) {
          _ind = (_ind || 0) + 1;;
        } else if (($44 = ((_line === _DEDENT)))) {
          _ind--;;
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
        }
      }
    }
    return _newcontext;
  }
};
var $8g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $59, $58, $57, $56, $55, _location, _js, _source, _fn, _bound, _rawsource, $54, $53, _msg, $52, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $51, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if (($52 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
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
    } catch ($54) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $54 + '\n' + '';
      if (($53 = (_grammar))) {
        _msg = $.WrapExtract(_grammar, $54.location.start.offset);
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
        } catch ($58) {
          _location = undefined;
          if (($55 = ($58.location))) {
            _location = $55.start.offset;
          }
          if (($56 = ($58.message.match(/at:([0-9]+)/)))) {
            _location = ($AI.number_op($56[1]));
          }
          if (($57 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $58.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $58.toString() + '\n' + '');
          }
        }
        if (($59 = ($.config.options.beautify))) {
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
var $9g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $73, $72, $71, $67, $66, $65, $61, _filename, _extension, _path, $60, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $72 = $.config.paths;
    if (undefined === $72) $72 = [];
    var $70 = $72.length;
    if ($70) {
      var _path, $71 = 0;
      for (; $71 < $70; $71++) {
        _path = $72[$71];
        var $66 = ['.sai', ''];
        if (undefined === $66) $66 = [];
        var $64 = $66.length;
        if ($64) {
          var _extension, $65 = 0;
          for (; $65 < $64; $65++) {
            _extension = $66[$65];
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
            } catch ($61) {;
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
var $10g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $74, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $11g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $76, _s2, _protogen, _source, _load, _s1, $75, _name = p,
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
        if (($76 = ($.config.options.speedometer))) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return _protogen;
      }
    }();
    return $.protogens[_name];
  }
};
var $12g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $77, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME);
  }
};
var $13g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $85, $84, $83, $82, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $78, _name = p,
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
        var $84 = $86;
        if (undefined === $84) $84 = [];
        var $81 = $84.length;
        if ($81) {
          var $82, $83 = 0;
          for (; $83 < $81; $83++) {
            $82 = $84[$83];
            _heritage.push($82);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $14g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $95, _protogen, $94, $93, $92, $91, _adopt, _prototype, _ancestors, $87, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $93 = _ancestors[_name];
            if (undefined === $93) $93 = [];
            var $90 = $93.length;
            if ($90) {
              var $91, $92 = 0;
              for (; $92 < $90; $92++) {
                $91 = $93[$92];
                _adopt($91);
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
        if (($95 = ($.isas[_prototype.isa]))) {
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
var $15g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $104, $103, $102, $101, _adopt, _source, $97, _islib, _ancestors, $96, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($97 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $103 = _ancestors[_name];
        if (undefined === $103) $103 = [];
        var $100 = $103.length;
        if ($100) {
          var $101, $102 = 0;
          for (; $102 < $100; $102++) {
            $101 = $103[$102];
            _adopt($101);
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
var $16g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $107, $106, $105, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($107 = ($.GetPrototype(_name)))) {
      if (undefined !== ($106 = ($107.constructor))) {
        return $106;
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $17g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $111, $110, $109, _obj, $108, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($111 = ($.GetPrototype(_name)))) {
      _obj = Object.create($111);
      if (($109 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($110 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $118, $117, $116, $115, $114, $113, $112, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($113 = (_c.paths))) {
      $.config.paths = $113;
    }
    if (undefined !== ($114 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $114);
    }
    if (undefined !== ($115 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $115);
    }
    if (undefined !== ($116 = (_c.constructs))) {
      $.config.constructs = $AI.update_op($.config.constructs, $116);
    }
    if (undefined !== ($117 = (_c.Loader))) {
      $.config.Loader = $117;
    }
    if (($118 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
