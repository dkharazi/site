---
title: "Exponentially Weighted Averages"
draft: false
weight: 22
katex: true
---

### Introducing Exponentially Weighted Averages
- Let's say we have some temperature data $\theta$:

$$ \theta_{1} = 40 \degree\text{F} $$
$$ \theta_{2} = 49 \degree\text{F} $$
$$ ... $$
$$ \theta_{n} = 60 \degree\text{F} $$

- Then our exponentially weighted averages would look like:

$$ v_{0} = 0 $$
$$ v_{1} = 0.9v_{0} + 0.1 \theta_{1} $$
$$ v_{2} = 0.9v_{1} + 0.1 \theta_{2} $$
$$ ... $$
$$ v_{n} = 0.9v_{n-1} + 0.1 \theta_{n} $$

- Which can be simplified to:

$$ v_{0} = 0 $$
$$ v_{1} = 0.9v_{0} + 0.1 \times 40 = 4 $$
$$ v_{2} = 0.9 \times 4 + 0.1 \times 49 = 8.5 $$
$$ ... $$
$$ v_{n} = 0.9v_{n-1} + 0.1 \times 60 $$

- Here, our hyperparameter $\beta = 0.9$
- Here, $\theta_{t}$ represents the $t^{th}$ temperature value
- Here, $v_{t}$ represents the weighted average of the $t^{th}$ temperature value

### Defining Exponentially Weighted Averages
- Exponentially weighted averages are sometimes referred to as exponentially weighted moving averages in statistics
- The general formula for an exponentially weighted average is:

$$ v_{t} = \beta v_{t-1} + (1-\beta) \theta_{t} $$

### Interpreting the Parameters
- We can think of $v_{t}$ as an average of $\frac{1}{1-\beta}$ previous days
- Specifically, we can use whatever units of time (not just days)
- Roughly, $\beta = 0.9$ looks at previous $10$ units of time
- Roughly, $\beta = 0.98$ looks at previous $50$ units of time
- Roughly, $\beta = 0.5$ looks at previous $2$ units of time
- Small values of $\beta$ provide us with a very wiggly curve
- Large values of $\beta$ provide us with a smooth curve
- Large values of $\beta$ also cause the curve to shift rightward
- This is because we're averaging over a larger window of values
- In other words, a large $\beta$ indicates we're adapting slowly to changes in our data
- This is because large $\beta$ values are giving more weight to previous values rather than more recent (or current) values

![weightedaverages](/img/weighted_averages.svg)

### What is Exponential about the Weighted Averages?
- The data points further away from our current value become exponentially less important
- This exponential decay is captured by the weights $\beta$
- We can rewrite the equations for our example data in the following steps:

$$ v_{n} = 0.1\theta_{n} + 0.9v_{n-1} $$
$$ v_{n} = 0.1\theta_{n} + 0.9(0.1\theta_{n-1} + 0.9v_{n-2}) $$
$$ v_{n} = 0.1\theta_{n} + 0.9(0.1\theta_{n-1} + 0.9(0.1\theta_{n-2} + 0.9v_{n-2})) $$
$$ v_{n} = 0.1\theta_{n} + 0.9(0.1\theta_{n-1} + 0.9(0.1\theta_{n-2} + 0.9(0.1\theta_{n-3} + 0.9v_{n-3}))) $$
$$ v_{n} = \underbrace{0.1\theta_{n}}_{g_{t=1}} + \underbrace{0.1 \times 0.9 \theta_{n-1}}_{g_{t=2}} + 0.1 \times 0.9^{2} \theta_{n-2} + 0.1 \times 0.9^{3}v_{n-3} $$

![exponentialdecay](/img/exponential_decay.svg)

- As previously stated, we roughly look at the previous $10$ units of time when $\beta = 0.9$
- Here, we can see $g$ roughly becomes equal to $0$ when $t=10$
- In other words, we're saying temperatures that are $11$, $12$, or more days away from the current day don't have much influence on our current temperature

### Advantages and Disadvantages
- An advantage of using exponentially weighted averages is the performance boost
	- If we were to average values using a moving window, we would need to save the values and averages of previous days
	- By averaging values using exponential weights, we only need to save the current $v_{t}$ in memory
- A disadvantage of using exponentially weighted averages is the decrease in accuracy
	- If we were to average values using a moving window, we could accurately average all of the previous days
	- By averaging values using exponential weights, we can only look at the previous $v_{t}$

### Describing Bias Correction
- By setting $v_{0}=0$, we add some degree of bias to our model

![biascorrection](/img/weighted_averages_bias.svg)

- Since $v_{1}, v_{2},...,v_{n}$ are all based on $v_{0}$, then the earlier values of $v$ will be slightly smaller than expected
- As $v$ increases, this bias will become negligible
- However, we should still correct for this bias, since earlier values of $v$ will be underestimated
- We can do this by transforming each $v_{t}$ term:

$$ v_{t}^{*} = \frac{v_{t}}{1-\beta^{2}} $$

---

### tldr
- Exponentially weighted averages are sometimes referred to as exponentially weighted moving averages in statistics
- The general formula for an exponentially weighted average is:

$$ v_{t} = \beta v_{t-1} + (1-\beta) \theta_{t} $$

- We can think of $v_{t}$ as an average of $\frac{1}{1-\beta}$ previous days
- Specifically, we can use whatever units of time (not just days)
- Roughly, $\beta = 0.9$ looks at previous $10$ units of time
- Roughly, $\beta = 0.98$ looks at previous $50$ units of time
- Roughly, $\beta = 0.5$ looks at previous $2$ units of time

---

### References
- [Overview of Exponentially Weighted Averages](https://www.youtube.com/watch?v=lAq96T8FkTw&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=17)
- [Understanding Exponentially Weighted Averages](https://www.youtube.com/watch?v=NxTFlzBjS-4&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=18)
- [Bias Correction of Exponentially Weighted Averages](https://www.youtube.com/watch?v=lWzo8CajF5s&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=19)
