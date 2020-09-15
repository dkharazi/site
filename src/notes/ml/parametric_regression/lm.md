---
title: "Linear Regression"
draft: false
weight: 3
katex: true
---

### Describing Linear Regression
- Regression is a statistical technique for estimating the relationship among a continuous response variable and a set of predictor variables
- Linear regression is a type of regression that models a linear relationship among a continuous response variable and its predictor variables
- In other words, linear regression assumes a constant rate of change between a response variable and its predictor variables
- The most common approach for estimating the population parameters involved in the linear regression model is the method of least squares
	- There are other ways of estimating the population parameters, such as maximum likelihood estimation (or MLE)
- Roughly speaking, residuals are estimates (or realizations) of any random error described by the error term $\epsilon$

### Model Components
- In linear regression, our true data generating process could look like the following:

$$ Y = \beta_{0} + \beta X + \epsilon $$
$$ Y \sim N(\beta_{0}+\beta X, \sigma^{2}) $$
$$ E[Y] = \beta_{0} + \beta X $$
$$ Var[Y] = \sigma^{2} $$

- In this case, the response variable $Y$, the predictor variable $X$, and the error term $\epsilon$ are all random variables
- On the other hand, the $\beta_{0}$ and $\beta_{1}$ coefficients are our fixed population parameters
- Usually, we're interested in the mean of the response variable conditional on our predictor variables, which looks like this:

$$ E[Y|X] = \mu_{Y|X} = \beta_{0} + \beta X $$

- We'll typically estimate these conditional means using MLE or OLS parameter estimates:

$$ \hat{\mu_{Y|X}} = \hat{\beta_{0}} + \hat{\beta} X $$

- The response variable conditional on the predictor variables is denoted as the following:

$$ Y|X = \beta_{0} + \beta X + \epsilon $$
$$ Y|X \sim N(\beta_{0}+\beta X, \sigma^{2}) $$
$$ E[Y|X] = \beta_{0} + \beta X $$
$$ Var[Y|X] = \sigma^{2} $$

- The error term conditional on the predictor variables is denoted as the following:

$$ \epsilon|X \sim N(0, \sigma^{2}) $$
$$ E[\epsilon|X] = 0 $$
$$ Var[\epsilon|X] = \sigma^{2} $$

### Assumptions of the Gaussian-Noise Simple Linear Regression Model
1. The distribution of any predictor variable is unspecified (possibly even deterministic)
2. The relationship between the response variable and each value of the predictors variables is linear:

$$ Y|X = \beta_{0} + \beta X + \epsilon $$

3. The error term is normally distributed with a mean of 0 and constant variance for all values of $X$

$$ \epsilon|X \sim N(0,\sigma^{2}) $$

- Which implies the error term is uncorrelated across observations and is uncorrelated with predictors
- In other words, this implies $\epsilon$ is independent of observations, and $\epsilon$ is independent of the predictor variables
- Said another way, homoscedasticity is maintained (i.e. constant variance):

$$ E[\epsilon|X=x] = 0 $$
$$ Var[\epsilon|X=x] = \sigma^{2} $$

### Benefits of Assuming the the Gaussian-Noise Model
- We can use the Central Limit Theorem
	- The noise might be due to adding up the effects of lots of little random causes, all nearly independent of each other and of X , where each of the effects are of roughly similar magnitude
	- Then the central limit theorem will take over, and the distribution of the sum of effects will indeed be pretty Gaussian
	- Therefore, the Central Limit Thorem makes the assumption that $\epsilon$ is normally-distributed
- It will be mathetmatically convenient
	- Assuming Gaussian noise lets us work out a very complete theory of inference and prediction for the model, with lots of closed-form answers to questions like:
		- What is the optimal estimate of our $\beta$ terms using MLE or OLS?
		- Can we assume our $\beta$ estimates are Gaussian?
		- What is the optimal estimate of the variance?
		- What is the probability that we'd see a fit this good from a line with a non-zero intercept if the true like goes through the origin?
	- Answering such questions without the Gaussian-noise assumption needs somewhat more advanced techniques, and much more advanced computing

### Clarifying Properties of Linear Models
- The predictor variables do not need to be normally distributed
- The reponse variable does not need to be normally distributed
- The response variable conditional on the predictor variables needs to be normally distributed

### Clarifying Properties of Residuals
- The residuals should have an expected value of zero:

$$ E[\epsilon|X=x] = 0 $$

- The residuals should show a nearly constant variance:

$$ Var[\epsilon|X=x] = \sigma^{2} $$

- We don't expect the residuals to ever be completely uncorrelated with each other, but the correlation should be extremely weak and grow negligable as $n \rarr \infty$
- The residuals should be Gaussian, since the errors should be Gaussian

## References
- [Simple Linear Regression Models Lecture Notes](https://www.stat.cmu.edu/~cshalizi/mreg/15/lectures/04/lecture-04.pdf)
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Introduction to Statistical Learning](http://faculty.marshall.usc.edu/gareth-james/ISL/ISLR%20Seventh%20Printing.pdf)
- [Proofs of Gaussian Linear Models](https://ocw.mit.edu/courses/mathematics/18-655-mathematical-statistics-spring-2016/lecture-notes/MIT18_655S16_LecNote19.pdf)
