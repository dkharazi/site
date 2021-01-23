---
title: "POS Tagging and NER"
draft: false
weight: 17
katex: true
---

### Describing Part-of-Speech Tagging
- Part-of-Speeach (or POS) tagging is used for determining whether or not a given word belongs to part-of-speech (or some grammatical group)
- Specifically, POS tagging typically refers to determining whether a word is a noun, verb, adjective, etc.
- For example, the sentance `Manchester United is looking to sign Harry Kane for $90 million dollars` could return the following using POS tagging

| Word       | POS   |
| ---------- | ----- |
| Manchester | PRON  |
| United     | ADJ   |
| is         | VERB  |
| looking    | VERB  |
| to         | PREP  |
| sign       | VERB  |
| Harry      | PRON  |
| Kane       | PRON  |
| for        | PREP  |
| $          | PUNCT |
| 90         | NUM   |
| million    | NUM   |
| dollars    | NOUN  |

- We can see that POS tagging determines our results by taking in the context of the entire sentance
- Therefore, POS is more of a global problem, since there can be relationships between the first and last word of a sentance

### Describing Named Entity Recognition
- Named Entity Recognition (or NER) is used for determining whether or not a given word belongs to a named entity
- Named entities refer to people, locations, organizations, time expressions, etc.
- Specifically, NER tagging typically refers to determining whether a word is in some general group
- For example, the sentance `Manchester United is looking to sign Harry Kane for $90 million dollars` could return the following using NER:

| Phrase              | NE     |
| ------------------- |------- |
| Manchester United   | ORG    |
| Harry Kane          | PERSON |
| $90 million dollars | MONEY  |

- This problem can be broken down into the following steps:
	- Detect of names (i.e. distinguish between two different words Manchester and United versus one word Manchester United)
	- Classify names into the corresponding categories (i.e. need to manually determine which words belong to which category beforehand)
- Therefore, NER is more of a local problem, since we only really need to look at surrounding words when recognizing a named entity

### Applications of NER Systems
- Customer service
- Search engine efficiency
	- Web scrapes millions of web sites
	- Using NER to extract and store these entities
	- These tags are compared to the search tags
- Recommendation engines
	- Using NER to extract tags from your history
	- Compare these tags to tags of interest
- Automatic trading
	- Web scraping for information about publicly traded companies
	- Using NER to extract text about the CEO of each company
	- Performing sentiment analysis on the text about CEOs

### Named Entity Recognition with LSTM
1. Initialize a dictionary of entities:
	- This involves assigning entity classes with a unique number
	- For example, a filler may be $0$, a personal name may be $1$, a geographical location may be $2$, and a time indicator may be $3$
2. Load in the data:
	- Suppose each observation is a tweet
3. Preprocess tweets:
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
	- The following tweet maps to a tensor:
	$$
	\text{i flew to boston last monday} \to [362, 89, 103, 4406, 12, 908]
	$$
5. Build supervised model with embedding layer:
	- A typical NER system includes an initial word embedding layer
		- An embedding layer is a trainable layer with weights
		- Embedding layers are commonly used to map discrete vectors representing an individual tweet to smaller vectors
		- The values in word embeddings usually represent some learned contextual value
		- These valuess become the weights in the embedding layer
	- The output value is a softmax value:
		- This predicts the probability a word is associated with each of the $K$ number of classes
		- The $K$ number of classes is $4$:
			- Filler
			- Personal name
			- Geographical location
			- Time indicator
6. Train the model
	- Train the model using:
		- Optimizers like Adam
		- Batching techniques like bucketing
		- etc.
7. Test the model
	- Using new data, predict the probabilities of a word in a sentence being associated to each class

### General Implementation of NER
```python
# 1. Initialize a dictionary of entities
entities = {
	0: 'filler',
	1: 'personal name',
	2: 'geographical location',
	3: 'time indicator'
	}

# 2. Split data into training set
train_x, train_y, test_x, test_y = load_tweets()

# 3. Preprocess data
train_x, test_x = preprocess_tweets()

# 4. Create Vocabulary
vocab = {'__PAD__': 0, '__</e>__': 1, '__UNK__': 2}
for tweet in train_x:
	processed_tweet = process_tweet(tweet)
	for word in processed_tweet:
		if word not in vocab:
			vocab[word] = len(vocab)

# 5a. Initialize tokenizer for tweets
data_pipeline = trax.data.Serial(
	trax.data.Tokenize(vocab_file='en_8k.subword', keys=[0]),
	trax.data.Shuffle(),
	trax.data.FilterByLength(max_length=30, length_keys=[0]),
	trax.data.BucketByLength(boundaries=[5,10,30],batch_sizes=[1,5,10],length_keys=[0]),
	trax.data.AddLossWeights()
	)

# 5b. Tokenize and batch tweets, then output as generator
streamed_batches = data_pipeline(tweets)

# 6. Initialize model
model = tl.Serial(
    tl.Embedding(vocab_size=8192, d_feature=256),
    tl.LSTM(),        # LSTM cell
    tl.Dense(2),      # Classify 2 classes
    tl.LogSoftmax()   # Produce log-probabilities
    )

# 7a. Initialize training task
train_task = training.TrainTask(
    labeled_data=streamed_batches,
    loss_layer=tl.WeightedCategoryCrossEntropy(),
    optimizer=trax.optimizers.Adam(0.01),
    n_steps_per_checkpoint=500,
)

# 7b. Initialize evaluation task
eval_task = training.EvalTask(
    labeled_data=streamed_eval_batches,
    metrics=[tl.WeightedCategoryCrossEntropy(), tl.WeightedCategoryAccuracy()],
    n_eval_batches=20  # For less variance in eval numbers
    )

# 7c. Prepare training loop and saving checkpoints to output_dir
training_loop = training.Loop(
    model,
    train_task,
    eval_tasks=[eval_task],
    output_dir='~/output_file.txt'
    )

# 7d. Run 2000 steps (batches)
training_loop.run(2000)

# 8. Predict sentiment on test data
example_input = next(eval_batches_stream)[0][0]
example_input_str = trax.data.detokenize(example_input, vocab_file='en_8k.subword')
sentiment_log_probs = model(example_input[None, :])  # Add batch dimension
print(f'example input_str: {example_input_str}')
print(f'Model returned sentiment probabilities: {np.exp(sentiment_log_probs)}')
```

### References
- [Lecture about Training NER Networks](https://www.coursera.org/learn/sequence-models-in-nlp/lecture/vUAlY/training-ners-data-processing)
- [Difference between POS Tagging and NER Recognition](https://www.quora.com/What-is-the-difference-between-POS-Tag-and-Named-Entity-Recognition)
- [Example of POS Tagging and NER Recognition](https://stackabuse.com/python-for-nlp-parts-of-speech-tagging-and-named-entity-recognition/)
