---
title: "Autocorrelation"
draft: false
weight: 1
katex: true
---

### Motivating Time Series Models
- Let's say we want to predict the average price of salmon in our city this month
- Let's say we believe knowing the average price of salmon in our city last month and each month prior will help us predict the average monthly price of salmon in our city this month
- In other words, we believe the average price of salmon at each time period is dependent on the average price of salmon from the previous time periods
- The average price of salmon in our city this month will be $s_{t}$
- The average price of salmon in our city last month will be $s_{t-1}$
- The average price of salmon in our city two months ago will be $s_{t-2}$

### Motivating Time Series Dependencies
- Building off of our previous example, let's say our current month is March
- Most likely, the price of salmon in January is going to have some kind of effect on the price of salmon in February
- Similarly, the price of salmon in February is going to have some kind of effect on the price of salmon in March
- However, we should also expect the price of salmon in January to have some kind of effect on the price of salmon in March as well
- In other words, we know the price of salmon at a given time period is dependent on the price of salmon from its previous time period, but sometimes the price of salmon at a given time period can also be dependent on the price of salmon from time periods before its previous time period as well
- The following is a more concrete example of the above concept:
	- Let's say there's a big food festival that happens in our city every two months
	- Specifically, the food festival happens in January, March, and May
	- Let's also say the salmon shops want to make more money off of the food festivals, so they raise the price of salmon during the months of the food festival
	- Therefore, every other time period has a direct effect on the price of salmon

### Motivating Aurocorrelation
- From the previous example, we are still trying to determine the average price of salmon in March
- There are two types of effects on our price, which are the following:
	- Direct effects
		1. There is one direct effect on the price of salmon in March, which is the price of salmon in January: $s_{t-2} \to s_{t}$
		2. There is another direct effect on the price of salmon in March, which is the price of salmon in February: $s_{t-1} \to s_{t}$
	- Indirect effects
		1. There is an indirect effect on the price of salmon in March, which is the price of salmon in January: $s_{t-2} \to s_{t-1} \to s_{t}$
- Let's say we want to determine if the price of salmon in January is correlated with the price of salmon in March, then we would typically account for the direct and indirect effects of the price of salmon in other time periods
- This is known as the autocorrelation function, which is just a simple Pearson's correlation between the two predictors
- In our case, we could write the autocorrelation function between two time periods as $acf(s_{t-2}, s_{i})$ or $acf(\text{january price}, \text{march price})$, which is the same thing as finding the correlation between two predictors from our high school math class (i.e. using Pearson's correlation)
- The following are some examples of the autocorrelation function in action:
	- The $acf(\text{january price}, \text{march price})$ is large and postive, because the food festival causes them to vary together in harmony
	- The $acf(\text{february price}, \text{march price})$ is large and negative, because the food festival causes them to vary together in an opposite manner
	- The $acf(\text{january 1800 price}, \text{march 2019 price})$ is most likely small, because the food festival wasn't around and had no effect on the prices, and thus the prices were most likely unrelated so they do not vary together
- In other words, the correlation between the price of one time period and another time period accounts for both the direct and indirect effects

### Motivating Partial Autocorrelation
- The partial autocorrelation function tries to account for the direct effects only
- The partial autocorrelation function does this by excluding the indirect effects from our function
- From our previous example, we can represent our system of equation as the following:
	$$ s_{t} = \beta_{0} + \beta_{1}s_{t-1} + \beta_{2}s_{t-2} + \epsilon_{i} $$
	- Where $s_{t}$ is the price of salmon in March (i.e. the current month)
	- Where $s_{t-1}$ is the price of salmon in February (i.e. the previous month)
	- Where $s_{t-2}$ is the price of salmon in March (i.e. two months ago)
	- Where $\beta_{1}$ represents the following:
		- The indirect effect that the price of salmon in January has on the price of salmon in March
		- The direct effect that the price of salmon in February has on the price of salmon in March
	- Where $\beta_{2}$ represents the direct effect that the price of salmon in January has on the price of salmon in March
		- Therefore, $\beta_{2}$ is partial autocorrelation function coefficient, which represents the coefficient returned by the partial autocorrelation function:
		$$ pacf(s_{t-2}, s_{t}) $$
		- In other words, $\beta_{2}$ represents the correlation between the price of salmon in January (i.e. $s_{t-2}$) and the price of salmon in March (i.e. $s_{t}$), only including the direct effects between the two time periods
- In the example given above, we would say our lag is $2$, since the number of time periods we're looking at from our current time period (i.e. March) is $2$
- Mathematically, the partial autocorrelation function does this by solving its system of equations (similar to solving for the beta coefficients) using Durbin-Levinson recursion (i.e. linear algebra methods)
- We can visualize the coefficients returned by partial autocorrelation function using an partial autocorrelation plot

### Visualizing the PACF
- Time series are serially dependent, meaning $s_{t}$ is generally dependent on all earlier values in time
- Typically, there is a decay of dependence as the points in time grow farther and farther apart form each other
- Therefore, when we observe the lag values in a partial autocorrelation plot, we can see their respective correlations decrease as the lag values increase
- Typically, we only keep the partial autocorrelation coefficients that are very large (and outside of our interval hovering around zero)

### References
- [Autocorrelation and Partial Autocorrelation Video](https://www.youtube.com/watch?v=DeORzP0go5I)
- [Time Series Lecture Notes](https://www.stat.cmu.edu/~cshalizi/uADA/12/lectures/ch26.pdf)
- [Basic Description about Autocorrelation](https://machinelearningmastery.com/gentle-introduction-autocorrelation-partial-autocorrelation/)
- [What is the Autocorrelation Function](https://stats.stackexchange.com/questions/77248/what-is-autocorrelation-function)
- [Time Series Textbook](http://db.ucsd.edu/static/TimeSeries.pdf)
