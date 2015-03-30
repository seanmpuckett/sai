## Comprehensions

SAI began as an AI scripting language for a role-playing game. As such, the language evolved to deal in a succinct way with traits, lists, and decision making. Its extensive set of composable comprehensions reflects this.

_Comprehensions_ are a way of operating on a list or set of traits as a whole. In Javascript, familiar comprehensions are `.map`, `.filter`, `.reduce` and `.sort`. SAI doesn’t introduce any new comprehensions in terms of functionality, but it does afford their use in a clearer, more concise way.

In Javascript, most comprehensions only work on lists, that is, the **Array** type. SAI extends this functionality by allowing comprehensions to apply to any data type — undefined, value, array or object — with the result generally being the same data type. 

A notable exception is the application of a sorting operator to traits (e.g. an **object**); you get in return a list of trait values without the associated trait names, because JS’s specification holds that the enumeration order of an object’s properties is uncertain.

_Critical note: comprehensions **do not modify** collections they are applied to, instead returning an altered copy. If you want a comprehension result to replace its source data, specifically make that assignment yourself._

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

All of the examples below appear in the `Comps` sample.  I’m not going to show the results here; just run the sample and see for yourself.

### Filtration

Filtration comprehensions test each element of a collection and return a new collection made up only of elements that pass the test. 

#### By Tag

**Who likes cats?**

	friends #cat

**Who doesn’t like dogs?**

	friends !#dog

**Who likes cats and dogs?**

	friends #dog #cat

_Note: multiple-tag comprehensions are tested with a logical **and**; all conditions must be fulfilled for the row to be included in the result.

#### HAVING

The comprehension operator **having** indicates an expression based filter using the **it** _magical value_ to represent the item currently under examination. Since **it** is in play, the associated **dot** scoping prefix is also active within the expression for easy access to item fields. In the first example below, both lines produce the same code and result. 

**Who is 21 or over?**

	friends having it.age >= 21
	friends having .age >= 21

**Who likes cats or dogs?**

	friends having .cat or .dog
 
**Who lives in Quebec and likes cats or dogs?**

	friends having (.province = 'QC') and (.cat or .dog)

Comprehensions, like any other operator, can be chained together. Every comprehension has the same precedence, and they are evaluated in sequence from left to right. 

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

SAI comprehensions allow sorting through both the familiar Javascript `.sort` method as well as more succinct and expressive variations similar to those offered for filtration. 

_Reminder: unlike the `.sort` array method, neither  the **by** nor the **sort** operators modify the original data set; they always produce a sorted copy. This ensures that variables used in comprehension expressions remain immutable. If you want to sort an array in place, use the `.sort` method._

#### BY

Similarly to the way the **having** operator works for selecting elements in an expression, the **by** operator provides for sorting of elements.

**By name**

	friends by .name

**Oldest to youngest**

	friends by .age descending

You may sort by more than one value by adding another **by** clause. Multiple sort clauses are handled the way a database would: if a clause provides no guidance (the values are identical), subsequent clauses are each checked in turn.

**Length of name, then age**

	friends by .name.length by .age

#### HIGHEST / LOWEST

The operators **highest** and **lowest** also sort by the provided expression, but when the sort is complete they _extract_ the highest/lowest value from the dataset and return it as a single value.  

**Oldest friend** 

	friends highest .age

**Youngest cat-loving friend**

	friends #cat lowest .age

_Note: combining **highest/lowest** with other sorting operators is not recommended and may result in unexpected behaviour. Instead, use  **by** and follow up with **first/last**._

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

_Note: as you might have guessed, **\<=\>** is a SAI-specific comparison operator useful for sorting numeric and string values. It returns -1 if the value to the left is less than the right, 1 if it is greater, and 0 if they’re equal. Because of the way the **or** operator shortcuts evaluation when it finds the first truthy value, you can string together multiple comparison operators without using **if**._

### Mapping

Mapping offers a streamlined way of transforming values in a collection. Javascript offers the `.map` array method, while SAI extends this with the **thru** and **map** operators, making simple transformations fast to write, and complex ones easy to understand.

#### THRU

The **thru** operator passes each value in a collection “through” an expression. The result of the expression becomes the new value in a copy of the collection.

**Just the names in alpha order**

	friends by .name thru .name

**Just the names in alpha order (alternate)**

	friends thru .name by .

_Here we use **.** (dot) alone as a synonym for **it**. It’s there but you don’t have to use it (rimshot)._

**Summary of cat-fanciers**

	friends #cat thru '${.name}, age ${.age}, lives in ${.province}'

#### MAP

Like the **sort** and **filter** operators, **map** makes _magic variables_ available, eliminating redundant code.  Map provides **it** (which enables the dot scoping prefix), as well as the **key** variable, which holds the current index of the collection item under examination.

**Numbered list of friends**

	friends map
	  return '${key+1}) ${.name}'

**All-caps names**

	friends map
	 return it overlay: name from .name.toUpperCase

I’ve sprung another new operator on you here: **overlay**. It’s not a comprehension but this is still a good place to introduce it.  Overlay makes a _shallow copy_ of the object on the left that has the values of the object on the right _overlaid_ on top. The new values will replace old ones, or add new ones if they didn’t exist before. In this example, overlay copies **it** then overlays the name field with a capitalized version of the original name.

Without using overlay and just using the **copy** operator, the same functionality looks like this:

	friends map
	 set temp to copy it
	 set temp.name from temp.name.toUpperCase
	 return temp

_Aside: if we wanted to all-caps the names in the `friends` list itself, rather than produce a new list with capitalized names as we have been doing (thus leaving the source list unchanged), we could do it like this:_

	ply friends
	  set .name from .name.toUpperCase

#### KEYS / VALUES

The **keys** and **values** unary operators can also be used as comprehensions. **Keys** transforms a set of traits into a list of the trait names. **Values** transforms a set of traits into a list of the trait values. The ordering of the transformation is uncertain.

### Reduction

Reduction is similar to mapping in that all of the elements of a collection are visited in turn. However, the output of **reduce** is typically a single value, not a collection. Reduce is useful for summarizing, totaling or collating data.

#### REDUCE

The **reduce** comprehension takes the same form as **filter** in that a block of code is required, through which each item from the collection is passed. However, in addition to the item itself, an accumulator variable (with the magic name **accum**) is passed into the block of code. Each time the block is processed, **accum** has the same value it had last time.

Below, the **accum** variable is initialized by `into 0`, and then each row in the collection is visited and we add `.age` to it. This totals the ages of every friend.

**Total ages (block)**

	friends reduce into 0
	  set accum + .age

You can also reduce with a named task, however be aware that the task must always `return` the accumulator so the value can be preserved across function calls.  (The block version of **reduce** takes care of this for you.)

**Total ages (task)**

	set ageTotal to task as accumulator, row
	  return accumulator + row.age
	 
	 ... later ...
	 
	friends reduce into 0 ageTotal

A more complex example.  See if you can suss out how it works.

**Count friends in each province**

	friends reduce into blank
	  set accum[.province] to (self default 0) + 1

Here’s a hint: **self** is another _magic variable_ used only in **set** statements. It is initialized to the previous value of the variable being changed by **set**. 

Another hint: **default** is an operator that evaluates to its right hand value if and only if the left hand value is _undefined_.

Last hint: **blank** initializes an object with no traits; it is the SAI equivalent of Javascript’s `{}`.  The comparable word for arrays/lists with no elements is **empty**; in Javascript you’d write `[]`.

#### LIMIT

#### FIRST / LAST