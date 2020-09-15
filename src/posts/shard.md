---
title: "Database Sharding"
date: "2020-01-06"
tags: ["databases"]
draft: false
katex: true
---

Query optimization, indexing, and NoSQL solutions are all popular scalability strategies when designing server-side systems. If those options aren't enough, then sharding may be the next best strategy for optimizing or scaling a monolithic RDBMS. For more information about techniques used in indexing, refer to the [previous post](/blog/hash/).

Sharding refers to the process of separating a large table into smaller subsets, which are spread across multiple servers. These smaller chunks are called *shards*.

In particular, sharding is commonly used for horizontally scaling a monolithic RDBMS. Implying, a shard is a horizontal data partition, where each partition contains a subset of the larger table. When the data within a table grows too large for a single server, we can use sharding to store subsets of data on multiple nodes.

Other reasons for implementing sharding relates to limitations in memory capacity and compute power. When data grows very large in an unsharded database, any maintenance and query performance becomes slow. Note, vertical scaling has its own limitations in reference to adding resources to support database operations.

As stated previously, shards are stored on database nodes within a cluster. A [MySQL cluster](https://www.mysql.com/products/cluster/scalability.html) automatically partitions tables (or shards) across nodes. By doing this, MySQL enables the database to scale horizontally on cheap, commodity hardware.

With the improvements of sharding mentioned previously, we can generally say that sharding improves the scalability and availability of an RDBMS. Specifically, separating a much larger table into smaller shards will increase the amount of compute capacity for serving incoming queries. Therefore, we'll end up with faster query response times and index builds. Similarly, creating a strategy involving horizontal scaling increases the storage capacity within the database. With respect to cost, a network of smaller and cheaper servers may be more cost effective in the long term than maintaining one big server.

Additionally, sharding can offer increased availability. During downtime, the data within an unsharded database is inaccessible. In a sharded database, nodes experiencing downtime will only ensure downtime for its shards. Meaning, any nodes that remain online will be available for read and write operations.

Essentially, sharding can be implemented by taking partitions and storing them on separate nodes. Then, we need to think about how to shard our data, which is usually performed on a column. In most cases, we shard a table on the primary key. For example, we could shard a dataset on a $\text{userid}$ or $\text{locid}$.

Typically, optimizing join operations is a commonly experienced problem when separating our data into shards. Specifically, queries will perform poorly when performing join operations, since the join needs to gather data from different shards across the network, which is costly.

In addition, there needs to be a flexible way for adding and removing shards within a cluster. Consistent hashing can help solve this problem, which is mentioned in the [previous post](/blog/hash/). Specifically, consistent hashing can be used for indexing data into shards. Alternatively, a [hierarchical sharding protocol](https://www.youtube.com/watch?v=5faMjKuB9bc) also can help reduce poor performance of this problem. Lastly, we can optimize the performance of queries on shards by by creating an index on each shard.

For more a more detailed explanation about sharding, refer to [this video](https://www.youtube.com/watch?v=5faMjKuB9bc) or [this article](https://blog.yugabyte.com/how-data-sharding-works-in-a-distributed-sql-database/). For a more detailed analysis of sharding techniques, refer to [this post](http://blog.gaurav.im/2016/11/17/sharding-databases-a-quick-trick/).
