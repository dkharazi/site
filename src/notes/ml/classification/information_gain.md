---
title: "Information Gain"
draft: false
weight: 1
katex: true
---

### Describing Information Gain
- Information gain is the amount of information gained about a random variable from observing another random variable
- Information gain is a metric that is used to evaluate the splitting criteria for a decison tree
- In other words, we evaluate the information gain of an attribute (or split) to tell us how important the attribute is
- The following are some example attributes we may evaluate using information gain:
	- Should we split on balance > 50k
	- Should we split on applicant = employed
	- Should we split on weather = sunny
- Information gain uses the entropy metric in its calculation
- Our goal is to find a split that maximizes the information gain, which will happen if we minimize the entropy for the groups created by the split
- Specifically, information gain can be defined as the following equation:

$$
Gain = entropy_{p} - mean(entropy_{c})
$$

- Where $Gain$ is the information gain
- Where $entropy_{p}$ is the total entropy of a parent node
- Where $entropy_{c}$ is the average entropy of a proposed child node

### Describing Entropy
- Entropy measures the level of impurity in a group created by a proposed split
- We should only think about splitting if our group is very impure (i.e. Entropy = 1)
- Our goal is to find a split that minimizes the entropy for each group created by the split
- Minimizing the entropy is the same as minimizing the impurity
- In other words, the best split will be the one that makes sure each group contains data with the same value (i.e. the least impure)
- Entropy is defined by the following equation:

$$
Entropy = - \sum_{i=1}^{c} p_{i}log(p_{i})
$$

- Where $p_{i}$ is the probability of class (or group) $i$

### Describing Gini Impurity
- Gini impurity and entropy are different types of measures of impurity
- Specifically, CART analytics considers them as almost the same
- Given a choice, some prefer the gini impurity
- This is because it doesn't require logarithmic functions to be computed
- The gini impurity can be defined as the following:

$$
Gini = 1 - \sum_{i=1}^{c}p_{i}^{2}
$$

- Where $p_{i}$ is the probability of class (or group) $i$

### Example of Calculating Entropy
- Let's say we are trying to evaluate the purity of a group, where we have 16 males and 14 females in our sample
- Then, we could define our entropy as the following:

$$
Entropy = (-\frac{16}{30})(-0.9) - (\frac{14}{30})(-1.1) = 0.99
$$

- In this case, we should think about splitting, since the group is extremely pure

### Another Example of Calculating Entropy
- Let's say we are trying to evalute the purity of a group, where we have only 16 males in our sample
- Then, we could define our entropy as the following:

$$
Entropy = (-\frac{16}{16})(0) = 0
$$

- In this case, we shouldn't think about splitting, since the group is extremely pure

### Example of Information Gain Calculation
- Let's say we are trying to evaluate a split of a group, where we initially have 16 males and 14 females in our sample
1. Calculate the parent entropy
	$$
	-(\frac{14}{30})(log(\frac{14}{30})) - (\frac{16}{30})(log(\frac{16}{30})) = 0.996
	$$
	- In this case, the impurty is large, so we should split
2. Calculate one child's entropy
	$$
	-(\frac{13}{17})(log(\frac{13}{17})) - (\frac{4}{17})(log(\frac{4}{17})) = 0.787
	$$
	- Here, there are $17$ data points in this group after the split
	- Also, $13$ of those data points are female, and $4$ of those data points are male
	- In this case, the impurity is fairly high for this group after the split
3. Calculate the other child's entropy
	$$
	-(\frac{1}{13})(log(\frac{1}{13})) - (\frac{12}{13})(log(\frac{12}{13})) = 0.391
	$$
	- Here, there are $13$ data points in this group after the split
	- Also, $1$ of those data points are female, and $12$ of those data points are male
	- In this case, the impurty is fairly small for this group after the split
4. Calculate the weighted average entropy of the children
	$$
	(\frac{17}{30})0.787 + (\frac{13}{30})0.391 = 0.615
	$$
5. Calculate the information gain
	$$
	0.996 - 0.615 = 0.38
	$$
	- Therefore, this split gives us $0.38$ amount of additional information
	- We should evalute other splits, and choose this one if there aren't any other splits with an information gain greater than $0.38$

### References
- [Information Gain Lecture Notes](https://homes.cs.washington.edu/~shapiro/EE596/notes/InfoGain.pdf)
- [Finding Informative Features](https://www.stat.cmu.edu/~cshalizi/350/2008/lectures/05/lecture-05.pdf)
- [Information Gain Wiki](https://en.wikipedia.org/wiki/Information_gain_in_decision_trees)
- [Entropy and Gini Impurity](https://datascience.stackexchange.com/a/10273/93566)
