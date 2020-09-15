---
title: "White Noise"
draft: false
weight: 6
katex: true
---

### Describing White Noise
- A white noise model is a type of time series model that meets specific criteria
- Specifically, a white noise model meets the following criteria:
	- Mean($s_{t}$) = 0
	- Var($s_{t}$) is constant with time (i.e. no heteroskedasticity)
	- Correlation between each combination of lags is 0
- In other words, a white noise model implies there isn't any real trend in the mean or variance or any correlation over time
- Satisfying the criteria for the white noise model implies we can't improve the fit any better (by adjusting the model, tuning parameters, etc.)
- Therefore, an important property of the white noise model is that it is not predictable

### Importance of White Noise Models
- Any time series model can be generally represented as the following: sᵢ = signal + noise
- Obviously, our goal is to capture a time series perfectly, which implies determining all of the components that make up the signal
	- This could include using an autoregressive moving average model where it needs to be used, or tuning the parameters, etc.
- If we capture the signal perfectly, then that would imply the resulting noise would be white noise (i.e. completely unpredictable)
- Therefore, if we can prove that our residuals are white noise, then we can't do anything else to help improve the model fit

### Testing for White Noise
1. We can graph the residuals to visually detect any white noise
2. We can perform global and local checks of the criteria across the time series data
	- Specifically, we would perform checks to ensure the mean is 0, variance is constant, and lags are uncorrelated
	- Global checks imply checking these criteria across the entire time series dataset
	- Local checks imply creating slices of the time series data and testing the criteria on these slices
	- A method of performing local checks could include running a rolling window across the data set and testing the criteria on each iteration
3. Check the correlogram (i.e. ACF) to test the third criterion of uncorrelated lags
	- In a true white noise model, we would expect each acf coefficient to be very close to zero for each lag

### References
- [White Noise Video](https://www.youtube.com/watch?v=cr4zIXAmSRI)
- [Time Series Modeling with White Noise](https://www.analyticsvidhya.com/blog/2015/12/complete-tutorial-time-series-modeling/)
