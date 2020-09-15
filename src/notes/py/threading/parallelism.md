---
title: "Parallelism"
draft: false
weight: 6
katex: true
---

### Introducing Concurrency and Parallelism
- Concurrency refers to the state of two or more threads **performing** at the same time
- Parallelism refers to the state of two or more threads **executing** at the same time
- Meaning, concurrent threads appear to execute simultaneously
- Threads running in parallel are *genuinely* executing simultaneously
- Sometimes the difference in time of execution is unnoticeable
- Typically, concurrency involves one thread being paused while another is being executed
- On the other hand, parallelism involves both threads being executed at the same time
- In CPython:
	- I/O bound threads can be executed in parallel
	- CPU bound threads can block other threads
	- Processes can be executed in parallel

### Describing Concurrency and Parallelism
- Concurrency is a condition that exists when two threads are making progress during a period of time on a system
- Parallelism is a condition that exists when two threads are executing simultaneously during a particular point in time
- Time-slicing (by the OS) is involved in ensuring concurrency

### Illustrating Concurrency and Parallelism
- The following are examples of concurrency:
	- Executing two threads on a single non-hyperthreaded core
	- Loading multiple documents simultaneously while opening new browser tabs
- The following are examples of parallelism:
	- Executing two threads on a single hyperthreaded CPU core
	- Simultaneously executing two different threads on a multicore processor
	- Simultaneously executing two different processes on a multicore processor
	- Graphic computations on a GPU

### Describing Multithreading and Concurrency
- At a hardware level, a CPU can execute threads in parallel for:
	- Hyperthreaded processors
	- Multicore processors
- A CPU core only appears to run threads from a multithreaded program simultaneously
- In other words, a single core runs threads concurrently
- Specifically, each threads gets a few milliseconds of execution on a single core
- Then, the OS schedules another threads to run on that same core for a few milliseconds
- For example, lets say we have the following:
	- A java program with 4 threads
	- A computer with 4 CPU cores
- Most likely, those 4 java threads will truly run in parallel on 4 separate cores
- In this situation, we're assuming those 4 cpu cores are idle beforehand

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Concurrency and Parallelism in Python](https://medium.com/building-the-system/gunicorn-3-means-of-concurrency-efbb547674b7)
- [Haskell Wiki on Concurrency and Parallelism](https://wiki.haskell.org/Parallelism_vs._Concurrency)
- [Concurrency and Parallelism in Java](http://tutorials.jenkov.com/java-concurrency/concurrency-vs-parallelism.html#concurrency-vs-parallelism)
- [Parallelism with Hardware Threads](https://stackoverflow.com/questions/5593328/software-threads-vs-hardware-threads/5593432#5593432)
