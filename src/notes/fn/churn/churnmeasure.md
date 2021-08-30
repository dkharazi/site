---
title: "Measuring Churn"
draft: false
weight: 3
katex: true
---

### Outlining Types of Churn Problems
1. Churn Measurement
    - This involves creating churn metrics and identifying churn
    - To do this, we use available data of events
2. Churn Analysis
    - This involves analyzing which customers are more likely to change
    - This step could include creating churn predictions
    - To do this, we use identified churns and behavioral traits
3. Segmentation
    - This involves organizing customers into segments
    - These segments are based on their:
        - Risk of churning
        - Behavioral traits
4. Intervention
    - This involves targeting segments to improve retention and understand how different types of interventions impact each segment
    - These interaction could include:
        - Product enhancements
        - Email campaigns
        - Promotional offerings
        - Pricing changes
        - Channel targeting

### Outlining Useful Metrics for Reducing Churn
1. Easily understood by the business
2. Associated with churn and retention
3. Segments customers so they can be targeted by interventions
4. Can be used cross-functionally (product, marketing, etc.)

### Measuring Churn by Active Users
- Typically, we can visually compare the average churn rate against a metric by particular cohorts of customers
- For example, we may want to compare the average churn rate (y-axis) against the average number of active users (x-axis)
- We'll split customers up in $10$ cohorts, where each cohort contains $10 \%$ of customers in terms of number of active customers

### Measuring Churn using Churn Rate
- Churn rate is defined as the following formula:

$$
\text{Churn Rate } = \frac{\text{number of churned customers}}{\text{number of total customers}}
$$

- Here, the number of total customers refers to the number of total customers in a given activation period
- The number of churned customers refers to the number of churned customers in that same activation period
- Alternatively, we can use retention rate, which is defined as:

$$
\text{Retention Rate } = 1 - \text{ Churn Rate}
$$

### Segmenting Customers when Computing Churn Rate
- Keep in mind, some customers may purchase more frequently than other customers
- For example, suppose we're interested in seeing if customers with a purchase in the last year have churned
    - Here, the activation period is $1$ year
    - Customers who purchase less frequently (e.g. once every year) may likely be picked up in an appropriate amount of time
    - However, some customers may purchase more frequently (e.g. once every month), and these customers (who are more likely high-value customers) won't be picked up until a year after their last purchase
- As a result, certain customers likely should be segmented by their purchasing frequency
- Note, even a year may incorrectly label certain customers as churned if they purchase so infrequently (e.g. once every two years)
    - However, we're assuming these customers are rare and low-value
    - So, accounting for these customers isn't a high priority
    - Note, this may not be a fair assumption if customers purchase in high bulk every two years
    - Since, these customers may be higher value than initially thought and proper targeting strategies may lead to these customers to purchase even more frequently

### Measuring Churn using Net Retention
- For subscription services, MRR refers to the monthly recurring revenue received from a customer at the end of each period
- For nonsubscriptions, MRR refers to the AOV associated with a customer
- The net retention rate (NRR) refers to the recurring revenue received at the end of each period from the subscribers who were present at the start
- NRR includes changes in revenue from buyers who are retained
- It is defined as the following:

$$
NRR = \frac{MRR_{\text{ retained account}}}{MRR_{\text{ start}}}
$$

- Usually, we may want to measure the differences in NRR when including an event
- For example, we may want to measure the difference in NRR before and after we raise the prices of a product

### Measuring Activity for Nonsubscriptions
- Typically, an active customer is a customer who has used a product within a pre-defined time window
- Usually, this time window is one or two months
- For example, suppose we're interested in determining active customers in May
    - And, we define our time window to be $1$ year
- Then, we could filter down on customers who've only purchased in the last year since May
- Note, any activity (e.g. a purchase) may be clustered

### References
- [Textbook for Fighting Churn with Data](https://fightchurnwithdata.com/)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Propensity Modeling of Customer Churn](https://www.kaggle.com/mittii/churn-predict-0-97777)
- [Course about Predicting Customer Churn](https://www.datacamp.com/courses/marketing-analytics-predicting-customer-churn-in-python)
- [Course about Customer Churn](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)