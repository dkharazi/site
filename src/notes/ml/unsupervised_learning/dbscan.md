---
title: "DBSCAN"
draft: false
weight: 6
katex: true
---

### Describing DBSCAN
- Density-based spatial clustering of applications with noise (or dbscan) is a clustering algorithm that groups together data points that are closely packed together (points with many nearby neighbors)
- In other words, dbscan only cares about density when clustering its points
- The outliers that are marked by dbscan are the data points that are alone in low-density regions (whose nearest neighbors are too faw away)
- Dbscan is one of the most popular density-based clustering algorithms

### DBSCAN Parameters
- Every point is either considered a core point, a border point, or a noise point
- $\epsilon$
	- The parameter $\epsilon$ specifies how close points should be to each other to be considered a part of a cluster
	- It means that if the distance between two points is lower or equal to this value (i.e. $\epsilon$), then these points are considered neighbors
- MinPts
	- The parameter MinPts is the minimum number of points to form a dense region
	- For example, if we set the MinPts parameter as 5, then we need at least 5 point to form a dense region
- Core points
	- These points are in the in the interior of a density-based cluster
	- A point is a core point if there are at least MinPts within a distance of $\epsilon$
- Border points
	- A border point is not a core point, but falls within the neighborhood of a core point
	- A border point can fall within the neighborhoods of serveral core points
- Noise points
	- A noise point is any point that is neither a core point nor a border point

### The DBSCAN Algorithm
1. Label all points as core, border, or noise points
2. Eliminate noise points
3. Put an edge between all core points with a distance $\epsilon$ for each other
4. Make each group of connected core points into a separate cluster
5. Assign each border point to one of the clusters of its associated core points

### Strengths and Weaknesses
- Dbscan is relatively resistant to noise and can handle clusters of arbitrary shapes and sizes
- Dbscan can find many density-based clusters that could not be found using k-means clustering
- Dbscan has trouble when the clusters have widely varying densities
- Dbscan has trouble with high-dimensional data because density is more difficult to define for such data
- Dbscan can be expensive when the computation of nearest neighbors requires computing all pairwise proximites (usually the case for high dimensional data)

### References
- [DBSCAN Algorithm](https://www-users.cs.umn.edu/~kumar001/dmbook/ch8.pdf)
- [DBSCAN Wiki](https://en.wikipedia.org/wiki/DBSCAN)
- [Intuition behind DBSCAN](https://towardsdatascience.com/how-dbscan-works-and-why-should-i-use-it-443b4a191c80)
