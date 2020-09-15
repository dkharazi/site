---
title: "Decision Trees"
draft: false
weight: 3
katex: true
---

### Describing Decision Trees
- A decision tree is a nonlinear predictive model used for classification
- Regression trees and classification trees are the two types of decision trees
- A decision tree can include a combination of regression tress and classification trees at different levels

### Motivating Decision Trees
- Global models refer to a single predictive formula that holds true over an entire data space
- Linear and polynomial regression models are examples of global models
- When the data has lots of features that interact with each other in complicated, nonlinear ways, then assembling a single global model can be very difficult
- Some non-parametric smoothers try to fit models locally and paste them together (i.e. local regression models), but these models are fairly hard to interpret
- Therefore, an alternative approach to nonlinear regression is to partition the space into smaller regions, where the interactions are more manageable
- Then, we partition the sub-divisions again (i.e. recursive partitioning) until we finally get to chunks of the space that are so tame that we can fit simple models to them

### General Idea of Decision Trees
1. Pick an attribute (e.g. width > 6.5, car = red, etc.)
2. Conditioned on a choice, pick another attribute
3. In the leaves, assign a class with a majority vote
4. Do other branches

### Representation of Decision Trees
- A decision tree is a tree represented as either a root node and leaves
- The leaves of a decision tree graphically represent axes that separate classes from each other
- In other words, leaf nodes represent outputs (i.e class assignments)
- Branching is determined by attribute value
- Internal nodes test attributes

### Classification and Regression Trees
- A classification tree is a type of decision tree that takes in discrete input and returns discrete output
- A regression tree is a type of decision tree that takes in a continuous input and returns a continuous output
- Leaf values in a classification tree are typically set to the most common value in the training data
- Leaf values in a regression tree are typically set to the mean value in the training data
- In both cases, more compact decision trees typically have more predictive power than decision trees that are very large

### Learning Decision Trees
1. Resort to a greedy heuristic by starting from an empty decision tree
2. Determine the next best attribute to split on by calculating the split with the highest information gain
3. Recurse

### References
- [Classification and Regression Trees](https://www.stat.cmu.edu/~cshalizi/mreg/15/lectures/27/lecture-27.pdf)
- [Decision Trees Example](https://www.cs.toronto.edu/~urtasun/courses/CSC411_Fall16/06_trees_handout.pdf)
