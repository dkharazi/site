---
title: "Hadoop HDFS"
draft: false
weight: 6
katex: true
---

### Describing Distributed File Systems
- A file system is a system of files used for storage
- A distributed file system is any file system that:
	- Provides access of files from multiple hosts
	- Provides access of files via a computer network
- A distributed file system is managed locally or remotely

### Differentiating between File Systems and Databases
- A file system stores unstructured, unrelated data
- Databases store structured, related data
- Databases have more overhead compared to file systems
- File systems tend to be more lightweight
- This is because they aren't structured
- Implying, they don't have as much overhead
- On the other hand, databases have the following overhead:
	- Schemas
	- Built-in operations for indexing, searching, etc.
- Data files in databases are formatted in its own way
- This provides querying capabilities and other operations specific to some system
- The data files in a file system are formatted in its original, raw format

### Examples of Locally Managed DFS
- HDFS
- Ceph
- Lustre

### Examples of Remotely Managed DFS
- HDFS
- AWS S3
- GCS
- Microsoft Azure

### Defining HDFS
- HDFS is a component of the Hadoop ecosystem
- HDFS assumes that a file can't be changed once its written
- HDFS can be used as a standalone DFS
- Meaning, we can plug in different computing engines into HDFS
- For example, we can use Spark or MapReduce as a computing engine
- Then, we can use HDFS as our storage
- HDFS has the following benefits:
	- Designed to run on commodity hardware
	- Is highly fault-tolerant
	- Designed to be deployed on cheaper hardware
	- Provides high throughput access to application data
	- Suitable for applications with large datasets

### Defining the Goals of HDFS
- Handles hardware failure
- Provides streaming access to datasets
- Handles very large datasets
- Portable from one platform to another platform
- Executes code on the machine on which the data is stored
	- Meaning, we don't need to load data on the machine where the code lives
	- Moving small code to the machine with large processing capacity makes sense

### References
- [Wiki of Distributed File Systems](https://en.wikipedia.org/wiki/Comparison_of_distributed_file_systems)
- [Design of HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html)
- [Moving Data in HDFS](https://stackoverflow.com/a/40602021/12777044)
- [Defining the Hadoop Ecosystem](https://www.researchgate.net/figure/Apache-Hadoop-Ecosystem_fig3_307619823)
