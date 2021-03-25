---
title: "Linear Discriminant Analysis"
draft: false
weight: 8
katex: true
---

### Describing Linear Discriminant Analysis
- Linear Discriminant Analysis (LDA) is a supervised classification technique that is solved using either SVD (i.e. dimensionality reduction) or bayes theorem (i.e. Bayesian techniques)
- If we assume LDA uses dimensionality reduction when predicting an observation's class, then LDA involves mapping the data from a high dimensional space to a lower dimensional space
- The data is transformed to a lower dimensional space by finding the axes that maximize the seperatibility between classes (in the lower dimensional space)
- Said another way, LDA maps the data from a high dimensional space to a lower dimensional space by performing a linear transformation on the data in its original form (i.e. in the high dimensional space)
- More specifically, the linear transformation includes a change of basis (using the SVD formula) that finds the axes that best separate the classes
- LDA uses linear decision boundaries to determine the class of an observation in the newly mapped space

### Assumptions
- Observations within each class are drawn from a multivariate Gaussian distribution
- Each class has its own unique mean vector, but each class needs to have equal variance/covariance

### The LDA Algorithm
1. Perform a change of basis on the data that finds the axes that best separate the classes
2. Receive coefficients for ($k-1$) number of linear discriminants (LDA axes) based on the $k$ number of classes (from the response)
3. Use these coefficients to map the data on the new vector space (LDA axes)
4. Determine the class for an observation by observing where the mapped observation lands with respect to the (linear) decision boundaries

### Preparing for LDA
- Check assumptions
	- Gaussian distribution - Use log and root transformations to ensure Gaussian distributions are maintained
	- Same variance - standarize data to ensure equal variance is maintained across distribution
- Possibly remove outliers

### Advantages over Logistic Regression
- The preferred method of classification is logistic regression when the response has exactly 2 classes
- The preferred method of classification is linear discriminant analysis when the response has more than 2 classes
- Logistic regression parameter estimates can become poor/unstable when the two classes are well-separated, whereas LDA does not suffer from this
- Logistic regression parameter estimates can become poor/unstable if the sample size is small, whereas LDA is more stable (assuming normally distributed predictors)

### Difference between Logistic Regression and LDA
- Logistic regression and LDA both use MLE for parameter estimation (or Bayesian techniques)
- Logistic regression involves directly modeling $Pr(Y=1|X=x)$ using the logistic function
- LDA involves directly modeling $Pr(Y=k|X=x)$

### Difference between PCA and LDA
- PCA is an unsupervised learning method that involves performing linear transformations (dimensionality reduction) on the data to find the features that make up the most variability
- LDA is a supervised learning method that involves performing linear transformations (dimensionality reduction) on the data to maximize the distance between classes and minimize the distance within classes

### References
- [Difference between PCA and LDA](https://sebastianraschka.com/Articles/2014_python_lda.html#principal-component-analysis-vs-linear-discriminant-analysis)
- [Dimensionality Reduction of LDA](https://www.cs.princeton.edu/courses/archive/fall08/cos429/CourseMaterials/lecture2/PCA_handout.pdf)
- [Discriminant Analysis Example](http://www.stats.ox.ac.uk/~sejdinov/teaching/sdmml15/materials/HT15_lecture6-nup.pdf)
- [Comparison between PCA, LDA, and QDA](http://www.sthda.com/english/articles/36-classification-methods-essentials/146-discriminant-analysis-essentials-in-r/)
