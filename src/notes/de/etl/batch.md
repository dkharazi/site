---
title: "Batch Processing"
draft: false
weight: 1
katex: true
---

### Defining Types of Data Processing
- The types of data processing are characterized by their latency:
	- `Batch processing:` Daily or longer
	- `Mini-Batch processing:` Hourly or longer
	- `Micro-Batch processing:` $15$ minutes intervals or more
	- `Real-Time processing:` Sub-second intervals
- They are also characterized by how data is loaded:
	- `Batch:` Loaded incrementally in an off-peak window
	- `Mini-Batch:` Loaded incrementally in intra-day loads
	- `Micro-Batch:` Loaded in intervals
	- `Real-Time:` Loaded in sub-second intervals
- They are also characterized by how data is captured:
	- `Batch:` Calling queries that use filtering
	- `Mini-Batch:` Calling queries that use filtering
	- `Mico-Batch:` Using a Change Data Capture (CDC)
	- `Real-Time:` Using a Change Data Capture (CDC)
- Capturing data from different sources is either performed:
	- Through queries that filter based on a timestamp or flag
	- Through a Change Data Capture mechanism that detects any changes as it is happening

### Summarizing the Types of Data Processing

| **Type**    | **Latency** | **Capture**  | **Initialization** | **Target Load** | **Source Load** |
| ----------- | ----------- | ------------ | ------------------ | --------------- | --------------- |
| Batch       | Daily       | Filter query | Pull               | High impact     | High impact     |
| Mini-Batch  | Hourly      | Filter query | Pull               | Low impact      | Queries at peak |
| Micro-Batch | Minutes     | CDC          | Push, then pull    | Low impact      | Some to none    |
| Real-Time   | Seconds     | CDC          | Push               | Low impact      | Some to none    |

### Describing Reasons for Real-Time Processing
- Consumer expectations for faster response times
- Ubiquity of cost effective resources
- Widespread adoption

### Lemonade Stand Analogy for Batch Processing
- John sells lemonade each day
- His brother queries John about his sales at the end of each day
- Then, John does the following:
	- Reviews the receipts for the day
	- Calculates the sales for the day
- Then, his brother records the daily sales in his notebook

### Lemonade Stand Analogy for Mini-Batch Processing
- John sells lemonade each day
- His brother queries John about his sales every hour
- Then, John does the following:
	- Reviews the receipts for that hour
	- Calculates the sales for that hour
- Then, his brother records the hourly sales in his notebook

### Lemonade Stand Analogy for Real-Time Processing
- John sells lemonade each day
- His brother agrees to work outside with John
	- His brother working outside represents a CDC approach
	- Now, his brother handles administrative duties
	- As a result, John is freed from the administrative burden
- John hands his brother a receipt after each sale
- Then, his brother does the following:
	- Calculates the sales after each sale
	- Records the sales after each sale

### References
- [Examples of Batch Processing](https://dbvisit.com/blog/real-time-vs-batch)
- [Best Practices for Real-Time Data Warehousing](http://www.oracle.com/us/products/middleware/data-integration/realtime-data-warehousing-bp-2167237.pdf)
- [Defining the Change Data Capture Mechanism](https://www.stitchdata.com/resources/change-data-capture/)
