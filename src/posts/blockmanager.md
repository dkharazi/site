---
title: "Internal Structure of Pandas DataFrames"
date: "2020-05-15"
tags: ["python"]
draft: false
katex: true
---

A `DataFrame` object relies on underlying data structures to improve performance of row-oriented and column-oriented operations. One of these data structures includes the BlockManager. The BlockManager is a core architectural component that is an internal storage object in Pandas. Implying, it is not included in the Pandas documentation.

As the internals of Pandas continues to expand, microperformance suffers. In this case, microperformance refers to the performance of many small operations taking 1 microsecond. In particular, fairly simple oeprations, such as indexing, may pass through multiple internal layers before hitting its operation. As a result, the performance of certain operations aren't always consistent and reliable. For these two reasons alone, the BlockManager is quite important to understand when dealing with the performance of many operations in Pandas.

## Table of Contents
- [What is a BlockManager](#what-is-a-blockmanager)
- [Illustrating the BlockManager](#illustrating-the-blockmanager)
- [Illustrating the Role of the BlockManager](#illustrating-the-role-of-the-blockmanager)
- [Benefit of the BlockManager](#benefit-of-the-blockmanager)
- [Disadvantages of the BlockManager](#disadvantages-of-the-blockmanager)
- [Roadmap for the BlockManager](#roadmap-for-the-blockmanager)

## What is a BlockManager
In Pandas versions 0.1 and 0.2, the data in a `DataFrame` was stored in a `dict`. Since then, it has evolved into something much more complicated, but is still implemented in pure Python. Now, a `DataFrame` in memory roughly represents:
- Some metadata
- A collection of NumPy arrays for each column

This structure was introduced when the BlockManager was introduced, which manages these NumPy arrays. The reason for making this change to the structure of a `DataFrame` was to support column-oriented operations that were very slow without a BlockManager.

A BlockManager is fairly self-explanatory. It manages blocks, where an individual block refers to data stored as a NumPy ndarray object. The BlockManager is a memory management object that manages the internal columns of data inside a `DataFrame`. Each axis is capable of reshaping the blocks to a new set of labels. The BlockManager consolidates any blocks together with similar data types. It can also accept new blocks without copying data.

## Illustrating the BlockManager
We may want to view the internals of a `DataFrame` to gain a better understanding of how the data is actually being stored. Accessing the `_data` attribute yields the BlockManager of a `DataFrame`. It also lists the specific blocks handled by the BlockManager.

```python
>>> print(df)
   c1 c2  c3
0   1  a  10
1   2  b  20
2   3  c  30

>>> print(df._data)
BlockManager
Items: Index(['c1', 'c2', 'c3'], dtype='object')
Axis 1: RangeIndex(start=0, stop=3, step=1)
IntBlock: slice(0, 4, 2), 2 x 3, dtype: int64
ObjectBlock: slice(1, 2, 1), 1 x 3, dtype: object
```

## Illustrating the Role of the BlockManager

As briefly described earlier, the BlockManager is responsible for consolidating any blocks together with similar data types. It does this by calling the `consolidate()` method.

The BlockManager doesn't consolidate blocks of similar data types when new blocks are added. Instead, the BlockManager does this automatically in the initial stages of many `DataFrame` operations. This notion may seem abstract at first, but can be easily observed by adding a new block to the BlockManager.

```python
>>> df['c4'] = [100,200,300]
>>> print(df._data)
BlockManager
Items: Index(['c1', 'c2', 'c3', 'c4'], dtype='object')
Axis 1: RangeIndex(start=0, stop=3, step=1)
IntBlock: slice(0, 4, 2), 2 x 3, dtype: int64
ObjectBlock: slice(1, 2, 1), 1 x 3, dtype: object
IntBlock: slice(3, 4, 1), 1 x 3, dtype: int64
```

Notice, there are two separate IntBlocks after adding a new column of ints to the `DataFrame`. By calling the `consolidate()` method, we'll see consolidation of blocks of similar data types. Meaning, we'll see the two IntBlocks consolidated into one IntBlock.

```python
>>> df._data.consolidate()
BlockManager
Items: Index(['c1', 'c2', 'c3', 'c4'], dtype='object')
Axis 1: RangeIndex(start=0, stop=3, step=1)
IntBlock: [0, 2, 3], 3 x 3, dtype: int64
ObjectBlock: slice(1, 2, 1), 1 x 3, dtype: object
```

Now, every block is consolidated based on its data type. At a high level, we can think of each `DataFrame` method calling the `consolidate()` method before running its operation. In truth, it is more complicated than this. Specifically, the `consolidate()` method is only called in operations that directly benefit from consolidation.

For a more detailed analysis about consolidation and when it happens, refer to [this post](https://uwekorn.com/2020/05/24/the-one-pandas-internal.html). For a more detailed explanation of the BlockManager, refer to [this article](https://wesmckinney.com/blog/a-roadmap-for-rich-scientific-data-structures-in-python/) written by Wes McKinney, who introduced the BlockManager.

## Benefit of the BlockManager
The BlockManager introduced a columnar structure to the `DataFrame`. Like any other columnar store, it provides significant performance boosts for column-oriented operations. Furthermore, it provides significant performance boosts to column-oriented operations on many different columns. For example, the BlockManager improves the speed of vector-like operations, such as summing two columns together. 

## Disadvantages of the BlockManager
Although the BlockManager was a necessary addition to the Pandas project, it creates a negative impact on performance in certain circumstances. There are four general areas that are negatively impacted by the BlockManager:
- Code complexity
- Loss of user visibility to memory use
- Unavoidable consolidation
- Microperformance issues

Since the BlockManager introduced blocks to the Pandas architecture, writing new code becomes more complex, since there needs to be careful construction of the block structure. Although this boosts the performance of complicated algorithms, such as joins, writing code for algorithms becomes more complicated.

Large datasets are usually read into a `DataFrame` object *naively*. Consequently, there is a memory-doubling effect that can lead to memory errors. When Pandas was written in 2011, the creators of Pandas weren't thinking about analyzing many gigabytes or terabytes of data. Now, [the rule of thumb](https://wesmckinney.com/blog/apache-arrow-pandas-internals/) for reading in a `DataFrame` object is to have 5-10 times as much available RAM as the size of the data.

As stated previously, consolidation happens in methods that directly benefit from it. As a result, consolidation can lead to performance and memory overhead for fairly common operations. For example, calling `read_csv()` may require consolidation after completion.

Again, the BlockManager was a necessary addition. It fixed a lot of performance issues. However, there is a proposition to replace the BlockManager, which would require a significant inversion of the internal architecture to involve more native code and less interpreted Python.

## Roadmap for the BlockManager
Currently, Pandas architecturally is structured around the following:
- CPython implementation of internal data structures
- Cython implementation of algorithms

In the future, there may be effort to [create a native library](https://github.com/pydata/pandas-design/blob/a0f1d32094f5030cc06ec09c8582b5a7b7798065/source/internal-architecture.rst#building-libpandas-in-c1114-for-lowest-level-implementation-tier), where the data structures, logical types, and memory management is assembled using a native API. By replacing the BlockManager with native code, Pandas would receive the following benefits:
- Simpler code
- Easier extensibility with new logical types
- Possibly better performance than the current implementation
- Improved user-control over the memory layout
- Improved microperformance

For more information about the use cases and drawbacks of the BlockManager, refer to the [design docs](https://github.com/pydata/pandas-design/blob/a0f1d32094f5030cc06ec09c8582b5a7b7798065/source/internal-architecture.rst#what-is-blockmanager-and-why-does-it-exist) and [roadmap docs](https://pandas.pydata.org/docs/development/roadmap.html#block-manager-rewrite), which was written by Wes McKinney after developing the BlockManager.
