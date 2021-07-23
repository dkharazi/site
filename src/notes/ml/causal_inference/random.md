---
title: "Randomized Experiments"
draft: false
weight: 5
katex: true
---

### Motivating Physical Randomization in Experiments
- In order to make accurate estimations $SDO$ about $ATE$ to determine causal effects, we must remove the following biases:
    - Selection bias
    - Heterogenous treatment effect bias
- Conducting randomized experiments will successfully eliminate biases
- To verify that an experiment is *randomized*, we must verify the following assumptions:
    - Independence assumption
    - SUTVA assumptions:
        - Homogeneity assumption
        - Spillover assumption

### Removing Biases with Physical Randomization
- Biases are eliminated by *randomly* assigning observations to a treatment group and control group
    - Assignment is random if the treatment and control groups are as balanced as if they were assigned by flipping a coin
- Specifically, randomization of the treatment assignment would eliminate both selection bias and heterogeneous treatment effect bias
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

### References
- [Course about Causality](https://www.youtube.com/watch?v=40jjX5RVi7k&list=PLoazKTcS0Rzb6bb9L508cyJ1z-U9iWkA0&index=11)
- [Programming Book about Randomized Experiments](https://bookdown.org/paul/applied-causal-analysis/randomizedexperiments1.html)
- [Causal Inference Textbook](https://mixtape.scunning.com/potential-outcomes.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/02-Randomised-Experiments.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)