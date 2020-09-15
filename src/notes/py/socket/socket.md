---
title: "Basics of socket API"
draft: false
weight: 6
katex: true
---

### Introducing `socket`
- The `socket` module provides access to the standard socket interface
- It is used to handle many different networking protocols
- Most importantly, it handles the IP, which includes TCP and UDP protocols
- This module is very low-level
	- It provides direct access to the network functions provided by the operating system 

### Describing Address Families
- Some `socket` functions require the specification of an *address family*
- This family specifies the network protocol being used
- The following constants are defined for this purpose:
	- `AF_BLUETOOTH:` Bluetooth protocol
	- `AF_INET:` IPv4 protocols (TCP; UDP)
	- `AF_INET6:` IPv6 protocols (TCP; UDP)
	- `AF_NETLINK:` Netlink Interprocess Communication
	- `AF_PACKET:` Link-level packets
	- `AF_UNIX:` UNIX domain protocols
- Obviously, `AF_INET` and `AF_INET6` are the most popular

### Describing Socket Types
- Some `socket` functions require the specification of a *socket type*
- The socket type specifies the type of communication to be used within a given protocol family
- The following constants are defined for this purpose:
	- `SOCK_STREAM:` TCP Connection
	- `SOCK_DGRAM:` UDP Datagrams
	- `SOCK_RAW:` Raw socket
	- `SOCK_RDM:` Reliable datagrams
- Obviously, `SOCK_STREAM` and `SOCK_DGRAM` are the most popular

### Describing `AF_INET` Addressing
- In order to perform any communication on a socket, we need to specify a destination address
- The form of the address depends on the address family of the socket
- Internet applications using IPv4 are specified as a tuple
- Specifically, this tuple looks like `(host, port)`
- The following are some examples:

```
('www.python.org', 80)
('66.113.130.182', 25)
```

- If *host* is the empty string, then it accepts any address
- This is typically used by servers when they want any client to connect
- Python uses DNS to resolve the host name into an IP address
- Meaning, we may get different IP addresses each time when specifying a host like `www.python.org`

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
