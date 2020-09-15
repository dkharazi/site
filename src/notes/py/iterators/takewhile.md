---
title: "itertools.takewhile"
draft: false
weight: 14
katex: true
---

### Describing `itertools.takewhile(condition, itr)`
- The `takewhile` function is used to:
	- Cycle through each element of an iterable
	- Includes elements until any element fails the condition
	- Then, every element after that element is ignored
- This condition is based on the `condition` parameter
- This iterable is based on the `itr` parameter
- `takewhile` returns an iterator with elements until our `condition` fails
- The `takewhile` function is the inverse of `dropwhile`

### Illustrating the `takewhile` Function

```python
>>> from itertools import takewhile
>>> cond = lambda x: x<5
>>> nums = [1,4,6,4,1]

>>> itr = takewhile(cond, nums)
>>> for i in itr: print(i)
1
4
```

### References
- [Documentation of the Takewhile Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.takewhile)
