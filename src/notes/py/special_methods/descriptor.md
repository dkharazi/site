---
title: "Attribute Descriptors"
draft: false
weight: 6
katex: true
---

### Describing Attribute Descriptors
-  Sometimes, attributes are wrapped with an extra layer of logic that interact with:
	- Get operations
	- Set operations
	- Delete operations
- This kind of wrapping is accomplished by creating a descriptor object
- An object is considered a descriptor if any of the following are defined:
	- `__get__()`
	- `__set__()`
	- `__delete__()`
- For example, properties implement the descriptor protocol

### Describing Special Methods of a Descriptor
- Our three special methods of a descriptor are meant to interact with the default implementation of the following:
	- `__getattribute__()`
	- `__setattr__()`
	- `__delattr__()`
- Specifically, there are two types of descriptors:
	- **Data Descriptor:** Has a `__set__` and/or `__delete__`
	- **Non-Data Descriptor:** Neither `__set__` nor `__delete__`
- Classmethods, staticmethods, and functions are examples of non-data descriptors
- Properties are an example of a data descriptor
- In general, we should try to use a simple class attribute
- If necessary, then we could use the property decorator
- The following is an example of a descriptor:

```python
>>> class Descriptor(object):
...     def __init__(self, name):
...         self.name = name
...     def __get__(self, obj, objtype):
...         return '{}for{}'.format(self.name, self.name)
...     def __set__(self, obj, name):
...         if isinstance(name, str):
...             self.name = name
...         else:
...             raise TypeError('Name should be string')

>>> class GFG(object):
...     name = Descriptor() 
    
>>> g = GFG()
>>> g.name = 'Todd'
>>> print(g.name)
'ToddforTodd'
```

### Creating a Descriptor using Properties

```python
>>> class Alphabet:
...     def __init__(self, value):
...         self._value = value
...
... # getting the values
... @property
... def value(self):
...     print('Getting value')
...     return self._value
... # setting the values
... @value.setter
... def value(self, value):
...     print('Setting value to ' + value)
...     self._value = value
... # deleting the values
... @value.deleter
... def value(self):
...     print('Deleting value')
...     del self._value

>>> x = Alphabet('Peter')
>>> print(x.value)
>>> x.value = 'Diesel'
>>> del x.value
```

### Summarizing Special Methods

| Method                           | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| `__get__(self, instance, cls)`   | Returns an attribute value or raises `AttributeError` |
| `__set__(self, instance, value)` | Sets the attribute to `value`                         |
| `__delete__(self, instance)`     | Deletes the attribute                                 |

### References
- [Python Descriptors](https://realpython.com/python-descriptors/)
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Understanding __get__ and __set__ Special Methods](https://stackoverflow.com/a/34554353/12777044)
- [Details about Descriptors in Python](https://www.geeksforgeeks.org/descriptor-in-python/)
