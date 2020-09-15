---
title: "Feedforward Networks"
draft: false
weight: 5
katex: true
---

### Introducing Feedforward Networks
- Up to now, we've been discussing neural networks where the output from one layer is used as input to the next layer
- These multilayer perceptrons are *feedforward* neural networks
- These models are called feedforward because information from $x$ flows through the intermediate computations defined by a function $f$ to produce the output $y$
- In other words, information is only fed forward and never fed back
- Networks that include feedback connections are called *recurrent* neural networks

### Motivating Feedforward Networks
- We assume that data is created by a data-generating process
- A data-generating process is the unknown, underlying phenomenon that creates the data
- This data-generating process is modeled by a true function
- We'll refer to this true function as $f^{*}$

### Defining Feedforward Networks
- The goal of a feedforward network is to approximate some unknown function $f^{*}$ with $f$
- In this case, $f^{*}$ is the unknown, optimal classifier that maps an input $x$ to a category $y$
- In this case, $f$ is a known, approximated classifier that maps an input $x$ to a category $y$
- In other words, we estimate $f^{*}(x)$ with $f(x;\theta)$
- A feedforward network defines a mapping $y=f(x;\theta)$ and learns the value of the parameters $\theta$ that result in the best function approximation

### Representing Feedforward Networks
- Feedforward networks are typically represented by composing together many different functions
- For example, the output values of our feedforward network may be defined as a chain of three functions:

$$ f(x) = f^{3}(f^{2}(f^{1}(x))) $$

- Where $f^{1}$ is called the first hidden layer
- Where $f^{2}$ is called the second hidden layer
- Where $f^{3}$ is called the output layer

### Training Feedforward Networks
- $f$ models the training data
- $f$ does not model the data-generating process
- $f^{*}$ models the data-generating process
- We want $f(x)$ to match $f^{*}(x)$
- The training data provides us with noisy, approximate examples of $f^{*}(x)$ evaluated at different training points
- Each example $x$ is accompanied by a label $y \approx f^{*}(x)$
- In other words, we hope that the training data $x$ produce training labels $y$ that are close to $f^{*}(x)$

### Training Layers of Feedforward Networks
- The training data directly specifies what the output layer must do at each point $x$
- The goal of the output layer is to produce a value that is close to $y$
- We don't want the output layer to produce a value that is always equal to $y$, since we would be overfitting the noise
- The behavior of the other layers (i.e. hidden layers) is not directly speciﬁed by the training data
- The goal of the hidden layers is not to produce a value that is close to $y$
- Instead, the goal of the hidden layers is to help the output layer produce a value that is close to $y$
- In other words, the learning algorithm must decide how to use these hidden layers to best implement an approximation of $f^{*}$
- These layers are called *hidden layers* because the training data does not show the desired output for each of these layers

### Learning Nonlinear Functions
- Sometimes our $y$ is a nonlinear function of $x$
- In this case, we will want to transform $x$ so that $y$ becomes a linear function of $x$
- We will usually want to apply the linear model to a transformed input $\phi(x)$, instead of applying a linear model to $x$ itself
	- Here, $\phi$ is a nonlinear transformation
- We can think of $\phi$ as a new representation of $x$
- We can choose the mapping $\phi$ by using:
	1. Generic feature mapping $\phi$ implicitely used in kernel functions
		- These generic feature mappings are usually generalizations
		- These generalizations usually produce poor predictions on a test set
	2. Manually engineered $\phi$ functions
		- Until the advent of deep learning, this was the dominant approach
		- It requires decades of human effort for each separate task
	3. Activation function used in deep learning
		- The strategy of deep learning is to learn $\phi$:
		$$ y = f(x;\theta,w) = \phi(x;\theta) $$
		- In this approach, we now have the following:
			- Parameters $\theta$ that we use to learn $\phi$
			- Parameters $w$ that map from $\phi(x)$ to the desired output
		- This is an example of a deep feedforward network

### Feature Mapping using Activation Functions
- This approach is the only one of the three that gives up on the convexity of the training problem, but the benefits outweigh the harms
- In this approach, we parametrize the representation as $\phi(x;\theta)$
- And, we use the optimization algorithm to find the $\theta$ that corresponds to a good representation
- If we wish, this approach can capture the benefit of the first approach by being highly generic
	- We do this by using a very broad family $\phi(x;\theta)$
- Deep learning can also capture the benefit of the second approach by providing model customization
	- Human practitioners can encode their knowledge to help generaliziation by designing families $\phi(x; \theta)$ that they expect will perform well
	- The advantage is that the human designer only needs to find the right general function family, rather than precisely the right function

---

### tldr
- When we want to find nonlinear decision boundaries, we transform $x$ so that $y$ becomes a linear function of $x$
- We will usually want to apply the linear model to a transformed input $\phi(x)$, instead of applying a linear model to $x$ itself
- Feedforward networks are multilayer perceptrons are *feedforward* neural networks where input data $x$ goes through functions $f$ to produce the output $y$
- Data in feedforward networks are never fed backwards

---

### References
- [Feedfoward and Multi-Layer Perceptron Networks](http://www.deeplearningbook.org/contents/mlp.html)
- [Architecture of Feedforward Networks](http://neuralnetworksanddeeplearning.com/chap1.html#the_architecture_of_neural_networks)
- [Lecture about Data-Generating Processes](https://cs230.stanford.edu/section/7/)
- [Blog Post about True Models](https://forecasting.svetunkov.ru/en/2016/06/25/true-model/)
