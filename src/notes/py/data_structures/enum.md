---
title: "Enum"
draft: false
weight: 6
katex: true
---

### Defining an Enumeration
- An enum is a class used for mapping a set of values to given constants
- An enum has a data structure that:
	- Is **unordered**
	- Is **indexed**
	- Is **immutable**
	- Allows **duplicates**

### Use-Cases of an Enum
- An enum is used to:
	- Enumerate a value
	- Specify a canonical name
- Enumerating values is important for creating categorical variables
- Canonical names important for enforcing design standards
- For example, suppose a user specifies certain color values throughout the code
- We may want a may to enforce these color values to reflect the possible values that could be entered
- In our code, we may want to let the user know a value can't be `Green`, or `green`, or `G`
- Rather, we may want to let the user know the value is `Color.green`

### Creating an Enum

```python
>>> import enum
>>> class RainbowColors(enum.Enum):
...        green = 1
...        red = 2
...        blue = 3
>>> print(RainbowColors)
<enum 'RainbowColors'>
```

### Accessing an Enum

```python
>>> print(RainbowColors(2))
<RainbowColors.red: 2>
>>> print(RainbowColors.red)
<RainbowColors.red: 2>
>>> print(RainbowColors.red.name)
'red'
>>> print(RainbowColors.red.value)
2
```

### References
- [Enum Documentation from the Python Standard Library](https://docs.python.org/3/library/enum.html)
- [Examples of an Enum](https://pymotw.com/3/enum/index.html)
- [Use-Cases of an Enum](https://stackoverflow.com/a/37601645/12777044)
