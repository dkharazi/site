---
title: "Gram Matrices in Neural Style Transfer"
date: "2021-05-10"
tags: ["machine learning"]
draft: false
katex: true
---

In [this paper](https://arxiv.org/abs/1701.01036), it has been shown that matching the Gram matrices of feature maps is equivalent to minimizing the [Maximum Mean Discrepancy (MMD)](https://papers.nips.cc/paper/2016/file/5055cbf43fac3f7e2336b27310f0b9ef-Paper.pdf) with the second order polynomial kernel. Thus, the paper argues that the essence of neural style transfer is to generate a new image from white noise by matching the neural activations with the content image and the Gram matrices with the style image.

The original algorithm for neural style transfer used a cost function that minimized the sum of the content loss and the style loss. Here, the content loss represented the difference in content between the content image and our generated image. And, the style loss represented the difference in style between the style image and our generated image.

The style loss function uses the gram matrix. Specifically, the style loss represents the normalized, squared difference between the gram matrix of the style image and the gram matrix of the generated image. The gram matrix function cares about some aspects between two images, but it doesn't care about the specific presence or location of features within an image.

In [the original paper for neural syle transfer](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Gatys_Image_Style_Transfer_CVPR_2016_paper.pdf), a new, generated image $x^{*}$ is iteratively created by optimizing a content loss and style loss, given by the following formula. Here, $L$ are the individual losses, and $\alpha$ and $\beta$ are the weights for content and style losses:

$$
L_{gen} = \alpha L_{content} + \beta L_{style}
$$

Mathematically, we can see that the losses of the generated image are just a weighted combination of the style and content losses. Here, $L_{content}$ is defined by the squared error between the feature maps of a specific layer $l$ for the the generated image $x^{*}$ and the content image $x^{c}$:

$$
L_{content} = \frac{1}{2} \sum_{i=1}^{N_{l}} \sum_{j=1}^{M_{l}} (F_{ij}^{l} - P_{ij}^{l})^{2}
$$

Here, the feature maps of $x^{*}$, $x^{c}$, and $x^{s}$ in the $l^{th}$ layer of a CNN are denoted by $F^{l}$, $P^{l}$, and $S^{l}$, respectively. Thus, the loss of the content image $L_{content}$ represents some combination of the feature maps of the generated image and content image. The loss of the style image $L_{style}$ is defined as the sum of several style losses $L_{style}^{l}$ from different layers:

$$
L_{style} = \sum_{l} w_{l} L_{style}^{l}
$$

Here, $w_{l}$ is the weight of the loss in the layer $l$, and the loss of the style image $L_{style}^{l}$ is defined by the squared error between the feature correlations expressed by Gram matrices of the generated image $x^{*}$ and the style image $x^{s}$, where the Gram matrix $G^{l}$ is just the inner product between the vectorized feature maps of the generated image $x^{*}$ in the $l^{th}$ layer.

$$
L_{style}^{l} = \frac{1}{4 N_{l}^{2} M_{l}^{2}} \sum_{i=1}^{N_{l}} \sum_{j=1}^{N_{l}} (G_{ij}^{l} - A_{ij}^{l})^{2}
$$

$$
G_{ij}^{l} = \sum_{k=1}^{M_{l}} F_{ik}^{l} F_{jk}^{l}
$$

$$
A_{ij}^{l} = \sum_{k=1}^{M_{l}} S_{ik}^{l} S_{jk}^{l}
$$
