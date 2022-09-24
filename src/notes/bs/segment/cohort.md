---
title: "Cohort Analysis"
draft: false
weight: 1
katex: true
---

### Describing the Impact of Cohort Analysis
- Generally, segmentation should aim to reveal hidden properties about customers
    - Specifically, it should illustrate some aspect of causality, and not just provide a descriptive analysis of clustering results
- For example, summarizing any financial results of customers and segments is important
- However, determining a relationship between marketing actions and financial results is typically more actionable
- For example, quantifying how advertising influences customer loyalty and behavioral patterns is actionable
    - E.g. quantifying a customer's migration from one customer segment to another
    - E.g. linking customer demographics to increases in revenue

### Segmenting Customers by using Cohort Analysis
- Cohorts should be created for customers with different churn rates
- The following features are some of the most common features used for separating segments:
    - Shopping frequency
    - Engagement frequency
    - Seasonality
    - Purchases or engagement around promotional events
- As a result, each segment should have a different churn rate
    - Because, assigning a segment with an arbitrary or fixed churn rate (used across all segments) may either:
        - Inaccurately label certain customers as churned
        - Or may miss certain churned customers 
    - For example, suppose a segment contains customers consistently purchasing during a yearly promo
        - If we naively define a churn window of $1$ year, we may mistakenly treat this customer as churned
            - By having a better understanding of this customer, we can apply a more specialized targeting strategy for this segment of customers (e.g. increasing frequency promos)
    - However, if we naively increase the churn window to $2$ years for all customers, then we may mistakenly label certain customers as non-churned when they actually have churned
        - E.g. if a customer who frequently purchases every week stops purchasing all of a sudden, we wouldn't label this customer as churned for another year or so
        - This would be a big mistake, since this segment of customers would be most likely high value customers
- Then, we can assign different targeting strategies for each segment
- Each targeting strategy should achieve any of the following goals:
    1. Improving shopping (or engagement) frequency
    2. Improving size of orders
    3. Reducing churn rate

### References
- [Textbook for Fighting Churn with Data](https://fightchurnwithdata.com/)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Course about Customer Segmentation](https://www.datacamp.com/courses/customer-segmentation-in-python)
- [Course about Segmentation Analysis](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)