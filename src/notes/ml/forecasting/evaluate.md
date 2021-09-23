---
title: "Evaluating Forecasting Models"
draft: false
weight: 3
katex: true
---

### Defining Simple Fitted Values
- For most time-series forecasts, each observation uses all previous observations
- Implying, each forecast for $y_{t}$ is based on observations $y_{1}, ..., y_{t-1}$
- Thus, a forecast $\hat{y}_{t}$ should be denoted as $\hat{y}_{t|t-1}$
    - However, we usually just write $\hat{y}_{t}$ because it's simpler
- Technically, fitted values aren't always true forecasts since they're estimated using observations, including those after $y_{t}$ (i.e. $y_{t+1}$)
- For example, the fitted values of a moving average forecast will represent the average of all $y$ observations, where $\hat{y}_{t} = \hat{\mu}$
- Also, the fitted values using the drift method uses a parameter estimated on all observations of $y$, where $\hat{y}_{t} = y_{t-1} + \hat{\mu}$
- On the other hand, naive forecasts don't include any parameters, so fitted values are true forecasts (but are less accurate usually)

### Defining Residuals for Time-Series Models
- Residuals refer to the amount we're off by when calculating a prediction $\hat{y}_{t}$ on a data value $y_{t}$
- Specifically, a residual represents $e_{t} = y_{t} - \hat{y}_{t}$
- Thus, we can use residuals to evaluate the accuracy of our predictions
- To ensure our forecasts aren't biased, we usually enforce the following:
    - Residuals are uncorrelated
    - Residuals have $0$ mean and constant variance
    - Residuals are normally distributed

### Defining Notation for Evaluation Metrics
- Before diving into specific evaluation metrics, let's define standard notation for forecasting metrics:
    - Let $y_{t}$ denote the current observation at time $t$
    - Let $y_{t-1}$ denote the previous observation at time $t-1$
    - Let $f_{t}$ denote the forecast of $y_{t}$
    - Let $e_{t}$ denote the forecast error where $e_{t} = y_{t} - f_{t}$
    - Let $o_{t}$ denote the one-step naive error where $o_{t} = y_{t} - y_{t-1}$

### Evaluating Forecasting Accuracy using MAPE
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

### Evaluating Forecasting Accuracy using MASE
- The mean absolute scaled error (or MASE) is arguably considered the best available measure of forecast accuracy
- Before we define the MASE formula, we should define a one-step naive error
- The one-step naive error $o_{t}$ refers to the error associated with guessing the previous data value as our current prediction
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

### References
- [Textbook for Forecasting: Principles and Practices](https://otexts.com/fpp2/toolbox.html)
- [Prediction Intervals for Time-Series Models](https://otexts.com/fpp2/prediction-intervals.html)