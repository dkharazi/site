---
title: "Supervised Training using Trax"
draft: false
weight: 3
katex: true
---

### Sample Data Pipeline for Training
- In the previous section, we implemented a data pipeline in Trax
- There isn't any preprocessing run on the raw tweets
- Meaning, our example will train on uppercased words and symbols
- Before creating a data pipeline, the tweets are read in using standard Python
- Then, a tokenizer is implemented in Trax
- Finally, the tokenizer is applied to our tweets
- As a reminder, the code looks like the following:

```python
# Read in raw tweets
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

# Return generator
streamed_batches = data_pipeline(tweets)
```

### Sample Model for Training
- In an earlier section, we introduced layers
- Activation layers are wrapped in a `Serial` layer
- The `Serial` layer represents our neural network
- Other sub-layers can be added for creating word embeddings
- The following model can be used for sentiment analysis:

```python
# Initialize model
model = tl.Serial(
    tl.Embedding(vocab_size=8192, d_feature=256),
    tl.Mean(axis=1),  # Average on axis 1 (length of sentence).
    tl.Dense(2),      # Classify 2 classes.
    tl.LogSoftmax()   # Produce log-probabilities.
    )
```

### Introducing the Training `Task`
- The `TrainTask` class is used for defining the training architecture
- Specifically, it's used for defining the strategy behind:
    - Loss function
    - Any gradient optimizers, such as Adam
    - Logging checkpoints for parameter and accuracy evaluations after an $n$ number of steps have been taken
- A training step refers to one gradient update:
    - A single step implies $m$ number of observations are processed
    - Here, $m$ is the number of observations within a single batch
    - Thus, a step is an iteration over a single batch
    - **In other words, parameter updates happen after all of the observations within a batch have been forward propagated**
    - As a reminder, parameter updates refer to backward propagation
- The following is a sample training task:

```python
# Initialize training task
train_task = training.TrainTask(
    labeled_data=streamed_batches,
    loss_layer=tl.WeightedCategoryCrossEntropy(),
    optimizer=trax.optimizers.Adam(0.01),
    n_steps_per_checkpoint=500,
)
```

### Introducing the Testing `Task`
- The `EvalTask` class is used for defining the testing architecture
- Similar to `TrainTask`, it defines:
    - How to measure model performance as a function of steps
    - When to measure model performance as a function of steps
    - Determining which data to use
    - Determining which metrics to report
- The following is a sample testing task:

```python
# Initialize evaluation task
eval_task = training.EvalTask(
    labeled_data=streamed_eval_batches,
    metrics=[tl.WeightedCategoryCrossEntropy(), tl.WeightedCategoryAccuracy()],
    n_eval_batches=20  # For less variance in eval numbers
    )
```

### Introducing the Training `Loop`
- The `Loop` classs is used for running and performing the core training loop
- The number of steps taken by the training is given in the training task
- The training parameters run by `Loop` are initialized randomly
- First, we define the directory `output_dir` to which the output file will be written
- Next, we implement a `Loop` object that does the following:
    - Trains a given model on training data
        - The training data is given in the training task
    - Outlines the training architecture with a training task
    - Outlines the testing architecture with an evaluation task
- The following is a sample training loop:

```python
# Run training loop and save checkpoints to output_dir
training_loop = training.Loop(
    model,
    train_task,
    eval_tasks=[eval_task],
    output_dir='~/output_file.txt'
    )

# Run 2000 steps (batches)
training_loop.run(2000)
```

### Sample Training Output of Running `Loop`
- In the `Loop` class, we can write reporting output to a file
- Based on the arguments defined in our `TrainTask` and `EvalTask`, we can define the following:
    - Which metrics are reported to this file
    - How frequenty the metrics are reported to this file
- The following is an example of the reporting streamed to this file:

```text
Step      1: Ran 1 train steps in 0.78 secs
Step      1: train WeightedCategoryCrossEntropy |  1.33800304
Step      1: eval  WeightedCategoryCrossEntropy |  0.71843582
Step      1: eval      WeightedCategoryAccuracy |  0.56562500

Step    500: Ran 499 train steps in 5.77 secs
Step    500: train WeightedCategoryCrossEntropy |  0.62914723
Step    500: eval  WeightedCategoryCrossEntropy |  0.49253047
Step    500: eval      WeightedCategoryAccuracy |  0.74062500

Step   1000: Ran 500 train steps in 5.03 secs
Step   1000: train WeightedCategoryCrossEntropy |  0.42949259
Step   1000: eval  WeightedCategoryCrossEntropy |  0.35451687
Step   1000: eval      WeightedCategoryAccuracy |  0.83750000

Step   1500: Ran 500 train steps in 4.80 secs
Step   1500: train WeightedCategoryCrossEntropy |  0.41843575
Step   1500: eval  WeightedCategoryCrossEntropy |  0.35207348
Step   1500: eval      WeightedCategoryAccuracy |  0.82109375

Step   2000: Ran 500 train steps in 5.35 secs
Step   2000: train WeightedCategoryCrossEntropy |  0.38129005
Step   2000: eval  WeightedCategoryCrossEntropy |  0.33760912
Step   2000: eval      WeightedCategoryAccuracy |  0.85312500
```

### Sample Predictions and Testing After Training
- After training our model, we can test individual tweets by running them through our model
- The following is an example of testing a tweet:

```python
# Retrieve a single tokenized test from our evaluation set
example_input = next(eval_batches_stream)[0][0]

# Detokenize the test based on our vocab
example_input_str = trax.data.detokenize(example_input, vocab_file='en_8k.subword')
print(f'example input_str: {example_input_str}')
"example input_str: I first saw this when I was a teen in my last year of Junior High.<pad><pad><pad>"

# Predict using our trained model
sentiment_log_probs = model(example_input[None, :])  # Add batch dimension
print(f'Model returned sentiment probabilities: {np.exp(sentiment_log_probs)}')
"Model returned sentiment probabilities: [[3.984500e-04 9.996014e-01]]"

```

### Resources
- [Training Walkthrough on GitHub](https://github.com/google/trax)
- [Trax Quick Intro](https://colab.research.google.com/github/google/trax/blob/master/trax/intro.ipynb#scrollTo=djTiSLcaNFGa)
- [Defining Epochs and Training Steps](https://stackoverflow.com/a/44416034/12777044)
- [Documentation of Training Loop](https://trax-ml.readthedocs.io/en/latest/trax.supervised.html#trax.supervised.training.Loop)