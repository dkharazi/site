---
title: "K-Means"
draft: false
weight: 4
katex: true
---

### Describing K-Means Clustering
- K-means clustering is a clustering method that assigns each observation to one of $k$ distinct clusters
- Essentially, the goal of k-means clustering is to group similar data points together and discover underlying patterns between them
- The k-means clustering is an unsupervised algorithm, and therefore uses input vectors to make inferences without referring to known (or labelled) output
- The k-means clustering algorithm is one of the simplest and popular unsupervised algorithms
- Essentially, k-means clustering involves defining a $k$ number of clusters (and thus $k$ number of centroids) and associating each data point to a cluster that reduces the cluster sum of squares
- The k-means algorithm gives us what's sometimes called a simple (or flat) partition, because it just gives us a single set of clusters, with no particular organization or structure within them

### The K-Means Algorithm
1. Guess the number of clusters $k$
2. Guess the means (or centroids) of each cluster
3. Assign each point to the nearest mean
4. Re-compute the mean for each cluster
5. If the means are unchanged, then exit; otherwise return to step 3

### The K-Means Objective Function
- As hinted at already, the objective function for the k-means is the sum-of-squares for the clusters
- The sum-of-squares for the clusters is defined as the following:
	$$
	SS = \sum_{k=1}^{o}\sum_{i=1}^{n_{k}}(\Vert x_{i}-m_{k} \Vert)^{2}
	$$
	- Where $o$ is the number of clusters
	- Where $m_{k}$ is the mean for cluster $k$
	- Where $m_{k} = \frac{1}{n_{k}}\sum_{i=1}^{n_{k}}x_{i}$
	- Where $n_{k}$ is the number of points in that cluster
- The within-cluster variance for the clusters is defined as the following:
	$$
	V_{k} = \frac{1}{n_{k}}\sum_{k=1}^{o}\sum_{i=1}^{n_{k}}( \Vert x_{i}-m_{k} \Vert)^{2}
	$$
	- Where $o$ is the number of clusters
	- Where $m_{k}$ is the mean for cluster $k$
	- Where $m_{k} = \frac{1}{n_{k}}\sum_{i=1}^{n_{k}}x_{i}$
	- Where $n_{k}$ is the number of points in that cluster
- The sum-of-squares for the clusters can also be defined as the following:

$$
SS = \sum_{k=1}^{o}n_{k}V_{k}
$$

- In words, the sum-of-squares is the within-cluster variance multiplied by the cluster size (summed over clusters)
- The sum-of-squares favors compact clusters
- If each cluster is compact, then they will have a small within-cluster variance (so $V_{k}$ and $SS$ will be small), and thus a small sum-of-squares

### K-Means Search Strategy
- K-means is a local search algorithm
- Therefore, the algorithm makes small changes to the solution that improves the objective
- This sort of search strategy can get stuck in a local minima and may not stop at the best solution
- Local search is also called hill climbing, since it's like a short-sighted climber who tries to get to the top by always going uphill
- If the landscape rises smoothly to a central peak, this will get to that peak
- But if there are local peaks, the climber can get stuck on one
- Therefore, the peak reached by the climber depends on where the climb starts
- In relation to k-means, the different starting positions correspond to different initial guesses about the cluster centers
- Changing those initial guesses will change the output of the algorithm
- Different runs of k-means will generally give different clusters
- Therefore, we should check if points end up clustered together in many different runs

### References
- [Clustering Lecture Slides](https://www.stat.cmu.edu/~cshalizi/350/2008/lectures/09/Lecture-09_slides.pdf)
- [Introduction to Statistical Learning](http://faculty.marshall.usc.edu/gareth-james/ISL/ISLR%20Seventh%20Printing.pdf)
- [K-Means Clustering Wiki](https://en.wikipedia.org/wiki/K-means_clustering)
