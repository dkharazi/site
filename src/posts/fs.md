---
title: "File System and Database Differences"
date: "2020-02-02"
tags: ["databases"]
draft: false
katex: true
---

In most cases, database storage is implemented using file system files, where databases are usually stored in files, which exist in filesystems. The data within a database are usually stored in files, which can be found in a directory structure and generally follow naming conventions assigned by the manufacturer of the DBMS.

## DBMS and File Systems

The major differences between a database and a file system are outlined in [this useful post](https://qr.ae/pvgfHr). First, database engines organize data into files containing records as their data model. These records are obviously represented as byte sequences at the lowest level, but abstracting these sequences as records allows the DBMS to include additional querying functionality. On the other hand, file systems organize data into files and manage them as byte sequences, leading to less querying functionality since there is little awareness of the file contents beyond the byte level.

Not only does managing records introduce additional querying functionality, but it also introduces search functionality in most cases. Since databases create a layer of abstraction by using records as its data model, they can retrieve and modify those records more easily using search capabilities managed by the database engine. For example, a DBMS may allow users to search for records via SQL or key-value pairs, whereas most basic file systems don't come equipped with as detailed search functionality.

In the end, storing data is just storing data. A file just represents some bytes at the lowest level, but it is a storage abstraction. A database is a storage abstraction, and a file system is a storage abstraction. Databases ultimately store their data as files behind the scenes, whereas file systems store data as files too. Databases and basic file systems usually differ by how much additional functionality is offered, where databases typically offer more querying and search functionalities. More details about the differences in functionalities can be found [in this post](https://stackoverflow.com/a/69118380/12777044).

## File Storage and Object Storage

Both file and object storage are different types of storage used for saving and managing data as files with metadata. For example, HDFS is a distributed file storage and can use Hive for storing metadata, and most object stores maintain metadata on their objects as well. Traditional object storage typically stores data as binary files and uses HTTP for accessing the data, whereas file stores hold data formatted in many different file types and can be accessed using SFTP in most cases. For specific examples of open-source object stores (that aren't AWS S3), refer to [this repository on GitHub](https://github.com/okhosting/awesome-storage). 

Most databases today are file storage by default, where some databases can be enabled to be block storage. Again, most databases are file stores with some extra functionality, such as querying capabilities, search functionality, tracking more extensive metadata, inclusion of a GUI, etc. Relational and NoSQL databases physically store data in a semi-similar fashion, meaning they both chop up data into partitions and store these partitions as binary files. They really just differ on how they abstract data, or how they locally store data into logical data models internally.

Relational databases, such as SQL server, partition data files into $8K$ binary files with some metadata by default. An RDBMS logically stores data into tables. On the other hand, file system storage, such as HDFS, partitions data files into $128MB$ binary files with some metadata by default. A file system logically stores data into files in a fairly standard, hierarchical file system with directories in most cases. For HDFS, the Hive add-on can provide a SQL-like interface by creating additional metadata for the files. Technically, HDFS isn't considered a database, since it's a distributed file system.

One example of a non-relational database is a key-value database. MongoDB is a common key-value database that partitions data files into BSON (or binarized JSON files) with some metadata. In this case, a key-value non-relational database logically stores data as key-value pairs in physical binary files. Another example of a non-relational database is a columnar store. Cassandra is a common columnar database that partitions data files into binary files with some metadata. In this case, a columnar non-relational database logically stores data as tables. Other examples of columnar databases include Google's Bigtable, Snowflake, and others.