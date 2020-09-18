---
title: "Vectors"
draft: false
weight: 1
katex: true
---

### Motivating Vectors using Data
- An observation (or data entry) can be represented as a vector
- In other words, a vector represents a row of data (not usually a column of data)
- For example, a vector in $\R^{2}$ represents an observation (or data entry) with two columns
	- Each observation in a table with two columns can be represented as a two dimensional vector
	- Specifically, an observation can be represented as a vector in the vector space $\R^{2}$
- A vector in $\R^{3}$ represents an observation (or data entry) with three columns
	- Each observation in a table with three columns can be represented as a three dimensional vector
	- Specifically, an observation can be represented as a vector in the vector space $\R^{3}$
- A vector in $\R^{5}$ represents an observation (or data entry) with five columns
	- Each observation in a table with five columns can be represented as a five dimensional vector
	- Specifically, an observation can be represented as a vector in the vector space $\R^{5}$

### Different Perspectives of Vectors
- There is the physics perspective of vectors that has the following properties:
	- Vectors are arrows pointing in space
	- Vectors are defined by their length and direction
	- Position doesn't really matter
	- In other words, if two vectors with the same direction and length are positioned differently, then they are classified as the same vector
- There is the computer science perspective of vectors that has the following properties:
	- Vectors are ordered lists of numbers
	- In other words, the first number refers to one variable, the second number refers to the second variable, etc.
	- The length of vectors are associated with its dimensionality (i.e. 2D vector has a length of 2)
- There is the mathematician perspective of vectors that has the following properties:
	- The mathematician's perspective tries to generalize both perspectives, since there is a lot of overlap between the two (i.e. they are both essentially saying the same thing)
	- A vector can be anything where there's a sensible notion of adding two vectors and multiplying a vector by a numbers
	- Multiplying a vector by a number is the same thing as changing the magnitude and direction of a vector
	- Adding vectors together is also the same thing as changing the magnitude and direction of a vector
	- The mathematician's perspective differs from the physic's perspective of vectors, since mathematician's believe vectors can't freely sit anywhere
	- Instead, they believe vectors should be positioned at the origin
	- Mathematicians also don't really think about vectors as arrows or forces
	- Instead, they really just think of vectors as an object or a position in relation to some origin
- We will use the mathematician's perspective of vectors

### The Essence of Vectors
- A vector is a geometric object that has a magnitude and direction
- More specifically, a vector is a point in relation to a given origin
	- The default origin point is $(0,0)$ in a Cartesian coordinate system
- Said another way, a vector tells us where our data point is in relation to the origin (of our vector space)
- As stated previously, mathematicians believe that vectors can be anything as long as there is a sensible notion of adding them and multiplying them together
- Roughly speaking, a vector has the following properties:
	- Almost always sits in a coordinate system
	- Has a length and direction
	- Is rooted at the origin
- Each vector represents a movement in space
- When we add vectors together, we're adding how much they move us in the directions represented by the numbers
- This is why the resultant vector (from vector addition) can be considered as the movement between the tail of the first vector to the head of the other vector (order does not matter)
- On the other hand, multiplying by a number means that we're scaling the magnitude of a vector
- If the number is negative, we're reversing the direction of the vector

### Describing Vector Spaces
- A vector space is a set of vectors $V$ that has the two operations:
	- Vector addition $+$
	- Scalar multiplication $\cdot$
- A vector space puts some contraints on its set of vectors so these two operations can be used correctly
- The $+$ operation requires the following to be true about any vector $u$ and any vector $v$ in its set of vectors $V$:
	- If $u$ and $v$ are any vectors in $V$, then the sum $u+v$ belongs to $V$
- The $\cdot$ operation requires the following to be true about any vector $u$ and any vector $v$ in its set of vectors $V$:
	- If $v$ is any vector in $V$ and $c$ is any real number, then the product $cv$ belongs to $V$
- For example, we can think of the set of real numbers (i.e. $\R$ or $\R^{1}$) as a vector space over itself
	- The sum of any two real numbers is a real number (i.e. $u+v=V$)
	- A scalar (also a real number) multiplied by a real number is another real number (i.e. $cv=V$)
	- Therefore, we can think of $c$ as a one-dimensional vector

### What is a Subspace?
- A subspace is a subset of a vector space:
- For example, if $W$ and $V$ are both vector spaces, then $W$ is a subspace of the vector space $V$ if:

$$
W \subset V
$$

- Therefore, a subspace needs to also satisfy the conditions for vector addition and scalar multiplication
- In other words, a set of vectors is a subset of $V^{n}$ if they are elements of the $n^{th}$ dimension of $V$
- Again, a set of vectors is a subspace of $V^{n}$ if all of the following conditions (from a vector space) are true:
	- If the zero vector is an element of $W$ (i.e. $[0, ..., 0] \in W$)
	- If $x \in W$ and $y \in W$, then $x + y \in V$
	- If $c \in \R$ and $x \in W$, then $cx \in V$
- For example, if we let our subspace $W$ be the real coordinate space $\R^{3}$ and our vector space be $V$:
	- Then $x \in \R^{3}$, $y \in \R^{3}$, and $c \in \R$ can be expressed as the following:
	$$
	x = \begin{bmatrix} 0 \cr x_{1} \cr x_{2} \cr ... \cr x_{n} \end{bmatrix}, y = \begin{bmatrix} 0 \cr y_{1} \cr y_{2} \cr ... \cr y_{n} \end{bmatrix}, x+y = \begin{bmatrix} 0 \cr x_{1}+y_{1} \cr x_{2}+y_{2} \cr ... \cr x_{n}+y_{n} \end{bmatrix}, cx = \begin{bmatrix} 0 \cr cx_{1} \cr cx_{2} \cr ... \cr cx_{n} \end{bmatrix}
	$$
	- Therefore, $x+y$ should be an element of the initial vector space $V$
	- Therefore, $xc$ should be an element of the initial vector space $V$

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2&t=402s)
- [Linear Algebra Lecture Notes](http://www.supermath.info/LinearnotestoSec5p3.pdf)
- [Linear Subspace Wiki](https://en.wikipedia.org/wiki/Linear_subspace)
- [Vector Space Properties](http://www.math.niu.edu/~beachy/courses/240/06spring/vectorspace.html)
- [Essence of Linear Algebra Slides](https://events.csa.iisc.ac.in/summerschool2017/wp-content/uploads/slides/7.pdf)
- [Intuitive Example of Vector Spaces](https://steemit.com/mathematics/@drifter1/mathematics-linear-algebra-vector-spaces)
