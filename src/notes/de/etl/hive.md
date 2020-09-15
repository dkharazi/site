---
title: "Hive"
draft: false
weight: 11
katex: true
---

### Describing Apache Hive
- Hive is a software framework
- It provides a SQL-like interface to various databases
- It was built for HBase and HDFS, but can be used for others
- Hive is sometimes referred to as *Hive Hadoop*
- This is because it easily integrates with HBase and HDFS
- Hive is used for:
	- Simplifying the need for writing complex MapReduce jobs
	- Tracks data that is critical
	- Indexing to provide fast queries

### Motivating the Hive Metastore
- In Hive, data is stored in HDFS
- Hive creates definitions for the following:
	- Tables
	- Databases
	- Schemas
	- HQL operations
- These definitions are stored in a metastore
- The metastore is separate from the data
- It could be any RDBMS database
- The HQL operations are:
	- SQL-like operations
	- Translated to pre-implemented MapReduce jobs

### Describing the Hive Metastore
- The metastore consists of relational tables
- These tables contain metadata for objects created in Hive
- The metadata could store the following:
	- Column names
	- Data types
	- Indexes
	- Comments

### Motivating the Comparison between Hive and Spark
- Consider two types of tools used in Hadoop:
	- Execution engines
	- Query optimizers
- These are both individual software frameworks
- An execution engine is required in Hadoop
- A query optimizer is optional
- An execution engine processes jobs related to the data
- A query optimizer optimizes queries before they are processed
	- Sometimes, they optimize queries during processing too

### Comparing Apache Hive and Spark
- Hive is mostly referred to as a query optimizer
	- This is because Hive is essentially a metastore
- Spark is mostly referred to as an execution engine
- Hive uses MapReduce as its execution engine by default
- Spark uses its own execution engine
	- It is an alternative of MapReduce
- Spark offers query optimizers as well
	- It uses catalyst optimizers
	- This uses rule-based and cost-based optimization
- Spark and Hive can be used together
- Specifically, we can include:
	- HDFS as our storage layer
	- Hive's metastore for query optimization
	- Spark's query optimization
	- Either Spark or MapReduce as an execution engine

### Comparing Apache Hive and Pig
- Pig is a procedural language
- Hive is a SQL-like language
- Pig operates on the client side of a cluster
- Hive involves defining tables beforehand
- Pig doesn't have a dedicated metastore
- Hive has a dedicated metastore

### References
- [Basic Walkthrough of Hive](https://www.dezyre.com/article/difference-between-pig-and-hive-the-two-key-components-of-hadoop-ecosystem/79)
- [Details about the Apache Hive Architecture](https://data-flair.training/blogs/apache-hive-architecture/)
- [Wiki on Apache Hive and HiveQL](https://en.wikipedia.org/wiki/Apache_Hive#HiveQL)
- [Comparison of Apache Hive and Spark](https://logz.io/blog/hive-vs-spark/)
- [Interacting with the Hive Metastore](https://spark.apache.org/docs/latest/sql-data-sources-hive-tables.html#interacting-with-different-versions-of-hive-metastore)
- [Defining the Hive Metastore](https://community.cloudera.com/t5/Support-Questions/How-the-hive-metastore-works/td-p/136619)
- [Apache Hive Cookbook](https://www.oreilly.com/library/view/apache-hive-cookbook/9781782161080/ch02s05.html#:~:text=Introducing%20the%20Hive%20metastore%20service,metastore%20to%20store%20HiveQL%20definitions.)
