---
title: "threading.Semaphore"
draft: false
weight: 20
katex: true
---

### Describing Semaphores
- A semaphore is a counter with a few special properties
- This counter has the following properties:
	- Is decremented by each `acquire` call
	- Is incremented by each `release` call
	- Counting is atomic
- If the counter ever reaches $0$, then threads are blocked
- Specifically, threads can't acquire a semahore until a `release`
- This causes the semaphore to block other threads
- Also, a counter is atomic
	- Meaning, the OS will not swap out the thread in the middle of incrementing and decrementing the counter
- Semaphores are used to protect resources with capacity limits
- For example, a semaphore is used to limit the size of a pool

### Describing `Semaphore(value=1)`
- The `Semaphore` object creates a semaphore instance
- The `value` is the initial value for the counter
- The `value` is assigned to $1$ by default
- A `Semaphore` instance `s` supports the following methods:
	- `acquire`
	- `release`

### Describing `s.acquire(blocking=True)`
- This method acquires a semaphore
- If the internal counter is more than $0$ initially, then this method:
	- Decrements the counter by $1$
	- And returns immediately
- If it's $0$, this method blocks until another thread calls `release`
- The `blocking` argument has the same behavior as described for `Lock` and `RLock` objects

### Describing `s.release()`
- This method releases a semaphore
- It does this by incrementing the internal counter by $1$
- If the counter is $0$ and another thread is waiting, then that tread is awakened
- If multiple threads are waiting, only one will be returned from its `acquire` call
- The order in which threads are released is not deterministic

### Illustrating a Semaphore using Bouncers
- A semaphore can be thought of as a bouncer at a nightclub
- The bouncer will admit only a certain number of people
- So no one is allowed to enter if the club is full
- When someone leaves, the bouncer admits another person
- Semaphores are a way to limit the number of consumers for a specific resource
- For example, a semaphore could limit the number of simulateous calls to a database made by our application

### Example with `Semaphore`

```python
>>> from threading import Semaphore, Thread
>>> import time

>>> bouncer = Semaphore(3)  # only 3 guests at once

>>> def guest(i):
...     print('Guest {} is waiting'.format(i))
...     bouncer.acquire()
...     print('Guest {} has entered'.format(i))
...     time.sleep(2)  # dance for 2 seconds!
...     print('Guest {} is leaving'.format(i))
...     bouncer.release()

>>> def openclub():
...     for i in range(1,6):
...         t = Thread(target=guest, args=(i,))
...         t.start()

>>> openclub()
Guest 1 is waiting
Guest 1 has entered
Guest 2 is waiting
Guest 2 has entered
Guest 3 is waiting
Guest 3 has entered
Guest 4 is waiting
Guest 5 is waiting

Guest 1 is leaving
Guest 4 has entered
Guest 2 is leaving
Guest 5 has entered

Guest 3 is leaving
Guest 4 is leaving
Guest 5 is leaving
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Semaphores in Python](https://realpython.com/intro-to-python-threading/#semaphore)
- [Illustrating Semaphores and Mutexes with Taxis](https://stackoverflow.com/a/44971803/12777044)
- [Defining a Semaphore](https://stackoverflow.com/a/40238/12777044)
- [Example of Semaphores involving Bouncers](https://stackoverflow.com/a/40473/12777044)
