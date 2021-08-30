---
title: "Segmentation with Churn"
draft: false
weight: 6
katex: true
---

### Defining Metric Cohort Analysis
- There are many different methods for analyzing customer cohorts for churn
- Generally, we should create cohorts for customers who we think have different churn rates
- The most basic method involves considering people who often use a product as less likely to churn
- As an example, suppose active customers churn less often compared to inactive customers
- Then, a group of active customers should have a lower churn rate than a group of inactive customers
- As a result, we should create cohorts based on a customer's level of activity

### Illustrating Steps for Cohort Analysis
1. Read in data including the following columns:
    - Customer ID
    - Binary churn column
    - Date
    - Cohort column (e.g. number of clicks)
2. Segment cohorts by cohort column
    - Usually, we group customers into cohorts so each cohort contains 10% of the total sum of the cohort column
    - E.g. each customer is assigned to a cohort where each cohort contains 10% of the total number of clicks
3. Calculate averages of cohort column for each cohort (or segment)
4. Plot the churn rates versus the corresponding average of the cohort column for each cohort

### Illustrating Code for Cohort Analysis

```python
# Step 1: Read in data
df = pd.read_csv('data.csv')

# Step 2: Group customers into cohorts
groups = pd.qcut(df['cohort_column'], 10)

# Step 3: Calculate averages for plot
means = df.groupby(groups)['cohort_column'].mean()
churns = df.groupby(groups)['is_churn'].mean()

# Step 4: Plot churn rates vs averages
plt = pd.DataFrame({x: means.values, y: churns.values})
plt.plot.line()
```

### Summarizing Customer Behavior
- Typically, we'll need to impute missing values and aggregate non-zero values for each column
    - We may also want to remove columns with 90% missing values
- We can do this by calling the `DataFrame.describe` function in pandas
    - We can determine if columns are skewed by calling `DataFrame.skew`
- This will help in profiling and understandomg the distributions of each column
- In other words, we'll need to run quick profiles including the following aggregates for each column:
    - Counts
    - Null values
    - Non-zero values
    - Skewness of columns
    - Means
    - Standard deviation
    - Minimum values
    - Maximum values

### Scoring Metrics for Segmentation
- Typically, we'll want to standardize each column before clustering
- In particular, we'll use a standard scaling formula
    - To do this, we can call the `sklearn.preprocessing.StandardScaler` function
- However, some columns may be extremely skewed
- In order to reduce the skewness of a column, we can first transform those skewed columns
- Specifially, we'll take the logarithm of the column
- The following steps are done for skewed columns:
    1. Gather feature $X$
    2. Take the log of feature $X$
    $$
    X' = \log(X + 1)
    $$
    3. Standardize features by removing the mean and scaling to unit variance
    $$
    Z = \frac{X' - \mu_{x'}}{\sigma_{x'}}
    $$
- Taking the log will result in more evenly distributed standardized features
- We can skip step 2 for unskewed features

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

### Describing Clustering Methods
- Essentially, clustering methods group customers based on features that're correlated with each other
- Roughly, there are $3$ popular clustering methods:
    - Agglomerative
    - Density-based
    - Centroid-based
- Agglomerative clustering combines similar customers in a bottom-up manner
    - First, groups are formed starting from just two similar customers
    - More elements are added to form larger groups of similar items as the algorithm advances
- Density-based clustering combines similar customers that are close to each other
- Centroid-based clustering combines similar customers together who are closest to a centroid

### Standardizing Features with Ratios
- Typically, we'll want to transform features before clustering as ratios
- For example, we may not only want to include a *number of email opens* feature for clustering
    - This is because certain customers might be sent more emails than others
- In this case, we may want to only cluster on a feature repesenting a ratio of *number of email opens* relative to *number of email sends*
- Also, we may want to create a ratio of *number of email opens* relative to the *spend* for each customer

### References
- [Textbook for Fighting Churn with Data](https://fightchurnwithdata.com/)
- [Textbook about Algorithmic Marketing](https://algorithmicweb.files.wordpress.com/2018/07/algorithmic-marketing-ai-for-marketing-operations-r1-7g.pdf)
- [Analysis about Time-to-Churn using pysurvival](https://github.com/square/pysurvival/blob/master/notebooks/Employee%20retention%20-%20Knowing%20when%20your%20employees%20will%20quit.ipynb)
- [Course about Predicting Customer Churn](https://www.datacamp.com/courses/marketing-analytics-predicting-customer-churn-in-python)
- [Course about Customer Churn](https://www.datacamp.com/courses/machine-learning-for-marketing-in-python)