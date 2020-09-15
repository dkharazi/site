---
title: "CPU"
draft: false
weight: 4
katex: true
---

### Describing the CPU
- A CPU is a piece of hardware
- It carries out instructions of a computer program
- It does this by performing the following operations:
	- Basic arithmetic
	- Logical operations
	- Control operations
	- I/O operations
- A CPU is divided up into $3$ different parts:
	- Control unit (CU)
	- Arithmetic logic unit (ALU)
	- Registers
- A CPU can only understand instructions in machine code
- A CPU performs these calculations in binary code

### Describing the CPU Cache and Registers
- Data is either stored in:
	- Memory
	- Storage
	- Cache
	- Registers
- A CPU cache is used for storing data used by the CPU
- It reduces the average cost of reading and writing to memory
- A CPU register is used for providing storage to the CPU
- Reading from registers is even faster than reading from cache
- Some registers have specific hardware functions that are read-only or write-only

### Describing the Control Unit
- The control unit is used for controlling the flow of data within the CPU
- Input will come into the CPU via a bus
- Then, output exits the CPU via a bus

### Summarizing the Architecture of the CPU
- `ALU:` Executes all calculation within the CPU
- `CU:` Coordinates how data moves around the CPU
- `Registers:` Allows the CPU to access data very quickly

### Defining the Types of Registers
- `Program Counter`
	- Stores an address of the next and previous instruction in the RAM
- `Memory Address Register`
	- Stores an address of the current instruction in the RAM
- `Memory Data Register`
	- Stores the data sent to and received from RAM
- `Current Instruction Register`
	- Stores the actual instruction that is being decoded and executed
- `Accumulator`
	- Stores results of calculations

### Decribing Components relevant to the CPU
- `Address Bus`
	- Carries the address of the instruction or data
- `Data Bus`
	- Carries data between the CPU and memory
- `Control Bus`
	- Sends control signals
	- These could be memory read or write signals

### References
- [Architecture of Central Processing Units](https://computersciencewiki.org/index.php/Architecture_of_the_central_processing_unit_(CPU))
- [Lecture about the Interaction between the CPU and OS](http://people.cs.ksu.edu/~schmidt/300s05/Lectures/OSNotes/os.html)
