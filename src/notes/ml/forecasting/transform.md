---
title: "Forecasting Transformations"
draft: false
weight: 2
katex: true
---

### Motivating Transformations and Adjustments
- Adjusting any historical data can often help make forcasting easier and more accurate
- In general, there are four main adjustments:
    - Calendar adjustments
    - Population adjustments
    - Inflation adjustments
    - Mathematical transformations
- Making patterns simpler (by performing transformations) usually lead to more accurate forecasts

### Defining Calendar Adjustments
- Calendar adjustments include transforming data to account for seasonality trends
- Forecasts become more accurate by removing any seasonality variation
- For example, monthly flower sales will vary between months for two different reasons:
    - Each month has a different number of days
    - Seasonal variation across the year
- In this example, we could adjust monthly flower sales using the following formula:

$$
\text{monthly sales}^{*} = \frac{\text{monthly sales}}{\text{number of days in month}}
$$

### Defining Population Adjustments
- Some data is impacted by yearly population changes
- Thus, population data should be normalized using per-capita data
- For example, yearly housing sales will always vary, since the population increases every year
- As a result, forecasts would be more accurate by removing the yearly effects of population changes
- Then, we can determine whether there have been real changes in housing sales relative to the population
- Thus, we can normalize sales using the following formula:

$$
\text{yearly sales}^{*} = \frac{\text{yearly sales}}{\text{population for that year}}
$$

### Defining Inflation Adjustments
- Some data is impacted by the fluctuations in the value of money
- Thus, financial data should be inflation-adjusted
- For example, yearly housing prices will fluctuate slightly each decade due to inflation
    - A $200,000 house in 2000 will be worth $300,000 in 2020 after adjusting for inflation

### Defining Mathematical Transformations
- Some data can be transformed to account for non-linear trends
- For example, some data contains exponential growth
    - Normalizing this data by taking the log (of this data) will lead to more accurate and interpretable forecasts
- Also, a Box-Cox is a common transformation
    - A Box-Cox transformation attempts to adjust a non-normal variable into a normal shape
- Essentially, we cycle through different sets of power exponents $\lambda$ in the Box-Cox formula, until we eventually find a $\lambda$ that best transforms our non-normal data into a *normal* shape
- Note, looping through different power exponenets $\lambda$ implies we're looping through different transformations, such as:

| $\lambda$ | Box-Cox Transformation          |
| --------- | ------------------------------- |
| $-3$      | $Y^{-3} = \frac{1}{Y^{3}}$      |
| $-2$      | $Y^{-3} = \frac{1}{Y^{2}}$      |
| $-1$      | $Y^{-1} = \frac{1}{Y}$          |
| $-0.5$    | $Y^{-0.5} = \frac{1}{\sqrt{Y}}$ |
| $0$       | $\log (Y)$                      |
| $0.5$     | $Y^{0.5} = \sqrt{Y}$            |
| $1$       | $Y$                             |
| $2$       | $Y^{2}$                         |
| $3$       | $Y^{3}$                         |

### References
- [Textbook for Forecasting: Principles and Practices](https://otexts.com/fpp2/toolbox.html)