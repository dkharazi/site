---
title: "Hyperthreading"
draft: false
weight: 2
katex: true
---

### Motivating Hyperthreading
- Recall each thread's state is maintained by the following:
	- A single program counter
	- A set of registers
- Classically, each CPU core could only support a single thread of execution
- Meaning, each CPU core only had enough resources (i.e. registers) for a single thread
- Therefore, the CPU would be idle while fetching data from the main memory
	- These are examples of *I/O bound threads*
- This would be especially slow if the data wasn't cached
- Thus, someone had the idea to have two sets of thread states
- Meaning, there were two sets of a program counter and registers

### Describing Hyperthreading
- By doing this, another thread can get work done while another thread is waiting on the main memory
	- This thread could be in the same process or a different process
- This idea of modifying a CPU core to include an extra set of registers and program counter for another thread is called **hyperthreading**
- Hyperthreaded CPU cores *genuinely* support 2 threads per core
- Non-hyperthreaded CPU cores can only support 1 thread per core

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [History of Hyperthreading](https://stackoverflow.com/a/19518207/12777044)
- [Hyperthreading and Hardware Threads](https://stackoverflow.com/questions/5593328/software-threads-vs-hardware-threads/5593432#5593432)
- [Hyperthreading and the Operating System](https://stackoverflow.com/questions/5593328/software-threads-vs-hardware-threads/5593389#5593389)
