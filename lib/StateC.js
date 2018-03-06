#!/usr/bin/env node

// Javascript source for StateC.sai transipled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-05T21:51:09.424Z","fetched":"2018-03-06T19:07:44.322Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var __context={"name":"StateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/StateC.sai","mtime":"2018-03-06T13:43:11.872Z","fetched":"2018-03-06T19:07:44.271Z"};
var isa = prototype.isa = 'StateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['StateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "'StateConstruct'", "isa"]);
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
  var $_d, $_c, _body, $8, $7, $6, $5, $2, _block, $1, _name, _states, _names, _trailer, _header, _tools, $0, _work = p,
    $ = this['StateConstruct'] ? this : $bindfail('StateConstruct'); {
    _tools = _work.tools;
    _header = 'var \x5e{temp}=function (){' + '\n' + 'var _goto,_then;' + '\n' + 'var $states={' + '\n' + '';
    _header = _tools.replacer(_header, {
      temp: undefined
    });
    _trailer = '}' + '\n' + '  var $getstatefn=function(state) {' + '\n' + '    return $AI.assert($states[state],"SAI runtime: STATE "+state+" does not exist; available states are "+$AI.keys_op($states).join(\',\'));' + '\n' + '  }' + '\n' + '  _goto=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    var fn=undefined;' + '\n' + '    var l=arguments.length, args=new Array(l-1);' + '\n' + '    for (var li=1; li<l; li++) args[li-1]=arguments[li];' + '\n' + '    fn=function(){statefn.apply(undefined,args)};' + '\n' + '    setImmediate(fn);' + '\n' + '  };' + '\n' + '  _then=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    return function(){statefn.apply(undefined,arguments);};' + '\n' + '  };' + '\n' + '  _goto(' + _work.clauses[0].args.expr + ');' + '\n' + '}();' + '\n' + '';
    _names = {};
    _states = [];
    var $7 = _work.clauses;
    if (undefined === $7) $7 = [];
    for (var $6 in $7) {
      var $5 = $7[$6];
      switch ($2 = ($5.type)) {
        case ('state.exproutblock'):
          _name = $5.args.expr;
          if (($1 = (_names[_name]))) {
            return ({
              error: 'SAI compile: duplicate state ' + _name + ' in STATE construct'
            });
          }
          _names[_name] = (_names[_name] || 0) + 1;
          _block = _tools.tasker({
            'as': $5.args.out,
            block: $5.args.block,
            kind: 'function'
          });
          _states.push('' + _name + ':' + _block);
          break;
      }
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
