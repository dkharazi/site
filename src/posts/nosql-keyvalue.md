---
title: "NoSQL Basics: Key-Value Databases"
date: "2020-02-16"
tags: ["databases"]
draft: false
katex: true
---

In a [previous post](/blog/nosql/) about NoSQL databases, key-value stores were described at a fairly high-level. In this post, we'll dive into more low-level details, which includes features, behavior, and use cases.

*NoSQL Distilled* is a terrific resource for learning about both high-level and low-level details of NoSQL databases. This post is meant to summarize my experience with these databases, along with particular segments from the book. Again, refer to the book for a deeper dive of relational and NoSQL databases.

## Table of Contents
- [Defining a Key-Value Database](#defining-a-key-value-store)
- [Introduction to Redis](#introduction-to-redis)
- [Features of Key-Value Databases](#features-of-key-value-databases)
- [Using Key-Value Databases](#using-key-value-databases)

## Defining a Key-Value Store
A key-value databas is a strongly aggregate-oriented database. Meaning, it consists of many aggregates. In particular, key-value databases generally enforce fewer restrictions and offer increased flexibility, compared to both relational databases and other NoSQL databases. In certain situations, there enforce minor constraints, such as size limits. However, they generally offer more freedom comparatively.

In key-value databases, aggregates are only accessible by means of a key. As a result, values can't be queried and requires a lookup for the entire aggregate. Without the use of a strict schema, any data can be stored under a key in a key-value model.

Essentially, key-value databases are just hash tables. They are useful for storing data that interacts with an API. Indicating, key-value stores are useful for clients who only need to do the following:
- Add a key-value combination
- Get the value of a key
- Store a value for a key
- Delete a key

In key-value databases, values are stored as blobs, which implies these values roughly can be represented as data type. Accessing values associated with a key is both scalable and performant, since there is only one way to access the aggregate. Moreover, understanding what value is stored falls on the shoulders of the application developer.

## Introduction to Redis
Redis doesn't only accept primitive data types for its values. It supports data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams.

Redis supports operations that include appending values to a string, pushing elements to lists, unions, etc. These features make Redis a popular choice when deciding between the many key-item databases. Redis achieves its performance benefits by working with in-memory *datasets*. Datasets can be persisted to disk by either occasionally saving them to disk or logging any executed commands. 

For many of the reasons listed above, Redis is mostly used for storing in-memory data structures, which happens often in caching and messaging system. Its features make Redis a popular choice when deciding between the many key-item databases. Its flexibility and atomic operations separate Redis from the others. For a more detailed explanation of Redis, refer to [their site](https://redis.io/topics/introduction).

## Features of Key-Value Databases
In an earlier post, the benefits of key-value stores were briefly mentioned, which include consistency and flexibility benefits. Specifically, each key doesn't care what data is stored as their values. The values can be JSON, XML, text, etc. The structure of the **data model is flexible**.

The [CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem) implies relational databases ensure strong consistency, which means any reads sent to a relational database will always return the most recently written value. Strong consistency is simpler to achieve with relational databases, since it typically consists of a single node.

On the other hand, key-value databases ensure **eventual consistency**. Recall, if two reads happen after a write in a distributed system, they may access data from two different nodes. Eventual consistency implies those reads will receive the same values shortly after the write. However, eventual consistency also implies those reads may not receive the same values if the reads happen too soon after the write. In this scenario, replica nodes need more time to receive the most-recent value written to the master node.

Key-values databases support workarounds to increase consistency, but some of these solutions decrease write performance. One approach for improving on consistency and write tolerance involves the use of a [quorum](https://redis.io/topics/sentinel). Quorums involve setting a replication factor, which tolerates nodes being down for write operations.

As stated previously, key-value stores can **only be queried via their key**. This constraint is one of the reasons for their excellent performance, but may be problematic if we don't know the key. Therefore, there is an important design consideration that needs to be taken when creating the keys.

Lastly, many key-value databases are **scalable using sharding**. Sharding introduces its own of issues involving problems with availability and complexity. However, these tradeoffs can be tuned using a parameter representing the number of node failures.

## Using Key-Value Databases
The table below outlines a few particular use cases for key-value databases. In particular, these key-value databases use Redis and Riak as representatives of the use cases. However, these two key-value stores have their own separate use cases from each other. Read more details about the Redis use cases in the [Redis docs](https://redis.io/documentation), and Riak use cases in the [Riak docs](https://docs.riak.com/index.html). For more details about individual use cases, refer to the *NoSQL Distilled* text.

| Use-Case                        | Good or Bad? |
| ------------------------------- | ------------ |
| Session caching                 | Good         |
| User profiles                   | Good         |
| Configurations                  | Good         |
| Shopping carts                  | Good         |
| Relationships                   | Bad          |
| Multioperation requests         | Bad          |
| Querying by values              | Bad          |
| Operations applied to many keys | Bad          |

