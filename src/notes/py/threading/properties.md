---
title: "Thread Properties"
draft: false
weight: 15
katex: true
---

### Describing `t.name`
- The `name` property refers to the thread name
- This is a string that is used for identification
- We can change the name if desired

### Describing `t.ident`
- The `ident` property refers to a unique identification number tied to the thread
- If the thread has not yet started, the value is `None`

### Describing `t.daemon`
- The `daemon` property refers to the daemonic status
- It is a boolean value
- The thread must be set to a daemon prior to calling `start`
- The initial value is inherited from daemonic status of the creating thread
- The entire program exists when non active non-daemon threads are left
- All programs have a main thread that represents the initial thread of control
- This main thread is not daemonic

### Example of Properties

```python
>>> import logging
>>> from threading import Thread
>>> import time

>>> def sleepy():
...     print('thread started')
...     time.sleep(10)
...     print('thread done')

>>> t = Thread(target=sleepy, name='bill')
>>> t.name
'bill'
>>> t.start()  # start sets name to None
'thread started'
>>> t.name
AttributeError: 'No attribute name'
'thread done'
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
