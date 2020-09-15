---
title: "Multithreading Scenarios"
draft: false
weight: 5
katex: true
---

### Illustrating Scenarios with Multithreading
- A single non-hyperthreaded CPU core can execute:
	- One single-threaded process at once
- A single hyperthreaded CPU core can execute:
	- Two single-threaded processes at once
	- One double-threaded process at once
- Two non-hyperthreaded CPU cores can execute:
	- Two single-threaded processes at once
	- One double-threaded process at once
- Two hyperthreaded CPU cores can execute:
	- Four single-threaded processes at once
	- Two double-threaded processes at once
	- Two single-threaded processes and one double-threaded process at once

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Defining the Architecture of Hyperthreading](https://stackoverflow.com/questions/200469/what-is-the-difference-between-a-process-and-a-thread/19518207#19518207)
- [The Interaction of the OS for Multithreaded Threads](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html)
- [Illustrating Single-Threaded and Multi-Threaded Stacks](https://github.com/angrave/SystemProgramming/wiki/Pthreads%2C-Part-1%3A-Introduction#how-does-the-threads-stack-work)
- [Multithreading in Python](https://stackoverflow.com/questions/44793371/is-multithreading-in-python-a-myth)
- [Concurrency with Multithreading in Java 8](https://winterbe.com/posts/2015/04/07/java8-concurrency-tutorial-thread-executor-examples/)
- [Submitting Runnables in Java](http://tutorials.jenkov.com/java-util-concurrent/executorservice.html#submit-runnable)
