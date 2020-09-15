---
title: "Change of Basis"
draft: false
weight: 8
katex: true
---

### Motivating Change of Bases
- Let's say we have the vector $[3,2]$ sitting in a 2D space
- We usually think of these coordinates as scalars
- Specifically, we think of these scalars as scaling the standard basis vectors
- In this example, we think of the first coordinate $3$ as a number that scales the x-axis unit vector, while the second coordinate $2$ is a number that scales the y-axis unit vector
- Therefore, we can think of these two special unit vectors as encapsulating all of the implicit assumptions of our coordinate system
- A way to translate between vectors and a set of numbers is called a coordinate system
- As stated previously, these two special unit vectors are called the (standard) basis vectors of our standard coordinate system

### More on Basis Vectors
- There are many different basis vectors in different coordinate systems, but they are all thought of as the same in their own coordinate system
- For example, $[1, 0], [1, 0, 0],$ and $[0, 1]$ are all basis vectors in their respective coordinate system
- The only difference is their transformation (or mapping) between coordinate systems
- In other words, every pair of basis vectors may look different across different coordinate systems
- However, every pair of basis vectors will look the same within a coordinate system, since basis vectors simply define the meaning of the coordinates $[1,0]$ and $[0,1]$ (or greater) in each world

### Example of Different Basis Vectors
- Let's say Jennifer and I both define two different 2D coordinate systems, where the origin is the same between our coordinate systems
- Therefore, Jennifer uses a different set of basis vectors compared to our basis vectors
- Specifically, Jennifer refers to her basis vectors in her coordinate system as the following:

$$ b_{1}^{J} = \begin{bmatrix} 1 \cr 0 \end{bmatrix}, b_{2}^{J} = \begin{bmatrix} 0 \cr 1 \end{bmatrix} $$ 
- Jennifer refers to our basis vectors in her coordinate system as the following:

$$ b_{1}^{U} = \begin{bmatrix} \frac{1}{3} \cr['0.75em'] -\frac{1}{3} \end{bmatrix}, b_{2}^{U} = \begin{bmatrix}\frac{1}{3} \cr['0.75em'] \frac{2}{3} \end{bmatrix} $$

- We refer to Jennifer's basis vectors in our coordinate system as the following:

$$ b_{1}^{J} = \begin{bmatrix} 2 \cr 1 \end{bmatrix}, b_{2}^{J} = \begin{bmatrix} -1 \cr 1 \end{bmatrix} $$

- We refer to our basis vectors in our coordinate system as the following:

$$ b_{1}^{U} = \begin{bmatrix} 1 \cr 0 \end{bmatrix}, b_{2}^{U} = \begin{bmatrix} 0 \cr 1 \end{bmatrix} $$


- Therefore, we may observe a vector $[3, 2]$ in our coordinate system, which Jennifer would see as $[\frac{5}{3}, \frac{1}{3}]$ in her coordinate system

### How Jennifer Translates to our Coordinate System
- We can use matrix multiplication to translate a vector from Jennifer's coordinate system to our coordinate system if we know the following:
	- Jennifer's basis vectors in our coordinate system
	- A vector in her coordinate system
- For example, suppose we know the following:
	- Jennifer's basis vectors $[1, 0]$ and $[0, 1]$ from her coordinate system translate to $[2, 1]$ and $[-1, 1]$ in our coordinate system
	- A vector $[-1, 2]$ from Jennifer's coordinate system
- Then, we can translate that vector to our coordinate system by plugging in those values to the equation $Ax = b$
- By doing this, we'll see a matrix whose columns represent some set of basis vectors, which represents a linear transformation
- As a result, we get the following:

$$ \begin{bmatrix} 2 & -1 \cr 1 & 1 \end{bmatrix} \times \begin{bmatrix} -1 \cr 2 \end{bmatrix} = \begin{bmatrix} -4 \cr 1 \end{bmatrix} $$

- Where $[[2,1],[-1,1]]$ is our transformation matrix $A$
- Where $[-1, 2]$ is our vector from her coordinate system $x$
- Where $[-4, 1]$ is that vector in our coordinate system $b$

### How we Translate to Jennifer's Coordinate System
- We can use matrix multiplication to translate a vector from our coordinate system to her coordinate if we know the following:
	- Our basis vectors from Jennifer's coordinate system
	- A vector in our coordinate system
- For example, suppose we know the following:
	- Jennifer's basis vectors $[1, 0]$ and $[0, 1]$ from her coordinate system translate to $[2, 1]$ and $[-1, 1]$ in our coordinate system
	- A vector $[3, 2]$ from our coordinate system
- Then, we can translate that vector to Jennifer's coordinate system by first finding the inverse of Jennifer's basis vectors, then plugging in those values to the equation $x = A^{-1}b$
- By doing this, we'll see that the inverse of a matrix also represents a linear transformation, since it is also a matrix whose columns represent some set of basis vectors
- As a result, we get the following:

$$ \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \cr['0.75em'] -\frac{1}{3} & \frac{2}{3} \end{bmatrix} \times \begin{bmatrix} 3 \cr 2 \end{bmatrix} = \begin{bmatrix} \frac{5}{3} \cr['0.75em'] \frac{1}{3} \end{bmatrix} $$

- Where $[[\frac{1}{3}, -\frac{1}{3}], [\frac{1}{3}, \frac{2}{3}]]$ is the inverse of our transformation matrix $A^{-1}$
- Where $[3, 2]$ is a vector from our coordinate system $b$
- Where $[\frac{5}{3}, \frac{1}{3}]$ is that vector in Jennifer's coordinate system $x$

### Translating the Effect of a Linear Transformation between Coordinate Systems
- Suppose we want to perform a $90°$ counterclockwise rotation in our coordinate system
- Our transformation matrix would be $[[0, 1], [-1, 0]]$
- If we wanted to perform a $90°$ counterclockwise rotation in Jennifer's coordinate system, our transformation matrix would look different
- This is because transformations depend on the coordinate system we're currently in, and we have different coordinate systems
- In other words, the columns of the transformation matrix represent where our basis vectors go, but the matrix that Jennifer wants should represent where her basis vectors land (described in her coordinate system)
- We can solve this problem using the following equation:

$$ A^{-1}MA $$
- Where $M$ represents the transformation matrix in our coordinate system (i.e. $[[0, 1], [-1, 0]]$)
- Where $A$ represents Jennifer's basis vectors in our coordinate system (i.e. $[[2, 1], [-1, 1]]$)
- Where $A^{-1}$ represents our basis vectors in Jennifer's coordinate system (i.e. $[[\frac{1}{3}, -\frac{1}{3}], [\frac{1}{3}, \frac{2}{3}]]$)

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=P2LTAUO1TdA&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=13)
