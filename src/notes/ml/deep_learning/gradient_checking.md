---
title: "Gradient Checking"
draft: false
weight: 19
katex: true
---

### Motivating Numerical Approximation of Gradients
- Sometimes we want to verify that our implementation of backward propagation is correct
- For these situations, we can perform *gradient checking*
- Gradient checking requires us to have numerical approximations of our gradients
- Therefore, we need to make numerical approximations of our gradients before we perform gradient checking

### Why are Approximations Needed?
- The first question that comes to mind is: why do we need to approximate derivatives at all?
- Shouldn't we know how to analytically differentiate functions?
- The following are some reasons:
	- We usually don't know the exact underlying function
	- We may be interested in studying changes in the data
	- We have an exact formula available, but it's too complicated

### Defining Gradient Approximation
- When approximating changes in our cost function $J$ with respect to any parameter $\theta$, we should do the following:
	1. Nudge them by a tiny amount $\epsilon$ in each direction
	2. Calculate the following change:

$$
g(\theta) \approx \frac{f(\theta + \epsilon)-f(\theta - \epsilon)}{2\epsilon}
$$

### Defining Gradient Checking
1. Reformat $W^{[1]}, b^{[1]}, ..., W^{[L]}, b^{[L]}$ into vectors
	- Where the matrix $W^{[i]}$ becomes a vector
	- Where the vector $b^{[i]}$ remains a vector
2. Reformat $dW^{[1]}, db^{[1]}, ..., dW^{[L]}, db^{[L]}$ into vectors
	- Where the matrix $W^{[i]}$ becomes a vector
	- Where the vector $b^{[i]}$ remains a vector
3. Concatenate the new parameter vectors into one big vector $\theta$
	- Where the vectorized $W^{[1]}, b^{[1]}, ..., W^{[L]}, b^{[L]}$ are concatenated into one big vector $\theta$
4. Concatenate the new derivative vectors into one big vector $d\theta$
	- Where the vectorized $dW^{[1]}, db^{[1]}, ..., dW^{[L]}, db^{[L]}$ are concatenated into one big vector $d\theta$
5. Approximate gradients using gradient approximation
	- Where $d\theta_{approx}$ represents our gradient using approximation
	- Where $d\theta_{approx}$ is a formula that is based on $\theta$
	- Where the approximated gradients for $\theta_{i}$ are concatenated together into the big vector $d\theta_{approx}$
6. Check if $d\theta \approx d\theta_{approx}$ 
	- This is a check to see if $d\theta$ is the gradient of $J(\theta)$
	- If not, then there might be a bug in our code
	- We use the euclidean distance to compute the similarity of these two vectors $d\theta$ and $d\theta_{approx}$
	- Then, we normalize the similarity score
	- Specifically, we calculate the following:
	$$
	\frac{\Vert d\theta_{approx} - d\theta \Vert_{2}}{\Vert d\theta_{approx} \Vert_{2} + \Vert d\theta \Vert_{2}}
	$$
7. Evaluate the similarity score
	- Typically, we'll use an $\epsilon=10^{-7}$ for gradient checking
	- An output $\approx 10^{-7}$ is great, meaning they're the same
	- An output $\approx 10^{-5}$ is okay, meaning they basically the same, but might need double checking
	- An output $\approx 10^{-3}$ or smaller is concerning, meaning there is most likely a bug in our backward propagation code

### Gradient Checking Implementation Footnotes
- Gradient Checking should be used for debugging purposes only
	- It should not be used in training
	- Specifically, we should only calculate $d\theta$ in training
	- Afterwards, we would calculate $d\theta_{approx}$
	- Then, we'd compare $d\theta$ and $d\theta_{approx}$
	- We would never make this comparison during training, since this would destroy the training performance
- If gradient checking fails, then look at components to identify a bug
	- In other words, we should look at certain areas of the vector representing different layers or parameters
	- For example, we should look compare $d\theta_{[i]}$ and $d\theta_{approx[i]}$ if there is a bug
	- Then, we may find that areas representing $db^{[l]}$ aren't similar, whereas all the areas representing $dw^{[l]}$ are similar
- Remember to include regularization
	- If $J(\theta)$ includes a regularization term, then $d\theta_{approx}$ needs to reflect the regularization term as well
- We can't approximate gradients easily with dropout

---

### tldr
- Sometimes we want to verify that our implementation of backward propagation is correct
- For these situations, we can perform *gradient checking*
- Gradient checking requires us to have numerical approximations of our gradients
- Therefore, we need to make numerical approximations of our gradients before we perform gradient checking
- We'll want to approximate our derivatives to double-check that our gradients in the backward propagation implementation are correct

---

### References
- [Gradient Checking](https://www.youtube.com/watch?v=QrzApibhohY&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=13)
- [Numerical Approximation of Gradients](https://www.youtube.com/watch?v=y1xoI7mBtOc&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=12)
- [Numerical Differentiation](http://www2.math.umd.edu/~dlevy/classes/amsc466/lecture-notes/differentiation-chap.pdf)
