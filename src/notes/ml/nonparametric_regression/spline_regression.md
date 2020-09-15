---
title: "Spline Regression"
draft: false
weight: 4
katex: true
---

### Describing Spline Regression
- Spline regression is a regression technique that involves dividing the dataset into multiple bins and fitting each bin with a separate model
- In polynomial regression, we generate new features by using various polynomial functions on the existing features, which imposed a global structure on the dataset
- Spline regression, however, uses piecewise functions to divide the distribution of data into different bins and fits linear or low-degree polynomial functions on each of these portions, which gives it its non-local property

### Basics of Piecewise Functions
- A function which we can use for modeling an individual bin is known as a piecewise function
- Said another way, a piecewise function is a function that is applied to an individual bin for some input variable
- The points where these divisions occur are called knots

### Piecewise Step Functions
- A common type of piecewise function is a step function
- A piecewise step function is a function that remains constant within a single interval (or bin)
- In other words, we can break the range of $X$ into bins and fit a different constant to each bin
- Piecewise step functions don't capture any rate of change (slope=0) across its bin, meaning there isn't any relationship between the input and output for each individual bin
- In other words, a piecewise step function won't capture any trend in its bin, which is clearly a problem

### Piecewise Linear Functions
- Another common type of piecewise function is a linear function
- A piecewise linear function is a function that has a constant rate of change within a single interval (or bin)
- In other words, we can break the range of $X$ into bins and fit a different linear model to each bin
- Piecewise linear functions don't capture any non-linear relationships across its bin
- In other words, a piecewise linear function won't capture any non-linear trend in its bin, which is clearly a problem if our predictor and response variables follow a non-linear relationship

### Piecewise Polynomial Functions
- Another common type of piecewise function is a polynomial function
- Polynomial regression involves fitting separate low-degree polynomials over different regions
- A piecewise polynomial function is a function that has a non-constant rate of change within a single interval (or bin)
- In other words, we can break the range of $X$ into bins and fit a different polynomial model to each bin
- Piecewise polynomial functions capture non-linear relationships across its bin
- Piecewise polynomial functions provides a very flexible fit to the data because of two reasons:
	1. Polynomial functions with higher degrees become more flexible, since we are allowing for more *humps* to be fit to the data
	2. Piecewise functions with more knots become more flexible, since we are able to use different functions for every bin
- Therefore, we need to be careful about overfitting the training data, due to the increased flexibility

### Constraints and Splines
- The issue with piecewise functions (without certain constraints) is they are not continuous at their knots
- Therefore, we need to add the following constraints to ensure a smooth, continuous transition between each piecewise function at their knots:
	1. Add a constraint so polynomials (or other functions) are continuous on each side of the knot
		- Without this constraint, there will be two different values assigned to each knot for different piecewise functions
		- Therefore, we can achieve continuity by adding a constraint to ensure there is only one unique value assigned to each knot before fitting the polynomial functions for each bin
		- Then, the polynomial models will ensure continuity when using least squares for fitting
	2. Add a constraint so polynomials are smooth on each side of the knot
		- Without this constraint, there will be unexpected, choppy transitions between each knot
		- Therefore, we can achieve smoothness by adding a constraint to ensure the first derivative of both the polynomials are equal before fitting the polynomial functions for each bin
		- Then, the polynomial models will ensure smoothness when using least squares for fitting
	3. Add a constraint so polynomials are even more smooth on each side of the knot
		- Without this constraint, there will be some remaining choppy transitions between each knot
		- Therefore, we can achieve further smoothness by adding a constraint to ensure the second derivative of both the polynomials are equal before fitting the polynomial functions for each bin
		- Then, the polynomial models will ensure further smoothness when using least squares for fitting
		- As a result, we are also able to use fewer degrees of freedom, which simplifies our model
		- We can also continue to remove degrees of freedom by ensuring the next (third, fourth, etc.) derivatives are equal, but we rarely find it useful to go beyond cubic splines (since they are typically flexible enough)
- A piecewise cubic function with the above contraints met is called a spline
- Specifically, a piecewise polynomial function of degree m with m-1 continuous derivatives is called a spline
- For example, if we fit a piecewise cubic function to a bin with the three contraints met, our piecewise cubic function is known as a cubic spline

### Natural Splines
- The degrees of freedom associated with cubic splines can still be reduced even further
- More importantly, the cubic splines fit around the boundaries of the knots still behave erratically
- Therefore, we need to add another constraint to ensure even smoother splines:
	1. Add a constraint so polynomials are even smoother on the boundaries of knots
		- Without this constraint, there will be some remaining erratic behavior near the boundaries of the data (i.e. the furthest points where knots do not overlap)
		- Therefore, we can achieve even further smoothness by adding a constraint to ensure the piecewise functions containing the knots on the boundaries are linear
		- Then, the polynomial model will ensure even further smoothness when using least squares for fitting
- A cubic spline function with the above constraint met is called a natural cubic spline

### Choosing the Number and Location of Knots
- Most common approach: place a reasonable number of knots at uniform quantiles across the data
- Most effective approach: place knots across the data in areas of high variability, and validate the number and locations of these knots using cross-validation

### Comparison of Polynomial Regression and Spline Regression
1. A drawback of polynomial regression is that the function only captures global trends between a response variable and a predictor variable
	- In other words, polynomial regression is non-local, meaning that the fitted value of y at a given data point strongly depends on other data values far away from that data point
	- Spline regression, on the other hand, is local
	- Therefore, spline regression can be a useful regression alternative to polynomial regression
2. A drawback of polynomial regression is that polynomials must increase the degree of polynomial to increase flexibility in the model, meaning they must increase their degrees of freedom as well
	- Said another way, polynomials must use a high degree polynomial to produce flexible fits
	- Spline regression, on the other hand, introduces flexibility by increasing the number of knots, which keeps the degrees of freedom fixed
	- Therefore, spline regression can be a useful regression alternative to polynomial regression

### References
- [Examples of Regression Splines](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes/)
- [Polynomial Fitting and Splines Video](https://www.youtube.com/watch?v=rtwOrZL02M0)
- [Nonparametric Regression Notes](http://www.stat.cmu.edu/~larry/=sml/nonpar.pdf)
- [Polynomial Regression Wiki](https://en.wikipedia.org/wiki/Polynomial_regression)
- [Polynomial Regression Use-Cases](https://www.theanalysisfactor.com/regression-modelshow-do-you-know-you-need-a-polynomial/)
- [How Cubic Splines are different from Natural Cubic Splines](https://discuss.analyticsvidhya.com/t/how-cubic-splines-is-different-from-the-natural-cubic-splines/8259/2)
