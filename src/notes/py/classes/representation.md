---
title: "Object Representation"
draft: false
weight: 11
katex: true
---

### Describing Object Representation
- Internally, instances are implemented using a dictionary
- This dictionary is accessible using the `__dict__` attribute
- This dictionary contains the data unique to each instance

```python
>>> a = Account('Todd', 10)
>>> a.__dict__
{'balance': 10, 'name': 'Todd'}
```

- Modifications to an instance are always reflected in `__dict__`
- Instances are also linked back to their class using `__class__`
- Classes are linked back to their base class using `__bases__`

### Details about Special Methods
- Whenever an attribute is set using `obj.name=value`, the special method `obj.__setattr__('name', value)` is invoked
- The same goes for the following:
	- `obj.name=val` invokes `obj.__setattr__('name', val)`
	- `del obj.name` invokes `obj.__delattr__('name')`
	- `obj.name` invokes `obj.__getattribute__('name')`

### Restriction of Setting Instance Attributes
- A class can restrict the set of legal instance attribute names by defining `__slots__`
- When `__slots__` is defined, instance can't assign new attributes unless the attribute is specified in `__slots__`
- This restriction prevents someone from adding new attributes to instances
- The use of `__slots__` *can* hurt the performance of classes using inheritance

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
