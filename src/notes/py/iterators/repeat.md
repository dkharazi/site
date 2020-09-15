---
title: "itertools.repeat"
draft: false
weight: 5
katex: true
---

### Describing `itertools.repeat(elem, n=None)`
- The `repeat` function repeats an element a given number of times
- It returns an iterator of repeated elements
- The element is repeated an `n` number of times
- The `repeat` function is considered an *infinite iterator*
- This is because the iterator keeps repeating the element an infinite number of times by default
	- If `n` is specified, then it will become a *finite iterator*

### Illustrating the `repeat` Function

```python
>>> from itertools import repeat
>>> nums = repeat(2)
>>> for i in range(5): print(next(nums))
2
2
2
2
2

>>> letters = repeat('a', 3)
>>> for i in range(5): print(next(letters))
'a'
'a'
'a'
StopIteration
```

### References
- [Documentation of the Repeat Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.repeat)
