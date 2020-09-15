---
title: "Spark Deployment Modes"
date: "2019-03-28"
tags: ["databases"]
draft: false
katex: true
---

This post provides an overview of the different deployment modes in Spark and how each deployment mode changes the behavior of Spark components. In the coming posts, we'll dive deeper into more low-level concepts. Meaning, we'll explore the Spark internals, along with some examples.

An application can be deployed to a cluster in one of two modes: *cluster* or *client* mode. These modes determine the location of the driver process. By default, Spark will run a driver in an application on the client JVM. Python applications can't run in cluster mode on a standalone cluster.

To walk through an example demonstrating the interaction between a driver program and cluster components in standalone mode, refer to the [my other post](/blog/spark-standalone/).

## Client-Deploy Mode
As stated previously, the deployment mode determines the location of the driver process. In client-deploy mode, the driver program runs on the client's JVM process. Meaning, the driver program runs on the client's machine. This is the same machine as the one that called the `spark-submit` command, which implies the driver process sits outside of the cluster. Generally, applications deployed in client mode perform the following steps:
1. Client's JVM process submits a driver to the master
2. The driver is launched
3. Master instructs workers to start executor processes for the driver
4. Workers launch executor JVMs
5. The driver and executors communicate independently
	- Doesn't involves the master or workers

![standaloneclient](/img/standalone-client.svg)

## Cluster-Deploy Mode
In cluster-deploy mode, the driver program runs on its own JVM process located inside the cluster. Indicating, the driver program doesn't run on the client's machine. Instead, it runs on a node within the cluster. Again, the driver program is started by a worker JVM, but runs in a separate JVM in cluster-deploy mode. Generally, applications deployed in cluster mode perform the following steps:
1. Client's JVM process submits a driver to the master
2. Master instructs one of its workers to launch a driver
3. That worker launches a driver JVM in the cluster
4. Master instructs any workers to start executors for the driver
5. Those workers launch executor JVMs
6. The driver and executors communicate independently
	- Doesn't involves the master and workers

![standalonecluster](/img/standalone-cluster.svg)
