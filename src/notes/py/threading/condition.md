---
title: "threading.Condition"
draft: false
weight: 22
katex: true
---

### Describing `Condition(lock=None)`
- A condition object is a synchronization primitive
- A condition object is built on top of another lock
- This lock is used when a thread is interested in a particular change of state or event ocurring
- A typical use is a producer/consumer problem:
	- One thread is a producer
	- One thread is a consumer
- The `Condition` constructor creates a new instance `c`
- The lock associated with a condition `c` is passed as an optional parameter `lock`
	- `lock` is an instance of `Lock` or `RLock`
	- `lock` is an `RLock` instance by default

### Describing `c.acquire(*args)`
- This methods acquires the underlying lock
- This method calls the corresponding `acquire(*args)` method on the underlying lock
- Then, it returns the results

### Describing `c.release()`
- This method releases the underlying lock
- This method calls the corresponding `release` method on the underlying lock

### Describing `c.wait(timeout=None)`
- This method waits until notified or until a timeout occurs
- This method is called after the calling thread has already acquired the lock
- The following happens when called:
	1. The underlying lock is released
	2. The thread sleeps until it's awakened by a `notify` or `notify_all` call performed on `c` by another thread
	3. Once awakened, the thread requires the lock and the method returns
- Here, `timeout` is a number of seconds
- If this time expires, then:
	- The thread is awakened
	- The lock is reacquired
	- The control is returned

### Describing `c.notify(n=1)`
- This method wakes up one or more threads waiting on `c`
- This method is called only after the calling thread has acquired the lock
- It does nothing if no threads are waiting
- `n` specifies the number of threads to awaken
- The default of `n` is $1$
- Awakened threads don't return from the `wait` call intil they can reacquire the lock
- `c.notify_all()` wakes up all threads waiting on `c`

### Example of `Condition`

```python
>>> from threading import Thread, Condition
>>> import time

>>> signal = Condition()

>>> def chef():
...     signal.acquire()
...     print('making food')
...     time.sleep(2)
...     print('needs salt')
...     signal.wait_for(get_salt)
...     time.sleep(2)
...     print('done cooking')
...     signal.notify()
...     signal.release()

>>> def hungry_customer():
...     signal.acquire()
...     print('so hungry')
...     signal.wait_for(eat)
...     signal.release()
...     print('goodbye')

>>> def another_hungry_customer():
...     signal.acquire()
...     print('me next')
...     signal.wait_for(eat)
...     signal.release()
...     print('clean plate')

>>> def eat():
...     time.sleep(2)
...     print('yum')
...     return True

>>> def get_salt():
...     time.sleep(2)
...     print('much better')
...     return True

>>> def restaurant():
...     p = Thread(target=chef)
...     c = Thread(target=hungry_customer)
...     c2 = Thread(target=another_hungry_customer)
...     p.start()
...     c.start()
...     c2.start()

>>> restaurant()
making food
needs salt
much better
done cooking
so hungry
yum
goodbye
me next
yum
clean plate
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Use-Case of Conditions](https://stackoverflow.com/a/7424818/12777044)
- [Examples of Conditions](https://hackernoon.com/synchronization-primitives-in-python-564f89fee732)
