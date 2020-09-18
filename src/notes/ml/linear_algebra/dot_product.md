---
title: "Dot Product"
draft: false
weight: 6
katex: true
---

### Describing the Dot Product
- The dot product is a single number that represents the amount of growth observed between two vectors interacting with each other
- To determine the most accurate amount of growth made up by the two vectors, we need to ensure the vectors are on the same scale
- We can achieve this by projecting one vector onto the line made up by the other vector
- Here, we can think of *projection* to mean *along the path*
- Roughly, we can think of the dot product as directional multiplication, where vectors just represent directional growth
- When dealing with vectors, there's only a few common operations we can perform:
	- Add vectors: accumulate the growth contained in several vectors
	- Multiply by a constant: make an existing vector stronger
	- Dot product: apply the directional growth of one vector to another, which results in strengthening the original vector

### Motivating Directional Multiplication
- If everything were lined up in the universe, then we'd love to just use multiplication
- However, that's usually never the case
- Therefore, we take the dot product to account for potential differences in direction
- If we think of integrals as multiplication taking changes into account, then we can think of the dot product as multiplication taking direction into account
- Specifically, multiplication goes beyond repeated counting
- It's better to think about multiplication as applying one item to another
- For example, complex multiplication is rotation (and not repeated counting)

### Basic Properties of the Dot Product
- If you have two vectors of the same dimension (i.e. two lists of numbers with the same length), then taking their dot product involves the following steps:
	1. Pairing up all of their coordinates
	2. Multiplying those pairs together
	3. Adding those multiplied pairs together
- If the dot product between two vectors is:
	- Positive, then the two vectors are generally pointing in the same direction
	- Negative, then the two vectors are generally pointing in opposite directions
	- Zero, then the two vectors are perpendicular

### Examples of the Dot Product
$$
dotprod(\begin{bmatrix} 1 \cr 2 \end{bmatrix}, \begin{bmatrix} 3 \cr 4 \end{bmatrix}) = (1 \times 3) + (2 \times 4) = 11
$$

$$
dotprod(\begin{bmatrix} 6 \cr 2 \cr 8 \cr 3 \end{bmatrix}, \begin{bmatrix} 1 \cr 8 \cr 5 \cr 3 \end{bmatrix}) = (6 \times 1) + (2 \times 8) + (8 \times 5) + (3 \times 3) = 71
$$

$$
dotprod(\begin{bmatrix} 3 \cr 0 \end{bmatrix}, \begin{bmatrix} 0 \cr 5 \end{bmatrix}) = (3 \times 0) + (0 \times 5) = 0
$$

### Defining Dot Products using Growth
- We can define directional growth as the amount of growth in each dimension, which will create a new vector oriented in a new direction
- Finding the dot product between any two vectors will give us their directional growth
- Let's say we wanted to take the dot products of the set of vectors $[3, 0]$ and $[4, 0]$ to measure their total growth across each dimension
	- Where the number $3$ represents directional growth in a single dimension or direction (i.e. the x-axis)
	- Where the number $4$ represents directional growth in that same dimension or direction (i.e. the x-axis)
	- Where the numbers $0$ represent directional growth in a different dimension or direction (i.e. the y-axis)
	- Therefore, the total amount of growth observed (i.e. directional growth) is 12
- Let's say we wanted to take the dot products of the set of vectors $[3, 0]$, and $[0, 4]$ to measure their total growth across each dimension
	- Where the x-axis dimension refers to an amount of bananas and the y-axis dimension refers to an amount of oranges
	- The first vector represents tripling our bananas and destroying our oranges
	- The second vector represents destroying our bananas and quadrupling our oranges
	- Here, addition refers to quantity, whereas multiplication refers to growth of a quantity

### Dot Product as a Similarity Measure
- Previously, we referred to the dot product between two vectors as a directional growth
- We can also think of the dot product as a similarity measure
- When the vectors are:
	 Exactly in the same direction, then the dot product (or similarity) of the vectors is positive and large
	- Sort of in the same direction, then the dot product (or similarity) of the vectors is positive and small
	- Perpendicular, then the dot product (or similarity) of the vectors is zero
	- Sort of in the opposite direction, then the dot product (or similarity) of the vectors is negative and small
	- Exactly in the opposite direction, then the dot product (or similarity) of the vectors is negative and large

### Analogy involving Mario-Kart
- In Mario Kart, there are boost pads on the ground that increase a player's speed
- In the game, there is a player vector representing our player's speed and a boost pad vector representing the orientation of a boost pad
- Each of these vectors can be represented as a two dimensional vector (i.e. $x$ and $y$ direction)
- If a player vector is large, then the player is moving at a very fast speed
- If a boost pad vector is large, then the boost pad itself is long
- If we want to determine how much boost a player receives when they drive over a boost pad, then we need to assume the following:
	- If a player is dropped over a boost pad with zero speed, then the boost pad will not provide the player with any boost
	- If a players crosses the pad perpendicularly, then the boost pad will not provide the player with any boost
- For all other cases, our x-speed will get an x-boost and our y-speed gets a y-boost if we have some overlap
- Therefore, our total speed would be defined as the following:

$$
Total Speed = (speedx \cdot boostx) + (speedy \cdot boosty)
$$

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=LyGKycYT2v0&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=9)
- [Understanding the Dot Product using Vector Calculus](https://betterexplained.com/articles/vector-calculus-understanding-the-dot-product/)
- [Representation of the Dot Product](https://math.stackexchange.com/questions/805954/what-does-the-dot-product-of-two-vectors-represent)
- [Visualizing the Dot Product](http://spiff.rit.edu/classes/phys311.old/lectures/dot/dot.html)
