---
title: "ARMA Model"
draft: false
weight: 4
katex: true
---

### Describing ARMA Models
- An autoregressive moving average (or ARMA) model is a model combining the autoregressive model and moving average model together
- We typically denote an autoregressive model as the following:
	$$ AR(p) $$
	- Where $p$ is the number of lags included in the model
- We typically denote a moving average model as the following:
	$$ MA(k) $$
	- Where $k$ is the order of lags included in the model
- Therefore, we typically denote an ARMA model as the following:
	$$ ARMA(p, k) $$
	- Where $p$ refers to the number of lags from the autoregressive model
	- Where $k$ refers to the order from the moving average model
- Mathematically, we typically represent an ARMA model as the following:
	$$ s_{t} = \beta_{0} + \beta_{1}s_{t-1} + \theta_{1}\epsilon_{t-1} + \epsilon_{t} $$
	$$ \hat{s_{t}} = \beta_{0} + \beta_{1}s_{t-1} + \theta_{1}\epsilon_{t-1} $$
	- Where the AR component is represented by $\beta_{0} + \beta_{1}s_{t-1}$
	- Where the MA component is represented by $\theta_{1}\epsilon_{t-1}$

### Differences Between AR and MA Models
- The AR terms represent the lagged values $s_{t}$
- The MA terms represent the lagged errors $\epsilon_{t}$ of $s_{t}$
- The primary difference between an AR and MA model is based on the correlation between time series objects at different time points
- Specifically, the correlation between $s_{t}$ and $s_{t-r}$ is always zero as $r$ grows larger in an MA model
- This directly comes from the fact that covariance between $s_{t}$ and $s_{t-r}$ is zero for MA models
- However, the correlation of $s_{t}$ and $s_{t-r}$ gradually declines as $r$ grows larger in an AR model
- This difference gets exploited irrespective of having the AR model or MA model
- The correlation plot can give us the order of MA model

### Three Examples of an ARMA Model
- If we build an $ARMA(1,1)$ model, then we would represent it as the following:

$$ \hat{s_{t}} = \beta_{0} + \beta_{1}s_{t-1} + \theta_{1}\epsilon_{t-1} $$

- If we build an $ARMA(2,1)$ model, then we would represent it as the following:

$$ \hat{s_{t}} = \beta_{0} + \beta_{1}s_{t-1} + \beta_{2}s_{t-2} + \theta_{1}\epsilon_{t-1} $$

- If we build an $ARMA(1,2)$ model, then we would represent it as the following:

$$ \hat{s_{t}} = \beta_{0} + \beta_{1}s_{t-1} + \theta_{1}\epsilon_{t-1} + \theta_{2}\epsilon_{t-2} $$

### References
- [ARMA Videos](https://www.youtube.com/watch?v=HhvTlaN06AM&t=2s)
- [Stationarity in ARMA Models](https://www.analyticsvidhya.com/blog/2015/12/complete-tutorial-time-series-modeling/)
- [Moving Average Parameters in an ARIMA Model](https://people.duke.edu/~rnau/411arim.htm)
- [Notes on ARMA Models](https://maryclare.github.io/atsa/content/notes/notes_3.pdf)
