---
title: "Kubernetes"
draft: false
weight: 3
katex: true
---

### Describing Kubernetes
- Kubernetes is used for:
	- Orchestrating containers
	- Managing containers
- It is based on abstracting machines, storage, and networks from their physical implementations
- It provides an interface to deploy containers to a cluster

### Describing Container Orchestration
- Container orchestration refers to container management
- This includes:
	- Automating deployment of containers running applications
	- Scaling up or down the number of containers running
	- Monitoring resources dedicated to a container
- For example, more containers may be required if:
	- More people run instances of an application
	- More memory, storage, or CPU a container is required
- Kubernetes allows us to lower costs by removing inactive containers

### Describing Nodes and Pods
- A node is a container, physical machine, or virtual machine
- For example, an EC2 instance is a node
- A pod is one or more containers logically grouped together
- One node can run more than one pod

### References
- [Documentation of Kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
- [Blog Post about Kubernetes and its Use Cases](http://www.developintelligence.com/blog/2017/02/kubernetes-actually-use/)
- [Interaction between Apache YARN and Kubernetes](https://stackoverflow.com/a/55438521/12777044)
- [Walthrough of Kubernetes](https://mapr.com/products/kubernetes/)
- [ELI5 of Kubernetes and Pods](https://www.reddit.com/r/explainlikeimfive/comments/8ur2z7/eli5_what_is_kubernetes_and_how_different_better/e1hsmg6/)
