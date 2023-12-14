---
title: "Sharding"
draft: false
weight: 4
katex: true
---

### Defining Data Partitioning
- Data partitioning and data sharding are two techniques used for breaking up large data in a database into smaller parts
    - Data sharding implies the data is spread across multiple computers in a distributed fashion
    - Data partitioning could be spread across multiple computers or one computer
- Sharding improves serviceability, efficiency, availability, and scalability
- After storing a large enough amount of data, storing data on one computer becomes more expensive than storing data on many computers
    - In other words, it becomes cheapter to scale horizontally (by adding more machines to a cluster) than scaling vertically (by beefing up a single server)

### Illustrating Partitioning Methods
- The following approaches are the most popular methods for partitioning large data across smaller databases:
    - Horizontal partitioning
    - Vertical partitioning
- Horizontal partitioning involves storing different rows in partitions across different servers
    - For example, horizontal partitioning could involve storing rows with $state=Ohio$ in a partition on one server and store $state=Alaska$ in another partition on a different server
    - This is called range based sharding, which could lead to unbalanced servers
- Vertical partitioning involves storing different columns in partitions across different servers
    - This is usually simple to implement
    - Unfortunately, a database may need to be repartitioned more often if new rows are added

### Defining Partitioning Criteria
- There are a few common sharding strategies including:
    - Hash-based sharding
    - Range-based sharding
    - Directory-based sharding
    - Geo-based sharding
- Hash-based sharding involves storing data as values into a partition representing a hash ID that is the key
    - It is also known as key-based hashing
    - The data is inputted into a hash function, where the hash ID becomes the key
- Range-based sharding involves storing data based on a range of values
    - For example, range-based partitioning could involve storing rows with $state=Ohio$ in a partition on one server and store $state=Alaska$ in another partition on a different server
    - This will require a lookup table for reading and writing queries, which could impact performance
- Directory-based sharding involves storing a generated key that tracks all data entries via a lookup table
- Geo-based sharding involves partitioning data based on its geography

### Illustrating Common Problems with Sharding
- Most of the issues are caused by having rows being stored on different servers
- Less efficient joins
    - Joins will not be performance efficient since data has to be compiled from multiple servers
    - A workaround is to denormalize the database so that queries don't need to be joined and can be performed from a single table
- Referential integrity
    - Difficult to enforce data integrity constraints (e.g. foreign keys)
    - Referential integrity is enforced by application code
- Rebalancing
    - Data distribution can be unbalanced on servers
    - Hashing methods can alleviate this problem

### References
- [Detailed Sharding Strategies](https://www.knowledgehut.com/blog/web-development/mogodb-sharding)
- [Sharding Strategies in MongoDB](https://www.mongodb.com/docs/manual/core/ranged-sharding/)
- [Grokking the System Design Interview](https://www.educative.io/courses/grokking-the-system-design-interview/B8nMkqBWONo)
- [Wiki for System Design](https://github.com/Jeevan-kumar-Raj/Grokking-System-Design)
- [Another Wiki for System Design](https://github.com/sharanyaa/grok_sdi_educative)