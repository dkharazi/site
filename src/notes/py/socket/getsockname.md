---
title: "socket.getsockname"
draft: false
weight: 20
katex: true
---

### `socket.getsockname()`
- This function returns the address of the client socket
- Typically, this refers to the client address
- The return value is usually a tuple `(ip_address, port)`
- The client socket must be connected already

### Example of `getsockname`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)  # client socket
>>> client_addr = ('localhost', 25000)
>>> sock.connect(client_addr)
>>> sock.getsockname()
('127.0.0.1', 25000)
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
