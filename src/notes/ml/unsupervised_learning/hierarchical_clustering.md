---
title: "Hierarchical Clustering"
draft: false
weight: 5
katex: true
---

### Describing Hierarchical Clustering
- Hierarchical clustering is a clustering method that seeks to build a hierarchy of clusters
- There are two types of hierarchical cluster: agglomerative clustering and divisive clustering
- The results of hierarchical clustering are usually presented a dendrogram
- A dendrogram is a tree-like diagram that shows the hierarchical relationship between object
- The k-means algorithm returns a simple (or flat) partition, which is a single set of clusters with no particular organization (or structure) within them
- On the other hand, hierarchical clustering returns either an agglomerative or divisive partition, which is a single set of clusters that are closely related to other clusters (and distantly related to other clusters)

### Types of Hierarchical Clustering
- Hierarchical agglomerative clustering is a bottom-up clustering approach, where each observation starts in its own cluster and merge together as we move up the hierarchy
- Hierarchical divisive clustering is a top-down approach, where all observations start in one cluster and are split apart as we move down the hierarchy
- Hierarchical clustering involves calculating measures of dissimilarity between observations so that we can
 decide which cluster should be combined (for agglomerative clustering) or split (for divisive clustering)

### Simple Use-Cases of Hierarchical Clustering
- Using hierarchical clustering may make it easier to notice subsets or supersets of pre-defined classes
- For example, we might want to find clusters for roses and marigolds within a cluster of flowers if we are clustering images
- On the other hand, we also might want to find a super-cluster of respiratory complaints for sub-clusters pneumonia and influenza

### Ward's Method
- We've already seen an approach for minimizing the sum-of-squares in k-means clustering
- Ward's method is the approach for minimizing the sum-of-squares in hierarchical agglomerative clustering
- Ward's method merges clusters that produce the smallest merging cost
- The merging cost is the increase in sum-of-squares when merging two clusters
- Specifically, the merging cost is defined as the following:
	$$
	\delta(a,o) = \frac{n_{a}n_{o}}{n_{a}+n_{o}}(\Vert m_{a}-m_{o} \Vert)^{2}
	$$
	- Where $a$ and $o$ are two clusters considered to be merged together
	- Where $n_{a}$ is the number of points in cluster $a$
	- Where $n_{o}$ is the number of points in cluster $o$
	- Where $m_{a}$ is the mean (or centroid) of cluster $a$
	- Where $m_{o}$ is the mean (or centroid) of cluster $o$
- The algorithm for Ward's method is the following:
	1. Start with each point in a cluster by itself (sum-of-squares = 0)
	2. Merge the two clusters that produce the smallest increase in the sum-of-squares (i.e. the smallest merging cost)
	3. Keep merging until we've reached $k$ clusters
- Ward's method is nested (the partition of size $k$ is contained within the partition of size $k+1$) and greedy (always picks the current smallest cost without worrying if this will impose larger costs later on)
- Meaning, Ward's method generally does not produce a sum-of-squares as small as k-means

### The Single-Link Method
- The single-link method is another approach for minimizing the sum-of-squares in hierarchical agglomerative clustering
- The single-link clustering method can handle any cluster shape
- However, the single-link clustering method doesn't care about compactness or size-balance
- Instead, the single-link clustering method should only be used if we care about separation (of distance)
- The single-link clustering method merges clusters only if two points are close enough
- The algorithm for the single-link method is the following:
	1. Start with each point in a cluster by itself (sum-of-squares = 0)
	2. Merge the two clusters that produce the smallest gap (distance between the two closest points)
	3. Keep merging until we've reached $k$ clusters

### Advantages of Hierarchical Clustering
1. More interpretable compared to k-means
	- Since hierarchical clustering can depict its split or merged levels through dendrograms, we can understand the relationships between clusters (as opposed to k-means clustering)
2. Better understand what $k$ should be
	- We're able to better understand what $k$ should be because we're able to observe the trade-off between separation and size-balance
	- If there are well-separated clusters, then it's better to merge smaller (in size) clusters
	- This is because Ward's algorithm will sometimes merge clusters which are further apart but smaller
	- On the other hand, the k-means algorithm gives no guidance about what $k$ should be

### Caveat to Clustering
- Typically, we want to determine how many clusters we should include in our data
- We also want to know if two data points belong to the same cluster, which is a related question
- Unfortunately, there is currently very little theory about how to find the
right number of clusters
- At the moment, we really don't even know what "the right number of clusters" means
- Therefore, we should always use cross-validation when determining our clusters to see how often the points in question wind up in the same cluster
- If they don't fall into the same clusters repeatedly, then we should be skeptical of those clusters at the given moment
- Specifically, we should also look at dendrogram (i.e. tree structure) on new data to see if the leaves are different
- Then, we should how much the shape of the tree changes to measure the merging costs at each level, in order to get a good idea of how many clusters we should have

### References
- [Hierarchical Clustering Lecture Notes](https://www.stat.cmu.edu/~cshalizi/350/2008/lectures/08/lecture-08.pdf)
- [Hierarchical Clustering Wiki](https://en.wikipedia.org/wiki/Hierarchical_clustering)
