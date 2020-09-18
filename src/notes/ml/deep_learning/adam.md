---
title: "Adam Optimization"
draft: false
weight: 25
katex: true
---

### Describing Adam Optimization
- Adam stands for *adaptive moment estimation*
- Adam is almost always more performant than the standard gradient descent algorithm
- Adam is an optimization algorithm that essentially combines momentum and rmsprop
- Adam is an extension of mini-batch gradient descent
	- Mini-batch gradient descent is a configuration of stochastic gradient descent
	- Therefore, we'll sometimes see that Adam is an extension of stochastic gradient descent
- Adam uses the hyperparameters $\beta_{v}$, $\beta_{s}$, $\alpha$, and $\epsilon$
- Adam is generally regarded as being fairly robust to the choice of hyper parameters, though the learning rate sometimes needs to be changed from the suggested default

### Defining Adam Optimization
1. Compute $dW$ and $db$ on the current mini-batch $t$
	- Where $dW = \frac{\partial J(w,b)}{\partial w}$
	- Where $db = \frac{\partial J(w,b)}{\partial b}$
2. Update each $w$ parameter as the following:

$$
\begin{aligned} v_{t} = \beta_{v} v_{t-1} + (1-\beta_{v})dW \qquad \rbrace &= \text{momentum} \cr s_{t} = \beta_{s} s_{t-1} + (1-\beta_{s})dW^{2} \qquad \rbrace &= \text{rmsprop} \cr v_{t}^{corrected} = \frac{v_{t}}{1-\beta_{v}^{t}} \qquad \rbrace &= \text{bias correction} \cr s_{t}^{corrected} = \frac{s_{t}}{1-\beta_{s}^{t}} \qquad \rbrace &= \text{bias correction} \end{aligned}
$$

$$
W_{t} = W_{t-1} - \alpha \frac{v_{t}^{corrected}}{\sqrt{s_{t}^{corrected}} + \epsilon}
$$

3. Update each $b$ parameter as the following:

$$
\begin{aligned} v_{t} = \beta_{v} v_{t-1} + (1-\beta_{v})db \qquad \rbrace &= \text{momentum} \cr s_{t} = \beta_{s} s_{t-1} + (1-\beta_{s})db^{2} \qquad \rbrace &= \text{rmsprop} \cr v_{t}^{corrected} = \frac{v_{t}}{1-\beta_{v}^{t}} \qquad \rbrace &= \text{bias correction} \cr s_{t}^{corrected} = \frac{s_{t}}{1-\beta_{s}^{t}} \qquad \rbrace &= \text{bias correction} \end{aligned}
$$

$$
W_{t} = W_{t-1} - \alpha \frac{v_{t}^{corrected}}{\sqrt{s_{t}^{corrected}} + \epsilon}
$$

4. Repeat the above steps for each $t^{th}$ iteration of mini-batch
	- Note that our hyperparameters are $\beta_{v}$, $\beta_{s}$, $\alpha$, and $\epsilon$ here

### Adam Hyperparameters
- The hyperparameter $\beta_{v}$ refers to computing the mean of $dW$
- The hyperparameter $\beta_{s}$ refers to computing the mean of $dW^{2}$
- The hyperparameter $\alpha$ typically needs to be tuned
- The hyperparameter $\epsilon$ is never tuned
- The hyperparameter $\beta_{v}$ typically doesn't need to be tuned
	- The default value is typically left unchanged
	- The default value of $\beta_{v}$ is $0.9$
- The hyperparameter $\beta_{s}$ typically doesn't need to be tuned
	- The default value is typically left unchanged
	- The default value of $\beta_{s}$ is $0.999$

### Interpreting Adam Optimization
- Note, the $dW^{2}$ is an element-wise operation, since $W$ represents a vector of weights
- Also note, $\epsilon$ represents some small number that ensures numerical stability
	- The default value of this is typically $\epsilon = 10^{-8}$
	- This value is essentially negligable for interpretation purposes
- Essentially, we're taking the benefit of smoothness by applying exponential weights to our gradient descent function
- Therefore, the steps should become smoother as we increase $\beta$
- This is because we're averaging out the previous steps iterations
- As a result, we shouldn't be bouncing up and down around the same parameter value as much, since the average of these partial derivatives are essentially $0$
- And, we should be quickly moving sideways towards the optimal parameter value, since the average of these partial derivatives are much larger than $0$
- We're also gaining a smoothness benefit from $\frac{v_{t}^{corrected}}{\sqrt{s_{t}^{corrected}}}$
- This is essentially a ratio of the bias-corrected momentum term to the bias-corrected rmsprop terms
- Therefore, we will get a *dampening-out* effect if:
	- The $\sqrt{s_{t}^{corrected}}$ term is very large
	- The $v_{t}^{corrected}$ term is very small
- On the other hand, we will quickly gravitate toward the optimal parameter values if either of the following are true:
	- The $\sqrt{s_{t}^{corrected}}$ term is very small
        - The $v_{t}^{corrected}$ term is very large

---

### tldr
- Adam optimization can be thought of as standard gradient descent that has been given a short-term memory
- Adam optimization attempts to average out the oscillations around the same value (in a given direction) by apply exponentially weighted averages to standard gradient descent
- It also gains a smoothness benefit from updating parameters using the $\frac{v_{t}^{corrected}}{\sqrt{s_{t}^{corrected}}}$ terms
- Adam optimization is almost always faster than the standard gradient descent algorithm

---

### References
- [Adam Optimization Algorithm](https://www.youtube.com/watch?v=JXQT_vxqwIs&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=22)
