---
title: "itertools.dropwhile"
draft: false
weight: 9
katex: true
---

### Describing `itertools.dropwhile(condition, itr)`
- The `dropwhile` function is used to:
	- Cycle through each element of an iterable
	- Includes elements once any element fails the condition
	- Then, every element after that element is returned
- This condition is based on the `condition` parameter
- This iterable is based on the `itr` parameter
- `dropwhile` returns an iterator that drops `itr` elements while our `condition` is satisfied

### Illustrating the `dropwhile` Function

```python
>>> from itertools import dropwhile
>>> cond = lambda x: x>5
>>> nums = [7,6,5,8,4]

>>> itr = dropwhile(cond, nums)
>>> for i in itr: print(i)
5
8
4
```

### References
- [Documentation of the Dropwhile Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.dropwhile)
