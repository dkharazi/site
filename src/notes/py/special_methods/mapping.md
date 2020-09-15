---
title: "Sequence and Mapping Methods"
draft: false
weight: 7
katex: true
---

### Describing Mapping Methods
- The following class methods can be used for mappings:
	- `__len__()`
	- `__getitem__()`
	- `__setitem__()`
	- `__delitem__()`
	- `__contains__()`
- `__len__()` has the following properties:
	- Called by the built-in `len()` function
	- Determines truth values unless the `__bool__()` method has been defined
- `__getitem__()` has the following properties:
	- Returns an item by key value
	- The key can be any object
	- The key is typically an integer for sequences
- `__setitem__()` has the following properties:
	- Assigns a value to an element
- `__delitem__()` has the following properties:
	- Deletes an element from the object
- `__contains__()` has the following properties:
	- Determines if a given element is in the object
	- Used to implement the `in` operator

```python
>>> a = [1, 2, 3, 4, 5, 6]
>>> len(a)  # a.__len__()
6
>>> a[2]  # a.__getitem__(2)
3
>>> a[1] = 7  # a.__setitem__(1,7)
>>> print(a)
[1, 7, 3, 4, 5, 6]
>>> del a[2]  # a.__delitem__(2)
>>> print(a)
[1, 7, 4, 5, 6]  # a.__contains__(5)
>>> 5 in a
True
```

### Example of Mapping Methods using Slicing

```python
>>> a = [1,2,3,4,5,6] 
>>> a[1:5]
[2, 3, 4, 5]
>>> a[1:3] = [10,11,12]
>>> print(a)
[1, 10, 11, 12, 4, 5, 6]
>>> del a[1:4]
[1, 4, 5, 6]

>>> x = [1,2,3,4,5,6]
>>> x.__getitem__(slice(1,5,None))
[2, 3, 4, 5]
>>> x.__setitem__(slice(1,3,None), [10,11,12])
>>> print(x)
[1, 10, 11, 12, 4, 5, 6]
>>> x.__delitem__(slice(1,4,None))
[1, 4, 5, 6]
```

### Summarizing Special Methods

| Method                          | Description                        |
| ------------------------------- | ---------------------------------- |
| `__len__(self)`                 | Returns the length of `self`       |
| `__getitem__(self, key)`        | Returns `self[key]`                |
| `__setitem__(self, key, value)` | Sets `self[key] = value`           |
| `__delitem__(self, key)`        | Deletes `self[key]`                |
| `__contains__(self, obj)`       | Returns True if `obj` is in `self` |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
