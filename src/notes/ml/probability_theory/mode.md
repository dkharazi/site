---
title: "Mean, Median, and Mode"
draft: false
weight: 1
katex: true
---

### Central Tendency
- A central tendency is a central or typical value for a probability distribution
- The most popular measures of central tendency include the following:
	- Mean
	- Median
	- Mode

### What is the Mean?
- Roughly speaking, the mean tries to represent the most frequent value from a population distribution while putting a greater weight on the outliers
- The mean can be thought of as an estimate of the mode
- We use the mean as an estimate of the mode because:
	- The formula of the mean is very lightweight
	- We don't have a formula for the mode
- Sometimes the mean represents the most frequent value in our data, but sometimes the mean does not represent the most frequent value in our data
	- In other words, sometimes the mean is a great estimate of the mode, but sometimes the mean is a poor estimate of the mode
	- If our data is normally distributed, the mean is a perfect estimate of the mode
	- If our data is not normally distributed, the mean is usually not a great estimate of the mode

### What is the Median?
- Roughly speaking, the median is the middle value in the ordered list of data values
- In other words, the median is the value where there is an equal percentage of data above and below our value
- The formula of the median is heavyweight, so we typically prefer to use the formula for the mean when estimating the mode
- Sometimes the median represents the most frequent value in our data, but sometimes the median does not represent the most frequent value in our data
	- In other words, sometimes the median is a great estimate of the mode, but sometimes the median is a poor estimate of the mode
	- If our data is normally distributed, the median is a perfect estimate of the mode
	- If our data is not normally distributed, the median is usually not a great estimate of the mode

### What is the Mode?
- The mode of a set of data values is the value that appears most often
- In other words, the mode is the most probable value
- For a discrete random variable, the mode is the maximum value of its probability mass function
- For a continuous random variable, the mode is the maximum value of its probability density function
- The mean, median, and mode all coincide for symmetric unimodal distributions
	- For example, the mean, median, and mode all coincide with each other for a normal distribution
	- A distribution is considered to be unimodal if it has only one local maxima
	- Also, when a random variable has a probability distribution with multiple local maxima, then it is common to refer to all of the local maxima as modes
- If we draw samples, and the sample and population distributions are both symmetric unimodal distributions, then the sample mean can be used as an estimate of the population mode

### References
- [Intuition behind Expected Value](https://math.stackexchange.com/questions/2468601/what-is-the-intuitive-meaning-of-expected-value)
- [Mode Wiki](https://en.wikipedia.org/wiki/Mode_(statistics))
