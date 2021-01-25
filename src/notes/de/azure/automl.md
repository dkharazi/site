---
title: "Azure AutoML"
draft: false
weight: 6
katex: true
---

### Defining Azure Automated Machine Learning
- Azure offers a serviced called AutoML for automated machine learning
- AutoML automates hyperparameter tuning and model selection
- It achieves this by:
    1. AzureML runs all of our pickle models concurrently
    2. These results are compared
    3. The best model is recommended for the job based on the training scores

### Describing the Benefits of AutoML
- AutoML doesn't require models to be already deployed
    - They just can use AutoML in the model training process
- The AutoML HyperDrive service finds optimal hyperparameter values automatically
- Azure Databricks has its own AutoML capabilities
    - Specifically, it uses MLFlow
    - Thus, it doesn't really need AutoML from AzureML

### Steps for using AutoML in Azure
1. Select your experiment type
    - This could be classification, regression, or forecasting
2. Ingest the data
    - Data can be ingested from:
        - Our local computer
        - Cloud storage
    - A popular storage service is Azure Blob Storage
3. Configure the targets
    - The compute targets must be configured for running the experiment
    - This can be a local machine or a cloud resource:
        - Azure Machine Learning Computer
        - Azure HDInsight
        - A remote virtual machine
4. Configure the AutoML job
    - The parameters must be configured as AzureML iterates over different models and hyperparameter settings
    - We also identify which metrics AutoML should look at to determine the best model
5. Submit the training run

### References
- [Azure Data Science Certification](https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist)
- [Defining MLOps with Python](https://github.com/Microsoft/MLOpsPython)
- [Describing Model Registrey and Deployment](https://github.com/Azure/MachineLearningNotebooks/blob/master/how-to-use-azureml/deployment/deploy-to-cloud/model-register-and-deploy.ipynb)
- [Describing Pipelines in Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-machine-learning?view=azure-devops&tabs=yaml)
- [Describing Azure HDInsight](https://www.youtube.com/watch?v=tXZMYB3ByKE&feature=emb_logo)
- [Comparing Azure HDInsight and Databricks](https://www.clearpeaks.com/cloud-analytics-on-azure-databricks-vs-hdinsight-vs-data-lake-analytics/)