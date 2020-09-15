---
title: "Spark RDD Fundamentals"
date: "2019-02-15"
tags: ["databases"]
draft: false
katex: true
---

This post provides a high-level introduction to the RDD object in the Spark API. In the coming posts, we'll dive deeper into more generic objects in the Spark API. Then, we'll explore low-level concepts, including the Spark internals.

## Table of Contents
- [Resilient Distributed Datasets](#resilient-distributed-datasets)
- [Defining a DAGScheduler](#defining-a-dagscheduler)
- [Types of Transformations](#types-of-transformations)
- [Lifecycle of a Spark Program](#lifecycle-of-a-spark-program)

## Resilient Distributed Datasets
Most likely, we've all worked with pandas `DataFrames` before. They're in-memory, *single-server* data structures that offer many user-friendly functions for data processing. Functionally, Spark provides a data structure that is very similar in this sense, but can be used across multiple servers. This data structure is called a *resilient distributed dataset*, or an `RDD` for short. In short, an `RDD` is an in-memory data structure that is distributed across many servers within a Spark cluster.

Roughly, we can think of an `RDD` as a distributed version of a pandas `DataFrame`. I'm making this comparison because RDDs offer many pandas-like functions that are focused around data processing. These functions are called [Transformations](https://spark.apache.org/docs/latest/rdd-programming-guide.html#transformations) and [Actions](https://spark.apache.org/docs/latest/rdd-programming-guide.html#actions). Specifically, transformations create a new dataset from an existing one. Contrastingly, actions return non-dataset values, which generally relate to some aggregation.

![diagram of rdd to transf to action](/img/sparkaction.svg)

Transformations are *lazy*. Meaning, an `RDD` isn't computed until it receives an action. Actions always return values to the driver program. Spark receives a performance boost from any lazy evaluations. However, this could become a problem if users continuously recompute that same transformation. As a result, Spark allows us to persist an `RDD` to memory using the `persist` method. To summarize, transformations and actions have the following properties:
- Transformations are lazy by default
- Actions aren't lazy
- Transformations return a new `RDD`
- Actions return an aggregated value of the `RDD`

As stated previously, an `RDD` receives a huge boost in performance by keeping data in memory. However, Spark supports data persistance to disk as well. Spark also supports data persistence to databases. To summarize, an `RDD` has the following properties:
- Distributed
- Fault-tolerant
- Flexible functions such as `map(func)`
- Optionally in-memory on the Driver's JVM
- Parallelizable using `sc.parallelize(data)`
- Immutable (more on this later)

## Defining a `DAGScheduler`
Recall, a transformation is a type of special `RDD` method that returns another `RDD` object. Again, these methods aren't computed until the `RDD` receives an action, indicating that `RDD` objects are immutable. Since `RDD` objects can't *change* once they are created, Spark creates a new object called a `DAG` when an action is called. In a `DAG`, each node is an `RDD` partition, and an edge is a transformation.

Spark breaks the `RDD` into smaller chunks of data called *partitions*. In Spark, a partition is a chunk of data on a node within the cluster. At a high level, Spark breaks transformations and actions into `Tasks`, which are mapped to partitions. Essentially, a `Task` represents a unit of work on a partition of a distributed dataset.

Assuming nonsequential dependence, `Tasks` are executed in parallel on partitions. Thus, the number of partitions made up by an `RDD` should equal the number of CPU cores within a cluster. Theoretically, increasing the number of partitions would increase the amount of parallelism for a system, assuming there are available CPU cores. If an `RDD` can't fit an entire set of data into memory, then that data will be stored to and read from disk.

Now, let's return to our previous discussion about the `DAG` object. When an action is called, each `DAG` is submitted to a `DAGScheduler` object for execution. A `DAGScheduler` organizes operations into `Stages`, and a `Stage` is organized into `Tasks`. Each `Task` is scheduled separately. It represents a unit of work on a partition of an `RDD`, and is executed as a thread in an executor's JVM. The `DAGScheduler` returns a `TaskSet` object, which is passed to a `TaskScheduler`. The `TaskScheduler` launches tasks in the a cluster manager.


![SparkTaskLifecycle](/img/sparktasks.svg)

Multiple tasks can be executed in parallel for any stage. Specifically, any two stages can be executed in parallel if they aren't sequentially dependent on each other. Implying, tasks from one stage can be executed in parallel with tasks from a separate stage, if they aren't sequentially dependent on each other. Refer to [this post](https://stackoverflow.com/a/41340858/12777044) for an illustration of how `Tasks` and stages run in parallel.

The number of tasks is equal to the number of partitions. The number of stages is equal to the number of wide transformations. For examples that may help illustrate these concepts, refer to my [next post](/blog/spark-dag/).

## Types of Transformations
There are two types of transformations that can be applied to `RDDs`: narrow transformations and wide transformations. Narrow transformations refer to transformations where each partition contributes to one stage only. These include transformations like `map`, `filter`, etc. Wide transformations refer to transformations where each partition contributes to many stages. In Spark, this concept is called *shuffling*.

Shuffling is used for regrouping data between partitions. Shuffling is necessary for situations requiring information from each partition. Wider transformations are more expensive than narrow transformations in comparison. For example, the `map` transformation doesn't require shuffling, since it applies element-wise transformations to each partition. This technique is called pipelining. In other words, an element in one partition doesn't need any information from other partitions. On the other hand, the `groupByKey` wide transformation needs information from each partition. Specifically, a narrow transformation keeps its results in memory, whereas a wide transformation writes its results to disk. This [post](https://0x0fff.com/spark-architecture-shuffle/) defines optimized shuffling algorithms in detail.

![SparkNarrowAndWideTransformation](/img/sparktransformation.svg)

## Lifecycle of a Spark Program 
Now, we have a high-level level understanding of the core Spark data structures. This [lecture](https://www.youtube.com/watch?v=7ooZ4S7Ay6Y) defines the lifecycle of a Spark program in detail.  Generally, a common lifecycle of a spark program looks like the following:
1. Create some input RDDs from external data
2. Lazily transform them to define new RDDs using transformations
3. Ask Spark to `cache()` any intermediate RDDs that will be reused
4. Launch actions to start parallel computation
5. Spark optimizes and executes its computations

