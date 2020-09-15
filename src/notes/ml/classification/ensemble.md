---
title: "Ensemble Methods"
draft: false
weight: 2
katex: true
---

### Motivating Ensemble Methods
- An ensemble method is a technique that combines several base models together in order to produce one optimal predictive model
- Ensemble methods are used to improve predictions by decreasing variance or bias
- Ensemble methods produce $n$ learners by generating additional data in the training stage
- These $n$ new training datasets are produced by random sampling with replacement from the original dataset

### Describing Bagging
- In the case of bagging, any observation has the same probability of appearing in the new dataset
- The training stage is parallel for bagging
- Meaning, each model is build independently
- In bagging, the result is obtained by averaging the responses of the $n$ learners (or majority vote)

### Bagging Algorithm
1. Draw a random sample with replacement from the training set
2. Train a model on that random sample
3. Keep repeating the above steps until we're satisfied with the number of models we have
4. Perform classification on all of the models, and choose the class with the highest number of votes out of all the models (i.e. majority vote)

### Advantages of Bagging
- Attempts to reduce variance
- Reduces overfitting
- Handles higher dimensionality of data well
- Maintains accuracy for missing data

### Disadvantages of Bagging
- Bagging will rarely produce better bias
- Since the final prediction is based on the mean of the predictions from the subset trees, it won't give precise values for the classification and regression model

### Describing Boosting
- In the case of boosting, observations have a distinct probability of appearing in the new dataset
- Boosting builds the new learnings in a sequential way
- Boosting is an iterative ensemble technique that adjusts the weight of an observation based on its previous classification's success
- Specifically, boosting will increase the weight of an observation if the observation was incorrectly classified
- In boosting, the result is obtained by taking a weighted average of the $n$ learners
- Specifically, the algorithm allocates weights to each resulting model
- A learner with a good classification result on the training data will be assigned a higher weight compared to learners with a poor classification results
- So, boosting needs to keep track of learners' errors, too

### Boosting Algorithm
1. Draw a random sample without replacement from the training set
2. Train a weak learner on that random sample
3. Draw another random sample without replacement from the training set, and add $50%$ of the observations that were incorrectly classified from the previous sample
4. Train a weak learner on our new random sample
5. Draw another random sample without replacement from the training set, and add $50%$ of the observations that were incorrectly classified from the previous two samples
6. Keep repeating the above steps until we're satisfied with the number of weak learners we have
7. Perform classification on all of the models, and choose the class with the highest number of votes out of all the models (i.e. majority vote)

### Advantages of Boosting
- Supports different loss functions
	- By default, we typically use binary:logistic loss function
- Works well with interactions
- Attemps to reduce bias

### Disadvantages of Boosting
- Prone to overfitting
- Requires careful tuning of different hyper-parameters

### References
- [Illustrating Differences between Ensemble Methods](https://quantdare.com/what-is-the-difference-between-bagging-and-boosting/)
- [Boosting Wiki](https://en.wikipedia.org/wiki/Boosting_(machine_learning))
- [Bagging Wiki](https://en.wikipedia.org/wiki/Bootstrap_aggregating)
- [Overview of Different Ensemble Methods](https://stats.stackexchange.com/questions/18891/bagging-boosting-and-stacking-in-machine-learning)
- [Blog Post about Ensemble Methods](https://blog.statsbot.co/ensemble-learning-d1dcd548e936)
- [Blog Post about Bagging and Boosting](https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/)
