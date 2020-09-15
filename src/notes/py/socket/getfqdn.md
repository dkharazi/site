---
title: "socket.getfqdn"
draft: false
weight: 10
katex: true
---

### `socket.getfqdninfo(name)`
- This function returns the fully qualified domain name of `name`
- If `name` is ommitted, the local machine is assumed
- A fully qualified domain name consists of two parts:
	- The hostname
	- The domain name
- For example, the fqdn for a hypothetical mail server might be `mymail.somecolleget.edu`
- Essentially, an fqdn must identiy the server program that an Internet request is addressed to

### Example of `getfqdninfo`

```python
>>> import socket
>>> socket.getfqdn('google.com')
'ord36s01-in-f14.1e100.net'
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
