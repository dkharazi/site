---
title: "Quality Evaluation"
draft: false
weight: 1
katex: true
---

### Illustrating Prediction Problems
- A prediction model refer to either of the following:
    - Regression models
    - Classification models
- A prediction problem is different from a recommendation problem
- The prediction model can be defined by using a matrix
    - Where, each row represents a data point
    - And, columns are either features or responses
- A prediction model is trained on data with features and responses
    - And, it is then used to predict responses based on features
    - Some rows are used for training and others are used for prediction

### Illustrating Recommendation Problems
- The key difference for the rating prediction problem is that there are no features and responses in the rating matrix
- Known and unknown ratings are mixed together
- Here, the goal becomes training a model with known ratings to predict unknown ratings
- In many ways, this task involves imputing missing, partially observed values with recommendations
    - Whereas, the prediction models are tasked with creating predictions for new, unobserved values

### Defining the Ranking Accuracy
- A recommender returns some list of recommendations of items
- We'd like to determine how good our recommendations are
- Each item has a relevance score called *gain*
    - Usually, this is some non-negative number
    - This gain is $0$ for items without user feedback
- The *cumulative gain* is the sum of this list of scores

$$
CG = \sum_{i=1}^{k} rel_{i}
$$

- For example, the cumulative gain for of the scores for each result: 2 + 0 + 3 + 2 = 7. In mathematical notations, the CG at a particular rank  𝑘  is defined as:

### 5.4 Overview of Recommendation Methods

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Intuition behind Normalized Discounted Cumulative Gain](http://ethen8181.github.io/machine-learning/recsys/2_implicit.html#NDCG)