---
title: "Dynamic Systems"
draft: false
weight: 4
katex: true
---

### The Essence of Dynamical Systems
- A dynamical system is a system in which a function describes the time dependence of a point in a geometrical space
- Said another way, a dynamical system is a collection of random variables that is indexed by time
- A stochastic dynamical system is a dynamic system subjected to the effects of noise
	- In other words, a dynamic system is considered to be stochastic if the system requires mapping its inputs to outputs using probabilities
- A deterministic dynamical system is a dynamic system that isn't subjected to the effect of noise
- We will be interested in stochastic dynamical systems in the majority of our research

### Systems and States
- In our case, a system refers to a collection of states indexed by time, which represents some broader notion
	- Some examples of this include the stock market, weather, etc.
- A state refers to a distinct observation of some random variable
	- Some examples of this include if the stock market goes up, the weather being sunny, etc.

### State Space versus Sample Space
- State Spaces are used in Dynamics
	- State spaces imply that there is a time progression and that our system will assume different states as time progresses
	- For example, the state space of the largest number up to $n^{th}$ roll is a number from the following state space: ${1, 2, 3, 4, 5, 6}$
- Sample Spaces are used more often in Statistics
	- A sample space represents a set of distinct observations of some random variable
	- There is typically a probability distribution associated with each state
	- For example, the sample space of a single die roll is the following
	$$
	\Omega = {1, 2, 3, 4, 5, 6}
	$$
- In summary, we expect to be thinking about probabilities when we hear *sample spaces*, unlike *state spaces*, which do not carry the same connotation
- *State spaces* are typically indexed by time, unlike *sample spaces*, which do not carry the same connotation

### References
- [Dynamical System Wiki](https://en.wikipedia.org/wiki/Dynamical_system)
- [Difference between State Space and Sample Space](https://math.stackexchange.com/questions/2042801/state-space-and-sample-space-difference)
- [Lecture Notes on Dynamical Systems](https://www.math.ucdavis.edu/~soshniko/135b/Mid1Sol.pdf)
