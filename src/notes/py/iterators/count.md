---
title: "itertools.count"
draft: false
weight: 3
katex: true
---

### Describing `itertools.count(start, step)`
- The `count` function is used to output consecutive numbers
- It returns an iterator of evenly spaced numbers
- The first evenly spaced number is based on `start`
- The space between each number is based on `step`
- The `count` function is considered an *infinite iterator*
- This is because the iterator generates numbers without any finite end boundary (values go off to infinity)

### Illustrating the `count` Function

```python
>>> from itertools import count
>>> nums = count(10, 2)

>>> for i in range(5):
...     print(next(nums))
10
12
14
16
18
```

### References
- [Documentation of the Count Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.count)
