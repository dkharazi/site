---
title: "Duplicate Checking"
draft: false
weight: 19
katex: true
---

### Duplicate Checking with Siamese Networks
1. Load in the data:
	- Suppose our data consists of Quora questions
    - Prepare the training set so each question is paired with a duplicate or non-duplicate:

    | Question 1          | Question 2           | Is Duplicate? |
    | ------------------- | -------------------- | ------------- |
    | What is your age?   | How old are you?     | true          |
    | Where are you from? | Where are you going? | false         |
    | ...                 | ...                  | ...           |

2. Gather questions into batches:
    - Each question in batch $1$ should pair with its duplicate question in batch $2$
    - Note, there shouldn't be any duplicate questions within a batch
    - Meaning, each question in an individual batch should be unique
    - The following table illustrates these pairings:

    | Batch 1             | Batch 2              |
    | ------------------- | -------------------- |
    | What is your age?   | How old are you?     |
    | Where are you from? | Where were you born? |
    | ...                 | ...                  |

3. Preprocess questions
	- Maybe convert uppercase to lowercase
	- Maybe remove symbols
	- Maybe remove numbers
	- Maybe remove stop words
	- Maybe remove usernames
4. Build a vocabulary:
	- Parse each question by adding unique words to the vocabulary
	- Again, preprocess the quesstion before building a vocabulary
	- The vocabulary is built on training data
	- There are many broad vocabularies already built for us
	- These pre-built vocabularies may work for our specific use-case
	- However, we may be more interested in building our own if our project requires a more individualized vocabulary
5. Convert preprocessed questions to tensors:
	- After preprocessing data, we tokenize questions into tensors
	- These tensors may have padding based on the length of the longest question within the batch
	- Usually, the tensor values are hashes of each word's index in the vocabulary
6. Build supervised model with embedding layer
	- A typical duplicate checking system includes an initial word embedding layer
		- An embedding layer is a trainable layer with weights
		- Embedding layers are commonly used to map discrete vectors representing an individual question to smaller vectors
		- The values in word embeddings usually represent some learned contextual value
		- These values become the weights in the embedding layer
	- The output value can be:
		- A normalized vector of the LSTM network
7. Train the model
	- Train the model using:
		- Optimizers like Adam
		- Batching techniques like bucketing
		- etc.
8. Pass the two questions into the same LSTM model:
9. Compute a cosine similarity score on the normalized output of the two questions
10. Test the model
	- Convert each input into an array of numbers
    - Feed the inputs into our model
    - Compare the outputs $v_{1}$ and $v_{2}$ using cosine similarity
    - Test against a threshold $\tau$

### General Implementation of Duplicate Checking
```python
# 1. Split data into training set
train_x, train_y, test_x, test_y = load_questions()

# 2. Pair questions into duplicates
train_x, train_y, test_x, test_y = pair_questions()

# 3. Preprocess data
train_x, test_x = preprocess_questions()

# 4. Create Vocabulary
vocab = {'__PAD__': 0, '__</e>__': 1, '__UNK__': 2}
for question in train_x:
	processed_question = process_question(question)
	for word in processed_question:
		if word not in vocab:
			vocab[word] = len(vocab)

# 5a. Initialize tokenizer for quesstions
data_pipeline = trax.data.Serial(
	trax.data.Tokenize(vocab_file='en_8k.subword', keys=[0]),
	trax.data.Shuffle(),
	trax.data.FilterByLength(max_length=30, length_keys=[0]),
	trax.data.BucketByLength(boundaries=[5,10,30],batch_sizes=[1,5,10],length_keys=[0]),
	trax.data.AddLossWeights()
	)

# 5b. Tokenize and batch tweets, then output as generator
streamed_batches = data_pipeline(questions)

# 6a. Initiailize normalization function for output layer in LSTM
def normalize(x):  # normalizes the vectors to have L2 norm 1
    return x / fastnp.sqrt(fastnp.sum(x * x, axis=-1, keepdims=True))

# 6b. Initialize model
model = tl.Serial(
    tl.Embedding(vocab_size=8192, d_feature=256),
    tl.LSTM(d_model=2)  # LSTM layes
    tl.Mean(axis=1),    # Average on axis 1 (length of sentence)
    tl.Fn('Normalize', lambda x: normalize(x))  # Apply normalization
    )

# 7a. Initialize triplet loss function
def TripletLoss(margin=0.25):
    triplet_loss_fn = partial(TripletLossFn, margin=margin)
    return tl.Fn('TripletLoss', triplet_loss_fn)

# 7b. Compute cosine similarity for triplet loss
def TripletLossFn(v1, v2, margin=0.25):
    scores = fastnp.dot(v1,v2.T)  # pariwise cosine similarity

    batch_size = len(scores)
    positive = fastnp.diagonal(scores)
    negative_without_positive = scores - fastnp.eye(batch_size) * 2.0 
    closest_negative = negative_without_positive.max(axis = 1)
    negative_zero_on_duplicate = (1.0 - fastnp.eye(batch_size)) * scores
    mean_negative = fastnp.sum(negative_zero_on_duplicate, axis=1) / (batch_size - 1)

    triplet_loss1 = fastnp.maximum(margin - positive + closest_negative, 0 )
    triplet_loss2 = fastnp.maximum(margin - positive + mean_negative, 0 )
    triplet_loss = fastnp.mean(triplet_loss1 + triplet_loss2)
    
    return triplet_loss

# 7c. Initialize training task with TripletLoss
train_task = training.TrainTask(
    labeled_data=streamed_batches,
    loss_layer=tl.TripletLoss(),
    optimizer=trax.optimizers.Adam(0.01),
    n_steps_per_checkpoint=500,
)

# 7d. Initialize evaluation task
eval_task = training.EvalTask(
    labeled_data=streamed_eval_batches,
    metrics=[tl.WeightedCategoryCrossEntropy(), tl.WeightedCategoryAccuracy()],
    n_eval_batches=20  # For less variance in eval numbers
    )

# 7e. Prepare training loop and saving checkpoints to output_dir
training_loop = training.Loop(
    model,
    train_task,
    eval_tasks=[eval_task],
    output_dir='~/output_file.txt'
    )

# 7f. Run 2000 steps (batches)
training_loop.run(2000)

# 8a. Initialize prediction function for duplicates
def predict(question1, question2, threshold, model, vocab, data_generator, verbose):
    q1 = nltk.word_tokenize(question1)  # tokenize
    q2 = nltk.word_tokenize(question2)  # tokenize
    Q1, Q2 = [], []
    for word in q1:  # encode q1
        Q1 += [vocab[word]]
    for word in q2:  # encode q2
        Q2 += [vocab[word]]
        
    # Call the data generator (built in Ex 01) using next()
    Q1, Q2 = next(data_generator([Q1], [Q2], 1, vocab['<PAD>']))
    v1, v2 = model((Q1,Q2))

    # compute cosine similarity
    d = fastnp.dot(v1, v2.T)

    # is d greater than the threshold?
    res = d > threshold
    if(verbose):
        print("Q1  = ", Q1, "\nQ2  = ", Q2)
        print("d   = ", d)
        print("res = ", res)
    return res

# 8b. Predict duplicates on test data
model = Siamese()
question1 = "Do they enjoy eating the dessert?"
question2 = "Do they like hiking in the desert?"
# 1 means it is duplicated, 0 otherwise
predict(question1 , question2, 0.7, model, vocab, data_generator, verbose=True)
```

### References
- [Stanford Deep Learning Lectures](http://cs224d.stanford.edu/lectures/)
- [Stanford Lecture about LSTMs](http://cs224d.stanford.edu/lectures/CS224d-Lecture9.pdf)
- [Lecture about Training Siamese Networks](https://www.coursera.org/learn/sequence-models-in-nlp/lecture/KDqML/training-testing)
- [Implementation of a Siamese Network in Trax](https://zhangruochi.com/Question-duplicates/2020/08/23/)
- [Another Implementation of a Siamese Network in Trax](https://github.com/ThinamXx/DuplicateQuestions__Recognition)
- [Paper about Siamese Networks used in Image Recognition](https://www.cs.cmu.edu/~rsalakhu/papers/oneshot1.pdf)
- [Applications of Siamese Networks](mathworks.com/help/deeplearning/ug/train-a-siamese-network-to-compare-images.html)
- [Article about One-Shot Learning](https://bdtechtalks.com/2020/08/12/what-is-one-shot-learning/)