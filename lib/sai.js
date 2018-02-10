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
var __context={"name":"sai","loader":"SAI.GetSourceFromPaths","path":"src/sai.sai","mtime":"2018-02-10T16:34:18.014Z","fetched":"2018-02-10T16:34:26.112Z"};
var _FS = require('fs');
var _PATH = require('path');
var _SAILIB = require('sai-library');
var _GLOBAL = [];
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
prototype.__tobelocked = prototype.__tobelocked.concat(["'Instantiate'", "'Clean'", "'Dedenter'", "'Contextualize'", "'GetParser'", "'GetSourceFromPaths'", "'Compile'", "'GetProtogen'", "'Expression'", "'GetAncestors'", "'GetPrototype'", "'GetSource'", "'Require'", "'Create'", "'Configure'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
var $1g = prototype['Instantiate'];
prototype['Instantiate'] = function(p) {
  var $ = this; {
    _GLOBAL.root = $;
    $.Clean();
  }
};
var $2g = prototype['Clean'];
prototype['Clean'] = function(p) {
  var _name, $0, $ = this; {
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
    $.config.Loader = function(p) {
      var _name = p; {
        return $.GetSourceFromPaths(_name);
      }
    };
    _SAILIB.import = $.Require;
    _SAILIB.create_op = $.Create;
  }
};
var $3g = prototype['Dedenter'];
prototype['Dedenter'] = function(p) {
  var $21, $20, $19, $18, $14, $13, $12, $11, $9, _j, _i, _context, $8, $7, $6, $5, $4, $3, _depth, _line, $2, _heredoc, _out, _indent, _lines, $1, _src = p,
    $ = this; {
    _lines = _src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
    _indent = [0];
    _out = [];
    _heredoc = false;
    if (($2 = ((_lines[0].substr(0, 2) === '#!')))) {
      _lines.shift();
    }
    var $19 = _lines;
    if (undefined === $19) $19 = [];
    var $17 = $19.length;
    if ($17) {
      var _line, $18 = 0;
      for (; $18 < $17; $18++) {
        _line = $19[$18];
        _depth = 0;
        var $3;
        while ($3 = ((_line[_depth] === ' '))) {
          _depth++;;
        }
        if (($4 = ((_depth === _line.length)))) {
          _out = $AI.concat_op(_out, '', true);
        } else {
          _line = _line.substr(_depth);
          if (($5 = ((_line.substr(0, 2) === '//')))) {
            _out = $AI.concat_op(_out, _line, true);
          } else if (($6 = ((_depth === _indent[0])))) {
            _out = $AI.concat_op(_out, _line, true);
          } else if (($7 = ((_depth > _indent[0])))) {
            _out = $AI.concat_op(_out, ['{', _line], true);
            _indent.unshift(_depth);
          } else {
            var $8;
            while ($8 = ((_depth < _indent[0]))) {
              _out = $AI.concat_op(_out, ['}'], true);
              _indent.shift();
            }
            _out = $AI.concat_op(_out, _line, true);
            if (($14 = ((_depth !== _indent[0])))) {
              _context = '';
              var $11 = (_i - 3),
                $10 = (_i + 4);
              for (; $11 < $10; $11 += 1) {
                if (($9 = ((($11 > 0) && ($11 < _lines.length))))) {
                  _context += '' + $11 + ': ' + (((_i === _j)) ? ('->') : ('  ')) + ' ' + _lines[_j] + '\n';
                }
              }
              throw new Error('SAI: indenting error\n' + _context);
            }
          }
        }
      }
    }
    var $21;
    while ($21 = ((_indent.shift() > 0))) {
      _out.push('}');
    }
    return [(_out.join('\n') + '\n')];
  }
};
var $4g = prototype['Contextualize'];
prototype['Contextualize'] = function(p, _offset) {
  var $38, $37, $36, $32, $31, $30, $29, $28, $24, $23, _line, _times, _string, _dup, _newcontext, _lines, _minind, _ind, _context, $22, _source = p,
    $ = this; {
    _context = _source.substring((_offset - 100), _offset);
    _context += '<HERE>';
    _context += _source.substring(_offset, (_offset + 100));
    _ind = 0;
    _minind = 0;
    _lines = _context.split('\n');
    _newcontext = '';
    _dup = function(p, _times) {
      var _string = p; {
        _times = ($AI.number_op(_times));
        if (!(_times)) {
          return '';
        }
        return _string.repeat(_times);
      }
    };
    var $29 = _lines;
    if (undefined === $29) $29 = [];
    var $27 = $29.length;
    if ($27) {
      var _line, $28 = 0;
      for (; $28 < $27; $28++) {
        _line = $29[$28];
        if (($23 = ((_line === '{')))) {
          _ind++;;
        } else if (($24 = ((_line === '}')))) {
          _ind--;;
        }
        _minind = Math.min(_minind, _ind);
      }
    }
    _ind = (0 - (_minind));
    var $37 = _lines;
    if (undefined === $37) $37 = [];
    var $35 = $37.length;
    if ($35) {
      var _line, $36 = 0;
      for (; $36 < $35; $36++) {
        _line = $37[$36];
        if (($31 = ((_line === '{')))) {
          _ind++;;
        } else if (($32 = ((_line === '}')))) {
          _ind--;;
        } else {
          _newcontext += (_dup('  ', _ind) + (_line + '\n'));
        }
      }
    }
    return _newcontext;
  }
};
var $5g = prototype['GetParser'];
prototype['GetParser'] = function(p) {
  var $45, $44, $43, _js, _source, _dedent, _fn, _bound, _rawsource, $42, $41, _end, _e, _beg, _msg, $40, _mainParser, _grammar, _PEG, _parserFile, _grammarFile, $39, $ = this; {
    try {
      _grammarFile = _PATH.resolve(_PATH.join(__dirname, 'saigrammar.peg'));
      _parserFile = _PATH.resolve(_PATH.join(__dirname, 'saigrammar.js'));
      if (($40 = (((!(_FS.existsSync(_parserFile))) || (_FS.statSync(_grammarFile).mtime > _FS.statSync(_parserFile).mtime))))) {
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
    } catch ($42) {
      _msg = 'SAI: Could not compile saigrammar.peg.' + '\n' + 'Is pegjs available? Is there a syntax error in the grammar?' + '\n' + '' + '\n' + '' + $42 + '\n' + '';
      if (($41 = (_grammar))) {
        _beg = _grammar.substring((_e.offset - 50), _e.offset);
        _end = _grammar.substring(_e.offset, (_e.offset + 50));
        _msg += '' + _beg + '<HERE>' + _end + '\n' + '';
      }
      throw new Error(_msg);
    }
    _mainParser = eval(_mainParser);
    return function(p, _bound, _fn) {
      var _rawsource = p; {
        _rawsource += '\n\n';
        _dedent = $.Dedenter(_rawsource);
        _source = _dedent[0];
        try {
          _js = _mainParser.parse(_source, {
            startrule: ((_fn) ? ('startFile') : ('startExpression')),
            bound: _bound,
            globals: $.config.verbs,
            persist: $.persist,
            filename: _fn
          });
        } catch ($44) {
          if (($43 = ($44.location))) {
            throw new Error('SAI: Syntax error <HERE> in ' + JSON.stringify(_fn) + '\n' + '' + '\n' + '' + $.Contextualize(_source, $44.location.start.offset, $44.location.end.offset) + '\n' + '' + '\n' + '' + $44.message + '\n' + '');
          } else {
            throw new Error('SAI: Error creating prototype:' + '\n' + '' + '\n' + '' + $44.tostring() + '\n' + '');
          }
        }
        if (($45 = ($.config.options.beautify))) {
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
var $6g = prototype['GetSourceFromPaths'];
prototype['GetSourceFromPaths'] = function(p) {
  var $59, $58, $57, $53, $52, $51, $47, _filename, _extension, _path, $46, _name = p,
    $ = this; {
    var $58 = $.config.paths;
    if (undefined === $58) $58 = [];
    var $56 = $58.length;
    if ($56) {
      var _path, $57 = 0;
      for (; $57 < $56; $57++) {
        _path = $58[$57];
        var $52 = ['.sai', ''];
        if (undefined === $52) $52 = [];
        var $50 = $52.length;
        if ($50) {
          var _extension, $51 = 0;
          for (; $51 < $50; $51++) {
            _extension = $52[$51];
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
            } catch ($47) {;
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
var $7g = prototype['Compile'];
prototype['Compile'] = function(p) {
  var $60, _source = p,
    $ = this; {
    return new Function('prototype', 'options', 'require', '$AI', '__dirname', _source);
  }
};
var $8g = prototype['GetProtogen'];
prototype['GetProtogen'] = function(p) {
  var $62, _s2, _protogen, _source, _load, _s1, $61, _name = p,
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
        if (($62 = ($.config.options.speedometer))) {
          $AI.debug_op('SAI: Compiled ' + _name + ' in ' + (_s2 - _s1) + 'ms.');
        }
        $.source[_name] = _source;
        return _protogen;
      }
    }();
    return $.protogens[_name];
  }
};
var $9g = prototype['Expression'];
prototype['Expression'] = function(p) {
  var _this, _js, $63, _source = p,
    $ = this; {
    _js = 'return ' + $.Parse(_source, undefined, undefined);
    return $.Compile(_js)(_this, {}, require, _SAILIB, __dirname);
  }
};
var $10g = prototype['GetAncestors'];
prototype['GetAncestors'] = function(p) {
  var $71, $70, $69, $68, _protogen, _obj, _leaf, _nodupes, _ancestors, _heritage, $64, _name = p,
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
        var $72 = _obj.__inherits;
        _ancestors[_leaf] = $72;
        var $70 = $72;
        if (undefined === $70) $70 = [];
        var $67 = $70.length;
        if ($67) {
          var $68, $69 = 0;
          for (; $69 < $67; $69++) {
            $68 = $70[$69];
            _heritage.push($68);
          }
        }
      }
    }
    return _ancestors;
  }
};
var $11g = prototype['GetPrototype'];
prototype['GetPrototype'] = function(p, _bindings) {
  var $81, _protogen, $80, $79, $78, $77, _adopt, _proto, _ancestors, $73, _name = p,
    $ = this; {
    if (undefined === $.prototypes[_name]) $.prototypes[_name] = function(p) {
      {
        _ancestors = $.GetAncestors(_name);
        _proto = new $.proto(_name);
        _adopt = function(p) {
          var _name = p; {
            var $79 = _ancestors[_name];
            if (undefined === $79) $79 = [];
            var $76 = $79.length;
            if ($76) {
              var $77, $78 = 0;
              for (; $78 < $76; $78++) {
                $77 = $79[$78];
                _adopt($77);
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
        if (($81 = ($.isas[_proto.isa]))) {
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
var $12g = prototype['GetSource'];
prototype['GetSource'] = function(p) {
  var $90, $89, $88, $87, _adopt, _source, $83, _islib, _ancestors, $82, _name = p,
    $ = this; {
    _ancestors = $.GetAncestors(_name);
    _islib = (0 <= _name.indexOf('sailib'));
    if (($83 = (_islib))) {
      $AI.debug_op('Building SAILIB specifically to refer to iteself; not requiring sai-library.');
    }
    _source = '"use strict";' + '\n' + '' + '\n' + 'var prototype=new function()' + '{' + '\n' + 'this.Constructor=function()' + '{}' + ';' + '\n' + 'this.__tobelocked=[];' + '\n' + 'this.__tobefrozen=[];' + '\n' + 'this.__contracts=[];' + '\n' + 'this.__unverified=true;' + '\n' + 'this.isof=' + '{}' + ';' + '\n' + 'return this;' + '\n' + '' + '}' + '();' + '\n' + 'var $AI=' + ((_islib) ? ('prototype') : ('require("sai-library")')) + ';' + '\n' + '// Generated code follows' + '\n' + '';
    _adopt = function(p) {
      var _name = p; {
        var $89 = _ancestors[_name];
        if (undefined === $89) $89 = [];
        var $86 = $89.length;
        if ($86) {
          var $87, $88 = 0;
          for (; $88 < $86; $88++) {
            $87 = $89[$88];
            _adopt($87);
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
var $13g = prototype['Require'];
prototype['Require'] = function(p) {
  var $92, _proto, $91, _name = p,
    $ = this; {
    _proto = _GLOBAL.root.GetPrototype(_name);
    if (undefined !== ($92 = (_proto.constructor))) {
      return $92;
    }
    throw new Error('SAI.Require: do not know how to create object ' + _name);
  }
};
var $14g = prototype['Create'];
prototype['Create'] = function(p, _parameters) {
  var $96, $95, $94, _obj, $93, _name = p,
    $ = this; {
    if (undefined !== ($96 = (_GLOBAL.root.GetPrototype(_name)))) {
      _obj = Object.create($96);
      if (($94 = (_obj.Constructor))) {
        _obj.Constructor();;
      }
      if (($95 = (_obj.Instantiate))) {
        _obj.Instantiate.apply(_obj, _parameters);;
      }
      return _obj;
    }
    throw new Error('SAI.Create: do not know how to create object ' + _name);
  }
};
var $15g = prototype['Configure'];
prototype['Configure'] = function(p) {
  var $102, $101, $100, $99, $98, $97, _config = p,
    $ = this; {
    if (undefined !== ($98 = (_config.paths))) {
      $.config.paths = $98;
    }
    if (undefined !== ($99 = (_config.verbs))) {
      $.config.verbs = $AI.update_op($.config.verbs, $99);
    }
    if (undefined !== ($100 = (_config.options))) {
      $.config.options = $AI.update_op($.config.options, $100);
    }
    if (undefined !== ($101 = (_config.Loader))) {
      $.config.Loader = $101;
    }
    if (($102 = ($.config.options.beautify))) {
      $.Beautify = require('js-beautify').js_beautify;
    }
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
