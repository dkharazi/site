---
title: "Ridge Regression"
draft: false
weight: 2
katex: true
---

### Describing Ridge Regression
- Ridge regression is a type of regression that performs L2 regularization on the OLS coefficients
- Specifically, the penalty term associated with L2 regularization is the square of the magnitude of OLS coefficients
- Ridge regression mitigates the problem of multicollinearity in regression, and thus mitigates the problem of overfitting
- Ridge regression achieves this by shrinking the OLS cofficients to zero, but not exactly zero

### Mathematics behind Ridge Regression
- When using OLS, the coefficients can often create a ridge in the coefficient space, meaning many different coefficients on the space can do as well (or nearly as well)
- By adding a penalty (or tuning factor), the coefficient space can be lifted up to provide better coefficient estimates compared to the OLS coefficient space
- This adjusted coefficient space doesn't guarantee better coefficient estimates, but it can be helpful to explore when looking at additional regression techniques

### Effects of Ridge Regression
- Correlation in parameter estimates is reduced, which will mitigate the problem of multicollinearity
- Parameter estimates won't be very large in magnitude if the RSS for small parameters aren't much worse, which also mitigates the problem of overfitting

### References
- [Examples of Ridge and Lasso Regression](https://www.analyticsvidhya.com/blog/2016/01/complete-tutorial-ridge-lasso-regression-python/)
- [L2 Regularization Wiki](https://en.wikipedia.org/wiki/Tikhonov_regularization)
- [When Ridge Estimates Perform better than OLS](https://stats.stackexchange.com/questions/118712/why-does-ridge-estimate-become-better-than-ols-by-adding-a-constant-to-the-diago/119708)
- [Applications of Ridge Regression](https://medium.com/@rrfd/what-is-ridge-regression-applications-in-python-6ed3acbb2aaf)
- [Ridge Regression StatQuest Video](https://www.youtube.com/watch?v=Q81RR3yKn30)
