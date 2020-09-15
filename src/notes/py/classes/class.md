---
title: "The Class Statement"
draft: false
weight: 1
katex: true
---

### Motivating Classes
- Classes are used to create new objects
- A **class** defines a set of attributes that are associated with a collection of objects
- This collection of objects is known as **instances**
- In practice, an **object** is synonymous with an instance
- A class is most commonly a collection of:
	- Functions, known as **methods**
	- Variables, known as **class variables**
	- Computed attributes, known as **properties**

### Relating Classes to Dictionaries
- Dictionaries can be thought of as:
	- Some data storage
- Classes can be thought of as:
	- Some data storage
	- Logic applied to that data storage
- This logic is represented using *methods*
- In other words, we may prefer to use a dictionary (or another data structure) if we only need to store some data
- However, we may prefer a class if we need operations performed on that data
- These operations should be closely related to the data and almost form a kind of entity
- To summarize:
	- Just start using a dictionary when we have related data
	- If we realize we need logic for the data, use a class

### Defining a Class
- A class is defined using the `class` statement
- The methods and variables associated with a class are executed during the class definition
- The following is an example:

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
```

- The namespace of this class object is the following:
	- `Account.num_accounts`
	- `Account.__init__`
	- `Account.__del__`
	- `Account.deposit`
	- `Account.withdraw`
	- `Account.inquiry`
- The following are considered as instance methods:
	- `deposit()`
	- `withdraw()`
	- `inquiry()`
- The following are considered as properties:
	- `Account.name`
	- `Account.balance`
- The following is considered as a class variable:
	- `Account.num_accounts`

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Comparing Classes to Dictionaries](https://stackoverflow.com/a/11108184/12777044)
- [Describing Class Attributes](https://stackoverflow.com/a/6475332/12777044)
