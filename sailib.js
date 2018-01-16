"use strict";

///////////////////////////////////////////////
//
// SAI Runtime Library
//

var SAILib = exports = {}
try { module.exports=SAILib; } catch(e) {}

// canIterate (utility)
//
// returns true if the candidate seems to be a true iterator, or at least acts like one
//
var canIterate=function(i) {
  if (!i) return false;
  if (i[Symbol.iterator]) return true;
  if (typeof i === 'function') return true; // possibly a generator?
  return (typeof i.next)==='function';
}

// mustIterate (utility)
//
// returns true if the candidate MUST be iterated
//
var mustIterate=function(i) {
  if (!i) return false;
  return (typeof i.next)==='function';
}

// isObject (utility)
//
// returns true if an actual Javascript object
//
var isObject=function(i) {
  if (i===null) return false;
  return (typeof i)==='object';
}

// isArray (utility)
//
// returns true if an actual Javascript array
//
var isArray=Array.isArray;

// isMergable (utility)
//
// returns true if it has items, attributes, or is an iterator
//
var isMergable=function(i) {
  return isArray(i) || isObject(i) || canIterate(i);
}

// isCollection (utility)
//
// returns true if an array or an object
//
var isCollection=function(i) {
  return isArray(i) || isObject(i);
}

// assert
//
// throw an error if the test is false
//
SAILib.assert=function(test,msg) {
  if (!test) {
    if (!msg) msg='';
    throw new Error("SAI: failed assertion: "+msg);
  }
}

// iterator
//
// If the object seems an iterator ALREADY under iteration, return it.
// Otherwise, attempt to invoke the generator to create an iteration
// with blank parameters.
//
SAILib.iterator=function(i) {
  if (!i) return i;
  if (typeof i.next === 'function') {
    //console.log("MakeIterator1: i.next is function");
    return i;
  }
  if (typeof i === 'function') {
    //console.log("MakeIterator2: i is function");
    return i();
  }
  if (i[Symbol.iterator]) {
    //console.log("MakeIterator3: i has Symbol.iterator");
    return i[Symbol.iterator]();
  }
  //console.log("MakeIterator4: i itself")
  return i;
}

// generator
//
// Force the parameter into being a generator.
// 
SAILib.generator=function(i) {
  if (!i) return i;
  if (typeof i.next === 'function') return function*(){yield*i}();
  if (typeof i === 'function') return i;
  var iter=i[Symbol.iterator];
  return iter ? iter : i;
}

// iterate
//
// given an object, create and invoke an iterator for it.
//
SAILib.iterate=function(a) { // test 'sow *'
  if (a===undefined) return undefined;
  if (mustIterate(a)) return a;
  if (a[Symbol.iterator]) return a[Symbol.iterator]();
  if (isArray(a)) return function*(){ for (var i in a) yield a[i]; }();
  if (isObject(a)) return function*(){ for (var i in a) yield [i,a[i]]; }();
  return function*(){ yield a; }();
}

// _collect (worker)
//
// given an iterator, create an array of all of its yielded values.
//
SAILib._collect=function(iterable) {
  var a=[]; 
  for (var val of iterable) a.push(val);
  return a;
}

// collect
//
// If an object must be iterated, return all of its yielded values.
// Otherwise return it unchanged.
SAILib.collect=function(a) {
  if (a===undefined) return undefined;
  if (!mustIterate(a)) return a;
  a=SAILib.iterator(a);
  return SAILib._collect(a);
}

// sort
//
// Given a value, force it into an array, then sort it.
//
SAILib.sort=function(a,f) {
  if (isArray(a)) return a.slice(0).sort(f);
  if (mustIterate(a)) return SAILib._collect(a).sort(f);
  if (isObject(a)) return SAILib.values(a).sort(f);
  return a;
};

// enlist
//
// Given any object, array, iterator or value, return an
// array with all of its values.
//
// undefined -> undefined
// value -> [value]
// array -> array
// object -> [[key,value],[key,value],...]
// iterator -> [yielded values]
//
SAILib.enlist=function(a) {
  if (a===undefined) return undefined;
  if (isArray(a)) return a;
  var out=[];
  if (mustIterate(a)) for (var j=a.next(); !j.done; j=a.next()) out.push(j.value);
  else if (isObject(a)) for (var i in a) out.push([i,a[i]]);
  else out.push(a);
  return out;
}

// entrait
// 
// given any object, array, iterator or value, return an
// object with all of its values.
//
// undefined -> undefined
// value -> {value: true}
// array -> {[0][0]:[0][1], [1][0]:[1][1], ...}
// object -> object
// iterator -> {y0[0]:y0[1], y1[0]:y1[1], ...}
//
SAILib.entrait=function(a) {
  if (a===undefined) return undefined;
  var out={};
  var assign=function(k,v) { if (k!==undefined && v!==undefined) out[k]=v; }
  if (mustIterate(a)) for (var j=a.next(); !j.done; j=a.next()) assign(j.value[0],j.value[1]);
  else if (isArray(a)) for (var i in a) assign(a[i][0],a[i][1]);
  else if (isObject(a)) return a;
  else out[a]=true;
  return out;
}

// alter
// 
// return the value of a function
//
SAILib.alter = function(a,f) { // test 'alter *'
  return f(a);
}

// observe
//
// execute a function, leaving the object unaltered
//
SAILib.observe = function(a,f) {
  f(a); // test 'observe *'
  return a;
}

// audit
//
// Execute a function on every element of an array/list/generator
// But DOES NOT produce the results or alter the original array
// Returns the original array.
//
SAILib.audit = function(a,f) {
  if (isArray(a)) { 
    var k=0,l=a.length;
    while (k<l) { f(a[k],k); k++; }
  } else if (mustIterate(a)) { 
    a=SAILib.iterator(a);
    return function *(){
      for (var val of a) { f(val); yield val; }
    }(); 
  } else if (isObject(a)) { 
    for (var k in a) f(a[k],k);
  }
  return a;
}

// concat
//
// Create an array by concatenating two arrays.
// Forces things that are not arrays to be arrays.
// Returns a new array, unless "inplace" is set, 
// then will modify the first array inplace if possible.
//
//	[1, 2] concat [3, 4] -> [1, 2, 3, 4]
//	[1, 2] concat [[3, 4], [5, 6]] -> [1, 2, [3, 4], [5, 6]]
//	[1, 2] concat 3 -> [1, 2, 3]
//	[1, 2] concat {c:3, d:4} -> [1, 2, {c:3, d:4}]
//	[1, 2] concat undef -> [1, 2]
//	1 concat [3, 4] -> [1, 3, 4]
//	1 concat 3 -> [1, 3]
//	1 concat {c:3, d:4} -> [1, {c:3, d:4}]
//	1 concat undef -> [1]
//	{a:1, b:2} concat [3, 4] -> [{a:1, b:2}, 3, 4]
//	{a:1, b:2} concat 3 -> [{a:1, b:2}, 3]
//	{a:1, b:2} concat {c:3, d:4} -> [{a:1, b:2}, {c:3, d:4}]
//	{a:1, b:2} concat undef -> [{a:1, b:2}]
//	undef concat undef -> undef
//	undef concat 3 -> [3]
//	undef concat {c:3, d:4} -> [{c:3, d:4}]
//	undef concat [3, 4] -> [3, 4]
//
SAILib.concat = function(a,b,inplace) {
  if (a===undefined) {
    if (b===undefined) {
      //console.log("**A");
      return undefined;
    }
    if (isArray(b) || mustIterate(b)) {
      //console.log("**B");
      return b;
    }
    //console.log("**C");
    return [b];
  }
  if (b===undefined) {
    if (isArray(a) || mustIterate(a)) {
      //console.log("**D");
      return a;
    }
    //console.log("**E");
    return [a];
  }
  // promote values to single element arrays
  if (mustIterate(a)) {
    if (mustIterate(b)) { // test 
      //console.log("**F");
      return function *() {
        for (var val of a) yield val;
        for (var val of b) yield val;
      }();
    } else if (isArray(b)) { // test
      b=b.slice(0);
      //console.log("**G");
      return function *() {
        for (var val of a) yield val;
        for (var i in b) yield b[i];
      }();
    } else { // test
      //console.log("**H");
      return function *() {
        for (var val of a) yield val;
        yield b;
      }();
    }
    console.log("SHOULD NOT BE ABLE TO GET HERE");
  } 
  if (!isArray(a)) { // test
    //console.log("**I");
    a=[a];
  } else if (!inplace) {  // test 
    //console.log("**J");
    a=a.slice(0);
  } else { // in place concatenation, used only for 'set a concat b'
    //console.log("**J2");
  }
  if (mustIterate(b)) { // test
    //console.log("**K");
    for (var val of b) a.push(val);
  } else if (isArray(b)) { // test
    //console.log("**L");
    a=a.concat(b);
  } else {  // test 
    //console.log("**M");
    a.push(b);
  }
  //console.log("**N");
  return a;
}

// map
//
// execute a function on every element of an array/object/iterator
// returning a new array/object/iterator with the product of that
// repeatedly invoked function
//
SAILib.map = function(a,f) {
  if (a===undefined) return undefined; // test 'map undef'
  if (isArray(a)) { // test 'map list'
    var r=[];
    var k=0,l=a.length;
    r.length=l;
    while (k<l) {
      r[k]=f(a[k],k);
      k++;
    }
    return r;
  } else if (mustIterate(a)) { // test 'map iterable'
    a=SAILib.iterator(a);
    return function *(){
      for (var val of a) yield f(val);
    }();
  } else if (isObject(a)) { // test 'map traits'
    var r={};
    for (var k in a) {
      r[k]=f(a[k],k);
    }
    return r;
  }
  return f(a); // test 'map value'
}

// filter
//
// Evaluats a function on every element of an array/object/iterator
// and returns a new array/object/iterator with only the elements
// the function returned "true" on.
//
SAILib.filter = function(a,f) {
  if (a===undefined) return undefined; // test 'filter undef'
  if (isArray(a)) { // test 'filter list'
    var r=[];
    for (var k in a) {
      var v=a[k];
      if (f(v,k)) r.push(v);
    }
    return r;
  } else if (mustIterate(a)) { // test 'filter iterator'
    a=SAILib.iterator(a);
    return function *(){
      for (var val of a) {
        if (f(val)) yield val;
      }
    }();
  } else if (isObject(a)) { // test 'filter traits*'
    var r={};
    for (var k in a) {
      var v=a[k];
      if (f(v,k)) r[k]=v;
    }
    return r;
  } 
  return f(a,undefined)?a:undefined; // test 'filter value*'
}

// reduce
//
// With a starting value (accumulator) that persists through invocations,
// invoke a function on every element of the provided array/object/iterator
// and return the accumulator.
//
SAILib.reduce = function(a,f,accum) {
  if (a===undefined) return undefined; // test 'reduce undef'
  if (isArray(a)) {
    var l=a.length;
    if (!l) return accum;
    var k=0;
    if (undefined===accum) accum=a[k++];
    while (k<l) {
      accum=f(accum,a[k],k);
      k++;
    }
    return accum;
  }
  if (mustIterate(a)) {
    a=SAILib.iterator(a);
    return function*(){
      var step=a.next();
      if (step.done) { yield accum; return; } 
      var k=0;
      if (undefined===accum) {
        accum=step.value;
        step=a.next();
      }
      while (!step.done) {
        accum=f(accum,step.value);
        step=a.next();
      }
      yield accum;
    }();
  }
  if (isObject(a)) { // test 'reduce traits*'
    if (undefined===accum) {
      var first=true;
      for (var k in a) {
        if (first) {
          accum=a[k];
          first=0;
        } else {
          accum=f(accum,a[k],k);
        }
      }
    } else {
      for (var k in a) {
        accum=f(accum,a[k],k);
      }
    }
    return accum;
  } 
  // simple value; wrap it in an array and try again, yay tail call
  return SAILib.reduce([a],f,accum);
}

// slice
//
// return start - start+count-1 elements of the given list/iterator
// If start is negative, counts from the end.
// 
SAILib.slice = function(a,start,count) {
  if (a===undefined) return undefined; 

  var end;
  if (start==0) {
    if (count>0) {
      end=count; // start=0, end=count
    } else {
      start=count; // start=-count, end=[end of array]
      count=-start;
      end=undefined;
    }
  } else if (count!==undefined){
    end=start+count;
  }

  if (isArray(a)) return a.slice(start,end);

  if (mustIterate(a)) {
    a=SAILib.iterator(a);
    // return new iterable that slices the previous
    // first n records limited
    if (start===0) {
      if (end===undefined) {
        // everything; just pass thru
        // untested
        //console.log("slice iterator everything "+start+','+end);
        return a;
      }
      if (end<=start) {
        // nothing; return empty iterator
        // untested
        //console.log("slice iterator nothing "+start+','+end);
        return function*(){};
      }
      // n records 
      // test 'limit iterator'
      //console.log("slice iterator count "+start+','+end);
      return function*() {
        var v=a.next();
        while (!v.done && (start<end)) { 
          start++; yield v.value; v=a.next(); 
        };
      }();
    } else if (start>0) {
      // offset n records 
      // test 'limit iterator'
      //console.log("slice iterator offset "+start+','+end);
      return function*() {
        var i=0,v=a.next();
        while (!v.done && i<start) { i++; v=a.next(); }
        while (!v.done && start<end) { start++; yield v.value; v=a.next(); }
      }();
    }
    // from the end, so we must accumulate up to "count" records
    // test 'limit iterator'
    //console.log("slice iterator from end "+start+','+count);
    var len=-start,buf=[],v=a.next();
    while (!v.done) { 
      buf.push(v.value); v=a.next(); 
      if (buf.length>len) buf.shift(); 
    }
    return buf.slice(0,count);
  }
  if (isObject(a)) throw new Error("SAI: Cannot use LIMIT/FIRST/LAST on traits.");
  if (start==0 && (count===undefined || end>0)) return a;
  if (start==-1 && (count===undefined || count<0)) return a;
  return undefined;
}

// element
//
// returns a single element from an array/iterator
//
SAILib.element = function(a,index) {
  if (isArray(a)) {
    return a[index];
  } else if (mustIterate(a)) { // untested
    a=SAILib.iterator(a);
    a=SAILib.slice(a,index,1);
    var v=a.next();
    return v.value;
  }
  throw new Error("SAI: Attempt to extract an element from something not a list.");
}

// clone
//
// create a shallow copy of an array or object
//
SAILib.clone = function(a) {
  if (isArray(a)) return a.slice(0);
  if (isObject(a)) {
    var b={};
    for (var i in a) {
      if (undefined!==a[i]) b[i]=a[i];
    }
    return b;
  }
  return a;
}

// overlay
//
// creates a new collection with the left collection overlaid by the right collection
//
// [1, 2, 3] overlay [4, undefined, 6] -> [4, 2, 6]
// {a:1, b:2} overlay {c:3, b:4, a:undefined} -> {a:1, b:4, c:3}
//
SAILib.overlay = function(l,r) {// test 'overlay'
  if (l===undefined) l={};
  if (!isMergable(l)) throw new Error("SAI: Attempt to OVERLAY onto something that's not a collection/iterable.");
  if (!isMergable(r)) throw new Error("SAI: Attempt to OVERLAY with something that's not a collection/iterable.");
  if (!mustIterate(l)) { // left side static
    l=SAILib.clone(l); // no in-place modification
    if (mustIterate(r)) {
      r=SAILib.iterator(r);
      // right side iterator
      return function*(){
        var v=r.next();
        for (var i in l) {
          if (!v.done) {
            yield (undefined===v.value) ? l[i] : v.value;
            v=r.next();
          } else {
            yield l[i];
          }
        }
      }();
    }
    // right side static - things were so much simpler then
    for (var i in r) {
      if (r[i]!==undefined) l[i]=r[i];
    }
    return l;
  } else {
    l=SAILib.iterator(l);
    // left side iterable
    if (mustIterate(r)) {
      r=SAILib.iterator(r);
      // right side iterable
      return function*(){
        var vl=l.next(),vr=r.next();
        while (!vr.done) {
          yield (vr.value===undefined) ? vl.value : vr.value;
          vl=l.next(); vr=r.next();
        }
        yield *l;
      }();
    }
    // right side static
    r=SAILib.clone(r); // in case it is changed
    return function*(){
      var i=0,v=l.next();
      while (!v.done) {
        var o=r[i++];
        yield (o===undefined)?v.value:o;
        v=l.next();
      }
    }();
  }
  throw new Error("SAI: unexpected code path in OVERLAY");
}

// select
//
// get only elements of src enumerated by keys
//
// ['Apple', 'Banana', 'Cherry', 'Durian'] select [2, 0] -> ['Cherry', 'Apple']
// {a:1, b:2, c:3, d:4} select ["a","c"] -> {a:1, c:3}
//
SAILib.select = function(src,keys) {
  if (!isMergable(src)) throw new Error("SAI: Left argument to SELECT must be list/traits/iterable.");
  if (!isMergable(keys)) {
    if (keys===undefined) return undefined;
    keys=[keys];
  }
  if (isArray(src)) { // lhs array
    if (isArray(keys)) { // test 'select list list' // console.log("path 1");
      var j=0,result=[];
      for (var i in keys) result[j++]=src[keys[i]];
      return result;
    } else if (mustIterate(keys)) { // test 'select list iterable' // console.log("path 2");
      keys=SAILib.iterator(keys);
      src=SAILib.clone(src);
      return function*(){
        for (var i of keys) yield src[i];
      }();
    } // test 'select list traits' // else rhs traits console.log("path 3");
    var j=0,result=[];
    for (var i in keys) result.push(src[i]);
    return result;
  } else if (mustIterate(src)) { // lhs iterator
    src=SAILib.iterator(src);
    if (mustIterate(keys)) { // test 'select iterable iterable' // rhs iterator console.log("path 4");
      keys=SAILib.iterator(keys);
      return function*(){
        var buf=[],len=0;
        for (v of keys) {
          while (len<=v) {
            var lv=src.next();
            if (lv.done) return; // request for element that doesn't exist, terminate iteration
            buf[len++]=lv.value;
          }
          yield buf[v];
        }
      }();
    }
    if (isArray(keys)) { // test 'select iterable list' // rhs list console.log("path 5");
      keys=SAILib.clone(keys);
      return function*(){
        var buf=[],len=0;
        for (var i in keys) {
          var v=keys[i];
          while (len<=v) {
            var lv=src.next();
            if (lv.done) return; // request for element that doesn't exist, terminate iteration
            buf[len++]=lv.value;
          }
          yield buf[v];
        }
      }();
    } // test 'select iterable traits' // rhs traits console.log("path 6");
    keys=SAILib.keys(keys).sort();
    return function*(){
      var i=0,j=0;
      for (var v of src) if (i++==keys[j]) { yield v; j++; if (j>=keys.length) break;}
    }();
  } // else lhs traits
  if (mustIterate(keys)) { // test 'select traits iterable' // console.log("path 7");
    keys=SAILib.iterator(keys);
    src=SAILib.clone(src);
    return function*(){
      for (var v of keys) {
        if (v!==undefined) yield src[v];
      }
    }();
  } else if (isArray(keys)) { // test 'select traits list' console.log("path 8");
    var result={};
    for (var i in keys) { var v=keys[i]; result[v]=src[v]; }
    return result;
  } // rhs traits // test 'select traits traits
  var result={};
  if (isObject(keys)) {
    for (var i in keys) result[i]=src[i];
  } else {
    result[keys]=src[keys];
  }
  return result;
}

// update
//
// Updates a collection of traits in-place.
//
// [1, 2, 3] update [4, undefined, 6] -> [4, 2, 6]
// {a:1, b:2} update {c:3, b:4, a:undefined} -> {a:1, b:4, c:3}
// 
SAILib.update = function(dest,keys) { // ITERATORS ONLY ON RIGHT SIDE
  if (dest===undefined) dest={};
  if (!(isArray(dest)||isObject(dest))) throw new Error("Attempt to UPDATE into something that's not a list or traits.");
  if (!isMergable(keys)) throw new Error("Attempt to UPDATE from something that's not a list or traits.");
  if (mustIterate(keys)) {
    keys=SAILib.iterator(keys);
    var i=0;
    for (var v of keys) {
      if (v!==undefined) dest[i]=v;
      i++;
    }
  } else {
    for (var i in keys) {
      var v=keys[i];
      if (v!==undefined) dest[i]=v;
    }
  }
  return dest;
}

// delete
//
// Delete, in place, specific items from a collectios
//
// [1, 2, 3, 4] delete [1, 2] -> [1, 3]
// [a:1, b:2, c:3] delete ["a"] -> [b:2, c:3]
// [a:1, b:2, c:3] delete {b:5} -> [a:1, c:3]
//
SAILib.delete = function(dest,keys) { // ITERATORS ONLY ON RIGHT SIDE
  if (mustIterate(dest)) throw new Error("SAI: Attempt to DELETE from an iterator, which is not presently supported.")
  if (!isObject(dest)) throw new Error("SAI: Attempt to DELETE from something that's not a list or traits.");
  if (isArray(dest)) {
    if (!isMergable(keys)) {
      if (keys !== undefined) {
        //console.log("PATH A");
        dest.splice(keys,1);
      } else {
        //console.log("PATH Ab");
      }
    } else if (isArray(keys)) {
      //console.log("PATH B");
      for (var i in keys) { var v=keys[i]; if (v!==undefined) dest.splice(keys[i],1); }
    } else if (mustIterate(keys)) {
      //console.log("PATH C");
      keys=SAILib.iterator(keys);
      for (var v of keys) { if (v!==undefined) dest.splice(v,1); }
    } else if (isObject(keys)) {
      //console.log("PATH D"); 
      for (var i in keys) dest.splice(i,1);
    } else {
      throw new Error("SAI: Unexpected execution path in SAILib.delete what the heck is the destination value?!")
    }
  } else {
    if (!isMergable(keys)) {
      delete dest[keys];
    } else if (isArray(keys)) {
      for (var i in keys) { var v=keys[i]; if (v!==undefined) delete dest[keys[i]]; }
    } else if (mustIterate(keys)) {
      keys=SAILib.iterator(keys);
      for (var v of keys) { if (v!==undefined) delete dest[v]; }
    } else {
      if (isObject(keys)) {
        for (var i in keys) delete dest[i];
      } else {
        delete dest[keys];
      }
    }
  }
  return dest;
}

// deepFreeze
//
// Freeze an object and all of its properties (ensure they cannot be changed)
//
SAILib.deepFreeze = function(o) {
  var prop, propKey;
  Object.freeze(o); // First freeze the object.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }
    SAILib.deepFreeze(prop); // Recursively call deepFreeze.
  }
}

// xor
//
// return true if a XOR b
//
SAILib.xor = function(a,b) { // test 'xor'
  return a?(b?false:a):(b?b:false);
}

// min
//
// return the lower value
//
SAILib.min = function(a,b) { // test 'min'
  return (a<b)?(a):(b);
}

// max
//
// return the higher value
//
SAILib.max = function(a,b) { // test 'max'
  return (a>b)?(a):(b);
}

// compare
//
// return -1 if a is less than b
// return 1 if a is greater than b
// otherwise return 0
//
SAILib.compare = function(a,b) { 
  if (a<b) return -1;
  if (a>b) return 1;
  return 0;
}

// keys
// 
// return the keys (item identifiers) from an object in an array.
//
SAILib.keys = function(a) {
  var result=[];
  if (isArray(a)) { // test 'keys list'
    var len=a.length;
    for (var i = 0; i<len; result.push(i++));
  } else if (mustIterate(a)) {
    a=SAILib.iterator(a);
    var i=0;
    for (var v of a) result.push(i++);
  } else if (isObject(a)) {
    for (var i in a) result.push(i);
  } 
  // test 'keys value' & 'keys undefined'
  return result;
}

// count
//
// return how many items are in a collection
//
SAILib.count = function(a) {
  var result=0;
  if (isArray(a)) { 
    result=a.length;
  } else if (mustIterate(a)) {
    a=SAILib.iterator(a);
    for (var v of a) result++;
  } else if (isObject(a)) {
    for (var i in a) result++;
  } else if (a===undefined) {
    result=0;
  } else {
    result=1;
  }
  return result;
}

// values
//
// return a list of all of the item values in a collectios
//
SAILib.values = function(a) {
  var result=[];
  if (isArray(a)) { // test 'values list'
    return SAILib.clone(a);
  } else if (mustIterate(a)) { // test 'values iterable'
    return SAILib.collect(a);
  } else if (isObject(a)) { // test 'values traits'
    for (var i in a) if (a[i]!==undefined) result.push(a[i]);
  } else if (a !== undefined) { // test 'values value'
    result.push(a);
  } // test 'values undefined'
  return result;
}

// newerror
//
// prepare an error object for throwing
//
SAILib.newerror = function(line,file,parameters) {
  var e = new Error(parameters.message,file,line);
  for (var i in parameters) e[i]=parameters[i];
  return e;
}

// number
//
// convert a value into a number, or zero if that's not possible.
//
SAILib.number = function(x) {
  var n=parseFloat(x);
  return isNaN(n)?0:n;
}

// expects
//
// (see 20.Keywords.md for description of purpose)
//
SAILib.expects = function(params,prototype) {
  var result=[];
  for (var j in prototype) {
    var type=prototype[j];
    if (j==='_root') {
      if (type===typeof params) {
        // good
      } else if (params.isof && params.isof[type]) {
        // good
      } else {
        if (!params.isof) {
          result.push({trait:j,expects:type,found:typeof params});
        } else {
          result.push({trait:j,expects:type,found:params.isa});
        }
      }
    } else if (!params[j]) {
      result.push({trait:j,expects:type,found:'undefined'});
    } else if (type!==true) {
      var param=params[j];
      if (type===typeof param) {
        // good
      } else if (param.isof && param.isof[type]) {
        // good
      } else {
        if (!param.isof) {
          result.push({trait:j,expects:type,found:typeof param});
        } else {
          result.push({trait:j,expects:type,found:param.isa});
        }
      }
    }
  }
  return result;
}

// expectsThrow
//
// Verify parameters match a prototype, throwing an exception if they don't.
//
SAILib.expectsThrow = function(params,prototype,name) {
  var x=SAILib.expects(params,prototype);
  if (!x.length) return;
  var err=[];
  for (var i in x) {
    var j=x[i];
    err.push(j.trait+" should be "+j.expects+", but it's "+j.found);
  }
  throw new Error('SAI: parameter exception in '+name+'\n'+err.join('\n'));
}


