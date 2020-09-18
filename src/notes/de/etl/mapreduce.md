---
title: "MapReduce"
draft: false
weight: 9
katex: true
---

### Describing Hadoop MapReduce
- MapReduce is a component of the Hadoop ecosystem
- It is a software framework
- It is used for processing vast amounts of data
- It ensures data is processed:
	- In a distributed manner
	- In parallel
	- On large clusters
	- Using cheap hardware
	- Reliably
	- In a fault-tolerant manner

### Distributed Computing with MapReduce
- MapReduce is consists of two functions:
	- A `map` function
	- A `reduce` function
- In Hadoop:
	- MapReduce is a distributed computing framework
	- HDFS is a distributed storage framework
- As a result, the `map` and `reduce` functions run on many different computers

### Defining the MapReduce Algorithm
1. A `map` function
	- Takes in data from each `DataNode` as input
	- Outputs key-value pairs
		- A key is a piece of data from the `DataNode`
		- A value is an aggregation from the `DataNode`
	- Each value only measures an aggregation of an individual `DataNode`
2. A `reduce` function
	- Takes in key-value pairs for each `DataNode`
	- Outputs updated key-value pairs from all `DataNodes`
		- A key is a piece of data from all `DataNodes`
		- A value is an aggregation from all `DataNodes`

### Illustrating MapReduce by Counting Words

![mapreduce](../../../img/mapreduce.png)

### Describing Components of MapReduce Implementation
- A MapReduce application consists of two main services:
	- One `JobTracker`
	- Some `TaskTrackers`
- A `JobTracker` has the following properties:
	- It acts like a master-server
	- It communicates with the `NameNode`
	- It ensures the execution of submitted jobs is completed
- A `TaskTracker` has the following properties:
	- It communicates with the `DataNodes`
	- It is responsible for performing the actual service
	- Meaning, it performs mapping, shuffling, and reducing tasks

### Defining the MapReduce Workflow
1. Client submits an application to the `JobTracker`
	- The `JobTracker` separates the application into tasks
	- These tasks include the `map`, `reduce`, `shuffle` functions
2. That `JobTracker` requests metadata from its `NameNode`
	- This metadata includes the location of relevant data
3. The `NameNode` provides the `JobTracker` with metadata
	- This metadata has data about the location of `DataNodes`
	- Only the `DataNodes` with any relevant data are included
5. The `JobTracker` locates available `TaskTrackers`
	- It tries to find `TaskTrackers` that are:
		- Available
		- Closest to the relevant `DataNodes` as possible
6. The `JobTracker` submits its tasks to the `TaskTrackers`
	- Only the chosen `TaskTrackers` are included
7. The `TaskTrackers` execute any individual tasks
	- They communicate with their specified `DataNodes`
	- `TaskTrackers` send progress reports to the `JobTracker`
	- They do this by sending heartbeat signals
	- If the `JobTracker` doesn't receive a heartbeat signal, it will assume the `TaskTracker` has failed
	- Then, it will reschedule its task and start a new `TaskTracker`
8. The `TaskTrackers` complete all individual tasks
	- They update the `JobTracker`
9. The `JobTracker` updates its status to *complete*
	- Client applications can poll the `JobTracker` for information now

### References
- [Hadoop MapReduce Documentation](https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html)
- [Introduction to Hadoop MapReduce](https://www.guru99.com/introduction-to-mapreduce.html)
- [Slides on MapReduce and Yarn](https://www.slideshare.net/cloudera/introduction-to-yarn-and-mapreduce-2)
- [An ELI5 Post Hadoop MapReduce](https://www.reddit.com/r/explainlikeimfive/comments/r3mdn/eli5_mapreduce_and_hadoop/)
- [MapReduce Course for Use Cases](https://www.edureka.co/blog/mapreduce-tutorial/#usecase)
