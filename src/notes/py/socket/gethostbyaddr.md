---
title: "socket.gethostbyaddr"
draft: false
weight: 12
katex: true
---

### `socket.gethostbyaddr(ip_address)`
- The functions translates an ip address into `(hostname, aliaslist, ipaddrlist)`
- `Hostname` is the primary host name responding to the given `ip_address`
- `Aliaslist` is a list of alternative host names for the same address
- `Ipaddrlist` is a list of IPv4/v6 addresss for the same interface on the same host

### Example of `gethostbyaddr`

```python
>>> import socket
>>> socket.gethostbyaddr('192.0.43.8')
('43-8.any.icann.org', ['8.43.0.192.in-addr.arpa'],
 ['192.0.43.8'])
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
