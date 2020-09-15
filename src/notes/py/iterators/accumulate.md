---
title: "itertools.accumulate"
draft: false
weight: 6
katex: true
---

### Describing `itertools.accumulate(iterable, agg)`
- `accumulate` performs a rolling aggregation of an iterable
- This iterable is based on the `iterable` parameter
- This aggregation is determined by the `agg` parameter
- `accumulate` returns an iterator of accumulated elements
- The `agg` accepts functions from the operator module
- Some examples of acceptable operators are:
	- operator. mul
	- operator.truediv
	- operator.add
	- min
	- max

### Illustrating the `accumulate` Function

```python
>>> from itertools import accumulate
>>> import operator
>>> nums = [4, 1, 3, 2, 5]

>>> itr = accumulate(nums, operator.mul)
>>> for i in itr: print(i)
4
4
12
24
120

>>> itr = accumulate(nums, min)
>>> for i in itr: print(i)
4
1
1
1
1
```

### References
- [Documentation of the Accumulate Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.repeat)
- [Potential Operators for Accumulation](https://docs.python.org/3/library/operator.html#module-operator)
