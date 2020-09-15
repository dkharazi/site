---
title: "threading.RLock"
draft: false
weight: 19
katex: true
---

### Motivating a Reentrant Lock

- There will be times when we want to nest locks within locks
- In these scenario, we'll likely:
	- Take one thread inside of a lock
	- Branch off to create more threads
	- Adding another lock for those nested threads
- As a result, we will be nesting locks
- Consequently, this will create a deadlock
- The following steps will deadlock:

```python
>>> from threading import Lock
>>> l = threading.Lock()
>>> l.acquire()
>>> l.acquire()  # acquiring lock twice -> hangs
>>> l.release()
>>> l.release()
```

- Therefore, the `RLock` is designed for handling nested locks

### Describing a Reentrant Lock
- A reentrant lock is a synchronization primitive that's similar to a `Lock` object
- However, it can be acquired multiple times by the same thread
- This allows the thread owning the lock to perform nested `acquire()` and `release()` operations
- In this case, only the outer-most `release()` operation resets the lock to its unlocked state

### Describing `RLock()`
- A reentrant lock is represented using the `RLock` object
- A new `RLock` object is created using the `RLock()` constructor
- It creates a new reentrant lock object
- An `RLock` instance `rlock` has two methods:
	- `rlock.acquire()`
	- `rlock.release()`

### Describing `rlock.acquire(blocking=True)`
- `acquire` acquires the lock, blocking until the lock is released
- If no thread owns the lock:
	- The thread is locked
	- And the recursion level is set to $1$
- If this thread already owns the lock, the recursion level of the lock is increased by one and the function returns immediately

### Describing `rlock.release()`
- `release` releases the lock by decrementing its recursion level
- If the recursion level is $0$ after the decrement, then the lock is reset to the unlocked state
- Otherwise, the lock remains locked
- This function should only be called by the thread that currently owns the lock

### Example with `RLock`
```python
>>> from threading import RLock
>>>> l = threading.RLock()
>>> l.acquire()
>>> l.acquire()  # acquiring lock twice -> doesn't hang
>>> l.release()
>>> l.release()
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
- [Difference between Locks and Semaphores](https://stackoverflow.com/a/2332868/12777044)
- [Example Code using threading.Lock](https://stackoverflow.com/a/10525433/12777044)
- [Details about Reentrant Locks](https://stackoverflow.com/a/5035166/12777044)
