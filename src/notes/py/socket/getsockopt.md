---
title: "socket.getsockopt"
draft: false
weight: 22
katex: true
---

### `socket.getsockopt(level, option)`
- This function returns the value of a socket option
- The `level` defines the level of the option
	- It is `SOL_SOCKET` for socket-level options
	- It is `IPPROTO_IP` for protocol-related options
- The `optname` selects a specific option
- The following are the socket options:
	- `SOL_SOCKET:` The option is defined at the socket level
	- `IPPROTO_IP:` The option is defined at the IP protocol level

### Some Socket Options for `SOL_SOCKET`

| Option Name   | Value | Description                          |
| ------------- | ----- | ------------------------------------ |
| SO_ACCEPTCONN | 0,1   | Is the socket accepting connections? |
| SO_ERROR      | int   | Gets error status.                   |
| SO_KEEPALIVE  | 0,1   | Is there a keepalive probe?          |
| SO_TYPE       | int   | Gets socket type.                    |

- For more options, see [the list in Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)

### Some Socket Options for `IPPROTO_IP`

| Option Name    | Value | Description                           |
| -------------- | ----- | ------------------------------------- |
| IP_HDRINCL     | int   | Gets IP header included with data.    |
| IP_RECVDSTADDR | 0,1   | Receive all IP options with datagram. |
| IP_TOS         | int   | Gets type of service.                 |
| IP_TTL         | int   | Gets time-to-live.                    |

- For more options, see [the list in Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)

### Example of `getsockopt`

```python
>>> import socket
>>> sock = socket(AF_INET, SOCK_STREAM)
>>> sock.getsockopt(sock.SOL_SOCKET, sock.SO_REUSEADDR)
1
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Details about Socket Options](https://stackoverflow.com/a/27024759/12777044)
