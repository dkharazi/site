---
title: "threading.Queue"
draft: false
weight: 23
katex: true
---

### Describing the `queue` Module
- The `queue` module implements various mulitproducer multiconsumer queues
- These can be used to safely exchange information between multiple threads
- The queue module defines three different queue classes:
	- `Queue`
	- `LifoQueue`
	- `PriorityQueue`
- An instance `q` of any of these constructors can be created

### Describing `Queue(maxsize=0)`
- This class creates a FIFO queue
- `maxsize` is the maximum number of items that can be placed in the queue
- If `maxsize` is omitted or $0$, then the queue size is infinite

### Describing `LifoQueue(maxsize=0)`
- This class creates a LIFO queue
- A LIFO queue is also known as a stack

### Describing `PriorityQueue(maxsize=0)`
- This class creates a priority queue in which items are ordered from lowest to highest priority
- When working with this queue, items should be tuples
- These tuples should take the form of `(priority, data)`

### Summarizing Instance Methods
- Each `q` instance should call `get` on the queue to retrieve a task
	- This call will block if no tasks are available
	- This will causes workers to go idle until one becomes available
- Then, the worker should execute the task
- Once the tasks is done, `task_done` shoul dbe called on `q`
- We can put tasks in `q` by calling `put`
- Calling `join` on `q` will wait until all pending tasks have completed

### Benefit of Queues
- Using queues instead of thread pools has the following benefit:
	- Not creating threads, which is expensive
	- Not destroying threads, which is expensive
- The worker threads will run continuously
- When no tasks are in the queue, the queue will sleep
- This won't use any CPU time

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Queue API](https://docs.python.org/3/library/queue.html)
- [Summarizing Methods of the Queue Class](https://stackoverflow.com/a/19369877/12777044)
