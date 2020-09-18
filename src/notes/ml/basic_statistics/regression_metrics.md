---
title: "Regression Metrics"
draft: false
weight: 17
katex: true
---

### Describing Regression Metrics
- Suppose we want to guess the value of a random variable
- Since we don't feel comfortable with the word guess, we use the word prediction instead
- Our goal is to find the best buess for our random variable
- We need some way to measure how good a guess is
- Therefore, we use metrics to measure the accuracy of our guesses

### Preliminary Notes about Regression Metrics
- A metric is a quantitative standard of measurement
- There isn't any Holy Grail of regression metrics
- Solely using one regression metric for every case is a bad idea
- Each metric has its own use-case, and should be used carefully and accordingly

### General Terminology
- Let's denote $Y$ as our observation and $m$ as our prediction
- When finding our prediction $m$, we typically want to use an $m$ that minimizes our regression metric (i.e. MSE, MAE, etc.)
- Therefore, we should really only focus on minimizing the bias, since the variance term is irrelevant when minimizing the MSE:
- Specifically, we would like to find a prediction $m$ that makes our regression metrics small (i.e. minimizes our errors)
- The variance term is irrelevant to making this small, since it’s the same no matter what m is

$$
\text{Var}[Y-m] = \text{Var}[Y]
$$

- This is because $\text{Var}[Y]$ is about the true distribution of $Y$, but $m$ is just our guess
- Therefore, it shouldn't play any role in the minimization process

### Basics of MSE
- The mean squared error (or MSE) is defined as the following:

$$
MSE(m) = \text{E}[(Y-m)^2] = \text{E}[Y-m]^2 + \text{Var}[Y-m]
$$

$$
\text{where Bias } = \text{E}[Y-m]^2
$$

$$
\text{where Variance } = \text{Var}[Y-m]
$$

- In other words, the mean squared error represents any bias or variance associated with a prediction
- The mean squared error represents the simplest form of the bias-variance decomposition
- Since we can consider the variance term as irrelevant, the MSE formula can be simplified to the following:

$$
MSE = mean((y_{i} - \hat{y}_{i})^{2}) = mean(error_{i}^{2})
$$

### Basics of RMSE
- The root mean squared error (or RMSE) is defined as the following:

$$
RMSE(m) = \sqrt{MSE(m)} = \sqrt{\text{E}[(Y-m)^2]} = \sqrt{\text{E}[Y-m]^2 + \text{Var}[Y-m]}
$$

$$
\text{where Bias } = \text{E}[Y-m]^2
$$

$$
\text{where Variance } = \text{Var}[Y-m]
$$

- In other words, the root mean squared error represents the square root of any bias or variance aggregated together, associated with a prediction
- Since we can consider the variance term as irrelevant, the RMSE formula can be simplified to the following:

$$
RMSE = \sqrt{mean((y_{i} - \hat{y}_{i})^{2})} = \sqrt{mean(error_{i}^{2})}
$$

### Basics of MAE
- The mean absolute error (or MAE) is defined as the following:

$$
MAE(m) = \text{E}[|(Y-m)|] = |\text{E}[Y-m]| + \text{Var}[Y-m]
$$

$$
\text{where Bias } = |\text{E}[Y-m]|
$$

$$
\text{where Variance } = \text{Var}[Y-m]
$$

- In other words, the mean absolute error represents any bias or variance associated with any prediction
- Since we can consider the variance term as irrelevant, the MAE formula can be simplified to the following:

$$
MAE = mean(|y_{i} - \hat{y}_{i}|) = mean(|error_{i}|)
$$

### Use-Cases for MAE, MSE, and RMSE
- If we want to penalize our predictions as they are increasingly off from our actual observations, then we should use MSE and RMSE because the errors are squared
- In other words, we should use the MSE or RMSE metrics if we want to penalize large errors
- For example, if our prediction being off by 10 is twice as bad as being off by 5, then we should most likely use MAE
- On the other hand, if our prediction being off by 10 is more than twice as bad as being off by 5, then we should most likely use MSE or RMSE
- If we want to use a regression metric that produces interpretable results, then MAE is clearly the winner, since it's difficult to interpret the square in the MSE or RMSE
- From a mathematical standpoint, MSE is clearly the winner, since it's difficult to perform many mathematical calculations on formulas involving the absolute value

### Notation for MAPE and MASE
- Let $y_{t}$ denote the current observation at time $t$
- Let $y_{t-1}$ denote the previous observation at time $t-1$
- Let $f_{t}$ denote the forecast of $y_{t}$
- Let $e_{t}$ denote the forecast error where $e_{t} = y_{t} - f_{t}$
- Let $o_{t}$ denote the one-step naive error where $o_{t} = y_{t} - y_{t-1}$

### Basics of MAPE
- The mean absolute percentage error (or MAPE) is defined as the following:

$$
MAPE = 100 * mean(\frac{|e_{t}|}{|y_{t}|})
$$

- The MAPE favors predictions that are smaller than its data value, which can be considered a drawback
- On the other hand, we may want this property depending on our problem, in which case we would want to use MAPE
- In other words, the MAPE puts a heavier penalty on forecasts that exceed the actual data values than those that are less than the actual values
- Said another way, the MAPE puts a heavier penalty on negative errors than positive errors
- Naturally, we would like to avoid this asymmetry of the MAPE
- The MASE can be used if we want a more symmetrical measure of the percentage error

### Basics of MASE
- The mean absolute scaled error (or MASE) is arguably considered the best available measure of forecast accuracy
- Before we define the MASE formula, we should define a one-step naive error
- The one-step naive error $o_{t}$ refers to the error associated with guessing the previous data value as our current prediction:
- The MASE is defined as the following:

$$
MASE = mean(\frac{|e_{t}|}{\frac{1}{n-1}\sum_{i=1}^{n}|y_{t} − y_{t-1}|})
$$

- Where the scaled error term refers to the following:

$$
scalederror_{t} = \frac{|e_{t}|}{\frac{1}{n-1}\sum_{i=1}^{n}|y_{t} − y_{t-1}|}
$$

- Therefore, the MASE formula can be simplifed to the following:

$$
MASE = mean(scalederror_{t})
$$

- We can go one step further, and simplify the MASE to the following, roughly:

$$
MASE = mean(\frac{|e_{t}|}{mean(|o_{t}|)})
$$

- Where the scaled error term roughly refers to the following:

$$
scalederror_{t} = \frac{|e_{t}|}{mean(|o_{t}|)}
$$

- Essentially, the MASE is an average of our scaled errors
- The MASE has the following benefits:
	- Working with scaled errors, since the scaled errors are independent of the scale of the data
	- Symmetrical measure
	- Less sensitive to outliers compared to other metrics
	- Easily interpreted metric using scaled errors (compared to other metrics like RMSE)
	- Less variable on small samples
- We can interpret scaled errors based on the following criteria:
	- A scaled error is less than one if our forecast is better than the average one-step naive forecast (i.e. using the previous data point)
	- A scaled error is greater than one if our forecast is worse than the average one-step naive forecast (i.e. using the previous data point)

### Perils of F-tests
1. The F-test does not measure goodness-of-fit
	- Specifically, the F-test does not measure if there is a linear fit, non-linear fit, etc.
        - For example, let's suppose that we reject the null, intercept-only hypothesis
        - This does not mean that the simple linear model is right
        - It means that the latter model is better at making predictions compared to the intercept-only model
	- Specifically, the reason for the latter model being better at making predictions is not due to random chance
        - The simple linear regression model can be absolute garbage, with every single one of its assumptions flagrantly violated, and yet better than the model which makes all those assumptions and thinks the optimal slope is zero
2. The F-test is a pretty useless measure of predictability
	-  Not finding any significant share of variance associated with the regression could be caused by any of the following:
		1. There is no such variance, and the intercept-only model is correct
		2. There is some variance, but we were unlucky)
		3. Or, the test doesn’t have enough power to detect departures from the null
	- To expand on that last point, the power to detect a non-zero slope is going to increase with the sample size $n$, decrease with the noise level $\sigma^{2}$, and increase with the magnitude of the slope $|\beta|$

### Perils of $R^{2}$
1. $R^{2}$ does not measure goodness-of-fit
	- Specifically, $R^{2}$ does not measure if there is a linear fit, non-linear fit, etc.
        - $R^{2}$ can be low when the model follows a completely correct form (by making the variance of our random variable large)
        - $R^{2}$ can be close to 1 when the model follows a completely incorrect form (by making the variance of our random variable small)
        - More specifically, $R^{2}$ can be very high when the true model fit is linear, but our model fit is non-linear (since all that matters is for the slope of the best linear approximation to be non-zero)
2. $R^{2}$ is a pretty useless measure of predictability
	- $R^{2}$ says nothing about prediction error ($R^{2}$ can be anywhere between 0 and 1 just by changing the range of our random variable)
	- $R^{2}$ says nothing about interval forecasts (particularly it doesn't give us any notion of how large our confidence interval is)
	- Specifically, MSE is a much better measure of prediction error
3. $R^{2}$ cannot be compared across data sets
	- Specifically, the same model can have radically different $R^{2}$ values on different data
4. $R^{2}$ cannot be compared between a model with an untransformed response variable and one with a transformed response variable (or between different transformations of response variables)
	- Specifically, the $R^{2}$ can be different by changing the range of our response variable
- The one situation where $R^{2}$ can be compared is when different models are fit to the same data set with the same, untransformed response variable
- However, you might as well just compare the MSE measures in this situation
- Note that the adjusted $R^{2}$ does absolutely nothing to fix any of these issues

### References
- [MASE for Forecasting](https://robjhyndman.com/papers/mase.pdf)
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Optimal Predictions in Regression](http://www.stat.cmu.edu/~larry/=stat401/lecture-01.pdf)
- [MAPE for Forecasting](https://robjhyndman.com/hyndsight/smape/)
- [Difference between MSE and MAPE](https://stats.stackexchange.com/questions/11636/the-difference-between-mse-and-mape)
- [MSE Wiki](https://en.wikipedia.org/wiki/Mean_squared_error)
- [MAE and RMSE Use-Cases](https://medium.com/human-in-a-machine-world/mae-and-rmse-which-metric-is-better-e60ac3bde13d)
- [Assessing Regression Accuracy](https://www.reddit.com/r/datascience/comments/9nk0n5/assessing_regression_accuracy_interpretable/)
