var fs = require('fs');
var PEG = require('pegjs');
var Beautify=require('js-beautify').js_beautify;

var _ = require('lodash');


var SAIconfig = {
  verbs: {
    debug: 'console.log',
    require: 'require'
  },
  paths: [__dirname+'/'],
  options: {
    speedometer: false // print compile times
  },
  Loader: 'default source loader (linked later in this file)'
}


// HELPERS

var isObject=function(i) {
  if (i===null) return false;
  if (typeof i !== 'object') return false;
  return true;
}

var isMergable=function(i) {
  if (Array.isArray(i)) return true;
  if (i===null) return false;
  if (typeof i !== 'object') return false;
  return true;
}



/// TOOLKIT

var _$AI = {}

_$AI.sort=function(a,f) {
  if (_.isPlainObject(a)) { // test 'sort traits'
    a=_.values(a);
  } else if (!_.isArray(a)) { // test 'sort undef' 'sort value'
    return a;
  } else { // test 'sort list'
    a=a.slice(0);
  }
  return a.sort(f);
};

_$AI.map = function(a,f) {
  if (a===undefined) return undefined; // test 'map undef'
  if (_.isArray(a)) { // test 'map list'
    var r=[];
    var k=0,l=a.length;
    r.length=l;
    while (k<l) {
      r[k]=f(a[k],k);
      k++;
    }
    return r;
  } else if (_.isPlainObject(a)) { // test 'map traits'
    var r={};
    for (var k in a) {
      r[k]=f(a[k],k);
    }
    return r;
  } 
  return f(a); // test 'map value'
}

_$AI.filter = function(a,f) {
  if (a===undefined) return undefined; // test 'filter undef'
  if (_.isArray(a)) { // test 'filter list'
    var r=[];
    for (var k in a) {
      var v=a[k];
      if (f(v,k)) r.push(v);
    }
    return r;
  } else if (_.isPlainObject(a)) { // test 'filter traits*'
    var r={};
    for (var k in a) {
      var v=a[k];
      if (f(v,k)) r[k]=v;
    }
    return r;
  } 
  return f(a,undefined)?a:undefined; // test 'filter value*'
}

_$AI.reduce = function(a,f,accum) {
  if (a===undefined) return undefined; // test 'reduce undef'
  if (_.isPlainObject(a)) { // test 'reduce traits*'
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
  if (!_.isArray(a)) a=[a]; // test 'reduce value'
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

_$AI.slice = function(a,start,count) {
  if (a===undefined) return undefined; 
  var end;
  if (start==0) {
    if (count>0) {
      end=count; // start=0, end=count
    } else {
      start=count; // start=-count, end=[end of array]
      end=undefined;
    }
  } else if (count!==undefined){
    end=start+count;
  }
  if (_.isArray(a)) return a.slice(start,end);
  if (_.isPlainObject(a)) throw new Error("Cannot use LIMIT/FIRST/LAST on traits.");
  if (start==0 && (count===undefined || end>0)) return a;
  if (start==-1 && (count===undefined || count<0)) return a;
  return undefined;
}

_$AI.copy = _.clone;

_$AI.overlay = function(l,r) { // test 'overlay'
  if (!isMergable(l)) throw new Error("Attempt to OVERLAY onto something that's not a list or traits.");
  if (!isMergable(r)) throw new Error("Attempt to OVERLAY wih something that's not a list or traits.");
  var result=l?_.clone(l):{};
  for (var i in r) {
    result[i]=r[i];
  }
  //console.log(result);
  return result;
}

// get traits of the elements of src enumerated by keys
_$AI.select = function(src,keys) {
  if (!isMergable(src)) throw new Error("Attempt to SELECT with something that's not a list or traits.");
  var result={};
  if (!isMergable(keys)) { // test 'select value'
    result[keys]=src[keys]
  } if (Array.isArray(keys)) { // test 'select list'
    for (i in keys) result[keys[i]]=src[keys[i]];
  } else { // test 'select traits'
    for (i in keys) result[i]=src[i];
  }
  // test 'select undefined'
  return result;
}

_$AI.merge = function(dest,keys) {
  if (!isMergable(dest)) throw new Error("Attempt to MERGE into something that's not a list or traits.");
  if (!isMergable(keys)) throw new Error("Attempt to MERGE from something that's not a list or traits.");
  for (i in keys) {
    dest[i]=keys[i];
  }
}

_$AI.remove = function(dest,keys) {
  if (!isObject(dest)) throw new Error("Attempt to REMOVE from something that's not traits.");
  if (!isMergable(keys)) {
    delete dest[keys];
  } if (Array.isArray(keys)) {
    for (i in keys) delete dest[keys[i]];
  } else {
    for (i in keys) delete dest[i];
  }
}

_$AI.deepFreeze = function(o) {
  var prop, propKey;
  Object.freeze(o); // First freeze the object.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }
    _$AI.deepFreeze(prop); // Recursively call deepFreeze.
  }
}

_$AI.xor = function(a,b) { // test 'xor'
  return a?(b?false:a):(b?b:false);
}

_$AI.compare = function(a,b) { 
  if (a<b) return -1;
  if (a>b) return 1;
  return 0;
}

_$AI.keys = function(a) {
  var result=[];
  if (Array.isArray(a)) { // test 'keys list'
    var len=a.length;
    for (var i = 0; i<len; result.push(i++));
  } else if (typeof a === 'object' && a !== null) { // test 'keys traits'
    for (var i in a) {
      result.push(i);
    }
  } 
  // test 'keys value' & 'keys undefined'
  return result;
}

_$AI.values = function(a) {
  var result=[];
  if (Array.isArray(a)) { // test 'values list'
    var len=a.length;
    for (var i = 0; i<len; result.push(a[i++]));
  } else if (typeof a === 'object' && a !== null) { // test 'values traits'
    for (var i in a) {
      result.push(a[i]);
    }
  } else if (a !== undefined) { // test 'values value'
    result.push(a);
  }
  // test 'values undefined'
  return result;
}

_$AI.new = function(cls,parm) {
  return SAI.Create(cls,parm);  
}

_$AI.newerror = function(line,file,parameters) {
  var e = new Error(parameters.message,file,line);
  for (var i in parameters) e[i]=parameters[i];
  return e;
}

_$AI.number = function(x) {
  var n=parseFloat(x);
  return isNaN(n)?0:n;
}

_$AI.expects = function(params,prototype,name) {
  for (var j in prototype) {
    type=prototype[j];
    if (j==='_root') {
      if (type===typeof params) {
        // good
      } else if (params.isof && params.isof[type]) {
        // good
      } else {
        if (!params.isof) {
          throw new Error("Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+typeof params);
        } else {
          throw new Error("Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+params.isa);
        }
      }
    } else if (!params[j]) {
      throw new Error("Expected parameter "+j+" in call to "+name);
    } else if (type!==true) {
      var param=params[j];
      if (type===typeof param) {
        // good
      } else if (param.isof && param.isof[type]) {
        // good
      } else {
        if (!param.isof) {
          throw new Error("Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+typeof param);
        } else {
          throw new Error("Expected parameter "+j+" to be of type "+type+" in call to "+name+", but it's a "+param.isa);
        }
      }
    }
  }
}





//////////////// PROTOTYPE

var SAI = exports = module.exports = function() {
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof={};
}

// placeholder
SAI.prototype.Constructor=function() {}



///////////////////////////////////// PARSER AND TRANSPILER

// Multiline Function String - Nate Ferrero - Public Domain
hereDoc = function (f) {
    return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
};

var indentParserSource=hereDoc(function() {/*
  {
  function start(first, tail) {
    var done = [];
    if (first) done.push(first[1]);
    for (var i = 0; i < tail.length; i++) {
      //if (tail[i][1]) {
        done = done.concat(tail[i][1][0])
        done.push(tail[i][1][1]);
      //}
    }
  //console.log(done);
    return done;
  }

  var depths = [0];

  function indent(s) {
    var depth = s.length;

    if (depth == depths[0]) return [];

    if (depth > depths[0]) {
      depths.unshift(depth);
      return ["{"];
    }

    var dents = [];
    while (depth < depths[0]) {
      depths.shift();
      dents.push("}");
    }

    if (depth != depths[0]) dents.push("!! BAD INDENTING !!");

    return dents;
  }
}

start   = first:line tail:(newline line)* newline? { return start(first, tail) }
line    = depth:indent s:text                      { return [depth, s] }
indent  = s:" "*                                   { return indent(s) }
text    = c:[^\n\r]*                                 { return c.join("") }
newline = "\n"/"\r"/"\r\n"                         {}
  
*/});
  
  
SAI.prototypes={};
SAI.protogens={};
SAI.isa={};
SAI.config=SAIconfig;
  
SAI.GetParser = function() {
  var indentParser = PEG.buildParser(indentParserSource);
  try {
    var grammarFile=__dirname + "/saigrammar.peg";
    var parserFile=__dirname + "/saigrammar.cached";
    if (!fs.existsSync(parserFile) || fs.statSync(grammarFile).mtime>fs.statSync(parserFile).mtime) {
      var grammar=fs.readFileSync(grammarFile).toString();
      var mainParser=PEG.buildParser(grammar,{output:'source',optimize:'speed',cache:true});
      fs.writeFileSync(parserFile,mainParser);
    } else {
      mainParser=fs.readFileSync(parserFile).toString();
    }
  } catch (e) {
    console.log('HEY WE GOT A PARSE ERROR IN THE MAIN GRAMMAR');
    console.log(e);
    if (grammar) {
      var beg=grammar.substring(e.offset-50,e.offset);
      var end=grammar.substring(e.offset,e.offset+50);
      var context="\n"+beg+'(HERE)'+end;
      if (e.offset<grammar.length) {
        console.log(context);      
      }
    }
    return null;
  }
  mainParser=eval(mainParser);
  //console.log (mainParser.parse.toString());
  return function(source,bound,fn) {
    source+='\n\n';
    source=source.replace(/\/\/[^\r\n]*$/gm, '');
    //console.log(commentStrippedSource);
    var newlineStrippedSource=source.replace(/^\s*$[\n\r]{1,}/gm, '');
    indentedSource=indentParser.parse(newlineStrippedSource).join('\n');
    //console.log(indentedSource);
    var parser;
    try {
      parser=mainParser.parse(indentedSource,{bound:bound,globals:SAI.config.verbs,filename:fn});
    } catch (e) {
      console.log('HEY WE GOT A PARSE ERROR IN YOUR SAI CODE at '+e.offset);
      var beg=indentedSource.substring(e.offset-50,e.offset);
      var end=indentedSource.substring(e.offset,e.offset+50);
      var context="\n"+beg+'(HERE)'+end;
      
      console.log(e);
      console.log(context);
      return false;
    }
    //parser=Beautify(parser,{ indent_size: 2, preserve_newlines: false});
    //console.log(parser);
    return parser;
  }
}();


SAI.config.Loader = SAI.GetSourceFromPaths = function(name) {
  var filename;
  var raw=undefined;
  for (var i in SAI.config.paths) {
    var path=SAI.config.paths[i];
    filename=path+'/'+name+'.sai';
    try {
      raw=fs.readFileSync(filename).toString();
    } catch (e) {
      ;
    }
    if (raw) return {success:true,source:raw,info:filename};
  }
  return {
    success:false,
    info:'SAI.GetSourceFromPaths: Could not load '+name+'. Check SAI.config.paths: ['+SAI.config.paths.join(';')+']'
  };
}


SAI.GetProtogen = function(name) {
  var protogen=SAI.protogens[name];
  if (!protogen) {
    var s1=new Date();
    var load=SAI.config.Loader(name);
    if (!load.success) {
      throw new Error('SAI.GetProtogen: Could not load object '+name+', reason given: '+load.info);
    }
    var source=SAI.GetParser(load.source);
    source='var __info="'+load.info+'";\n'+source;
    protogen=new Function('prototype','options','require','_$AI',source);
    if (!protogen) {
      throw new Error("SAI.GetProtogen: ERROR IN GENERATED CODE "+name);
    }
    var s2=new Date();
    if (SAI.config.options.speedometer) console.log("Compiled "+name+" in "+(s2-s1)+"ms.");
    SAI.protogens[name]=protogen;
  }  
  return protogen;
}


SAI.GetPrototype = function(name,bindings) {
  var proto=SAI.prototypes[name];
  //console.log("** WANT "+name);
  if (proto) {
    //console.log("** HAVE "+name);
  } else {
    //console.log("** MAKING "+name);
    var heritage=[name]
    var ancestors={};
    var nodupes={};
    
    while (heritage.length) {
      var leaf=heritage.shift();
      if (!nodupes[leaf]) {
        nodupes[leaf]=true;
        var obj=new SAI(name); 
        var protogen=SAI.GetProtogen(leaf);
        protogen(obj,{name:leaf},require,_$AI); 
        obj.Constructor();
        if (!obj.isa) {
          throw new Error("SAI.GetPrototype: object loaded as "+leaf+" does not have an 'isa' type identifier in its manifest.")
        }
        //console.log("object "+leaf);
        var inherits=obj.__inherits;
        if (inherits) {
          //console.log("  inherits "+inherits);
          ancestors[leaf]=inherits;
          for (var i in inherits) {
            var parent=inherits[i];
            heritage.push(parent);
          }
        }
      }
    }

    //console.log("Creating prototype for "+name);
    var proto=new SAI(name);
    var adopt=function(name) {
      var list=ancestors[name];
      if (list) {
        for (var i in list) {
          adopt(list[i]);
        }
      }
      //console.log("  from "+name);
      var protogen=SAI.GetProtogen(name);
      protogen(proto,{name:name},require,_$AI);
    }
    adopt(name);
    
    Object.defineProperty(proto,"isa",{enumerable: false, value:proto.isa}); // lock it down
    if (SAI.isa[proto.isa]) {
      throw new Error("Object defined by '"+name+"' has a duplicate .isa type identifier '"+proto.isa+"',  identical to "+SAI.isa[proto.isa]);
    }
    
    SAI.isa[proto.isa]=name;
    for (var i in proto.__tobelocked) {
      var l=proto.__tobelocked[i];
      Object.defineProperty(proto,l,{configurable:false,writable:false});
    }
    delete proto.__tobelocked;
    for (var i in proto.__tobefrozen) {
      var l=proto.__tobefrozen[i];
      _$AI.deepFreeze(proto[proto.__tobefrozen[i]]);
    }
    delete proto.__tobefrozen;
    if (proto.__unverified) {
      for (var i in proto.__contracts) {
        var l=proto.__contracts[i];
        if (!proto[l]) {
          throw new Error("Contractually required task '"+l+"' does not exist in object '"+proto.isa+"'.");
        } else {
          //console.log("Contract test: "+proto.isa+" does indeed have a "+l+" property.");
        }
      }
      delete proto.__unverified;
    }

    if (bindings) {
      for (var i in bindings.properties) {
        Object.defineProperty(proto,i,{ get: bindings.properties[i]});
      }
      for (var i in bindings.functions) {
        proto[i]=bindings.functions[i];
      }
    }
    proto.constructor=function() {
      var obj=Object.create(proto);
      obj.Constructor();
      if (obj.Instantiate) {
        obj.Instantiate.apply(obj,arguments)
      }
      return obj;
    }
    SAI.prototypes[name]=proto;
  }
  return proto;
}

SAI.Require = function(name) {
  //console.log("* REQUIRE "+name);
  proto=SAI.GetPrototype(name).constructor;
  if (!proto) throw new Error('SAI.Require: Do not know how to create SAI object "'+name+'".');
  return proto;
}

SAI.Create = function(name,parameters) {
  var proto=SAI.GetPrototype(name);
  if (!proto) throw new Error('SAI.Create: Do not know how to create SAI object "'+name+'".');
  var obj=Object.create(proto); 
  obj.Constructor();
  if (obj.Instantiate) obj.Instantiate.apply(obj,parameters);
  return obj;
}

SAI.Configure = function(config) {
  //console.log("SAI.configure");
  //console.log(config);
  if (config.paths) {
    SAI.config.paths=config.paths;
  }
  if (config.verbs) {
    _$AI.merge(SAI.config.verbs,config.verbs);
  }
  if (config.options) {
    _$AI.merge(SAI.config.options,config.options);
  }
  if (config.Loader) {
    SAI.config.Loader=config.Loader;
  }
}


/*
/////// APPLICATION SPECIFIC

var SAIObjId={};

SAI.spawn = function(name,host,bindings,parameters) {
  if (bindings && host===undefined) {
    throw new Error("Cannot have undefined host in object spawn for "+name);
  }
  var proto=getPrototype(name,bindings);
  var obj=Object.create(proto); 
  obj.Constructor();
  obj.__host=host;
  if (obj.unique) {
    var id=SAIObjId[name] || 0;
    SAIObjId[name]=++id;
    obj.id=obj.isa+','+id;
  } else {
    obj.id=obj.isa;
  }
  if (obj.Instantiate) obj.Instantiate(parameters);
  return obj;
}
*/