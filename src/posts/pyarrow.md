---
title: "Performance Benchmarks: PyArrow"
date: "2020-04-11"
tags: ["python"]
draft: false
katex: true
---

As of 2020, there has been development towards [parquet-cpp](https://github.com/apache/parquet-cpp), which is a native C++ implementation of Parquet. This development process was moved to the Apache Arrow repository.

At a very high level, the Arrow project was created primarily in an effort to provide zero-copy data access, which involves mapping complex tables to memory. Meaning, reading 1 terabyte of data from disk should be as **fast** and **easy** as reading 1 megabyte of data.

The Arrow project includes Python bindings with integration of NumPy, pandas, and built-in Python objects. These Python bindings are based on a C++ implementation of Arrow, and they are accessible via the PyArrow library. To learn more about the use cases and motivations of PyArrow, watch [Wes McKinney's presentation](https://www.youtube.com/watch?v=Hqi_Bw_0y8Q).

## Table of Contents
- [The Origins of PyArrow](#the-origins-of-pyarrow)
- [Benefits of the Arrow Protocol](#benefits-of-the-arrow-protocol)
- [Use Cases of PyArrow](#use-cases-of-pyarrow)
- [Comparing PyArrow to Parquet](#comparing-pyarrow-to-parquet)
- [Why Serialization can be a Problem](#why-serialization-can-be-a-problem)
- [Improvements to DataFrame.toPandas()](#improvements-to-topandas)
- [Setting Up Performance Tests](#setting-up-performance-tests)
- [Performance of PyArrow](#performance-of-pyarrow)

## The Origins of PyArrow
In 2016, Wes McKinney joined the Apache Arrow project to improve Python's interperability with big data systems like Impala and Spark. Wes took the lead in development of the C++ and Python implementations of Apache Arrow. Rather than attempting to summarize the background of the PyArrow any further, I'll conclude this section with a [quote from Wes](https://wesmckinney.com/blog/apache-arrow-pandas-internals/), which is taken from an article that was written during his time at Cloudera:
> At Cloudera, I started looking at Impala, Kudu, Spark, Parquet, and other such big data storage and analysis systems. Since Python and pandas had never been involved with any of these projects, building integrations with them was difficult. The single biggest problem was data interchange, particularly moving large tabular datasets from one process's memory space to another's. It was extremely expensive, and there was no standard solution for doing it. RPC-oriented serialization protocols like Thrift and Protocol Buffers were too slow and too general purpose.

## Benefits of the Arrow Protocol
Apache Arrow provides an in-memory, columnar data structure that has several key benefits:
- Random access is $O(1)$
- Includes native vectorized optimization for analytical processing
- Data interchange is fast and efficient between systems

Random access is $O(1)$ because its formatted as a column-oriented data structure. Native vectorized optimizations are possible because its execution engine takes advantage of SIMD operations, which are included in modern processors. Meaning, any algorithms that process the Arrow data structure will be very fast. Data interchange between systems is very fast and efficient, since Arrow avoids costly data serialization. Serialization is used in many other systems, including Spark, Avro, etc.

## Use Cases of PyArrow
By avoiding costly serialization of I/O operations, Arrow is able improve the performance interprocess communication with zero-overhead memory sharing. Furthermore, the Arrow project involves a great deal of effort to strandardize its in-memory data structure. As a result, Arrow provides systems with the ability to reuse algorithms more efficiently.

At a higher level, Arrow tackles three general use cases:
- Data movement
- Data access
- Computation libraries

As stated previously, Arrow attempts to efficiently improve the process of moving data from one system to another system. As a result, the Arrow memory format support zero-copy interprocess communication. In other words, reading Arrow's data structure into a separate system avoids creating any redundant data copies between intermediate buffers. Improving interprocess communication ensures [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) (client-server) based data-movement. For greater details about how Arrow achieved these benefits, read the [Arrow docs](https://arrow.apache.org/docs/)

Due to improvements to interprocess communication, Apache Arrow is able to read and write to parquet files from various libraries, such as Pandas. Additionally, Arrow can convert a `DataFrame` object from one library to a `DataFrame` object from a different library. For example, Arrow is dedicating development effort to efficiently move an R data frame into Pandas, and vice versa. Arrow has already been able to improve the performance of reading a PySpark `DataFrame` as a Pandas `DataFrame`.

Arrow improves the performance of data access. These improvements include efficiently reading from and writing to common storage formats or files, such as Parquet files. Specifically, zero-copy data access enables complex memory mapping of tables, which implies accessing 1 TB of data is as fast as accessing 1 mB of data. Arrow also boosts the speed of interacting with database protocols and other data sources. Arrow also provides methods for performing efficient, in-memory, dataframe-like analytics on its data structure.

## Comparing PyArrow to Parquet
My [previous post](/blog/parquet/) described Apache Parquet as a column-oriented format for storage. It is used for data serialization and stores an actual file. On the other hand, Apache Arrow is a library that provides access to its in-memory data structure, which follows a column-oriented format. Refer to this [StackOverflow post](https://stackoverflow.com/a/56481636/12777044) for a more in-depth explanation about the differences between these two Apache projects.

Apache Arrow defines a binary serialization protocol, which is used for arranging a collection of Arrow columnar arrays. These columnar arrays allow Arrow to provide efficient messaging and interprocess communication. The Arrow protocol is used for mapping a *blob* of Arrow data without doing any deserialization. This allows Arrow and other libraries to perform analytics on Arrow's data structure.

## Why Serialization can be a Problem
Most Python users expect to deal with similar data structures when converting between a Spark `DataFrame` and a Pandas `DataFrame`. Usually, they want to make this conversion to use the flexible Pandas API on a locally-stored `DataFrame` object, after running some distribution computations on a distributed Spark `DataFrame`.

Users don't really care about how Spark and Pandas represent data frames internally. Rather, they have a similar data structure in mind, and they want to switch back-and-forth between Spark's API (for distributed computation on a data frame object) and Pandas API (for flexible functions on locally stored data). 
Since there are so many libraries that implement their own form of `DataFrame` object, moving from one context to another can become difficult. Particularly, loading and R data frame in Pandas can be very challenging and slow (and vice versa).

Converting from one data frame format to a different data frame format can also involve serialization. In Python, serialization refers to the conversion of an in-memory Python object, such as a `DataFrame`, to an on-disk stream of bytes. The cost of serialization varies for different contexts in different libraries. In particular, the `pickle` library is a standard Python library used for serializing Python objects. Read [this](http://matthewrocklin.com/blog/work/2015/03/16/Fast-Serialization) for a more in depth analysis of serialization in Python.

Serialization is a relatively slow process in Python. Returning to an earlier example, a Spark `DataFrame` is converted to a Pandas `DataFrame` using serialization. Specifically, the `DataFrame.toPandas()` function in PySpark is inefficient, since it serializes each row into a list of tuples. This is inefficient for two primary reasons:
- CPickle serialization is slow and potentially unnecessary
- Iterating over each tuple using `DataFrame.from_records()` is a slow method for creating a `DataFrame`

## Improvements to `toPandas`
As a reminder, the PySpark API is a very thin layer of code wrapped around the Java API for spark, which itself is only a wrapper around the core Scala API. Therefore, running a Python driver program with a SparkContext will invoke a JavaSparkContext by launching a JVM behind-the-scenes. 

Arrow uses an efficient in-memory columnar data structure, which can be accessed using the PyArrow library in Python. To solve the issue with `DataFrame.toPandas()` in PySpark, PyArrow has proposed to use Arrow to ensure the data is in Arrow's memory format. By doing this, there isn't a need to serialize data using cPickle. This is because Arrow can send its data directly from the JVM to a Python process.

Additionally, PyArrow creates a pandas `DataFrame` from entire chunks of data, rather than individual values. This is achieved by using [zero-copy methods](https://en.wikipedia.org/wiki/Zero-copy) in PyArrow. To learn more about the solution implemented by PyArrow, refer to [this article](https://arrow.apache.org/blog/2017/07/26/spark-arrow/) and [this post](https://bryancutler.github.io/toPandas/).

## Setting Up Performance Tests
The New York City Taxi & Limousine Commission records each taxi and limousine trip in NYC. They report these trips to the public each month, and include information about pick-up and drop-off destinations and times. This data is used in many Data Engineering projects for reasons mentioned [here](https://uwekorn.com/2019/08/22/why-the-nyc-trd-is-a-nice-training-dataset.html).

This exercise will only use the dataset containing trips from January of 2019 completed in yellow taxis. More details about the commission and their datasets can be found on [the site](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page). This particular dataset is 687.1 MB and contains 7.6 million rows. Before performing any benchmarks, let's include any setup code:

```python
>>> from timeit import timeit
>>> itr = 100
```

The `timeit` library is commonly used for testing performance of code segments in Python. Specifically, it returns the total seconds taken to run a given code segment, excluding the execution of any specified setup code. The `iter` variable is included to test each segment 100 times. After running the `timeit()` function, the total seconds is divided by the number of runs, ultimately to determine average performance per test.

## Performance of PyArrow
As of June 2020, pyspark defaults to converting a PySpark `DataFrame` to a Pandas `DataFrame` by serializing to a cPickle. However, the `toPandas()` method uses Arrow when specifying the setting `spark.sql.execution.arrow.enabled` to *true* in the SparkSession.

Now, let's test the performance of the default implementation:

```python
>>> stmnt = "df.toPandas()"
>>> setup = """
... from pyspark.sql import SparkSession
... spark = SparkSession.builder \
...     .master('local') \
...     .appName('Taxi') \
...     .getOrCreate()
... df = spark.read.csv('taxi.csv')
... """
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
302.95
```

After performing the Arrow-less `toPandas()` method, the final test delivered a poorer-than-expected performance. Using the pyspark engine, converting the taxi trips `DataFrame` took an average of 302.95 seconds for serializing and converting the entire dataset. Now, let's test the performance of the PyArrow implementation:.

```python
>>> stmnt = "df.toPandas()"
>>> setup = """
... from pyspark.sql import SparkSession
... spark = SparkSession.builder \
...     .master('local') \
...     .appName('Taxi') \
...     .config("spark.sql.execution.arrow.enabled", "true") \
...     .config("spark.driver.maxResultSize", "0") \
...     .getOrCreate()
... df = spark.read.csv('taxi.csv')
... """
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
54.51
```

This example was run locally on my laptop using the default configurations for Spark. Thus, the performance benchmarks should not be taken precisely. Regardless, there clearly seems to be a huge performance boost when using Arrow. For a more detailed analysis of PyArrow's I/O performance, refer to [this article](https://uwekorn.com/2019/01/27/data-science-io-a-baseline-benchmark.html).

