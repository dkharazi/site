---
title: "Variable Selection"
draft: false
weight: 16
katex: true
---

### Describing Variable Selection Methods
- Variable selection refers to selecting which variables to include in our model
- Therefore, it is a special case of model selection
- People tend to use variable selection when the competing models differ on which variables should be included, but agree on the mathematical form that will be used for each variable
- For example, a $\text{Temperature}$ predictor variable may or may not be included as a predictor, but there is no conversation about whether we'd use $\text{Temperature}$, $\text{Temperature}^2$, or $\log(\text{Temperature})$

### Avoiding p-values During Variable Selection
- It is very tempting (and common) to use p-values to select variables
- In other words, we sometimes fall into the trap of believing significant variables get included in our model and insignificant variables do not get included- Specifically, we fall into the trap of believing variables with smaller p-values are higher priorities to include than ones with smaller p-values
- Using p-values for variable selection, or to find the most significant variables, is typically a bad idea

### Why p-values Should Not be Used for Variable Selection
- P-values should not be used for variable selection because p-values measure the following:
	- Large (or small) sample size
		- Increasing the sample size will increase all of the test statistics and make every variable more significant
		- This is because of the $n$ in the denominator
		- In other words, the p-value will also be a measure of our sample size
	- Larger coefficients
		- Large coefficients will, all else being equal, have larger test statistics and be more significant
		- This is because of the $\beta$ in the numerator
	- Reducing the noise in our predictions
		- Reducing the noise around the regression line will increase all of the test statistics and make every variable more significant
		- This is because of the $\sigma$ in the denominator
	- Increasing the variance in our predictors
		- Increasing the variance in a predictor variable will, all else being equal, increase the test statistic and make the variable more significant
		- This is because of the Var($X$) in the denominator
	- Increasing correlation between predictor variables
		- More correlation between $X_i$ and the other predictor variables will, all else being equal, decrease the test statistic and make the variable less significant
		- This is because of the $VIF$ in the denominator

### Final Remarks on p-values
- The test statistic (and thus p-value) represents an estimate of the actual size of the coefficient with how well we can measure that particular coefficient
- These p-values answer the following question:
        - Can we reliably detect that this coefficient isn't exactly zero?
- These p-values (or F-tests for that matter) do not answer the following questions:
        - Is this variable truly relevant to the response variable?
        - Does including this variable help us predict the response?

### Better Methods of Variable Selection
- The cp statistic (or Mallow's statistic) and AIC attempt to estimate how well the model will predict new data
- Cross-validation estimates how well the model will predict new data (by predicting new data data)
- Sometimes, we confuse variable selection with determining how well the model will predict new data
- Therefore, we typically want to use cross-validation and calculate mallow's cp statistic or AIC to measure how well the model will predict new data

### More on Cross-Validation
- The standard inferential statistics are only valid if the model is chosen independent of the data being used to calculate them
- If there is any sort of data-dependent model selection (i.e. stepwise variable selection), they are no longer valid
- Therefore, we should split the data into training and testing groups (at random), and use one part to do model selection and the other half to do inference on the selected model

### References
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
