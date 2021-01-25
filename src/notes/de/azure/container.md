---
title: "Azure Containers"
draft: false
weight: 3
katex: true
---

### Describing Virtual Machines in Azure
- Azure offers its own implementation of virtual machines
    - These virtual machines are hosted by Azure
    - This service is called an *Azure Data Science Virtual Machine*
- Azure Data Science Virtual Machines are virtual machines with pre-installed data science packages
    - It comes with Python and R
    - And Python and R specific packages
- We can build models using Python and R code in our local IDE on the virtual machine
- Azure Data Science Virtual Machines are used for:
    - Performing analysis with visualizations
    - Building ad-hoc models
    - Registering models
    - etc.

### Describing Data Science Images in Azure
- We can see our built images in the Azure Machine Learning service
- We can also see any running containers based on those images
- This image can consist of the following components:
    - A model represented as a pickle file
    - A scoring script
        - The scoring script refers to *score.py*
        - The scoring script is responsible for consuming the model
        - The scoring script only has two functions:
            - An *init* function, which loads the model
            - A *run* function, which does the inference (i.e. model.predict(data))
    - An environment file represented as a YAML file
        - The environment file declares the dependencies for:
            - The model
            - Scoring script
            - Application
    - For example, we could specify numpy or scikit-learn in our YAML file

### Details about Data Science Images
- Once a model has been trained and registered, an image will be built for deployment
- We then deploy our model by running a container (Azure container, Docker container, etc.) based on this image
- Specifically, we refer to these running containers as deployed web services, if the container is a AKS or FPGA container
- On the other hand, we refer to these running containers as an IoT module, if the container is a Docker container
- Then, we can use Python to access the deployed model in our container

### References
- [Azure Data Science Certification](https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist)
- [Defining MLOps with Python](https://github.com/Microsoft/MLOpsPython)
- [Describing Model Registrey and Deployment](https://github.com/Azure/MachineLearningNotebooks/blob/master/how-to-use-azureml/deployment/deploy-to-cloud/model-register-and-deploy.ipynb)
- [Describing Pipelines in Azure](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/azure-machine-learning?view=azure-devops&tabs=yaml)
- [Describing Azure HDInsight](https://www.youtube.com/watch?v=tXZMYB3ByKE&feature=emb_logo)
- [Comparing Azure HDInsight and Databricks](https://www.clearpeaks.com/cloud-analytics-on-azure-databricks-vs-hdinsight-vs-data-lake-analytics/)