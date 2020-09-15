---
title: "Errors"
draft: false
weight: 6
katex: true
---

### Describing Errors
- An error is the difference between a population parameter and its observed value
- A population parameter is typically fixed and unobserved
- In some situations, we may actually have a very close estimate of the population parameter, but we still don't know the exact population parameter because we will be off by some margin
- For example, we may have a very good guess of a population mean, such as the mean height of NBA players
- However, every measurement device has finite error inherent in the measurement device
- The best we could claim is that the population mean equals some very close estimate plus or minus the observational error or measurement error
- Specifically, our ruler could capture measurements down to 1 millimeter, so the best we can measure the mean height of NBA players is within $\pm$ 1 millimeter
- Therefore, errors are almost always theoretical and unobservable

### Describing Residuals
- A residual is the difference between an estimated parameter and its observed value
- In other words, residuals are empirical and observable
- Roughly speaking, a residual is an estimate of the true error
- For example, the sample mean would be a good estimate of the population mean for a normally-distributed random variable $Y$
- In this case, the difference between each observation in our sample and the unobservable population mean is a statistical error:

$$ error_i = y_i - \mu $$

- The difference between each observation in our sample and the observable sample mean is a residual:

$$ residual_i = y_i - \hat{\mu} $$
$$ residual_i = y_i - \bar{y} $$

- In linear regression, we define an error as the following:

$$ error_i = y_i − \mu $$
$$ error_i = y_i - (\beta_{0} + \beta_{1}x_{i}) $$

- Then, we would define a residual as the following:

$$ residual_i = y_i - \hat{\mu} $$
$$ residual_i = y_i - (\hat{\beta_{0}} + \hat{\beta_{1}}x_{i}) $$

- Essentially, we are able to estimate an error associated with a population parameter by estimating the population parameter itself
- Then, our parameter estimate will allow us to work with residuals, meaning we'll be able to work with our data

### Sampling Error
- Sampling error refers to error in our estimates caused by observing a sample instead of the entire population
- Therefore, sampling error is a property of an estimator
- Sampling error is more of a theoretical type of error, rather than an empirical type of error
- The sampling error is influenced by our sample size and sample standard deviation
- Essentially, the sampling error states that the more data we receive, the smaller our errors become
- Said another way, as our errors become smaller, the impact of estimating the errors using residuals becomes extremely marginal

### Standard Error
- The standard error measures sampling error, along with some other properties about our sample
- Specifically, the standard error is used to quantify the amount of uncertainty around our point estimate
- Therefore, the standard error is a property of an estimator
- The standard error is defined as the following:

$$ SE = \frac{\sigma}{\sqrt{n}} $$

- In other words, the accuracy of our estimates depends on our sample standard deviation and our sample size
- With that being said, our sample standard deviation is typically considered fixed while our sample size can change easily
- If our sample size is small, then our sample standard deviation has a large effect on our estimates
- If our sample size is decently large, then our sample standard deviation has some effect on our estimates
- If our sample size is infinitely large, then our sample standard deviation doesn't really have an effect on our estimates

### Source of Inaccuracies in Estimates
- Sampling error is one source of inaccurate estimates
- Bias can be a greater source of inaccurate estimates

### References
- [Errors and Residuals Wiki](https://en.wikipedia.org/wiki/Errors_and_residuals)
- [Sampling Error Wiki](https://en.wikipedia.org/wiki/Sampling_error)
- [Random and Systematic Errors Wiki](https://en.wikipedia.org/wiki/Observational_error#Random_errors_versus_systematic_errors)
- [Confidence Intervals Demonstrating Uncertainty](https://newonlinecourses.science.psu.edu/stat509/node/27/)
- [Defining Random and Systematic Errors](https://www.physics.umd.edu/courses/Phys276/Hill/Information/Notes/ErrorAnalysis.html)
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Difference between Errors and Residuals](https://stats.stackexchange.com/questions/133389/what-is-the-difference-between-errors-and-residuals)
