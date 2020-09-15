---
title: "Random Forests"
draft: false
weight: 4
katex: true
---

### Motivating Random Forests
- Decision trees are easy to build and easy to interpret
- However, decision trees are typically less accurate than other learning methods in practice
- In other words, they work great with the data used to create them (i.e. training data), but are not flexible when it comes to classifying new samples (i.e. testing data)
- The good news is that random forests combine the simplicity of decision trees with flexibility
- As a result, random forests receive a great improvement in accuracy compared to ordinary decision trees

### The Random Forest Algorithm
1. Create a bootstrapped dataset from out training data
	- Sample from the training data with replacement in order to create a bootstrapped dataset
2. Create a decision tree using the bootstrapped dataset
	- Only use a random subset of variables
	- This is to prevent any bias or overfitting in the eventual random forest model
3. Repeat steps 1 and 2 a bunch of time so we have many different types of trees with different columns trained on different data
4. Predict any new observations (i.e. testing data) by running its attributes through each and every decision tree
	- This step can refer to the model evalutation step or the prediction step
	- We typically want to perform model evaulation directly after collecting all of our decision trees
	- This process involves fitting our collection of decision trees on testing data to verify a high accuracy
	- We typically will predict after our model evaluation step
5. Sum up all of those predictions and choose the option (or class) that received the most votes
	- We refer to this process as bagging
	- Specifically, bagging refers aggregating predictions on bootstrapped data

### References
- [Random Forests and Other Ensembles](http://www.stat.cmu.edu/~cshalizi/dm/19/lectures/25/lecture-25.html)
- [Building Random Forests StatQuest Video](https://www.youtube.com/watch?v=J4Wdy0Wc_xQ&vl=en)
- [Clustering Random Forests StatQuest Video](https://www.youtube.com/watch?v=nyxTdL_4Q-Q&t=408s)
