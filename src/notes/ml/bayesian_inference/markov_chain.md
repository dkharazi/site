---
title: "Markov Chains"
draft: false
weight: 8
katex: true
---

### Defining Notation from Statistical Mechanics
- A state refers to a unique observation of some system
- A system refers to a collection of random variables, which includes the future state $i$ and current state $j$
- The states $i$ and $j$ are essentially thought of as independent and dependent random variables, respectively

### Describing a Markov Process
- A Markov process is a stochastic process that has the following properties:
	- The number of distinct possible outcomes (or states) is finite
	- Supports the Markov Property, otherwise known as *memorylessness*
		- The *memorylessness* property refers to the outcome of a random variable depending only on the previously observed outcome of that random variable
	- The probabilities (associated with each transition between other state) are constant over time
- Since we assume independence of any previous observations, we can consider the conditional probabilities of each state to be fixed
	- Specifically, the next state is only conditional on the present state of the system, since its past states are considered to be independent of the next state
	- Said another way, the next observation is only conditional on the current observation of a random variable, since its past observations are considered to be independent of the next observation
- The Markov Property doesn't usually apply to systems within the real world, so we wouldn't expect our predictions to be very accurate
	- However, running the Markov chain for thousands of iterations typically provides us with a good long-run prediction

### An Example of a Markov Process about Weather
- Let's assume that on a given day it is more likely to rain if it rained the day before than if it didn't
- Likewise, it is more likely to be sunny if it was sunny the day before than if it wasn't
- We may try to express the probability of it raining on Tuesday as a function of the weather on Monday without taking Sunday into account
- Even though every day might be dependant on everything that happened previously, we can really only consider a small amount of data when predicting the weather, which can actually produce accurate predictions
	- Specifically, the weather on Monday doesn't actually affect the weather on Tuesday
	- Rather, they both stem from the quite complex meteorological conditions, and those conditions don't tend to just shift in unexpected directions

### Basic Theory behind Markov Chains
- A Markov Chain is a probabilistic model of a stochastic process
- Every Markov Chain can be represented using a transition matrix, a state vector, and a steady-state vector
- The *Markov* part refers to the model's use of the Markov property
	- Specifically, the transition matrix is usable only because of the Markov property
- The *Chain* part refers to running many iterations of the model by re-inputting the previous model's output over and over again
	- Specifically, we input an initial state vector
	- Then, we receive some output from the model (by multiplying the transition matrix and the state vector together)
	- Then, we re-input the output over and over again until the state vector converges, which we call our steady-state vector
	- Mathematically, we keep running the model until $M x_{s} = x_{s}$
	- In other words, we keep running the model until the input equals the output (i.e. the state vector equals the steady-state vector
- The goal of a Markov Chain is to keep iterating until we receive a steady-state vector that converges

### Defining Markov Chains
- Rows represent the *from* or *current* state
	- The rows sum up to a probability of 1
- Columns represent the *to* or *next* state
	- The columns do not sum up to 1, since they are conditional probabilities and not joint probabilities
- A transition matrix represents the conditional probabilities of some observation given the previous observation
	- This is based on a large amount of historical data
- The state vector represents the probabilities of some current observation that you want to better understand
	- This is based on the probability that the system (or random variable) is in a state $k$ at a given time
	- This is used as input
- The steady-state vector represents the converged output of multiplying the transition matrix and the initial state vector over time
	- This represents the output after very many iterations, since the state vector will eventually converge after very many iterations

### Mathematically Defining Markov Chains
- A Markov Chain is a discrete-valued, discrete-time stochastic processes
- Mathematically, a discrete-valued, discrete-time stochastic process has the Markov property when:

$$
P(S_{n+1} = s_{n+1}|S_{n} = s_{n})
$$

$$
= P(S_{n+1} = s_{n+1}|S_{n} = s_{n}, S_{n−1} = s_{n−1}, ..., S_{1} = s_{1})
$$

- In other words, the probability distribution for the next state depends solely on the current state
- If the above property is true for a stochastic process, then we can say that $S_{n}$ is a Markov process
- The analogous condition for continuous time is the following:

$$
P(S(t_{n+1}) = s_{n+1}|S(t_{n}) = s_{n})
$$

$$
= P(S(t_{n+1}) = s_{n+1}|S(t_{n}) = s_{n}, S(t_{n−1}) = s_{n−1}, ..., S(t_{1}) = s_{1})
$$

### Why use a Markov Chain?
- If we use a Markov Chain, we don't need to keep track of a bunch of dependent variables with respect to some independent variable
- Instead, we only need to keep track of the history of one independent variable (and the index, which is typically a date)
- Then, we can calculate the conditional probabilities for each state (or unique observation) given its previous state (or previous observation)

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Coin Toss Example of Markov Chain](https://medium.com/@rohitpandey576/coin-toss-markov-chains-7995cb303406)
- [Definition and Examples of Markov Processes](https://people.math.osu.edu/husen.1/teaching/571/markov_1.pdf)
- [Visualizing Markov Chains](http://setosa.io/blog/2014/07/26/markov-chains/)
- [Markov Chain Wiki](https://en.wikipedia.org/wiki/Markov_chain)
- [Examples of Markov Processes](http://people.brunel.ac.uk/~mastjjb/jeb/or/moremk.html)
- [Lecture Notes on Markov Processes](https://www.math.drexel.edu/~jwd25/LM_SPRING_07/lectures/Markov.html)
