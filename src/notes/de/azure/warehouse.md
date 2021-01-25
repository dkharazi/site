---
title: "Data Warehousing in Azure"
draft: false
weight: 7
katex: true
---

### Describing Azure Data Warehousing Services
- In Azure, the following services are used for creating and managing data warehouses:
    - Azure SQL Data Warehouse
    - Azure SQL Database
- In Azure, Azure Data Factory is a tool used for scheduling and orchestrating data transformations
    - For example, moving data between a SQL Data Warehouse and a SQL Database
- Azure Data Studio is a SQL editor used for connecting and querying Azure SQL Data Warehouse and Azure SQL Database
- Polybase is a tool used for moving data to and from:
    - Hadoop
    - Azure Blob Storage
    - Azure Data Lake
    - Other unstructured non-relational tables
- Azure Databricks is a tool used for processing data from Azure Data Warehouse using Spark functions

### Comparing Azure SQL DW and Azure SQL DB
- Azure SQL Database is optimized for the following:
    - Performing CRUD operations for some running web application
    - Optimized for OLTP operations, meaning many small requests to the database
    - In other words, optimized for transactional usage
- Azure SQL Data Warehouse is optimized for the following:
    - Performing a few complex queries on a large amount of historical data
    - Optimized for OLAP operation, meaning few large requests to the database
    - In other words, optimized for analytical usage

### References
- [Documentation for Azure SQL Data Warehouse](https://docs.microsoft.com/en-us/azure/sql-data-warehouse/design-elt-data-loading)
- [Documentation for Polybase](https://docs.microsoft.com/en-us/sql/relational-databases/polybase/polybase-guide?view=sql-server-ver15)
- [Article Describing SQL Server](https://cloudblogs.microsoft.com/sqlserver/2014/07/30/transitioning-from-smp-to-mpp-the-why-and-the-how/)
- [Describing Data Warhousing and Parallel Processing](https://www.flydata.com/blog/introduction-to-massively-parallel-processing/)
- [Defining the Redshift Architecture](https://hevodata.com/blog/redshift-architecture/)
- [Article about Hadoop and Data Warehousing](https://0x0fff.com/hadoop-vs-mpp/)
- [Comparing OLTP and OLAP](https://stackoverflow.com/questions/21900185/what-are-oltp-and-olap-what-is-the-difference-between-them)