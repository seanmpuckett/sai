////////////////////////////////////////////////////////////////////////////////////
//
// SAI.JS
//
// Framework for SAI language.
//
// Designed by Sean M Puckett
//

"use strict";

var fs = require('fs');

var Beautify=function(a) { return a; };
try {
  Beautify=require('js-beautify').js_beautify; // optional
} catch(e) {
  // no beautification
}


////////////////////////////////////////////////////////////////////////////////////
//
//  default configuration
//
//  VERBS
//  You can add your own case-sensitive verbs by adding them to the _verbs_ array.
//  Verbs should be text that compiles to an executable function.
//
//  PATHS
//  The list of paths is searched when calling SAI.Require when using the default loader.
//
//  OPTIONS
//  as shown
//
//  LOADER
//  The Loader is a function that, when passed the name of an object, returns the SAI
//  source code for that object. Change the loader if you want to load code from somewhere
//  other than the disk.
//

var SAIconfig = {
  verbs: {
    debug: '$AI.debug',
    require: 'require',
    assert: '$AI.assert'
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

var $AI=require('sai-library');


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
SAI.proto=$AI._prototype;
  
// Dedenter
//
// Converts semantic whitespace into braces for easier parsing.
//
SAI.Dedenter=function(src) {
  var lines=src.split(/\r\n|[\r\n\u0085\u2028\u2029]/);
  var indent=[0];
  var out=[];
  var heredoc=false;
  
  if (lines[0].substr(0,2)==="#!") {
    lines.shift(); // get rid of shebang
  }
  
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

// Contextualize
//
// transforms a segment of parse-ready code back into indented for inspection
//
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
  return newcontext;//+"\n"+context;
}
  
// GetParser
//
// Returns a function that will parse SAI code into Javascript
//
// If the grammar file (saigrammar.peg) is newer than the current parser
// (saigrammar.js), uses PEGjs to recompile the grammar and save the parser.
//
SAI.GetParser = function() {
  try {
    var grammarFile=__dirname + "/saigrammar.peg";
    var parserFile=__dirname + "/saigrammar.js";
    if (!fs.existsSync(parserFile) || fs.statSync(grammarFile).mtime>fs.statSync(parserFile).mtime) {
      var PEG = require('pegjs');
      var grammar=fs.readFileSync(grammarFile).toString();
      var mainParser=PEG.generate(grammar,{
        allowedStartRules: ['startFile', 'startExpression'],
        output:'source',
        optimize:'size',
        trace:0,
        cache:true
      });
      fs.writeFileSync(parserFile,mainParser);
    } else {
      mainParser=fs.readFileSync(parserFile).toString();
    }
  } catch (e) {
    var msg='SAI: Could not compile saigrammar.peg.\n  Is pegjs available?\n  Is there a syntax error in the grammar?\n\n';
    msg+=e;
    if (grammar) {
      var beg=grammar.substring(e.offset-50,e.offset);
      var end=grammar.substring(e.offset,e.offset+50);
      var context="\n"+beg+'(HERE)'+end+"\n";
      if (e.offset<grammar.length) {
        msg+=context;      
      }
    }
    throw new Error(msg);
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
        startRule:fn?'startFile':'startExpression',
        bound:bound,
        globals:SAI.config.verbs,
        persist:SAI.persist,
        filename:fn}
      );
    } catch (e) {
      var info='';
      if (e.location) {
        info+='\nSAI: Syntax error <HERE> in '+JSON.stringify(fn)+'\n\n';
        var context=SAI.Contexualize(source,e.location.start.offset,e.location.end.offset);
        info+=context+'\n\n'+e.message+'\n\n';
        
      } else {
        info+="\nSAI: Error creating prototype:\n\n";
        info+=e.toString();
      }
      throw new Error(info);
    }
    if (SAIconfig.options.beautify) {
      js=Beautify(js,{ indent_size: 2, preserve_newlines: false, "brace_style": "collapse",});
    }
    return js;
  }
};
  
// Parse
//
// Build and bind parser
//
SAI.Parse = SAI.GetParser();


// GetSourceFromPaths -> config.Loader
//
// The basic loader which fetches SAI source by name from the provided list of 
// directories.
//
SAI.config.Loader = SAI.GetSourceFromPaths = function(name) {
  var filename='';
  var raw=undefined;
  var mtime=0;
  for (var i in SAI.config.paths) {
    var path=SAI.config.paths[i];
    var opts=['.sai',''];
    for (var opt in opts) {
      filename=path+'/'+name+opts[opt];
      try {
        raw=fs.readFileSync(filename).toString();
        mtime=fs.statSync(filename).mtime;
        break;
      } catch (e) {
        ;
      }
    }
    if (raw) return {success:true,source:raw,context:{
      name:name,
      loader:'SAI.GetSourceFromPaths',
      path:filename,
      mtime:mtime,
      fetched:new Date()
    }};
  }
  return {
    success:false,
    context:'SAI.GetSourceFromPaths: Could not load '+name+'. Check SAI.config.paths: ['+SAI.config.paths.join(';')+']'
  };
}

// Compile
//
// Create a function that compiles parsed SAI source, binding the variables
// needed to integrate necessary scope and the SAI runtime library.
//
SAI.Compile = function(source) {
  return new Function('prototype','options','require','$AI',source);
}

// ProtoGen
//
// Create a fully scoped Javascript prototype for a single object (ignoring inheritance)
//
SAI.GetProtogen = function(name) {
  var protogen=SAI.protogens[name];
  if (!protogen) {
    var s1=new Date();
    var load=SAI.config.Loader(name);
    if (!load.success) {
      throw new Error('SAI.GetProtogen: Could not load object '+name+', reason given: '+load.context);
    }
    var source=SAI.Parse(load.source,undefined,load.context);
    source='var __context='+JSON.stringify(load.context)+';\n'+source;
    //console.log(source);
    protogen=SAI.Compile(source);
    if (!protogen) throw new Error("SAI.GetProtogen: ERROR IN GENERATED CODE "+name);
    var s2=new Date();
    if (SAI.config.options.speedometer) console.log("Compiled "+name+" in "+(s2-s1)+"ms.");
    SAI.protogens[name]=protogen;
    SAI.source[name]=source;
  }  
  return protogen;
}

// Expression
//
// Compile a single SAI expression, out of context except for the runtime library.
//
SAI.Expression = (source) => {
  var jssource="return "+SAI.Parse(source,undefined,undefined);
  return SAI.Compile(jssource)(this,{},require,$AI);
}

// GetAncestors
//
// Build a list of objects that the given object depends on
//
SAI.GetAncestors = function(name) {
  var heritage=[name]
  var ancestors={};
  var nodupes={};
  
  while (heritage.length) {
    var leaf=heritage.shift();
    if (!nodupes[leaf]) {
      nodupes[leaf]=true;
      var obj=new SAI.proto(name); 
      var protogen=SAI.GetProtogen(leaf);
      protogen(obj,{name:leaf},require,$AI); 
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

// GetPrototype
// 
// Given a name, locate all ancestors, create all prototypes,
// initialize primary prototype object, describe properties,
// save the result in a cache (SAI.prototypes) and return it.
//
SAI.GetPrototype = function(name,bindings) {
  var proto=SAI.prototypes[name];
  if (!proto) {
    var ancestors=SAI.GetAncestors(name);
    var proto=new SAI.proto(name);

    var adopt=function(name) {
      var list=ancestors[name];
      if (list) {
        for (var i in list) {
          adopt(list[i]);
        }
      }
      var protogen=SAI.GetProtogen(name);
      protogen(proto,{name:name},require,$AI);
    }

    adopt(name);
    
    Object.defineProperty(proto,"isa",{enumerable: false, value:proto.isa}); // lock it down
    if (SAI.isa[proto.isa]) {
      throw new Error("SAI: Object defined by '"+name+"' has a duplicate .isa type identifier '"+proto.isa+"',  identical to "+SAI.isa[proto.isa]);
    }
    SAI.isa[proto.isa]=name;

    $AI.finalizePrototype(proto);
    SAI.prototypes[name]=proto;
  }
  return proto;
}

// GetSource
//
// Get full native JS source code for an object, by name.
//
SAI.GetSource = function(name) {
  var ancestors=SAI.GetAncestors(name);
  var source=
    '// Javascript source for '+name+' transpiled by SAI\n'+
    '//\n'+
    '"use strict";\n'+
    'var $AI=require("sai-library");\n'+
    'var prototype=new $AI._prototype();\n'+
    '\n// Generated code follows\n\n';
    
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

  source+='\n// End of generated code\n\n';
  source+='$AI.finalizePrototype(prototype);\n';
  source+='var pro=prototype.constructor;\n';
  source+='exports=pro; try { module.exports=pro; } catch(e) {}\n';
  source+='if (prototype.isof[isa].main) var main=pro();\n';
  source+='return pro;\n';
  
  return source;
}

// Require
//
// Return a prototype object by name
//
SAI.Require = function(name) {
  var proto=SAI.GetPrototype(name).constructor;
  if (!proto) throw new Error('SAI.Require: Do not know how to create SAI object "'+name+'".');
  return proto;
}

// Create
//
// Create an object by name (an alternative to using new on what Require gives you)
//
SAI.Create = $AI.create = function(name,parameters) {
  var proto=SAI.GetPrototype(name);
  if (!proto) throw new Error('SAI.Create: Do not know how to create SAI object "'+name+'".');
  var obj=Object.create(proto); 
  if (obj.Constructor) obj.Constructor();
  if (obj.Instantiate) obj.Instantiate.apply(obj,parameters);
  return obj;
}

// Configure
//
// Update configuration settings individually or as a group
//
SAI.Configure = function(config) {
  if (config.paths) {
    SAI.config.paths=config.paths;
  }
  if (config.verbs) {
    $AI.update(SAI.config.verbs,config.verbs);
  }
  if (config.options) {
    $AI.update(SAI.config.options,config.options);
  }
  if (config.Loader) {
    SAI.config.Loader=config.Loader;
  }
}

