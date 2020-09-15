---
title: "Polymorphism"
draft: false
weight: 6
katex: true
---

### Describing Polymorphism
- **Dynamic binding** is sometimes referred to as **polymorphism** in the context of inheritance
- Dynamic binding is the capability to use an instance without regard for its type
- It is handled entirely through the attribute lookup process: 
	1. Search for an attribute within the instance
	2. Search for an attribute within the class
	3. Search for an attribute within base classes
- Static binding has the following attribute lookup process:
	1. Search for an attribute within the instance
- **Method overloading** is an example of static binding
	- This refers to optional parameters in Python
- **Method overriding** is an example of dynamic binding

### Inheritance without Duck Typing

```python
>>> class BadAccount(Account):
...     def __init__(self, id, name):
...         self.id = id
...         self.name = name
...     def inquiry():
...         return 'bad account'
```

### Inheritance with Duck Typing

```python
>>> class BadAccount:
...     def __init__(self, id, name):
...         self.id = id
...         self.name = name
...     def inquiry():
...         return 'bad account'
```

### Details about Duck Typing
- In a statically typed language, we have to concept of adding
- However, only some types of objects can be added
- You won't be able to add different types of objects together
- In Python, classes are able to define what it means to be added
- For example, `a+b` is syntactic sugar for the `__add__` method
- Duck typing implies Python doesn't care about which class `a` belongs to
- All it cares about is whether the call to the `__add__` method returns anything sensible
- If not, a `TypeError` error will be raised typically
- However, Python at least attempts to interpret `a + b` without checking whether `a` and `b` both belong to the same class
- This is unlike many statically typed languages

### References
- [Details about Duck Typing in Python](http://www.voidspace.org.uk/python/articles/duck_typing.shtml)
- [What is Duck Typing?](https://stackoverflow.com/a/12459717/12777044)
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Example of Duck Typing](https://stackoverflow.com/a/4205396/12777044)
- [Inheritance and Duck Typing in Python](https://realpython.com/inheritance-composition-python/)
- [Differences between Static and Dynamic Binding](http://www.dieter.handshake.de/pyprojects/zope/book/chap3.html)
- [Good Example of Static Binding in Java](https://beginnersbook.com/2013/04/java-static-dynamic-binding/)
- [An Example of Method Overriding in Java](https://www.geeksforgeeks.org/overriding-in-java/)
