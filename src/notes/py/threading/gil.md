---
title: "The GIL"
draft: false
weight: 8
katex: true
---

### Defining the Global Interpreter Lock
- The Global Interpreter Lock (GIL) is a boolean value in the CPython interpreter
- This boolean value is protected by a mutex
- Specifically, the GIL represents which thread is currently executing statements
- The GIL is used by the core bytecode evaluation loop in CPython

### Generalizing the Problem caused by the GIL
- CPython supports multiple threads within a single interpreter
- However, threads must request access to the GIL in order
- Without access, threads can't execute *Opcodes* (low-level operations)
- As a result, multiple threads of a single process can only use a single core

### Describing the Behavior of the GIL
- Threads hold the GIL when running
- However, they release the GIL when blocking for I/O
- Meaning, other available threads will run when a thread is paused
- On the other hand, CPU-bound threads will periodically perform checks
- Specifically, each thread is paused if it is still running after 100 interpreter *ticks*
- The check interval is a global counter that is completely independent of thread scheduling
- In other words, two threads *could* run in parallel if they don't need access to the CPython interpreter
- This happens for the following scenarios:
	- I/O requests
	- Threads using C extensions

### Achieving Concurrency in CPython
- We need to use multiple processes to achieve true concurrency
- Specifically, we can run multiple processes in parallel, rather than running multiple threads
- The standard CPython library includes a multiprocessing module
- Multiprocessing is a wrapper around the spawning of CPython processes
- Each process has its own GIL
- However, threads are more lightweight compared to processes
- Specifically, their startup times and memory usages are high
- Also, threads run in different memory spaces
- On the other hand, processes run in the same memory spaces
- Thus, sharing objects between processes becomes hard

### A Lesser Known Problem Caused by the GIL
- The GIL causes a process to run on only one CPU core
- Implying, the threads of that process can only run on one core
- The GIL has another problem that is somewhat related
- Specifically, it prioritizes CPU bound threads over I/O bound threads
	- This is a huge problem, since the GIL also causes:
		- CPU bound threads to run on a single core
		- I/O bound threads to run on multiple cores
		- Meaning, the CPU bound threads block the I/O bound threads
- This contrasts to how the OS handles thread scheduling
	- The OS prioritizes short-running tasks

### When to Use Threads in Python
- Threads should only be reserved for programs concerned with I/O
- A good use case of I/O bound threads are network servers
- For CPU bound threads, consider using:
	- C extension modules
	- multiprocesssing module
- A C extension module could be `numpy`
- Multiprocessing involves creating a separate process

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Python's Definition of the GIL](https://wiki.python.org/moin/GlobalInterpreterLock)
- [What is the GIL?](https://stackoverflow.com/a/1294402/12777044)
- [How the GIL Works for I/O Bound Threads](https://stackoverflow.com/a/36820528/12777044)
- [Recent State of GIL](https://medium.com/hackernoon/has-the-python-gil-been-slain-9440d28fa93d)
- [Python Web Applications and the GIL](https://stackoverflow.com/a/49938239/12777044)
- [Detailed Lecture Slides about Python GIL and Threads](http://www.dabeaz.com/python/GIL.pdf)
- [Multithreaded I/O and CPU Bounded Threads](https://stackoverflow.com/a/55309364/12777044)
- [Multithreading and Multiprocessing in Python](https://stackoverflow.com/a/3044626/12777044)
- [Building a Web Service from Scratch](https://www.youtube.com/watch?v=MCs5OvhV9S4)
