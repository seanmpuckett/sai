# BUILDER.sai.md

A module for compiling one or more .SAI files into native Javascript

### Globals

    reference:
      FS require('fs')
      PATH require('path')


### Object

Defined as `main` so it will auto-instantiate when run from the command line

    object Builder main

Extensions we'll automatically assume are SAI source code

    given:
      extensions: '.sai.md', '.sai'


### Instantiate task

All of `builder` runs inside this task.

    Instantiate task 

Check the environment, make sure we're running in dynamic mode.

      set env !environment 

      unless env.dynamic
        debug 'Cannot use Builder as a pre-compiled module.'
        ~process.exit 1

Big section of `set`s for variables and utitily functions.

      set
        flags blank     // option flags
        dest undefined  // output folder
        exitflag 0      // exit value


#### Banner subtask

Display usage information (still in the `set` indentation).

        Banner task
          debug '''
            sai-build -- command-line compiler for .sai scripts
      
            USAGE
              sai-build [path/object name] - compiles file to native JS 
      
            OPTIONS
              -o [path]  --output       Set output folder
              -v         --verbose      Print input and output filenames
              -t         --test         Don't save output, just compile
      
            EXAMPLES
              sai-build HelloWorld.sai
              sai-build -o bin src/bin -o lib src/lib


#### Exists subtask

Does a file exist?

        Exists task given path
          return FS.existsSync(path)


#### IsDirectory  subtask   

Is the given path a directory?

        IsDirectory task given path
          if Exists(path)
            return FS.lstatSync(path).isDirectory()
          return false
    
        
#### IsSai

Check a filename to see if it has one of the extensions we care about, if so, return the basename. Otherwise return blank. We use this because of `.sai.md` which is not an extension according to `PATH.parse`.

        IsSai task given fn
          ply extensions
            if it is ( fn | limit -it.length )
              return fn | limit 0, -it.length
          return ''


#### DestPath subtask

Return destination path, updating extension and handling overrides

        DestPath task given path, branch
          if dest .. set path PATH.join(dest, branch, PATH.basename(path))
          with PATH.parse(path) 
            if IsSai(.base) as name
              set .name name
              set .ext '.js'
            else
              set .ext (self default '') + '.js'
            delete .base
            return !PATH.format .

   
#### MkPath subtask

Recursively create directories

        MkPath task given path
          unless Exists(path)
            MkPath PATH.dirname(path)
            FS.mkdirSync path


#### Build subtask

Build a single file at src path, saving javascript output to dest path

        Build task given src, dest
          local objectName PATH.basename(src)
          env.Clean
          env.Configure: 
            paths: PATH.dirname(src)
          try
            env.Require objectName 
            unless flags.test
              MkPath PATH.dirname(dest)
              FS.writeFileSync dest, env.GetSource(objectName)
            if flags.verbose .. debug '${src} -> ${dest}'
          catch
            unless error.message.indexOf('Contractually required') >-1
              debug '${src} -> ERROR'
              debug error
              set exitflag 1
            else
              debug '${src} -> Either a virtual class OR does not fulfill its contracts.'
          

#### ProcessArg subtask

Given a file or folder, recursively build .sai files within it.

        ProcessArg task given path, branch
          if IsDirectory(path)
            every FS.readdirSync(path) as leaf,k
              local candidate PATH.join(path, leaf)
              if IsSai(PATH.basename(leaf)) 
                ProcessArg candidate, branch
              elsif leaf isnt '.' and leaf isnt '..' and IsDirectory(candidate)
                ProcessArg candidate, PATH.join(branch, leaf)
          else 
            Build path, DestPath(path, branch)

        
#### All definitions done, now deal with arguments.

Get rid of the first two arguments which we don't care about, then loop over the rest.

      set argv ~process.argv | limit 2, undefined

      unless argv.length
        Banner
  
      while argv.shift() as arg
        switch arg

        case '-o', '--output'
          set dest argv.shift()

        case '-v', '--verbose'
          set flags.verbose true

        case '-t', '--test'
          debug "sai-build test mode -- no files will be saved."
          set flags.test true

        else
          ProcessArg arg, ''       

Done, exit with status flag previously set by the builder.

      ~process.exit exitflag
  