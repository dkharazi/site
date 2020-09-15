---
title: "Queue"
draft: false
weight: 8
katex: true
---

### Defining a Queue
- A queue is used for threaded programming
- There are three types of queues:
	- A FIFO queue
	- A LIFO queue
	- A priority queue
- A priority queue ensures entries are kept sorted
- Specifically, the lowest-valued entry is retrieved first
- Internally, these queues use locks to temporarily block competing threads
- Specifically, the `get()` and `put()` functions are thread-safe
	- Or, these functions are free of race conditions
- However, they are still exposed to experiencing deadlocks

### Differentiating between `Queue` and `deque`
- `Queue.Queue` and `collections.deque` serve different purposes
- `Queue.Queue` is used for communicating between threads
- `collections.queue` is used as a data structure only
- In other words, a queue should be used for multithreaded programming
- A deque can be used for singlethreaded programming

### References
- [Queue Documentation from the Python Standard Library](https://docs.python.org/3/library/queue.html)
- [Examples of Queue](https://pymotw.com/3/queue/index.html)
- [Benefits of Queue](https://stackoverflow.com/a/717261/12777044)
- [The Internal Locking of the Queue](https://stackoverflow.com/a/44219646/12777044)
