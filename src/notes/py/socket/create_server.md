---
title: "socket.create_server"
draft: false
weight: 8
katex: true
---

### `socket.create_server(addr, family=AF_INET)`
- Creates a TCP service that is bound to `address`
- This address takes the form of `(host, port)`
- The functions returns a socket object
- This function is typically used for testing with servers
- The address family is `AF_INET` by default

### Example of `create_server`

```python
>>> import socket
>>> addr = ('', 8080)             # accept all interfaces
>>> s = socket.create_server(addr)  # listen on port 8080
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
