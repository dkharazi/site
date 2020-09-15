---
title: "Introducing Perceptrons"
draft: false
weight: 2
katex: true
---

### Defining Perceptrons
- A perceptron is a neuron
- A perceptron takes in several inputs $x_{1}, x_{2}, ..., x_{n}$
	- These input could be binary values or real-valued inputs
- A perceptron returns a single binary output $y$:

$$ y \in \lbrace 0,1 \rbrace $$

- A perceptron is a function that returns the weighted sum function of inputs and weights

$$ \sum_{j=1}^{n}w_{j}x_{j} $$

- The perceptron's output is determined by whether the weighted sum is less than or greater than some *threshold value*

$$ y = \begin{cases} 0 &\text{if } \sum_{j}w_{j}x_{j} \leq \text{ threshold} \cr 1 &\text{if } \sum_{j}w_{j}x_{j} > \text{ threshold} \end{cases} $$

### Illustrating Perceptrons
- We can think of our previously defined perceptron as the following:
	- $x_{i}$ is our input
	- $w_{i}$ is our weight
	- The weighted sum function is our transfer function
	- The threshold evaluation function is our activation function
	- $y$ is our output

![perceptron](/img/perceptron.svg)

- We can see that the threshold evaluation function is the same as a step function that outputs 0 or 1 depending on the threshold
- There are many different ways to illustrate a perceptron
- Sometimes, we don't want to write out all of the weights and functions
- Therefore, we typically assume some of the notation from the diagram above
- As a result, we can also illustrate a perceptron as the following:
	- $x_{i}$ is our input
	- $w_{i}$ is our weight
	- The weighted sum function is our transfer function
	- The threshold evaluation function can be more generally respresented as $f$, which represents some activation function
	- $y$ is our output

![neuron](/img/neuron.svg)

### Perceptron Analogy 
- Let's say there is a wine festival coming up this weekend
- We may make our decision by weighing up three factors:
	1. Is the weather good?
	2. Do we like wine?
	3. Are we going with friends?
- We can represent these three factors as binary variables $x_{1}, x_{2},$ and $x_{3}$
	- $x_{1} = 1$ if the weather is good
	- $x_{2} = 1$ if we like wine
	- $x_{3} = 1$ if we go with friends
- Now, let's say the following are true:
	- We're hoping for the weather to be good
	- We absolutely love wine
	- We'd prefer to go with friends, but wouldn't mind going alone
- In this case, we could set our weights to the following:
	- $w_{1} = 4$
	- $w_{2} = 6$
	- $w_{3} = 2$
- We can see that a larger value of $w_{i}$ indicates how important that variable is to us
- Finally, suppose we choose a threshold of 5
- With these choices, the perceptron implements the desired decision-making model
- Specifically, the perceptron will output a 1 if:
	- We like wine
	- We don't like wine, but the weather is good and we go with friends
- By varying the weights and threshold, we can get different models of decision-making
- Dropping the threshold means we're generally more willing to go to the festival
- Increasing all of the weights means we're generally more willing to go to the festival
- Increasing only one weight means we're more willing to go to the festival based on that one variable

### Multilayer Perceptron
- Multilayer perceptrons are referred to as neural networks
- In other words, a neural network is a network of perceptrons

![NeuralNetwork](/img/neuralnet.svg)

- In this network, the first *layer* of perceptrons is making three decisions
- These three decisions are made based on five inputs each
- The output of these decisions are used in the second layer
- In other words, the decision made from our first layer influence each of the four decisions made in our second layer
- The multiple output arrows are merely a useful way of indicating that the output from a perceptron is being used as the input to several other perceptrons
- Specifically, each of those perceptrons in the second layer is making a decision by weighing up the results from the first layer of decision-making
- By doing this, a perceptron in the second layer can make a decision at a more abstract level than the perceptrons in the first layer
- And, even more complex decision can be made by the perceptron in the third layer
- In other words, the more layers we add in our neural net, the more complex and abstract our decision-making becomes

### Referring to Bias
- We can simplify our notion of perceptrons even further
- The condition $\sum_{j}w_{j}x_{j}$ is cumbersome, and we can make two notational changes to simplify it
1. We can describe the weighted sum of squares using dot products instead
	$$ w \cdot x \equiv \sum_{j=1}^{n}w_{j}x_{j} $$
	- Where $w$ is the vector of weights
	- Where $x$ is the vector of inputs
2. Move the threshold to the other side of the inequality and replace it with what's known as the perceptron's *bias*
	$$ \text{output} = \begin{cases} 0 &\text{if } w \cdot x + b \leq 0 \cr 1 &\text{if } w \cdot x + b > 0
\end{cases} $$
	- Where $b \equiv -\text{threshold}$
- We can think of the bias as a shift or adjustment to our decision boundary
- We can also think of the bias as a measure of how easy it is to get the perceptron to output a $1$
- If the bias is very positive, then it is very easy for the perceptron to output a $1$
- If the bias is very negative, then it is very difficult for the perceptron to output a $1$

---

### tldr
- A perceptron is a single neuron, which is a function
- Meaning, a perceptron receives some input
- And, a perceptron returns an output

---

### References
- [Using Neural Nets to Recognize Handwriting](http://neuralnetworksanddeeplearning.com/chap1.html)
- [Introduction to Neural Nets Video](https://www.youtube.com/watch?v=aircAruvnKk&t=108s)
