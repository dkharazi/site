---
title: "Compilers and Interpreters"
draft: false
weight: 7
katex: true
---

### Defining Bytecode
- Bytecode is used in Java, Python, and other languages
- However, not all bytecode is created equal
- Bytecode is a generic term for an intermediate language used by compilers and interpreters
- For example, Java bytecode contains information about primitive data types
- On the other hand, Python bytecode does not contain this information
- As a result, the Python virtual machine (PVM) is slower than the Java virtual machine (JVM)
- Specifically, the bytecode in the PVM takes longer to execute than the bytecode in the JVM

### Differentiating between Compilers and Interpreters
- An interpreter is a program that executes a given language to receive some desired output
	- The program is a function, the language is our input, and some expected outcome is our output
	- This program is typically machine code
	- This language can be bytecode, other machine code, etc.
	- This language can be high-level or low-level
```text
source language, input --> | interpreter | --> output
```
- A compiler is a program that translates a source language into a destination language
	- The program is a function, the source language is our input, and the destination language is our output
	- This program can be written in many different languages
	- This source language is usually some higher-level language
	- This destination language is usually some lower-level equivalent
```text
source language --> | compiler | --> destination language
```
- Roughly, a compiler is nothing more than a language translator
- Roughly, an interpreter is just a CPU emulator
- A CPU is an interpreter of machine code

### Compilation and Interpretation of CPython
1. A CPython compiler translates source code into CPython bytecode
	- The source code is a .py file
	- The bytecode is a .pyc file
	- The CPython compiler is written in Python and C
	- The bytecode is cached in a pycache folder
	- The program will run this bytecode unless any changes are made to the program
2. A CPython interpreter executes bytecode in a Python virtual machine (PVM)
	- The interpreter is a precompiled C program
	- Meaning, the interpreter is machine code
	- The bytecode is read in to the interpreter similar to how a text file is read in C
	- Meaning, the Python program is never actually converted into machine code
	- Instead, the machine code (i.e. interpreter) executes the Python program (as bytecode)
	- Thus, the machine code (i.e. interpreter) returns the desired output of the program

### Comparing the PVM and JVM
- During run-time, the bytecode is interpreted by a JVM interpreter within the JVM
- Before interpretation, a JIT compiler compiles the bytecode into machine code within the JVM
- Unlike Python, Java is able to do this because Java is statically-typed
- Therefore, type checking has already happened during compile-time
- Returning to the illustration of an interpreter, the JVM interpreter looks like the following:
```text
bytecode, input --> | JVM interpreter | --> output
```
- Since the data types of input are known, a JIT compiler can be used at run-time
- Therefore, the JVM compilation process looks like the following:
```text
bytecode --> | JIT compiler | --> machine code
```
- With the addition of the JIT compiler at run-time, the JVM interpreter now looks like this:
```text
machine code, input --> | JVM interpreter | --> output
```
- Bytecode is platform dependent
- Machine code is platform dependent
- Specifically, there is different machine code for different processors
- This is why the JIT compiler exists within the JVM and can't be compiled beforehand

### Highlighting Differences in Compile and Run Time
- At compile time:
	- Language syntax is checked
	- Data types are checked for statically-typed languages
- At run time:
	- Computations such as addition, division, etc.
	- Data types are checked for dynamically-typed languages

### Summarizing Static and Dynamic Languages
- Generally, a dynamically-typed language executes many common programming behaviors at runtime
- A statically-typed language is able to execute these behaviors at compile time
- This is because statically-typed languages give the compiler much more information (e.g. variable types, etc.)
- Specifically, the compiler has information about the structure of the program and its data
- With this information, the compiler will be able to optimize both memory access and computations
- As a result, statically-typed languages are generally faster than dynamically-typed languages

### Challenges of Writing Compilers for Python
- Essentially, the bytecode of a statically-typed language will run faster compared to the bytecode of a dynamically-typed language
- This is because bytecode of statically-typed languages still need to determine information like variable types
	- Statically-typed languages have already done this
	- Dynamically-typed languages need to do this because a user could pass a variable as a list, integer, etc. at runtime
- To effectively compile dynamically-typed languages:
	1. Enforce a static structure of data
	2. Infer the types of all variables, classes, etc.
- A compiler of a dynamically-typed language could enforce the above conditions
- However, implementing these additional checks and inferences leads to larger bytecode
- Meaning, running the bytecode becomes slower

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Python in a Nuteshell](https://www.arp.com/medias/13916546.pdf)
- [Understanding Differences between Compilers](https://softwareengineering.stackexchange.com/a/269878)
- [Python as an Interpreted Language](https://stackoverflow.com/a/2998544/12777044)
- [Differences between Python and Java Bytecode](https://stackoverflow.com/a/1732383/12777044)
- [Compilation Strategies of Python Implementation](https://stackoverflow.com/a/2998750/12777044)
- [Compiled and Interpreted Languages](https://stackoverflow.com/a/3265602/12777044)
- [Why isn't there a Python Compiler?](https://softwareengineering.stackexchange.com/a/243274)
- [How Python Bytecode Runs in CPython](https://stackoverflow.com/q/19916729/12777044)
- [Describing the JIT Compiler](https://stackoverflow.com/a/48334180/12777044)
- [Difference between Compilers and Interpreters](https://stackoverflow.com/a/2377288/12777044)
- [Confusion between Compilers and Interpreters](https://stackoverflow.com/a/21475819/12777044)
- [Lecture Notes about Compilers](https://cs.lmu.edu/~ray/notes/introcompilers/)
- [Definitions of Compilers and Interpreters](https://softwareengineering.stackexchange.com/a/111471)
- [Interpreters and Machine Code](https://softwareengineering.stackexchange.com/a/300608)
- [Runtime and Compile Time](https://stackoverflow.com/a/846421/12777044)
- [Challenges of Compilers for Dynamically Typed Languages](https://softwareengineering.stackexchange.com/a/181947)
