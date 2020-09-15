---
title: "Causal Inference"
draft: false
weight: 12
katex: true
---

### Describing Causal Inference
- Correlation is defined as the association (or dependence) between two variables (typically referring to a linear relationship)
- Causation is defined as the cause of one variable results in an effect in the other variable
- Correlation is not causation
- Not even statistical dependence is causation
- At best, both of these statements tell us that there's an association between two variable, but not necessarily causation

### Examples of Correlation but not Causation
- Confounding variables
	- This happens when a third variable causes our response and predictor variable
	- For example, ice cream sales and homicide rates are correlated, but the relationship is not causal (i.e. ice cream sales and homicides are most likely caused by weather)
- Reversed causality
	- This happens when our predictor variable actually causes our response variable
	- An example of this is saying my bad mood causes it to rain, rather than rain causes me to be in a bad mood
- Bidirectional causality
	- Causality is not necessarily one-way
	- An example of this is preserving grasslands causes there to be more elephants
	- Also, having more elephants causes better preservation of grasslands
		- This is because elephants feed the grass with manure and play a role in the ecosystem such that more elephants create more grass and vice versa
- Coincidental causality
	- This happens when our predictor variable and response variable aren't related at all, but correlate by chance
	- An example of this relates to alternating bald-hairy Russian leaders
	- Specifically, a bald state leader of Russia has succeeded a non-bald (i.e. hairy) leader, and vice versa, for nearly 200 years

### Testing Correlation and Causation
- Determining correlation between two variable involves simpler statistical testing, such as hypothesis testing
- Determining causation between two variables involves complicated statistical testing in a completely controlled environment using AB testing

### References
- [Probability, Statistics, and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Causality Wiki](https://en.wikipedia.org/wiki/Causality)
- [Correlation is not Causation](https://rationalwiki.org/wiki/Correlation_does_not_imply_causation)
- [Examples of Reverse Causation](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation#B_causes_A_(reverse_causation_or_reverse_causality))
- [Examples of Causality](https://simplicable.com/new/causality)
