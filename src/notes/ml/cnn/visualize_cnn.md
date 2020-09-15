---
title: "Visualizing a CNN"
draft: false
weight: 16
katex: true
---

### Visualizing What our Layers are Learning
- In order to implement neural style transfer, we need to evaluate the features at various layers in our convolutional network
- In order to do this, we can visualize what our layers (and neurons) are actually learning
- To do this, we should:
        1. Train a network
        2. Pick a unit in each layer
        3. Find the nine image patches that maximize the unit's activations
- In other words, we should find the region of an image that maximize the activations returned by a particular neuron
- This will help us in understand what each neuron is actually learning
- As a reminder, the deeper layers will learn more specific details about an image
- On the other hand, the shallow layers will learn more generalized information about the image
- This is because neural networks learn moving from the back of the network to the front of the network (i.e. backward propagation)
- In other words, a convolutional network breaks the image down moving from higher level to lower level layers

### Describing Visualize
- define feature map
- visualizing network using max activations
- visualizing network using mean activations

---

### tldr

---

### References
- [Paper about Visualizing Convolutional Networks](https://arxiv.org/pdf/1311.2901.pdf)
- [Video about Visualizing Convolutional Networks](https://www.youtube.com/watch?v=ghEmQSxT6tw)
- [Visualizing Convolutional Networks using Mean Activations](https://towardsdatascience.com/how-to-visualize-convolutional-features-in-40-lines-of-code-70b7d87b0030)
- [Visualizing Convolutional Networks using Max Activations](https://www.youtube.com/watch?v=ChoV5h7tw5A&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=38)
