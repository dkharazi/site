---
title: "Polynomial Regression"
draft: false
weight: 5
katex: true
---

### Describing Polynomial Regression
- Polynomial regression is a regression method where the relationship between the independent variable $X$ and the dependent variable $Y$ is modelled as an $n^{th}$ degree polynomial in $X$
- Polynomial regression is used when there is a non-linear relationship between the response variable and a predictor variable
- As we use lower degrees of polynomials, we don’t observe high oscillations of the curve around the data
- In other words, a quadratic function will have one *hump*, a cubic function will have two *humps*, etc.
- Polynomial regression models are usually fit using the method of least squares

### Mathematics behind Polynomial Regression
- Polynomial regression fits a nonlinear relationship between the value of $X$ and the corresponding conditional mean of $Y$, denoted $E[Y|X]$
- Although polynomial regression fits a nonlinear model to the data, as a statistical estimation problem it is linear, in the sense that the regression function $E[Y|X]$ is linear in the unknown parameters that are estimated from the data
- For this reason, polynomial regression is considered to be a special case of multiple linear regression

### References
- [Polynomial Regression Wiki](https://en.wikipedia.org/wiki/Polynomial_regression)
- [Polynomial Regression Examples](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes/)
