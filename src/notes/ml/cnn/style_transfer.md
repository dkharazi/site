---
title: "Neural Style Transfer"
draft: false
weight: 17
katex: true
---

### Motivating Neural Style Transfer
- Neural style transfer involves combining two images together:
	- One image refers to our content image $C$
	- The second image refers to our style image $S$
	- Combining these two images creates a genereated image $G$
- Essentially, we apply a style from one image to our content image
- Then, the generated image will be include the content of our content image with the style from our style image 

### Introducing the Cost Function for Neural Style Transfer
- We must define a new cost function in order to build a neural style transfer system
- The cost function measures how well our generated image $G$ fits to our data
- The cost function is minimized using gradient descent
- The cost function is defined as the following:

$$ J(G) = \alpha J_{c}(C,G) + \beta J_{s}(S,G) $$

- The cost function is made up of two cost sub-functions:
	- The cost function $J_{c}(C,G)$ is the cost of the content image
	- The cost function $J_{s}(C,G)$ is the cost of the style image
- The content cost function measures the similarity between the content image $C$ and generated image $G$
- The style cost function measures the similarity between the style image $S$ and generated image $G$
- The hyperaparameters $\alpha$ and $\beta$ specify the weighting between the content and style cost functions
- For example, we could increase $\alpha$ to place more weight on the content cost function
- We could also decrease $\beta$ to place more weight on the content cost function

### Using the Cost Function to Generate Image $G$
- The general algorithm looks like the following:
	1. Initiate some random $G$ with the following dimensions:
	$$ G: 100 \times 100 \times 3 $$
	2. Use gradient descent to minimize $J(G)$:
	$$ G = G - \frac{\partial J(G)}{\partial G} $$
- Therefore, gradient descent updates the pixels of our image $G$
- An example looks like the following:

![costnst](/img/costnst.svg)

### More about the Content Cost Function

---

### tldr

---

### References
- [Introducing Neural Style Transfer](https://www.youtube.com/watch?v=R39tWYYKNcI&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=37)
- [Paper about Neural Style Transfer](https://arxiv.org/pdf/1508.06576.pdf)
- [Introducing a Neural Style Transfer Cost Function](https://www.youtube.com/watch?v=xY-DMAJpIP4&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=39)
- [Content Cost Function](https://www.youtube.com/watch?v=b1I5X3UfEYI&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=40)
- [Style Cost Function](https://www.youtube.com/watch?v=QgkLfjfGul8&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=41)
