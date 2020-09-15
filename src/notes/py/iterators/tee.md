---
title: "itertools.tee"
draft: false
weight: 15
katex: true
---

### Describing `itertools.tee(itr, n=2)`
- The `takewhile` function is used to repeat an iterable `itr` an `n` amount of times
- This iterable is based on the `itr` parameter
- This number of times is based on the `n` parameter
- The `n` parameter is optional and defaults to $2$
- `tee` returns an iterator of `n` iterators each representing our iterable `itr`

### Illustrating the `tee` Function

```python
>>> from itertools import tee
>>> nums = [1,2,3]

>>> for elem in tee(nums,3): print(elem)
<itertools._tee object at 0x10b157148>
<itertools._tee object at 0x10b117988>
<itertools._tee object at 0x10b117c48>

>>> for elem in tee(nums,3):
...     for i in elem:
...         print(i)
1
2
3
1
2
3
1
2
3
```

### References
- [Documentation of the Tee Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.tee)
