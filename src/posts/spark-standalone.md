---
title: "Testing Spark Applications in Standalone"
date: "2019-06-06"
tags: ["databases"]
draft: false
katex: true
---

This post walks through an example of a cluster running in standalone mode. In the coming posts, we'll explore other examples, including clusters running a [YARN](/blog/spark-yarn/) cluster manager and [Mesos](/blog/spark-mesos/) cluster manager.

## Table of Contents

- [Setting up a SparkSession](#setting-up-a-sparksession)
- [Launching Daemons](#launching-daemons)
- [Accessing Web UI for Daemons](#accessing-web-ui-for-daemons)
- [Caveat about PySpark Applications](#caveat-about-pyspark-applications)
- [Launching Applications in Client Mode](#launching-applications-in-client-mode)
- [Launching Applications in Cluster Mode](#launching-applications-in-cluster-mode)

## Setting up a SparkSession
1. Download [Spark 2.4.6](https://apache.claz.org/spark/spark-2.4.6/spark-2.4.6-bin-hadoop2.7.tgz)
2. Create the file `./conf/spark-defaults.conf`:

```text
spark.master=spark://localhost:7077
spark.eventLog.enabled=true
spark.eventLog.dir=./tmp/spark-events/
spark.history.fs.logDirectory=./tmp/spark-events/
spark.driver.memory=5g
```

3. Create a Spark application:

```python
# test.py
>>> from pyspark import SparkContext
>>> file = "~/data.txt"  # path of data
>>> masterurl = 'spark://localhost:7077'
>>> sc = SparkContext(masterurl, 'myapp')
>>> data = sc.textFile(file).cache()
>>> num_a = data.filter(lambda s: 'a' in s).count()
>>> print(num_a)
>>> sc.stop()
```

## Launching Daemons
1. Start a master daemon in standalone mode
```bash
$ ./sbin/start-master.sh 
```

2. Start a worker daemon
```bash
$ ./sbin/start-slave.sh spark://localhost:7077
```

3. Start a history daemon
```bash
$ ./sbin/start-history-server.sh
```

4. Start a Spark application
```bash
$ ./bin/spark-submit \
    --master spark://localhost:7077 \
    test.py
```

5. Stopping the daemons
```bash
$ ./sbin/stop-master.sh
$ ./sbin/stop-slave.sh
$ ./sbin/stop-history-server.sh 
```

## Accessing Web UI for Daemons
Spark provides a web UI for each initialized daemon. By default, Spark creates a web UI for the master on port `8080`. The workers can take on different portsand can be accessed via the master web UI. The history server can be accessed on port `18080` by default. The table below summarizes the default locations for each web UI.

| Daemon  | Port    |
| ------- | ------- |
| Master  | `8080`  |
| Worker  | `8081`  |
| History | `18080` |

## Caveat about PySpark Applications
Notice, launching an application in client mode doesn't seem to trigger a driver according to the master's web UI. This doesn't mean a driver isn't launched in client mode. The driver is still launched within the spark-submit process. However, the master's web UI omits driver information if the application is running in client mode.

So, we may want to launch an application in cluster mode now. However, running an application in cluster mode would give us the following error:

```bash
$ ./bin/spark-submit \
    --master spark://localhost:7077 \
    --deploy-mode cluster
    test.py
Exception in thread "main" org.apache.spark.SparkException: Cluster deploy mode is currently not supported for python applications on standalone clusters.
```

As of Spark 2.4.6, we can't run python applications in cluster mode when running a standalone cluster manager. This is a good opportunity for us to experiment with other resource managers in the [next post](). For now, we will run `JavaSparkPi.java` found in the examples directory.

## Launching Applications in Client Mode
In a [previous post](), we defined the components associated with a driver program and cluster, while illustrating the interaction between a driver program and cluster components. Specifically, we defined this interaction when applications are launched in client mode. Now, we can execute an application and verify these steps using the logs.

Note, the timestamps and logged messages were slightly modified for clarification. However, the order and substance of each message still remains the same.

```text
14:43:01 INFO
SparkContext: Submitted application: Spark Pi

14:43:02 INFO
Utils: Successfully started service 'sparkDriver'

14:43:03 INFO
StandaloneAppClient: Connecting to master

14:43:04 INFO
StandaloneSchedulerBackend: Connected to Spark cluster

14:43:05 INFO
Master: Registered app Spark Pi

14:43:06 INFO
Master: Launching executor on worker

14:43:07 INFO
Worker: Asked to launch executor

14:43:08 INFO
ExecutorRunner: Launched

14:43:09 INFO
StandaloneAppClient: Executor added on worker

14:43:10 INFO
StandaloneSchedulerBackend: Granted executor ID

14:43:11 INFO
StandaloneAppClient: Executor is now RUNNING

14:43:12 INFO
SparkContext: Starting job

...

14:43:13 INFO
DAGScheduler: Job finished

14:43:14 INFO
StandaloneSchedulerBackend: Shutting down all executors

14:43:15 INFO
Worker: Asked to kill executor

14:43:16 INFO
ExecutorRunner: Killing process!

14:43:17 INFO
Master: Removing app

14:43:18 INFO
SparkContext: Successfully stopped SparkContext
```

## Launching Applications in Cluster Mode
In a [previous post](), we defined the interaction between a driver program and cluster components, while applications are launched in cluster mode. Now, we can execute an application in cluster mode to verify these steps using the logs.

Note, the timestamps and logged messages were slightly modified for clarification. However, the order and substance of each message still remains the same.

```text
14:43:01 INFO
Master: Driver submitted

14:43:02 INFO
Master: Launching driver

14:43:03 INFO
Worker: Asked to launch driver

14:43:04 INFO
DriverRunner: Launched

14:43:05 INFO
Utils: Successfully started service 'driverClient'

14:43:06 INFO
ClientEndpoint: Driver successfully submitted

14:43:07 INFO
SparkContext: Submitted application: Spark Pi

14:43:08 INFO
Utils: Successfully started service 'sparkDriver'

14:43:11 INFO
StandaloneAppClient: Connecting to master

14:43:10 INFO
StandaloneSchedulerBackend: Connected to Spark cluster

14:43:12 INFO
Master: Registered app Spark Pi

14:43:13 INFO
Master: Launching executor on worker

14:43:14 INFO
Worker: Asked to launch executor

14:43:15 INFO
ExecutorRunner: Launched

14:43:16 INFO
StandaloneAppClient: Executor added on worker

14:43:17 INFO
StandaloneSchedulerBackend: Granted executor ID

14:43:18 INFO
StandaloneAppClient: Executor is now RUNNING

14:43:19 INFO
SparkContext: Starting job

...

14:43:20 INFO
DAGScheduler: Job finished

14:43:21 INFO
StandaloneSchedulerBackend: Shutting down all executors

14:43:22 INFO
Worker: Asked to kill executor

14:43:23 INFO
ExecutorRunner: Killing process!

14:43:24 INFO
Worker: Driver exited successfully

14:43:25 INFO
Master: Removing app

14:43:26 INFO
SparkContext: Successfully stopped SparkContext
```

