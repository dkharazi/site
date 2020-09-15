---
title: "Gradient Boosting"
draft: false
weight: 5
katex: true
---

### Describing Gradient Boosting
- Gradient boosting is a machine learning technique for regression and classification problems
- Gradient boosting typically produces a prediction model in the form of an ensemble of weak prediction models
- Typically, gradient boosting produces decision trees

### Gradient Boosting Algorithm
1. Initialize equal weights per sample
2. Take a sample from the training set
3. Fit a classification (or regression) tree using sample weights
4. Increase the sample weights for misclassified observations
5. Repeate sampling process based on updated weights, and continue to increase the sample weights for misclassified observations
6. Perform classification on each model and choose the class that occurred the most (i.e. majority vote)

### References
- [Gradient Boosting Wiki](https://en.wikipedia.org/wiki/Gradient_boosting)
- [Golf Example using Gradient Boosting](https://sefiks.com/2018/10/04/a-step-by-step-gradient-boosting-decision-tree-example/)
- [Post about Gradient Boosting Algorithm](https://stats.stackexchange.com/questions/88931/could-you-explain-how-gradient-boosting-algorithm-works/294877)
- [Another Blog Post about Gradient Boosting](https://medium.com/greyatom/boosting-ce84639a805d)
