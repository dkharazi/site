---
title: "Bayesian Regularization"
draft: false
weight: 4
katex: true
---

### Describing Bayesian Regularization
- The MAP estimator with different prior distributions lead to different regulizers
	- A MAP estimator with a zero-mean Gaussian prior equals the cost function associated with L1 regularization of OLS estimation (i.e. LASSO)
	- A MAP estimator with a zero-mean Laplacean prior equals the cost function associated with L2 regularization of OLS estimation (i.e. Ridge)
- In other words, the choice of regulizer is analogous to the choice of prior over the weights in the Bayesian framework

### L1 Regularization
- The cost function associated with L1 regularization is equal to a MAP estimator with a zero-mean Laplacean prior
- The Laplace distribution is similar to the Guassian distribution in form, but appears more like two exponential distributions placed back to back
- This Laplace distribution promotes sparsity, meaning the estimates of the coefficients will quickly shrink to zero

### L2 Regularization
- The cost function associated with L2 regularization is equal to a MAP estimator with a zero-mean Gaussian prior
- This Gaussian distribution doesn't promote sparsity, meaning the estimates of the coefficients will slowly shrink to zero, but never quite equal exactly zero

### References
- [Probabilistic Interpretation of Regularization](http://bjlkeng.github.io/posts/probabilistic-interpretation-of-regularization/)
- [Difference between Bayesian Lasso and Ordinary Lasso](https://stats.stackexchange.com/questions/108466/bayesian-lasso-vs-ordinary-lasso)
- [Bayesian Regularization Lecture Slides](https://www.cs.utah.edu/~piyush/teaching/20-9-print.pdf)
