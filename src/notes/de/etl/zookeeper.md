---
title: "ZooKeeper"
draft: false
weight: 13
katex: true
---

### Describing Apache ZooKeeper
- ZooKeeper is a software framework
- It is a distributed service
- It is used for:
	- Managing distributed processes
	- Coordinating distributed processes
	- Monitoring distributed processes

### Details about ZooKeeper
- Specifically, ZooKeeper does the following:
	- Ensures a cluster is synchronized
	- Recovers processes from partial failures
- It can do this because it stores information about a cluster
- The following are examples of information stored:
	- Which node is the master?
	- What tasks are assigned to which workers?
	- Which workers are currently available?

### Storing Data in ZooKeeper
- ZooKeeper uses a distributed tree to hold this information
- Specifically, the distributed tree is a file system
- It holds small pieces of data
- This data is stored in **zNodes**
- ZooKeeper nodes $\not =$ HDFS nodes
- Instead, zNodes represent tree nodes in the file system

### Describing zNodes in ZooKeeper
- A znode is a tree node below the root directory
- In other words, it is a node below `/`
- A znode can appear as:
	- A file containing data
	- A directory with more znodes as subnodes
- Each znode stores metadata about a distributed process
- It is associated with an open session in the distributed system

### Details about States of zNodes
- zNodes can be in one of two states:
	- An ephemeral state
	- A persistent state
- An ephemeral znode disappears after its session ends
- A persistent znode remains stored until explicitely deleted
- An ephemeral znode is used for:
	- Discovering hosts in a distributed system
	- Sending *heartbeats* in a distributed system to find hosts
- A persistent znode is used for:
	- Assigning tasks to workers
	- Storing metadata even if the master crashes

### Example of ZooKeeper File System with zNodes
- Suppose our file system looks like the one below
- Specifically, it is a tree with zNodes
- The znodes are:
	- `master-1`
	- `worker-1`
	- `worker-2`
- The `master-1` znode:
	- Contains data about the master node
	- Like its URL: `master-1.foobar.com:2223`
	- This helps us locate the node in the cluster
- The `worker-1` znode:
	- Contains data about a worker node
	- Like its URL: `worker-3.foobar.com:2225`
	- This helps us locate the node in the cluster
- The `worker-2` znode:
	- Contains data about a worker node
	- Like its URL: `worker-567.foobar.com:2225`
	- This helps us locate the node in the cluster

```
/
├── master-1/
└── workers/
    ├── worker-1/
    └── worker-2/
```

### Defining Specific Use Cases for ZooKeeper
- Monitoring master and worker nodes
	- A zNode monitors either a master or worker node
	- It does this by occasionally pinging its master or worker
	- Then, it saves its pinged data (into the zNode)
- Restoring master and worker nodes during crashes
	- Master and worker nodes can crash because of:
		- Hard-disk failures
		- Network issues
		- etc.
- Failing over to a backup master node
	- A zNode does this when an active master node crashes
	- A zNode assumes backup nodes have already been created
	- Implying, it isn't responsible for creating them
	- It is only responsible for coordination and monitoring
	- Specifically, it suggests a backup is needed
	- Implying, it monitors and saves data for active master nodes and backup master nodes
- Failing over to a backup worker node
- Notifying a distributed service of any failures
	- It notifies a distributed service of failures and suggests replacement of a backup node

### Outlining General Use Cases for ZooKeeper
- Master election
	- One node registers itself as an active master node
	- It holds a *lock* on that data
	- As a result, other nodes can't become an active master node until the lock is released
	- Only one node is allowed to hold the lock simultaneously
	- ZooKeeper is responsible for enforcing this condition
- Group management
	- zNodes track data about a node's availability
	- ZooKeeper is responsible for enforcing this condition
- Crash detection
	- Sometimes, zNodes are ephemeral
	- Meaning, these zNodes disappear if disconnected or crashed
	- This ensures data doesn't pile up from old zNodes
	- ZooKeeper is responsible for enforcing this condition
- Storing metadata
	- Sometimes, zNodes are persistent
	- Meaning, data from these zNodes need to be saved if disconnected or crashed
	- This ensures new zNodes know where to pick up from
	- ZooKeeper is responsible for enforcing this condition

### Use of ZooKeeper in Apache Software
- HBase
	- Uses ZooKeeper to monitor master and worker nodes
	- ZooKeeper does this for each node within the cluster
	- It coordinates master and worker nodes if any failures occur
	- It notifies HBase if any failures occur
	- Then, HBase can create new master and worker nodes
- MapReduce
	- Uses ZooKeeper to monitor availability of `ResourceManagers`
- Spark
	- Uses ZooKeeper to manage configuration
	- It is responsible for leader election
- Kafka
	- Uses ZooKeeper to manage configuration
	- It is used to ensure synchronization
	- It is responsible for leader election
	- It monitors the status of nodes within a cluster
- Flume
	- Uses ZooKeeper for configuration purposes

### Defining the ZooKeeper Workflow
- Each master and worker node has its own zNode
- For example, worker nodes in HBase have their own zNode
- These zNodes monitor the master and worker nodes
- These zNodes are hosted on its own ZooKeeper server
- A typical ZooKeeper workflow would look like:
	- Having multiple ZooKeeper servers
	- Replicating zNodes across each ZooKeeper server
	- These zNodes don't write unless each zNode is confirmed to have replicated consistent data to the majority of the servers
- There are many ZooKeeper servers in case a ZK server crashes
	- *Who is watching the watcher?*
- A collection of ZK servers is called a *ZooKeeper ensemble*

### Defining a ZooKeeper Quorum
- A ZooKeeper quorum refers to the number of zNodes (or servers) that need to return consistent data in order for the data to be written to each zNode across the ZooKeeper ensemble
- For example, if our ZooKeeper ensemble contains $5$ servers:
	- Setting the ZK quorum $=2$ leaves too much room for error
		- Since the majority of servers may not have consistent data
	- Setting the ZK quorum $=3$ leaves enough room for error
		- Since the majority of servers must always be consistent
	- Setting the ZK quorum $=4$ leaves too little room for error
		- Since nearly $100$% of servers must have consistent data
- Therefore, we must configure:
	- The ZooKeeper quorum
	- The number of servers in our ensemble
- Properly tuning these will ensure data consistency

### References
- [Video about the Details of ZooKeeper](https://www.youtube.com/watch?v=gZj16chk0Ss)
- [Using ZooKeeper in Distributed Systems](https://www.elastic.co/blog/found-zookeeper-king-of-coordination)
- [Describing the Use of ZooKeeper in Hadoop](https://stackoverflow.com/a/10745043/12777044)
- [Describing the ZooKeeper Architecture](https://stackoverflow.com/a/8864303/12777044)
- [Video about the Basics of ZooKeeper](https://www.youtube.com/watch?v=gifeThkqHjg)
- [ZooKeeper Documentation](https://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html)
