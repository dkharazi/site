---
title: "Random Variables"
draft: false
weight: 4
katex: true
---

### Defining Random Variables
- A sample space $\Omega$ is a set of all possible outcomes of an experiment
- An event is a subset of a sample space
- A random variable is a deterministic function that maps a single value from the sample space to the real line
- Said a different way, a random variable represents a function that maps a single value from the sample space to a realization that is any single real number
- Mathematically, a random variable can be defined as the following:

$$ X: \Omega \to \R \text{ such that } \omega \mapsto X(\omega) $$

- We can define the above components as the following:
	- $\omega \in \Omega$
	- $X(\omega) \in \R$
	- $\Omega$ is a set that represents the domain of the random variable function
	- $\R$ is a set that represents the range of the random variable function
	- $\omega$ represents an element, or a single value, from the set $\Omega$
	- $X(\omega)$ represents an element, or a single value, from the set  $\R$
	- $X(\omega)$ is referred to as a realization of the random variable function

### More Notation
- It’s conventional to write random variables with upper-case italic letters:

$$ A, B, C, X, Y, Z $$

- Random variables should not be confused with events, which are also written using upper-case letters:

$$ \text{A, B, C, X, Y, Z} $$

- Any realizations of a random variable are denoted as lower-case italics:

$$ a, b, c, x, y, z $$

- It’s also common to write the successive random variables that all belong to the same functions as the following:

$$ S_0, S_1, ..., S_t, ..., S_n $$

- Therefore, the space of each of these random variables is the same, and that sample space is referred to as the following:

$$ S \text{ or } \Omega $$

- Its realizations would be referred to as the following:

$$ s_0, s_1, ..., s_t, ..., s_n $$

### Example Notations
- Let $Y$ be a normally-distributed random variable
- Let $y_1, y_2, ..., y_n$ be our sample
- Our sample just represents a sequence of realizations (or $Y(\omega)$)
- Let $\theta$ be a sequence of parameters associated with our random variable $Y$
- In this case, $\theta = (\mu, \sigma)$
- The expected value of $Y$ is written as $\text{E}[Y]$, which is equal to $\mu$
- Here, $\hat{\mu}$ is the best estimator for our population parameter $\mu$
- And, $\hat{\mu}$ equals $\bar{y}$ when our random variable $Y$ is normally distributed
- Since $Y$ is normally distributed in our case, $\hat{\mu}$ equals $\bar{y}$
- Specifically, $\bar{y}$ equals $\frac{1}{n}\sum_{i=1}^{n}y_i$
- In other words, $\hat{\mu} \to \mu$ due to the law of large numbers

### An Example Use-Case
- Let $X$ be a random variable that represents the process of receiving heads from flipping a coin
- We could mathematically define this as $X: \Omega \to \text{A}$
	- Where $X$ is our random variable
	- Where our domain is our sample space $\Omega$
	- Where our range is $X(\omega)$
	- Where our sample space is defined as $\Omega \equiv \lbrace \text{Heads, Tails} \rbrace $
	- Where $\omega$ is a realization of our sample space $\Omega$
	- Where $\text{A} \equiv \lbrace 0, 1 \rbrace$ (or $\text{A} \equiv \lbrace x \in \mathbb{W}: 0 \le x \le 1 \rbrace$)
	- Specifically, $\text{A}$ is the number of heads after one flip
	- Where $x$ is a realization of $\text{A}$ (or more generally speaking $X(\omega)$)

### References
- [Advanced Data Analysis](https://www.stat.cmu.edu/~cshalizi/ADAfaEPoV/ADAfaEPoV.pdf)
- [What Exactly is a Random Variable](https://math.stackexchange.com/questions/240673/what-exactly-is-a-random-variable)
- [Lecture Notes on Random Variables](http://www.columbia.edu/~ww2040/4106S11/lec0125.pdf)
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Regressors as Fixed and Random Variables](https://stats.stackexchange.com/questions/246047/independent-variable-random-variable)
- [Basic Theory of Stochastic Processes Slides](http://www.phdeconomics.sssup.it/documents/Lesson3.pdf)
