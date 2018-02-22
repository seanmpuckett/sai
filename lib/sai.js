#!/usr/bin/env node

// Javascript source for sai transipled by SAI
//

"use strict";

var prototype=new function(){
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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-02-20T19:29:33.924Z","fetched":"2018-02-20T19:29:41.991Z"};
var _FS = require('fs');
var _PATH = require('path');
var _SAILIB = require('sai-library');
var _DIRNAME = __dirname;
var _DEFAULT_config = {
  verbs: {
    'debug': '$AI.debug_op',
    'require': 'require',
    'assert': '$AI.assert'
  },
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true
  },
  Loader: ['default source loader linked later in file']
};
var isa = prototype.isa = 'SAI';
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
  var $_d, $_c, $ = this; {
    $.Clean();
  }
};
var $4g = prototype['Clean'] || function() {};
prototype['Clean'] = function(p) {
  var $_d, $_c, $0, $ = this; {
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
  }
};
var $5g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $24, $23, $22, $18, $17, $16, $15, $14, $13, $12, $11, $10, _heredoc, _isBlank, _isComment, _trimmed, $9, _depth, $8, _trail, _line, $7, $6, $5, $4, $2, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $1, _src = p,
    $ = this; {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $4 = (_lineno - 3),
          $3 = (_lineno + 4);
        for (; $4 < $3; $4 += 1) {
          if (undefined !== ($2 = (_rawlines[$4]))) {
            _result += '' + $4 + ':' + ((($4 === _lineno)) ? ('->') : ('  ')) + ' ' + $2 + '\n';
          }
        }
        return _result;
      }
    };
    if (($7 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2))))) {
      _rawlines.shift();
    }
    var $22 = _rawlines;
    if (undefined === $22) $22 = [];
    var $21 = $22.length;
    if ($21) {
      var _line, _lineno = 0;
      for (; _lineno < $21; _lineno++) {
        _line = $22[_lineno];
        _trail = _line.length;
        var $8;
        while ($8 = ((' ' === _line[(_trail - 1)]))) {
          _trail--;;
        }
        _line = $AI.slice_op((_line), 0, _trail);
        _depth = 0;
        var $9;
        while ($9 = ((' ' === _line[_depth]))) {
          _depth = (_depth || 0) + 1;;
        }
        _trimmed = $AI.slice_op((_line), _depth, undefined);
        _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
        _isBlank = (0 === _trimmed.length);
        if (!((_isComment || _isBlank))) {
          _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
          switch ($15 = (_heredocstate)) {
            case (0):
              if (($10 = (_heredoc))) {
                _heredocstate = 1;
                _heredepth = _depth;
              }
              if (($11 = ((_depth > _indent[0])))) {
                _indent.unshift(_depth);
                _lines.push('{');
              }
              break;
            case (1):
              if (($12 = ((_depth <= _heredepth)))) {
                throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
              }
              _lines.push('{');
              _indent.unshift(_depth);
              _heredepth = _depth;
              _heredocstate = 2;
              break;
            case (2):
              if (($13 = ((_depth < _heredepth)))) {
                _heredocstate = 0;
              } else if (($14 = ((_depth > _heredepth)))) {
                _trimmed = $AI.slice_op((_line), _heredepth, undefined);
              }
              break;
          }
          if (($18 = ((_depth < _indent[0])))) {
            var $16;
            while ($16 = ((_depth < _indent[0]))) {
              _lines.push('}');
              _indent.shift();
            }
            if (($17 = ((_depth !== _indent[0])))) {
              throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            }
          }
        }
        _lines.push(_trimmed);
      }
    }
    var $24;
    while ($24 = (_indent.shift())) {
      _lines.push('}');
    }
    _lines.push('');
    return _lines.join('\n');
  }
};
var $6g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $25, _source = p,
    $ = this; {
    return (_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100))));
  }
};
var $7g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $42, $41, $40, $36, $35, $34, $33, $32, $28, $27, _line, _newcontext, _minind, _ind, _lines, _context, $26, _source = p,
    $ = this; {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $33 = _lines;
    if (undefined === $33) $33 = [];
    var $31 = $33.length;
    if ($31) {
      var _line, $32 = 0;
      for (; $32 < $31; $32++) {
        _line = $33[$32];
        if (($27 = ((_line === '{')))) {
          _ind = (_ind || 0) + 1;;
        } else if (($28 = ((_line === '}')))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $41 = _lines;
    if (undefined === $41) $41 = [];
    var $39 = $41.length;
    if ($39) {
      var _line, $40 = 0;
      for (; $40 < $39; $40++) {
        _line = $41[$40];
        if (($35 = ((_line === '{')))) {
          _ind = (_ind || 0) + 1;;
        } else if (($36 = ((_line === '}')))) {
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
  var $_d, $_c, $51, $50, $49, $48, $47, _location, _js, _source, _fn, _bound, _rawsource, $46, $45, _msg, $44, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $43, $ = this; {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if (($44 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
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
    } catch ($46) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $46 + '\n' + '';
      if (($45 = (_grammar))) {
        _msg = $.WrapExtract(_grammar, $46.location.start.offset);
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
            persist: $.persist,
            filename: _fn
          });
        } catch ($50) {
          _location = undefined;
          if (($47 = ($50.location))) {
            _location = $47.start.offset;
          }
          if (($48 = ($50.message.match(/at:([0-9]+)/)))) {
            _location = ($AI.number_op($48[1]));
          }
          if (($49 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $50.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $50.toString() + '\n' + '');
          }
        }
        if (($51 = ($.config.options.beautify))) {
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
  var $_d, $_c, $65, $64, $63, $59, $58, $57, $53, _filename, _extension, _path, $52, _name = p,
    $ = this; {
    var $64 = $.config.paths;
    if (undefined === $64) $64 = [];
    var $62 = $64.length;
    if ($62) {
      var _path, $63 = 0;
      for (; $63 < $62; $63++) {
        _path = $64[$63];
        var $58 = ['.sai', ''];
        if (undefined === $58) $58 = [];
        var $56 = $58.length;
        if ($56) {
          var _extension, $57 = 0;
          for (; $57 < $56; $57++) {
            _extension = $58[$57];
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
            } catch ($53) {;
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
  var $66, _source = p,
    $ = this; {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $11g = prototype['GetProtogen'] || function() {};
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $68, _s2, _protogen, _source, _load, _s1, $67, _name = p,
    $ = this; {
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
        if (($68 = ($.config.options.speedometer))) {
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
  var _js, $69, _source = p,
    $ = this; {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME);
  }
};
var $13g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $77, $76, $75, $74, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $70, _name = p,
    $ = this; {
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
        var $78 = _obj.__inherits;
        _ancestors[_leaf] = $78;
        var $76 = $78;
        if (undefined === $76) $76 = [];
        var $73 = $76.length;
        if ($73) {
          var $74, $75 = 0;
          for (; $75 < $73; $75++) {
            $74 = $76[$75];
            _heritage.push($74);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $14g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $87, _protogen, $86, $85, $84, $83, _adopt, _prototype, _ancestors, $79, _name = p,
    $ = this; {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
        _adopt = function(p) {
          var _name = p; {
            var $85 = _ancestors[_name];
            if (undefined === $85) $85 = [];
            var $82 = $85.length;
            if ($82) {
              var $83, $84 = 0;
              for (; $84 < $82; $84++) {
                $83 = $85[$84];
                _adopt($83);
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
        if (($87 = ($.isas[_prototype.isa]))) {
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
  var $_d, $_c, $96, $95, $94, $93, _adopt, _source, $89, _islib, _ancestors, $88, _name = p,
    $ = this; {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($89 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function()' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $95 = _ancestors[_name];
        if (undefined === $95) $95 = [];
        var $92 = $95.length;
        if ($92) {
          var $93, $94 = 0;
          for (; $94 < $92; $94++) {
            $93 = $95[$94];
            _adopt($93);
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
  var $_d, $_c, $99, $98, $97, _name = p,
    $ = this; {
    if (undefined !== ($99 = ($.GetPrototype(_name)))) {
      if (undefined !== ($98 = ($99.constructor))) {
        return $98;
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $17g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $103, $102, $101, _obj, $100, _name = p,
    $ = this; {
    if (undefined !== ($103 = ($.GetPrototype(_name)))) {
      _obj = Object.create($103);
      if (($101 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($102 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $109, $108, $107, $106, $105, $104, _c = p,
    $ = this; {
    if (undefined !== ($105 = (_c.paths))) {
      $.config.paths = $105;
    }
    if (undefined !== ($106 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $106);
    }
    if (undefined !== ($107 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $107);
    }
    if (undefined !== ($108 = (_c.Loader))) {
      $.config.Loader = $108;
    }
    if (($109 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
