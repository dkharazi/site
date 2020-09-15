---
title: "Call Stack"
draft: false
weight: 4
katex: true
---

### Describing a Scope Chain
- The scope chain of a function is constructed when a function is defined
- Implying, a scope chain is a property of a function
- The scope chain never changes throughout a program
- A scope chain is used for variable lookups
- Roughly, a scope chain is a list of objects
- These objects consist of:
	- Its own variables
	- Its parent variables
- A scope chain is considered a chain because each child scope has access to its parent scope
- In other words, each scope is a list that is a chain of objects

### Illustrating the Scope Chain

- Refer to the example below,
- `x` can be accessed from anywhere
- Implying, `x` is considered to be in the *outer scope*
- More specifically, `x` is considered to be in the *global scope*
- On the other hand, `y` is considered to be in the *local scope* of the function `a()`
- Specifically, `y` can be accessed by the code in `a()` only

```python
>>> x = 1

>>> def a():
...     y = 2
```

### Describing an Execution Context
- An execution context is separate from the scope chain
- It is constructed when a function is invoked
- An execution context is composed of the following:
	- The function's parameters
	- And local variables
	- A reference to the scope chain
	- The value of `self`
- Roughly, an execution context is the *environment* of a function
- An execution context refers to its scope chain for variable lookups
- An execution context represents the execution of a function (or context)

### Describing the Call Stack
- The call stack is a collection of execution contexts
- The bottom of the call stack contains the global execution context
- Each time a new function is called, it gets placed on the top of the call stack
- Once the execution of a function is finished, its execution context gets popped off the call stack
- A call stack is used for tracking each execution context

### Describing Execution Contexts in Python
- Conceptually, an **execution context** is a stack of logical contexts
- A **logical context** is a mapping of context variables to their values in that particular logical context
- A **context variable** is an object representing a value in the execution context
- A new context variable is created by calling:

```python
>>> contextvars.ContextVar(name)
```

- Here, `name` is the given name for the context variable
- A new `ContextVar(name)` has the following methods:
	- `get():` A function for getting a context variable
	- `set():` A function for setting the value of a context variable
	- `delete():` A function for removing a context variable

### References
- [Details about Execution Contexts and Execution Stack](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/5869128#content)
- [More Details about Execution Context](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/5869130#content)
- [Definitions of Execution Contexts](https://stackoverflow.com/a/9384894/12777044)
- [PEP 550: Execution Contexts](https://www.python.org/dev/peps/pep-0550/)
- [Chapter about Scope Chain](http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/)
