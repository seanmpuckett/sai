#!/usr/bin/env node

// Javascript source for ListsP.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-09T22:04:14.998Z","fetched":"2018-03-10T16:36:22.522Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var $9g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $_d, $_c, $5, $4, $3, $2, $1, $0, _vars, _out = p,
    $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'); {
    _vars = [];
    if ($5 = (_out)) {
      var $2 = _out,
        $1;
      if (undefined === $2) $2 = [];
      var $3 = $2.length;
      for ($1 = 0; $1 < $3; $1++) {
        $0 = $2[$1];
        _vars.push($0[0][1]);;
      }
    }
    return (_vars);
  }
};
var __context={"name":"ListsP.sai","loader":"SAI.GetSourceFromPaths","path":"src/ListsP.sai","mtime":"2018-03-09T21:39:26.017Z","fetched":"2018-03-10T16:36:22.357Z"};
var isa = prototype.isa = 'ListsP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['ListsP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "IntoPiper", "TotalPiper", "AuditPiper", "ThruPiper", "ArraysPiper", "KVPiper", "ReplicatePiper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  SPLIT: ('^&*SP.L.I.' + (Math.random() + 'T.H.E.RE*&^'))
};
for (var i in t) {
  prototype.__tobelocked.push(i);
  prototype[i] = t[i];
};
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'pipers': {
          'audit': {
            clauses: {
              'audit': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.AuditPiper).apply($, arguments);
            },
            tools: []
          },
          'observe': {
            clauses: {
              'observe': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.AuditPiper).apply($, arguments);
            },
            tools: []
          },
          'set': {
            clauses: {
              'set': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.ThruPiper).apply($, arguments);
            },
            tools: []
          },
          'thru': {
            clauses: {
              'thru': {
                expr: true,
                outblock: true,
                use: true
              }
            },
            handler: function() {
              return ($.ThruPiper).apply($, arguments);
            },
            tools: []
          },
          'into': {
            clauses: {
              'into': {
                valexpr: true,
                valoutblock: true,
                valuse: true
              }
            },
            handler: function() {
              return ($.IntoPiper).apply($, arguments);
            },
            tools: []
          },
          'total': {
            clauses: {
              'total': {
                expr: true,
                use: true,
                none: true
              }
            },
            handler: function() {
              return ($.TotalPiper).apply($, arguments);
            },
            tools: []
          },
          'keys': {
            clauses: {
              'keys': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            },
            tools: []
          },
          'values': {
            clauses: {
              'values': {
                none: true
              }
            },
            handler: function() {
              return ($.KVPiper).apply($, arguments);
            },
            tools: []
          },
          'iterate': {
            clauses: {
              'iterate': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'concat': {
            clauses: {
              'concat': {
                expr: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'collect': {
            clauses: {
              'collect': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'enlist': {
            clauses: {
              'enlist': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'entrait': {
            clauses: {
              'entrait': {
                none: true
              }
            },
            handler: function() {
              return ($.ArraysPiper).apply($, arguments);
            },
            tools: []
          },
          'replicate': {
            clauses: {
              'replicate': {
                expr: true
              }
            },
            handler: function() {
              return ($.ReplicatePiper).apply($, arguments);
            },
            tools: ['var $piper$replicate=function(a,c){' + '\n' + '  var r=new Array(c);' + '\n' + '  while (c>0) r[--c]=a;' + '\n' + '  return r;' + '\n' + '}' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '//// INTO PIPER' + '\n' + '']
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['IntoPiper'] || function() {};
prototype['IntoPiper'] = function(p) {
  var $_d, $_c, $1, _fn, _vars, _startvalue, _outs, _tools, _pattern, $0, $ = this['IntoPiper'] ? this : $bindfail('IntoPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'IntoPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _outs = $.OutVarHelper(p.work.args.out);
    _startvalue = p.work.args.val;
    switch ($1 = (p.work.type)) {
      case 'into.valexpr':
      case 'total.expr':
        _vars = {
          'this': false,
          'key': false,
          'sum': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  return \x5e{block};' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',' + _startvalue + ')';
        break;
      case 'into.valoutblock':
      case 'total.outblock':
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'sum': _outs[2],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  \x5e{block};' + '\n' + '  return \x5e{sum};' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',' + _startvalue + ')';
        break;
      case 'into.valuse':
      case 'total.use':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + p.work.args.use + ',' + _startvalue + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $1 + ' in IntoPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $3g = prototype['TotalPiper'] || function() {};
prototype['TotalPiper'] = function(p) {
  var $_d, $_c, $3, _fn, _vars, _tools, _pattern, $2, $ = this['TotalPiper'] ? this : $bindfail('TotalPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'TotalPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($3 = (p.work.type)) {
      case 'total.expr':
        _vars = {
          'this': false,
          'key': false,
          'sum': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{sum},\x5e{this},\x5e{key}) {' + '\n' + '  var $t=\x5e{block};' + '\n' + '  return (undefined===\x5e{sum}) ? $t : (\x5e{sum}+$t);' + '\n' + '}' + '\n' + '';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + _fn + ',undefined)';
        break;
      case 'total.use':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',' + p.work.args.use + ',undefined)';
        break;
      case 'total.none':
        _pattern = '$AI.reduce_op_fast(' + $.SPLIT + ',function(s,i){' + '\n' + '  return (undefined===s) ? i : s+i;' + '\n' + '},undefined)' + '\n' + '';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $3 + ' in IntoPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $4g = prototype['AuditPiper'] || function() {};
prototype['AuditPiper'] = function(p) {
  var $_d, $_c, $5, _outs, _fn, _vars, _op, _tools, _pattern, $4, $ = this['AuditPiper'] ? this : $bindfail('AuditPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'AuditPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'audit')) ? ('audit_op') : ('observe_op'));
    switch ($5 = (p.work.type)) {
      case 'audit.expr':
      case 'observe.expr':
        _vars = {
          'this': false,
          'key': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'audit.outblock':
      case 'observe.outblock':
        _outs = $.OutVarHelper(p.work.args.out);
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'audit.use':
      case 'observe.use':
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + p.work.args.use + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $5 + ' in ThruPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $5g = prototype['ThruPiper'] || function() {};
prototype['ThruPiper'] = function(p) {
  var $_d, $_c, $7, _outs, _fn, _vars, _op, _tools, _pattern, $6, $ = this['ThruPiper'] ? this : $bindfail('ThruPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ThruPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _op = (((p.work.clause === 'thru')) ? ('map_op') : ('alter_op'));
    switch ($7 = (p.work.type)) {
      case 'thru.expr':
      case 'set.expr':
        _vars = {
          'this': false,
          'key': false,
          'block': p.work.args.expr
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  return \x5e{block};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'thru.outblock':
      case 'set.outblock':
        _outs = $.OutVarHelper(p.work.args.out);
        _vars = {
          'this': _outs[0],
          'key': _outs[1],
          'block': p.work.args.block
        };
        _fn = 'function(\x5e{this},\x5e{key}){' + '\n' + '  \x5e{block};' + '\n' + '  return \x5e{this};' + '\n' + '}';
        _fn = p.tools.replacer(_fn, _vars);
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + _fn + ')';
        break;
      case 'thru.use':
      case 'set.use':
        _pattern = '$AI.' + _op + '(' + $.SPLIT + ',' + p.work.args.use + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $7 + ' in ThruPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $6g = prototype['ArraysPiper'] || function() {};
prototype['ArraysPiper'] = function(p) {
  var $9, _tools, _pattern, $8, $ = this['ArraysPiper'] ? this : $bindfail('ArraysPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ArraysPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($9 = (p.work.type)) {
      case 'iterate.none':
        _pattern = '$AI.iterate_op(' + $.SPLIT + ')';
        break;
      case 'concat.expr':
        _pattern = '$AI.concat_op(' + $.SPLIT + ',' + p.work.args.expr + ')';
        break;
      case 'collect.none':
        _pattern = '$AI.collect_op(' + $.SPLIT + ')';
        break;
      case 'enlist.none':
        _pattern = '$AI.enlist_op(' + $.SPLIT + ')';
        break;
      case 'entrait.none':
        _pattern = '$AI.entrait_op(' + $.SPLIT + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $9 + ' in KVPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $7g = prototype['KVPiper'] || function() {};
prototype['KVPiper'] = function(p) {
  var $11, _tools, _pattern, $10, $ = this['KVPiper'] ? this : $bindfail('KVPiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'KVPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($11 = (p.work.type)) {
      case 'keys.none':
        _pattern = '$AI.keys_op(' + $.SPLIT + ')';
        break;
      case 'values.none':
        _pattern = '$AI.values_op(' + $.SPLIT + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $11 + ' in KVPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $8g = prototype['ReplicatePiper'] || function() {};
prototype['ReplicatePiper'] = function(p) {
  var $13, _tools, _pattern, $12, $ = this['ReplicatePiper'] ? this : $bindfail('ReplicatePiper');
  $AI.expectsThrow(p, {
    "work": true,
    "tools": true
  }, '\'ReplicatePiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    switch ($13 = (p.work.type)) {
      case 'replicate.expr':
        _pattern = '$piper$replicate((' + $.SPLIT + '),(' + p.work.args.expr + '))';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $13 + ' in ReplicatePiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
