---
title: "socket.recvfrom"
draft: false
weight: 26
katex: true
---

### `socket.recvfrom(bufsize)`
- This function receives data from a socket
- This refers to a client or server receiving data from the other
- The `bufsize` limits how much data can be received
- For example, `socket.recv(1024)` will read at most 1024 bytes
- This function returns a tuple `(data, (ipaddress, port))`
- The `data` represents the data received
- The `ipaddress` and `port` are the IP address and port number of the sender
- This is useful with datagram sockets
- This is because we can differentiate senders when receiving data from many senders
- It will block I/O if no data has arrived

### Example of `recvfrom`

```python
>>> import socket

>>> sock = socket(AF_INET, SOCK_STREAM)
>>> address = ('', 25000)
>>> sock.bind(address)

>>> client, ad = sock.accept()
>>> data, addr = client.recvfrom(100)
>>> print(data)
'hello world'  # client sent 'hello world' beforehand
>>> print(addr)
('47.229.39.71', '18092')  # client IP address and port
```

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for socket API](https://docs.python.org/3/library/socket.html)
- [Python in a Nutshell](https://www.arp.com/medias/13916546.pdf)
- [Is Receiving Data a Blocking Call?](https://stackoverflow.com/a/7180671/12777044)
