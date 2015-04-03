
## Basic File Structure

A .sai file should follow this pattern, more or less.  

Everything is optional except **object**.

	reference:
	  [global var name] [expression]
	  ...
	 
	object [object name] [object semver code]
	 
	inherit: 
	  [object name/version]
	  ...
	
	contract: 
	  [object name/version]
	  ...
	 
	given [static var name] [expression]
	
	given:
	  [static trait name] [expression] 
	  ...
	
	set:
	  [instance trait name] [expression]
	  ...
	 
	[traitName] get
	  [code block]
	set as [parameter]
	  [code block]
	
	[TaskName] task [parameters?]
	  [code block]
	 
	<end of file>

### Reference - Global Variables

### OBJECT - Object Definition

### INHERIT - Inheritance

### CONTRACT - Contracts

### GIVEN - Static Traits

### SET - Instance Traits

### GET/SET - Dynamic Traits

### TASK - Task Definition


## Expressions

## Code Blocks
