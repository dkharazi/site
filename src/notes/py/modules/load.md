---
title: "Module Loading"
draft: false
weight: 5
katex: true
---

### Describing Module Loading
- Python can import four categories of modules:
	- Code written in Python (`.py` files)
	- C or C++ extensions
	- Packages containing a collection of modules
	- Built-in modules written in C
		- These are linked into the Python interpreter
- When looking for a module, the interpreter searches each of the directories in `sys.path` for the following files
- They are listed in search order:
	1. A directory `foo` defining a package
	2. `foo.pyd` (compiled extensions)
	3. `foo.pyo`
	4. `foo.pyc`
	5. `foo.py`

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
