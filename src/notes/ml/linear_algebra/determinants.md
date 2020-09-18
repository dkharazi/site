---
title: "Determinants"
draft: false
weight: 4
katex: true
---

### Describing Determinants
- The determinant of a linear transformation is a scaling factor by which a linear transformation changes any area
- Said another way, the determinant is a measure of how much a space is stretched or squished together, relative to the area made up by our standard basis vectors in our original coordinate system
- This implies that the determinant only changes when the area changes in size after a transformation
- In 2D spaces, the determinant represents the scaling factor by which a linear transformation changes any area
- In 3D (or greater) spaces, the determinant represents the scaling factor by which a linear transformation changes any volume

### Defining Determinants
- Let's say we have a $2 \times 2$ matrix $A$ and $3 \times 3$ matrix $B$ defined as the following:

$$
A = \begin{bmatrix} a & b \cr c & d \end{bmatrix}, B = \begin{bmatrix} a & b & c \cr d & e & f \cr g & h & i \end{bmatrix}
$$

- The determinant of our $2 \times 2$ matrix $A$ is defined as the following:

$$
det(A) = ad - bc
$$

- Roughly speaking, $a$ and $d$ represent how much the basis vectors are stretched
- Roughly speaking, $b$ and $c$ represent how much the area (made up by the stretched basis vectors) is stretched in the diagonal direction
- The determinant of a $3 \times 3$ matrix $B$ is defined as the following:

$$
det(B) = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

- We can follow this pattern for $n \times n$ matrices larger than 3 dimensional matrices
- However, we typically have software readily available for us to compute these determinants, so we don't have to calculate determinants by hand

### Rules of Determinants
- If an area is squeezed to a lower dimension after a transformation (i.e. linear dependence), then the determinant of the linear transformation is 0
- If an area is flipped over after a transformation, then the determinant of the linear transformation is negative
- In other words, the determinant's value represents the magnitude by which areas have been scaled
- And, the determinant's sign represents the orientation (or direction) by which areas have been scaled

### Example of a Determinant
- Let's say we have a 2D coordinate system, where the identity matrix $I$ is defined as the following:

$$
I = \begin{bmatrix} 1 & 0 \cr 0 & 1 \end{bmatrix}
$$

- Also, let's say we have a transformation matrix $A$ defined as the following:

$$
A = \begin{bmatrix} 3 & 0 \cr 0 & 2 \end{bmatrix}
$$

- The area represented by the standard basis vectors in the original vector space equals 1

$$
det(I) = (1 \times 1) - (0 \times 0) = 1
$$

- The area represented by the standard basis vectors in the transformed vector space equals 6

$$
det(A) = (3 \times 2) - (0 \times 0) = 6
$$

- Since the area started out as 1 and ended up as 6, then we can say the linear transformation has scaled its area by a factor of 6

### Another Example of a Determinant
- Let's say our transformation matrix is the following:

$$
A = \begin{bmatrix} 1 & 1 \cr 0 & 1 \end{bmatrix}
$$

- The area represented by the standard basis vectors in the original vector space equals 1 

$$
det(I) = (1 \times 1) - (0 \times 0) = 1
$$

- The area represented by the standard basis vectors in the transformed vector space equals 1

$$
det(A) = (1 \times 1) - (1 \times 0) = 1
$$

- Since the area started out as 1 and ended up as 1, then we can say the linear transformation hasn't scaled up or down
- This is because the size of the unit square hasn't changed, but only been rotated

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=Ip3X9LOh2dk&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=6)
