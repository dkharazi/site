---
title: "Tuple"
draft: false
weight: 2
katex: true
---

### Defining a Tuple
- A tuple is a collection that:
	- Can be **ordered**
	- Is **indexed**
	- Is **immutable**
	- Allows **duplicates**

### Creating a Tuple

```python
>>> fruits = ('apple', 'banana', 'pear')
>>> print(fruits)
('apple', 'banana', 'pear')
```

### Accessing a Tuple

```python
>>> fruits = ('apple', 'banana', 'pear')
>>> apple = fruits[0]
>>> print(apple)
'apple'
```

### Combining Two Tuples

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> more_fruits = ['orange', 'pear', 'mango']
>>> fruits + more_fruits
('apple', 'banana', 'pear', 'orange', 'pear', 'mango')
```

### References
- [W3schools Walkthrough of Tuples](https://www.w3schools.com/python/python_tuples.asp)
