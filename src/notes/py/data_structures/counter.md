---
title: "Counter"
draft: false
weight: 13
katex: true
---

### Defining a Counter
- A Counter is a dict subclass for counting hashable objects
- Specifically, it is a dictionary where:
	- The keys represent the elements
	- The values represent counts
- The counts are allowed to be any integer

### Creating a Counter

```python
>>> from collections import Counter
>>> c = Counter([1,2,3,1,3,1])
>>> print(c)
Counter({1: 3, 3: 2, 2: 1})
```

### Accessing a Counter

```python
>>> from collections import Counter
>>> c = Counter([1,2,3,1,3,1])
>>> print(c[1])
3
```

### Accessing the 3 Most Common

```python
>>> from collections import Counter
>>> c = Counter('abracadabra')
>>> print(c.most_common(3))
[('a', 5), ('b', 2), ('r', 2)]
```

### Accessing the 2 Least Common

```python
>>> from collections import Counter
>>> c = Counter('abracadabra')
print(c.most_common()[:-3:-1])
[('d', 1), ('c', 1)]
```

### References
- [Counter Documentation from the Python Standard Library](https://docs.python.org/3/library/collections.html#collections.Counter)
- [Example of using Counter](https://stackoverflow.com/a/20511316/12777044)
