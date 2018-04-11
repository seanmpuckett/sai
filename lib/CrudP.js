#!/usr/bin/env node

// Javascript source for CrudP.sai transpiled by SAI
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

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/Construct.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-04T23:09:42.435Z","fetched":"2018-04-11T21:09:42.584Z"};
var __path=require('path');
var __require=function(fn) {
  try {
    return require(fn);
  } catch (e) {
    try {
      return require(__path.join(process.cwd(),fn));
    } catch (e) {
      return require(__path.join(process.cwd(),'node_modules',fn));
    }
  }
}
var isa = prototype.isa = 'Construct';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Construct'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["OutVarHelper", "ExprsHelper", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.__contracts = prototype.__contracts.concat(['manifest']);
var $5g = prototype['OutVarHelper'] || function() {};
prototype['OutVarHelper'] = function(p) {
  var $0_this, $1_key, $2_list, $3_length, $4_none, $5_trial, $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'),
    $_c, $_d, _out = p,
    _vars; {
    _vars = [];
    if ($5_trial = (_out)) {
      var $2_list = _out,
        $1_key;
      if (undefined === $2_list) $2_list = [];
      var $3_length = $2_list.length;
      for ($1_key = 0; $1_key < $3_length; $1_key++) {
        $0_this = $2_list[$1_key];
        _vars.push($0_this[0][1]);;
      }
    }
    return (_vars);
  }
};
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};


var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/CrudP.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-11T16:41:24.471Z","fetched":"2018-04-11T21:09:42.489Z"};
var __path=require('path');
var __require=function(fn) {
  try {
    return require(fn);
  } catch (e) {
    try {
      return require(__path.join(process.cwd(),fn));
    } catch (e) {
      return require(__path.join(process.cwd(),'node_modules',fn));
    }
  }
}
var isa = prototype.isa = 'QueryP';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['QueryP'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "CrudPiper", "Documentation", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  SPLIT: ('\x5e&*SP.L.I.' + (Math.random() + 'T.H.E.RE*&\x5e'))
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
          'select': {
            clauses: {
              'select': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            }
          },
          'update': {
            clauses: {
              'update': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            }
          },
          'delete': {
            clauses: {
              'delete': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
            }
          },
          'expects': {
            clauses: {
              'expects': {
                expr: true
              }
            },
            handler: function() {
              return ($.CrudPiper).apply($, arguments);
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
    var $0_this, $ = this,
      $_c, $_d; {
      return ($.Documentation());
    }
  },
  set: undefined
});
var $3g = prototype['CrudPiper'] || function() {};
prototype['CrudPiper'] = function(p) {
  var $1_this, $2_trial, $3, $ = this['CrudPiper'] ? this : $bindfail('CrudPiper'),
    _pattern, _tools, _work;
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'CrudPiper\''); {
    _pattern = '(' + $.SPLIT + ')';
    _tools = [];
    _work = p.clauses[0];
    if ($2_trial = ((p.clauses.length > 1))) {
      return ({
        error: 'SAI Compiler: ' + _work.clause + ' should not have multiple clauses.'
      });
    }
    switch ($3 = (_work.type)) {
      case 'select.expr':
        _pattern = '$AI.select_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      case 'update.expr':
        _pattern = '$AI.overlay_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      case 'delete.expr':
        _pattern = '$AI.delete_op(' + $.SPLIT + ',' + _work.args.expr + ',true)';
        break;
      case 'expects.expr':
        _pattern = '$AI.expects_op(' + $.SPLIT + ',' + _work.args.expr + ')';
        break;
      default:
        return ({
          error: 'Unhandled piper type ' + $3 + ' in CrudPiper'
        });
        break;
    }
    return ({
      leftright: _pattern.split('' + $.SPLIT),
      tools: _tools
    });
  }
};
var $4g = prototype['Documentation'] || function() {};
prototype['Documentation'] = function(p) {
  var $4_this, $ = this['Documentation'] ? this : $bindfail('Documentation'); {
    return ({
      'pipers': {
        'select': {
          subtitle: 'multi-attribute query',
          summary: 'Returns a new collection that is the subset of the original collection' + '\n' + 'identified by the provided list of keys/indices.',
          detail: 'Example:' + '\n' + '' + '\n' + '    debug fruits | select: 2, 0;' + '\n' + '' + '\n' + '    > [ \'Citron\', \'Apple\' ]' + '\n' + '' + '\n' + '    debug friends | limit 3 | thru <- it | select list name, age' + '\n' + '' + '\n' + '    > [ { name: \'Sara\', age: 32 },' + '\n' + '        { name: \'John\', age: 19 },' + '\n' + '        { name: \'Ellie\', age: 23 } ]' + '\n' + '' + '\n' + ''
        },
        'update': {
          subtitle: 'multi-attribute update',
          summary: 'Creates a new collection that is a composite of a copy of the left collection with all' + '\n' + 'of the values in the right collection overlaid. If discrete keys are available in the' + '\n' + 'left or right collection, they will be used intelligently.' + '\n' + 'Undefined values on the right will not be assigned.',
          detail: 'Examples' + '\n' + '' + '\n' + '    Sample data' + '\n' + '' + '\n' + '    set list1 to list Apple, Banana, Citron' + '\n' + '    set list2 to list Kiwi, undefined, Mango' + '\n' + '    set traits1 to: a 1, b 2, c 3' + '\n' + '    set traits2 to: \'1\' 4, d 5' + '\n' + '' + '\n' + '    debug list1 | update list2' + '\n' + '    > [ \'Kiwi\', \'Banana\', \'Mango\' ]' + '\n' + '' + '\n' + '    debug list1 | update traits1' + '\n' + '    > [ \'Apple\', 4, \'Citron\', d: 5 ]' + '\n' + '' + '\n' + '    debug traits1 | update traits2' + '\n' + '    > { \'1\': 4, a: 1, b: 2, c: 3, d: 5 }' + '\n' + '' + '\n' + '    debug traits1 | update list2' + '\n' + '    { \'0\': \'Kiwi\', \'2\': \'Mango\', a: 1, b: 2, c: 3 }' + '\n' + '' + '\n' + '__Update__ also works with iterators and treats them like arrays.' + '\n' + 'If the left side collection is **undefined**, it will be initialized **blank**.' + '\n' + '' + '\n' + '__Update__ is handy when used in __set__ statements.' + '\n' + '' + '\n' + '  set [variable] | update [collection]' + '\n' + '' + '\n' + 'Update a collection variable with a set of keys/values. When used like this in a __set__ statement,' + '\n' + 'the original data is updated in-place (maybe). Works on lists and traits, and accepts lists, traits' + '\n' + 'and iterators for update data.' + '\n' + '' + '\n' + 'Updating a list:' + '\n' + '' + '\n' + '    debug fruit' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\' ]' + '\n' + '' + '\n' + '    set fruit update: \'1\' \'Pear\', \'3\' \'Guava\'' + '\n' + '    debug fruit' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Pear\', \'Citron\', \'Guava\' ]' + '\n' + '' + '\n' + '    set fruit update list Grape, undefined, Melon' + '\n' + '    debug fruit' + '\n' + '' + '\n' + '    > [ \'Grape\', \'Pear\', \'Melon\', \'Guava\' ]' + '\n' + '' + '\n' + 'Updating traits:' + '\n' + '' + '\n' + '    set friend to friends.1' + '\n' + '    debug friend' + '\n' + '' + '\n' + '    > { name: \'John\', age: 19, cat: true, dog: true, province: \'ON\' }' + '\n' + '' + '\n' + '    set friend update: name \'Jon\', province \'QC\'' + '\n' + '    debug friend' + '\n' + '' + '\n' + '    > { name: \'Jon\', age: 19, cat: true, dog: true, province: \'QC\' }' + '\n' + '' + '\n' + '    set friends update: undefined, friend' + '\n' + '    debug friends' + '\n' + '' + '\n' + '    [ { name: \'Sara\', age: 23, cat: true, province: \'ON\' },' + '\n' + '      { name: \'Jon\', age: 19, cat: true, dog: true, province: \'QC\' },' + '\n' + '      { name: \'Ellie\', age: 22, province: \'QC\' },' + '\n' + '      { name: \'Marshal\', age: 21, dog: true, province: \'ON\' },' + '\n' + '      { name: \'Doug\', age: 18, province: \'ON\' },' + '\n' + '      { name: \'Ann\', age: 23, cat: true, province: \'QC\' },' + '\n' + '      { name: \'Harry\', age: 31, province: \'QC\' },' + '\n' + '      { name: \'Jenna\', age: 28, dog: true, province: \'ON\' } ]' + '\n' + '' + '\n' + 'If the left-side collection is undefined, **update** initializes it to **blank** before merging.' + '\n' + '' + '\n' + ''
        },
        'delete': {
          subtitle: 'multi-attribute removal',
          summary: 'Returns a copy of the collection with the specified attributes removed.' + '\n' + 'Elements in an array are removed in order, so sequence does matter.',
          detail: 'Examples' + '\n' + '' + '\n' + '    set obj to: a 1, b 2, c 3, d 4, e 5, f 6' + '\n' + '    set obj delete \'a\'' + '\n' + '    debug obj' + '\n' + '' + '\n' + '    > { b: 2, c: 3, d: 4, e: 5, f: 6 }' + '\n' + '' + '\n' + '    set obj delete: \'c\', \'f\'' + '\n' + '    debug obj' + '\n' + '' + '\n' + '    > { b: 2, d: 4, e: 5 }' + '\n' + '' + '\n' + '    set obj delete: b \'B is for Bonobo.\', d \'D is for Dixie cups.\'' + '\n' + '    debug obj' + '\n' + '' + '\n' + '    > { e: 5 }' + '\n' + '' + '\n' + 'When **delete** operates on an array, it returns a copy of the array with the elements specified removed.' + '\n' + '' + '\n' + '    debug (list 1,2,3,4,5) delete 1' + '\n' + '' + '\n' + '    > 1, 3, 4, 5' + '\n' + '' + '\n' + '    debug (list 1,2,3,4,5) delete (list 1,2)' + '\n' + '' + '\n' + '    > 1, 3, 5' + '\n' + '' + '\n' + 'Elements are removed in first->last order, so sequence does matter.' + '\n' + '' + '\n' + '    debug (list 1,2,3,4,5) delete (list 2,1)' + '\n' + '' + '\n' + '    > 1, 4, 5' + '\n' + '' + '\n' + '__delete__ is also a first-class keyword used for undefining variables entirely. Please review' + '\n' + 'the related entry in the keywords documentation.' + '\n' + '' + '\n' + ''
        },
        'expects': {
          subtitle: 'rule enforcer for traits',
          summary: 'Expects compares an object againt a set of rules and returns a list of rules' + '\n' + 'that are **violated**. Thus, a successful test of expectations is an empty array.' + '\n' + 'An array with one or more elements is returned that contains a list of the' + '\n' + 'rules that were broken.',
          detail: 'In first-class usage as a keyword, __expects__ is used to check whether a function’s named parameters' + '\n' + '(or any arbitrary object) has certain traits, and optionally if those traits are of a particular type.' + '\n' + 'For more on this, review the keywords documentation.' + '\n' + '' + '\n' + 'For use as a piper, __expects__ compares an object againt a set of rules and returns a list of rules' + '\n' + 'that are **violated**. Thus, a successful test of expectations is an empty array. An array with one' + '\n' + 'or more elements contains a list of the rules that were broken.' + '\n' + '' + '\n' + '#### expects rules' + '\n' + '' + '\n' + 'Rules for **expects** take the form of a set of traits. Their names correspond to names of traits' + '\n' + 'that must be found in the expression under test. The value, if not _true_, is interpreted as an' + '\n' + 'object type; the trait must be of that type (or a child of that type).' + '\n' + '' + '\n' + 'Any violations to the rules are returned in a list; that list being made up of plain objects' + '\n' + 'with the following fields:' + '\n' + '' + '\n' + '    .trait - name expected' + '\n' + '    .expects - type expected' + '\n' + '    .found - type found' + '\n' + '' + '\n' + 'Here are some examples, first as a keyword' + '\n' + '' + '\n' + '    AddStudent task expects $name string, $age number' + '\n' + '      @students.push copy $' + '\n' + '    ..' + '\n' + '    @AddStudent name \'Sally\', age \'12\'' + '\n' + '' + '\n' + '    > Error: SAI: parameter exception in AddStudent' + '\n' + '    > age should be number, but it\'s string' + '\n' + '' + '\n' + 'Performing this same test in an ad-hoc fashion using the **expects** operator would look like this:' + '\n' + '' + '\n' + '    set newStudent to: name \'Sally\', age \'12\'' + '\n' + '    set studentRules to: name \'string\', age \'number\'' + '\n' + '    debug newStudent expects studentRules' + '\n' + '' + '\n' + '    > [ { trait: \'age\', expects: \'number\', found: \'string\' } ]' + '\n' + '' + '\n' + 'N.B. the **expects** clause rule format is identical to that of a single-line **traits** definition, with the additional requirement of a **$** before every trait name.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      }
    });
  }
};




// End of generated code

$AI.finalizePrototype(prototype);
var result=prototype;
switch (prototype.isof[prototype.isa].type) {
case 'singleton':
  prototype.Constructor();
  if (prototype.Instantiate) prototype.Instantiate();
  break;
case 'main':
  result=prototype.constructor();
  break;
default:
  result=prototype.constructor;
  break;
}
exports=result; try { module.exports=result; } catch(e) {};
return result;



