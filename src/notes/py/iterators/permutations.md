---
title: "itertools.permutations"
draft: false
weight: 18
katex: true
---

### `itertools.permutations(itr, r=None)`
- The `permutations` function is used to:
	- Cycle through each element of an iterable
	- Return successive `r` length permutations of elements
- This iterable is based on the `itr` parameter
- The number of permutations is based on the `r` parameter
- The `r` parameter is optional and defaults to the length of the iterable
- `permutations` returns an iterator of successive `r` length permutations of elements in the iterable `itr`

### Illustrating the `permutations` Function

```python
>>> from itertools import permutations

>>> itr = permutations('ABC', 2)
>>> for i in itr: print(i)
('A', 'B')
('A', 'C')
('B', 'A')
('B', 'C')
('C', 'A')
('C', 'B')

>>> itr = permutations(range(3))
>>> for i in itr: print(i)
(0, 1, 2)
(0, 2, 1)
(1, 0, 2)
(1, 2, 0)
(2, 0, 1)
(2, 1, 0)
```

### References
- [Documentation of the Permutations Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.permutations)
