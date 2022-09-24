---
title: "Summary of Recommenders"
draft: false
weight: 10
katex: true
---

### Two Basic Properties of Ratings
1. Type of Feedback (i.e. implicit vs explicit)
    - **Explicit Ratings**: a metric explicitly defined by the user, which measures customer affinity
    - **Implicit Rating**: a metric we use as a proxy for an explicit rating(i.e. a proxy for an actual affinity score)
2. Sparsity
    - A matrix of ratings is always sparse because users only interact with a small % of items
    - Meaning, there is a disproportionally large number of known ratings corresponding the most popular items
 
### Two Basic Properties of Recommenders
1. Level of personalization
2. Usage of contextual information
    - Simple content-based and collaborative filtering models are categorized as *personalized, non-contextual* models

![personalizationrecs](../../../img/persorecs.svg)
 
### Two Basic Types of Recommenders
1. Content-Based Filtering Models
    - A model using item features (e.g. age, gender, etc) to approximate ratings
2. Collaborative Filtering Models
    - A model using a rating matrix to approximate ratings

![recommendationmethods](../../../img/recmethods.svg)

### User- and Item-Based Neighborhood Methods
- Suppose we have a rating matrix for Spotify of listeners and songs
- An item-based recommender would recommend songs based on other similar songs
    - If I enjoy country and jazz, I may be recommended a song that is similar to other jazz songs I’ve enjoyed
    - Or, I may be recommended a song that is similar to other country songs I’ve enjoyed
- A user-based recommender would recommend songs based on other similar listeners
    - If I enjoy country and jazz, I may be recommended a song enjoyed by other listeners who enjoy country and jazz
- User-based and item-based are structurally similar, where the only difference is in the nature of the similarity measure
    - As a result, we should expect the recommendations to be somewhat similar between the two over time
    - Item-based can have some benefit in terms of scale (Amazon invented it for this reason), since they can return similar recommendations over time
    - To find the right one for the problem at hand involves experimentation
 
### Illustrating Latent Factor Models
- Suppose we have a rating matrix of customers and movies
- A latent factor model (with number of factors learned = 2) could create factors for whether a movie is a blockbuster or not, and whether the movie is designated for children or not  
 
### Properties of Content-Based Filtering Recommenders
- User independence (advantage):
    - Can make decent recommendations for new users
    - This is because content-based models don’t learn about user-specific behavior
    - Instead, they learn about feature-specific behavior (using basic classification/regression models)
- More feature engineering (disadvantage):
    - Most content-based features require more feature engineering compared to only retrieving ratings for a rating matrix (for collaborative filtering)
- Trivial recommendations (disadvantage):
    - Can often produce trivial recommendations without any novelty
    - Since, content-based models converge towards the average customer

![latentfactors](../../../img/latentfactors.svg)
 
### Properties of Collaborative Filtering Recommenders
- Less feature engineering (advantage):
    - Capable of making recommendations based only on patterns/similarities available in the rating matrix
- Involves transfer learning across users and items (advantage):
    - If most customers who like hamburgers also like hot dogs, we can confidently recommend hot dogs to a customer who’s only ever interacted with hamburgers (and rated them highly)
- Sparsity (disadvantage):
    - Difficult to build reliable rating predictions if the rating matrix is too sparse
- Cold-Start Problem (disadvantage)
    - Unable to handle new users or items

### Tradeoff between Sparsity and Collaboration
- In general, there is a tradeoff between mitigating sparsity and producing collaborative recommendations when switching between content-based method and collaborative methods
- Content-based methods address issues with sparsity and the cold-start problem
    - They do this by representing items through their meta-features
    - As these are known in advance, recommendations can be computed even for new items for which no collaborative data has been gathered
- Unfortunately, no transfer learning occurs in content-based models
    - Whereas, transfer learning occurs in collaborative models
    - Instead, content-based models for each user are estimated in isolation and do not benefit from data on other users
- Consequently, content-based models perform worse than matrix-factorization models where collaborative information is available and require a large amount of data on each user
    - Rendering them unsuitable for user cold-start

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Paper about Hybrid Contextual Model named LightFM](https://arxiv.org/pdf/1507.08439.pdf)