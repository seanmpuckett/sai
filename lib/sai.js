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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-02-11T20:50:32.319Z","fetched":"2018-02-11T20:50:41.194Z"};
var _FS = require('fs');
var _PATH = require('path');
var _SAILIB = require('sai-library');
var _DEFAULT_config = {
  verbs: {
    'debug': '$AI.debug_op',
    'require': 'require',
    'assert': '$AI.assert'
  },
  paths: [(__dirname + '/')],
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
var $1g = prototype['Instantiate'];
prototype['Instantiate'] = function(p) {
  var $_d, $_c, $ = this; {
    $.Clean();
  }
};
var $2g = prototype['Clean'];
prototype['Clean'] = function(p) {
  var $_d, $_c, $0, $ = this; {
    $.prototypes = {};
    $.source = {};
    $.protogens = {};
    $.isas = {};
    $.config = $AI.clone_op(_DEFAULT_config);
    $.persist = {
      globalcount: 1
    };
    $.proto = function(p) {
      {
        var $ = this;
        $.Constructor = function(p) {
          {;
          }
        };
        $.__tobelocked = [];
        $.__tobefrozen = [];
        $.__contracts = [];
        $.__unverified = true;
        $.isof = {};
        return $;
      }
    };
    $.Parse = $.GetParser();
    $.config.Loader = function(p) {
      {
        return $.GetSourceFromPaths.apply($, arguments);
      }
    };
    _SAILIB.import = function(p) {
      {
        return $.Require.apply($, arguments);
      }
    };
    _SAILIB.create_op = function(p) {
      {
        return $.Create.apply($, arguments);
      }
    };
  }
};
var $3g = prototype['Dedenter'];
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
          _depth++;;
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
                _trimmed = $AI.slice_op((_line), undefined, _heredepth);
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
var $4g = prototype['WrapExtract'];
prototype['WrapExtract'] = function(p, _location) {
  var $25, _source = p,
    $ = this; {
    return (_source.substring((_location - 100), _location) + ('<HERE>' + _source.substring(_location, (_location + 100))));
  }
};
var $5g = prototype['Contextualize'];
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
          _ind++;;
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
          _ind++;;
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
var $6g = prototype['GetParser'];
prototype['GetParser'] = function(p) {
  var $_d, $_c, $49, $48, $47, _js, _source, _fn, _bound, _rawsource, $46, $45, _e, _msg, $44, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $43, $ = this; {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(__dirname, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(__dirname, 'saigrammar.js'));
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
        _msg = $.WrapExtract(_grammar, _e.offset);
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
        } catch ($48) {
          if (($47 = ($48.location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, $48.location.start.offset, $48.location.end.offset) + '\n' + '' + '\n' + '' + $48.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $48.toString() + '\n' + '');
          }
        }
        if (($49 = ($.config.options.beautify))) {
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
var $7g = prototype['GetSourceFromPaths'];
prototype['GetSourceFromPaths'] = function(p) {
  var $_d, $_c, $63, $62, $61, $57, $56, $55, $51, _filename, _extension, _path, $50, _name = p,
    $ = this; {
    var $62 = $.config.paths;
    if (undefined === $62) $62 = [];
    var $60 = $62.length;
    if ($60) {
      var _path, $61 = 0;
      for (; $61 < $60; $61++) {
        _path = $62[$61];
        var $56 = ['.sai', ''];
        if (undefined === $56) $56 = [];
        var $54 = $56.length;
        if ($54) {
          var _extension, $55 = 0;
          for (; $55 < $54; $55++) {
            _extension = $56[$55];
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
            } catch ($51) {;
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
var $8g = prototype['Compile'];
prototype['Compile'] = function(p) {
  var $64, _source = p,
    $ = this; {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $9g = prototype['GetProtogen'];
prototype['GetProtogen'] = function(p) {
  var $_d, $_c, $66, _s2, _protogen, _source, _load, _s1, $65, _name = p,
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
        if (($66 = ($.config.options.speedometer))) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.source[_name] = _source;
        return _protogen;
      }
    }();
    return $.protogens[_name];
  }
};
var $10g = prototype['Expression'];
prototype['Expression'] = function(p) {
  var _this, _js, $67, _source = p,
    $ = this; {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(_this, {}, require, _SAILIB, __dirname);
  }
};
var $11g = prototype['GetAncestors'];
prototype['GetAncestors'] = function(p) {
  var $_d, $_c, $75, $74, $73, $72, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $68, _name = p,
    $ = this; {
    _heritage = [_name];
    _ancestors = {};
    _nodupes = {};
    var _leaf;
    while (_leaf = (_heritage.shift())) {
      if (!(_nodupes[_leaf])) {
        _nodupes[_leaf] = true;
        _obj = new $.proto(_name);
        _protogen = $.GetProtogen(_leaf);
        _protogen(_obj, {
          name: _leaf
        }, require, _SAILIB, __dirname);
        _obj.Constructor();
        if (!(_obj.isa)) {
          throw new Error('SAI GetPrototype: object loaded as ' + _leaf + ' does not have an isa type identifier.');
        }
        var $76 = _obj.__inherits;
        _ancestors[_leaf] = $76;
        var $74 = $76;
        if (undefined === $74) $74 = [];
        var $71 = $74.length;
        if ($71) {
          var $72, $73 = 0;
          for (; $73 < $71; $73++) {
            $72 = $74[$73];
            _heritage.push($72);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $12g = prototype['GetPrototype'];
prototype['GetPrototype'] = function(p, _bindings) {
  var $_d, $_c, $85, _protogen, $84, $83, $82, $81, _adopt, _proto, _ancestors, $77, _name = p,
    $ = this; {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _proto = new $.proto(_name);
        _adopt = function(p) {
          var _name = p; {
            var $83 = _ancestors[_name];
            if (undefined === $83) $83 = [];
            var $80 = $83.length;
            if ($80) {
              var $81, $82 = 0;
              for (; $82 < $80; $82++) {
                $81 = $83[$82];
                _adopt($81);
              }
            }
            _protogen = $.GetProtogen(_name);
            _protogen(_proto, {
              name: _name
            }, require, _SAILIB, __dirname);
          }
        };
        _adopt(_name);
        Object.defineProperty(_proto, 'isa', {
          enumerable: false,
          value: _proto.isa
        });
        if (($85 = ($.isas[_proto.isa]))) {
          throw new Error('SAI: object defined by ' + _name + ' has a duplicate.isa type ' + _proto.isa + ' identical to ' + $.isas[_proto.isa]);
        }
        $.isas[_proto.isa] = _name;
        _SAILIB.finalizePrototype(_proto);
        return _proto;
      }
    }();
    return $.prototypes[_name];
  }
};
var $13g = prototype['GetSource'];
prototype['GetSource'] = function(p) {
  var $_d, $_c, $94, $93, $92, $91, _adopt, _source, $87, _islib, _ancestors, $86, _name = p,
    $ = this; {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($87 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function()' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
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
        _source += ($.source[_name] + '\n');
      }
    };
    _adopt(_name);
    _source += '$AI.finalizePrototype(prototype);' + '\n' + 'if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); ' + '}' + '\n' + 'var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;' + '\n' + 'exports=result; try { module.exports=result; ' + '}' + ' catch(e) ' + '{}' + ';' + '\n' + 'return result;' + '\n' + '';
    return _source;
  }
};
var $14g = prototype['Require'];
prototype['Require'] = function(p) {
  var $_d, $_c, $97, $96, $95, _name = p,
    $ = this; {
    if (undefined !== ($97 = ($.GetPrototype(_name)))) {
      if (undefined !== ($96 = ($97.constructor))) {
        return $96;
      }
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $15g = prototype['Create'];
prototype['Create'] = function(p, _parameters) {
  var $_d, $_c, $101, $100, $99, _obj, $98, _name = p,
    $ = this; {
    if (undefined !== ($101 = ($.GetPrototype(_name)))) {
      _obj = Object.create($101);
      if (($99 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($100 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $16g = prototype['Configure'];
prototype['Configure'] = function(p) {
  var $107, $106, $105, $104, $103, $102, _config = p,
    $ = this; {
    if (undefined !== ($103 = (_config.paths))) {
      $.config.paths = $103;
    }
    if (undefined !== ($104 = (_config.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $104);
    }
    if (undefined !== ($105 = (_config.options))) {
      $.config.options = $AI.update_op($.config.options, $105);
    }
    if (undefined !== ($106 = (_config.Loader))) {
      $.config.Loader = $106;
    }
    if (($107 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
