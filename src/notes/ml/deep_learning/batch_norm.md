---
title: "Batch Normalization"
draft: false
weight: 28
katex: true
---

### Motivating Batch Normalization
- Batch normalization is a technique for improving the speed, performance, and stability of a network
- Essentially, batch normalization involves re-scaling and re-centering input layers
- By doing this, we can achieve the following:
	- Search through hyperparameters more easily
	- Have a greater range of hyperparameters that work well
	- Have a more robust network in terms of the choice of hyperparameters

### Introducing Batch Normalization
- We've already suggested normalizing our input data
- Normalized input data can improve our training speed 
- This is because an elongated contour becomes more circular
- However, deeper networks still have an issue with elongated contours if the activations aren't normalized
- This is because activations $a^{[l]}$ are the input of our training of weights $w^{[l+1]}$ and biases $b^{[l+1]}$
- Batch norm solves this issue by normalizing the hidden layers
- Specifically, batch normalization re-scales any activation $a^{[l]}$ so the weights $w^{[l+1]}$ and biases $b^{[l+1]}$ can be trained faster

### Using Activations in Batch Normalization
- In practice, we typically normalize $z^{[l]}$ instead of $a^{[l]}$
- Some people use $a^{[l]}$ over $z^{[l]}$, since $a^{[l]}$ is the input of our parameter training
- However, more people normalize $z^{[l]}$ instead
- This is because normalizing $z^{[l]}$ versus normalizing $a^{[l]}$ will tend to produce a similar outcome
- Therefore, we'll stick to normalizing $z^{[l]}$

### Defining Batch Normalization
1. Receive some intermediate values $z^{[l]}$
2. Calculate the mean of the vector $z^{[l]}$:

$$
\mu = \frac{1}{m} \sum_{i=1}^{m} z_{i}
$$

3. Calculate the variance of the vector $z^{[l]}$:

$$
\sigma^{2} = \frac{1}{m} \sum_{i=1}^{m} (z_{i} - \mu)^{2}
$$

4. Normalize the vector $z^{[l]}$:

$$
z_{i}^{norm} = \frac{z_{i} - \mu}{\sqrt{\sigma^{2} - \epsilon}}
$$

5. Ensure $z^{[l]}$ doesn't always have $\mu=0$ and $\sigma^{2}=1$:

$$
\tilde{z_{i}} = \beta + \gamma z_{i}^{norm}
$$

### Understanding Batch Normalization
- In a previous chapter, we've seen a similar type of normalization process applied to our input layer already
- Essentially, batch normalization takes that similar normalization process and not only applies it to our input layer, but our hidden unit values as well
- The additional step (step $5$) of batch normalization represents the biggest difference between the two forms of normalization
- Specifically, we want to ensure that $z^{[l]}$ doesn't always have $\mu=0$ and $\sigma^{2}=1$
- This is because most activation functions depend on having a wider range of values that aren't centered around $0$ with a variance of $1$
- In other words, this would defeat the purpose of using most activation functions
- For example, we wouldn't want the input values of a sigmoid activation function to have these properties
- This is because the sigmoid function outputs linear activations when the input values are close to $0$
- Since the output becomes linear, the output would be considered uninsightful
- In summary, this step in batch normalization ensures that our hidden unit values have a standardized mean and variance, where the mean and variance are controlled by two explicit parameters $\gamma$ and $\beta$

### Describing the Parameters and Hyperparameters
- Batch normalization uses a hyperparameter $\epsilon$ to ensure numerical stability during division
- Batch normalization uses the parameter $\beta$ as an additive term for scaling $z^{[l]}$
- Batch normalization uses the parameter $\gamma$ as a scaling factor of $z^{[l]}$
- The $\beta$ and $\gamma$ parameters are included so we can re-scale $z_{i}^{norm}$ to be whatever value we want
- As a reminder, the $\beta$ and $\gamma$ are parameters, not hyperparameters
- In our optimization algorithm (e.g. Adam), we would update these parameters just like we'd update the weights $w$ and biases $b$ parameters
- Note, that we use $\tilde{z_{i}}^{[l]}$ instead of $z_{i}^{[l]}$ going forward in our optimization algorithm

### Replacing Bias $b$ with Beta $\beta$
- Recall that $z^{[l]}$ is defined as the following:

$$
z^{[l]} = w^{[l]}a^{[l-1]} + b^{[l]}
$$

- Recall that $\tilde{z}^{[l]}$ is defined as the following:

$$
\tilde{z_{i}}^{[l]} = \beta^{[l]} + \gamma z_{i}^{norm[l]}
$$

- Therefore, the bias term $b^{[l]}$ can be considered a constant when using batch normalization
- Then, the notion of the bias term $b^{[l]}$ can be indluded in $\beta$
- Meaning, our formulas essentially become:

$$
z^{[l]} = w^{[l]}a^{[l-1]}
$$

$$
\tilde{z_{i}}^{[l]} = \beta^{[l]} + \gamma z_{i}^{norm[l]}
$$

- And, we only need to train our model for the following parameters:

$$
w^{[l]}, \beta^{[l]}, \gamma
$$

- In other words, we train a model while updating only two parameters $w^{[l]}$ and $b^{[l]}$ without using batch normalization
- Using batch normalization, we would train a model while updating only one additional parameter $\gamma^{[l]}$

### Applying Batch Normalization
- The following is a general iteration of a single layer using batch normalization:

$$
a^{[l]} \space \overbrace{\to}^{w^{[l]}, b^{[l]}} \space z^{[l]} \space \underbrace{\to}_{\beta^{[l]}, \gamma^{[l]}} \space \tilde{z}^{[l]} \space \to \space a^{[l+1]}
$$

- The following is an example of a network with one hidden layer using batch normalization:

$$
x \space \overbrace{\to}^{w^{[1]}, b^{[1]}} \space z^{[1]} \space \overbrace{\to}^{\beta^{[1]}, \gamma^{[1]}} \space \tilde{z}^{[1]} \space \to \space a^{[2]} \space \overbrace{\to}^{w^{[2]}, b^{[2]}} \space z^{[2]} \space \overbrace{\to}^{\beta^{[2]}, \gamma^{[2]}} \space \tilde{z}^{[2]} \space \to \space \hat{y}
$$

- In this example, we need to train the following parameters using an optimization algorithm:

$$
w^{[1]}, b^{[1]}, \beta^{[1]}, \gamma^{[1]}, w^{[2]}, b^{[2]}, \beta^{[2]}, \gamma^{[2]}
$$

### Applying Batch Normalization with Mini-Batches
- When applying batch normalization to mini-batches, we apply a very similar approach as the one described above:

$$
a^{[l] \lbrace t \rbrace } \space \overbrace{\to}^{w^{[l] \lbrace t \rbrace}, b^{[l] \lbrace t \rbrace}} \space z^{[l] \lbrace t \rbrace} \space \overbrace{\to}^{\beta^{[l] \lbrace t \rbrace}, \gamma^{[l] \lbrace t \rbrace}} \space \tilde{z}^{[l] \lbrace t \rbrace} \space \to \space a^{[l+1] \lbrace t \rbrace}
$$

$$
a^{[l] \lbrace t+1 \rbrace } \space \overbrace{\to}^{w^{[l] \lbrace t+1 \rbrace}, b^{[l] \lbrace t+1 \rbrace}} \space z^{[l] \lbrace t+1 \rbrace} \space \overbrace{\to}^{\beta^{[l] \lbrace t+1 \rbrace}, \gamma^{[l] \lbrace t+1 \rbrace}} \space \tilde{z}^{[l] \lbrace t+1 \rbrace} \space \to \space a^{[l+1] \lbrace t+1 \rbrace}
$$

- The following is an example of a network with one hidden layer and two mini-batches using batch normalization:

$$
x^{\lbrace 1 \rbrace} \space \overbrace{\to}^{w^{[1]}, b^{[1]}} \space z^{[1]} \space \overbrace{\to}^{\beta^{[1]}, \gamma^{[1]}} \space \tilde{z}^{[1]} \space \to \space a^{[2]} \space \overbrace{\to}^{w^{[2]}, b^{[2]}} \space z^{[2]} \space \overbrace{\to}^{\beta^{[2]}, \gamma^{[2]}} \space \tilde{z}^{[2]} \space \to \space \hat{y}
$$

$$
x^{\lbrace 2 \rbrace} \space \overbrace{\to}^{w^{[1]}, b^{[1]}} \space z^{[1]} \space \overbrace{\to}^{\beta^{[1]}, \gamma^{[1]}} \space \tilde{z}^{[1]} \space \to \space a^{[2]} \space \overbrace{\to}^{w^{[2]}, b^{[2]}} \space z^{[2]} \space \overbrace{\to}^{\beta^{[2]}, \gamma^{[2]}} \space \tilde{z}^{[2]} \space \to \space \hat{y}
$$

### Training a Model with Batch Normalization
1. Select a $t^{th}$ mini-batch
2. Use forward propagation to compute $\hat{y}$
3. During forward propagation, use batch normalization on each $l^{th}$ hidden layer to replace $z^{[l]}$ with $\tilde{z}^{[l]}$
4. Compute the loss $\mathcal{L}(y, \hat{y})$ from $\hat{y}$
5. Compute the cost $J(w,\beta,\gamma)$ from the loss $\mathcal{L}(y, \hat{y})$
6. Use backward propagation to compute $dw^{[l]}$, $d\beta^{[l]}$, and $d\gamma^{[l]}$
7. Use an optimization algorithm (e.g. gradient descent, adam, rmsprop, etc.) to update the following parameters:

$$
w^{[l]} = w^{[l]} - \alpha dw^{[l]}
$$

$$
\beta^{[l]} = \beta^{[l]} - \alpha d\beta^{[l]}
$$

$$
\gamma^{[l]} = \gamma^{[l]} - \alpha d\gamma^{[l]}
$$

### Why Batch Norm Increases Training Performance
1. Roughly, batch normalization scales each of our activations
	- Recall that normalizing inputs speeds up training by transforming any elongated contours into circular contours
	- We did this by normalizing our inputs such that $\mu=0$ and $\sigma^{2}=1$
	- Batch normalization is trying to do the same thing, but in a slighly different way
	- Specifically, batch normalization also speeds up training by ensuring contours are no longer elongated
	- However, batch normalization does this by scaling *activations without strictly* enforcing $\mu=0$ and $\sigma^{2}=1$
	- In the end, batch normalization ensures that the inner layer, hidden layers, and output layer all become normalized
2. Weights in later layers become more robust to changes in earlier layers in the network
	- Normalizing the activations leads to those activations having a smaller range of values
	- This will make training faster for later layers
	- This is because the activations of the earlier layers are not shifted around as much, due to these activations having a smaller range of values
	- Meaning, activations become more stable
	- As a result, later layers are able to rely on more stable activation inputs
	- This also means parameter updates have less of an impact on the the distribution of activations
	- This also leads to activations becoming more stable
	- Note, activations having a smaller range of values indicates that changes in activations have a larger effect than before
3. The optimization landscape becomes significantly smoother
	- We've already seen how normalizing inputs lead to a smoother contour
	- Therefore, normalizing activations will only lead to an even smoother contour
	- This causes the training speed to improve

### Motivating Batch Normalization at Test Time
- Typically, we only want to predict only one observation
- In this case, dealing with $\mu$ and $\sigma^{2}$ in batch normalization becomes difficult
- We don't just want to set $\mu$ and $\sigma^{2}$ to be equal to the mean and variance of that single observation
- Therefore, we track $\mu^{[l]}$ and $\sigma^{2[l]}$ in training and perform an exponentially weighted average on the vector  of means and variance for each layer and mini-batch during training

### Defining Batch Normalization at Test Time
1. Track each layer's $\mu^{[l]}$ and $\sigma^{2[l]}$ during training:

$$
minibatch_{train}^{\lbrace 1 \rbrace} \to \mu_{train}^{\lbrace 1 \rbrace [l]} \text{ and } \sigma_{train}^{2 \lbrace 1 \rbrace [l]} \text{ for each l}
$$

$$
minibatch_{train}^{\lbrace 2 \rbrace} \to \mu_{train}^{\lbrace 2 \rbrace [l]} \text{ and } \sigma_{train}^{2 \lbrace 2 \rbrace [l]} \text{ for each l}
$$

$$
minibatch_{train}^{\lbrace 3 \rbrace} \to \mu_{train}^{\lbrace 3 \rbrace [l]} \text{ and } \sigma_{train}^{2 \lbrace 3 \rbrace [l]} \text{ for each l}
$$

$$
...
$$

2. Estimate $\mu^{[l]}$ and $\sigma^{2[l]}$ using exponentially weighted averages:

$$
expavg(\mu_{train}^{\lbrace 1 \rbrace [l]}, \mu_{train}^{\lbrace 2 \rbrace [l]}, \mu_{train}^{\lbrace 3 \rbrace [l]}, ...) \to \mu_{test}^{[l]}
$$

$$
expavg(\sigma_{train}^{2 \lbrace 1 \rbrace [l]}, \sigma_{train}^{2 \lbrace 2 \rbrace [l]}, \sigma_{train}^{2 \lbrace 3 \rbrace [l]}, ...) \to \sigma_{test}^{2[l]}
$$

---

### tldr
- We know we can improve training speed by normalizing inputs
- Specifically, we do this by normalizing inputs such that $\mu=0$ and $\sigma^{2}=1$
- Now, we can further improve training speed by normalizing the inputs and activations (using batch normalization)
- Specifically, we use batch normalization to normalize inputs and activations such that $\mu^{[l]}$ and $\sigma^{2[l]}$ are fixed values for each layer, based on the parameters $\beta^{[l]}$ and $\gamma^{[l]}$
- In other words, $\mu^{[l]}$ doesn't need to equal $0$ and $\sigma^{2[l]}$ doesn't need to $1$ (but can be if desired)
- This provides enough flexibility to the parameters so that activations remain normalized, but the activation functions (e.g. sigmoid, relu, etc.) remain effective
- These two forms of normalization are similar, but batch normalization includes an additional step
- This step ensures that our hidden unit values have a standardized mean and variance, where the mean and variance are controlled by two explicit parameters $\gamma$ and $\beta$

---

### References
- [Batch Normalization](https://www.youtube.com/watch?v=tNIpEZLv_eg&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=27)
- [Batch Normalization in Application](https://www.youtube.com/watch?v=em6dfRxYkYU&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=28)
- [Intuition behind Batch Normalization](https://www.youtube.com/watch?v=nUUqwaxLnWs&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=29)
- [Batch Normalization at Test Time](https://www.youtube.com/watch?v=5qefnAek8OA&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=30)
