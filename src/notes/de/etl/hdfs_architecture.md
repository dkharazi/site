---
title: "HDFS Architecture"
draft: false
weight: 7
katex: true
---

### Describing the General Architecture
- Hadoop's Distributed File System is abbreviated as HDFS
- It consists of a collection of clusters
- A cluster consists of a collection of nodes
- These HDFS nodes can either be:
	- A `NameNode`
	- A `DataNode`
- A cluster consists of:
	- A single `NameNode`
	- Some `DataNodes`
- Typically, each HDFS node runs on its own computer (or server)
- Each node uses the storage of its computer
- A server on which a `NameNode` lives is called a **master server**
- A server on which a `DataNode` lives is called a **region server**

### Motivating `NameNodes` and `DataNodes`
- Huge files are split into small chunks known as data blocks
- Files larger than $128$ MB are separated into $128$ MB blocks
- Those blocks are stored across `DataNodes`
- A `NameNode` stores metadata including:
	- Which `DataNodes` contain which blocks
	- Where those blocks are located
	- etc.

### Examples of Metadata from `NameNodes`
- Owners of files
- Permissions
- Block locations
- Block sizes
- File names
- File paths
- Number of data blocks
- Block IDs
- Block locations
- Number of replicas

### Describing the Architecture of a `NameNode`
- A `NameNode` consists of:
	- A namespace
	- A block management service
- A namespace consists of:
	- A file-directory tree
	- Metadata for all files and directories within the tree
	- Mappings of blocks to files within directories
- A block management service is used for:
	- Monitoring `DataNodes` by sending out heartbeats
	- Handling registration of `DataNodes`
	- Maintaining location of blocks
	- Processing block reports
	- Managing replica replacement
	- Performing block-related operations:
		- Create
		- Delete
		- Modify
		- Get block location

### Defining a `NameNode`
- Every HDFS cluster has a single `NameNode`
- This `NameNode` runs on an individual machine
- A `NameNode is a master server
- It achieves the following:
	- Regulating any client-requested access to files
	- Managing the namespace of the file system
	- Storing metadata of data blocks within `DataNodes` across its cluster
	- Keeping metadata in memory for fast retrieval
	- Sending requested transformations to `DataNodes` to fulfill
	- Executing operations performed on the namespace
- Namespace operations include the following:
	- Opening files
	- Closing files
	- Renaming files
	- Renaming directories

### Defining a `DataNode`
- Every HDFS cluster has at least one `DataNode`
- A `DataNode` manages any file storage on its machine
- Specifically, a file is split into one or more blocks
- Then, these blocks are stored in `DataNodes`
- A `DataNode` will perform any read/write instruction
- These instructions are sent from the `NameNode`
- Then, the `DataNode` will perform any necessary deletion or replication operation
- Remember, `DataNodes` aren't capable of performing any transformations
- Only something like MapReduce is capable of this

### Summarizing the Steps of HDFS
1. A client sends a request to a `NameNode` on a cluster
2. The `NameNode` sends that request to the appropriate `DataNodes`
	- It does this by analyzing the filesystem tree
	- And it refers to the metadata
3. The `DataNodes` fulfill the request
	- It does this by performing the appropriate read and write instructions
- Essentially, the `NameNode` manages the client's requests
- Then, the `DataNodes` process those requests

### References
- [HDFS Documentation](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html)
- [Architecture of NameNodes](https://hadoop.apache.org/docs/r2.7.2/hadoop-project-dist/hadoop-hdfs/Federation.html)
- [Defining the HDFS Design](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html)
- [Lecture Slides for Yarn and MapReduce](https://www.slideshare.net/cloudera/introduction-to-yarn-and-mapreduce-2)
- [Describing Data Blocks](https://data-flair.training/blogs/data-block/)
- [Describing Components of HDFS](https://stackoverflow.com/a/23924959/12777044)
