---
title: "Maximum a Posteriori Estimation"
draft: false
weight: 2
katex: true
---

### Describing MAP Estimation
- The MAP estimator is a semi-Bayesian technique for finding the maximum probability of the posterior probability distribution
- In other words, the MAP estimate is an estimate of the true mode of the posterior distribution
- The MAP estimator with different prior distributions lead to different regulizers and estimators
	- A MAP estimator with a zero-mean Gaussian prior equals the cost function associated with L1 regularization of OLS estimation(i.e. LASSO)
	- A MAP estimator with a zero-mean Laplacean prior equals the cost function associated with L2 regularization of OLS estimation (i.e. Ridge)
	- A MAP estimator with a uniform prior equals the MLE

### Computing MAP Estimates
- Typically, we calculate MAP estimates analytically
- Meaning, the posterior distribution follows a closed-form distribution (i.e. Normal, Poisson, etc.)
- Therefore, we can use conjugate priors to estimate the mode of the posterior distribution

### MLE, MAP, and Bayesian Inference
- Bayesian estimation techniques and MAP both involve computing likelihoods and priors, but in different ways
- MLE only involves computing the likelihoods (without some prior belief)
- Bayesian estimation techniques and MAP both return some information about the parameters of the posterior distribution, prior distribution, and likelihood function
- MLE only returns some information about the parameters of the likelihood function
- Bayesian inference typically returns some information about a parameter through simulation
- MAP and MLE typically return some information about a parameter through analytical computations of assumed closed-form distributional expressions
- MAP returns some information about a parameter through analytical computation
	- Specifically, the analytical computation involves maximizing the likelihood of observing the parameter given some data
	- Assumes the posterior follows a closed-form distribution
- MLE returns some information about a parameter through analytical computation
	- Specifically, the analytical computation involves maximizing the likelihood of observing the data given some parameter
	- Assumes the data follows a closed-form distribution
- Bayesian inference usually involves returning the entire posterior probability distribution, whereas MAP involves returning a single estimate of a parameter

### References
- [Regularization in MAP Estimation](http://bjlkeng.github.io/posts/probabilistic-interpretation-of-regularization/)
- [Differences between MLE, MAP, and Bayesian Inference](https://towardsdatascience.com/mle-map-and-bayesian-inference-3407b2d6d4d9)
- [Maximum a Posteriori Estimation Wiki](https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation)
