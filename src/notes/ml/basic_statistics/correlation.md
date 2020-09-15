---
title: "Correlation"
draft: false
weight: 8
katex: true
---

### Describing Correlation
- Correlation refers to how close two random variables share a linear relationship (plus some noise) between each other
- In other words, correlation refers to whether two random variables change by a constant and proportional amount with each other
- Said another way, when one variable goes up, the other variable goes up
- Specifically, when one variable goes up, the other variable goes up by an amount proportional to the increase of the first variable (on average)
- We find the correlation between two random variables for any of the following reasons:
	- We want to know the direction of how two variables vary together
	- We want to know the magnitude of how two variables vary together, roughly
	- We want to know if the two variables are independent
- We can represent the correlation between two random variables using either of the following:
	- Covariance
	- Correlation Coefficient

### Covariance
- Covariance is a measure of correlation
- Covariance is an unstandardized version of the correlation coefficient
- Covariance is defined as the following:

$$ Cov(X,Y) = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y}) $$

- Specifically, two variables $X$ and $Y$ are independent if:

$$ Cov(X,Y) = 0 $$

- Covariance will make it difficult to interpret the magnitude of variability between two variables
- For example, we know how to interpret a positive covariance, a negative covariance, and a covariance of 0, and we know that in theory two variables that move together more should have a high covariance -- but what even is high?
- This is where correlation comes into play, since it is essentially a normalized covariance metric
- In other words, a covariance value by itself doesn't mean much, but with it you can compare it to other covariance values

### The Correlation Coefficient
- The (Pearson's) correlation coefficient is just a normalized covariance
- A correlation coefficient is defined as the following:

$$ Cor(X,Y) = \frac{Cov(X,Y)}{\sigma_{x}\sigma_{y}} $$

- The correlation coefficient is thus constrained to lie between -1 and +1, where 0 implies the two random variables are independent
- The extreme values indicate perfect linear dependence
- A correlation coefficient by itself is much more informative than a covariance value by itself, since the variability of the other values are taken into account

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
