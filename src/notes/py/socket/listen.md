---
title: "socket.listen"
draft: false
weight: 23
katex: true
---

### `socket.listen(backlog)`
- This function starts listening for incoming connections
- Typically, this refers to the server socket
- The `backlog` represents a maximum number of pending connections the operating system should queue before connections are refused
- The `backlog` value should be between $1-5$

### Example of `listen`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)
>>> serv_addr = ('', 25000)  # server socket binds...
>>> sock.bind(serv_address)  # ...to port 25000
>>> sock.listen(5)  # only allow 5 client connections
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
