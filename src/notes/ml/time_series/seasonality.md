---
title: "Seasonality"
draft: false
weight: 10
katex: true
---

### Motivating Seasonality
- Let's say we're an ice cream vendor tracking sales over time
- Naturally, we would expect sales to increase in the middle of the year (i.e. summer) and sales to decrease at the end of the year (i.e. winter)
- Therefore, ice cream sales clearly has a seasonal component

### Describing Seasonality
- Seasonality is a characteristic of a time-series model in which the data experiences regular and predictable changes that recur ever time interval (e.g. one year, one week, etc.)
- A cycle is somewhat similar, but it is not predictable
- Specifically, seasonality refers to a repeating pattern every time period happening within a year
- For example,  if there is a yearly seasonal pattern, then a data point from this year and a data point from last year should be the same
- Nearly every time-series model needs to be stationary, and one of the criteria for stationarity is that a time-series model can't contain a seasonal component
- Therefore, we need to find a way to account for seasonality in our time-series models to satisfy the assumptiono of stationarity
- We can do this by transforming our time series by calculating the differences (i.e. $z_{t} = s_{t+365} - s_{t}$), and thus using and ARIMA model

### Difference between Cycles and Seasonality
- Seasonality refers to a predictable pattern over the course of some time period, whereas a cycle refers to a unpredictable pattern
- Seasonality refers to more specific patterns, whereas cycles refer to more general patterns
- For example, seasonal patterns would include any recurrent trend that happens exactly the same over time
- On the other hand, cyclical patterns would include any general trend that happens over time, such as general increases over time (but not at exact moments in time)

## References
- [Seasonality in ARIMA Video](https://www.youtube.com/watch?v=4hrMdu9CSQs)
