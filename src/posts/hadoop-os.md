---
title: "Hadoop as a Distributed OS"
date: "2018-10-22"
tags: ["databases"]
draft: false
katex: true
---

Before investigating Spark in detail, we should develop a core intuition behind Hadoop. This post compares Hadoop to a traditional computer operating system. In the coming posts, we'll begin exploring generic objects in the Spark API. Then, we'll dive deeper into more low-level concepts, including the Spark internals.

Developing a core intuition behind Hadoop is an important first step before investigating Spark in great detail. Recall, a basic computer operating system constists of two essential components:
1. A file system
2. A scheduler

As a reminder, a file system manages user data. A scheduler manages any running process or program in the system. These programs involve storing, retrieving, or updating the data in the file system.

Roughly, Hadoop can be seen as a *distributed* operating system. In this comparison, YARN represents a distributed scheduler. Similar to a scheduler in a basic operating system, YARN does the following:
- Monitors computing resources
- Schedules jobs involving processing

However, the key difference is YARN performs these functions across many different machines. In a similar fashion, HDFS differs from a standard file system, because it manages user data across many different machines. Lastly, MapReduce programs are the distributed form of programs in a traditional computer system.

