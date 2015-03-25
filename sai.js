var fs = require('fs');
var PEG = require('pegjs');
var Beautify=require('js-beautify').js_beautify;

var _ = require('lodash');


var SAIverbs =  {
  debug: 'console.log',
  require: 'require',
}

var SAIpaths=[__dirname+'/'];
var SAIprototypes={};
var SAIprotogens={};
var SAIisa={};

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


// MODULE INTERFACE

var SAI = exports = module.exports = function() {
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof=[];
}



//////////////// PROTOTYPE

SAI.prototype.sai = {
  dirname:__dirname
}

SAI.prototype.__sort = function(a,f) {
  if (!_.isArray(a)) {
    if (_.isPlainObject(a)) {
      a=_.values(a);
    } else {
      return a;
    }
  }
  return a.sort(f);
};

SAI.prototype.__map = _.map;

SAI.prototype.__filter = _.filter;

SAI.prototype.__reduce = _.reduce;

SAI.prototype.__copy = _.clone;

SAI.prototype.__overlay = function(l,r) { // test 'overlay'
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
SAI.prototype.__select = function(src,keys) {
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

SAI.prototype.__merge = function(dest,keys) {
  if (!isMergable(dest)) throw new Error("Attempt to MERGE into something that's not a list or traits.");
  if (!isMergable(keys)) throw new Error("Attempt to MERGE from something that's not a list or traits.");
  for (i in keys) {
    dest[i]=keys[i];
  }
}

SAI.prototype.__remove = function(dest,keys) {
  if (!isObject(dest)) throw new Error("Attempt to REMOVE from something that's not traits.");
  if (!isMergable(keys)) {
    delete dest[keys];
  } if (Array.isArray(keys)) {
    for (i in keys) delete dest[keys[i]];
  } else {
    for (i in keys) delete dest[i];
  }
}

SAI.prototype.__deepFreeze = function(o) {
  var prop, propKey;
  Object.freeze(o); // First freeze the object.
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }
    this.__deepFreeze(prop); // Recursively call deepFreeze.
  }
}

SAI.prototype.__xor = function(a,b) { // test 'xor'
  return a?(b?false:a):(b?b:false);
}

SAI.prototype.__keys = function(a) {
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

SAI.prototype.__values = function(a) {
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

SAI.prototype.__new = function(cls,parm) {
  return SAI.create(cls,parm);  
}

SAI.prototype.__newerror = function(line,file,parameters) {
  var e = new Error(parameters.message,file,line);
  for (var i in parameters) e[i]=parameters[i];
  return e;
}

SAI.prototype.__number = function(x) {
  var n=parseFloat(x);
  return isNaN(n)?0:n;
}

SAI.prototype.__expects = function(params,prototype,name) {
  //console.log("EXPECTS");
  //console.log(params);
  //console.log(prototype);
  //console.log(name);
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
  
  
  
SAI.getParser = function() {
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
    //var commentStrippedSource=source.replace(/\/\/[^\r\n]*$/gm, '');
    //console.log(commentStrippedSource);
    var newlineStrippedSource=source.replace(/^\s*$[\n\r]{1,}/gm, '');
    indentedSource=indentParser.parse(newlineStrippedSource).join('\n');
    //console.log(indentedSource);
    var parser;
    try {
      parser=mainParser.parse(indentedSource,{bound:bound,globals:SAIverbs,filename:fn});
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



getProtogen = function(name) {
  var protogen=SAIprotogens[name];
  if (!protogen) {
    var filename;
    var s1=new Date();

    var raw=undefined;
    for (var i in SAIpaths) {
      var path=SAIpaths[i];
      filename=path+'/'+name+'.sai';
      try {
        //console.log("try to load: "+filename);
        raw=fs.readFileSync(filename).toString();
      } catch (e) {
        ;
      }
      if (raw) break;
    }
    if (!raw) {
      throw new Error('SAI: Could not load object '+name+'.\nCheck SAIpaths: ['+SAIpaths.join(';')+']');
    }
    var source=SAI.getParser(raw);
    source='var __filename="'+filename+'";\n'+source;
    //console.log(source);
    protogen=new Function('prototype','options','require',source);
    if (!protogen) {
      throw new Error("ERROR IN SAI CODE "+name);
      process.exit();
    }
    var s2=new Date();
    console.log('Compiled '+name+' in '+(s2-s1)+"ms.");

    
    SAIprotogens[name]=protogen;
  }
  
  return protogen;
}


var getPrototype = function(name,bindings) {
  var proto=SAIprototypes[name];
  //console.log("** WANT "+name);
  if (proto) {
    //console.log("** HAVE "+name);
  } else {
    //console.log("** MAKING "+name);
    var heritage=[name]
    var ancestors=[name];
    var nodupes={};
    
    while (heritage.length) {
      var leaf=heritage.shift();
      if (!nodupes[leaf]) {
        nodupes[leaf]=true;
        var obj=new SAI(name); 
        var protogen=getProtogen(leaf);
        protogen(obj,{name:leaf},require); 
        obj.Constructor();
        if (!obj.isa) {
          throw new Error("Object defined by "+name+" does not have an 'isa' type identifier in its manifest.")
        }
        var inherits=obj.__inherits;
        if (inherits) {
          for (var i in inherits) {
            var parent=inherits[i];
            ancestors.unshift(parent);
            heritage.push(parent);
          }
        }
      }
    }

    //console.log("Creating prototype for "+name);
    var proto=new SAI(name);
    for (var i in ancestors) {
      var parent=ancestors[i];
      var protogen=getProtogen(parent);
      protogen(proto,{name:parent},require);
    }
    Object.defineProperty(proto,"isa",{enumerable: true, value:proto.isa}); // lock it down
    if (SAIisa[proto.isa]) {
      throw new Error("Object defined by '"+name+"' has a duplicate .isa type identifier '"+proto.isa+"',  identical to "+SAIisa[proto.isa]);
    }
    
    SAIisa[proto.isa]=name;
    for (var i in proto.__tobelocked) {
      var l=proto.__tobelocked[i];
      Object.defineProperty(proto,l,{configurable:false});
    }
    delete proto.__tobelocked;
    for (var i in proto.__tobefrozen) {
      var l=proto.__tobefrozen[i];
      proto.__deepFreeze(proto[proto.__tobefrozen[i]]);
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
    SAIprototypes[name]=proto;
  }
  return proto;
}

SAI.require = function(name) {
  //console.log("* REQUIRE "+name);
  proto=getPrototype(name).constructor;
  if (!proto) throw new Error('Do not know how to create SAI object "'+name+'".');
  return proto;
}

SAI.create = function(name,parameters) {
  var proto=getPrototype(name);
  if (!proto) throw new Error('Do not know how to create SAI object "'+name+'".');
  var obj=Object.create(proto); 
  obj.Constructor();
  if (obj.Instantiate) obj.Instantiate.apply(obj,parameters);
  return obj;
}

SAI.configure = function(config) {
  //console.log("SAI.configure");
  //console.log(config);
  if (config.paths) {
    SAIpaths=config.paths;
  }
  if (config.verbs) {
    SAI.prototype.__merge(SAIverbs,config.verbs);
  }
}



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