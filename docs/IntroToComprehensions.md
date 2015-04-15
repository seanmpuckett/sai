## Comprehensions

SAI began as an AI scripting language for a role-playing game. As such, the language evolved to deal in a succinct way with traits, lists, and decision making. Its extensive set of composable comprehensions reflects this.

A word, or several, about terminology.  _List_  is used interchangably with _array_, both referring to Javascript’s `Array` type. Similarly, _traits_ and _fields_ are used to refer to the generic Javascript `Object` type as well as the properties that comprise it.  The term _collection_ refers generically to both lists and arrays, and _item_ may refer to any single list element or object trait. 

_Comprehensions_ are a way of operating on a collection as a whole. In Javascript, familiar comprehensions are `.map`, `.filter`, `.reduce` and `.sort`. SAI doesn’t introduce any new comprehensions in terms of functionality, but it does afford their use in a clearer, more concise way.

In Javascript, most comprehensions only work on lists, that is, the **Array** type. SAI extends this functionality by allowing keyword comprehensions to apply to any data type — undefined, value, list or traits — with the result generally being the same data type. 

A notable exception is the application of a sorting operator to traits (e.g. an **object**); you get in return a list of the trait values without the associated trait names, because JS’s specification holds that the enumeration order of an object’s properties is uncertain.

_Critical note: comprehensions **do not modify** collections they are applied to, instead returning an altered copy. If you want a comprehension result to replace its source data, specifically make that assignment yourself._

#### Collection Data Types

SAI comprehension operators natively understand **Arrays**, **Plain Objects** and **ES6 Iterators**. Support is forthcoming for the ES6 collection types **Map** and **Set**.

The behaviour of comprehensions differes subtly according to the types of collections given. Please check the reference documentation for specifics.

#### Sample Data

We’ll be working with the following set of data to make our examples clearer.

	set friends to:
	   :name 'Sara', age 23, #cat, province 'ON'
	   :name 'John', age 19, #cat, #dog, province 'ON'
	   :name 'Ellie', age 22, province 'QC'
	   :name 'Marshal', age 21, #dog, province 'ON'
	   :name 'Doug', age 18, province 'ON'
	   :name 'Ann', age 23, #cat, province 'QC'
	   :name 'Harry', age 31, province 'QC'
	   :name 'Jenna', age 28, #dog, province 'ON'

_Note: the `#tag` syntax in a fields constructor creates a field with the given name and a value of true, e.g. `#cat` is equivalent to `cat true`. _

All of the examples below appear in the `Comps` sample.  I’m not going to show the results here; just run the sample and see for yourself.

### Filtration

Filtration comprehensions test each element of a collection and return a new collection made up only of elements that pass the test. 

#### Hashtag

**Who likes cats?**

	friends #cat

**Who doesn’t like dogs?**

	friends !#dog

**Who likes cats and dogs?**

	friends #dog #cat

\_Note: multiple-tag comprehensions are tested with a logical **and**; all conditions must be fulfilled for the row to be included in the result.

#### HAS _expression_

The comprehension operator **has** indicates an expression based filter using the **it** _magical value_ to represent the item currently under examination. Since **it** is in play, the associated **dot** scoping prefix is also active within the expression for easy access to item fields. In the first example below, both lines produce the same code and result. 

**Who is 21 or over?**

	friends has it.age >= 21
	friends has .age >= 21

**Who likes cats or dogs?**

	friends has .cat or .dog
 
**Who lives in Quebec and likes cats or dogs?**

	friends has (.province = 'QC') and (.cat or .dog)

Comprehensions, like any other operator, can be chained together. Every comprehension has the same precedence, and they are evaluated in sequence from left to right. 

**Under 21 and likes cats?**

	friends #cat has .age < 21

Where possible, filter comprehensions are internally assembled to reduce the number of times the list is examined. In the above example, the list is still analyzed only once as the rules of evaluation permit `#cat` and `has .age < 21` to be combined.

Any valid expression can be used in a **has** comprehension, and one can refer to values outside the expression as well.

**Who can rent a car?**

	set rentAge to: ON 25, QC 21
	friends has .age >= rentAge[.province]
 
If an expression isn’t enough, **has** can accept a block of code.  Like the `.filter` array method in Javascript (which is still available, of course), the **has** keyword provides each item in the collection for evaluation. If the block returns true, the item is added to the output collection.

#### HAS _block_

Keyword **has** can reference a block of code directly, which makes the **it** magic value available within that block, or be given the name of a task (or a task definition).

\*\*Who can rent a car?

	friends has
	  return .age >= rentAge[.province]

#### HAS USING

You can integrate function calls into a composed comprehension by adding the **using** keyword immediately following the comprehension keyword itself.

**Who can rent a car? (named task)**

	set CanRent to task as row
	  return row.age >= rentAge[row.province]
	
	... later ...
	
	friends has using CanRent

In composed comprehensions, the **using** keyword signals that the following expression is a function that should be called. 

In this usage, **has using** is almost exactly like Javascript’s `Array.prototype.filter` method, though with a much broader range of applicability.

### Sorting

SAI comprehensions allow sorting through both the familiar Javascript `.sort` method as well as more succinct and expressive variations similar to those offered for filtration. 

_Reminder: unlike the `.sort` array method,  the **by** operator does not modify the original data set; it always produces a sorted copy. This ensures that variables used in comprehension expressions remain immutable. If you want to sort an array in place, use the `.sort` method._

#### BY _expression_

Similarly to the way the **has** operator works for selecting elements in an expression, the **by** operator provides for sorting of elements, including the use of the **it** magic value and its _dot_ scoping prefix.

**By name**

	friends by .name

**Oldest to youngest**

	friends by .age descending

You may sort by more than one value by adding another **by** clause. Multiple sort clauses are handled the way a database would: if a clause provides no guidance (the values are identical), subsequent clauses are each checked in turn.

**Length of name in characters, then age**

	friends by .name.length by .age

#### BY _block_

When using **by** with a block of code, the magic variables change. You are given both records under consideration just as you would using the Javascript `.sort` method. And perhaps unsurprisingly to those who have ever seen a programming textbook, the magic variables are the letters **a** and **b**.

**Ages by province **

	friends by
	  return a.province <=> b.province or a.age <=> b.age

A surprise for you: **\<=\>** is a SAI-specific comparison operator useful for sorting numeric and string values. It returns -1 if the value to the left is less than the right, 1 if it is greater, and 0 if they’re equal. 

Because of the way the **or** operator shortcuts evaluation when it finds the first truthy value, you can string together multiple **\<=\>** comparison operators without using **if**.

#### BY USING

If you’ll recall, **has using** provides the ability to use a named function for your sorting facilitator, and **by using** allows the same thing.

**Ages by province (using named task)**

	set ProvinceAge to task as a, b
	 return a.province <=> b.province or a.age <=> b.age
	
	 ... later ...
	
	friends by using ProvinceAge

#### HIGHEST / LOWEST

The operators **highest** and **lowest** also sort by the provided expression, but when the sort is complete they _extract_ the highest/lowest value from the dataset and return it as a single value.  

**Oldest friend** 

	friends highest .age

**Youngest cat-loving friend**

	friends #cat lowest .age

_Note: combining **highest/lowest** with other sorting operators is not recommended and may result in unexpected behaviour. Instead, use  **by** and follow up with **first/last**._

### Mapping

Mapping offers a streamlined way of transforming values in a collection. Javascript offers the `.map` array method, while SAI extends this with the **thru** operator, making simple transformations fast to write, and complex ones easy to understand.

#### THRU _expression_

The **thru** operator passes each value in a collection “through” an expression. The result of the expression becomes the new value in a copy of the collection. 

**Just the names in alpha order**

	friends by .name thru .name

**Just the names in alpha order (alternate)**

	friends thru .name by .

_Here we use **.** (dot) alone as a synonym for **it**. It’s there but you don’t have to use it (rimshot)._

**Summary of cat-fanciers**

	friends #cat thru '${.name}, age ${.age}, lives in ${.province}'

#### THRU _block_

More complex transformations need more than just an expression, so you can use **thru** with a block of code just like other SAI comprehensions.  Though I’m running out of more complex examples. Sorry.

**Numbered list of friends**

	friends thru
	  return '${key+1}) ${.name}'

Like **it**, **key** is a magic variable used within comprehensions. It provides the trait name (or array index) of the item currently under examination.
 
**All-caps names**

	friends thru
	 return it overlay: name from .name.toUpperCase

I’ve sprung a new operator on you here: **overlay**. 

It’s not a comprehension but this is still a good place to introduce it.  Overlay makes a _shallow copy_ of the object on the left that has the values of the object on the right _overlaid_ on top. The new values will replace old ones, or add new ones if they didn’t exist before. In this example, overlay copies **it** then overlays the name field with a capitalized version of the original name.

Without using overlay and just using the **copy** operator, the same functionality looks like this:

	friends thru
	 set temp to copy it
	 set temp.name from temp.name.toUpperCase
	 return temp

_Aside: if we wanted to all-caps the names in the `friends` list itself, rather than produce a new list with capitalized names as we have been doing (thus leaving the source list unchanged), we could do it like this:_

	ply friends
	  set .name from .name.toUpperCase

_Ply is a SAI-specific iterator that steps through array elements one at a time._

#### THRU USING

You can also call another function indirectly with **thru using**, which operates much the same way as Javascript’s `Array.prototype.map` method, though it can be applied to all types of collections.

> example needed

#### KEYS / VALUES

The **keys** and **values** unary operators can also be used as comprehensions. **Keys** transforms a set of traits into a list of the trait names, discarding the values. **Values** transforms a set of traits into a list of the trait values, discarding the keys. The order of keys/values is the result is undefined.

> example needed

### Reduction

Reduction is similar to mapping in that all of the elements of a collection are visited in turn, however the goal is typically to summarize, collate or total those elements, not transform them individually

Javascript features the array method `Array.prototype.reduce` which performs the reduction function, and SAI extends its applicability with the **gather** compherension keyword.

#### GATHER _block_

The **gather** comprehension only has a long-form which takes a block of code.

In addition to the item itself (**it**) and the item key (**key**) available in other comprehensions, an accumulator variable (**accum**) is also used in the block. Each time the block is processed, **accum** has the same value it had last time.

Below, the **accum** variable is initialized by `into 0`, and then each row in the collection is visited and we add `.age` to it. This totals the age of every friend.

**Total ages (block)**

	friends gather into 0
	  set accum + .age

A more complex example.  See if you can suss out how it works.

**Count friends in each province**

	friends gather into blank
	  set accum[.province] to (self default 0) + 1

Here’s a hint: **self** is a _magic variable_ used only in **set** statements. It is initialized to the previous value of the variable being changed by **set**. 

Another hint: **default** is an operator that evaluates to its right hand value if and only if the left hand value is _undefined_.

Last hint: **blank** initializes an object with no traits; it is the SAI equivalent of Javascript’s `{}`.  The comparable word for arrays/lists with no elements is **empty**; in Javascript you’d write `[]`.

#### GATHER USING

The addition of **using** lets you call an external function. _Note that the **using** clause appears after the **into** clause._ Be aware that the function must always `return` the accumulator so the value can be preserved across function calls.  (The block version of **gather** takes care of this for you.)


**Total ages (task)**

	set ageTotal to task as accumulator, row
	  return accumulator + row.age
	
	 ... later ...
	
	friends gather into 0 using ageTotal 

#### LIMIT

The **limit** comprehension is used to limit the number of items in the collection. Typically you’ll only want to use it when operating on lists, as the order of traits is indeterminate.

**Five youngest friends**

	friends by .age limit 5

A negative limit chooses items from the end of the list.

**Five oldest friends**

	friends by .age limit -5

Limit mimics the behaviour of the SQL **limit** clause; if you supply two comma separated values, the first value is the starting record and the second is the number of records desired. This is useful for paging.

**Second page of five youngest**

	friends by .age limit 5,5

_Note: the parameters you provide to **limit** are not the same as those you provide to Javascript’s `.slice` array method. _

#### FIRST / LAST

The **first** and **last** terminal operators take either the first or last item in a list and returns it as a value; like the **highest** and **lowest** operators but without any sorting. Because they return a value, you probably won’t need to apply any further comprehensions afterwards (unless the value is itself a list).

**Last friend in the list**

	friends last
