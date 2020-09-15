---
title: "Logistic Regression"
draft: false
weight: 6
katex: true
---

### Describing Logistic Regression
- The most common form of logistic regression is binary logistic regression, which is used for establishing a relationship between one or more independent variables and a dependent categorical variable with 2 categories (i.e. binary variable)
- In other words, logistic regression is a learning method that uses a logistic function (or sigmoid function) to model the probability of success (for a binary dependent variable)
- Essentially, logistic regression is equivalent to the linear regression model (i.e. a linear combination of the independent variables) with the sigmoid function applied to it
- The output of a linear regression model are the conditional means (i.e. $Y|X$), whereas the output of a logistic regression model are the conditional probabilities (i.e. $P(y=1|X)$)
	- This is an effect of the sigmoid function

### Probability
- Probabilities of success are defined as the number of successes divided by the total number of observations (i.e. successes and failures)
- We typically define probabilities as the following:

$$ p = \frac{successes}{total} $$

- Probabilities are not linearly related to the covariates

### Odds and Log-Odds
- The odds, log-odds, and probability convey the same concept, but in different formats
- Odds of success are defined as the ratio of the probability of success over the probability of failure
- Log-odds of success are defined as the log of the odds of success
- We will sometimes apply the logit function to our conditional probabilities (logistic regression model's predictions), which will give us the log-odds of success
- This is because log-odds represent our probabilities of success as a function of our covariates
- In other words, the log-odds are linearly related to our covariates
- We can define the odds function as the following:

$$ odds = \frac{p}{1-p} $$

- We can define the log odds function as the following:

$$ logodds = \log(\frac{p}{1-p}) $$

## Example of Calculating Odds
- Let's say an average of $9$ out of every $10$ people will default on their loans
- Then, the probability of a person defaulting on their loans is the following:

$$ p = \frac{9}{10} = 0.9 $$

- And, the odds of a person defaulting is the following:

$$ odds = \frac{0.9}{1-0.9} = 9 $$

### Example of Calculating Log-Odds
- Let's say an average of $9$ out of every $10$ people will default on their loans
- Then, the log-odds of a person defaulting on their loans is the following:

$$ logodds = \log(\frac{0.9}{1-0.9}) = 0.95 $$

### Logistic Function
- In terms of logistic regression, the logistic function is typically synonymous with the sigmoid function
- The logistic function models the probabilities of success
- The logistic function will always produce an S-shaped curve
- Meaning, the amount that $p(X)$ changes due to a one-unit change in $X$ will depend on the current value of $X$
- The logistic function is defined as the following:

$$ p = \frac{e^{\beta_{0}+\beta X}}{1+e^{\beta_{0}+\beta X}} $$

- Here, the $\beta$ coefficients are just our logistic regression coefficients given by the logit function

### Logit Function
- The logit link function models the log-odds of success
- Said another way, the logit link function models the probabilities of success as a function of the covariates
- Meaning, the logit link function will always produce a linear regression line
- The beta coefficients, given by the glm output in R, relates to the change in log-odds:

$$ \log(\frac{p}{1-p}) = logit(p) = \beta_{0}+\beta X $$

- We can interpret the beta coefficients as the following: increasing $X$ by one unit will change the log odds of success by $\beta_{1}$
- We can also interpret the beta coefficients as the following: increasing $X$ by one unit will multiply the odds of success by $e^{\beta_{1}}$

### References
- [Basics of Logistic Regression](https://medium.com/datadriveninvestor/logistic-regression-18afd48779ce)
- [Why the Sigmoid Function](https://sebastianraschka.com/faq/docs/logistic-why-sigmoid.html)
- [Interpretation of the Odds Ratios](https://stats.idre.ucla.edu/other/mult-pkg/faq/general/faq-how-do-i-interpret-odds-ratios-in-logistic-regression/)
