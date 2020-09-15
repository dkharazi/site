---
title: "Generators"
draft: false
weight: 2
katex: true
---

### Using Generators for Lazy Evalutation
- A generator is an iterator
- A generator is a function that produces a sequence of results instead of a single value
- Generators are defined by the following properties:
	- They use lazy evaluation
	- They can suspend and resume function execution
- In other words, a generator can do the following:
	- Evaluates each element one-by-one
	- Pauses execution of a function
- Generators are implemented using the `yield` keyword
- The following is an example of a generator:

```python
>>> def test():
...     yield 1
...     yield 2

>>> gen = test()
>>> next(gen)
1
>>> next(gen)
2
>>> next(gen)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

### Describing the Benefits of Generators
- Generators can be very memory-efficient
	- They typically represent a sequence of data
	- However, they only store individual elements in memory
- Since generators use lazy evaluation, their benefits are:
	- Calculating large sets of results efficiently
	- Replacing callback with iterations
- When should we use generators?
	- When we can't store large data in memory
	- When we want to pause execution of a function

### Motivating the `yield` Keyword
- Certain dictionary definitions apply to the use of `yield`
- **Yield:** To produce or provide (in agriculture)
	- In Python, it provides the next data in the series
- **Yield:** To give way or relinquish (in politics)
	- It reliquishes CPU execution until the iterator advances

### Improving Readibility using Generators

```python
>>> def square_list(n):
...     l = []              # Replace
...     for i in range(n):
...         y = i * i
...         l.append(y)     # these
...     return l            # lines...

>>> def square_gen(n):
...     for i in range(n):
...         y = i * i
...         yield y         # ...with this one
```

### Decreasing Memory Usage using Generators

```python
>>> l, g = square_list(4), square_gen(4)

>>> print(l)  # all 4 ints loaded into memory
[0, 1, 4, 9]
>>> print(g)  # nothing loaded into memory yet
<generator object square_gen>
```

### Demonstrating Similar Behavior

```python
>>> for i in l:  # all 4 ints loaded into memory
...     print(i)
0
1
4
9

>>> for i in g:  # only 1 int ever loaded in memory
...     print(i)
0
1
4
9
```

### Summarizing Benefits of Generators
- `yield` is **single-pass**
	- Only able to iterate through a generator once
	- Allows a sequence to be arbitrarily long
- `yield` is **lazy**
	- Able to compute elements individually
	- A generator function refers to a function with `yield`
	- They return an iterator and remember where they left off
	- Allows a function to be paused and resumed
- `yield` is **versatile**
	- Generators don't store data altogether
	- Ensures entier data set isn't stored in memory all at once

### Using Generators versus Iterators
- As stated previously, a generator is an iterator
- A generator simplifies the process of creating a basic iterator
- A generator is created by calling a function with `yield`
- An iterator is created by instantiating a class with `__iter__`
- However, there are times when we want to create a custom iterator, rather than a generator
- Specifically, we may want an iterator class to expose other methods besides `__next__`
- Illustratively, this generator and iterator are equivalent:

```python
>>> # Generator
>>> def squares(start, stop):
...     for i in range(start, stop):
...         yield i * i
>>> generator = squares(a, b)

>>> # Iterator
>>> class Squares(object):
...     def __init__(self, start, stop):
...         self.start = start
...         self.stop = stop
...     def __iter__(self):
...         return self
...     def __next__(self):
...         if self.start >= self.stop:
...             raise StopIteration
...         current = self.start * self.start
...         self.start += 1
...         return current
>>> iterator = Squares(a, b)
```

### References
- [Benefits of using Generators](https://stackoverflow.com/a/102632/12777044)
- [More Benefits of using Generators](https://stackoverflow.com/a/36220775/12777044)
- [Defining Lazy Evaluation](https://stackoverflow.com/a/20535379/12777044)
- [Real World Use-Case of Generators](https://stackoverflow.com/a/23530101/12777044)
- [Python Cookbook](https://d.cxcore.net/Python/Python_Cookbook_3rd_Edition.pdf)
- [Use-Cases for Yielding](https://stackoverflow.com/a/36220775/12777044)
- [Brief Description of the Yield Keyword](https://stackoverflow.com/a/231788/12777044)
- [Relationship between Generators and Iterators](https://stackoverflow.com/a/28353158/12777044)
- [Differences between Iterators and Generators](https://stackoverflow.com/a/2776865/12777044)
- [Lectures Slides about Generators and Coroutines](https://www.dabeaz.com/coroutines/Coroutines.pdf)
