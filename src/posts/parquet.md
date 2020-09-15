---
title: "Performance Benchmarks: Parquet"
date: "2020-03-26"
tags: ["python"]
draft: false
katex: true
---

A Parquet file is a popular column-oriented storage format for Hadoop. For more information about column-oriented stores, refer to my [previous post](/blog/columnar/). A Parquet file is used for fast analytics that often reads and writes columns, rather than rows. Originally, Parquet files were designed to be used in MapReduce problems. Meaning, most of its development went towards [parquet-mr](https://github.com/apache/parquet-mr), which is a Java implementation.

As of 2020, there has been development towards [parquet-cpp](https://github.com/apache/parquet-cpp), which is a native C++ implementation of Parquet. Eventually, this implementation of parquet will provide native read and write support for pandas DataFrames, which will improve the performance of:
- Reading Parquet files into DataFrames
- Writing DataFrames to Parquet files

## Table of Contents
- [The Benefits of Parquet](#the-benefits-of-parquet)
- [Compression and I/O Optimization in Parquet](#compression-and-io-optimization)
- [The Format of a Parquet File](#the-format-of-a-parquet-file)
- [Setting Up Performance Tests](#setting-up-performance-tests)
- [Performance of Parquet Engines](#performance-of-parquet-engines)

## The Benefits of Parquet
The Apache Parquet project was originally initiated to create an open-standard columnar file format. In the beginning, Parquet files were only used in the Hadoop ecosystem. Today, they are used in Apache Spark and by cloud vendors to fill many data warehousing needs.

A parquet file is used for storing a columnar to disk. Meaning, it focuses on data compression, which refers to reducing the size of a file. In Parquet, data compression is performed column-by-column. This enables encoding schemes to be used for different data types. As a result, parquet files are able to reduce the time for each query by reducing the overall I/O, such as reading data for each column in a compressed format.

## Compression and I/O Optimization

Since an entire column is stored on blocks, compression can be optimized by deducing the exact number of bits for each data value. For example, a column of integers could be compressed into a smaller data type by inferring the maximum integer value. So, if a column consist of integers that range from 0 and 100, then the column doesn't need to be any larger than int8.

I/O is optimized by focusing on projection pushdown and predicate pushdown. Here, a predicate refers to a filter with a `where` clause, and a projection refers to selected columns using a `select` clause. Projection pushdown involves column pruning. This happens automatically, since Parquet is formatted as a columnar file.

In parquet, predicate pushdown involves moving any filtering to an earlier phase of query execution. Then, it maintains statistics for groups of rows to improve the performance of predicate evaluation. In summary, predicate pushdown in Parquet provides significant performance improvements. For more details about predicate pushdown in Parquet, refer to [this article](https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/cdh_ig_predicate_pushdown_parquet.html#concept_pgs_plb_mgb).

![parquetpushdown](/img/parquetpushdown.svg)

## The Format of a Parquet File
A Parquet file is organized into three general sections:
- Header
- Data Blocks
- Footer

Each Parquet file has one header, one or many data blocks, and one footer. Within these components, a Parquet file stores two different types of information: metadata and data. Specifically, the metadata is stored in the header and footer, whereas the data is stored in the data blocks.

![parquetgenerallayout](/img/parquetlayout.svg)

In particular, the header contains metadata in the form of a 4-byte magic number in the header, which represents its file is in Parquet format. Remaining metadata about the file is stored in the footer section. It contains metadata about:
- Row groups
- Columns
- Version of its Parquet format
- 4-byte magic number

In a Parquet file, each data block is stored as a collection of row groups. These row groups are stored as a collection of column chunks. A row group corresponds to a set of rows, whereas a column chunk corresponds to an individual column in the dataset. The data in column chunks are organized into pages, which correspond to column values.

At a high-level, the graphic below illustrates sample data formatted as a Parquet file. For more details about the layout of a Parquet file, refer to the Apache Parquet [documentation](https://parquet.apache.org/documentation/latest/).

![parquetformat](/img/parquetexample.svg)

## Use of Parquet in Pandas
As of June 2020, the pandas library provides wrapper functions that use a Parquet engine for reading and writing Parquet files. These two functions are `pandas.read_parquet` and `pandas.to_parquet`. As of June 2020, there are two choices of Parquet engines used for reading in Parquet files.

According to the [pandas documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_parquet.html#pandas.read_parquet), an engine parameter can be specified, which refers to the Parquet library to use. Its default behavior is to try ‘pyarrow’, falling back to ‘fastparquet’ if ‘pyarrow’ is unavailable.

Seeing as the development towards PyArrow and parquet-cpp is still progressing, we may be interested in performance benchmarks for reading from and writing to Parquet files, while using the above functions in their current state. For a more detailed analysis of performance benchmarks, refer to [this article](https://wesmckinney.com/blog/python-parquet-update/).

## Setting Up Performance Tests

The New York City Taxi & Limousine Commission records each taxi and limousine trip in NYC. They report these trips to the public each month, and include information about pick-up and drop-off destinations and times. This data is used in many Data Engineering projects for reasons mentioned [here](https://uwekorn.com/2019/08/22/why-the-nyc-trd-is-a-nice-training-dataset.html).

This exercise will only use the dataset containing trips from January of 2019 completed in yellow taxis. More details about the commission and their datasets can be found on [the site](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page). This particular dataset is 687.1 MB and contains 7.6 million rows. Before performing any benchmarks, let's include any setup code:

```python
>>> from timeit import timeit
>>> itr = 100
```

The `timeit` library is commonly used for testing performance of code segments in Python. Specifically, it returns the total seconds taken to run a given code segment, excluding the execution of any specified setup code. The `iter` variable is included to test each segment 100 times. After running the `timeit()` function, the total seconds is divided by the number of runs, ultimately to determine average performance per test.

## Performance of Parquet Engines

Now, let's test the performance of reading in the same dataset in the following formats:
- A csv file
- An hdf file
- A parquet file using the `fastparquet` engine
- A parquet file using the `pyarrow` engine

Prior to executing the tests below, the HDF and Parquet files were converted to a csv file. Then, the `pandas.DataFrame.to_hdf()` and `pandas.DataFrame.to_parquet()` functions were used to store each file into their respective format. 

```python
>>> # Read csv
>>> stmnt = "pd.read_csv('taxi.csv')"
>>> setup = "import pandas as pd"
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
12.92

>>> # Read hdf
>>> stmnt = "pd.read_hdf('taxi.h5')"
>>> setup = "import pandas as pd"
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
6.57

>>> # Read parquet using fastparquet
>>> stmnt = "pd.read_parquet('taxi.parquet', engine='fastparquet')"
>>> setup = "import pandas as pd"
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
6.64

>>> # Read parquet using pyarrow
>>> stmnt = "pd.read_parquet('taxi.parquet', engine='pyarrow')"
>>> setup = "import pandas as pd"
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
3.62
```

After reading in each file in the various formats, the final test delivered the best performance. Using the PyArrow Parquet engine, the taxi trips dataset, formatted as a Parquet file, only took an average of 3.62 seconds for reading in the entire dataset.

Now, let's test the performance of writing to similar files.

```python
>>> # Write hdf
>>> stmnt = "df.to_hdf('taxi.h5', key='df')"
>>> setup = """
... import pandas as pd
... df = pd.read_csv('taxi.csv')
... """
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
6.18

>>> # Write parquet using fastparquet
>>> stmnt = "df.to_parquet('taxi.parquet', engine='fastparquet')"
>>> setup = """
... import pandas as pd
... df = pd.read_csv('taxi.csv')
... """
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
9.12

>>> # Write parquet using pyarrow
>>> stmnt = "df.to_parquet('taxi.parquet', engine='pyarrow')"
>>> setup = """
... import pandas as pd
... df = pd.read_csv('taxi.csv')
... """
>>> s = timeit(stmnt, setup, number=itr)
>>> round(s/itr, 2)
4.96
```

This example was run locally on my laptop without testing other types of datasets using various styles of compression styles, such as uncompressed, snappy, and gzip. Thus, the performance benchmarks should not be taken precisely. Regardless, there clearly seems to be a huge performance boost when using the PyArrow engine. To learn more about the other use cases for PyArrow, refer to [my next post](/blog/pyarrow/).

