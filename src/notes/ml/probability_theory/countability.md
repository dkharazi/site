---
title: "Countability"
draft: false
weight: 10
katex: true
---

### Describing Cardinality
- Cardinality is the number of elements within a set
- Cardinality is also referred to as the length of a set
- We can represent a set of all ordered pairs of elements as the cartesian product of two sets
- In other words, a cartesian product of two sets is the set of all ordered pairs of the elements within the two sets
- For example, if $\text{A}$ and $\text{B}$ are sets, then $\text{A} \times \text{B}$ is denoted as the cartesian product of $\text{A}$ and $\text{B}$
- Specifically, the cartesian product of $\text{A}$ and $\text{B}$ consists of the set of all ordered pairs of elements $(\text{a}, \text{b})$ where $\text{a} \in  \text{A}$ and $\text{b} \in  \text{B}$

### Some Examples of Cardinality
- Let's say we have the set $\text{\textbraceleft}{}\text{\textbraceright}$, then the cardinality of the set is the following:

$$
|\text{\textbraceleft}{}\text{\textbraceright}| = 0
$$

- Let's say we have the set $\text{\textbraceleft}{\text{\textbraceleft}{1}\text{\textbraceright}, \text{\textbraceleft}{1,2,3,4}\text{\textbraceright}}\text{\textbraceright}$, then the cardinality of the set is the following:

$$
|\text{\textbraceleft}{\text{\textbraceleft}{1}\text{\textbraceright}, \text{\textbraceleft}{1,2,3,4}\text{\textbraceright}}\text{\textbraceright}| = 2
$$

- Let's say we have the set $\text{\textbraceleft}{\text{\textbraceleft}{}\text{\textbraceright}, \text{\textbraceleft}{2, \text{\textbraceleft}{1, \text{\textbraceleft}{}\text{\textbraceright}}\text{\textbraceright}}\text{\textbraceright}}\text{\textbraceright}$, then the cardinality of the set is the following:

$$
|\text{\textbraceleft}{\text{\textbraceleft}{}\text{\textbraceright}, \text{\textbraceleft}{2, \text{\textbraceleft}{1, \text{\textbraceleft}{}\text{\textbraceright}}\text{\textbraceright}}\text{\textbraceright}}\text{\textbraceright}| = 2
$$

### An Example of Cartesian Products
- A very familiar example of a cartesian product is the xy-plane
- In this case, we have ordered pairs of coordinates, where each coordinate is a real number
- We can describe this as the cartesian product $\R \times \R$
- Since we essentialy multiply $\R$ by itself, we typically write this as $\R^{2}$ for short
- Similarly, $\R^{3}$ or $\R^{n}$ represent ordered triples or ordered n-tuples of real numbers, corresponding to a 3-dimensional and n-dimensional space, respectively
- Specifically, $\R^{2}$ is the set $\text{\textbraceleft}{(1.222,4), (3,5), (7.9,\frac{9}{10}), ...}\text{\textbraceright}$
- More specifically, $\R^{2}$ doesn't contain elements $(1)$ or $(2,5,6)$ in its set

### Another Example of Cartesian Products
- Let's say we have the set $\text{\textbraceleft}{0,1}\text{\textbraceright}^{\infty}$ contains every unique element that is an infinitely long ordered pair of coordinates
- Specifically, $\text{\textbraceleft}{0,1}\text{\textbraceright}^{\infty}$ is the set $\text{\textbraceleft}{(0,1,1,0,0,...),(1,1,1,1,...), ...}\text{\textbraceright}$
- Therefore, this would be considered an infinite set

### Describing Countable Sets
- A set is countable if its cardinality is no greater than the cardinality of the natural numbers
- Specifically, a set is countable if there is a bijection between the given set and the set of all natural numbers

### Examples of Countable Sets

$$
\N
$$
- This is the set of all natural numbers
- Specifically, $\N$ is the set $\text{\textbraceleft}{1,2,3,4,5,6,...}\text{\textbraceright}$

$$
\mathbb{W}
$$
- This is the set of all whole numbers
- Specifically, $\mathbb{W}$ is the set $\text{\textbraceleft}{0,1,2,3,4,5,6,...}\text{\textbraceright}$

$$
\mathbb{Z}
$$
- This is the set of all integers
- Specifically, $\mathbb{Z}$ is the set $\text{\textbraceleft}{...,-2,-1,0,1,2,...}\text{\textbraceright}$

$$
\mathbb{Q}
$$
- This is the set of all rational numbers
- Specifically, $\mathbb{Q}$ is the set $\text{\textbraceleft}{...,-\frac{1}{3},.12,\frac{7}{8},216.83\bar{6},...}\text{\textbraceright}$

### Examples of Uncountable Sets

$$
\mathbb{C}
$$
- This is the set of all complex numbers
- Specifically, $\mathbb{C}$ is the set $\text{\textbraceleft}{...,3i+5,4i-8,...}\text{\textbraceright}$

$$
\R - \mathbb{Q}
$$
- This is the set of all irrational numbers
- Specifically, $\R - \mathbb{Q}$ is any number that cannot be expressed using a fraction

$$
\R
$$
- This is the set of all real numbers
- Specifically, this is an uncountable set because it contains the set of all irrational numbers

$$
\text{\textbraceleft}{\text{The set of all real numbers between 0 and 1}}\text{\textbraceright}
$$

### Finite Sets
- Roughly speaking, a finite set is a set in which one could in principle count and finish counting
- The following are some examples of finite sets:

$$
\text{\textbraceleft}{1,2,3,4,...,1000}\text{\textbraceright}
$$

$$
\text{\textbraceleft}{-100,-99,-98,...,1000000000000}\text{\textbraceright}
$$

$$
\text{\textbraceleft}{\text{A set with a cardinality of 2478}}\text{\textbraceright}
$$

$$
\text{\textbraceleft}{\text{A set with a cardinality of 1000000000000000000000000000}}\text{\textbraceright}
$$

- The following are some examples of infinite sets:

$$
\text{\textbraceleft}{\text{The set of all even numbers}}\text{\textbraceright}
$$

$$
\text{\textbraceleft}{\text{The set of all odd numbers}}\text{\textbraceright}
$$

### More on Countability
- A finite set is a subset of a countable set
- In other words, all finite sets are countable, but not all countable sets are finite
- There are countably finite and countable infinite sets, but there are no such thing as uncountable finite sets
- A countable infinite set is the smallest infinite set

### Power Sets
- The Cartesian product consists of ordered pairs of elements where the length of each pair is determined by the power raised (or the dimension)
- The ordered pairs in this case are technically considered sets
- The power set consists of subsets of some set $S$
- Again, we can denote cartesian products as $S \times S$ or $S^{2}$ if $S$ is some set
- Let's say we have the following set:

$$
S = \text{\textbraceleft}{1,2,3}\text{\textbraceright}
$$

- Then, we can define a catesian product and powerset of this set as the following:

$$
S \times S = \text{\textbraceleft}{(1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2),(3,3)}\text{\textbraceright}
$$

$$
PowerSet(S) = \text{\textbraceleft}{\text{\textbraceleft}{∅}\text{\textbraceright},\text{\textbraceleft}{1}\text{\textbraceright},\text{\textbraceleft}{2}\text{\textbraceright},\text{\textbraceleft}{3}\text{\textbraceright},\text{\textbraceleft}{1,2}\text{\textbraceright},\text{\textbraceleft}{1,3}\text{\textbraceright},\text{\textbraceleft}{2,3}\text{\textbraceright},\text{\textbraceleft}{1,2,3}\text{\textbraceright}}\text{\textbraceright}
$$

### References
- [Probability Set Theory](http://theanalysisofdata.com/probability/A_1.html)
- [What are Finite, Countable, and Uncountable Sets](https://math.stackexchange.com/questions/185234/what-do-finite-infinite-countable-not-countable-countably-infinite-mean)
- [Notation of Countable Sets](https://www.slideshare.net/ravingeek/sets-and-functions-by-saleh-elshehabey)
- [Defining Probability Spaces](https://terrytao.files.wordpress.com/2011/01/measure-book1.pdf)
- [Example of Cartesian Products](http://web.mnstate.edu/peil/MDEV102/U2/S13/S133.html)
- [Mathematic Difference between Finite and Countable Set](http://www.quora.com/What-is-the-difference-between-finite-and-countable-in-mathematics)
- [Subset of Real Numbers Notation](https://www.quora.com/What-does-it-mean-when-something-is-a-subset-of-the-real-numbers-squared)
