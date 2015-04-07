
## Basic File Structure

A .sai file may include the following sections. 

All sections except **object** are optional. 

If present, **reference** must appear first, then **object**, then other sections in any order.

### Reference - Global Variables

	reference:
	  [varName] [expression]
	  ...

### OBJECT - Object Definition

	object [ObjectName] [semver]

### INHERIT - Inheritance

	inherit: 
	  '[ObjectName][semcode][semver]'
	  ...

### CONTRACT - Contracts

	contract: 
	  '[ObjectName][semvercode][semver]'
	  ...

### GIVEN - Static Traits

	given:
	  [traitName] [expression] 
	  ...

	given [traitName] [expression]


### SET - Instance Traits

	set:
	  [traitName] [expression]
	  ...

### GET/SET - Dynamic Traits

	[traitName] get
	  [block]
	set [parameter]
	  [block]
	

### TASK - Task Definition

	[TaskName] task [parameters]
	  [block]


## Expressions

## Code Blocks
