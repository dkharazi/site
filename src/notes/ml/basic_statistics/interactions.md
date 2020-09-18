---
title: "Interactions"
draft: false
weight: 14
katex: true
---

### Describing Interaction Variables
- An interaction term is a variable in the model constructed of two (or more) predictors, representing the different effects of the combination of predictor variables on the response
- An interactions term allows for a different slope of the regression lines between the response variable and the different combinations of predictor variables (involved in the interaction)
- We may believe there is an interaction between two variables if the relationship between the response variable and a predictor variable depends on another predictor variable

### Motivating Interaction Terms with Orange Juice
- Let's say we're trying to predict the enjoyment of orange juice
- Way may believe the enjoyment of orange juice can be predicted by two variables:
	- If the juice has pulp
	- If the juice is fresh
- These variables may have some interaction between them when predicting how much someone enjoys orange juice
- Specifically, I enjoy orange juice without pulp, if I'm just purchasing store-brand orange juice
- However, I typically enjoy orange juice more with pulp if it's freshly made

### Example using Interaction Terms
- Let's say we know the following:
	- A *Height* variable that refers to the height of a shrub
	- A *Bacteria* variable that refers to the amount of bacteria in the soil for a given shrub
	- A *Sun* variable that refers to whether the shrub is located in partial sun or full sun
- We could define our model as the following:

$$
\text{Height} = \beta_0 + \beta_1\text{Bacteria} + \beta_2\text{Sun}
$$

- If we determine that $\beta_0 = 42$, $\beta_1 = 2.3$, and $\beta_2 = 11$, then our model would would look like the following:

$$
\text{Height} = 42 + 2.3 \times \text{Bacteria} + 11 \times \text{Sun}
$$

- We may believe the relationship between the amount of bacteria in the soil and the height of the shrub is different in the full compared to partial sun
- Specifically, we may believe that:
	- Shrubs with a large amount of bacteria in the soil tend to be taller if they have full sun exposure
	- And shrubs with a large amount of bacteria in the soil tend be be shorter if they have partial sun exposure
- In this situation, the slopes would have the same signs
- Or, we may believe that shrubs with more bacteria in the soil tend to be taller if they have full sun exposure and partial sun exposure, but the relationship is much more dramatic in full sun exposure compared to partial sun exposure
- In this situation, the slopes would have the same sign, but very different magnitude
- Therefore, it would be useful to add the following interaction term to our model:

$$
\text{Height} = \beta_0 + \beta_1(\text{Bacteria}) + \beta_2(\text{Sun}) + \beta_3(\text{Bacteria}\times\text{Sun})
$$

- Adding the interaction term changes the values of our coefficients to the following:

$$
\text{Height} = 35 + 4.2(\text{Bacteria}) + 9(\text{Sun}) + 3.2(\text{Bacteria}\times\text{Sun})
$$

### Coefficient Interpretations
- The effect of Bacteria on Height is now $4.2 + 3.2(Sun)$
- For plants with partial exposure to the sun (i.e. $Sun = 0$) and 1000mL of bacteria in the soil (i.e. $Bacteria = 1$), the effect of Bacteria is the following:

$$
\text{Height} = (4.2 \times 1) + (3.2 \times 0) = 4.2
$$

- For plants with full exposure to the sun and 1000mL of bacteria in the soil, the effect of Bacteria is the following:

$$
\text{Height} = (4.2 \times 1) + (3.2 \times 1) = 7.4
$$

- The interaction term $\beta_0$ states that the effect of having more bacteria in the soil is different if a plant has full or partial levels of sun exposure
- Essentially, the slopes of the regression lines between height and bacteria count are different for the different categories of sun exposure
- And, $\beta_3$ indicates how different those slopes are

### Example from Epidemiology
- Let's say we know the following:
	- A *NumDeaths* variable that refers to the number of deaths
	- A *InfectionRate* variable that refers to the rate of infection
	- A *DeathRate* variable that refers to the rate of death
- We could define our model as the following:

$$
NumDeaths = \beta_0 + \beta_1 Rate_{i} + \beta_2 Rate_{d}
$$

- We may believe the relationship between the infection rate and the number of deaths is different when the death rate is high compared to low
- Specifically, we may believe that:
	- Viruses with a higher infection rate have a higher number of deaths when the death rate is high
        - And viruses with a higher infection rate have a lower number of deaths when the death rate is low
- Said another way, we can also say:
	- Viruses with a higher death rate have a higher number of deaths when the infection rate is high
	- And viruses with a higher death rate have a lower number of deaths when the infection rate is low
- In this situation, the slopes would have the same signs
- Therefore, it would be useful to add the following interaction term to our model:

$$
Deaths = \beta_0 + \beta_1(Rate_{i}) + \beta_2(Rate_{d}) + \beta_3(Rate_{i} \times Rate_{d})
$$

### References
- [Truth about Linear Regression](http://www.stat.cmu.edu/~cshalizi/TALR/TALR.pdf)
- [Interpretation of Interaction Variables](https://www.theanalysisfactor.com/interpreting-interactions-in-regression/)
- [Interaction Variables Wiki](https://en.wikipedia.org/wiki/Interaction_(statistics))
- [Visualizing Interactions](https://cran.r-project.org/web/packages/interactions/vignettes/interactions.html)
- [Interactions Example](https://www.econometrics-with-r.org/8-3-interactions-between-independent-variables.html)
