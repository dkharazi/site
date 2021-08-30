---
title: "UMAP"
draft: false
weight: 9
katex: true
---

### Describing Properties of UMAP
- Similarities are computed from distances using a kernel different from the t-SNE kernel
    - i.e. it is not Gaussian
    - Similar to t-SNE, it decays exponentially and has adaptive width
- Similarities are not normalized to sum up to $1$
    - However, the similarity values still end up being normalized to sum up to a constant value
- Similarity values are symmetrized

### Defining Assumptions for UMAP
1. The data is uniformly distributed on a Riemannian manifold
2. The Riemannian metric is locally constant (or can be approximated as such)
3. The manifold is locally connected

### Comparing UMAP with t-SNE
- UMAP and t-SNE are both useful for visualizations
- UMAP is faster compared to t-SNE
    - UMAP can complete embedding in less than a minute on 70k samples with 784 features
    - t-SNE completes embedding in around 45 minutes on 70k samples with 785 features
- Similar results with random and informative initialization:
    - With random and informative initialization, t-SNE and UMAP both are able to preserve *local* structures
    - With random initialization, t-SNE and UMAP both struggle to preserve *global* structures
    - With informative random initialization, t-SNE and UMAP both are able to preserve *global* structures

### References
- [Documentation for Using UMAP for Clustering](https://umap-learn.readthedocs.io/en/latest/clustering.html)
- [Performance Difference between t-SNE and UMAP](https://github.com/lmcinnes/umap#performance-and-examples)
- [Paper about UMAP Properties](https://www.biorxiv.org/content/10.1101/2019.12.19.877522v1)
- [Paper about Random Initialization in UMAP](https://www.nature.com/articles/s41587-020-00809-z)
- [Post about Properties of UMAP](https://stats.stackexchange.com/a/402756)
- [Illustrations for UMAP and t-SNE](https://pair-code.github.io/understanding-umap/)