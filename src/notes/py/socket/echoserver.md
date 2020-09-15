---
title: "Echo Server"
draft: false
weight: 30
katex: true
---

### Sample Echo Server

```python
>>> import socket
>>> sock = socket(socket.AF_INET, socket.SOCK_STREAM)

>>> # accepts all available hosts
>>> # listen on port 8881
>>> sv_addr = ('', 8881)
>>> sock.bind(sv_addr)
>>> sock.listen(5)  # only backlog max of 5 connections

>>> # loop waiting for connections
>>> try:
...     while True:
...         client, cl_addr = sock.accept()
...         print('connected from ', cl_addr)
...         while True:
...             received_data = client.recv(8192)
...             if not received_data: break
...             client.sendall(received_data)
...         client.close()
...         print('disconnected from ', cl_addr)
... finally:
...     sock.close()
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Walkthrough of Python Sockets](https://realpython.com/python-sockets/)
