---
title: "Weight Initialization"
draft: false
weight: 18
katex: true
---

### Motivating Effective Weight Initialization
- As stated previously, the choice of activation function can help reduce the problem with vanishing gradients
- However, sometimes the choice of activation function can only go so far (and it sometimes necessary)
- Another approach for reducing the problem with vanishing gradients involves weight initialization

### Importance of Effective Initialization
- The goal of model training is to predict a new data point
- The common training process for neural networks is the following:
	1. Initialize the parameters
	2. Choose an optimization algorithm (e.g. gradient descent)
	3. Repeat these steps:
		1. Forward propagate an input
		2. Compute the cost function
		3. Compute the gradients of the cost with respect to parameters using backpropagation
		4. Update each parameter using the gradients, according to the optimization algorithm
- The initialization step is critical to the performance of the model

### Initializing Weights with Zeroes
- Initializing all the weights with values too small leads to slow learning
- Initializing all the weights with values too large leads to divergence
- Initializing all the weights with $0$ leads the neurons to learn the same features during training
- In fact, any constant initialization scheme will perform poorly
- For example, assigning all the weights to be $100$ or all the weights to be $2$
- Consider a neural network with two hidden units
- Assume we initialize all the biases to $0$ an weights to some constant $\alpha$
- If we forward propagate an input $(x_{1}, x_{2})$, then the output of both hidden units will be $relu(\alpha x_{1}, \alpha x_{2})$
- Therefore, both hidden units will have identical influence on the cost function
- This will lead to identical gradients
- Thus, both neurons will evolve symmetrically throughout training, effectively preventing different neurons from learning different patterns

### Setup for Cases of Unstable Gradient Problem
- Let's say we have a $9$-layer neural network
- Assume all the activation functions are linear
- Then the output activation is the following:

$$
\hat{y} = a^{[10]} = W^{[10]}W^{[9]}W^{[8]}W^{[7]}W^{[6]}W^{[5]}W^{[4]}W^{[3]}W^{[2]}W^{[1]}x
$$

- If we assume the weights are the same:

$$
W^{[1]} = W^{[2]} = ... = W^{[9]} = W^{[10]}
$$

- Then the output prediction is the following:

$$
\hat{y} = W^{[10]}W^{9}x
$$

- Here, $W^{9}$ take the matrix $W$ to the power of $9$, while $W^{[10]}$ just denotes the $10^{\text{th}}$ matrix

### Example: Huge Initialization Causes Exploding Gradients
- If every weight is initialized slightly larger than the identity matrix:

$$
W^{[1]} = W^{[2]} = ... = W^{[9]} = \begin{bmatrix} 1.5 & 0 \cr 0 & 1.5 \end{bmatrix}
$$

- This simplifies to the following:

$$
\hat{y} = W^{[10]}1.5^{[9]}x
$$

- The values of the activation $a^{[l]}$ increase exponentially with $l$
- When these activations are used in backward propagation, this leads to the exploding gradient problem
- In other words, the gradients of the cost with respect to the parameters become too big
- This causes the cost to oscillate around its minimum value

### Example: Tiny Initialization Causes Vanishing Gradients
- If every weight is initialized slightly larger than the identity matrix:

$$
W^{[1]} = W^{[2]} = ... = W^{[9]} = \begin{bmatrix} 0.5 & 0 \cr 0 & 0.5 \end{bmatrix}
$$

- This simplifies to the following:

$$
\hat{y} = W^{[10]}0.5^{[9]}x
$$

- The values of the activation $a^{[l]}$ decrease exponentially with $l$
- When these activations are used in backward propagation, this leads to the vanishing gradient problem
- In other words, the gradients of the cost with respect to the parameters become too small
- This causes the cost to converge to some value before reaching the minimum

### Finding Appropriate Initialization Values
- To prevent the gradients of neurons from vanishing or exploding, we will do the following:
	1. The mean of the activations should be $0$
	2. The variance of the activations should remain constant across each layer
- Under these two assumptions, we should never observe the vanishing or exploding gradient problem
- In other words, the backpropagated gradient should not be multiplied by values too small or too large in any layer
- However, sometimes we can't always guarantee these assumptions

### Motivating Xavier Initialization
- Consider a layer $l$, where its forward propagation is the following:

$$
a^{[l-1]} = g^{[l-1]}(z^{[l-1]})
$$

$$
z^{[l]} = W^{[l]}a^{[l-1]} + b^{[l]}
$$

$$
a^{[l]} = g^{[l]}(z^{[l]})
$$

- We want the two assumptions to hold:

$$
E[a^{[l-1]}] = E[a^{[l]}]
$$

$$
Var(a^{[l-1]}) = Var(a^{[l]})
$$

- These assumptions are enforced for both forward and backward propagation
- Specifically, these assumptions hold true for both the activations and gradients of the cost function with respect to the activations
- The recommended initialization of these two assumptions is Xavier initialization for ever layer $l$

### Defining Xavier Initialization
- Xaviar initialization is defined as the following:

$$
W^{[l]} \sim N(\mu = 0, \sigma^{2} = \frac{1}{n^{[l-1]}})
$$

$$
b^{[l]} = 0
$$

- In other words, all the weights of layer $l$ are picked randomly from a normal distribution with a mean of $0$ and variance of $\frac{1}{n^{[l-1]}}$
- Here, $n^{[l-1]}$ is the number of neurons in layer $l-1$
- Biases are initialized to be $0$

### Justification for Xavier Initialization
- We will see that Xavier initialization matains a constance variance across each layer if the activation of each layer has a mean of $0$
- Let's assume we're using a tanh activation function
- Our forward propagation would look like:

$$
z^{[l]} = W^{[l]}a^{[l-1]} + b^{[l]}
$$

$$
a^{[l]} = tanh(z^{[l]})
$$

- Assume we initialized our network with appropriate values and the input is normalized
- Early on in training, we are in the *linear regime* of the tanh function
- Meaning, the inputs around $0$ essentially become a linear transformation of our input
- In other words, values are small enough where $tanh(z^{[l]}) \approx z^{[l]}$
- As a result, the following holds true:

$$
Var(a^{[l]}) = Var(z^{[l]})
$$

- Causing the following to hold true:

$$
n^{[l-1]}Var(W^{[l]}) \begin{cases} < 1 & \implies \text{Vanishing Signal} \cr = 1 & \implies Var(a^{[L]}) = Var(x) \cr > 1 & \implies \text{Exploding Signal} \end{cases}
$$

- Therefore, we must set $n^{[l]}Var(W^{[l]}) = 1$ by initializing $Var(W^{[l]}) = \frac{1}{n^{[l]}}$
- By doing this, we can avoid the vanishing or exploding gradient problem

---

### tldr
- The initialization step is critical to the performance of the model
- Initializing all the weights with values too small leads to slow learning
- Initializing all the weights with values too large leads to divergence
- Initializing weights to the same constant leads to neurons evolving symmetrically throughout training
- Meaning, each neuron will have an identical influence on the cost function, since parameters will have identical gradients
- Initializing weights with inappropriate values will lead to divergence or a slow-down in training speed
- To prevent the gradients of neurons from vanishing or exploding, we will do the following:
	1. The mean of the activations should be $0$
	2. The variance of the activations should remain constant across each layer
- Under these two assumptions, we should never observe the vanishing or exploding gradient problem
- These assumptions are enforced for both forward and backward propagation
- The recommended initialization of these two assumptions is Xavier initialization for ever layer $l$
- Xavier initialization ensures that all the weights of layer $l$ are picked randomly from a normal distribution with a mean of $0$ and variance of $\frac{1}{n^{[l-1]}}$

---

### References
- [Weight Initialization](https://www.youtube.com/watch?v=s2coXdufOzE&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=11)
- [Initializing Neural Networks](https://www.deeplearning.ai/ai-notes/initialization/)
