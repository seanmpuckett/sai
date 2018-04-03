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
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/Construct.sai","mtime":"2018-03-30T22:02:46.628Z","fetched":"2018-04-03T18:15:35.229Z"};
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
  var $0_this, $1_key, $2_list, $3_length, $4_none, $5_trial, $ = this['OutVarHelper'] ? this : $bindfail('OutVarHelper'),
    $_c, $_d, _out = p,
    _vars; {
    _vars = [];
    /*@:12*/
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
    /*@:15*/
    return (_vars);
    /*@:16*/
  }
};
var $6g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $6_this, $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'),
    $_b, _exprs = p; {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
    /*@:19*/
  }
};
var __context={"loader":"SAI.GetSourceFromFilename","path":"src/PromisingC.sai","mtime":"2018-03-23T13:23:49.035Z","fetched":"2018-04-03T18:15:35.101Z"};
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
                exprs: true,
                outblock: true,
                none: true
              },
              then: {
                exprs: true,
                outblock: true
              },
              catch: {
                exprs: true,
                outblock: true
              },
              finally: {
                exprs: true,
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
              resolved: {
                exprs: true,
                none: true
              },
              rejected: {
                exprs: true,
                none: true
              },
              finalized: {
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
    var $0_this, $ = this,
      $_c, $_d; {
      return ($.Documents());
      /*@:29*/
    }
  },
  set: undefined
});
var $3g = prototype['PromisingConstruct'] || function() {};
prototype['PromisingConstruct'] = function(p) {
  var $10, $11_trial, $12, $13_this, $14_key, $15_list, $16_none, $1_this, $2_this, $3_trial, $4_trial, $5_this, $6_key, $7_list, $8_length, $9_none, $ = this['PromisingConstruct'] ? this : $bindfail('PromisingConstruct'),
    $_b, $_c, $_d, _KeysToText, _Tasker, _a, _block, _body, _finals, _finishers, _options, _terminal, _tools, _work = p; {
    _KeysToText = function(p) {
      var _a = p; {
        return ($AI.keys_op(_a).join('/').toUpperCase());
        /*@:37*/
      }
    };
    /*@:38*/
    _finals = {
      finally: true,
      catch: true,
      rejected: true,
      finalized: true
    };
    /*@:39*/
    var $2_this = (Array.isArray($_b = _work.clauses) ? $_b[$_b.length - 1] : $AI.element_op($AI.slice_op($_b, undefined, -1), 0)).clause;
    if (!(_finals[$2_this])) {
      return ({
        error: 'SAI compiler: final clause in PROMISING must be ' + _KeysToText(_finals) + ', not ' + $2_this.toUpperCase() + '.'
      });
      /*@:42*/
    }; /*@:43*/
    _terminal = false;
    /*@:44*/
    _finishers = {
      resolved: true,
      rejected: true,
      finalized: true
    };
    /*@:45*/
    var $7_list = _work.clauses,
      $6_key;
    if (undefined === $7_list) $7_list = [];
    var $8_length = $7_list.length;
    for ($6_key = 0; $6_key < $8_length; $6_key++) {
      $5_this = $7_list[$6_key];
      if ($3_trial = (_finishers[$5_this.clause])) {
        _terminal = true;
      } else if ($4_trial = (_terminal)) {
        return ({
          error: 'SAI compiler: ' + _KeysToText(_finishers) + ' should not have any other clauses, such as ' + $5_this.clause.toUpperCase() + ', following.'
        });
        /*@:50*/
      };
    }
    /*@:51*/
    _Tasker = function(p) {
      {
        _options = {
          'as': p.args.out,
          block: p.args.block,
          kind: 'function',
          execute: p.execute
        };
        /*@:57*/
        if ($11_trial = (p.ispromise)) {
          $10 = _options;
          _options = $AI.overlay_op($10, {
            preface: 'return new Promise(function($_resolve,$_reject) {',
            postface: 'if ($_resolve) return $_resolve();})'
          });
        }
        /*@:61*/
        return (_work.tools.tasker(_options));
        /*@:62*/
      }
    };
    /*@:63*/
    _tools = ['var $promising$then=function(t,name){' + '\n' + '  if (!t || !t.then) return Promise.resolve(t);' + '\n' + '  return t;' + '\n' + '};' + '\n' + ''];
    /*@:69*/
    _body = '';
    /*@:70*/
    var $15_list = _work.clauses,
      $14_key = undefined;
    if (undefined === $15_list) $15_list = {};
    for ($14_key in $15_list) {
      $13_this = $15_list[$14_key];
      switch ($12 = ($13_this.type)) {
        case 'promising.exprs':
          _body += '$promising$then(' + $13_this.args.exprs[1] + ',\'promising\')';
          /*@:77*/
          break;
        case 'promising.outblock':
          _block = _Tasker({
            args: $13_this.args,
            ispromise: true,
            execute: true
          });
          /*@:80*/
          _body += '(' + ((undefined !== ($_b = _block)) ? $_b : '') + ')';
          /*@:81*/
          break;
        case 'promising.none':
          _body += 'Promise.resolve()';
          /*@:84*/
          break;
        case 'then.exprs':
          _body += '.then(function(p){return $promising$then(' + $13_this.args.exprs[1] + ',\'then\');})';
          /*@:87*/
          break;
        case 'then.outblock':
          _block = _Tasker({
            args: $13_this.args,
            ispromise: true
          });
          /*@:90*/
          _body += '.then(' + _block + ')';
          /*@:91*/
          break;
        case 'catch.exprs':
          _body += '.catch(function(p){return $promising$then(' + $13_this.args.exprs[1] + ',\'catch\');})';
          /*@:94*/
          break;
        case 'catch.outblock':
          _block = _Tasker({
            args: $13_this.args,
            ispromise: true
          });
          /*@:97*/
          _body += '.catch(' + _block + ')';
          /*@:98*/
          break;
        case 'finally.exprs':
          _body += '.finally(function(p){return $promising$then(' + $13_this.args.exprs[1] + ',\'finally\');})';
          /*@:101*/
          break;
        case 'finally.outblock':
          _block = _Tasker({
            args: $13_this.args
          });
          /*@:104*/
          _body += '.finally(' + _block + ')';
          /*@:105*/
          break;
        case 'resolved.exprs':
          _body += '.then(function(p){return $_resolve(' + $13_this.args.exprs[1] + ');})';
          /*@:108*/
          break;
        case 'resolved.none':
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          /*@:111*/
          break;
        case 'rejected.exprs':
          _body += '.catch(function(p){return $_reject(' + $13_this.args.exprs[1] + ');})';
          /*@:114*/
          break;
        case 'rejected.none':
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          /*@:117*/
          break;
        case 'finalized.none':
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          /*@:120*/
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          /*@:121*/
          break;
        case 'all.exprs':
          _body += '.then(function(p){return Promise.all(' + $13_this.args.exprs[1] + ');})';
          /*@:128*/
          break;
        case 'any.exprs':
          _body += '.then(function(p){return Promise.any(' + $13_this.args.exprs[1] + ');})';
          /*@:131*/
          break;
        default:
          return ({
            error: 'SAI compiler: PROMISING construct unhandled type ' + $13_this.type
          });
          /*@:134*/
          break;
      };
    }
    /*@:136*/
    _body += ';' + '\n' + '';
    /*@:139*/
    return ({
      body: _body,
      tools: _tools
    });
    /*@:140*/
  }
};
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $17_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        'promising': {
          subtitle: 'asynchronous flow control for Promises',
          summary: 'The __promising__ construct lends clarity to asynchronous operations using `promise`-based functions.',
          synref: 'promising [promise]' + '\n' + '  resolve/reject [parameters]' + '\n' + ' - or -' + '\n' + 'promising' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + ' - or -' + '\n' + 'promising // with nothing following' + '\n' + '' + '\n' + '... followed by one or more of ...' + '\n' + '' + '\n' + 'then [promise]' + '\n' + ' - or -' + '\n' + 'then (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'catch [promise]' + '\n' + ' - or -' + '\n' + 'catch (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'finally [promise]' + '\n' + ' - or -' + '\n' + 'finally (promise parameters)' + '\n' + '  [code that is turned into a promise]' + '\n' + '  resolve/reject (parameters)' + '\n' + '' + '\n' + 'any [array of promises]' + '\n' + '' + '\n' + 'all [array of promises]' + '\n' + '' + '\n' + 'rejected (expression)' + '\n' + '' + '\n' + 'resolved (expression)' + '\n' + '' + '\n' + 'finalize' + '\n' + '',
          detail: 'In one sense __promising__ is just a bit of syntactical sugar for using `chain`' + '\n' + 'to connect `then` and `catch` etc in a series of chained method calls. And indeed,' + '\n' + 'that\'s what it does behind the scenes. But simplifying syntax is not a bad thing,' + '\n' + 'especially if it eases working with a more hat can be quite confusing.' + '\n' + 'And Promises are certainly that.' + '\n' + '' + '\n' + 'In order to make this construct work, you need to know what each clause' + '\n' + 'requires, not only syntactically, but from a code point of view.' + '\n' + 'We\'ll take each clause one by one.' + '\n' + '' + '\n' + 'Most clauses in __promising__ are either a single line, which accept either' + '\n' + 'a value that will be passed on to the next clause immediately, or an active' + '\n' + 'promise (a _thenable_) that will be resolved before the next clause; or are' + '\n' + 'multi-line, accepting a block of code that it will wrap in a Promise,' + '\n' + 'as if it were the body of a function.' + '\n' + '' + '\n' + 'First things first: the __promising__ clause must be the first clause in' + '\n' + 'the construct, and you can only use it once. (You can start with either form' + '\n' + 'of the __promising__ clause.) You can mix and match the other clauses in' + '\n' + 'any order once you\'ve started the __promising__.' + '\n' + '' + '\n' + 'The final clause in the construct must be either __catch__ or __finally__' + '\n' + 'to ensure that errors are properly caught. However, you can use either of' + '\n' + 'these multiple times in the same construct, in order to control execution flow' + '\n' + 'between error handlers and the normal flow of code.' + '\n' + '' + '\n' + '#### promising' + '\n' + '' + '\n' + '    promising [a value or a promise]' + '\n' + '     - or -' + '\n' + '    promising' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + '__Promising__ starts the clause. It expects an active Promise -- an object' + '\n' + 'with `.then` and `.catch` ready for use. If it isn\'t a promise, it\'s just a' + '\n' + 'value that will be passed forward.' + '\n' + '' + '\n' + 'In this example, `db.listDatabases` is a function, and we invoke it with __from__' + '\n' + 'so it will return an active promise.' + '\n' + '' + '\n' + '    promising from db.listDatabases' + '\n' + '' + '\n' + 'In this form, the function you are promising must have been declared as a __promise__, or' + '\n' + 'been created in or wrapped in a _Promise_ wrapper by a library or helper.' + '\n' + '' + '\n' + 'In multi-line form, you\'re crafting the body of a __promise__ function, and you\'ll' + '\n' + 'use __reject__ and __resolve__ to pass along asynchronous results to the next' + '\n' + 'clause of the construct.' + '\n' + '' + '\n' + '    promising' + '\n' + '      https.get url, task' + '\n' + '        set body \'\'' + '\n' + '        $setEncoding \'utf8\'' + '\n' + '        $on \'data\', task' + '\n' + '          set body + $' + '\n' + '        $on \'end\', task' + '\n' + '          resolve body' + '\n' + '        $on \'error\', task' + '\n' + '          reject $' + '\n' + '' + '\n' + 'Of course you could just take that bunch of code and wrap it in a __promise__' + '\n' + 'yourself, perhaps as part of some global object. But more likely you\'d just find' + '\n' + 'a package on npm that offers promisified fetchers ai Because you\'re smart.' + '\n' + '' + '\n' + '##### promising with no block or parameter' + '\n' + '' + '\n' + 'If you have an array of promises that you\'d like to' + '\n' + 'use with __all__ or __any__ then just start the structure with' + '\n' + '__promising__ with no parameter or block:' + '\n' + '' + '\n' + '    promising' + '\n' + '    all promiseArray' + '\n' + '    catch' + '\n' + '      debug "uh oh"' + '\n' + '' + '\n' + '#### then' + '\n' + '' + '\n' + '    then [value or promise]' + '\n' + '     - or -' + '\n' + '    then (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'The __then__ clause continues the chain of asynchronous execution. Whatever' + '\n' + 'you __resolve__ in the previous clause is given to the next __then__ clause as' + '\n' + 'one (or more) parameters. (You can use the pronoun __$__ to refer to the first' + '\n' + 'parameter passed without giving it a name.)' + '\n' + '' + '\n' + '    then from db.dropDatabase dbName' + '\n' + '' + '\n' + 'Which, by the way, does the exact same thing as this:' + '\n' + '' + '\n' + '    then' + '\n' + '      resolve from db.dropDatabase dbName' + '\n' + '' + '\n' + 'The block takes the same form and acts the same way as the one in __promising__.' + '\n' + '' + '\n' + 'Here\'s a fun note: when coding these _block form_ clauses, there is an automatic' + '\n' + '__resolve__ applied at the end of the code block, so execution carries onwards without' + '\n' + 'you having to be explicit about it. So you can  do this:' + '\n' + '' + '\n' + '    promising' + '\n' + '      debug "First this"' + '\n' + '    then' + '\n' + '      debug "Then this"' + '\n' + '      reject "Ninja!"' + '\n' + '    then' + '\n' + '      debug "But not this."' + '\n' + '    catch' + '\n' + '      debug $' + '\n' + '' + '\n' + 'Which prints:' + '\n' + '' + '\n' + '    First this' + '\n' + '    Then this' + '\n' + '    Ninja!' + '\n' + '' + '\n' + 'Notice how `Ninja!` is transferred by passing the message to the __catch__ clause' + '\n' + 'via __reject__.  And also note the __$__ pronoun. The __catch__ clause could have' + '\n' + 'been written either of these ways too.' + '\n' + '' + '\n' + '    catch given msg' + '\n' + '      debug msg' + '\n' + '' + '\n' + '    catch debug $' + '\n' + '' + '\n' + '#### catch' + '\n' + '' + '\n' + '    catch [value or promise]' + '\n' + '     - or -' + '\n' + '    catch (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'As you\'d expect __catch__ works just like the other line or block form clauses,' + '\n' + 'except that it is only executed if a previous clause __rejects__ something. As' + '\n' + 'illustrated in the above text!' + '\n' + '' + '\n' + 'If there is a __then__ or __finally__ clause after __catch__ in the construct,' + '\n' + 'it will be executed, unless you __reject__ again.' + '\n' + '' + '\n' + '#### finally' + '\n' + '' + '\n' + '    finally [value or promise]' + '\n' + '     - or -' + '\n' + '    finally (optional [GIVEN parameter list])' + '\n' + '      [code block that will be wrapped as a Promise]' + '\n' + '' + '\n' + 'This clause captures both main and error code paths in the Promise pseudo-thread,' + '\n' + 'thus it is always executed regardless of whether the previous clause ended with a __reject__ or __resolve__.' + '\n' + '' + '\n' + 'Support for __finally__ is dependent on whether the Promises library you are using' + '\n' + 'supports it; SAI does not shim it for you. As of this writing, `Promise.finally`' + '\n' + 'has not been ratified for inclusion in ES6, and node.js does not support it.' + '\n' + '' + '\n' + '#### all' + '\n' + '' + '\n' + '    all [expression yielding an array of promises]' + '\n' + '     - or -' + '\n' + '    all' + '\n' + '' + '\n' + 'The __all__ clause, along with __any__ is different than the other clauses. __All__ is' + '\n' + 'a simple way of waiting for an array of promises to _all_ be resolved. It takes a single' + '\n' + 'parameter -- an array -- and waits for each Promise in the array to be resolved.' + '\n' + 'It uses the `Promise.all` helper to do this.' + '\n' + '' + '\n' + 'The stand-alone version of all, that takes no expression, assumes the array has been' + '\n' + 'sent to it from the __resolve__ in the previous clause. The following two lines are identical:' + '\n' + '' + '\n' + '    all       // all (implicit)' + '\n' + '    all $     // all (explicit)' + '\n' + '' + '\n' + 'The __all__ clause is great to use when you need to fetch multiple resources all at' + '\n' + 'once and need to know when they\'re done. The following two line snippet fetches a list of' + '\n' + 'databases (asynchronously) and then passes the resulting list __thru__ a function that' + '\n' + 'creates multiple requests for more information about each database. The result is' + '\n' + 'an array of promises that are used as a parameter to __all__.' + '\n' + '' + '\n' + '    promising db.listDatabases' + '\n' + '    all $ thru db.get(it, \'/\')' + '\n' + '' + '\n' + '__All__ resolves either with a list of the __resolve__ values of every promise in the' + '\n' + 'array, or a _single_ value that is the _first_ rejection of any of those promises.' + '\n' + 'In other words, __all__ will wait to __resolve__ until all of it\'s work done, but the' + '\n' + 'instant something breaks, it __rejects__ everything and gives up.' + '\n' + '' + '\n' + '#### any' + '\n' + '' + '\n' + '    any [expression yielding an array of promises]' + '\n' + '     - or -' + '\n' + '    any' + '\n' + '' + '\n' + 'The __any__ clause is very similar to __all__, except that it either __rejects__ or' + '\n' + '__resolves__ based on the first event in all of the promises in its array. So while __all__' + '\n' + 'will wait to resolve for everything to be finished, __any__ will resolve when the first' + '\n' + 'Promise it is monitoring does so. Like __all__, however, it __rejects__ on the first Promise to do so.' + '\n' + '' + '\n' + '#### rejected (only within a __promise__ function)' + '\n' + '' + '\n' + '    rejected [expression]' + '\n' + '     - or -' + '\n' + '    rejected' + '\n' + '' + '\n' + 'So you might be wondering how do you pass the results of a __promising__ construct to a' + '\n' + 'Promise that contains it. After all, you cannot __resolve__ or __reject__ an outer promise' + '\n' + 'from an inner one -- the rules of scoping forbid it. In this case, the last three clauses help you out.' + '\n' + '' + '\n' + '__Rejecting__ is internally equivalent to a __catch__ clause, in that any error conditions' + '\n' + 'are caught by it. However, it then marks the Promise _containing_  the __promising__ construct as rejected.' + '\n' + '' + '\n' + 'The bare word version of __rejected__ sends the error value it received to the containing' + '\n' + 'Promise, while the version with an expression allows you to customise it.' + '\n' + '' + '\n' + '#### resolved (only within a __promise__ function)' + '\n' + '' + '\n' + '    resolved [expression]' + '\n' + '     - or -' + '\n' + '    resolved' + '\n' + '' + '\n' + 'Similarlly, __resolved__ will resolve a containing Promise with either an expression' + '\n' + 'or a passed-on value.' + '\n' + '' + '\n' + '#### finalized (only within a __promise__ function)' + '\n' + '' + '\n' + '    finalized' + '\n' + '' + '\n' + 'And, most useful, the __finalized__ clause will take the current state of the __promising__' + '\n' + 'clause it is a part of and transfer it to the containing promise, kind of like a `return` statement.' + '\n' + '' + '\n' + 'Finalized doesn\'t take a value because it passes on whatever value the last promise state has. If you' + '\n' + 'need to override your return values you\'ll need to do so with rejected and/or resolved.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
