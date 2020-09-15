---
title: "socket.sendto"
draft: false
weight: 29
katex: true
---

### `socket.sendto(data, (host,port))`
- This function sends data from a socket
- This refers to a client or server receiving data from the other
- The `data` represents the data sent
- The `data` needs to be a string
- For example, `socket.sendall('hello')` will send `'hello'` to a server socket
- This function returns the number `n` of bytes sent to the server
- The `n` may be lower than `len(data)` if these is no space in the server socket's buffet
- The `host` and `port` refer to the detination host and port
- It will block I/O until space appears

### Example of `sendto`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)

>>> # connect with server at ip
>>> # address 32.21.671.11 on port 25000
>>> address = ('32.21.671.11', 25000)
>>> sock.sendto('hello world', address)  # send to server
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
