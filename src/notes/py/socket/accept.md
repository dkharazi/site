---
title: "socket.accept"
draft: false
weight: 15
katex: true
---

### `socket.accept()`
- This function accepts a connection from a client
- This function returns the tuple `(conn, address)`
- A `conn` is a new socket object
- This object can be used to send and receive data on the connection
- An `address` is the address of the client socket
- Note, `conn` captures the information from `address`

### Example of `accept`

```python
>>> import socket
>>> conn, address = socket.accept()

>>> print(conn)
<socket.socket
 fd=4, proto=0,
 family=AddressFamily.AF_INET,
 type=SocketKind.SOCK_STREAM,
 laddr=('127.0.0.1', 25000),  # server address
 raddr=('127.0.0.1', 63906)>  # client address

>>> print(address)
('127.0.0.1', 63906)
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
