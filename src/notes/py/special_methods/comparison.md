---
title: "Comparison and Ordering"
draft: false
weight: 4
katex: true
---

### Describing Comparisons and Ordering
- The class method `__bool__()` has the following properties:
	- Used for truth-value testing
	- Should return either True or False
- The class method `__hash__()` has the following properties:
	- Used for retrieving hash value of an object
	- The hash value is used for truth-value testing
	- The value returned is an integer
	- This integer should be identical for two objects that compare as equal
	- Mutable objects shouldn't override this method
- The following class uses these special methods:

```python
>>> class Person:
...     def __init__(self, age, name):
...         self.age = age
...         self.name = name
...     def __bool__(self):
...         return self.age > 25
...     def __eq__(self, other):
...         eq_age = self.age == other.age
...         eq_name = self.name == other.name
...         return eq_age and eq_name
...     def __hash__(self):
...         return hash((self.age, self.name))

>>> adam_david = Person(23, 'Adam')
>>> adam_peter = Person(23, 'Adam')
>>> luke_james = Person(23, 'Luke')

>>> bool(adam_david)
False
>>> adam_david == adam_peter
True
>>> adam_david == luke_james
False

>>> hash(23)
23
>>> hash('Adam')
6859281680654920110
>>> hash(adam_david)
-2059381663602380558
```

### Summarizing Special Methods

| Method     | Description                    |
| ---------- | ------------------------------ |
| `__bool__` | Performs truth-value testing   |
| `__hash__` | Computes an integer hash index |

### Methods for Comparison

| Method                | Result          |
| --------------------- | --------------- |
| `__lt__(self, other)` | $self < other$  |
| `__le__(self, other)` | $self <= other$ |
| `__gt__(self, other)` | $self > other$  |
| `__ge__(self, other)` | $self >= other$ |
| `__eq__(self, other)` | $self == other$ |
| `__ne__(self, other)` | $self != other$ |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Example of Special Methods](https://www.programiz.com/python-programming/methods/built-in/hash)
