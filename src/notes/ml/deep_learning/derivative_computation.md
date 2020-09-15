---
title: "Computing Derivatives"
draft: false
weight: 9
katex: true
---

### Motivating Derivatives
- Before diving straight into the backpropagation algorithm, we should understand why we care about the partial derivatives $\frac{\partial J(w,b)}{\partial w}$ and $\frac{\partial J(w,b)}{\partial b}$
- Graphing out the computations of derivatives can help us understand the use of partial derivatives
- Specifically, we'll use a graph to determine the partial derivatives of $J(w,b)$ with respect to $b$ and $w$
- Essentially, a partial derivative $\frac{\partial J}{\partial v}$ says an increase of $c$ in the bottom value $v$ will cause the top value $J$ to increase by $c \times$ $\frac{\partial J}{\partial v}$

### Example of Computing Derivatives

- Suppose we have the following functions and inputs:

![derivativecomputation](/img/derivative.svg)

- Let's focus on the parameter $a$ for now
- Sometimes, we'll want to increase or decrease $a$
- Changing $a$ will also change $J$ as a result
- Sometimes, we want to know how $J$ changes before we change $a$
- If we plug $5.001$ in for $a$ instead of $5$, then we'll notice:

$$ a = 5 \to 5.001 $$
$$ v = 11 \to 11.001 $$
$$ J = 33 \to 33.003 $$

- So, increasing $a$ by $0.001$ leads to a change in $J$ of $0.003$
- If we change $a$ by a large number, then we'll notice:

$$ a = 5 \to 15 $$
$$ v = 11 \to 21 $$
$$ J = 33 \to 63 $$

- So, increasing $a$ by $10$ leads to a change in $J$ of $30$
- If we keep changing $a$ by some value, then we'll notice that $J$ will always increase by $3$ times that value
- In other words, a one-unit increase in $a$ will lead to a three-unit increase in $J$
- We call this a *partial derivative*:

$$ \frac{\partial J}{\partial a} = 3 $$

- Usually, we don't want to manually adjust $a$ and observe changes in $J$ to find the partial derivative
- Luckily, we can use calculus to determine the partial derivative of some function $J$ with respect to parameter $a$:

$$ J = 3v = 3a + 3bc $$
$$ \frac{\partial J}{\partial a} = 3 $$

### An Assumption about Derivatives
- As we saw previously, changing $a$ by some amount will lead to a change in $J$ by $3$ times that amount
- Stated another way, the partial derivative $ \frac{\partial J}{\partial a} = 3 $
- We can also determine partial derivatives of other values with respect to $a$
- For example, if we change $a$ by $0.001$ again, then we'll notice:

$$ a = 5 \to 5.001 $$
$$ v = 11 \to 11.001 $$

- So, increasing $a$ by $0.001$ leads to a change in $v$ of $0.001$
- In other words, they change by the same amount
- Therefore, our partial derivative looks like the following:

$$ \frac{\partial v}{\partial a} = 1 $$

- Notice, $v$ can also change if we change $b$ or $c$:

$$ v = a + bc $$

- Therefore, we're making an assumption when we notice a $0.001$ change in $v$ with a $0.001$ change in $a$
- Specifically, we're assuming that both $b$ and $c$ remain fixed
- The partial derivative $\frac{\partial v}{\partial a}$ makes this assumption as well
- In other words, all partial derivates nudge the input associated with the denominator, observe changes in the function associated with the numerator, and hold all other parameters and functions fixed

### Observing the Chain Rule
- We've already noticed the relationship between $a$, $v$, and $J$ when we made a change to $a$ and observed the change in $J$:

$$ a = 5 \to 5.001 $$
$$ v = 11 \to 11.001 $$
$$ J = 33 \to 33.003 $$

- From this, we've seen that $\frac{\partial J}{\partial a} = 3$ because $a$ influences $v$, and $v$ influences $J$

$$ a \to v \to J $$

- In other words, partial derivatives are dependent on both the direct and indirect effects of parameters
- This concept is captured by the *chain rule*:

$$ \frac{\partial J}{\partial a} = \frac{\partial J}{\partial v} \frac{\partial v}{\partial a} $$
$$ \frac{\partial J}{\partial a} = 3 \times 1 = 3 $$

- The chain rule is the calculus we used for computing our partial derivatives previously
- This is a major step in the backpropagation algorithm

---

### tldr
- A partial derivative $\frac{\partial J}{\partial v}$ says an increase of $c$ in the bottom value $v$ will cause the top value $J$ to increase by $c \times$ $\frac{\partial J}{\partial v}$
- All partial derivates are an observed change in the function associated with the numerator
- All partial derivatives find this change by:
	- Nudging the input associated with the denominator
	- Holding all other parameters and functions fixed
- The chain rule is a formula to compute the partial derivatives
- Its formula shows that partial derivatives are influenced by the direct and indirect changes of dependent parameters

---

### References
- [Derivatives with Computation Graphs](https://www.youtube.com/watch?v=nJyUyKN-XBQ&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=14)
- [Forward Propagation and Backware Propagation](https://www.quora.com/What-is-the-difference-between-back-propagation-and-forward-propagation)
