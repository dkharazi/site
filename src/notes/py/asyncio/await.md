---
title: "Awaitables"
draft: false
weight: 3
katex: true
---

### Coroutines with `async` and `await`
- Coroutines can be declared with `async` and `await` syntax
	- This is the preferred way of writing asyncio applications
- The difference between the two is the following:
	- `async def:` Creates a coroutine
	- `await:` Awaits an awaitable object
- The following are considered awaitable objects:
	- Python coroutines
	- asyncio `Tasks`
	- asyncio `Futures`
- In asyncio, coroutines can be run with the `run()` function
- In asyncio, coroutines can be run concurrently as `Tasks`
- A task can be created using the `create_task()` function
- A task usually involves the following:
	1. Define a task by wrapping a coroutine
	2. Make sure task is defined in a coroutine function
		- Meaning, we define a task in a coroutine function
		- We do this by defining a task in an `async def`
	2. Run coroutine function using `run()`

### Differentiating between Coroutines and Tasks

```python
>>> from asyncio import sleep, create_task, run
>>> import time

>>> async def sleepy_coro():
...     start = time.time()
...     await sleep(10)
...     await sleep(10)
...     print('coro: ' + str(round(time.time()-start)))

>>> async def sleepy_task():
...     t1 = create_task(sleep(10))
...     t2 = create_task(sleep(10))
...     start = time.time()
...     await t1
...     await t2
...     print('task: ' + str(round(time.time()-start)))

>>> run(sleepy_coro())
'coro: 20'

>>> run(sleepy_task())
'task: 10'
```

### Defining Awaitables
- An object is an **awaitable** if it uses an `await` expression
- There are three main types of awaitable objects:
	- Python coroutines
	- asyncio `Tasks`
	- asyncio `Futures`
- Since Python coroutines are awaitables, they can be awaited from other coroutines
- `Tasks` are used to schedule coroutines concurrently
- Again, a coroutine is wrapped into a `Task` using `create_task`
- At a high level, a coroutine will wait until a `Future` is resolved
- Normally, there is no need to create `Future` objects ourselves

### Describing `run(coro)`
- This function executes a coroutine `coro`
- This function runs the passed coroutine `coro`
- This function always creates a new event loop and closes it at the end
- In other words, this function will always take care of:
	- Managing the asyncio event loop
	- Finalizing asynchronous generators
- This function can't be called when another asyncio event loop is running in the same thread

### Describing `create_task(coro)`
- This function wraps a coroutine `coro` into a `Task` object
- Then, it schedules the execution for this `Task`
- It returns the `Task` instance

### Describing `sleep(delay)`
- This function blocks I/O for `delay` seconds
- This function always suspends the current task
- Meaning, other tasks will be able to run

### Describing `gather(*aws)`
- This function runs awaitable objects `*aws` concurrently
- If any awaitable object in `*aws` is a coroutine, it is automatically scheduled as a `Task`
- If all awaitables are completed successfully, then this function returns a list of values
- The order of result values corresponds to the order of awaitables in `*aws`
- If `gather` is cancelled, then all submitted awaitables are also cancelled

### Example of `gather`

```python
>>> import asyncio

>>> async def factorial(name, num):
...     f = 1
...     for i in range(2, num+1):
...         print('Task {name}: Calc fac({i})')
...         await asyncio.sleep(1)
...         f *= i
...     print('Task {name}: fac({num}) = {f}')

>>> async def main():
...     # Schedule 3 calls concurrently
...     await asyncio.gather(
...         factorial('a', 2),
...         factorial('b', 3),
...         factorial('c', 4),
...     )

>>> asyncio.run(main())
'Task a: Calc fac(2)'
'Task b: Calc fac(2)'
'Task c: Calc fac(2)'
'Task a: fac(2) = 2'
'Task b: Calc fac(3)'
'Task c: Calc fac(3)'
'Task b: fac(3) = 6'
'Task c: Calc fac(4)'
'Task c: fac(4) = 24'
```

### References
- [How Asyncio Works with Coroutines](https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work/51116910#51116910)
- [Coroutines in Asyncio](https://stackoverflow.com/questions/49005651/how-does-asyncio-actually-work/51177895#51177895)
- [Documentation of Asyncio Coroutines](https://docs.python.org/3/library/asyncio-task.html)
