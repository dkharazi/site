---
title: "Heapq"
draft: false
weight: 9
katex: true
---

### Defining a Heapq
- A heapq is a queue that is automatically sorted
- Essentially, a heapq can be viewed as a Python list that:
	- Supports queue-like functions
	- Automatically sorts itself using a heapsort sorting algorithm
- Specifically, a heapq will resort once elements are pushed and popped from the queue
- For this reason, a heapq is referred to as a priority queue
- A heapq is a queue that:
	- Is **ordered**
	- Is **indexed**
	- Is **mutable**
	- Allows **duplicates**

### Creating a Heapq

```python
>>> import heapq
>>> ages = [56, 48, 20]
>>> heapq.heapify(ages)
>>> print(ages)
[20, 48, 56]
```

### Accessing a Heapq

```python
>>> import heapq
>>> ages = [56, 48, 20]
>>> heapq.heapify(ages)
>>> print(ages[3])
56
```

### Adding to a Heapq

```python
>>> import heapq
>>> ages = [56, 48, 20]
>>> heapq.heappush(ages, 38)
>>> print(ages)
[20, 38, 56, 48]
```

### Removing from a Heapq

```python
>>> import heapq
>>> ages = [56, 20, 48]
>>> youngest = heapq.heappop(ages)
>>> print(youngest)
20
```

### Finding Smallest from a Heapq

```python
>>> import heapq
>>> ages = [48, 56, 20]
>>> young = heapq.nsmallest(2, ages)
>>> print(young)
[20, 48]
```

### Finding Largest from a Heapq

```python
>>> import heapq
>>> ages = [48, 20, 56]
>>> old = heapq.nlargest(2, ages)
>>> print(old)
[56, 48]
```

### References
- [Heapq Documentation from the Python Standard Library](https://docs.python.org/3/library/heapq.html)
