---
title: "t-SNE"
draft: false
weight: 8
katex: true
---

### Describing t-SNE
- T-distributed Stochastic Neighbor Embedding (or t-SNE) is a non-linear dimensionality reduction algorithm
- Specifically, t-sne maps high-dimensional data to a lower-dimensional space, where similar data points are close together and dissimilar data are distant from each other
- T-sne involves non-linear transformations for its dimensionality reduction, as apposed to PCA (which involves linear transformations)
- Specifically, T-sne uses the local relationships between points to create a low-dimensional mapping, which allows it to capture non-linear relationships
- Within its dimensionality reduction step, t-sne creates a probability distribution using the Gaussian distribution that defines the relationships between the points in high-dimensional space
- Then, t-sne tries to recreate the probability distribution in a low-dimensional space using a t-distribution
	- This prevents the crowding problem, where points tend to get crowded in low-dimensional space due to the curse of dimensionality
- T-sne optimizes the embeddings directly using gradient descent
	- The cost function is non-convex however, meaning there is the risk of getting stuck in a local minima
	- However, t-sne uses multiple tricks to try to avoid this problem

### Why Do We Need t-SNE?
- Although PCA is fast, simple, and intuitive, it can't capture non-linear dependencies
- T-sne can capture non-linear dependencies
- Although Kernel PCA and Isomap can be used to capture non-linear dependencies as well, these algorithms don't handle the crowding problem as well as t-sne
- The crowding problem typically happens when higher-dimensional data is mapped to lower-dimensional data, where there is generally a lot less room in the lower dimensional space in comparison
- So, all the points get squashed in the lower dimension, causing crowding
- T-sne deals with this by making the optimization spead out using a t-distribution
- Another major benefit of t-sne is that it uses stochastic neighbors, meaning there is no clear line between which points are neighbors of the other points
- This lack of clear borders can be a major advantage because it allows t-sne to naturally take both global and local structure into account
- This is also achieved using the t-distribution

### The General t-SNE Algorithm
1. In the high-dimensional space, we create a Gaussian probability distribution for each point that dictates the relationships between neighboring points
2. Then, we try to recreate a low dimensional space that follows that probability distribution for each point as best as possible
- The *t* in t-sne comes from the algorithm's use of the t-distribution in the second step
- The *s* and *n* (i.e. stochastic and neighbor) come from the use of probability distributions across neghboring points in both steps

### Dissecting the T-SNE Algorithm
1. Calculate the scaled similarities from a normal curve for the higher-dimensional data
	1. For each point, calculate the distances between every other point
		- When calculating the distances, we can use whatever similarity metric that is relevant to our problem
	2. Calculate the density of each of those distances on a normal curve
		- Said another way, we plot each distance on a normal curve and then calculate its densities
		- Specifically, this normal distribution (of distances for each point) has a mean of 0 (i.e. centered around the point of interest) and a variance that is the sample variance of the distances for that point
		- Therefore, each variance will differ for each distribution (for each point) depending on the distances from that point and other points
		- These densities can be thought of as our unscaled similarities
	3. Scale those unscaled similarities to account for differing cluster densities
		- We do this to account for the differences in densities for each cluster
		- We typically don't care too much about how dense each point is to each other in the cluster
		- If we don't scale the distances, then the problem mentioned above will impact the densities of the curve
		- So we want to make sure each point is on the same scale as the others
		- Specifically, we scale the distances using the following formula:
		$$
		\frac{score_{i}}{\sum score_{i}}
		$$
		- Therefore, the scaled similarities should add up to 1
2. Calculate the scaled similarities from a t-distribution for the lower-dimensional data
	1. Randomly project the data on a lower-dimensional space
		- We do this by randomly projecting the data onto the lower-dimensional space
	2. For each point, calculate the distances between every other point
		- When calculating the distances, we can use whatever similarity metric that is relevant to our problem
	3. Calculate the density of each of those distances on a t-distribution
		- Said another way, we plot each distance on a t-distribution and then calculate its densities
		- Specifically, this t-distribution (of distances for each point) has a mean of 0 (i.e. centered around the point of interest) and a variance that is the sample variance of the distances for that point
		- Therefore, each variance will differ for each distribution (for each point) depending on the distances from that point and other points
		- These densities can be thought of as our unscaled similarities
		- Specifically, the t-distribution solves the issue of crowding, which refers to data becoming clumped up together in the middle once we move data from a higher dimensional space to a lower dimensional space
		- Essentially, crowding happens because we have less space to represent the data
	4. Scale those unscaled similarities to account for differing cluster densities
		- We do this to account for the differences in densities for each cluster
		- We typically don't care too much about how dense each point is to each other in the cluster
		- If we don't scale the distances, then the problem mentioned above will impact the densities of the curve
		- So we want to make sure each point is on the same scale as the others
		- Specifically, we scale the distances using the following formula:
		$$
		\frac{score_{i}}{\sum score_{i}}
		$$
		- Therefore, the scaled similarities should add up to 1
	5. Adjust the t-sne distribution of scaled similarities to match the normal distribution of scaled similarities for each point
		- We do this iteratively using gradient descent
		- Intuitively, the gradient represents the strength and direction of attraction or reupultion between two points
		- A positive gradient represents attraction, whereas a negative gradient represents a repulsion between the points
		- This push-and-pull eventually makes the points settle down in the low-dimensional space and match the normal distribution of distances in the higher-dimensional space

### More on the Gradient Descent Optimization
- An important consequence of the gradient descent optimization mentioned above is that it does not define a function to reduce dimensionality (unlike PCA)
	- T-sne has no parameters and directly optimizes the embeddings itself
- Therefore, we can train a t-sne model on some data, but we can't use that model to reduce the dimensionality of some new data point
- Thus, we would need to start the process all over again for a new data point
- The gradient descent method used in t-sne uses the two following tricks:
	1. Early compression
		- This trick is used to prevent getting stuck in a local minima early on
		- Gradient descent allows the points to move around freely
		- So, there is a chance that unwanted cluster will form prematurely
		- To prevent this, t-sne uses the early compression trick, which involves simply adding an L2 penalty to the cost function at the early stages of optimization
		- This will make the distance between embedded points small early on
		- The strength of this optimization is a hyperparameter, but t-sne performs fairly robustly regardless of how you set it
	2. Early exaggeration
		- This trick is used to accelerate the pushing and pulling of points to their respective cluster early on
		- Each scaled similarity is multiplied (i.e. exaggerated) at the early stages of optimization
		- The effect of this is to force the values of the similarieis to become more focused on larger similarities (i.e. closer points)
		- This makes early cluster more tightly knit, allowing them to move around more easily without getting in each others way

### References
- [When to use t-SNE?](https://stats.stackexchange.com/questions/263539/clustering-on-the-output-of-t-sne)
- [t-SNE StatQuest Video](https://www.youtube.com/watch?v=NEaUSP4YerM)
- [Visualizing t-SNE](https://mlexplained.com/2018/09/14/paper-dissected-visualizing-data-using-t-sne-explained/)
- [Example of t-SNE Implementation](https://www.analyticsvidhya.com/blog/2017/01/t-sne-implementation-r-python/)
- [t-SNE Algorithm](https://lvdmaaten.github.io/tsne/)
- [General Description of the t-SNE Algorithm](https://medium.com/@layog/i-do-not-understand-t-sne-part-2-b2f997d177e3)
