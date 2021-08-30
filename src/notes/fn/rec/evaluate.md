---
title: "Quality Evaluation"
draft: false
weight: 2
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

### Defining the Ranking Accuracy with $CG$
- Typically, a recommender will return a set of item recommendations for a given user
    - Then, we'd like to determine the quality of this set of recommendations compared to other sets of recommendations
- Mathematically, each item has a relevance score called *gain*
    - Usually, this is some non-negative number
    - This gain is $0$ for items without user feedback
    - The larger the gain, the more *relevant* the item
- The *cumulative gain* is the sum of this list of scores:

$$
CG = \sum_{i=1}^{k} rel_{i}
$$

- The larger the cumulative gain, the more relevant the set of items
- For example, suppose we're interested in determining the relevance of a set of four recommandations
    - We then could compute the cumulative gain of the set
    - To do this, we sum the scores: $2 + 0 + 3 + 2 = 7$
    - Here, the rank $k$ is $4$

### Improving the Ranking Accuracy with $DCG$
- When order matters within our list, we should use $DCG$ over $CG$
- Specifically, if we want our most relevant items at the beginning of our set of recommendations, we should use $DCG$
- The formula for $DCG$ is the following:

$$
DCG_{k} = \sum_{i=1}^{k} \frac{rel_{i}}{\log_{2} (i+1)}
$$

- Again, the larger the $DCG$, the more relevant the set of items
- By dividing by the $\log$ term, each gain becomes exponentially diminished as we move through the items within our list
- For example, the best arrangement of items from our previous example would be: $(3, 2, 2, 0)$ since:

$$
DCG = 3 + 1.3 + 1 + 0 = 5.3
$$

- Note, there is an alternative of $DCG$ that places greater emphases on sets with relevant items by normalizing each set
- This formula is defined as the following:

$$
DCG_{k} = \sum_{i=1}^{k} \frac{2^{rel_{i}} - 1}{\log_{2} (i+1)}
$$

### Improving the Ranking Accuracy with $NDCG$
- $NDCG$ essentially normalizes each set of recommendations so we can effectively compare sets with each other
    - By normalizing the set, we're able to properly compare one set to another $1\text{-for-}1$
    - Specifically, some sets might vary in length
    - In this case, we'd use the $NDCG$
- The formula for $NDCG$ is the following:

$$
NDCG_{k} = \frac{DCG_{k}}{IDCG_{k}}
$$

- Here, $IDCG_{}$ is the ideal $DCG$ for rank $k$
- For example, the list of recommendations arranged as $(3, 2, 2, 0)$ would have an $NDCG_{k}$ of:

$$
NDCG = \frac{5.3}{5.3} = 1
$$

- Whereas, the list of recommendations from our inital example $(2, 0, 3, 2)$ would have an $NDCG_{k}$ of:

$$
NDCG = \frac{2+0+1.5+0.9}{5.3} = \frac{4.4}{5.3} = 0.83
$$

### Additional Metrics for Evaluating Recommendations
- `Novelty:` Refers to the level of awareness for a given user about a recommendation
    - This is difficult to measure
    - Usually measured using real-time data
- `Serendipity:` Refers to the amount a user enjoys a recommendation
    - This is even more difficult to measure
    - Usually measured using real-time data
- `Diversity:` Refers to the ability of a recommender to produce a list of recommendations consisting of dissimilar items
    - High diversity is generally preferable
    - Since, it increases the change that some items in the list will be relevant for the user
- `Coverage:` Refers to the ability of a recommender to predict the missing ratings in the rating matrix
    - It can be challenging to predict ratings for items or users that don't have many ratings already
    - As a result, we should keep track of the coverage provided by the recommender
    - We can define the coverage as the percentage of items appearing in at least one recommendation list

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Intuition behind Normalized Discounted Cumulative Gain](http://ethen8181.github.io/machine-learning/recsys/2_implicit.html#NDCG)
- [Intuition behind MAP@K](https://makarandtapaswi.wordpress.com/2012/07/02/intuition-behind-average-precision-and-map/)