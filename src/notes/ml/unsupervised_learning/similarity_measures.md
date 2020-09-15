---
title: "Similarity Measures"
draft: false
weight: 3
katex: true
---

### Motivating Similarity Measures
- Sometimes, we want to determine how similar two data entries are compared to each other
- To do this, we need to have some way of measuring similarity between those two entries
- Therefore, we use dissimilarity or distance measures
- Simple matching coefficients (SMC) and jaccard coefficients are calculated on binary data values
- Euclidean distances and cosine distances are calculated on continuous data values

### Simple Matching Coefficient
- The simple matching coefficient (or SMC) is a measure of dissimilarity between binary variables
- The SMC calculates the percentage of mutual presences and mutual absences between the variable values
- The simple matching coefficient is defined as the following:

$$ SMC = \frac{M_{00}+M_{11}}{M_{00}+M_{01}+M_{10}+M_{11}} $$

- Where $M_{00}$ is the number of matching False values between two data entries
- Where $M_{11}$ is the number of matching True values between two data entries
- Where $M_{10}$ is the number of differing values where the first entry's value is True and the second entry's value is False
- Where $M_{01}$ is the number of differing values where the first entry's value is False and the second entry's value is True

### Jaccard Coefficient
- The Jaccard similarity coefficient is a measure of dissimilarity between binary variables
- The Jaccard coefficient calculates the percentage of mutual presences between the variable values
- The Jaccard coefficient can be thought of as a generalized case of the SMC
- The Jaccard coefficient is defined as the following:

$$ Jaccard = \frac{M_{11}}{M_{01}+M_{10}+M_{11}} $$

- Where $M_{11}$ is the number of matching True values between two data entries
- Where $M_{10}$ is the number of differing values where the first entry's value is True and the second entry's value is False
- Where $M_{01}$ is the number of differing values where the first entry's value is False and the second entry's value is True

### Dice Coefficient
- The Dice coefficient is a measure of dissimilarity between nominal variables
- The Dice coefficient calculates the percentage of mutual presences between the variable values (with mutual absenses)
- The Dice coefficient is used in NLP, specifically when using a bag-of-words approach
- The Dice coefficient includes the Jaccard coefficient
- Therefore, the Dice coefficient is very similar to the Jaccard coefficient, but doesn't account for true negatives
- The Dice coefficient is defined as the following:

$$ Dice = \frac{2J}{1+J} $$

- Where $J$ is the Jaccard coefficient

### Use-Cases for SMC and Jaccard Coefficients
- The SMC coefficient is used for symmetrical binary variables, meaning the two classes associated with the binary variables are thought to have equal importance
- On the other hand, the Jaccard coefficient is typically used for assymetrical binary variables, meaning the two classes associated with the binary variables are thought to have different importances
- However, the Jaccard coefficient can also be used for symmetrical binary variables
- It's important to note that we can transform multi-class categorical variables into many separate binary variables so that we can calculate SMC or Jaccard coefficients on the data entry
- Since the SMC is used for symmetrical binary variables, the SMC is typically used to detect cheating on two different exams
- Since the Jaccard coefficient is used for asymmetrical binary variables, the Jaccard coefficient is typically used to detect fraud between two different documents
- Therefore, the Jaccard coefficient is typically used when we have many False values (or $TN$) that we don't want to account for in our similarity calculation

### Example of the SMC

| id | Sex    | 25+ | Cough | Fever | Chills | Headache | Sore Throat |
|----|--------|-----|-------|-------|--------|----------|-------------|
| 01 | Female | Yes | Yes   | No    | Yes    | No       | Yes         |
| 02 | Male   | Yes | Yes   | No    | Yes    | Yes      | No          |

- For this example, we will exclude the id variable from our SMC calculation
- The SMC is calculated as the following:

$$ SMC = \frac{M_{00}+M_{11}}{M_{00}+M_{01}+M_{10}+M_{11}} = \frac{1+2}{1+1+2+3} = \frac{3}{7} = 0.43 $$

- Where $M_{00} = 1$ (from Fever)
- Where $M_{01} = 1$ (from Headache)
- Where $M_{10} = 2$ (from Sex and Sore Throat)
- Where $M_{11} = 3$ (from 25+, Cough, and Chills)

### Example of the Jaccard Coefficient

| id | Sex    | 25+ | Cough | Fever | Chills | Headache | Sore Throat |
|----|--------|-----|-------|-------|--------|----------|-------------|
| 01 | Female | Yes | Yes   | No    | Yes    | No       | Yes         |
| 02 | Male   | Yes | Yes   | No    | Yes    | Yes      | No          |

- For this example, we will exclude the id variable from our Jaccard coefficient calculation
- The jaccard coefficient is calculated as the following:

$$ Jaccard = \frac{M_{11}}{M_{01}+M_{10}+M_{11}} = \frac{3}{1+2+3} = \frac{3}{6} = 0.5 $$

- Where $M_{01} = 1$ (from Headache)
- Where $M_{10} = 2$ (from Sex and Sore Throat)
- Where $M_{11} = 3$ (from 25+, Cough, and Chills)

### Example of the Dice Coefficient

| id | Sex    | 25+ | Cough | Fever | Chills | Headache | Sore Throat |
|----|--------|-----|-------|-------|--------|----------|-------------|
| 01 | Female | Yes | Yes   | No    | Yes    | No       | Yes         |
| 02 | Male   | Yes | Yes   | No    | Yes    | Yes      | No          |

- For this example, we will exclude the id variable from our Dice coefficient calculation
- The dice coefficient is calculated as the following:

$$ Dice = \frac{2M_{11}}{2M_{11}+M_{01}+M_{10}} = \frac{2 \times 3}{(2 \times 3) + 1 + 2} = \frac{6}{9} = 0.66 $$

- Where $M_{01} = 1$ (from Headache)
- Where $M_{10} = 2$ (from Sex and Sore Throat)
- Where $M_{11} = 3$ (from 25+, Cough, and Chills)

### Euclidean Distance
- The Euclidean distance is a measure of dissimilarity between continuous variables
- The Euclidean distance calculates the ordinary straight-line distance between two points in Euclidean space
- The Euclidean distance can also be referred to as the Pythagorean distance
- A generalized term for the Euclidean norm is the L2 norm
- The Euclidean distance is defined as the following:

$$ EUC = \sqrt{\sum_{i=1}^{n}(x_{i}-y_{i})^{2}} $$

### Great-Circle Distance
- The great-circle distance (or orthodromic distance) is a measure of dissimilarity between continuous variables
- The great-circle formula calculates the shortest distance between two points on the surface of a sphere
- The Earth is nearly spherical, so the great-circle distance provides an accurate distance between two points on the surface of the Earth  within about 0.5%
- The great-circle distance is defined as the following:

$$ GC = r\delta\sigma $$

- Where $r$ is the radius of the sphere
- Where $\delta\sigma = \arccos(\sin(\omega_{1})\sin(\omega_{2}) + \cos(\omega_{1})\cos(\omega_{2})\cos(\lambda_{2}-\lambda_{1}))$
- Where $\lambda_{i}$ is the latitude of point $i$
- Where $\omega_{i}$ is the longitude of point $i$

### Haversine Distance
- The haversine distance is a measure of dissimilarity between continuous variables
- The haversine formula calculates the shortest distance between two points on the surface of the Earth
- In other words, the haversine formula calculates the great-circle distance between two points with an adjustment to provide a birds-eye-view  distance between two points
- Obviously, the haversine distance ignores any hills and assumes smooths land
- The haversine distance is defined as the following:

$$ HS = \frac{d}{r} $$

- Where $r$ is the radius of the Earth
- Where $d = 2r \arcsin(\sqrt{\sin^{2}(\frac{\lambda_{2}-\lambda_{1}}{2}) + \cos(\lambda_{1})\cos(\lambda_{2})\sin^{2}(\frac{\omega_{2}-\omega_{1}}{2})})$
- Where $\lambda_{i}$ is the latitude (in radians) of point $i$
- Where $\omega_{i}$ is the longitude (in radians) of point $i$

### Manhattan Distance
- The Manhattan distance is a measure of dissimilarity between continuous variables
- The Manhattan distance calculates the distance between two points measured along axes at right angles
- A generalized term for the Euclidean norm is the L1 norm
- If the data is high dimensional, the Manhattan distance is usually preferred over the Euclidean distance
- The manhattan distance is defined as the following:

$$ MH = \sum_{i=1}^{n}|x_{i}-y_{i}| $$

### Cosine Distance
- The cosine distance is a measure of dissimilarity between binary, nominal, or continuous variables
- Specifically, the cosine distance is a measure of dissimilarity between two (and only two) vectors
- The cosine formula calculates the cosine of the angle between the two vectors
- Therefore, the cosine similarity is a measurement of orientation and not magnitude
- Note that even if we had a vector pointing far from another vector, they still could have a small angle
- Also, note that the cosine similarity is essentially the same as the euclidean distance on normalized data
- The cosine distance is defined as the following:

$$ \theta = \arccos(\frac{\sum_{i=1}^{n}a_{i}b_{i}}{\Vert a \Vert \Vert b \Vert}) $$

- Where $a$ represents vector $a$
- Where $b$ represents vector $b$
- Where $\Vert a \Vert = \sqrt{\sum a^{2}}$
- Where $\Vert b \Vert = \sqrt{\sum b^{2}}$

### Hellinger Distance
- The hellinger distance is used to quantify the similarity between two probability distributions
- The hellinger distance is a probabilistic analog of the euclidean distance
- Given two probability distributions $P$ and $Q$, the hellinger distance is defined as:

$$ h(P,Q) = \frac{1}{\sqrt{2}} \Vert \sqrt{P} - \sqrt{Q} \Vert_{2} $$

- The hellinger distance is useful when quantifying the difference between two probability distributions
- For example, let's say we're estimating a distribution for users and a distribution for non-users of a service
- If the hellinger distance is small between those groups for some features, then those features are not statistically useful for segmentation
- The wasserstein metric is becoming a more preferred metric for measuring the similarity between two probability distributions

### Use-Cases for Euclidean Distance, Manhattan Distance, and Cosine Distance
- The euclidean disance is represented as a distance in the physical world, which is a natural notion of distance
- The euclidean distance is frequently used for finding the nearest hospital for emergency helicopter flights
- The euclidean distance is also used in natural language processing applications
- Specifically, the euclidean distance is calculated with a bag-of-words representation, while normalizing the word count vectors by the euclidean length of words in each document
- The manhattan distance is typically preferred to the euclidean distance for the case of high dimensional data, since it can provide similar distances to the euclidean distance
- The manhattan formula is frequently used for measuring the distances in chess, compressed sensingm and frequency distributions
- The cosine similarity is represented as an angle between two vectors
- The cosine similarity is typically used in natural language processing applications
- Specifically, the cosine similarity is used to measure how similar documents are to each other (irrespective of their size)

### Example of Euclidean Distance

| document | car | bike | tire | she | sand | bench | doctor |
|----------|-----|------|------|-----|------|-------|--------|
| 01       | 5   | 0    | 3    | 1   | 0    | 2     | 0      |
| 02       | 3   | 0    | 5    | 0   | 1    | 6     | 0      |

- For this example, we will exclude the document variable from our euclidean calculations
- The euclidean distance is calculated as the following:

$$ EUC = \sqrt{\sum_{i=1}^{n}(x_{i}-y_{i})^{2}} $$
$$ = (5-3)^{2} + (0-0)^{2} + (3-5)^{2} + (1-0)^{2} + (0-1)^{2} + (2-6)^{2} + (0-0)^{2} $$
$$ = 4 + 0 + 4 + 1 + 1 + 16 + 0 = 26 $$

### Example of Cosine Similarity

| document | car | bike | tire | she | sand | bench | doctor |
|----------|-----|------|------|-----|------|-------|--------|
| 01       | 5   | 0    | 3    | 1   | 0    | 2     | 0      |
| 02       | 3   | 0    | 5    | 0   | 1    | 6     | 0      |

- For this example, we will exclude the document variable from our cosine calculations
- The cosine similarity is calculated as the following:

$$ \theta = \arccos(\frac{\sum_{i=1}^{n}a_{i}b_{i}}{\Vert a \Vert \Vert b \Vert}) $$
$$ = \arccos(\frac{15+15+1+1+12}{\sqrt{25+9+1+4}\sqrt{9+25+1+36}}) $$
$$ = \arccos(\frac{44}{6.2 \times 8.4}) = \arccos(0.84) = 0.57 $$

### References
- [Basic Cluster Analysis Lecture Slides](http://staffwww.itn.liu.se/~aidvi/courses/06/dm/lectures/lec9.pdf)
- [Similarity Searching and Information Retrieval](https://www.stat.cmu.edu/~cshalizi/350/2008/lectures/01/lecture-01.pdf)
- [Applications of Jaccard and Cosine Similarities](https://datascience.stackexchange.com/questions/5121/applications-and-differences-for-jaccard-similarity-and-cosine-similarity)
- [Hierarchical Clustering](https://stats.stackexchange.com/questions/15287/hierarchical-clustering-with-mixed-type-data-what-distance-similarity-to-use)
- [Optimal Distance Function for Nominal Attributes](https://stats.stackexchange.com/questions/55798/what-is-the-optimal-distance-function-for-individuals-when-attributes-are-nomina/55802#55802)
- [Euclidean Distance in High Dimensions](https://stats.stackexchange.com/questions/99171/why-is-euclidean-distance-not-a-good-metric-in-high-dimensions/99191#99191)
- [Dice Coefficient and Accuracy Metric](https://stats.stackexchange.com/questions/195006/is-the-dice-coefficient-the-same-as-accuracy)
- [Cosine Similarity for Vector Space Models](http://blog.christianperone.com/2013/09/machine-learning-cosine-similarity-for-vector-space-models-part-iii/)
- [Jaccard Index used for Distance Calculations](https://www.dataminingapps.com/2016/06/can-you-explain-how-the-jaccard-index-can-be-used-for-distance-calculation/)
- [What is Hellinger Distance](https://datascience.stackexchange.com/questions/22725/what-is-hellinger-distance-and-when-to-use-it/25091)
