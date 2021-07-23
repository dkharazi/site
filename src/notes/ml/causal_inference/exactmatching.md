---
title: "Exact Matching"
draft: false
weight: 9
katex: true
---

### Motivating Matching for Causality
- The goal of any causal analysis is to isolate some causal effect
- To do this, we must satisfy the *backdoor criterion* in our study
    - Meaning, we must close all open backdoor paths
- Closing backdoor paths can be achieved through carefully performing conditioning strategies in our study
- Roughly, there are three different types of conditioning strategies:
    - Subclassification
    - Exact matching
    - Approximate matching

### Motivating the Conditional Independence Assumption
- Conditional independence assumption (or CIA) states that a treatment assignment is independent of potential outcomes after conditioning on observed covariates
- Sometimes we know that randomization occurred only conditional on some observable characteristics
    - This would violate the backdoor path criterion
- In order to estimate a causal effect when there is a confounder, we must satisfy CIA
    - In DAGs notation, this refers to enforcing closed paths everywhere for confounders
    - Meaning, CIA implies there isn't any confounding bias

$$
(Y^{1}, Y^{0}) \perp T | X
$$

### Introducing Matching for Estimating $ATE$
- Matching is one of three conditioning method used for satisfying the backdoor criterion
- Matching estimates $ATE$ by imputing missing potential outcomes by conditioning on the confounding
- Specifically, we could fill in missing potential outcomes for each treatment unit using a control group unit that was *closest* to the treatment group unit for some $X$ confounder
- This would give us estimates of all the counterfactuals from which we could simply take the average over the differences
- Specifically, matching ensures that CIA isn't violated

### Using Matching instead of Subclassification
- Subclassification uses the difference between treatment and control group units and achieves covariate balance by using the $K$ probability weights to weight the averages
- As long as there is enough data for stratifying our covariates, subclassification can be a viable option
- However, if subclassification suffers from the curse of dimensionality, then we must use other methods (like matching)
- Typically, curse of dimensionality exists, so we'll prefer other methods like matching
- Specifically, subclassification is a weighting method used on all individuals, regardless of the overlap of distributions
- Whereas, matching is a form of stratification (or sampling method) that attempts to match distributions

### Illustrating Exact Matching
- Suppose we have the following data:
    - Where, our earnings is $Y$
    - And, our age is a confounder $X$
    - And, an observation is either a trainees or non-trainees
        - Which represents our treatment variable $T$

<table>
  <tr>
    <th colspan="3">Trainees</th>
    <th colspan="3">Non-Trainess</th>
    <th colspan="3">Matched Sample</th>
  </tr>
  <tr>
    <th>Unit</th>
    <th>Age</th>
    <th>Earnings</th>
    <th>Unit</th>
    <th>Age</th>
    <th>Earnings</th>
    <th>Unit</th>
    <th>Age</th>
    <th>Earnings</th>
  </tr>
  <tr>
    <td>1</td>
    <td>18</td>
    <td>9500</td>
    <td>1</td>
    <td>20</td>
    <td>8500</td>
    <td>14</td>
    <td>18</td>
    <td>8050</td>
  </tr>
  <tr>
    <td>2</td>
    <td>29</td>
    <td>12250</td>
    <td>2</td>
    <td>27</td>
    <td>10075</td>
    <td>6</td>
    <td>29</td>
    <td>10525</td>
  </tr>
  <tr>
    <td>3</td>
    <td>24</td>
    <td>11000</td>
    <td>3</td>
    <td>21</td>
    <td>8725</td>
    <td>9</td>
    <td>24</td>
    <td>9400</td>
  </tr>
  <tr>
    <td>4</td>
    <td>27</td>
    <td>11750</td>
    <td>4</td>
    <td>39</td>
    <td>12775</td>
    <td>2</td>
    <td>27</td>
    <td>10075</td>
  </tr>
  <tr>
    <td>5</td>
    <td>33</td>
    <td>13250</td>
    <td>5</td>
    <td>38</td>
    <td>12550</td>
    <td>11</td>
    <td>33</td>
    <td>11425</td>
  </tr>
  <tr>
    <td>6</td>
    <td>22</td>
    <td>10500</td>
    <td>6</td>
    <td>29</td>
    <td>10525</td>
    <td>13</td>
    <td>22</td>
    <td>8950</td>
  </tr>
  <tr>
    <td>7</td>
    <td>19</td>
    <td>9750</td>
    <td>7</td>
    <td>39</td>
    <td>12775</td>
    <td>17</td>
    <td>19</td>
    <td>8275</td>
  </tr>
  <tr>
    <td>8</td>
    <td>20</td>
    <td>10000</td>
    <td>8</td>
    <td>33</td>
    <td>11425</td>
    <td>1</td>
    <td>20</td>
    <td>8500</td>
  </tr>
  <tr>
    <td>9</td>
    <td>21</td>
    <td>10250</td>
    <td>9</td>
    <td>24</td>
    <td>9400</td>
    <td>3</td>
    <td>21</td>
    <td>8725</td>
  </tr>
  <tr>
    <td>10</td>
    <td>30</td>
    <td>12500</td>
    <td>10</td>
    <td>30</td>
    <td>10750</td>
    <td>avg(10,18)</td>
    <td>30</td>
    <td>9875</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>11</td>
    <td>33</td>
    <td>11425</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>12</td>
    <td>36</td>
    <td>12100</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>13</td>
    <td>22</td>
    <td>8950</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>14</td>
    <td>18</td>
    <td>8050</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>15</td>
    <td>43</td>
    <td>13675</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>16</td>
    <td>39</td>
    <td>12775</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>17</td>
    <td>19</td>
    <td>8275</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>18</td>
    <td>30</td>
    <td>9000</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>19</td>
    <td>51</td>
    <td>15475</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>20</td>
    <td>48</td>
    <td>14800</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th>Mean</th>
    <th>24.3</th>
    <th>$11075</th>
    <th></th>
    <th>31.95</th>
    <th>$11101</th>
    <th></th>
    <th>24.3</th>
    <th>$9380</th>
  </tr>
</table>

- Notice, the treatment and control groups have different age distributions
    - So, we create a third group sampling from the non-trainees group to match the age distribution of the trainess group
    - By imputing missing counterfactuals, we satisfy the CIA (which would have been violated otherwise)
- Now, estimating $ATE$ on this matched sample provides a better estimate:

$$
\hat{\delta}_{ATE} = \frac{1}{N} \sum_{i=1}^{N} (2D_{i}-1)(Y_{i} - (\frac{1}{M} \sum_{m=1}^{M} Y_{j_{m}i}))
$$

- And, $Y_{j(i)}$ refers to the $j^{th}$ unit matched to the $i^{th}$ unit based on the $j^{th}$ being *closest to* the $i^{th}$ unit for some $X$ covariate
    - Here, $j$ refers to an index in the treatment group
    - Whereas, $i$ refers to an index in the control group

### Motivating Approximate Matching
- Exact matching works well if we can find another unit with that exact same value we're looking for in the other group
- Otherwise, we'll need to us approximate matching

### References
- [Causal Inference Textbook](https://mixtape.scunning.com/matching-and-subclassification.html?panelset=stata-code&panelset1=python-code2#exact-matching)
- [Python Causality Handbook](https://matheusfacure.github.io/python-causality-handbook/10-Matching.html)
- [Comprehensive Causal Inference Textbook](https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf)