---
title: "Basics of Learning Methods"
draft: false
weight: 1
katex: true
---

### Supervised versus Unsupervised Learning
- Roughly, supervised learning is a modeling process for some response variable that has already been observed
- On the other hand, unsupervised learning is a modeling process for some variable that has not been observed
- In other words, supervised learning refers to examples (or training data) that have already been labeled by someone who knew what they were doing
- And, unsupervised learning refers to discovering examples that have not been observed in the data yet
- Supervised learning allows us to verify the performance on the labeled training data, whereas unsupervised learning does not allow us to do this

### Types of Learning Problems

| Known Classes? | Class Labels                             | Type of Learning Problem            |
| -------------- | ---------------------------------------- | ----------------------------------- |
| Yes            | Given for training data                  | Classification; supervised learning |
| Yes            | Given for some but not all training data | Semi-supervised learning            |
| Yes            | Hints/feedback                           | Feedback or reinforcement learning  |
| No             | None                                     | Clustering; unsupervised learning   |

### Description of Learning Problems
- The type of learning problem is based on having known categories and labeled examples of the categories
- Supervised learning refers to the process of categorizing data if there are known categories and labeled examples
- In this case, we could verify our classes using test data
- Semi-supervised learning refers to the process of categorizing data if there are partially known categories and labeled examples
- In this case, we could use methods involving imputation to fill in this data or remove the missing data entries
- Reinforcement learning refers to the process of categorizing data if there are known categories but no labeled examples
- In this case, we could do some kind of query, feedback, or reinforcement method by verifying our guesses about category membership (i.e. Rocchio's algorithm)
- Unsupervised learning refers to the process of categorizing data if there are no known categories and no labeled examples
- In this case, we could try discover categories which are implicit in the data themselves

### Examples of Learning Problems
- Supervised Learning
	- Image recognition with completely distinguishable images
	- Weather forecasting with absolutely known days of weather
	- Stock forecasting with no missing days of share prices
- Semi-supervised Learning
	- Image recognition with some indistinguishable images
	- Weather forecasting with some overlapping, unmarked days of weather
	- Stock forecasting with missing days of share prices
- Reinforcement Learning
	- Image recognition with a pre-determined set of possible image types
	- Weather forecasting with a pre-determined set of possible weather types
	- Stock forecasting with a pre-determined set of possible stock directions (i.e. up or down)
- Unsupervised Learning
	- Image recognition of subgroups of images that haven't been labeled yet
	- Weather forecasting of subgroups of weather types that haven't been labeled yet

### References
- [Types of Categorization and Basic Classifiers](https://www.stat.cmu.edu/~cshalizi/350/2008/lectures/07/lecture-07.pdf)
