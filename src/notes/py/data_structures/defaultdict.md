---
title: "Defaultdict"
draft: false
weight: 10
katex: true
---

### Defining a Defaultdict
- A `defaultdict` almost behaves the same as a `dictionary`
- If a user attempts to access a missing key:
	- A `dictionary` will throw a `KeyError`
	- A `defaultdict` will create an item using a default value
- This is one of the only differences between the two

### Differentiating between `dict` and `defaultdict`

```python
>>> d = {}
>>> d['hello']
KeyError: 'hello'

>>> from collections import defaultdict
>>> dd = defaultdict(int)
>>> dd['hello']
0
>>> print(dd)
defaultdict(<class 'int'>, {'hello': 0})
>>> print(dd['hello'])
0
```

### Initializing a Defaultdict

```python
>>> from collections import defaultdict
>>> dd = defaultdict(int)
>>> print(dd)
defaultdict(<class 'int'>, {})
```

### Adding to a Defaultdict

```python
>>> from collections import defaultdict
>>> dd = defaultdict(list)
>>> dd['hello']
[]
>>> print(dd)
defaultdict(<class 'list'>, {'hello': []})
```

### References
- [Defaultdict Documentation from the Python Standard Library](https://docs.python.org/3/library/collections.html#defaultdict-objects)
- [Examples of defaultdict](https://pymotw.com/3/collections/defaultdict.html)
- [How the Defaultdict Works?](https://stackoverflow.com/a/5900634/12777044)
