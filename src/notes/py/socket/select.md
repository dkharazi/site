---
title: "The selectors Module"
draft: false
weight: 5
katex: true
---

### Describing I/O Multiplexing
- The `selectors` module is used to multiplex processing across multiple input/output streams
- Specifically, it does this without using threads or subprocesses
- Multiplexing refers to observing multiple I/O streams
- We can also block I/O streams as well
- The `selectors` module does the following:
	- Wait for I/O event readiness on multiple files
	- Supports file stream registration
	- Waiting for I/O events on streams with optional timeouts

### API for the `BaseSelector` Class
- `register`
	- Registers a file object for selection
	- Monitors the file for I/O events
- `select`
	- Waits until some registered file becomes ready or the timeout expires
	- Returns a list of `(key, events)` tuples
	- The elements of these tuples represent ready files

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for selectors API](https://docs.python.org/3/library/selectors.html)
