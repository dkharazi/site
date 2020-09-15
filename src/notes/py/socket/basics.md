---
title: "Basics of Networking"
draft: false
weight: 4
katex: true
---

### Defining Networking Protocols
- Python supports two interenet protocols:
	- TCP
	- UDP
- **TCP protocol** is a reliable connection-oriented protocol
	- Used to establish a two-way stream of communication between machines
	- Uses three-way handshake
	- More secure
	- Heavyweight
	- Slower communication
- **UDP protocol** is a connectionless protocol
	- Machines send a receive packets without establishing a connection
	- Used for streaming
	- Less secure
	- Lightweight
	- Faster communication
- Consequently, the TCP protocol is more popular

### Defining Sockets
- Both network protocols are handled through a programming abstraction known as a socket
- A **socket** allows a program to do the following:
	- Receive incoming connections
	- Make outgoing connections
	- Send and receive data
- A socket is represented as an unnamed file used by the system
- In other words, a socket is an endpoint of a connection between a client and a server
- An endpoint is defined as:
	- An address (IP address + port)
	- A number of connections that will be backlogged until connections are refused
	- Other properties
- Before two machines communicate, both must create a socket object
- Essentially, sockets allow us to exchange information between processes across a network

### Defining Ports
- The machine receiving a connection must bind its socket object to a known port number
- Typically, this machine is the server
- A port is a 16-bit number in the range of $0-65535$
- A port is managed by the operating system
- A **port** is used by clients to uniquely identify servers
- Ports $0-1023$ are reserved by the system
- FOR TCP, only one application can listen on the same port at a time

### Summarizing the Network and Transport Layers
- An IP address belongs to the network layer
- A port number belong to the transport layer
- An IP address is used to identify the destination machine within a network
- A port number is used to identify the destination service within the system
- First, an IP Packet is received at the destination IP address
- Then, a port number is used by the OS to deliver the packets to the correct process
- A port number will be specified in the transport header within the IP packet
- Without the port number, the OS will have no way of knowing which process the packets should be delivered to

### Why use Ports instead of Process IDs?
- You may be thinking we could use process IDs instead of ports
- You may be asking why did we create an entirely new concept when:
	- Process ids are unique
	- They identify which process is running on a machine
- However, we needed to create ports for the following reasons:
	- Process ids aren't stable
		- They can change at any time (e.g. reboot, crashes, etc.)
	- Running applications couldn't listen on multiple ports
		- Applications listen on ports ($80$, $443$, etc.)
		- If the system was bound to a process id, it couldn't listen to different ports for different protocols]
	- Process ids are inconsistent
		- If our application is running on different machines (i.e. different IP addresses), then the OS for those machines would almost always choose different process ids for the applications to run on

### Establishing a TCP Connection
- Typically, a server is considered a TCP server if it is responsible for handling TCP connections
- There are two different sockets created for the following:
	- Receiving connections
	- Performing subsequent communication with the client
- Specifically, the `accept()` system call returns a new socket object
- This socket object is actually used for the connection
- This allows a server to manage connections from many clients simultaneously
- This involves the following steps using the `socket` module:

![tcpconnection](/img/tcp.png)

### Example Server Program using `socket`

```python
>>> import socket, time

>>> s = socket(AF_INET, SOCK_STREAM) # Create a TCP socket
>>> s.bind(('', 8888))               # Listen on port 8888
>>> s.listen(5)                      # Allow 5 connections

>>> while True:                      # Starts web service
...     client, addr = s.accept()    # Get a connection
...     c = 'Connection received'
...     client.send(c.encode('ascii'))
...     client.close()
```

### Example Client Program using `socket`

```python
>>> import socket
>>> s = socket(AF_INET, SOCK_STREAM) # Create a TCP socket
>>> s.connect(('localhost', 8888))   # Connect to server
>>> tm = s.recv(1024)                # Receive 1024 bytes
>>> s.close()
```

- Notice, text sent across the network needs to be encoded to ascii characters
- In Python 3, all strings are unicode by default
- Therefore, we need to call `encode('ascii')`

### References
- [Python Essential Reference](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Details about How Sockets are Represented](https://unix.stackexchange.com/a/116616)
- [Can Two Applications Listen to the Same Port](https://stackoverflow.com/a/1694148/12777044)
- [What do Sockets look like?](https://stackoverflow.com/a/4994055/12777044)
- [Why are Ports Necessary?](https://www.quora.com/Is-it-necessary-for-a-service-running-on-as-server-bind-to-a-port-number)
- [Why use Ports instead of Process IDs?](https://softwareengineering.stackexchange.com/a/301113)
