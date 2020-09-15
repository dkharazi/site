---
title: "socket.makefile"
draft: false
weight: 24
katex: true
---

### `socket.makefile(mode='r')`
- This function creates and returns a file object `f`
- This file object `f` reads from and/or writes to the socket
- Typically, this refers to the server socket
- This can be used for logging

### Example of `makefile`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)
>>> serv_addr = ('', 25000)  # server socket binds...
>>> sock.bind(serv_address)  # ...to port 25000
>>> sock.listen(5)  # only allow 5 client connections

>>> # Make file for server socket
>>> server, client_addr = sock.accept()
>>> sf = server.makefile("r+b", bufsize=0)

>>> # Make file for client socket
>>> client = socket.create_connection(serv_addr)
>>> cf = client.makefile('r_b', bufsize=0)

>>> sf.write('hello world')
>>> sf.flush()
>>> sf.close()
>>> server.close()
>>> print(cf.read(99))  # does not hang
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Example of Makefile](https://stackoverflow.com/a/6947023/12777044)
