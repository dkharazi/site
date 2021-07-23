---
title: "Subclassification"
draft: false
weight: 8
katex: true
---

### Motivating Subclassification for Causality
- The goal of any causal analysis is to isolate some causal effect
- To do this, we must satisfy the *backdoor criterion* in our study
    - Meaning, we must close all open backdoor paths
- Closing backdoor paths can be achieved through carefully performing conditioning strategies in our study
- Roughly, there are three different types of conditioning strategies:
    - Subclassification
    - Exact matching
    - Approximate matching

### Motivating the Conditional Independence Assumption
- Conditional independence assumption (or CIA) states that a treatment assignment is independent of potential outcomes after conditioning on observed covariates
- Sometimes we know that randomization occurred only conditional on some observable characteristics
    - This would violate the backdoor path criterion
- In order to estimate a causal effect when there is a confounder, we must satisfy CIA
    - In DAGs notation, this refers to enforcing closed paths everywhere for confounders
    - Meaning, CIA implies there isn't any confounding bias

$$
(Y^{1}, Y^{0}) \perp T | X
$$

### Introducing Subclassification for Estimating $ATE$
- Subclassification is one of three conditioning method used for satisfying the backdoor criterion
- It involves weighting differences in means by strata-specific weights
    - A strata is a group of observations for a particular variable
- These strata-specific weights adjust the differences in means so the distribution for each strata is similar to the counterfactual’s strata
- This method implicitly achieves distributional balance between the treatment and control in terms of a known, observable confounder
- Specifically, it ensures that CIA isn't violated

### Defining Subclassification
- Subclassification involves computing strata-weighted averages for each control and treatment group
- By doing this, we can control for confounders
- Specifically, subclassification involves the following steps:
    1. Stratify the data into groups:
        - E.g. young males, young females, old males, old females
    2. Calculate the number of observations in each strata for each treatment and control group
    3. Calculate the total number of observations for the treatment and control group
    4. Calculate the strata-weighted averages for each treatment and control group

### Illustrating Subclassification for Smokers
- Suppose we're interested in determining if cigarette and cigar smoking causes lung cancer
- However, we're mainly interested in seeing if there's a difference between the mortaility rates of cigarette and cigar smokers
- Here, we're assuming age is the only relevant confounder between cigarette smoking and mortality
- Now, let's say we have the following associations and causal relationships:

![subclassificationdag](../../../img/dag.svg)

- Where each variable represents the following:
    - $Y$: Mortality rate
    - $T$: Whether the person is a smoker or not
    - $X$: Age (Bucketed into $3$ age groups)
- Suppose the data is aggregated in the following table:

| Age | Death Rate of Cigarette Smokers | # of Cigarette Smokers | # of Pipe Smokers |
| --- | --- | --- | --- |
| $20-40$ | $20$ | $65$ | $10$ |
| $41-70$ | $40$ | $25$ | $25$ |
| $>70$   | $60$ | $10$ | $65$ |

- The average death rate for cigar smokers with subclassification:

$$
20 \times \frac{65}{100} + 40 \times \frac{25}{100} + 60 \times \frac{10}{100} = 29
$$

- The average death rate for cigarette smokers with subclassification:

$$
20 \times \frac{10}{100} + 40 \times \frac{25}{100} + 60 \times \frac{60}{100} = 51
$$

- Notice, the naive $SDO$ estimated cigar smokers having a higher mortality rate
- However, the strata-weighted average estimated cigarette smokers having a higher mortality rate (which is correct)
- Thus, the naive $SDO$ includes more bias compared to the strata-weighted average

### Subclassification and the Curse of Dimensionality
- In the previous example, we’ve assumed only covariate exists
- However, there could be many more covariates in reality
- If we continued to bucket these covariates into smaller groups, the number of observations in each bucketed group would eventually decrease to $0$
- Or, simply stratifying variables could lead to too many dimensions (causing sparseness)
- As long as there is enough data for stratifying our covariates, subclassification can be a viable option
- However, if subclassification suffers from the curse of dimensionality, then we must use other methods (like matching)

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/matching-and-subclassification.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/10-Matching.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)