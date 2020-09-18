---
title: "Estimators and Parameters"
draft: false
weight: 8
katex: true
---

### Describing Expectation
- The expected value of a random variable is equal to a population parameter of interest
- The expected value of an unbiased estimator is equal to a population parameter of interest
- We use unbiased estimators to estimate a population parameter associated with a random variable
- In many cases, the MLE of our population parameter will be an unbiased estimator
- Sometimes, we'll denote $\text{E[}X\text{]}$ as $\mu(X)$ for a normally-distributed random variable

### The Prediction Process
- Since we don’t feel comfortable with the word *guess*, we call it a *prediction* instead
- The best one-number prediction we could make for a random variable is just its expected value
- The typical process of finding the best prediction for some random variable is as follows:
	1. Find its expected value, which will equal some unknown population parameter
	2. Determine the MLE of the population parameter, which will equal some sample statistic
	3. Calculate the sample statistic

### What is a Statistic?
- A statistic refers to a function of our sample
- A statistic is used for the following reasons:
	1. To estimate a population parameter
	2. To test for the significance of a hypothesis made about a population parameter
- Specifically, a statistic refers to a function that maps the sample space to a set of point estimates
- Therefore, a statistic is just a random variable
- When used to estimate a population parameter, a statistic is called an estimator
- When used for hypothesis testing, a statistic is called a test statistic
- For example, $\bar{X}$ is a statistic that is used to estimate the population mean $\mu_{X}$ of a normally-distributed random variable $X$

### What is an Estimator?
- An estimator refers to a function of the data that attempts to estimate a population parameter of interest
- Therefore, an estimator is a random variable
- Again, an estimator is equal to a statistic when used to estimate a population parameter
- Specifically, a statistic is a function of a sample, whereas an estimator is a function of a sample related to some unknown parameter of the distribution
- Said a different way, an estimator refers to a function that maps the sample space to a set of point estimates
	- The input is the sample space
	- The output is a point estimate
	- As our sample size grows larger and larger, an estimator is thought to converge to the population parameter
- Again, an estimator is a random variable for the same reason that a statistic is a random variable
- Therefore, it has a distribution based on its original random variable, similar to a statistic
- For example, $\hat{\mu}$ is an estimator of $\mu$, and $\bar{X}$ is an estimator and statistic of $\mu$
- An estimator is consistent if it converges to the population parameter as the sample size grows
- An estimator is unbiased if its bias is zero

### What is a Point Estimate?
- A point estimator is another name for an estimator
- A point estimator is a random variable
- A point estimate refers to the actual data value that is output by an estimator or statistic
- A point estimate is some constant
- For example, we can say that $\bar{X}$ is a point estimator and 5 is the point estimate for the following sample:

$$
\begin{bmatrix} x_{1} \cr x_{2} \cr x_{3} \cr x_{4} \cr x_{5} \end{bmatrix} = \begin{bmatrix} 2 \cr 3 \cr 1 \cr 1 \cr 3 \end{bmatrix}
$$

### References
- [What is the Expected Value of an Estimator](https://math.stackexchange.com/questions/1950866/what-is-the-meaning-of-expected-value-of-an-estimator)
- [Expectation of an Estimator](https://stats.stackexchange.com/questions/26396/expectation-of-an-estimator)
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Difference between an Estimator and a Statistic](https://stats.stackexchange.com/questions/47728/what-is-the-difference-between-an-estimator-and-a-statistic)
- [Point Estimation Wiki](https://en.wikipedia.org/wiki/Point_estimation)
- [Estimator Wiki](https://en.wikipedia.org/wiki/Estimator)
- [Difference between Bias and Error](https://stats.stackexchange.com/questions/135960/difference-between-bias-and-error)
- [Difference between Lowercase X-bar and x-bar](https://stats.stackexchange.com/questions/161510/what-is-the-difference-between-bar-x-and-bar-x)
