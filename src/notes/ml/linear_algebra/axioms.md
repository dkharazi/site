---
title: "Axioms of a Vector Space"
draft: false
weight: 11
katex: true
---

### Motivating the Eight Axioms
- As a reminder, a vector can be any set of crazy object as long as there is a reasonable notion of adding and scaling
- Take a moment to imagine yourself as a mathematician developing the theory of linear algebra
- You want all of the definitions and discoveries of your work, such as linear transformations, determinants, etc, to apply to all of the vector-ish things (i.e. arrows, lists of numbers, etc.)
- More specifically, you want all of the definitions and discoveries to apply to all of the vector-ish things in full generality, not just to one specific case
- These sets of vector-ish things, like arrows or lists of numbers or functions, are called vector spaces
- In other words, you'd want to establish a list of general rules (involving vector addition and scalar multiplication) that would need to be followed in order to apply all of the wonderful things about linear algebra (i.e. determinants, linear transformations, etc.) to your vector space
- There are eight of these rules, and they are called axioms

### The Eight Axioms of a Vector Space
1. $u + (v + w) = (u + v) + w$
	- Where $u, v,$ and $w$ are any vector within the vector space
2. $v + w = w + v$
	- Where $v$ and $w$ are any vector within the vector space
3. There is a zero vector $0$ such that $0 + v = v$ for all $v$
	- Where $v$ is any vector within the vector space
	- Where $0$ is the zero vector of the vector space
4. For every vector $v$, there is a vector $-v$ such that $v + (-v) = 0$
	- Where $v$ is any vector within the vector space
	- Where $0$ is the zero vector of the vector space
5. $a(bv) = (ab)v$
	- Where $v$ is any vector within the vector space
	- Where $a$ and $b$ are any real numbers
6. $1v = v$
	- Where $1$ is the real number $1$
	- Where $v$ is any vector within the vector space
7. $a(v+w) = av + aw$
	- Where $a$ is any real numbers
	- Where $v$ and w are any vector within the vector space
8. $(a+b)v = av + bv$
	- Where $a$ and $b$ are any real numbers
	- Where $v$ is any vector within the vector space

### References
- [Essence of Linear Algebra Video](https://www.youtube.com/watch?v=TgKwz5Ikpc8&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=15)
- [Vector Axioms](https://www.math.ucla.edu/~tao/resource/general/121.1.00s/vector_axioms.html)
