---
title: "Matrix Multiplication"
draft: false
weight: 7
katex: true
---

### Motivating Matrix Multiplication
- Matrix multiplication is an operation that produces a matrix from two matrices
- Linear transformations are typically performed using matrix multiplication
- In other words, multiplying any matrix by a vector is equivalent to performing a linear transformation on that vector
- Therefore, matrices are a convenient way of representing linear transformations
- In matrix multiplication, each entry in the resultant matrix is the dot product of a row in the first matrix and a column in the second matrix

### System of Equations and Linear Combinations
- Up until now, we have only used scalar multiplication to determine a linear combination of a set of vectors
- However, we can actually combine our scalars into a matrix, then our scalar multiplication becomes matrix multiplication
- In linear algebra, we mostly work with the system of equations defined as the following:

$$
Ax = b
$$

- If we're given a constant vector $x$ and we want to find a vector $b$ that is a linear combination of a set of vectors $A$, then we're solving for $b$ in the system of equations $Ax = b$
	- We're given $A$ and $x$
	- In this case, we would use matrix multiplication to solve for $b$
- If we're finding a vector $x$ that makes $b$ a linear combination of a set of vectors $A$, then we are solving for $x$ in the system of equations Ax=b
	- We're given $A$ and $b$
	- In this case, we would use row reduction to solve for $x$

### System of Equations and Linear Transformations
- If we're given a transformation matrix $A$ and a vector $x$ from that transformed vector space and we want to find the vector $b$ from our initial vector space, then we're solving for $b$ in the system of equations $Ax = b$
	- We're given $A$ and $x$
	- In this case, we would use matrix multiplication to solve for $b$
- If we're given a transformation matrix $A$ and a vector $b$ from our inital vector space and we want to find the vector $x$ from our transformed vector space, then we're solving for $x$ in the system of equations $Ax = b$
	- We're given $A$ and $b$
	- In this case, we would perform the following steps:
		1. Find the determinant of the transformation matrix
		2. Use that determinant to find the inverse of the transformation matrix
		3. Use that inverse matrix by multipling each side of our system of equations $Ax = b$, so we get $x = A^{-1}b$
		4. Solve for $x$ by performing matrix multiplication of the inverse matrix $A^{-1}$ and vector $b$
- Therefore, we can also use matrix multiplication of the inverse matrix if we want to find a vector $x$ that makes $b$ a linear combination of a set of vectors $A$, instead of manually performing row reduction
- We can do this because we're solving for the same thing (i.e. vector $x$) in both scenarios

### Matrix Multiplication as a Linear Combination
- When performing matrix multiplication, we're computing the dot-product of a row in the first matrix with a column in the second matrix iteratively
- We can also think of this process (of multiplying constants $x$ by our variables $A$) as the linear combination of our constants $x$ and variables $A$
- Another way to look at it is that it's a linear combination of the rows of matrix $A$ using coefficients from our vector $x$
- In this scenario, the linear combination operation and dot product operation are interchangeable operations

### Summarizing the Relationship of Everything
- Matrix multiplication involves taking the dot product of a row from one matrix and a column from another matrix
- In other words, matrix multiplication involves the dot product
- Linear transformation is an application of matrix multiplication
- Linear combination is an application of matrix multiplication

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=LyGKycYT2v0)
- [Visualizing Matrix Multiplication](https://eli.thegreenplace.net/2015/visualizing-matrix-multiplication-as-a-linear-combination/)
- [Khan Academy Notes](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:properties-of-matrix-multiplication/a/matrix-multiplication-dimensions)
- [Differences between Linear Combinations and Linear Transformations](https://www.quora.com/Are-the-terms-linear-combination-and-linear-transformation-used-interchangeably-in-linear-algebra-or-are-they-different)
- [Matrix Multiplication as a Linear Transformation](https://www.freetext.org/Introduction_to_Linear_Algebra/Linear_Transformations/Matrix_Multiplication/)
