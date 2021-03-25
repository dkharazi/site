---
title: "Gradient Boosting"
draft: false
weight: 5
katex: true
---

### Introducing Gradient Boosting
- Gradient boosting is a machine learning technique for regression and classification problems
- Gradient boosting typically produces a prediction model in the form of an ensemble of weak prediction models
- Typically, gradient boosting produces decision trees

### Describing Gradient Boosting for Classification
1. Choose a loss function $L$
    - Loss values represent how off our model is when making predictions for an observation
2. Compute an initial prediction $y^{*}$ that is the probability of the response:

$$
\log(\text{odds}) = \frac{\text{num of True}}{\text{num of False}}
$$

$$
y^{*} = P(y=1) = \frac{e^{\log(\text{odds})}}{1+e^{\log(\text{odds})}}
$$

3. Compute the residuals $r_{i}$ between each observation $y_{i}$ and $y^{*}$
4. Fit a regression tree to the $r_{i}$ values
    - Usually, these trees are shallow, but larger than a stump
5. Send each observation through the new tree
    - Then, each observation is associated with a $j^{th}$ leaf
6. Compute $\gamma_{j}$ that is the following transformation for each $j^{th}$ leaf
    - Here, $\sum_{j=1}^{J}r_{i}$ is the sum of all the residuals in leaf $j$
    - Here, $\sum_{j=1}^{J}y_{i}^{*}$ is the sum of all the previous predictions in leaf $j$
    $$
    \gamma_{j} = \frac{\sum_{j=1}^{J}r_{i}}{\sum_{j=1}^{J}(y_{i}^{*} \times (1-y_{i}^{*}))}
    $$
7. Create a new prediction $y^{*}$ that is:
    - Here, $\nu$ is the learning rate used for regularization
    - Here, $\gamma_{j}$ is the tree output associated with the $j^{th}$ leaf for the $i^{th}$ observation
    $$
    \overbrace{y_{i}^{*}}^{\text{new}} = \overbrace{y_{i}^{*}}^{\text{current}} + (\nu \times \gamma_{j})
    $$
8. Repeat steps $3-7$, until we build $M$ different shallow trees
    - In practice, typically $M=100$

### Iteratively Building New Trees 
- Each tree that is built in step $4$ is a shallow tree that minimizes the cost function
- Splits are determined using a *greedy split-finding algorithm*
- Specifically, it iterates over all the possible splits on all the features
- Then, determine the best split with the highest information gain
- The depth of the tree is determined using a hyperparameter
- The maximum number of leaved is determined using a hyperparameter too

### References
- [Video about Formulas for Gradient Boosting](https://www.youtube.com/watch?v=StWY5QWMXCw)
- [Video about Gradient Boosting for Classification](https://www.youtube.com/watch?v=jxuNLH5dXCs)
- [Gradient Boosting Wiki](https://en.wikipedia.org/wiki/Gradient_boosting)
- [Golf Example using Gradient Boosting](https://sefiks.com/2018/10/04/a-step-by-step-gradient-boosting-decision-tree-example/)
- [Post about Gradient Boosting Algorithm](https://stats.stackexchange.com/questions/88931/could-you-explain-how-gradient-boosting-algorithm-works/294877)
- [Another Blog Post about Gradient Boosting](https://medium.com/greyatom/boosting-ce84639a805d)
