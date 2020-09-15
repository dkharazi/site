---
title: "Class Decorators"
draft: false
weight: 12
katex: true
---

### Describing Decorators
- Decorators are used for performing extra processing after a class has been defined
- For example, a decorator could add a class to a database
- A class decorator is a function that takes a class as input and returns a class as output
- The following is an example:

```python
>>> registry = {}
>>> def register(cls):
...     registry[cls.__clsid__] = cls
...     return cls

>>> @register
... class Foo(object):
...     __clsid__ = '123-456'
...     def bar(self):
...         pass
```

- An alternative way to do this would be:

```python
>>> class Foo(object):
...     __clsid__ = '123-456'
...     def bar(self):
...         pass
register(Foo)
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
