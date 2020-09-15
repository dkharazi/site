---
title: "Data Warehouse"
draft: false
weight: 3
katex: true
---

### Describing a Data Warehouse
- A data lake is a system of transformed data
- Data lakes and data warehouses are conceptual forms of storage
- Whereas, databases and file systems are implementations of these conceptual models
- For example, we can implement a data warehouse with:
	- A file system
	- A database

### Common Examples of Data in Data Warehouses
- Sales data
	- This could be used by finance and marketing teams
- Expense data
	- This could be used by finance and reporting teams
- Transactional data
	- This could be used by reporting and pricing teams

### Defining a Data Warehouse
- Typically, a data warehouse stores data from a data lake
- Specifically, the following happens:
	- Raw data is located in the data lake
	- This raw data is transformed
	- This transformed data is stored in the data warehouse
- Once data is added to a data warehouse, it is typically used in a few hours or days
- Storing data in a data warehouse is somewhat expensive
- Very many business users will access a data warehouse
- Data warehouses typically:
	- Grow slowly
	- Are somewhat large
	- Contains similar types of data

### Differentiating between Data Lakes and Warehouses
1. They assist different data types
	- Typically, a **data warehouse** consists of traditional data:
		- Quantitative metrics
		- Data from transactional systems
	- Typically, a **data lake** consists of non-traditional data:
		- Web server logs
		- Social network activity
		- Text
		- Images
2. They support different users
	- Typically, a **data warehouse** serves users needing small data:
		- Data science teams
		- Reporting teams
		- Operational users
		- Other business users
	- Typically, a **data lake** serves users needing large data:
		- Some data science teams
		- IT users
	- And, a **data lake** serves users needing to transform and load data into a data warehouse later:
		- Data engineering teams
		- Other IT users
3. They have different hardware capabilities
	- Typically, the **data warehouse** hardware is cheaper:
		- This data is taken and summarized from the data lake
		- Implying, this data is more specific and smaller
		- This data is also not the original source
		- Thus, there is a lesser need for expensive hardware
	- Typically, the **data lake** hardware is expensive:
		- This holds the original source of any data
		- Implying, there is more importance to not lose this data
		- This data is also more general and larger
		- Thus, there is a greater need for expensive hardware
4. They have different abilities to adapt to change
	- Typically, a **data warehouse** can adapt to change well
		- The data transformation and loading process is adaptable and complex
		- Unforunately, this requires plenty of time and resources to prepare for and execute such development
	- Typically, a **data lake** can't adapt to change well

### References
- [Defining a Data Warehouse](https://www.holistics.io/blog/data-lake-vs-data-warehouse-vs-data-mart/)
