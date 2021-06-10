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

### Defining Average Treatment Effects
- The formula for $ATE$ is defined as the following:

$$
\bold{ATE} = E[\delta] = E[Y^{1} - Y^{0}]
$$

$$
\approx \frac{y_{0}^{1} + y_{1}^{1} + ... + y_{n}^{1}}{n} - \frac{y_{0}^{0} + y_{1}^{0} + ... + y_{n}^{0}}{n}
$$

### Defining Average Treatment Effects for Treatments
- The formula for $ATT$ is defined as the following:
    - Here, $m$ is the number of observations in the treatment group

$$
\bold{ATT} = E[\delta | t_{i} = 1] = E[Y_{i}^{1} - Y_{i}^{0} | t_{i} = 1]
$$

$$
\approx \frac{\delta_{0}^{1} + \delta_{1}^{1} + ... + \delta_{m}^{1}}{m}
$$

### Defining Average Treatment Effects for Controls
- The formula for $ATU$ is defined as the following:
    - Here, $p$ is the number of observations in the control group

$$
ATU = E[\delta | t_{i} = 0] = E[Y_{i}^{1} - Y_{i}^{0} | t_{i} = 0]
$$

$$
\approx \frac{\delta_{0}^{0} + \delta_{1}^{0} + ... + \delta_{p}^{0}}{p}
$$

### Verifying the Assumption of No Bias
- To draw conclusions about causality, we must verify there isn't any bias between the control and treatment groups
- To do this, we must check that the following assumption is satisfied:

$$
E[Y^{0} | T=0] = E[Y^{0} | T=1]
$$

- If this assumption is satisfied, we can determine if there are causal effects by checking the following:

$$
ATT >> ATU \text{ or } ATT << ATU
$$



### Example of Determining Causality
- As an example, let's say we want to know if customers will buy more or less ice cream if we start using non-dairy creamer
    - The control group will include the dairy ice cream
    - The treatment group will include the non-dairy ice cream
- Each variable has the following notation:
    - $i$ represents a given customer
    - $t$ represents the group that customer $i$ falls into
        - $t=0$ if the $i^{th}$ customer is only offered dairy ice cream
        - $t=1$ if the $i^{th}$ customer is only offered non-dairy ice cream
    - $Y$ represents the ice cream sales for customer $i$
        - $Y^{0}$ are ice cream sales of customers in the control group
        - $Y^{1}$ are ice cream sales of customers in the treatment group
- In reality, customers can be in either the control or treatment group
    - For example, Jane can't actually participate in both groups and purchase ice cream
    - For Jane, $Y^{1}$ is a **counterfactual**
    - For Tim, $Y^{0}$ is his **counterfactual**
- As a result, our data looks like the following:

| $i$  | $t$ | $Y$   | $Y^{0}$  | $Y^{1}$  | $\delta$ |
| ---- | --- | ----- | -------- | -------- | -------- |
| Jane | $0$ | $ \text{\textdollar} 3$ | $ \text{\textdollar} 3$    | **null** | **null** | 
| Matt | $0$ | $ \text{\textdollar} 5$ | $ \text{\textdollar} 5$    | **null** | **null** | 
| Tim  | $1$ | $ \text{\textdollar} 2$ | **null** | $ \text{\textdollar} 2$    | **null** | 
| Sue  | $1$ | $ \text{\textdollar} 4$ | **null** | $ \text{\textdollar} 4$    | **null** | 

### Motivating Bias in Causality
- Bias is what separates association from causation
    - If we calculate $ATE$ on the data so far, we get the following:
    $$
    ATE = \frac{2+4}{2} - \frac{3+5}{2} = 3 - 4 = -1
    $$
    - Notice, this says on average the treatment group would have a negative impact on sales, compared to the control group
    - By mistake, we've assumed there isn't any bias
- Theoretically, let's just imagine we're able to somehow capture sales data for each $i^{th}$ customer in both the treatment and control groups
- Again, this is impossible, but our data would look like this:

| $i$  | $t$ | $Y$   | $Y^{0}$ | $Y^{1}$ | $\delta$ |
| ---- | --- | ----- | ------- | ------- | -------- |
| Jane | $0$ | $\text{\textdollar} 3$ | $\text{\textdollar} 3$   | $\text{\textdollar}10$  | $\text{\textdollar}7$ |
| Matt | $0$ | $\text{\textdollar}5$ | $\text{\textdollar} 5$   | $\text{\textdollar}12$  | $\text{\textdollar}7$ |
| Tim  | $1$ | $\text{\textdollar}2$ | $\text{\textdollar}6$   | $\text{\textdollar}2$   | $-\text{\textdollar}4$ |
| Sue  | $1$ | $\text{\textdollar}4$ | $\text{\textdollar}2$   | $\text{\textdollar}4$   | $\text{\textdollar}2$ |

- Notice, the $ATE$ would be much different if we capture all of the information about each customer
- Specifically, it would be the following:

$$
ATE = \frac{10+12+2+4}{4} - \frac{3+5+6+2}{4} = 7 - 4 = 3
$$

- Notice, this says on average the treatment group would have a positive impact on sales, compared to the control group
- Then, we can see ATU and ATT are the following:

$$
ATT = \frac{2-4}{2} = -1
$$

$$
ATU = \frac{7+7}{2} = 7
$$

- Notice, the $ATE$ is just a weighted average of $ATT$ and $ATU$

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/potential-outcomes.html#physical-randomization)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)