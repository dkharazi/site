---
title: "Data Locality in Spark"
date: "2019-05-12"
tags: ["databases"]
draft: false
katex: true
---

This post provides an overview of different types of data locality in Spark. In the coming posts, we'll dive deeper into more low-level concepts. Meaning, we'll explore the Spark internals using examples. Then, we'll explore some examples of running spark applications in a cluster with a [standalone](/blog/spark-standalone/) cluster manager, [YARN](/blog/spark-yarn/) cluster manager, and [Mesos](/blog/spark-mesos/) cluster manager.

## Defining Data Locality
In Spark, tasks are run as close to the location of data as possible. Meaning, executors are selected based on their proximity to requested data within the cluster. This notion is referred to as *data locality*. Since the selection of executors is affected, data locality influences job scheduling as a consequence. To find optimal executors closest to the data, Spark maintains a list of preferred executors for each partition.

Data locality can have a major impact on the performance of Spark jobs. If data and the code operating on it are together, then computation tends to be fast. The goal of data locality is to minimize the read and write speed from the CPU to memory. Data locality is achieved if each HDFS block is loaded in the RAM of the same node where the HDFS block lives. Specifically, data transfer can be avoided if the Spark scheduler runs tasks on executors where these blocks are present.

## Levels of Data Locality
The locality level indicates which type of data access is performed. There are five levels of data locality:
1. `PROCESS_LOCAL`
	- Execute a task on the same executor as the cached data
2. `NODE_LOCAL`
	- Execute a task on the same node as the cached data, but on different executors
	- Generally, this level is slower than the previous one
	- However, sometimes there is waiting for available executors
3. `RACK_LOCAL`
	- Execute a task on the same rack as the cached data, but on different executors and nodes
	- Generally, this level is even slower
	- This is because even more data is moved through the network
4. `NO_PREF`
	- There isn't any preference for data locality
5. `ANY`
	- Execute a task on any executor on any rack, node, or executor
