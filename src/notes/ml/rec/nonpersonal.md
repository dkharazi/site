---
title: "Non-Personalized Methods"
draft: false
weight: 8
katex: true
---

### Motivating Non-Personalized Recommenders
- In general, non-personalized recommendations are usually generated for an average user
- Since the average profile is associated with such a small percentage of users, these non-personalized recommendations aren't very useful
- Non-personalized recommendations aren't usually accurate compared to personalized recommendations
- However, they can be useful when we don't have information about certain users (or used in hybrids)

### Defining Types of Non-Personalized Recommendations
- **Popular Items**: popular categories, brands or products
- **New Releases**: new products released
- **Similar Items**: similarly purchased products
- **Trending Items**: products trending upwards
    - Where, $s_{1}$ is the percentage change in sales for the previous day
    - And, $s_{2}$ is the percentage change in sales two days ago

$$
trend(i) = (1 \times s_{1}) + (0.5 \times s_{2})
$$

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)