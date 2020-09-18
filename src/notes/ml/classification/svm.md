---
title: "Support Vector Machines"
draft: false
weight: 9
katex: true
---

### Describing Support Vector Machines
- Hyperplanes represent a linear separator between two different classes
- Hyperplanes are also known as support vector classifiers in reference to support vector machines (SVM)
- An SVM is a classifier that finds the best hyperplane to separate data points into two different classes
- The best hyperplane is the hyperplane with the largest margin between the support vectors of the two classes
	- A hyperplane represents the threshold between the two classes
	- Margin is the distance between the support vectors of the two classes
	- Support vectors are the data points on the edge of each class that lie closest to the hyperplane

### Describing the Margin
- SVM chooses the hyperplane with the largest margin between the support vectors of the two classes
- When such a hyperplane exists, it is known as the maximum-margin hyperplane
- The linear classifier associated with the maximum-margin hyperplane is known as the maximum-margin classifier

### Defining the Maximum-Margin Hyperplane
- SVM chooses the hyperplane with the largest margin between the support vectors of the two classes
- SVM is sensitive to outliers within the training data for each class
- To get around this issue, SVM allows a few data points to be misclassified in an attempt to balance the trade-off between finding a line that maximizes the margin and a line that minimizes the misclassification
- This trade-off is a direct example of the bias-variance tradeoff
	- Specifically, the bias tends to increase (and the variance tends to decrease) when we start to allow for misclassifications in our training data
- Our margin is known as a soft margin when we allow for misclassifications

### Evaluating Soft Margins
- A margin is known as a soft margin when we allows for misclassifications
- We are able to determine the best soft margin by using cross validation
- Specifically, we use cross validation to determine the number of misclassifications (to allow inside of the soft margin) that produces the best test accuracy

### SVM General Algorithm
1. Start with the data in a relatively low dimension
2. Move the data into a higher dimension using kernel functions
3. Find a support vector classifier that separates the higher dimensional data into two groups

### Motivating Feature Mapping
- In lower dimensions, data is typically only non-linearly separable by some decision boundary
- If we move our data into a higher dimension, our data can sometimes become linearly separable by a hyperplane
- We can move our data into a higher dimension by mapping our features to some other feature space
- This process of mapping features to another feature space is called feature mapping

### Describing Feature Mapping
- Feature mapping can be very expensive, since we would need to compute some transformation to create each new variable
- For example, let's say we have two rows and three columns from the following table:

|       | age | height | weight |
| ----- | --- | ------ | ------ |
| **x** | 22  | 160    | 170    |
| **y** | 25  | 175    | 190    |

- We can label our two data points as the following:

$$
x = (a_{1}, h_{1}, w_{1})^{T}
$$

$$
y = (a_{2}, h_{2}, w_{2})^{T}
$$

- Here, $x$ and $y$ are in $3$ dimensions
- If we perform feature mapping, $x$ and $y$ would be mapped to a $9$ dimensional space if we apply a polynomial mapping:

$$
\phi(x) = (a_{1}^{2}, a_{1}h_{1}, a_{1}w_{1}, h_{1}a_{1}, h_{1}^{2}, h_{1}w_{1}, w_{1}a_{1}, w_{1}h_{1}, w_{1}^{2})^{T}
$$

$$
\phi(y) = (a_{2}^{2}, a_{2}h_{2}, a_{2}w_{2}, h_{2}a_{2}, h_{2}^{2}, h_{2}w_{2}, w_{2}a_{2}, w_{2}h_{2}, w_{2}^{2})^{T}
$$

- If we were to take the dot product $\phi(x)^{T}\phi(y)$, then this would be computationaly expensive:

$$
\phi(x)^{T}\phi(y) = \text{O}(n^{2})
$$

### Motivating Kernel Functions
- It would be very useful if we could produce the output of $\phi(x)^{T}\phi(y)$ without actually calculating $\phi(x)$ and $\phi(y)$, since it's expensive to apply a polynomial mapping to such large vectors
- The kernel function achieves this
- A kernel function skips the feature mapping step, but still produces the same output as if we performed the dot product of our feature mapping
- For example, we could calculate the polynomial kernel function:

$$
k(x,y) = (x^{T}y)^{2}
$$

$$
k(x,y) = (a_{1}a_{2} + h_{1}h_{2} + w_{1}w_{2})
$$

- Compared to mapping features to some feature space, the kernel function is generally less expensive

$$
k(x,y) = \text{O}(n)
$$

- The kernel function benefits from performing a dot product in the beginning, rather than performing a dot product on the already polynomial-transformed features in the feature mapping
- The benefit of using a kernel function is a performance boost, since we're applying significantly fewer transformations

### The Kernel Trick
- A kernel function is used when data are non-linearly separable in its original space
- A kernel is a function that takes its input vectors in the original space and returns the dot product of the vectors in a feature space
- In other words, a kernel function will map data from its original space (where the classes are non-linearly separable) to another space where the classes are linearly separable
- Essentially, kernel functions are similarity functions
	- Given two objects, the kernel function outputs some similarity score
	- The objects can be anything starting from two integers, two vectors, etc.
- The following are examples of kernel functions:
	- Polynomial kernel
	- Gaussian kernel
	- Laplace RBF kernel
	- Hyperbolic Tangent kernel
	- Sigmoid kernel

### References
- [Support Vector Machines for Binary Classification](https://uk.mathworks.com/help/stats/support-vector-machines-for-binary-classification.html)
- [Motivating Kernel Functions](https://towardsdatascience.com/kernel-function-6f1d2be6091)
- [Description of Kernel Functions](https://towardsdatascience.com/the-kernel-trick-c98cdbcaeb3f)
- [Kernel Methods](http://www.cs.cmu.edu/~aarti/Class/10701_Spring14/slides/kernel_methods.pdf)
- [Intuition of Kernel Functions](https://stats.stackexchange.com/questions/152897/how-to-intuitively-explain-what-a-kernel-is)
- [Margins in Support Vector Machines](https://towardsdatascience.com/support-vector-machine-simply-explained-fee28eba5496)
- [SVM Lecture Slides](http://web.mit.edu/6.034/wwwbob/svm-notes-long-08.pdf)
- [Illustrations of SVM](http://www.robots.ox.ac.uk/~az/lectures/ml/lect2.pdf)
- [Support Vector Machine Example](https://blog.statsbot.co/support-vector-machines-tutorial-c1618e635e93)
- [Support Vector Machine StatQuest Video](https://www.youtube.com/watch?v=efR1C6CvhmE)
- [Motivation of Transformation Space](https://towardsdatascience.com/truly-understanding-the-kernel-trick-1aeb11560769)
- [More on the Kernel Trick](https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d)
- [More on Feature Mapping](https://www.quora.com/In-machine-learning-what-is-a-feature-map)
- [Application of SVM](https://infolab.usc.edu/DocsDemos/NG2Ibook_sharifzadeh_mehdi_01.pdf)
