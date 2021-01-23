---
title: "Sentiment Analysis"
draft: false
weight: 18
katex: true
---

### Motivating Sentiment Analysis
- Let's say we're interested in classifying tweets as either positive or negative
- To do this, the following types of models work well:
	- Probabilistic Models
		- Logisitic Regression
		- Naive Bayes
	- Sequence Models
		- Recurrent Neural Network
- Sentiment analysis typically involves the following steps:
	1. Feature preprocessing
	2. Building a vocabulary
	3. Modeling sentiment based on given words

### Defining Pre-Modeling Steps
- Before defining any typical models used in sentiment analysis, we'll define the steps that are necessary in the setup
- Specifically, we'll dive into the details for each of the following:
	1. Feature preprocessing
	2. Building a vocabulary

### Step 1: Feature Preprocessing
- The first step in sentiment analysis is feature preprocessing
- This needs to be done in both the training and testing data
- The most important preprocessing rules include:
	- Removing stop words
	- Formatting uppercase words as lowercase words
	- Removing punctuation
	- Handling URLs
- We should be careful, since the above formatting changes can also remove a degree of context, such as the following:
	- Removing punctuation can remove a degree of context
		- Emoticons
		- URLs
	- Removing words can remove a degree of context for neighboring words
		- *not good*
		- *do not want*
	- Ignoring word order can remove a degree of context
		- I am happy because I did not go
		- I am not happy because I did go
	- Adversial attacks
		- Sarcasm
		- Irony
		- Euphemisms

### Step 2: Building a Vocabulary
- The next step in sentiment analysis is building a vocabulary
- Meaning, we create a unique set of words from our training data
- For example, say we have three tweets in our training dataset:

$$
t_{1} = \text{I am happy}
t_{2} = \text{Twitter makes me happy}
t_{3} = \text{She is sad}
$$

- Then, our vocabulary becomes the following:

$$
V = \text{[I, am, happy, Twitter, makes, me, She, is, sad]}
$$

### Step 3: Modeling
- The last step in sentiment analysis is feature extraction
- As stated previously, we have a few options for modeling sentiment:
	- Logisitic Regression
	- Probabilistic Modeling: Naive Bayes
	- Sequence Modeling: Recurrent Neural Networks
- Typically, logistic regression has the following properties:
	- None of the context of an input sequence is captured
	- Training is relatively fast
- Typically, naive bayes has the following properties:
	- Only some of the context of an input sequence is captured
	- Training is much slower
- Typically, RNNs have the following properties:
	- The entire context of an input sequence is captured
	- Training is the slowest

### Sentiment Analysis using Logistic Regression
- One way of building a model for sentiment classification is to create an individual parameter for each variable in our vocabulary
- The following model reflects this approach for $t_{1}$:

$$
\hat{y} = x_{1} \theta_{1} + x_{2} \theta_{2} + ... + x_{n} \theta_{n}
$$

- Where the variables represent the following:
	- $x_{1}$ is a binary value, where $x_{1}=1$ if *I* is included in the tweet
	- $\theta_{1}$ is a weight for $x_{1}$
- This approach has many flaws, since there are too many hyperparameters to learn
- Also, the data will become extremely sparse, indicating we should try a different approach
- Specifically, a more computationally efficient approach involves creating a model with only two hyperparameters:

$$
\hat{y} = x_{1} \theta_{1} + x_{2} \theta_{2}
$$

- Where the variables represent the following:
	- $x_{1}$ is a whole number equaling the frequency of this word appearing in positive tweets
	- $x_{2}$ is a whole number equaling the frequency of this word appearing in negative tweets

### General Implementation using Logistic Regression
```python
# Format tweets by removing stop words, punctuation, etc.
clean_tweets = format_tweets(tweets)

# Build vocabulary on training data
vocab = build_vocab(clean_tweets)

# Build dictionary of frequencies
freqs = build_freqs(clean_tweets, vocab)

# Use logistic regression to classify sentiment
weights = train_log_reg(freqs, labels)

# Preprocess test data
clean_new_tweets = format_tweets(new_tweet)

# Test trained model
sentiment = test_model(clean_new_tweet, weights)
```

### Sentiment Analysis using Naive Bayes
1. Determine the size of our n-gram:
	- For this example, let's assign the size of our n-gram to be $2$

$$
\text{Training Data} = [x_{1}, x_{2}]
$$

$$
x_{1} = \text{I am happy because I am learning NLP}
$$

$$
x_{2} = \text{I am sad}
$$

$$
\text{size(ngram)} = 2
$$

2. Determine the sentiment for each sequence of two words in our training dataset:

$$
[y_{1}, y_{2}] = [1, 0]
$$

3. Calculate the frequencies of the n-grams in our training dataset:

| $w_{i}$       | Positive | Negative |
| ------------- | -------- | -------- |
| i am          | 2        | 1        |
| am happy      | 1        | 0        |
| happy because | 1        | 0        |
| because i     | 1        | 0        |
| am learning   | 1        | 0        |
| learning nlp  | 1        | 0        |
| am sad        | 0        | 1        |

4. Convert the frequencies into conditional probabilities:

| $w_{i}$       | $p(w_{i} \vert pos)$ | $p(w_{i} \vert neg)$ |
| ------------- | -------------------- | -------------------- |
| i am          | $\frac{2}{7}$        | $\frac{1}{2}$        |
| am happy      | $\frac{1}{7}$        | $\frac{0}{2}$        |
| happy because | $\frac{1}{7}$        | $\frac{0}{2}$        |
| because i     | $\frac{1}{7}$        | $\frac{0}{2}$        |
| am learning   | $\frac{1}{7}$        | $\frac{0}{2}$        |
| learning nlp  | $\frac{1}{7}$        | $\frac{0}{2}$        |
| am sad        | $\frac{0}{7}$        | $\frac{1}{2}$        |

5. Perform laplacian smoothing to avoid $\frac{0}{0}$:

| $w_{i}$       | $p(w_{i} \vert \text{pos})$ | $p(w_{i} \vert \text{neg})$ |
| ------------- | --------------------------- | --------------------------- |
| i am          | $\frac{2+1}{7+7}$           | $\frac{1+1}{2+7}$           |
| am happy      | $\frac{1+1}{7+7}$           | $\frac{0+1}{2+7}$           |
| happy because | $\frac{1+1}{7+7}$           | $\frac{0+1}{2+7}$           |
| because i     | $\frac{1+1}{7+7}$           | $\frac{0+1}{2+7}$           |
| am learning   | $\frac{1+1}{7+7}$           | $\frac{0+1}{2+7}$           |
| learning nlp  | $\frac{1+1}{7+7}$           | $\frac{0+1}{2+7}$           |
| am sad        | $\frac{0+1}{7+7}$           | $\frac{1+1}{2+7}$           |

6. Compute naive bayes for testing any new sentance:
	- Note, new n-grams are simply excluded from the calculation

$$
x_{3} = \text{I am happy today}
$$

$$
\prod^{m}_{i=1} \frac{p(w_{i} \vert \text{pos})}{p(w_{i} \vert \text{neg})} = \frac{\frac{3}{14}}{\frac{2}{9}} \times \frac{\frac{2}{14}}{\frac{1}{9}} = 1.24
$$

7. Calculate the log likelihood of the final output with a prior term:
	- Note, the prior term refers to $\frac{p(\text{pos})}{p(\text{neg})}$
	- This will improve the computation performance
	- Specifically, taking the products of many decimals runs the risk of observing underflow
	- Meaning, a certain decimal may not fit into memory

$$
\log(\frac{p(\text{pos})}{p(\text{neg})}) + \sum^{m}_{i=1} \log(\frac{p(w_{i} \vert \text{pos})}{p(w_{i} \vert \text{neg})}) = \log(\frac{\frac{7}{9}}{\frac{2}{9}}) + \log(\frac{\frac{3}{14}}{\frac{2}{9}}) + \log(\frac{\frac{2}{14}}{\frac{1}{9}}) = 0.63
$$

8. Classify a given sentance by multiplying the probabilities of words found within the sentance:

$$
0.63 > 0 \implies \text{This sentance has a positive sentiment}
$$

9. Make sure the dataset is balanced
	- Meaning, the log of the prior term should equal $0$
	- In this example, our dataset isn't well-balanced

$$
\log(\frac{p(\text{pos})}{p(\text{neg})}) = \log(\frac{\frac{7}{9}}{\frac{2}{9}}) = 0.54 \not = 0
$$

### General Implementation of Naive Bayes
```python
# Format tweets by removing stop words, punctuation, etc.
clean_tweets = format_tweets(tweets)

# Build vocabulary on training data
vocab = build_vocab(clean_tweets)

# Build dictionary of frequencies
freqs = build_freqs(clean_tweets, vocab)

# Apply laplacian smoothing to avoid 0s
smooth_freqs = lap_smooth(freqs)

# See if dataset is balanced
log_prior(smooth_freqs) == 0

# Use naive bayes to classify sentiment
weights = train_nb(smooth_freqs, labels)

# Preprocess test data
clean_new_tweets = format_tweets(new_tweet)

# Test trained model
sentiment = test_model(clean_new_tweet, weights)
```

### Sentiment Analysis using Recurrent Neural Networks
1. Load in the data:
	- Let's say we have $5000$ positive tweets and $5000$ negative tweets
	- Suppose our training set contains $80 \%$ of the total tweets and our test set contains $20 \%$ of the total tweets
	- We need to make sure the positive and negative tweets are evenly distributed across both training and test sets
2. Preprocess tweets
	- Maybe convert uppercase to lowercase
	- Maybe remove symbols
	- Maybe remove numbers
	- Maybe remove stop words
	- Maybe remove usernames
3. Build a vocabulary:
	- Parse each tweet by adding unique words to the vocabulary
	- Again, preprocess the tweet before building a vocabulary
	- The vocabulary is built on training data
	- There are many broad vocabularies already built for us
	- These pre-built vocabularies may work for our specific use-case
	- However, we may be more interested in building our own if our project requires a more individualized vocabulary
4. Convert preprocessed tweets to tensors:
	- After preprocessing data, we tokenize tweets into tensors
	- These tensors may have padding based on the length of the longest tweet within the batch
	- Usually, the tensor values are hashes of each word's index in the vocabulary
5. Build supervised model with embedding layer
	- A typical sentiment analysis model includes an initial word embedding layer
		- An embedding layer is a trainable layer with weights
		- Embedding layers are commonly used to map discrete vectors representing an individual tweet to smaller vectors
		- The values in word embeddings usually represent some learned contextual value
		- These valuess become the weights in the embedding layer
	- The output value can be:
		- A binary value representing positive or negative sentiment
		- A decimal between $0$ and $1$ representing the probability of positive sentiment
	- The output layer could be a sigmoid or softmax layer
6. Train the model
	- Train the model using:
		- Optimizers like Adam
		- Batching techniques like bucketing
		- etc.
7. Test the model
	- Predict sentiments using new data

### General Implementation of Sentiment Analysis
```python
# 1a. Load the data
pos_tweets, neg_tweets = load_tweets()

# 1b. Split data into training set
train_pos = pos_tweets[:4000]
train_neg = neg_tweets[:4000]
train_x = train_pos + train_neg 

# 1c. Split data into test set
test_pos = pos_tweets[4000:]
test_neg = neg_tweets[4000:]
test_x  = test_pos + test_neg

# 1d. Create labels for training and test sets
train_y = np.append(np.ones(len(train_pos)), np.zeros(len(train_neg)))
test_y  = np.append(np.ones(len(test_pos)), np.zeros(len(test_neg)))

# 2. Preprocess data
train_x, test_x = preprocess_tweets()

# 3. Create Vocabulary
vocab = {'__PAD__': 0, '__</e>__': 1, '__UNK__': 2}
for tweet in train_x:
	processed_tweet = process_tweet(tweet)
	for word in processed_tweet:
		if word not in vocab:
			vocab[word] = len(vocab)

# 4a. Initialize tokenizer for tweets
data_pipeline = trax.data.Serial(
	trax.data.Tokenize(vocab_file='en_8k.subword', keys=[0]),
	trax.data.Shuffle(),
	trax.data.FilterByLength(max_length=30, length_keys=[0]),
	trax.data.BucketByLength(boundaries=[5,10,30],batch_sizes=[1,5,10],length_keys=[0]),
	trax.data.AddLossWeights()
	)

# 4b. Tokenize and batch tweets, then output as generator
streamed_batches = data_pipeline(tweets)

# 5. Initialize model
model = tl.Serial(
    tl.Embedding(vocab_size=8192, d_feature=256),
    tl.Mean(axis=1),  # Average on axis 1 (length of sentence)
    tl.Dense(2),      # Classify 2 classes
    tl.LogSoftmax()   # Produce log-probabilities
    )

# 6a. Initialize training task
train_task = training.TrainTask(
    labeled_data=streamed_batches,
    loss_layer=tl.WeightedCategoryCrossEntropy(),
    optimizer=trax.optimizers.Adam(0.01),
    n_steps_per_checkpoint=500,
)

# 6b. Initialize evaluation task
eval_task = training.EvalTask(
    labeled_data=streamed_eval_batches,
    metrics=[tl.WeightedCategoryCrossEntropy(), tl.WeightedCategoryAccuracy()],
    n_eval_batches=20  # For less variance in eval numbers
    )

# 6c. Prepare training loop and saving checkpoints to output_dir
training_loop = training.Loop(
    model,
    train_task,
    eval_tasks=[eval_task],
    output_dir='~/output_file.txt'
    )

# 6d. Run 2000 steps (batches)
training_loop.run(2000)

# 7. Predict sentiment on test data
example_input = next(eval_batches_stream)[0][0]
example_input_str = trax.data.detokenize(example_input, vocab_file='en_8k.subword')
sentiment_log_probs = model(example_input[None, :])  # Add batch dimension
print(f'example input_str: {example_input_str}')
print(f'Model returned sentiment probabilities: {np.exp(sentiment_log_probs)}')
```

---

### References
- [Course on Sentiment Analysis](https://www.coursera.org/learn/classification-vector-spaces-in-nlp/lecture/QYcqq/supervised-ml-sentiment-analysis)
- [Sample Implementation of Naive Bayes with N-Grams](https://stackoverflow.com/a/48004407/12777044)
- [Example of Sentiment Analysis using Trax](https://github.com/google/trax#models)
- [Notion of Bucketing in Machine Translation](https://stackoverflow.com/a/49823660/12777044)