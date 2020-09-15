---
title: "Continuous Distributions"
draft: false
weight: 3
katex: true
---

### Describing Continuous Distributions
- For continuous random variables, the probability of observing a single event will always equal 0
- We can use a cumulative distribution function (cdf) to consider a small interval of probabilities around a certain event in order to approximately measure an event
- However, this approach will not always lead to consistent or accurate probability calculations, since our probabilities will be based on the statistician's subjective interval each time
- Roughly speaking, we want to have a pre-determined function that returns some (consistent and very small) binned interval of probabilities around the point of interest
- The probability density function is the function that achieves our goal to this problem

### Probability Density Function (pdf)
- A probability density function is a function that maps a continuous value in the sample space to a *relative likelihood* of observing that value
- Each type of random variable has its own distinct probability density function
- We can use a probability density function to calculate probabilities of observing an interval of events (using the cumulative distribution function)
- We can also use a probability density function to calculate the density (or likelihood) of observing a single event for some continuous random variable
- Roughly speaking, a density is a value that conceptually represents the binned probability of observing a single event of a continuous random variable
- Specifically, a density refers to the derivative of an extremely small interval of events around our point of interest, which tells us how much probability there is in the neighborhood of our point of interest

### Gaussian Distribution
A gaussian distribution is a discrete probability distribution of a random variable that takes the value 1 with a probability $p$ and the value 0 with probability $1-p$

$$ X \sim Gaussian(\mu;\sigma) $$

$$ f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^{2}} $$

$$ E(x) = \mu \text{ where } \lim_{n \rarr \infty} \hat{\mu} = \mu \text{ where } \hat{\mu} = \frac{1}{n}\sum_{i=1}^{n}X_i $$

$$ Var(x) = \sigma^{2} \text{ where } \lim_{n \rarr \infty} \hat{\sigma}^2 = \sigma^2 \text{ where } \hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^{n}(X_i - \hat{\mu})^2 $$

- The guassian distribution is also known as the normal distribution
- This is the single most important distribution in probability theory, owing to the Central Limit Theorem
- If we have a normally distributed random variable, we can input observations into its probability density function and receive densities as output
- The gaussian distribution is represented by parameters $\mu$ and $\sigma^2$, where $\mu$ is the mean and $\sigma^2$ is the variance

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Probability Distributions Wiki](https://en.wikipedia.org/wiki/Probability_distribution)
