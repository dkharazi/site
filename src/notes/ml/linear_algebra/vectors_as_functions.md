---
title: "Vectors as Functions"
draft: false
weight: 10
katex: true
---

## Describing Vectors as Functions
- A vector doesn't have a clear definition
- As long as there's a reasonable notion of scaling and adding, a vector can be any object
- The following are just a few examples of vectors:
	- An arrow on a flat plane that we can describe with coordinates
	- A pair of real number that is just nicely visualized as an arrow on a flat plane
	- The set of all $\pi$ creatures
	- A set of any other crazy object
- Again, the above are examples of vectors as long as they have a reasonable notion of scaling and adding
- However, possibly the best way to think about vectors is as functions

### Motivating Vectors as Functions
- A vector can be thought of as a type of function
- Similar to how the only thing vectors can really do is be added together or scaled by a real number, we can only add functions together and scale them by real numbers
- The following are some examples of this idea:
	- Adding two functions $f$ and $g$ provides us with a new function $f+g$
	- Scaling a function $f$ by a real number $2$ will give us a new function $2f$
- Similar to how we can use linear transformations to map a vector from one vector space to another vector space, we can use operators to map one function space to another function space
- One familiar example of this is the derivative
	- It's an operator that transforms one function space into another function space

### Linear Transformations as Operators
- Similar to linear transformations needing to be linear, operators need to maintain linearity as well
- A transformation is linear if it satisfies two properties
	- Additivity
	- Scaling
- Additivity means that if you add two vectors $v$ and $w$ together, then apply a transformation to their sum, you get the same result as if you added the transformed versions of $v$ and $w$
- The scaling property is that when you scale a vector $v$ by some number, then apply the transformation, you get the same vector as if you scale the transformed version of $v$ by that same amount
- In other words, linear transformations need to preserve the operations of vector addition and scalar multiplication
- The idea of gridlines remaining parallel and evenly spaced is just an illustration of what these two properties mean in a 2D space
- The properties of additivity and scaling need to be maintained for functions (or operators) too
- For example, if you add two functions, then take the derivative, it's the same as first taking the derivative of each function separately, then adding the result
- Similarly, if you scale a function, then take the derivative, it's the same as first taking the derivative, then scaling the result

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=TgKwz5Ikpc8&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=15)
- [Properties of Differential Operators Wiki](https://en.wikipedia.org/wiki/Differential_operator)
