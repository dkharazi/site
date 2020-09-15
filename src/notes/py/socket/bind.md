---
title: "socket.bind"
draft: false
weight: 16
katex: true
---

### `socket.bind(address)`
- This function binds the socket to an address
- Typically, we do this to the server socket
- The format of `address` depends on the address family
- In most cases, `address` needs to be a tuple `(hostname, port)`

### Example of `bind`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)  # server socket
>>> addr = ('', 25000)   # listen on port 25000

>>> print(sock)
<socket.socket
 fd=3, proto=0,
 family=AddressFamily.AF_INET,
 type=SocketKind.SOCK_STREAM,
 laddr=('0.0.0.0', 0)>

>>> sock.bind(addr)
>>> print(sock)
<socket.socket
 fd=3, proto=0,
 family=AddressFamily.AF_INET,
 type=SocketKind.SOCK_STREAM,
 laddr=('0.0.0.0', 25000)>
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
