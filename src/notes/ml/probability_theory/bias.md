---
title: "Bias-Variance Tradeoff"
draft: false
weight: 7
katex: true
---

### Introducing Bias
- Bias typically refers to the amount of training error
- Variance typically refers to the amount of testing error
- Roughly, bias tends to occur when we capture noise instead of signal
- Our goal is to find a model that has low bias and low variance

### Decomposition of Error
- Error is the difference between the true value and observed value
- We typically refer to our population parameter as our true value
- An error is typically represented as a combination of a bias component, variance component, and irreducible errors:

$$ Error = Bias^{2} + Variance + Irreducible Error $$

- Bias refers to the difference between a true value and a prediction:

$$ Bias = \text{E}[\hat{\theta}] - \theta $$

- Again, our true value is typically some population parameter, and our predicted value is some estimate
- Variance can be thought of as the difference between our predicted value and the average predicted value:

$$ Variance = \text{E}[\hat{\theta} - \text{E}[\hat{\theta}]] $$

- Typically, our predicted value is some estimate, and our average predicted value represents the predicted value across many different samples
- Irreducible error can be thought of as the remaining error that comes from our inability to account for every variable in the world, which has some marginal effect on our response variable
- Irreducible error is defined as the variance of the error:

$$ Irreducible Error = \sigma_{e}^{2} $$

### Properties of Estimators
- Unbiasedness
	- An estimator is unbiased if the expected value of the error term is 0
	- This property relates to the bias component in the bias-variance tradeoff
	- An unbiased estimator can be a good indication that we will receive a low training error in the bias-variance tradeoff
- Consistency
	- An estimator is consistent if our parameter estimate converges to the true parameter as $n \rarr \infty$
	- This property relates to the variance component in the bias-variance tradeoff
	- A consistent estimator can be a good indication that we will receive a low variance in the bias-variance tradeoff
- To summarize, unbiasedness and consistency are not equivalent concepts
- Unbiasedness is a statement about the expected value of the sampling distribution of the estimator
- Consistency is a statement about where the sampling distribution of the estimator is going as the sample size increases

### Bias
- The bias of an estimator can be adjusted
- Specifically, the bias of an estimator will change if the training error increases or decreases
- Bias is caused by systematic and statistical errors
- Specific sources of bias include the following:
	- A lack of training data or a high sampling error in our training set
	- Very few features in our training data
	- Choosing an overly simple or complex model
	- Flaws in the modeling process
		- For example, we may not be using the proper equations correctly
		- Or, we may need to decrease regularization
	- Flaws in the measurement instrument
	- Flaws in the measurement process
	- Flaws in determining the best way to measure some variable of interest
		- For example, we may correctly measure some imperfect proxy for what we're really interested in, but will still receive poor accuracies, since we are measuring an imperfect proxy to begin with

### Variance
- The variance of an estimator can be adjusted
- Specifically, the variance of an estimator will change if the testing or cross-validation error increases of decreases
- Variance is caused by sampling error or mistaking noise for signal during the training portion of our modeling process
- Specific sources of variance include:
	- A lack of testing data or a high sampling error in our testing set
	- Too many features in our training data
	- Flaws in the model
		- For example, we may need to train the data on a less complicated model or an entirely different model altogether
	- Flaws in the modeling process
		- For example, we may need to increase regularization

### Irreducible Error
- Irreducible error can also be referred to as the following terms for short: error, random error, noise, the error term, or $\epsilon$
- Irreducible error represents inherent randomness caused by natural variability in a population parameter
- This natural variability is a result of not knowing every variable and its true relationship with every other random variables in the world
- A certain level of irreducible error will always exist, and is even incorporated in population parameters:

$$ \mu_{Y|X} = \beta_{0} + \beta_{i}X_{i} + \epsilon_{i} $$

- A random error (or noise) is thought of as a random variable itself with a mean of 0
- The error term is mathematically defined as the following:

$$ \epsilon_{i} = Y_{i} − (\beta_{0} + \beta{1}*X_{i}) $$
$$ \text{E}[\epsilon_{i}] = 0 $$
$$ \text{Var}[\epsilon_{i}] = \sigma^{2} $$

- Irreducible error represents the standard deviation $\sigma$ of the random error term $\epsilon$
- This is because it wouldn't make any sense for the irreducible error to be the actual error term, since the irreducible error is a fixed number representing uncertainty, rather than a random variable, which is a function

### Overfitting and Underfitting
- A high bias and low variance leads to underfitting
- A low bias and high variance leads to overfitting 
- We can remedy any underfitting by doing any of the following:
	- Making our model more complex
	- Adding more features to our model
	- Training our model for a longer period of time
- We can remedy any overfitting by doing any of the following:
	- Relaxing our tuning for hyperparameters
	- Regularizing our model
	- Removing features from our model
	- Including more data in our testing set

### Synonyms for Bias-Variance Tradeoff
- The bias-variance tradeoff is essentially a tradeoff between simplicity and complexity
- It is a tradeoff between generalization and specificity
- Learning algorithms typically over-learns a training dataset, because that's exactly what we are asking it to do
- It is our job to apply some generalization to the model in order to find a balance
- The bias-variance tradeoff is essentially a tradeoff between fitting a model to the training dataset as closely as possible and fitting a generalized model

---

### tldr

- An estimator (or our model) has bias
- An estimator (or our model) has variance
- The random variable in our model has an expected value and variance
- The bias of an estimator refers to how much predicted values differ from true values:

$$ \text{bias} = \text{predicted} - \text{true} $$

- The variance of an estimator refers to how predictions made on the same value vary on different realizations of the model:

$$ \text{variance} = \text{predicted} - \text{average predicted value} $$

- The bias of an estimator can be adjusted if we adjust the predicted values
- The variance of an estimator can be adjusted if we adjust the predicted values
- The variance of a random variable can be adjusted if we adjust the observations (i.e. add, decrease, modify, etc.)

---

### References
- [Bias and Variance Illustrations](http://scott.fortmann-roe.com/docs/BiasVariance.html)
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Handling the Bias-Variance Tradeoff](https://www.learnopencv.com/bias-variance-tradeoff-in-machine-learning/)
