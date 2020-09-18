---
title: "Stochasticity"
draft: false
weight: 5
katex: true
---

### Describing Stochasticity
- A process can be thought of as a function, system, or experiment
- A process is either deterministic or stochastic
- A stochastic process is a sequence of random variables
- A stochastic process is indexed by some other variable
- Typically, a stochastic process is indexed by time
- We can define a stochastic process as $S$
- Here, $S$ is a sequence of successive random variables:

$$
S_0, S_1, ..., S_t, ..., S_n
$$

- To be clear, each $S_i$ is a function
- Each $S_i$ is an instance of the same function $S$
- Essentially, the space each of these random variables lives over is the same, and when we need to talk about that space, then we’ll talk about $S$, and any realizations of $S$ will be written as $s$

### Describing Determinism
- Determinism is a property of a process
- If we insert the same inputs into a deterministic process, then we will receive the same outputs no less than 100% of the time
- In other words, the random variable $Y$ is deterministic if there is a random variable $X$, where every occurrence of $Y$ can be predetermined if we're given an occurence of $X$, and vice versa

### Randomness and its Relationship to Independence
- Independence refers to a lack of any pattern associated with a given set of random variables
- Independence is a property of the relationship between a set of random variables
- Randomness refers to a lack of determinism involved between a set of random variables (i.e. a process)
- Said another way, randomness is a measure of uncertainty of an outcome
- Therefore, randomness is more of a property of the data sampling process

### Randomness and its Relationship to Determinism
- If we assume that we are living in a deterministic world, then there is no *random* variable or stochastic process at all
- In this case, *randomness* is merely used to represent what might happen given our limited knowledge
- If we had perfect knowledge of a system, nothing would be random
- For example, a coin toss may not be considered random if we knew the coin's initial orientation, the impact point between my finger and the coin, the turbulence in the air, the surface smoothness of the table the coin lands on, the characteristics of the coin's material, the characteristics of the table's material, and so on
- In this case, we would be able to definitively say whether the coin would come up heads or tails
- Therefore, we would be able to say our coin toss is a deterministic process

### The Relationship of Stochasticity and Randomness
- Stochasticity and randomness are roughly synonymous in meaning
- The main difference between the two notions seems to be stricly contextual
- Typically, we describe variables as random and a process as stochastic
- In other words, a stochastic process can be thought of as a function that maps random variables to their observed outputs

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Bias and Random Error](https://newonlinecourses.science.psu.edu/stat509/node/26/)
- [Interpreting the Differences between Stochasticity and Randomness](https://math.stackexchange.com/questions/114373/whats-the-difference-between-stochastic-and-random)
