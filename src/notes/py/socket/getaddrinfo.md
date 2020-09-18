---
title: "socket.getaddrinfo"
draft: false
weight: 9
katex: true
---

### `socket.getaddrinfo(host, port)`
- Translates the host and port argument of a service into a sequence of 5 tuples
- These tuples contain arguments useful for creating a socket to that service
- The functions returns a list of tuples with the following structure:

$$
(family, type, proto, canonname, sockaddr)
$$

- The `family`, `type`, and `proto` elements have values that would be passed to a socket object
- The `canonname` element is a string representing the canonical name of the host
- The `sockaddr` element is a tuple containing a socket address

### Example of `getaddrinfo`

```python
>>> import socket
>>> s = socket.getaddrinfo('example.org, 80)
[(<AddressFamily.AF_INET6: 10>,
  <SocketType.SOCK_STREAM: 1>,
  6,
  '',
  ('2606:2800:220:1:248:1893:25c8:1946', 80, 0, 0)
 ),
 (<AddressFamily.AF_INET: 2>,
  <SocketType.SOCK_STREAM: 1>,
  6,
  '',
  ('93.184.216.34', 80)
 )
]
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
