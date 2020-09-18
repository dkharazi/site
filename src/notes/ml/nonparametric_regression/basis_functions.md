---
title: "Basis Functions"
draft: false
weight: 1
katex: true
---

### Basics of Basis Functions
- Basis functions are thought of as families of transformations of our predictors
- The family function is usually flexible enough to transform our data to a wide variety of shapes, but not overly flexible where there is overfitting
- Roughly speaking, a basis function refers to any function applied to a predictor in a model

### Examples of Basis Functions
- For the following examples, let's assume $X$ and $Z$ are both random variables
- Linear functions
	- Linear functions are the product of any number of constants and a single predictor variable
	- The following are some examples of linear functions:
	$$
	1X, -1X, 56X
	$$
- Polynomial functions
	- Polynomial functions are the product of any number of predictor variables
        - The following are some examples of polynomial functions:
	$$
	ZX, XX, X^{2}, ZX^{3}, ZXX
	$$
- Exponential functions
	- Exponential functions are the exponential of a predictor variable
	- The following is an example of an exponential function:
	$$
	exp(X)
	$$
- Logarithmic functions
	- Logarithmic functions are the logarithm of a predictor variable
        - The following is an example of a logarithmic function:
	$$
	log(X)
	$$
- Cosine functions
	- Cosine functions are the cosine of a predictor variable
	- The following is an example of a cosine function:
	$$
	cos(X)
	$$

### References
- [Basis Function Wiki](https://en.wikipedia.org/wiki/Basis_function)
- [Examples of Regression Splines](https://www.analyticsvidhya.com/blog/2018/03/introduction-regression-splines-python-codes/)
- [Description of Basis Functions](http://www.psych.mcgill.ca/misc/fda/ex-basis-a1.html)
