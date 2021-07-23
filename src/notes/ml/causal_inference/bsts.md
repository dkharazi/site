---
title: "Bayesian Structural Time-Series"
draft: false
weight: 16
katex: true
---

### Introducing a Bayesian Structural Time-Series Model
- A BSTS model is a state-space mdoel used for estimating and identifying causal effects
- It's also used for:
    - Feature selection
    - Time series nowcasting/forecasting
- The model is designed to be used with time series data
- In contrast to diff-in-diff, state-space models make it possible to do the following:
    - Infer the temporal evolution of attributable impact
    - Incorporate empirical priors on the parameters in a fully Bayesian treatment
    - Flexibly accommodate multiple sources of variation, including the time-varying influence of contemporaneous covariates
        - I.e. synthetic controls

### Addressing the Limitations of Diff-in-Diff
1. DD is based on a static regression model that assumes iid data, despite the fact the design has a temporal component
    - Thus, when fit to serially correlated data, static models yield overoptimistic inferences
    - Meaning, uncertainty windows become too narrow
2. Most DD analyses only consider two time points: before and after the intervention
    - In practice, we're usually interested in more than just these two time points
    - Specifically, we may be interested in how the treatment effects evolve over time (after the treatment)
    - Especially, we're interested in its onset or decay structure
3. When DD analyses are based on time series, they sometimes impose restrictions on the way a synthetic control is constructed from a set of predictor variables
    - This is something we'd likely like to avoid

### Defining Advantages of Bayesian Structural Time-Series
- The limitations of DD schemes can be addressed by using state-space models, coupled with highly flexible regression components, to explain the temporal evolution of an observed outcome:
    1. We can flexibly accommodate different kinds of assumptions about the latent state and emission processes underlying the observed data, including local trends and seasonality
    2. We use a fully Bayesian approach to infer the temporal evolution of counterfactual activity and incremental impact
        - One advantage of this is the flexibility with which posterior inferences can be summarised
    3. We use a regression component that precludes a rigid commitment to a particular set of controls by:
        - Integrating out our posterior uncertainty about the influence of each predictor
        - Integrating our uncertainty about which predictors to include in the first place, which avoids overfitting

### Defining Structural Time-Series Models
- BSTS models are state-space models for time-series data
- They can be defined in terms of a pair of equations:

$$
Y_{t} = \mu_{t} + x_{t} \beta + S_{t} + \epsilon_{t}
$$

$$
\mu_{t+1} = \mu_{t} + \eta_{t}
$$

- Here, we assume $\epsilon_{t} \sim \mathcal{N}(0, \sigma_{\epsilon}^{2})$ are independent
- And, we assume $\eta_{t} \sim \mathcal{N}(0, \sigma_{\eta}^{2})$ are independent
- Essentially, the random variables in the above equations represent:
    - $x_{t}$ represents a set of regressors at a point in time $t$
    - $S_{t}$ represents a seasonality effect at a point in time $t$
    - $\mu_{t}$ represents a localized trend around a point in time $t$
- Note, regressor coefficients, seasonality and trend are estimated simultaneously
    - This helps avoid strange coefficient estimates due to spurious relationships
- Since the model is *bayesian*, we can shrink the elements of $\beta$ to promote sparsity or specify outside priors for the means
    - In case, we’re not able to get meaningful estimates from the historical data

### Assembling the State-Space Model
- A structural time-series model allows us
to flexibly choose appropriate components for the following terms:
    - Trend terms
    - Seasonality terms
    - Static/dynamic regression terms for the controls
- Static coefficients are a good option when the relationship between control and treated units has been stable in the past
    - This is because a spike-and-slab prior can be implemented efficiently within a forward-filtering, backward-sampling framework
    - This makes it possible to quickly identify a sparse set of covariates (even from tens or hundreds of variables)

### References
- [Post about Bayesian Structural Time-Series](https://multithreaded.stitchfix.com/blog/2016/04/21/forget-arima/)
- [Paper proposing Bayesian Structural Time-Series](https://arxiv.org/pdf/1506.00356.pdf)