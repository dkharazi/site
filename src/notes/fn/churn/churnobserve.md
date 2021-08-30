---
title: "Observing Churn"
draft: false
weight: 5
katex: true
---

### Observing Customers before Churning
- Sometimes, it's helpful to observe a customer after they've churned
    - In this case, it's easier to acquire customers who've already purchased or engaged
    - But, it's easier to retain customers who are already purchasing or engaging
- However, it's most helpful to observe a customer *before* they've churned
- To do this, we can use behavioral features to measure their propensity to churn
- This may include any of the following features:
    - Logins
    - Clicks
    - Email opens
    - Likes
- Specifically, we can look at behavioral features of customers who've already churned
    - And, we can determine common trends amongst particular segments of customers who've churned
- This involves observing behavioral features in a window of time before customers churn
    - This window of time should be shorter for customers who purchase or engage frequently
    - However, this window of time should be longer for customers who purchase or engage infrequently

### Observing Renewals with Churns
- While gathering our customers for clustering, we'll want to include a mix of churned and retained customers
- By doing this, we can compare churned customers with retained customers to determine any difference
- Typically, we'll pick enough retentions so that the number of retained observations are in proportion to the true retention rate

### Identifying Active Periods for Non-Subscriptions
- Calculating active periods that accurately reflect periods when a customer interacted with a product is an important part of determining churn for nonsubscription services
- In this case, churn refers to a customer becoming inactive for more than some maximum allowed time
- Note, this time period is adjustable, but likely is around a month or a few months
- This window of time should be decided for segments of customers, such that once they go inactive they don’t come back
    - Or, it would be fair to consider it a fresh start if they do come back

### Choosing Observation Dates for Churn Indicators
- Choosing observation windows is important when investigating leading indicators of churn
- Churn leading indicators are behaviors that customers likely engage in before they've churned
    - These behaviors are usually the underlying cause of churn
    - Usually, lead times before churn may be a few weeks in advance of churn for a consumer product and one to three months for a business product
- Churn lagging indicators are behaviors that customers likely engage in after they've churned
    - These behaviors are usually the underlying cause of churn
- When determining a churn indicator, both churns and non-churns should be included in the sample
    - Roughly, reflecting the true proportion of actual churn and renewal rate
- When creating a churn indicator, we typically first identify active periods for each customer
    - Which, is when a customer has at least one event within a short time
    - Events are aggregated into weeks as a single indicator of whether a customer had any events in that particular week
    - Then, active periods are found from those active weeks

### References
- [Textbook for Fighting Churn with Data](https://fightchurnwithdata.com/)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Analysis about Time-to-Churn using pysurvival](https://github.com/square/pysurvival/blob/master/notebooks/Employee%20retention%20-%20Knowing%20when%20your%20employees%20will%20quit.ipynb)
- [Course about Predicting Customer Churn](https://www.datacamp.com/courses/marketing-analytics-predicting-customer-churn-in-python)
- [Course about Customer Churn](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)