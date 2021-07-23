---
title: "Panel Data"
draft: false
weight: 13
katex: true
---

### Motivating the Use of Panel Data
- Often, our outcome variable depends on several factors
    - These factors may be observed or unobserved in our data
    - As we know, if any unobserved variables are correlated with the treatment variable, then the treatment variable is endogenous
    - Meaning, any correlations are not estimates of a causal effect
- Panel data refers to data where we observe the same units over more than one time period
    - E.g. individuals, firms, countries, etc.
- Panel data is very similar to time series data with one key difference
    - Time series data refers to data consisting of observations of *one* individual at multiple time points
    - Whereas, panel data refers to data consisting of observations of *multiple* individuals at multiple time points
- Panel data is used to estimate causal effects when there are unobserved confounders (that are constant over time)
    - To do this, we make the assumption that these unobserved confounders are constant over time

### Illustrating Panel Data with Unobserved Confounders
- Panel data allows us to control for unobserved variables by using a fixed, known variable
- For example, we can’t measure attributes like beauty and intelligence
- But, we know that a person is the same individual across time
    - Meaning, their beauty and intelligence is fixed across time
- So, we can create a dummy variable (i.e. their name) referring to that person with a set of fixed, unobserved variables
    - Then, we can control for their unobserved variables by adding that person to a regression model
- This is what we mean when we say we can control for the person itself
    - We are adding a variable (dummy in this case) that denotes that particular person
- By controlling for this dummy variable, we can estimate causal effects of a treatment on outcomes when there are unobserved confounders

### Defining Types of Estimators for Panel Data
- There are several different kinds of estimators for panel data
- For now, we'll focus on *fixed effects* (FE)
- Note, panel methods are usually based on the traditional notation
    - And, not the potential outcomes notation
    - Keep this in mind when we define their notation
- The notation is defined as the following:
    - Let $Y$ be our observed, outcomes
    - Let $D = (D_{1}, D_{2}, ..., D_{K})$ be a set of $k$ observed, variables
    - Let $u$ be an unobservable random variable
    - We're interested in the partial effects of variable $D_{j}$ in the population regression function:
    $$
    E[Y | D_{1}, D_{2}, ..., D_{K}, u]
    $$
    - Thus, our regression model looks like the following for an observation $i$:
    $$
    Y_{it} = \delta_{1} D_{it1} + \delta_{2} D_{it2} + ... + \delta_{K} D_{itK}
    $$
    - And, the entire panel (sample of data) looks like the following for an $i^{th}$ observation:
    $$
    Y_{i} = \begin{pmatrix} Y_{i1} \\ \vdots \\ Y_{it} \\ \vdots \\ Y_{iT} \end{pmatrix}_{T \times 1} D_{i} = \begin{pmatrix} D_{i11} & D_{i12} & D_{i1j} & \dots & D_{i1K} \\ \vdots & \vdots & \vdots & & \vdots \\ D_{it1} & D_{it2} & D_{itj} & \dots & D_{itK} \\ \vdots & \vdots & \vdots & & \vdots \\  D_{iT1} & D_{iT2} & D_{iTj} & \dots & D_{iTK} \end{pmatrix}_{T \times K}
    $$

### Illustrating Fixed Effects
- Generally, a fixed effect model is defined as the following:

$$
y_{it} = \beta X_{it} + \alpha U_{i} + \epsilon_{it}
$$

- Here, $y_{it}$ is the outcome of the $i^{th}$ individual at time $t$
    - Let $X_{it}$ be a set of observed variables for individual $i$ at time $t$
    - Let $U_{i}$ be a set of unobserved variables for individual $i$
        - Notice, these unobservables are assumed to be fixed over time
        - Hence, the lack of the time $t$ subscript
    - Finally, $\epsilon_{it}$ is the error term
- As an example, $y_{it}$ could represent wages
    - And $X_{it}$ are the observed variables that change over time
        - E.g. marriage and experience
    - And $U_{i}$ are the unobserved variables that are constant over time
        - E.g. beauty and intelligence

### Defining Fixed Effects
- The fixed effects model gets the average for every person in our panel
- Essentially, the individual dummy is regressed on the other variables
- This motivates the following estimation procedure:
    1. Create time-demeaned variables by subtracting the mean for the individual:
    $$
    \ddot{Y}_{it} = Y_{it} - \bar{Y}_{i}
    $$
    $$
    \ddot{X}_{it} = X_{it} - \bar{X}_{i}
    $$
    2. Regress $\ddot{Y}_{it}$ on $\ddot{X}_{it}$
    $$
    \ddot{Y}_{it} = \beta \ddot{X}_{it} + \ddot{e}_{it}
    $$
- Notice, the unobserved variables $U_{i}$ vanishes after performing the above transformation, since $U_{i}$ is constant over time
    - Actually, even observed variables $X_{i}$ that are constant over time are eliminated after performing the above transformation
    - For this reason, including any variables that are constant across time would be removed, since they would be a linear combination of the dummy variables

### Defining the Identifying Assumptions
- To identify $\beta$ with a fixed effects model, we must satisfy the following assumptions:
    1. $E[\epsilon_{it} | D_{i1}, D_{i2}, ..., D_{iT}, u] = 0$
        - In other words, there can't be any unobserved variables changing over time
    2. $rank(\sum_{t=1}^{T} E[\ddot{D}_{it}' \ddot{D}_{it}]) = K$
        - Meaning, there aren't any collinear observed variables $X$

### Describing the Problem with Panel Data
- Panel data is useful when controlling for confounding with non-random data (i.e. non-experimental data)
- However, it isn't great for every scenario, due to its assumptions
- There are two common situations when panel data doesn't work effectively to estimate causal effects:
    1. When we have reverse causality
    2. When unmeasured confounding is changing in time

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/panel-data.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/13-Panel-Data-and-Fixed-Effects.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)