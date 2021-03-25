---
title: "XGBoost for Regression"
draft: false
weight: 6
katex: true
---

### Introducing XGBoost for Regression
- The model used in XGboost is a tree ensemble
    - Consisting of classification and regression trees
- Gradient boosting is used for building out the tree ensemble
- Boosting algorithms are roughly functional gradient descent algorithms
    - Meaning, they optimize a cost function over function space by iteratively choosing a function (weak hypothesis) that points in the negative gradient direction
- XGBoost trees differ from normal decision trees, where each leaf is a score instead of actual decision values
- Random forests and gradient boosted trees are the same model (tree ensembles), but differ in how we train them
- In XGBoost, these trees are learned using a defined objective function and optimizing it
- The objective function contains two components in XGBoost:
    - A loss function
    - A regularization function
- Prunes the tree (decides whether to add branches or not) by calculating the information gain for each branch and only adding branches with larger information gains

### Describing XGBoost for Regression
1. Choose a loss function $L$
    - A loss value represents how good our model is at predicting an observation
2. Compute an initial prediction $y^{*}$ that equals $0.5$
3. Compute the residuals $r_{i}$ between each observation $y_{i}$ and $y^{*}$
4. Fit a regression tree to the $r_{i}$ values
    - Where, $n$ is the number of observations
    - Where, $\lambda$ is
    - Where, $O^{2}_{value}$ is
    $$
    \frac{1}{2} \lambda O^{2}_{value} + \sum_{i=1}^{n}L(y_{i}, y_{i}^{*})
    $$
5. Perform pruning on the tree by removing the lowest leaves
6. Assign output values $\gamma_{j}$ to each leaf:
$$
\gamma_{j} = \frac{\text{sum of residuals for leaf j}}{\lambda + \text{number of residuals for leaf j}}
$$
7. Create a new prediction $y^{*}$ that is:
    - Here, $\nu$ is the learning rate used for regularization
    - Here, $\gamma_{j}$ is the average associated with the $j^{th}$ leaf for the $i^{th}$ observation
    $$
    \overbrace{y_{i}^{*}}^{\text{new}} = \overbrace{y_{i}^{*}}^{\text{current}} + (\nu \times \gamma_{j})
    $$
8. Repeat steps $3-7$, until we build $M$ different shallow trees
    - In practice, typically $M=100$


### Fitting an XGBoost Regression Tree
- In XGBoost, a tree is fit (step $4$) using its own fitting method
- Specifically, the XGBoost fitting method follows these steps:
    1. Select a single independent variable
    2. Select two observations with neighboring values of the selected independent variable
    3. Split on the average of these two observations
    4. Compute the following similarity score:
    $$
    \text{similarity score} = \frac{\text{sum of squared residuals for leaf j}}{\lambda + \text{number of residuals for leaf j}}
    $$
    5. Compute the information gain of the split:
    $$
    \text{Gain} = \text{sim}_{left} + \text{sim}_{right} - \text{sim}_{root}
    $$
    6. Shift to the next two observations with neighboring values of the selected independent variable
    7. Continue to shift and compute by repeating steps $3-6$
    8. Continue to iterate through other independent variables by repeating steps $2-7$
- Here, $\lambda$ is a regularization hyperparameter
- Again, the similarity score is computed for each $j^{th}$ leaf
    - Leaves with similar residuals produce a larger similarity score
    - Leaves with dissimilar residuals produce a smaller similarity score
- The information gain determines whether a split is good or not
    - Splits are considered good if they produce a large information gain
    - Split are considered poor if they produce a small information gain
- Thus, the best split with the highest information gain
- The depth of the tree is determined using a hyperparameter
- The maximum number of leaved is determined using a hyperparameter

### Pruning an XGBoost Regression Tree
- A tunable hyperparameter $\gamma$ is used for pruning trees
- Calculate the following formula for each leaf:

$$
\text{Gain} - \gamma > 0
$$

- If the difference between the gain and $\gamma$ is negative, then we remove the branch

### References
- [Video about Mathematical Details for XGBoost](https://www.youtube.com/watch?v=ZVFeW798-2I)
- [Video about XGBoost for Regression](https://www.youtube.com/watch?v=OtD8wVaFm6E)