---
title: "Set"
draft: false
weight: 3
katex: true
---

### Defining a Set
- A set is a collection that:
	- **Can't be ordered**
	- Is **unindexed**
	- Is **mutable**
	- Only includes **immutables**
	- Excludes **duplicates**

### Creating a Set

```python
>>> fruits = {'apple', 'banana', 'pear'}
>>> print(fruits)
{'pear', 'banana', 'apple'}
```

### Adding to a Set

```python
>>> fruits = {'apple', 'banana', 'pear'}
>>> fruits.add('orange')
>>> print(fruits)
{'pear', 'orange', 'banana', 'apple'}
```

### Removing from a Set

```python
>>> fruits = {'apple', 'banana', 'pear'}
>>> fruits.remove('banana')
>>> print(fruits)
{'pear', 'apple'}
```

### Combining Two Sets

```python
>>> fruits = {'apple', 'banana', 'pear'}
>>> more_fruits = ['orange', 'pear', 'mango']
>>> fruits | more_fruits
('orange', 'pear', 'mango', 'banana', 'apple')
```

### References
- [W3schools Walkthrough of Sets](https://www.w3schools.com/python/python_sets.asp)
