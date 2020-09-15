---
title: "Hidden Markov Chains"
draft: false
weight: 10
katex: true
---

### Describing Hidden Markov Models
- A Hidden Markov Model (or HMM) is a probabilistic model
- An HMM is a probabilistic model that allows us to predict a sequence of unknown (hidden) variables from a set of observed variables
- We use HMMs to calculate the posterior (conditional) probability of observing a sequence of hidden states (given some additional information provided by other observed states/variables)
- Since we can use HMMs to calculate the posterior probability of observing a sequence of hidden states, we can also use HMMs to calculate the most likely hidden state given observed states
- In other words, we can use MLE to find the most probable (unknown) hidden state given an observed state
- An HMM requires two sets of observations indexed by time, where one set of observations is associated with the observed states and the other set of observations is associated with the hidden states
- A simple example of an HMM is predicting the weather (the hidden variable) based on the type of clothes that someone wears (the observed variable)

### Components of HMM
- A set of hidden states
- A set of observed states
- A state transition matrix
	- Represents the conditional probabilities of observing a hidden state given the current hidden state
- An output emission matrix
	- Represents the joint probabilities of observing an observed state and a hidden state at the same time
- A prior matrix
	- Represents the subjective, marginal probabilities of observing an observed state

### An Example of HMM involving Weather
- A set of hidden states: weather
- A set of observed states: clothing worn
- A state transition matrix: P(Hot|Hot yesterday), P(Cold|Cold yesterday), P(Hot|Cold yesterday), P(Cold|Hot yesterday), etc.
- An output emission matrix: P(Hot,Shorts), P(Hot,Jeans), P(Cold,Shorts), P(Cold,Jeans), etc.
- A prior matrix: P(Hot), P(Cold), etc.

### The General HMM Algorithm
1. Calculate the joint probabilities of observing hidden states (e.g. sunny, cloudy, etc.) and observed state (e.g. jeans, shorts, etc.)
2. Calculate the conditional probabilities of observing hidden states given its previous hidden state
3. Calculate the prior probabilities of observing the hidden states
4. Calculate the posterior probability of observing a sequence of hidden states given a sequence of observed states using Bayes theorem (i.e. Bayesian statistics)

$$ P(H|D) \propto P(H)P(D|H) $$
$$ P(H|D) = P(Hot,Hot | Jeans,Shorts) $$
$$ P(H) = P(Hot) $$
$$ P(D|H) = P(Jeans|Hot) \times P(Shorts|Hot) \times P(Hot|Hot) $$

4. Or, we can instead calculate each posterior probability of observing a sequence of hidden states given a sequence of observed states, then use MLE to find the most probable hidden state given the specified observed states
	- For example, we can calculate the following posterior probabilities:
	$$ P_{1}(H|D) = P(Hot,Hot | Jeans,Shorts) = 0.4 $$
	$$ P_{2}(H|D) = P(Hot,Cold | Jeans,Shorts) = 0.5 $$
	$$ P_{3}(H|D) = P(Cold,Hot | Jeans,Shorts) = 0.4 $$
	$$ P_{4}(H|D) = P(Cold,Cold | Jeans,Shorts) = 0.3 $$
	- Then, we can guess the hidden states are $\lbrace Hot,Cold \rbrace$ when the observed states are $ \lbrace Jeans,Shorts \rbrace$, since $P_{2}(H|D)$ has the highest probability out of the four posterior probabilities

### Markov Models versus HMMs
- An HMM involves the use of a markov model on its hidden states (not on the observed states)
- A HMM is essentially a markov model with some additional information provided by other observed states (or variables)
- We use HMMs over plain markov models when we possess additional observed data that seems to be associated (or correlated) with the data we are trying to classify (i.e. hidden states)

### References
- [Intuition behind Hidden Markov Models](https://medium.com/@postsanjay/hidden-markov-models-simplified-c3f58728caab)
- [Bayes Estimator and Hidden Markov Models](https://www.mathworks.com/matlabcentral/fileexchange/70226-bayes-estimator-best-must-have-tattoo/?s_tid=LandingPageTabfx)
- [Rough Description about Hidden Markov Models](https://www.reddit.com/r/explainlikeimfive/comments/1iyl5v/eli5_what_is_a_hidden_markov_model_and_how_does/)
- [Difference between Markov Chains and Hidden Markov Models](https://stackoverflow.com/questions/10748426/what-is-the-difference-between-markov-chains-and-hidden-markov-model)
- [Hidden Markov Model Wiki](https://en.wikipedia.org/wiki/Hidden_Markov_model)
- [Hidden Markov Model Lecture Notes](http://www.cs.cmu.edu/~tbergkir/11711fa17/recitation4_notes.pdf)
