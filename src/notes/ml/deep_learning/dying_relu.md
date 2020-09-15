---
title: "Dying ReLU"
draft: false
weight: 17
katex: true
---

### Motivating the Dying ReLU Problem
- ReLU doesn't suffer from the vanishing gradient problem as much as other activation functions
- However, the relu function still has a vanishing gradient problem, but only on one side
- Therefore, we call it something else
- We call it the dying relu problem instead

### Describing the Dying ReLU Problem
- Since the relu function returns $0$ for all negative inputs, the gradient of negative sums is also $0$
- Indicating, a neuron stops learning once it becomes negative
- This usually happens because of a very large negative bias $b$
- Since the gradient is always $0$, then a neuron is unlikely to recover
- Therefore, the weights will not adjust in gradient descent
- This is good if we are at a global minimum
- However, we'll frequently get stuck at local minimums and plateaus because of the dying relu problem

### The Vanishing Gradient and Dying ReLU Problem
- The derivatives of many activation functions (e.g. tanh, sigmoid, etc.) are very close to $0$
- In other words, if the gradient becomes smaller, then the slower and harder it is to return into the *good* zone
- Roughly speaking, this demonstrates a major effect of the vanishing gradient problem
- The gradient of the relu function doesn't become smaller in the positive direction
- Therefore, the relu function doesn't suffer from the vanishing gradient problem in the positive direction

### Introducing the Leaky ReLU
- The leaky relu attempts to solve the dying relu problem
- Specifically, the leaky relu does this by providing a very small gradient for negative values
- This represents an attempt to allow neurons to recover
- We can define the leaky relu function as the following:

$$ \text{leakyrelu}(x) = \begin{cases} 0.01x &\text{if } x \le 0 \cr x &\text{if } x > 0 \end{cases} $$

![leakyrelu](/img/leakyrelu.svg)

- Unfortunately, the leaky relu doesn't perform as well as the relu
- Also, there isn't much of an accuracy boost in most circumstances

---

### tldr
- ReLU doesn't suffer from the vanishing gradient problem as much as other activation functions
- However, the relu function still has a vanishing gradient problem, but only on one side
- Therefore, we call it something else
- We call it the dying relu problem instead
- The leaky relu attempts to solve the dying relu problem

---

### References
- [What is the Dying ReLU Problem](https://datascience.stackexchange.com/questions/5706/what-is-the-dying-relu-problem-in-neural-networks)
- [The Vanishing Gradient and Dying ReLU Problem](https://ayearofai.com/rohan-4-the-vanishing-gradient-problem-ec68f76ffb9b)
- [How ReLU Solves the Vanishing Gradient Problem](https://www.quora.com/How-does-the-ReLu-solve-the-vanishing-gradient-problem)
- [Relating the Vanishing Gradient to the Dying ReLU Problem](https://datascience.stackexchange.com/questions/11591/relu-does-have-0-gradient-by-definition-then-why-gradient-vanish-is-not-a-probl)
- [What is the Dying ReLU Problem](https://www.quora.com/What-is-the-dying-ReLU-problem-in-neural-networks)
