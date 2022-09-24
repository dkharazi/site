---
title: "Model-Based Collab Filtering"
draft: false
weight: 5
katex: true
---

### Introducing Recommendation Systems
- The goal of any recommender system is to do the following:
    - Predict the ratings that a certain user would give to different catalog items
    - Create a list of recommendations by selecting
    - Rank those items with the highest predicted ratings
- Collaborative filtering is used for creating recommendation systems

### Introducing Collaborative Filtering
- Under the hood, collaborative filtering uses a predictive model to predict a rating for a given pair of user and item
- These predictions are based on how similar users rate similar items
- Specifically, the model captures interactions between known users and items from the rating matrix
- The benefit of collaborative filtering is that they're capable of making recommendations based only on the patterns and similarities available in the rating matrix
- It has the following disadvantages:
    - Difficult to build reliable rating predictions if matrix is too sparse
    - Difficult to handle new users or items (cold start problem)
    - Somewhat biased towards popular items (difficult to pick up on unusual tastes)

### Defining Types of Collaborative Filtering
- Collaborative filtering algorithms are usually categorized into two subgroups:
    - Neighborhood-based methods
    - Model-based methods
- Neighborhood-based methods predict unknown ratings for a given user or item by doing the following:
    - Finding the most similar known users or items
    - Averaging ratings from their records
- Model-based methods go beyond the nearest neighbor approach
    - Specifically, they use more sophisticated, predictive models

### Introducing Model-Based Collaborative Filtering
- Often, a neighborhood-based algorithm does the following:
    - Optionally, impute missing data (using neighborhood or model based methods)
    - Computes the similarity between each user and item
    - Optionally, group similar users beforehand using locality-sensitive hashing
    - Predict the rating of a user and item by calculating the weighted average of the $k$ nearest neighbors
- Often, a model-based algorithm does the following instead:
    - Optionally, impute missing data (using neighborhood or model based methods)
    - Compute latent factors by performing matrix factorization (using SVD or PCA)
        - Naturally, this will act as a form of dimensionality reduction
    - Predict the rating of a user and item wtih matrix multiplication of latent factors

### Introducing Matrix Factorization
- Matrix factorization (or latent factor models) are the most popular model-based method
- The following are popular forms of matrix factorization:
    - Unconstrained matrix factorization (or funk MF)
        - Optimization using stochastic gradient descent (SGD)
        - Optimization using alternating least squares (ALS)
    - Singular value decomposition (SVD)
    - Non-negative matrix factorization
- Most matrix factorization methods follow these steps:
    - Receive defined model of matrices
    - Define the objective function
    - Optimize with gradient descent

### Advantages of Model-Based Collaborative Filtering
- This approach offers the following advantages over neighborhood-based methods:
    - **Accuracy**
        - There are more accurate models compared to kNN
    - **Stability**
        - Offers dimensionality reduction methods
        - Thus, sparse matrices can be transformed into more condensed representations
        - This improves the stability of predictions
    - **Scalability**
        - Models can be trained offline
        - Then, these models can be evaluated for online requests
- Some model-based methods can provide all of these improvements
    - Others can only provide some of them

### Defining Singular Value Decomposition
- Again, the rating matrix $R$ consists of:
    - A $u$ number of rows representing individual users
    - A $i$ number of columns representing individual items
    - Each entry represents a rating
- Latent factor models decompose the ratings matrix into:
    - A $u \times k$ user matrix $U$
    - A $k \times i$ item matrix $I$
    - A $k \times k$ weight matrix $\Sigma$
        - Essentially, this represents a matrix denoting which $k^{th}$ latent factor carriest most of the information
        - Or, each value located in the diagonal of the matrix represents the strength of the $k^{th}$ latent factor
- Here, $u$ is the number of users in our rating matrix
- Here, $i$ is the number of items in our rating matrix
- Here, $k$ is the number of latent factors
    - Each latent factor represents some learned context
    - Increasing the number of latent factors improves personalization
    - Increasing the number of latent factors by too much harms performance and leads to overfitting
    - Typically, a regularization term is introduced to avoid overfitting

![svd](../../../img/svd.svg)

### Illustrating Latent Factor Models
- Suppose we have a ratings matrix $R$ consisting of customers and movies
- For this example, we'll assign the number of latent factors $k$ to equal $2$
- Thus, we'll learn two different types of *context* from our customers $U$ and movies $I$
- Notice, our optimization algorithm will learn $2$ different contexts:
    - The degree to which a movie is meant for children or a customer is a child
    - The degree to which a movie is a blockbuster of a customer enjoys blockbuster movies
- The following image illustrates the learned latent factors:

![latentfactors](../../../img/latentfactors.svg)

### References
- [Slides for Latent Factor Models](https://www.cs.cmu.edu/~mgormley/courses/10601-s17/slides/lecture25-mf.pdf)
- [Alternating Least Squares with Spark](https://spark.apache.org/docs/2.2.0/ml-collaborative-filtering.html)
- [Collaborative Filtering with Implicit Feedback](https://towardsdatascience.com/building-a-collaborative-filtering-recommender-system-with-clickstream-data-dffc86c8c65)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Personalizing Experience with Callaborative Filtering](https://databricks.com/blog/2020/12/18/personalizing-the-customer-experience-with-recommendations.html)
- [Building Recommendation Systems in Python](https://realpython.com/build-recommendation-engine-collaborative-filtering/)
- [Paper about Collaborative Filtering Methods](http://cs229.stanford.edu/proj2007/Dommeti-NeighborhoodBasedMethodsForCollaborativeFiltering.pdf)
- [Google Course about Basics of Collaborative Fitlering](https://developers.google.com/machine-learning/recommendation/collaborative/basics)