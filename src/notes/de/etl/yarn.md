---
title: "YARN"
draft: false
weight: 10
katex: true
---

### Describing Hadoop YARN
- YARN is a component of the Hadoop ecosystem
- YARN is used for:
	- Managing computing resources in a cluster
	- Monitoring computing resources in a cluster
	- Scheduling jobs involving processing
- It manages and monitors resources via `NodeManagers`
- A job refers to a requested transformation
- An example of a job is a MapReduce job
- An application consists of one or many jobs

### Describing the YARN Architecture
- YARN consists of:
	- Many different nodes in a cluster
	- Separate daemons living on those nodes
- A node represents a single computer or server
- A cluster represents a collection of nodes
- These nodes are all interconnected with each other
- The YARN daemons are:
	- `ResourceManager`
	- `NodeManagers`
	- `ApplicationMasters`
	- Containers
- Typically, containers host any MapReduce job
- These jobs involve transforming blocks on `DataNodes`
- `NodeManagers` are used for overseeing its container

### How YARN Handles Resource Management
- Resource management in YARN mostly is handled by:
	- A `ResourceManager`
	- Some `NodeManagers`
- A `ResourceManager` is used for:
	- Initializing an `ApplicationMaster`
	- Initializing containers
	- Allocating requested resources to an `ApplicationMaster`
	- Recording information about:
		- Available resources
		- Resources allocated to applications in the cluster
- A `NodeManager` is used for:
	- Monitoring containers on its node
	- Restoring failed containers on its node
	- Reporting usage of resources to the `ResourceManager`
		- CPU resources
		- Memory resources
		- Disk resources
		- Network resources
	- Initializing containers on its node
- Typically, there is a single `ResourceManager` in a cluster
- Typically, there is a single `NodeManager` per node

### How YARN Handles Job Scheduling
- Job scheduling in YARN mostly is handled by:
	- Some `ApplicationMasters`
	- Some containers
- An `ApplicationMaster` is used for:
	- Requesting for additional or fewer resources from the `ResourceManager`
	- Allocating these resources to its containers
	- Monitoring its application
- Containers are used for:
	- Running an assigned application
	- Reporting the application status to the `ApplicationMaster`
- Typically, there is a single `ApplicationMaster` per application

### Illustrating the YARN Workflow

![yarnworkflow](/img/yarn.gif)

![hdfsyarn](/img/hdfsyarn.jpg)

### Defining the YARN Workflow
1. Client submits an application
2. The `ResourceManager` initializes a container
3. The `ResourceManager` initializes an `ApplicationMaster`
	- There is an `ApplicationMaster `for each container
4. An `ApplicationMaster` requests resources from the `ResourceManager`
	- It uses these resources for itself and its containers
5. The `ApplicationMaster` receives resources
	- It uses these resources for itself and its containers
6. The `AM` notifies the `NM` to launch containers
	- These containers run the application (MapReduce jobs)
	- Containers running `map` tasks are run on the same node as the relevant blocks
	- Containers running `reduce` tasks sometimes run on different nodes
	- Containers running `reduce` tasks start after `map` tasks
7. The applications request metadata from the `NameNode`
	- Only metadata of relevant blocks in `DataNodes` is returned
	- These applications are executed in the containers
8. The applications receive metadata from the `NameNode`
	- Only metadata of relevant blocks in `DataNodes` is received
	- These applications are executed in the containers
9. Each daemon monitors resources
	- The `ResourceManager` monitors the cluster's status
	- The `ApplicationMaster` monitors its application's status
	- The `NodeManager` monitors its node's status
10. The application is complete
11. The `ApplicationMaster` unregisters itself from the `ResourceManager`

### References
- [Hadoop YARN Documentation](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html)
- [Introduction to Hadoop HDFS and YARN](https://docs.portworx.com/install-with-other/docker/stateful-applications/hadoopandhdfs/#introduction)
- [Defining the Hadoop Architecture with YARN](https://www.datadoghq.com/blog/hadoop-architecture-overview/#hdfs-architecture)
- [Slides on Hadoop YARN](https://www.slideshare.net/cloudera/introduction-to-yarn-and-mapreduce-2)
- [How YARN and the NameNode Interact](https://stackoverflow.com/a/50794483/12777044)
- [Describing the Hadoop Architecture](https://www.geeksforgeeks.org/hadoop-yarn-architecture/)
- [How HDFS and YARN Work in Tandem](https://community.cloudera.com/t5/Community-Articles/Understanding-basics-of-HDFS-and-YARN/ta-p/248860)
