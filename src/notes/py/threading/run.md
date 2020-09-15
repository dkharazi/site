---
title: "t.run"
draft: false
weight: 12
katex: true
---

### Describing `run()`
- The `run` method runs a `Thread` instance `t`
- The `run` method is invoked by the `start` method
- By default, it calls the target function passed in the constructor
- This method can also be redefined in subclasses of `Thread`

### Example of `run`

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
...     thd.start()  # invokes thd.run() automatically
...     print('main started thread')
...     print('main done')
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
