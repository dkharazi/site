---
title: "Customer Lifetime Value"
draft: false
weight: 7
katex: true
---

### Defining Targeting and LTV Models
- Customer targeting typically involves three models:
    - Propensity model
    - Time-to-event model
    - Lifetime value model
- These models can be used individually or together
- A propensity model estimates the probability of a customer doing some event
- A time-to-event model estimates the number of days until a customer does some event
- A lifetime value model estimates the value of a customer
- The events in a propensity or time-to-event model include:
    - A candidate responding to an email campaign
    - A customer puchasing a specific product
    - A customer expanding to a new prorduct
    - A customer purchasing additional units of a prduct
    - A customer changing shopping habits
    - A customer churning
- All three of these models can help determine the impact of this event

### Illustrating CLV with Churn Predictions
- A great use-case for churn forecasting is within CLV estimations
- Again, CLV estimates predict how much a customer is worth to us over their entire lifetime
- This information is crucial for evaluating the ROI of:
    - Customer acquisition
    - Customer retention
    - Customer maximization
- At a high level, CLV can be defined as the following:
    - Where, $CAC$ refers to customer acquisition costs
    - And, $RR$ refers to recurring revenue (or purchases)
    - And, $COGS$ refers to cost of goods sold

$$
CLV = -CAC + \sum_{\text{lifetime}} RR - COGS
$$

- Typically, we can consider the $CAC$ to be fixed, so we may be more interested in learning a customer's *future lifetime value*:

$$
FLV = \sum_{\text{lifetime}} RR - COGS
$$

### Estimating Lifetime Value
- Estimating the expected future lifetime of a customer is a requirement for estimating the expected sum of a customer's RR
- Specifically, the expected future lifetime $L$ of a customer is solely dependent on their churn rate for a given period:

$$
l = \frac{1}{\text{churn}}
$$

- Next, we must estimate the expected revenue $r$ for the customer
- Specifically, this can be estimated as the average revenue for the customer in a given period:

$$
r = \sum_{i=1}^{n} RR_{i}
$$

- Then, the expected sum of a customer's RR becomes the following:

$$
\sum_{future} RR = r \times l
$$

- For example, we may define a churn period as a single month
    - Suppose a customer's churn rate is 12% per month
    - And, the expected lifetime is $l = \frac{1}{0.12} = 8.3$ months
    - If their expected revenue is $r = \$ 10$ per month, then the $\sum_{lifetime} RR = 10 \times 8.3$
    - In other words, the expected recurring revenue over the customer's lifetime is $\$ 83$

### Using Segmentation in CLV Estimation
- Classification and propensity models created for an entire customer population usually have limited accuracy
- Since, propensities can be determined by many different factors
- For example, a customer in one segment may churn due to low product quality
- Whereas, a different customer in another segment may churn due to high prices
- Thus, including segments will create more accurate and targeted classification (or propensity) models
- Consequently, the model repository can maintain specialized models for different combinations of:
    - Business objective
    - Brands
    - Product classification
    - Customer segments

### References
- [Textbook for Fighting Churn with Data](https://fightchurnwithdata.com/)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Course about Predicting Customer Lifetime Value](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)