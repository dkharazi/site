---
title: "Scoping Rules"
draft: false
weight: 3
katex: true
---

### Describing Scoping Rules
- As stated already, classes define a namespace
- Meaning, they create a scope for methods and class variables
- However, classes do not create a scope for names used inside the bodies of methods
- Specifically, the namespace of an instance includes:
	- Methods
	- Class variables
	- Properties

```python
>>> class Account(object):
...     num_accounts = 0
...     def __init__(self, name, balance):
...         self.name = name
...         self.balance = balance
...         Account.num_accounts += 1
...     def __del__(self):
...         Account.num_accounts -= 1
...     def deposit(self, amt):
...         self.balance = self.balance + amt
...     def withdraw(self, amt):
...         self.balance = self.balance - amt
...     def inquiry(self):
...         return self.balance

>>> a = Account('Todd', 2000)
>>> dir(a)
['__class__', '__del__', '__delattr__', '__dict__', 
 '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
 '__getattribute__', '__gt__', '__hash__', '__init__',
 '__init_subclass__', '__le__', '__lt__', '__module__',
 '__ne__', '__new__', '__reduce__', '__reduce_ex__',
 '__repr__', '__setattr__', '__sizeof__', '__str__',
 '__subclasshook__', '__weakref__', 'balance', 'deposit',
 'inquiry', 'name', 'num_accounts', 'withdraw']
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
