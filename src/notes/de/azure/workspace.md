---
title: "Azure Workspaces"
draft: false
weight: 4
katex: true
---

### Defining Workspaces in Azure
- A workspace serves as a hub for building and deploying models
- We can create workspaces in the Azure Machine Learning service
- We can access workspaces using Python in an IDE
- A workspace will store the model's compute target and any experiment objects that are required for each model build
- Storing these experiment objects will allows us to track runs and retrieve logs, metrics, outputs, and scripts easily
- A workspace is defined by the following properties:
    - `Workspace name:` Our desired name for the workspace
    - `Subscription:` An Azure subscription to own this resouce (i.e. Visual Studio)
    - `Resource Group:` An Azure resource that has been allocated policies or permissions
    - `Location:` A location where the workspace will be created, so we typically want to select a location near where the workspace will be used

### Defining Pipelines in Azure
- A pipeline is a tool used to create and manage workflows during our model deployment process
- This could include the following:
    - Data manipulation
    - Model training and testing
    - Deployment phases
- We can build pipelines in the Azure Machine Learning service
- Here are a few reasons why we would want to build a pipeline:
    - Scheduling tasks and executions
        - Which frees up data scientists' time
    - Allocating compute targets
        - Which makes it easier to scale up or down
    - Reusing pipeline scripts
        - Which makes it faster to setup the process of retraining and scoring models
    - Recording and managing input, output, and data
        - Which makes it easier for improving models later

### References
- [Azure Data Science Certification](https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist)
- [Defining MLOps with Python](https://github.com/Microsoft/MLOpsPython)
- [Describing Model Registrey and Deployment](https://github.com/Azure/MachineLearningNotebooks/blob/master/how-to-use-azureml/deployment/deploy-to-cloud/model-register-and-deploy.ipynb)
- [Describing Pipelines in Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-machine-learning?view=azure-devops&tabs=yaml)
- [Describing Azure HDInsight](https://www.youtube.com/watch?v=tXZMYB3ByKE&feature=emb_logo)
- [Comparing Azure HDInsight and Databricks](https://www.clearpeaks.com/cloud-analytics-on-azure-databricks-vs-hdinsight-vs-data-lake-analytics/)