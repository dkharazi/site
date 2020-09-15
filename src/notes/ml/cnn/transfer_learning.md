---
title: "Transfer Learning"
draft: false
weight: 9
katex: true
---

### Motivating Transfer Learning
- Suppose someone has already trained a network that is relevant to our problem at hand
- We may be interested in using the network if:
	- The network was trained on very large dataset
	- The network provides a very good accuracy
- By using a popular open-source implementation, we could avoid the following costs:
	- **Expenses**
		- The training process can require the use of many GPUs
	- **Tuning time**
		- We need to test many sets of hyperparameters that produces the best accuracy
		- This process can take months
	- **Training time**
		- We need to compute many weights and biases during forward and backward propagation
		- This process can take hours (or days)
- This process of using an open-source implementation of a deep network is called *transfer learning*

### Describing Transfer Learning
- Transfer learning refers to the reuse of a pre-trained model
- Therefore, downloading an open-source implementation will give us its parameters and architecture
- From here, we can do the following:
	- *Unfreeze* layers to be trained on
	- Add or remove layers from the network
	- Replace layers with our own layers
- There are three general approaches to changing layers:
	1. If we don't have a lot of input data, then we typically freeze our output layer (i.e. softmax) and make adjustments accordingly
	2. If we have a decent amount of input data, then we can freeze certain layers and train a few others (or remove layers)
	3. If we have a lot of input data, then we train the entire network while initializing the weights and biases to the ones from our transfer learning model
- We should typically prefer to use tranfer learning networks without making many changes
- Unless, we have a very large amount of input data and a large computational budget

---

### tldr
- We may be interested in using the network if:
	- The network was trained on very large dataset
	- The network provides a very good accuracy
- By using a popular open-source implementation, we could avoid the following costs:
	- Expenses
	- Tuning time
	- Training time
- This process of using an open-source implementation of a deep network is called *transfer learning*
- We should typically prefer to use tranfer learning networks without making many changes
- Unless, we have a very large amount of input data and a large computational budget

---

### References
- [Transfer Learning in Practice](https://www.youtube.com/watch?v=FQM13HkEfBk&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF&index=20)
- [CS231n Transfer Learning](https://cs231n.github.io/transfer-learning/)
- [Description of Transfer Learning](https://builtin.com/data-science/transfer-learning)
