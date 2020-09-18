---
title: "Classification Metrics"
draft: false
weight: 18
katex: true
---

### General Terminology
- The true positives $TP$ refer to the number of observations correctly classified as positive
- The true negatives $TN$ refer to the number of observations correctly classified as negative
- The false positives $FP$ refer to the number of observations incorrectly classified as positive
- The false negatives $FN$ refer to the number of observations incorrectly classified as negative
- The positives $P$ refer to the number of observations classified as positive:

$$
P = TP + FP
$$

- The negatives $N$ refer to the number of observations classified as negative:

$$
N = TN + FN
$$

### True Positive Rate
- The true positive rate is defined as the following:

$$
TPR = \frac{TP}{P}
$$

- In other words, the true positive rate is defined as as number of true positives divided by the total number of positives
- The true positive rate refers to the percentage of observations that are correctly predicted as positive
- The true positive rate is also known as sensitivity, recall, or probability of detection

### False Positive Rate
- The false positive rate is defined as the following:

$$
FPR = \frac{FP}{P}
$$

- In other words, the false positive rate is defined as as number of false positives divided by the total number of positives
- The false positive rate refers to the percentage of observations that are incorrectly predicted as positive
- The false positive rate is also known as type I error or false alarms

### True Negative Rate
- The true negative rate is defined as the following:

$$
TNR = \frac{TN}{N}
$$

- In other words, the true negative rate is defined as as number of true negatives divided by the total number of negatives
- The true negative rate refers to the percentage of observations that are correctly predicted as negative
- The true negative rate is also known as specificity or correct rejection

### False Negative Rate
- The false negative rate is defined as the following:

$$
FNR = \frac{FN}{N}
$$

- In other words, the false negative rate is defined as as number of false negatives divided by the total number of negatives
- The false negative rate refers to the percentage of observations that are incorrectly predicted as negative
- The false negative rate is also known as type II error or miss rate

### Standard Accuracy
- The standard accuracy is defined as the following:

$$
Accuracy = \frac{TP + TN}{P + N} = \frac{TP + TN}{TP + TN + FP + FN}
$$

- The standard accuracy refers to the percentage of observations that are correctly predicted (out of all the observations)
- A high accuracy indicates a greater predictability (given the model and threshold/parameter values)

### AUC
- Before we introduce the AUC metric, we should first talk about the ROC curve:
	- The receiver operating characteristic (or ROC) curve is a curve created by plotting the true positive rate $TPR$ against the false positive rate $FPR$ (with varying parameter values)
        - The ROC curve essentially illustrates the goodness of fit of a binary classifier as its associated parameter values are varied
- The area under the curve (or AUC) metric refers to the area under the ROC curve
- A high AUC indicates a better model fit (and not a greater predictability)

### References
- [Advantages of AUC vs Standard Accuracy](https://datascience.stackexchange.com/questions/806/advantages-of-auc-vs-standard-accuracy)
- [ROC Wiki](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
- [ROC Example](http://gim.unmc.edu/dxtests/roc2.htm)
