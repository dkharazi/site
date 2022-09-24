---
title: "Behavioral Segmentation"
draft: false
weight: 6
katex: true
---

### Describing Behavioral Segmentation
- Behavioral segmentation involves grouping customers into segments based on behavioral attributes
- This is different from other segmentation approaches (like RFM)
    - Since, RFM doesn't include behavioral attributes
    - Instead, RFM only includes engagement and monetary attributes
- In other words, behavioral segmentation aims to identify the behavioral attributes that cause monetary attributes (like RFM)

### Defining Properties of Behavioral Segmentation
- Usually, this involves deliberately excluding monetary and engagement attributes from clustering
    - After clustering, these attributes are included in customer profiles
    - By doing this, we ensure segments are generated based on the behavioral attributes
    - Thus, we're essentially determining the behavioral causes of these monetary and engagement attributes (rather than vice versa)
- Also, this allows us to include behavioral attributes for both clustering and profiling purposes more easily
    - These attributes are important for helping us understand the drivers behind customer behavior
    - E.g. why one segment churns more than another segment

### Defining Use-Cases for Behavioral Segmentation
1. Segments can provide an important, targeted signal in propensity models that may be missed otherwise
    - These signals are carefully targeted and discovered using clustering methods
    - Whereas, these signals may be missed by just throwing a bunch of behavioral features into a classification model
2. Creating more targeted classification or propensity models
    - Classification and propensity models created for an entire customer population usually have limited accuracy
    - Since, propensities can be determined by many different factors
    - For example, a customer in one segment may churn due to low product quality
    - Whereas, a different customer in another segment may churn due to high prices
    - Consequently, the model repository can maintain specialized models for different combinations of:
        - Business objective
        - Brands
        - Product classification
        - Customer segments

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Course about Customer Segmentation](https://www.datacamp.com/courses/customer-segmentation-in-python)
- [Course about Segmentation Analysis](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)