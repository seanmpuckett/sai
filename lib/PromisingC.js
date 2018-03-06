#!/usr/bin/env node

// Javascript source for PromisingC.sai transipled by SAI
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
var __context={"name":"Construct","loader":"SAI.GetSourceFromPaths","path":"src/Construct.sai","mtime":"2018-03-05T21:51:09.424Z","fetched":"2018-03-06T19:07:44.232Z"};
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
var __context={"name":"PromisingC.sai","loader":"SAI.GetSourceFromPaths","path":"src/PromisingC.sai","mtime":"2018-03-06T13:54:40.825Z","fetched":"2018-03-06T19:07:44.174Z"};
var isa = prototype.isa = 'PromisingC';
var $bindfail = function(m) {
  throw new Error("SAI: A call to " + m + " on object " + isa + " has come unbound from any instance of that object. (If this is not in error, mark the declaration of " + m + " as unbound.)");
}
prototype.isof['PromisingC'] = {
  version: '0.0.0-unspecified',
  isa: isa,
  context: __context
};
prototype.__tobelocked = prototype.__tobelocked.concat(["manifest", "'PromisingConstruct'", "isa"]);
prototype.__tobefrozen = prototype.__tobefrozen.concat(["isof"]);
prototype.isof[prototype.isa].inherit = prototype.__inherits = ['Construct'];
Object.defineProperty(prototype, "manifest", {
  configurable: true,
  enumerable: true,
  get: function(p) {
    var $ = this; {
      return ({
        promising: {
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
      });
    }
  },
  set: undefined
});
var $2g = prototype['PromisingConstruct'] || function() {};
prototype['PromisingConstruct'] = function(p) {
  var $_d, $_c, $9, $8, $7, $6, $3, _block, _body, $2, _options, _tasker, $0, _work = p,
    $ = this['PromisingConstruct'] ? this : $bindfail('PromisingConstruct'); {
    var $1 = $AI.element_op($AI.slice_op((_work.clauses), -1, undefined), 0).clause;
    if (!((($1 === 'finally') || (($1 === 'catch') || (($1 === 'rejecting') || ($1 === 'finalizing')))))) {
      return ({
        error: 'SAI compiler: final clause in PROMISING must be CATCH, FINALLY, REJECTING or FINALIZING, not ' + $1.toUpperCase()
      });
    }
    _tasker = function(p) {
      {
        _options = {
          'as': p.args.out,
          block: p.args.block,
          kind: 'function',
          execute: p.execute
        };
        if (($2 = (p.ispromise))) {
          _options = $AI.update_op(_options, {
            preface: 'return new Promise(function($_resolve,$_reject) {',
            postface: 'if ($_resolve) return $_resolve();})'
          });
        }
        return (_work.tools.tasker(_options));
      }
    };
    _body = 'var $tthen=function(t){if (!t || !t.then) throw new Error("SAI Runtime: THEN should be followed by a verb returning a promise (or an indented block of code)."); return t;};\n';
    var $8 = _work.clauses;
    if (undefined === $8) $8 = [];
    for (var $7 in $8) {
      var $6 = $8[$7];
      switch ($3 = ($6.type)) {
        case ('promising.verb'):
          _body += '$tthen(' + $6.args.verb + ')';
          break;
        case ('promising.outblock'):
          _block = _tasker({
            args: $6.args,
            ispromise: true,
            execute: true
          });
          _body += '(' + _block + ')';
          break;
        case ('then.verb'):
          _body += '.then(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case ('then.outblock'):
          _block = _tasker({
            args: $6.args,
            ispromise: true
          });
          _body += '.then(' + _block + ')';
          break;
        case ('catch.verb'):
          _body += '.catch(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case ('catch.outblock'):
          _block = _tasker({
            args: $6.args
          });
          _body += '.catch(' + _block + ')';
          break;
        case ('finally.verb'):
          _body += '.finally(function(p){return $tthen(' + $6.args.verb + ');})';
          break;
        case ('finally.outblock'):
          _block = _tasker({
            args: $6.args
          });
          _body += '.finally(' + _block + ')';
          break;
        case ('resolving.exprs'):
          _body += '.then(function(p){return $_resolve(' + $6.args.exprs[1] + ');})';
          break;
        case ('resolving.none'):
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          break;
        case ('rejecting.exprs'):
          _body += '.catch(function(p){return $_reject(' + $6.args.exprs[1] + ');})';
          break;
        case ('rejecting.none'):
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case ('finalizing.none'):
          _body += '.then(function(){return $_resolve.apply(null,arguments);})';
          _body += '.catch(function(){return $_reject.apply(null,arguments);})';
          break;
        case ('all.exprs'):
          _body += '.then(function(p){return Promise.all(' + $6.args.exprs[1] + ');})';
          break;
        case ('any.exprs'):
          _body += '.then(function(p){return Promise.any(' + $6.args.exprs[1] + ');})';
          break;
        default:
          return ({
            error: 'SAI compiler: PROMISING construct unhandled type ' + $6.type
          });
          break;
      }
    }
    _body += ';\n';
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
