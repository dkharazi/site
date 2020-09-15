---
title: "The Main Program"
draft: false
weight: 3
katex: true
---

### Describing Methods for File Execution
- There are two way in which a source file can execute:
	1. Executing code in its own namespace
		- This is executed as a library module
		- This refers to executing `import` statement
	2. Executing code as the main program
		- This occurs when we supply the program as the script name to the interpreter
		- This refers to executing `python3 spam.py`

### Describing Method 2: Executing as `__main__`
- Each module defines a variable `__name__`
- This variable contains the module name
- Programs can examine this variable to determine the module in which they are executing
- The top-level module of the interpreter is named `__main__`
	- Programs specified on the command line run inside the `__main__` module

```python
# Check if running as a program
>>> if __name__ == '__main__':
...     # Yes
...     statements
... else:
...     # No, I must have been imported as a module
...     statements
``` 

- Typically, libraries use this technique for including optional testing or example code
- For example, suppose we're developing a a module
- We can put code for testing the features of our library inside the `if` block
- This code won't run for users who import our library

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
