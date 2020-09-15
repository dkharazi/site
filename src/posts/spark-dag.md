---
title: "Visualizing DAGs in Spark"
date: "2019-02-27"
tags: ["databases"]
draft: false
katex: true
---

The goal of this post is to provide a general introduction to the `RDD` API. Each example has a snippet of PySpark code with explanations. Another goal is to provide a general introduction to Spark's web UI. Certain examples have `DAG` visualizations for jobs and stages. Spark starts a web UI for each `SparkContext` that is initialized.

This will only include rudimentary examples of methods in the `RDD` API. For more detailed illustrations and explanations of these concepts, refer to this [post](https://stackoverflow.com/a/37529233/12777044) and this [article](https://databricks.com/blog/2015/06/22/understanding-your-spark-application-through-visualization.html). In the coming posts, we'll dive deeper into more generic objects in the Spark API. Then, we'll explore low-level concepts, including the Spark internals.

## Table of Contents

- [Setting up a SparkSession](#setting-up-a-sparksession)
- [Using an RDD with Python](#using-an-rdd-with-python)
- [Counting Words from Files](#counting-words-from-files)
- [Visualizing the DAG](#visualizing-the-dag)

## Setting up a SparkSession

Before walking through any code examples, we need to create a `SparkSession`. Each `SparkSession` acts as an entry point into Spark programming with `RDDs`. After executing the setup code, we'll be able to use the session in our examples below.

The `builder` object of a SparkSession provides access to the associated application name, associated master URL, and configuration options. It also provides access to a `getOrCreate` method, which initializes a SparkSession after setting options in the `builder` object.

```python
>>> from pyspark.sql import SparkSession
>>> spark = SparkSession \
...         .builder \
...         .appName('TxtRdr') \
...         .getOrCreate()
>>> sc = spark.sparkContext
```

Some examples use a set of files named `hello.txt` and `order.txt`. A SparkContext will read these files using the `textFile` method. After creating an `RDD`, we'll call methods to transform and filter the data in the files listed below.

`hello.txt`:

```text
Hello world
This is a file
```

`order.txt`:

```text
Hello friend
This file is my order
Burger, fries, soda
```

Notice, there are two similar words found in both files. Specifically, these words are *Hello* and *file*. In the upcoming examples, we'll run some standard Python code and Spark code to find these words. Then, we'll count the number of each word using Spark.

## Using an `RDD` with Python

Before performing any transformations, the data needs to be read using the `textFile` method. Specifically, the SparkContext will read the `hello.txt` and `orders.txt` files using this method, which returns an `RDD` object. After calling this method, the returned `RDD` essentially contains a list of strings, where each string represents a line from the file.

The `flatMap` method maps a function that is defined using the lambda keyword to our `RDD`. In this example, our function separates each line into individual strings based on any spaces. Although it isn't used here, the `map` method is very similar to the `flatMap` method. Specifically, the `map` method performs an extra step, which involves storing these individual strings into a list for each line.

Ultimately, the `collect` method is called, which returns all the elements from the `RDD` as a list to the driver program. This method is an action. In other words, the transformations prior to the `collect` method aren't computed until the `collect` method is called. The code snippet below creates an `RDD` and performs the described operations on the `hello.txt` file.

```python
>>> hello = sc.textFile('hello.txt') \
...           .flatMap(lambda c: c.split(' '))
...           .collect()
```

For this example, there's still a second file with words that should be counted by the same Spark program. 
Through a similar process as before, the `collect` method is called for reading in the `order.txt` file. Additionally, the other methods are called for function mapping and data collection.

```python
>>> order = sc.textFile('order.txt') \
...           .flatMap(lambda c: c.split(' ')) \
...           .collect()
```

After executing these two code snippets, the resulting `RDD` includes a long list of each word in both files. Since the `collect` method outputs a list from the `RDD`, we can perform standard Python functions on it. As an example, we can use Python to find the common words between the two `RDDs`.

```python
>>> list(set(hello) & set(order))
['Hello', 'file']
```

## Counting Words from Files

Now, we may prefer to compute some of these operations in Spark. By performing filters in CPython, we will lose the benefit of distributed computation in Spark. If `hello.txt` and `orders.txt` are  much larger files, or if we instead count the words of thousands of files, filtering in Spark becomes much faster compared to filtering in ordinary CPython on a single machine.

To illustrate this point, let's go through an example that is very similar to the previous one, but ultimately performs counting and filtering.

```python
>>> hello = sc.textFile('hello.txt')
>>> order = sc.textFile('order.txt')
>>> counts = hello.union(order) \
...               .flatMap(lambda w: w.split(' ')) \
...               .map(lambda c: (c, 1)) \
...               .reduceByKey(add) \
...               .filter(lambda t: t[1] > 1) \
...               .collect()
```

Again, calling the `flatMap` method returns an `RDD` containing individual words as strings. The `map` method converts each string into a tuple containing words and their frequency. Then, the `reduceByKey` operation loops through each key-value pair and adds up the values for any repeated keys. Lastly, the `filter` method will only include key-value pairs, where the value is greater than one.

```python
>>> counts
[('Hello', 2), ('file', 2)]
```

As expected, the program outputs two key-value pairs. The first key-value pair is `('Hello', 2)`, since there are two of these keys in both files. Similarly, the second key-value pair is `('file', 2)`, since there are two of these keys in both files.

## Visualizing the DAG

The number of jobs for an application equals the number of `RDD` actions. In our example, we can see there is a single job. This is because there is only one action, which is `collect`. Instead of having a single job, we would have two jobs with this code:

```python
>>> hello = sc.textFile('hello.txt').collect()
>>> order = sc.textFile('order.txt').collect()
```

The number of additional stages equals the number of wide transformations in an application. In our example, we can see there are two stages in total, but only a single additional stage. This is because there is only one wide transformation, which is `reduceByKey`. Notice, the web UI in Spark provides a nice visualization of the `DAG`.

![wordcounts](/img/pysparkwordcounts.svg)

Recall, the number of tasks within a stage equals the number of partitions in an `RDD`. By default, Spark assigns the number of paritions to be two. Meaning, the default number of tasks per stage is two. The number of partitions is assigned to an `RDD` when it is initialized. Thus, this parameter can be adjusted when calling `textFile(file, num_partitions)`. Therefore, our stage will have six tasks (instead of four) if we change this line of code:

```python
>>> hello = sc.textFile('hello.txt', 6)
```

Since Spark assigns the number of paritions of an `RDD` during initialization, the number of tasks are determined after shuffling as well. This is because Spark creates a new `RDD` after shuffling. This object is called a `ShuffleRDD`. For a more detailed description of how tasks are separated and organized in Spark, refer to this [post](https://stackoverflow.com/a/37759913/12777044).


