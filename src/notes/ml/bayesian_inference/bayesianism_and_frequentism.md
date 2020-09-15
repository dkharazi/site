---
title: "Bayesianism and Frequentism"
draft: false
weight: 1
katex: true
---

### Motivating Bayesian Inference
- Bayesian inference typically involves parameter estimation and density estimation using probabalistic methods, such as Monte Carlo methods, Markov chains, or MCMC algorithms
- We typically use Bayes Theorem to estimate the posterior probability of observing some parameters (given our data)
- In other words, the poster probabilities associated with a parameter represent that parameter's estimates
- Roughly speaking, the posterior probability represents the likelihoods we're used to seeing, with an additional element of personal uncertainty about our parameters
- This element of subjectivity is known as a prior belief
- Bayesians typically represent this prior belief as a distribution that describes our beliefs about a parameter
- In other words, Bayesians (and Frequentists) believe the value of a parameter is a fixed single value from the start
- However, Bayesians represent any personal uncertainty about these parameters as a distribution
- Frequentists, on the other hand, don't represent uncertainty within their estimates, and instead represent uncertainty after the parameters have already been estimated
	- Specifically, Frequentists use tools like confidence intervals to represent uncertainty
- Bayesian inference uses bayes theorem at a very broad level when calculating posterior probabiltiies as the following:
$$ P(H|D) \propto P(H)P(D|H) $$
	- Where $P(H|D)$ is the posterior distribution, which is a combination of the data for some parameter and our prior beliefs
	- Where $P(H)$ is the prior distribution, which represents our belief about the parameter
	- Where $P(D|H)$ is the likelihood distribution, which represents the data

### Semi-Bayesian Inference
- MAP estimation is a semi-bayesian technique used for parameter estimation
- MAP estimation involves optimizing parameters, whereas MCMC is a sampling method (of the posterior distribution of parameters)
	- This is because MAP estimates are point estimates, whereas Bayesian methods are characterized by their use of distributions to summarize data and draw inferences
	- Thus, Bayesian methods tend to report the posterior mean or median along with credible intervals
- MAP estimates can be computed using conjugate priors
	- However, the posterior, prior, and likelihood distributions will not follow a closed-form pdf if they fail any assumptions
	- In this case, we would turn to MCMC techniques instead of MAP estimates

### Bayesian versus Frequentist Inference
- Essentially, frequentists are concerned with uncertainty in the data, whereas Bayesians are concerned with uncertainty in the parameters
- This is because Bayesians represent uncertainty of parameters using distributions, whereas frequentists only represent uncertainty of data using distributions
- Frequentists believe the following:
	1. Probability is thought of in terms of frequencies and can't include any personal uncertainty
		- Specifically, the probability of the event is the amount of times it happened over the total amount of times it could have happened
	2. Observed data is represented as a distribution, and parameters are represented as fixed values
		- We consider our observed data to be a random variable
		- We consider our parameters to be some unobservable fixed value
		- In other words, only the data is represented using distributions
- Bayesians believe the following:
	1. Probability is belief or certainty about an event
		- This belief exists because of the use of priors in Bayesian Inference
		- If the prior is a uniform distribution, then the posterior probabilities will be the same as frequentist probabilities for some parameter
	2. Observed data is represented as fixed values, and parameters are represented as distributions
		- We consider our observed data to be fixed values
		- We consider our parameters to be some unobservable fixed value, but represent them as a distribution (with added uncertainty)
		- In other words, only the parameters are represented using distributions

### Advantages Bayesian Inference
1. Able to insert prior knowledge (i.e prior distribution) when there is a lack of data
	- These priors will typically become irrelevant when the data better reflects the population
	- This can happen when there is a small sample size or large sample size
	- However, there is typically a smaller chance of having data reflecting the population when we have a small sample size, in comparison to when we have a large sample size
2. Able to include an added level of uncertainty in our estimates
	- This can be arguably better for reflecting the randomness that occurs in real world observations

### Different Methods of Inference
- Example of Bayesian statistics: MCMC simulation
- Example of Frequentist statistics: ML estimation
- Example of Semi-Bayesian statistics: MAP estimation

### Relevance of MCMC in Dynamics
- The likelihood distribution represents the transition matrix
	- As a reminder, the transition matrix is a frequency matrix of the distinct current states (columns) and previous states (rows)
	- As we increase the iterations of the transition matrix, the probabilities will eventually converge
- The prior distribution represents the state vector
	- We are able to insert our own weights to filter any probabilities given by the transition matrix
- The posterior distribution represents the steady-state vector
	- We are able to receive our converged distribution if we take many samples

### References
- [Paper on Bayesian Parameter Estimation Approaches](https://www.sciencedirect.com/topics/computer-science/posterior-probability)
- [Difference between Confidence Interval and Credible Intervals](https://stats.stackexchange.com/questions/2272/whats-the-difference-between-a-confidence-interval-and-a-credible-interval/2287#2287)
- [Intuition behind Bayesianism and Frequentism](https://stats.stackexchange.com/questions/22/bayesian-and-frequentist-reasoning-in-plain-english)
- [Examples of Bayesian Inference](https://frnsys.com/ai_notes/foundations/bayesian_statistics.html)
- [Do Bayesian Priors become Irrelevant with a Large Sample Size](https://stats.stackexchange.com/questions/200982/do-bayesian-priors-become-irrelevant-with-large-sample-size)
- [Examples of Bayesian Inference Lecture Slides](http://www.svcl.ucsd.edu/courses/ece271A/handouts/BayesIntro.pdf)
