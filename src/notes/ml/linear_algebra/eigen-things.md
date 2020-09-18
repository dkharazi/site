---
title: "Eigen-Things"
draft: false
weight: 9
katex: true
---

### Motivating Eigenvectors
- Let's consider the two-dimensional linear transformation:

$$
A = \begin{bmatrix} 3 & 1 \cr 0 & 2 \end{bmatrix}
$$

- As a review, this transformation matrix says we're moving our current basis vectors $[1, 0]$ and $[0, 1]$ to $[3, 0]$ and $[1, 2]$
- If we observe the span of a particular vector during the transformation (to the new vector space), then most vectors on this span will get knocked off their span after the transformation
	- For example, if we observe the span of the vector $[1, 1]$, then $[2, 2]$ and $[100, 100]$ will span this vector before the transformation
	- However, those vectors $[1, 1]$, $[2, 2]$, and $[100, 100]$ (in the original vector space) will most likely not span the new vector $[1, 1]$ in the transformed vector space
- However, some special vectors do remain on their span after the transformation to the new vector space
- These special vectors are called eigenvectors
- Essentially, an eigenvector of a linear transformation is a vector, where the span of that vector (in the original vector space) is the same as the span of that vector after the transformation (in the new vector space)

### Example of Eigenvectors
- In this specific example, the original basis vector (i.e. i-hat) is an eigenvector
- This is because the span of i-hat is the x-axis, and from the first column of the matrix, we can see that i-hat moves over to 3 times itself, which is still on that x-axis
- More specifically, any other vector on the x-axis is also just stretched by a factor of 3 because if the way linear transformations work
- Hence, any other vector on the x-axis remains on its own span
- There are many other eigenvectors of this transformation, such as $[-1, 1]$
- Although the vector $[1, 0]$ is an eigenvector of the linear transformation $[[3, 0], [1, 2]]$, the vector $[1, 0]$ is not always an eigenvector for every linear transformation

### Properties of Eigenvalues
- An eigenvalue is the factor by which it is stretched or squished during the transformation
- Every eigenvector has an eigenvalue associated with it
- The following are some properties associated with eigenvalues:
	- When the eigenvalue is 0, then the vector disappears because there is no information about an axis after the transformation (i.e. linear dependence)
	- When the eigenvalue is 0.5, then the vector gets squished by a factor of 0.5 after the transformation
	- When the eigenvalue is -0.5, then the vector gets flipped and squished by a factor of 0.5 after the transformation
	- When the eigenvalue is 1, then the vector isn't stretched or squished after the transformation, which could mean the following:
		- The vector gets rotated, indicating no valid eigenvector
		- The vector gets sheared, indicating the vectors on the un-sheared axis are the only possible eigenvectors
		- Nothing happened, indicating the eigenvector can be any vector
	- When the eigenvalue is 10, then the vector gets stretched by a factor of 10 after the transformation
	- When the eigenvalue is -10, then the vector gets flipped and stretched by a factor of 10 after the transformation

### Purpose of Eigenvalues and Eigenvectors
- We can understand a linear transformation by looking at the matrix
- Specifically, we can read off the columns of this matrix as the landing spots for basis vectors
- However, often a better way to understand a linear transformation is by looking at its eigenvectors and eigenvalues
- This is because it's much easier to think of a transformation in terms of some axis or rotation and an angle by which it is rotating, rather than the full 3-by-3 matrix associated with that transformation
- In other words, we typically want to understand the following associated with a linear transformation:
	- How much a vector stretched or squishes
	- How a vector is rotated
	- If a vector is flipped
- An eigenvalue and eigenvector can help us intuitively understand the above using a single coefficient, whereas the transformation matrix requires additional calculations to help us understand the above

### Notion of Eigenvectors and Eigenvalues
- Symbolically, the following formula defines the general idea behind eigenvectors:

$$
Ax = \lambda x
$$

- Where $A$ is a transformation matrix from our original vector space to a transformed vector space
- Where $x$ is an eigenvector
- Where $\lambda$ is a eigenvalue
- Where $\lambda x = b$

### Intepreting the Method of Eigenvectors and EigenValues 
- The expression $Ax = \lambda x$ is saying the matrix multiplication of $A$ and $x$ gives the same result as just scaling the eigenvector $x$ by some number $\lambda$
- Therefore, finding the eigenvectors and their eigenvalues of a transformation matrix $A$ comes down to finding the values of $x$ and $\lambda$ that satisfy this formula
- We can also write $Ax = \lambda x$ as the following:

$$
Ax = (\lambda I)x
$$

- Here, $I$ is the identity matrix
- This has the same effect as the previous formula, since we're scaling the vector by the same factor
- In this matrix notation, we think of the columns of matrix $\lambda I$ as representing what happens to each basis vector (i.e. scaling each basis vector by the eigenvalue $\lambda$)

### Finding Eigenvalues using Determinants
- Before, we rearranged our equation from $Ax = \lambda x$ to $Ax = (\lambda I)x$
- We can rearrange our equation one more time from $Ax = (\lambda I)x$ to the following:

$$
(A-\lambda I)x = 0
$$

- Since $(A-\lambda I)$ can be represented as a single matrix, $(A-\lambda I)$ is a transformation matrix in itself
- Now, we're looking for a non-zero eigenvector $x$, such that the non-zero matrix $(A-\lambda I)$ multiplied by $x$ gives us the zero vector
- Therefore, the determinant of $(A-\lambda I)$ needs to equal 0 to satisfy this equation, since $(A-\lambda I)$ and $x$ both need to be non-zero
- In other words, we're looking for an eigenvalue that satisfies the following:

$$
det(A-\lambda I) = 0
$$

- Meaning, the eigenvalue that satisfies this equation will squish space into a lower dimension, since that's what a determinant of zero implies

### Example of Computing Eigenvalues
- Let's say we have a transformation matrix $A$ equal to the following:

$$
A = \begin{bmatrix} 3 & 1 \cr 0 & 2 \end{bmatrix}
$$

- First, we can determine the eigenvalues $\lambda$ of the linear transformation by finding $\lambda$ that satisfies $det(A-\lambda I) = 0$
	- We can reformulate $det(A-\lambda I)$ into the quadratic polynomial function $(3-\lambda)(2-\lambda)=0$
	- We can conclude that the only possible eigenvalues are $\lambda=3$ or $\lambda=2$ for this linear transformation
- Next, we can determine the eigenvectors of the linear transformation by plugging in 2 or 3 for $\lambda$ into $(A-\lambda I)$ and solve for $x$ in $(A-\lambda I)x = 0$
	- We can reformulate $(A-\lambda I)$ into $x+y=0$
	- We can conclude that a solution for this equation is $[-1, 1]$
	- Therefore, all the vectors on the diagonal line spanned by $[-1, 1]$
- Keep in mind, it is possible to have just one eigenvalue, but with more than just a single line of eigenvectors

### Notion of Eigenbasis
- If our basis vectors are eigenvectors (i.e. $[-1, 0]$ and $[2, 0]$), then our transformation matrix is called an eigenbasis
- An eigenbasis is a diagonal matrix
- When our transformation matrix is a diagonal matrix, our transformation becomes much more intuitive and computationally efficient
- We are rarely lucky enough where our basis vectors are eigenvectors
- However, we can always choose a different set of basis vectors that are eigenvectors and span the full space (only if our transformation has enough eigenvectors in the first place)
	- We can do this using the change of basis formula $Ax = b$
- Then, we can change our coordinate system so that these eigenvectors are our basis vectors instead
- Therefore, if we ever wanted to perform an intensive calculation on our transformation matrix (such as computing the 100th power of the transformation matrix), then it would be much easier to change to an eigenbasis, compute the intensive calculation, then convert back to our standard system
	- Specifically, we can do this using the change of basis formula $A^{-1}MA$

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=PFDu9oVAE-g&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=14)
- [Illustration of Transformations using Eigenvectors](https://www.tutorialspoint.com/computer_graphics/3d_transformation.htm)
