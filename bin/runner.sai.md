# RUNNER.sai.md

SAI module for compiling and running scripts on-demand.

### Globals

    reference:
      PATH require('path')
      ENV environment()

### Runner object

    object Runner

### Instantiate task

    Instantiate task 

Discard first two arguments, which would be `node` and `sai-run`:

      set argv to ~process.argv | limit 2, undefined // chop off first two arguments

If no further arguments, display banner and exit.
  
      if argv.length < 1
        debug '''
          sai-run -- run an arbitrary SAI script.
      
          USAGE
            sai-run [path/object name] - compiles file to native JS on STDOUT
      
          EXAMPLE
            sai-run ./HelloWorld
      
        ~process.exit

Extract path and filename

      set objectName PATH.basename(argv.0)
      set objectPath PATH.dirname(argv.0)
  
Reconfigure set loader path to path of file to compile

      ENV.Configure:
        paths: objectPath
    
      try
        set object create objectName
      catch as e
        debug e.message
        debug 'Could not create ${objectName} at ${objectPath}'
        ~process.exit 1
  
