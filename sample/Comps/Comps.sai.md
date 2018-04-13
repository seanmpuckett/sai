#!/usr/bin/env sai-run

# Pipers / Comprehensions examples.

To see the results, `sai-run samples/Comps`

## Object declaration

    object Comps main 1.0.0

### Instantiate task 

    Instantiate task

Test data

      set friends to:
       :name 'Sara', age 23, #cat, province 'ON'
       :name 'John', age 19, #cat, #dog, province 'ON'
       :name 'Ellie', age 22, province 'QC'
       :name 'Marshal', age 21, #dog, province 'ON'
       :name 'Doug', age 18, province 'ON'
       :name 'Ann', age 23, #cat, province 'QC'
       :name 'Harry', age 31, province 'QC'
       :name 'Jenna', age 28, #dog, province 'ON'

Filter function for __| has__ example.

      set CanRent to task given row
        return row.age >= rentAge[row.province]

      set rentAge to: ON 25, QC 21

Sort function for __|by__ example.

      set ProvinceAge to task given a, b
        return a.province <=> b.province or a.age <=> b.age

Reduction function for __|reduce__ example.

      set Total to task given accumulator, row
        return accumulator + row

Rather than typing __debug__ a lot, we'll just create an array which is an adding machine tape of labels and results.
  
      set tape to:
        : 
          'HAS\nWho likes cats?
          friends | has .cat
        : 
          "Who doesn't have a dog?
          friends | has not .dog
        : 
          'Who has a pet?
          friends | has .cat or .dog
        : 
          'Who is 21 or over?
          friends | has .age >= 21
        : 
          'Who lives in Quebec and likes cats or dogs?
          friends | has (.province = 'QC') and (.cat or .dog)
        : 
          'Under 21 and likes cats?
          friends | has .cat and .age < 21 
        : 
          'Who can rent a car?
          friends | has .age >= rentAge[.province]
        : 
          "Who can rent a car? (code block)
          friends | has
            return .age >= rentAge[.province]
        : 
          'Who can rent a car (named task)
          friends | has using CanRent
        : 
          'BY\nSorted names
          friends | by .name
        : 
          'Oldest to youngest
          friends | by .age desc
        : 
          'Length of name, then age
          friends | by .name.length by .age
        : 
          'Oldest friend
          friends | highest .age
        : 
          'Youngest cat-loving friend
          friends | has .cat | lowest .age
        : 
          'Ages by province (code block)
          friends | by
            return a.province <=> b.province or a.age <=> b.age
        : 
          'Ages by province (named task)
          friends | by using ProvinceAge
        : 
          'Just the names in alpha order
          friends | by .name | thru .name
        : 
          'THRU\nJust the names in alpha order (alternate)
          friends | thru .name | by .
        : 
          'Summary of cat-fanciers
          friends | has .cat | thru '${.name} (${.age}), lives in ${.province}'
        : 
          'Numbered list of friends
          friends |thru '${key+1}) ${.name}'
        : 
          'All-caps names
          friends |thru
            return it |update: name toUpperCase! .name
        : 
          'INTO\nTotal ages (inline)
          friends | total .age
        : 
          'Total ages (reduction using)
          friends | thru .age | reduce using Total  
        : 
          "Count friends in each province
          friends | into blank
            set sum[.province] to (self default 0) + 1
        : 
          "Five youngest friends
          friends | by .age | limit 5
        : 
          "Five oldest friends
          friends | by .age | limit -5
        : 
          "Second page of five youngest
          friends | by .age | limit 5,5
        : 
          "Last friend in the list
          friends | last
  
And iterate over the tape, printing it out.

      ply tape 
        debug .0
        debug .1
        debug ''
        