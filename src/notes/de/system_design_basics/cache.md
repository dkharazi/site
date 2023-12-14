---
title: "Caching"
draft: false
weight: 3
katex: true
---

### Defining Caches
- A cache is a small, faster memory used for storing shorter term and more frequently accessed data
    - Caching is implemented for improving data retrieval times, throughput, and compute costs
- They are used in many layers of computing:
    - Hardware
    - Operating systems
    - Web browsers
    - Web applications
    - Databases
    - Etc.
- Load balancing helps us scale horizontally by adding new resources, but caching will improve the resources we already have
- Caching typically improves efficiency, availability, and scalability 

### Describing Caching for Application Servers
- Creating a cache for application servers will provide a fast local storage for requests
- As a result, clients will receive any frequently requested data more quickly if it exists in the cache
- If there is a load balancer that randomly distributes requests across nodes, where each node has its own cache, then any future identical requests will likely go to different nodes and miss the cache as a result
    - This will increase the number of cache misses
- To overcome this problem, we can implement either of the following:
    - Distributed caches
    - Global caches

### Defining a Distributed Cache
- A distributed cache is a cache shared by multiple app servers in a distributed system
- It is a cache distributed across each application server in a distributed system
- The entire cache is divided up using a consistent hashing function
- As a result, each application server owns part of the cached data
- As an advantage, cache space can be increased easily by adding more nodes to the pool of servers
- As a disadvantage, if an application server fails, then that might mean part of the cached data saved on that server is lost
- A distributed cache can improve the scalability and efficiency of the system

### Defining a Global Cache
- A global cache refers to a cache used by each application server (instead of having individual caches on each application server in the pool)
- This cache is only used to store more frequently requested data, so it is faster than using an original DB store
- In most cases, the global cache will have its own cache server

### Describing a Content Delivery Network
- A CDN is a geographically distributed group of servers 
    - It provides fast delivery of content (e.g. images, HTML pages, files, etc.)
    - It includes caches that are specific to the user's region and directs requests to the cache for data retrieval first
- A typical CDN setup looks like the following:
    1. First a request will ask the regional cache servers for a static file
    2. If the regional cache server has that data, then the CDN will serve that content from that regional cached server
    3. If the regional cache server doesn't have that data, then the CDN will query the back-end servers for the data, store that data in the regional cache server, and return it
- If the system isn't large enough for a CDN, then the regional servers can live on its own subdomain (e.g. https://eu.service.com) using a lightweight HTTP server like Nginx

### Defining Cache Invalidations
- Cache invalidation refers to invalidating data in a cache if that data has changed from the source-of-truth database
- There are three types of cache invalidations:
    - Write-through cache
    - Write-around cache
    - Write-back cache
- Write-through cache involves writing or updating data in both the cache and source-of-truth database 
    - This offers fast retrieval, complete data consistency, and robust to system disruptions
    - However, these write operations are low latency since writes must happen twice
- Write-around cache involves writing to the source-of-truth database but not the cache
    - Here, writes to the cache can be done later, but might be missed if recent reads happen
    - This can be useful for caches that aren't often re-read by avoiding the high latency of many write operations to the cache
    - However, recently written data will create a *cache miss* and will require reads from back-end storage instead, leading to higher latency
- Write-back cache involves writing data to cache instead of the source-of-true database
    - Here, writes to source-of-truth database are done later
    - This offers low latency to write-intensive applications
    - However, there is a risk of data loss of the cache goes down before updating in the source-of-truth database

### Defining Cache Eviction Policies
- Cache eviction policies refer to clearing the cache to make room for new data added more recently
- `First-in-first-out (FIFO)`: Cache discards the oldest file without any regard to how often it was accessed
- `Last-in-first-out (LIFO)`: Cache discards the newest file without any regard to how often it was accessed
- `Least-recently-used (LRU)`: Cache discards the file that hasn't been accessed in the longest period of time
- `Most-recently-used (MRU)`: Cache discards the file that has been accessed in the shortest period of time
- `Least-Frequently-Used (LFU)`: Cache discards the file used least frequently
- `Random Replacement (RR)`: Cache discards the file at random

### References
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview/B8nMkqBWONo)
- [Wiki for System Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design)
- [Another Wiki for System Design](https://github.com/sharanyaa/grok_sdi_educative)