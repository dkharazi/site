---
title: "Azure SQL Data Warehouse"
draft: false
weight: 8
katex: true
---

### Setting up a SQL Data Warehouse
1. Create a resource in the Azure portal
2. Select SQL Data Warehouse in the Marketplace
3. Under the Basics tab, include the following information:
    - Subscription
    - Resource group
    - Data warehouse name
    - Server
4. Under the Select Performance Level field, select Gen2DW100c
5. Review + Create

### Adding a Client IP Address
1. After the SQL Data Warehouse instance is provisioned, open it by selecting Go To Resource
2. At the top of the Overview pane, select the Server Name link to go to the associated SQL Server instance
3. Select Firewalls and Virtual Networks
4. Add Client IP

### Initializing Connections in Azure Data Studio
1. Select your data warehouse from the resource group in the Azure portal
2. Copy the server name for the data warehouse
3. Add a new connection in Azure Data Studio
4. Enter the following information:
    - Connection type
    - Server (taken from the server name from step 2)
    - Authentication type (e.g. SQL Login)
    - User name
    - Password
    - Database
5. Connect

### Installing Azure CLI for macOS
1. Install Azure CLI

```bash
$ brew update && brew install azure-cli
```

2. Log in to Azure CLI in Azure CLI

```bash
$ az login
```

3. Run an bash script in Azure CLI

```bash
$ bash ./path_to_file/test.sh
```

### Adding a User to Azure SQL Data Warehouse
1. Create the following queries for the database within either Azure SQL Data Warehouse or Azure Data Studio
2. Create a new server login (so the user can access the server)

```sql
CREATE LOGIN example_user_login WITH PASSWORD = 'Str0ng_password';
```

3. Create a new database login (so the user can access the database)

```sql
CREATE USER example_user_name FOR LOGIN example_user_login;
```

4. Allow user to read data from Azure SQL Data Warehouse

```sql
EXEC sp_addrolemember 'db_datareader', 'example_user_name';
```

### Creating a Hash Table in Azure Data Studio

```sql
(
	[EmployeeID] int NOT NULL,
	[EmployeeName] varchar(30) NOT NULL,
	[DOB] date NOT NULL,
	[Address] varchar(50) NOT NULL,
	[BloodGroup] nvarchar(2) NOT NULL
)
WITH
(
	CLUSTERED COLUMNSTORE INDEX,
	DISTRIBUTION = HASH([EmployeeID])
);
```

### Creating a Round-Robin Distributed Table in Azure Data Studio

```sql
(
	[EmployeeID] int NOT NULL,
	[EmployeeName] varchar(30) NOT NULL,
	[DOB] date NOT NULL,
	[Address] varchar(50) NOT NULL,
	[BloodGroup] nvarchar(2) NOT NULL
)
WITH
(
	CLUSTERED COLUMNSTORE INDEX,
	DISTRIBUTION = ROUND_ROBIN
);
```

### Creating a Replicated Distributed Table in Azure Data Studio

```sql
(
	[EmployeeID] int NOT NULL,
	[EmployeeName] varchar(30) NOT NULL,
	[DOB] date NOT NULL,
	[Address] varchar(50) NOT NULL,
	[BloodGroup] nvarchar(2) NOT NULL
)
WITH
(
	CLUSTERED COLUMNSTORE INDEX,
	DISTRIBUTION = REPLICATE
);
```

### References
- [Documentation for Azure SQL Data Warehouse](https://docs.microsoft.com/en-us/azure/sql-data-warehouse/design-elt-data-loading)
- [Documentation for Polybase](https://docs.microsoft.com/en-us/sql/relational-databases/polybase/polybase-guide?view=sql-server-ver15)
- [Article Describing SQL Server](https://cloudblogs.microsoft.com/sqlserver/2014/07/30/transitioning-from-smp-to-mpp-the-why-and-the-how/)
- [Describing Data Warhousing and Parallel Processing](https://www.flydata.com/blog/introduction-to-massively-parallel-processing/)
- [Defining the Redshift Architecture](https://hevodata.com/blog/redshift-architecture/)
- [Article about Hadoop and Data Warehousing](https://0x0fff.com/hadoop-vs-mpp/)
- [Comparing OLTP and OLAP](https://stackoverflow.com/questions/21900185/what-are-oltp-and-olap-what-is-the-difference-between-them)