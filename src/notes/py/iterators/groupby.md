---
title: "itertools.groupby"
draft: false
weight: 11
katex: true
---

### Describing `itertools.groupby(iterable)`
- The `groupby` function is used to:
	- Cycle through each element of an iterable
	- Grouping similar and consecutive elements into keys
- This iterable is based on the `itr` parameter
- `groupby` returns an iterator that is made up of tuples
- These tuples are represented as a `key` and `group` pair
- Each tuple belongs to a distinct `group` 
- The `key` refers to an individual element
- The `group` refers to the grouping of similar, consecutive elements associated with the `key`

### Illustrating the `groupby` Function

```python
>>> from itertools import groupby
>>> letters = 'mississippi'

>>> [i for i in groupby(letters)]
[('m', <itertools._grouper at 0x109b77978>),
 ('i', <itertools._grouper at 0x109b77f60>),
 ('s', <itertools._grouper at 0x109b77e10>),
 ('i', <itertools._grouper at 0x109b77908>),
 ('s', <itertools._grouper at 0x109b77710>),
 ('i', <itertools._grouper at 0x109b77198>),
 ('p', <itertools._grouper at 0x109b77a90>),
 ('i', <itertools._grouper at 0x109b77ba8>)]

>>> [k for k, g in groupby(letters)]
['m', 'i', 's', 'i', 's', 'i', 'p', 'i']

>>> [g for k, g in groupby(letters)]
[<itertools._grouper at 0x109cadc88>,
 <itertools._grouper at 0x109cad630>,
 <itertools._grouper at 0x109cad9e8>,
 <itertools._grouper at 0x109cad4a8>,
 <itertools._grouper at 0x109cad4e0>,
 <itertools._grouper at 0x109cad6a0>,
 <itertools._grouper at 0x109cad7b8>,
 <itertools._grouper at 0x109cada20>]

>>> [list(g) for k, g in groupby(letters)]
[['m'], ['i'], 
 ['s', 's'], ['i'], 
 ['s', 's'], ['i'],
 ['p', 'p'], ['i']]
```

### References
- [Documentation of the Groupby Function from Itertools](https://docs.python.org/3/library/itertools.html#itertools.groupby)
