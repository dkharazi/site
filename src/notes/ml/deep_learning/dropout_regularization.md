---
title: "Dropout Regularization"
draft: false
weight: 13
katex: true
---

### Motivating Dropout Regularization
- Dropout regularization is a popular regularization layer-level method
- Dropout regularization is performed to prevent overfitting in neural networks
- We can effectively remove neurons by multiplying its activations by $0$
- In machine learning, we can use an ensemble of classifiers to combat overfitting
- However, ensemble methods become too expensive in the realm of deep learning
- Therefore, we can use dropout to approximate the effects of ensemble methods

### Describing the Original Dropout Implementation
- Dropout can be implemented by randomly removing neurons from a network during its training phase
- Specifically, each neuron's activation has a probability $p$ of being removed during the training phase
- Each neuron's activation is multiplied by a probability $p$ during the testing phase
- For example, a feedforward operation of a standard neural network looks like the following:

$$ z^{l} = w^{l}a^{l-1} + b^{l} $$
$$ a^{l} = g(z^{l}) $$

- With dropout, a feedforward operation becomes the following during the training step:

$$ r^{l-1} \sim \text{Bernoulli}(p) $$
$$ \tilde{a}^{l-1} = r^{l-1}a^{l-1} $$
$$ z^{l} = w^{l} \tilde{a}^{l-1} + b^{l} $$
$$ a^{l} = g(z^{l}) $$

- With dropout, a feedforward operation becomes the following during the testing step:

$$ \tilde{a}^{l-1} = a^{l-1}p $$
$$ z^{l} = w^{l} \tilde{a}^{l-1} + b^{l} $$
$$ a^{l} = g(z^{l}) $$

### Reasoning behind the Original Dropout Method
- During the training phase, removing neurons adds a degree of noise to the architecture
- Specifically, removing neurons ensures that our network isn't dependent on any handful of nodes
- By doing this, we will prevent overfitting because we aren't limiting our network by only fitting to that limited set of neurons
- During the testing phase, activations are multiplied by probability $p$
- The purpose of doing this is to ensure that the distribution of values from training closely resemble the values from testing
- Equivalently, we sometimes decide to multiply $p$ by the weights rather than the activations

### Example of the Original Dropout Implementation
- Let's say we have $p=0.5$ and the following activations for a certain layer:

$$ a^{l-1} = \begin{bmatrix} 1 \cr 2 \cr 3 \cr 4 \cr 5 \cr 6 \cr 7 \cr 8 \end{bmatrix} $$

- During the training phase, half of our neurons (i.e. $p=0.5$) would be removed:
- Therefore, our training activations could look like the following:

$$ \tilde{a}^{l-1} = \begin{bmatrix} 1 \cr 0 \cr 0 \cr 4 \cr 5 \cr 0 \cr 7 \cr 0 \end{bmatrix} $$

- During the testing phase, our activations are multiplied by $p$
- Therefore, our testing activations would look like the following:

$$ \tilde{a}^{l-1} = \begin{bmatrix} 0.5 \cr 1 \cr 1.5 \cr 2 \cr 2.5 \cr 3 \cr 3.5 \cr 4 \end{bmatrix} $$

### Example of the Original Dropout for Input Layer
- If we are dealing with an input layer, our activation $a^{l-1}$ is represented by our input data $x$
- Let's say we have $p=0.5$ and the following input data for a certain layer:

$$ x = \begin{bmatrix} 1 \cr 2 \cr 3 \cr 4 \cr 5 \cr 6 \cr 7 \cr 8 \end{bmatrix} $$

- During the training phase, half of our neurons (i.e. $p=0.5$) would be removed:
- Therefore, our training activations could look like the following:

$$ \tilde{x} = \begin{bmatrix} 1 \cr 0 \cr 0 \cr 4 \cr 5 \cr 0 \cr 7 \cr 0 \end{bmatrix} $$

- During the testing phase, our activations are multiplied by $p$
- Therefore, our testing activations would look like the following:

$$ \tilde{x} = \begin{bmatrix} 0.5 \cr 1 \cr 1.5 \cr 2 \cr 2.5 \cr 3 \cr 3.5 \cr 4 \end{bmatrix} $$

### Describing the TensorFlow Dropout Implementation
- TensorFlow has a different implementation of the original dropout implementation
- These implementations only have slight differences
- We will see that these implementations are even equivalent sometimes
- During the testing phase of the original dropout implementation, we are essentially downgrading the activations
- During the training phase of the tensorflow implementation, we increase the activations by a factor of $\frac{1}{1-p}$
- Specifically, we do this to prevent the need for changing the activations during the testing phase
- To be clear, all of the neurons that aren't dropped with a probability $p$ are increased by a factor of $\frac{1}{1-p}$ during the training phase
- The neurons that are dropped with a probability $p$ are obviously $0$ during the training phase
- The reason for this upscale of values is to preserve the distribution of values so that the total sum is preserved as well
- For example, upscaling the values here will lead to a close approximation of sums:

$$ sum(a^{l-1}) = sum(\begin{bmatrix} 1 \cr 2 \cr 3 \cr 4 \cr 5 \cr 6 \cr 7 \cr 8 \end{bmatrix}) = 36 $$
$$ sum(\tilde{a}^{l-1}) = sum(a^{l-1} \times \frac{1}{1-p}) = sum(\begin{bmatrix} 2 \cr 0 \cr 0 \cr 8 \cr 5 \cr 0 \cr 14 \cr 0 \end{bmatrix}) = 29 $$

- This makes sense because we'd hope for $sum(\tilde{a}^{l-1})$ and $sum(a^{l-1})$ to be approximately similar
- This is because we'd like any transformation $\tilde{a}^{l-1}$ of $a^{l-1}$ to reflect a similar summation output, since we're neural networks use summations of $a^{l-1}$ so often

### Example of the TensorFlow Dropout Implementation
- Let's say we have $p=0.5$ and the following activations for a certain layer:

$$ a^{l-1} = \begin{bmatrix} 1 \cr 2 \cr 3 \cr 4 \cr 5 \cr 6 \cr 7 \cr 8 \end{bmatrix} $$

- During the training phase, half of our neurons (i.e. $p=0.5$) would be removed:
- Therefore, our training activations could look like the following:

$$ \tilde{a}^{l-1} = \begin{bmatrix} 2 \cr 0 \cr 0 \cr 8 \cr 10 \cr 0 \cr 14 \cr 0 \end{bmatrix} $$

- During the testing phase, our activations are unchanged
- Therefore, our testing activations would look like the following:

$$ \tilde{a}^{l-1} = \begin{bmatrix} 1 \cr 2 \cr 3 \cr 4 \cr 5 \cr 6 \cr 7 \cr 8 \end{bmatrix} $$

### Equivalence of Implementations
- Mathematically, these two implmentations do not look the same
- Specifically, these two implementations are off by a constant value in both forward and backward propagation
- However, these two implementations are mathematically equivalent when optimizing parameters

### Footnotes for Applying Dropout Regularization
- Typically, we set the dropout probability $p=1$ for our input layer $x$
- In other words, we don't remove any neurons for our input layer in application
- We can also think of the dropout probability $p=1$ for all neurons during any testing phase

---

### tldr
- Dropout regularization is performed to prevent overfitting in neural networks
- Dropout regularization is performed for a layer
- Typically, we don't perform dropout on an input layer $x$
- Dropout can be implemented by randomly removing neurons from a network during its training phase
- Specifically, each neuron's activation has a probability $p$ of being removed during the training phase
- The purpose of doing this is to ensure that our network isn't dependent on any handful of nodes
- This prevents overfitting
- Each neuron's activation is multiplied by a probability $p$ during the testing phase
- The purpose of doing this is to preserve the distribution of values between the training and testing sets
- Then, the total sum will be preserved
- This is important because our network uses these summations so often

---

### References
- [Dropout Regularization](https://www.youtube.com/watch?v=D8PJAL-MZv8&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=6)
- [Implementation of Dropout in TensorFlow](http://laid.delanover.com/dropout-explained-and-implementation-in-tensorflow/)
- [Reasoning behind Dropout Method](https://datascience.stackexchange.com/questions/38874/dropout-in-deep-neural-networks)
- [Explanation and Example of Dropout Regularization](https://leimao.github.io/blog/Dropout-Explained/)
- [Dropout as an Ensemble](https://cedar.buffalo.edu/~srihari/CSE676/7.12%20Dropout.pdf)
- [Implementation of Dropout](https://stats.stackexchange.com/a/257462)
- [Illustrations of Dropout Regularization](https://www.oreilly.com/library/view/tensorflow-for-deep/9781491980446/ch04.html)
