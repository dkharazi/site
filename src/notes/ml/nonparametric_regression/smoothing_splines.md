---
title: "Smoothing Splines"
draft: false
weight: 5
katex: true
---

### Motivating Smoothing Splines
- We create a regression splines by specifying a set of knots, producting a sequence of basis functions (constraints), and then using least squares to estimate the spline coefficients
- Smoothing splines are created using a different approach
- Instead, smoothing splines are created by finding a function $g$ that minimizes the $RSS$ with some penalty
- This notion of minimizing the *loss function* + *penalty term* is also found in ridge regression and lasso

## Describing Smoothing Splines
- A spline is a special function defined piecewise by polynomials
- Again, smoothing splines are created by minimizing the RSS with some constraints
- If we don't put any constraints on $g(x)$, then we will always overfit the data by interpolating all of the data, which will always make $RSS$ zero
- Therefore, we want to find the the function $g$ that minimizes the $RSS$ with added constraints, which will make the curve smooth
- A smoothing spline is the function $g$ that minimizes the $RSS$ and the penalty term

### Finding a Function $g$
- We find a function $g$ by minimizing the following:

$$ \sum_{i=1}^{n}(y_{i} - g(x_{i}))^{2} + \lambda \int g\rq\rq(t)^{2}dt $$

- The $\sum_{i=1}^{n}(y_{i} - g(x_{i}))^{2}$ term refers to our loss function
- The $\lambda \int g\rq\rq(t)^{2}dt$ term refers to our penalty term
- The loss function encourages $g$ to fit the data well
- The penalty term penalizes the variability in $g$
- The notation $g\rq\rq(t)$ indicates the second dervative of the function $g$
	- The first derivative $g\rq(t)$ would measure the slope of a function at $t$
	- The second dervative corresponds to the amount by which the slope is changing
	- Roughly speaking, the second derivative is a measure of its *roughness*
	- Specifically, it is large if $g(t)$ is very wiggly near $t$, and it is close to zero otherwise
	- For example, the second derivative of a straight line is zero, since a straight line is perfectly smooth
- The $\int$ notation is an integral, which we can think of as a summation over the range of $t$
- In other words, $\int g\rq\rq(t)^{2}dt$ is simply a measure of the total amount of roughness across the function

### Summarizing the Minimization Formula
- The loss function encourages $g$ to fit the data well
- The penalty term penalizes the variability in $g$
- Roughly speaking, the second derivative of a function is a measure of its roughness
- Minimizing the error and roughness is what we want, since we want a smooth curve that fits well
- When the tuning parameter $\lambda = 0$, then the penalty term has no effect
- In this case, the function $g$ will perfectly fit the data, causing overfitting
- When the tuning parameter $\lambda \to \infty$, then $g$ will be perfectly smooth
- This is case, $g$ will just be a straight line
	- Specifically, $g$ will be the linear least squares line
- Essentially, the tuning parameter $\lambda$ controls the bias-variance trade-off of the smoothing spline

### Finding the Best Smoothing Spline
- The function $g$ that minimizes the smoothing spline function is a natural cubic spline with knots at each data point
- Specifically, the function $g$ that minimizes the smoothing spline is a piecewise cubic polynomial with the following properties:
	1. Knots at the unique values of $x_{1},...,x_{n}$
	2. Continuous first derivative $g\rq(x)$
	3. Continuous second derivative $g\rq\rq(t)$
- However, it is not the same natural cubic spline that one would get if one applied the basis function approach occurring in spline regression
- Instead, it is a shrunken version of the natural cubic spline found in spline regression, where the value of the tuning parameter in the smoothing spline function controls the level of shrinkage

### Choosing the Smoothing Parameter
- We have seen that a smoothing spline is simply a natural cubic spline with knots at every unique value of $x$
- It might seem that a smoothing spline will have far too many degrees of freedom, since a knot at each data point allows a great deal of flexibility
- However, the tuning parameter will control the roughness of the smoothing spline, and hence the effective degrees of freedom
- Roughly speaking, as the tuning parameter $\lambda$ increases from $0$ to $\infty$, the effective degrees of freedom decrease from $n$ to $2$
- Therefore, we do not need to select the number or locations of the knots, since there will be a knot at each training observation when fitting a smoothing spline
- Instead, we need to choose the value of the tuning parameter that makes the cross-validated $RSS$ as small as possible
- The $LOOCV$ can be computed very efficiently for smoothing splines

### References
- [Examples of Smoothing Splines](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes/)
- [Introduction to Statistical Learning](http://faculty.marshall.usc.edu/gareth-james/ISL/ISLR%20Seventh%20Printing.pdf)
