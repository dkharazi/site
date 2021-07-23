---
title: "Measuring Causality"
draft: false
weight: 2
katex: true
---

### Measuring Causal Effects
- There are three unknown parameters that can be estimated to help measure causal effects:
    - $ATE$: Average treatment effect
    - $ATT$: Average treatment effect for the treatment group
    - $ATU$: Average treatment effect for the control group
- The parameter $ATE$ is dependent on $ATT$ and $ATU$
- If $ATE$ is positive and large, then the treatment has a large, positive effect on average (compared to the control group)
- If $ATE$ is negative and large, then the treatment has a large, negative effect on average (compared to the control group)
- If $ATE$ is small or $0$, then the treatment doesn't really have any effect on average (compared to the control group)

### Defining Average Treatment Effects
- The formula for $ATE$ is defined as the following:

$$
\bold{ATE} = E[\delta] = E[Y^{1} - Y^{0}]
$$

$$
= \frac{y_{0}^{1} + y_{1}^{1} + ... + y_{n}^{1}}{n} - \frac{y_{0}^{0} + y_{1}^{0} + ... + y_{n}^{0}}{n}
$$

- Here, each $y_{i}$ represents one known observation or one unknown observation (either from the control or treatment group) 
- We can use $SDO$ to estimate the population parameter $ATE$
- And, $SDO$ represents the *simple difference in means*
    - Again, $ATE$ is a theoretical, unknown population parameter
    - Whereas, $SDO$ is an actual, known estimator or statistic
- In practice, $SDO$ is a naive estimation of $ATE$
    - There are more sophisticated methods for estimating $ATE$
    - Such as, subclassification, matching, etc.

### Estimating the Unknown $ATE$ Parameter
- The following formula for $SDO$ is defined as the following:

$$
\hat{ATE} = SDO = E[Y_{i}^{1} | t_{i} = 1] - E[Y_{i}^{0} | t_{i} = 0]
$$

$$
= \frac{y_{0}^{1} + y_{1}^{1} + ... + y_{j}^{1} + y_{m}^{1}}{m} - \frac{y_{0}^{0} + y_{1}^{0} + ... + y_{k}^{0} + y_{p}^{0}}{p}
$$

- Here, each $y_{j}$ represents a known observation from the treatment group of $m$ total observations
- And, each $y_{k}$ represents a known observation from the control group of $p$ total observations
- Notice, the unknown observations are excluded for each $y_{j}$ and $y_{k}$
- So, we are making more assumptions by using this as an estimator

### Motivating Existing Biases within $SDO$
- Again, the $SDO$ estimator makes a few assumptions about $ATE$ and includes a few biases as a result
- Specifically, it includes the following biases:
    - Selection bias
    - Heterogeneous treatment effect bias
- Mathematically, these biases can be depicted in the formula:

$$
SDO = ATE
$$

$$
+ \underbrace{E[Y^{0} | t_{i} = 1] - E[Y^{0} | t_{i} = 0]}_{\text{Selection bias}}
$$

$$
+ \underbrace{(1-\gamma)(ATT-ATU)}_{\text{Heterogeneous bias}}
$$

- Here, the above notation represents the following:
    - $\gamma$ is the number of observations in the treatment goup
    - $(1-\gamma)$ is the number of observations in the control group

### Describing the Biases within $ATE$
- Selection bias is the inherent difference between the two groups if both received the treatment
- The heterogenous treatment effect bias is another form of bias
- Typically, we'll assume that treatment effects are constant
- Which, will cause $ATU = ATT$
- Thus, it will make $SDO = ATE + \text{selection bias}$
- These biases can be mitigated through methods like:
    - Subclassification
    - Matching
    - Etc.

### Defining Average Treatment Effects for Treatments
- The formula for $ATT$ is defined as the following:
    - Here, $m$ is the number of observations in the treatment group

$$
\bold{ATT} = E[\delta | t_{i} = 1] = E[Y_{i}^{1} | t_{i} = 1] - E[Y_{i}^{0} | t_{i} = 1]
$$

$$
\approx \frac{\delta_{0}^{1} + \delta_{1}^{1} + ... + \delta_{m}^{1}}{m}
$$

### Defining Average Treatment Effects for Controls
- The formula for $ATU$ is defined as the following:
    - Here, $p$ is the number of observations in the control group

$$
\bold{ATU} = E[\delta | t_{i} = 0] = E[Y_{i}^{1} | t_{i} = 0] - E[Y_{i}^{0} | t_{i} = 0]
$$

$$
\approx \frac{\delta_{0}^{0} + \delta_{1}^{0} + ... + \delta_{p}^{0}}{p}
$$

### Verifying the Assumption of Independence
- To draw conclusions about causality, we must verify there isn't any bias between the control and treatment groups
- To do this, we must check that the following assumption is satisfied:

$$
E[Y^{0} | t=0] = E[Y^{0} | t=1]
$$

- Physical randomization can satisfy this assumption of independence (i.e. independent assignment of observations to groups)
    - Physical randomization refers to assigning an observation to a treatment or control group
    - The assignment is random if the groups are as balanced as if they were assigned by flipping a coin

### Describing the Assumption of Independence
- We can assume $SDO = ATE$ when a treatment $t$ is assigned to patients *independent* of their potential outcomes $Y^{0}$ or $Y^{1}$
- In summary, independence implies that the observations in both the treatment and control groups have the same potential outcome on average in the population
- Independence can be ensured using the following techniques:
    - Physical randomization
    - Conditional independence
- In reality, achieving independence is difficult and usually unlikely
    - Hence, we must use additional methods like subclassification, matching, etc.

### Enforcing Independence with Physical Randomization
- In other words, all biases are eliminated by *randomly* assigning observations to a treatment group and control group
- So, randomization of the treatment assignment would eliminate both selection bias and heterogeneous treatment effect bias
    - Thus, $SDO$ no longer suffers from selection bias
- Mathematically, randomization of the treatment assignment ensures:

$$
E[Y^{0} | t = 1] - E[Y^{0} | t = 0] = 0
$$

- Again, randomization of the treatment assignment also eliminates any heterogeneous treatment effect bias
- Since, randomization of the treatment assignment also ensures:

$$
E[Y^{1} | t = 1] - E[Y^{1} | t = 0] = 0
$$

### More Details about Association and Causation
- Association refers to a statistical relationship between two variables
- Causation refers to determing that an exposure of one variable produces an effect on a different variable
- Association becomes causation if a variable $Y$ in the treatment group doesn't behave any differently in the control group
- So, association becomes causation when the following is true:

$$
E[Y_{0} | T=0] = E[Y_{0} | T=1]
$$

- Here, $Y_{t}$ refers to a variable being measured within the study
- And, $T$ refers to a binary variable representing whether the observation received treatment or not

### References
- [Course on Measuring Causal Effects](https://www.youtube.com/watch?v=RGvI0uVMgtw&list=PLoazKTcS0Rzb6bb9L508cyJ1z-U9iWkA0&index=8)
- [Causal Inference Textbook](https://mixtape.scunning.com/potential-outcomes.html#physical-randomization)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)