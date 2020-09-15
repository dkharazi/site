---
title: "itertools.combinations"
draft: false
weight: 19
katex: true
---

### `itertools.combinations(itr, r)`
- The `combinations` function is used to:
	- Cycle through each element of an iterable
	- Return `r` length subsequences of elements
- This iterable is based on the `itr` parameter
- The length of subsequences is based on the `r` parameter
- `combinations` returns an iterator of `r` length subsequences of elements from the iterable `itr`

### Illustrating the `combinations` Function

```python
>>> from itertools import combinations

>>> itr = combinations('ABC', 2)
>>> for i in itr: print(i)
('A', 'B')
('A', 'C')
('B', 'C')

>>> itr = combinations(range(4))
>>> for i in itr: print(i)
(0, 1, 2)
(0, 1, 3)
(0, 2, 3)
(1, 2, 3)

>>> from itertools import combinations_with_replacement
>>> itr = combinations_with_replacement('ABC', 2)
>>> for i in itr: print(i)
('A', 'A')
('A', 'B')
('A', 'C')
('B', 'B')
('B', 'C')
('C', 'C')
```

### References
- [Documentation of the Combinations Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.combinations)
- [Documentation of Combinations with Replacement](https://docs.python.org/3/library/itertools.html#itertools.combinations_with_replacement)
