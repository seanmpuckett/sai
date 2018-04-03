#!/usr/bin/env sai-run

# DOCS.sai.md

Generates documentation from compiler introspection.

_Note: the resulting file is put in the current working directory._


### Globals

    reference:
      SAI require('sai-language')
      FS require('fs')
      PATH require('path')


## Docs object

Declared as `main` for automatic instantiation on compilation.
  
    object Docs main

### Static attributes

    given:

Extract documentation

      excerpts:
        structure:
          filename '05.FileStructure.new.md'
          include: 
            'reference', 'object', 'main', 'singleton'
            'contract', 'given', 'instance', 'get', 'set'
            'task', 'process', 'promise'
        
        keywords:
          filename '21.Keywords.md'
          include task given master
            return master | has .category is 'keywords' | keys | by it

        operators:
          filename '22.Operators.md'
          include task given master
            return master | has .category is 'operators' | keys | by it

        constructs:
          filename '23.Constructs.md'
          include task given master
            return master | has .category is 'constructs' | keys | by it

        pronouns:
          filename '24.Pronouns.md'
          include task given master
            return master | has .category is 'pronouns' | keys | by it

        pipers:
          filename '25.Pipers.md'
          include task given master
            return master | has .category is 'pipers' | keys | by it

        globals:
          filename '26.Globals.md'
          include task given master
            return master | has .category is 'globals' | keys | by it


Descriptions of the different categories.

      categories:
        reference '''
          Full reference documentation.
            
        constructs '''
          One-or-multi line constructs used for looping, flow control, error handling, and so on.
      
        pipers '''
          Syntactical elements starting with the pipe character `|` that modify values in-line
      
        keywords '''
          Low-level language syntax.
      
        pronouns '''
          Context-aware, renamable variables.
          
        globals '''
          Functions and values avalilable, unscoped, in the global namespace.
          
  
### Instantiate 
  
    Instantiate task
    
      set docs from SAI.Document
      set master blank
      set index blank
      set header ''


      each docs.documents as pages, c
        each pages as page, name
          set 
            page.category ? c
            category page.category
            pageName to master\name ?? '${name} (${category})' :: name
            master\pageName page
            index\category ? blank
            index\category\name ' - __${page.title ? name}__ - ${page.subtitle}\n'
      
  
      each docs.references as alsos, see
        set master\see default:
          title toUpperCase'd see
          reference '''
            _See: ${(alsos | thru .1 ).join(', ')}_

        ply alsos as also
          set index[also.0] ? blank
          set index[also.0][see] default ' - __${also.2}__ _(see: ${(alsos | thru .1).join(', ')})_\n'

  
      set header to chain index
        | enlist | by IndexSort(.0)
        | thru '''
          ### ${toUpperCase'd .0}
      
          ${.1 | by IndexSort(key) | total}


        | total
    
#### Master / Reference document

This section produces the `20.Reference.md` document.

      set header to '''
          ### How to use this documentation

          The categorized index at the top provides a quick overview of each language element. To learn
          more about a particular entry, search the full reference document for `^name`, where _name_ is the 
          symbol or word of interest.

          ## Index by category

          ${header}

          ## Encyclopedia

Write it out:
    
      Write:
         filename "20.Reference.md"
         pages master | enlist | by IndexSort(.0) | thru .1 
         category 'reference'
         header header
  
#### Additional "excerpt" documents

      every excerpts

        set include to .include
        if 'function' is typeof include
          set include to include(master)

        set pages to include | into empty
          push'd sum master\it

        Write:
          filename .filename
          pages pages
          category .category or ''
          header .header or ''
        


### Indent

 - __spaces__ - number of spaces to indent every line in the provided block
 - __text__ - single text block
 
Indents a block of text by a number of spaces.

    Indent task as spaces, text
      set spaces to repeat'd ' ' spaces
      return chain text
        split /[\r\n]/g
        |thru spaces + it
        join '\n'


### LineTrim

 - __trailing__ - number of blank lines to leave
 - __text__ - single text block, newline delimited
 
Trims leading and trailing blank lines, then adds the requested number of lines.

    LineTrim task as trailing, text
      set lines split'd text /[\r\n]/g
      while ( lines | first ) is ''
        shift'd lines
      while ( lines | last ) is ''
        pop'd lines
      count trailing
        push'd lines ''
      return join'd lines '\n'


### IndexSort

Utility function to sort strings with symbols first, case insensitive

    IndexSort unbound task as a
      set a toUpperCase'd self
      set ch from a.charCodeAt 0
      if ch>=65 and ch<=90
        set ch + 200000
      else
        set ch + 100000
      return ch+a
    

### Write task

- __.filename__ - name of file to create
- __.pages__ - array of pages to produce
- __.category__ - category of the file
- __.header__ - text to place before the pages

Implementation:

    Write task expects $filename, $pages, $category, $header

      debug "Writing ${$filename}..."
    
      set output from LineTrim 3, '''
        # ${toUpperCase'd $category}
    
        This file is automatically generated. _Do not edit._

        ${from LineTrim 0, categories\$category ? 'Unknown Heading'}

        ${from LineTrim 0, $header}
    
      set content to empty
  
      ply $pages
        if .reference
          push'd content from LineTrim 4, '''
            ### ${.title}
        
            ${from LineTrim 0, .reference}
        
        
        else
          set aux  .category is 'pipers' ?? '| ' :: ''
          push'd content from LineTrim 4, '''
            ### ${aux}${.title ? .name.toUpperCase()} - _${.subtitle}_ - ${.category} - ^${.title ? .name} 

            ${from LineTrim 1, .summary}      
            ${from LineTrim 1, from Indent 4, .synref ? 'synref'}
            ${from LineTrim 1, .detail}
  
      set output + join'd content ''

      FS.writeFileSync $filename, output
  
  
    
    
  
  
  
  