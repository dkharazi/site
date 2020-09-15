---
title: "itertools.filterfalse"
draft: false
weight: 10
katex: true
---

### Describing `itertools.filterfalse(condition, itr)`
- The `filterfalse` function is used to:
        - Cycle through each element of an iterable
        - Includes elements that fail the condition
- This condition is based on the `condition` parameter
- This iterable is based on the `itr` parameter
- `filterfalse` returns an iterator that filters `itr` elements that fail the `condition`

### Illustrating the `filterfalse` Function

```python
>>> from itertools import filterfalse
>>> cond = lambda x: x>5
>>> nums = [7,6,5,8,4]

>>> itr = filterfalse(cond, nums)
>>> for i in itr: print(i)
5
4
```

### References
- [Documentation of the Filterfalse Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.filterfalse)
