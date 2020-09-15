---
title: "Pooling Layer"
draft: false
weight: 3
katex: true
---

### Describing Max Pooling
- Max pooling attempts to create an abstract representation of an image using fewer dimensions
- For each iteration of convolution, max pooling involves calculating the maximum value from the portion of values covered by the filter
- We take the max of certain regions in order to detect some feature (given by a filter) in our input image
- A high value tends to indicate that a feature exists in that region
- This will reduce the dimensionality of an input image
- Meaning, max pooling layers benefit in the following ways:
	- They are less prone to overfitting (i.e. accuracy benefit)
	- They don't require parameter learning (i.e. speed benefit)

![downsampling](/img/pool.jpeg)

### Introducing Common Pooling Methods
- There are two forms of pooling:
	- Max pooling
	- Average pooling
- Average pooling is rarely ever used
- Average pooling is only sometimes used to reduce the dimensions of an image, while attempting to best capture the image's properties

### Implementing Max Pooling
- Max pooling doesn't rely on any learnable parameters
- Instead, max pooling only relies on the following hyperparameters:
	- $f^{[l]}$: The size of the filter in the $l^{th}$ layer
	- $p^{[l]}$: The amount of padding in the $l^{th}$ layer
	- $s^{[l]}$: The stride in the $l^{th}$ layer
- We almost always set $p=0$
- The most common choices of hyperparameters are the following:
	- $f=2$ and $s=2$ (and $p=0$)
	- $f=3$ and $s=2$ (and $p=0$)
- An input image will have the following dimensions:

$$ n_{h}^{[l]} \times n_{w}^{[l]} \times n_{c}^{[l]} $$

- An output image will have the following dimensions:

$$ \lfloor \frac{n_{h}^{[l]}-f}{s} + 1 \rfloor \times \lfloor \frac{n_{w}^{[l]}-f}{s} + 1 \rfloor \times n_{c}^{[l]} $$
- The follow is an example of max pooling:

![maxpool](/img/maxpool.svg)

---

### tldr
- Max pooling attempts to create an abstract representation of an image using fewer dimensions
- For each iteration of convolution, max pooling involves calculating the maximum value from the portion of values covered by the filter
- We take the max of certain regions in order to detect some feature (given by a filter) in our input image
- A high value tends to indicate that a feature exists in that region
- This will reduce the dimensionality of an input image
- Meaning, max pooling layers benefit in the following ways:
	- They are less prone to overfitting (i.e. accuracy benefit)
	- They don't require parameter learning (i.e. speed benefit)

---

### References
- [Pooling Layers](https://www.youtube.com/watch?v=8oOgPUO-TBY&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=9)
- [CS231n: Convolutional Networks](https://cs231n.github.io/convolutional-networks/)
- [What is Max Pooling?](https://www.quora.com/What-is-max-pooling-in-convolutional-neural-networks)
