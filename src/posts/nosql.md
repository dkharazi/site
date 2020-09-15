---
title: "Relational and Non-Relational Databases"
date: "2020-02-09"
tags: ["databases"]
draft: false
katex: true
---

Ensuring a stable form of data storage is an important decision for any business. The data in an organization can last much longer than many of its applications. Unfortunately, there isn't a single database that solves the needs for every business. Each database has its own set of properties, and an organization can utilize those properties to find the database (or databases) that best solves their distinctive problem.

*NoSQL Distilled* is a terrific resource for learning about both high-level and low-level details of NoSQL databases. This post is meant to summarize my experience with these databases, along with particular segments from the book. Again, refer to the book for a deeper dive of relational and NoSQL databases.

## Table of Contents
- [Evaluating Databases with CAP Theorem](#evaluating-databases-with-cap-theorem)
- [Distribution and Replication](#distribution-and-replication)
- [Power of Relational Databases](#power-of-relational-databases)
- [Disadvantages of Relational Databases](#disadvantages-of-relational-databases)
- [What is NoSQL](#what-is-nosql)
- [Purpose of NoSQL Databases](#purpose-of-nosql-databases)
- [Properties of NoSQL Databases](#properties-of-nosql-databases)
- [Introducing Data Models in Databases](#introducing-data-models-in-databases)
- [Types of Aggregate Data Models](#types-of-aggregate-data-models)
- [Use Cases of Database Types](#use-cases-of-database-types)

## Evaluating Databases with CAP Theorem
At a high level, there are a few categories that a database can fall under. First, there is the relational database, which is one we're all most likely familiar with. Relational databases are organized into tables with columns and rows. They ensure transactions are *ACID* and enforce many restrictions using a schema. ACID is a somewhat contrived acronym that will be explained in greater detail later.

Additionally, there are the non-relational databases, which offer increased flexibility by embracing schemaless data. Unlike relational databass, there are many different flavors of non-relational databases, such as key-value, document, column-family, and graph databases. As stated previously, each of these databases are schemaless, and the graph database is the only one ensuring ACID transactions.

![SqlvsNoSQLDatabases](/img/sqlnosql.svg)

After introducing a few modern-day database options, we now should think about how to evaluate databases that are best suited for our organization's needs. To do this, we'll consider the CAP thorem, which assesses the tradeoffs between three metrics:
- **C**onsistency
- **A**vailability
- **P**artition-tolerance.  

At a high level, the CAP theorem states we can't choose two of the above metrics without sacrificing the third metric. A partition refers to an interruption in communication within a distributed system. Thus, partition indicates if any node goes down, then the cluster will still be up. Availability ensures a request to any node that is up will return a valid response. Consistency implies a request to any node that is up will return the same response. For more information about the CAP theorem, refer to [this IBM article](https://www.ibm.com/cloud/learn/cap-theorem).

By observing the image below, we'll notice relational databases maintain both availablity and consistency. On the other hand, NoSQL databases can maintain either consistency and partition-tolerance, or they can maintain availability and partition-tolerance. If we're certain that our organization only ever will need one server, then we won't need to worry about partition-tolerance, and we can prioritize both availability and consistency. On the other hand, if we're certain our database will require more than a single server, then we may need to choose between consistency and availability.

![CAPTheorem](/img/captheorem.svg)

The CAP theorem has become controvertible over the years. In practice, these tradeoffs have become more loose for some of these databases. Using Cassandra as an example, the inclusion of a quorum almost allows the amount of consistency to be configurable. Over time, the lines separating the databases from each other are becoming blurred. Many of these databases can be made to work in any situation, but we should choose a database that is built for our requirements. A more detailed explanation about other considerations can be found [here](https://www.youtube.com/watch?v=v5e_PasMdXc).

## Distribution and Replication
In NoSQL databases, there are two basic styles of distributing data. First, there is sharding, which has been mentioned in a [previous post](/blog/shard/). Sharding distributes different data across multiple servers, so each server becomes the single source for its subset of data. In other words, sharding involves splitting up a dataset into sections, then storing each section on its own server.

Replication is the second form of distributing data. Replication copies data across multiple servers, so there are multiple copies of the same dataset stored in more than one place. In other words, replication involves duplicating a dataset on another server. A system may use neither of these techniques, one of these techniques, or both of these techniques.

To go one level deeper, there are two forms of replication. First, a master-worker form of replication promotes one node as the authoritative copy. In this architecture, the master typically handles writes, while the workers handle reads. Consequently, this choice causes master-worker architectures to be eventually consistent, since it takes time for the written values to be updated on the workers for reading.

Secondly, a peer-to-peer form of replication doesn't use a master. Instead, it allows writes to any node, so each node coordinates with each other to synchornize their copies of data. In general, master-worker replication reduces the chance of update conflicts, but peer-to-peer replication avoids loading every write onto a single node, becoming a single point of failure.

Most systems will need to choose one form of replication over the other form. Many distributed systems promote a combination of both sharding and replication. Also, most of the terminology mentioned above is defined in the NoSQL Distilled textbook, so please refer to it for more details.

## Power of Relational Databases
Before introducing a few significant properties and use cases for relational databases, we should briefly review why we're intersted in writing to a database in the first place. Most architctures have two general ways of storing data: writing to memory or writing to disk. Keep in mind, data remains persistent by writing to disk.

In other words, any data stored away in memory is lost if we lose power or observe any hardware issues. For these reasons, data needs to be written to disk in order to ensure persistence. Any data written to disk is commonly accessible to us via files in a file system on our operating system, or via a database.

Since both approaches are ways to access data on disk, one of the first questions to be asked is *can we just keep our data in the file system, rather than writing it to a database?*

This is a valid question. However, an organization typically will require the use of a database, which relates to the increased flexibility of a database in storing large formats, compared to file systems.

In relational databases, a request sent to the database is known as a transaction. Relational databases control users accessing its data via transactions. With the use of transactions, a relational database can undo a change if that change causes an error, without creating issues for other transactions being performed simultaneously. In particular, transaction are run in an isolated environment, allowing for other transactions to execute concurrently.

Relational databases support manipulation of multiple rows in a single transaction. For relational databases, these transactions are ACID transactions:
- **A**tomic
- **C**onsistent
- **I**solated
- **D**urable

Atomicity implies an entire transaction will fail even if only one part of a transaction fails, and there won't be any changes committed to the the database afterwards. Consistency implies any successful transaction will take the database from one valid state to another valid state. Isolation implies any concurrent operations would have the same results if they were executed serially. Durability implies any transaction must remain committed even in the event of a crash or power loss.

The major takeaway from the **ACID** acronym is atomicity. Meaning, updates to multiple rows from different tables would be updated as a single operation, which implies an operation either succeeds or fails in its entirety. By enforcing this rule, concurrent operations are isolated from each other, so they'll never create a partial update.

Across many different types of relational databases, they maintain a fairly **standard model**. In general, transactions operate fairly uniformly, regardless of which relational database is selected. In addition, the SQL dialects for most relational databases are fairly interchangeable. For example, Microsoft SQL Server and MySQL both include fairly similar querying languages.

## Disadvantages of Relational Databases
Technically, a relational database consists of tuples. A tuple is synonymous with rows, but are organized as name-value pairs. A relation is referred to as a set of tuples. All SQL operations in relational databases consume and return relations. These relations represent output of mathematically elegant relational algebra.

This restriction creates *impedance mismatch*. Meaning, the choice of using algebraic operations introduces **limitations in flexibility**, such as rows unable to contain certain data structures (e.g. lists and sets). To retrieve a collection of values in a relational database, we need to perform joins and apply complicated operations to tuples. In other words, algebraic operations provide simplicity and elegance, but also creates limitations.

Most importantly, relational databases can produce **limitations in usable resources**. At a high level, increasing the growth of data either requires scaling upwards or outwards. Needless to say, scaling upwards has an actual cut-off point, since a machine can only grow so large.

On the other hand, scaling outwards is possible, depending on the type of database. For relational databases, scaling outwards can become difficult in the long run, since relational databases aren't built for scaling outwards. Specifically, they aren't built to run on clusters. Methods that feel like workarounds, like sharding, can be performed, but these can become very difficult to manage in the long run.

## What is NoSQL
The notion of NoSQL databases has been around since the 90s. Since then, databases have come a long way and almost seem unrecognizable. Thus, NoSQL databases were more easily distinguishable when they were first introduced, but the line separating SQL and NoSQL databases has blurred.

Today, the term *NoSQL* has mostly become a buzzword, since it is harder to classify since its origin. Obviously, NoSQL databases are mostly driven by the **absence of SQL**. To illustrate my previous point regarding a more blurred line, a NoSQL database like Cassandra has CQL. Although CQL is far from supporting the flexibility of standard SQL, a basic querying language still is offered in Cassandra nonetheless.

Even today, most NoSQL databases are **schemaless**. Meaning, they're given the flexibility and freedom to specify data values without types in most cases. As stated earlier, NoSQL databases are mostly driven by the need to run on clusters. On the other hand, relational databases favor consistency and availability, rather than partition-tolerance.

## Purpose of NoSQL Databases
As hinted at previously, the clearest benefits of NoSQL databases are scalability and productivity related to application development. In most cases, developers use in-memory data structures that aren't naturally designed as a relational data model. If these developers want to store their data in a relational database, they'll need to map their in-memory data structures to a relational data model.

Too much effort on application development can be spent during this step. This mapping process can be eliminated entirely by introducing a NoSQL database offering a more comparable data model. Making this replacement **simplifies any interaction between the application and database**, which results in less code to write, debug, and change over time. In summary, developers can more easily store their in-memory data structures in NoSQL databases, since many of them don't enforce as strict layouts.

In comparison to relational database, NoSQL databases are **built for scaling large data**. For example, the architecture of Cassandra was designed around concepts such as consistent hashing, partitioning, and replication. Furthermore, quickly capturing increased amounts of data can be more expensive with relational databases, since relational databases are designed to run on a single machine. Indicating, the additional hardware for being able to hold this data becomes quite expensive.

On the other hand, a more economical alternative involves storing and computing large amounts of data on large clusters of smaller and cheaper machines. Since the majority of NoSQL databases explicitly are designed to run on clusters, they become the preferred option.

## Properties of NoSQL Databases
Each NoSQL database has its own unique set of properties. However, they generally share a few high-level properties with each other. As mentioned earlier, NoSQL databases **don't support ACID** transactions. The exception to this is a graph database. To use another example from earlier, NoSQL databases introduce flexibility from being **schemaless**.

To go into greater detail, schemas are defined in the inital stages of a relational database. Whereas, they are not defined in NoSQL databases. By doing this, NoSQL sacrifices data integrity for increased flexibility and speed of development. Schemaless databases are generally useful when we're not entirely certain about the structure of the data being stored, which happens often in the early stages of a project.

Schemaless databases also are generally useful when we're dealing with nonuniform data. Meaning, certain rows may be associated with their own set of columns. Potentially, this can happen when storing a sparse matrix. Lastly, schemaless databases are generally useful when there isn't enough time (or a high enough priority) to think about the exact structure of data. Specifically, this may occur when creating adhoc reports.

Without using a strict schema, any data can be stored under a key in a key-value model. A document model essentially emulates this approach, since it doesn't enforce any additional (major) restrictions on the document. Column-families also ensures any data can be stored in its model, but forces data values to be stored under a column-family. Alternatively, graph databases store any data as nodes and edges with properties.

There is also a **greater range of relationships** offered by NoSQL databases, compared to relational databases. Most of these relationships are better suited for application developers.

When choosing one NoSQL database over the other, a developer needs to recognize the distinctive set of requirements for his or her application. Some of these requirements will align with a key-value database, and others will align with a graph database. Generally, the type of application can guide the developer to a NoSQL database. For example, recommendation systems are better suited for graph databases, whereas session caching is better suited for key-value databases.

Lastly, most NoSQL database offer some form of **materialized views**, which are supported in relational databases as *virtual tables*. They aren't handled the same way as views in relational databases, but they essentially achieve the same goal. In NoSQL databases, materialized views refer to precomputed and cached queries. These queries are typically assembled using a Map-Reduce or Spark job, since many of these NoSQL databases don't support a querying langauge.

![NoSQLProperties](/img/nosqlproperties.svg)

## Introducing Data Models in Databases
Regardless of whether a database is relational or non-relational, each database supports a *data model*. A data model refers to the low-level structure of data being stored in a database. The structure of a data model impacts how we interact with the data in a database.

A relational databases is known to use a relational data model. As hinted at earlier, a relational data model consists of relations and tuples. Again, relations represent tables, and tuples represent rows intuitively. Indicating, a relational model stores its data as tuples.

In comparison to NoSQL data models, tuples are rather inflexible data structures, since one tuple can't be nested within another tuple. To retrieve nested records, tuples expect algebraic operation to be performed.

At a high level, a relational model doesn't allow lists of values to be stored in a field, since tuples can't be nested. This restriction is the reason for the relational model's inflexibility. For example, application developers have a difficult time storing their in-memory data structures as a relational model, since they need to go through extra effort to convert their data structures.

Alternatively, *aggregates* support nesting, meaning they can store lists of values. In the book NoSQL Distilled, the term aggregate is used to refer to:

> A collection of related objects that we wish to treat as a unit. In particular, it is a unit for data manipulation and management of consistency.

Aggregate-oriented databases have their obvious consequences. In general, aggregate-oriented databases don’t have ACID transactions across multiple aggregates. Instead, each aggregate is manipulated individually. Meaning, atomic manipulation of multiple aggregates must be handled in the actual application code.

![RelationAggregate](/img/relationaggregate.svg)

## Types of Aggregate Data Models
After introducing the overlapping properties of NoSQL databases, we'll now explore the specifics of certain types of NoSQL databases. Various forms of NoSQL databases were briefly mentioned in the earlier segments of this post, which include key-value, document, column-family, and graph databases.

A key-value and document are strongly aggregate-oriented databases, meaning they consist of many aggregates. In particular, key-value databases generally enforce fewer restrictions and offer increased flexibility, compared to both relational databases and other NoSQL databases. In certain situations, there are very minor constraints, such as size limits. However, they generally offer more freedom comparatively.

In key-value databases, aggregates are only accessible by means of a key. As a result, values can't be queried and requires a lookup for the entire aggregate.

Document databases generally enforce similar constraints as key-value databases. However, they can sometimes enforce a few additional limitations, such as:
- Size limits
- What we can place in them
- Data types

Document databases remain schemaless. Additionally, the fields in document databases can be queried, which contrasts with key-value databases. In other words, we can query specific segments of an aggregate in document databases, whereas we can only query the entire aggregate (belonging to a key) in key-value databases. Lastly, indices can be created based on the contents of an aggregate in a document database.

As mentioned previously, there are workarounds that blur the line between document and key-value databases. For example, certain key-value databases, such as Redis, can hack together something that feels like indexing by separating aggregates into lists. However, we generally expect to access aggregates using a key in a key-value database. Whereas, we generally expect to access aggregates using some form of querying based on values in a document database. Keep in mind, this query may or may not include a key.

Column-family databases impose even more limitations on the structure of an aggregate. Specifically, column-family databases organize their columns into column families, which was mentioned earlier as well. Each column needs to be assigned to a particular column family. Then, each column can be accessed via a column family. In particular, accessing a column-family will return each of the columns associated with that column family.

The above details about NoSql databases only scratch the surface of their structure and behavior. For a more detailed explanation about key-value databases, refer to [this post](/blog/nosql-keyvalue/). For a more detailed explanation about document databases, refer to [this post](/blog/nosql-document/). Then, refer to [this post](/blog/nosql-column/) for details about column-family databases. Finally, for a deeper dive into graph databases, refer to [this post](/blog/nosql-graph/).

## Use Cases of Database Types

The table below consists of a few types of databases, along with their use cases. For even more use cases, refer to [this AWS article](https://aws.amazon.com/products/databases/).

| Database Type | Use Cases                                                          | Database           |
| ------------- | ------------------------------------------------------------------ | ------------------ |
| Relational    | Traditional applications; basics relationships; general reporting  | MySQL; PostgreSQL  |
| Key-Value     | High-traffic applications; storing configurations; session caching | Redis; Riak        |
| Document      | Content management; user profiles; prototypes; big data analytics  | MongoDB; Cassandra |
| Graph         | Complex relationships; fraud detection; recommendation engines     | Neo4j              |

For a more detailed description about the differences between column-oriented databases and column-family databases, refer to [this post](https://stackoverflow.com/a/38793956/12777044). For a useful point about the behavior of join operations in NoSQL databases, refer to [this post](https://stackoverflow.com/a/1996579/12777044). For a more detailed comparison between NoSQL databases, refer to [this article](https://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis). For informative presentations about NoSQL databases, refer to [this video](https://www.youtube.com/watch?v=qI_g07C_Q5I) and [this video](https://www.youtube.com/watch?v=Y6Ev8GIlbxc).

