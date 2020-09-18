---
title: "Linear Combinations"
draft: false
weight: 2
katex: true
---

### Describing a Linear Combination
- A linear combination is a vector representing any combination of a set of vectors using vector addition or scalar multiplication
- In other words, a linear combination is a sum of scaled vectors within a vector space
- More specifically, a linear combination is a mapped output of a sum of scaled vectors from vector space $V$ to somewhere else in that same vector space $V$
- As stated previously, a linear combination is a mapped output of a sum of scaled vectors function
- The input of the function is a set of vectors from some vector space $V$
- The output of the function is the linear combination (of those input vectors) that is also from the same vector space $V$
- Therefore, a linear combination just represents some new vector in the same vector space $V$ (as the vector space $V$ of the input vectors)
- Specifically, the sum of scaled vectors function refers to the following:

$$
f(v) = \sum \alpha_{i}v_{i}
$$

- Where $v_{i}$ are the vectors
- Where $\alpha_{i}$ are the scalars
- Where $f(v)$ is our linear combination

### An Abstract Example of Linear Combinations
- Very roughly speaking, our input vectors can be thought of as some English words
- And, our linear combination can be thought of as a different, yet related, English word that is essentially the outcome of combining all of those words together
- In our example, our English words could be *quick*, *spotted*, and *cat* and our new related English word (or our linear combination) could be *cheetah*:

$$
quick + spotted + cat = cheetah
$$

- In this example, the initial English words and resultant English word mean very different things on their own, but are at least represented in the same language so we can still understand it
- In other words, our new *cheetah* word is still *in the same vector space* as our initial words *quick*, *spotted*, and *cat*
- Similar to how the input of our sum-of-scaled-vectors function is a set of vectors from the vector space $V$, our input is a set of words from the English language
	- Here, our vector space represents all languages, and our specific vector space is English
- Similar to how the output of our sum of scaled vectors function is a linear combination of our input vectors, which is also from the same vector space $V$, our output is also an English word
- Therefore, our linear combination in this very abstract example represents some new word that remains English

### Where does Linear Combination Get its Name?
- The *linear* part of *linear combination* refers to scalar multiplication
	- Specifically, it comes from linearly scaling a vector to output another vector
	- In other words, the resultant vector represents a scaled version of a vector
	- As a reminder, linear scaling refers to multiplying constants by a vector (or variable in the general sense)
- The *combination* part of *linear combination* refers to vector addition
	- Specifically, it comes from adding vectors together to output another vector
	- In other words, the resultant vector represents a (added) combination of a set of other vectors

### Example of Linear Combinations
- Let's say we have the following vectors:

$$
v_{1} = \begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix}, v_{2} = \begin{bmatrix} 3 \cr 5 \cr 1 \end{bmatrix}, v_{3} = \begin{bmatrix} 0 \cr 0 \cr 8 \end{bmatrix}
$$

- Then the following vectors are linear combinations of $v_{1}, v_{2},$ and $v_{3}$:

$$
b_{1} = \begin{bmatrix} 3 \cr 6 \cr 9 \end{bmatrix}, b_{2} = \begin{bmatrix} 3 \cr 6 \cr 17 \end{bmatrix}, b_{3} = \begin{bmatrix} 9 \cr 16 \cr 11 \end{bmatrix}, b_{4} = \begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix}
$$

- Vector $b_{1}$ is a linear combination of $v_{1}, v_{2},$ and $v_{3}$ because:

$$
\begin{bmatrix} 3 \cr 6 \cr 9 \end{bmatrix} = 3\begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix} + 0\begin{bmatrix} 3 \cr 5 \cr 1 \end{bmatrix} + 0\begin{bmatrix} 0 \cr 0 \cr 8 \end{bmatrix}
$$

- Vector $b_{2}$ is a linear combination of $v_{1}, v_{2},$ and $v_{3}$ because:

$$
\begin{bmatrix} 3 \cr 6 \cr 17 \end{bmatrix} = 3\begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix} + 0\begin{bmatrix} 3 \cr 5 \cr 1 \end{bmatrix} + 1\begin{bmatrix} 0 \cr 0 \cr 8 \end{bmatrix}
$$

- Vector $b_{3}$ is a linear combination of $v_{1}, v_{2},$ and $v_{3}$ because:

$$
\begin{bmatrix} 9 \cr 16 \cr 11 \end{bmatrix} = 3\begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix} + 2\begin{bmatrix} 3 \cr 5 \cr 1 \end{bmatrix} + 0\begin{bmatrix} 0 \cr 0 \cr 8 \end{bmatrix}
$$

- Vector $b_{4}$ is a linear combination of $v_{1}, v_{2},$ and $v_{3}$ because:

$$
\begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix} = 1\begin{bmatrix} 1 \cr 2 \cr 3 \end{bmatrix} + 0\begin{bmatrix} 3 \cr 5 \cr 1 \end{bmatrix} + 0\begin{bmatrix} 0 \cr 0 \cr 8 \end{bmatrix}
$$

### Describing a Span
- The span of two vectors $v$ and $w$ (or spanning set) is the set of all of their linear combinations
- We can use *span* in the following contexts to mean the same thing:
	- The span of the two vectors $v = [1, 1]$ and $w = [1, -2]$ makes up $\R^{2}$
	- The spanning set of $v = [1, 1]$ and $w = [1, -2]$ makes up $\R^{2}$
	- The two vectors $v = [1, 1]$ and $w = [1, -2]$ span $\R^{2}$
- We can think of the following to be true:
	- A single vector is a point
	- A set of vectors is a set of points
	- A span of a single vector is a line
	- A span of a set of vectors is a plane
- Since a one dimensional plane is a line, a span of a one dimensional vector can be thought of as a line

### Basis Vectors
- A set of vectors in a vector space $V$ is a basis if every vector from $V$ can be written in a unique way as a linear combination of vectors of $V$
- A unit vector is a vector of length 1
- A standard basis is a set of unit unique vectors pointing in each direction of the axes
- A standard basis is one of many possible bases for some vector space $V$
- The following are examples of bases of $\R^{3}$:

$$
b_{1} = \begin{bmatrix} 1 & 0 & 1 \cr 1 & 2 & 0 \cr 0 & -1 & 3 \end{bmatrix}, b_{2} = \begin{bmatrix} 2 & 0 & 0 \cr 0 & 5 & 0 \cr 0 & 0 & 4 \end{bmatrix},
$$

$$
b_{3} = \begin{bmatrix} 1 & 2 & -2 \cr 0 & 1 & 1 \cr -1 & -1 & 4 \end{bmatrix}, b_{4} = \begin{bmatrix} 1 & 0 & 0 \cr 0 & 1 & 0 \cr 0 & 0 & 1 \end{bmatrix}
$$

- These are all a basis of $\R^{3}$ because each set of vectors of $b$ is a linear combination of the following:

$$
I_{4} = \begin{bmatrix} 1 & 0 & 0 \cr 0 & 1 & 0 \cr 0 & 0 & 1 \end{bmatrix}
$$

### Examples of Standard Bases
- The following is the standard basis of $\R^{3}$:

$$
b = \begin{bmatrix} 1 & 0 & 0 \cr 0 & 1 & 0 \cr 0 & 0 & 1 \end{bmatrix}
$$

- The following is the standard basis of $\R^{2}$:

$$
b = \begin{bmatrix} 1 & 0 \cr 0 & 1 \end{bmatrix}
$$

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=k7RM-ot2NWY&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2)
- [Examples of Linear Combinations](https://www.mathbootcamps.com/linear-combinations-vectors/)
