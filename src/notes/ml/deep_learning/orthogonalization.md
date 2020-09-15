---
title: "Orthogonalization"
draft: false
weight: 14
katex: true
---

### Introducing a Conceptual Framework for Deep Learning
- We can represent the deep learning process in a few general steps
	1. Optimize a cost function $J$ using any of the following:
		- Gradient descent
		- Momentum
		- RMSprop
		- Adam
		- etc.
	2. Reduce overfitting using any of the following:
		- Regularization
		- Getting more data
		- etc.
- Most of the complication around deep learning stems from tuning the hyperparameters for each algorithm
- We do this because our goal is to find two algorithms:
	- One algorithm that best optimizes the cost function
	- Another algorithm that best prevents overfitting

### Optimizing a Cost Function
- As stated previously, optimizing a cost function $J$ is the first step in our framework
- For this step, our only goal is to find the parameters $w$ and $b$ that minimize $J$
- Common methods for optimizing a cost function include gradient descent and Adam
- However, we can use other approaches, such as RMSprop, Momentum, etc.

### Reducing Overfitting
- As stated previously, reducing overfitting is the second step in our framework
- For this step, our only goal is to reduce variance
- Common methods for reducing overfitting include regularization and getting more data
- However, we can use other approaches, such as early stopping, data segmentation, etc.

### Defining Orthogonalization
- Orthogonalization is not specific to deep learning
- Orthogonalization is a general concept that carries a different meaning in mathetmatics, computer science, and debate
- Roughly speaking, orthogonalization refers to components acting independently of each other
- Said another way, two things are orthogonal if they act in isolation of each other

### Relating Orthogonalization to our Framework
- Here, orthogonalization refers to thinking of one task at a time
- Generally speaking, organizing the deep learning process into two orthogonal tasks can help reduce a lot of the complication around deep learning
- Specifically, organizing the deep learning process into two orthogonal tasks can help us with our development time and general intuition
- In other words, we should be executing these two tasks independently when designing a neural network

---

### tldr
- Orthogonalization is not specific to deep learning
- Roughly speaking, orthogonalization refers to components acting independently of each other
- Said another way, two things are orthogonal if they act in isolation of each other
- The deep learning process can be generalized into two orthogonal tasks:
	1. Optimizing a cost function $J$
	2. Reducing overfitting
---

### References
- [Orthogonalization and Overfitting](https://www.youtube.com/watch?v=BOCLq2gpcGU&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=8)
- [Usage of Orthogonalization outside of Mathematics](https://english.stackexchange.com/questions/12219/usage-of-the-word-orthogonal-outside-of-mathematics)
