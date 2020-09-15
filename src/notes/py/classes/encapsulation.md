---
title: "Encapsulation and Abstraction"
draft: false
weight: 10
katex: true
---

### Describing Encapsulation in Python
- By default, all attributes and methods of a class are public
- Meaning, they are all accessible without any restrictions
- Implying, everything defined in a base class is inherited and accessible within a derived class
- This behavior is often undesirable when we don't want to expose the internal implementation of an object
- Also, this can lead to namespace conflicts between objects defined in a derived class and those defined in a base class 

### Attributes with Double Underscores
- To fix the namespace issue, all names are mangled to form a new name if they start with a double underscore
- For example, an attribute `__foo` within a class `A` will be referred to as `_A__foo`
- This allows classes to have private attributes and methods
- This is because private names used in a derived class won't collide with the same private names used in a base class
- The following is an example of this concept:

```python
>>> class A(object):
...     def __init__(self):
...         self.__X = 3      # Mangled to self._A__X
...     def __spam(self):     # Mangled to _A__spam()
...         print('hello')

>>> class B(object):
...     def __init__(self):
...         A.__init__(self)
...         self.__X = 37     # Mangled to self._B__X
...     def __spam(self):     # Mangled to _B__spam()
...         print('hi')

>>> a = A()
>>> a.__X
AttributeError
>>> a.__spam()
AttributeError
```

### The Illusion of Data Hiding
- The scheme only provides the illusion of data hiding
- There's no strict mechanism in place to actually prevent access to the *private* attributes of a class
- For example, we can still access the attributes from the above example:

```python
>>> b = B()
>>> b._A__X
3
>>> b._B__X
37
>>> b._B__spam()
'hi'
```

- It is recommended to use private attributes when defining mutable attributes via properties
- This will encourage users to use the property name instead
- Providing private names to a method can prevent a derived class from changing the implementation of a method

### Describing Abstraction
- This notion of data hiding illustrates encapsulation in Python
- **Encapsulation** is a technique that tries to achieve abstraction
- Specifically, **abstraction** is the general concept of describing something in simplier terms
- Abstraction typically involves showing only relevant details to the user
- Abstraction allows the user to only focus on the building blocks of a given class, module, function, etc.
- Encapsulation is focused more on information *hiding*, whereas abstraction is focused more on information *showing*
- The following are some examples of encapsulation that achieves abstraction:
	- Creating functions
	- Creating private attributes
	- Creating classes
	- etc.

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Details about Encapsulation and Abstraction](https://stackoverflow.com/a/8961062/12777044)
