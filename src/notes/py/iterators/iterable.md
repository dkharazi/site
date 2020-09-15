---
title: "Iterables and Iterators"
draft: false
weight: 1
katex: true
---

### Describing Iterables and Iterators
- An iterable is an object with an `__iter__` method
- An iterator is an object with an `__next__` method
- The following are examples of iterables:
	- Lists
	- Tuples
	- Dictionaries
	- Sets
	- Strings
- All of these iterables have an `__iter__` method
- Calling `__iter__` on an iterable will give us an iterator

```python
>>> fruit = ['apple', 'banana', 'orange']
>>> fruit_iter = iter(fruit)

>>> type(fruit)  # iterable
<class 'list'>
>>> type(fruit_iter)  # iterator
<class 'list_iterator'>
```

### Describing Looping over Iterables
- Recall some examples of iterables: strings, sets, etc.
- Notice, we can loop over each of these iterables
- Specifically, we can use a `for` loop to iterate through an iterable
- This is because the `for` loop implicitly does the following:
	- Creates an iterator object
	- Then executes the `__next__` method for each iteration

```python
>>> # Explicit instructions
>>> for i in iterable:
...     ...do something with i...

>>> # Implicitly does this
>>> iterator = iter(iterable)
>>> while True:
...     try:
...         i = next(iterator)
...         ...do something with i...
...     except StopIteration:
...         break
```

- The following is an example of this concept:

```python
>>> fruit = 'lime'

>>> # Explicit instructions
>>> for i in fruit:
...     print(i)
l
i
m
e

>>> # Implicitly does this
>>> itr = iter(fruit) 
>>> while True:
...     try:
...         i = next(itr)
...         print(i)
...     except StopIteration:
...         break
l
i
m
e

```

### Describing Looping over Iterators
- We can loop over iterators as well
- To summarize, we can loop over the following:
	- An iterable
	- An iterator
- As stated previously, looping over an iterable involves converting an iterable to an iterator
- We essentially skip over this step by looping over an iterator
- Compared to looping over iterables, looping over an iterator provides the following benefits:
	- Skips the step of converting any iterable to an iterator
	- Decreased memory usage
		- We don't need to load an entire iterable into memory
		- An iterator only stores a definition that is required for iterating element-by-element over some iterable

### Defining the Steps of Iteration

- Let's say we have an iterable called **mylist**
- This iterable is a list
- Suppose we want to loop over our list like:

```python
for x in mylist:
    ...loop body...
```

- Then, Python performs the following steps during for loops:
	1. Gets an iterable `mylist`
	2. Call `iter(mylist)` 
		- This returns an iterator object
		- An iterator object should have the `__next__()` method
	3. Use the iterator to loop over items
		- This involves calling the `__next__()` method
		- This output is assigned to `x`
		- Then, the loop body is executed
		- The loop is exited for any `StopIteration`
- Python always performs the above steps for any looping
- Meaning, Python performs these steps for while and for loops

### Defining Lazy Evaluation using Iterators
- Lazy evaluation refers to an object that:
	- Evaluates each element individually
	- Doesn't evaluate all elements at once
- Python manifests lazy evaluation by implementing iterators
- For example, the list $[1,2,3]$ is an iterable
	- The list stores each integer $1,2,$ and $3$ in memory
	- `iter([1,2,3])` will create an iterator that is lazy
	- Meaning, it computes each integer in memory individually
- Lazy evaluation is useful when:
	- Computing on a very large dataset
	- Looping over large data to compute each element
- Specifically, it allows us to start using the data immediately, without reading the whole dataset into memory
- As stated previously, iterators use lazy evaluation
- On the other hand, iterables don't use lazy evaluation
	- This is because iterables store all of their data in memory

### References
- [Basics of Iterators and Iterables](https://www.w3schools.com/python/python_iterators.asp)
- [Python Cookbook](https://d.cxcore.net/Python/Python_Cookbook_3rd_Edition.pdf)
- [Brief Description about Iteration](https://stackoverflow.com/questions/9884132/what-exactly-are-iterator-iterable-and-iteration)
