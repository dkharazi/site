---
title: "5-Layer Network Model"
draft: false
weight: 4
katex: true
---

### Defining OSI Model
1. Application Layer
    - **Relevant Device:** Browser/user application
    - **Protocol:** HTTP
2. Transport Layer
    - **Relevant Device:** Firewall
    - **Protocol:** TCP/UDP
    - **Relevant Data Unit:** TCP/UDP port number
    - Each computer's operating system manages its own TCP/UDP ports
    - A firewall device can blacklist (or whitelist) requests made to particular ports on a computer within its network
3. Internet Layer
    - **Relevant Device:** Router
    - **Protocol:** IPv4/IPv6
    - **Relevant Data Unit:** IP address
    - Each router has its own unique public IP address
    - A router maps each device on its network to one unique private IP address
    - The private IP address of a device (that has been assigned by the router) can change, but it must be unique within the private network
4. Data Link/Physical Layer
    - **Relevant Device:** Switch/Modem
    - **Protocol:** Ethernet
    - **Relevant Data Unit:** MAC address
    - Every computer has its own unique MAC address that can't be changed

### Defining Processes
- A process is the instance of a computer program
- A process is made up of one or more threads
- Multiple threads can execute instructions concurrently
- The operating system manages a process

### Defining Ports
- A port represents an endpoint used for outside communication
- At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service
- Specifically, it is an application-level construct representing an endpoint on a host
- The operating system manages any process bound to a port

### References
- [Defining Ports in Computer Networking](https://en.wikipedia.org/wiki/Port_(computer_networking))
- [Defining Processes in Computing](https://en.wikipedia.org/wiki/Process_(computing))
