---
title: "Bayesian and Frequentist Estimation"
draft: false
weight: 3
katex: true
---

### An Analogy of the Data Generation Process
- A data generating process is the true, underlying phenomenon that is creating the data
- A mathematical model is the (often imperfect) attempt to describe and emulate this phenomenon
- A mathematical model is represented as a function with adjustable parameters
- We can think of a mathematical model as a shower head that is controlled by a bunch of knobs, which are the model's parameters
- For example, the angle of the shower head is one parameter that controls the *location* of droplets on the floor
- There is another knob that controls the *spread* of the spray
- This shower head can be thought of as our normal probability density function, where the location know is $\mu$ and the spread know is $\sigma$
- The bathroom shower head is just one device for generating a pattern of random water droplets
- There are others, such as different types of lawn sprinklers
- Each type of sprinkler generates a different pattern of droplets, and each type of sprinkler has different control knobs
- Different mathematical models of data are like different shower heads or sprinklers, each with their own control knobs
- Each mathematical model generates a particular type of data, and each mathematical model has particular knobs – called parameters – that control the specific details of the pattern of data

### Motivating Parameter Estimation
- Previously, we estimated probabilities using frequentist and bayesian methods
- A probability is just considered a parameter of a mathematical model
- Therefore, these frequentist and bayesian methods used for estimating probabilities can also be used to estimate other parameters
- In other words, we can use those same frequentist and bayesian parameter estimation techniques, such as MLE and simulations, to estimate the parameters $\mu$ and $\sigma$ for a normal distribution

### More on Frequentist Estimation
- There are lots of settings for $\mu$ and $\sigma$ that may make the normal distribution mimick the data reasonably well, but what values of $\mu$ and $\sigma$ are the *best*?
- The classic answer to this question in the frequentist framework is the values of $\mu$ and $\sigma$ that maximize the probability of the data
- Another technical term for probability is *likelihood*, and so the values that maximize the probability of the data are called the maximum likelihood estimate or MLE
- It turns out that for a normal distribution, the MLE value for $\mu$ is just the sample mean, and the MLE value for $\sigma^{2}$ is just the sample variance

### More on Bayesian Estimation
- In Bayesian statistics, we typically follow a general process when estimating parameters:
	1. Start with a set of possible parameter values in a model, with initial credibilities of those parameter values
	2. Gather data that makes some parameter values more or less credible
	3. Re-allocate credibility to the parameter values that are more consistent with the data, and re-allocate credibility away from parameter values that are less consistent with the data
- One attraction of Bayesian methods is that the posterior distribution inherently reveals the uncertainty of the estimated parameter value
- When the posterior distribution is wide, the estimate is uncertain
- When the posterior distribution is narrower, the posterior estimate is more certain
- In the Bayesian framework, uncertainty is inherently represented by the posterior distribution over the parameters
- In the frequentist framework, there is no such representation, and so confidence intervals must be used to represent uncertainty

### Which Analysis and When?
- We should use Bayesian analysis if we're asking what parameter values and models are most credible given the data
- We should use frequentist analysis if we're asking about error rates for imaginary data from hypothetical worlds

### Bayesian versus Frequentist Estimation
- It is often said incorrectly that parameters are treated as fixed by frequentists but random by bayesians
- However, frequentists and bayesians both believe a parameter may have been fixed from the start or may have been generated from a physically random mechanism
- In either case, both suppose it has taken on some fixed value
- The bayesian uses formal probability models to express personal uncertainty about that value, whereas the frequentist uses confidence interval to express uncertainty about that value
- Randomness in our model creates personal uncertainty about our parameter estimates in our model
- Randomness is not a property of the parameter, although we hope it accurately reflects properties of the mechanisms that produced the parameter

### References
- [Bayesian and Frequentist Differences](https://jkkweb.sitehost.iu.edu/KruschkeFreqAndBayesAppTutorial.html#analysis_model)
- [Representations of Uncertainty in Bayesianism and Frequentism](https://analyticsconsultores.com.mx/wp-content/uploads/2019/04/Innovations-in-Bayesian-Networks.-Theory-and-Applications.pdf)
- [Contrasts of Bayesianism and Frequentism Example](https://cnl.salk.edu/~schraudo/teach/ml03/ML_Class2.pdf)
- [Fixed Parameters in Bayesianism and Frequentism](https://stats.stackexchange.com/questions/83731/would-a-bayesian-admit-that-there-is-one-fixed-parameter-value)
- [Bayesian and Frequentist Reasoning in Plain English](https://stats.stackexchange.com/questions/22/bayesian-and-frequentist-reasoning-in-plain-english)
- [Differences between a Probability and a Proportion](https://stats.stackexchange.com/questions/1525/whats-the-difference-between-a-probability-and-a-proportion/4850#4850)
- [Bayesians Defining and Interpreting Probability](https://stats.stackexchange.com/questions/173056/how-exactly-do-bayesians-define-or-interpret-probability)
