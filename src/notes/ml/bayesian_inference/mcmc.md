---
title: "MCMC Methods"
draft: false
weight: 11
katex: true
---

### Describing the MCMC Method
- MCMC methods are used to approximate the posterior distribution of a parameter by random sampling in a probabilistic space
- Roughly speaking, the posterior distribution can be thought of as a kind of average of the prior and likelihood distributions
- We can determine a posterior distribution by doing the following:
	1. Using conjugate distributions (i.e. conjugate prior)
		- The prior and likelihood distributions rarely match up with some analytical formula perfectly, so we usually aren't able to work with conjugate distributions
		- If we are lucky, we can use these and simply multiply the closed-form functions (prior and likelihood) by each other
	2. Using MCMC sampling
		- If the posterior, likelihood, or prior distributions become more complicated and do not follow a closed-form function, then we cannot solve for these analytically and will need use MCMC sampling

### How Monte Carlo Simulations Relate to MCMC
- Monte Carlo simulations generally refer to taking samples from a population to simulate the population distribution
- In many cases, we can use Monte Carlo simulations to approximate the area under curves when integration doesn't have a closed-form solution
- Within the MCMC algorithm, random parameter values are simulated and either accepted or rejected as the new parameter value at each iteration
- In the scope of the MCMC algorithm, the process of generating new random parameter values for many iterations is known as Monte Carlo simulations

### How Markov Chains Relate to MCMC
- A Markov Chain generally refers to a model that only uses the current state to predict the next state
	- Specifically, the model contains an independent variable that represents some current observation, and a dependent variable that represents the previous observation
	- This is referred to as the Markov Property, or *memorylessness*
- Within the MCMC algorithm, we determine how much better a randomly-generated parameter estimate is to the previous parameter estimate, and we add the randomly-generated parameter value to the chain if it is considered better
- In the scope of the MCMC algorithm, the Markov Chain refers to the following features:
	- Only referring to the previous parameter estimate when evaluating if the randomly-generated parameter estimate is better or not
	- Adding any *better* values to a chain of parameter estimates

### Defining the MCMC Algorithm
1. Generate a random parameter value to consider, and continue to generate random parameter values for many iterations (this is the **Monte Carlo** part)
2. Compute the posterior (joint) probability of observing the pair of randomly-generated parameter values by combining the prior and likelihood distributions (this is the **Bayes theorem** part)
	- More specifically, the likelihood equals the joint likelihood of observing the parameter of interest given the data
	- And the prior equals the joint likelihood of observing the parameters together
	- For example, let's say we want to estimate the conditional mean $\mu_{Y|X}$, which is represented by the following posterior distribution:
	$$ \mu_{Y|X} \sim P(\beta_{0},\beta_{1},\sigma|Y) $$
	$$ P(\beta_{0},\beta_{1},\sigma|Y) \propto P(\beta_{0},\beta_{1},\sigma)P(Y|\beta_{0},\beta_{1},\sigma) $$
	- Here, $Y$ represents our response data, $X$ represents our predictor variable, and $\mu_{Y|X} = \beta_{0} + \beta_{1}X + \epsilon$
	- We know that our likelihood equals the joint likelihood (or density) of observing the data (or response variable) given the parameters $\beta_{0}$, $\beta_{1}$, and $\sigma$
	- Therefore, our likelihood function can be defined in R as the following:
	$$ P(Y|\beta_{0},\beta_{1},\sigma) = $$
	$$ \text{dnorm}(\text{data}=y_{1},\text{mean}=\beta_{0}+\beta_{1}x_{1},\text{sd}=\sigma) $$
	$$ \times \text{dnorm}(\text{data}=y_{2},\text{mean}=\beta_{0}+\beta_{1}x_{2},\text{sd}=\sigma) $$
	$$ \times ... $$
	$$ \times \text{dnorm}(\text{data}=y_{n},\text{mean}=\beta_{0}+\beta_{1}x_{n},\text{sd}=\sigma) $$
	- Here, we're estimating the probability of observing our data (or response variable in this case) given our parameters
	- We know that our prior equals the joint likelihood (or density) of observing the parameters $\beta_{0}$, $\beta_{1}$, and $\sigma$
	- Therefore, our prior function can be defined in R as the following:
	$$ P(\beta_{0},\beta_{1},\sigma) = $$
	$$ \text{dnorm}(\text{data}=\beta_{0},\text{mean}=\chi_{1}, \text{sd}=\gamma_{1}) $$
	$$ \times \text{dnorm}(\text{data}=\beta_{1},\text{mean}=\chi_{2}, \text{sd}=\gamma_{2}) $$
	$$ \times \text{dnorm}(\text{data}=\sigma,\text{mean}=\chi_{3}, \text{sd}=\gamma_{3}) $$
	- Where $\beta_{0}, \beta_{1}$, and $\sigma$ are some fixed parameter estimates we're adjusting across many iterations
	- Where $\chi_{i}$ is some mean we decide for the $i^{th}$ parameter (whatever mean we believe parameter $i^{th}$ parameter to be centered around)
	- Where $\gamma_{i}$ is some standard deviation we decide for the $i^{th}$ parameter (whatever sd we believe the $i^{th}$ parameter to be centered around)
	- Also, we decided parameters $\beta_{0},\beta_{1},$ and $\sigma$ were all normally-distributed, but we can choose any other distribution if we believe they take on a different form
	- For example, poisson, beta, and uniform distributions are popular choices
3. Determine if the randomly-generated parameter estimate is better than the previous parameter estimate (this is the **Metropolis-Hastings** part, or some other method for evaluation)
4. If the pair of randomly-generated parameter estimates is better than the last one, then it is added to the chain of parameter estimates (this is the **Markov chain** part)

### References
- [Intuition behind MCMC Methods](https://towardsdatascience.com/a-zero-math-introduction-to-markov-chain-monte-carlo-methods-dcba889e0c50)
- [Description and Examples of MCMC Methods](https://towardsdatascience.com/markov-chain-monte-carlo-291d8a5975ae)
- [Example of MCMC Simulation](https://nicercode.github.io/guides/mcmc/)
- [Example of Metropolis-Hastings Method](https://theoreticalecology.wordpress.com/2010/09/17/metropolis-hastings-mcmc-in-r/)
- [Lecture Notes on MCMC Simulation](https://www.stat.cmu.edu/~cshalizi/statcomp/13/lectures/16/lecture-16.pdf)
