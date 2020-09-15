---
title: "Set Theory in Statistics"
draft: false
weight: 9
katex: true
---

### Representing Elements and Sets
- An element is an object
- Specifically, an element can be an individual number, word, set, etc.
- For example, $\text{\textbraceleft}{3, 4}\text{\textbraceright}$ is an element of the set $\text{\textbraceleft}{1, 2, \text{\textbraceleft}{3, 4}\text{\textbraceright}}\text{\textbraceright}$
- For example, $\text{\textbraceleft}{a, b}\text{\textbraceright}$ is an element of the set $\text{\textbraceleft}{\text{\textbraceleft}{a, b}\text{\textbraceright}, c}\text{\textbraceright}$
- A set is made up of elements
- Since an element can be a set, then a set can contain other sets as well
- For example, $\text{A}$ is a valid set if $\text{A} = \text{\textbraceleft}{1,2,3}\text{\textbraceright}$, since $1$, $2$, and $3$ are all valid elements of a set
- Also, $\text{B}$ is a valid set if $\text{B} = \text{\textbraceleft}{1,2,\text{\textbraceleft}{3,4}\text{\textbraceright}}\text{\textbraceright}$, since $1$, $2$, and $\text{\textbraceleft}{3, 4}\text{\textbraceright}$ are all valid elements of a set
- Also, $\text{C}$ is a valid set if $\text{C} = \text{\textbraceleft}{red,blue,green}\text{\textbraceright}$, since the colors $red$, $blue$, and $green$ are all valid elements of a set

### Set Notation
- A set is a unique sequence of observable outcomes
- For example, $\text{\textbraceleft}{1,2,3,4,5,6}\text{\textbraceright}$ could be a set, representing the outcomes of rolling a single die
- An event is a set of outcomes that is written as a capital letter
- For example, we could denote a set that represents the outcomes of rolling a single die as the following:

$$ \text{A} = \text{\textbraceleft}{1,2,3,4,5,6}\text{\textbraceright} $$

- Keep in mind that events are written as a normal, capital letter, whereas a random variable is written as an italicized, capital letter
- A realization of a random variable is written as a italicized, lower-case letter

### Denoting Random Variables
- As a reminder, a random variable is a function that maps a single value from a sample space to any single, real-number realization
- Typically, we denote a random variable as the following:

$$ X: \Omega \to \R $$
$$ \text{such } \text{that } \omega \mapsto X(\omega) $$
$$ \text{such } \text{that } \omega \in \Omega $$
$$ \text{such } \text{that } X(\omega) \in \R $$

- Here, $\Omega$ is a set that represents the domain of the random variable function
- $\R$ is a set that represents the range of the random variable function
- $\omega$ represents an element, or a single value, from the set $\Omega$
- $X(\omega)$ represents an element, or a single value, from the set $\R$
- $X(\omega)$ also represents a realization of the random variable function

### Denoting Probability
- As a reminder, probability represent a function that maps a single value from the sample space to a realization that is in the interval of 0 and 1
- Typically, the output of the random variable function becomes the input of the probability function
- Therefore, the sample space will represent the range of the random variable
- We denote a probability as the following:

$$ P: \Omega \to [0,1] $$
$$ \text{such } \text{that } \omega \mapsto P(\omega) $$

### Denoting Events
- Sometimes, we don't want our function to map a single value from $\Omega$, or we don't want our function to map to $\R$
- In this situation, we would create an event
- For example, we could have the following:
	- Let $\Omega$ denote the sample space
	- Let $\text{A}$ be an event that is a subset of $\R$
	- Let $X$ be our random variable
- We could then define our random variable as the following:

$$ X: \Omega \to \text{A} $$
$$ \text{such } \text{that } \omega \mapsto X(\omega) $$
$$ \text{such } \text{that } \text{A} \subset \R $$
$$ \text{such } \text{that } \omega \in \Omega $$
$$ \text{such } \text{that } X(\omega) \in \text{A} $$

- Here, $\Omega$ is a set that represents the domain of the random variable function
- The set $\text{A}$ is a set that represents the range of the random variable function
- Also, $\text{A}$ is an event that is a subset of all real numbers
- $\omega$ represents an element, or a single value, from the set $\Omega$
- $X(\omega)$ represents an element, or a single value, from the event $\text{A}$

### Another Example of Denoting Events
- Let's say we have the following situation:
	- An event $\text{A}$ is a subset of $\Omega$
	- $\R$ is a set of all real numbers
	- $X$ is our random variable
- We could define our random variable as the following:

$$ X: \text{A} \to \R $$
$$ \text{such } \text{that } \omega \mapsto X(\omega) $$
$$ \text{such } \text{that } \text{A} \subset \Omega $$
$$ \text{such } \text{that } \omega \in \text{A} $$
$$ \text{such } \text{that } X(\omega) \in \R $$

- Here, the event $\text{A}$ is a set that represents the domain of the random variable function
- $\R$ is a set that represents the range of the random variable function
- Also, $\text{A}$ is an event that is a subset of the sample space
- $\omega$ represents an element, or a single value, from the set $\text{A}$
- $X(\omega)$ represents an element, or a single value, from the set $\R$

### One Last Example of Denoting Events
- Let's say the following is true:
	- Let $\text{A}$ be an event that represents the set {red, white, blue}
	- Let $\text{B}$ be an event that represents the set {cat, dog}
	- Let $X$ be our random variable
	- Let $\Omega$ be our sample space, which is the set of all colors
- We could define our random variable as the following:

$$ X: \text{A} \to \text{B} $$
$$ \text{such } \text{that } \omega \mapsto X(\omega) $$
$$ \text{such } \text{that } \text{A} = \text{\textbraceleft}{red, white, blue}\text{\textbraceright} $$
$$ \text{such } \text{that } \text{B} = \text{\textbraceleft}{cat, dog}\text{\textbraceright} $$
$$ \text{such } \text{that } \omega \in \text{A} $$
$$ \text{such } \text{that } X(\omega) \in \text{B} $$

- Here, the event $\text{A}$ is a set that represents the domain of the random variable function
- Also, the event $\text{B}$ is a set that represents the range of the random variable function
- The set $\text{A}$ is an event that is a subset of our sample space (i.e. colors)
- The set $\text{B}$ is an event that is a subset of animals
- $\omega$ represents an element, or a single value, from the event $\text{A}$
- $X(\omega)$ represents an element, or a single value, from the event $\text{B}$

### Remarks on Mathematical Notation
- As stated previously, a random variable $X$ is a function defined as the following:

$$ X: \Omega \to \R $$

- However, we often refer to $X$ using the following shorthand formula:

$$ X(\omega) \text{ such} \text{ that } \omega \in \Omega $$ 

- Probability functions can be written in many ways:

$$ p_{X}(x) \equiv P(X = x) \equiv P(\text{\textbraceleft}{s \in S : X(s) = x}\text{\textbraceright}) $$

- We can generally denote sets as the following:

$$ S \equiv \text{\textbraceleft}{\text{type of each element in list} : \text{range of each element}}\text{\textbraceright} $$

- Here are a few examples showing how we can denote different sets:

$$ S \equiv \text{\textbraceleft}{i \in \R : 1 \le i \le 6, x \text{ is odd}}\text{\textbraceright} $$
$$ S \equiv \text{\textbraceleft}{(i, j) : 1 \le i \le 6, 1 \le j \le 6}\text{\textbraceright} $$

- We can also denote realizations as the following:

$$ X(s) \equiv X((i, j)) = i + j $$

### Further Notation
- We can define sets as long as they obey either of the following notations:

$$ \text{\textbraceleft}{\text{an element}}\text{\textbraceright} \in \text{\textbraceleft}{\text{a set}}\text{\textbraceright} $$
$$ \text{\textbraceleft}{\text{a set}}\text{\textbraceright} \in \text{\textbraceleft}{\text{a collection of sets}}\text{\textbraceright} $$
$$ \text{\textbraceleft}{\text{a set}}\text{\textbraceright} \subset \text{\textbraceleft}{\text{a set}}\text{\textbraceright} $$
$$ \text{\textbraceleft}{\text{a collection of sets}}\text{\textbraceright} \subset \text{\textbraceleft}{\text{a collection of sets}}\text{\textbraceright} $$

- For example, we can write $a \in \text{A}$
	- Where $\text{A}$ is an event (which is a set)
	- Where $a$ is an outcome or realization of $\text{A}$
- We can also write $\text{A} \in ℑ$
	- Where $\text{A}$ is an event (which is a set)
	- Where $ℑ$ is an algebra (which is a collection of sets)
- Or, we can write $\text{A} \subset \text{B}$
	- Where $\text{A}$ and $\text{B}$ are both events (which are sets)
- We can also write $ℑ_{0} \subset ℑ_{1}$
	- Where $ℑ_{0}$ is an algebra (which is a collection of sets) that is contained within an algebra $ℑ_{1}$ (which is larger a collection of sets)

### Reference
- [List of Mathematical Symbols Wiki](https://en.wikipedia.org/wiki/List_of_mathematical_symbols)
- [What Exactly is a Random Variable](https://math.stackexchange.com/questions/240673/what-exactly-is-a-random-variable)
- [Lexture Notes on Random Variables](http://www.columbia.edu/~ww2040/4106S11/lec0125.pdf)
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
- [Regressors as Fixed and Random Variables](https://stats.stackexchange.com/questions/246047/independent-variable-random-variable)
- [Basic Theory of Stochastic Processes Slides](http://www.phdeconomics.sssup.it/documents/Lesson3.pdf)
