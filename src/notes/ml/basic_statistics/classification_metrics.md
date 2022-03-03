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
- At a high level, *precision* informs us if we're usually correct when we guess positive
        - Precision covers our guess
        - Roughly, precision can be thought of as a measure of quality
- At a high level, *recall* informs us if we're usually correct for all actual positives
        - Recall covers the actuals
        - Roughly, recall can be thought of as a measure of quantity
- For example, precision will be low if we just predict positive for everyone, but recall will be high
- For example, precision will be high if just predict positive for one person correctly, but recall will be low
- **Precision:** Of those we guessed as positive, how many did we guess correctly?
- **Recall:** Of those that are actually positive, how many did we guess correctly?
- These metrics are defined using the following formulas:

$$
\text{Precision} = \frac{TP}{\text{predicted positives}} = \frac{TP}{TP + FP}
$$

$$
\text{Recall} = \frac{TP}{\text{actual positives}} = \frac{TP}{TP + FN}
$$

### References
- [Advantages of AUC vs Standard Accuracy](https://datascience.stackexchange.com/questions/806/advantages-of-auc-vs-standard-accuracy)
- [ROC Wiki](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
- [ROC Example](http://gim.unmc.edu/dxtests/roc2.htm)
