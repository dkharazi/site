---
title: "Azure Machine Learning Services"
draft: false
weight: 2
katex: true
---

### Describing Azure Machine Learning Service
- AzureML is a cloud service offered by Azure and hosted by Azure
- AzureML is a cloud service used for building and deploying models
- We can build models using Python code in our local IDE
- We can write and execute Jupyter notebooks in our browser once signed into AzureML
- We can deploy models using Azure DevOps
- AzureML typically is used for model deployment

### Describing Azure Machine Learning Studio
- It is a cloud service offered by Azure and hosted by Azure
- It is a cloud service used for building and deploying models
- It can be used for building models within a GUI in our browser
- We can write and execute Jupyter notebooks in our browser
- We can deploy models using Azure DevOps
- AzureML Studio is used for GUI-based model deployment

### Describing Azure Databricks
- It is a cloud service offered by Databricks and hosted by Azure
- It is a cloud service used for building and deploying models
- We can build models using Python and R code in our local IDE
- We can write and execute Jupyter notebooks in our browser once signed into Azure Databricks
- We can deploy models using Azure MLFlow
- Azure Databricks is typically used for model analysis
    - Since they provide the compute resources related to data preprocessing or modeling 
    - Processsing is handled by Spark

### Describing Azure HDInsight
- It is a cloud service offered by Azure and hosted by Azure
- It is a cloud service used for setting up cloud-based Hadoop and Spark clusters for computation
- These Hadoop and Spark clusters are used for processing data via MapReduce or Spark jobs
- Azure HDInsight is not a data store
- However, we can use another Azure service for storing any data processed or collected from our clusters
    - Azure Data Lake
    - Azure Data Factory
    - etc.
- Of all Azure's services, HDInsight is the closest to an IaaS
    - Since, there is some amount of cluster management involved

### Describing Azure SQL Server ML Services
- It is a cloud service offered by Azure and hosted by Azure
- It is an add-on for SQL Server
- It is used for building models
- It allows us to execute Python and R code on your local SQL Server environment
- This eliminates the need to switch between the database and machine learning environments

### References
- [Azure Data Science Certification](https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist)
- [Defining MLOps with Python](https://github.com/Microsoft/MLOpsPython)
- [Describing Model Registrey and Deployment](https://github.com/Azure/MachineLearningNotebooks/blob/master/how-to-use-azureml/deployment/deploy-to-cloud/model-register-and-deploy.ipynb)
- [Describing Pipelines in Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-machine-learning?view=azure-devops&tabs=yaml)
- [Describing Azure HDInsight](https://www.youtube.com/watch?v=tXZMYB3ByKE&feature=emb_logo)
- [Comparing Azure HDInsight and Databricks](https://www.clearpeaks.com/cloud-analytics-on-azure-databricks-vs-hdinsight-vs-data-lake-analytics/)