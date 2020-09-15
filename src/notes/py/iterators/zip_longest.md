---
title: "itertools.zip_longest"
draft: false
weight: 16
katex: true
---

### `itertools.zip_longest(*itr, fillvalue=None)`
- The `zip_longest` function is used to:
	- Cycle through each element of each iterable
	- Maps elements from each of the iterables together
	- If the iterables are uneven length, missing values are filled with `fillvalue`
- This iterables are based on the `*itr` parameter
- This filled value is based on the `fillvalue` parameter
- The `fillvalue` parameter is optional and defaults to None
- `zip_longest` returns an iterator of elements zipped to each other

### Illustrating the `zip_longest` Function

```python
>>> from itertools import zip_longest
>>> nums = [1,2,3]
>>> letters = 'yz'
>>> fruit = 'apple'

>>> itr = zip_longest(nums, letters)
>>> for i in itr: print(i)
(1, 'y')
(2, 'z')
(3, None)

>>> itr = zip_longest(letters, fruit, fillvalue='-')
>>> for i in itr: print(i)
('y', 'a')
('z', 'p')
('-', 'p')
('-', 'l')
('-', 'e')
```

### References
- [Documentation of the Zip_longest Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.zip_longest)
