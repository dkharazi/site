---
title: "itertools.starmap"
draft: false
weight: 13
katex: true
---

### Describing `itertools.starmap(function, itr)`
- The `starmap` function is used to:
	- Cycle through each element of an iterable
	- Apply the `function` to each element
	- Each element is a tuple of the function's parameters
- This iterable is based on the `itr` parameter
- `starmap` returns output that is mapped parameters to the function

### Illustrating the `starmap` Function

```python
>>> from itertools import starmap
>>> params = [(2,5), (3,2), (10,3)]

>>> itr = starmap(pow, params)
>>> for i in itr: print(i)
32
9
1000
```

### References
- [Documentation of the Starmap Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.starmap)
