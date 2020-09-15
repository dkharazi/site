---
title: "Creation and Deletion"
draft: false
weight: 2
katex: true
---

### Describing Object Creation
- The class method `__new__()` has the following properties:
	- Invoked to create an instance
	- Creates the `self` variable
- The class method `__init__()` has the following properties:
	- Invoked to initialize the attributes of an object
	- Invoked immediately after an object has been created
	- Initializes the instance variables
- Essentially, `__init__()` is immediately called after `__new__()`
- The following classes use these special methods:

```python
>>> class Employee(object):
...     def __init__(self, name, salary):
...         self.name = name
...         self.salary = salary
...
...     def __new__(cls, name, salary):
...         if 0 < salary < 10000:
...             instance = object.__new__(cls)
...             return instance
...         else:
...             return None

>>> class Employee2(object):
...     def __new__(cls, name, salary):
...         if 0 < salary < 10000:
...             instance = object.__new__(cls)
...             return instance
...         else:
...             return None

>>> Employee('Joe', 5000).name
'Joe'
>>> Employee2('Joe', 5000).name
AttributeError: 'Employee' object has no attribute 'name'
```

### Describing Object Deletion
- The class method `__del__()` has the following properties
	- Invoked for an object during program termination
	- Invoked when an object is garbage collected
	- Only defined in situations where resource management is critical
- Essentially, `__del__()` is automatically called during deletion
- The following are examples of situations when we want to use `__del__()`:
	- Releasing a lock
	- Shutting down a connection
- As stated previously, this is because these situations handle crtical resource management issues

### Summarizing Special Methods

| Method     | Description               |
| ---------- | ------------------------- |
| `__new__`  | Create a new instance     |
| `__init__` | Initialize a new instance |
| `__del__`  | Delete a new instance     |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Example of __new__ and __init__ Special Methods](https://www.code-learner.com/how-to-use-python-__new__-method-example/)
- [Use-Cases for __del__ Special Method](https://stackoverflow.com/a/1481512/12777044)
