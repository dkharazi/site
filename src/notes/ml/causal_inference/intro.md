---
title: "What is Causality?"
draft: false
weight: 1
katex: true
---

### Defining Causal Inference
- Causal inference involves estimating the impact of events on a given outcome of interest
- It involves determining the independent, actual effect of a phenomenon that is part of a larger system
- Causal inference attempts to observe the response of an effect variable when a cause of the effect variable is changed

### Correlation is not Causation
- When the rooster crows, the sun rises soonly afterwards
- We know the rooster didn’t cause the sun to rise
- If the rooster had been eaten by a cat, the sun still would have risen
- In other words, a rooster's crow is correlated with the sun rising
- But, a rooster's crow doesn't cause the sun to rise

### Comparing Prediction with Causation
- Making predictions requires strict boundaries, where the data used to train the model doesn't really change 
    - So, it can be useful for translating from english to portuguese
    - It can be useful for recognizing faces 
    - It can be useful for classifying sentiments
- Determining causality requires us to answer *what if* questions
    - For example, what if we change the price of our product?
    - What if I do a low fat diet, instead of a low sugar diet?
    - Or, how does revenue change if we make modifications to our customer line?

### Describing Potential Outcomes
- Theoretically, each observation has two *potential outcomes*
- In reality, each observation only has one *actual outcome*
- In other words, actual outcomes are realized outcomes
- Whereas, potential outcomes are hypothetical random variables
- Potential outcomes are defined by $Y^{t}$
- Note, each $i^{th}$ observation has two separate potential outcomes 

### Defining Notation for Causal Data
- Causal data usually follows a specific type of notation
- $i$ represents a given observation
- $t$ represents the group observation $i$ falls into
    - $t=0$ when the $i^{th}$ customer is in the control group
    - $t=1$ when the $i^{th}$ customer is in the treatment group
- $Y$ represents the variable being measured in the study
    - $Y^{0}$ represents $Y$ of only customers in the control group
    - $Y^{1}$ represents $Y$ of only customers in the treatment group
- $\delta$ represents the unit-specific treatment effect
    - This can be used to measure a causal effect

$$
Y_{i} = t_{i} Y_{i}^{1} + (1+t_{i})Y_{i}^{0}
$$

$$
\delta_{i} = Y_{i}^{1} - Y_{i}^{0}
$$

### Describing the Struggle with Causality
- The fundamental problem with causal inference is that we can never observe the same unit with *and* without treatment
    - In other words, we're wanting to compute $\delta_{i}$
    - But, we can only observe either $Y_{i}^{1}$ or $Y_{i}^{0}$
    - Thus, it's impossible to be *certain* abound causal effects 
- Due to this problem, we'll never know the individual treatment effect
    - Because, we only observe one of the potential outcomes
- As a result, we can't estimate the individual treatement effect
- Instead, we estimate the treatment of the overall group as an average
- Specifically, we calculate the average treatment effect:

- To draw conclusions about causality, we must verify there isn't any bias between the control and treatment groups
- To do this, we must check that the following assumption is satisfied:

$$
E[Y^{0} | T=0] = E[Y^{0} | T=1]
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

| $i$  | $t$ | $Y$   | $Y^{0}$  | $Y^{1}$  |
| ---- | --- | ----- | -------- | -------- |
| Jane | $0$ | $\$3$ | $\$3$    | **null** |
| Matt | $0$ | $\$5$ | $\$5$    | **null** |
| Tim  | $1$ | $\$2$ | **null** | $\$2$    |
| Sue  | $1$ | $\$4$ | **null** | $\$4$    |

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

| $i$  | $t$ | $Y$   | $Y^{0}$ | $Y^{1}$ |
| ---- | --- | ----- | ------- | ------- |
| Jane | $0$ | $\$3$ | $\$3$   | $\$10$  |
| Matt | $0$ | $\$5$ | $\$5$   | $\$12$  |
| Tim  | $1$ | $\$2$ | $\$6$   | $\$2$   |
| Sue  | $1$ | $\$4$ | $\$2$   | $\$4$   |

- Notice, the $ATE$ would be much different if we capture all of the information about each customer
- Specifically, it would be the following:

$$
ATE = \frac{10+12+2+4}{4} - \frac{3+5+6+2}{4} = 7 - 4 = 3
$$

- Notice, this says on average the treatment group would have a positive impact on sales, compared to the control group
- And, 

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/introduction.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)