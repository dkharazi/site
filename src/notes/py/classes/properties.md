---
title: "Properties"
draft: false
weight: 8
katex: true
---

### Describing Properties in Python
- A property is a special attribute that computes its value when accessed
- The following is an example of a property:

```python
>>> class Circle(object):
...     def __init__(self, radius):
...         self.radius = radius
...     @property
...     def area(self):
...         return math.pi*self.radius**2
...     @property
...     def perimeter(self):
...         return 2*math.pi*self.radius

>>> c = Circle(4)
>>> c.radius
4
>>> c.area
50.26
>>> c.radius = 2
>>> c.area = 2
AttributeError: cant set attribute
```

- In this example, `c.radius` is an instance variable
- Then, `c.area` and `c.perimeter` are properties
- This form of property is useful when creating *getters*

### Setting and Deleting Attributes with Properties
- Properties can intercept operations to set and delete an attribute
- This is done by attaching additional setter and deleter methods to a property
- The following contains these methods:

```python
>>> class Foo(object):
...     def __init__(self, name):
...         self.__name = name
...     @property
...     def name(self):  # getter
...         return self.__name
...     @name.setter
...     def name(self, value):  # setter
...         if not isinstance(value, str):
...             raise TypeError('nope')
...         self.__name = value
...     @name.deleter
...     def name(self):  # deleter
...         raise TypeError('cannot delete')

>>> f = Foo('Todd')
>>> n = f.name
>>> f.name = 'Monty'
>>> f.name = 45
TypeError: nope
>>> del f.name
TypeError: cannot delete
```

- By doing this, we can implement logic for deleting and setting
- We can also hide attributes with double underscore, while providing access to them via properties

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
