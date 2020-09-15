---
title: "Dictionary"
draft: false
weight: 4
katex: true
---

### Defining a Dictionary
- A dictionary is a collection that:
	- **Can't be ordered**
	- Is **indexed**
	- Is **mutable**
	- Excludes **duplicates**

### Creating a Dictionary

```python
>>> fruits = {'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
>>> print(fruits)
{'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
```

### Accessing Items in a Dictionary

```python
>>> fruits = {'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
>>> print(fruits['fruit2'])
'banana'
```

### Adding to a Dictionary

```python
>>> fruits = {'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
>>> fruits['fruit4'] = 'mango'
>>> print(fruits)
{'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear', 'fruit4': 'mango'}
```

### Removing from a Dictionary

```python
>>> fruits = {'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
>>> fruits.pop('fruit2')
>>> print(fruits)
>>> fruits = {'fruit1': 'apple', 'fruit3': 'pear'}
```

### Combining Two Dictionaries

```python
>>> fruits = {'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear'}
>>> more_fruits = {'fruit4': 'orange', 'fruit5': 'pear', 'fruit6': 'mango'}
>>> fruits | more_fruits
{'fruit1': 'apple', 'fruit2': 'banana', 'fruit3': 'pear', 'fruit4': 'orange', 'fruit5': 'pear', 'fruit6': 'mango'}
```

### References
- [W3schools Walkthrough of Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)
