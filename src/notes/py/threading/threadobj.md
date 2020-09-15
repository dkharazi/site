---
title: "threading.Thread"
draft: false
weight: 10
katex: true
---

### Describing `Thread(group, target, name, args)`
- The `Thread` object creates a new `Thread` instance
- The `target` is a callable object (e.g. function)
- It is invoked by the `run()` method
- Typically, we use the `start()` method to invoke the `run()` method
- By default, `target` is `None`
- Meaning, nothing is called
- The `name` is the thread name
- By default, a unique name of the form `Thread-N` is created
- The `args` is a tuple of arguments passed to the `target` function

### Example of `Thread`

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

```sh
# !/bin/sh
$ python3 sleepy.py
main started
main created thread
thread started
i am sleepy
main started thread
main done
thread done
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
