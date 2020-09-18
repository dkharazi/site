---
title: "Sample Statistics"
draft: false
weight: 7
katex: true
---

### Sample Mean
- An estimator of the population mean $\mu$ is represented as $\hat{\mu}$
- In most cases, our best estimate $\hat{\mu}$ is our sample mean $\bar{X}$
- Additionally, $\hat{\mu}$ is an unbiased estimator of the population mean $\mu$
- The sample mean is the unbiased estimator of the population mean
- The sample mean is just what you'd expect:

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}x_i
$$

### Sample Variance
- An estimator of the population variance $\sigma^2$ is represented as $\hat{\sigma^2}$
- In most cases, we'd expect our best estimate $\hat{\sigma^2}$ to be our sample variance $s^2$
- The sample variance $s^2$ is defined as the following:

$$
s^2 = \frac{\sum_{i=1}^{n}(x_i - \bar{x})}{n}
$$

- However, the sample variance is not a perfect estimate of the population variance $\sigma^2$
- Specifically, it's a biased estimator of the population variance $\sigma^2$
- Therefore, it’s usally too small
- The population variance $\sigma^2$ is best estimated as the following:

$$
\sigma^2 = \frac{n}{n−1}s^2
$$

- This is the reason why we use the notation $s^2$, instead of $\hat{\sigma^2}$
- The story here, heuristically, is that we tend to lose variation under sampling
- So, measures of variation in the sample need to be corrected upwards, so this is the right correction to use
- A sophisticated story claims that this distinction is really important in estimation, and what we really should divide through by, is not the number of data-points but the number of degrees of freedom
- And, to get the variance, we need to estimate the mean, thereby losing one degree of freedom
- Essentially, while we should use $\frac{n}{n−1}s^2$ as our estimate of the population variance $\sigma$, if the difference between that and s² is big enough to matter, you probably should think about getting more data points

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
