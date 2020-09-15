---
title: "itertools.compress"
draft: false
weight: 8
katex: true
---

### Describing `itertools.compress(iterable, flags)`
- The `compress` function is used to cycle through each element of an iterable, while filtering only certain values
- The selected elements within the iterator are based on the `flags` parameter
- `compress` returns an iterator of selected `iterable` elements
- The iterable comes from the `iterable` parameter
- The selected elements come from the `flags` parameter

### Illustrating the `compress` Function

```python
>>> from itertools import compress
>>> letters = 'abcde'
>>> flags = [1,0,0,1,0]

>>> itr = compress(letters, flags)
>>> for i in itr: print(i)
a
d
```

### References
- [Documentation of the Compress Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.compress)
