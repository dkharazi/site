---
title: "Recommendation Methods"
draft: false
weight: 1
katex: true
---

### Defining Properties of Customer Ratings
- There are two primary properties of customer ratings:
    1. Type of feedback (i.e. implicit or explicit)
    2. Sparsity
- Typically, the goal of a recommender is to make recommendations about a customer's affinity for a given product
    - Customer affinity refers to how much a customer likes a product
- An *explicit* rating is the best measure of customer affinity for a given item
    - An *explicit* rating is just a rating explicitly defined by a user
        - E.g. a rating between $1$-$5$
    - They're the best way to measure customer affinity because the customer has defined their affinity for a product themselves
- However, we often don't have explicit ratings for products, but still want to make recommendations
- In this case, we can use *implicit* ratings to measure customer affinity for a given item
    - An *implicit* rating refers to a metric we use as a proxy for a true, customer affinity (or explicit rating)
    - For example, we may use sales as an implicit rating
    - Unlike an actual explicit rating made by the customer, sales doesn't explicitly represent a rating
        - Instead, it's just the best proxy we have 
- Implicit feedback is usually thought of as *confidence in a preference*, whereas explicit feedback is thought of as the actual *preference*

### Describing Sparsity of Customer Ratings
-  The second important property of a rating matrix is sparsity
- A rating matrix is inherently sparse because any single user interacts with only a tiny fraction of the available items
- So, each row of the matrix contains only a few known ratings and all other values are missing
- This means there is a disproportionally large number of known ratings corresponding to a few of the most popular items
- Whereas, niche product ratings are especially scarce

### Illustrating Different Recommendation Methods
- Recommendation methods can be categorized in a number of ways
- They're categorized by the type of predictive model and its inputs
- The two main families of recommendation methods are:
    - Content-based filtering
    - Collaborative filtering
- Content-based filtering relies on content data
    - E.g textual descriptions of items
- Collaborative filtering relies on patterns in the rating matrix
- Both approaches can use either of the following strategies:
    - Formal predictive models
    - Heuristic algorithms searching for a neighborhood of similar users or items
- In addition to these core methods, there is a wide range of solutions that can be used together to create *hybrid models*
- We can also extend the core methods to account for contextual data in *contextual models*
- Or, we can detach the core methods to account for *non-personalized models*

![recommendationmethods](../../../img/recmethods.svg)

### Illustrating Usage of Recommendation Methods
- The hierarchy of recommendation methods look different if we focus on the purpose of them
- Specifically, we can categorize the usage of methods in two dimensions:
    - Level of personalize
    - Usage of contectual information
- The core recommendation methods (i.e. content-based and collaborative filtering) are mainly used for *personalized* and *context-unaware* models
    - They make recommendations based on historical interacations of items between users
    - These recommendations are often displayed in sections like:
        - *You might also like*
        - *Your favorites*
        - *Inspiried by your browsing history*
        - *Buy it again*
- Recommendations can be even more personalized by taking into account contextual information
    - E.g. user location, purchase day of week, etc.
    - These recommendations could be like the following:
        - *Restaurants near you*
        - *Destinations you might like for your next trip*
- Whereas, non-personalized methods take a different approach by relying on global statistics and item properties (rather than personal profiles)
    - These recommendations could be like:
        - *Most popular*
        - *Trending*
        - *New releases*

![personalizedrecommendations](../../../img/persorecs.svg)

### Combining Recommendations Together
- Note, personalized and non-personalized recommendations can be combined together in many different ways
- For example, personalized recommendations selected based on historical users' interactions can be sorted by popularity
    - Alternatively, the most popular items can be selected within a category of products preferred by the user
- Lastly, non-personalized recommendations can also be contextualized by user location or marketing channel
    - For example, a product page could include recommendations like:
        - *Frequently bought together*
        - *More like this*

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)