---
title: "Data Pipelines using Trax"
draft: false
weight: 2
katex: true
---

### Motivating Padding in Neural Networks
- When training NLP neural networks, training sets typically are separated into batches
- Observations within a batch all must be the same length
    - However, observations in different batches can be different lengths
- To do this, zeroes are appended to the end of each tensor until each tensor equals the length of the largest tensor within its batch
    - Here, a tensor represent an encoded tweet, sentence, or any other sequence of words

### Motivating Bucketing in Neural Networks
- When training on batches with padded tensors, the zeroes are ignored when gradients are computed
- However, forward propagating over tensors with many zeroes in an RNN can slow down learning
    - Sometimes, we can into vanishing gradients
- In other words, training on padded tensors can impact the accuracy and performance
- Therefore, our goal is to minimize zero padding

### Minimizing Zero Padding with Bucketing
- Normally, batches are initialized by grouping observations at random
- As a result, we'll group together tensors of all different lengths
- This isn't an efficient approach for minimizing zero padding
- Instead, we can use a technique called *bucketing* to minimize zero padding

### Describing Bucketing in Detail
- Bucketing is performed on a group of batches
- Specifically, each batch is associated with a bucket
- Each bucket represents a range of lengths of tensors
- A training set using batching and bucketing works in the following way:
    - Each batch is assigned a **batch size** and **bucket dimension**
    - Each training tensor is assigned to a suitable batch
- Specifically, a training sensor is assigned to a batch that satisfies a bucket dimension

### Defining Bucketing Dimensions and Batch Size
- A bucketing dimension refers to a range of suitable tensor lengths
- A batch size refers to the number of tensors that must be included in the batch for further training
- The number of buckets and size of buckets are adjustable hyperparameters
- The number of batches and the size of batches are adjustable hyperparameters

### Sample Data Pipeline in Trax
- Before training our neural network, we typically need to run word embedding functions on the training set
- In particular, data pipelines are used for the following general reasons:
    - Tokenizing and encoding raw data to tensors
    - Shuffling tensors
    - Filtering out tensors that don't satisfy a length requirement
    - Padding tensors
    - Bucketing training tensors into batches

```python
# tweets.txt
#
# good morning, 1
# hello world, 1
# please stop that, 0
# thank you, 1
# a b c d e f g h i j, 0
#

# Read in tuples of tweets and sentiments
with open('tweets.txt') as f:
    tweets = iter([tuple([str(i.split(',')[0]), np.int64(i.split(',')[1])]) for i in f])

# Initialize data pipeline for preprocessing raw data
data_pipeline = trax.data.Serial(
    trax.data.Tokenize(vocab_file='en_8k.subword', keys=[0]),
    trax.data.Shuffle(),
    trax.data.FilterByLength(max_length=30, length_keys=[0]),
    trax.data.BucketByLength(boundaries=[5,10,30],batch_sizes=[1,5,10],length_keys=[0]),
    trax.data.AddLossWeights()
    )

# Run pipeline
train_batches_stream = data_pipeline(tweets)
example_batch = next(train_batches_stream)
```

### Describing `Tokenize` in Trax
- In Trax, the `Tokenize` class is used for a handful of embedding functions
- Specifically, tokenization only involves encoding sequences of words (e.g. sentences or tweets) as tensors (i.e. numerical vectors)
- The `Tokenize` class doesn't perform preprocessing functions
- As a result, any of the following preprocessing functions need to be run before tokenization:
    - Lowercasing words
    - Removing stop words
    - Removing symbols
- The `Tokenize` determines word embeddings based on the hash values of indices of words (or subwords) within a given vocabulary
    - Again, it doesn't remove any capitalization, stop words, etc.
    - The Trax library provides a comprehensive vocabulary called `en_8k.subwords`
    - This vocabulary will extract subwords from words and assign hash values to those subwords
    - It also accounts for both lowercase and uppercase words
    - A customeor personalized vocabulary can also be used in the `Tokenize` class
- The following table includes:
    - Raw tweets
    - Those tweets matched in the `en_8k.subword` vocab
    - Final tokenized tweets after running the `Tokenize` class

| Tweet            | Matched with Vocab       | Tokenized Tensors          |
| ---------------- | ------------------------ | -------------------------- |
| the good evening | [the, good, eve, ning]   | [205, 2730, 4750, 1264]    |
| the Good Evening | [the, Goo, d, Even, ing] | [205, 5901, 20, 3207, 561] |
| the good Evening | [the, good, Even, ing]   | [205, 2730, 3207, 561]     |

### Describing `FilterByLength` in Trax
- `FilterByLength` filters out the original tweets that are shorter than a given value representing the maximum character length
- Specifically, only tweets with fewer characters than the maximum value are kept
- The following table includes the input and output of the `FilterByLength` call with `max_length=10`:

| All Raw Tweets | Length | Remaining Tweets |
| -------------- | ------ | ---------------- |
| hello world    | 11     | *filtered*       |
| goodbye        | 7      | goodbye          |
| hi there       | 8      | hi there         |
| goodnight      | 9      | goodnight        |
| good afternoon | 14     | *filtered*       |

### Describing `BucketByLength` in Trax
- The `BucketByLength` class achieves the following:
    1. First, tensors are bucketed into batches
        - For each batch, tensors have a length within the same range
        - In this scenario, a tensor represents a tokenized tweet
    2. Second, tensors are padded to match the length of the largest tensor within its batch
        - Thus, all of the tensors in batch are the same length (based on a bucket dimension)

```python
# Sample Implementation for Example
trax.data.BucketByLength(
    boundaries=[5,10],
    batch_sizes=[3,1],
    length_keys=[0]
    )
```

| All Raw Tweets        | Sentiment |
| --------------------- | --------- |
| good morning          | 1         |
| hello world           | 1         |
| please stop that      | 0         |
| thank you             | 1         |
| a b c d e f g h i j   | 0         |

$$
\downarrow
$$

| Tensors                                    |
| ------------------------------------------ |
| [121, 270]                                 |
| [41, 3]                                    |
| [740, 12, 601]                             |
| [4, 360]                                   |
| [17, 2, 111, 731, 6, 98, 99, 119, 555, 90] |

$$
\downarrow
$$

| Batch Index | Batch                                        | Bucket Dimension | Batch Size | Is Padded | Is Filtered |
| ----------- | -------------------------------------------- | ---------------- | ---------- | --------- | ----------- |
| 1           | [[121, 270, 0], [41, 3, 0], [740, 12, 601]]  | 1-5              | 3          | Yes       | No          |
| 2           | [[4, 360]]                                   | 1-5              | 3          | No        | Yes         |
| 3           | [[17, 2, 111, 731, 6, 98, 99, 119, 555, 90]] | 6-10             | 1          | No        | No          |

- Notice, each batch only contains tensors that are no larger than its associated bucket dimension
- Notice, the tensors within a batch may be smaller than its associated bucket dimension
    - This can happen if none of the tensors reach the exact bucket dimension
- Notice, a batch will be considered incomplete if it doesn't have the maximum number of tensors needed for its batch
    - As a result, its tensors will be removed from any training

### References
- [Trax Data Documentation](https://trax-ml.readthedocs.io/en/latest/trax.data.html)
- [Article about Bucketing and Batching in Neural Networks](https://medium.com/@rashmi.margani/how-to-speed-up-the-training-of-the-sequence-model-using-bucketing-techniques-9e302b0fd976)
