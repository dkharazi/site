---
title: "Probability Spaces"
draft: false
weight: 11
katex: true
---

### The Sample Space
- A sample space is a set that contains all possible outcomes of some function
- A sample space is typically written as $\Omega$
- The following is an example of a sample space of a coin toss:

$$
\Omega = \text{\textbraceleft}{H,T}\text{\textbraceright}
$$

- The following is an example of a sample space of a two coin tosses:

$$
\Omega = \text{\textbraceleft}{(H,T),(H,H),(T,H),(T,T)}\text{\textbraceright}
$$

### Algebra
- An algebra is typically written as $ℑ$
- Essentially, an algebra is a collection of subsets from $\Omega$ that satisfies all of the following:
	- The null set (i.e. empty set) is contained within our algebra
	$$
	\emptyset \in ℑ
	$$
	- If $\text{A} \in ℑ$, then $\text{A}^{c}$ is also $\in ℑ$
	$$
	\text{A} \in ℑ \text{ and } \text{A}^{c} \in ℑ \text{ if } \text{A} \subset \Omega
	$$
	- If $\text{A} \in ℑ$ and $\text{B} \in ℑ$, then $\text{A} \cup \text{B} \in ℑ$
	$$
	\text{A} \cup \text{B} \in ℑ \text{ if } \text{A} \in ℑ \text{ and } \text{B} \in ℑ
	$$

- In other words, an algebra $ℑ$ on a set $X$ is a collection of subsets of $X$ that satisfy the following:
	1. $ℑ$ contains the empty subset $\emptyset$ and the set $X$
	2. $ℑ$ is closed under complement
		- This means if $\text{A} \in ℑ$, then $\text{A}^{c} \in ℑ$ for all $\text{A} \in ℑ$
	3. $ℑ$ is closed under finite unions
		- This means for all $A_{1},A_{2},...,A_{k}$ in $ℑ$, then $A_{1} \cup A_{2} \cup ... \cup A_{k}$ are within $ℑ$
		- This also means that $A_{1} \cup A_{2} \cup ... \cup A_{k}$ is a finite collection of elements
		- Specifically, k equals some known number $(k < \infty)$
		- In other words, the number of sets within $ℑ$ is finite, and the union of all of the finite sets in $ℑ$ are also finite

### $\sigma$-Algebra
- Essentially, a $\sigma$-algebra is a collection of subsets from $\Omega$ that satisfies the following:
	- $ℑ$ is an algebra
	- $A_{1}, A_{2}, ... \in ℑ$ implies $A_{1} \cup A_{2} \cup ... \in ℑ$
- In other words, a $\sigma$-algebra on a set $S$ is a collection $ℑ$ of subsets of $ℑ$ satisfying the following properties:
	1. $ℑ$ contains the empty subset $\emptyset$ and $X$
	2. $ℑ$ is closed under complement
	3. $ℑ$ is closed under countable unions
		- This means for all $A_{1},A_{2},...,A_{k}$ in $ℑ$, then $A_{1} \cup A_{2} \cup ... \cup A_{k}$ are within $ℑ$
		- This also means that $A_{1} \cup A_{2} \cup ... \cup A_{k}$ is a countable collection of elements
		- Specifically, k is some theoretically countable number
		- In other words, the sets within $ℑ$ are countable, and the union of all of the countable sets in $ℑ$ are also countable

### Examples of Algebras
- Let the following be true:
	- $X$ is an infinite set
	- $A$ is the collection of all subsets of $X$ which are finite or have finite complement
- In this scenario, $A$ would be an algebra of sets, which is not a $\sigma$-algebra
- The following are examples of $\sigma$-algebras:

$$
ℑ = \text{\textbraceleft}{\emptyset, \Omega}\text{\textbraceright}
$$

$$
ℑ = \text{\textbraceleft}{\emptyset, A, A^{c}, \Omega}\text{\textbraceright}
$$

$$
ℑ = 2^{\Omega}
$$

- In this situation, $2^{\Omega}$ is a collection of all of the subsets of $\Omega$

- The following is an example of a collection of sets that is neither an algebra or a $\sigma$-algebra:

$$
\text{\textbraceleft}{\emptyset, A, \Omega}\text{\textbraceright}
$$

- In this situation, this collection of sets would need to contain $A^{C}$ for it to be an algebra

### The Probability Measure Function
- A probability measure function is a function that maps events to its corresponding probabilities
- A probability measure function is denoted as $P$

### Probability Space $(\Omega, ℑ, P)$
- A probability space is constructed with a specific kind of experiment in mind
- One proposes that each time a situation of that kind arises, the set of possible outcomes is the same and the probabilities are also the same
- A probability space consists of the following:
	- A sample space $\Omega$ that is a set of all possible outcomes
	- A set of events $ℑ$ that is a set of events, where each event is a set of any possible outcome
	- A function $P$ that maps the events to probabilities
- Once the probability space is established, it is assumed that *nature* makes its move and selects a single outcome $\omega$ from the sample space $\Omega$
- All the events in $ℑ$ that contain the selected outcome $\omega$ (recall that each event is a subset of $\Omega$) are said to have occurred
- The selection performed by nature is done in such a way that if the experiment were to be repeated an infinite number of times, the relative frequencies of occurrence of each of the events would coincide with the probabilities prescribed by the function $P$

### References
- [Lecture Notes on Probability Spaces](http://www.its.caltech.edu/~mshum/stats/lect1.pdf)
- [Difference between Sigma Algebra and Algebra](https://math.stackexchange.com/questions/150530/sigma-algebra-and-algebra-difference)
- [Examples of Sigma Algebra and Algebra](https://www.quora.com/Can-you-give-some-examples-where-algebra-and-sigma-algebra-are-different)
- [Probability Space Lecture Video](https://www.youtube.com/watch?v=-nnJQ0kJgIY&list=PLbMVogVj5nJQqGHrpAloTec_lOKsG-foc&index=4)
- [Probability Set Theory](http://theanalysisofdata.com/probability/A_1.html)
- [Probability Space Wiki](https://en.wikipedia.org/wiki/Probability_space)
- [What is a Probability Space of a Random Variable](https://math.stackexchange.com/questions/1990959/probability-space-of-a-random-variable)
- [More Lecture Notes on Probability Spaces](https://sites.math.washington.edu/~hoffman/521/week1notes.pdf)
