---
title: "CPU and I/O Bound"
draft: false
weight: 9
katex: true
---

### Describing CPU and I/O Bound Operations
- If the performance bottleneck of an operation is the CPU, then the operation is characterized as a *CPU bound operation*
- If the performance bottleneck of an operation is an I/O subsystem, then the operation is characterized as an *I/O bound operation*
- In other words, an operation is CPU bound if it would go faster if the CPU were faster
- In other words, an operation is I/O bound if it would go faster if an I/O subsystem were faster
- The I/O subsystem could refer to any of the following:
	- Memory communication
	- Disk communication
	- Network communication

### Illustrating CPU Bound Operations
- A CPU bound operation spends the majority of its time using the CPU
- For example, a program that computes new digits of $\pi$ will typically be CPU bound
- This is because the operation involves computation
- Other examples of CPU bound operations are the following:
	- Search algorithms
	- Video compression algorithms
	- Audio conversion algorithms
	- Content compression algorithms
	- Video streaming
	- Graphic rendering
	- Heavy mathematical computations
	- Training a neural network

### Illustrating I/O Bound Operations
- An I/O bound operation spends the majority of its time using an I/O subsystem
- For example, a program that looks through a huge file for data will typically be I/O bound
- This is because the operation involves reading (or writing)
- Other examples of I/O bound operations are the following:
	- Copying files
	- Moving files
	- Transferring files
	- Downloading files
	- Collecting application snapshots
	- Collecting data snapshots

### Python Handling I/O Bound Tasks with GIL
- There are I/O bound operations that can release the GIL
- There are also CPU bound operations that can release the GIL
- Specifically, the GIL in CPython is only concerned with Python code being executed
- Therefore, a threadsafe C extension (e.g. numpy) releases the GIL since it doesn't interact with Python runtime
- As soon as the C code needs to *talk* to Python, then it needs to acquire the GIL again
- Releasing the GIL around I/O operations follows the same process
- In other words, there is no reason to acquire the GIL until data is moved into Python

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Description of CPU and I/O Bound Operations](https://stackoverflow.com/a/868577/12777044)
- [Examples of CPU and I/O Bound Operations](https://www.quora.com/What-are-some-examples-of-CPU-bound-and-non-CPU-bound-problems-What-would-be-the-best-programming-language-to-tackle-each-situation)
- [Python I/O Bound Tasks](https://stackoverflow.com/a/29270976/12777044)
- [Python Example of CPU and I/O Bound Operations](https://stackoverflow.com/questions/46045956/whats-the-difference-between-threadpool-vs-pool-in-python-multiprocessing-modul)
- [Multithreading and I/O Bound Operations](https://stackoverflow.com/a/902455/12777044)
- [CPU and I/O Bound Problems in Application](https://realpython.com/python-concurrency/#when-is-concurrency-useful)
