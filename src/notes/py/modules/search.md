---
title: "Module Search Path"
draft: false
weight: 4
katex: true
---

### Describing the Module Search Path
- When loading modules, the interpreter searches the list of directories in `sys.path`
- The first entry in `sys.path` is typically an emptry string `''`
- This refers to the current working directory
- Other entries in `sys.path` may consist of:
	- Directory names
	- Zip files
	- Archive files
	- etc.
- Suppose we created two modules `foo.py` and `bar.py`
- Then, we placed them in a zip file called `modules.zip`
- The file could be added to the Python search path:

```python
>>> import sys
>>> sys.path.append('modules.zip')
>>> import foo, bar
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
