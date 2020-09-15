---
title: "itertools.product"
draft: false
weight: 17
katex: true
---

### `itertools.product(*itr, repeat=1)`
- The `product` function is used to:
	- Cycle through each element of each iterable
	- Perform a cartesian product of input iterables
- These iterables are based on the `*itr` parameter
- The number of repetitions is based on the `repeat` parameter
- The `repeat` parameter is optional and defaults to $1$
- `repeat` returns an iterator of elements that represent a cartesian product of the input iterables `itr`

### Illustrating the `product` Function

```python
>>> from itertools import product

>>> itr = product('ABC', 'xy')
>>> for i in itr: print(i)
('A', 'x')
('A', 'y')
('B', 'x')
('B', 'y')
('C', 'x')
('C', 'y')

>>> itr = product(range(2), repeat=3)
>>> for i in itr: print(i)
(0, 0, 0)
(0, 0, 1)
(0, 1, 0)
(0, 1, 1)
(1, 0, 0)
(1, 0, 1)
(1, 1, 0)
(1, 1, 1)

>>> itr = product([1,2,3], repeat=2)
>>> for i in itr: print(i)
(1, 1)
(1, 2)
(1, 3)
(2, 1)
(2, 2)
(2, 3)
(3, 1)
(3, 2)
(3, 3)
```

### References
- [Documentation of the Product Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.product)
