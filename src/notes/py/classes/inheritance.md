---
title: "Inheritance"
draft: false
weight: 4
katex: true
---

### Describing Inheritance
- Inheritance refers to creating a new class that modifies the behavior of an existing class
- In this case:
	- The original class is called a **base class** or superclass
	- The new class is called a **derived class** or subclass
- The subclass *inherits* the attributes defined by its base class
- The following is an example of a inheritance:

```python
>>> class EvilAccount(Account):
...     def inquiry(self):
...         return 'bad inquiry'

>>> a = EvilAccount('Todd', 200)
>>> print(a.inquiry())
'bad inquiry'
```

- In this example, instances of `EvilAccount` and `Account` are identical except for the redefined `instance()` method

### Implementing Inheritance in Python
- Inheritance is implemented with only a slight change to the dot operator
- Specifically, the search for an attribute does the following:
	1. First, tries to find a match in the instance
	2. Next, tries to find a match in the instance's class
	3. Then, tries to move on to the base class
	4. Then, tries to continue moving up to previous base classes

### The `super` Object in Python
- The `super` function returns a proxy object that allows us to access methods of a base class
- This function has two uses:
	- Avoids using the base class name explicitly
	- Simplifies working with multiple inheritance
- Specifically, an attribute is searched using the normal search rules that would have been used on the base classes
- This frees us from hard-coding the exact location of a method

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
