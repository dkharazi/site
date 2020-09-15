---
title: "Methods"
draft: false
weight: 7
katex: true
---

### Describing Static Methods
- A static method is an ordinary function that just happens to live in the namespace defined by a class
- It does not operate on any kind of instance
- Static methods are defined using a `@staticmethod` decorator
- Static methods can be used to define different ways of creating new instances
- The following is an example of this use-case:

```python
>>> class Date(object):
...     def __init__(self, year, month, day):
...         self.year = year
...         self.month = month
...         self.day = day
...     @staticmethod
...     def now():
...         t = time.localtime()
...         return Date(t.tm_year, t.tm_mon, t.tm_day)
...     @staticmethod
...     def tomorrow():
...         t = time.localtime(time.time()+86400)
...         return Date(t.tm_year, t.tm_mon, t.tm_day)

>>> a = Date(1967, 4, 9)
>>> b = Date.now()
>>> c = Date.tomorrow()
```

### Describing Class Methods
- A class method is a method that operates on the class itself as an object
- Class methods are defined using a `@classmethod` decorator
- Class methods are different than instance methods in that the class is passed as the first argument 

### Defining Types of Methods
- `Instance method:` A method that operates on an instance belonging to a given class
- `Class method:` A method that operates on the class itself
- `Static method:` A method that just happens to be packaged inside a class

```python
>>> class Foo(object):
...     def instance_method(self, arg):
...         print('instance', arg)
...     @classmethod
...     def class_method(cls, arg):
...         print('class', arg)
...     def static_method(arg):
...         print('static', arg)

>>> Foo().instance_method('!')
'instance !'
>>> Foo().class_method('!')
'class !'
>>> Foo.static_method('!')
'static !'
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Examples of Static and Class Methods](https://stackoverflow.com/a/1669524/12777044)
