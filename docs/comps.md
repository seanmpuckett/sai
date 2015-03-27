## Comprehensions

SAI's began as an AI scripting language for a role-playing game. As such, the language evolved to deal in a succinct way with objects, lists, and decision making. It's extensive set of composable comprehensions reflects this.

_Comprehensions_ are a way of operating on a list or set of traits as a whole. In Javascript, familiar comprehensions are `.map`, `.filter` and `.sort`. SAI doesn’t introduce any particularly new comprehensions in terms of functionality, but it does afford their use in a clearer, more concise way.

_Note: comprehensions _do not modify_ lists they are applied to. Invariably, they return a new list (or other data type). If you want a comprehension to replace the list it is applied to, you’ll need to specifically make that assignment yourself._

We’ll be working with the following set of data to make our examples clearer.

	set friends to list
	   :name 'Sara', age 23, #cat, province 'ON'
	   :name 'John', age 19, #cat, #dog, province 'ON'
	   :name 'Ellie', age 22, province 'QC'
	   :name 'Marshal', age 21, #dog, province 'QC'
	   :name 'Doug', age 18, province 'ON'
	   :name 'Ann', age 23, #cat, province 'QC'
	   :name 'Harry', age 31, province 'QC'
	   :name 'Jenna', age 28, #dog, province 'ON'

_Note: the `#tag` syntax in a fields constructor creates a field with the given name and a value of true, e.g. `#cat` is equivalent to `cat true`. _

All of the examples below appear in the `Comps` sample.  I’m not going to show you the results of the run; just run the sample and see for yourself.

### Filtration

Filtration comprehensions test each element of a list and return a new list made up only of elements that pass the test. 

#### By Tag

**Who likes cats?**

	friends #cat

**Who doesn’t like dogs?**

	friends !#dog

**Who likes both?**

	friends #dog #cat

_Note: tag comprehensions do not support logical OR. You can, however, use the filter-by-expression variant to create an expression with OR and many other logical operators._

#### HAVING

The comprehension operator **having** indicates an expression based filter using the **it** magical value to represent the item currently under examination. Since **it** is in use, the **dot** scoping prefix is also active within the expression for easy access to fields within the item. In the first example below, both lines produce the same code and result.

**Who is 21 or over?**

	friends having it.age >= 21
	friends having .age >= 21
 
**Who lives in Quebec and likes cats or dogs?**

	friends having (.province = 'QC') and (.cat or .dog)

Comprehensions, like any other operator, can be chained together. Every comprehension has the same precedence, and they are evaluated from left to right. 

**Under 21 and likes cats?**

	friends #cat having .age < 21

Where possible, filter comprehensions are internally assembled to reduce the number of times the list is examined. In the above example, the list is still analyzed only once as the rules of evaluation permit `#cat` and `having .age < 21` to be combined.

Any valid expression can be used in a **having** comprehension, and one can refer to values outside the expression as well.

**Who can rent a car?**

	set rentAge to: ON 25, QC 21
	friends having .age >= rentAge[.province]
 
#### FILTER

When an expression will not do, **filter** is the tool of choice. Like the `.filter` array method in Javascript (which is still available, of course), the **filter** keyword provides each item in the collection to a task for evaluation. If the task returns true, the item is added to the output collection.

Keyword **filter** can reference a block of code directly, which makes the **it** magic value available within that block, or be given the name of a task (or a task definition).

**Who can rent a car? (code block)**

	friends filter
	  return .age >= rentAge[.province]

**Who can rent a car? (named task)**

	set CanRent to task as row
	  return row.age >= rentAge[row.province]
	
	... later ...
	
	friends filter CanRent

### Sorting

SAI comprehensions also allow sorting through both the familiar Javascript `.sort` method as well as more succinct and expressive variations similar to those offered for filtration. 

#### BY

Like the **having** operator, the **by** operator provides for sorting of array elements within an expression.

**By name**

	friends by .name

**Oldest to youngest**

	friends by .age descending

You may sort by more than one value by adding another **by** clause. Multiple sort clauses are handled the way a database would: if a clause provides no guidance (the values are identical), subsequent clauses are each checked in turn.

**Length of name, then age**

	friends by .name.length by .age

#### HIGHEST / LOWEST

The operators **highest** and **lowest** also sort by the provided expression, but when the sort is complete they _extract_ the highest/lowest value from the array and return it as a single value.  

**Oldest friend** 

	friends highest .age

**Youngest cat-loving friend in Ontario**

	friends #cat lowest .age

_Note that because the result of **highest/lowest** is not a list, no further comprehensions may be performed on it. Also note that combining **highest/lowest** with other sorting operators is not recommended. Instead use  **by** and follow up with **first/last**._

#### SORT

The **sort** operator is the same half-step towards Javascript’s `.sort` function as SAI’s **filter** operator is for `.filter` — it provides a simpler, cleaner approach with the availability of _magic variables_ that eliminate redundant syntax.

The magic variables in play with **sort** are, as used in almost every textbook example of a sort function, just the letters **a** and **b**.

**Ages by province (code block)**

	friends sort
	  return a.province <=> b.province or a.age <=> b.age

**Ages by province (named task)**

	set ProvinceAge to task as a, b
	 return a.province <=> b.province or a.age <=> b.age
	 
	 ... later ...
	 
	friends sort ProvinceAge

_Note: as you might have guessed, **\<=\>** is a SAI-specific comparison operator useful for sorting numeric and string values. It returns -1 if the value to the left is less than the right, 1 if it is greater, and 0 if they’re equal. Because of the way the **or** operator shortcuts evaluation when it finds the first truthy value, you can compose multiple sort operators in this way without using **if** statements._

### Mapping

#### THRU

#### MAP

### Reduction

#### REDUCE

#### LIMIT

#### FIRST / LAST