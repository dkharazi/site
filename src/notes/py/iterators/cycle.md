---
title: "itertools.cycle"
draft: false
weight: 4
katex: true
---

### Describing `itertools.cycle(itr)`
- The `cycle` function is used to cycle through each element in an iterable
- The iterable comes from the parameter `itr`
- It returns an iterator of individual elements
- The `cycle` function is considered an *infinite iterator*
- This is because the iterator keeps cycling through the elements of an iterable in infinite number of times

### Illustrating the `cycle` Function

```python
>>> from itertools import cycle
>>> letters = 'abc'
>>> l = cycle(letters)
>>> for i in range(5):
...     print(next(l))
'a'
'b'
'c'
'a'
'b'

>>> fruits = ['apple', 'banana', 'orange']
>>> f = cycle(fruits)
>>> for i in range(5):
...     print(next(f))
'apple'
'banana'
'orange'
'apple'
'banana'
```

### References
- [Documentation of the Cycle Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.cycle)
