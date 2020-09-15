---
title: "Runtime Architecture in Spark"
date: "2019-03-11"
tags: ["databases"]
draft: false
katex: true
---

This post provides a high-level introduction to generic objects in the Spark API, along with the responsibilities for each object. In the coming posts, we'll dive deeper into more low-level concepts. Meaning, we'll explore the Spark internals, along with some examples.

## Table of Contents
- [Two Common Questions](#the-two-common-questions)
- [Driver Program](#defining-the-driver-program)
- [Spark Context](#defining-a-spark-context)
- [Spark Scheduler](#defining-the-spark-scheduler)
- [Cluster Manager](#defining-the-cluster-manager)
- [Workers and Executors](#defining-workers-and-executors)

## The Two Common Questions
A Spark application runs on a cluster with either a standalone cluster manager, YARN cluster manager, or Mesos cluster manager. Although these clusters use very different component comparatively, they still need to answer the same two questions regardless of how each one is set up. Specifically, these questions relate to:
- Job scheduling
- Resource scheduling

Job scheduling refers to determining which executors run a given set of tasks. To do this, we must know what resources are available, which includes CPU and RAM resources. Job scheduling is typically performed by Spark's scheduler, which will be defined in detail later.

As stated previously, we must know the available resources in order to perform job scheduling. Implying, job scheduling requires resource scheduling, in order to function properly. Resource scheduling refers to determining which executors receive available resources. Specifically, this involves assigning CPU and RAM resources to executors, which represent units of processing in a cluster.

## Defining the Driver Program
A driver program represents a Spark program. During the execution of a driver program, it requests for executor processes from the cluster manager. In particular, it requests for CPU and memory resources. Then, it organizes its application components into stages and tasks. The driver program is responsible for defining the tasks sent to executors of a Spark cluster. Then, it collects results from the executors. A driver program is represented as the following objects:
- A Spark `Scheduler`
- A Spark Context
- A Spark application

## Defining a Spark Context
One of the most essential responsibilities of the driver program is to define and initialize a spark context. A spark context acts as the entry point for a driver program to interact with a Spark cluster. In other words, it connects to a spark cluster from an application. A spark context is responsible for configuring a spark session, which is not associated with workers or masters.

Configurations related to a spark session include managing job execution, loading files, and saving files. This also includes assigning the number of executors allocated to an individual application, and includes assigning the number of cores per executor.

## Defining the Spark Scheduler
Each driver program comes equipped with a Spark `Scheduler`, which runs in the background of a driver program. It can be configured via the Spark context. The `Scheduler` performs *job scheduling* for its application after communicating with a cluster manager (of a cluster). Indicating, it is responsible for the following:
- Sending tasks to executors
- Requesting memory and CPU resources from a cluster manager
- Deciding which executors run which tasks
- Monitoring execution of tasks sent to executors

Notice, the decision of which executors run which tasks depends solely on Spark, rather than the cluster manager. In other words, the `Scheduler` is responsible for choosing which executors run its tasks, while the cluster manager is only responsible for initializing the executors and keeping them up and running.

## Defining the Cluster Manager
Each cluster comes equipped with a cluster manager, which runs on a node in the cluster. In Spark, there are different types of cluster managers that demonstrate their own unique behavior in a cluster. By default, a Spark cluster runs a standalone cluster manager, which is referred to as a Spark master also. Other popular cluster managers include the following:
- `Standalone:` Spark Master
- `YARN:` Application Master
- `Mesos:` Mesos Master

A cluster manager instructs workers to start executor processes when a driver program requests for resouces from the cluster. In order to do this, the cluster manager provides workers with information about the cluster's CPU and memory resources. The cluster manager performs *resource scheduling* for its cluster. Indicating, it is responsible for the following:
- Starting and stops processes in its cluster
- Assigning the maximum number of CPUs used by executors
- Dividing cluster resources among several applications

In particular, resource scheduling involves distributing the resources of a cluster requested by several applications. Meaning, a cluster manager will make its cluster's resources available to applications via executors. In other words, the cluster manager allocates its cluster's CPU and memory resources to its executors for any applications to use.

## Defining Workers and Executors
Each worker runs on a node in its cluster. A worker is responsible for launching executors and monitoring executors for the cluster manager, in case of any failures. Additionally, it is used for launching the driver process when `-deploy-mode=cluster`. Notice, certain components behave differently depending on the deployment mode of an application. For more information about these behaviors, refer to my [next post](/blog/spark-deployment/).

Similarly, each executors runs on a node in its cluster. There can only be one executor per worker. An executor is responsible for accepting tasks from the driver program, executing those tasks, and returning any results to the driver. Each executor has several *tasks slots*. These slots are used to run tasks in parallel on the executor. Specifically, these tasks are implemented as threads, rather than individual CPU cores. Indicating, they do not correspond to the number of CPU cores on a machine.
