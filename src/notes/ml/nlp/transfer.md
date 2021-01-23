---
title: "Transfer Learning"
draft: false
weight: 11
katex: true
---

### Introducing Transfer Learning
- Suppose someone has trained a deep network on an NLP task
- We may be interested in using the network if:
    - The network was trained on very large dataset
    - The network provides a very good accuracy
- If we're interested in a similar NLP task, then we may want to use this pre-trained network for our particular task
    - Then, we'll only need to train this network on a smaller set of data
- At a high level, we're essentially taking a network with parameters that are close enough to those parameters in our optimal network
    - To focus the network on our particular task, we just slightly tune the parameters by training the model on a small set of relevent data
- We may be interested in using a pre-trained network if:
    - The network was pre-trained for a task similar to ours
    - The network was pre-trained on a very large dataset
    - The network is very accurate
- The potential benefits of transfer learning are the following:
    - Reduced training time
    - Improvement in predictions
    - Training only needs a small dataset
- In general, the following rules of thumb hold true in transfer learning:
    - As our model grows larger, the accuracy improves
    - As our data grows larger, the accuracy improves
- The process of using a pre-trained network is called *transfer learning*

### Different Options and Types of Transfer Learning
- In general, there are two types of transfer learning
    - Feature-based transfer learning
    - Fine-tuning transfer learning
- *Feature-based* transfer learning takes the weights from the pre-trained model, then uses these weights as input into our own (new) model
    - Impying, we typically train the data on an entirely new model
- *Fine-tuning* transfer learning inputs our own data set into the pre-trained model
    - Implying, we rarely make changes to the pre-trained model
    - Sometimes, we may adjust the output layer
        - e.g. adding a softmax layer

### References
- [Stanford Deep Learning Lectures](http://cs224d.stanford.edu/lectures/)
- [Stanford Lecture about LSTMs](http://cs224d.stanford.edu/lectures/CS224d-Lecture9.pdf)
- [Lecture about Types of Transfer Learning](https://www.coursera.org/learn/attention-models-in-nlp/lecture/qMRXX/transfer-learning-in-nlp)
- [Lecture about the History of Neural Networks in NLP](https://www.coursera.org/learn/attention-models-in-nlp/lecture/iPUp8/elmo-gpt-bert-t5)
- [Lecture about Defining the BERT Model](https://www.coursera.org/learn/attention-models-in-nlp/lecture/lZX7F/bidirectional-encoder-representations-from-transformers-bert)
- [Lecture about Intuition of BERT Tasks](https://www.coursera.org/learn/attention-models-in-nlp/lecture/1g8LM/bert-objective)
- [Lecture about BERT Applications](https://www.coursera.org/learn/attention-models-in-nlp/lecture/EMBvt/fine-tuning-bert)
- [Defining and Pre-Training BERT](https://d2l.ai/chapter_natural-language-processing-pretraining/bert-pretraining.html)
- [Post about Pre-Training and Fine-Tuning Networks](https://stats.stackexchange.com/a/193451)
- [Paper about Alignment and Attention Models](https://arxiv.org/pdf/1409.0473.pdf)