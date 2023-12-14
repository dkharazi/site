---
title: "Characteristics of Distributed Systems"
draft: false
weight: 1
katex: true
---

### Key Characteristics of a Distributed System
- Scalability
- Reliability
- Availability
- Efficiency
- Serviceability

### Defining Scalability
- Scalability is the capability of a system to grow and manage increased demand without a loss in performance
- A scalable system can be achieved through *horizontal* or *vertical* scaling
- Reasons for increased demand may include:
    - Increased number of transactions
    - Increased number of new users
- Reasons for losses in performance could include:
    - Network speeds slow when machines move further from each other
    - Not much availability of new servers to balance load
- In general, there are two forms of scaling:
    - Horizontal scaling
    - Vertical scaling
- Horizontal scaling involves adding more machines to your pool of resources
    - This is usually easier to do without downtime
    - This doesn't come with an upper limit
    - A load balancer is a tool used for horizontal scaling
    - Cassandra and MongoDB are two databases that provide exceptional support for horizontal scaling
- Vertical scaling involves adding more resources to your single machine
    - This is usually harder to do without downtime
    - This comes with an upper limit
    - MySQL is a database that provides great support for vertical scaling

### Defining Reliability
- Reliability is the probability a system will fail in a given period
- A reliable system will continue delivering its services, even when one or several of its components fail
- A reliable system can be achieved through creating replicas of components/data and removing single points of failure
- Amazon's shopping cart service is an example of a reliable service
    - A user transaction is never canceled due to a failure of a machine
    - A user's shopping cart will not be lost if its server goes down, and replicas will be created to fill the role of that failed server

### Defining Availability
- Availability is the time a system remains operational over a period of time
- It is a simple percentage of time that the system remains operational under normal conditions
- A reliable system will be highly available, but a highly available system won't necessarily be reliable
    - For example, if a system goes down often but is brought back up almost immediately with replicas, then the availability could be 99% whereas the system would have a low reliability

### Defining Efficiency
- Efficiency is the amount of data delivered in a given time without delays
- An efficient system will deliver large amount of data without delays
    - It will have low latency and high bandwidth
- An efficient system is measured using two measures:
    - Latency
    - Bandwidth
- Latency refers to the response time, or the delay to obtain the first piece of data
    - Measures speed
    - Measured in milliseconds
    - Analogous to length of pipe
    - The ping command measures latency
- Bandwidth refers to the throughput, or the amount of data delivered in a given time
    - Measures capacity
    - Measured in bps, Mbps, etc.
    - Analagous to width of pipe
    - The vnstat command measures bandwidth

### Defining Serviceability
- Serviceability is the simplicity and speed with which a system can be maintained, operated, and repaired
- If a system is less serviceable, then it becomes less available
    - A less available system doesn't necessarily mean the system is less serviceable though
- A serviceable system will mean the following:
    - It is easy to diagnose and understand problems when they occur (e.g. proper monitoring is set up)
    - It is easy to make updates and modifications to the system (e.g. proper CI/CD pipelines are set up)
    - It is easy to operate on a day-to-day basis because failures are minimal (e.g. able to handle changes to other systems well or automatic calls to service center)

### References
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview/B8nMkqBWONo)
- [Wiki for System Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design)
- [Another Wiki for System Design](https://github.com/sharanyaa/grok_sdi_educative)