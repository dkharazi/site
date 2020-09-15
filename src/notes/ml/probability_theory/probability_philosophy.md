---
title: "Philosophy behind Probability"
draft: false
weight: 2
katex: true
---

### Motivating Randomness and Uncertainty
- We can think of *randomness* as a way of expressing what we don't know
- In other words, we can think of randomness as a measure of uncertainty
- Perhaps, if we knew more about the force I flipped the coin with, the initial orientation of the coin, the impact point between my finger and the coin, the turbulence in the air, the surface smoothness of the table the coin lands on, the material characteristics of the coin and the table, and so on, we would be able to definitively say whether the coin would come up heads or tails
- However, in the absence of all that information, we cannot predict the outcome of the coin flip
- In other words, in the absence of all that information, our process becomes probabilistic, rather than deterministic
- When we say that something is random, we are saying that our knowledge about the outcome is limited, so we can't be certain what will happen

### Two Conceptions of Probability
- A bayesian and frequentist define probability in the same way
- Specifically, they both believe probability is any number $p$ that obeys the axioms of probability
- However, they represent uncertainty differently, causing them to estimate probability differently
- Frequentists represent uncertainty of their estimates after they're already calculated, typically using confidence intervals
- Frequentists estimate probability by calculating the MLE of the probability
- Bayesians will represent uncertainty of their estimates within the estimates themselves, typically using prior probabilities
- Bayesians estimate probability using simulation to calculate the posterior probability 
- For example, let's say we want to flip a fair coin and estimate the probability of flipping heads:
	- A bayesian and frequentist would both say the probability of the coin coming up heads is 0.5
	- However, a frequentist would estimate the probability of receiving heads by tossing the coin many times
	- However, a bayesian would estimate the probability of receiving heads by tossing the coin many times and including some prior knowledge
	- This prior knowledge could be the assumed 0.5 probability, or it could be any previous tosses, or whatever we want it to be

### References
- [Bayesian and Frequentist Differences](https://jkkweb.sitehost.iu.edu/KruschkeFreqAndBayesAppTutorial.html#analysis_model)
- [Representations of Uncertainty in Bayesianism and Frequentism](https://analyticsconsultores.com.mx/wp-content/uploads/2019/04/Innovations-in-Bayesian-Networks.-Theory-and-Applications.pdf)
- [Contrasts of Bayesianism and Frequentism Example](https://cnl.salk.edu/~schraudo/teach/ml03/ML_Class2.pdf)
- [Bayesian and Frequentist Reasoning in Plain English](https://stats.stackexchange.com/questions/22/bayesian-and-frequentist-reasoning-in-plain-english)
- [Differences between a Probability and a Proportion](https://stats.stackexchange.com/questions/1525/whats-the-difference-between-a-probability-and-a-proportion/4850#4850)
- [Bayesians Defining and Interpreting Probability](https://stats.stackexchange.com/questions/173056/how-exactly-do-bayesians-define-or-interpret-probability)
- [Chance versus Randomness](https://plato.stanford.edu/entries/chance-randomness/#4)
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Basics of Probability Course](https://www.probabilitycourse.com/chapter1/1_1_0_what_is_probability.php)
- [Probability Interpretations Wiki](https://en.wikipedia.org/wiki/Probability_interpretations)
