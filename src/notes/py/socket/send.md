---
title: "socket.send"
draft: false
weight: 27
katex: true
---

### `socket.send(data)`
- This function sends data to a connected socket
- This refers to a client or server sending data to the other
- The `data` represents the data sent
- The `data` needs to be a string
- For example, `socket.send('hello')` will send `'hello'` to a server socket
- This function returns the number `n` of bytes sent to the server
- The `n` may be lower than `len(data)` if these is no space in the server socket's buffet
- It will block I/O until space appears

### Example of `send`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)

>>> # connect with server at ip
>>> # address 32.21.671.11 on port 25000
>>> address = ('32.21.671.11', 25000)
>>> sock.connect(address)
>>> sock.send('hello world')  # send to server
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
