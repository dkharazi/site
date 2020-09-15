---
title: "Generalized Additive Model"
draft: false
weight: 7
katex: true
---

### Describing Generalized Additive Models
- Generalized Additive Models (or GAMs) provide a general framework for extending a standard linear model by allowing non-linear functions of each of the variables, while maintaining additivity
- In other words, a GAM is a non-linear, additive model
- Similar to a linear regression model, a GAM is an additive model because each of its components are added together
- For example, we define a linear regression model as the following:

$$ y_{i} = \beta_{0} + \beta_{1}x_{i1} + \beta_{2}x_{i2} + ... + \beta_{p}x_{ip} + \epsilon_{i} $$

- And, we define a generalized additive model as the following:

$$ y_{i} = \beta_{0} + f_{1}(x_{i1}) + f_{2}(x_{i2}) + ... + f_{p}(x_{ip}) + \epsilon_{i} $$

- Unlike a linear regression model, a GAM is a non-linear model because each of its components are non-linear functions
	- Linear regression model: each component $\beta_{p}x_{ip}$ is a linear function
	- GAM: each component $f_{p}(x_{ip})$ is a non-linear function
- Similar to a linear model, a GAM can be applied with both quantitative and qualitative responses
- A GAM provides a useful compromise between linear and fully nonparametric models

### Motivating Additive Models
- An additive model is a type of model that is made up of individual components added together
- In other words, an additive model should follow the following model format:

$$ y_{i} = \beta_{0} + f_{j}(x_{ij}) $$

- The individual components can be either linear components or non-linear components, but they usually refer to non-linear components
- Linear regression models, linear probability model, and GAMs are all examples of additive models

### Advantages of GAMs
- Because a GAM fits a non-linear function to each predictor variable:
	- We can make more accurate predictions if the true fit between the response variable and an individual predictor variable is non-linear (compared to a linear fit)
	- We can capture non-linear relationships quickly, since a GAM can automatically model non-linear relationships that standard linear regression will miss; meaning we do not need to manually try out many different transformations on each variable individually
	- We can easily adjust the smoothness of each function $f_{j}$ for its predictor variable $X_{j}$ by adjusting the degrees of freedom
- Because a GAM is an additive model:
	- We can easily observe the relationships between the response variable and each individual predictor variable, while holding all of the other variables fixed (Hence if we are interested in inference, GAMs provide a useful representation)

### Disadvantages of GAMs
- The main limitation of GAMs is that the model is restricted to be additive, meaning important interactions can be missed between predictors
- However, we can potentially fix this issue by manually adding interaction terms to the GAM model (i.e. by including additional predictors of the form $X{j} \times X_{k}$)
- In addition we can add low-dimensional interaction functions (i.e. of the form $f_{jk}(X_{j}, X_{k})$ into the model)
	- These terms can be fit using two-dimensional smoothers, such as local regression or two-dimensional splines

### GAMs for Regression
- Standard software (i.e. the gam function in R) fits a GAM using smoothing splines for continuous predictors
	- Typically, a GAM involving smoothing splines uses an approach known as backfitting
	- Backfitting fits a model involving multiple predictors by repeatedly updating the fit for each predictor, holding the other predictors fixed
	- The beauty of this approach is that each time we update a function, we simply apply the fitting method for that variable to a partial residual
	$$ residual = y_{i} - f_{1}(x_{i1}) -f_{2}(x_{i2}) $$
	- In most situations, the differences in the GAMs obtained using smoothing splines versus natural splines is small
- We do not have to use splines as the building blocks for GAMs
- We can just as well use local regression, polynomial regression, or any other combination of regression approaches
- For categorical variables, we typically fit a function using a separate constant for each level, via the usual dummy variable approach (similar to how we handle categorical variables in linear regression)

### GAMs for Classification
- GAMs can also be used in situations where the response variable is qualitative
- In this situation, we just need to take the logit of our GAM
- This is similar to how we handle a qualitative response variable in linear regression (i.e. performing a logit transformation of our linear model)

### References
- [Introduction to Statistical Learning](http://faculty.marshall.usc.edu/gareth-james/ISL/ISLR%20Seventh%20Printing.pdf)
- [Additive Model Wiki](https://en.wikipedia.org/wiki/Additive_model)
