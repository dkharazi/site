---
title: "itertools.chain"
draft: false
weight: 7
katex: true
---

### Describing `itertools.chain(*iterables)`
- The `chain` function is used to cycle through each element of any number of iterables
- Each iterable is based on the `*iterables` parameters
- `chain` returns an iterator of cycled elements
- The `*iterables` parameter accepts any number of iterables

### Illustrating the `accumulate` Function

```python
>>> from itertools import chain
>>> nums = [1, 2, 3]
>>> letters = 'abc'

>>> itr = chain(nums, letters)
>>> for i in itr: print(i)
1
2
3
'a'
'b'
'c'
```

### References
- [Documentation of the Chain Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.chain)
