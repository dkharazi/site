---
title: "Attribute Access"
draft: false
weight: 5
katex: true
---

### Describing Attribute Access
- The following class methods can be used for attribute access:
	- `__getattribute__()`
	- `__getattr__()`
	- `__setattr__()`
	- `__delattr__()`
- `__getattribute__()` has the following properties:
	- Invoked before looking at the actual attributes on the object
	- As a result, it can be tricky to implement correctly
- `__getattr__()` has the following properties:
	- Invoked if the attribute wasn't found
	- It's good for implementing a fallback for missing attributes
- `__setattr__()` has the following properties:
	- Invoked when setting an attribute
- `__delattr__()` has the following properties:
	- Invoked when deleting an attribute
- In most scenarios, we'll prefer `__getattr__()` over `__getattribute__()`
- We would most likely either implement `__getattribute__()` or `__getattr__()`, but not both
- These special methods are used to parameterize access to attributes

```python
>>> class Person:
...     def __init__(self, name, age, sex):
...         self.name = name
...         self.age = age
...         self.sex = sex

>>> attrs = ['name', 'age']
>>> p = Person('Jeff', 25, 'm')
>>> [getattr(p, a) for a in attrs]
['Jeff', 25]
```

### Summarizing Special Methods

| Method                           | Description                                                          |
| -------------------------------- | -------------------------------------------------------------------- |
| `__getattribute__(self, name)`   | Returns the attribute of `self.name`                                 |
| `__getattr__(self, name)`        | Returns the attribute of `self.name` and handles missing `self.name` |
| `__setattr__(self, name, value)` | Sets the attirbute of `self.name` to `value`                         |
| `__delattr__(self, name)`        | Deletes the attribute `self.name`                                    |


### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Use-Cases of __getattr__ and __getattribute__](https://stackoverflow.com/a/3278104/12777044)
- [Why use These Special Methods?](https://stackoverflow.com/a/19123719/12777044)
