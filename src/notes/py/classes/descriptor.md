---
title: "Descriptors"
draft: false
weight: 9
katex: true
---

### Describing Descriptors in Python
- Properties provide access to attributes using a series of user-defined `get`, `set`, and `delete` methods
- This form of attribute control can be further generalized through the use of a **descriptor object**
- A descriptor is an object representing the value of an attribute
- A descriptor implements the following special methods:
	- `__get__()`
	- `__set__()`
	- `__delete__{}`
- By doing this, it can customize the operations of attributes

### Illustrating a Descriptor Object
- The following is an example of a descriptor:

```python
>>> class TypedProperty(object):  # descriptor
...     def __init__(self, name, type, default=None)
...         self.name = '_' + name
...         self.type = type
...         self.default = default if default else type()
...     def __get__(self, inst, cls):
...         return getattr(inst, self.name, self.default)
...     def __set__(self, instance, value):
...         if not isinstance(value, self.type):
...             raise TypeError('wrong type')
...         setattr(instance, self.name, value)
...     def __delete__(self, instance):
...         raise AttributeError('cannot del attribute')

>>> class Foo(object):
...     name = TypedProperty('name', str)
...     name = TypedPropert('num', int, 42)
```

- In this example, `TypedProperty` defines a descriptor
- It performs type cheecking when the attribute is assigned
- Then, an error is produced if an attempt is made to delete the attribute

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
