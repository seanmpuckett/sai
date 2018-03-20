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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-20T19:27:10.001Z"};
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
    /*@:10*/
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
    /*@:13*/
    return (_vars);
    /*@:14*/
  }
};
var $5g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:17*/
  }
};
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/MiscC.sai","mtime":"2018-03-18T14:18:01.108Z","fetched":"2018-03-20T19:27:09.880Z"};
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
          },
          'inc': {
            repeats: false,
            clauses: {
              'inc': {
                rvalue: true
              }
            },
            handler: function() {
              return ($.MiscConstruct).apply($, arguments);
            }
          },
          'dec': {
            repeats: false,
            clauses: {
              'dec': {
                rvalue: true
              }
            },
            handler: function() {
              return ($.MiscConstruct).apply($, arguments);
            }
          },
          'delete': {
            repeats: false,
            clauses: {
              'delete': {
                rvalue: true
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
          'dec': {
            category: 'keywords',
            subtitle: 'decrement verb',
            summary: 'Decrements (reduces by 1) the value in the given variable.',
            synref: 'dec [var]',
            detail: 'Example:' + '\n' + '' + '\n' + '  set a to 2' + '\n' + '  dec a' + '\n' + '  debug a' + '\n' + '' + '\n' + '  > 1' + '\n' + '' + '\n' + ''
          },
          'delete': {
            category: 'keywords',
            subtitle: 'a verb that deletes variables',
            summary: 'summary',
            synref: 'delete [variable]',
            detail: 'When called on a variable or traits, undefines the named variable or attribute(s) of a variable.' + '\n' + '' + '\n' + '    delete thisUnwantedValue' + '\n' + '    delete goodObject.unwantedAttribute' + '\n' + '' + '\n' + 'This just calls the underlying Javascript version of **delete**, with all the same rules and caveats.' + '\n' + '' + '\n' + '#### delete pipe operator' + '\n' + '' + '\n' + 'The __delete__ pipe operator has advanced functionality, which see.' + '\n' + '' + '\n' + ''
          },
          'inc': {
            category: 'keywords',
            subtitle: 'value increment',
            summary: 'Increments (adds 1 to) the given variable.',
            synref: 'inc [var]',
            detail: 'As in:' + '\n' + '' + '\n' + '    set a to 1' + '\n' + '    inc a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 2' + '\n' + '' + '\n' + 'The __inc__ statement has special behaviour around values that are _undefined_ or evaulate to _falsy_; when you increment one of these values, it becomes `1`.  For example:' + '\n' + '' + '\n' + '    set a to undefined' + '\n' + '    inc a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 1' + '\n' + '' + '\n' + 'This is useful when tallying with an array, e.g. the following construct automatically initializes array elements the way the standard `++` operator does not, such that the `tally` object will contain a log of word usage.' + '\n' + '' + '\n' + '    set tally blank' + '\n' + '    every word' + '\n' + '      inc tally\it' + '\n' + '' + '\n' + 'Note that __dec__ does not have similar initialization functionality.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
          },
          'orphan': {
            category: 'keywords',
            subtitle: 'rescoping this',
            summary: '**Orphan** causes the __@__ scoping prefix within the function to refer to the context' + '\n' + 'of the function call, instead of the context of the function definition.',
            detail: 'You probably want to use this in combination with **local** variable definitions.' + '\n' + '' + '\n' + 'For clarifications and example code on this, see **task**.' + '\n' + '' + '\n' + 'To do this on a case-by-case basis, use the __@@__ scoping prefix (which see).' + '\n' + '' + '\n' + ''
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
      /*@:171*/
    }
    /*@:172*/
    _body = '';
    /*@:173*/
    var $4 = p.clauses[0];
    switch ($3 = ($4.type)) {
      case 'orphan.none':
        _body = 'var $=this;\n';
        /*@:183*/
        break;
      case 'inc.rvalue':
        _body = '' + $4.args.rvalue + '=(' + $4.args.rvalue + ' || 0)+1;\n';
        /*@:186*/
        break;
      case 'dec.rvalue':
        _body = '' + $4.args.rvalue + '--;\n';
        /*@:189*/
        break;
      case 'delete.rvalue':
        _body = 'delete ' + $4.args.rvalue + ';\n';
        /*@:192*/
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
        /*@:207*/
        break;
    }; /*@:208*/
    return ({
      body: _body
    });
    /*@:209*/
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
