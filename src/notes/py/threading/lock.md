---
title: "threading.Lock"
draft: false
weight: 18
katex: true
---

### Describing a Primitive Lock
- A **primitive lock** allows only one thread to enter locked code
- Only one thread can acquire the lock at a time
- A primitive lock has the following states:
	- Locked state
	- Unlocked state
- A thread can either:
	- `Acquire` the lock
	- Or `release` the lock
- If a thread has acquired the lock, then other threads attempting to acquire the lock will be blocked
- Once the thread releases the lock, threads can acquire the lock without being blocked again
- If more than one thread is waiting to acquire the lock, then only one is allowed to proceed when the lock is released
- The order in which waiting threads proceed is undefined

### Describing `Lock()`
- A primitive lock is represented using the `Lock` object
- A `Lock` object creates a new primitive lock
- This object is initially unlocked
- A `Lock` instance `lock` has two methods:
	- `lock.acquire()`
	- `lock.release()`

### Describing `lock.acquire(blocking=True)`
- The `acquire` method acquires the lock
- The method blocks other threads from acquiring the lock until it is released
- If a thread calls `acquire` and successfully acquires the lock, then it returns `True`
- Otherwise, the `acquire` method returns `False`

### Describing `lock.release()`
- The `release` method releases a lock
- An error will be returned if this method is called when:
	- The lock is in an unlocked state
	- Or from a separate thread than the thread calling `acquire`

### Example without `Lock`

```python
# test.py
from threading import Thread, Lock
import time

s = 'order: '
# lock = Lock()

def stringy(l):
    global s
    print(l + ' waiting')
    # with lock:
    print(l + ' locked')
    sl = s + l
    time.sleep(2)
    s = sl
    print(s)
    print(l + ' unlocked')

def a():
    stringy('a')

def b():
    stringy('b')

if __name__ == 'main':
    a_t = Thread(target=a)
    b_t = Thread(target=b)
    a_t.start()
    b_t.start()
```

```sh
$ python3 test.py
a waiting
a locked
b waiting
b locked
order: a
order: b
a unlocked
b unlocked
```

### Example with `Lock`

```python
# test.py
from threading import Thread, Lock
import time

s = 'order: '
lock = Lock()

def stringy(l):
    global s
    print(l + ' waiting')
    with lock:
        print(l + ' locked')
        sl = s + l
        time.sleep(2)
        s = sl
        print(s)
        print(l + ' unlocked')

def a():
    stringy('a')

def b():
    stringy('b')

if __name__ == '__main__':
    a_t = Thread(target=a)
    b_t = Thread(target=b)
    a_t.start()
    b_t.start()
```

```sh
$ python3 test.py
a waiting
a locked
b waiting
order: a
a unlocked
b locked
order: ab
b unlocked
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Examples of Threading in Python](https://realpython.com/intro-to-python-threading/)
- [Difference between Locks and Semaphores](https://stackoverflow.com/a/2332868/12777044)
- [Example Code using threading.Lock](https://stackoverflow.com/a/10525433/12777044)
