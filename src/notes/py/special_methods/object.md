---
title: "Object Behavior"
draft: false
weight: 1
katex: true
---

### Describing Object Behavior
- In Python, everything is an object:
	- Integers are objects
	- Strings are objects
	- Lists are objects
	- Etc.
- Objects are generally classified according to:
	- Their behavior
	- The features that they implement
- Notice, there is overlap between these two properties
- For example, these objects have similar behavior:
	1. Strings
	2. Lists
	3. Tuples
	4. Xrange
- These objects are called *sequence types*
- Specifically, each sequence type is grouped together only because they support a common set of sequence operations
- For example, we can call $s[n]$ and $len(s)$ on sequence types

### Introducing Special Methods
- All basic interpreter operations are implemented using special object methods
- These special methods always are preceded and followed by two underscores ( __ )
- These methods are automatically triggered by the interpreter during program execution
- The following examples are operations that map to internal methods:

$$ x+y \quad \to \quad x.\text{\textunderscore \textunderscore add}(y)\text{\textunderscore \textunderscore} $$
$$ x[k] \quad \to \quad x.\text{\textunderscore \textunderscore getitem}(k)\text{\textunderscore \textunderscore} $$

- Evidently, the behavior of each data type depends entirely on the set of special methods that it implements

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
