---
title: "Stack"
draft: false
weight: 5
katex: true
---

### Defining a Stack
- A stack is a collection that:
	- Is **indexed**
	- Allows **duplicates**
	- Is **linear**
	- Is **LIFO**

### Creating a Stack

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> print(fruits)
['apple', 'banana', 'pear']
```

### Adding to a Stack

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> fruits.append('banana')
>>> print(fruits)
['apple', 'banana', 'pear', 'banana']
```

### Removing from a Stack

```python
>>> fruits = ['apple', 'banana', 'pear']
>>> fruits.pop()
>>> 'pear'
>>> print(fruits)
['apple', 'banana']
```

### References
- [Using Lists as Stacks](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks)
