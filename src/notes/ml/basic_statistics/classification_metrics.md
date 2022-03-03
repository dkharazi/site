---
title: "Classification Metrics"
draft: false
weight: 18
katex: true
---

### Introducing Basic Classification Metrics 
- The true positives $TP$ refer to the number of observations correctly classified as positive
        - In other words, $TP$ refers to the number of positives we guessed correctly
        - Meaning, $TP$ refers to which actual positives we caught
- The true negatives $TN$ refer to the number of observations correctly classified as negative
        - In other words, $TN$ refers to the number of negatives we guessed correctly
        - Meaning, $TN$ refers to which actual negatives we caught
- The false positives $FP$ refer to the number of observations incorrectly classified as positive
        - In other words, $FP$ refers to the number of negatives we guessed incorrectly
        - Meaning, $FP$ refers to which actual negatives we didn't catch
- The false negatives $FN$ refer to the number of observations incorrectly classified as negative
        - In other words, $FN$ refers to the number of positives we guessed incorrectly
        - Meaning, $FN$ refers to which actual positives we didn't catch
- The positives $P$ refer to the number of observations that are actually positive:

$$
P = TP + FN
$$

- The negatives $N$ refer to the number of observations that are actually negative:

$$
N = TN + FP
$$

### Defining True Positive Rate
- The true positive rate is defined as the following:

$$
TPR = \frac{TP}{P} = \frac{TP}{TP + FN}
$$

- In other words, the true positive rate is defined as as number of true positives divided by the total number of actual positives
- For example, a high true positive rate implies the test doesn't miss many actual positives
- The true positive rate is also known as sensitivity, recall, or probability of detection

### Defining False Negative Rate
- The false negative rate is defined as the following:

$$
FNR = \frac{FN}{P} = \frac{FN}{TP + FN}
$$

- In other words, the false negative rate is defined as as number of false negatives divided by the total number of actual positives
- For example, a high false negative rate implies the test misses many actual positives
- The false negative rate is also known as type II error or miss rate

### Defining False Positive Rate
- The false positive rate is defined as the following:

$$
FPR = \frac{FP}{N} = \frac{FP}{TN + FP}
$$

- In other words, the false positive rate is defined as as number of false positives divided by the total number of actual negatives
- For example, a high false positive rate implies the test misses many actual negatives
- The false positive rate is also known as type I error or false alarms

### Defining True Negative Rate
- The true negative rate is defined as the following:

$$
TNR = \frac{TN}{N} = \frac{TN}{TN + FP}
$$

- In other words, the true negative rate is defined as as number of true negatives divided by the total number of actual negatives
- For example, a high true negative rate implies the test doesn't miss many actual negatives
- The true negative rate is also known as specificity or correct rejection

### Defining Standard Accuracy
- The standard accuracy is defined as the following:

$$
Accuracy = \frac{TP + TN}{P + N} = \frac{TP + TN}{TP + TN + FP + FN}
$$

- The standard accuracy refers to the percentage of observations that are correctly predicted (out of all the observations)
- A high accuracy indicates a greater predictability (given the model and threshold/parameter values)

### Defining AUC
- Before we introduce the AUC metric, we should first talk about the ROC curve:
	- The receiver operating characteristic (or ROC) curve is a curve created by plotting the true positive rate $TPR$ against the false positive rate $FPR$ (with varying parameter values)
        - The ROC curve essentially illustrates the goodness of fit of a binary classifier as its associated parameter values are varied
- The area under the curve (or AUC) metric refers to the area under the ROC curve
- A high AUC indicates a better model fit (and not a greater predictability)

### Defining Precision and Recall
- When we make predictions about a positive class, we tend to have two goals in mind:
        1. We want to include as many actual positives in our predictions as possible
        2. We want to exclude as many actual negatives from our predictions as possible
- The above goals are not the same thing and should be differentiated:
        - The first goal is the same thing as achieving a high recall
        - The second goal is the same thing as achieving a high precision
- At a high level, *precision* informs us if we're usually correct when we guess positive
        - Precision represents the coverage of our guess
- At a high level, *recall* informs us if all actual positives are guessed correctly
        - Recall represents the coverage of the actuals
- For example, precision will be low if we just predict positive for everyone, but recall will be high
- On the other hand, precision will be high if we just predict positive for one person correctly, but recall will be low
- **Precision:** Of those we guessed as positive, how many did we guess correctly?
- **Recall:** Of those that are actually positive, how many did we guess correctly?
- These metrics are defined using the following formulas:

$$
\text{Precision} = \frac{TP}{\text{predicted positives}} = \frac{TP}{TP + FP}
$$

$$
\text{Recall} = \frac{TP}{\text{actual positives}} = \frac{TP}{TP + FN}
$$

### Illustrating Precision and Recall
- As an example, imagine there are two types of fish in a pond: goldfish and minnows
- Suppose we're wanting to throw a net in the pond and pull out all of the goldfish without pulling out any minnows
- If we consider the goldfish to be our *positives*, then this is like trying predict all of one class and guessing them completely correct, without getting any wrong guesses
- Having **low recall** but **high precision** is like throwing our net into the water and only capturing a few goldfish in the pond without capturing any minnows
        - Not capturing any minnows is good, but we'd like to capture more goldfish too
- Having **high recall** but **low precision** is like throwing our net into the water and capturing all of the goldfish in the pond, but also capturing a lot of minnows
        - Capturing all of the golfish is great, but we'd like to capture fewer minnows
- Having **low recall** and **low precision** is like throwing our net into the water and only capturing minnows without any goldfish
        - There aren't any positives in this scenario
- Having **high recall** and **high precision** is like throwing our net into the water and capturing all of the goldfish in the pond without capturing any minnows
        - This is our ultimate goal but hard to achieve

### References
- [Advantages of AUC vs Standard Accuracy](https://datascience.stackexchange.com/questions/806/advantages-of-auc-vs-standard-accuracy)
- [ROC Wiki](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
- [ROC Example](http://gim.unmc.edu/dxtests/roc2.htm)
