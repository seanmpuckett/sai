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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-15T22:23:43.287Z"};
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
var __context={"name":"StateC.sai","loader":"SAI.GetSourceFromPaths","path":"src/StateC.sai","mtime":"2018-03-14T19:32:48.076Z","fetched":"2018-03-15T22:23:43.227Z"};
var isa = prototype.isa = 'StateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['StateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "StateConstruct", "Documents", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        'constructs': {
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
var $3g = prototype['StateConstruct'] || function() {};
prototype['StateConstruct'] = function(p) {
  var $_d, $_c, _body, $7, $6, $5, $4, $3, _block, $2, _name, _states, _names, _trailer, _header, _tools, $1, _work = p,
    $ = this['StateConstruct'] ? this : $bindfail('StateConstruct'); {
    _tools = _work.tools;
    _header = 'var \x5e{temp}=function (){' + '\n' + 'var _goto,_then;' + '\n' + 'var $states={' + '\n' + '';
    _header = _tools.replacer(_header, {
      temp: undefined
    });
    _trailer = '}' + '\n' + '  var $getstatefn=function(state) {' + '\n' + '    return $AI.assert($states[state],"SAI runtime: STATE "+state+" does not exist; available states are "+$AI.keys_op($states).join(\',\'));' + '\n' + '  }' + '\n' + '  _goto=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    var fn=undefined;' + '\n' + '    var l=arguments.length, args=new Array(l-1);' + '\n' + '    for (var li=1; li<l; li++) args[li-1]=arguments[li];' + '\n' + '    fn=function(){statefn.apply(undefined,args)};' + '\n' + '    setImmediate(fn);' + '\n' + '  };' + '\n' + '  _then=function(state){' + '\n' + '    var statefn=$getstatefn(state);' + '\n' + '    return function(){statefn.apply(undefined,arguments);};' + '\n' + '  };' + '\n' + '  _goto(' + _work.clauses[0].args.expr + ');' + '\n' + '}();' + '\n' + '';
    _names = {};
    _states = [];
    var $6 = _work.clauses,
      $5 = undefined;
    if (undefined === $6) $6 = {};
    for ($5 in $6) {
      $4 = $6[$5];
      switch ($3 = ($4.type)) {
        case 'state.exproutblock':
          _name = $4.args.expr;
          if ($2 = (_names[_name])) {
            return ({
              error: 'SAI compile: duplicate state ' + _name + ' in STATE construct'
            });
          }
          _names[_name] = (_names[_name] || 0) + 1;
          _block = _tools.tasker({
            'as': $4.args.out,
            block: $4.args.block,
            kind: 'function'
          });
          _states.push('' + _name + ':' + _block);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $4.type + ' in StateConstruct'
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
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $8, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        state: {
          subtitle: 'asynchronous finite state machine',
          summary: 'The __state__ construct creates an asynchronous state machine (or finite automata) that can' + '\n' + 'be used for many different kinds of processes, from making requests or managing other machines,' + '\n' + 'to controlling and responding to near-realtime events.',
          detail: 'Each declared __state__ is given a name (the value), and has an associated block of code.' + '\n' + 'Each block is a function, with optional parameters. These functions are invoked with' + '\n' + 'the __goto__ verb. The first parameter of __goto__ is the name of the state; any additional' + '\n' + 'parameters are passed in to the state function.' + '\n' + '' + '\n' + '    state [value1] (given [parameter list])' + '\n' + '      ... code ...' + '\n' + '      goto [value] (, [parameters for next state])' + '\n' + '      ... code ...' + '\n' + '    state [value2] (given [parameter list])' + '\n' + '      goto etc...' + '\n' + '    ... repeats for as many states as supplied' + '\n' + '' + '\n' + 'The uppermost defined __state__ in the construct is the starting state by convention,' + '\n' + 'and it is invoked first. When you __goto__ a new state, you\'ll just be scheduling the next' + '\n' + 'state to occur next. You must `return` if you want its execution to stop immediately. If you' + '\n' + 'do not __goto__ another state, the machine ends (unless a callback into to a state happens' + '\n' + 'asynchronously). State machine context is preserved until there is no more opportunity for a callback.' + '\n' + '' + '\n' + '*Note*: The __state__ construct runs asynchronously. Synchronous code execution passes the' + '\n' + 'state machine definition instantly, and the first state executes on the next event loop' + '\n' + 'tick via node\'s `setImmediate`. Each time you __goto__ a new state, that state is also' + '\n' + 'scheduled asynchronously.' + '\n' + '' + '\n' + 'While the event loop is quite fast (perhaps 100k state transitions' + '\n' + 'per second on a laptop), you will want to avoid using the __state__ construct for applications' + '\n' + 'that require high performance and/or that do not benefit greatly from asynchronous response.' + '\n' + 'In these cases, a `while` loop around a `switch` statement is a good place to start.' + '\n' + '' + '\n' + 'Context is preserved with the state machine, including the _current_ (this) object. You have' + '\n' + 'access to all member variables/methods of the object instance that invoked the __state__ construct.' + '\n' + 'Variables you `set` within any state are available to all states. However, `local` variables are' + '\n' + 'restricted to the state they\'re defined in. (Examine the generated Javascript code for clarity.)' + '\n' + '' + '\n' + 'Here is a simple example of a state machine, a Turing machine that adds two unary (bitcount)' + '\n' + 'numbers starting at the read head, extending right and separated by a single 0 digit.' + '\n' + '' + '\n' + '    set Readout to task  // display Turing tape and current head position' + '\n' + '      debug tape | into \'\' sum + ((key is head) ?? \'[$\{it}]\' :: \' $\{it} \')' + '\n' + '' + '\n' + '    state \'start\' // turing machine to add two numbers, in this case 3 & 4.' + '\n' + '      set tape list 0, 1, 1, 1, 0, 1, 1, 1, 1, 0' + '\n' + '      set head 1' + '\n' + '      goto \'a\'' + '\n' + '' + '\n' + '    state \'a\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek end of first number' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'a\'' + '\n' + '      else               // set bit between numbers' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'b\'' + '\n' + '' + '\n' + '    state \'b\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek end of second number' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'b\'' + '\n' + '      else' + '\n' + '        set tape\head 0  // rewind to end of second number' + '\n' + '        dec head' + '\n' + '        goto \'c\'' + '\n' + '' + '\n' + '    state \'c\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // clear bit at end of second number' + '\n' + '        set tape\head 0' + '\n' + '        dec head' + '\n' + '        goto \'d\'' + '\n' + '      else' + '\n' + '        debug "Should not be able to get here."' + '\n' + '        goto \'halt\'' + '\n' + '' + '\n' + '    state \'d\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek back to the beginning of the result' + '\n' + '        set tape\head 1' + '\n' + '        dec head' + '\n' + '        goto \'d\'' + '\n' + '      else' + '\n' + '        set tape\head 0  // return to first set bit and halt' + '\n' + '        inc head' + '\n' + '        goto \'halt\'' + '\n' + '' + '\n' + '    state \'halt\'' + '\n' + '      Readout' + '\n' + '      debug "Run complete."' + '\n' + '' + '\n' + '    debug "State machine started." // appears first because STATE is asynchronous' + '\n' + '' + '\n' + 'The output is:' + '\n' + '' + '\n' + '    State machine started.' + '\n' + '     0 [1] 1  1  0  1  1  1  1  0' + '\n' + '     0  1 [1] 1  0  1  1  1  1  0' + '\n' + '     0  1  1 [1] 0  1  1  1  1  0' + '\n' + '     0  1  1  1 [0] 1  1  1  1  0' + '\n' + '     0  1  1  1  1 [1] 1  1  1  0' + '\n' + '     0  1  1  1  1  1 [1] 1  1  0' + '\n' + '     0  1  1  1  1  1  1 [1] 1  0' + '\n' + '     0  1  1  1  1  1  1  1 [1] 0' + '\n' + '     0  1  1  1  1  1  1  1  1 [0]' + '\n' + '     0  1  1  1  1  1  1  1 [1] 0' + '\n' + '     0  1  1  1  1  1  1 [1] 0  0' + '\n' + '     0  1  1  1  1  1 [1] 1  0  0' + '\n' + '     0  1  1  1  1 [1] 1  1  0  0' + '\n' + '     0  1  1  1 [1] 1  1  1  0  0' + '\n' + '     0  1  1 [1] 1  1  1  1  0  0' + '\n' + '     0  1 [1] 1  1  1  1  1  0  0' + '\n' + '     0 [1] 1  1  1  1  1  1  0  0' + '\n' + '    [0] 1  1  1  1  1  1  1  0  0' + '\n' + '     0 [1] 1  1  1  1  1  1  0  0' + '\n' + '    Run complete.' + '\n' + '' + '\n' + 'There are many easier ways of programming a Turing machine without hardcoding everything' + '\n' + 'like this. This one does show off the __state__ construct fairly nicely, however.' + '\n' + '' + '\n' + '#### goto' + '\n' + '' + '\n' + 'Within the __state__ construct, the variable `goto` is defined as a function that schedules' + '\n' + 'execution of the next state.  (This trickery should be essentially invisible, but just in case you' + '\n' + 'need to know how, this is how.)' + '\n' + '' + '\n' + '#### then' + '\n' + '' + '\n' + 'Similarly, __then__ is a function that immediately jumps to the next state rather than rescheduling' + '\n' + 'another callback.  (Don\'t use __then__ except in callbacks, you\'ll trash the stack.)' + '\n' + '' + '\n' + 'Use __then__ like this:' + '\n' + '' + '\n' + '    state \'empty\'' + '\n' + '      ply array position-1, position+1 as adjacent' + '\n' + '        each features as dsc, feat' + '\n' + '          if feat is maze[from Valid adjacent]' + '\n' + '            debug dsc' + '\n' + '' + '\n' + '      Timer 800, !then \'step\'' + '\n' + '' + '\n' + 'This example does some housekeeping, delays for 800ms, _then_ the timer callback jumps to the next state.' + '\n' + '' + '\n' + '' + '\n' + ''
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
