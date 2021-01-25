---
title: "Azure Data Factory"
draft: false
weight: 9
katex: true
---

### Loading and Moving Internal Data using Azure Data Factory
1. Locate the SQL Data Warehouse instance in the Azure portal
2. Select Load Data under the Common Tasks tab
3. Select Azure Data Factory
4. Create a Data Factory
5. Specify the following details:
    - Data Factory name
    - Subscription
    - Select resource group
    - Select region
    - Select load data
6. Specify the following configurations:
    - Task name
    - Task description
    - Task cadence
    - Expiration time
7. Select the data source
8. Select the destination

### Loading and Moving External Data using Polybase
1. Create the following queries for the database within either Azure SQL Data Warehouse or Azure Data Studio
2. Create an external Hadoop data source

```sql
CREATE EXTERNAL DATA SOURCE LabAzureStorage
WITH
(
	TYPE = Hadoop,
	LOCATION = 'wasbs://labdata@<Name_Of_Storage_Account>.blob.core.windows.net/'
);
```

3. Define the external file format

```sql
CREATE EXTERNAL FILE FORMAT TextFileFormat
WITH
(
FORMAT_TYPE = DELIMITEDTEXT,
	FORMAT_OPTIONS (
		FIELD_TERMINATOR = ',',
		STRING_DELIMITER = '',
		DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss.fff',
		USE_TYPE_DEFAULT = FALSE
	)
);
```

### Integrating Data Factory with Databricks
1. Create an Azure storage account
2. Create a Data Factory instance
3. Create a data workflow pipeline
    - This involves copying data from our source by using a copy activity in Data Factory
    - A copy activity allows us to copy data from different on-premises and cloud services
4. Add a Databricks notebook to the pipeline
5. Analyze the data

### Defining Best Practices
- We should pause the SQL Data Warehouse instance when we don't need to run any queries if we want to save in compute costs
- Saving data in a format like Parquet is the recommended way to save data if we plan to run several queries against one SQL Data Warehouse Table, since each query can extract a large amount of data to Blob storage
- Linked services define the connection information needed for Data Factory to connect to external resources
- In Azure Databricks, a target cluster will start automatically if the cluster isn't already running by Data Factory
- We can connect our Spark cluster in Databricks to Azure Blob storage by mounting the cluster

### References
- [Documentation for Azure SQL Data Warehouse](https://docs.microsoft.com/en-us/azure/sql-data-warehouse/design-elt-data-loading)
- [Documentation for Polybase](https://docs.microsoft.com/en-us/sql/relational-databases/polybase/polybase-guide?view=sql-server-ver15)
- [Article Describing SQL Server](https://cloudblogs.microsoft.com/sqlserver/2014/07/30/transitioning-from-smp-to-mpp-the-why-and-the-how/)
- [Describing Data Warhousing and Parallel Processing](https://www.flydata.com/blog/introduction-to-massively-parallel-processing/)
- [Defining the Redshift Architecture](https://hevodata.com/blog/redshift-architecture/)
- [Article about Hadoop and Data Warehousing](https://0x0fff.com/hadoop-vs-mpp/)
- [Comparing OLTP and OLAP](https://stackoverflow.com/questions/21900185/what-are-oltp-and-olap-what-is-the-difference-between-them)