---
title: "Example of Causality"
draft: false
weight: 4
katex: true
---

### Defining Notation for Determining Causality
- As an example, let's say we want to know if providing schools with laptops will cause their students to receive better SAT scores
    - The control group will include schools without laptops
    - The treatment group will include schools with laptops
- Each variable has the following notation:
    - $i$ represents a given school
    - $t$ represents the group that school $i$ falls into
        - $t=0$ if the $i^{th}$ school isn't provided laptops
        - $t=1$ if the $i^{th}$ school is provided laptops
    - $Y$ represents the average SAT scores for school $i$
        - $Y^{0}$ are the average SAT scores for the control group
        - $Y^{1}$ are the average SAT scores for the treatment group

### Illustrating $ATE$ with SAT Scores
- Theoretically, let's just imagine we're able to somehow capture data for each $i^{th}$ school in both a treatment and control group
- Again, this wouldn't be possible, but our data could look like this:

| $i$      | $t$ | $Y$    | $Y^{0}$ | $Y^{1}$ | $\delta$ |
| -------- | --- | ------ | ------- | ------- | -------- |
| School 1 | $0$ | $800$  | $800$   | $850$   | $50$     |
| School 2 | $0$ | $900$  | $900$   | $870$   | $-30$    |
| School 3 | $1$ | $1150$ | $1100$  | $1150$  | $50$     |
| School 4 | $1$ | $1400$ | $1300$  | $1400$  | $100$    |

- In this case, we can calculate the population parameter $ATE$
- Specifically, it would be the following:

$$
ATE = \frac{850+870+1150+1400}{4} - \frac{800+900+1100+1300}{4} = 1067 - 1025 = 42
$$

- This indicates providing laptops to schools would increase SAT scores by $42$ points on average
- Thus, we see there isn't any real significant difference between the control group and treatment group

### Illustrating $SDO$ with Test Scores
- In reality, customers can be in either the control or treatment group
    - For example, school $1$ can't actually participate in both groups at the same time
    - For school 1, $Y^{1}$ is a **counterfactual**
    - For school 4, $Y^{0}$ is his **counterfactual**
- As a result, our data actually looks like the following:

| $i$      | $t$ | $Y$   | $Y^{0}$   | $Y^{1}$  | $\delta$ |
| -------- | --- | ----- | --------- | -------- | -------- |
| School 1 | $0$ | $800$ | $800$     | **null** | **null** | 
| School 2 | $0$ | $900$ | $900$     | **null** | **null** | 
| School 3 | $1$ | $1150$ | **null** | $1150$   | **null** | 
| School 4 | $1$ | $1450$ | **null** | $1450$   | **null** | 

- Notice, in almost all cases we can't calculate $ATE$
- Instead, we must estimate $ATE$ by calculating $SDO$
- Specifically, $SDO$ would be the following:

$$
SDO = \frac{1150+1450}{2} - \frac{800+900}{2} = 1300 - 850 = 450
$$

- Notice, this indicates providing laptops to schools would increase SAT scores by 450 points on average
- In this case, making an assumption about causality based on $SDO$ would be a mistake
- Again, $SDO$ is an estimator, so this difference is due to selection bias

### Motivating Selection Bias in Causality
- Bias is what separates association from causation
- Selection bias could exist if the treatment group contains schools with more resources
    - For example, maybe the treatment group contains private schools
    - And, maybe the control group are underfunded
- Since bias exists, we can't draw any conclusions about causal effects using $SDO$, $ATU$, or $ATT$
- **If there wasn't any bias**, we could see the treatment group has much better SAT scores compared to the control group
- Specifically, we could see this by computing and comparing $ATU$ and $ATT$
- We can see $ATU$ and $ATT$ are the following:

$$
ATT = \frac{100+50}{2} = 75
$$

$$
ATU = \frac{50-30}{2} = 10
$$

- Notice, the $ATE$ is just a weighted average of $ATT$ and $ATU$

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/potential-outcomes.html#physical-randomization)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)