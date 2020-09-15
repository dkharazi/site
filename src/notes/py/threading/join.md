---
title: "t.join"
draft: false
weight: 13
katex: true
---

### Describing `join(timeout=None)`
- The `join` method waits until:
	- The thread terminates
	- Or a timeout occurs
- The `timeout` represents the seconds until timeout
- In `t.join()`, the main thread will be blocked until thread `t` finishes executing
- Then, the main thread waits until thread `t` has finished
- Once `t` finishes, then the main thread can resume execution
- Specifically, the main thread starts executes code after `join`
- Essentially, the main thread is paused until thread `t` finishes


### Caveats of `join`
- A thread cannot join itself
- A thread cannot join before it has `start`ed
- Note, the scheduling of threads is done by the OS
- Implying, the order in which threads are run is determined by the operating system
- Meaning, multiple runs will produce different orderings
- Each thread's order of execution will vary from run to run

### Setup Code for `join`

```python
# sleepy.py
>>> import logging
>>> from threading import Thread
>>> import time

>>> def sleepy():
...     print('thread started')
...     time.sleep(10)
...     print('thread done')
```

### Example without `join`

```python
>>> t = Thread(target=sleepy)
>>> t.start()
thread started
>>> print('main done')
main done
thread done
```

### Example with `join`

```python
>>> t = Thread(target=sleepy)
>>> t.start()
thread started
>>> t.join()  # haults any further execution
thread done   # until thread finishes
>>> print('main done')  # now we can print
main done
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
- [Example of Joining Threads](https://stackoverflow.com/a/55015892/12777044)
- [Description of Blocking the Main Thread](https://stackoverflow.com/a/37073698/12777044)
- [Illustrating Main Thread Sleeping](https://stackoverflow.com/a/15086113/12777044)
