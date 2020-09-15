---
title: "Basics of Database Internals"
date: "2020-03-14"
tags: ["databases"]
draft: false
katex: true
---

A data store is a place used for storing data. This includes a database, repository, file system, etc. There are two ways of storing data in a database, which are the following:
- Row-oriented data stores
- Column-oriented data storees

These two types of data stores are found in many of today's popular in-memory data structures, such as pandas and Apache arrow. To see an example of a column-oriented data store, refer to my [next post](/blog/parquet/).

## Comparing Row and Column Databases
Most of us are familar with a row-oriented data store, which stores data row-by-row. Thus, reading and writing data happens one row at a time. As a result, row-oriented data stores are used for transactional systems, which include systems that manage sales, users, airline reservations, etc. Typically, these systems read and write individual records from a row-oriented data store one at a time.

Column-oriented data stores serialize its data into columns. Column-oriented data stores are referred to as a columnar database. A columnar database stores data column-by-column. Meaning, reading and writing data happens one column at a time. As a result, column-oriented data stores are used for analytical systems, which include dashboards. Typically, these systems read and write individual columns from a column-oriented data store one at a time. In other words, the choice of a particular data store depends on the business use case.

A form for outputting user information is an example of a system that would query a row-oriented data store. It usually involves querying a database for a specified user or record, rather than an entire column. On the other hand, a dashboard outputting a graphic illustrating sales over time is an example of a system that would query a column-oriented data store. It usually involves querying a database for a *sales* column, rather than the sales of an individual.

## Defining Data Blocks on Disk
Most databases store data on commodity hardware, which typically involves storing data on blocks. A block is the smallest unit of storage on an HDD, and it can't be partially read or written. Instead, disks read and write entire blocks of data at once. Most blocks can hold anywhere between 512 bytes to 65KB.

In application, a block typically contains multiple rows from a database. However, they are not necessarily stored consecutively. In particular, they are organized using [indexing](https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/), such as [B-tree](https://en.wikipedia.org/wiki/B%2B_tree) indexing. Typically, indexing will physically organize data on a disk based on the logical order of the index key.

In other words, database records are stored on a data block in any arbitrary order. New records are added to any available space. When records are updated, the operating system decides their new block position. Most blocks are structured as linked lists, which contains the following:
- A section for the data
- A pointer to the location of the next block

![DiskBlock](/img/diskblock.svg)

Notice, each block can be scattered anywhere on the disk. Also, each block contains a pointer to the block containing the next records. The disk comes equipped with a starting and stopping index for the file as well. Refer to this [post](https://stackoverflow.com/a/1130/12777044) for a more detailed explanation about how database indexing works internally.

## Comparing Disk I/O
As stated previously, a row-oriented database stores data row-by-row. Meaning, individual rows are stored on a block, rather than individual columns. Storing data in this manner is performant when users are querying individual rows, rather than columns, which can be seen in the following illustration:

![rowblock](/img/rowblock.svg)

A column-oriented database stores data column-by-column. Meaning, individual columns are store
d on a block, rather than individual rows. Storing data in this manner is performant when users are querying individual columns, rather than rows, which can be seen in the following illustration:

![colblock](/img/colblock.svg)

Querying an individual record from a row-oriented database is performant, since each row is stored in a block in its entirety. Meaning, the disk only needs to read from or write to the record in one place. On the other hand, querying an individual record from a column-oriented database will not be as performant. This is because it takes $O(n)$ to read from or write to each block for a piece of the row.

Querying an individual column from a column-oriented database is performant, since each column is stored in a block in its entirety. Meaning, the disk only needs to read from or write to the column in one place.

In the images above, each sector represents a single block for illustrative purposes only. Making this oversimplification hopefully provides better intuition of the purpose of blocks, since the process of reading from and writing to blocks becomes simplier. For a more in-depth explanation about some of these concepts, refer to [this video](https://www.youtube.com/watch?v=uMkVi4SDLbM).
