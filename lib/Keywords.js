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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-11T11:59:09.967Z","fetched":"2018-03-17T13:34:34.044Z"};
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
var $7g = prototype['OutVarHelper'] || function() {};
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
var $8g = prototype['ExprsHelper'] || function() {};
prototype['ExprsHelper'] = function(p) {
  var $_b, $6, _exprs = p,
    $ = this['ExprsHelper'] ? this : $bindfail('ExprsHelper'); {
    return (((undefined !== ($_b = (undefined === ($_b = (_exprs)) ? undefined : ($_b[2])))) ? $_b : []));
  }
};
var __context={"name":"Keywords.sai","loader":"SAI.GetSourceFromPaths","path":"src/Keywords.sai","mtime":"2018-03-15T23:33:05.069Z","fetched":"2018-03-17T13:34:33.142Z"};
var isa = prototype.isa = 'Keywords';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['Keywords'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "docs", "introspect", "Documentation", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
var t = {
  boringlist: ['{', '}', ']', '%%DEDENT%%', '%%INDENT%%', ',', ')', '0x', '0o', '::', '\\\\\'', '{;', '};', '\\\\/', '\\\\;', '\\', '\\\\', '__column', '__line', '__offset', '__source', '\x5e'],
  goodlist: ['assert', 'debug', 'isa']
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
    var $_d, $_c, $18, $17, $16, $15, $14, $13, $12, $11, _sure, _extra, $10, $9, $8, $7, $6, _category, _covered, _missing, $5, $4, $3, _simple, $2, _matches, _matcher, _parsefun, _boringkeywords, $1, $ = this; {
      _boringkeywords = $AI.reduce_op($.boringlist, function(s, a) {
        s[a] = true;
        return s;
      }, {});
      _parsefun = $.SAI.mainParser.parse.toString();
      _matcher = /peg\$literalExpectation.\"([^"]+)\"./g;
      _matches = [];
      var $2;
      while ($2 = (_matcher.exec(_parsefun))) {
        _matches.push($2[1]);
      }
      _simple = /^[0-9a-zA-Z]$|\&\#/;
      $5 = _matches;
      _matches = $AI.reduce_op($AI.filter_op($5, function($3, $4) {
        return (!((_simple.exec($3) || _boringkeywords[$3])));
      }), function(s, v, k) {
        s[v] = {};
        return s;
      }, {});
      _missing = $AI.clone_op(_matches);
      _covered = {};
      var $9 = $.Documentation(),
        $8 = undefined;
      if (undefined === $9) $9 = {};
      for ($8 in $9) {
        _category = $9[$8];
        $6 = _missing;
        _missing = $AI.delete_op($6, _category, true);
        $7 = _covered;
        _covered = $AI.overlay_op($7, _category);;
      }
      _extra = $AI.delete_op($AI.delete_op(_covered, $.goodlist, true), _matches, true);
      var $13 = _missing,
        $12 = undefined;
      if (undefined === $13) $13 = {};
      for ($12 in $13) {
        $11 = $13[$12];
        $AI.debug_op('missing coverage for parser literal ' + $12);
        _sure = '\'' + $12 + '\':' + '\n' + '  subtitle \'\'' + '\n' + '  summary \'\'\'' + '\n' + '  synref \'\'\'' + '\n' + '  detail \'\'\'' + '\n' + '';;
      }
      var $17 = _extra,
        $16 = undefined;
      if (undefined === $17) $17 = {};
      for ($16 in $17) {
        $15 = $17[$16];
        $AI.debug_op('excess documentation for ' + $16);;
      }
      return ($.Documentation());
    }
  },
  set: undefined
});
var $6g = prototype['Documentation'] || function() {};
prototype['Documentation'] = function(p) {
  var $19, $ = this['Documentation'] ? this : $bindfail('Documentation'); {
    return ({
      'globals': {
        'assert': {
          subtitle: 'run-time error checking',
          summary: 'If the first expression is _falsy_, throw an exception with the second expression as a message.' + '\n' + 'Otherwise, return the expression.',
          synref: 'assert [expr], [expr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    assert everythingIsAwesome, \'I have some bad news...\'' + '\n' + '' + '\n' + '    > Error: SAI: failed assertion: I have some bad news...' + '\n' + '' + '\n' + 'You can use __assert__ in expression, because it returns the value passed.' + '\n' + '' + '\n' + '    set sock from assert GetSocket, "Could not obtain socket resource"' + '\n' + '' + '\n' + '__Assert__, like __debug__, is functionality that can be redefined by passing a new handler' + '\n' + 'to SAI\'s configuration facility.' + '\n' + '' + '\n' + ''
        },
        'debug': {
          subtitle: 'print diagnostics to the console',
          summary: 'Prints the value of the expression to the console.',
          synref: 'debug [expr]',
          detail: 'Compiles to a call to $AI.debug_op in `sai-library`, which you can hook to provide your own' + '\n' + 'implementation.' + '\n' + '' + '\n' + 'In the default implementation, just calls `console.log` with the provided value.' + '\n' + '' + '\n' + '    debug "this is a test"' + '\n' + '' + '\n' + '    > this is a test' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      },
      'pronouns': {
        'counter': {
          subtitle: 'pronount for integer-based loops',
          summary: 'A partner to **count**, **counter** is a _pronoun_, populated by the **count** iterator,' + '\n' + 'if no other variable is specified in an **as** clause.',
          synref: '.. counter',
          detail: 'Like all pronouns, **counter** is only visible in attached expressions or code blocks, not in' + '\n' + 'any functions that may be called within those expressions.' + '\n' + '' + '\n' + 'An example:' + '\n' + '' + '\n' + '    count friends.length' + '\n' + '      debug counter' + '\n' + '' + '\n' + 'Similar to **it** in nested contexts, you are unable to access “outer” values of **counter** within' + '\n' + 'inner contexts unless you assign them to a name other than **counter** using the **as** clause.' + '\n' + '' + '\n' + '    count 3' + '\n' + '      count 3' + '\n' + '        debug counter' + '\n' + '        // only the inner loop\'s \'counter\' is visible here.' + '\n' + '' + '\n' + '    // prints 0 1 2 0 1 2 0 1 2' + '\n' + '' + '\n' + '    count 3 as i' + '\n' + '      count 3' + '\n' + '        debug i+\',\'+counter' + '\n' + '        // outer loop\'s \'counter\' now available here as \'i\'' + '\n' + '' + '\n' + '    // prints 0,0  0,1  0,2  1,0  1,1  1,2  2,0  2,1  2,2' + '\n' + '' + '\n' + '    count 3' + '\n' + '      count 3 as j' + '\n' + '        debug counter+\',\'+j' + '\n' + '        // no, this doesn\'t work, you still can\'t access the outer \'counter\'' + '\n' + '        // \'counter\' always has the value of the innermost context' + '\n' + '' + '\n' + '    // prints 0,0  1,1  2,2  0,0  1,1  2,2  0,0  1,1  2,2' + '\n' + '' + '\n' + ''
        },
        'error': {
          subtitle: 'catch pronoun',
          summary: 'summary',
          synref: '.. error',
          detail: 'Valid only within the **catch** exception handler clause of a **try/catch/finally** construct. Receives the exception thrown.' + '\n' + '' + '\n' + '    try' + '\n' + '      noFunction' + '\n' + '    catch' + '\n' + '      debug error' + '\n' + '' + '\n' + '    > [TypeError: undefined is not a function]' + '\n' + '' + '\n' + 'You can override this behaviour by using an **as** clause with the **catch** statement:' + '\n' + '' + '\n' + '    try' + '\n' + '      noFunction' + '\n' + '    catch as e' + '\n' + '      debug e' + '\n' + '' + '\n' + '    > [TypeError: undefined is not a function]' + '\n' + '' + '\n' + ''
        },
        'it': {
          subtitle: 'context-sensitive pronoun',
          summary: '**It** is the most commonly used pronoun, populated by most iterators and comprehensions, as well as' + '\n' + 'the **exists** conditional and **with** contextualizer.',
          synref: '.. it',
          detail: '_Pronouns_ have values when provided by the system during certain code events.' + '\n' + '' + '\n' + 'The **it** variable is only available in attached expressions or code blocks -- not in any functions that' + '\n' + 'may be called within those expressions, and not in code outside those blocks.' + '\n' + '' + '\n' + 'A partial list of **it** enabled events:' + '\n' + '' + '\n' + '    exists [expr] // it: expr' + '\n' + '    with [expr]   // it: expr' + '\n' + '' + '\n' + '    iterate [iterable] // it: each iterated value' + '\n' + '    each [collection]  // it: each value in the collection' + '\n' + '    ply [list]         // it: each element in the array' + '\n' + '' + '\n' + '    .. [collection] | thru // it: each value in the collection' + '\n' + '    .. [collection] | audit' + '\n' + '    .. [collection] | into' + '\n' + '    .. [collection] | has' + '\n' + '    .. [collection] | highest' + '\n' + '    .. [collection] | lowest' + '\n' + '' + '\n' + 'When nesting contexts that create a **it** context, you will be unable to access “outer”' + '\n' + 'values of **it** within the inner contexts unless you assign them to a name other' + '\n' + 'than **it** using the **as** clause.' + '\n' + '' + '\n' + '    ply: 1,2,3' + '\n' + '      ply: 4,5,6' + '\n' + '        debug it' + '\n' + '' + '\n' + '    // prints 4 5 6 4 5 6 4 5 6' + '\n' + '' + '\n' + '    ply: 1,2,3' + '\n' + '      ply: 4,5,6 as inner' + '\n' + '        debug it' + '\n' + '' + '\n' + '    // still prints 4 5 6 4 5 6 4 5 6' + '\n' + '' + '\n' + '    ply: 1,2,3 as outer' + '\n' + '      ply: 4,5,6' + '\n' + '        debug outer' + '\n' + '' + '\n' + '    // prints 1 1 1 2 2 2 3 3 3' + '\n' + '' + '\n' + 'When **it** is populated, you can also use the “unrooted” **attribute** ( . dot) scoping' + '\n' + 'prefix.  The following are all synonymous:' + '\n' + '' + '\n' + '    set field to \'province\'' + '\n' + '    set quebeckers to friends has it.province=\'QC\'' + '\n' + '    set quebeckers to friends has it[field]=\'QC\'' + '\n' + '    set quebeckers to friends has .province=\'QC\'' + '\n' + '' + '\n' + '(There is no unrooted [] lookup available, you can\'t `[field]`.)' + '\n' + '' + '\n' + ''
        },
        'key': {
          subtitle: 'looping pronoun',
          summary: 'Often a partner to **it**, **key** is the second most commonly used _pronoun_, populated by most' + '\n' + 'iterators and comprehensions.',
          synref: '.. key',
          detail: 'Like all pronouns, **keys** is only visible in attached expressions or code blocks, not in any functions that may be called within those expressions.' + '\n' + '' + '\n' + 'A partial list of **keys** enabled events:' + '\n' + '' + '\n' + '    each [collection]   // key: the trait name of each value in the collection' + '\n' + '    ply [list]          // key: the array index of each element in the array' + '\n' + '    count [expr]        // key: the number being counted' + '\n' + '    iterate [generator] // key: the row number of the value being processed' + '\n' + '' + '\n' + '    .. [collection] thru  // key: each trait name/array index of the collection' + '\n' + '    .. [collection] audit' + '\n' + '    .. [collection] into' + '\n' + '    .. [collection] has' + '\n' + '' + '\n' + 'An example:' + '\n' + '' + '\n' + '    ply friends' + '\n' + '      debug key' + '\n' + '' + '\n' + '    // prints: 0 1 2 3 4 5 6 7' + '\n' + '' + '\n' + '    each friends[0]' + '\n' + '      debug key' + '\n' + '' + '\n' + '    // prints: name age cat province' + '\n' + '' + '\n' + 'Similar to **it** and **counter** in nested contexts, you are unable to access “outer”' + '\n' + 'values of **key** within inner contexts unless you assign them to a specific variable' + '\n' + 'using the **as** clause. See **counter** for an example of this issue.' + '\n' + '' + '\n' + ''
        },
        'self': {
          subtitle: 'pronoun for set statements',
          summary: 'A pronoun used only in a **set** statement that contains the original value of the variable' + '\n' + 'that is being set/modified.',
          synref: 'set [var] .. self ..',
          detail: 'The following lines are equivalent; one of them is easier to read than the other.' + '\n' + '' + '\n' + '    set totals\key to totals\key ? 0 + amount' + '\n' + '    set totals\key to self ? 0 + amount' + '\n' + '' + '\n' + ''
        },
        'sum': {
          subtitle: 'reduction pronoun',
          summary: 'A pronoun active only within a **into** clause or code block.',
          synref: '.. sum',
          detail: 'Represents the static value that accumulates changes during **into** iteration over a data set.' + '\n' + '' + '\n' + '    debug friends | into 0' + '\n' + '      set sum + .age' + '\n' + '' + '\n' + '    > 185' + '\n' + '' + '\n' + '**Sum** is initialized with the value following **into**.' + '\n' + '' + '\n' + '    debug friends | into blank' + '\n' + '      set sum[.province] to (self default 0)+1' + '\n' + '' + '\n' + '    > { ON: 5, QC: 3 }' + '\n' + '' + '\n' + ''
        },
        'trial': {
          subtitle: 'pronoun for conditionals and switch',
          summary: 'A pronoun set to the value tested in an **if/exists** or **switch** statement.',
          synref: 'if [expr]' + '\n' + '  .. trial ..' + '\n' + '' + '\n' + 'switch [expr]' + '\n' + '  case [match]' + '\n' + '    .. trial ..' + '\n' + '  default' + '\n' + '    .. trial ..',
          detail: 'In an **if/exists** statement, **trial** is only valid in the body of the first code block.' + '\n' + '' + '\n' + '    exists readline()' + '\n' + '      // trial is available here' + '\n' + '    else' + '\n' + '      // trial is undefined here' + '\n' + '' + '\n' + 'In a **switch** statement, **trial** is available through all **case**s and the **default**.' + '\n' + '' + '\n' + '    switch Keypress.toUpperCase()' + '\n' + '      case \'N\'' + '\n' + '        Move 0,-1' + '\n' + '      case \'S\'' + '\n' + '        Move 0,1' + '\n' + '      default' + '\n' + '        debug \'I don\'t know what \${trial} means.\'' + '\n' + '    ...' + '\n' + '' + '\n' + 'You can grant a specific name to the tested value with the **as** clause:' + '\n' + '' + '\n' + '    if Keypress as key' + '\n' + '      switch key.toUpperCase()' + '\n' + '    ...' + '\n' + '' + '\n' + 'Note that **trial** receives the tested value; the final result of the **if** or **switch** expression, not the value of any component:' + '\n' + '' + '\n' + '    if Keypress>0' + '\n' + '      debug trial' + '\n' + '' + '\n' + '    // the debug statement can only ever print \'true\'' + '\n' + '' + '\n' + 'Using the parenthetical **as** is one solution to this problem:' + '\n' + '' + '\n' + '    if ( Keypress as key) > 0' + '\n' + '      debug key' + '\n' + '' + '\n' + '    // reports the actual value of key' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      },
      'operators': {
        '!=': {
          subtitle: 'inequality comparison',
          synref: '.. [expr] != [expr]',
          summary: 'Tests two values for value inequality.',
          detail: 'Compares two values for value equality; returns **true** if the values appear to be the' + '\n' + 'same, **false** otherwise.' + '\n' + '' + '\n' + 'This is implemented with Javascript’s != operator and the behaviour is identical.' + '\n' + '' + '\n' + 'Contrast with **isnt**.' + '\n' + '' + '\n' + ''
        },
        '%': {
          subtitle: 'modulus',
          summary: 'Calculates the mathematical **modulus**; returns the remainder of the left expression divided by the right.',
          synref: '.. [expr] % [expr]',
          detail: 'Examples:' + '\n' + '' + '\n' + '    debug 5 % 2' + '\n' + '    debug 6.2 % 1' + '\n' + '' + '\n' + '    > 1' + '\n' + '    > 0.2' + '\n' + '' + '\n' + ''
        },
        '*': {
          subtitle: 'multiplication',
          summary: 'Multiplies two expressions.',
          synref: '.. [expr] * [expr]',
          detail: 'As in:' + '\n' + '' + '\n' + '    debug 2 * 3' + '\n' + '' + '\n' + '    > 6' + '\n' + '' + '\n' + ''
        },
        '**': {
          subtitle: 'exponentiation',
          summary: 'Raises one value to the power of another.',
          synref: '.. [lexpr] ** [rexpr]',
          detail: 'Calculates an exponent; equivalent to `Math.pow([lexpr],[rexpr])`.' + '\n' + '' + '\n' + '    debug 2 ** 3' + '\n' + '' + '\n' + '    > 8' + '\n' + '' + '\n' + ''
        },
        '+': {
          title: '+',
          subtitle: 'addition / string concatenation',
          summary: 'summary',
          synref: '.. [expr] + [expr]' + '\n' + '',
          detail: 'Adds two numbers OR concatenates two strings.  If both expressions are numbers, adds them.' + '\n' + 'Otherwise converts them both to strings and concatenates.' + '\n' + '' + '\n' + '    debug 1+2' + '\n' + '    debug \'1\'+2' + '\n' + '    debug 1+\'2\'' + '\n' + '    debug \'1\'+\'2\'' + '\n' + '' + '\n' + '    > 3' + '\n' + '    > 12' + '\n' + '    > 12' + '\n' + '    > 12' + '\n' + '' + '\n' + ''
        },
        '-': {
          title: '-',
          subtitle: 'subtraction/negation',
          summary: 'summary',
          synref: '.. [lexpr] - [rexpr]' + '\n' + '.. - [expr]',
          detail: 'Used as a binary operator, subtracts the right expression from the left.' + '\n' + '' + '\n' + '    debug 3 - 5' + '\n' + '    > -2' + '\n' + '' + '\n' + 'Used as a unary operator, negates the expression (subtracts it from 0).' + '\n' + '' + '\n' + '    set b to 5' + '\n' + '    debug 3 + -b' + '\n' + '    > -2' + '\n' + '' + '\n' + 'SAI will not let you write the following;' + '\n' + '' + '\n' + '    set a - 3' + '\n' + '' + '\n' + 'Because that could be parsed one of two ways:' + '\n' + '' + '\n' + ' - place the value `-3` in the variable `a`' + '\n' + ' - subtract `3` from the variable `a`' + '\n' + '' + '\n' + 'If you try to write code like this, a compiler error will result.  Choose one of these' + '\n' + 'formats instead:' + '\n' + '' + '\n' + '    set a to -3    // store -3 in a' + '\n' + '    set a self - 3  // subtract 3 from a' + '\n' + '' + '\n' + 'Just a little gotcha.' + '\n' + '' + '\n' + ''
        },
        '/': {
          title: '/',
          subtitle: 'mathematical division',
          summary: 'Divides the expression on the left by the expression on the right.',
          synref: '.. [expr1] / [expr2]',
          detail: 'As in:' + '\n' + '' + '\n' + '    debug 22 / 7' + '\n' + '    debug 355 / 113' + '\n' + '' + '\n' + '    > 3.142857142857143' + '\n' + '    > 3.1415929203539825' + '\n' + '' + '\n' + ''
        },
        '<': {
          subtitle: 'less comparison',
          summary: 'Evaluates **true** if lexpr is numerically or lexically lower than rexpr, **false** otherwise.',
          synref: '.. [lexpr] < [rexpr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    debug 1 < 1 // false' + '\n' + '    debug 1 < 2 // true' + '\n' + '    debug \'a\' < \'b\' // true' + '\n' + '    debug \'a\' < \'B\' // false, case matters' + '\n' + '' + '\n' + 'If you want a case insensitive comparison, you must ensure both expressions are of the same case.' + '\n' + '' + '\n' + ''
        },
        '<<': {
          subtitle: 'left-shift',
          summary: 'Performs a binary left shift.',
          synref: '.. [expr] << [bitcount]',
          detail: 'Convert the expression into a 32 bit signed integer and perform a binary left shift *bitcount* times.' + '\n' + '' + '\n' + '    debug 4 << 1   // 8' + '\n' + '    debug -8 << 2  // -32' + '\n' + '    debug 2.8 << 0 // 2' + '\n' + '' + '\n' + ''
        },
        '<=': {
          subtitle: 'less or equal comparison',
          summary: 'Evaluates to **true** if lexpr is numerically or lexically lower or equal to rexpr, **false** otherwise.',
          synref: '.. [lexpr] <= [rexpr]',
          detail: 'You know how this works.' + '\n' + '' + '\n' + ''
        },
        '<=>': {
          subtitle: 'comparison',
          summary: 'Evaluates to **-1** if lexpr is lower than rexpr, **1** if it is greater, and **0** if they are equal.',
          synref: '.. [lexpr] <=> [rexpr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    debug 1 <=> 0      // returns 1' + '\n' + '    debug 1 <=> 1      // returns 0' + '\n' + '    debug 1 <=> 2      // returns -1' + '\n' + '    debug \'b\' <=> \'a\'  // returns 1' + '\n' + '    debug \'b\' <=> \'b\'  // returns 0' + '\n' + '    debug \'b\' <=> \'c\'  // returns -1' + '\n' + '' + '\n' + 'Useful in sorting operations!' + '\n' + '' + '\n' + ''
        },
        '=': {
          subtitle: 'equality comparison',
          summary: 'Evaluates to **true** if the two expressions are equivalent.',
          synref: '.. [expr] = [expr]',
          detail: 'This compiles directly to Javascript’s `==` operator and has the same occasionally' + '\n' + 'bizarre side effects. Basically, don’t use = except for comparing numeric, boolean or string values.' + '\n' + '' + '\n' + 'Use **is** or **isnt** to compare objects or object types, except when dealing with **NaN** in which' + '\n' + 'case the only reliable way to test for its existence is to use **isNaN**. That’s Javascript for you.' + '\n' + '' + '\n' + ''
        },
        '>': {
          subtitle: 'greater comparison',
          summary: 'Evaluates **true** if lexpr is numerically or lexically greater than rexpr, **false** otherwise.',
          synref: '.. [lexpr] > [rexpr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    debug 1 > 1 // true' + '\n' + '    debug 1 > 2 // false' + '\n' + '    debug \'a\' > \'b\' // false' + '\n' + '    debug \'a\' > \'B\' // true, case matters' + '\n' + '' + '\n' + 'If you want a case insensitive comparison, you must ensure both expressions are of the same case.' + '\n' + '' + '\n' + ''
        },
        '>=': {
          subtitle: 'greater or equal comparison',
          summary: 'Evaluates **true** if lexpr is numerically or lexically greater than or equal to rexpr, **false** otherwise.',
          synref: '.. [lexpr] >= [rexpr]',
          detail: 'You know the drill.' + '\n' + '' + '\n' + ''
        },
        '>>': {
          subtitle: 'signed bitwise right shift',
          summary: 'Convert the expression to a 32 bit signed integer, then shift it right bitcount times,' + '\n' + 'maintaining the sign of the expression.',
          synref: '.. [expr] >> [bitcount]',
          detail: 'As in:' + '\n' + '' + '\n' + '    debug 8 >> 1   // 4' + '\n' + '    debug -32 >> 2 // -8' + '\n' + '' + '\n' + 'There\'s also an unsigned variant __>>>__.' + '\n' + '' + '\n' + ''
        },
        '>>>': {
          subtitle: 'unsigned bitwise right shift',
          summary: 'Convert the expression to a 32 bit signed integer, then shift it right bitcount times,' + '\n' + 'Zero bits are added on the left side (msb), which does not preserve negative sign.',
          synref: '.. [expr] >> [bitcount]',
          detail: 'This is the difference:' + '\n' + '' + '\n' + '    debug 8 >>> 1   // 4' + '\n' + '    debug -32 >>> 2 // 1073741816' + '\n' + '' + '\n' + 'You want this one if you\'re working with bitmap data, for example.' + '\n' + '' + '\n' + ''
        },
        '?<': {
          subtitle: 'minimum',
          summary: 'Evaluates to whichever expression is numerically or lexically lower.',
          synref: '.. [lexpr] ?< [rexpr]',
          detail: 'Kind of like Math.min except as an operator.' + '\n' + '' + '\n' + '    debug 1 ?< 2   // returns 1' + '\n' + '    debug 2 ?< 1   // returns 1' + '\n' + '' + '\n' + 'Handy when you need it.' + '\n' + '' + '\n' + ''
        },
        '?>': {
          subtitle: 'maximum',
          summary: 'Evaluates to whichever expression is numerically or lexically higher.',
          synref: '.. [lexpr] ?> [rexpr]',
          detail: 'Kind of like Math.max except as an operator.' + '\n' + '' + '\n' + '    debug 1 ?> 2   // returns 2' + '\n' + '    debug 2 ?> 1   // returns 2' + '\n' + '' + '\n' + 'Of course it only operates on two values at a time. But that\'s cool.' + '\n' + '' + '\n' + ''
        },
        '??': {
          title: '?? ::',
          subtitle: 'trinary conditional',
          summary: 'Evaluates to expr1 if the left expression is _truthy_, otherwise evaluates to expr2.',
          synref: '.. [expr] ?? [expr1] :: [expr2]',
          detail: 'I get the grar about the ?: operator, it can make for unclear logic.  But I\'ve found' + '\n' + 'with this _doubled up_ version that it\'s much easier to see when it\'s used, especially' + '\n' + 'if you keep spaces on either side of the operators.' + '\n' + '' + '\n' + '    debug true ?? \'True\' :: \'False\'   // prints \'True\'' + '\n' + '    debug false ?? \'True\' :: \'False\'  // prints \'False\'' + '\n' + '' + '\n' + 'It\'s still kind of not great, but on the other hand there are times when five lines of code' + '\n' + 'could be reduced to one without losing much clarity. And those are the times for ??::.' + '\n' + '' + '\n' + ''
        },
        'and': {
          subtitle: 'logical and',
          summary: 'If the left expression evaluates to **falsy**, returns it, otherwise returns the right expression.',
          synref: '.. [expr] and [expr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    debug 1 and 0     // prints \'0\'' + '\n' + '    debug 1 and false // prints \'false\'' + '\n' + '    debug 0 and 1     // prints \'0\'' + '\n' + '    debug false and 1 // prints \'false\'' + '\n' + '    debug 1 and 1     // prints \'1\'' + '\n' + '' + '\n' + '    debug true and \'Fred\'' + '\n' + '    > Fred' + '\n' + '' + '\n' + ''
        },
        'andb': {
          subtitle: 'bitwise and',
          summary: 'Bitwise and operator. Converts, if possible, both left and right expressions into 32 bit signed integers, and performs a bitwise AND operation on them.',
          synref: '.. [expr] andb [expr]',
          detail: 'Examples:' + '\n' + '' + '\n' + '    debug 5 andb 11' + '\n' + '' + '\n' + '    > 1' + '\n' + '' + '\n' + '    //  5 in binary: 00000000000000000000000000000101' + '\n' + '    // 11 in binary: 00000000000000000000000000001011' + '\n' + '    //  1 in binary: 00000000000000000000000000000001' + '\n' + '' + '\n' + ''
        },
        'bind': {
          subtitle: 'function context binder',
          summary: 'The __bind__ operator _binds_ a function reference to the current object context.',
          synref: '.. bind [function reference]',
          detail: 'This is useful when you need to pass in a member function to a callback, and need to ensure the' + '\n' + 'execution context (specifically, the _this_ object) isn\'t lost.' + '\n' + '' + '\n' + 'Why is this important?' + '\n' + '' + '\n' + '    Object car' + '\n' + '    instance: plate \'876 ACET\'' + '\n' + '    CheckPlate task' + '\n' + '      DB.lookupPlate plate, PlateResults' + '\n' + '    PlateResults task given status' + '\n' + '      debug \'Status for \${plate}: \${status}\'' + '\n' + '' + '\n' + 'In the above function definition of `CheckPlate` the `DB.lookupPlate` function is an asynchronous' + '\n' + 'call with a plate number and a callback function. As written, when the callback is invoked,' + '\n' + '`PlateResults` will have been unbound from its object; it is a function reference with no context.' + '\n' + '' + '\n' + 'The code will produce this result:' + '\n' + '' + '\n' + '    Looking up 876 ACET' + '\n' + '    Status for undefined: Valid' + '\n' + '' + '\n' + 'Although the test was successful, we have _lost context_ on the callback because `PlateResults`' + '\n' + 'is passed in as an unbound function. Referring to the member trait `plate` within an unbound context' + '\n' + 'produces an undefined result. In order to make this function reference work, we need to bind it to' + '\n' + 'the current object with the __bind__ operator, as follows:' + '\n' + '' + '\n' + '    DB.lookupPlate plate, bind PlateResults' + '\n' + '' + '\n' + 'Now when we run the asynchronous function, it works as expected, because the callback has its context;' + '\n' + 'e.g. it knows where it is going (or, more accurately, where it is returning to).' + '\n' + '' + '\n' + '    Looking up 876 ACET' + '\n' + '    Status for 876 ACET: Valid' + '\n' + '' + '\n' + 'Note that __bind__ is only necessary when passing references to object member functions.' + '\n' + 'Functions you define in-place won\'t have this issue, as they create their own context.' + '\n' + 'This version of __bind__ only binds functions to the current object. If you want to bind a' + '\n' + 'function on some other object, you\'d write code something like this, making use of the Function' + '\n' + 'object\'s bind ability:' + '\n' + '' + '\n' + '    ... from anObject.anyFunction.bind anObject' + '\n' + '' + '\n' + 'SAI compiled objects do a runtime check on any member method invocation to verify that the' + '\n' + 'current execution context is, if not correct, at least not totally absent.' + '\n' + '' + '\n' + ''
        },
        'copy': {
          subtitle: 'shallow copy',
          summary: 'Use the **copy** unary operator to create a _shallow copy_ of the expression it precedes.',
          synref: '.. copy [expr]',
          detail: 'You sometimes need this because ordinarily SAI and Javascript assign objects, rather than copies' + '\n' + 'of object values.' + '\n' + '' + '\n' + '    set plate to fruit       // i want some fruit' + '\n' + '    plate.push \'Ice cream\'   // and also dessert' + '\n' + '    debug fruit              // but now fruit has changed' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\', \'Ice Cream\' ]' + '\n' + '' + '\n' + '    fruit.pop                 // get rid of the ice cream' + '\n' + '    debug fruit' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\' ]' + '\n' + '' + '\n' + '    set plate to copy fruit' + '\n' + '    plate.push \'Ice cream\'' + '\n' + '    debug fruit' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\' ]' + '\n' + '' + '\n' + '    debug plate               // there we go' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\', \'Ice Cream\' ]' + '\n' + '' + '\n' + 'Note that **copy** only copies enumerable attributes. There\'s a rabbit hole for ya.' + '\n' + '' + '\n' + ''
        },
        'create': {
          subtitle: 'object creation',
          summary: 'Creates a SAI object by name.',
          synref: '.. create [expr] [parameters]',
          detail: 'If we are running in dynamic mode (that is, with source that is being dynamically compiled from' + '\n' + '.SAI files), __create__ will attempt to find the object’s source by using the `SAI.config.Loader` function,' + '\n' + 'which defaults to `SAI.GetSourceFromPaths`, which tries to find a file named `[expr].sai` i' + '\n' + 'n the provided paths.' + '\n' + '' + '\n' + 'In runtime mode (that is, when running from plain Javascript .js files that have been pre-compiled),' + '\n' + '__create__ will call `require`, but do see the source in the `sai-library` that discusses this.' + '\n' + '' + '\n' + '    reference:' + '\n' + '      Tally \'Tally \x5e1.0.0\'' + '\n' + '    ..' + '\n' + '' + '\n' + '    set inventory to create Tally' + '\n' + '' + '\n' + 'The example follows best practices of placing object names in a **reference** section, aliasing' + '\n' + 'versioned names into literals.' + '\n' + '' + '\n' + 'See also __new__, which is a direct link to Javascript\'s `new`, and __singleton__, which works' + '\n' + 'like __create__ except instantiates the object only once in the scope of the runtime library; subsequent' + '\n' + 'calls will return that same object.' + '\n' + '' + '\n' + ''
        },
        'dec': {
          subtitle: 'decrement verb',
          summary: 'Decrements (reduces by 1) the value in the given variable.',
          synref: 'dec [var]',
          detail: 'Example:' + '\n' + '' + '\n' + '  set a to 2' + '\n' + '  dec a' + '\n' + '  debug a' + '\n' + '' + '\n' + '  > 1' + '\n' + '' + '\n' + ''
        },
        'default': {
          subtitle: 'variable initialization',
          summary: 'Examines the expression on the left; if it has a value, returns it. Otherwise returns the value on the right.',
          synref: '... [lexpr] default [rexpr]' + '\n' + 'set [lexpr] default [rexpr]',
          detail: '#### default in expressions' + '\n' + '' + '\n' + 'If and only if the left expression evaluates to `undefined`, returns the right expression, otherwise' + '\n' + 'returns the left expression.' + '\n' + '' + '\n' + 'Like **or** except instead of checking for _truthy_ tests to see if a value is present.' + '\n' + 'Most useful in expressions where you’re not sure if a variable is initialized.' + '\n' + '' + '\n' + '    set' + '\n' + '      magnitude to undefined' + '\n' + '      angle to 60o' + '\n' + '    debug (magnitude default 1) * ~Math.cos(angle)' + '\n' + '' + '\n' + '    > 0.5' + '\n' + '' + '\n' + '#### default in **set** statements' + '\n' + '' + '\n' + 'If the left expression is `undefined` then evaluate the right expression and assign it to the left' + '\n' + 'expression. For example:' + '\n' + '' + '\n' + '    set calculationCache[key] default ExpensiveCalculation(key)' + '\n' + '' + '\n' + 'This checks to see if the calculation cache has a value for the given key, and if not,' + '\n' + 'calculates the value and assigns it to the cache.' + '\n' + '' + '\n' + ''
        },
        'delete': {
          subtitle: 'a verb that deletes variables',
          summary: 'summary',
          synref: 'delete [variable]',
          detail: 'When called on a variable or traits, undefines the named variable or attribute(s) of a variable.' + '\n' + '' + '\n' + '    delete thisUnwantedValue' + '\n' + '    delete goodObject.unwantedAttribute' + '\n' + '' + '\n' + 'This just calls the underlying Javascript version of **delete**, with all the same rules and caveats.' + '\n' + '' + '\n' + '#### delete pipe operator' + '\n' + '' + '\n' + 'The __delete__ pipe operator has advanced functionality, which see.' + '\n' + '' + '\n' + ''
        },
        'inc': {
          subtitle: 'value increment',
          summary: 'Increments (adds 1 to) the given variable.',
          synref: 'inc [var]',
          detail: 'As in:' + '\n' + '' + '\n' + '    set a to 1' + '\n' + '    inc a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 2' + '\n' + '' + '\n' + 'The __inc__ statement has special behaviour around values that are _undefined_ or evaulate to _falsy_; when you increment one of these values, it becomes `1`.  For example:' + '\n' + '' + '\n' + '    set a to undefined' + '\n' + '    inc a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 1' + '\n' + '' + '\n' + 'This is useful when tallying with an array, e.g. the following construct automatically initializes array elements the way the standard `++` operator does not, such that the `tally` object will contain a log of word usage.' + '\n' + '' + '\n' + '    set tally blank' + '\n' + '    every word' + '\n' + '      inc tally\it' + '\n' + '' + '\n' + 'Note that __dec__ does not have similar initialization functionality.' + '\n' + '' + '\n' + ''
        },
        'is': {
          subtitle: 'equivalence test',
          summary: 'Returns **true** if the two expressions are completely indistinguishable.',
          synref: '.. [expr] is [expr]',
          detail: 'More rigorous than **=** when objects differ in type.' + '\n' + '' + '\n' + '    debug 0 = false' + '\n' + '    debug 0 is false' + '\n' + '' + '\n' + '    > true' + '\n' + '    > false' + '\n' + '' + '\n' + '_Note: Do not use **is** or **isnt** to test values against **NaN**. You must use the' + '\n' + 'specific **isNaN** operator for this._' + '\n' + '' + '\n' + ''
        },
        'isNaN': {
          title: 'isNaN',
          subtitle: 'checks for NaN',
          summary: 'Returns true if the expression is the **NaN** flag.',
          synref: '.. isNaN \[expr]',
          detail: 'Note there is no other way to test for NaN than by using **isNaN**.' + '\n' + '' + '\n' + 'Note also that capitalization matters.' + '\n' + '' + '\n' + '    set a from ~parseInt \'This is not a number.\'' + '\n' + '    debug a           // NaN' + '\n' + '    debug a = 0       // false' + '\n' + '    debug a = false   // false' + '\n' + '    debug a = NaN     // false' + '\n' + '    debug isNaN a     // true' + '\n' + '' + '\n' + 'Right?  Seriously:' + '\n' + '' + '\n' + '    debug NaN = NaN   // false' + '\n' + '    debug NaN is NaN  // false' + '\n' + '' + '\n' + 'So that\'s why we need this keyword for this one little function.' + '\n' + '' + '\n' + ''
        },
        'isnt': {
          subtitle: 'equivalence test',
          summary: 'Returns **true** if the two expressions are in any way distinguishable.',
          synref: '.. [expr] isnt [expr]',
          detail: 'More rigorous than **!=** when objects are of differing types.' + '\n' + '' + '\n' + '    debug 1 != true' + '\n' + '    debug 1 isnt true' + '\n' + '' + '\n' + '    > false' + '\n' + '    > true' + '\n' + '' + '\n' + '_Note: Do not use **is** or **isnt** to test values against **NaN**. You must use the specific **isNaN** operator for this._' + '\n' + '' + '\n' + ''
        },
        'isof': {
          subtitle: 'object information',
          summary: 'All prototyped SAI objects have an **isof** trait that is a plain object that encapsulates detailed' + '\n' + 'information about the SAI object and its heritage.',
          synref: '.. [object].isof' + '\n' + ' - or -' + '\n' + '  .. [object] isof [class name expr]',
          detail: 'Let\'s just see how this works:' + '\n' + '' + '\n' + '    object Fruit 1.0.0' + '\n' + '    Instantiate task' + '\n' + '      debug \'I am a \${isa}\'' + '\n' + '' + '\n' + '    set a to create \'Fruit\'' + '\n' + '    > I am a Fruit' + '\n' + '' + '\n' + '    object Pear 1.0.0' + '\n' + '    inherit: Fruit' + '\n' + '' + '\n' + '    set b to create \'Pear\'' + '\n' + '    > I am a Pear' + '\n' + '' + '\n' + '    debug a.isof' + '\n' + '' + '\n' + '    > { Fruit:' + '\n' + '    >   { version: \'1.0.0\',' + '\n' + '    >     isa: \'Fruit\',' + '\n' + '    >     context: \'./sample/Keywords/Fruit.sai\' } }' + '\n' + '' + '\n' + '    debug b.isof' + '\n' + '' + '\n' + '    > { Fruit:' + '\n' + '    >   { version: \'1.0.0\',' + '\n' + '    >     isa: \'Fruit\',' + '\n' + '    >     context: \'./sai/sample/Keywords/Fruit.sai\' },' + '\n' + '    >  Pear:' + '\n' + '    >   { version: \'1.0.0\',' + '\n' + '    >     isa: \'Pear\',' + '\n' + '    >     context: \'./sai/sample/Keywords/Pear.sai\',' + '\n' + '    >     inherit: [ \'Fruit\' ] } }' + '\n' + '' + '\n' + '  You can trace an object’s creation in order recursively by starting at the **isof** entry for the' + '\n' + '  present object — `isof[isa]` — and stepping through the **inherit** array.' + '\n' + '' + '\n' + '#### isof operator' + '\n' + '' + '\n' + '  .. [object] isof [class name expr]' + '\n' + '' + '\n' + 'Returns true if the object is an instance of a class that is, or inherits from, the given class name.' + '\n' + '' + '\n' + '    class Parent 1.0.0' + '\n' + '' + '\n' + '    class Child 1.0.0' + '\n' + '    inherits: Parent' + '\n' + '' + '\n' + '    set a to create \'Child\'' + '\n' + '    debug a isof \'Child\'   // true' + '\n' + '    debug a isof \'Parent\'  // true' + '\n' + '' + '\n' + ''
        },
        'nand': {
          subtitle: 'not-and logical',
          summary: 'Performs the logical not-and operation.',
          synref: '.. [expr] nand [expr]',
          detail: 'Returns **false** only if left or right expression are both _truthy_. Otherwise returns **true**.' + '\n' + '' + '\n' + 'A semantic simplification of `not ([expr] and [expr])`.' + '\n' + '' + '\n' + '    debug 0 nand 0 // prints \'true\'' + '\n' + '    debug 1 nand 0 // prints \'true\'' + '\n' + '    debug 0 nand 1 // prints \'true\'' + '\n' + '    debug 1 nand 1 // prints \'false\'' + '\n' + '' + '\n' + 'These are logically the same' + '\n' + '' + '\n' + '    debug a nand b' + '\n' + '    debug not ( a and b )' + '\n' + '' + '\n' + 'How useful!' + '\n' + '' + '\n' + ''
        },
        'new': {
          subtitle: 'object instantiation',
          summary: 'Instantiates a new object with the given prototype.',
          synref: '.. new [prototype] [parameters]',
          detail: 'If parameters are supplied, passes them to the object’s constructor.' + '\n' + '' + '\n' + '**New** is used for traditional Javascript objects; objects where you have in-hand the prototype' + '\n' + 'used to fabricate an instance that object. **New** trusts that the code to create that object' + '\n' + 'has already been located and compiled.' + '\n' + '' + '\n' + '**Create** is used for SAI objects; objects where you have in-hand an object name (as a string).' + '\n' + '**Create** doesn\'t assume pre-compiled prototypes; if the prototype isn\'t cached, it will attempt' + '\n' + 'to load it via the `SAI.config.Loader` function.' + '\n' + '' + '\n' + '    reference:' + '\n' + '      express require(\'express\')' + '\n' + '' + '\n' + '    object HelloHTTP 1.0.0' + '\n' + '' + '\n' + '    Instantiate task' + '\n' + '      set @app express()' + '\n' + '' + '\n' + '      @app.get \'/\', task given req, res' + '\n' + '        res.send \'Hello HTTP!\'' + '\n' + '' + '\n' + '      set @server from @app.listen 3000, \'localhost\', task' + '\n' + '        with @server.address()' + '\n' + '          debug \'Example app listening at http://\${.address}:\${.port}\'' + '\n' + '' + '\n' + 'You ordinarily need to use the **\~** global scope prefix when creating Javascript built-in objects' + '\n' + 'however `Error` has been promoted to SAI global so you don\'t have to:' + '\n' + '' + '\n' + '    if crocodiles' + '\n' + '      throw new Error "Why do we even have that lever?"' + '\n' + '' + '\n' + 'Notice here that **new** is not expecting any parameters to be wrapped in parentheses; in this way it' + '\n' + 'works like **from**.' + '\n' + '' + '\n' + 'See also __create__ which is used to instantiate SAI objects by name, and __singleton__ which is' + '\n' + 'used to create singleton SAI objects by name.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'nor': {
          subtitle: 'not-or logical',
          summary: 'Performs the logical not-or operation.',
          synref: '.. [expr] nor [expr]',
          detail: 'Returns **true** only if left or right expression are both _falsy_. Otherwise returns **false**.' + '\n' + '' + '\n' + 'A semantic simplification of `not ([expr] or [expr])`.' + '\n' + '' + '\n' + '    debug 0 nor 0 // prints \'true\'' + '\n' + '    debug 1 nor 0 // prints \'false\'' + '\n' + '    debug 0 nor 1 // prints \'false\'' + '\n' + '    debug 1 nor 1 // prints \'false\'' + '\n' + '' + '\n' + 'These are the same:' + '\n' + '' + '\n' + '    if not ( a or b )' + '\n' + '    if a nor b' + '\n' + '    unless a or b' + '\n' + '' + '\n' + ''
        },
        'not': {
          subtitle: 'logical not',
          summary: 'Performs the logical not operation.',
          synref: '.. not [expr]',
          detail: 'Returns **false** if the right expression is _truthy_, otherwise returns **true**.' + '\n' + '' + '\n' + '    debug not false  // prints \'true\'' + '\n' + '    debug not 0      // prints \'true\'' + '\n' + '    debug not \'Sam\' // prints \'false\'' + '\n' + '    debug not empty  // prints \'false\'' + '\n' + '' + '\n' + 'These are the same:' + '\n' + '' + '\n' + '    if not a' + '\n' + '    unless a' + '\n' + '' + '\n' + ''
        },
        'notb': {
          subtitle: 'binary not',
          summary: 'Performs a bitwise logical not on a 32-bit signed integer.',
          synref: '.. notb [expr]',
          detail: 'For example:' + '\n' + '' + '\n' + '    debug notb -8  // prints \'7\'' + '\n' + '' + '\n' + '     -8 in binary: 11111111111111111111111111111000' + '\n' + '     +7 in binary: 00000000000000000000000000000111' + '\n' + '' + '\n' + ''
        },
        'number': {
          subtitle: 'numeric coercion',
          summary: 'Attempts to convert the following expression into a numeric value.',
          synref: '.. number [expr]',
          detail: 'If it cannot, the result is 0.' + '\n' + '' + '\n' + '    debug number \'12\'' + '\n' + '    debug number \'ralph\'' + '\n' + '    > 12' + '\n' + '    > 0' + '\n' + '' + '\n' + 'It is always safe to use __number__ in that it will never return a non-number, and it will never' + '\n' + 'throw an error. It\'s sole failure mode is to return 0.' + '\n' + '' + '\n' + ''
        },
        'or': {
          subtitle: 'logical or',
          summary: 'If the left expression is **truthy**, returns it without executing the right expression,' + '\n' + 'otherwise returns the right expression.',
          synref: '.. [expr] or [expr]',
          detail: 'Examples:' + '\n' + '' + '\n' + '    debug 0 or 0  // prints \'0\'' + '\n' + '    debug 1 or 0  // prints \'1\'' + '\n' + '    debug 0 or 2  // prints \'2\'' + '\n' + '    debug 1 or 2  // prints \'1\'' + '\n' + '' + '\n' + ''
        },
        'orb': {
          subtitle: 'bitwise-or',
          summary: 'Performs a bitwise or on two 32-bit integers.',
          synref: '[expr] orb [expr]',
          detail: 'Example:' + '\n' + '' + '\n' + '    debug 5 orb 11 // prints \'15\'' + '\n' + '' + '\n' + '     5 in binary: 00000000000000000000000000000101' + '\n' + '    11 in binary: 00000000000000000000000000001011' + '\n' + '    15 in binary: 00000000000000000000000000001111' + '\n' + '' + '\n' + ''
        },
        'singleton': {
          subtitle: 'singleton object access',
          summary: 'Creates one instance of SAI object by name.',
          synref: '.. singleton [expr] [parameters]',
          detail: 'Creates one instance of SAI object by name. If the object has already been created, returns a' + '\n' + 'reference to it. The scope is that maintained by the runtime library.' + '\n' + '' + '\n' + 'Like __create__, __singleton__ will attempt to find the object’s source by using the `SAI.config.Loader`' + '\n' + 'function, which defaults to `SAI.GetSourceFromPaths`, which tries to find a file named `[expr].sai`' + '\n' + 'in the provided paths.' + '\n' + '' + '\n' + '    reference:' + '\n' + '      Tally \'Tally \x5e1.0.0\'' + '\n' + '    ..' + '\n' + '' + '\n' + '    set inventory to singleton Tally' + '\n' + '' + '\n' + '(The example follows best practices of placing object names in a **reference** section, aliasing' + '\n' + 'versioned names into literals.)' + '\n' + '' + '\n' + 'Singleton objects are useful for library functions, APIs to external resources, tallies, caches,' + '\n' + 'message managers and so on.' + '\n' + '' + '\n' + 'Since the reference to the singleton object is maintained by the library, singleton objects are' + '\n' + 'never garbage collected (and cannot be destroyed) once created. If you might need to release resources' + '\n' + 'held by a singleton before the end of the application, you must make allowances for that in your' + '\n' + 'object\'s API; e.g. by crafting a `.Cleanup` task.' + '\n' + '' + '\n' + 'See also __new__, which is a direct link to Javascript\'s `new`, and __create__, which will make a new' + '\n' + 'object each time.' + '\n' + '' + '\n' + ''
        },
        'typeof': {
          subtitle: 'javascript type disclosure',
          summary: 'Returns the Javascript-native type of an expression.',
          synref: '.. typeof [expr]',
          detail: 'See e.g. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof][2] for details.' + '\n' + '' + '\n' + ''
        },
        'xor': {
          subtitle: 'logical exclusive-or',
          summary: 'If both expressions are _truthy_, or both expressions are _falsy_, return `false`. Otherwise return the expression that is _truthy_.',
          synref: '.. [expr] xor [expr]',
          detail: 'Example:' + '\n' + '' + '\n' + '    debug \'Fred\' xor \'Daphne\'' + '\n' + '    debug \'Shaggy\' xor 0' + '\n' + '    debug 0 xor \'Scooby\'' + '\n' + '    debug 0 xor 0' + '\n' + '' + '\n' + '    > false' + '\n' + '    > Shaggy' + '\n' + '    > Scooby' + '\n' + '    > false' + '\n' + '' + '\n' + 'Maybe not too often used, but compared to:' + '\n' + '' + '\n' + '    if (a and b) or not (a and b)' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'xorb': {
          subtitle: 'binary exclusive-or',
          summary: 'Performs a bitwise XOR operation on two 32-bit integers.',
          synref: '.. [expr] xorb [expr]',
          detail: 'Example:' + '\n' + '' + '\n' + '    debug 3 xorb 6 // prints \'5\'' + '\n' + '' + '\n' + '    3 binary: 00000000000000000000000000000011' + '\n' + '    6 binary: 00000000000000000000000000000110' + '\n' + '    5 binary: 00000000000000000000000000000101' + '\n' + '' + '\n' + 'Favourite of cryptographers everywhere. And data storage architects.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      },
      'syntax': {
        '!': {
          title: '!',
          subtitle: 'function invocation operator',
          summary: '**!** (bang) invokes the following identifier as a function call that returns a value,' + '\n' + 'passing in any parameters that follow.',
          synref: '... ! [identifier] ([parameters]) (;)',
          detail: 'The following are synonymous:' + '\n' + '' + '\n' + '    set record !cursor.FetchRow' + '\n' + '    set record from cursor.FetchRow' + '\n' + '    set record to cursor.FetchRow()' + '\n' + '' + '\n' + '    set cursor !db.Query \'select * from names\'' + '\n' + '    set cursor to db.Query(\'select * from names\')' + '\n' + '' + '\n' + 'Neither **!** nor parenthesis are needed when the verb begins the line as in' + '\n' + 'the `cursor.Close` statement below.' + '\n' + '' + '\n' + '    set cursor from db.Query \'select * from names\'' + '\n' + '    set records from cursor.FetchAll' + '\n' + '    cursor.Close' + '\n' + '' + '\n' + 'If you wish to use **!** in a continuing expression, close the parameter' + '\n' + 'clause with a semicolon (like you\'d close a structural literal).' + '\n' + '' + '\n' + 'The following examples are equivalent.' + '\n' + '' + '\n' + '    set @x ~Math.sin($angle) * $magnitude' + '\n' + '    set @x !~Math.sin $angle; * $magnitude' + '\n' + '    set @x from ~Math.sin $angle; * $magnitude' + '\n' + '' + '\n' + ''
        },
        '#': {
          title: '#',
          subtitle: 'existence assertion',
          summary: 'When defining fields or traits, using a hash in front of a trait _name_ will automatically assign' + '\n' + 'a value of **true** to that trait.',
          synref: '.. traits #[tagname]' + '\n' + '.. fields #[tagname]',
          detail: 'The following two definitions are identical:' + '\n' + '' + '\n' + '    set row1 to: name \'John\', age 19, #cat, #dog' + '\n' + '    set row2 to: name \'John\', age 19, cat true, dog true' + '\n' + '' + '\n' + ''
        },
        '$': {
          subtitle: 'function parameter scoping prefix',
          summary: 'Easy access to the first parameter a function was called with (even if no parameters are declared' + '\n' + 'with __given__).',
          synref: '.. $' + '\n' + '.. $[attribute]',
          detail: 'When alone, **$** returns the first parameter a function was called with.' + '\n' + '' + '\n' + '    set ShowParameter to task' + '\n' + '      debug $' + '\n' + '    ShowParameter \'Bianca\'' + '\n' + '' + '\n' + '    > Bianca' + '\n' + '' + '\n' + 'When followed immediately by an attribute name, that attribute of the first parameter in a' + '\n' + 'function. (It is not necessary to include the dot.)' + '\n' + '' + '\n' + '    set ShowAttribute to task' + '\n' + '      debug $name' + '\n' + '' + '\n' + '    ShowAttribute friends[0]' + '\n' + '' + '\n' + '    > Sara' + '\n' + '' + '\n' + 'Even if you use **given** to name your parameters, **$** continues to refer to the first parameter.' + '\n' + '' + '\n' + '    set ShowParameters to task given p1, p2' + '\n' + '      debug $' + '\n' + '      debug p1' + '\n' + '      debug p2' + '\n' + '' + '\n' + '    ShowParameters \'First\', \'Second\'' + '\n' + '' + '\n' + '    > First' + '\n' + '    > First' + '\n' + '    > Second' + '\n' + '' + '\n' + ''
        },
        '$\{': {
          title: '$\{ }',
          subtitle: 'string composition',
          summary: 'Allows the insertion of any arbitrary expression in the middle of a string literal.',
          synref: '.. \'String \${ [expr] } continues.\'    // single quote' + '\n' + '.. "String \${ [expr] } continues."    // double quote' + '\n' + '.. `String \${ [expr] } continues.     // backtick bareline' + '\n' + '.. \'\'\'                                // here document' + '\n' + '  String \${ [expr] } continues.',
          detail: 'As shown above, this is supported in all four string literal formats.' + '\n' + '' + '\n' + '    set FriendSummary to task' + '\n' + '      return \'Name: $\{$name}, age: $\{$age}\'' + '\n' + '    ply friends limit 3 as friend' + '\n' + '      debug \'Subject $\{key+1}: $\{FriendSummary(friend)}\'' + '\n' + '' + '\n' + '    > Subject 1: Sara, age 23' + '\n' + '    > Subject 2: John, age 19' + '\n' + '    > Subject 3: Ellie, age 22' + '\n' + '' + '\n' + 'Use `\\\${` to represent `\$\{` in a string literal.' + '\n' + '' + '\n' + '    debug \'But I really need to include \\\${} in my output!\'' + '\n' + '' + '\n' + '    > But I really need to include \${} in my output!' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        '\'': {
          b: 'ready',
          title: '\' and "',
          subtitle: 'string literals',
          summary: 'Declare a single line delimited literal string.',
          synref: '.. \'Type your string literal here.\'' + '\n' + '.. \'Use a backslash to escape \' and \" and \\ in your strings.\'',
          detail: 'String literals support embedded expressions (a.k.a. string compositions) using the' + '\n' + 'syntax: `$\{expr}`. Any normal expression can be evaluated and will be concatenated in-place.' + '\n' + '' + '\n' + 'Use backslash as an escape for string delimiters `\\\'` and `\\"`, dollar signs' + '\n' + 'before braces `\\\${`, and the standard control characters `\\n \\r \\t \\b \\f`.' + '\n' + '' + '\n' + '    debug \'This here\'s $\{\'a\'} test using \\$\{} composition.\'' + '\n' + '    > This here\'s is a test using ${} composition.' + '\n' + '' + '\n' + 'Double quote is semantically identical to single quote..' + '\n' + '' + '\n' + ''
        },
        '\'\'\'': {
          subtitle: 'multi-line string literal',
          summary: 'Declare a multi-line string ideal for embedding longer passages of markup.',
          synref: '.. \'\'\'' + '\n' + '  Many lines of text' + '\n' + '    Some Indented' + '\n' + '  Continuing until' + '\n' + '  Indent resets' + '\n' + '    on the line below this.' + '\n' + '..',
          detail: 'This is also known as a _here document_ as in "here\'s a document!"' + '\n' + '' + '\n' + '    .. \'\'\'' + '\n' + '      Now you can type as much text as you want,' + '\n' + '      remembering that leading and trailing whitespace' + '\n' + '      will be stripped, though newlines will be preserved.' + '\n' + '      So it\'s perfect for markup.' + '\n' + '' + '\n' + '      It will even keep track of your indenting, assigning' + '\n' + '      column zero to the start of the first line.' + '\n' + '' + '\n' + '      The string goes on as long as the indenting does.' + '\n' + '' + '\n' + '      And you can include \\\${\'compo\'+\'sitions\'} as well.' + '\n' + '' + '\n' + 'That’s three single quotes in a row, then an indented block.' + '\n' + '' + '\n' + 'Blank lines, indentation and comments are preserved, unless the comment' + '\n' + 'is outside the left margin.' + '\n' + '' + '\n' + ''
        },
        '\'d': {
          title: '\'d',
          subtitle: 'conversational syntax',
          summary: 'The _verb\'d_. An alternate way of invoking a verb on an object.',
          synref: '.. [verb]\'d [object] (parameters)',
          detail: 'Here are some functionally identical ways of writing the same thing:' + '\n' + '' + '\n' + '    biglist.push item' + '\n' + '    push\'d biglist item' + '\n' + '' + '\n' + '    debug name.toUpperCase()' + '\n' + '    debug from name.toUpperCase' + '\n' + '    debug toUpperCase\'d name' + '\n' + '' + '\n' + 'The thing I find displeasing about the subject-first syntax is that it obscures the action taken.' + '\n' + 'When the action (the verb) is not foremost on the line, program flow is more difficult to discern.' + '\n' + '' + '\n' + 'You can use any number of indirections on the object to be verb\'d:' + '\n' + '' + '\n' + '    set index to join\'d library\\reference\\category.titles \'\\n\'' + '\n' + '' + '\n' + 'I find this much clearer than:' + '\n' + '' + '\n' + '    set index from library\\reference\\category.titles.join \'\\n\'' + '\n' + '' + '\n' + 'Because as you\'re reading the code, you see WHAT action will take place first, then you learn' + '\n' + 'the subject and object and how they relate to each other.  Hey if you don\'t like it,' + '\n' + 'don\'t use it.' + '\n' + '' + '\n' + ''
        },
        '\'s': {
          title: '\'s',
          subtitle: 'conversational syntax',
          summary: 'The _posessive_. An alternate way of referencing the attributes of an object.',
          synref: '.. [value]\'s [attribute]' + '\n' + '[object]\'s verb',
          detail: 'Equivalent to the use of `.` when accessing named attributes.' + '\n' + '' + '\n' + 'Functionally equivalent examples:' + '\n' + '' + '\n' + '    set mixer\'s colour to \'red\'' + '\n' + '    set mixer.colour to \'red\'' + '\n' + '    set mixer[\'colour\'] to \'red\'' + '\n' + '' + '\n' + '    set index from library\\reference\\category.titles' + '\n' + '    set index from library\\reference\\category\'s titles' + '\n' + '' + '\n' + '    if config.options.speedometer' + '\n' + '    if config.options\'s speedometer' + '\n' + '    if config\'s options.speedometer' + '\n' + '    if config\'s options\'s speedometer' + '\n' + '' + '\n' + 'In that last set of four, there was probably one that most accurately represented how you' + '\n' + 'would think about the way configuration data is organized. Using a coding style that reflects' + '\n' + 'that mental representation helps you write maintainable code.' + '\n' + '' + '\n' + ''
        },
        '(': {
          title: '( )',
          subtitle: 'parentheticals',
          summary: 'Parenthesis are used for a couple of things, one of them actually quite confusing.',
          synref: '.. verb(parameters)' + '\n' + '.. ( expression )' + '\n' + '.. ( expression [as identifier])',
          detail: '#### invoking functions with parenthesis' + '\n' + '' + '\n' + 'Haver you ever stopped to think about how odd it is that most major computer languages' + '\n' + 'use parenthesis after a value as a way of using that value as a function reference that' + '\n' + 'would accept the parameters within the parenthesis?' + '\n' + '' + '\n' + 'Okay, it comes from math, where _f(x)_ is super classical notation. But still, it doesn\'t have' + '\n' + 'to be that way, and it behooves us to think about it.' + '\n' + '' + '\n' + 'In SAI you can use parens this way, but in my opinion it should be reserved for situations' + '\n' + 'where other, more conversational styles, are just too clunky -- essentially when you feel a deep,' + '\n' + 'desperate need to chain a whole bunch of functionality together into one run-on sentence, like this one.' + '\n' + '' + '\n' + 'These are all different ways of writing the same functionally:' + '\n' + '' + '\n' + '    set angle Math.atan2( y, x )      // 1' + '\n' + '    set angle atan2\'d Math y, x       // 2' + '\n' + '    set angle from Math.atan2 y, x    // 3' + '\n' + '    set angle from Math\'s atan2 y, x  // 4' + '\n' + '' + '\n' + 'My personal preference would be 3, unless there were more math operations needed in one statement, in which' + '\n' + 'case 1 would be clearer. Option 2 doesn\'t make much sense because the Math object is here' + '\n' + 'a static entity that is meaningless except as a scoping prefix. This also lets form 4 out as' + '\n' + 'calling too much attention to Math.' + '\n' + '' + '\n' + '#### controlling precedence with parenthesis' + '\n' + '' + '\n' + 'The much more useful way that parens are used is to control the precedence of operations.' + '\n' + 'For example, what the heck is the result of this statement:' + '\n' + '' + '\n' + '    set f to 3 * 8 - 2 / 2 + 5' + '\n' + '' + '\n' + 'There are certainly RULES about how this would be evaluated; multiplication and division would be done first,' + '\n' + 'then addition and subtraction.  But who wants to have to think about that all the damn time?  And what if' + '\n' + 'your assumptions are wrong, or you are just too tired or rushed to get it right?' + '\n' + '' + '\n' + '    set f to ( ( 3 * 8 ) - 2 ) / (2 + 5)' + '\n' + '' + '\n' + 'That\'s what parenthesis are for. My advice is: use them any time you have more than one operator in an' + '\n' + 'expression, unless the operators are all the same. And maybe even then. Always use them when you\'re' + '\n' + 'altering values in parameters.' + '\n' + '' + '\n' + '#### using __as__ with parenthesis' + '\n' + '' + '\n' + 'The parenthetic **as** assigns the value of the parenthesised expression to a named identifier.' + '\n' + 'The assignment happens as soon as the parethesis is evaluated, so you can use the identifier' + '\n' + 'in the same expression as the parenthetical, as long as the parenthetical is evaluated first.' + '\n' + '_This is not a good style of coding_.' + '\n' + '' + '\n' + '    set six to (1+2 as three)+three' + '\n' + '    debug array three, six' + '\n' + '' + '\n' + '    > [ 3, 6 ]' + '\n' + '' + '\n' + 'Parenthetic __as__ seems like it might be evil but I believe its use can be justified if' + '\n' + 'done with care and caution.' + '\n' + '' + '\n' + ''
        },
        '.': {
          subtitle: 'attribute lookup',
          summary: 'Looks up the object trait named _attribute_ in the expression.',
          synref: '.. [expression].[attribute]' + '\n' + '.. .[attribute]' + '\n' + '.. .[numeric array index]',
          detail: 'This is a _literal_ dereferencing; the text of the attribute is used as the lookup.' + '\n' + '' + '\n' + '    set friend to friends.0' + '\n' + '' + '\n' + '    debug friend.name' + '\n' + '    debug friend[\'name\']' + '\n' + '    with friend' + '\n' + '      debug it.name' + '\n' + '      debug .name' + '\n' + '' + '\n' + '    // prints \'Sara\' four times' + '\n' + '' + '\n' + 'When used without a leading value,' + '\n' + 'references the named attribute in the **it** pronoun.' + '\n' + '' + '\n' + 'Named attributes can also be referenced with `\'s` because why not.' + '\n' + '' + '\n' + ''
        },
        '..': {
          title: '..',
          subtitle: 'pastes two related lines together',
          summary: 'You can use the two-dot _caboose_ to stitch a *single line* child code block onto the end of the' + '\n' + 'statement that requires it.',
          synref: 'line 1 .. line 2',
          detail: 'The following are functionally identical:' + '\n' + '' + '\n' + '    if error' + '\n' + '      return -1' + '\n' + '' + '\n' + '    if error .. return -1' + '\n' + '' + '\n' + 'Don\'t use the caboose unless it will help make your code clearer.' + '\n' + '' + '\n' + ''
        },
        '...': {
          title: '...',
          subtitle: 'statement pasting operator',
          summary: 'You can use the three-dot _continue_ syntax to insert line breaks, or multiple child code blocks,' + '\n' + 'into a single statement.',
          synref: 'first part of statement' + '\n' + '  maybe other stuff' + '\n' + '... continuing statement' + '\n' + '  perhaps additional stuff' + '\n' + '... and more of the statement.',
          detail: 'This is not considered good practice (period), as most overly complex statements should be' + '\n' + 'broken down into multiple statements (period), just like a run-on sentence should be' + '\n' + 'clarified by a good editor.' + '\n' + '' + '\n' + 'But should you really need it, it is there.' + '\n' + '' + '\n' + 'The three dot continuation must start at the same indent as the line it continues.' + '\n' + '' + '\n' + '    debug traits' + '\n' + '      name Sally' + '\n' + '      age 32' + '\n' + '      province QC' + '\n' + '    ... update traits' + '\n' + '      #cat' + '\n' + '      province ON' + '\n' + '' + '\n' + '    > { name: \'Sally\', age: 32, province: \'ON\', cat: true }' + '\n' + '' + '\n' + 'Or even:' + '\n' + '' + '\n' + '    debug 1' + '\n' + '    ... +' + '\n' + '    ... 2' + '\n' + '    ... +' + '\n' + '    ... 3' + '\n' + '' + '\n' + '    > 6' + '\n' + '' + '\n' + 'Syntactically, the continue is equivalent to a whitespace character with a bonus ability' + '\n' + 'to reset level of indent.' + '\n' + '' + '\n' + 'One more time; if you find yourself tempted to use a continue, take a hard look at the code you\'re' + '\n' + 'writing and see if it can\'t be written more clearly. It\'s okay to use more lines of code.' + '\n' + 'It\'s okay to use temporary variable names for clarity. It\'s okay to create clear and simple' + '\n' + 'subroutines. All of these things make for more maintainable code.' + '\n' + '' + '\n' + ''
        },
        '//': {
          title: '//',
          subtitle: 'source code comment indicator',
          summary: 'Two forward slashes indicate the start of a comment.',
          synref: '\/\/ any text goes here, is ignored through the end of line.',
          detail: 'Judicious comments that indicate _intent_ are a good idea. Commenting how everything works' + '\n' + 'minutely is not so good. If code function isn\'t clear, the code has a problem.' + '\n' + '' + '\n' + 'One gotcha with comments and \'\'\' here documents:' + '\n' + '' + '\n' + '    debug \'\'\'' + '\n' + '      This is a here document' + '\n' + '        // this is a comment line in the here document' + '\n' + '      // and so is this' + '\n' + '    // but this one is not in the document.' + '\n' + '      and it ends here.' + '\n' + '' + '\n' + '    > This is a here document' + '\n' + '    >   // this is a comment line in the here document' + '\n' + '    > // and so is this' + '\n' + '    > and it ends here.' + '\n' + '' + '\n' + 'Comments WITHIN the indentation bounds of a here document are included in the document as text.' + '\n' + '' + '\n' + 'Comments OUTSIDE the indentation bounds are treated as true comments.' + '\n' + '' + '\n' + ''
        },
        '0b': {
          title: '0b, 0o, 0x, and o',
          subtitle: 'binary, octal, hexadecimal and radian numeric literals',
          summary: 'Numeric literals in different formats.',
          synref: 'binary: 0b0101010101' + '\n' + 'octal: 0o01234567' + '\n' + 'hexadecimal: 0x0123456789abcdef' + '\n' + 'radians: 360o',
          detail: 'Numeric literals in a variety of formats are to be encouraged as a way of more clearly showing' + '\n' + 'data values.' + '\n' + '' + '\n' + '    debug 0b01011101' + '\n' + '    debug 0o777' + '\n' + '    debug 0xdeadbeef' + '\n' + '    debug 180o' + '\n' + '' + '\n' + '    > 93' + '\n' + '    > 511' + '\n' + '    > 3735928559' + '\n' + '    > 3.141592653589793' + '\n' + '' + '\n' + ''
        },
        ':': {
          subtitle: 'create an array or object literal',
          summary: 'The colon __:__ is used to begin the declaration of a data structure.',
          synref: '.. : [expr] (, [expr], [expr], ...) (;)          // array' + '\n' + '' + '\n' + '.. :' + '\n' + '  [expr] ( , [expr], ... )                       // array' + '\n' + ' ( [expr], [expr], ...' + '\n' + '   [expr]' + '\n' + '   ... )' + '\n' + '' + '\n' + '.. : [name] [expr], [name] [expr], ... (;)       // object' + '\n' + '' + '\n' + '.. :' + '\n' + '  [name] [expr] (, [name] [expr], ...)           // object' + '\n' + ' ( [name] [expr], [name] [expr], ...' + '\n' + '   [name] [expr]' + '\n' + '   ... )' + '\n' + '',
          detail: 'The **:** structure definition parser determines whether to create an array or fields by' + '\n' + 'whether or not a field name is included before the first expression.' + '\n' + '' + '\n' + '    debug :1, 2, 3;' + '\n' + '' + '\n' + '    debug:' + '\n' + '      1, 2' + '\n' + '      3' + '\n' + '' + '\n' + '    debug :a 1, b 2, c 3;' + '\n' + '' + '\n' + '    debug:' + '\n' + '      a 1' + '\n' + '      b 2' + '\n' + '      c 3' + '\n' + '' + '\n' + '    > [ 1, 2, 3 ]' + '\n' + '    > [ 1, 2, 3 ]' + '\n' + '    > { a: 1, b: 2, c: 3 }' + '\n' + '    > { a: 1, b: 2, c: 3 }' + '\n' + '' + '\n' + 'The semicolon at the end of the inline variety is not required except for clarity. Which means' + '\n' + 'it\'s a _really good idea_ to use it if the structure isn\'t the only thing on the line.' + '\n' + '' + '\n' + 'Give the documentation entry for __;__ a read to understand why!' + '\n' + '' + '\n' + ''
        },
        ';': {
          subtitle: 'structure definition closer',
          summary: 'Optional, closes the current structure definition when needed for clarity.',
          synref: '.. list a, b, c;' + '\n' + '.. array 1, 2, 3;' + '\n' + '.. traits a Apple, b Banana, c Cabbage;' + '\n' + '.. fields r colour.red, g colour.green, b colour.blue;' + '\n' + '.. :1, 1, 2, 3, 5, 8;' + '\n' + '.. :name \'Jane, age 45, city \'Halifax\';',
          detail: 'Only needed when there is additional code on the same line that might mistakenly' + '\n' + 'bind too tightly to the final value in the structure.' + '\n' + '' + '\n' + '    debug list 3, 2, 1 | by it' + '\n' + '    debug array 3, 2, 1 | by it' + '\n' + '    debug array 3, 2, 1; | by it' + '\n' + '' + '\n' + '    > [ 1, 2, 3 ]' + '\n' + '    > [ 3, 2, 1 ] // undesired result' + '\n' + '    > [ 1, 2, 3 ]' + '\n' + '' + '\n' + 'In the example above, the **list** literal sorts properly because **list** elements' + '\n' + 'are not allowed to be mathematical expressions, so the parser can correctly' + '\n' + 'bind `by it` to the entire list.' + '\n' + '' + '\n' + 'However, the first **array** literal _doesn’t_ sort correctly because array elements' + '\n' + 'can be expressions, and `by it` is binding to the final term in the literal. Thus, the' + '\n' + 'definition is parsed as `array (3), (2), (1 by it)`.' + '\n' + '' + '\n' + 'One can force **list** to parse incorrectly by using the **=** list element expression' + '\n' + 'evaluation flag, but that’s ridiculous.' + '\n' + '' + '\n' + '    debug list =3, =2, =1 | by it   // don\'t write code like this' + '\n' + '    debug list =3, =2, =1; | by it  // just don\'t' + '\n' + '' + '\n' + '    > [ 3, 2, 1 ]' + '\n' + '    > [ 1, 2, 3 ]' + '\n' + '' + '\n' + 'The semicolon can also close parameter lists if using the **from** form of function invocation. The following examples are identical:' + '\n' + '' + '\n' + '    set x to ~Math.sin(angle) * magnitude' + '\n' + '    set x from ~Math.sin angle; * magnitude' + '\n' + '' + '\n' + ''
        },
        '<-': {
          subtitle: 'calculation precedence modifier',
          summary: 'The _precedent_ operator, __<-__ ensures the expressions on the right is calculated before the expression on the left.',
          synref: '.. [expr] [operator1] <- [expr] [operator2] [expr]',
          detail: 'Useful when chaining operators of identical precedence, the after operator changes the order' + '\n' + 'of operations from left->right to right->left.  Effectively, the right side of the after operator' + '\n' + 'is wrapped in parenthesis.' + '\n' + '' + '\n' + '    debug 1 - 2 - 3' + '\n' + '' + '\n' + 'More to write...' + '\n' + '' + '\n' + ''
        },
        '?': {
          subtitle: 'safe fetch',
          summary: 'Adds extra type-checking to an expression ensuring that it will not throw an exception if roots are' + '\n' + 'undefined; instead just returning **undefined**.',
          synref: '.. ? [expr]',
          detail: 'Here\'s why you want this sometimes:' + '\n' + '' + '\n' + '    set a to undefined' + '\n' + '    debug a.a' + '\n' + '    // throws an exception' + '\n' + '' + '\n' + '    debug ?a.a' + '\n' + '    > undefined' + '\n' + '' + '\n' + 'Super helpful when building caches, for example.' + '\n' + '' + '\n' + ''
        },
        '@': {
          subtitle: 'context-aware scoping prefix',
          summary: 'Reference a trait or method attached to the current object. Equivalent to Javascript’s `this.`.',
          synref: '.. @' + '\n' + '.. @attribute' + '\n' + '@Task [parameters]',
          detail: 'Here\'s the thing. In SAI you almost never need to use @ (this). That is because the compiler' + '\n' + 'knows what your instance variables are. So it just assumes when you use the name of an instance' + '\n' + 'variable, that you mean _this_ instance.  If you want it to reference some other instance, use' + '\n' + 'the the dot accessor in the usual way.' + '\n' + '' + '\n' + 'Here’s a short implementation of a 2D vector by way of illustration.' + '\n' + '' + '\n' + '    object Vector2 1.0.0' + '\n' + '' + '\n' + '    instance:         // declare some member variables up front so the compiler knows what' + '\n' + '      x 0             // we are doing. Also so that other programmers, like future you,' + '\n' + '      y 0             // know what we are did.' + '\n' + '' + '\n' + '    angle set given radians' + '\n' + '      SetPolar radians, magnitude  // SetPolar is an instance method. No need for "@"' + '\n' + '    get' + '\n' + '      return from Math.atan2 y, x' + '\n' + '' + '\n' + '    magnitude set given units' + '\n' + '      SetPolar angle, units' + '\n' + '    get' + '\n' + '      return from Math.sqrt x*x + y*y' + '\n' + '' + '\n' + '    Instantiate task given x, y' + '\n' + '      // OH NO THIS IS A COMPILER ERROR because x and y are instance variables' + '\n' + '      // and you can\'t use instance variable names as parameters.  Try again!' + '\n' + '      // You also can\'t use them as renames for pronouns. The compiler tries very' + '\n' + '      // hard to keep you from stepping on yourself.' + '\n' + '' + '\n' + '    Instantiate task given px, py' + '\n' + '      if px isof \'Vector2\' // if we were passed an object' + '\n' + '        set x to px.x     // copy its values.' + '\n' + '        set y to px.y     // no "@" for our object, "px." for the other one.' + '\n' + '      else' + '\n' + '        set x to px' + '\n' + '        set y to py' + '\n' + '' + '\n' + '    SetXY task given px, py' + '\n' + '      set x to px' + '\n' + '      set y to py' + '\n' + '' + '\n' + '    SetPolar task given radians, units' + '\n' + '      set x to units * Math.cos(radians)' + '\n' + '      set y to units * Math.sin(radians)' + '\n' + '' + '\n' + '#### You need @ for inherited attributes' + '\n' + '' + '\n' + 'It\'s worth noting that you can use @ if you want to. And sometimes, you must.' + '\n' + 'You can avoid the user of @ for member variables/methods only on variables/methods defined' + '\n' + 'in the same source file. Inherited members must be referenced with @.' + '\n' + '' + '\n' + 'This was borne of laziness in writing the compiler BUT ALSO it has the interesting property' + '\n' + 'of making it explicit in the source code where the use of an object member is _inherited_ vs' + '\n' + 'when it is not.  So for the moment I\'m happy that it\'s like this.' + '\n' + '' + '\n' + '#### Advanced information' + '\n' + '' + '\n' + 'Internally, @ always points to a variable that has been _assigned_ from the JS value' + '\n' + 'of `this`. It doesn\'t reference `this.` directly. In ever member function definition of the compiled' + '\n' + 'JS object code, you\'ll see this bit of code in the local variable declarations:' + '\n' + '' + '\n' + '    $ = this[\'Dedenter\'] ? this : $bindfail(\'Dedenter\')' + '\n' + '' + '\n' + 'This does a couple things -- first, it verifies the `this` object is actually a kind of object' + '\n' + 'we\'re expecting, that is, that the object has a member attribute that matches the function name.' + '\n' + '(If not, it throws a "binding fail" message.)' + '\n' + '' + '\n' + 'But if the test is successful, the `this` value is' + '\n' + 'assigned to our work variable `$`. Whenever you use reference member attributes in your code,' + '\n' + 'you\'re actually referencing the attributes of the `$` variable, not of `this`.' + '\n' + '' + '\n' + 'This captures the instance that was active at the start of the function call. If we' + '\n' + 'did not do this, and just used `this.` then it is very likely that asynchronous callbacks to functions' + '\n' + 'defined in the method would lose their object context -- because _callbacks are almost always unbound_ from' + '\n' + 'an object.' + '\n' + '' + '\n' + 'So, instead of forcing you to use that ugly-ass `self` workaround, SAI just does the work for you and' + '\n' + 'always captures the `this` value, because it\'s really unlikely that you wouldn\'t want it to work this' + '\n' + 'way anyhow.' + '\n' + '' + '\n' + 'And if, in case, you did, you could use the __@@__ prefix, or the __orphan__ keyword.' + '\n' + '' + '\n' + ''
        },
        '@@': {
          subtitle: 'context-ignoring scoping prefix',
          summary: 'Maps directly to Javascript\'s `this`, the context-ignorant object scope.',
          synref: '.. @@' + '\n' + '.. @@attribute' + '\n' + '@@Task [parameters]',
          detail: 'Used inside called functions to refer to the "this" object in the scope of the call,' + '\n' + 'rather than the scope of the function definition.' + '\n' + '' + '\n' + 'You can use the __orphan__ statement to force decontextualization of the usual' + '\n' + '"this" scope. Have a look at that entry for info.' + '\n' + '' + '\n' + ''
        },
        '[': {
          title: '[ ]',
          subtitle: 'attribute lookup',
          summary: 'Performs an indirect lookup of a trait/element in the given value.',
          synref: '.. [value] \'[\' [expr] \']\'',
          detail: 'The following debug statements print identical results.' + '\n' + '' + '\n' + '    set field to \'name\'' + '\n' + '    set friend to friends[0]' + '\n' + '' + '\n' + '    debug friend.name' + '\n' + '    debug friend[\'name\']' + '\n' + '    debug friend[\'na\'+\'me\']' + '\n' + '    debug friend[field]' + '\n' + '    debug friend\\field' + '\n' + '' + '\n' + '    // prints \'Sara\' five times.' + '\n' + '' + '\n' + ''
        },
        'from': {
          subtitle: 'function invocation',
          summary: '**From** invokes the identifier as a function call that returns a value, passing in any parameters that follow.' + '\n' + '',
          synref: '.. from [identifier] ([parameters]) (;)',
          detail: 'It is the preferred syntax for function calls that include indents, as it is difficult to close a parenthesis.' + '\n' + '' + '\n' + 'The following calls are synonymous:' + '\n' + '' + '\n' + '    set record !cursor.FetchRow' + '\n' + '    set record from cursor.FetchRow' + '\n' + '    set record to cursor.FetchRow()' + '\n' + '' + '\n' + '    set cursor !db.Query \'select * from names\'' + '\n' + '    set cursor from db.Query \'select * from names\'' + '\n' + '    set cursor to db.Query(\'select * from names\')' + '\n' + '' + '\n' + '**From** is the encouraged form for **set** statements because it allows a more natural reading of source code. __From__ indicates that the identifier that follows will be used as a verb and returning a value.' + '\n' + '' + '\n' + 'Neither **From** nor parenthesis are needed when the verb begins the line as in the `cursor.Close` statement below.' + '\n' + '' + '\n' + '    set cursor from db.Query \'select * from names\'' + '\n' + '    set records from cursor.FetchAll' + '\n' + '    cursor.Close' + '\n' + '' + '\n' + 'If you wish to use **from** in a continuing expression, close the parameter clause with a semicolon (like you\'d close a structural literal). The following two examples are equivalent.' + '\n' + '' + '\n' + '    set @x to Math.sin($angle) * $magnitude' + '\n' + '    set @x from Math.sin $angle; * $magnitude' + '\n' + '' + '\n' + 'Both __from__ and __!__ (bang) do the same thing.' + '\n' + '' + '\n' + ''
        },
        '~': {
          subtitle: 'global scoping prefix',
          summary: 'Use `~` in front of an identifier to access an object defined globally, e.g. by the runtime environment.',
          synref: '.. ~GlobalIdentifier',
          detail: 'You must use `~` in each of the following examples:' + '\n' + '' + '\n' + '    set validated to ~parseInt(raw)' + '\n' + '    ~process.exit 1' + '\n' + '    set attendees to new ~Set' + '\n' + '    set func to new ~Function(arg1, src)' + '\n' + '' + '\n' + 'You do not need to use `~` on file-level pseudo-globals defined with `reference`; it is only required' + '\n' + 'for functions/values/objects that originate outside SAI.' + '\n' + '' + '\n' + ''
        },
        '|': {
          subtitle: 'pipe operator prefix',
          summary: 'The pipe character is a scoping prefix for second-class operators defined with the _piper_ system.',
          synref: '.. | [operator name] [clauses] ...',
          detail: 'A note about order of operations.' + '\n' + '' + '\n' + 'Pipers are processed left-to-right, as if data were feeding through a series of tubes, or machines' + '\n' + 'that slurped up what\'s given on the left and spits it out to the next machine along the line or as the' + '\n' + 'result of the operation.' + '\n' + '' + '\n' + 'Be sure when you\'re coding that you\'re aware of the order of operations, especially in a set statement.' + '\n' + 'For example, this may not produce what you want:' + '\n' + '' + '\n' + '    set a list 1, 2, 3' + '\n' + '    set b list 4, 5, 6' + '\n' + '' + '\n' + '    set a | concat b | thru it * 2' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > [ 2, 4, 6, 8, 10, 12 ]' + '\n' + '' + '\n' + 'Were you expecting this:' + '\n' + '' + '\n' + '    > [ 1, 2, 3, 8, 10, 12 ]' + '\n' + '' + '\n' + 'Keep in mind that the flow of data is left to right, and in a self-modifying __set__ statement' + '\n' + 'the assignment happens at the end. These are the same:' + '\n' + '' + '\n' + '    set a | concat b | thru it * 2' + '\n' + '    set a to a | concat b | thru it * 2' + '\n' + '' + '\n' + 'If you want that construct to work the other way, use parenthesis, or the "precedent" syntax:' + '\n' + '' + '\n' + '    set a | concat ( b | thru it * 2 )' + '\n' + '    set a | concat <- b | thru it * 2' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
        }
      },
      'keywords': {
        '$$': {
          subtitle: 'function arguments pseudo-array',
          summary: 'Equivalent to Javascript’s `arguments` and can be used the same way.',
          synref: '.. $$',
          detail: 'Best to refer to good documentation on this elsewhere.' + '\n' + '' + '\n' + ''
        },
        'adopt': {
          subtitle: 'part of the promise keyword',
          summary: 'Please read __promise__ for more.',
          synref: '.. promise (given [parameters]) adopt [expression]' + '\n' + '',
          detail: 'Intentionally left blank.' + '\n' + '' + '\n' + ''
        },
        'all': {
          subtitle: 'part of the promise keyword',
          summary: 'Please read __promise__ for more.',
          synref: '.. promise (given [parameters]) all [array-expression]',
          detail: 'Intentionally left blank.' + '\n' + '' + '\n' + ''
        },
        'any': {
          subtitle: 'part of the promise keyword',
          summary: 'Please read __promise__ for more.',
          synref: '.. promise (given [parameters]) any [array-expression]',
          detail: 'Intentionally left blank.' + '\n' + '' + '\n' + ''
        },
        'array': {
          subtitle: 'expression-oriented list literal',
          summary: 'Used to specify the creation of a plain array of mathematical values; e.g. the result of a series' + '\n' + 'of expressions. As opposed to **list**, which is a plain array of bare literals.',
          synref: '.. array [expr], [expr], ... (;)' + '\n' + '.. array' + '\n' + '  [expr], [expr], ...' + '\n' + '  [expr]' + '\n' + '  ...',
          detail: 'In general, the **colon** structure constructor will figure out what you want, but when you want' + '\n' + 'to be specific about creating an array of expressions, use **array**. Compare with **list**,' + '\n' + '**fields** and **traits**.' + '\n' + '' + '\n' + 'Arrays may be specified on one line:' + '\n' + '' + '\n' + '    debug array 1+1, 2*3, \'Fred\'' + '\n' + '' + '\n' + '    > [ 2, 6, ‘Fred’ ]' + '\n' + '' + '\n' + 'Or multiple lines in the form of an indented block:' + '\n' + '' + '\n' + '    debug array' + '\n' + '      width * ~Math.cos(angle)' + '\n' + '      height * ~Math.sin(angle)' + '\n' + '' + '\n' + '    > [  7.0710678118654755, 3.5355339059327373 ]' + '\n' + '' + '\n' + 'Or a combination of both:' + '\n' + '' + '\n' + '    debug array' + '\n' + '      1, 1, 2, 5' + '\n' + '      14, 42, 132, 429' + '\n' + '      1430, 4862' + '\n' + '' + '\n' + 'When using an array literal in an expression that might make the end of the array a matter of question, use a **semicolon** to close the array literal:' + '\n' + '' + '\n' + '    debug array 5, 3, 2, 7, 4; has it%2' + '\n' + '' + '\n' + '    > [ 5, 3, 7 ]' + '\n' + '' + '\n' + 'Or enclose the array in parenthesis:' + '\n' + '' + '\n' + '    debug (array  4, 3, 2, 1) by it' + '\n' + '' + '\n' + '    > [ 1, 2, 3, 4 ]' + '\n' + '' + '\n' + 'Arrays can be nested by use of either parenthesis or semicolons, or by using multiple levels of indent. Note that commas separate expressions on one line but are not included at the end of a line.' + '\n' + '' + '\n' + '    debug array' + '\n' + '      array 1, 2, 3;, array 4, 5, 6' + '\n' + '      array' + '\n' + '        7, 8, 9' + '\n' + '' + '\n' + '    > [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]' + '\n' + '' + '\n' + ''
        },
        'as': {
          subtitle: 'pronoun renaming clause',
          summary: 'As declares named locally scoped variables within a code block based on values passed into the block.' + '\n' + '(In general, **as** is optional because one can usually access such passed-in values through pronouns.)',
          synref: '.. [pipe operator] as var1, var2, etc...' + '\n' + '.. [construct] as var1, var2, etc...' + '\n' + '.. ( [expression] as var 1)',
          detail: '**As** can be used in conjunction with almost any SAI function that creates pronouns.  You use __as__ to' + '\n' + 'give those pronouns specific names, rather than the generic ones. Named pronouns are generally ephemeral.' + '\n' + '' + '\n' + '    // incomplete list' + '\n' + '    switch [expr] (as [trial var])' + '\n' + '    catch (as [error var])' + '\n' + '    if [expression] (as [trial var])' + '\n' + '    exists [expression] (as [it var])' + '\n' + '    with [expression] (as [it var])' + '\n' + '' + '\n' + 'An example of **if** value reclamation with **as**:' + '\n' + '' + '\n' + '    if @keydown as charcode' + '\n' + '      switch charcode' + '\n' + '        case 27' + '\n' + '          @Escape' + '\n' + '        case 32' + '\n' + '          @Continue' + '\n' + '' + '\n' + 'Every construct that can accept __as__ pronoun renaming will indicate this in the documentation.' + '\n' + '' + '\n' + '#### as with iterators' + '\n' + '' + '\n' + '    // incomplete list' + '\n' + '    iterate [expr] (as [it var])' + '\n' + '    each [expr] (as [it var] (, [key var] ) )' + '\n' + '    ply [expr] (as [it ident] (, [key var] ) )' + '\n' + '    count [expr] (as [counter var])' + '\n' + '' + '\n' + 'An example, renaming **it** and **key** in an each iterator:' + '\n' + '' + '\n' + '    each friends first as value, field' + '\n' + '      debug `\${field}: \${value}' + '\n' + '' + '\n' + '    > name: Sara' + '\n' + '    > age: 23' + '\n' + '    > cat: true' + '\n' + '    > province: ON' + '\n' + '' + '\n' + '#### as with comprehensions' + '\n' + '' + '\n' + '    // incomplete list' + '\n' + '    .. | by (as [a var], [b var] )' + '\n' + '    .. | thru (as [it var] (, [key var] ) )' + '\n' + '    .. | audit (as [it ident] (, [key var] ) )' + '\n' + '    .. | into [expr] (as [sum var] (, [it var] (, [key var] ) ) )' + '\n' + '' + '\n' + 'An example, renaming **it** and **key** in the block handler of a **thru** comprehension:' + '\n' + '' + '\n' + '    debug friends | thru as friend, index' + '\n' + '      return `\${index}) \${friend.name} lives in \${friend.province}' + '\n' + '' + '\n' + '    > [ \'0) Sara lives in ON\',' + '\n' + '        \'1) Jon lives in QC\',' + '\n' + '        \'2) Ellie lives in QC\',' + '\n' + '        \'3) Marshal lives in ON\',' + '\n' + '        \'4) Doug lives in ON\',' + '\n' + '        \'5) Ann lives in QC\',' + '\n' + '        \'6) Harry lives in QC\',' + '\n' + '        \'7) Jenna lives in ON\' ]' + '\n' + '' + '\n' + '#### as parenthetic' + '\n' + '' + '\n' + '    .. ( [expr] as [var] )' + '\n' + '' + '\n' + 'The parenthetic **as** assigns the value of the parenthesised expression to a named identifier. The assignment happens as soon as the parethesis is evaluated, so you can use the identifier in the same expression as the parenthetical, as long as the parenthetical is evaluated first.  _This is not a good style of coding_.' + '\n' + '' + '\n' + '    set six to (1+2 as three)+three' + '\n' + '    debug array three, six' + '\n' + '' + '\n' + '    > [ 3, 6 ]' + '\n' + '' + '\n' + ''
        },
        'blank': {
          subtitle: 'an object with no traits',
          summary: 'The keyword **blank** creates a plain object with no traits.',
          synref: '.. blank',
          detail: 'It is the SAI equivalent of Javascript’s `{}`.' + '\n' + '' + '\n' + '    set player to blank' + '\n' + '    set player.age to 21' + '\n' + '    debug player' + '\n' + '' + '\n' + '    > { age: 21 }' + '\n' + '' + '\n' + 'Contrast __blank__ with __empty__.  A whiteboard can be blank; having nothing written on it.' + '\n' + 'You would not usually say it was empty.  While an array or a list is usually thought of as empty,' + '\n' + 'rather than blank.' + '\n' + '' + '\n' + ''
        },
        'chain': {
          subtitle: 'verb chain initiation',
          summary: 'summary',
          synref: '.. chain [expr]             // in an expression' + '\n' + '  [comprehension/method]' + '\n' + '  [comprehension/method]' + '\n' + '  ...' + '\n' + '' + '\n' + 'chain [expr]                // as a verb' + '\n' + '  [comprehension/method]' + '\n' + '  ...' + '\n' + '',
          detail: 'The **chain** clause allows you to compose (string together) a series of operations that will' + '\n' + 'each be applied in turn to a value, object, collection or iterator.' + '\n' + '' + '\n' + '**Chain** is another way of writing `value.method().method().method().method()` that offers cleaner' + '\n' + 'code and more possibilities. You start with an object, then apply a sequence of verbs to it. Each verb' + '\n' + 'is a new link in the chain.' + '\n' + '' + '\n' + '    set mirror to task' + '\n' + '      return chain $' + '\n' + '        split \'\'' + '\n' + '        reverse' + '\n' + '        join \'\'' + '\n' + '    debug mirror(\'A man, a plan, a canal, Panama!\')' + '\n' + '' + '\n' + '    > !amanaP ,lanac a ,nalp a ,nam A' + '\n' + '' + '\n' + 'In the previous case, each verb was a trait (a method) of the string itself.' + '\n' + '' + '\n' + 'You can also chain pipe operators:' + '\n' + '' + '\n' + '      debug chain friends' + '\n' + '        | has .cat' + '\n' + '        | by .name' + '\n' + '        | thru \'My friend \${.name} likes cats.\'' + '\n' + '' + '\n' + '      > [ \'My friend Ann likes cats.\',' + '\n' + '      >   \'My friend Jon likes cats.\',' + '\n' + '      >   \'My friend Sara likes cats.\' ]' + '\n' + '' + '\n' + 'And because one of the pipers is **set**, you can actually chain any function at all.' + '\n' + '' + '\n' + '    set double to task' + '\n' + '      return chain empty' + '\n' + '        concat $' + '\n' + '        concat $' + '\n' + '' + '\n' + '    debug chain fruit' + '\n' + '      | set double(it)' + '\n' + '' + '\n' + '    > [ \'Apple\',' + '\n' + '        \'Banana\',' + '\n' + '        \'Citron\',' + '\n' + '        \'Apple\',' + '\n' + '        \'Banana\',' + '\n' + '        \'Citron\' ]' + '\n' + '' + '\n' + 'Functions you use in **chain** typically return a value; this is used as the object to pass to' + '\n' + 'the next link in the chain. However, some methods and functions don\'t return a value, instead' + '\n' + 'modifying their context in-place. If a function returns **undefined**, **chain** will reuse the' + '\n' + 'previous object for the next call.' + '\n' + '' + '\n' + '_Be careful: some built-in methods return unexpected values that can foil **chain**.' + '\n' + 'For example, **Array.push** is very irritating for this; you cannot chain **.push** because it' + '\n' + 'returns the new array length instead of either the array or **undefined**._' + '\n' + '' + '\n' + '#### chain as a verb' + '\n' + '' + '\n' + 'You can also use `chain` as a verb, that is, at the beginning of a line. This is useful when the' + '\n' + 'end result of the chain isn\'t useful but the intermediate results are, which can often be the case' + '\n' + 'when parsing data.' + '\n' + '' + '\n' + '    set population empty' + '\n' + '    chain friends' + '\n' + '      audit' + '\n' + '        inc population[.province] to (self default 0) + 1' + '\n' + '    debug population' + '\n' + '' + '\n' + '    > [ ON: 4, QC: 4 ]' + '\n' + '' + '\n' + 'Arguably it might be better to code this particular example with a discrete iterator statement' + '\n' + 'like `ply`, but not every use case is as trivial as this example.' + '\n' + '' + '\n' + '_Note: If you use chain as a verb in this way, and the final result of the chain is a generator,' + '\n' + 'it will be drained automatically._ Otherwise, the code within the chain may never be executed,' + '\n' + 'because without a drain, generators do nothing.' + '\n' + '' + '\n' + ''
        },
        'contract': {
          subtitle: 'requirements for child objects',
          summary: 'When defining an object, **contract** is used to specify tasks or traits that _children_ inheriting' + '\n' + 'from this object are intended to implement.',
          synref: 'contract:' + '\n' + '  [task/trait name]' + '\n' + '  [task/trait name]' + '\n' + '  ...',
          detail: 'Inheriting from an object that has contracts, and then not providing implementations for those contracts,' + '\n' + 'will result in a SAI exception.' + '\n' + '' + '\n' + '    object fruit' + '\n' + '    contract:' + '\n' + '      Consume' + '\n' + '' + '\n' + '    object apple' + '\n' + '    inherit:' + '\n' + '     fruit' + '\n' + '    Consume task' + '\n' + '      debug \'You ate an apple.\'' + '\n' + '' + '\n' + '    object pear' + '\n' + '    inherit:' + '\n' + '      fruit' + '\n' + '' + '\n' + '    > exception thrown: “SAI: Contractually required task ‘Consume’ does not exist in object ‘pear’.”' + '\n' + '' + '\n' + ''
        },
        'empty': {
          subtitle: 'an array with no items',
          summary: 'A literal value indicating an empty list/array.',
          synref: '.. empty',
          detail: 'The equivalent of Javascript’s `[]`, **empty** creates an Array with no elements.' + '\n' + '' + '\n' + '    debug empty' + '\n' + '    debug empty.length' + '\n' + '' + '\n' + '    > []' + '\n' + '    > 0' + '\n' + '' + '\n' + ''
        },
        'enum': {
          subtitle: 'literal number enumeration',
          summary: 'A convenience tool for initializing objects with sequential values.',
          synref: 'fields [identifier] enum, ( [identifier] enum, ... )',
          detail: 'When declaring a set of fields, specifies a value 1 higher than the value of the previous' + '\n' + 'definition. If there is no previous definition, 1.' + '\n' + '' + '\n' + '  debug fields a enum, b enum, c 10, d enum' + '\n' + '' + '\n' + '  > { a: 1, b: 2, c:10, d: 11}' + '\n' + '' + '\n' + ''
        },
        'exists': {
          subtitle: 'check for undefined',
          summary: 'Returns true if the following expression is _not_ `undefined`.',
          synref: '.. exists [expr]',
          detail: 'These three comparisons test the same thing and have the same effect:' + '\n' + '' + '\n' + '    if undefined isnt var' + '\n' + '      ...' + '\n' + '    if exists var    // unary operator' + '\n' + '      ...' + '\n' + '    exists var       // flow control construct' + '\n' + '      ...' + '\n' + '' + '\n' + 'The unary operator can be used in expressions, e.g.' + '\n' + '' + '\n' + '    unless exists .name and exists .age' + '\n' + '      return: error "Name and age are required."' + '\n' + '' + '\n' + ''
        },
        'expects': {
          subtitle: 'runtime paramater type validation',
          summary: 'Used to check whether a function’s named parameters (or any arbitrary object) has certain' + '\n' + 'traits, and optionally if those traits are of a particular type.',
          synref: '... task/promise/process expects [rules definition]',
          detail: 'When used as the clause in a **task**, **promise** or **process** function definition. **expects**' + '\n' + 'adds run-time parameter checking to the function, passing the first argument (the one that holds' + '\n' + 'named parameters) through an *expects check* based on the rules that follow. If any expectations' + '\n' + 'are not met, a runtime error is thrown.' + '\n' + '' + '\n' + 'Names appearing in **expects** clauses, and thus being used to check parameters, _must_ be' + '\n' + 'preceeded by **$**. This is intended as a reminder that *named parameters are always' + '\n' + 'referenced with the $ scoping operator*.' + '\n' + '' + '\n' + '#### expects rules' + '\n' + '' + '\n' + 'Rules for **expects** take the form of a set of traits. Their names correspond to names of' + '\n' + 'traits that must be found in the expression under test. The value, if not _true_, is interpreted' + '\n' + 'as an object type; the trait must be of that type (or a child of that type).' + '\n' + '' + '\n' + 'Any violations to the rules in a function call results in an error being thrown describing the problem.' + '\n' + '' + '\n' + 'Here\'s an example:' + '\n' + '' + '\n' + '    AddStudent task expects $name string, $age number' + '\n' + '      @students.push copy $' + '\n' + '    ..' + '\n' + '    @AddStudent name \'Sally\', age \'12\'' + '\n' + '' + '\n' + '    > Error: SAI: parameter exception in AddStudent' + '\n' + '    > age should be number, but it\'s string' + '\n' + '' + '\n' + 'Expects adds a small amount of overhead at runtime. My thinking is that it would be good for integration' + '\n' + 'testing but during a production build the checks would be commented out, like one might do with assertions.' + '\n' + 'This would be a nice option to add to the SAI compiler someday.' + '\n' + '' + '\n' + ''
        },
        'false': {
          subtitle: 'boolean value false',
          summary: 'This is the `false` value.',
          synref: '.. false',
          detail: 'The opposite of __true__.' + '\n' + '' + '\n' + ''
        },
        'fields': {
          subtitle: 'structure literal',
          summary: 'Used to specify the creation of a plain object with a set of key/value pairs. (Contrast with **traits**.)',
          synref: '.. fields [key] [expr], [key] [expr], ... (;)' + '\n' + '.. fields' + '\n' + '  [key] [expr], [key] [expr], ...' + '\n' + '  [key] [expr]' + '\n' + '  ...',
          detail: 'In general, the **colon** structure constructor will figure out what you want, but when you want to be' + '\n' + 'specific about creating a plain object with of keyed values & expressions, use **fields**. Compare' + '\n' + 'with **list**, **array** and **traits**.' + '\n' + '' + '\n' + 'The **key** is an identifying word or other string, specified without quotes (although quotes may be used' + '\n' + 'if desired/necessary). If a **#** preceeds the key (a hashtag), the key will be assigned a' + '\n' + 'value of **true**. The **expr** is any valid literal, variable, object or expression.' + '\n' + '' + '\n' + 'Fields may be specified on one line:' + '\n' + '' + '\n' + '    fields name \'Sera\', class \'Rogue\', level 21, #focus' + '\n' + '' + '\n' + '    > { class: \'Rogue\', level: 21, name: \'Sera\', focus: true }' + '\n' + '' + '\n' + 'Or multiple lines in the form of an indented block:' + '\n' + '' + '\n' + '    fields' + '\n' + '      x width * ~Math.cos(angle)' + '\n' + '      y height * ~Math.sin(angle)' + '\n' + '' + '\n' + '    > { x: 0.5, y: 0.866 }' + '\n' + '' + '\n' + 'Or a combination of both:' + '\n' + '' + '\n' + '    fields' + '\n' + '      str 16, dex 34, mag 14   // no comma at end of line' + '\n' + '      con 42, wil 21, cun 45' + '\n' + '' + '\n' + '    > { str: 16, dex: 34, mag: 14, con: 42, wil: 21, cun: 45 }' + '\n' + '' + '\n' + 'When using a fields literal in an expression that might make the end of the literal a matter of question,' + '\n' + 'use a **semicolon** to close the literal, or enclose it in parenthesis:' + '\n' + '' + '\n' + '    fields x 5, y 4, z 3; thru it*2' + '\n' + '    (fields x 5, y 4, z 3) thru it *2' + '\n' + '' + '\n' + '    > { x: 10, y: 8, z: 6 }' + '\n' + '' + '\n' + 'Fields initializers can be nested by use of either parenthesis or semicolons, or by using multiple' + '\n' + 'levels of indent.' + '\n' + '' + '\n' + ''
        },
        'get': {
          subtitle: 'dynamic object attribute',
          summary: 'Declares a _getter_ for a dynamic object trait; that is, a trait that has a value that is only' + '\n' + 'calculated upon request.',
          synref: 'object [name] [version]' + '\n' + '' + '\n' + '[ident] get' + '\n' + '  [code]' + '\n' + '  return [value]' + '\n' + '( set ( given [ident] )' + '\n' + '  [code]',
          detail: 'A brief example:' + '\n' + '' + '\n' + '    object Vector2 1.0.0' + '\n' + '' + '\n' + '    magnitude get     // dynamic getter for \'magnitude\' trait' + '\n' + '      return Math.sqrt(x*x + y*y)' + '\n' + '    set given m       // dynamic setter for \'magnitude\' trait' + '\n' + '      set a to angle' + '\n' + '      set x to m * Math.cos(a)' + '\n' + '      set y to m * Math.sin(a)' + '\n' + '' + '\n' + 'You can have a getter without a setter, and a setter without a getter.' + '\n' + '' + '\n' + '    documentation get' + '\n' + '      return \'\'\'' + '\n' + '        Lots of information about this object.' + '\n' + '' + '\n' + '    tally set given token' + '\n' + '      inc _tally\token' + '\n' + '' + '\n' + ''
        },
        'given': {
          subtitle: 'parameter declaration and static values',
          summary: 'Use __given__ to name the parameters to a function, and to define immutable traits.',
          synref: '.. given p1, p2, p3 ...' + '\n' + '' + '\n' + '  - or -' + '\n' + '' + '\n' + '[ object declaration ]' + '\n' + 'given [definition of values]',
          detail: 'To declare parameters:' + '\n' + '' + '\n' + '    set [ident] (given [$ var]) // dynamic trait' + '\n' + '    .. task (given [parameter1], [parameter2], ...)' + '\n' + '    .. process (given [parameter1], [parameter2], ...)' + '\n' + '    .. promise (given [parameter1], [parameter2], ...)' + '\n' + '' + '\n' + 'An example of parameter naming:' + '\n' + '' + '\n' + '    set tally to blank' + '\n' + '    set AddRow to task given item, quantity' + '\n' + '      set tally[item] to (self default 0) + quantity' + '\n' + '' + '\n' + '    AddRow \'socks\', 3' + '\n' + '    AddRow \'pants\', 6' + '\n' + '    debug tally' + '\n' + '' + '\n' + '    > { socks: 3, pants: 6 }' + '\n' + '' + '\n' + '#### given object constants' + '\n' + '' + '\n' + 'Defines immutable traits when declaring an object. These traits are assigned to the object prototype' + '\n' + 'itself and locked/frozen; they cannot be changed and yet are available in every instance of an' + '\n' + 'object. Givens are useful for static data.' + '\n' + '' + '\n' + '    object Apple' + '\n' + '    instance: varietal \'unknown\'' + '\n' + '    given: species \'M. domestica\'' + '\n' + '    Describe task' + '\n' + '      return \'' + $.species + ' var ' + $.varietal + '\n' + '    ..' + '\n' + '    set apple to create \'Apple\'' + '\n' + '    set apple.varietal to \'Macintosh\'' + '\n' + '    debug from apple.Describe' + '\n' + '    > M. domestica var Macintosh' + '\n' + '' + '\n' + '**Given** traits can only be changed/overridden through inheritance.' + '\n' + '' + '\n' + '    object Crabapple' + '\n' + '    inherit: Apple' + '\n' + '    given: species \'M. coronaria\'' + '\n' + '    ..' + '\n' + '    set specimen to create \'Crabapple\'' + '\n' + '    debug from specimen.Describe' + '\n' + '    > \'M. coronaria var unknown\'' + '\n' + '' + '\n' + ''
        },
        'Infinity': {
          subtitle: 'constant representing infinity',
          summary: 'Represents an infinitely large value.',
          spnref: '.. Infinity',
          detail: 'Generally obtained by attempting to evaluate an expression with a divisor of zero.' + '\n' + '' + '\n' + '    debug 1/0' + '\n' + '' + '\n' + '    > Infinity' + '\n' + '' + '\n' + ''
        },
        'inherit': {
          subtitle: 'class heritage specification',
          summary: 'Specify inheritance during object definition.',
          synref: 'inherit:' + '\n' + '  [classname]' + '\n' + '  ...',
          detail: 'An object can have multiple parents at each level of inheritance, as in the following example.' + '\n' + '' + '\n' + '    object Licensed' + '\n' + '    instance: licenseTag false' + '\n' + '    ..' + '\n' + '    object Passengers' + '\n' + '    instance: paxCount 0' + '\n' + '    contract: paxMaximum' + '\n' + '    ..' + '\n' + '    object Automobile' + '\n' + '    inherit: Licensed, Passengers' + '\n' + '    ..' + '\n' + '    object Sedan' + '\n' + '    inherit: Automobile' + '\n' + '    instance: paxMaximum 6' + '\n' + '    ..' + '\n' + '    set myCar to create \'Sedan\'' + '\n' + '    debug myCar' + '\n' + '    > { licenseTag: false, paxCount: 0, paxMaximum: 6 }' + '\n' + '' + '\n' + '    debug myCar.isa' + '\n' + '    > Sedan' + '\n' + '' + '\n' + '    debug myCar.isof' + '\n' + '    > { Licensed:' + '\n' + '       { version: \'0.0.0-unspecified\',' + '\n' + '         isa: \'Licensed\',' + '\n' + '         load: \'./sample/Keywords/Licensed.sai\' },' + '\n' + '      Passengers:' + '\n' + '       { version: \'0.0.0-unspecified\',' + '\n' + '         isa: \'Passengers\',' + '\n' + '         load: \'./sample/Keywords/Passengers.sai\' },' + '\n' + '      Automobile:' + '\n' + '       { version: \'0.0.0-unspecified\',' + '\n' + '         isa: \'Automobile\',' + '\n' + '         load: \'./sample/Keywords/Automobile.sai\',' + '\n' + '         inherit: [ \'Licensed\', \'Passengers\' ] },' + '\n' + '      Sedan:' + '\n' + '       { version: \'0.0.0-unspecified\',' + '\n' + '         isa: \'Sedan\',' + '\n' + '         load: \'./sample/Keywords/Sedan.sai\',' + '\n' + '         inherit: [ \'Automobile\' ] } }' + '\n' + '' + '\n' + 'Note the use of **contract** in the _Passengers_ object; this requires any child object to offer' + '\n' + 'a `paxMaximum` trait. Contracts can be fulfilled by class functions (**task**/**process**/**promise**),' + '\n' + 'class traits (**given**) or **instance** traits.' + '\n' + '' + '\n' + ''
        },
        'instance': {
          subtitle: 'object instance variable declaration',
          summary: 'Define initial values for an object’s traits.',
          synref: 'instance:' + '\n' + '  [varname] [initial value]' + '\n' + '  ...',
          detail: 'When an object is created, instance traits are assigned the given values before the' + '\n' + 'object’s **Instantiate** task is called.' + '\n' + '' + '\n' + '    object Sock 1.0.0' + '\n' + '' + '\n' + '    instance:' + '\n' + '      colour \'Brown\'' + '\n' + '      pattern \'Argyle\'' + '\n' + '      size \'M\'' + '\n' + '      kind \'dress\'' + '\n' + '' + '\n' + '    Instantiate task' + '\n' + '      debug @ select list colour, pattern, size, kind' + '\n' + '' + '\n' + '    ....' + '\n' + '' + '\n' + '    set aSock to create \'Sock\'' + '\n' + '    > { colour: \'Brown\', pattern: \'Argyle\', size: \'M\', kind: \'dress\' }' + '\n' + '' + '\n' + 'Instance traits, when declared with __instance__ or __given__, do not need to have their scope' + '\n' + 'indicated with `@` when used in their own object. Said another way, declared instance variables' + '\n' + 'are automatically scoped to the object. This is similar to the way that __reference__ values' + '\n' + 'don\'t need to use the `~` global scoping prefix.' + '\n' + '' + '\n' + 'The following are equivalent:' + '\n' + '' + '\n' + '    instance:' + '\n' + '      x 0' + '\n' + '      y 0' + '\n' + '' + '\n' + '    ...' + '\n' + '' + '\n' + '    set x 34' + '\n' + '    set @x 34          // this is not necessary' + '\n' + '    set @\'s x 34       // sweet jesus don\'t do this' + '\n' + '' + '\n' + 'When referring to another object\'s instance variables, you will need to properly scope them:' + '\n' + '' + '\n' + '    CopyPoint given point' + '\n' + '      set x to point.x' + '\n' + '      set y to point.y' + '\n' + '' + '\n' + 'Instance variables cannot be initialized with functions or "complex" expressions. The compiler will' + '\n' + 'warn you about it. Nevertheless, you should still declare all instance variables, even if you must start' + '\n' + 'them with `undefined`. That\'s because the compiler looks at the instance variables you\'ve declared to' + '\n' + 'know what your instance variables are.' + '\n' + '' + '\n' + '    object AppleCrate' + '\n' + '' + '\n' + '    instance:' + '\n' + '      sku \'448893003\'' + '\n' + '      label ~GetLabel(.sku)  /// this won\'t work, instead:' + '\n' + '' + '\n' + '' + '\n' + '    instance:' + '\n' + '      sku \'448893003\'' + '\n' + '      label undefined' + '\n' + '' + '\n' + '    Instantiate task' + '\n' + '      set label ~GetLabel(.sku)' + '\n' + '' + '\n' + ''
        },
        'isa': {
          title: '.isa',
          subtitle: 'object name attribute',
          summary: 'All prototyped SAI objects have an **isa** trait that identifies the object name.',
          synref: '.. [object].isa',
          detail: 'Further details about the object and its inheritance are found in the **isof** trait.' + '\n' + '' + '\n' + '    object Fruit 1.0.0' + '\n' + '    Instantiate task' + '\n' + '      debug \'I am a \${isa}\'' + '\n' + '' + '\n' + '    set a to create \'Fruit\'' + '\n' + '    > I am a Fruit' + '\n' + '' + '\n' + '    object Pear 1.0.0' + '\n' + '    inherit: Fruit' + '\n' + '' + '\n' + '    set b to create \'Pear\'' + '\n' + '    > I am a Pear' + '\n' + '' + '\n' + ''
        },
        'Iterator': {
          title: 'Iterator',
          subtitle: 'name-of-the-Iterator method',
          summary: 'When creating an object you want to provide an invisible iterator for, use this keyword as the name of the' + '\n' + 'process.',
          synref: 'Iterator process (as [parameter list])' + '\n' + '  [block]',
          detail: 'This will be a little gritty, because ES6 is gritty. When you name an object process **Iterator** (note' + '\n' + 'the specific uppercase initial), the function won\'t be assigned to the object trait `object.Iterator`. Instead,' + '\n' + 'it will be assigned to `object[Symbol.iterator]`.' + '\n' + '' + '\n' + 'The bad news is that this means you can\'t specifically refer to that trait by name in SAI without' + '\n' + 'using the convoluted approach of `object[~Symbol.iterator]` (because **Symbol** is a global and globals' + '\n' + 'must use the global scoping prefix).' + '\n' + '' + '\n' + 'The good news is this means you probably won\'t ever *have to* refer to it by name, because all of SAI\'s' + '\n' + 'comprehensions, as well as the **iterate** statement, and ES6\'s `for-of` loop, all implicitly check for' + '\n' + 'the existence of the `Symbol.iterator` function and will use it if present.' + '\n' + '' + '\n' + '    object Tally 1.0.0' + '\n' + '    instance:' + '\n' + '      bag empty' + '\n' + '    Count task' + '\n' + '      set bag[$] to (self default 0) + 1' + '\n' + '    Iterator process' + '\n' + '      each bag' + '\n' + '        yield: key, it' + '\n' + '' + '\n' + '    set inventory to create \'Tally\'' + '\n' + '    inventory.Count \'apple\'' + '\n' + '    inventory.Count \'banana\'' + '\n' + '    inventory.Count \'apple\'' + '\n' + '    iterate inventory' + '\n' + '      debug it' + '\n' + '' + '\n' + '    > [ \'apple\', 2 ]' + '\n' + '    > [ \'banana\', 1 ]' + '\n' + '' + '\n' + 'In the example, when we **iterate** over `inventory`, a check is made to see if the object to iterate' + '\n' + 'has an **Iterator** process, which in this case it does, so it is called, and then iteration takes place' + '\n' + 'over the result. See the **iterate** construct for more on this.' + '\n' + '' + '\n' + 'Note that this sleight-of-hand doesn\'t apply to an object **task** (as opposed to **process**)' + '\n' + 'named "Iterator"; in fact SAI will not let you use that name for an object task, because doing so would' + '\n' + 'break expectations of what an iterator is supposed to do (e.g. yield things).  Gah, the cruft, it burns.' + '\n' + '' + '\n' + ''
        },
        'list': {
          subtitle: 'literal-based array construction',
          summary: 'Used to specify the creation of a plain array of literal values.',
          synref: '.. list [term], [term], ... (;)' + '\n' + '.. list' + '\n' + '  [term], [term], ...' + '\n' + '  [term]' + '\n' + '  ...',
          detail: 'As opposed to **array**, which is an array of mathematical expressions.' + '\n' + '' + '\n' + 'The following are acceptable terms:' + '\n' + '' + '\n' + '    true or false' + '\n' + '    number literal' + '\n' + '    string literal quoted with \' or " or ` or \'\'\'' + '\n' + '    unquoted bare string literal' + '\n' + '       all characters available except } , ) ; | [cr]' + '\n' + '       (note the comma, that will trip you up; comma separates terms)' + '\n' + '    an equal sign (=) followed by an expression' + '\n' + '    a nested definition starting with :, list, array, traits, or fields' + '\n' + '' + '\n' + 'Lists may be specified on one line:' + '\n' + '' + '\n' + '    debug list Apple, Banana, Citron' + '\n' + '' + '\n' + '    > [ \'Apple\', \'Banana\', \'Citron\' ]' + '\n' + '' + '\n' + 'Or multiple lines in the form of an indented block, or a combination:' + '\n' + '' + '\n' + '    debug list' + '\n' + '      Vladimir, Estragon' + '\n' + '      Pozzo, Lucky, The Boy' + '\n' + '' + '\n' + '    > [  \'Vladimir\', \'Estragon\', \'Pozzo\', \'Lucky\', \'The Boy\' ]' + '\n' + '' + '\n' + 'When using a list literal in an expression that might make the end of the array a matter of' + '\n' + 'question, use a **semicolon** to close the array literal:' + '\n' + '' + '\n' + '    debug list Vash, Spike, Jack, Cat thru \'\${it} the cat\'' + '\n' + '    > { \'Vash\', \'Spike\', \'Jack\', \'Cat the cat\' ] // undesired result' + '\n' + '' + '\n' + '    debug list Vash, Spike, Jack, Cat; thru \'\${it} the cat\' // with semicolon' + '\n' + '    > [ \'Vash the cat\', \'Spike the cat\', \'Jack the cat\', \'Cat the cat\' ]' + '\n' + '' + '\n' + 'Or enclose the array in parenthesis:' + '\n' + '' + '\n' + '    debug (list Vash, Spike, Jack, Cat).length' + '\n' + '    > 4' + '\n' + '' + '\n' + 'Arrays can be nested by use of either parenthesis or semicolons, or by using multiple' + '\n' + 'levels of indent. Note that commas separate expressions on one line but are not' + '\n' + 'included at the end of a line.' + '\n' + '' + '\n' + ''
        },
        'local': {
          subtitle: 'locally scoped variable declaration',
          summary: 'Create a local variable that exists only within the current level of indent (or deeper).' + '\n' + 'Uses Javascript\'s `let` declaration. (And this is the only construct in SAI that does so.)',
          synref: 'local [varname] to [expr]',
          detail: 'Syntax identical to **set** however the variable created is limited to the current block in' + '\n' + 'scope. (Normally, variables are scoped to the object method they’re used in.) **Local** causes the' + '\n' + 'generated Javascript to declare variables with the `let` keyword.' + '\n' + '' + '\n' + 'Javascript\'s scoping around global/local variables can be tricky and has caught even experienced' + '\n' + 'programmers multiple times.' + '\n' + '' + '\n' + '**Local** allows you to do dumb things like this:' + '\n' + '' + '\n' + '    set a 1' + '\n' + '    if a is 1' + '\n' + '      local a 2' + '\n' + '      debug a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 2' + '\n' + '    > 1' + '\n' + '' + '\n' + 'In general, SAI is designed such that you should only very rarely need __local__ variables.' + '\n' + '' + '\n' + ''
        },
        'main': {
          subtitle: 'indicates object should be instantiated at runtime',
          summary: 'When using the compiler, native Javascript files of objects created with **main** will automatically' + '\n' + 'instantiate a single copy of the object when the file is required.',
          synref: 'object [objectname] main [objectversion]',
          detail: 'In other words, when the `.js` file is required, in addition to defining a prototype, an object is' + '\n' + 'also instantiated (which causes any **Instantiate** task to run, thus conceivably launching a program).' + '\n' + '' + '\n' + 'Main also sets a flag in the **isof** property of the object, indicating it is the main object.' + '\n' + '' + '\n' + 'Have a look at the `bin` folder for `runner.sai` which uses the __main__ keyword to indicate it is' + '\n' + 'a program that should be run rather than just an object prototype.' + '\n' + '' + '\n' + ''
        },
        'NaN': {
          title: 'NaN',
          subtitle: 'not-a-number',
          summary: '**NaN** (capitalization matters) means Not a Number.',
          synref: '.. NaN',
          detail: '**NaN** is returned from some library calls on failure to convert a value into a' + '\n' + 'number.  (The **number** operator returns 0 instead.)' + '\n' + '' + '\n' + '    debug ~parseInt(\'The one ring.\')' + '\n' + '    > NaN' + '\n' + '' + '\n' + '    debug number \'The one ring.\'' + '\n' + '    > 0' + '\n' + '' + '\n' + 'The _only_ way to test for **NaN** is to use the **isNaN** operator.' + '\n' + '' + '\n' + '    debug NaN = ~parseInt(\'The one ring.\')' + '\n' + '    > false  // !' + '\n' + '' + '\n' + '    debug NaN is ~parseInt(\'The one ring.\')' + '\n' + '    > false  // !!!!' + '\n' + '' + '\n' + '    debug isNan ~parseInt(\'The one ring.\')' + '\n' + '    > true' + '\n' + '' + '\n' + ''
        },
        'nop': {
          subtitle: 'no-operation statement',
          summary: 'No operation; no data; do nothing.',
          synref: 'nop',
          detail: 'This statement (or one like it) is necessary as a syntactical placeholder when a white-space' + '\n' + 'indent is expected but you do not wish to put code in it.' + '\n' + '' + '\n' + '    if x>26' + '\n' + '      nop' + '\n' + '    elsif x>13' + '\n' + '      set x - 13' + '\n' + '    elsif x>0' + '\n' + '      set x + 13' + '\n' + '' + '\n' + ''
        },
        'null': {
          subtitle: 'a value that is no value',
          summary: 'An empty value.',
          synref: '.. null',
          detail: 'Null is:' + '\n' + '' + '\n' + '  - _falsy_' + '\n' + '  - not `undefined`' + '\n' + '' + '\n' + 'I don’t have any example code for this.' + '\n' + '' + '\n' + ''
        },
        'object': {
          subtitle: 'object declaration',
          summary: 'Begins the definition of an object.',
          synref: 'object [identifier] (main) [version]' + '\n' + '...',
          detail: 'Only one object definition is permitted per file.' + '\n' + '' + '\n' + 'In an object definition, the following sections are supported. See each keyword for more details.' + '\n' + 'Also review the _Defining an Object_ document.' + '\n' + '' + '\n' + '    reference:' + '\n' + '      [globally defined references]' + '\n' + '' + '\n' + '    object [identifier] (main) [version]' + '\n' + '' + '\n' + '    inherit:' + '\n' + '      [list of objects to inherit from]' + '\n' + '' + '\n' + '    contract:' + '\n' + '      [list of traits that child objects must provide]' + '\n' + '' + '\n' + '    given:' + '\n' + '      [declaration of immutable object traits]' + '\n' + '' + '\n' + '    instance:' + '\n' + '      [declaration of initial trait values for each instance]' + '\n' + '' + '\n' + '    get [trait name to implement dynamically]' + '\n' + '      [code]' + '\n' + '    set given [value]' + '\n' + '      [code]' + '\n' + '' + '\n' + '    [name] task/process/promise' + '\n' + '      [code that implements this task/process/promise]' + '\n' + '' + '\n' + 'When a SAI object is created, the **Instantiate** task is executed on that obejct, allowing you to' + '\n' + 'perform instance-level initialization code. Notice the caps; by convention SAI methods are' + '\n' + 'capitalized, while attributes are lowercase.' + '\n' + '' + '\n' + 'If the **main** clause is included, the object is marked to be instantiated automatically when a' + '\n' + 'compiled `.js` version of the object is required. See **main** for slightly more detail.' + '\n' + '' + '\n' + ''
        },
        'process': {
          subtitle: 'generative function definition',
          summary: 'Creates a function that is expected to **yield** one or more values.',
          synref: '[identifier] process ( as [parameter list] )' + '\n' + '  [yielding code block]' + '\n' + '' + '\n' + '.. process ( as [parameter list] )' + '\n' + '  [yielding code block]',
          detail: 'This is an ES6 feature. **Process** does exactly the same thing as **task** except the generated code' + '\n' + 'uses `function*` instead of `function`.' + '\n' + '' + '\n' + 'If you\'re not familiar with generators/yielding, here is a very simplified overview.' + '\n' + '' + '\n' + '  set Candidates to process' + '\n' + '    count 1 to 100 as x' + '\n' + '      count 1 to 100 as y' + '\n' + '        if 1<x and x<y and x+y<100' + '\n' + '          yield: x x, y y, s x+y, p x*y' + '\n' + '' + '\n' + 'The Candidates process, when invoked, runs all of the code in the process up until the' + '\n' + 'first **yield**, then returns, handing you a process object, here stored in the variable `iter`:' + '\n' + '' + '\n' + '  set iter Candidates()' + '\n' + '' + '\n' + 'That object is an _iterator_; it is a stateful representation of a `Candidates` process.' + '\n' + 'Each time you call a process, you get a new iterator. Once you have an iterator, you can _iterate_' + '\n' + 'through it. Each iteration returns the next value _yielded_ by the process.' + '\n' + '' + '\n' + 'Iteration takes place by calling the **.next** task on the iterator.' + '\n' + '' + '\n' + '    debug iter.next()' + '\n' + '' + '\n' + '    > { value: { x: 2, y: 3, s: 5, p: 6 }, done: false }' + '\n' + '' + '\n' + 'You can see that **.next** returns a simple object with two fields, **.value** and **.done**.' + '\n' + '(In our iterator, the value is the first qualified candidate represented by a simple object with' + '\n' + 'four fields: x, y, s and p.)' + '\n' + '' + '\n' + '**.value** holds whatever was **yield**ed. **.done** is a boolean flag that indicates whether the' + '\n' + 'iteration is complete; that is, whether another call to **.next** would result in a newly generated value.' + '\n' + '' + '\n' + 'Each time you call **.next** you will get a new value.' + '\n' + '' + '\n' + '    debug iter.next()' + '\n' + '    debug iter.next()' + '\n' + '    debug iter.next()' + '\n' + '' + '\n' + '    > { value: { x: 2, y: 4, s: 6, p: 8 }, done: false }' + '\n' + '    > { value: { x: 2, y: 5, s: 7, p: 10 }, done: false }' + '\n' + '    > { value: { x: 2, y: 6, s: 8, p: 12 }, done: false }' + '\n' + '' + '\n' + 'Here is a bit of code that will keep calling **.next** until the **.done** flag is set, saving' + '\n' + 'the result in a four item list.' + '\n' + '' + '\n' + '    set cache to empty            // empty array' + '\n' + '    dountil result.done           // check .done at the end of each loop' + '\n' + '      set result iter.next()      // next iteration to result' + '\n' + '      cache.push result           // save result in cache' + '\n' + '    debug cache | limit -4        // print last four rows' + '\n' + '' + '\n' + '    > [ { value: { x: 48, y: 50, s: 98, p: 2400 }, done: false },' + '\n' + '        { value: { x: 48, y: 51, s: 99, p: 2448 }, done: false },' + '\n' + '        { value: { x: 49, y: 50, s: 99, p: 2450 }, done: false },' + '\n' + '        { value: undefined, done: true } ]' + '\n' + '' + '\n' + 'Once the **.done** flag is set, the iterator is said to be _exhausted_. Notice that **.value** is' + '\n' + '*undefined* when the **.done** flag is set.' + '\n' + '' + '\n' + 'Processes, generators and iterators are very powerful tools because they allow computations to be' + '\n' + '*lazy*, that is, for data to be generated only as it is needed, thus vastly reducing memory' + '\n' + 'requirements. (The Python language is very useful for scientific computing because it is a primarily' + '\n' + 'lazy language because large data sets can be manipulated with modest resources.)' + '\n' + '' + '\n' + 'SAI has many affordances for processes and iterators, including native support with all' + '\n' + 'comprehensions. As a very simple example, all of the above code could be replaced with this' + '\n' + 'simple expression:' + '\n' + '' + '\n' + '    debug Candidates() | limit -4' + '\n' + '' + '\n' + '    > [ { x: 48, y: 49, s: 97, p: 2352 },' + '\n' + '        { x: 48, y: 50, s: 98, p: 2400 },' + '\n' + '        { x: 48, y: 51, s: 99, p: 2448 },' + '\n' + '        { x: 49, y: 50, s: 99, p: 2450 } ]' + '\n' + '' + '\n' + ' (Notice how the limit comprehension itself deals silently with **.next** and **.done**, and' + '\n' + ' automatically gives you just a list with only the **.value** of each iteration.)' + '\n' + '' + '\n' + '' + '\n' + ''
        },
        'promise': {
          subtitle: 'declare a Promise-producing function',
          summary: 'Wraps the code block in a Promise-like function shell.',
          synref: '[identifier] promise ( as [parameter list] )' + '\n' + '  [code block]' + '\n' + '' + '\n' + '.. promise ( as [parameter list] )' + '\n' + '  [code block]' + '\n' + '.. promise (given [parameters]) any [array-expression]' + '\n' + '.. promise (given [parameters]) all [array-expression]' + '\n' + '.. promise (given [parameters]) adopt [expression]',
          detail: 'Along with **resolve** and **reject**, forms a convenient bit of syntactic sugar for making' + '\n' + 'Promise-like functionality.' + '\n' + '' + '\n' + 'Here is some sample code:' + '\n' + '' + '\n' + '    set' + '\n' + '      willIGetNewPhone promise given isMomHappy' + '\n' + '        if isMomHappy' + '\n' + '          resolve:' + '\n' + '            brand \'Wangdoodle\'' + '\n' + '            colour \'paisley\'' + '\n' + '        else' + '\n' + '          reject new ~Error \'Mom is not happy.\'' + '\n' + '' + '\n' + '      showOff promise given phone' + '\n' + '        with phone' + '\n' + '          debug \'Hey friend, I have a new \${.colour} \${.brand} phone\'' + '\n' + '' + '\n' + '      askMom task given happiness' + '\n' + '        chain willIGetNewPhone(happiness)' + '\n' + '          then showOff' + '\n' + '          catch promise given e' + '\n' + '            debug \'\${e} -- No phone for you.\'' + '\n' + '' + '\n' + '    askMom true' + '\n' + '    askMom false' + '\n' + '' + '\n' + '    > Hey friend, I have a new paisley Wangdoodle phone' + '\n' + '    > Error: Mom is not happy. -- No phone for you.' + '\n' + '' + '\n' + 'The way **promise** works is best explained by just showing you what happens when you use it. We' + '\n' + 'wrap the code block in a Promise constructor, as follows:' + '\n' + '' + '\n' + '    set doThing to promise given url' + '\n' + '      HeyServer url, task given request, result' + '\n' + '        if result.success' + '\n' + '          resolve result' + '\n' + '        else' + '\n' + '          reject result' + '\n' + '    ..' + '\n' + '    debug doThing.toString()' + '\n' + '' + '\n' + '    > function (p) {' + '\n' + '    >   return new Promise(function($_resolve, $_reject) {' + '\n' + '    >     var $url = p;' + '\n' + '    >     $HeyServer($url, function(p, $result) {' + '\n' + '    >       var $request = p;' + '\n' + '    >       if (($56 = ($result.success))) {' + '\n' + '    >         $_resolve($result);' + '\n' + '    >       } else {' + '\n' + '    >         $_reject($result);' + '\n' + '    >       }' + '\n' + '    >     });' + '\n' + '    >   });' + '\n' + '    > }' + '\n' + '' + '\n' + 'So basically it throws a **Promise** wrapper around the function and allows you to use' + '\n' + '**resolve** and **reject** as statements. (The $56 in there is housekeeping for the **trial** pronoun;' + '\n' + 'V8 optimizes unused assignments like this away.)' + '\n' + '' + '\n' + '#### promise any' + '\n' + '' + '\n' + '    ..' + '\n' + '    then promise any urls into empty get(it)' + '\n' + '    then promise given a, b any Timers' + '\n' + '    ..' + '\n' + '' + '\n' + 'Creates a promise that, given an array, resolves/rejects based on the results of first promise in the' + '\n' + 'array to fulfill itself. That is, an __any__ promise is considered complete when _any_ of its' + '\n' + 'components completes.' + '\n' + '' + '\n' + '#### promse all' + '\n' + '' + '\n' + '    ..' + '\n' + '    then promise all urls into empty get(it)' + '\n' + '    ..' + '\n' + '' + '\n' + 'Creates a promise that, given an array, waits until all of the promises in the array have resolved,' + '\n' + 'or the first one rejects. That is, an __all__ promise will not resolve until all of its components' + '\n' + 'have done so, or any of them have rejected.' + '\n' + '' + '\n' + '#### promise adopt' + '\n' + '' + '\n' + '    ..' + '\n' + '    then promise adopt promisify(timer(500))' + '\n' + '    ..' + '\n' + '' + '\n' + 'Adopt creates a promise based on a single other promise and will not resolve/reject until that' + '\n' + 'adopted promise does so. This is useful when chaining generated promises; something that is' + '\n' + 'otherwise fairly difficult syntactically.' + '\n' + '' + '\n' + ''
        },
        'reference': {
          subtitle: 'declare global values',
          summary: 'Import/declare global variables at the top of a **.SAI** source file.',
          synref: 'reference:' + '\n' + '  [name] [expr]' + '\n' + '  ...',
          detail: 'This is the only way to make global variables; inside a reference declaration. The syntax' + '\n' + 'is the same as a **fields** structure definition, with name/value pairs separated by commas or newlines.' + '\n' + '' + '\n' + '    reference:' + '\n' + '      MIN 0, MAX 100' + '\n' + '      express require(\'express\')' + '\n' + '      Vector2D \'Vector2D \x5e1.0.0\'' + '\n' + '' + '\n' + '    count to MAX' + '\n' + '      debug key' + '\n' + '    ..' + '\n' + '    set @app express()' + '\n' + '    ..' + '\n' + '    set origin to create Vector2D 0, 0' + '\n' + '    ..' + '\n' + '' + '\n' + 'Note: you cannot assign to reference variables or re-use them as locals. The following lines would' + '\n' + 'produce compile errors given the above references:' + '\n' + '' + '\n' + '    local Vector2D' + '\n' + '    set MIN -50' + '\n' + '' + '\n' + ''
        },
        'set': {
          subtitle: 'variable assignment',
          summary: 'Set is a busy keyword used in many situations where a result is calculated and then stored.',
          synref: 'see below for syntax reference',
          detail: '#### set dynamic trait declaration' + '\n' + '' + '\n' + '    [identifier] set ( as [ident] )' + '\n' + '      [code block]' + '\n' + '    ( get' + '\n' + '      [code block] )' + '\n' + '' + '\n' + 'Declare a _setter_ for a dynamic object trait. Cannot be used inside a function body.' + '\n' + '' + '\n' + 'This example object implements *Distance*, storing the value normalized to meters. You can get and set the value in centimeters and miles through the use of dynamic traits.' + '\n' + '' + '\n' + '    object Distance 1.0.0' + '\n' + '    instance: meters 0' + '\n' + '' + '\n' + '    centimeters set given val' + '\n' + '      set meters to val/100' + '\n' + '    get' + '\n' + '      return meters * 100' + '\n' + '' + '\n' + '    miles set given val' + '\n' + '      set meters to val * 1609.344' + '\n' + '    get' + '\n' + '      return meters / 1609.344' + '\n' + '' + '\n' + ' And in use:' + '\n' + '' + '\n' + '    set trip to create \'Distance\'' + '\n' + '    set trip.meters to 500' + '\n' + '    debug trip.meters       // > 500' + '\n' + '    debug trip.centimeters  // > 50000' + '\n' + '    debug trip.miles        // > 0.31068559611867' + '\n' + '    set trip.miles to 10' + '\n' + '    debug trip.meters       // > 16093.44' + '\n' + '' + '\n' + '#### set value assignment' + '\n' + '' + '\n' + '    set [ident] to [expr]' + '\n' + '    set [ident] [expr]  // the TO keyword is generally optional but it\'s a good idea to use it' + '\n' + '    set [ident] ![function] ( [parameters] )' + '\n' + '    set [ident] from [function] ( [parameters] )' + '\n' + '    set [ident] [operator] [expr]' + '\n' + '    set [ident] [unary operator]' + '\n' + '' + '\n' + 'Assign a value to an identifier. That\'s right, you don\'t use the equals sign for assignment.' + '\n' + 'Ugh, whose idea was that anyway?' + '\n' + '' + '\n' + '    set a to 2' + '\n' + '    set a from Math.pow self, 2' + '\n' + '    set a Math.sqrt(a)' + '\n' + '    set a * 4' + '\n' + '    set a -' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > -8' + '\n' + '' + '\n' + '#### set multiple array value assignment' + '\n' + '' + '\n' + 'If you separate multiple identifiers with commas on the left, the assignment will assign each array' + '\n' + 'element on the right, starting at 0, to each identifier. As example:' + '\n' + '' + '\n' + '    set a, b, c to: 1, 3, 5' + '\n' + '' + '\n' + 'For a fruity example:' + '\n' + '' + '\n' + '    set a, b, c to fruit' + '\n' + '    debug b' + '\n' + '    > Banana' + '\n' + '' + '\n' + 'This is useful when dealing with small tuples or parsed data:' + '\n' + '' + '\n' + '    GetPixel task given x,y' + '\n' + '      return buffer.slice( (x+y*width)*4, 4 )' + '\n' + '' + '\n' + '    set r, g, b, a to GetPixel(x,y)' + '\n' + '' + '\n' + 'This compiles to a Javascript construct similar to the following:' + '\n' + '' + '\n' + '    var $_=GetPixel(x,y);' + '\n' + '    $r=$_[0]; $g=$_[1]; $b=$_[2]; $a=$_[3];' + '\n' + '' + '\n' + '#### Scoping and Set' + '\n' + '' + '\n' + 'All un-decorated, e.g. bare (`a` as opposed to `$a`), variables are scoped to the object method they\'re **set** in. For tighter scoping, you can use **local** in place of **set**, this causes the variable to be declared in-place using the Javascript keyword `let`.  _Be careful with variable scoping._' + '\n' + '' + '\n' + '    set a 1' + '\n' + '    if a is 1' + '\n' + '      local a 2' + '\n' + '      debug a' + '\n' + '    debug a' + '\n' + '' + '\n' + '    > 2' + '\n' + '    > 1' + '\n' + '' + '\n' + '#### set pipe operator' + '\n' + '' + '\n' + 'Documentation under separate cover.' + '\n' + '' + '\n' + ''
        },
        'super': {
          subtitle: 'superclass function invocation',
          summary: 'Call the previous ancestral version of the current object method.',
          synref: 'super ( [ parameters ] )' + '\n' + '.. super ( [ parameters ] )',
          detail: 'This doesn\'t happen by default; if you want to chain backwards up the inheritance tree you must do it' + '\n' + 'with **super**.' + '\n' + '' + '\n' + 'Note there is *no other way* to access an overridden ancestral object method than by' + '\n' + 'using **super** within that specific overriding method itself. SAI is very strict about inheritance' + '\n' + 'that way. Don\'t even bother exploring the prototype chain.' + '\n' + '' + '\n' + '    object Parent' + '\n' + '    instance: name \'unknown\'' + '\n' + '    Instantiate task given name' + '\n' + '      set @name to name' + '\n' + '' + '\n' + '    object Child' + '\n' + '    inherit: \'Parent\'' + '\n' + '    instance: age \'unknown\'' + '\n' + '    Instantiate task given name, age' + '\n' + '      super name' + '\n' + '      set @age to age' + '\n' + '' + '\n' + '    set billy to create \'Child\' \'Billy\', 12' + '\n' + '    debug billy' + '\n' + '' + '\n' + '    > { name: \'Billy\', age: 12 }' + '\n' + '' + '\n' + 'Contrary to what you might expect, **super** _does not_ use the **@** scoping prefix; that\'s' + '\n' + 'because super _always and only_ refers to the current object. You cannot call **super** on any other object.' + '\n' + '' + '\n' + 'If you want to pass arguments to a **super** method without specifying them discretely, the following' + '\n' + 'really ugly idiom gets the job done.' + '\n' + '' + '\n' + '  super.apply @ $$' + '\n' + '' + '\n' + ''
        },
        'swap': {
          subtitle: 'value swapper',
          summary: 'Exchanges the values.',
          synref: 'swap [lvalue1] [lvalue2]',
          detail: 'Intended as syntactic sugar, collapsing three ugly lines into one simple line.' + '\n' + '' + '\n' + '    swap a b' + '\n' + '' + '\n' + 'This is functionally equivalent to the following Javascript:' + '\n' + '' + '\n' + '    var temp1=a;' + '\n' + '    var temp2=b;' + '\n' + '    b=temp1;' + '\n' + '    a=temp2;' + '\n' + '' + '\n' + ''
        },
        'task': {
          subtitle: 'define a function',
          summary: 'Define a block of code as an object trait or anonymous function.',
          synref: '[identifier] task ( given [parameters] ) / ( expects [parameters] )' + '\n' + '  [code]' + '\n' + '' + '\n' + '.. [task] ( given [parameters] ) / ( expects [parameters] )' + '\n' + '  [code]',
          detail: 'It’s probably best to explain this by showing what Javascript is made.' + '\n' + '' + '\n' + '#### task trait' + '\n' + '' + '\n' + 'The first example is a task trait on an object. It takes two standard parameters, name and value.' + '\n' + '' + '\n' + '    Instrument task given name, value' + '\n' + '      debug `\${@context} \${name}: \${value}' + '\n' + '' + '\n' + 'Generated code:' + '\n' + '' + '\n' + '    function (p, $value) {' + '\n' + '      var $name = p,' + '\n' + '        $ = this;' + '\n' + '      console.log(\'\' + $.context + \' \' + $name + \': \' + $value);' + '\n' + '    }' + '\n' + '' + '\n' + '' + '\n' + 'You’ll note that the first parameter in a SAI-generated function is always `p`, which' + '\n' + 'is explained below. More importantly, however, note the assignation `$ = this`.' + '\n' + '' + '\n' + 'In SAI-generated code, the `$` variable is used as a buffer for the _this_ context.' + '\n' + 'When executing a task trait, SAI captures the current _this_ with `$=this` to' + '\n' + 'provide a reliable context for anonymous functions.' + '\n' + '' + '\n' + '#### anonymous task' + '\n' + '' + '\n' + 'Here’s the same task but for anonymous use:' + '\n' + '' + '\n' + '    set anon to task given name, value' + '\n' + '      debug `\${@context} \${name}: \${value}' + '\n' + '' + '\n' + 'Generated code:' + '\n' + '' + '\n' + '    function (p, $value) {' + '\n' + '      var $name = p;' + '\n' + '      console.log(\'\' + $.context + \' \' + $name + \': \' + $value);' + '\n' + '    }' + '\n' + '' + '\n' + 'Notice how the anonymous task doesn’t capture `this.` into the `$` variable the' + '\n' + 'way the trait task does.' + '\n' + '' + '\n' + 'Thus, anonymous tasks automatically bind to the context that created them. This is usually' + '\n' + 'what you want when creating anonymous tasks, and is why the `var self=this` idiom has so' + '\n' + 'much traction in Javascript. SAI builds this idiom into the language.' + '\n' + '' + '\n' + 'However, if you don’t want this behaviour for a particular anonymous task, include' + '\n' + 'the **orphan** statement in it.' + '\n' + '' + '\n' + '    set anon to task given name, value' + '\n' + '      orphan' + '\n' + '      debug `\${@context} \${name}: \${value}' + '\n' + '' + '\n' + 'Generated code:' + '\n' + '' + '\n' + '    function (p, $value) {' + '\n' + '      var $name = p;' + '\n' + '      var $ = this;' + '\n' + '      console.log(\'\' + $.context + \' \' + $name + \': \' + $value);' + '\n' + '    }' + '\n' + '' + '\n' + 'Orphan anonymous tasks bind to the _calling_ context, rather than to the context that created them.' + '\n' + '' + '\n' + '#### positional vs. named parameters' + '\n' + '' + '\n' + 'The second example is a task which expects two named parameters, $angle and $magnitude. As shown above, the first parameter in generated code is always `p`. Named parameters are passed as traits within `p`.' + '\n' + '' + '\n' + '    SetPolar task expects $angle, $magnitude' + '\n' + '      set x to $magnitude * Math.cos($angle)' + '\n' + '      set y to $magnitude * Math.sin($angle)' + '\n' + '' + '\n' + 'Generated code:' + '\n' + '' + '\n' + '    function (p) {' + '\n' + '      var $ = this;' + '\n' + '      _$AI.expectsThrow(p, {' + '\n' + '        "angle": true,' + '\n' + '        "magnitude": true' + '\n' + '      }, \'SetPolar\');' + '\n' + '      $.x = (p.magnitude * Math.cos(p.angle));' + '\n' + '      $.y = (p.magnitude * Math.sin(p.angle));' + '\n' + '    }' + '\n' + '' + '\n' + 'When you use **expects**, a call to _expectsThrow_ is included to validate your assumptions.' + '\n' + '' + '\n' + 'This task is called by naming the parameters:' + '\n' + '' + '\n' + '    SetPolar angle 45o, magnitude 3' + '\n' + '' + '\n' + 'Which generates this code:' + '\n' + '' + '\n' + '    $.SetPolar({' + '\n' + '      angle: 0.7853981633974483,' + '\n' + '      magnitude: 3' + '\n' + '    });' + '\n' + '' + '\n' + 'Notice how named parameters are encapsulated in a plain JS object and' + '\n' + 'passed in the first function call argument (which is always named `p`).' + '\n' + '' + '\n' + 'It is not necessary to use the **expects** clause to used named parameters. All **expects** does' + '\n' + 'for you is check to see if the names (and types) are as expected. Here is the function without it:' + '\n' + '' + '\n' + '    SetPolar task' + '\n' + '      set x to $magnitude * Math.cos($angle)' + '\n' + '      set y to $magnitude * Math.sin($angle)' + '\n' + '' + '\n' + 'Generating this:' + '\n' + '' + '\n' + '    function (p) {' + '\n' + '      var $ = this;' + '\n' + '      $.x = (p.magnitude * Math.cos(p.angle));' + '\n' + '      $.y = (p.magnitude * Math.sin(p.angle));' + '\n' + '    }' + '\n' + '' + '\n' + 'The use of named parameters with the **$** scoping prefix generates code that assumes the' + '\n' + 'first argument `p` will have the expected named traits.' + '\n' + '' + '\n' + 'Refer to the entry on **expects** for more on what it does.' + '\n' + '' + '\n' + ''
        },
        'to': {
          subtitle: 'set clause syntax',
          summary: '__To__ is used in __set__ statements to separate the value being set from the value itself.',
          synref: 'set [lexpr] to [rexpr]',
          detail: 'It is almost never necessary to actually use __to__ because the parser can almayst always figure' + '\n' + 'out what\'s going on.  Still, it looks clearer, so you should use it.' + '\n' + '' + '\n' + '    set a to 5' + '\n' + '    set a 5' + '\n' + '' + '\n' + 'Here\'s the only common case where there is confusion in the parser:' + '\n' + '' + '\n' + '    set a - 5' + '\n' + '' + '\n' + 'What does that mean?' + '\n' + '' + '\n' + '    set a to -5' + '\n' + '    set a self - 5' + '\n' + '' + '\n' + 'The compiler complains about this construct specifically, and makes you specify.' + '\n' + '' + '\n' + ''
        },
        'traits': {
          subtitle: 'declare a structure of literal strings',
          summary: 'Used to specify the creation of a plain object with a set of key/term pairs.',
          synref: '.. traits [key] [term], [key] [term], ... (;)' + '\n' + '.. traits' + '\n' + '  [key] [term], [key] [term], ...' + '\n' + '  [key] [term]' + '\n' + '  ...',
          detail: '(Contrast with **fields**.)  When you want to be specific about creating a plain object' + '\n' + 'from a set of of keyed values & literal terms, use **traits**.' + '\n' + '' + '\n' + 'The **key** is an identifying word or other string, specified without quotes (although' + '\n' + 'quotes may be used if desired/necessary). If a **#** preceeds the key (a hashtag),' + '\n' + 'the key will be assigned a value of **true**. The **term** is any valid' + '\n' + 'term (see **list** for a description of valid terms).' + '\n' + '' + '\n' + 'See **fields** for examples.' + '\n' + '' + '\n' + ''
        },
        'true': {
          subtitle: 'boolean value true',
          summary: 'The value TRUE, as in truthy, or not false.',
          synref: '.. true',
          detail: 'This is what all those __if__ statements test for, the holy grail itself.' + '\n' + '' + '\n' + ''
        },
        'unbound': {
          subtitle: 'mark a method as context-free',
          summary: 'An __unbound__ function does no runtime checks to ensure it has not become unmoored from context.',
          synref: 'object ObjectName' + '\n' + '' + '\n' + '[name] unbound task' + '\n' + '[name] unbound process' + '\n' + '[name] unbound promise',
          detail: 'When you declare an object function as __unbound__ the function no longer checks to see if it' + '\n' + 'has become orphaned in execution -- that is, if it\'s _this_ object is no longer' + '\n' + 'what it is supposed to be -- on a call to that function.' + '\n' + '' + '\n' + 'It is very easy to lose binding on object methods when you are using them as callbacks' + '\n' + 'or promises. Use the __bind__ keyword when referencing object methods to ensure they' + '\n' + 'stay in the context you expect.' + '\n' + '' + '\n' + 'Sometimes you do want methods to be unbound, for example, utility functions that don\'t need' + '\n' + 'to reference their own object. In that case, you can mark the function as __unbound__ to get' + '\n' + 'around the error message.' + '\n' + '' + '\n' + ''
        },
        'undefined': {
          subtitle: 'the absence of a place',
          summary: 'A literal indicating there is no variable, or no place for one.',
          synref: '.. undefined',
          detail: 'This compiles directly to Javascript’s `undefined`.' + '\n' + '' + '\n' + ''
        },
        'using': {
          subtitle: 'function reference clause',
          summary: 'Indicates in many looping constructs that logic is to be provided by a separate callback function.',
          synref: '.. using [function reference]',
          detail: 'Many pipe operators and loops provide a __using__ variant.' + '\n' + '' + '\n' + 'Have a look on the specific constructs to see how it\'s used.' + '\n' + '' + '\n' + ''
        },
        'via': {
          subtitle: 'pseudo-operator',
          summary: 'Calls the given function with `lexpr` as the first parameter. The expression on the right is sent in as the second parameter, if supplied, otherwise `undefined` is passed.',
          synref: '... [lexpr] via [function] ([expr]) (; ...)',
          detail: 'You can use __via__ to create your own comprehensions or operators, as in the following, which' + '\n' + 'returns as many copies of the left expression as you tell it to:' + '\n' + '' + '\n' + '    set Replicate task given l, repeat' + '\n' + '      local result empty' + '\n' + '      count repeat' + '\n' + '        set result[counter] l' + '\n' + '      return result.join(\'\')' + '\n' + '' + '\n' + '    set a "Hip"' + '\n' + '    debug a via Replicate 2; + "Hurrah"' + '\n' + '' + '\n' + '    > HipHipHurrah' + '\n' + '' + '\n' + 'If continuing the expression after the parameters, use a semicolon as a delimiter.' + '\n' + '' + '\n' + '    set MySort task given subject, rules' + '\n' + '      if rules.order is 1' + '\n' + '        set result subject by asc' + '\n' + '      else' + '\n' + '        set result subject by desc' + '\n' + '      exists rules.count' + '\n' + '        set result self limit it' + '\n' + '      return result' + '\n' + '' + '\n' + '    debug fruit via MySort: order 1' + '\n' + '    debug fruit via MySort: order -1, count 2' + '\n' + '' + '\n' + '    > [ \'apple\', \'banana\', \'citron\', \'durian\' ]' + '\n' + '    > [ \'durian\', \'citron\' ]' + '\n' + '' + '\n' + 'All of the following do the same thing.' + '\n' + '' + '\n' + '    debug from MySort fruit, fields order -1, count 2' + '\n' + '    debug !MySort fruit, fields order -1, count 2' + '\n' + '    debug MySort(fruit, fields order -1, count 2)' + '\n' + '    debug fruit via MySort: order -1, count 2' + '\n' + '' + '\n' + 'Sometimes I wonder why I\'m doing this. But then I think, you know, I want it to be' + '\n' + 'clear what\'s going on. Languages can have multiple ways of saying things, and each' + '\n' + 'different way emphasises different things. Use the code construct that' + '\n' + 'makes your intention clear.' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + '' + '\n' + ''
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
