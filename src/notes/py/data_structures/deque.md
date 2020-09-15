---
title: "Deque"
draft: false
weight: 7
katex: true
---

### Defining a Deque
- A queue is a collection that:
	- Is **indexed**
	- Allows **duplicates**
	- Is **linear**
	- Is **FIFO**

### Creating a Deque

```python
>>> from collections import deque
>>> fruits = deque(['apple', 'banana', 'pear'])
>>> print(fruits)
deque(['apple', 'banana', 'pear'])
```

### Adding to a Deque

```python
>>> from collections import deque
>>> fruits = deque(['apple', 'banana', 'pear'])
>>> fruits.append('mango')
>>> print(fruits)
dequeu(['apple', 'banana', 'pear', 'mango'])
```

### Removing from a Deque

```python
>>> from collections import deque
>>> fruits = deque(['apple', 'banana', 'pear'])
>>> fruits.popleft()
>>> 'apple'
>>> print(fruits)
deque(['banana', 'pear'])
```

### Keeping the Last Few Items

```python
>>> from collections import deque
>>> fruits = deque(['apple', 'banana', 'pear'], maxlen=3)
>>> fruits.append('mango')
>>> print(fruits)
deque(['banana', 'pear', 'mango'])
```

### References
- [Using Lists as Queues](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues)
- [Python Cookbook](https://d.cxcore.net/Python/Python_Cookbook_3rd_Edition.pdf)
