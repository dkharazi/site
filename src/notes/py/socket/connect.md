---
title: "socket.connect"
draft: false
weight: 17
katex: true
---

### `socket.connect(address)`
- This function connects a client socket to a server socket at `address`
- The format of `address` depends on the address family
- In most cases, `address` needs to be a tuple
- This tuple is formatted as `(hostname, port)`
- A client program sets up its `socket` differently from a server
- A server socket `bind` to a port and `listen`
- A client calls `connect` instead
- This will attach the client socket to the remote address

### Example of `connect`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)  # client socket

# Establishes connection with server socket
# that is listening on port 25000
>>> serv_addr = ('localhost', 25000)
>>> sock.connect(serv_addr)
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Example of Connecting to a Server Socket](https://pymotw.com/2/socket/tcp.html)
