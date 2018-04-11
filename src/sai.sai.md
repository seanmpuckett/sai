# SAI Language 

Main framework.

MIT License. Created by Sean M Puckett <sean.m.puckett@gmail.com>


## Constants

The `reference` section holds global constants.

    reference:
      FS require('fs')
      PATH require('path')
      SAILIB require('sai-library')
      DIRNAME ~__dirname
      INDENT '%%INDENT%%'
      DEDENT '%%DEDENT%%'
  
  
### Default configuration structure

SAI's configuration defaults are defined here.  It's best to not change these.  Use the `Configure` method in this object to effect changes.

      DEFAULT_config:

_Globals:_ You can add your own case-sensitive globals by adding them to the _globals_ array. Verbs should be text that compiles to a recognizable JS value.  We can't directly import `process` because that's a SAI keyword, so both it and `console` get a prefix to identify them as external objects.

        globals:
          'debug' '$AI.debug_op'
          'require' '__require'
          'assert' '$AI.assert'
          'environment' '$AI.environment'
          'jsprocess' 'process' 
          'jsconsole' 'console'

_Imports_: bring some Javascript and node globals into the SAI namespace. This list is integrated into the above array as a verbatim translation.

        imports list
          parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent
          Object, Function, Boolean, Symbol
          Error, EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
          Math, Number, Date, String, RegExp, Intl
          Array, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array
          Float32Array, Float64Array, Map, Set, WeakMap, WeakSet
          ArrayBuffer, DataView, JSON  

_Paths_: The list of paths is searched when calling SAI.Require when using the default loader.

        paths:
          DIRNAME + '/'

_Options_: __speedometer__ displays compile time for each module. __beautify__ runs generated javascript through a beautifier. Recommended because the native source is ugly. __linenos__ includes original `.sai` line numbers as comments in the generated `.js` file. 

        options:
          speedometer false
          beautify true
          linenos false

_Loader_: The function called when `create` is invoked. Hook or redefine this in order to alter how SAI processes requests for source.  Initialized later in the `Clean` method.

        Loader undefined


### Built-in Constructs 

These are the names of SAI objects that will be loaded to populate the `pipers` and `constructs` metadata.

      CONSTRUCTS list 
        StateC, PromisingC, ReturnC, IterateC, TryCatchC, IfElseC, SwitchC, MiscC
        ListsP, QueryP, CrudP
        Keywords


### Construct Syntax

The *keys* in the following  object definitions are the valid parse codes for the different types of grammar.  

The *value* associated with each key is a human-readable string that describes what the parse code is looking for. This text will form part of the automatic documentation generator.

      VALIDSYNTAX: 
    
        constructs:
          'block'         '[indent code block]'
          'exprout'       '[expr] (AS var1, var2...)'
          'exproutblock'  '[expr] (AS var1, var2...) [indent code block]'
          'exprs'         '[expr1 (, expr2, ...)]'
          'exprsblock'    '[expr1 (, expr2, ...)] [indent code block]'
          'exprsoutblock' '[expr1 (, expr2, ...)] (AS var1, var2, ...) [indent code block]'
          'exprsusing'    '[expr1 (, expr2, ...)] USING [function reference]'
          'exprusing'     '[expr] USING [function reference]'
          'none'          ' '
          'outblock'      '(AS var1, var2...) [indent code block]'
          'rvalue'        '[variable]'
          'verb'          '[verb sentence]'
      
        pipers:
          'expr'          '[expr]'
          'exprs'         '[expr1 (, expr2, ...)]'
          'none'          ' '
          'outblock'      '(AS var1, var2...) [indent code block]'
          'use'           'USING [function reference]'
          'valexpr'       '[value] [expr]'
          'valuse'        '[value] USING [function reference]'
          'valoutblock'   '[value] (AS var1, var2...) [indent code block]'

These are additional grammatical types that need to be defined here for the documentation system. They don't affect the parser.

        globals blank
        keywords blank
        operators blank
        pronouns blank
        syntax blank


## SAI Object

Defined as a singleton, this object will only produce one instance of itself.

    object SAI singleton 0.2.8

### Instance Variables

    instance:
      prototypes blank
      sources blank
      protogens blank
      isas blank
      config blank
      persist blank
      secondclass blank
      mainParser undefined
      
These are placeholder values for dynamically generated instance *methods* (thus the capitalization) -- they're declared here so the compiler knows they're part of the object and doesn't complain about using them undeclared.
      
      ProtoConstructor undefined
      Parse undefined
      Beautify undefined


### Instantiate method

Called once when the SAI object is created.

    Instantiate task

      set 
        Parse GetParser()
        ProtoConstructor task        
          set
            @@Constructor task
              nop
            @@__tobelocked empty
            @@__tobefrozen empty
            @@__contracts empty
            @@__unverified true
            @@isof blank
          return @@

Because we are the compiler, we need to modify the runtime so that we can do dynamic compilation, etc. The following hooks take over key functions in the runtime library and configuration system with ones more suitable for dynamic mode.

        SAILIB.import bind Require
        SAILIB.create_op bind Create
        SAILIB.environment bind Environment
          
      IntegrateBasicConstructs
      Clean
  

### Clean method

Resets the compiler, empties all caches, clears configuration data, reloads construct metadadata, etc.
  
    Clean task
      set 
        prototypes blank             
        sources blank                
        protogens blank              
        isas blank                   
        config copy DEFAULT_config
        persist: globalcount 1       
        config.Loader bind GetSourceFromPaths

Copy the verbatim JS global imports into the parser's global lookup a.k.a. _globals_ so it knows about them.

      ply config.imports
        set config.globals\it it
      
End of `Clean` method definition.


### IntegrateConstruct method

    IntegrateConstruct task given manifest

This list allows us to validate the metadata provided for the constructs. Each construct definition of the given type must include at least these entries.

      set requiredElements to:
        constructs:
          'clauses' 'clauses list'
          'repeats' 'repeats flag'
          'handler' 'handler function'
        pipers:
          'clauses' 'clauses list'
          'handler' 'handler function'

Worker function to throw an error when something goes wrong.
  
      set Fail to task given msg
        throw new Error 'SAI Construct Manager: manifest for ${category}/${constructName}${msg}'

Iterate over the categories (pipers, constructs, etc) in the manifest.
    
      each manifest as library, category
        set secondclass\category default blank
        unless VALIDSYNTAX\category
          Fail ' unsupported category type'
        
Validate each item in the category against expectations.

        each library as construct, constructName
          if secondclass\category\constructName
            Fail ' overwriting previously declared handler'
          each requiredElements\category as desc, elem
            unless exists construct\elem
              Fail ' is missing ${desc}.'
          if exists construct.clauses and not exists construct.clauses\constructName
            Fail ' is missing a clause definition for itself'
          if ?requiredElements\category.clauses
            each construct.clauses as syntax, clauseName
              each syntax 
                unless VALIDSYNTAX\category\key
                  Fail '/${clauseName} asks for illegal syntax "${key}"'
            else
              Fail ' has no clauses defined'

No faults detected, add the constructs to the master list later given to the parser.                  

          set secondclass\category\constructName copy construct
          
Done.    


### IntegrateBasicConstructs method

Iterate over the base set of construct names, require them, and add them to the manifest.

    IntegrateBasicConstructs task
    
      ply CONSTRUCTS as file
        try
          set fn to "./"+file
          set implementation require(fn)
          set implementation.SAI @ // this is for introspection in Keywords.sai
          set manifest to implementation.manifest
          IntegrateConstruct manifest
          
        catch
          set error.message to 'In Construct file ${file} ---\n  '+self
          debug error
      

### Document method

Using a similar technique to IntegrateConstructs, build an encyclopedia of documentation.

    Document task

Variable `documents` holds the final manpages.

      set documents blank

The `prefix` helps us format the syntax reference for pipers.

      set prefix:
        'pipers':
           main '... | '
           aux '(optional) '

The variable `seealso` is a list of cross-references.

      set seealso blank

Iterate through the constructs, loading them like IntegrateConstructs.

      ply CONSTRUCTS as file
        set 
          fn to "./"+file
          implementation require(fn) 
          implementation.SAI @ // this is for introspection in Keywords.sai
          manifest to implementation.manifest
          docs to implementation.docs 
    
        each manifest as library, category
          set documents\category default blank
        
          each library as construct, constructName

            set doc to docs\category\constructName or blank
            set synref empty
        
            each construct.clauses as requestedSyntax, clauseName
              set seealso\clauseName default empty
              push! seealso\clauseName array (doc.category ? category), constructName, doc.title ? clauseName
              each requestedSyntax as val, type
                set sub to clauseName is constructName ?? 'main' :: 'aux'
                push! synref '${?prefix\category\sub ? ''}${clauseName} ${VALIDSYNTAX\category\type}'
              push! synref ''
          
            set page:
              name constructName
              subtitle 'subtitle'
              summary 'summary'
              synref join! synref '\n'
              detail 'detail'

            set documents\category\constructName page | update doc
            
      return:
        documents documents
        references seealso
  
  
### Dedenter method 

With SAI whitespace is relevant, but it turns out that's pretty hard to handle in a parse grammar. This function transforms levels of indent into lexical markers `INDENT` and `DEDENT` that the parser can deal with simply. It also strips out comments, handles here documents, and detects *literal* source and makes adjustments accordingly.

    Dedenter task given src

      set 
        heredocstate 0
        heredepth 0
        indent: 0
        literate false
        offset 1
        lines empty

Split incoming source into lines.

        rawlines src.split(/\r\n|[\r\n\u0085\u2028\u2029]/)

Utility function to return a code excerpt.

        Context task given lineno
          set result 'near line ${lineno}:\n'
          count lineno-3, lineno+4
            exists rawlines\counter
              set result + '${counter}:${counter is lineno ?? '->' :: '  '} ${it}\n'
          return result

If the first line is a unix-style 'shebang', remove it.    

      if '#!' is (rawlines.0 | limit 0, 2)
        shift! rawlines
        inc offset

If there is a hashmark at the beginning of the first ten lines, assume the source is is *literate* format -- that it's a Markdown document where everything is a comment except code blocks, except code blocks that have the first line ending in `// example`.

      count 10 ?< rawlines.length as i
        if match! rawlines\i /^\#+\s/
          set literate true

Iterate over each line.
      
      ply rawlines as line, lineno

Tab characters are not permitted.
  
        if line.indexOf('\t') >= 0
          throw new Error "SAI Compiler: tab characters are not supported in source files ${!Context lineno}"

Trim off trailing spaces.

        set trail line.length
        while ' ' is line[trail-1] .. dec trail
        set line (self | limit 0, trail)

Count leading spaces and save the result as `trimmed`.
    
        set depth 0
        while ' ' is line\depth .. inc depth
        set trimmed (line | limit depth, undefined)

Flags.

        set isComment '//' is (trimmed | limit 0, 2)
        set isBlank 0 is trimmed.length

If we're in literate mode, turn everything that isn't indented four spaces into a comment -- that is, ignore it.

        if literate                                
          if depth<2                               
            unless isBlank
              set isExample false
            unless isBlank and heredocstate is 2
              continue
          elsif depth <4
            throw new Error '''
              SAI Compiler: file looks 'literate' with a # header up top, but has lines with an indent of 2 or 3 spaces. 
              Literate SAI files should have left justified markdown (one space indent allowed for lists) 
              and all code should be indented four spaces or more.  So, basically, this looks wrong: ${!Context lineno}
          elsif isExample
            continue
          elsif '// example' is (line | limit -10)
            set isExample true
            continue
          else
            set depth to self - 4
            set line to self | limit 4, undefined

If we're still here, and we're examining an actual line of code...
    
        unless isComment or isBlank

Handle _here documents_, as well as noting changes in indent depth with the `INDENT` and `DEDENT` markers.

          set heredoc "'''" is (line | limit -3)

          if heredocstate is 2
            if depth < heredepth
              set heredocstate 0

          if heredocstate is 1
            if depth <= heredepth
              throw new Error "SAI: multi-line quotes (a.k.a. here documents) must be indented ${!Context lineno}"
            push! lines INDENT
            unshift! indent depth
            set heredepth depth
            set heredocstate 2
        
          if heredocstate is 0
            if heredoc
              set heredocstate 1
              set heredepth depth
            if depth > indent.0
              unshift! indent depth
              push! lines INDENT

          if depth < indent.0
            while depth < indent.0
              push! lines DEDENT
              shift! indent 
            if depth isnt indent.0
              throw new Error "SAI: incorrect indentation ${!Context lineno}"

At last, if we have an actual line of code, prepend the line number and save it.

        unless isComment and heredocstate and depth<heredepth
          if heredocstate and depth > heredepth
            set trimmed (line | limit heredepth, undefined)
          push! lines '@${lineno+offset}:${trimmed}'

End of line loop. Make sure we add enough `DEDENT` markers to reset back to the left margin.
    
      while shift! indent
        push! lines DEDENT

Add some blank lines on either end and assemble the array into a string, then return it.

      unshift! lines ''
      push! lines ''
      set lines join! self '\n'

      return lines
  

### WrapExtract method

Extracts context from a string

    WrapExtract task given source, location
      return source.substring(location-100,location)+"<HERE>"+source.substring(location,location+100)
  
  
### Contextualize method

Transforms a segment of parse-ready code back into indented for inspection

    Contextualize task given source, offset
      set linenorex /^\@([0-9]+):(.*)/

      set
        context WrapExtract(source, offset)
        lines context.split('\n')
        ind 0
        minind 0
        newcontext ''

Count the ranges of indent in the excerpt....
    
      ply lines as line
        if line is INDENT .. inc ind
        elsif line is DEDENT .. dec ind
        set minind ?< ind
    
      set ind to - minind

Reformat the excerpt to look something like the original source.

      ply lines as line
        if line is INDENT .. inc ind
        elsif line is DEDENT .. dec ind
        else 
          set ln linenorex.exec(line)
          if ln
            set newcontext + ln.1 + ': ' + (repeat! '  ' ind) + ln.2 + '\n'
          else
            set newcontext + (repeat! '  ' ind) + line + '\n'
      
      return newcontext


### GetParser method

Returns a function that will parse SAI code into Javascript

If the grammar file (saigrammar.peg) is newer than the current parser (saigrammar.js), uses PEGjs to recompile the grammar and save the parser.

    GetParser task

      try
  
        set grammarFile PATH.resolve( PATH.join(DIRNAME, 'saigrammar.peg') )
        set parserFile PATH.resolve( PATH.join(DIRNAME, 'saigrammar.js') )
    
Load the precompiled parser. If it's missing or outdated, rebuild it with `pegjs`.

        if (not FS.existsSync(parserFile))
        ... or (FS.statSync(grammarFile).mtime > FS.statSync(parserFile).mtime) 

          set 
            PEG require('pegjs')
            grammar FS.readFileSync(grammarFile).toString()
        
            mainParser !PEG.generate grammar, fields
              allowedStartRules list startFile, startExpression
              output 'source'
              optimize 'size'
              trace 0
              cache true
          
          FS.writeFileSync parserFile, mainParser

        else
          set mainParser FS.readFileSync(parserFile).toString()

      catch
      
        set msg '''
          SAI: Could not compile saigrammar.peg.
          Is pegjs available? Is there a syntax error in the grammar?

          ${error}
    
        if grammar
          set msg WrapExtract(grammar, error.location.start.offset)
        
        throw new Error msg

Now we have Javascript source for the parser, so compile it.
    
      set mainParser ~eval(mainParser)

__What we return is a *task* that sets state for the parser, calls the parser we just built, and handles compiler errors.__
  
      return task given rawsource, bound, context

The call to `Dedenter` converts human-readable SAI source into format with tagged indents/dedents for easier parsing.
  
        set
          rawsource + '\n\n'
          source Dedenter(rawsource)
  
        try

Create the control structure for the parser.

          set opts fields
            startrule context ?? 'startFile' :: 'startExpression'
            bound bound
            globals config.globals
            constructs secondclass.constructs
            pipers secondclass.pipers
            persist persist
            filename context
            failures undefined

Call the parser.
        
          set js mainParser.parse(source, opts)

The parser deals with some syntax errors as _soft failures_ where it can continue parsing to hopefully give the coder more useful feedback. Hard parse errors have already thrown within the parser, so if we have any soft errors, throw now.

          if opts.failures
            throw new Error opts.failures
    
        catch

This is the handler for compile errors.  The `meta` variable holds a dump of the file metadata; we'll print this later.

          set meta to context | total '  ${toUpperCase! key}: ${it}\n'

Try to establish where in the preprocessed source things went wrong. Extract the original line number if possible.
      
          set location to undefined
          if error.location
            set location to trial.start.offset
          if  match! error.message /at:([0-9]+)/ 
            set location to number trial.1 

If we found a location, print a code snippet around that location.

          exists location
            set error.message to '''
              SAI: Syntax error <HERE> in\n${meta}
          
              ${Contextualize(source, location)}
          
              ${error.message}

No location retrievable, so just print the best error message we can.
          
          else
            set error.message to '''
              SAI: Error creating prototype in\n${meta}
          
              ${error.message}

And re-throw.
      
          throw error

End of error handling.

If we're beautifying (and we should be), call the beautifier with some reasonable options.
      
        if config.options.beautify
          set js !Beautify js, fields
            indent_size 2
            preserve_newlines false
            brace_style 'collapse'

Return the final compiled Javascript code.    
    
        return js

End of the task we were defining as the actual parser, and end of the `return` statement that sends that task to our caller.


### GetSourceFromFilename method

Load source synchronously. Return contextual information if successful, `undefined` if not.
  
    GetSourceFromFilename task given filename
      try
        return:
          success true
          source toString! FS.readFileSync(filename)
          context:
            loader 'SAI.GetSourceFromFilename'
            path filename
            workdir PATH.resolve(PATH.dirname(filename))
            mtime FS.statSync(filename).mtime
            fetched new ~Date
      catch
        return undefined


### GetSourceFromPaths method

This is the basic dynamic loader which fetches SAI source by name from the `config.paths` list of  directories.

This function gets bound into `config.Loader`

    GetSourceFromPaths task given name

Iterate through the paths we've been provided.

      set attempts empty
      ply config.paths as path

Iterate through the valid extensions.

        ply array '.sai.md', '.sai', '.md', ''; as extension
          set filename PATH.resolve(PATH.join(path, name+extension))
          push!attempts filename

If we get a result from the file loader, append a bit more context and return.

          exists GetSourceFromFilename(filename)
            set .name name
            set .loader + '/GetSourceFromPaths'
            return it

Return an error with the paths we checked so the user knows what the heck is going on.  (Unlike node.)

      return:
        success false
        context '''
          SAI.GetSourceFromPaths: cannot load ${name}
          
          Tried: 
          ${join!attempts '\n'}
          
          Check paths: ${config.paths.join(';')}

      
### Compile method

Create and return a _task_ that will compile parsed SAI source, binding the variables needed to integrate necessary scope and the SAI runtime library. This is quite similar to the compilation technique used by the native `require`.

    Compile task given source
      try
        return new ~Function 'prototype','options','require','$AI','__dirname', source
      catch
        debug "ERROR IN HERE"
        debug source
        every error
          debug "${key}: ${it}"
        throw error


### ProtoGen method

Create a fully scoped Javascript prototype for a single object (ignoring inheritance)

    GetProtogen task given name
  
What is happening here is that we're either returning the protogen from cache, if necessary initializing the cache from the result of a function. 
  
      return protogens\name initialized !task

Try to load the file using the configured Loader.

        set s1 new ~Date
        set load config.Loader(name)
        unless load.success
          throw new Error 'SAI.GetProtogen: Could not load object ${name}, reason given: ${load.context}'

At the end of this _here document_ is a call to `Parse` that will return the compiled Javascript code; the document adds some prefix code before we are ready to hand it off to the JS engine for evaluation.

        set source '''
          var __context=${~JSON.stringify(load.context)};
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
          ${Parse(load.source, undefined, load.context)}

Create the function to fabricate the final JS object.

        set pg !Compile source

The prototype generator is a lambda function that wraps the actual evaluation in a directory switcheroo so that in the code being processed, `require` will refer to the directory the source is in, rather than the directory the SAI compiler is in. 

        set protogen to task
          set cwd to ~process.cwd()
          ~process.chdir load.context.workdir
          set ret to pg.apply(null,$$)
          ~process.chdir cwd
          return ret
    
        //debug source 

        unless protogen
          throw new Error 'SAI.GetProtogen: Error in generated code ${name}'

If the `speedometer` option is set, display time taken to load, compiler, and create the prototype.

        set s2 new ~Date
        if config.options.speedometer
          debug 'SAI: Compiled ${name} in ${s2-s1}ms.'

Save the source code in a cache.

        set sources\name source

Return the prototype generator function.

        return protogen
  
  
### Expression method

Compile a single SAI expression, out of context except for the runtime library.

    Expression task given source
      set js 'return ${Parse(source, undefined, undefined)}'
      return Compile(js)(@@, blank, ~require, SAILIB, DIRNAME)


### GetAncestors method

Build a list of objects that the given object depends on.

    GetAncestors task given name
      set
        heritage array name
        ancestors blank
        nodupes blank

In order to discern object inheritance, we have to build and invoke each level of the heirarchy so we can retrieve the `__inherits` property of the generated object. Every object we inherit from is checked in turn until we have loaded all of them, created protogens for each, and created an ancestry tree (while ignoring circular references).
    
      while shift! heritage as leaf
        unless nodupes\leaf
          set nodupes\leaf to true
          set obj to new ProtoConstructor name
          set protogen GetProtogen(leaf)
          set opts: name leaf
          protogen obj, opts, ~require, SAILIB, DIRNAME
          obj.Constructor
          unless obj.isa
            throw new Error 'SAI GetPrototype: object loaded as ${leaf} does not have an isa type identifier.'
          with obj.__inherits
            set ancestors\leaf it
            ply it
              heritage.push it

      return ancestors


### GetPrototype method

Given a name, locate all ancestors, create all prototypes, initialize primary prototype object, describe properties, save the result in a cache (SAI.prototypes) and return it.

    GetPrototype task given name, bindings

Return a cached prototype (generating one if needed).

      return prototypes\name initialized !task
        set ancestors GetAncestors(name)

Create a new, empty prototype.

        set prototype to new ProtoConstructor name
        
A recursive function that appends the elements of the final object in parent->child order.
        
        set Adopt to task given name
          ply ancestors\name
            Adopt it
          set protogen GetProtogen(name)
          protogen prototype, fields name name;, require, SAILIB, DIRNAME
    
        Adopt name
    
        ~Object.defineProperty prototype, 'isa', :enumerable false, value prototype.isa;
        if isas[prototype.isa]
          throw new Error 'SAI: object defined by ${name} has a duplicate.isa type ${prototype.isa} identical to ${isas[prototype.isa]}'
        set isas[prototype.isa] name

The `finalizePrototype` function in the runtime library uses the lists of attributes in the prototype to lock and freeze attributes and tasks that should not be modifiable. This needs to be done just once.

        SAILIB.finalizePrototype prototype
        return prototype
  

### GetSource method

Get full native JS source code for an object, by name.

    GetSource task as name
    
This works somewhat similarly to `GetPrototype` however instead of building an actual object, we build a monolithic piece of Javascript source that, when `required`, will create the prototype. We start with the ancestors.   
    
      set
        source ''
        ancestors GetAncestors(name)
        islib to 0 <= name.indexOf('sailib')
        Adopt task given name
          ply ancestors\name
            Adopt it
          set source + sources\name + '\n'

      if islib
        debug 'Building SAILIB specifically to refer to iteself; not requiring sai-library.'

Call the recursive helper function to append ancestral source in order.

      Adopt name

Return the Javascript wrapper code; generated source is dropped in the middle.

      return '''
        #!/usr/bin/env node
    
        // Javascript source for ${name} transpiled by SAI
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
        var $AI=${islib ?? 'prototype' :: 'require("sai-library")'};

        // Generated code follows

        ${source}

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


### Require method

Return a prototype object by name

    Require task given name
      exists GetPrototype(name) as proto
        exists proto.constructor as ctor
          return ctor
        if 'function' is typeof proto
          return proto
      throw new Error 'SAI.Require: require could not find a constructor for ${name}'
  

### Create method

Create an object by name (an alternative to using new on what Require gives you)

    Create task given name, parameters
      exists GetPrototype(name)
        set obj ~Object.create(it)
        if obj.Constructor .. obj.Constructor
        if obj.Instantiate .. obj.Instantiate.apply obj, parameters
        return obj
      throw new Error 'SAI.Create: do not know how to create object ${name}'


### Configure method

Update configuration settings individually or as a group.

Settings:

__paths__: An _array_ of folders that will be searched by the SAI source loader.  _Replaces_ the current set of paths.
__globals__: An object of _named values_ where names are text that will be matched in the SAI source, and the values are Javascript text that will replace them. _Updates_ the current set of globals, either replacing or adding to ones that already exist.
__options__: An object of _named values_ that specify options for the compiler. Updates the current options.
__Loader__: A function that you would like to use as the SAI source loader. This will be given an object's name and you shoud return the SAI source for the object.
__secondclass__: An _array_ of manifests of second-class language elements (e.g. pipers and constructs) you want added to the compiler.

    Configure task given c
      exists c.paths
        set config.paths it
      exists c.globals
        set config.globals | update it
      exists c.options
        set config.options | update it
      exists c.Loader
        set config.Loader it
      exists c.secondclass
        ply it
          IntegrateConstruct it
      
      if config.options.beautify
        set Beautify require('js-beautify').js_beautify


### RegisterWithNode method

Register .sai as an extension with node.  (As yet untested. I am not sure people should do this.)

    RegisterWithNode task
      set REQUIRE ~require

      exists REQUIRE.extensions
        set it.sai to task given module, filename
          unshift! config.paths PATH.dirname(filename)
          set result Require(PATH.basename(filename))
          shift! config.paths
          return result
      else
        throw new Error "SAI Runtime: Could not find require.extensions to register .sai files with node"
    
 
### Environment method

Get some information about the runtime environment of SAI modules including 'approved' functions to call.

    Environment task
      return:
        dynamic true
        static false
        paths copy config.paths
    
        Clean bind Clean
        Configure bind Configure
        GetSource bind GetSource
        RegisterWithNode bind RegisterWithNode
        Require bind Require
    

