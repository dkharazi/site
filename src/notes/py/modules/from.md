---
title: "The from Statement"
draft: false
weight: 2
katex: true
---

### Importing Select Symbols from a Module
- The `from` statement is used to load specific defintions within a module into the current namespace
- In other words, `from` is very similar to `import`
- However, `from` only refers to objects defined in a module
- Then, it places these references into the current namespace

```python
>>> from spam import foo
>>> foo()
'foo'
>>> spam.foo()
NameError: spam
```

- We can access multiple objects using:

```python
>>> from spam import (foo,
...                   bar,
...                   Spam)
```

- We can load all definitions into the module namespace:

```python
>>> from spam import *
```

- Modules can control which names can be imported using `__all__`

```python
>>> # module: spam.py
>>> __all__ = ['bar', 'Spam']  # names exported using
...                            # from spam import *
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
