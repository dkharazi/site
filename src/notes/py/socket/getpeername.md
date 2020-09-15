---
title: "socket.getpeername"
draft: false
weight: 21
katex: true
---

### `socket.getpeername()`
- This function returns the remote address to which the socket is connected
- Typically, this refers to the server address
- The return value is usually a tuple `(ip_address, port)`
- The client socket must be connected already

### Example of `getpeername`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)  # client socket
>>> serv_addr = ('localhost', 25000)
>>> sock.connect(serv_addr)
>>> sock.getpeername()
('127.0.0.1', 25000)
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
