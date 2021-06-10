---
title: "Randomized Experiments"
draft: false
weight: 3
katex: true
---

### Comparing Association with Causation
- Association refers to a statistical relationship between two variables
- Causation refers to determing that an exposure of one variable produces an effect on a different variable
- Association becomes causation if a variable $Y$ in the treatment group doesn't behave any differently in the control group
- So, association becomes causation when the following is true:

$$
E[Y_{0} | T=0] = E[Y_{0} | T=1]
$$

- Here, $Y_{t}$ refers to a variable being measured within the study
- And, $T$ refers to a binary variable representing whether the observation 


### References
- [Causal Inference Textbook](https://mixtape.scunning.com/probability-and-regression.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/02-Randomised-Experiments.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)