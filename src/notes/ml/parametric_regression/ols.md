---
title: "Ordinary Least Squares Estimation"
draft: false
weight: 2
katex: true
---

### Describing OLS Estimation
- The ordinary least squares criterion is a method for estimating regression coefficients (i.e. population parameters)
- The least squares criterion involves minimizing the sum of squares of the residuals (i.e. $RSS$)
- In other words, the least squares criterion chooses coefficient estimates, such as $\hat{\beta}$, that minimize the $RSS$
- Using the least squares approach to find the population parameters, we can use some calculus to find equations for the coefficient estimates that minimize the residual sum of squares
- For example, we can use calculus to find the following coefficient estimates:

$$ \hat{\beta_{1}} = \frac{\sum_{i=1}^{n}(x_{i}-\bar{x})(y_{i}-\bar{y})}{\sum_{i=1}^{n}(x_{i}-\bar{x})} $$
$$ \hat{\beta}_{0} = \bar{y} - \hat{β}_{1}\bar{x} $$

### Residual Sum of Squares
- The residual sum of squares is defined as the sum of the squared residuals
- Mathematically, we write the equation for the residual sum of squares as the following

$$ RSS = \sum_{i=1}^{n} e_{i}^{2} $$

- Since $e_{i}$ is the difference between our observations and predictions, the $RSS$ formula can be written as the following:

$$ RSS = \sum_{i=1}^{n} (y_{i} - f(y_{i}))^{2} $$

- In the case of linear regression, our $RSS$ formula looks like this:

$$ RSS = \sum_{i=1}^{n}\sum_{j=1}^{m}(y_{i} - (\hat{\beta_{0}} - \hat{\beta_{j}} x_{i}))^{2} $$

### The True Regression Line
- The least squares regression line is the linear regression line represented by our coefficient estimates
- For example, our least squares regression line could look like the following:

$$ Y = \hat{\beta_{0}} + \hat{\beta_{1}} X $$

- The true regression line is a linear regression line represented by our population parameters and some random error:

$$ Y = \beta_{0} + \beta_{1} X + \epsilon $$

- The least squares regression line is our *best guess* at representing the true regression line, assuming the true relationship is linear

### MLE versus OLS
- Minimizing the squared error is equivalent to maximizing the likelihood when the errors are normally distributed (i.e. in the case of linear regression)
- We can use MLE for predicting normally-distributed $Y$ values in linear regression, or other response variable that have a non-normal distribution
- In other words, we can use MLE for predicting the parameters of our response variable, which could be a bernoulli-distributed random variable, exponentially-distributed random variable, poisson-distributed random variable, etc.
- In this case, we would map the linear predictor to the non-normal distribution of the response variable using a link function
- Then, the likelihood function becomes the product of all the marginal probabilities of the outcomes after the transformation of the predictor variables, assuming independence

### References
- [Introduction to Statistical Learning](http://faculty.marshall.usc.edu/gareth-james/ISL/ISLR%20Seventh%20Printing.pdf)
- [Difference between MLE and OLS Estimation](https://stats.stackexchange.com/questions/143705/maximum-likelihood-method-vs-least-squares-method)
- [Example of Likelihood Function](https://stats.stackexchange.com/questions/211848/likelihood-why-multiply)
