---
title: "Stationarity"
draft: false
weight: 7
katex: true
---

### Describing Stationarity
- An assumption of most time-series models, such as AR, MA, ARMA, and ARCH, is they are stationary
- A model is stationary if it satisfies the following criteria:
	- Mean($s_{t}$) is constant
	- Var($s_{t}$) is constant with time (i.e. no heteroskedasticity)
	- There's no seasonality in the data
- The criteria for stationarity is more general compared to the criteria for white noise models
- Therefore, if a model is a white noise model, then it is also stationary
- However, just because a model is stationary, doesn't necessarily imply the model is a white noise model

### Testing for Stationarity
1. We can graph the residuals to visually detect stationarity
2. We can perform global and local checks of the criteria across the time series data
	- Specifically, we would perform checks to ensure the mean is constant, variance is constant, and no seasonality
	- Global checks imply checking these criteria across the entire time series dataset
	- Local checks imply creating slices of the time series data and testing the criteria on these slices
	- A method of performing local checks could include running a rolling window across the data set and testing the criteria on each iteration
3. Perform a true statistical test, such as the augmented Dickey-Fuller test (i.e. ADF test)

### Ensuring Stationarity
- We can find a transformation of some non-stationary time-series model, where the transformation maps a non-stationary time-series model to a stationary time-series model
- Then, we can work with our transformed, stationary time-series model to satisfy the time-series models' assumption of stationarity
- For example, a linear time-series model is a non-stationary model represented as the following:

$$ y_{t} = \beta_{0} + \beta_{1}t + \epsilon_{t} $$

- However, we can transform the linear time-series model to a stationary model:

$$ z_{t} = y_{t} - y_{t-1} $$

### References
- [Stationarity Video](https://www.youtube.com/watch?v=oY-j2Wof51c)
