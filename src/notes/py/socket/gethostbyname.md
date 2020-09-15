---
title: "socket.gethostbyname"
draft: false
weight: 11
katex: true
---

### `socket.gethostbyname(hostname)`
- The functions translates a `hostname` to an IPv4 address
- The IP address is returned as a string
- It does not support IPv6

### Example of `gethostbyname`

```python
>>> import socket
>>> socket.getfqdn('www.python.org')
'132.151.1.90'
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
