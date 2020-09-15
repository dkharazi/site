---
title: "Moving Average Model"
draft: false
weight: 3
katex: true
---

### Describing a Moving Average Model
- A moving average model is linear regression model, where the response variable represents some value indexed by the current time period and the predictor variables represent our mean of the value and some white noise error term
- The moving-average model should not be confused with the simple moving average, which takes the arithmetic mean of a given set of prices over the past number of days
- Specifically, we can define a moving average model of order $r$ as the following:
	$$ s_{t} =  \mu + \epsilon_{t} + \theta_{1}\epsilon_{t-1} + \theta_{r}\epsilon_{t-r} $$
	- Where $s_{t}$ is the unknown true value in our current time period
	- Where $\mu$ is the mean of our values (this is constant for any $t$)
	- Where $\epsilon_{t}$ is the unknown error of the current predicted value and what we will observe
	- Where $\epsilon_{t-1}$ is the error of the previous predicted value and what we observed
	- Where $\theta_{1}$ represents the percentage of the error $\epsilon_{t-1}$ we should include in our model
	- Where $\epsilon_{t-r}$ is the error of the $r^{th}$ previous predicted value and what we observed
	- Where $\theta_{r}$ represents the percentage of the error $\epsilon_{t-r}$ we should include in our model
- We can estimate $s_{t}$ by using the following equation:
	$$ \hat{s_{t}} = \mu + \theta_{1}\epsilon_{t-1} + \theta_{r}\epsilon_{t-r} $$
	- Where $\hat{s_{t}}$ is the predicted value in our current time period

### An Example of a Moving Average Model of Order 1
- Let's say we're predicting the price of salmon each month using a moving average model of only the the previous month's data
- We can define our model as the following:
	$$ \hat{s_{t}} = \mu + \theta_{1}\epsilon_{t-1} $$
	$$ \text{where } \epsilon_{t-1} = \hat{s}_{t-1} - s_{t-1} $$
	- Where $\hat{s}_{t}$ is our current prediction
	- Where $\hat{s}_{t-1}$ is our previous prediction
	- Where $\mu$ is the mean of our values
	- Where $\epsilon_{t-1}$ is the difference betweeen our previous prediction and the previous observed value
	- Where $\theta_{1}$ represents the percentage of the previous error $\epsilon_{t-1}$ we should include in our model
- The table below shows our observed data and predictions of a few iterations

| month | $t$ | $\hat{s_{t}}$ | $\epsilon_{t}$ | $s_{t}$ | $\mu$ | $\theta_{1}$ | $\theta_{1}\epsilon_{t}$ |
| ----- | --- | ------------- | -------------- | ------- | ----- | ------------ | ------------------------ |
| Jan   | 1   | 10            | -2             | 8       | 10    | 0.5          | -1                       |
| Feb   | 2   | 9             | 1              | 10      | 10    | 0.5          | 0.5                      |
| March | 3   | 10.5          | 0              | 10.5    | 10    | 0.5          | 0                        |
| April | 4   | 10            | 2              | 12      | 10    | 0.5          | 1                        |
| May   | 5   | 11            | 1              | 12      | 10    | 0.5          | 0.5                      |

- We can interpret the second iteration as the following:
	- Our predicted price of salmon in February $\hat{s_{2}}$ is $9$
	- The error of our predicted price of salmon in January $\epsilon_{1}$ is $-2$
	- The actual price of salmon in February $\hat{s_{2}}$ is $10$
	- The average price of salmon $\mu$ is $10$
	- The percentage of the previous error we wanted to include $\theta_{1}$ is $0.5$

### An Example of a Moving Average Model of Order 2
- Now, let's say we want to use the two previous month's data to predict the price of salmon using a moving average model
- We can define our model as the following:

$$ \hat{s_{t}} = \mu + \theta_{1}\epsilon_{t-1} + \theta_{2}\epsilon_{t-2} $$

- The table below shows our observed data and predictions of a few iterations

| month | $t$ | $\hat{s_{t}}$ | $\epsilon_{t}$ | $s_{t}$ | $\mu$ | $\theta_{1}$ | $\theta_{1}\epsilon_{t}$ |
| ----- | --- | ------------- | -------------- | ------- | ----- | ------------ | ------------------------ |
| Jan   | 1   | 10            | -2             | 8       | 10    | 0.5          | -1                       |
| Feb   | 2   | 9             | 1              | 10      | 10    | 0.5          | 0.5                      |
| March | 3   | 9.5           | 1              | 10.5    | 10    | 0.5          | 0.5                      |
| April | 4   | 11            | 1              | 12      | 10    | 0.5          | 0.5                      |
| May   | 5   | 12            | 0              | 12      | 10    | 0.5          | 0                        |

- We can interpret the third iteration as the following:
	- Our predicted price of salmon in March $\hat{s_{3}}$ is $9.5$
	- The error of our predicted price of salmon in February $\epsilon_{2}$ is $1$
	- The error of our predicted price of salmon in January $\epsilon_{1}$ is $-2$
	- The actual price of salmon in March $s_{3}$ is $10.5$
	- The average price of salmon $\mu$ is $10$
	- The percentage of the error from February's prediction that we wanted to include $\theta_{1}$ is $0.5$
	- The percentage of the error from January's prediction that we wanted to include $\theta_{2}$ is $0.5$

### Determining the Order Parameter
- The moving average model is parameterized by an order $q$, which refers to the number of lags to account for in the prediction
- Similar to an autoregressive model, including every single lag variable (or a very large amount of lag variables) is a typical naive approach to fitting a moving average model
- This approach typically leads to overfitting
- Therefore, we are interested in choosing the smallest order $q$ for our model that will include only the significant lags
- This will help us avoid overfitting and build a model that will hold up better over time
- We can determine which lags are most significant by observing the lags within an autocorrelated function (or $acf$) chart
- Specifically, we want to know what order includes only the lags that are most indirectly or directly correlated with the price of salmon of our current month
- Essentially, we only want to include the lags in our model whose direct or indirect effects (based on $acf$) are high in magnitude according to the $acf$ chart

### References
- [Moving Average Video](https://www.youtube.com/watch?v=voryLhxiPzE)
- [Examples of Moving Average Models](https://newonlinecourses.science.psu.edu/stat510/lesson/2/2.1)
- [Moving Average Parameters in an ARIMA Model](https://people.duke.edu/~rnau/411arim.htm)
