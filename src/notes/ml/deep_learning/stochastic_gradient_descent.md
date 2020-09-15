---
title: "Stochastic Gradient Descent"
draft: false
weight: 20
katex: true
---

### Motivating other Optimization Algorithms
- Gradient descent can vary in terms of the number of iterations it takes to converge to parameters values
- The number of iterations typically determines the stability of a gradient used to update the parameters
- There are typically three types of gradient descent
	- Batch gradient descent
		- This is what we've been using up until this point
	- Stochastic gradient descent
		- This is a different type of gradient descent
	- Mini batch gradient descent
		- This is a hybrid between the above two

### Motivating Stochastic Gradient Descent
- Gradient descent can lead to slow traning on very large datasets
- This is because one iteration requires a prediction for each instance in the training dataset
- When we have very large data, we could use stochastic gradient descent

### Describing Stochastic Gradient Descent
- Stochastic gradient descent (SGD) is a variation of gradient descent
- In this variation, the gradient descent procedure updates parameters for each training instance, rather than at the end of each iteration
- Specifically, we calculate the error and update the parameters accordingly for each training observation

### Upsides
- SGD can quickly give us insight about the performance and rate improvement of our network
	- This is because parameters are updated so frequently
- SGD is sometimes useful for beginners
	- This is sometimes simpler to understand than other variants of gradient descent
- SGD can sometimes lead to faster learning
	- The increased frequency of parameter updates can result in faster learning
- SGD can lead to premature parameter convergence
	- The noisy update process can lead to networks avoiding the local minima

### Downsides
- SGD can be more computationally expensive compared to other optimization algorithms
	- This is because the parameters are compared and updated so frequently
- SGD can result in updates leading to noisy gradient
	- The gradients have a high variance over training epochs
- SGD can sometimes lead to worse accuracy
	- The noisy learning process can make it hard for the algorithm to settle on a minimum of the cost function

---

### tldr
- Stochastic gradient descent (SGD) is a variation of gradient descent
- In this variation, the gradient descent procedure updates parameters for each training instance, rather than at the end of each iteration
- Specifically, we calculate the error and update the parameters accordingly for each training observation

---

### References
- [4.3 Gradient-Based Optimization](http://www.deeplearningbook.org/contents/numerical.html)
- [5.9 Stochastic Gradient Descent](http://www.deeplearningbook.org/contents/ml.html)
- [6.2 Gradient-Based Learning](http://www.deeplearningbook.org/contents/mlp.html#pf6)
- [Introduction to Mini Batch](https://machinelearningmastery.com/gentle-introduction-mini-batch-gradient-descent-configure-batch-size/)
- [Gradient Descent for Machine Learning](https://machinelearningmastery.com/gradient-descent-for-machine-learning/)
