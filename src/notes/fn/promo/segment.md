---
title: "Modeling Customer Segmentation"
draft: false
weight: 6
katex: true
---

### Defining Customer Segmentation
- Generally, there are two types of customer segmentation:
    - Behavioral segmentation
    - RFM analysis
- RFM analysis involves segmenting customers based on the observed financial results
- Behavioral segmentation involves identifying the traits causing these results
- Specifically, behavioral segmentation clusters customers based on 

### Describing RFM Analysis
- RFM analysis is based on three different metrics:
    - Recency
    - Frequency
    - Monetary
- The *recency* metric represents the number of time units having passed since the customer last purchased
    - This metric can be measured directly in:
        - Time units (e.g. months)
        - Or some score
    - Customers can be sorted by the most recent purchase date
    - Then, those customers in the most recent $20 \%$ are assigned a score of $5$
    - Maybe, the next $20 \%$ have a score of $4$
    - And so on, until the last $20 \%$ get a score of $1$
- The *frequency* metric represents the average number of purchases per time unit
    - Again, the metric can be measured directly in units or scores
- The *monetary* metric represents the dollar amount spent per time unit
    - It is typically measured using intervals or scores
- It is quite typical to use the same discrete scoring scale (e.g. $1-5$)
    - The same scale can be used for all $3$ metrics
- Recency, frequency, and monetary metrics are often correlated with the probability to respond and the LTV
- RFM approach is shallow
    - It only measures the final outcomes of the marketing processes and consumer actions
    - Not, the factors that impact consumer behavior
    - A more flexible solution may be behavioral clustering

### Describing Behavioral Segmentation
- Behavioral segmentation defines a small number of clusters with semantic meaning 
- The output of the segmentation process typically includes:
    - Segment profiles
    - Segment models
- A segment profile includes:
    - The distinctive properties and metrics of the segment
    - Some interpretation of what a typical cluster looks like
- These distinctive properties are identified using clustering algorithms
    - Specifically, by running clustering algorithms on a set of historical customer profiles
    - So, each segment corresponds to a group of existing customers
    - The segment profile is a set of statistical metrics for this group
- The following table consists of customer profiles:

| Persona              | Convenience Seekers | Casual Buyers | Bargain Hunters |
| -------------------- | ------------------- | ------------- | --------------- |
| % of Market          | 20                  | 50            | 30              |
| % of Revenue         | 40                  | 40            | 20              |
| Share of Clothing    | 40                  | 60            | 60              |
| Share of Electronics | 50                  | 20            | 10              |
| Share of Toys        | 10                  | 20            | 30              |
| Redemption Rate      | 0.02                | 0.05          | 0.08            |

- Note, the *convenience seekers*, *casual buyers*, and *bargain hunters* columns were all learned through clustering algorithms
- Meaning, Segment $1$ represents convenience seekers
- Segment $2$ represents casual buyers
- Segment $3$ represents bargain hunters

### Using Customer Segmentation in Targeting Systems
- Behavioral segmentation can be used for creating new behavioral features about customers
- Often, these customer segments can be used as predictors in:
    - A look-alike model
    - Other targeting models
- These segments carry an important signal about consumer behavior
- As a result, they can have substantial predictive power for propensity modeling
- However, propensity models created for an entire population of customers can have limited accuracy
- This is because propensities can be determined by different factors
- For example, customers in one segment can churn because of low product quality
    - But, customers in another segment churn because of high prices
- As a result, we should usually have an individual model for different:
    - Business objectives
    - Product categories
    - Customer segments

### References
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)