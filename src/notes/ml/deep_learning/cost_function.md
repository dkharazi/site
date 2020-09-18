---
title: "Cost Function"
draft: false
weight: 8
katex: true
---

### Motivating Cost Functions
- Up until now, we've been using a quadratic cost function because we've only been dealing with regression
- However, we can use other cost functions for other purposes
- For example, we typically use a cross-entropy cost function for classification problems, and a quadratic cost function for regression problems
- We'll know which cost function to choose once we determine how to represent the output of our model

### Assumptions of Cost Functions
- For backpropagation to work, we need to make two assumptions about the form of the cost function:
	1. A cost function can be written as an average
	2. A cost function can be written as a function of the outputs
- For example, the quadratic cost function satisfies both assumptions:

$$
J(w,b) = \frac{1}{2m} \sum_{i=1}^{m} (h(x) - y)^{2}
$$

- In other words, our cost function is an average due to the $\frac{1}{2m}$ term
- We need this assumption because backpropagation involves computin
g the partial derivatives $\frac{\partial J(w,b)}{\partial w}$ and $\frac{\partial J(w,b)}{\partial b}$ for a single training example
- Therefore, we take an average over all of these partial derivatives so our cost function is effectively able to represent a measure of these partial derivatives
- The quadratic cost function satisfies the second assumption as well because it takes in the outputs of our activations functions
- In other words, our cost function satisfies this assumption since our predictions $h(x)$ are the output of our activation functions

### Describing the Cross-Entropy Cost Function
- Up until now, we've mostly used the quadratic cost function to learn $\theta_{0}$ and $\theta_{1}$ for regression problems
- However, we can use a different cost function for classification problems, and other cost functions for other applications
- For classification problems, we can use the cross-entropy cost function:

$$
Cost(h_{\theta}(x),y) = \begin{cases} - \log (h_{\theta}(x)) &\text{if } y=1 \cr - \log (1 - h_{\theta}(x)) &\text{if } y=0 \end{cases}
$$

- This is also known as the *Bernoulli negative log-likelihood* and *Binary Cross-Entropy*
- This cost function has its own gradient with respect to the output of a neural network
- This cost function is typically used in logistic regression

### Cost Function and Loss Function
- We typically use the terms cost and loss functions interchangeably
- However, there is actually a slight distinction between the two
- Specifically, we can define a cost function as the following:

$$
J(w,b) = \frac{1}{m} \sum_{i=1}^{m} \mathcal{L}(\hat{y}, y)
$$

- There are many types of loss functions that we can plug into a cost function
- We could use a cross-entropy loss function for logistic regression:

$$
\mathcal{L}(\hat{y}, y) = y \log(\hat{y}) + (1-y)\log(1-\hat{y})
$$

- Or we could use a quadratic loss function for linear regression:

$$
\mathcal{L}(\hat{y}, y) = (\hat{y} - y)^{2}
$$

---

### tldr
- A cost function is a measure of *how good* a neural network did with respect to its given training sample and its expected output
- It uses parameters, such as weights and biases, to do this
- A cost function returns a single value (not a vector) because it rates how good the neural network performs as a whole
- Cost functions typically rely on two assumptions, which are hard to enforce and usually broken
- Therefore, the only real requirement for backpropagation is that we can define gradients on all the computation steps between:
	- Weights we want to backpropagate into
	- And the cost function we want to backpropagate from
- These gradients don't necessarily need to be mathematically well defined, or even correct and unbiased (e.g. straight-through gradient estimators)

---

### References
- [6.2 Gradient-Based Learning](http://www.deeplearningbook.org/contents/mlp.html#pf6)
- [List of Cost Functions](https://jmlb.github.io/flashcards/2018/04/21/list_cost_functions_fo_neuralnets/)
- [Uses of Cost Functions](https://stats.stackexchange.com/questions/154879/a-list-of-cost-functions-used-in-neural-networks-alongside-applications)
- [Cross-Entropy and Quadratic Loss Functions](https://machinelearningmastery.com/loss-and-loss-functions-for-training-deep-learning-neural-networks/)
- [PyTorch Cost Functions](https://github.com/torch/nn/blob/master/doc/criterion.md#nn.BCECriterion)
