---
title: "Class Instances"
draft: false
weight: 2
katex: true
---

### Describing Class Instances
- Instances of a class are created by calling a class object as a function
- The following is an instance of a class:

```python
>>> class Foo(object):
...    def __init__(self, bar):
...        self.bar = bar
>>> f = Foo()  # f is new instance
```

- In other words, calling `Foo()` creates a new instance
- The instance is initially passed to the `__init__()` method
- The arguments to `__init__()` consist of:
	- The newly created instance `self`
	- Other arguments given to the instance (i.e. `bar`)

### Details about Initializing Instances
- Inside `__init__()`, attributes are saved in the instance
- This is achieved by assigning attributes to `self`
- For example, `self.bar = bar` is saving an attribute `bar` in the instance `f`
- These attributes are accessed using the `.` operator
- Specifically, the dot operator is used for *attribute binding*
- When accessing an attribute:
	1. The instance is checked first
	2. Then, the instance's class is checked
- This is the underlying mechanism by which a class shares its attributes with all of its instances

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
