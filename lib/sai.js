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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-02-26T00:59:19.137Z","fetched":"2018-02-26T00:59:23.774Z"};
var _FS = require('fs');
var _PATH = require('path');
var _SAILIB = require('sai-library');
var _DIRNAME = __dirname;
var _DEFAULT_config = {
  verbs: {
    'debug': '$AI.debug_op',
    'require': 'require',
    'assert': '$AI.assert',
    'Error': 'Error'
  },
  constructs: [{}],
  paths: [(_DIRNAME + '/')],
  options: {
    speedometer: false,
    beautify: true
  },
  Loader: ['default source loader linked later in file']
};
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
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'Clean'", "'AsyncConstruct'", "'Dedenter'", "'WrapExtract'", "'Contextualize'", "'GetParser'", "'GetSourceFromPaths'", "'Compile'", "'GetProtogen'", "'Expression'", "'GetAncestors'", "'GetPrototype'", "'GetSource'", "'Require'", "'Create'", "'Configure'", "isa"]);
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
        return this;
      }
    };
    $.Parse = $.GetParser();
    $.config.Loader = $.GetSourceFromPaths.bind($);
    _SAILIB.import = $.Require.bind($);
    _SAILIB.create_op = $.Create.bind($);
    $.config.constructs = {};
  }
};
var $5g = prototype['AsyncConstruct'] || function() {};
prototype['AsyncConstruct'] = function(p) {
  var $_d, $_c, $10, $9, $8, $7, $4, $3, _body, $1, _work = p,
    $ = this['AsyncConstruct'] ? this : $bindfail('AsyncConstruct'); {
    var $2 = $AI.element_op($AI.slice_op((_work), -1, undefined), 0).clause;
    if (!((($2 === 'finally') || ($2 === 'catch')))) {
      return {
        error: 'SAI compiler: final clause in ASYNC must be CATCH or FINALLY'
      };
    }
    _body = '';
    var $9 = _work;
    if (undefined === $9) $9 = [];
    for (var $8 in $9) {
      var $7 = $9[$8];
      if (($3 = (('block' === $7.syntax)))) {
        return {
          error: 'SAI compiler: ASYNC clause ' + $7.clause.toUpperCase() + ' expects an expression (which might be TASK or PROMISE definition)'
        };
      }
      $AI.debug_op('' + $7.type + ': ' + JSON.stringify($7.args));
      switch ($4 = ($7.type)) {
        case ('async-exprs'):
          _body += '(' + $7.args[0][1] + ')';
          break;
        case ('then-exprs'):
          _body += '.then(' + $7.args[0][1] + ')';
          break;
        case ('catch-exprs'):
          _body += '.catch(' + $7.args[0][1] + ')';
          break;
        case ('finally-exprs'):
          ;
          break;
        case ('all-exprs'):
          ;
          break;
        case ('any-exprs'):
          ;
          break;
        default:
          return {
            error: 'SAI compiler: async construct unhandled type ' + $7.type
          };
          break;
      }
    }
    _body += ';\n';
    $AI.debug_op('\nresult:');
    $AI.debug_op(_body);
    return {
      body: ''
    };
  }
};
var $6g = prototype['Dedenter'] || function() {};
prototype['Dedenter'] = function(p) {
  var $_d, $_c, $34, $33, $32, $28, $27, $26, $25, $24, $23, $22, $21, $20, _heredoc, _isBlank, _isComment, _trimmed, $19, _depth, $18, _trail, _line, $17, $16, $15, $14, $12, _result, _lineno, _Context, _lines, _indent, _heredepth, _heredocstate, _rawlines, $11, _src = p,
    $ = this['Dedenter'] ? this : $bindfail('Dedenter'); {
    _rawlines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _heredocstate = 0;
    _heredepth = 0;
    _indent = [0];
    _lines = [];
    _Context = function(p) {
      var _lineno = p; {
        _result = 'near line ' + _lineno + ':\n';
        var $14 = (_lineno - 3),
          $13 = (_lineno + 4);
        for (; $14 < $13; $14 += 1) {
          if (undefined !== ($12 = (_rawlines[$14]))) {
            _result += '' + $14 + ':' + ((($14 === _lineno)) ? ('->') : ('  ')) + ' ' + $12 + '\n';
          }
        }
        return _result;
      }
    };
    if (($17 = (('#!' === $AI.slice_op((_rawlines[0]), 0, 2))))) {
      _rawlines.shift();
    }
    var $32 = _rawlines;
    if (undefined === $32) $32 = [];
    var $31 = $32.length;
    if ($31) {
      var _line, _lineno = 0;
      for (; _lineno < $31; _lineno++) {
        _line = $32[_lineno];
        _trail = _line.length;
        var $18;
        while ($18 = ((' ' === _line[(_trail - 1)]))) {
          _trail--;;
        }
        _line = $AI.slice_op((_line), 0, _trail);
        _depth = 0;
        var $19;
        while ($19 = ((' ' === _line[_depth]))) {
          _depth = (_depth || 0) + 1;;
        }
        _trimmed = $AI.slice_op((_line), _depth, undefined);
        _isComment = ('//' === $AI.slice_op((_trimmed), 0, 2));
        _isBlank = (0 === _trimmed.length);
        if (!((_isComment || _isBlank))) {
          _heredoc = ('\'\'\'' === $AI.slice_op((_line), undefined, (0 - (3))));
          switch ($25 = (_heredocstate)) {
            case (0):
              if (($20 = (_heredoc))) {
                _heredocstate = 1;
                _heredepth = _depth;
              }
              if (($21 = ((_depth > _indent[0])))) {
                _indent.unshift(_depth);
                _lines.push('{');
              }
              break;
            case (1):
              if (($22 = ((_depth <= _heredepth)))) {
                throw new Error('SAI: multi-line quotes must be indented ' + _Context(_lineno));
              }
              _lines.push('{');
              _indent.unshift(_depth);
              _heredepth = _depth;
              _heredocstate = 2;
              break;
            case (2):
              if (($23 = ((_depth < _heredepth)))) {
                _heredocstate = 0;
              } else if (($24 = ((_depth > _heredepth)))) {
                _trimmed = $AI.slice_op((_line), _heredepth, undefined);
              }
              break;
          }
          if (($28 = ((_depth < _indent[0])))) {
            var $26;
            while ($26 = ((_depth < _indent[0]))) {
              _lines.push('}');
              _indent.shift();
            }
            if (($27 = ((_depth !== _indent[0])))) {
              throw new Error('SAI: incorrect indentation ' + _Context(_lineno));
            }
          }
        }
        _lines.push(_trimmed);
      }
    }
    var $34;
    while ($34 = (_indent.shift())) {
      _lines.push('}');
    }
    _lines.push('');
    return _lines.join('\n');
  }
};
var $7g = prototype['WrapExtract'] || function() {};
prototype['WrapExtract'] = function(p, _location) {
  var $35, _source = p,
    $ = this['WrapExtract'] ? this : $bindfail('WrapExtract'); {
    return (_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100))));
  }
};
var $8g = prototype['Contextualize'] || function() {};
prototype['Contextualize'] = function(p, _offset) {
  var $_d, $_c, $52, $51, $50, $46, $45, $44, $43, $42, $38, $37, _line, _newcontext, _minind, _ind, _lines, _context, $36, _source = p,
    $ = this['Contextualize'] ? this : $bindfail('Contextualize'); {
    _context = $.WrapExtract(_source, _offset);
    _lines = _context.split('\n');
    _ind = 0;
    _minind = 0;
    _newcontext = '';
    var $43 = _lines;
    if (undefined === $43) $43 = [];
    var $41 = $43.length;
    if ($41) {
      var _line, $42 = 0;
      for (; $42 < $41; $42++) {
        _line = $43[$42];
        if (($37 = ((_line === '{')))) {
          _ind = (_ind || 0) + 1;;
        } else if (($38 = ((_line === '}')))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $51 = _lines;
    if (undefined === $51) $51 = [];
    var $49 = $51.length;
    if ($49) {
      var _line, $50 = 0;
      for (; $50 < $49; $50++) {
        _line = $51[$50];
        if (($45 = ((_line === '{')))) {
          _ind = (_ind || 0) + 1;;
        } else if (($46 = ((_line === '}')))) {
          _ind--;;
        } else {
          _newcontext += ('  '.repeat(_ind) + (_line + '\n'));
        }
      }
    }
    return _newcontext;
  }
};
var $9g = prototype['GetParser'] || function() {};
prototype['GetParser'] = function(p) {
  var $_d, $_c, $61, $60, $59, $58, $57, _location, _js, _source, _fn, _bound, _rawsource, $56, $55, _msg, $54, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $53, $ = this['GetParser'] ? this : $bindfail('GetParser'); {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(_DIRNAME, 'saigrammar.js'));
      if (($54 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
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
    } catch ($56) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $56 + '\n' + '';
      if (($55 = (_grammar))) {
        _msg = $.WrapExtract(_grammar, $56.location.start.offset);
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
        } catch ($60) {
          _location = undefined;
          if (($57 = ($60.location))) {
            _location = $57.start.offset;
          }
          if (($58 = ($60.message.match(/at:([0-9]+)/)))) {
            _location = ($AI.number_op($58[1]));
          }
          if (($59 = (_location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, _location) + '\n' + '' + '\n' + '' + $60.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $60.toString() + '\n' + '');
          }
        }
        if (($61 = ($.config.options.beautify))) {
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
var $10g = prototype['GetSourceFromPaths'] || function() {};
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $75, $74, $73, $69, $68, $67, $63, _filename, _extension, _path, $62, _name = p,
    $ = this['GetSourceFromPaths'] ? this : $bindfail('GetSourceFromPaths'); {
    var $74 = $.config.paths;
    if (undefined === $74) $74 = [];
    var $72 = $74.length;
    if ($72) {
      var _path, $73 = 0;
      for (; $73 < $72; $73++) {
        _path = $74[$73];
        var $68 = ['.sai', ''];
        if (undefined === $68) $68 = [];
        var $66 = $68.length;
        if ($66) {
          var _extension, $67 = 0;
          for (; $67 < $66; $67++) {
            _extension = $68[$67];
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
            } catch ($63) {;
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
var $11g = prototype['Compile'] || function() {};
prototype['Compile'] = function(p) {
  var $76, _source = p,
    $ = this['Compile'] ? this : $bindfail('Compile'); {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $12g = prototype['GetProtogen'] || function() {};
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
        if (($78 = ($.config.options.speedometer))) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.sources[_name] = _source;
        return _protogen;
      }
    }();
    return $.protogens[_name];
  }
};
var $13g = prototype['Expression'] || function() {};
prototype['Expression'] = function(p) {
  var _js, $79, _source = p,
    $ = this['Expression'] ? this : $bindfail('Expression'); {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(this, {}, require, _SAILIB, _DIRNAME);
  }
};
var $14g = prototype['GetAncestors'] || function() {};
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $87, $86, $85, $84, _opts, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $80, _name = p,
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
        var $88 = _obj.__inherits;
        _ancestors[_leaf] = $88;
        var $86 = $88;
        if (undefined === $86) $86 = [];
        var $83 = $86.length;
        if ($83) {
          var $84, $85 = 0;
          for (; $85 < $83; $85++) {
            $84 = $86[$85];
            _heritage.push($84);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $15g = prototype['GetPrototype'] || function() {};
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $97, _protogen, $96, $95, $94, $93, _adopt, _prototype, _ancestors, $89, _name = p,
    $ = this['GetPrototype'] ? this : $bindfail('GetPrototype'); {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _prototype = new $.protoConstructor(_name);
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
        if (($97 = ($.isas[_prototype.isa]))) {
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
var $16g = prototype['GetSource'] || function() {};
prototype['GetSource'] = function(p) {
  var $_d, $_c, $106, $105, $104, $103, _adopt, _source, $99, _islib, _ancestors, $98, _name = p,
    $ = this['GetSource'] ? this : $bindfail('GetSource'); {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($99 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '#!/usr/bin/env node' + '\n' + '' + '\n' + '\/\/ Javascript source for ' + _name + ' transipled by SAI' + '\n' + '\/\/' + '\n' + '' + '\n' + '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function() ' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $105 = _ancestors[_name];
        if (undefined === $105) $105 = [];
        var $102 = $105.length;
        if ($102) {
          var $103, $104 = 0;
          for (; $104 < $102; $104++) {
            $103 = $105[$104];
            _adopt($103);
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
var $17g = prototype['Require'] || function() {};
prototype['Require'] = function(p) {
  var $_d, $_c, $109, $108, $107, _name = p,
    $ = this['Require'] ? this : $bindfail('Require'); {
    if (undefined !== ($109 = ($.GetPrototype(_name)))) {
      if (undefined !== ($108 = ($109.constructor))) {
        return $108;
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $18g = prototype['Create'] || function() {};
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $113, $112, $111, _obj, $110, _name = p,
    $ = this['Create'] ? this : $bindfail('Create'); {
    if (undefined !== ($113 = ($.GetPrototype(_name)))) {
      _obj = Object.create($113);
      if (($111 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($112 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $19g = prototype['Configure'] || function() {};
prototype['Configure'] = function(p) {
  var $119, $118, $117, $116, $115, $114, _c = p,
    $ = this['Configure'] ? this : $bindfail('Configure'); {
    if (undefined !== ($115 = (_c.paths))) {
      $.config.paths = $115;
    }
    if (undefined !== ($116 = (_c.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $116);
    }
    if (undefined !== ($117 = (_c.options))) {
      $.config.options = $AI.update_op($.config.options, $117);
    }
    if (undefined !== ($118 = (_c.Loader))) {
      $.config.Loader = $118;
    }
    if (($119 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
