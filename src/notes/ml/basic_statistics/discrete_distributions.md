---
title: "Discrete Distributions"
draft: false
weight: 2
katex: true
---

### Describing Discrete Distributions
- A discrete distribution is a statistical distribution that shows the probabilities of outcomes as finite values
- A discrete distribution is a function that maps some finite value from the sample space to the probability space
- In other words, a discrete distribution represents the probabilities of discrete events across some pre-determined space

### Bernoulli Distribution
- A bernoulli distribution is a discrete probability distribution of a random variable that takes the value 1 with a probability $p$ and the value 0 with probability $1-p$
- We can define a bernoulli random variable as the following:

$$
X \sim Bernoulli(p)
$$

$$
P(x) = p^{x}(1-p)^{1-x}
$$

$$
E(x) = p
$$

$$
Var(x) = p(1-p)
$$

- The range of a bernoulli distribution is $\{0,1\}$
- A bernoulli distribution represents the probability of observing a success
- In other words, a bernoulli distribution is represented by any two-element space
- There is only one parameter that makes up the bernoulli distribution
- Specifically, the parameter $p$ (or $\mu$) represents the probability of observing a 1
- In other words, $P(X=1) = p$ or $P(X=1) = \mu$
- The following are examples of random variables that are represented by a bernoulli distribution:
	- A random variable that maps values to either heads or tails
	- A random variable that maps values to either rain or shine
	- A random variable that maps values to either democrat or republican
- Bernoulli distributions are especially interesting because logistic regression assumes the observations of the response variable is a benoulli random variable

### Binomial Distribution
- A binomial distribution is a discrete probability distribution of a random variable that represents the number of successes $p$ in a sample of size $n$
- We can define a binomial random variable as the following:

$$
X \sim Binomial(p;n)
$$

$$
P(x) = \binom{n}{k}p^{x}(1-p)^{n-x}
$$

$$
E(x) = np
$$

$$
Var(x) = np(1-p)
$$

- A binomial distribution represents a sequence of bernoulli trials (or a bernoulli process)
- The range of a binomial distribution is $[0,1]$
- A binomial distribution models the number of successes in a sample size (drawn with replacement from a population)
- Therefore, there are two parameters that make up a binomial distribution 
- Specifically, the parameter $n$ represents the size of the sample and the parameter $p$ represents the probability of observing a success in the sample
- Binomial distributions are especially interesting because logistic regression assumes the response variable represents a binomial random variable

### Poisson Distribution
- A poisson distribution is a discrete probability distribution of a random variable that represents the number of successes occurring in a fixed interval of time
- We can define a poisson random variable as the following:

$$
X \sim Poisson(\lambda)
$$

$$
P(x) = \frac{\lambda^{k}e^{-\lambda}}{k!}
$$

$$
E(x) = \lambda \text{ where } \lim_{n \rarr \infty} \hat{\lambda} = \lambda \text{ where } \hat{\lambda} = \frac{1}{n}\sum_{i=1}^{n}X_i
$$


$$
Var(x) = \lambda \text{ where } \lim_{n \rarr \infty} \hat{\lambda} = \lambda \text{ where } \hat{\lambda} = \frac{1}{n}\sum_{i=1}^{n}X_i
$$

- A poisson distribution expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant rate $k$ (and independently of the time since the last event)
- There is only one parameter that makes up a poisson distribution
- Specifically, the parameter $\lambda$ represents the expected number of occurrences (and doesn't need to be an integer)
- Poisson distributions are especially interesting because they are used in GLMs to model rates
- Essentially, the poisson distribution is popular for modeling the number of times an event occurs in an interval of time or space
- The following are examples of random variables that are represented by a poisson distribution:
	- The number of meteorites greater than 1 meter diameter that strike Earth in a year
	- The number of patients arriving in an emergency room between 10 and 11 pm
	- The number of photons hitting a detector in a particular time interval

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Poisson Wiki](https://en.wikipedia.org/wiki/Poisson_distribution)

