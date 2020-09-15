---
title: "The Tuning Process"
draft: false
weight: 27
katex: true
---

### Motivating the Tuning Process
- One of the inconveniences of neural networks is tuning hyperparameters
- Specifically, we're interested in the following questions:
	- What are the most important hyperparameters to tune?
	- What range of values should I tune my hyperparameters over?
	- How should I organize my tuning process?

### Prioritizing Hyperparameters
- It is important to tune each hyperparameter
- However, some hyperparameters are more important to tune than other
- The following are some common hyperparameters:
	- $\alpha$: the learning rate used in our optimization algorithm
	- $\beta_{v}$: used in momentum and adam
	- $\beta_{s}$: used in rmsprop and adam
	- $\epsilon$: used in rmsprop and adam
	- $l$: the number of hidden layers in our network
	- $n$: the number of hidden units per layer
	- $\gamma$: the learning rate decay
	- $t$: the mini-batch size

| Hyperparameter            | Priority |
| ------------------------- | -------- |
| $\alpha$                  | 1        |
| $n$                       | 2        |
| $t$                       | 2        |
| $\beta_{v}$ for momentum  | 2        |
| $l$                       | 3        |
| $\gamma$                  | 3        |
| $\beta_{v}$ for adam      | 4        |
| $\beta_{s}$               | 4        |
| $\epsilon$                | 4        |

### Tip 1: Tune using Random Sampling
- In the past, hyperparameters used to be tested in a systematic manner that involved looping over a fixed set of hyperparameters
- This technique is called grid search
- Now, hyperparameters are typically tested using random sampling from a hyperparameter space
- This is because grid search only works fine with a small set of hyperparameters
- Visually, the difference in hyperparameters looks like the following:

![tuning_hyperparameters](/img/tuning.svg) 

- Here, we notice that only $5$ possible values are tested for each hyperparameter in scenario 1
- Specifically, training $25$ models only gives us information about $5$ possible values for each hyperparameter
- On the other hand, we test $25$ possible values for each hyperparameter in scenario 2
- Specifically, training $25$ models only gives us information about $25$ possible values for each hyperparameter

### Tip 2: Zooming into Smaller Regions
- Once our models are finished training, we'll want to evaluate the hyperparameters to see which ones minimized the cost function
- After doing this, we'll typically notice certain regions of hyperparameters working very well
- Therefore, we'll usually focus on that region and sample more densely a second time (or more)
- In other words, we'll keep focusing on a smaller range of hyperparameters after training

![zoomtuning](/img/zoomtuning.svg)

- In the above image, the the data points represents combinations of hyperparameters
- A darker data point represents a set of hyperparameters that correspond to a very small cost
- A lighter data point represents a set of hyperparameters that correspond to a very large cost
- We decided that our second window should be be focused around the darker data points, since those sets of parameters tend towards a small cost
- During the second training run, we would focus on this window and observe $25$ more sets of parameters in this specific regions

### Scaling Hyperparameters Appropriately
- Up until now, we've been randomly sampling hyperparameters uniformly on a linear scale
- However, we may want to randomly sample hyperparameters uniformly on a different scale
- In other words, we'll want to first transform a hyperparameter to change its range of values before sampling
- Specifically, we'll want to randomly sample hyperparameters uniformly on a logarithmic scale
- When tuning a hyperparameter, we'll typically want to do this if we care about testing many hyperparameters in only a certain small region
- For example, we may decide to randomly sample $\beta_{v}$ uniformly on a linear scale
- In this scenario, we would be only using $90$% of resources to search for the values of a hyperparameter $\beta_{v}$ between $0.1$ and $1$

![linearscale](/img/linear_tuning.svg)

- However, we may want to use more resources to search for the values between $0$ and $0.1$
- Therefore, we may want to randomly sample $\beta_{v}$ uniformly on a logarithmic scale

![logscale](/img/log_tuning.svg)

### Re-evaluating Hyperparameters Occasionally
- Our data is always changing
- That means insights we take from some data can change over time as well
- Therefore, we should always be re-evaluating our hyperparameters to update our model
- There are two different methods used for re-evaluating hyperparameters:
	1. Babysitting one model
		- This method refers to tuning hyperparameters of one model and observing how the accuracy of our test set changes over time
		- If we notice a high enough accuracy for a set of hyperparameters on a certain day, then we should use those
		- Usually we do this if we don't have enough computational resources
	2. Training many models in parallel
		- This method refers to tuning hyperparameters of many models in parallel and observing how the accuracy of a test set changes over time for each model
		- If we notice a high enough accuracy for a set of hyperparameters of one model on a certain day, then we should select that set of hyperparameters
		- Usually we do this if we have an abundance of computational resources
- Typically, we prefer the second approach if we have enough computational resources
- If we're not fortunate enough to have an abundance of CPUs and GPUs, then we should use the babysitting method

---

### tldr
- When tuning hyperparameters, we should test many possible values using random sampling from a hyperparameter space
- We should not test many possible values using grid search
- After training, we should focus on a smaller range of hyperparameters that minimize the cost function
- By default, we randomly sample hyperparameters uniformly on a linear scale
- We may want to randomly sample hyperparameters uniformly on a logarithmic scale
- Typically, we prefer to tune hyperparameters of many models in parallel if we have enough computational resource
- If we don't have enough resources, then we should monitor the accuracy of one model over time

---

### References
- [Tuning Process](https://www.youtube.com/watch?v=AXDByU3D1hA&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=24)
- [Using an Appropriate Scale](https://www.youtube.com/watch?v=cSoK_6Rkbfg&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=25)
- [Hyperparameter Tuning in Practice](https://www.youtube.com/watch?v=wKkcBPp3F1Y&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=26)
