---
title: "Composition"
draft: false
weight: 5
katex: true
---

### Describing Composition
- Composition refers to declaring a class within a class
- Composition relates to the composite design pattern
- Specifically, a class known as a **composite** contains an object of another class known as a **component**
- Composition is considered as lossely coupled
- Meaning, changes to the component class rarely affect the composite class
- Composition is typically more flexible than inheritance

### Comparing Composition, Inheritance, and Aggregation
- In inheritance, class A **is a** class B
- In composition, class A **owns** class B
- In aggregation, class A **uses** class B
- In composition, class B has no meaning or purpose in the system without class A
- In aggregation, class B exists independently from class A
- For example, suppose we have a `Company`, `People`, and `Account` class
	- `Company` is an aggregation of `People`
	- `Company` is a composition of `Accounts`
	- When a `Company` ceases to do business, its `Accounts` cease to exist
	- However, its `People` continue to exist in this case

### References
- [Defining Inheritance and Aggregation](https://softwareengineering.stackexchange.com/a/61527)
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Comparing Composition and Inheritance in Python](https://realpython.com/inheritance-composition-python/)
