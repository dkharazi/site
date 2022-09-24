---
title: "Clustering"
draft: false
weight: 4
katex: true
---

### Motivating Clustering for Customer Segmentation
- Clustering refers to the process of grouping similar observations together
    - Roughly, we can think of clustering as the process of grouping observations that are correlated with each other
- Typically, clustering is used for exploratory data analysis
- One common use-case is customer segmentation
    - Where, similar customer profiles can be identified and grouped together into clusters (or segments)
- Clusters are grouped together based on a similarity metric that accounts for:
    - Demographic attributes
    - Behavioral attributes
    - Financial attributes
- Each segment has a centroid representing its geometric center
- Roughly, we can think of the centroid as the average  of the profile

### Describing Uses for Segmentation
- For example, one segment may represent power shopper, who is older and higher income
- Whereas, another segment may represent high engager, who is young and typically uses social media
- As a result, segmentation allows us to do the following:
    - Understand who our customers are
    - Summarize those established customer profiles
    - Create segments that can be used as a feature for other predictive models
        - E.g. creating labels representing power shoppers, app engagers, brand loyalists, etc.
    - Generalizing sparse data
        - E.g. using topic modeling to produce topics from words in articles

### Challenges of Clustering Projects
- Segmentation projects involve the following:
    - Good understanding of customers and expectations
    - Thorough experimentation
    - Executable marketing strategies
- Segmentation projects involve the following challenges:
    - Thorough, unsupervised experimentation
    - Optimization function is ambiguous
        - Not as deterministic as classification models
        - Dependent on the chosen clustering method and parameters
    - Difficult to interpret why certain customers are included in one cluster over another cluster

### Illustrating Common Clustering Methods
- K-means algorithm:
    - Better for more spherical clustering data
    - Very efficient
    - Can specify number of clusters
    - Each observation gets assigned to a cluster
- DBSCAN:
    - Better for density-based clustering data
    - Not very efficient
    - Can't specify number of clusters
    - Not every observation is assigned to a cluster
- Gaussian Mixture Modeling:
    - Better for elliptical clustering data
    - Less efficient
    - Can specify number of clusters
    - Each observation gets assigned to a cluster
- Hierarchical:
    - Better for tree-based clustering data
    - Efficient
    - Can specify number of clusters
    - Each observation gets assigned to a cluster

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Illustrations and Documentation for Popular Clustering Methods](https://scikit-learn.org/stable/modules/clustering.html)
- [Example of Tiered Modeling](https://medium.com/swlh/exploring-customers-segmentation-with-rfm-analysis-and-k-means-clustering-93aa4c79f7a7)
- [Course about Customer Segmentation](https://www.datacamp.com/courses/customer-segmentation-in-python)
- [Course about Segmentation Analysis](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)