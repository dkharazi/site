---
title: "Context Management"
draft: false
weight: 11
katex: true
---

### Describing Context Management
- A *context manager* refers to any object that can be executed using the `with` statement
- The general syntax is as follows:

```python
with context [as var]:
    statements
```

- `__enter__()` is invoked when the `with` statement executes
- The value returned by this method is placed into the variable specified as `[as var]`
- It is then passed through to the remainder of the `with` block
- `__exit__()` is invoked at the end of a `with` statement
- Primarily, the context management interface allows for simplified field resource control on objects involving system state
- By implementing this interface, objects can safely clean up resources when execution leaves a context
- Examples of objects involving system state are:
	- Open files
	- Network connections
	- Locks

### Summarizing Special Methods

| Method      | Description                        |
| ----------- | ---------------------------------- |
| `__enter__` | Called when entering a new context |
| `__exit__`  | Called when leaving a context      |

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
