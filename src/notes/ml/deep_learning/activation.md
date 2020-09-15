---
title: "Linearity and Activation Functions"
draft: false
weight: 1
katex: true
---

### Overview of Linearity
- A linear map refers to a function $f : V \to W$ that satisfies the following two conditions:
	1. $f(x+y) = f(x) + f(y); x,y \in V$
	2. $f(cx) = xf(x); c \in \R$
- This is a definition referred to in linear algebra often
- However, we can also think of linearity in terms of *linear separability*
- Linear separability means a line can be separate our data into two different classes
	- This line becomes a hyperplane if the space is greater than two dimensions
- This line represents a linear decision boundary
- Rarely do we find a physical world phenomenon that generates data that is linearly separable
- In these cases, we need to find a way to model nonlinear decision boundaries

### Linearity and Neural Networks
- To model our data using nonlinear decision boundaries, we can utilize a neural network that introduces nonlinearity
- Neural networks classify data that is not linearly separable by transforming data using some nonlinear function
- We refer to these nonlinear functions as *activation functions*
- After applying nonlinear functions to our data, our hope is that our transformed data points become linearly separable

![decisionboundary](/img/decision_boundary.svg)

### Brief Overview of Activation Functions
- Essentially, activation functions help introduce non-linearity in neural networks
- Different activation functions are used for different problem settings
- Here are a few examples of activation functions:
	- Tanh
	- Sigmoid
	- ReLU

### Decision Boundaries and Activation Functions
- The main purpose of an (nonlinear) activation function is to create a nonlinear decision boundary for a neural network
- Any decision boundary is a linear combination of polynomial combinations of the input features
- The decision boundary is not a property of the training set
- Instead, the decision boundary is a property of the hypothesis and parameters
- Specifically, the shape and position of a decision boundary is based on the weights and bias

### Using Linear Activation Functions
- Using linear functions in our hidden layers is usually pointless
- This is because the composition of two or more linear functions is itself a linear function
- So, a network with many hidden layers with linear activation functions would return the same output as a network with a single output layer with a linear activation function
- We should only use linear activation functions for an output layer if we're interested in returning real-valued data $\hat{y}$
- In other words, we should only use a linear activation function for output layers, and the linear output layer should only be used for regression problems
- Even if we're interested in regression, we'll sometimes want to use the relu activation function instead of a linear activation function if we want to return real-valued, non-negative data $\hat{y}$

![linearactivation](/img/linear_activation.svg)

### Defining Activation Functions
- In a feedforward network, each neuron is computed the same:
	1. First calculate $z$:
	$$ z \equiv w \cdot x + b $$
	2. Then calculate $a$:
	$$ a \equiv g(z) $$
- We can see that $z$ will always behave the same for any type of activation function $g$
- We'll observe different behavior for $a$ when we change our activation function $g$
- Input $x$ is replaced by $a$ as we iterate through a network's layers
- For now, we'll define activation functions using two properties:
	- Function formula
	- Range of output

### Introducing the Sigmoid Activation Function
- The sigmoid formula is defined as the following:

$$ g(x) = \frac{1}{1+e^{-x}} $$

![sigmoidfunction](/img/sigmoid_function.svg)

- The range of the output is the following:

$$ (0,1) $$

- If $z$ is a large positive number, then $e^{−z} \approx 0$ and so $\sigma(z) \approx 1$
- In other words, when $w \cdot x + b$ is large and positive, the output of the sigmoid neuron is approximately $1$
- Conversely, if $z$ is very negative, then $e^{−z} \to \infty$ and $\sigma(z) \approx 0$
- In other words, when $w \cdot x + b$ is very negative, the output from the sigmoid neuron is approximately $0$
- Typically, the tanh function is preferred over the sigmoid function

### Introducing the Tanh Activation Function
- The tanh formula is defined as the following:

$$ g(x) = \frac{e^{x}-e^{-x}}{e^{x}+e^{-x}} $$

![tanh](/img/tanh.svg)

- The range of the output is the following:

$$ (-1,1) $$

- Mathematically, the tanh function is just a shifted version of the sigmoid function
- We prefer the shifted version over the sigmoid function because it makes the learning for the next layer a bit easier
- Specifically, learning becomes easier when the data is centered so that the mean is close to zero
- For this reason, the sigmoid is rarely used, unless our problem requires for the output layer to return values between $0$ and $1$
- In other words, we shouldn't really use the sigmoid activation function unless our data $y$ is between $0$ and $1$
- In this case, we would only use the sigmoid function for the output layer and maybe use tanh functions for our hidden layers

### Motivating the Vanishing Gradient Problem
- Many functions, such as the sigmoid and tanh functions, have a problem with a vanishing gradient
- This problem occurs for activation functions that map the real number line onto a small range, such as $(0,1)$ or $(-1,1)$
- As a result, there are large regions of the input space that are mapped to an extremely small range
- In these regions of the input space, even a large change in the input will produce a small change in the output
- Hence, the gradient is vanishing
- Said another way, even a large change in the parameter values for the early layers doesn't have a big effect on the output
- Gradient based methods learn a parameter's value by understanding how a small change in the parameter's value will affect the network's output
- If a change in the parameter's value causes too small of a change in the network's output, then the network just can't learn the parameter effectively
- Consequently, learning becomes slow for these functions

### Introducing the ReLU Activation Function
- The relu formula is defined as the following:

$$ g(x) = \begin{cases} 0 &\text{if } x \le 0 \cr x &\text{if } x > 0 \end{cases} $$

![relu](/img/relu.svg)

- The range of the output is the following:

$$ [0, \infty] $$

- The relu function is one of the most popular activation functions
- The relu function is preferred over the sigmoid and tanh functions
- The relu function doesn't have a problem with a vanishing gradient
- Specifically, it doesn't have the property of *squashing* the input space into a small region
- Even though half of the input space is $0$ for the relu activation function, we usually don't have to worry about the vanishing gradient because $a>0$ for most cases
- Meaning, the relu function is computationally faster than the sigmoid and tanh functions

![reluderivative](/img/derivative_relu.svg)

- The relu function enforces constant derivative values equal to $1$ if $a>0$ and $0$ if $a \le 0$
- This property also makes it faster to learn
- The relu function has the disadvantage of having dying cells, which limits the capacity of the network
- This can be fixed using a variant of the relu, like leaky relu or elu

---

### tldr
- Neural networks are good for nonlinear classification
- Neural networks use activation functions to find nonlinear decision boundaries
- Activation functions are nonlinear functions used to map our data to some space where the data becomes linearly separable
- In other words, we usually apply a linear model to a transformed input $\phi(x)$, instead of applying a linear model to $x$ itself

---

### References
- [Activation Functions](https://www.youtube.com/watch?v=Xvg00QnyaIY&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=30)
- [Post about Linearity in Neural Networks](https://ai.stackexchange.com/a/5494)
- [Post about the Uses of Activation Functions](https://ai.stackexchange.com/a/5521)
- [Feedfoward and Multi-Layer Perceptron Networks](http://www.deeplearningbook.org/contents/mlp.html)
- [Activation Function Wiki](https://en.wikipedia.org/wiki/Activation_function)
- [Purpose of Activation Functions](https://stats.stackexchange.com/a/236386)
- [Benefits of the ReLU Activation Function](https://stats.stackexchange.com/questions/126238/what-are-the-advantages-of-relu-over-sigmoid-function-in-deep-neural-networks)
- [Vanishing Gradient Problem](https://www.quora.com/What-is-the-vanishing-gradient-problem)
- [How ReLU solves the Vanishing Gradient Problem](https://www.quora.com/How-does-the-ReLu-solve-the-vanishing-gradient-problem)
