---
title: "Special Attributes"
draft: false
weight: 12
katex: true
---

### Describing User-Defined Functions
- User-defined functions have special attributes
- Classes, methods, and modules have their own set of attributes
- The following class uses the special attributes:

```python
>>> def greeting(name): 
...     """This function produces a simple greeting.
...     """
...     return 'Hello ' + name + '!'

>>> greeting('Todd')
'Hello Todd!'
>>> greeting.__doc__
'This function produces a simple greeting.\n'
>>> greeting.__name__
'greeting'
>>> 
```

### Summarizing Special Methods
- A user-defined function has the following special methods:

| Attribute      | Description                                    |
| -------------- | ---------------------------------------------- |
| `__doc__`      | Documentation string                           |
| `__name__`     | Function name                                  |
| `__dict__`     | Dictionary containing function attributes      |
| `__code__`     | Byte-compiled code                             |
| `__defaults__` | Tuple containing the default arguments         |
| `__globals__`  | Dictionary defining the global namespace       |
| `__closure__`  | Tuple containing data related to nested scopes |

- A user-defined method has the following special methods:

| Attribute   | Description                             |
| ----------- | --------------------------------------- |
| `__doc__`   | Documentation string                    |
| `__name__`  | Method name                             |
| `__class__` | Class in which this method was defined  |
| `__func__`  | Function object implementing the method |
| `__self__`  | Instance associated with the method     |

- A user-defined class has the following special methods:

| Attribute              | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `__doc__`              | Documentation string                              |
| `__name__`             | Class name                                        |
| `__dict__`             | Dictionary containing class methods and variables |
| `__bases__`            | Tuple of base classes                             |
| `__module__`           | Module name in which the class is defined         |
| `__abstractmethods__`  | Set of any abstract methods                       |

- A user-defined module has the following special methods:

| Attribute   | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `__doc__`   | Module documentation string                                    |
| `__name__`  | Name of module                                                 |
| `__dict__`  | Dictionary associated with the module                          |
| `__file__`  | File from which the module was loaded                          |
| `__path__`  | Name of package (only defined when module refers to a package) |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
