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

var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/Construct.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-04T23:09:42.435Z","fetched":"2018-04-11T21:09:45.030Z"};
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


var __context={"loader":"SAI.GetSourceFromFilename","path":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src/StateC.sai","workdir":"/Users/seanmpuckett/Documents/ProjSync/Node/sai/src","mtime":"2018-04-11T16:59:55.843Z","fetched":"2018-04-11T21:09:44.945Z"};
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
var isa = prototype.isa = 'StateC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['StateC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context,
  type: "singleton"
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
                exproutblock: true,
                rvalue: true
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
    var $0_this, $ = this,
      $_c, $_d; {
      return ($.Documents());
    }
  },
  set: undefined
});
var $3g = prototype['StateConstruct'] || function() {};
prototype['StateConstruct'] = function(p) {
  var $1_this, $2_trial, $3, $4_this, $5_key, $6_list, $7_none, $ = this['StateConstruct'] ? this : $bindfail('StateConstruct'),
    $_c, $_d, _block, _body, _header, _name, _names, _states, _tools, _trailer;
  $AI.expectsThrow(p, {
    "clauses": true,
    "tools": true
  }, '\'StateConstruct\''); {
    _tools = ['var $state$getfn=function(states,state) {' + '\n' + '  return $AI.assert(states[state],"SAI runtime: STATE "+state+" does not exist; available states are "+$AI.keys_op(states).join(\',\'));' + '\n' + '}' + '\n' + 'var $state$goto=function(states,state){' + '\n' + '  var $=this;' + '\n' + '  var fn=$state$getfn(states,state);' + '\n' + '  var l=arguments.length, args=new Array(l-2);' + '\n' + '  for (var li=2; li<l; li++) args[li-2]=arguments[li];' + '\n' + '  setImmediate(function(){fn.apply($,args)});' + '\n' + '};' + '\n' + 'var $state$then=function(states,state){' + '\n' + '  var $=this;' + '\n' + '  var fn=$state$getfn(states,state);' + '\n' + '  var l=arguments.length, args=new Array(l-2);' + '\n' + '  for (var li=2; li<l; li++) args[li-2]=arguments[li];' + '\n' + '  return function(){' + '\n' + '    var l=arguments.length;' + '\n' + '    if (l) {' + '\n' + '      var o=args.length;' + '\n' + '      args.length=l+o;' + '\n' + '      for (var li=0; li<l; li++) args[o+li]=arguments[li];' + '\n' + '    }' + '\n' + '    fn.apply($,args);' + '\n' + '  };' + '\n' + '};' + '\n' + ''];
    _header = 'var ' + p.tools.addlocal() + '=function(){' + '\n' + '  var _goto,_then;' + '\n' + '  var $states={' + '\n' + '';
    _trailer = '}' + '\n' + '  _goto=$state$goto.bind($,$states);' + '\n' + '  _then=$state$then.bind($,$states);' + '\n' + '  _goto(' + p.clauses[0].args.expr + ');' + '\n' + '}();' + '\n' + '';
    _names = {};
    _states = [];
    var $6_list = p.clauses,
      $5_key = undefined;
    if (undefined === $6_list) $6_list = {};
    for ($5_key in $6_list) {
      $4_this = $6_list[$5_key];
      switch ($3 = ($4_this.type)) {
        case 'state.exproutblock':
          _name = $4_this.args.expr;
          if ($2_trial = (_names[_name])) {
            return ({
              error: 'SAI compile: duplicate state ' + _name + ' in STATE construct'
            });
          }
          _names[_name] = (_names[_name] || 0) + 1;
          _block = p.tools.tasker({
            'as': $4_this.args.out,
            block: $4_this.args.block,
            kind: 'function'
          });
          _states.push('' + _name + ':' + _block);
          break;
        default:
          return ({
            error: 'Unhandled construct type ' + $4_this.type + ' in StateConstruct'
          });
          break;
      };
    }
    p.tools.addlocal('_goto');
    p.tools.addlocal('_then');
    _body = '' + _header + _states.join(',') + _trailer;
    return ({
      body: _body,
      tools: _tools
    });
  }
};
var $4g = prototype['Documents'] || function() {};
prototype['Documents'] = function(p) {
  var $8_this, $ = this['Documents'] ? this : $bindfail('Documents'); {
    return ({
      'constructs': {
        state: {
          subtitle: 'asynchronous finite state machine',
          summary: 'The __state__ construct creates an asynchronous state machine (or finite automata) that can' + '\n' + 'be used for many different kinds of processes, from making requests or managing other machines,' + '\n' + 'to controlling and responding to near-realtime events.',
          detail: 'Each declared __state__ is given a name (the value), and has an associated block of code.' + '\n' + 'Each block is a function, with optional parameters. These functions are invoked with' + '\n' + 'the __goto__ verb. The first parameter of __goto__ is the name of the state; any additional' + '\n' + 'parameters are passed in to the state function.' + '\n' + '' + '\n' + '    state [value1] (given [parameter list])' + '\n' + '      ... code ...' + '\n' + '      goto [value] (, [parameters for next state])' + '\n' + '      ... code ...' + '\n' + '    state [value2] (given [parameter list])' + '\n' + '      goto etc...' + '\n' + '    ... repeats for as many states as supplied' + '\n' + '' + '\n' + 'The uppermost defined __state__ in the construct is the starting state by convention,' + '\n' + 'and it is invoked first. When you __goto__ a new state, you\'ll just be scheduling the next' + '\n' + 'state to occur next. You must `return` if you want its execution to stop immediately. If you' + '\n' + 'do not __goto__ another state, the machine ends (unless a callback into to a state happens' + '\n' + 'asynchronously). State machine context is preserved until there is no more opportunity for a callback.' + '\n' + '' + '\n' + '*Note*: The __state__ construct runs asynchronously. Synchronous code execution passes the' + '\n' + 'state machine definition instantly, and the first state executes on the next event loop' + '\n' + 'tick via node\'s `setImmediate`. Each time you __goto__ a new state, that state is also' + '\n' + 'scheduled asynchronously.' + '\n' + '' + '\n' + 'While the event loop is quite fast (perhaps 100k state transitions' + '\n' + 'per second on a laptop), you will want to avoid using the __state__ construct for applications' + '\n' + 'that require high performance and/or that do not benefit greatly from asynchronous response.' + '\n' + 'In these cases, a `while` loop around a `switch` statement is a good place to start.' + '\n' + '' + '\n' + 'Context is preserved with the state machine, including the _current_ (this) object. You have' + '\n' + 'access to all member variables/methods of the object instance that invoked the __state__ construct.' + '\n' + 'Variables you `set` within any state are available to all states. However, `local` variables are' + '\n' + 'restricted to the state they\'re defined in. (Examine the generated Javascript code for clarity.)' + '\n' + '' + '\n' + 'Here is a simple example of a state machine, a Turing machine that adds two unary (bitcount)' + '\n' + 'numbers starting at the read head, extending right and separated by a single 0 digit.' + '\n' + '' + '\n' + '    set Readout to task  // display Turing tape and current head position' + '\n' + '      debug tape | into \'\' sum + ((key is head) ?? \'[$\{it}]\' :: \' $\{it} \')' + '\n' + '' + '\n' + '    state \'start\' // turing machine to add two numbers, in this case 3 & 4.' + '\n' + '      set tape list 0, 1, 1, 1, 0, 1, 1, 1, 1, 0' + '\n' + '      set head 1' + '\n' + '      goto \'a\'' + '\n' + '' + '\n' + '    state \'a\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek end of first number' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'a\'' + '\n' + '      else               // set bit between numbers' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'b\'' + '\n' + '' + '\n' + '    state \'b\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek end of second number' + '\n' + '        set tape\head 1' + '\n' + '        inc head' + '\n' + '        goto \'b\'' + '\n' + '      else' + '\n' + '        set tape\head 0  // rewind to end of second number' + '\n' + '        dec head' + '\n' + '        goto \'c\'' + '\n' + '' + '\n' + '    state \'c\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // clear bit at end of second number' + '\n' + '        set tape\head 0' + '\n' + '        dec head' + '\n' + '        goto \'d\'' + '\n' + '      else' + '\n' + '        debug "Should not be able to get here."' + '\n' + '        goto \'halt\'' + '\n' + '' + '\n' + '    state \'d\'' + '\n' + '      Readout' + '\n' + '      if tape\head       // seek back to the beginning of the result' + '\n' + '        set tape\head 1' + '\n' + '        dec head' + '\n' + '        goto \'d\'' + '\n' + '      else' + '\n' + '        set tape\head 0  // return to first set bit and halt' + '\n' + '        inc head' + '\n' + '        goto \'halt\'' + '\n' + '' + '\n' + '    state \'halt\'' + '\n' + '      Readout' + '\n' + '      debug "Run complete."' + '\n' + '' + '\n' + '    debug "State machine started." // appears first because STATE is asynchronous' + '\n' + '' + '\n' + 'The output is:' + '\n' + '' + '\n' + '    State machine started.' + '\n' + '     0 [1] 1  1  0  1  1  1  1  0' + '\n' + '     0  1 [1] 1  0  1  1  1  1  0' + '\n' + '     0  1  1 [1] 0  1  1  1  1  0' + '\n' + '     0  1  1  1 [0] 1  1  1  1  0' + '\n' + '     0  1  1  1  1 [1] 1  1  1  0' + '\n' + '     0  1  1  1  1  1 [1] 1  1  0' + '\n' + '     0  1  1  1  1  1  1 [1] 1  0' + '\n' + '     0  1  1  1  1  1  1  1 [1] 0' + '\n' + '     0  1  1  1  1  1  1  1  1 [0]' + '\n' + '     0  1  1  1  1  1  1  1 [1] 0' + '\n' + '     0  1  1  1  1  1  1 [1] 0  0' + '\n' + '     0  1  1  1  1  1 [1] 1  0  0' + '\n' + '     0  1  1  1  1 [1] 1  1  0  0' + '\n' + '     0  1  1  1 [1] 1  1  1  0  0' + '\n' + '     0  1  1 [1] 1  1  1  1  0  0' + '\n' + '     0  1 [1] 1  1  1  1  1  0  0' + '\n' + '     0 [1] 1  1  1  1  1  1  0  0' + '\n' + '    [0] 1  1  1  1  1  1  1  0  0' + '\n' + '     0 [1] 1  1  1  1  1  1  0  0' + '\n' + '    Run complete.' + '\n' + '' + '\n' + 'There are many easier ways of programming a Turing machine without hardcoding everything' + '\n' + 'like this. This one does show off the __state__ construct fairly nicely, however.' + '\n' + '' + '\n' + '#### goto' + '\n' + '' + '\n' + 'Within the __state__ construct, the variable `goto` is defined as a function that schedules' + '\n' + 'execution of the next state.  (This trickery should be essentially invisible, but just in case you' + '\n' + 'need to know how, this is how.)' + '\n' + '' + '\n' + '##### Parameters with __goto__' + '\n' + '' + '\n' + '__goto__ will pass any provide parameters on to the state function:' + '\n' + '' + '\n' + '    state \'start\'' + '\n' + '      debug "You\'re lost in a cave!"' + '\n' + '      dountil maze\\pos is \'empty\'' + '\n' + '        set pos !Rand size' + '\n' + '      goto \'move\', pos            // we\'re passing the new position here as POS' + '\n' + '' + '\n' + '    state \'move\' given newpos        // and it is recevied here as NEWPOS' + '\n' + '      inc moves' + '\n' + '      set position !Valid newpos' + '\n' + '      debug " move \${moves} ... now in room \${position}"' + '\n' + '      goto maze\\position' + '\n' + '' + '\n' + '#### then' + '\n' + '' + '\n' + 'Similarly, __then__ is a function that _creates a function_ that immediately jumps to the next' + '\n' + 'state rather than rescheduling another state transition. In other words, __then__ is a callback' + '\n' + 'creator.' + '\n' + '' + '\n' + 'Use __then__ like this:' + '\n' + '' + '\n' + '    state \'empty\'' + '\n' + '      ply array position-1, position+1 as adjacent' + '\n' + '        each features as dsc, feat' + '\n' + '          if feat is maze[from Valid adjacent]' + '\n' + '            debug dsc' + '\n' + '' + '\n' + '      Timer 800, !then \'step\'' + '\n' + '' + '\n' + '    state \'step\'' + '\n' + '      goto \'move\', position + !Step' + '\n' + '' + '\n' + 'This example does some housekeeping, delays for 800ms, _then_ the timer callback jumps to the' + '\n' + 'next state.' + '\n' + '' + '\n' + '##### Parameters with __then__' + '\n' + '' + '\n' + 'Because __then__ creates a callback function, there are _two_ opportunities for arguments to be' + '\n' + 'passed to the next state.' + '\n' + '' + '\n' + '1. When __then__ is executed to create the callback.' + '\n' + '2. When the callback is executed some later time.' + '\n' + '' + '\n' + 'In the above example,' + '\n' + '' + '\n' + '    Timer 800, !then \'step\'' + '\n' + '' + '\n' + 'This is the first opportunity for parameters to be passed.' + '\n' + '' + '\n' + 'To make it clear, let\'s add one:' + '\n' + '' + '\n' + '    ...' + '\n' + '      Timer 800, !then \'step\', !Step' + '\n' + '' + '\n' + '    state \'step\' given stepValue' + '\n' + '      goto \'move\', position + stepValue' + '\n' + '' + '\n' + 'Parameters added at callback creation time are resolved immediately, even though they\'re not' + '\n' + 'used until later. These parameters are invisibly bound into the callback function that is' + '\n' + 'created. In the above example, `stepValue` is calculated 800ms before the state change to `step`' + '\n' + 'occurs; this step value waiting in the callback defined when the `Timer` function is invoked.' + '\n' + '' + '\n' + 'The second opportunity is when the callback is actually made. In our example, let\'s say the timer' + '\n' + 'wishes to pass the real time it was resolved. And we want that data. But we also want our' + '\n' + '`stepValue`, which was passed in earlier.' + '\n' + '' + '\n' + 'Fortunately, we can have both pieces of data. The callback function that __then__ creates will' + '\n' + 'append any arguments it receives _as a callback_ to the arguments bound to it _on callback' + '\n' + 'creation_. So we now have two parameters to our `step` state.' + '\n' + '' + '\n' + '    state \'step\' given stepValue, resolvedTime' + '\n' + '      debug "Timer resolved at \${resolvedTime}"' + '\n' + '      goto \'move\', position + stepValue' + '\n' + '' + '\n' + 'Just to make it clear: `stepValue` was calculated and passed into the callback generator when we' + '\n' + 'started the timer, and `resolvedTime` was calculated and passed into the callback when' + '\n' + 'the timer resolved. The callback concatentated them into one set of arguments for the call to' + '\n' + 'the `step` state.' + '\n' + '' + '\n' + 'If you unroll this, it looks something like this:' + '\n' + '' + '\n' + '    then \'step\', stepValue' + '\n' + '     .. becomes ..' + '\n' + '    callback invoking \'step\' with stepValue' + '\n' + '     .. which _later_ is invoked as ..' + '\n' + '    callback resolvedTime' + '\n' + '     .. which becomes ..' + '\n' + '    invoke \'step\' with stepValue, resolvedTime' + '\n' + '' + '\n' + 'This works with any number of arguments provided at callback creation and resolution. Just be' + '\n' + 'sure you know how many of each there are when you pick them up in the _state handler_.' + '\n' + '' + '\n' + 'I hope that\'s clear. And useful!' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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



