---
title: "Multithreading"
draft: false
weight: 4
katex: true
---

### Defining Multithreading
- **Multithreading** is the idea of a programming language supporting the ability for us to program and manage our own threads
- Java and C++ are some examples of programming languages that support multithreading
- Python does not support multithreading for CPU bound threads
- Typically, the purpose of a multithreaded program is to execute our code concurrently
- Therefore, multithreading is limited by our hardware
	- Since our hardware is what provides us with the capability of processing threads concurrently
- If we only have one CPU with one core, then multithreading will not achieve anything
- If we have multiple CPU cores, then multithreading can achieve parallelism
- Multithreading is a program paradigm
- Hyperthreading is a hardware capability

### Running Threads in Parallel
- There are only two ways to run threads in parallel:
	1. Ensuring our CPU core is hyperthreaded
	2. Adding CPU cores to our system
		- We can do this by adding more CPU cores to a single CPU
			- **i.e.** multicore processor
		- Or by adding more CPUs to our system
			- **i.e.** multiprocessor

### Running Threads Concurrently
- The operating system schedules each thread to be executed on a particular CPU core
	- The operating system is very efficient at scheduling these threads
	- It slices each thread in chunks in an attempt to fairly distribute CPU execution time across threads waiting to finish executing
	- Typically, this efficient scheduling causes threads to appeear to be executing simultaneously
	- This is referred to as *concurrency*

### Illustrating the OS Executing Threads Concurrency
- Let's say we've written a program in some programming language
- Afterwards, we execute that program
- By default, a program will create one process with one thread during execution
- However, certain programming languages allow us to manually program and manage our own threads
	- In other words, they support multithreading
	- Scheduling is still done by the operating system
	- However, we're able to organize code into individual threads
	- Then, we can tell our program what to do with those threads once they are executed

### Multithreading in Python
- The default implementation of Python is CPython
- CPython offers multithreading
- In fact, CPython uses system threads
- However, CPython can't use more than one core at a time
- This is due to the Global Interpreter Lock (GIL)
- CPython threads still work for I/O-bound tasks
- However, CPU-bound threads won't experience any benefit from multithreading
- Specifically, CPU bound tasks can cause deadlocks and race conditions
- Many CPython libraries solve this issue by using C extensions to bypass the GIL
- They are able to do this because these extensions bypass the CPython interpreter
- Instead, they use a very efficient C compiler

### Details about the GIL and CPU-Bound Threads
- In order to make the dynamic memory management in CPython work correctly, then the GIL prevents multiple threads from running CPython code at the same time
- This is because CPython's dynamic memory management is not threadsafe
- Specifically, it can have deadlocks and race conditions when multiple threads access the same resources at the same time
- This is only true for CPU-bound threads
	- Since I/O-bound threads never need to reach the CPython interpreter
- The GIL was a compromise between the two extremes of:
	- Not allowing multithreaded code
	- And having slow dynamic memory management
- Other implementations of Python don't have a GIL
	- **e.g.** Jython
	- **e.g.** PyPy
	- **e.g.** Cython
- This is because they are built on platforms that handle dynamic memory management differently

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Defining the Architecture of Hyperthreading](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/19518207#19518207)
- [The Interaction of the OS for Multithreaded Threads](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html)
- [Illustrating Single-Threaded and Multi-Threaded Stacks](https://github.com/angrave/SystemProgramming/wiki/Pthreads%2C-Part-1%3A-Introduction#how-does-the-threads-stack-work)
- [Multithreading in Python](https://stackoverflow.com/questions/44793371/is-multithreading-in-python-a-myth)
- [Concurrency with Multithreading in Java 8](https://winterbe.com/posts/2015/04/07/java8-concurrency-tutorial-thread-executor-examples/)
- [Submitting Runnables in Java](http://tutorials.jenkov.com/java-util-concurrent/executorservice.html#submit-runnable)
