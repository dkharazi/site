---
title: "NoSQL Basics: Document Databases"
date: "2020-02-22"
tags: ["databases"]
draft: false
katex: true
---

In a [previous post](/blog/nosql/) about NoSQL databases, document stores were introduced at a fairly high-level. In this post, we'll dive into more low-level details, which includes features, behavior, and use cases.

*NoSQL Distilled* is a terrific resource for learning about both high-level and low-level details of NoSQL databases. This post is meant to summarize my experience with these databases, along with particular segments from the book. Again, refer to the book for a deeper dive of relational and NoSQL databases.

## Table of Contents
- [Defining a Document Database](#defining-a-document-store)
- [Introduction to MongoDB](#introduction-to-mongodb)
- [Features of Document Databases](#features-of-document-databases)
- [Using Document Databases](#using-document-databases)

## Defining a Document Store
A document database is a strongly aggregate-oriented database. Meaning, it consists of many aggregates. In particular, document databases generally enforce fewer restrictions and offer increased flexibility, compared to both relational databases and other NoSQL databases.

Document databases generally enforce similar constraints as key-value databases. However, they can sometimes enforce a few additional limitations, such as:
- Size limits
- What we can place in them
- Data types

Additionally, the fields in document databases can be queried, which contrasts with key-value databases. In other words, we can query specific segments of an aggregate in document databases, whereas we can only query the entire aggregate (belonging to a key) in key-value databases. Lastly, indices can be created based on the contents of an aggregate in a document database.

Obviously, a document database stores documents, which are hierarchical tree data structures. These data structures can be XML, JSON, etc., and they can consist of scalar values, collections, and maps.

At a high level point of view, document databases can be thought of as **queryable** key-value databases. In key-value databases, aggregates are only accessible by means of a key. As a result, values can't be queried and requires a lookup for the entire aggregate. Contrastingly, document databases allow their values to be queried.

Each document in a document database **can include different attribute names**. In other words, the schema for each document can be different across documents. Whereas, each row in a schema must follow the same schema for each table.

## Introduction to MongoDB
MongoDB is a document database that stores data in JSON-like documents. Again, document databases have many similarities with key-value databases. In particular, key-value databases store two objects: a key as a string and a value as a string, list, etc. Whereas, document databases store a single object: a JSON-like document.

Not only does MongoDB allow developers to store their in-memory data structures in a straightforward way, but it also provides a comprehensive suite of tools useful for analytics. For one, MongoDB automatically creates charts of any MongoDB data stored inside the database. It also leverages external BI tools via connectors, such as Tableau, Qlik, and others.

MongoDB also provides features, such as data searches and visualizations, via an intuitive GUI. By doing this, developers are able to manipulate data with visual editing tools.

## Features of Document Databases
In MongoDB world, tables are referred to as collections. Thus, a document is stored in a collection within a database.  In an earlier post, the benefits of document stores were briefly mentioned, which include consistency and flexibility benefits. Specifically, each document doesn't care what data is stored as their values. The values can be JSON, XML, etc. The structure of the **data model is flexible**.

The [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem) implies relational databases ensure strong consistency, which means any reads sent to a relational database will always return the most recently written value. Strong consistency is simpler to achieve with relational databases, since it typically consists of a single node.

On the other hand, document databases ensure **eventual consistency**. Recall, if two reads happen after a write in a distributed system, they may access data from two different nodes. Eventual consistency implies those reads will receive the same values shortly after the write. However, eventual consistency also implies those reads may not receive the same values if the reads happen too soon after the write. In this scenario, replica nodes need more time to receive the most-recent value written to the master node.

Document databases support workarounds to increase availability. One approach for improving availability involves the use of a [replica sets](https://docs.mongodb.com/manual/replication/). A replica set is a group of processes that maintain the same dataset. Replica sets replicate data to provide redundancy and high availability.

By using replica sets, consistency can also be tuned in a way that waits for writes to be replicated to a certain number of replicas. Then, every write will ensure that number of replicas are written, before any value is returned successfully. Similarly to key-value databases, increasing the consistency will slow down writes, since more nodes need to be propagated.

Document databases, such as MongoDB, is implemented using a master-worker architecture, which means all requests are sent to an individual master node. Then, the data from that master node is replicated to its worker nodes. If the master node ever experiences downtime, the worker nodes will vote for a new master node among themselves.

Whereas key-value stores can only be queried via their key, document databases support limited querying capabilities based on attribute values in a document. As an example, MongoDB provides very simple querying oprations for filtering and ordering.

Lastly, many document databases are **scalable using sharding**. Sharding introduces its own of issues involving problems with availability and complexity. However, these tradeoffs can be tuned using a parameter representing the number of node failures.

## Using Document Databases
The table below outlines a few particular use cases for document databases. In particular, these document databases use MongoDB as a representative of the following use cases. Read more details about the MongoDB use cases in the [MongoDB docs](https://www.mongodb.com/use-cases). For more details about individual use cases, refer to the *NoSQL Distilled* text.

| Use-Case                               | Good or Bad? |
| -------------------------------------- | ------------ |
| Event logging                          | Good         |
| Blogging sites                         | Good         |
| Content management systems             | Good         |
| Analytics                              | Good         |
| Applications needing a flexible schema | Good         |
| Multioperation requests                | Bad          |
| Many differently structured documents  | Bad          |
