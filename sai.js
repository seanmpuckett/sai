var fs = require('fs');
var PEG = require('pegjs');

var Beautify=require('js-beautify').js_beautify; // optional
if (!Beautify) var Beautify=function(a) { return a; }



////////////////////////////////////////////////////////////////////////////////////
//
//  default configuration

var SAIconfig = {
  verbs: {
    debug: 'console.log',
    require: 'require',
    assert: '_$AI.assert'
  },
  paths: [__dirname+'/'],
  options: {
    speedometer: false, // print compile times
    beautify: true       // run generated code through beautify
  },
  Loader: 'default source loader (linked later in this file)'
}


/////////////////////////////////////////////////////////////////////////////////
//
//  runtime library functions

var _$AI=require('./sailib');


//////////////////////////////////////////////////////////////////////////////////
//
//  object prototype

var SAIproto = function() {
  this.Constructor=function(){};
  this.__tobelocked=[];
  this.__tobefrozen=[];
  this.__contracts=[];
  this.__unverified=true;
  this.isof={};
}



/////////////////////////////////////////////////////////////////////////////////
//
//  Exports

var SAI = exports = module.exports = function() {}
  
SAI.prototypes={};
SAI.source={};
SAI.protogens={};
SAI.isa={};
SAI.config=SAIconfig;
SAI.persist={globalcount:1}; // internal
  
// converts semantic whitespace into braces for easier parsing.
SAI.Dedenter=function(src) {
  var lines=src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
  var indent=[0];
  var out=[];
  for (var i=0; i<lines.length; i++) {
    var line=lines[i];
    var depth=0;
    while (line[depth]==' ') depth++;
    if (depth==line.length) {
      out.push(''); // empty line
    } else {
      line=line.substr(depth);
      if (line.substr(0,2)=='//') { // whole-line comment (ignores indent)
        out.push(line);
      } else if (depth==indent[0]) { // same depth
        out.push(line);
      } else if (depth>indent[0]) { // indenting
        out.push('{');
        out.push(line);
        indent.unshift(depth);
      } else { // outdenting
        while (depth<indent[0]) {
          out.push('}');
          indent.shift();
        }
        if (depth!=indent[0]) {
          for (var context='',j=i-3; j<i+4; j++) if (j>=0 && j<lines.length) context+=j+(i==j?'->':'  ')+lines[j]+'\n';
          throw new Error("SAI: indenting error\n"+context);
        }
        out.push(line)
      }
    }
  }
  while (indent.shift()>0) out.push('}');
  return [out.join('\n')+'\n'];
}

// transforms a segment of parse-ready code back into indented for inspection
SAI.Contexualize=function(source,offset) {
  var context=source.substring(offset-100,offset);
  context+='<HERE>';
  context+=source.substring(offset,offset+100);
  
  var ind=0,minind=0;
  var lines=context.split('\n');
  for (var i in lines) {
    var line=lines[i];
    if (line=='{') ind++;
    else if (line=='}') ind--;
    if (ind<minind) minind=ind;
  }
  ind=-minind;
  var newcontext='';
  var dup=function(s,x) { var ret=''; while (x-->=0) ret+=s; return ret; }
  for (var i in lines) {
    var line=lines[i];
    if (line=='{') ind++;
    else if (line=='}') ind--;
    else newcontext+=dup('  ',ind)+line+'\n';
  }
  return newcontext+"\n"+context;
}
  
  
SAI.GetParser = function() {
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
  return function(rawsource,bound,fn) {
    rawsource+='\n\n';
    var dedent=SAI.Dedenter(rawsource);
    var source=dedent[0];
    var js='';
    try {
      js=mainParser.parse(source,{
        bound:bound,
        globals:SAI.config.verbs,
        persist:SAI.persist,
        filename:fn}
      );
    } catch (e) {
      var info='\nSAI: Syntax error <HERE> in '+fn+'\n\n';
      var context=SAI.Contexualize(source,e.offset);
      info+=context+'\n\n'+e.message+'\n\n';
      throw new Error(info);
    }
    if (SAIconfig.options.beautify) {
      js=Beautify(js,{ indent_size: 2, preserve_newlines: false});
    }
    return js;
  }
};
  
// build and bind parser

SAI.Parse = SAI.GetParser();

// set default loader

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

SAI.Compile = function(source) {
  return new Function('prototype','options','require','_$AI',source);
}

SAI.GetProtogen = function(name) {
  var protogen=SAI.protogens[name];
  if (!protogen) {
    var s1=new Date();
    var load=SAI.config.Loader(name);
    if (!load.success) {
      throw new Error('SAI.GetProtogen: Could not load object '+name+', reason given: '+load.info);
    }
    var source=SAI.Parse(load.source,undefined,load.info);
    source='var __loadinfo=decodeURI("'+encodeURI(load.info)+'");\n'+source;
    console.log(source);
    protogen=SAI.Compile(source);
    if (!protogen) throw new Error("SAI.GetProtogen: ERROR IN GENERATED CODE "+name);
    var s2=new Date();
    if (SAI.config.options.speedometer) console.log("Compiled "+name+" in "+(s2-s1)+"ms.");
    SAI.protogens[name]=protogen;
    SAI.source[name]=source;
  }  
  return protogen;
}


SAI.GetAncestors = function(name) {
  var heritage=[name]
  var ancestors={};
  var nodupes={};
  
  while (heritage.length) {
    var leaf=heritage.shift();
    if (!nodupes[leaf]) {
      nodupes[leaf]=true;
      var obj=new SAIproto(name); 
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
  return ancestors;
}


SAI.FinalizePrototype = function(proto) {
  for (var i in proto.__tobelocked)
    Object.defineProperty(proto,proto.__tobelocked[i],{configurable:false});
  delete proto.__tobelocked;
  for (var i in proto.__tobefrozen) 
    _$AI.deepFreeze(proto[proto.__tobefrozen[i]]);
  delete proto.__tobefrozen;
  if (proto.__unverified) {
    for (var i in proto.__contracts) {
      var l=proto.__contracts[i];
      if (undefined===proto[l]) {
        throw new Error("SAI: Contractually required trait '"+l+"' does not exist in object '"+proto.isa+"'.");
      } else {
        //console.log("Contract test: "+proto.isa+" does indeed have a "+l+" property.");
      }
    }
    delete proto.__unverified;
    delete proto.__contracts;
  }
  proto.constructor=function() {
    var obj=Object.create(proto);
    if (obj.Constructor) obj.Constructor();
    if (obj.Instantiate) obj.Instantiate.apply(obj,arguments);
    return obj;
  };
}


SAI.GetPrototype = function(name,bindings) {
  var proto=SAI.prototypes[name];
  if (!proto) {
    var ancestors=SAI.GetAncestors(name);

    //console.log("Creating prototype for "+name);
    var proto=new SAIproto(name);
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
      throw new Error("SAI: Object defined by '"+name+"' has a duplicate .isa type identifier '"+proto.isa+"',  identical to "+SAI.isa[proto.isa]);
    }
    SAI.isa[proto.isa]=name;

    SAI.FinalizePrototype(proto);
    
/*    if (bindings) {
      for (var i in bindings.properties) {
        Object.defineProperty(proto,i,{ get: bindings.properties[i]});
      }
      for (var i in bindings.functions) {
        proto[i]=bindings.functions[i];
      }
    }
*/    
    SAI.prototypes[name]=proto;
  }
  return proto;
}


SAI.GetSource = function(name) {
  var ancestors=SAI.GetAncestors(name);
  var source=
//    'var _$AI=require("./sailib");\n'+
    'var proto='+SAIproto.toString()+';\n'+
    'var prototype=new proto();\n';
    
  var adopt=function(name) {
    var list=ancestors[name];
    if (list) {
      for (var i in list) {
        adopt(list[i]);
      }
    }
    source+=SAI.source[name]+'\n';
  }
  adopt(name);

  source+='var fn='+SAI.FinalizePrototype.toString()+'(prototype);\n';
  source+='var pro=prototype.constructor;\n';
  source+='exports=pro; try { module.exports=pro; } catch(e) {}\n';
  source+='console.log("hey");\n';
  source+='return pro;\n';
  var lines=source.split('\n');
  for (var i in lines) console.log((1+parseInt(i))+': '+lines[i]);
  
  return source;
}

SAI.Require = function(name) {
  proto=SAI.GetPrototype(name).constructor;
  if (!proto) throw new Error('SAI.Require: Do not know how to create SAI object "'+name+'".');
  return proto;
}

SAI.Create = _$AI.new = function(name,parameters) {
  var proto=SAI.GetPrototype(name);
  if (!proto) throw new Error('SAI.Create: Do not know how to create SAI object "'+name+'".');
  var obj=Object.create(proto); 
  if (obj.Constructor) obj.Constructor();
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
    _$AI.update(SAI.config.verbs,config.verbs);
  }
  if (config.options) {
    _$AI.update(SAI.config.options,config.options);
  }
  if (config.Loader) {
    SAI.config.Loader=config.Loader;
  }
}

