---
title: "socket.recv"
draft: false
weight: 25
katex: true
---

### `socket.recv(bufsize, flag)`
- This function receives data from a socket
- This refers to a client or server receiving data from the other
- The `bufsize` limits how much data can be received
- For example, `socket.recv(1024)` will read at most 1024 bytes
- It will block I/O if no data has arrived

### Example of `recv`

```python
>>> import socket

>>> sock = socket(AF_INET, SOCK_STREAM)
>>> address = ('', 25000)
>>> sock.bind(address)

>>> client, ad = sock.accept()
>>> data = client.recv(100)
>>> print(data)
'hello world'  # client sent 'hello world' beforehand
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Is Receiving Data a Blocking Call?](https://stackoverflow.com/a/7180671/12777044)
