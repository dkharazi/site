---
title: "t.start"
draft: false
weight: 11
katex: true
---

### Describing `start()`
- The `start` method starts a `Thread` instance `t`
- It does this by invoking the `run` method in a separate thread
- This method can be invoked only once per thread `t`

### Example of `start`

```python
# sleepy.py
>>> import logging
>>> import threading as t
>>> import time

>>> def sleep_thread(msg):
...     print('thread started')
...     print(msg)
...     time.sleep(2)
...     print('thread done')

>>> if __name__ == "__main__":
...     print('main started')
...     msg = 'i am sleepy'
...     thd = t.Thread(target=sleep_thread, args=(msg,))
...     print('main created thread')
...     thd.start()
...     print('main started thread')
...     print('main done')
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
