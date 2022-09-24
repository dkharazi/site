---
title: "Contextual Recommendations"
draft: false
weight: 7
katex: true
---

### Introducing Context-Aware Recommenders
- So far, we've assumed that certain context isn't relevant in making recommendations about a given item for a given user
- Specifically, we've ignored certain context like:
    - Time
    - User location
    - Marketing channel
    - Etc.
- Realistically, this information is typically very relevant for most recommenders, since users make decision based on this context
- There are three general methods for including context in our recommendations:
    1. Contextual Prefiltering
    2. Contextual Postfiltering
    3. Contextual Modeling
- For contextual modeling, our rating matrix could look like the following with time included as context:

![ratingmatrixrec](../../../img/ratingmatrix.svg)

### Describing Types of Context-Aware Recommenders
- **Location**: recommendations made by a store in Hawaii might be different for a store in Alaska
    - Customers who receive recommendations restaurant in one area will receive different recommendations in another area
- **Time**: Movie recommendations received today may not be relevant $10$ years later
    - Apparel recommendations will be different depending on the season
- **Intent**: Restaurant recommendations may change if the user is dining for one or for two
    - Apparel recommendations may be different if users are shopping for a gift
- **Channel**: Email recommendations can be different than recommendations made on the site
- **Conditions:** Recpmmendations by a department store may include rain boots or a poncho depending on the weather

### Illustrating a Non-Contextual Recommender
- A non-contextual recommender is trained on $U \times I \times R$ data
    - Specifically, its a data set containing a given rating for each user and item
    - This is also referred to as the *rating matrix*
- Then, this non-contextual recommender can predict a rating for a given user and item
- Typically, we'll input a user into the model and receive a list of item recommendations

$$
\overset{\text{Data}}{\boxed{U \times I \times R}} \to \overset{\text{Model}}{\boxed{u \to R}} \to \overset{\text{Recommendations}}{\boxed{i_{1}, i_{2}, ...}}
$$

### Illustrating a Contextual Recommender with Prefiltering
- A contextual recommender with contextual prefiltering is one way of including contextual information in our recommender
- Essentially, contextual prefiltering refers to building a recommender filtered on each value of a context feature
- For example, we may want to build a separate recommender for each day of the week
- First, the recommender is filtered on each value of our contextual feature
- Then, it's trained on $U \times I \times R$ data
    - Specifically, its a data set containing a given rating for each user and item
    - This is also referred to as the *rating matrix*
- Then, this contextual recommender can predict a rating for a given user and item for a given contextual value
- Typically, we'll input a user into the model and receive a list of item recommendations

$$
\overset{\text{Data}}{\boxed{U \times I \times R \times C}} \to \text{Filter on each } C \to
$$

$$
\to \overset{\text{Context Data}}{\boxed{U \times I \times R}} \to \overset{\text{Model}}{\boxed{u \to R}} \to \overset{\text{Recommendations}}{\boxed{i_{1}, i_{2}, ...}}
$$

### Describing Pros and Cons of Prefiltering
- Before prefiltering, we must first consider the trade-off between sparsity and accuracy from contextualization
- Specifically, adding context will increase the size of the rating matrix, which will make the data more sparse
- On one hand, we can increase the accuracy of recommendations with user-item interactions
- However, contextualization decreases the quantity of data available for the recommender
    - Since the data sparsity grows
    - This can impact the quality of recommendations

### Illustrating a Contextual Recommender with Postfiltering
- A contextual recommender with contextual postfiltering is another way of including contextual information in our recommender
- Essentially, contextual postfiltering refers to filtering on recommendations based on values from a content feature after we make recommendations
- For example, we can filter (or re-rank) items based on an item's designated gender once receiving an initial list of non-contextual recommendations from our recommender
- First, the recommender is trained on $U \times I \times R$ data
    - Specifically, its a data set containing a given rating for each user and item
- Then, this recommender can predict a rating for a given user and item
- Lastly, we'll filter on items satisfying a value from our context feature only

$$
\overset{\text{Data}}{\boxed{U \times I \times R}} \to \overset{\text{Model}}{\boxed{u \to R}} \to \overset{\text{Recommendations}}{\boxed{i_{1}, i_{2}, ...}} \to
$$

$$
\to \text{Filter on each } C \to \overset{\text{Contextual Recommendations}}{\boxed{i^{c}_{1}, i^{c}_{2}, ...}} 
$$

### Illustrating Contextual Hybrid Modeling
- The most intuitive solution for contextual recommendation is baking context in our actual recommendations
- To do this, we'll need to create a hybrid model that predicts ratings as a function of item, users, and contexts
    - Essentially, we extend matrix factorization from ordinary collaborative filtering to create embeddings for context/content features as well
    - This is called a hybrid model because we combine:
        - The ability for content-based models to include content features
        - The ability for collaborative filtering to make recommendations about items without interactions from users
- In general, the two types of contextual hybrid modelings are:
    - Nearest neighbor modeling
    - Latent factor modeling
- An example of a hybrid model using contextual information is LightFM

$$
\overset{\text{Data}}{\boxed{U \times I \times C \times R}} \to \overset{\text{Model}}{\boxed{u, c \to R}} \to \overset{\text{Recommendations}}{\boxed{i_{1}, i_{2}, ...}}
$$

### Illustrating Time-Aware Recommenders
- A temporal feature is one of the most important contextual features we can include in a context-aware recommender
- For example, including a temoporal feature will capture variability in an item's preference over time
- Specificially, it could capture fashion changes for clothes over time
- Or, it could capture drifts in user preferences over time caused by changes in tastes
- To do this, we can use contextual hybrid modeling (using nearest neighbor or latent factor modeling) 

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Paper about a Contextual Hybrid Recommender called LightFM](https://arxiv.org/pdf/1507.08439.pdf)