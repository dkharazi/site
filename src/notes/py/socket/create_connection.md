---
title: "socket.create_connection"
draft: false
weight: 7
katex: true
---

### `socket.create_connection(address)`
- Connect to a TCP service that is listening on `address`
- This address takes the form of `(host, port)`
- The functions returns a socket object
- This function is typically used for clients creating sockets

### Example of `create_connection`

```python
>>> import socket
>>> addr = ('localhost', 3591)  # connect to localhost
>>> s = socket.create_connection(addr)  # on port 3591
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Example of create_connection Function](https://pythontic.com/modules/socket/create_connection)
