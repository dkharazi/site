---
title: "Creating Custom Awaitable Objects"
date: "2020-06-04"
tags: ["python"]
draft: false
katex: true
---

The goal of the [asyncio](https://docs.python.org/3/library/asyncio.html) module is to implement asynchronous programming in Python. It achieves concurrency by using evented I/O and cooperative multitasking, whereas a module like `multithreading` achieves concurrency by focusing on threading and pre-emptive multitasking. The asyncio module focuses on coroutines, which makes this form of concurrent programming arguably more complicated than other modules, such as `multiprocessing` and `multithreading`.

When looking through the asyncio documentation, I never found any great examples that involved building custom awaitables and running them as tasks. Since so much of asyncio depends on building its own non-blocking functions specific to asyncio, this seemed strange to me. By running custom awaitables as task, we can achieve both increased flexibility and concurrency. This seems to be a very powerful component of asyncio, at least for some of my use cases.

## Motivating the Await Expression
In Python 3.3, the `yield from` expression was introduced to wait for coroutines in asyncio applications. In Python 3.5, the [await expression](https://www.python.org/dev/peps/pep-0492/#await-expression) was introduced to replace the old `yield from` syntax in asyncio. It was introduced for multiple reasons and included various behavioral changes.

Compared to the `yield from` expression, the `await` syntax enforces a clearer role for coroutines. Specifically, `yield from` could accept a generator or coroutine, whereas `await` strictly accepts a coroutine.

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

## Introducing Awaitable Objects
In asyncio, coroutines are considered an *awaitable* object. There seem to be three types of awaitable objects:
- A coroutine
- An asyncio `Task`
- An asyncio `Future`

A `Future` object acts as a placeholder for data that hasn't yet been calculated or fetched. A `Task` is a wrapper for a coroutine and a subclass of `Future`. Specifically, it wraps coroutines to schedule them for execution. A `Task` is a high-level awaitable object, whereas a `Future` is a low-level awaitable object. Normally, there [isn't a need](https://docs.python.org/3/library/asyncio-task.html#awaitables) to create a `Future` object at the application level code. For these reasons, let's only focus on coroutines.

Generally, coroutines implement the `__await__` special method, which return an iterator. There are a few other ways to define an awaitable object. However, each method involves defining or invoking an object with an `__await__` method. Therefore, if we want to define our own custom awaitable object, we need to define a class with an `__await__` special method. For a more in-depth analysis of awaitables and futures, refer to [this post](https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/).

## Defining an Awaitable Object
An asyncio application begins to get interesting once we start creating tasks. In asyncio, the `create_task()` function runs coroutines concurrently as asyncio `Tasks`. In this section, we'll create a task that schedules a custom awaitable coroutine.

The code below creates a custom awaitable object `RandomSleeper`. It sleeps for 5 to 10 seconds and returns a message after waking up. It also notifies us before falling asleep. This behavior is captured in the `async def` function, which creates a coroutine object. Notice, the `RandomSleeper` class must include the `__await__` special method in order to be `awaited`.

As a reminder, an `async def` expression only creates a coroutine object once it has been awaited. Since we're interested in creating tasks, we need to create a `nap` function, which strictly awaits the custom awaitable `RandomSleeper` object. By doing this, the `nap` function returns a coroutine, which can be passed into our `main()` function.

The `main()` function represents an [event loop](https://docs.python.org/3/library/asyncio-eventloop.html), which awaits the coroutines returned by the `nap()` function. The main function runs these coroutines as tasks by passing them into the `create_task()` function.

```python
>>> import asyncio
>>> import random

>>> class RandomSleeper:
...     def __await__(self):
...         return self.snooze().__await__()
...
...     async def snooze(self):
...         sleep = random.randint(5, 10)
...         msg = 'Sleeping for {} seconds!'
...         msg = msg.format(sleep)
...         print(msg)
...         msg = 'What a short {} second nap!'
...         msg = msg.format(sleep)
...         return await asyncio.sleep(sleep, msg)

>>> async def nap():
...     return await RandomSleeper()

>>> async def main():
...     while True:
...         t1 = asyncio.create_task(nap())
...         t2 = asyncio.create_task(nap())
...         print(await t1)
...         print(await t2)

>>> asyncio.run(main())
Sleeping for 6 seconds!
Sleeping for 10 seconds!
What a short 6 second nap!
What a short 10 second nap!
Sleeping for 9 seconds!
Sleeping for 5 seconds!
What a short 9 second nap!
What a short 5 second nap!
```

Notice, the two tasks `t1` and `t2` run concurrently in the event loop. Meaning, we're able to run our custom awaitable `RandomSleeper` concurrently by running its associated coroutines as tasks. Specifically, `t1` and `t2` are run simultaneously (roughly), and `t1` waits for `t2` to finish running before returning.
