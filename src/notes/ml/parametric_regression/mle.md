---
title: "Maximum Likelihood Estimation"
draft: false
weight: 1
katex: true
---

### Describing Maximum Likelihood Estimation
- Continuous random variables have a probability density function (also known as a likelihood function)
- Probability density functions take in sample data as input and return likelihoods as output
- Likelihoods represent the chance (or the joint probability) of observing the data given the parameters of a model, assuming the data is represented by the distribution we chose
- Maximum likelihood estimation is a method that determines values for the parameters of a model
- The parameter values are found such that they maximize the likelihood that the process (or random variable) described by the model produced the data that were actually observed
- The optimal parameters that maximize the likelihood are called the maximum likelihood estimates
- MLE can be seen as a special case of the MAP estimation, where we assume the parameters have a prior that is uniformly distributed

### An Example of the MLE
- Technically speaking, maximum likelihood estimation is a method of estimating the parameters of a distribution by finding the parameter values that maximize the likelihood of observing the data given our parameters
- For example, let's say we want to know the expected value of a normally-distributed random variable $X$
- Then, we would use MLE to determine the estimate of our $\mu$ parameter, which equals the $\text{E}(X)$
- In other words, we would use maximum likelihood estimation to find the value of the parameter that gives us the mode of our sample data
- In this scenario, our maximum likelihood estimate is the parameter that gives us the mode

### Defining the Steps of the MLE Algorithm
1. Receive some data
2. Determine the distributional family of the data
	- We can do this using plots, such as histograms
3. Determine the parameters for our distribution that is most likely responsible for creating our data
	- We use maximum likelihood estimation to find the values of our parameters, which results in the curve that best fits the data
	- Each parameter typically has a formula for the MLE
	- For example, we have sample data and we believe that our sample data is normally distributed
        - So, we would want to know how exactly that normal distribution looks in terms of our data
        - This means we are interested in how the parameters should be adjusted to find the exact normal curve that has given us our sample data

### Generalizing the Algorithm
1. Find the probability density function that seems to fit our data
2. Take the log of the likehood function (or the pdf)
3. Take the partial derivative of the function with respect to each parameter

### Does MLE Always Work?
- No, since random variables from the real world take on more complicated functions, rather than the standard probability density functions (e.g. normal distribution) we're used to seeing
- In other words, our data generating process can't always be reduced to a straight-forward formula
- In these cases, we can use more specialized methods to find numerical solutions for these parameter estimates
- These methods typically include iterative methods, such as Expectation-Maximization algorithms or Gradient Descent

### Why Likelihoods Aren't Probabilities?
- This is mostly just statisticians being pedantic
- Most people tend to use probability and likelihood interchangeably, but statsticians distinguish between the two (for good reason)
- Probabilities are used to describe the chance associated with discrete random variables
- Likelihoods are used to describe the chance associated with continuous random variables

### References
- [MLE Introduction Article](https://towardsdatascience.com/probability-concepts-explained-maximum-likelihood-estimation-c7b4342fdbb1)
- [Frequentist MLE Article](https://towardsdatascience.com/a-gentle-introduction-to-maximum-likelihood-estimation-9fbff27ea12f)
- [StatQuest Maximum Likelihood Video](https://www.youtube.com/watch?v=XepXtl9YKwc)
