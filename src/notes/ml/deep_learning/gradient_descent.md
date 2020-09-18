---
title: "Gradient-Based Learning"
draft: false
weight: 7
katex: true
---

### Motivating Gradient-Based Learning
- Up until now, we've built neural networks by specifying a pre-defined optimization procedure, cost function, and model family
- When dealing with convex functions, we can rely on a simple equation for finding parameter estimates
- This is because convex functions guarantee global convergance
- For example, we can rely on a simple equation for linear functions, since they are convex
- However, we want to also find parameter estimates for nonlinear functions as well
- The nonlinearity of a neural network causes most loss functions to become nonconvex
- This means we can't rely on those simple equations anymore
- Instead, neural networks are usually trained by using iterative, gradient-based optimizers that merely drive the cost function to a very low value

### Introducing Gradient Descent
- Most deep learning algorithms involve optimization
- Optimization refers to the task of either minimizing or maximizing some function $f(x)$ by altering $x$
- We usually phrase most optimization problems in terms of minimizing $f(x)$
	- Maximization may be accomplished via a minimization algorithm by minimizing $-f(x)$
- The function we want to minimize or maximize is called the *objective function* or *criterion*
- When we are minimizing it, we may also call it the *cost function*, *loss function*, or *error function*
- We often denote the value that minimizes or maximizes a function with a superscript $\ast$
- Specifically, we might say $x^{\ast} = \argmin f(x)$

### Using Derivatives with Gradient Descent
- As a reminder, a derivative is useful for minimizing a function because it tells us how to change $x$ in order to make a small improvement in $y$
- We can reduce $f(x)$ by moving $x$ in small steps with the opposite sign of the derivative
- This technique is called *gradient descent*
- When $f^{\prime}(x)=0$, then the derivative provides no information about which direction to move
- These points are known as *critical points* or *stationary points*
- For functions with multiple inputs, we must use *partial derivatives* instead of our usual *derivatives*
- A partial derivative measures how $f$ changes as only the variable $x_{i}$ changes at point $x$
- A *gradient* of $f$ is the vector containing all the partial derivatives
- Element $i$ of the gradient is the partial derivative of $f$ with respect to $x_{i}$

### Notation used in Gradient Descent
- A derivative of a function $f$ is denoted as $\frac{dy}{dx}$ or $f'$
- A partial derivative of a function $f$ is denoted as $\frac{\partial}{\partial x_{i}} f(x)$
- A gradient is denoted as $\triangledown_{x}f(x)$

### Local Minimums in Gradient Descent
- A *local minimum* is a point where $f(x)$ is lower than all of its neighboring points
- Meaning, it is no longer possible to decrease $f(x)$ by making infinitesimal steps
- A *local maximum* is a point where $f(x)$ is greater than all of its neighboring points
- A *saddle point* is a critical point that is neither a local minimum or maximum
- A point that obtains the absolute lowest value of $f(x)$ is a *global minimum*
- There can only be one global minimum, but there can be many local minimas
- In the context of deep learning, we optimize functions that may have many local minima that are not optimal and many saddle points surrounded by very flat regions
- Therefore, we usually settle for finding a value of $f$ that is very low but not necessarily minimal in any formal sense

### Defining Gradient Descent for Linear Regression
1. Determine our parameters:

$$
\theta_{0}, \theta_{1}
$$

2. Create a hypothesis:

$$
h_{\theta}(x) = \theta_{0} + \theta_{1}x
$$

3. Determine our cost function:

$$
J(\theta_{0}, \theta_{1}) = \frac{1}{2m} \sum_{i=1}^{m}(h_{\theta}(x)-y)^{2}
$$

4. Determine our goal:

$$
\argmin_{\theta_{0}, \theta_{1}} J(\theta_{0}, \theta_{1})
$$

5. Initialize parameters:

$$
\theta_{0}, \theta_{1} = 0
$$

6. Update parameters until our $J(\theta_{0}, \theta_{1})$ converges to a minumum:

$$
\theta = \theta - (\alpha \times \frac{\partial J(\theta_{0}, \theta_{1})}{\partial \theta})
$$

- Where $J(\theta_{0}, \theta_{1})$ is the quadratic cost function
- Where $\alpha$ is our learning rate
- Where $\theta$ is either $\theta_{0}$ or $\theta_{1}$
- Where $\frac{\partial J(\theta_{0}, \theta_{1})}{\partial \theta_{0}} = - \frac{1}{m} \sum_{i=1}^{m}(h_{\theta}(x)-y)$
- Where $\frac{\partial J(\theta_{0}, \theta_{1})}{\partial \theta_{1}} = - \frac{1}{m} \sum_{i=1}^{m}(h_{\theta}(x)-y)x$

### Translating Gradient Descent
- The learning rate ensures we only take small steps
- Meaning, even if we have a very large derivative, then we're only taking a very small step still
- In other words, we won't *overreact* by only making small changes
- Although the cost function will continue to be minimized until convergence, the parameters will swing back and forth like a pendulum until the cost function converges
- For neural networks, $\frac{\partial J(\theta_{0}, \theta_{1})}{\partial \theta_{i}}$ is estimated using a training algorithm, such as backpropagation

### Gradient Descent Implementation

```python
>>> # Load data
>>> iris = datasets.load_iris()
>>> X = iris.data[:,2]
>>> y = iris.data[:,3]
>>> n = X.size

>>> # Initialize parameters
>>> theta_0 = 100 # actual = -0.3631
>>> theta_1 = 0.4158 # actual = 0.4158
>>> lr = 0.001 # learning rate
>>> epochs = 100000 # iterations

>>> # Perform gradient descent
>>> for i in range(epochs):
>>>     y_hat = theta_0 + theta_1*X
>>>     d_theta_0 = (-2/n) * sum(y-y_hat) # derivative
>>>     d_theta_1 = (-2/n) * sum(X*(y-y_hat)) # derivative
>>>     theta_0 =  theta_0 - lr*d_theta_0 # update
>>>     theta_1 = theta_1 - lr*d_theta_1 # update

>>> theta_0
-0.363211
>>> theta_1
0.415755
```

---

### tldr
- Gradient Descent finds the parameters that minimize the cost function (error in prediction)
- A gradient is a vector-valued function that represents the slope of the tangent of the graph of the function, pointing in the direction of the greatest rate of increase of the function
- It is a derivative that indicates the incline or the slope of the cost function

---

### References
- [4.3 Gradient-Based Optimization](http://www.deeplearningbook.org/contents/numerical.html)
- [5.9 Stochastic Gradient Descent](http://www.deeplearningbook.org/contents/ml.html)
- [6.2 Gradient-Based Learning](http://www.deeplearningbook.org/contents/mlp.html#pf6)
- [Interactive Demo of Gradient Descent](https://www.benfrederickson.com/numerical-optimization/)
- [Walkthrough of Gradient Descent](https://www.jeremyjordan.me/gradient-descent/)
- [Gradient Descent Derivation](https://mccormickml.com/2014/03/04/gradient-descent-derivation/)
- [Andrew Ng Lecture Notes](http://cs229.stanford.edu/notes/cs229-notes1.pdf)
- [Gradient Descent Example](https://www.youtube.com/watch?v=sDv4f4s2SB8)
- [Methods for Finding Local Minima](https://www.datasciencecentral.com/profiles/blogs/optimization-techniques-finding-maxima-and-minima)
