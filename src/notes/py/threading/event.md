---
title: "threading.Event"
draft: false
weight: 21
katex: true
---

### Describing `Event()`
- An event is used to communicate between threads
- One thread signals an *event*
- Other threads wait for this event
- An `Event` instance manages an internal flag
- This internal flag represents a condition we define
- The flag can be set to `True` using the `set` method
- It can be reset to `False` using the `clear` method
- The `wait` method blocks until the flag is `True`
- The `Event` constructor creates an `Event` instance `e`
- The internal flag is set to false by default
- An `Event` instance `e` supports the following methods:
	- `is_set`
	- `set`
	- `clear`
	- `wait`

### Describing Methods of `Event` Instances
- `clear:` Resets the internal flag to `False`
- `is_set:` Returns true only if the internal flag is `True`
- `set:` Sets the internal flag to `True`
	- All threads waiting for it to become true are awakened
- `wait(timeout):` Blocks until the internal flag is `True`
	- If the internal flag is `True`, this method returns instantly
	- Otherwise, it blocks until:
		- Another thread calls `set`
		- Or the optional `timeout` expires

### Using Conditions over Events
- Typically, we'll be faced with a consumer/producer problem
- In this scenario, we'll want to create:
	- A thread as the consumer
	- A thread as the producer
- `Event` objects can be used to signal other threads
- However, they should not be used to implement consumer/producer notification systems
- It does not work reliably because the producer might produce a new item in between the `wait` and `clear` operations
- For these types of problems, we should prefer using `Condition` instead
- This is because `Condition` is an abstracted `Event` + `Lock`

### Example of `Event`

```python
>>> from threading import Thread, Event
>>> import time

>>> start_signal = Event()

>>> def turtle():
...     print('go turtle')
...     time.sleep(5)
...     print('signal rabbit')
...     start_signal.set()
...     time.sleep(10)
...     print('slug done')

>>> def rabbit():
...     print('rabbit waits 5 seconds')
...     start_signal.wait()
...     print('go rabbit')
...     time.sleep(5)
...     print('rabbit done')
...     start_signal.clear()

>>> def race():
...     t = Thread(target=turtle)
...     r = Thread(target=rabbit)
...     r.start()
...     t.start()

>>> race()
rabbit waits 5 seconds
go turtle
signal rabbit
go rabbit
rabbit done
turtle done
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Use-Case of Events](https://stackoverflow.com/a/7424818/12777044)
