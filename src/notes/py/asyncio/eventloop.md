---
title: "Event Loop"
draft: false
weight: 5
katex: true
---

### Describing the Asyncio Event Loop
- We can think of an event loop as a `while True` loop
- Specifically, this loop does the following:
	- Monitors coroutines
	- Takes feedback of idle coroutines
	- Looks for executable coroutines
- In other words, the event loop wakes up udle coroutines when resources for that coroutine become available

### Significant Properties of the Event Loop
1. Asyncio implicitly handles the entire management of the event loop when running a coroutine:

```python
>>> asyncio.run(coro())
```

2. Coroutines don't do much until they're tied to an event loop:

```python
>>> import asyncio

>>> async def coro():
...     print('Hello')
...     await asyncio.sleep(1)
...     print('World')

>>> coro()
<coroutine object coro>

>>> asyncio.run(coro())
'Hello'
'World'
```

3. By default, an asyncio event loop runs:
	- In a single thread
	- And on a single CPU core

### Motivating Events
- A coroutine is a separate concept from threads and processes
- It has no concept of yielding control to a new coroutine
- Instead, it can only yield control to its caller
- Its caller is located at the bottom of the coroutine stack
- This calling function switches to another coroutine and runs its
- Each coroutine is run by a single event loop
- When a coroutine suspends:
	- The function waits until signaled to resume
	- Once the function resumes, it yields an **event**

### How Events Interact with the Event Loop
- The event loop waits for events to occur
- Several coroutine `await` each other
- Until, an event is `await`ed finally
- This event can communicate directly with the event loop
- It can do this by `yield`ing control
- Essentially, coroutine suspensions allow the event loop to directly communication with events

### Illustrating Events in the Event Loop
- The simplest event to handle is reaching a point in time
- We can illustrate this concept using `time.sleep()`
- However, the `time.sleep` function blocks I/O execution
- Ideally, we should use a function that does the following:
	- Suspends until the timeout has been reached
	- Informs the event loop when the function is ready
- Fortunately, asyncio provides us with a function that does this
- It is called `asyncio.sleep()`
- There are many other functions that are able to suspend without blocking I/O
- However, asyncio needs to provide us with these functions

### Defining Custom Events for the Event Loop
- An event is simply a value we can identify
- A class can be defined for this
- Specifically, it will need to store event information
- Implying, we must implement the special function `__await__`
- Note, the class only stores the event
- It does not say how to actually handle the event

### References
- [Description of Event Loop in Asyncio](https://realpython.com/async-io-python/#the-event-loop-and-asynciorun)
- [Details about Event Loop in Asyncio](https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work/51177895#51177895)
- [Dissecting the Event Loop in Asyncio](https://stackoverflow.com/a/51116910/12777044)
- [Illustrating Python's Event Loop](https://stackoverflow.com/a/56730924/12777044)
- [Examples of Custom Events](https://www.pythonsheets.com/notes/python-asyncio.html)
- [Asyncio Event Primitive](https://docs.python.org/3/library/asyncio-sync.html#asyncio.Event)
