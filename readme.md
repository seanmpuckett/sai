# SAI
An attempt to add rigour, elegance and clarity to programs in the Javascript ecosystem.

### About

SAI is a transpiler for the Node/IO.JS Javascript environment. 

Your source files are written in another programming language (called SAI) and _transpiled_ into the equivalent Javascript, which is then executed like any other Javascript. SAI objects are compatible with regular JS objects, and a project can mix SAI and JS code on a file-level basis. 

SAI embraces Javascript's capabilities, including new features of ES6 such as promises and generators, but removes the heavy reliance on arcane symbology. SAI was designed primarily as a humane language one could simply read aloud. This has the side effect that SAI programs look more or less like pseudo-code; they can be their own design documents.

SAI, like Python and CoffeeScript, treats whitespace as semantically relevant: level of indent is used to identify code blocks, and line breaks are always significant. Indeed, SAI's parser is quite rigid as to what constitutes a single 'statement'; run-on code with heavily nested calls is strongly discouraged (if not impossible) -- and this is intentional.

SAI exists to encourage understandable and maintainable programs through the affordance of a straightforward programming style. While Javascript allows (and perhaps even encourages) heavily nested expressions, opaque idioms and clever uses of the prototyping system, and while many people find use of these techniques to be personally rewarding, the truth of the matter is that professional code should never strive to be clever or creative. Instead, SAI encourages elegance and simplicity.

My feeling is that if someone else of reasonable competency cannot easily understand what a program is doing on a cursory read-through, then one has failed as a professional programmer. James Joyce created some remarkable literary works of lasting significance, but when software used in a production environment is just as difficult to understand as _Finnegans Wake_, then as engineers we have utterly failed in our duty to our employers, co-workers and successors. Good software should be written in the style of the New York Times, not Thomas Pynchon's _Gravity's Rainbow_. 

SAI, then, exists to encourage a _New York Times_ style of programming that results in software that is easy to read, easy to write and easy to maintain.

#### What it isn't

While SAI appears to look much like Coffeescript (in particular due to their semantic use of whitespace), SAI is not a derivation of Coffeescript. I am however thankful to the developers of CS for demonstrating that creating a transpiler is a viable approach to fixing some of the shortcomings of Javascript. I just don't think they went far enough.

SAI doesn't make it impossible to write sloppy, ugly and buggy code.  However, SAI's _affordances_ tend to emphasise clear code, while making some of the more egregiously obnoxious Javascript hacks and idioms either impossible, or just very difficult. Just because you _can_ do something a certain way in JS doesn't mean you _should_.

### Features

