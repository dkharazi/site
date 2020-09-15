---
title: "String Representation"
draft: false
weight: 3
katex: true
---

### Describing String Representations
- The class method `__format__()` has the following properties:
	- Called by the `format()` function
	- In other words, `format` just calls `obj.__format__`
	- Provides the object with a format method that performs some formatting operation
	- Can be thought of as syntactic sugar
- The class method `__repr__()` has the following properties:
	- Its goal is to be unambiguous
	- Should be implemented for any class to provide the class with a useful identity
- The class method `__str__()` has the following properties:
	- Its goal is to be readable
	- Can be implemented if there is a more readable string representation
- The following class uses these special methods:

```python
>>> class Document: 
...     def __init__(self, words): 
...         self.words = words
...     def __repr__(self):
...         t = ''
...         for i in self.words:
...            t = t + i + '\n'
...         return t
...     def __str__(self):
...         return 'Document: ' + self.words 

>>> d = Document('my doc')
>>> d
m
y

d
o
c

>>> repr(d)
'm\ny\n \nd\no\nc\n'
>>> str(d)
'Document: my doc'
```

### Summarizing Special Methods

| Method       | Description                                  |
| ------------ | -------------------------------------------- |
| `__format__` | Creates a formatted representation           |
| `__repr__`   | Creates a string representation of an object |
| `__str__`    | Creates a simple string representation       |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Use-Cases for Each Special Method](https://stackoverflow.com/a/2626364/12777044)
- [Description of the __format__ Special Method](https://stackoverflow.com/a/16683882/12777044)
- [Example of format Special Method](https://www.programiz.com/python-programming/methods/built-in/format)
