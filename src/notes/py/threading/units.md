---
title: "Units of Computation"
draft: false
weight: 3
katex: true
---

### Defining Units of Computation
- A single motherboard can have one or more CPUs
- A single CPU can have one or more cores
- A single non-hyperthreaded CPU core can execute a single thread at once
- A single hyperthreaded CPU core can execute two threads at once
- A single process can have one or more threads
- A single program can have one or more processes

### Illustrating Threads using MS Word
- Opening MS Word will initiate a process
- MS Word automatically saves typed text at certain time intervals
- Meaning, we're able to edit something and save something at the same time
- In this case, we have two spearate threads for editing and saving
- We've observed editing and saving happening simultaneously
- However, this doesn't mean these two threads are being executed in parallel
	- These two threads are being executed in parallel if they are:
		- Executed on two different non-hyperthreaded CPU cores
		- Executed on one hyperthreaded CPU core
	- These two threads are being executed concurrently if they are:
		- Executed on two different non-hyperthreaded CPU cores
		- Executed on one hyperthreaded CPU core
		- Executed on one non-hyperthreaded CPU core

### Illustrating Threads using MS Pain
- Opening MS Paint will initiate a process
- MS Paint constantly reads mouse location and movements
- Meaning, we're able to draw prictures at any point
- The program must give its full attention to the mouse input and draw at the same time
- To do this, two or more threads of a program will appear to execute simultaneously
- This is called *concurrency*
- However, these threads may in fact execute in parallel
	- They would need to run these threads on two separate CPU cores

### Illustrating Threads using the JVM
- A JVM runs in a single process
- Threads in a JVM share the heap belonging to that process
- That is why several threads may access the same object
- Threads share the heap and save their own stack space
- This is how one thread's invocation of a method and its local variables are kept thread safe from other threads
- However, the heap is not thread-safe and must be synchronized for thread safety

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Examples of a Process and Thread](https://www.quora.com/What-is-the-difference-between-the-thread-of-a-process-and-the-child-of-a-process-What-are-some-real-time-examples)
- [Threads and Concurrency](https://stackoverflow.com/questions/1050222/what-is-the-difference-between-concurrency-and-parallelism)
