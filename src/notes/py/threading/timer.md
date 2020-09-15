---
title: "threading.Timer"
draft: false
weight: 16
katex: true
---

### Describing `Timer(interval, func, args)`
- A `Timer` object is used to execute a function at a later time
- It creates a timer object that runs the function `func` after `interval` seconds
- The `args` provide the arguments and keyword arguments passed to the `func`
- The timer does not start until the `start` method is called

### Describing `t.start()`
- The `start` function is an instance method of `Timer`
- It starts the timer
- The function `func` supplied to `Timer` will be executed after the specified timer interval

### Describing `t.cancel()`
- The `cancel` function is an instance method of `Timer`
- It cancels the timer if the function has not started yet

### Example of `Timer`

```python
>>> from threading import Timer

>>> def sleepy():
...     print('thread started')
...     time.sleep(10)
...     print('thread done')

>>> t = Timer(30.0, sleepy)
>>> t.start()
>>> print('waiting for 30 seconds')
'waiting for 30 seconds'
>>> print('still waiting')
'thread started'
'thread done'
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
