---
title: "ChainMap"
draft: false
weight: 11
katex: true
---

### Defining a ChainMap
- A ChainMap is a data structure that allows you to treat multiple dictionaries as one dictionary
- In other words, a ChainMap is an updatable view over many dicts
- However, it behaves just like a normal dict
- The use cases include the following:
	1. Searching through multiple dictionaries quickly
	2. Making changes to multiple dictionaries quickly
	3. Finding unique keys across multiple dictionaries quickly
		- This also can refer to providing a chain of default values

### Example of Use-Case 1

```python
>>> toys = {'Blocks': 30, 'Monopoly': 20}
>>> computers = {'iMac': 1000, 'iPad': 800, 'PC': 400}
>>> clothing = {'Jeans': 40, 'T-Shirt': 10}

>>> from collections import ChainMap
>>> inventory = ChainMap(toys, computers, clothing)

>>> print(inventory['Jeans'])
40
>>> inventory.get('Mario Bros.')
None
```

### Example of Use-Case 2

```python
>>> toys = {'Blocks': 30, 'Monopoly': 20}
>>> computers = {'iMac': 1000, 'iPad': 800, 'PC': 400}
>>> clothing = {'Jeans': 40, 'T-Shirt': 10}

>>> from collections import ChainMap
>>> inventory = ChainMap(toys, computers, clothing)

>>> inventory.pop('Blocks')
200
>>> print(toys)
{'Monopoly': 20}

>>> clothing['Jeans'] = 0
>>> print(inventory['Jeans'])
0
```

### Example of Use-Case 3

```python
>>> toys = {'Blocks': 30, 'Monopoly': 20}
>>> computers = {'iMac': 1000, 'iPad': 800, 'PC': 400}
>>> clothing = {'Jeans': 40, 'T-Shirt': 10}

>>> from collections import ChainMap
>>> inventory = ChainMap(toys, computers, clothing)

>>> unique_items = list(inventory.keys())
>>> print(unique_items)
['Jeans', 'T-Shirt', 'iMac', 'iPad', 'PC', 'Blocks', 'Monopoly']
```

### References
- [Practical Usage of ChainMap](https://florimond.dev/blog/articles/2018/07/a-practical-usage-of-chainmap-in-python/)
- [ChainMap Documentation from the Python Standard Library](https://docs.python.org/3/library/collections.html#collections.ChainMap)
- [Examples of ChainMap](https://pymotw.com/3/collections/chainmap.html)
- [Purpose of ChainMaps](https://stackoverflow.com/a/23441777/12777044)
