---
title: "t.is_alive"
draft: false
weight: 14
katex: true
---

### Describing `is_alive()`
- The `is_alive` method determines if a thread is alive or not
- Specifically, it returns `True` if the tread is alive
- And, it returns `False` otherwise
- A thread is alive from the moment the `start` method returns
- A threead is not alive anymore when the `run` method terminates

### Example of `is_alive`

```python
>>> import logging
>>> from threading import Thread
>>> import time

>>> def sleepy():
...     print('thread started')
...     time.sleep(10)
...     print('thread done')

>>> t = Thread(target=sleepy).start()
'thread started'
>>> t.is_alive()
True
'thread done'
>>> t.is_alive()
False
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
