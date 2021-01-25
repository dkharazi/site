---
title: "Basics of Azure"
draft: false
weight: 1
katex: true
---

### General Principles of Cloud Computing
- Most cloud computing services typically revolve around one (or more) of the following:
    - Compute power
    - Storage
    - Networking
    - Analytics
- Compute power can refer to servers used for computation such as running web applications
- Storage typically refers to files or databases
- Networking refers to secure connections between the cloud provider and your company
- Analytics can refer to visualizing telemetry and performance data

### Describing the Component of Compute Power
- Compute power refers to the ability of a server to process some set of instructions
    - This could include processing a program
- CPUs and GPUs provide compute power
- Cloud services typically offer compute power in three different ways:
    - A virtual machine
    - A container
    - Serverless
- Virtual machines are more heavyweight, but are more isolated
    - Since, they try to emulate hardware
- Containers are more lightweight, but are less isolated
    - Since, they try to emulate the operating system
- Serverless computing refers to functions offered by cloud platforms
- VMs and containers are charged while they're running in most cloud models
    - This happens even if the applications on them are idle
- Serverless functions are only charged when they're executed
- Serverless functions are ideal for automated tasks
    - For example, email confirmations
    - However, we're limited to only using the functions offered by the API used in serverless computing

### Defining the Benefits of Cloud Computing
- Flexible pricing model
    - They typically follow a pay-as-you-go or consumption-based pricing model
    - No upfront infrastructure costs
    - No need to manage costly infrastructure
    - Ability to seamlessly scale up or out when needed
    - Ability to stop paying for unnecessary resources
- Scalable
    - Ability to scale vertically based on demand or workload
    - Ability to scale horizontally based on demand or workload
- Saves development time
    - We can focus on building and deploying applications
- Reliable
    - We want to ensure fault tolerance
    - Data backups are available
    - Distaster recovery is ensured
- Secure
    - Ensures physical security
    - Ensures digital security

### Defining Azure Expenditures
- Roughly, there are two types of expenses:
    - Operational expenditures
    - Capital expenditures
- Capital expenditure (or *CapEx*) refers to spending related to acquiring and maintaining fixed assets
- Operating expenditure (or *OpEx*) refers to spending related ot activities not directly associated with the production of goods or services
- The following are examples of capital expenditures:
    - Computer equipment
    - Buildings
    - Office equipment
    - Furniture
    - On-premises datacenter (servers, storage, etc.)
    - Owning software
- The following are examples of operational expenditures:
    - Payroll
    - Sales commissions
    - Employee benefits
    - Rent
    - Utilities
    - Leasing software

### References
- [Documentation for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [Principles of Cloud Computing in Azure](https://docs.microsoft.com/en-us/learn/modules/principles-cloud-computing/2-what-is-cloud-computing)