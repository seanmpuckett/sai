
var SAILib = exports = {}
try { module.exports=SAILib; } catch(e) {}

var canIterate=function(i) {
  if (!i) return false;
  if (i[Symbol.iterator]) return true;
  if (typeof i === 'function') return true; // possibly a generator?
  return (typeof i.next)==='function';
}

var mustIterate=function(i) {
  if (!i) return false;
  return (typeof i.next)==='function';
}

var isObject=function(i) {
  if (i===null) return false;
  return (typeof i)==='object';
}

var isArray=Array.isArray;

var isMergable=function(i) {
  return isArray(i) || isObject(i) || canIterate(i);
}

var isCollection=function(i) {
  return isArray(i) || isObject(i);
}

SAILib.iterator=function(i) {
  if (!i) return i;
  if (typeof i.next === 'function') return i;
  if (typeof i === 'function') return i();
  if (i[Symbol.iterator]) return i[Symbol.iterator]();
  return i;
}

SAILib.generator=function(i) {
  if (!i) return i;
  if (typeof i.next === 'function') return function*(){yield*i}();
  if (typeof i === 'function') return i;
  var iter=i[Symbol.iterator];
  return iter ? iter : i;
}

SAILib.assert=function(test,msg) {
  if (!test) {
    if (!msg) msg='';
    throw new Error("SAI: failed assertion: "+msg);
  }
}

SAILib.iterate=function(a) { // test 'sow *'
  if (a===undefined) return undefined;
  if (mustIterate(a)) return a;
  if (a[Symbol.iterator]) return a[Symbol.iterator]();
  if (isArray(a)) return function*(){ for (var i in a) yield a[i]; }();
  if (isObject(a)) return function*(){ for (var i in a) yield [i,a[i]]; }();
  return function*(){ yield a; }();
}

SAILib._collect=function(iterable) {
  var a=[]; 
  for (var val of iterable) a.push(val);
  return a;
}

SAILib.collect=function(a) {
  if (a===undefined) return undefined;
  if (!mustIterate(a)) return a;
  a=SAILib.iterator(a);
  return SAILib._collect(a);
}

SAILib.sort=function(a,f) {
  if (isArray(a)) return a.slice(0).sort(f);
  if (mustIterate(a)) return SAILib._collect(a).sort(f);
  if (isObject(a)) return SAILib.values(a).sort(f);
  return a;
};

SAILib.enlist=function(a) {
  if (a===undefined) return undefined;
  var out=[];
  if (isArray(a)) return a;
  if (mustIterate(a)) for (var j=a.next(); !j.done; j=a.next()) out.push(j.value);
  else if (isObject(a)) for (var i in a) out.push([i,a[i]]);
  else out.push(a);
  return out;
}

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

SAILib.alter = function(a,f) { // test 'alter *'
  return f(a);
}

SAILib.observe = function(a,f) {
  f(a); // test 'observe *'
  return a;
}

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
    var r={};
    for (var k in a) f(a[k],k);
  }
  return a;
}

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

SAILib.overlay = function(l,r) {// test 'overlay'
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

// get only elements of src enumerated by keys
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

SAILib.update = function(dest,keys) { // ITERATORS ONLY ON RIGHT SIDE
  if (!(isArray(dest)||isObject(dest))) throw new Error("Attempt to MERGE into something that's not a list or traits.");
  if (!isMergable(keys)) throw new Error("Attempt to MERGE from something that's not a list or traits.");
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
}

SAILib.delete = function(dest,keys) { // ITERATORS ONLY ON RIGHT SIDE
  if (!isObject(dest)) throw new Error("SAI: Attempt to REMOVE from something that's not traits.");
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

SAILib.xor = function(a,b) { // test 'xor'
  return a?(b?false:a):(b?b:false);
}

SAILib.min = function(a,b) { // test 'min'
  return (a<b)?(a):(b);
}
SAILib.max = function(a,b) { // test 'max'
  return (a>b)?(a):(b);
}

SAILib.compare = function(a,b) { 
  if (a<b) return -1;
  if (a>b) return 1;
  return 0;
}

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
  // test 'keys value' & 'keys undefined'
  return result;
}

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

SAILib.newerror = function(line,file,parameters) {
  var e = new Error(parameters.message,file,line);
  for (var i in parameters) e[i]=parameters[i];
  return e;
}

SAILib.number = function(x) {
  var n=parseFloat(x);
  return isNaN(n)?0:n;
}

SAILib.expects = function(params,prototype) {
  var result=[];
  for (var j in prototype) {
    type=prototype[j];
    if (j==='_root') {
      if (type===typeof params) {
        // good
      } else if (params.isof && params.isof[type]) {
        // good
      } else {
        if (!params.isof) {
          result.push({trait:j,expects:type,found:typeof params});
          //throw new Error("SAI: Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+typeof params);
        } else {
          result.push({trait:j,expects:type,found:params.isa});
          //throw new Error("SAI: Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+params.isa);
        }
      }
    } else if (!params[j]) {
      result.push({trait:j,expects:type,found:'undefined'});
      //throw new Error("SAI: Expected parameter "+j+" in call to "+name);
    } else if (type!==true) {
      var param=params[j];
      if (type===typeof param) {
        // good
      } else if (param.isof && param.isof[type]) {
        // good
      } else {
        if (!param.isof) {
          result.push({trait:j,expects:type,found:typeof param});
          //throw new Error("SAI: Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+typeof param);
        } else {
          result.push({trait:j,expects:type,found:param.isa});
          //throw new Error("SAI: Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+param.isa);
        }
      }
    }
  }
  return result;
}

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


