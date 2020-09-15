---
title: "Relevance of Hadoop"
date: "2018-05-17"
tags: ["databases"]
draft: false
katex: true
---

It's been 14 years since the initial release of [Apache Hadoop](https://hadoop.apache.org/), which is a long time for any software. Unsuprisingly, the internet is flooded with [clickbait articles](https://www.google.com/search?q=is+hadoop+dead&rlz=1C5CHFA_enUS832US832&oq=is+hadoop+dead&aqs=chrome..69i57j0l4j69i60l3.254j0j7&sourceid=chrome&ie=UTF-8) about Hadoop being replaced by newer and improved alternatives. This isn't to say these opinions don't have any merit. Even now, Hadoop remains essential for many of today's largest enterprises with their own data centers. However, other companies have the liberty to outsource sensitive data to the cloud. In this case, cloud storage services, such as [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html), can easily replace HDFS in the cloud.

Recall, Hadoop has two other frameworks in its ecosystem: the `YARN` resource manager and the `MapReduce` computing paradigm. Recently, some companies have replaced `YARN` with Kubernetes for scheduling, and most have replaced `MapReduce` with Apache Spark for computing. Specifically, Apache Spark excels when used in the cloud and data centers, contributing to its wild popularity. Hopefully, this serves as motivation to learning more about Spark.

This post hopefully motivates the use-cases and benefits of Spark in today's world. The comping posts will provide a high-level introduction to generic objects in the Spark API. Then, we'll dive deeper into more low-level concepts, which includes the Spark internals.
