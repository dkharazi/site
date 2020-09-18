---
title: "Normalizing Inputs"
draft: false
weight: 15
katex: true
---

### Motivating Normalization of Inputs
- If the scale of our input data is vastly different across features, then our cost function may take much longer to converge to $0$
- In other words, gradient descent will take a long time to find optimal parameter values for $w$ and $b$ if our data is unnormalized
- In certain situations, the cost function may not even converge to $0$ depending on the scale of our input data and the size of our learning rate $\lambda$ for gradient descent

### Illustrating the Need for Normalization
- Let's say we define our cost function as the following:

$$
J(w,b) = \frac{1}{2m} \sum_{i=1}^{m} \mathcal{L}(\hat{y}_{i}, y_{i})
$$

- And our input data looks like the following:

$$
x_{1} : 0, ..., 1
$$

$$
x_{2} : 1, ..., 1000
$$

- The contour could look like the following after gradient descent:

![unnormalizedcontour](../../../img/unnormalized_contour.svg)

- Where the darker colors represents a smaller $J$ value

### Illustrating the Goal of Normalization
- Using out input data from before, our normalized data could look like the following:

$$
x_{1} : 0, ..., 3
$$

$$
x_{2} : 0, ..., 3.5
$$

- The contour could look like the following after gradient descent:

![normalizedcontour](../../../img/normalized_contour.svg)

- Note that there isn't a great need for normalization if our input data is on the same relative scale
- However, normalization is especially important if the scale of our input data varies across features dramatically
- To be safe, we should just always normalize our data

### Normalization Algorithm
- Normalizing input data includes the following steps:
	1. Center data around the mean
	$$
	\mu = \frac{1}{m} \sum_{i=1}^{m} x_{i}
	$$
	$$
	\tilde{x}_{i} = x_{i} - \mu
	$$
	2. Normalize the variance
	$$
	\sigma = \sqrt{\frac{1}{m-1} \sum_{i=1}^{m} \tilde{x}_{i}^{2}}
	$$
	$$
	x^{norm}_{i} = \frac{\tilde{x}_{i}}{\sigma}
	$$
- Centering $x$ around $\mu$ will make it so the new mean of $x$ is $0$
- Normalizing the variance of $x$ will make the new variance of $x$ equal to $1$
- Input data should be normalized for both the training and test sets
- We should first calculate $\mu$ and $\sigma$ for the training set
- Then, the test set should use those same parameters $\mu$ and $\sigma$ from the training set
- We should not calculate one set of parameters for the training set, and a different set of parameters for the test set
- In other words, our training and test sets should be scaled in the exact same way

---

### tldr
- We need to normalize our input data to improve training performance
- Normalization involves the following steps:
	- Centering $x$ around $\mu$ will make it so the new mean of $x$ is $0$
	- Normalizing the variance of $x$ will make the new variance of $x$ equal to $1$
- Input data should be normalized for both the training and test sets
- Normalization involves calculating parameters $\mu$ and $\sigma$ for each of our input features
- We should use the same $\mu$ and $\sigma$ parameters for both the training set and test set
- To reiterate, this form of normalization can only be applied to our **input data**
- This can't be applied to any activations in our hidden layers

---

### References
- [Normalizing Inputs](https://www.youtube.com/watch?v=FDCfw-YqWTE&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=9)
