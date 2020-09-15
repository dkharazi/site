---
title: "ARIMA Model"
draft: false
weight: 8
katex: true
---

### Describing an ARIMA Model
- An autoregressive integrated moving average (or ARIMA) model is a time-series model
- Similar to the ARMA mode, the ARIMA model combines the autoregressive (AR) model and moving average (MA) model together in the same way
- The only difference between the two models is the ARIMA model includes an additional component to the ARMA model, which is represented by the *integrated* segment of ARIMA
- This additional component tries to ensure our ARMA model satisfies the stationarity assumption made by the ARMA model (and other time-series models)
- Specifically, it ensures our ARMA model satisfies the constant mean criteria of the stationarity assumption
- Essentially, we would only use an ARIMA model over an ARMA model if the mean of our time-series data is not constat
- Otherwise, we may as well use an ARMA model if stationarity is already satisfied

### Defining an ARIMA Model
- An ARIMA model is parameterized as the following: 
$$ ARIMA(p, d, k) $$
	- Where $p$ is the same as the autoregression parameter found in the AR and ARMA model (i.e. number of lags to be included in the model)
	- Where $k$ is the same as the moving average parameter found in the MA and ARMA model (i.e. order)
	- Where $d$ is the number of sequential transformations (specifically differences) that will be performed on the ARMA model
- When we transform our ARMA model, we are typically just calculating the differences between each neighboring time periods
- Therefore, we will always have one less point after our transformation
- Typically, ARIMA models work very well to ensure stationarity on models that are initially linear
- Usually it would suffice to only set $d=1$ to only perform one difference, but it depends on the exact task at hand

### Steps of ARIMA Model
1. Build an ARMA model, such as the following:
$$ s_{t} = \beta_{0} + \beta_{1}s_{t-1} + \theta_{1}\epsilon_{t-1} $$
2. Transform the ARMA model to ensure stationarity, such as the following:
$$ z_{t} = s_{t+1} - s_{t} $$
3. Work with $z_{t}$ for graphing the transformed residuals, plotting ACF/PRCF charts, or making predictions of $z_{t}$
4. Transform $z_{t}$ back to $s_{t}$ if we want to return to our original format

### Example of ARIMA
- Let's say we have the simplest form of ARIMA
$$ ARIMA(1,1,1) $$
- We could define our model as
$$ z_{t} = \beta_{0} + \beta_{1}z_{t-1} + \theta_{1}\epsilon_{t-1} + \epsilon_{t} $$
$$ \hat{z_{t}} = \beta_{0} + \beta_{1}z_{t-1} + \theta_{1}\epsilon_{t-1} $$
$$ \text{where } z_{t} = s_{t+1} - s_{t} $$
- Therefore, we can recover any $s_{u}$ using the following formula:
$$ sum(z_{u-1}) + s_{r} $$
	- Where $u$ is the index of the data point we are interested in transforming back
	- Where $i$ is the index of the data point of the index of our summation function
	- Where $r$ is the findal index of the data point that was excluded from out transformation data

### References
- [ARIMA Video](https://www.youtube.com/watch?v=3UmyHed0iYE)
- [Autoregression Video](https://www.youtube.com/watch?v=5-2C4eO4cPQ&t=264s)
- [Decomposing the ARIMA Model](https://blogs.oracle.com/datascience/decomposition-based-approaches-to-time-series-forecasting)
