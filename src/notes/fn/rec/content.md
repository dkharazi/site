---
title: "Content-Based Filtering"
draft: false
weight: 3
katex: true
---

### Introducing Content-Based Filtering Models
- These models rely on non-rating data or very limited rating data
- The main idea of content filtering is quite straightforward:
    1. Filter on items that a user positively rated (explicitly or implicitly) in the past
    2. Recommend other items *similar* to these examples  
- Note, this approach is completely centered around how we define *similarity*
- Similarity is based on the content of a given item
- And, similarity doesn't include behavioral data
    - E.g. information about items that are frequently purchased or rated together by other users

### Defining Content-Based Recommenders
- When measuring similar items for a given user, a content-based recommender essentially only uses one row of the rating matrix
    - Specifically, the profile of the user for whom the recommendations are prepared
- Roughly, we predict a missing item for a given user by using:
    - Known ratings for other, already rated items
    - The user's behavioral data
- Optionally, the recommendations can be ranked according to their similarity scores or rating values
- Typically, we can generate recommendations for each item for a user using:
    - A neighborhood-based approach
    - A regression (or other classification) model
- This model will predict whether a user will like an item or not

### Advantages of Content-Based Filtering
- `User Independence:` only uses ratings provided by the user for whom recommendations are prepared
    - This is a great advantage when the total number of collected ratings is small
    - In other words, we can use this property to our advantage when dealing the with cold-start problem for collaborative filtering models
    - The second advantage of user independence is the ability to generate interesting recommendations for users with ununsual tastes
- `New and Rate Items:` able to recommend new and rare items more easily
    - Since collaborative filtering suffers from the cold-start problem, it's harder for them to recommend newer or rate items
        - This is because they only rely on ratings, and there's usually fewer ratings than content data
    - Content filtering doesn't have this problem since it relies on content similarity

### Disadvantages of Content-Based Filtering
- `Trivial Recommendations:` can often produce trivial recommendations that aren't novel or interesting (i.e. serendipitous)
- `Feature Engineering:` requires feature engineering for content features included in any recommender model
- `New Users:` not able to provide recommendations for new users without history of content features (but can mitigate cold-start problem)
    - This is a direct result of the scoring method used by the model
    - Since, it will only really favor and recommend extremely similar items

### Defining Methods for Content-Based Filtering
- Generally, there are two forms of content-based models:
    - Neighborhood-based filtering
    - Model-based filtering
- A k-Nearest Neighbor algorithm is usually used for neighborhood-based methods
- As a reminder, a kNN algorithm relies on similarity metrics
- Whereas, a model focuses on estimating the probability of an item receiving a positive rating
- Our model could include a naive-bayes classifier, XGBoost model, etc.

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)