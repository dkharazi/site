---
title: "Namedtuple"
draft: false
weight: 12
katex: true
---

### Defining a NamedTuple
- A namedtuple is an object type that is:
	- Easy-to-create
	- Lightweight
- A namedtuple is a collection that has the following properties:
	- Can be **ordered**
	- Is **indexed**
	- Is **immutable**
	- Allows **duplicates**
- Named tuples can be referenced using:
	- Object-like variable dereferencing
	- Standard tuple syntax
- The use-cases include the following:
	1. Improve code readability by using object notation
	2. Can replace immutable classes without functions

### Example of Use-Case 1

```python
>>> # Normal tuple
>>> pt1 = (1.0, 5.0)
>>> pt2 = (2.5, 1.5)
>>> line = pt1[0]-pt2[0]

>>> # Named tuple
>>> from collections import namedtuple
>>> Point = namedtuple('Point', 'x y')
>>> pt1 = Point(1.0, 5.0)
>>> pt2 = Point(2.5, 1.5)
>>> line = pt1.x-pt2.x
```

### Example of Use-Case 2

```python
>>> # Replaceable class
>>> class Gender:
...     def __init__(self, male, female):
...         self.male = male
...         self.female = female
>>> genders = Gender(male, female)

>>> # Named tuple
>>> from collections import namedtuple
>>> Gender = namedtuple('Gender', ['male', 'female'])
>>> genders = Gender(male, female)
```

### References
- [Benefits of Named Tuples over Dictionaries](https://stackoverflow.com/a/9872434/12777044)
- [NamedTuple Documentation from the Python Standard Library](https://docs.python.org/3/library/collections.html#collections.Counter)
- [What are NamedTuples in Python?](https://stackoverflow.com/a/2970722/12777044)
