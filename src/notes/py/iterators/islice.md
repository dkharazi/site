---
title: "itertools.islice"
draft: false
weight: 12
katex: true
---

### `itertools.islice(itr,start=None,stop,step=1)`
- The `islice` function is used to:
	- Cycle through each element of an iterable
	- Select a slice of elements from the iterable
	- This slice follows a step-pattern determined by `step`
- This iterable is based on the `itr` parameter
- This slice is between the `start` and `stop` indices
- The `start` parameter is optional
	- It defaults to the first element of the iterable
- The `step` parameter is optional as well
	- It defaults to $1$
- `islice` returns an iterator of every `step`$^{th}$ element within the slice made up by `start` and `stop`

### Illustrating the `islice` Function

```python
>>> from itertools import islice
>>> letters = 'abcde'

>>> slice = islice(letters, 2)
>>> for i in slice: print(i)
'a'
'b'

>>> slice = islice(letters, 2, 4)
>>> for i in slice: print(i)
'c'
'd'

>>> slice = islice(letters, 2, None)
>>> for i in slice: print(i)
'c'
'd'
'e'

>>> slice = islice(letters, 0, None, 2)
>>> for i in slice: print(i)
'a'
'c'
'e'
```

### References
- [Documentation of the Islice Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.islice)
