---
title: "Mini-Batch Gradient Descent"
draft: false
weight: 21
katex: true
---

### Motivating Mini-Batch Gradient Descent
- The key advantage of using mini-batch as opposted to batch goes back to the fundamental idea of stochastic gradient descent
- In batch gradient descent, we compute the gradient over the entire dataset, averaging over a potentially vast amount of data
- The disadvantages of this are the following:
	- This involves using a lot of memory
	- We're more likely to land on saddle points
- In stochastic gradient descent, we update parameters for each single instance of training data
- Since it's based on one random data point, learning becomes very noisy and we may go off in a direction far from the batch gradient
- However, we need some degree of noisiness in non-convex optimization
- This is because we're more likely to escape from local minima and saddle points
- The obvious distadvantage of SGD is its poor efficiency
- In most cases, we would need to loop over the entire dataset many time to find a good solution
- The mini-batch methodology is a compromise that injects enough noise to each gradient update, while achieving a relative speedy convergence

### Describing Mini-Batch Gradient Descent
- Mini-batch gradient descent is a type of gradient descent algorithm
- It involves splitting the training dataset into small batches
- Then, those small batches are used to find gradients and update parameters
- We need to tune a new hyperparameter for mini-batch gradient descent $m$
- Here, $m$ represents the amount of observations in each sample (or miniature batch)
- Mini-batch gradient descent attempts to find a balance between the robustness of stochastic gradient descent and the efficiency of batch gradient descent
- It is the most common implementation of gradient descent

### Defining Mini-Batch Gradient Descent
1. Split our vector of predictor data $X$ into samples
	- Where $X$ is a $p \times n$ matrix
	$$ X_{p \times n} = [\space \vec{x}_{1} \space \vec{x}_{2} \space ... \space \vec{x}_{1000} \space | \space \vec{x}_{1001} \space \vec{x}_{1002} \space ... \space \vec{x}_{2000} \space | \space ... \space | \overbrace{\space ... \space \vec{x}_{n}}^{m^{th} \text{ minibatch}} ] $$
	$$ \vec{x}_{i} = [x_{1} \space x_{2} \space x_{3} \space ... \space x_{p}] $$
	- Where $p$ represents the number of predictors associated with an observation
	- Where $n$ represents the number of observations
	- Where $m$ represents the number of minibatches
	- Where $x_{i}$ represents a single observation in a training set
	- These samples represent miniature batches
	- The number of observations in each sample is represented using the hyperparameter $m$
2. Split our vector of response data $Y$ into samples
	- Where $Y$ is a $1 \times n$ matrix
	$$ Y_{1 \times n} = [\space y_{1} \space y_{2} \space ... \space y_{1000} \space | \space y_{1001} \space y_{1002} \space ... \space y_{2000} \space | \space ... \space | \overbrace{\space ... \space y_{n}}^{m^{th} \text{ minibatch }} ] $$
	- Where $n$ represents the number of observations
	- Where $m$ represents the number of minibatches
	- Where $y_{i}$ represents a single obeservation in a training set
	- These samples represent miniature batches
	- The number of observations in each sample should match the number of observations in each sample from $X$
3. Choose one minibatch 
	- In other words, focus on a $t^{th}$ minibatch from all of the $m$ minibatches for now
	- For now, let's say $m=5000$ as an example
	- Let's also say each $t^{th}$ minibatch has $1000$ training observations
4. Perform regular batch gradient descent on minibatch $t$
	- Perform forward propagation on $X^{\lbrace t \rbrace}$
	$$ Z^{[1]} = W^{[1]} X^{\lbrace t \rbrace} + b^{[1]} $$
	$$ A^{[1]} = g^{[1]}(Z^{[1]}) $$
	$$ ... $$
	$$ Z^{[L]} = W^{[L]} A^{[L-1]} + b^{[L]} $$
	$$ A^{[L]} = g^{[L]}(Z^{[L]}) $$
	- Evaluate the cost function
	$$ J^{\lbrace t \rbrace} = \frac{1}{1000} \sum_{i=1}^{l} \mathcal{L}(\hat{y}^{(i)}, y^{(i)}) + \frac{\lambda}{2 \times 1000} \sum_{i=1}^{l} \Vert w^{[l]} \Vert_{F}^{2} $$
	- Perform backward propagation
	$$ W^{[l]} = W^{[l]} - \alpha \frac{\partial J}{\partial w^{[l]}} $$
	$$ b^{[l]} = b^{[l]} - \alpha \frac{\partial J}{\partial b^{[l]}} $$
5. Iterate through the remaining minibatches
	- Perform steps $3-4$ on each of the $m$ minibatches

### Defining Notation
- $(i)$ used in $x^{(i)}$ represents the index of a training set observation
- $[l]$ used in $a^{[l]}$ represents the index of a neural network layer
- $\lbrace t \rbrace$ used in $X^{\lbrace t \rbrace}$ represents the index of a minibatch
- A single *epoch* represents a single pass through a training set
- For example, a single epoch refers to taking only one gradient descent step for batch gradient descent
- A single epoch refers to taking $m$ amount of gradient descent steps for mini-batch gradient descent

### General Upsides
- Mini-batch gradient descent involves robust parameter convergence
	- Mini batch gradient descent is more robust compared to batch gradient descent
	- The parameter convergence manages to avoid local minima more often
	- This happens because the parameters are updated more frequently
	- This adds a degree of noisiness to our learning process
	- We need some degree of noisiness in non-convex optimization to avoid local minima
- Mini-batch gradient descent is computationally efficient
	- It is more efficient than stochastic and batch gradient descent
	- Training speed for batch gradient descent is too slow because each iteration is too slow
	- On the other hand, training speed for stochastic gradient descent is too slow because we need to run more iterations usually
- Mini-batch gradient descent doesn't require all training data in memory
	- This is more efficient and better for memory
	- This is partially because vectorizing our parameters into a big vector $\theta$ allows us to efficiently compute on $m$ samples

### General Downsides
- Mini-batch requires the tuning of additional hyperparameters
	- Specifically, it requires tuning of an additioanl *mini-batch size* hyperparameter for the learning algorithm
- Mini-batch involves more steps in its algorithm
	- Gradient information must be accumulated across mini-batches of training examples

### Implementing Mini-Batch Gradient Descent
- The use of large mini-batches increases the available computational parallelism
- However, we should typically prefer small batch sizes
- This is because small batch sizes provide improved generalization performance
- The best performance has been consistently obtained for mini-batch sizes between $m=2$ and $m=32$
- This contrasts with recent work advocating the use of mini-batch sizes in the thousands

---

### tldr
- The mini-batch methodology is a compromise that injects enough noise to each gradient update,
 while achieving a relative speedy convergence
- In other words, mini-batch finds a balance between batch and stochastic gradient descent
- The mini-batch algorithm refers to splitting training data into samples and performing parameter updates on each sample using the gradient descent algorithm we're all used to
- Mini-batch gradient descent is the most popular type of gradient descent method

---

### References
- [Mini-Batch Gradient Descent](https://www.youtube.com/watch?v=4qJaSmvhxi8&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=15)
- [Why Mini-Batch Size is Better than a Single Batch](https://datascience.stackexchange.com/questions/16807/why-mini-batch-size-is-better-than-one-single-batch-with-all-training-data)
