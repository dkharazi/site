---
title: "Coroutines"
draft: false
weight: 2
katex: true
---

### Introducing Subroutines and Coroutines
- Subroutines and coroutines are an abstraction of:
	- An instruction pointer
	- A call stack
- An **instruction pointer** is a pointer to the current instruction
	- This is useful when dealing with generators
	- This is because generators need to know where to resume
	- So, they must know where to resume on the call stack
- A **call stack** is a collection of code relevant to its scope
- These pieces of code include the following:
	- Local variables
	- Functions
	- etc.
- The following are examples of subroutines and coroutines:
	- `subroutines:` functions, procedures, etc.
	- `coroutine:` generator, etc.

### Defining a Subroutine
- A subroutine is represented by a stack frame
- A stack frame represents a function call
- This stack frame gets pushed on a call stack
- A call stack is a data structure that tracks running subroutines
- A function is an example of a subroutine

### Walkthrough of a Subroutine
- Consider the following subroutine:

```python
>>> def subroutine1(foo):
...     print(foo)
...     return 'done'

>>> def subroutine2():
...     s = 'start'
...     d = subroutine1(s)
...     d = d + '!!!'
...     return d

>>> subroutine2()  # run -- notice how we can't suspend
'start'
'done!!!'
```

- Python will do the following when `subroutine2` is called:
	1. Execute `subroutine2`
		1. Create a stack frame for `subroutine2`
			- A stack frame represents a frame of data
			- This frame of data represents a function call
			- This frame should allocate space for `s` and `d` too
		2. Push this frame of data onto the call stack
			- A call stack is a data structure tracking subroutines
		3. Execute `s = 'start'`
		4. Execute `d = subroutine1(s)`
			- Create a stack frame for `subroutine1`
			- This frame should allocate space for `foo`
		5. Execute `print(foo)`
		6. Execute `return 'done'`
			- This includes pushing `done` to the calling function
			- This includes exiting `subroutine1`
		7. `d = subroutine1(s)` saves return value to `d`
		8. Execute `d = d + '!!!'`
		9. Execute `return d`
			- This includes exiting `subroutine2`
			- This includes returning `done!!!`

### Defining a Coroutine
- A coroutine is similar to a subroutine
- However, a coroutine can:
	- **Suspend** a function without destroying its state
	- **Resume** a function since state is not destroyed
- Coroutine function suspension feels like setting a breakpoint

### Walkthrough of a Coroutine
- Consider the following coroutine:

```python
>>> def gen(foo):
...     yield foo
...     return 'done'

>>> def coroutine():
...     s = 'start'
...     d = yield from gen(s)
...     d = d + '!!!'
...     return d

>>> f = coroutine()
>>> next(f)
'start'
>>> next(f)  # resume -- notice how we can suspend
StopIteration: 'done!!!'
```

- Python will do the following when `coroutine` is called:
	1. Execute `f = coroutine()`	
		1. Create a stack frame for `coroutine`
			- A stack frame represents a frame of data
			- This frame of data represents a function call
			- This frame should allocate space for `s` and `d` too
		2. Push this frame of data onto the call stack
			- A call stack is a data structure tracking subroutines
	2. Execute `next(f)`
		1. Execute `s = start`
		2. Execute `d = yield from gen(s)`
			1. Create a stack frame for `gen`
			2. Push this frame of data onto the call stack
		3. Execute `yield foo`
			- This includes pushing `foo` to the calling function
			- This includes pushing pointer for resuming later
			- This includes suspending `gen`
		4. `yield from gen(s)` yields `foo` as output
			- This includes suspending `coroutine`
			- This includes returning `'start'`
	3. Execute `next(f)`
		1. Resume `coroutine`
			- This includes resuming `coroutine` where we left off
			- This resumes `gen` at `d = yield from gen(s)`
		2. Execute `return 'done'`
			- This includes pushing `done` to the calling function
			- This doesn't include pushing a pointer
			- This is because `gen` has finished executing
		3. `d = yield from gen(s)` saves return value to `d`
		4. Execute `d = d + '!!!'`
		5. Execute `return d`
			- This includes exiting `coroutine`
			- This includes returning `StopIteration: done!!!`

### Summarizing Subroutines and Coroutines
- The main difference between the two routines:
	- Subroutines can suspend functions once using `return`
	- Coroutines can suspend functions frequently using `yield`
- Once a function is suspended:
	- Subroutines can't resume again
	- Coroutines can resume again (using `next()` logic)
- The output of each routine:
	- Subroutines return data values
	- Coroutines yield a data value, call stack, and pointer
- Specifically, coroutines are good for:
	- Looping over large data objects
	- Asynchronous I/O

### Describing `yield from`
- A subroutine can do the following:
	- Go down the call stack with `return`
	- Go up the call stack with `()`
- A coroutine can do the following:
	- Go down the call stack with `yield`
	- Go up the call stack with `yield from`
- `yield from` includes two steps:
	1. `yield`:
		- `yield:` `yield` a value yielded by a sub-generator
		- Thus, suspending execution until resumed by `next()`
	2. `from`:
		- `from:` Receiving a return value `from` a sub-generator
		- After initial suspension, it will resume the sub-generator again if `next()` is called on the generator
		- Then, it will receive a return value from a sub-generator

### Comparing `yield` and `yield from`
- `yield from` and `yield` are similar by:
	- Suspending `foo` until `bar` finishes
	- Running the `bar` generator function
- `yield from` differs from `yield` in some ways:
	- Reading data from a generator without looping
	- Receives a return value from a sub-generator
- In other words, `yield from` does the following:
	- Improves readability by implicitly looping
	- Allows us to return and manipulate data between generators

### Benefit 1: Reading data without Looping

```python
>>> def bar():
...     yield 1
...     yield 2
...     yield 3

>>> def foo():
...     # for i in bar():    # Replaced these
...     #     yield i        # lines...
...     yield from bar()     # ...with this line

>>> for i in foo(): print(i)
1
2
3
```

### Benefit 2: Manipulating Data from Sub-Generator

```python
>>> def inner(j):
...     yield j
...     return j

>>> def outer():
...     yield 'before'
...     i = yield from inner(1)
...	yield i+1
...     yield 'after'

>>> for i in outer(): print(i)
before
1
2
after
```

### Describing `async` and `await`
- Python 3.5 introduced `async` and `await`
- Essentially, `await` replaced `yield from`
- This was to enforce a cleare role of coroutines
- Again, they mainly changed for clarity purposes:

```python
>>> # Python 3.4 and older
>>> def foo():               # subroutine?
...     return None
>>> def bar():
...     yield from foobar()  # generator? coroutine?

>>> # Python 3.5
>>> async def foo():         # coroutine!
...     await foobar()       # coroutine!
...     return None
```

### Differentiating Coroutines from Generators
- A generator can be used in two different contexts:
	1. As an iterator
	2. As a coroutine
- Therefore, a coroutine is a generator
- Generators and coroutines have many similarities:
	- They both can `yield`
	- They both can pause functions
- However, they differ in one key area:
	- A coroutine can contain `yield` and `await`
	- A generator only contains `yield`
- In other words, a coroutine receives a value returned by a generator

### References
- [Lectures Slides about Coroutines](https://www.dabeaz.com/coroutines/Coroutines.pdf)
- [Differences between Coroutines and Generators](https://stackoverflow.com/a/46822920/12777044)
- [Blog Post about Coroutines and Generators](https://www.integralist.co.uk/posts/python-generators/#coroutines)
- [Benefits of yield from](https://stackoverflow.com/a/26109157/12777044)
