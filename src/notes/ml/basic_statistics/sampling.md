---
title: "Sampling"
draft: false
weight: 9
katex: true
---

### Motivating Sampling
- We assume that whatever it is that gave us our data is well-modeled by some
random process
- In effect, each time we make a measurement, we ask the process to spit out numbers according to some population distribution, and we then sample the distribution
- We think of sampling as closing our eyes and picking a data point out of a box, we call the set of all data-points in the box the population
- We assume that the true distribution is unknown and lies behind our data
- If we want to learn about that distribution from the data, then we need to know something about the kind of data it is likely to give us
- That is, we need to know the sampling distribution, or the distribution of data values given that the true distribution takes a certain functional form
- More specifically, we need to know the sampling distribution with certain parameter values
- Then, we can sample from it in a specified way

### The Notion of a Statistic
- Naturally, we want to summarize our data so we can ignore as much about our data as possible
- For example, we would most likely prefer to have a summary of our data, rather than having to remember the exact sequence of heads and tails for a million coin-tosses
- A summary of the data is called a *statistic*
- More formally, any function of the data is a statistic, provided the following:
	- The function of the data is well-defined for any number of data-points
	- The function of the data doesn't have any random inputs other than the data

### Loss of Variability Under Sampling
- It’s generally true that, whatever measure of variability we pick, its value in a sample will tend to be smaller than its population value (since the sample variance is a biased estimator of the population variance)
- For example (as an extreme case), there is no variation in our data if our sample consists of a single point
- Generally, sampling a subset from the population is unlikely to give an exactly representative sample
- Naturally, the more probable events will tend to show up in the sample more often

### Monte Carlo Methods
- Even if we know the exact population distribution, determining the sampling distribution can be difficult for the following reasons:
	- Sometimes we don't have a nice, readily-available (or closed-form) probability density function
	- Getting an accurate sample from the population can become difficult (especially as the range of values increases)
	- Getting a large enough sample can become difficult (especially if our rejection regions are large)
- In these situations, we have three options:
	1. Manually try to gather and test a sample ourselves
	2. Turn to the literature in the hopes that somebody else has already sampled from the population distribution we are looking for, so we can use their sample
        3. Simulate ourselves
- In certain situation, the first two options can save us a lot of time if the sample is readily available to us
- Typically, however, the first two options will lead to barriers, causing a great deal of time to be wasted on researching and manual effort
- The third option (i.e. simulation) can be tricky, but could save us a lot of time (and lead us to accurate estimates) if:
	- We know what sampling procedure to use (i.e. MCMC, Gibbs, etc.)
	- We know the population distribution
	- We have a good source of random variables
- If we simulate many samples, then the law of large numbers tells us the empirical frequencies of our simulations will approach to the actual sampling distribution
- This process is called Monte Carlo simultion (or Monte Carlo method)
- We typically don't know how many times we should run our simulation before we can become confident that we are close to the right distribution
- Sometimes, a few hundred points is enough, but other times we need hundreds of thousands (or more) of points

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Why Sampling is Hard](https://www.quora.com/Why-is-it-hard-to-directly-sample-from-certain-statistical-distributions)
