---
title: "Examples of Markov Chains"
draft: false
weight: 9
katex: true
---

### Example of a Markov Chain about Weather
- Suppose that weather on any given day can be classified in two states: sunny and rainy
- Let's first define the following variables:

$$
S_{t+1} = \text{Tomorrow is sunny} \in \lbrace 0,1 \rbrace
$$

$$
R_{t+1} = \text{Tomorrow is rainy} \in \lbrace 0,1 \rbrace
$$

$$
S_{t} = \text{Today is sunny} \in \lbrace 0,1 \rbrace
$$

$$
R_{t} = \text{Today is rainy} \in \lbrace 0,1 \rbrace
$$

- Based on our previous experiences, we know the following:

$$
P(S_{t+1}|S_{t}) = 0.9
$$

$$
P(R_{t+1}|S_{t}) = 0.1
$$

$$
P(S_{t+1}|R_{t}) = 0.5
$$

$$
P(R_{t+1}|R_{t}) = 0.5
$$

- Therefore, a Markov Chain with a State Space $S= \lbrace Sunny, Rainy \rbrace$ has the following transition matrix:

$$
P = \begin{bmatrix}  & S_{t+1} & R_{t+1} \cr S_{t} & .9 & .1 \cr R_{t} & 0.5 & 0.5 \end{bmatrix}
$$

- Now, let's say we wanted to calculate the probability of the weather being sunny two days from today, and we know that the weather today is sunny
- Then, we would need to calculate the following conditional probabilities:

$$
P(S_{t+1}|S_{t}, S_{t+1}|S_{t}) = 0.9 \times 0.9 = 0.81
$$

$$
P(R_{t+1}|S_{t}, S_{t+1}|R_{t}) = 0.1 \times 0.5 = 0.05
$$

$$
P(S_{t+1}|S_{t}, S_{t+1}|S_{t}) + P(R_{t+1}|S_{t}, S_{t+1}|R_{t}) = 0.81 + 0.05 = 0.86
$$

- Here, $P(S_{t+1}|S_{t}, S_{t+1}|S_{t})$ refers to the probability of going from sunny weather on the $1^{st}$ day to sunny weather on the $2^{nd}$ day to sunny weather on the $3^{rd}$ day
- And, $P(R_{t+1}|S_{t}, S_{t+1}|R_{t})$ refers to the probability of going from sunny weather on the $1^{st}$ day to rainy weather on the $2^{nd}$ day to sunny weather on the $3^{rd}$ day
- Then, the sum of these two conditional probabilities will give us the probability of the weather being sunny two days from now
- We could also handle the above situation as the following:
	1. Let an event $A= \lbrace SS,SR,RS,RR \rbrace$ represent a set of possible weather transitions from one day to another
		- Where $SS =$ a day of sunny weather where the previous day was also sunny
		- Where $SR =$ a day of rainy weather where the previous day was sunny
		- Where $RS =$ a day of sunny weather where the previous day was rainy
		- Where $RR =$ a day of rainy weather where the previous day was also rainy
	2. Calculate the following probability:
	$$
	P(SS,SS)
	$$
	3. Calculate the following probability:
	$$
	P(SR,RS)
	$$
	4. Calculate the following probability:
	$$
	P(\text{Second day is sunny}) = P(SS,SS) + P(SR,RS)
	$$

### References
- [Intuition behind a Markov Chain](https://stats.stackexchange.com/questions/165/how-would-you-explain-markov-chain-monte-carlo-mcmc-to-a-layperson)
- [Markov Chain Wiki](https://en.wikipedia.org/wiki/Markov_chain)
