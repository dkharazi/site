---
title: "Threads and Processes"
draft: false
weight: 1
katex: true
---

### High-Level Understanding of a Process
- A process is an instance of a computer program that is being executed
- A thread is a basic unit of CPU utilization
- A task is a set of instructions allocated to memory
- A thread is what the CPU actually runs
- A process is what gets loaded in memory
- A process will include one or more threads
- This is because threads are what the CPU actually runs (not processes)
- Tasks and processes are used synonymously sometimes

### Defining the Structure of a Process
- The process model is based on two independent concepts:
	1. Resource grouping
	2. Execution

`Resource Grouping`

- In terms of resource grouping, a process is something that groups related resources together
- Specifically, a process has the foklowing:
	- An **address space** containing program text and data
	- Information about **open files**
	- Information about **child processes**
	- And other resources

`Execution`

- In terms of execution, a process refers to a primary thread of execution
- A thread of execution refers to a set of threads
- A process doesn't perfectly translate to a set of threads, but we can think of it that way for now
- Specifically, a thread has the following:
	- A **program counter** that keeps track of which instruction to execute next
	- A set of **registers** that hold its current working variables
	- A **stack** that contains the thread execution history

### Summarizing Processes and Threads
- A process refers to a program that is being executed
- A child process is a process created by another process (i.e. the parent process)
- A thread is the basic unit to which the operating system allocates processor time
- A thread can execute any code from the process
- Once a process is created by the operating system, a single thread will be initialized within that process
- This initialized thread is called the **primary thread**
- Each process can create additional threads from any of its threads

### Differentiating between Processes and Threads
- A major difference between a thread and process is:
	- A process runs in a separate memory space
		- Compared to other processes
	- A thread runs in a shared memory space
		- Compared to other threads of the same process
- Essentially, processes are used to group resources together
- On the other hand, threads are the entities scheduled for execution on the CPU
- For a process, the operating system:
	- Allocates memory for its instricutions and data
- For a thread, the operating system:
	- Handles scheduling
	- Allocates CPU time

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Lecture Slides about the Modern Process and Thread](http://www.math-cs.gordon.edu/courses/cs312/lectures/pdf/usingOS.pdf)
- [Threads and Concurrency](https://stackoverflow.com/questions/1050222/what-is-the-difference-between-concurrency-and-parallelism)
- [Illustrating the Thread Context](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html)
- [Hyperthreading and Hardware Threads](https://stackoverflow.com/questions/5593328/software-threads-vs-hardware-threads/5593432#5593432)
- [Hyperthreading and the Operating System](https://stackoverflow.com/questions/5593328/software-threads-vs-hardware-threads/5593389#5593389)
- [Defining the Architecture of Hyperthreading](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/19518207#19518207)
- [Defining a Process and a Thread](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/200543#200543)
- [Another Definition of a Process](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/200475#200475)
- [Illustrating a Process and Thread](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/49841764#49841764)
- [Difference between Threads, Tasks, and Processes](https://stackoverflow.com/questions/3042717/what-is-the-difference-between-a-thread-process-task/3051328#3051328)
