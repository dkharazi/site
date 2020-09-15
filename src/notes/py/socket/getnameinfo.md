---
title: "socket.getnameinfo"
draft: false
weight: 18
katex: true
---

### `socket.getnameinfo(address, flag)`
- The functions translates a socket address into `(host, port)`
- Depending on the settings of `flag`, the result can contain:
	- A fully-qualified domain name
	- A numeric accress representation in host or port
- The `flag` parameter accepts the following:
	- `NI_NUMERICHOST:` Returns the address in numeric form
	- `NI_NUMERICSERV:` The returned port is a string containing the port number
	- `NI_DGRAM:` Specifies that the service being looked up is UDP instead of TCP

### Example of `getnameinfo`

```python
>>> import socket
>>> addr = ('194.109.137.226', 80)
>>> socket.getnameinfo(addr, 0)
('fang.python.org', 'http')
>>> socket.getnameinfo(addr, NI_NUMERICSERV)
('fang.python.org', '80')
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
