---
title: "Packages"
draft: false
weight: 6
katex: true
---

### Describing Packages
- Packages allow a collection of modules to be grouped under a common package name
- This technique helps resolve namespace conflicts between module names used in different applications
- A package is defined by doing the following:
	- Creating a directory of the same name as the package
	- Creating the file `__init__.py` in that directory
- For example, a package might be organized as follows:

```
Graphics/
├── __init__.py
├── Primitive/
│   ├── lines.py
│   ├── fill.py
│   └── text.py
│       ...
├── Graph2d/
│   ├── __init__.py
│   └── plot2d.py
│       ...
├── Graph3d/
│   ├── __init__.py
│   └── plot3d.py
│       ...
└── Formats/
    ├── __init__.py
    └── gif.py
```

### Relative Imports
- In Python 3, `import` assumes an absolute path
- Relative imports can be used to load submodules contained in different directories of the same package
- A relative import more clearly states your intentions
- A `..` moves out one directory level and drops down into a different package directory
- The following is an example:

```python
# plot2d.py
from ..Primitives import lines
```

- Relative imports can be used to load all the submodules automatically:

```python
# Graphics/__init__.py
from . import Primitive, Graph2d, Graph3d
```

### Reasons for using `__init__.py`
1. Used so modules outside of the package can import modules within the package
	- This is only true for Python 3.2 and older versions
	- This is not necessary for Python 3.3 and newer versions
2. Used for initialization
	- Specifically, it is used for initializing and code that needs to be run beforehand
	- In other words, any module importing the package will always run anything in `__init__.py` first
	- This is true even for modules outside of the package
3. Used for convenience
	- Modules outside of the package can call any function within the package
	- For example, we can do `from package import inner_function`
	- Meaning, we don't need to do `from package.inner_script import inner_function`

### Setting up Packages
- A `setup.py` file makes it easier to install your package on some machine
- The following is an example `setup.py` file:

```python
>>> from setuptools import setup

>>> setup(
...     name='foo',
...     version='1.0',
...     description='A useful module',
...     author='Man Foo',
...     author_email='foomail@foo.com',
...     packages=['foo'],  # same as name
...     install_requires=['bar', 'greek']) # external 
...                                        # packages as 
...                                        # dependencies
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Is __init__.py still Required?](https://stackoverflow.com/a/48804718/12777044)
- [Reasons for __init__.py](https://stackoverflow.com/a/29509611/12777044)
- [Purpose of setup.py](https://stackoverflow.com/a/39811884/12777044)
