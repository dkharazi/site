---
title: "Echo Client"
draft: false
weight: 31
katex: true
---

### Sample TCP Client

```python
>>> import socket
>>> sock = socket(socket.AF_INET, socket.SOCK_STREAM)

>>> # connect to server on localhost
>>> # listening on port 8881
>>> sv_addr = ('localhost', 8881)
>>> sock.connect(sv_addr)
>>> print('connected to server')

>>> data = """
... A few lines of data
... to test the operation
... of both server and client.
... """

>>> for line in data.splitlines():
...     sock.sendall(line)  # send data to server
...     print('sent: ', line)
...     response = sock.recv(8192)     # receive data...
...     print('received: ', response)  # ...returned...
>>> sock.close()                       # ...from server
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Walkthrough of Python Sockets](https://realpython.com/python-sockets/)
