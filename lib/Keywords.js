#!/usr/bin/env node

// Javascript source for Keywords.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T01:03:09.562Z"};
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "ExprsHelper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var $6g = prototype['OutVarHelper'] || function() {};
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
var $7g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"Keywords.sai","loader":"SAI.GetSourceFromPaths","path":"src/Keywords.sai","mtime":"2018-03-12T01:03:02.976Z","fetched":"2018-03-12T01:03:09.521Z"};
var isa = prototype.isa = 'Keywords';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Keywords'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "introspect", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  boring: ['{', '}', ']', '%%DEDENT%%', '%%INDENT%%', ',']
};
for (var i in t) {
  prototype.__tobelocked.push(i);
  prototype[i] = t[i];
};
var $1g = function() {
  var $ = this;
  return {
    SAI: undefined
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
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ($.introspect);
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "docs", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $0, $ = this; {
      return ($.introspect);
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "introspect", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $_d, $_c, $6, $5, $4, $3, $2, _matches, _matcher, _parsefun, $1, $ = this; {
      _parsefun = $.SAI.mainParser.parse.toString();
      _matcher = /peg\$literalExpectation.\"([^"]+)\"./g;
      _matches = [];
      var $2;
      while ($2 = (_matcher.exec(_parsefun))) {
        _matches.push($2[1]);
      }
      $.boring = /^[0-9a-zA-Z]$|\&\#/;
      $5 = _matches;
      _matches = $AI.filter_op($5, function($3, $4) {
        return ((!($.boring.exec($3))) && (!($.boring[$3])));
      });
      $6 = _matches;
      _matches = $AI.reduce_op($6, function(s, v, k) {
        s[v] = {};
        return s;
      }, {});
      return ({
        'keywords': _matches
      });
    }
  },
  set: undefined
});
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
