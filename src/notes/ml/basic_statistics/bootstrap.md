---
title: "Bootstrap"
draft: false
weight: 15
katex: true
---

### Describing Bootstrap
- The bootstrap principle is an application of the Monte Carlo principle
- We can use the sampling distribution of estimators to deal with uncertainty in parameters and functions
- If we know the underlying distribution for each of our parameters, then we can determine our standard errors for our estimators
- The standard error of an estimator is the standard deviation of its sampling distribution or an estimate of that standard deviation
- In other words, a standard error roughly measures the amount of sampling error

### The Bootstrap Principle
- In order to get accurate estimates of our standard error, we can simulate the data replication process
- After all, we have already fit a model to the data, which is a guess at the population distribution that generated the data
- Running that mechanism (related to the population distribution) generated simulated data, which has the same distribution as the real data
- Feeding the simulated data through our estimator gives us one draw from the sampling distribution, and repeating this many times yields the sampling distrubtion
- Obviously, the bootstrap principle assumes that our sample represents the population distribution well (which we rarely ever know for certain)

### Bootstrapping Steps
1. We have a good sample that effectively represents the population
2. Fit our model to the sample and calculate an estimate
3. Repeat the following many times:
	- Simulate surrogate data from our initial sample
	- Fit our model to the surrogate data and calculate an estimate
4. Approximate the distribution of our estimates by combining our estimates together after sampling our sample

### References
- [Truth About Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Bootstrap Principle](https://www.stat.cmu.edu/~cshalizi/402/lectures/08-bootstrap/lecture-08.pdf)
- [Standard Error Wiki](https://en.wikipedia.org/wiki/Standard_error)
- [Bootstrap Wiki](https://en.wikipedia.org/wiki/Bootstrapping)
