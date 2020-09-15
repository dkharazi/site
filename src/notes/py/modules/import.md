---
title: "Importing Modules"
draft: false
weight: 1
katex: true
---

### Importing a Module
- Any Python source file can be used as a module
- To load code as a module, use the `import` statement
- The `import` statement does the following:
	1. Creates a new namespace
		- This namespace serves as a container for all the objects defined in the corresponding source file
	2. Executes code within the module
		- It executes module code contained within the newly created namespace
	3. Creates a name within the caller
		- This name refers to the module namespace
		- This name matches the name of the module

### Accessing the Namespace of a Module
- Modules ar first class objects in Python
- Meaning, they can be assigned to the variables
- These variables can be placed in data structures (e.g. lists)
- Technically, a module object is a layer over a dictionary
- This dictionary holds the contents of the module namespace
- This dictionary is available as the `__dict__` of a module

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
