---
title: "Azure Model Deployment"
draft: false
weight: 5
katex: true
---

### Defining a Machine Learning Workflow
1. Deploy a model
    - We can use AzureML or Databricks to achieve this
2. Build a pipeline
    - Pipelines are used to automate model deploying in the future
    - We will typically want to automatically tune the model
    - We can build a pipeline to avoid repeating these steps:
        1. Preparing more data
        2. Validating the data
        3. Deploying the model manually
    - We would use the AzureML or Azure Devops to achieve this

### Example of Model Deployment in Azure
1. Create a workspace in the Azure Machine Learning service
2. Create a model using regular Python code in any IDE
    - This could include creating a model using sklearn, tensorflow, etc.
    - We would want to save this model using pickle
3. Initialize the workspace using the Python SDK in an IDE

```python
from azureml.core import Workspace
ws = Workspace.create(
	name='myworkspace',
	subscription_id='<azure-subscription-id>',
	resource_group='myresourcegroup',
	create_resource_group=True,
	location='eastus2'
	)
```

4. Register input data and output data using the Python SDK in an IDE
    - We want to record the data used to create this model in our workspace

```python
from azureml.core import Dataset
datastore = ws.get_default_datastore()
datastore.upload_files(
	files=['./features.csv', './labels.csv'],
	target_path='sklearn_regression/',
	overwrite=True
	)
input_dataset = Dataset.Tabular.from_delimited_files(path=[(datastore, 'sklearn_regression/features.csv')])
output_dataset = Dataset.Tabular.from_delimited_files(path=[(datastore, 'sklearn_regression/labels.csv')])
```

5. Register our model using the Python SDK in an IDE
    - We want to record model metadata in our workspace

```python
from azureml.core import Model
from azureml.core.resource_configuration import ResourceConfiguration
model = Model.register(
	workspace=ws,
	model_name='my-sklearn-model',
	model_path='./sklearn_regression_model.pkl',
	model_framework=Model.Framework.SCIKITLEARN,
	model_framework_version='0.19.1',
	sample_input_dataset=input_dataset,
	sample_output_dataset=output_dataset,
	resource_configuration=ResourceConfiguration(cpu=1, memory_in_gb=0.5),
	description='Ridge regression model to predict diabetes progression.',
	tags={'area': 'diabetes', 'type': 'regression'}
	)
```

6. Deploy our model using the Python SDK in an IDE
    - Our model is deployed as a containerized web app (or web service)
    - In other words, Azure deploys our model by building an image (from the model) and running containers based on that image
    - For a deployed web service, we can choose from the following container instances:
        - Azure Container Instance (ACI)
        - FPGA
        - Docker
    - If we wanted to run our web service locally (rather than running it on Azure ML service), then we would want to deploy our model to a local Docker container instead
    - If we wanted to run a more production-ready web service on Azure ML, then we want to deploy our model to the Azure Kubernetes service instead

```python
from azureml.core import Webservice
service = Model.deploy(ws, 'my-sklearn-service', [model])
```

7. Run the deployed web service using the Python SDK in an IDE

```python
import json
input_payload = json.dumps({
	'data': [[1, 2, 3, 4, 5, 4, 3, 2, 9, 187]],
	'method': 'predict'
	})
output = service.run(input_payload)
```

### Defining Runs and Experiments in Azure
- The *Run* class is in AzureML
    - It refers to Python code for a specific task
    - For example, training a model or tuning hyperparameters
- A run logs metrics and uploads the result to the Azure platform
    - It's a more natural way to track jobs in a workspace
- The *Experiment* class is a term that refers to a composition of a series of runs
    - For example, we could have one run for a logistic regression model
    - Another run could be for a kNN model
    - Together, these runs could make up an experiment
- We create runs and experiments to easily monitor and review a model throughout its training, testing, or tuning process
- We can observe details about runs or experiments in the AzureML
    - By going to the workspace associated with the runs or experiments

```python
from azureml.core import Experiment
#Create an experiment
experiment = Experiment(workspace = ws, name = "my-first-experiment")
#Create a run
run = experiment.start_logging()
run.log("trial",1)
run.complete()
```

### Other Model Deployment Options
- We can deploy an image already created from a model
- In this case, we would use the `deploy_from_image` method from the Webservice class
- We could also use the deploy method from the Webservice class
- We can deploy a model already registered in the workspace
- In this case, we could use the `deploy_from_model` method from the Webservice class
- We could also use the deploy method from the Model class
- This method will create an image

### References
- [Azure Data Science Certification](https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist)
- [Defining MLOps with Python](https://github.com/Microsoft/MLOpsPython)
- [Describing Model Registrey and Deployment](https://github.com/Azure/MachineLearningNotebooks/blob/master/how-to-use-azureml/deployment/deploy-to-cloud/model-register-and-deploy.ipynb)
- [Describing Pipelines in Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-machine-learning?view=azure-devops&tabs=yaml)
- [Describing Azure HDInsight](https://www.youtube.com/watch?v=tXZMYB3ByKE&feature=emb_logo)
- [Comparing Azure HDInsight and Databricks](https://www.clearpeaks.com/cloud-analytics-on-azure-databricks-vs-hdinsight-vs-data-lake-analytics/)