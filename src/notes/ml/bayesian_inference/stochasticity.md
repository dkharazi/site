---
title: "Stochastic Processes"
draft: false
weight: 5
katex: true
---

### Motivating Stochasticity
- A stochastic process is a sequence of random variables
- A stochastic process is indexed by some other variable
- A stochastic process is typically index by time
- We can define a stochastic process as $S$, which can also be thought of as a sequence of successive random variables:

$$
S = S_{0}, S_{1}, S_{2}, ..., S_{t}, ..., S_{n}
$$

- These successive random variables all belong to the same function $S$
- In other words, the space each of these random variables lives over is the same, and when we need to talk about that space, then we’ll talk about $S$, and any realizations of $S$ will be written as $s$

### Difference between Stochasticity and Determinism
- Determinism is any process that isn't stochastic, or doesn't involve an element of randomness
- In a stochastic process, we are interested in a *best guess*
- In a deterministic process, we are interested in a *consistent solution*
- A deterministic process can be determined by an exact formula, whereas a stochastic process can't be determined by an exact formula and involves some *guessing*

### Examples of Deterministic Processes
- We only need to know an object's mass and acceleration in order to determine the force of an object

$$
F = ma
$$

- We only need to know the degrees in Celsius in order to determine the degrees in Kelvin

$$
K = C + 273.15
$$

### Examples of Stochastic Processes
- Rolling a die
- Flipping a coin
- Rolling a die based on last flip
	- This is an example of a Markovian Chain, which has the same probability space as rolling a die (without knowing the last toss)
- Flipping a coin (based on last flip)
	- This is an example of a Markovian Chain, which has the same probability space as flipping a coin (without knowing the last flip)

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Example of Stochasticity](https://www.quora.com/Is-dice-rolling-a-deterministic-or-stochastic-process)
- [Description of Stochasticity in Markov Chains](http://axon.cs.byu.edu/Dan/252/misc/252-Markov_chains.pdf)
- [Lecture Notes about Stochastic Processes](https://web.ma.utexas.edu/users/gordanz/notes/introduction_to_stochastic_processes.pdf)
