---
title: "Iteration"
draft: false
weight: 8
katex: true
---

### Describing Iterators and Iterables
- An iterable is an object with a `__iter__` method
- An iterator is an object with a `__next__` method
- An iterator is created by calling the `iter()` on an iterable:

$$ \text{iter(some iterable)} \to \text{iterator} $$

- The following are examples of iterables:
	- String
	- List
	- Set
- The following is an example of iterating through a string:
```python
>>> s = 'foo'
>>> type(s)  # iterable
<class 'str'>
>>> next(s)  # cant call next()
TypeError: 'str' object is not an iterator

>>> s_iter = iter(s)  # can call iter() 
>>> type(s_iter)  # new iterator object
<class 'str_iterator'>
>>> next(s)
f
```

### Why Iterators are Relevant to For Loops

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
- Meaning, Python performs thse steps for while and for loops

### Example of Iterables and Iterators

```python
>>> class PowTwo:
...     def __init__(self, max):
...         self.max = max
...     def __iter__(self):
...         return PowIter(self.max)

>>> class PowIter:
...     def __init__(self, max):
...         self.max = max
...         self.n = 0
...     def __next__(self):
...         if self.n <= self.max:
...             result = 2 ** self.n
...             self.n += 1
...             return result
...         else:
...             raise StopIteration

>>> a = PowTwo(4)
>>> i = iter(a)
>>> type(a)
__main__.PowTwo
>>> type(i)
__main__.PowIter
>>> next(i)
1
```

### Example of an Object that is an Iterable and Iterator

```python
>>> class PowTwo:
...     def __init__(self, max = 0):
...         self.max = max
...     def __iter__(self):
...         self.n = 0
...         return self
...     def __next__(self):
...         if self.n <= self.max:
...             result = 2 ** self.n
...             self.n += 1
...             return result
...         else:
...             raise StopIteration

>>> a = PowTwo(4)
>>> i = iter(a)
>>> type(a)
__main__.PowTwo
>>> type(i)
__main__.PowTwo
>>> next(i)
1
```

### Summarizing Special Methods

| Method           | Description                               |
| ---------------- | ----------------------------------------- |
| `__iter__(self)` | Returns an iterator                       |
| `__next__(self)` | Returns the next element of the iteration |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Implementing __iter__ for a Container](https://stackoverflow.com/a/4019987/12777044)
- [Why Iterators are Important to For Loops](https://stackoverflow.com/a/237028/12777044)
