---
title: "Callable Interface"
draft: false
weight: 10
katex: true
---

### Describing Callables
- Generally, a callable is something that can be called
- The method name `__call__()` is called when the instance is called as a function
- The following class uses the special method:

```python
>>> class Foo:
...     def __call__(self):
...         print('Called') 

>>> f = Foo() 
>>> print(f)
<__main__.Foo at 0x1062bab00>
>>> f()
'Called'
```

### Practical Example of Function Emulation

```python
>>> class DistanceFrom(object):
...     def __init__(self,origin):
...         self.origin = origin
...     def __call__(self, x):
...         return abs(x - self.origin)

>>> nums = [1, 37, 42, 101, 13, 9, -20]
>>> nums.sort(key=DistanceFrom(10))
>>> print(nums)
[9, 13, 1, 37, -20, 42, 101]
```

### Summarizing Special Methods

| Method     | Description                    |
| ---------- | ------------------------------ |
| `__call__` | Emulates a function            |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [What is a Callable?](https://stackoverflow.com/a/111255/12777044)
