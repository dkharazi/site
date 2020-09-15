---
title: "Vanishing Gradient"
draft: false
weight: 16
katex: true
---

### Motivating the Problem with Vanishing Gradients
- We know that adding more layers to a network will lead to slower training
- However, our network can grow so deep that training becomes too slow
- Sometimes, our network can even become less accurate compared to smaller networks
- In this case, a layer can train slower compared to other layers based on its order in the network
- Specifically, neurons in earlier layers learn slower than neurons in later layers
- For example, our first hidden layer typically trains slower than our second hidden layer

### The Vanishing Gradient Problem
- Sometimes, the gradients of later hidden layers become very small
	- As a reminder, this doesn't necessarily mean we're at a global extremum
	- We could be at a plateau in this case
- As a result, the gradients of the earlier hidden layers sometimes become small in a deep network
	- This is because deep networks heavily use the chain rule in backward propagation
- In this case, the neurons in earlier layers learn much slower than neurons in later layers
- This phenomenon is referred to as *the vanishing gradient problem*
- In other words, the vanishing gradient problem refers to when neurons in earlier layers learn much slower than neurons in later layers as a consequence of gradients of the later layers being small

### Visual Interpretation of the Vanishing Gradient Problem
- The cost function of a neural network is neither convex nor concave
- As a result, the vanishing gradient problem can occur throughout the learning process
- We can use a contour plot to visualize the behavior of our cost function:

![contourgradient](/img/contour_gradient.svg)

- Roughly speaking, if we see points where the cost function becomes elongated or plateaued, then we will experience the vanishing gradient problem:

![plateaucost](/img/cost_plateau.svg)

- In comparison, a more optimal shape looks like the following:

![optimalcost](/img/cost_optimal.svg)

- In both situations, the gradients become smaller near the minimum
- Meaning, the learning speed becomes slower near the minimum
- However, the latter image has a larger gradient, and consequently converges much faster
- In summary, we experience the vanishing gradient problem if we're at these plateaus

### Why do Earlier Layers Learn Slower
- We know that the learning rate of a layer slows down if the gradient of that layer becomes small
- We also know that the vanishing gradient problem occurs if the learning rate of earlier layers slows down if gradients of laters layers become small
- Naturally, we should wonder why the learning rate of a layer slows down if the partial derivatives of the later layers slow down
- This happens in deep networks because backward propagation uses the chain rule
- Specifically, the chain rule is dependent on the partial derivatives of the following layers
- Deeper networks are dependent on more later layers
- Specifically, the partial derivatives of the earlier layers are made up of very many multiplications of the partial derivatives of the later layers
- If these multiplications are small enough (near $0$), then the partial derivatives of the earlier layers will become small as well

### Visual Interpretation of Slower Learning for Earlier Layers
- We know that the learning rate of a layer slows down if the partial derivatives of the later layers become smaller
- Mathematically, we've seen this using the chain rule in backward propagation for earlier layers in a deep network
- Visually, we can interpret this vanishing gradient problem as getting stuck at plateaus
- In other words, we're less prone to escape these plateaus once we arrive at them
- In gradient descent, getting stuck at these plateaus makes it difficult to make any progress
- This is because the gradient of the earlier layer becomes so small for a deep network
- We can see this in the following example:

![plateausimulation](/img/plateau_simulation.svg)

- Visually, we can interpret an exploding gradient as approaching gradient cliffs, which launches parameters into space
- In summary, the vanishing gradient problem refers to getting stuck at these plateaus, where it's difficult to many any progress because learning of earlier layers is so slow (but not theoretically impossible)

### Influences on the Vanishing Gradient Problem
- Again, the vanishing gradient problem is caused by many multiplications of small partial derivatives
- The number of multiplications is obviously influenced by the deepness of our network
- The smallness of partial derivatives is influenced by the choice of activation function
- Therefore, both the activation function and deepness of our network influence the vanishing gradient problem
- In other words, the vanishing gradient problem is a consequence of the deepness of our network, which can be observed mathematically using the chain rule in backward propagation
- The vanishing gradient problem is also a consequence of the activation function, which can be observed by swapping to another activation function (such as ReLU)

### Influence of Activation Functions
- The sigmoid function is useful because it *squeezes* any input value into an output range of $(0,1)$
- This is perfect for representing output as probabilities
- However, if a function has a small enough range, then the derivatives of that function will be relatively small as well
- Therefore, these types of activation functions suffer from the vanishing gradient problem
- For example, the distribution of derivatives looks like the following:

![derivativedistribution](/img/sigmoid_derivatives.svg)

- We can see the maximum point of the function is $0.25$, which is very small
- In other words, the output of the derivative of the cost function is always between $0$ and $0.25$
- This is why we should never model probabilities by chaining together sigmoid activation functions
- In these situations, we should use activation functions that output larger derivatives for our hidden layers, then use a sigmoid or tanh activation function for our output layer

### Example of Slow Sigmoid Learning
- Recall that the derivative of the sigmoid function outputs values between $0$ and $0.25$
- For a shallow network, we calculate the derivative of our first hidden layer:

$$ \frac{\partial J(w,b)}{\partial w^{1}} = \overbrace{\frac{\partial J(w,b)}{\partial a^{i}}}^{<\frac{1}{4}} \overbrace{\frac{\partial a^{i}}{\partial z^{3}}}^{<\frac{1}{4}} \overbrace{\frac{\partial z^{3}}{\partial a^{2}}}^{<\frac{1}{4}} \overbrace{\frac{\partial a^{2}}{\partial z^{2}}}^{<\frac{1}{4}} \overbrace{\frac{\partial z^{2}}{\partial a^{1}}}^{<\frac{1}{4}} \overbrace{\frac{\partial a^{1}}{\partial z^{1}}}^{<\frac{1}{4}} \overbrace{\frac{\partial z^{1}}{\partial w^{1}}}^{<\frac{1}{4}} \to 0 $$

- Here, we are multiplying four values between $0$ and $1$
- This will become very small very fast
- A deep network would become very small even faster
- We can see the first layer is the furthest back
- Thus, the derivative is a longer expression using the chain rule
- Hence, it will depend on more sigmoid derivatives
- This makes it smaller
- Because of this, the first layers are the slowest to train
- Since the output and layer layers are dependent on the earlier layers in forward propagation, the inaccurate early layers will cause the layer layers to build on this inaccuracy
- As a result, the entire neural network will become inaccurate

### Using a ReLU Activation Function
- The relu activation function doesn't suffer as much from the vanishing gradient problem
- The relu function is defined as the piecewise function:

$$ relu(x) = \begin{cases} 0 &\text{if } x \le 0 \cr x &\text{if } x > 0 \end{cases} $$

- The function will output $0$ if the input is smaller than $0$
- Otherwise, the function will mimic the identity function
- The derivative of the function is the following:

$$ \frac{\partial relu(x)}{\partial x} = \begin{cases} 0 &\text{if } x \le 0 \cr 1 &\text{if } x > 0 \end{cases} $$

- We can see the relu function won't suffer from the vanishing gradient problem as much as other activation functions
- This is because the output is either a $0$ or a $1$, instead of a small decimal for a majority of the time
- In other words, the output of the sigmoid function is saturated by small decimals, which doesn't happen with the relu function

### The Unstable Gradient Problem
- The fundamental problem here isn't so much *the vanishing gradient problem* or *the exploding gradient problem*
- It's that the gradient in early layers is the product of terms from all the later layers
- Where there are many layers, this becomes an unstable situation
- The only way all layers can learn at close to the same speed is if all those products of terms come close to balancing out
- Without some mechanism or underlying reason for that balancing to occur, it's highly unlikely to happen simply by chance
- In short, the real problem here is that neural networks suffer from an *unstable gradient problem*
- As a result, if we use standard gradient-based learning techniques, different layers in the network will tend to learn at wildly different speeds

---

### tldr
- Sometimes, the gradients of later hidden layers become very small
- As a result, the gradients of the earlier hidden layers sometimes become small in a deep network
- In this case, the neurons in earlier layers learn much slower than neurons in later layers
- The vanishing gradient problem refers to when neurons in earlier layers learn much slower than neurons in later layers as a consequence of gradients of the later layers being small 
- In other words, the vanishing gradient problem is a consequence of the following:
	- Activation function
	- Deepness of a network
- The deepness of a network can be observed mathematically using the chain rule in backward propagation
- The deepness of a network influences the number of partial derivatives multiplied together in the chain rule
- The activation function influences the smallness of any partial derivatives
- Therefore, both the activation function and deepness of our network influence the vanishing gradient problem
- In other words, the vanishing gradient problem is a consequence of the deepness of our network, which can be observed mathematically using the chain rule in backward propagation
- The vanishing gradient problem is also a consequence of the activation function, which can be observed by swapping to another activation function (such as ReLU)
---

### References
- [Vanishing and Exploding Gradient](https://www.youtube.com/watch?v=qhXZsFVxGKo&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=10)
- [The Problem with Local Optima](https://www.youtube.com/watch?v=fODpu1-lNTw&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=33)
- [The Problems Caused by Vanishing Gradients](https://www.youtube.com/watch?time_continue=22&v=SKMpmAOUa2Q&feature=emb_title)
- [The Chain Rule and Vanishing Gradient](https://kkpatel7.files.wordpress.com/2015/04/alppaydin_machinelearning_2010.pdf)
- [Why are Deep Neural Networks Hard to Train?](http://neuralnetworksanddeeplearning.com/chap5.html#the_vanishing_gradient_problem)
- [Blog Post about the Vanishing Gradient Problem](https://ayearofai.com/rohan-4-the-vanishing-gradient-problem-ec68f76ffb9b)
- [Intuition benhind Vanishing Gradient](https://stats.stackexchange.com/a/369490)
- [Why is Vanishing Gradient a Problem?](https://datascience.stackexchange.com/questions/19344/why-is-vanishing-gradient-a-problem)
- [Batch Normalization and Vanishing Gradients](https://www.quora.com/Why-does-Batch-Normalization-for-deep-Neural-Networks-fix-the-vanishing-gradient-problem)
- [ReLU and Vanishing Gradients](https://www.quora.com/How-does-the-ReLu-solve-the-vanishing-gradient-problem)
- [Causes of Vanishing Gradients](https://stats.stackexchange.com/questions/432300/help-understanding-vanishing-and-exploding-gradients)
- [Visualizing Saddle Points](https://blog.paperspace.com/intro-to-optimization-in-deep-learning-gradient-descent/)
