---
title: "Hybrid Filtering Methods"
draft: false
weight: 6
katex: true
---

### Defining Hybrid Recommendation Methods
- An ideal recommender should be dynamic and flexible to a wide range of effects
- As a result, it should include multiple data sources and handle:
    - User-item interactions
    - Item content similarities
    - Etc.
- Most methods can only use one type of data and capture a particular effect
- For example, vanilla collaborative filtering is only focused on data from a rating matrix, and it doesn't focus on item or user content
- Alternatively, content-based filtering focuses only on item or user content, and it doesn't focus on data from a rating matrix
- Each method has its pros and cons but can compliment each other if we combine them, which is done using a *hybrid* method

### Relating Hybrid Methods to Ensemble Learning
- The problem of hybrid recommenders is closely related to ensemble learning
- Specifically, we're creating and combining multiple classification/regression models
- By doing this, we can improve the overall accuracy (compared to using a single learning algorithm)

### Defining a Hybrid Model using Switching
- Switching is one of the most basic hybrid methods
- Specifically, it refers to combining recommendation algorithms together and switching between them depending on a condition
- For example, we could use a collaborative filtering method for items with ratings
    - Then, we could use a content-based filtering model for items without ratings
    - Since collaborative filtering works well with ratings
    - But, collaborative filtering doesn't work well without ratings (i.e. cold-start problem)
- Although switching mitigates the cold-start problem, it's a somewhat rudimentary solution
    - This is because it's based on an arbitrary rule (rather than an optimization framework)

### Describing a Hybrid Model using Blending
- Blending involves combining estimates of multiple recommenders
    - These estimates are rating estimates for a given user and item
    - The multiple recommenders should be training on the same user-item rating matrix
    - Estimates are combined to create a more accurate rating
- Blending can be done by:
    - An arbitrary rule (similar to switching)
    - Or by a regression model (by optimization)
- Recall, each recommender has its own unique pros and cons
- By blending ratings from individual models together, we're optimizing a final regression model
    - Our hope is for this final model to know when to switch on or off from models that don't benefit us in a particular scenario
    - The thinking is this will produce a better final rating compared to an individual model
- Roughly, switching and blending have a similar goal
    - However, switching relies on more heuristic rules
    - Whereas, blending tries to use optimization to find the ideal points when to switch on and off
        - It does this by blending ratings together

### Describing Blending Methods
- Blending allows us to determine how we should wait weight ratings from each individual model
    - The linear combination of weights and ratings from individual models equals the final rating
- The blend of individual models can include dozens of recommendation models including:
    - Neighborhood-based
    - Latent factor models
    - Mixed models
- The individual models can be trained on the entire training set
    - Or, this set can be divided into subsets randomly
    - Or, it can be divided using some criteria
    - Then, the individual models can be trained on specific bins of training data
- We can use a regression model to calculate the final rating
- However, the best results are obtained using neural nets or gradient boosted trees

### Illustrating Tested Blending Methods
- Many different models were trained and tested on the Netflix set
- Various blending algorithms include linear, kernel, polynomial regression, bagged decision trees, and artificial neural networks
- An ANN with a single hidden layer achieves the lowest RMSE
- An advantage of using ANNs for blending is their excellent accuracy and fast prediction time
    - Specifically, a few seconds for thousands of testing samples)
- This is at the cost of a long training time (hours for millions of training examples)
- The pseudocode for a blending method can be the following:

![pseudocoderecs](../../../img/pseudorec.svg)

### Defining a Hybrid Model using Feature Augmentation
- Recommenders with feature augmentation is another hybrid design
- It's a method where several recommenders are chained together
    - Specifically, they're chained so predictions produced by one recommender are consumed by another recommender as input
- Roughly, we can think of this as *chaining* multiple recommenders together before the final blending layer

### Illustrating a Use-Case for Feature Augmentation
- Typically, we'll do this to reformulate features so downstream models can use them as inputs
- One use-case includes using the output of collaborative filtering as inputs of a content-based recommender
- This includes creating similarity features using collaborative filtering to use as new features in a content-based model
- For example, a content-based model can use features like *similar products* or *similar customers*
- These features could be created using similarity measured computed using collaborative filtering
- Here, first we're generating new features with a collaborative filtering model
- Then, we're consuming these features in a downstream content-based classifier

### Illustrating Another Use-Case for Feature Augmentation
- Alternatively, another use-case includes using the output of content-based filtering as inputs of a collaborative filtering recommender
- This includes imputing missing values in a rating matrix for collaborative filtering using the output generated by content-based features
- For example, a collaborative filtering model can only accept ratings
- So, we can use input features like *age* or *gender* into a content-based model to output a rating
    - Which, has information about age/gender baked into the rating
- Then, we can replace missing ratings with our new ratings from the content-based model

### Selecting the Right Hybrid Recommender
- When selecting a recommender, we should consider how our recommendations are meant to be presented
- Specifically, recommendations from different models shouldn't always be blended together
- For example, recommendations on a site may best be presented as separate categories
- Meaning, one recommender may refer to part of the page including *top rated items* for a user
- Another recommender may refer to a different part of the page including *similar items* for a given user

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Paper about Hybrid Methods and Blending](https://arxiv.org/pdf/1901.01418.pdf)
- [Netflix Prize using Blending](https://www.netflixprize.com/assets/GrandPrize2009_BPC_BigChaos.pdf)