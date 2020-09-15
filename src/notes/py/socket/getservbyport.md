---
title: "socket.getservbyport"
draft: false
weight: 14
katex: true
---

### `socket.getservbyport(port, protocolname)`
- This function translates a port number and protocol name to an internet service name
- This is the opposite of `getservbyname`
- The `port` represents the port number (e.g. 21)
- The `protocolname` represents tbe protocol name (e.g. tcp)
- The `protocolname` should be `tcp` or `udp`

### Example of `getservbyport`

```python
>>> import socket
>>> socket.getservbyport(21, 'tcp')
'ftp'
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
