---
title: "SARIMA Model"
draft: false
weight: 11
katex: true
---

### Describing a SARIMA Model
- A SARIMA model is an ARIMA model that accounts for seasonality
- Here, seasonality just refers to a repeating pattern within a year (i.e. can't be a two-year pattern)
- A SARIMA model is defined as the following:
$$ ARIMA(p,d,q)(P,D,Q)m $$
	- Where $p$ refers to the order of the autoregressive portion of the ARIMA model
	- Where $d$ refers to the order of the integrated portion of the ARIMA model (i.e. how many times we take a difference to get our model to be stationary)
	- Where $q$ refers to the order of the moving average portion of the ARIMA model
	- Where $m$ refers to the seasonal factor (i.e. the number of distinct periods within a year that make up a single seasonal pattern that is repeated over time)
	- Where $P$ refers to the order of the autoregressive portion of the ARIMA model, with an additional seasonal component
	- Where $D$ refers to the order of the integrated porition of the ARIMA model, with an additional seasonal component
	- Where $Q$ refers to the order of the order of the moving average porition of the ARIMA model, with an additional seasonal component
- A SARIMA model can also be written as an ARIMA model:
$$ ARIMA(p,d,q)_{1}(P,D,Q)m $$
- This is because we're technically backshifting parameters $p, d,$ and $q$ by $1$ (i.e. $s_{t+1} - s_{t}$)

### Example of SARIMA Model
- Let's say we define the following SARIMA model:
$$ ARIMA(1,0,0)(0,1,1)_{4} $$
- The $p$ parameter with a value equal to $1$ can be translated to the following:
$$ (1-\phi_{1}B^{1})y_{t} $$
	- Where $B^{1}y_{t}$ is our lag operator representing $y_{t-1}$
	- Where $\phi_{1}$ is the slope of our variable $y_{t-1}$
	- Therefore, $(1-\phi_{1}B^{1})y_{t}$ is just shorthand for $y_{t}-\phi_{1}y_{t-1}$
- The $D$ parameter with a value equal to $1$ can be translated to the following:
$$ (1-B^{4})y_{t} $$
	- Where $B^{4}y_{t}$ is our lag operator representing $y_{t-4}$
	- Therefore, $(1-B^{4})y_{t}$ is just shorthand for $z = y_{t}-y_{t-4}$
- The $Q$ parameter with a value equal to $1$ can be translated to the following:
$$ (1+\theta_{1}B^{4})\epsilon_{t} $$
	- Where $B^{4}\epsilon_{t}$ is our lag operator representing $\epsilon_{t-4}$
        - Where $\epsilon_{t-4}$ is the error of the fourth previous predicted value and what we observed
        - Where $\theta_{1}$ represents the percentage of the error $\epsilon_{t-4}$ we should include in our model
        - Therefore, $(1-\theta_{1}B^{4})\epsilon_{t}$ is just shorthand for $\epsilon_{t}+\theta_{1}\epsilon_{t-4}$
- We can continue to simplify our SARIMA model to the following formulas:
$$ (1-\phi_{1}B^{1})(1-B^{4})y_{t} = (1+\theta_{1}B^{4})\epsilon_{t} $$
$$ (1-\phi_{1}B^{1}-B^{4}+\phi_{1}B^{5})y_{t} = \epsilon_{t}+\theta_{1}\epsilon_{t-4} $$
$$ y_{t} - \phi_{1}y_{t-1} - y_{t-4} + \phi_{1}y_{t-5} = \epsilon_{t} + \theta_{1}\epsilon_{t-4} $$
$$ y_{t} - y_{t-4} = \phi_{1}y_{t-1} - \phi_{1}y_{t-5} + \theta_{1}\epsilon_{t-4} + \epsilon_{t} $$
$$ z_{t} = \phi_{1}z_{t-1} + \theta_{1}\epsilon_{t-4} + \epsilon_{t} $$
	 - Since $z = y_{t}-y_{t-4}$ is based on parameter $D$
- Now, we've transformed our ARIMA model to account for seasonality by taking differences $y_{t} - y_{t-4}$, which will lead to a more stationary model

### References
- [SARIMA Video](https://www.youtube.com/watch?v=WjeGUs6mzXg)
- [Examples of SARIMA Models](https://www.analyticsvidhya.com/blog/2015/12/complete-tutorial-time-series-modeling/)
