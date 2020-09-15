---
title: "Datasets and DataFrames"
date: "2019-03-03"
tags: ["databases"]
draft: false
katex: true
---

## Describing Spark SQL
Unlike the basic Spark `RDD` API, the Spark SQL API provides additional data structures used for holding data and performing computations. As a result, Spark SQL is able to perform improved optimizations. Specifically, Spark SQL is used for executing SQL queries. Spark SQL can also be used to read data from an existing Hive installation. When running SQL from within another programming language, the results are returned as a `Dataset` or `DataFrame`.

## Datasets and DataFrames
Similar to an `RDD`, a `Dataset` is a distributed collection of data that can be cached in memory. It provides the following benefits:
- Strong typing
- Ability to use powerful lambda functions
- Optimized execution engine

A `DataFrame` is a `Dataset` organized into named columns. It is conceptually equivalent to a table in a relational database or a pandas `DataFrame`. However, it has improved internal optimizations. For a more detailed description of the benefits of `Datasets` and `DataFrames`, please refer to this [article](https://databricks.com/blog/2016/07/14/a-tale-of-three-apache-spark-apis-rdds-dataframes-and-datasets.html).


