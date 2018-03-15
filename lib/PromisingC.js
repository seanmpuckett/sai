#!/usr/bin/env node

// Javascript source for PromisingC.sai transpiled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-15T00:31:41.069Z"};
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
var $5g = prototype['OutVarHelper'] || function() {};
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
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"PromisingC.sai","loader":"SAI.GetSourceFromPaths","path":"src/PromisingC.sai","mtime":"2018-03-14T18:38:55.974Z","fetched":"2018-03-15T00:31:40.973Z"};
var isa = prototype.isa = 'PromisingC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['PromisingC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "PromisingConstruct", "Documents", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
          'promising': {
            repeats: false,
            clauses: {
              promising: {
                verb: true,
                outblock: true
              },
              then: {
                verb: true,
                outblock: true
              },
              catch: {
                verb: true,
                outblock: true
              },
              finally: {
                verb: true,
                outblock: true
              },
              all: {
                exprs: true,
                none: true
              },
              any: {
                exprs: true,
                none: true
              },
              resolving: {
                exprs: true,
                none: true
              },
              rejecting: {
                exprs: true,
                none: true
              },
              finalizing: {
                none: true
              }
            },
            handler: function() {
              return ($.PromisingConstruct).apply($, arguments);
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
    var $_d, $_c, $0, $ = this; {
      return ($.Documents());
    }
  },
  set: undefined
});
var $3g = prototype['PromisingConstruct'] || function() {};
prototype['PromisingConstruct'] = function(p) {
  var $_d, $_c, $9, $8, $7, $6, $5, _block, _body, $4, $3, _options, _tasker, $2, $1, _work = p,
    $ = this['PromisingConstruct'] ? this : $bindfail('PromisingConstruct'); {
    var $2 = ($AI.element_op($AI.slice_op(_work.clauses, undefined, -1), 0)).clause;
    if (!((($2 === 'finally') || (($2 === 'catch') || (($2 === 'rejecting') || ($2 === 'finalizing')))))) {
      return ({
        error: 'SAI compiler: final clause in PROMISING must be CATCH, FINALLY, REJECTING or FINALIZING, not ' + $2.toUpperCase()
      });
    };
    _tasker = function(p) {
      {
        _options = {
          'as': p.args.out,
          block: p.args.block,
          kind: 'function',
          execute: p.execute
        };
        if ($4 = (p.ispromise)) {
          $3 = _options;
          _options = $AI.overlay_op($3, {
            preface: 'return new Promise(function($_resolve,$_reject) {',
            postface: 'if ($_resolve) return $_resolve();})'
          });
        }
        return (_work.tools.tasker(_options));
      }
    };
    _body = 'var $tthen=function(t){if (!t || !t.then) throw new Error("SAI Runtime: THEN should be followed by a verb returning a promise (or an indented block of code)."); return t;};\n';
    var $8 = _work.clauses,
      $7 = undefined;
    if (undefined === $8) $8 = {};
    for ($7 in $8) {
      $6 = $8[$7];
      switch ($5 = ($6.type)) {
        case 'promising.verb':
          _body += '$tthen(' + $6.args.verb + ')';
          break;
        case 'promising.outblock':
          _block = _tasker({
            args: $6.args,
            ispromise: true,
            execute: true
          });
          _body += '(' + _block + ')';
          break;
        case 'then.verb':
          _body += '.then(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case 'then.outblock':
          _block = _tasker({
            args: $6.args,
            ispromise: true
          });
          _body += '.then(' + _block + ')';
          break;
        case 'catch.verb':
          _body += '.catch(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case 'catch.outblock':
          _block = _tasker({
            args: $6.args
          });
          _body += '.catch(' + _block + ')';
          break;
        case 'finally.verb':
          _body += '.finally(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case 'finally.outblock':
          _block = _tasker({
            args: $6.args
          });
          _body += '.finally(' + _block + ')';
          break;
        case 'resolving.exprs':
          _body += '.then(function(p){return $_resolve(' + $6.args.exprs[1] + ');})';
          break;
        case 'resolving.none':
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          break;
        case 'rejecting.exprs':
          _body += '.catch(function(p){return $_reject(' + $6.args.exprs[1] + ');})';
          break;
        case 'rejecting.none':
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case 'finalizing.none':
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case 'all.exprs':
          _body += '.then(function(p){return Promise.all(' + $6.args.exprs[1] + ');})';
          break;
        case 'any.exprs':
          _body += '.then(function(p){return Promise.any(' + $6.args.exprs[1] + ');})';
          break;
        default:
          return ({
            error: 'SAI compiler: PROMISING construct unhandled type ' + $6.type
          });
          break;
      };
    }
    _body += ';\n';
    return ({
      body: _body
    });
  }
};
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $10, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'promising': {
          subtitle: '',
          summary: 'The __promising__ construct lends clarity to asynchronous operations using `promise`-based functions.',
          synref: 'promising [active promise]' + '\n' + '  resolve/reject [parameters]' + '\n' + ' - or -' + '\n' + 'promising' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + '... followed by one or more of ...' + '\n' + '' + '\n' + 'then [active promise]' + '\n' + ' - or -' + '\n' + 'then (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'catch [active promise]' + '\n' + ' - or -' + '\n' + 'catch (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'finally [active promise]' + '\n' + ' - or -' + '\n' + 'finally (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'any [array of active promises]' + '\n' + '' + '\n' + 'all [array of active promises]' + '\n' + '' + '\n' + 'rejecting (expression)' + '\n' + '' + '\n' + 'resolving (expression)' + '\n' + '' + '\n' + 'finalizing' + '\n' + '',
          detail: 'In one sense __promising__ is just a bit of syntactical sugar for using `chain`' + '\n' + 'to connect `then` and `catch` etc in a series of chained method calls. And indeed,' + '\n' + 'that\'s what it does behind the scenes. But simplifying syntax is not a bad thing,' + '\n' + 'especially if it eases working with a more hat can be quite confusing.' + '\n' + 'And Promises are certainly that.' + '\n' + '' + '\n' + 'In order to make this construct work, you need to know what each clause' + '\n' + 'requires, not only syntactically, but from a code point of view.' + '\n' + 'We\'ll take each clause one by one.' + '\n' + '' + '\n' + 'Most clauses in __promising__ are either a single line with a verb (with' + '\n' + 'optional parameters) that returns a Promise (a.k.a a _thenable_), or' + '\n' + 'multi-line, accepting a block of code that it will wrap in a Promise,' + '\n' + 'as if it were the body of a function.' + '\n' + '' + '\n' + 'First things first: the __promising__ clause must be the first clause in' + '\n' + 'the construct, and you can only use it once. (You can start with either form' + '\n' + 'of the __promising__ clause.) You can mix and match the other clauses in' + '\n' + 'any order once you\'ve started the __promising__.' + '\n' + '' + '\n' + 'The final clause in the construct must be either __catch__ or __finally__' + '\n' + 'to ensure that errors are properly caught. However, you can use either of' + '\n' + 'these multiple times in the same construct, in order to control execution flow' + '\n' + 'between error handlers and the normal flow of code.' + '\n' + '' + '\n' + '#### promising' + '\n' + '' + '\n' + '    promising [verb expression returning an active Promise]' + '\n' + '     - or -' + '\n' + '    promising' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + '__Promising__ starts the clause. It expects an active Promise -- an object' + '\n' + 'with `.then` and `.catch` ready for use.' + '\n' + '' + '\n' + 'In single line form, use it with a verb expression -- the same syntax you\'d' + '\n' + 'use on a bare line to invoke a function. (You do not use `from` or `!` to' + '\n' + 'invoke the verb, that happens automatically.)' + '\n' + '' + '\n' + '    promising db.listDatabases' + '\n' + '' + '\n' + 'In this form, the function you are promising must have been declared as a __promise__, or' + '\n' + 'been created in or wrapped in a _Promise_ wrapper by a library or helper.' + '\n' + '' + '\n' + 'If you need to use asynchronous functions that use callbacks or other methodologies,' + '\n' + 'ideally you\'d wrap them for easier use, but' + '\n' + '' + '\n' + 'In multi-line form, you\'re crafting the body of a __promise__ function, and you\'ll' + '\n' + 'use __reject__ and __resolve__ to pass along asynchronous results to the next' + '\n' + 'clause of the construct.' + '\n' + '' + '\n' + '    promising' + '\n' + '      https.get url, task' + '\n' + '        set body \'\'' + '\n' + '        $setEncoding \'utf8\'' + '\n' + '        $on \'data\', task' + '\n' + '          set body + $' + '\n' + '        $on \'end\', task' + '\n' + '          resolve body' + '\n' + '        $on \'error\', task' + '\n' + '          reject $' + '\n' + '' + '\n' + 'Of course you could just take that bunch of code and wrap it in a __promise__' + '\n' + 'yourself, perhaps as part of some global object. But more likely you\'d just find' + '\n' + 'a package on npm that offers promisified fetchers ai Because you\'re smart.' + '\n' + '' + '\n' + '#### then' + '\n' + '' + '\n' + '    then [verb expression returning an active Promise]' + '\n' + '     - or -' + '\n' + '    then (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'The __then__ clause continues the chain of asynchronous execution. Whatever' + '\n' + 'you __resolve__ in the previous clause is given to the next __then__ clause as' + '\n' + 'one (or more) parameters. (You can use the pronoun __$__ to refer to the first' + '\n' + 'parameter passed without giving it a name.)' + '\n' + '' + '\n' + '    then db.dropDatabase dbName' + '\n' + '' + '\n' + 'Which, by the way, does the exact same thing as this:' + '\n' + '' + '\n' + '    then' + '\n' + '      resolve from db.dropDatabase dbName' + '\n' + '' + '\n' + 'Notice how the second form uses `from` to invoke the function before resolving' + '\n' + 'the value, while the first form just assumes you\'ll be wanting to execute a' + '\n' + 'function so makes the invokation syntax implicit.' + '\n' + '' + '\n' + 'The block takes the same form and acts the same way as the one in __promising__.' + '\n' + '' + '\n' + 'Here\'s a fun note: when coding these _block form_ clauses, there is an automatic' + '\n' + '__resolve__ applied at the end of the code block, so execution carries onwards without' + '\n' + 'you having to be explicit about it. So you can  do this:' + '\n' + '' + '\n' + '    promising' + '\n' + '      debug "First this"' + '\n' + '    then' + '\n' + '      debug "Then this"' + '\n' + '      reject "Ninja!"' + '\n' + '    then' + '\n' + '      debug "But not this."' + '\n' + '    catch' + '\n' + '      debug $' + '\n' + '' + '\n' + 'Which prints:' + '\n' + '' + '\n' + '    First this' + '\n' + '    Then this' + '\n' + '    Ninja!' + '\n' + '' + '\n' + 'Notice how `Ninja!` is transferred by passing the message to the __catch__ clause' + '\n' + 'via __reject__.  And also note the __$__ pronoun. The __catch__ clause could have' + '\n' + 'been written either of these ways too.' + '\n' + '' + '\n' + '    catch given msg' + '\n' + '      debug msg' + '\n' + '' + '\n' + '    catch debug $' + '\n' + '' + '\n' + '#### catch' + '\n' + '' + '\n' + '    catch [verb expression returning an active Promise]' + '\n' + '     - or -' + '\n' + '    catch (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'As you\'d expect __catch__ works just like the other line or block form clauses,' + '\n' + 'except that it is only executed if a previous clause __rejects__ something. As' + '\n' + 'illustrated in the above text!' + '\n' + '' + '\n' + 'If there is a __then__ or __finally__ clause after __catch__ in the construct,' + '\n' + 'it will be executed, unless you __reject__ again.' + '\n' + '' + '\n' + '#### finally' + '\n' + '' + '\n' + '    finally [verb expression returning an active Promise]' + '\n' + '     - or -' + '\n' + '    finally (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'This clause captures both main and error code paths in the Promise pseudo-thread,' + '\n' + 'thus it is always executed regardless of whether the previous clause ended with a __reject__ or __resolve__.' + '\n' + '' + '\n' + 'Support for __finally__ is dependent on whether the Promises library you are using' + '\n' + 'supports it; SAI does not shim it for you. As of this writing, `Promise.finally`' + '\n' + 'has not been ratified for inclusion in ES6, and node.js does not support it.' + '\n' + '' + '\n' + '#### all' + '\n' + '' + '\n' + '    all [expression yielding an array of promises]' + '\n' + '     - or -' + '\n' + '    all' + '\n' + '' + '\n' + 'The __all__ clause, along with __any__ is different than the other clauses. __All__ is' + '\n' + 'a simple way of waiting for an array of promises to _all_ be resolved. It takes a single' + '\n' + 'parameter -- an array -- and waits for each Promise in the array to be resolved.' + '\n' + 'It uses the `Promise.all` helper to do this.' + '\n' + '' + '\n' + 'The stand-alone version of all, that takes no expression, assumes the array has been' + '\n' + 'sent to it from the __resolve__ in the previous clause. The following two lines are identical:' + '\n' + '' + '\n' + '    all       // all (implicit)' + '\n' + '    all $     // all (explicit)' + '\n' + '' + '\n' + 'The __all__ clause is great to use when you need to fetch multiple resources all at' + '\n' + 'once and need to know when they\'re done. The following two line snippet fetches a list of' + '\n' + 'databases (asynchronously) and then passes the resulting list __thru__ a function that' + '\n' + 'creates multiple requests for more information about each database. The result is' + '\n' + 'an array of promises that are used as a parameter to __all__.' + '\n' + '' + '\n' + '    promising db.listDatabases' + '\n' + '    all $ thru db.get(it, \'/\')' + '\n' + '' + '\n' + '__All__ resolves either with a list of the __resolve__ values of every promise in the' + '\n' + 'array, or a _single_ value that is the _first_ rejection of any of those promises.' + '\n' + 'In other words, __all__ will wait to __resolve__ until all of it\'s work done, but the' + '\n' + 'instant something breaks, it __rejects__ everything and gives up.' + '\n' + '' + '\n' + '#### any' + '\n' + '' + '\n' + '    any [expression yielding an array of promises]' + '\n' + '     - or -' + '\n' + '    any' + '\n' + '' + '\n' + 'The __any__ clause is very similar to __all__, except that it either __rejects__ or' + '\n' + '__resolves__ based on the first event in all of the promises in its array. So while __all__' + '\n' + 'will wait to resolve for everything to be finished, __any__ will resolve when the first' + '\n' + 'Promise it is monitoring does so. Like __all__, however, it __rejects__ on the first Promise to do so.' + '\n' + '' + '\n' + '#### rejecting' + '\n' + '' + '\n' + '    rejecting [expression]' + '\n' + '     - or -' + '\n' + '    rejecting' + '\n' + '' + '\n' + 'So you might be wondering how do you pass the results of a __promising__ construct to a' + '\n' + 'Promise that contains it. After all, you cannot __resolve__ or __reject__ an outer promise' + '\n' + 'from an inner one -- the rules of scoping forbid it. In this case, the last three clauses help you out.' + '\n' + '' + '\n' + '__Rejecting__ is internally equivalent to a __catch__ clause, in that any error conditions' + '\n' + 'are caught by it. However, it then marks the Promise _containing_  the __promising__ construct as rejected.' + '\n' + '' + '\n' + 'The bare word version of __rejecting__ sends the error value it received to the containing' + '\n' + 'Promise, while the version with an expression allows you to customise it.' + '\n' + '' + '\n' + '#### resolving' + '\n' + '' + '\n' + '    resolving [expression]' + '\n' + '     - or -' + '\n' + '    resolving' + '\n' + '' + '\n' + 'Similarlly, __resolving__ will resolve a containing Promise with either an expression' + '\n' + 'or a passed-on value.' + '\n' + '' + '\n' + '#### finalizing' + '\n' + '' + '\n' + '    finalizing [expression]' + '\n' + '     - or -' + '\n' + '    finalizing' + '\n' + '' + '\n' + 'And, most useful, the __finalizing__ clause will take the current state of the __promising__' + '\n' + 'clause it is a part of and transfer it to the containing promise, kind of like a `return` statement.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      }
    });
  }
};
$AI.finalizePrototype(prototype);
if (prototype.isof[prototype.isa].type === "singleton") { prototype.Constructor(); prototype.Instantiate(); }
var result=prototype.isof[prototype.isa].type === "main" ? prototype.constructor() : prototype;
exports=result; try { module.exports=result; } catch(e) {};
return result;
