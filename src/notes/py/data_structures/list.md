---
title: "List"
draft: false
weight: 1
katex: true
---

### Defining a List
- A list is a collection that:
	- Can be **ordered**
	- Is **indexed**
	- Is **mutable**
	- Allows **duplicates**

### Creating a List

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> print(fruits)
['apple', 'banana', 'pear']
```

### Accessing a List

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> apple = fruits[0]
>>> print(apple)
'apple'
```

### Adding to a List

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> fruits.append('banana')
>>> print(fruits)
['apple', 'banana', 'pear', 'banana']
```

### Removing from a List

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> fruits.remove('banana')
>>> print(fruits)
['apple', 'pear']
```

### Combining Two Lists

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> more_fruits = ['orange', 'pear', 'mango']
>>> fruits + more_fruits
['apple', 'banana', 'pear', 'orange', 'pear', 'mango']
```

### References
- [W3schools Walkthrough of Lists](https://www.w3schools.com/python/python_lists.asp)
