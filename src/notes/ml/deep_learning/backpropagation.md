---
title: "Backpropagation"
draft: false
weight: 10
katex: true
---

### Overview of Steps for Neural Networks
1. Obtain some response data $y$ and predictor data $x$
2. Initialize parameter values $\theta$
3. Propagate forwards to get predictions $\hat{y}$
4. Compute the cost function $J(\theta)$ to get the error
5. Propagate backwards to get the gradient $\frac{\partial J(\theta)}{\partial \theta}$
6. Use gradient descent to repeatedly update parameters $\theta$ until $J(\theta)$ is minimized
	- This refers to repeating steps 3-5

### Defining Notation
- The output of some activation function of the $j^{th}$ neuron in the $l^{th}$ layer is directly related to the output of the activation function in the $(l-1)^{th}$ layer
- We'll refer to the output of an activation function $f$ as:

$$ a^{l} = f(w^{l}a^{l-1} + b^{l}) $$

- In other words, the output of an activation function is based on the output of an activation function of its previous layer, the weights of the current layer, and the bias of the current layer
- We can also refer to the *weighted input* of a neuron in the $l^{th}$ layer as the following:

$$ z^{l} \equiv w^{l}a^{l-1} + b^{l} $$

- In other words, a $z^{l}$ term refers to the input going into our activation function of the $j^{th}$ neuron in the $l^{th}$ layer

### Describing Forward Propagation
- The goal of forward propagation is to calculate layer-by-layer neuron activations $a$ until we get to the output $\hat{y}$
- Specifically, forward propagation is a layer-level function that receives input $a^{l-1}$ and outputs $a^{l}$
- We can repeatedly forward propagate to get the output $\hat{y}$ and compare it with the real value $y$ to get the error
- In other words, we can determine how well our neural network is behaving by calculating the error
- That error is found by determining our prediction $\hat{y}$
- We determine our $\hat{y}$ using forward propagation

### Describing Backward Propagation
- The goal of backward propagation is to estimate parameters $w$ and $b$ by computing the partial derivatives $\frac{\partial J(w,b)}{\partial w}$ and $\frac{\partial J(w,b)}{\partial b}$ of a cost function $J(w,b)$
- Specifically, backward propagation is a layer-level function that receives input $\frac{\partial J(w,b)}{\partial a^{l}}$ and outputs $\frac{\partial J(w,b)}{\partial a^{l-1}}$, $\frac{\partial J(w,b)}{\partial W^{l}}$, and $\frac{\partial J(w,b)}{\partial b^{l}}$
- We can repeatedly backward propagate to find the partial derivative of the cost function $J(w,b)$ with respect to each weight and bias
- Then, we'll use gradient descent to update $w$ and $b$ by evaluating those partial derivatives from our backward propagation step
- In summary, we propagate forwards to see how well our neural netowrk is behaving and finding the error
- After we find out that our network has error, we propagate backwards and use a form of gradient descent to update new values of weights and biases
- Then, we will propagate forwards again to see how well those weights are performing, and then propagate backwards and use gradient descent again to update the weights
- This will go on until we reach some minima for error value

### Summarizing Steps of Neural Network
- The goal of forward propagation is to understand how changes in the weights and biases lead to change in the predictions 
- The goal of backpropagation is to understand how changes in the weights and biases lead to changes in the error (i.e. cost function)
- The goal of gradient descent is to minimize the error by updating our weights and biases

### Illustrating Forward and Backward Propagation

![backwardpropagation](/img/backpropagation.svg)

| Color                                                        | Representation                                      |
| ------------------------------------------------------------ | --------------------------------------------------- |
| ![#74b9ffff](https://placehold.it/15/74b9ffff/000000?text=+) | Function                                            |
| ![#fdefc4ff](https://placehold.it/15/fdefc4ff/000000?text=+) | Input of backward and forward propagation           |
| ![#55efc4ff](https://placehold.it/15/55efc4ff/000000?text=+) | Output of inner activation and chain rule functions |
| ![#ff7675ff](https://placehold.it/15/ff7675ff/000000?text=+) | Output of backward and forward propagation          |

- Where dashed lines indicate cached $z^{l}$ values
- Where $da^{i}$ represents the initialized partial derivative $\frac{\partial J(w,b)}{\partial a^{i}}$
- Since we're using logistic regression:

$$ da^{l} = \frac{\partial J(w,b)}{\partial a^{l}} = - \frac{y}{a} + \frac{1-y}{1-a} $$

- Where $da^{i}$ represents the following:

$$ da^{i} = \frac{\partial J(w,b)}{\partial a^{i}} = - \frac{y}{\hat{y}} + \frac{1 - y}{1 - \hat{y}} $$

- Where $da^{1}$ represents the following:

$$ da^{1} = \frac{\partial J(w,b)}{\partial a^{1}} = \frac{\partial J(w,b)}{\partial a^{i}} \frac{\partial a^{i}}{\partial z^{3}} \frac{\partial z^{3}}{\partial a^{2}} \frac{\partial a^{2}}{\partial z^{2}} \frac{\partial z^{2}}{\partial a^{1}} $$

- Although $da^{0}$ is not really used, $da^{0}$ represents the following:

$$ da^{0} = \frac{\partial J(w,b)}{\partial a^{0}} = \frac{\partial J(w,b)}{\partial a^{i}} \frac{\partial a^{i}}{\partial z^{3}} \frac{\partial z^{3}}{\partial a^{2}} \frac{\partial a^{2}}{\partial z^{2}} \frac{\partial z^{2}}{\partial a^{1}} \frac{\partial a^{1}}{\partial z^{1}} \frac{\partial z^{1}}{\partial a^{0}} $$

- Where $dw^{1}$ represents the following:

$$ dw^{1} = \frac{\partial J(w,b)}{\partial w^{1}} = \frac{\partial J(w,b)}{\partial a^{i}} \frac{\partial a^{i}}{\partial z^{3}} \frac{\partial z^{3}}{\partial a^{2}} \frac{\partial a^{2}}{\partial z^{2}} \frac{\partial z^{2}}{\partial a^{1}} \frac{\partial a^{1}}{\partial z^{1}} \frac{\partial z^{1}}{\partial w^{1}} $$

- Where $db^{1}$ represents the following:

$$ db^{1} = \frac{\partial J(w,b)}{\partial b^{1}} = \frac{\partial J(w,b)}{\partial a^{i}} \frac{\partial a^{i}}{\partial z^{3}} \frac{\partial z^{3}}{\partial a^{2}} \frac{\partial a^{2}}{\partial z^{2}} \frac{\partial z^{2}}{\partial a^{1}} \frac{\partial a^{1}}{\partial z^{1}} \frac{\partial z^{1}}{\partial b^{1}} $$

### Computing Components of Forward Propagation
- In forward propagation, our output is:

$$ a^{l} $$

- We cache $z^{l}$ and output the following:

$$ a^{l} $$

- These components look like the following:

$$ z^{l} = W^{l}a^{l-1} + b^{l} $$
$$ a^{l} = f(z^{l}) $$

### Computing Components of Backward Propagation
- In backward propagating, our input is:

$$ \frac{\partial J(w,b)}{\partial a^{l}} $$

- Our output is:

$$ \frac{\partial J(w,b)}{\partial a^{l-1}}, \frac{\partial J(w,b)}{\partial W^{l}}, \frac{\partial J(w,b)}{\partial b^{l}} $$

- These components look like the following:

$$ \frac{\partial J(w,b)}{\partial z^{l}} = \frac{\partial J(w,b)}{\partial a^{l}} \times \frac{\partial a^{l}}{\partial z^{l}} $$
$$ \frac{\partial J(w,b)}{\partial W^{l}} = \frac{\partial J(w,b)}{\partial z^{l}} \times a^{l-1} $$
$$ \frac{\partial J(w,b)}{\partial b^{l}} = \frac{\partial J(w,b)}{\partial z^{l}} $$
$$ \frac{\partial J(w,b)}{\partial a^{l-1}} = W^{l} \times \frac{\partial J(w,b)}{\partial z^{l}} $$

### Coding Backward Propagation

```python
# Binary classification with 2-layer
# neural network (single hidden layer)

sigmoid = lambda x: 1 / (1 + np.exp(-x))

def fprop(x, y, params):
  # Follows procedure given in notes
  W1, b1, W2, b2 = [params[key] for key
                    in ('W1', 'b1', 'W2', 'b2')]
  z1 = np.dot(W1, x) + b1
  a1 = sigmoid(z1)
  z2 = np.dot(W2, a1) + b2
  a2 = sigmoid(z2)
  loss = -(y * np.log(a2) + (1-y) * np.log(1-a2))
  ret = {
    'x': x, 'y': y, 'z1': z1, 'a1': a1, 
    'z2': z2, 'a2': a2, 'loss': loss
    }
  for key in params:
    ret[key] = params[key]
  return ret

def bprop(fprop_cache):
  # Follows procedure given in notes
  x, y, z1, a1, z2, a2, loss = [fprop_cache[key] for key
            in ('x', 'y', 'z1', 'a1', 'z2', 'a2', 'loss')]
  dz2 = (a2 - y)
  dW2 = np.dot(dz2, a1.T)
  db2 = dz2
  dz1 = np.dot(fprop_cache['W2'].T, dz2)
  dz1 = dz1 * sigmoid(z1) * (1-sigmoid(z1))
  dW1 = np.dot(dz1, x.T)
  db1 = dz1
  return {'b1': db1, 'W1': dW1, 'b2': db2, 'W2': dW2}

# Gradient checking

if __name__ == '__main__':
  # Initialize random parameters and inputs
  W1 = np.random.rand(2,2)
  b1 = np.random.rand(2, 1)
  W2 = np.random.rand(1, 2)
  b2 = np.random.rand(1, 1)
  params = {'W1': W1, 'b1': b1, 'W2': W2, 'b2': b2}
  x = np.random.rand(2, 1)
  y = np.random.randint(0, 2)  # Returns 0/1

  fprop_cache = fprop(x, y, params)
  bprop_cache = bprop(fprop_cache)

  # Numerical gradient checking
  # Note how slow this is!
  # Thus we want to use
  # the backpropagation algorithm instead.
  eps = 1e-6
  ng_cache = {}
  # For every single parameter (W, b)
  for key in params:
    param = params[key]
    # This will be our numerical gradient
    ng = np.zeros(param.shape)
    for j in range(ng.shape[0]):
      for k in xrange(ng.shape[1]):
        # For every element of parameter matrix,
        # compute gradient of loss wrt that 
        # element numerically using finite differences
        add_eps = np.copy(param)
        min_eps = np.copy(param)
        add_eps[j, k] += eps
        min_eps[j, k] -= eps
        add_params = copy(params)
        min_params = copy(params)
        add_params[key] = add_eps
        min_params[key] = min_eps
        fprop_new = fprop(x, y, add_params)['loss']
        fprop_min = fprop(x, y, min_params)['loss']
        ng[j, k] = (fprop_new - fprop_min) / (2 * eps)
    ng_cache[key] = ng

  # Compare numerical gradients to those
  # computed using backpropagation algorithm
  for key in params:
    print key
    # These should be the same
    print(bprop_cache[key])
    print(ng_cache[key])
```

---

### tldr
- Forward propagation is a layer-level function that receives input $a^{l-1}$ and outputs $a^{l}$
- Backward propagation is a layer-level function that receives input $\frac{\partial J(w,b)}{\partial a^{l}}$ and outputs $\frac{\partial J(w,b)}{\partial a^{l-1}}$, $\frac{\partial J(w,b)}{\partial W^{l}}$, and $\frac{\partial J(w,b)}{\partial b^{l}}$
- The goal of forward propagation is to understand how changes in the weights and biases lead to change in the predictions
- The goal of backpropagation is to understand how changes in the weights and biases lead to changes in the error (i.e. cost function)
- The goal of gradient descent is to minimize the error by updating our weights and biases based on those changes

---

### References
- [How Backpropagation Works](http://neuralnetworksanddeeplearning.com/chap2.html)
- [6.2 Gradient-Based Learning](http://www.deeplearningbook.org/contents/mlp.html#pf6)
- [Forward and Backward Propagation](https://www.youtube.com/watch?v=qzPQ8cEsVK8&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=41)
- [Example of Forward Propagation in a Deep Network](https://www.youtube.com/watch?v=a8i2eJin0lY)
- [Backpropagation Intuition](https://www.youtube.com/watch?v=yXcQ4B-YSjQ&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=34)
- [Backpropagation Calculus](https://www.youtube.com/watch?v=tIeHLnjs5U8&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=4)
- [What is Backpropagation](https://www.youtube.com/watch?v=Ilg3gGewQ5U&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=3)
- [Training with Backpropagation](https://www.jeremyjordan.me/neural-networks-training/)
