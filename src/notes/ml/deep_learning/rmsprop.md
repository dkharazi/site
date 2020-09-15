---
title: "RMSProp"
draft: false
weight: 24
katex: true
---

### Introducing Gradient Descent with RMSprop
- RMSProp stands for root mean squared prop
- Gradient descent with rmsprop is almost always faster than the standard gradient descent algorithm
- Essentially, gradient descent with rmsprop involves computing an exponentially weighted average of the gradients
- Then, we would use those weighted gradients to update our parameters, instead of using the standard gradients

### Motivating RMSProp
- Let's say we're performing standard gradient descent to optimize our parameters $w$ and $b$
- After running many iterations, our contour could look like:

![contourrmsprop](/img/unnormalized_contour.svg)

- Note, the darkness of the contour represents a smaller cost $J$
- Although we're able to find the optimal parameters by minimizing the cost function, we can imagine that gradient descent is slowed down due to the up and down oscillations
- This is slowed down for two reasons:
        1. We're not able to use a larger learning rate, since there's a better chance of overshooting the global minimum
        2. The small steps lead us to focus too much on moving up and down relative to the minimum, rather than sideways toward the minimum
- Mitigating the first problem involves scaling our data properly
- For now, let's focus on the second problem
- We can mitigate the second problem by slowing any of the *up and down* learning, while speeding up the *sideways* learning towards the global minimum
- This is accomplished using gradient descent with rmsprop

### Defining Gradient Descent with RMSProp
1. Compute $dW$ and $db$ on the current mini-batch $t$
	- Where $dW = \frac{\partial J(w,b)}{\partial w}$
	- Where $db = \frac{\partial J(w,b)}{\partial b}$
2. Update each $w$ parameter as the following:

$$ v_{t} = \beta v_{t-1} + (1-\beta)dW^{2} $$
$$ W_{t} = W_{t-1} - \alpha \frac{dW}{\sqrt{v_{t}} + \epsilon} $$

3. Update each $b$ parameter as the following:

$$ v_{t} = \beta v_{t-1} + (1-\beta)db^{2} $$
$$ b_{t} = b_{t-1} - \alpha \frac{db}{\sqrt{v_{t}} + \epsilon} $$

4. Repeat the above steps for each $t^{th}$ iteration of mini-batch
	- Note that our hyperparameters are $\alpha$ and $\beta$ here

### Interpreting Gradient Descent with RMSProp
- Note, the $dW^{2}$ is an element-wise operation, since $W$ represents a vector of weights
- Also note, $\epsilon$ represents some small number that ensures numerical stability
	- The default value of this is typically $\epsilon = 10^{-8}$
	- This value is essentially negligable for interpretation purposes
- Essentially, we're taking the benefit of smoothness by applying exponential weights to our gradient descent function
- Therefore, the steps should become smoother as we increase $\beta$
- This is because we're averaging out the previous steps iterations
- As a result, we shouldn't be bouncing up and down around the same parameter value as much, since the average of these partial derivatives are essentially $0$
- And, we should be quickly moving sideways towards the optimal parameter value, since the average of these partial derivatives are much larger than $0$
- We're also gaining a smoothness benefit from $\frac{dW}{\sqrt{v_{t}}}$ and $\frac{db}{\sqrt{v_{t}}}$
- This is because we will get a *dampening-out* effect if $\sqrt{v_{t}}$ is large
- On the other hand, we will quickly gravitate toward the optimal parameter values if $\sqrt{v_{t}}$ is small

---

### tldr
- Gradient descent with rmsprop can be thought of as standard gradient descent that has been given a short-term memory
- Gradient descent with rmsprop attempts to average out the oscillations around the same value (in a given direction) by apply exponentially weighted averages to standard gradient descent
- It also gains a smoothness benefit from updating parameters using the $\frac{dW}{\sqrt{v_{t}}}$ and $\frac{db}{\sqrt{v_{t}}}$ terms
- Gradient descent with rmsprop is almost always faster than the standard gradient descent algorithm

---

### References
- [RMSProp](https://www.youtube.com/watch?v=_e-LFe_igno&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=21)
- [RMSProp Lecture Slides](https://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf)
