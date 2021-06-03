---
title: "Gunicorn Design"
draft: false
weight: 17
katex: true
---

### Describing the Server Model
- Gunicorn is based on the pre-fork worker model
- This means that there is a central master process
- This master process manages a set of worker processes
- The master never knows anything about individual clients
- All requests and responses are handled completely by worker processes

### Details about Pre-Fork Models
- Pre-forking refers to a master creating a fork
- This fork handles each request
- A fork refers to a completely separate process
- *Pre* refers to the processes before a request comes in
- This model differs from a threading model
- In a threading model, the master creates light-weight threads to dispatch requests
- However, this master process can have repercussions if a thread causes an error in a threading model

### Describing the Master Process
- The master process is a simple loop
- This loop listens for various process signals and reacts accordingly
- It manages the list of running workers by listening for signals
- These include `TTIN`, `TTOU`, and `CHLD`
- `TTIN` and `TTOU` inform the  master to increase or decrease the number of running workers
- `CHLD` indicates that a child process has terminated

### Describing `Sync` Workers
- A Gunicorn worker is a process
- The most basic and default worker is synchronous
- Synchronous workers handle a single request at a time
- This approach is the simplest for error handling
- This is because an error will affect a single request at most
- `sync` workers do not support persistent connections
- Each connection is closed after response has been sent

### Describing `Async` Workers
- The asynchronous workers available are based on `Greenlets`
	- Via `Eventlet` and `Gevent`
- `Greenlets` are an implementation of cooperative multi-threading for Python
- Asynchronous workers can handle hundreds of requests without blocking
- This is why they're used to ease DOS attacks

### Choosing a Worker Type
- The default synchronous workers assume that your application is resource-bound in terms:
	- CPU
	- Network bandwidth
- Meaning, our applications shouldn't do anything that takes an undefined amount of time
- A server request is an example of this
- If traffic becomes heavy, then `async` workers should be used
- This resource bound assumption is why we require a buffering proxy in front of a default configuration Gunicorn
- If `sync` workers are used, a DOS attack becomes trivial
- This is because it creates a load that trickles data to the servers
- The following are examples of behavior requiring `async` workers:
	- Applications making long blocking calls
	- Serving requests directly to the internet
	- Streaming requests and responses
	- Long polling
	- Web sockets

### How Many Workers?
- The number of workers should **not** equal the number of expected clients
- Gunicorn should only need $4-12$ worker processes
- This will handle hundreds or thousands of requests per second
- Too many workers will compromise system resources
- Gunicorn relies on the operating system for load balancing when handling requests

### Defining the Number of Workers
- The number of workers should equal:

$$
\text{numbers of threads} \times \text{number of workers} + 1
$$

$$
= (2 \times numcores) + 1
$$

- The intuition behind this formula is the following:
	- `+1:` One worker should be reserved for scheduling
	- `2n:` While one thread is doing I/O and waiting, and another thread is used for CPU
- As an illustration, we can set the number of workers to be $2$:

```bash
$ gunicorn --workers=2 'test:create_app()'
```

- This is a trade-off between the following:
	- The overhead of the GIL (threads)
	- The memory overhead of starting new processes (workers)
- Meaning, we need to adjust the two: threads and workers

### How Many Threads?
- Using threads assumes use of the `gthread` worker
- Using threads instead of processes can reduce the memory footprint of Gunicorn
- Threads in Gunicorn are always real
- The GIL locks the interpreter while interpreting a CPython thread
- Consequently, CPython threads can't work simultaneously
- Therefore, the CPython threads executed in Gunicorn will suffer from this same problem
- However, this doesn't mean threading in general is useless
- Specifically, multiple threads can be used without locking
- In particular, multiple threads can be processed concurrently
- This is true for threads that don't require interpretation:
	- Threads that are I/O bound
	- Threads that use C extensions for interpretation

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/design.html)
- [Configuring the Number of Workers](https://github.com/benoitc/gunicorn/issues/1045#issuecomment-269575459)
- [Defining a Pre-Fork Web Server Model](https://stackoverflow.com/a/25894770/12777044)
- [Details about Gunicorn Threads](https://stackoverflow.com/a/48572328/12777044)
- [Details about Gunicorn Workers and Threads](https://stackoverflow.com/a/41696500/12777044)
- [Threading in Flask's Development-Only WSGI Server](https://stackoverflow.com/a/38876915/12777044)
- [Optimizing Gunicorn Configurations](https://medium.com/building-the-system/gunicorn-3-means-of-concurrency-efbb547674b7)
