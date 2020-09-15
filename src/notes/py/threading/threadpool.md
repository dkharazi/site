---
title: "ThreadPoolExecutor"
draft: false
weight: 24
katex: true
---

### Describing `ThreadPoolExecutor`
- `ThreadPoolExecutor` is an `Executor` subclass
- It uses a pool of threads to execute calls asynchronously
- Deadlocks can occur when the callable associated with a `Future` waits on the result of another `Future`

### Example of `ThreadPoolExecutor`

```python
>>> from concurrent.futures import ThreadPoolExecutor
>>> from concurrent.futures import as_completes
>>> from urllib.request import urlopen

>>> URLS = ['http://www.foxnews.com/',
...         'http://www.cnn.com/',
...         'http://europe.wsj.com/',
...         'http://www.bbc.co.uk/',
...         'http://some-made-up-domain.com/']

>>> # Retrieve a single page
>>> # and report the URL and contents
>>> def load_url(url, timeout):
...     with urlopen(url, timeout=timeout) as conn:
...     return conn.read()

>>> # We can use a with statement
>>> # to ensure threads are cleaned up promptly
>>> with ThreadPoolExecutor(max_workers=5) as e:
...     # Start the load operations
...     # and mark each future with its URL
...     keys = e.submit(load_url, url, 60)
...     vals = url for url in URLS
...     future_to_url = zip(keys, vals)
...     for future in as_completed(future_to_url):
...         url = future_to_url[future]
...         data = future.result()
```

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python Documentation for ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor)
