#!/usr/bin/env node

// Javascript source for StateC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-07T14:21:44.851Z","fetched":"2018-03-07T23:19:31.918Z"};
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
var $3g = prototype['OutVarHelper'] || function() {};
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
var __context={"name":"StateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/StateC.sai","mtime":"2018-03-07T20:48:56.160Z","fetched":"2018-03-07T23:19:31.895Z"};
var isa = prototype.isa = 'StateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['StateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "StateConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        state: {
          repeats: true,
          clauses: {
            state: {
              exproutblock: true
            }
          },
          handler: function() {
            return ($.StateConstruct).apply($, arguments);
          }
        }
      });
    }
  },
  set: undefined
});
var $2g = prototype['StateConstruct'] || function() {};
prototype['StateConstruct'] = function(p) {
  var $_d, $_c, _body, $6, $5, $4, $3, $2, _block, $1, _name, _states, _names, _trailer, _header, _tools, $0, _work = p,
    $ = this['StateConstruct'] ? this : $bindfail('StateConstruct'); {
    _tools = _work.tools;
    _header = 'var \x5e{temp}=function (){' + '\n' + 'var _goto,_then;' + '\n' + 'var $states={' + '\n' + '';
    _header = _tools.replacer(_header, {
      temp: undefined
    });
    _trailer = '}' + '\n' + '  var $getstatefn=function(state) {' + '\n' + '    return $AI.assert($states[state],"SAI runtime: STATE "+state+" does not exist; available states are "+$AI.keys_op($states).join(\',\'));' + '\n' + '  }' + '\n' + '  _goto=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    var fn=undefined;' + '\n' + '    var l=arguments.length, args=new Array(l-1);' + '\n' + '    for (var li=1; li<l; li++) args[li-1]=arguments[li];' + '\n' + '    fn=function(){statefn.apply(undefined,args)};' + '\n' + '    setImmediate(fn);' + '\n' + '  };' + '\n' + '  _then=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    return function(){statefn.apply(undefined,arguments);};' + '\n' + '  };' + '\n' + '  _goto(' + _work.clauses[0].args.expr + ');' + '\n' + '}();' + '\n' + '';
    _names = {};
    _states = [];
    var $5 = _work.clauses,
      $4 = undefined;
    if (undefined === $5) $5 = {};
    for ($4 in $5) {
      $3 = $5[$4];
      switch ($2 = ($3.type)) {
        case 'state.exproutblock':
          _name = $3.args.expr;
          if ($1 = (_names[_name])) {
            return ({
              error: 'SAI compile: duplicate state ' + _name + ' in STATE construct'
            });
          }
          _names[_name] = (_names[_name] || 0) + 1;
          _block = _tools.tasker({
            'as': $3.args.out,
            block: $3.args.block,
            kind: 'function'
          });
          _states.push('' + _name + ':' + _block);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $3.type + ' in StateConstruct'
          });
          break;
      };
    }
    _tools.addlocal('_goto');
    _tools.addlocal('_then');
    _body = '' + _header + _states.join(',') + _trailer;
    return ({
      body: _body
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
