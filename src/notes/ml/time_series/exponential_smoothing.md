---
title: "Exponential Smoothing"
draft: false
weight: 9
katex: true
---

### Describing Exponential Smoothing
- The simplest form of exponential smoothing is given by the formula:
$$ s_{t} = \alpha x_{t} + (1 - \alpha)s_{t-1} $$
- This simple form of exponential smoothing is also known as an exponentially weighted moving average (EWMA)
- Technically it can also be classified as an ARIMA model with no constant term and parameterized as the following:
$$ ARIMA(0,1,1) $$
- Simple exponential smoothing functions are used for correcting autocorrelated errors (in a random walk model)

### Random Walk
- ARIMA(0,1,0) equals a random walk function
- If the series y is not stationary, then the simplest possible model for it is a random walk model
- A random walk model can be considered as a limiting case of an $AR(1)$ model, where the autoregressive coefficient is equal to $1$ (i.e. a series with infinitely slow mean reversion)
- The prediction equation for this model can be written as the following:
$$ y_{t} = \mu + y_{t-1} $$
	- Where $\mu$ is a constant term, that is the average period-to-period change in $y$

### Simple Exponential Smoothing
- $ARIMA(0,1,1)$ equals the simple exponential smoothing function
- Recall that for some nonstationary time series (e.g., ones that exhibit noisy fluctuations around a slowly-varying mean), the random walk model does not perform as well as a moving average of past values
- In other words, rather than taking the most recent observation as the forecast of the next observation, it is better to use an average of the last few observations in order to filter out the noise and more accurately estimate the local mean
- The simple exponential smoothing model uses an exponentially weighted moving average of past values to achieve this effect
- The prediction equation for the simple exponential smoothing model can be written in a number of mathematically equivalent forms, one of which is the so-called *error correction* form, in which the previous forecast is adjusted in the direction of the error it made:
$$ y_{t} = y_{t-1} - \phi\epsilon_{t-1} $$

### Simple Exponential Smoothing with Growth
- $ARIMA(0,1,1)$ with an added constant equals the simple exponential smoothing function with growth
- This will provide more flexibility in our model
- First of all, the estimated $MA(1)$ coefficient is allowed to be negative: this corresponds to a smoothing factor larger than 1 in an SES model
- This is usually not allowed by the SES model-fitting procedure
- Second, you have the option of including a constant term in the ARIMA model if you wish, in order to estimate an average non-zero trend
- The $ARIMA(0,1,1)$ model with constant has the prediction equation:
$$ y_{t} = \mu + y_{t-1} - \phi\epsilon_{t-1} $$

### References
- [Exponential Smoothing Wiki](https://en.wikipedia.org/wiki/Exponential_smoothing)
- [Exponential Smoothing as an ARIMA Model](https://people.duke.edu/~rnau/411arim.htm#ses)
- [Different Time Series Approaches](https://blogs.oracle.com/datascience/decomposition-based-approaches-to-time-series-forecasting)
- [Exponential Smoothing and ARIMA Examples](https://www.machinelearningplus.com/time-series/arima-model-time-series-forecasting-python/)
- [Exponentially Weighted Averages](https://www.youtube.com/watch?v=lAq96T8FkTw&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=17)
- [Understanding Exponentially Weighted Averages](https://www.youtube.com/watch?v=NxTFlzBjS-4&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=18)
