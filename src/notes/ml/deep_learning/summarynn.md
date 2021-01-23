---
title: "Summary for Training Neural Networks"
draft: false
weight: 30
katex: true
---

### Components of Feed Forward Networks
1. Forward Propagation
	- Matrix multiplication
2. Backward Propagation
	- Gradient Descent
	- Momentum
	- RMSProp
	- Adam
	- etc.

### Add-Ons to Improve Testing Accuracy (Overfitting)
- Regularization (happens during backward propagation)
- Getting more data (happens before training)

### Add-Ons to Improve Training & Testing Accuracy
- Getting more data (happens before training)
- Adding/removing layers (happens before training)
- Avoiding vanishing gradients (happens before training)
	- Change activation functions
	- Initialize weights using Xavier initialization

### Add-Ons to Improve Performance
- Normalizing inputs (happens before training)
- Normalizing activations in deeper networks (or batch normalization)
- Using mini-batch gradient descent (happens during backward propagation)
- Implementing learning rate decay (happens during backward propagation)
- Performing gradient descent with exponentially weighted averages (happens during backward propagation):
	- Momentum
	- RMSProp
	- Adam

---

### References
- [TensorFlow Walkthrough](https://www.youtube.com/watch?v=S9ElPZupUsE&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=34)
- [TensorFlow API Guide](https://www.tensorflow.org/tutorials)
- [TensorFlow Tutorials](https://www.tensorflow.org/tutorials)
