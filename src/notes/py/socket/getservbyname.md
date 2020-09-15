---
title: "socket.getservbyname"
draft: false
weight: 13
katex: true
---

### `socket.getservbyname(servicename, protocolname)`
- This function translates an internet service name and protocol name to a port number
- The `servicename` represents the service name (e.g. ftp)
- The `protocolname` represents tbe protocol name (e.g. tcp)
- The `protocolname` should be `tcp` or `udp`

### Example of `getservbyname`

```python
>>> import socket
>>> socket.getservbyname('ftp', 'tcp')
21
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
