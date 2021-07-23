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
- When the rooster crows, the sun rises soon afterwards
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
    - In other words, they are usually estimated using predictions
- Potential outcomes are defined by $Y^{t}$
- Note, each $i^{th}$ observation has two separate potential outcomes
- And, $t$ refers to an actual, known control group or treatment group
- Whereas, $Y$ refers to an unknown, potential outcome for each group

### Defining Notation for Causal Data
- Causal data usually follows a specific type of notation
- $i$ represents a given observation
- $t$ represents the *actual* and *known* group that has observation $i$
    - $t=0$ when the $i^{th}$ customer is in the control group
    - $t=1$ when the $i^{th}$ customer is in the treatment group
- $Y$ represents the *unknown* variable being measured in the study
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
- As a result, we can't know individual treatement effects $\delta_{i}$
- Instead, we *estimate* the treatment of the overall group as an average

### References
- [Course on Measuring Causal Effects](https://www.youtube.com/watch?v=RGvI0uVMgtw&list=PLoazKTcS0Rzb6bb9L508cyJ1z-U9iWkA0&index=8)
- [Causal Inference Textbook](https://mixtape.scunning.com/introduction.html)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)