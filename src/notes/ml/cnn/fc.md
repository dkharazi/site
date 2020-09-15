---
title: "Benefits of Convolution"
draft: false
weight: 5
katex: true
---

### More on Fully-Connected Layers
- A fully-connected layer refers to the layers of a neural network that we're familiar with using
- As a reminder, a fully-connected layer refers to a number of neurons that are connected with all of the activations passed from a previous layer
- In other words, a fully-connected layer is used throughout traditional multilayer perceptron neural networks

### Motivating of Convolutional Layers
- Convolutional layers have a benefits over fully-connected layers
- We're interested in the benefits of convolutional layers because the number of parameters within a fully-connected layer tends to grow infeasibly large
- For example, we would need to learn $14$ million parameters from a $32 \times 32$ image in a fully-connected layer
- Specifically, we can learn this amount of parameters
- However, we're typically interested in larger images
- So, learning the parameters from a $1000 \times 1000$ image would become infeasible
- Therefore, we need to rely on convolutional layers for parameter learning, at least until we reduce the dimensionality enough

### Benefits of Convolutional Layers
1. Parameter Sharing
	- This refers to contraining our image to only using the same small set of weights and biases
	- Therefore, parameter sharing only works because we may one reasonable assumption
	- Specifically, we assume that if one filter (or set of parameters) is useful to compute at some region in our image, then it should also be useful to compute at other regions in our image
	- This is why convolutional layers are sometimes referred to as a *locally-connected layer*
	- Obviously, the major benefit of parameter sharing is that we're able to reduce the number of parameters
2. Sparsity of Connections
	- In each layer, each output value depends only on a small number of inputs
	- Here, we're referring to the values of our output image
	- In other words, each value in our output image only depends on small regions within our input image
	- The major benefit of sparsity of connections is that we're able to reduce the number of parameters
	- Another major benefit is that we're less prone to overfitting
	- Again, this is because each output value is only based on a small percentage of the values of the input image
3. Translation Invariance
	- This refers to the ability of a convolutional layer being able to produce the same output if an image is shifted marginally
	- For example, a convolutional layer will tend to produce the same output if an image is shifted a few pixels 
	- Meaning, convolutional layers are very robust

### Training Convolutional Layers
- We need to learn the parameters within any convolutional, pooling, or fully-connected layers
- Therefore, we can just use gradient descent to optimize parameters to reduce our cost function $J$
- We can also use other optimization algorithms (e.g. Adam, etc.)

---

### tldr
- A fully-connected layer refers to the layers of a neural network that we're familiar with using
- As a reminder, a fully-connected layer refers to a number of neurons that are connected with all of the activations passed from a previous layer
- In other words, a fully-connected layer is used throughout traditional multilayer perceptron neural networks
- The following are the major benefits of convolutional layers:
	- Parameter sharing
	- Sparsity of connections
	- Translation invariance

---

### References
- [Convolutional and Fully-Connected Layers](https://www.youtube.com/watch?v=ay3zYUeuyhU&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=11)
- [Parameter Sharing in Convolutional Layers](https://cs231n.github.io/convolutional-networks/#conv)
