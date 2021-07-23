---
title: "Evaluating Assumptions"
draft: false
weight: 3
katex: true
---

### Motivating Assumptions
- Previously, we learned how to estimate $ATE$ with $SDO$
- In turn, we learned how to estimate causal effects
- We learned that $SDO$ makes some assumptions about $ATE$
    - We must verify there isn't any selection bias or other biases
- Let's summarize those assumptions now and introduce a few more

### Verifying for Independent Assignment
- Assigning an $i^{th}$ observation to a treatment and control group $t_{i}$ shouldn't be made based on their potential outcomes $Y^{0}_{i}$ or $Y^{1}_{i}$
- Another way of saying this is that potential outcomes do not depend on the particular group assignment; they are independent
- In other words, treatment and control assignment must be independent of any potential outcomes
- Examples of violations of the independence assumption include:
    - A doctor assigning certain patients to a treatment group who he/she thinks will react more positively compared to the patients he/she assigns to the control group
- These assumptions must hold in order to make accurate estimations about causal effects

### Verifying SUTVA Assumptions
- There are two similar assumptions coined as SUTVA assumptions:
    1. Observations are homogeneous between the control and treatment groups
    2. Spillover (or externalities) don't exist between observations
- Examples of violations of the homogeneity assumption include:
    - Doctors applying surgery in the control group are more skilled or higher quality compared to the treatment group
    - The IQ of one group is higher than the other group
- Examples of violations of the spillover assumption include:
    - Students assigned to attend a tutoring program to improve their grades might interact with other students in their school who were not assigned to the tutoring program and influence the grades of these control students
    - Social media users in a control group may influence users in a treatment group
- These assumptions must hold in order to make accurate estimations about causal effects

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/potential-outcomes.html#physical-randomization)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)
- [Causal Inference Slides](https://clas.ucdenver.edu/marcelo-perraillon/sites/default/files/attached-files/w2_causal_inference_perraillon_0.pdf)