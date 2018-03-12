#!/usr/bin/env node

// Javascript source for MiscC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-12T15:31:31.325Z"};
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
var $4g = prototype['OutVarHelper'] || function() {};
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
var $5g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"MiscC.sai","loader":"SAI.GetSourceFromPaths","path":"src/MiscC.sai","mtime":"2018-03-12T15:04:05.266Z","fetched":"2018-03-12T15:31:31.299Z"};
var isa = prototype.isa = 'MiscC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['MiscC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "MiscConstruct", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
          'orphan': {
            repeats: false,
            clauses: {
              'orphan': {
                none: true
              }
            },
            handler: function() {
              return ($.MiscConstruct).apply($, arguments);
            }
          },
          'with': {
            repeats: false,
            clauses: {
              'with': {
                exproutblock: true
              }
            },
            handler: function() {
              return ($.MiscConstruct).apply($, arguments);
            }
          }
        }
      });
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "docs", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $0, $ = this; {
      return ({
        'constructs': {
          'orphan': {
            subtitle: 'rescoping this',
            summary: '**Orphan** causes the __@__ scoping prefix within the function to refer to the context' + '\n' + 'of the function call, instead of the context of the function definition.',
            detail: 'You probably want to use this in combination with **local** variable definitions.' + '\n' + '' + '\n' + 'For clarifications and example code on this, see **task**.' + '\n' + '' + '\n' + 'To do this on a case-by-case basis, use the __@@__ scoping prefix (which see).' + '\n' + ''
          },
          'with': {
            subtitle: 'block-level pronoun assignment',
            summary: 'Allows the use of the **it** pronoun (and the `.` scoping prefix) within an arbitrary block of code.',
            detail: 'For example:' + '\n' + '' + '\n' + '    with customer' + '\n' + '      set label to \'\'\'' + '\n' + '        $\{.name}' + '\n' + '        $\{.address1}' + '\n' + '        $\{.address2}' + '\n' + '        $\{.city} $\{.region} $\{.postcode}' + '\n' + '' + '\n' + 'Another example, this time using an assigned pronoun:' + '\n' + '' + '\n' + '    with category\\document\\page as p' + '\n' + '      set precis:' + '\n' + '        title p.title' + '\n' + '        authors join\'d p.authors \', \'' + '\n' + '        summary p.abstract ? p.summary' + '\n' + '' + '\n' + 'Though that is much the same as this:' + '\n' + '' + '\n' + '    local p category\\document\\page' + '\n' + '    set precis:' + '\n' + '      title p.title' + '\n' + '      authors join\'d p.authors \', \'' + '\n' + '      summary p.abstract ? p.summary' + '\n' + '' + '\n' + '__WITH__ can make things tidier, but mind what your pronouns are.' + '\n' + '' + '\n' + '' + '\n' + ''
          }
        }
      });
    }
  },
  set: undefined
});
var $3g = prototype['MiscConstruct'] || function() {};
prototype['MiscConstruct'] = function(p) {
  var $_d, $_c, $4, $3, _vars, _outs, _body, $2, $1, $ = this['MiscConstruct'] ? this : $bindfail('MiscConstruct'); {
    if ($2 = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI bug: error parsing construct with multiple clauses: ' + $AI.keys_op(p.clauses).join(', ')
      });
    }
    _body = '';
    var $4 = p.clauses[0];
    switch ($3 = ($4.type)) {
      case 'orphan.none':
        _body = 'var $=this;\n';
        break;
      case 'with.exproutblock':
        _outs = $.OutVarHelper($4.args.out);
        _vars = {
          'this': _outs[0],
          'block': $4.args.block,
          'expr': $4.args.expr
        };
        _body = 'var \x5e{this}=\x5e{expr};' + '\n' + '\x5e{block};';
        _body = p.tools.replacer(_body, _vars);
        break;
      default:
        return ({
          error: 'Unhandled construct type ' + $4.type + ' in ReturnConstruct'
        });
        break;
    };
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
