---
title: "Inverse Matrix"
draft: false
weight: 5
katex: true
---

### Describing an Inverse Matrix
- The inverse of a matrix $A$ is a matrix that results in the identity matrix when multiplied by $A$
- Mathematically, the inverse matrix $A^{-1}$ is the matrix that satisfies the following equation:

$$ AA^{-1} = I $$

- In other words, an inverse matrix can be thought of the matrix that plays the transformation matrix in reverse
- An inverse matrix is a transformation matrix in itself

### Example of an Inverse Matrix
- Let's say our transformation matrix $A$ represents a $90\degree$ clockwise rotation of a vector space:

$$ A = \begin{bmatrix} 0 & 1 \cr -1 & 0 \end{bmatrix} $$

- Then, our inverse matrix would look like the following:

$$ A^{-1} = \begin{bmatrix} 0 & -1 \cr 1 & 0 \end{bmatrix} $$

- Therefore, $A^{-1}$ represents a $90\degree$ counterclockwise rotation of a vector space

### Another Example of an Inverse Matrix
- Let's say our transformation matrix $A$ represents a rightward shear of a vector space:

$$ A = \begin{bmatrix} 1 & 1 \cr 0 & 1 \end{bmatrix} $$

- Then, our inverse matrix would look like the following:

$$ A^{-1} = \begin{bmatrix} 1 & -1 \cr 0 & 1 \end{bmatrix} $$

- Therefore, $A^{-1}$ represents a leftward shear of a vector space

### System of Linear Equations
- A system of linear equations is a collection of one or more linear equations involving the same set of variables
- In linear algebra, we are typically representing a system of linear equations as a linear transformation $Ax = b$
- We can use this system of linear equations $Ax = b$ for two purposes:
	1. Solving for our vector b from the original vector space
		- We typically want to solve for $b$ if we want to see what some vector from a transformed vector space looks like in our original vector space
		- To do this, we need the following:
			- Vector $x$ from the transformed space
			- Transformation matrix $A$ so that we can map vectors from the transformed vector space back to our original vector space
		- Once we have these variables, we can solve for b by just plugging in our $A$ and $x$ into the formula (i.e. multiplying $A$ and $x$ together)
	2. Solving for our initial vector x
		- We typically want to solve for $x$ if we want to see what some vector from our original vector space looks like in a transformed vector space
		- To do this, we need the following:
			- Vector $b$ from our original vector space
			- The inverse of the transformation matrix $A^{-1}$ so that we can map vectors from our original vector space to the transformed vector space
		- Once we have these variables, the equation $Ax = b$ becomes $x = bA^{-1}$ by multiplying each side by $A^{-1}$
		- Then, we can solve for $x$ by just plugging in our $A^{-1}$ and $b$ into the formula (i.e. multiplying $A^{-1}$ and $b$ together)

### Solving for the Inverse Matrix
- Suppose we define a square matrix $A$ as the following:

$$ A = \begin{bmatrix} a & b \cr c & d \end{bmatrix} $$

- The inverse of a square matrix $A$ can be defined as the following:

$$ A^{-1} = \frac{1}{det(A)}\begin{bmatrix} d & -b \cr -c & a \end{bmatrix} $$

- There won't be an inverse of a matrix if the determinant of that matrix is 0

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=uQhTuRlWMxw&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=7)
