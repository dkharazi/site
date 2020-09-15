---
title: "Counting"
draft: false
weight: 6
katex: true
---

### Representing Data using Counts
- All throughout statistics, there are many important metrics and representations of data that involve counting
- In reference to discrete random variables, the concept of counting data comes up everywhere
- Even in reference to continuous random variables, foundational concepts, such as probability density funcitons, involve the concept of counting data

### Binning Data
- Before continuous data can be counted up, they need to be divided into discrete
blocks, or binned
- Specifically, we want to understand what type of bins to use
- This is tricky because generally we want the bins to be large and coarse enough that there’s a reasonable degree of representation in each, but not so coarse that we lose all structure
- If we make the bins too small, then the variance in the expected number of points in each bin will get too big
- It’s generally a bad idea to have variable-sized bins, but not always
- It may be a good idea to experiment with different bin-sizes until we find
a regime where the bin-size doesn’t have much effect on the analysis
- This unfortunately is quite time-consuming, and therefore may not be the best option

### Histograms
- A histogram is simply a plot of how many data-points fall into each bin
- As such, it’s a kind of approximation to the probability density function
	- There are actually quite sophisticated techniques for estimating the pdf from histogram data
- Some people want to use the word *histogram* only for one-dimensional
data
- However, we can always use histograms for multi-dimensional data

### Percentiles
- Assuming the data are one-dimensional (so they can be put in a simple order),
then we can talk about the percentiles
- The $x^{th}$ percentile value is simply the value equaled or exceeded by only $\frac{x}{100}$ of the datapoints
- That is, $x$ percent of the data are at or above that value (similarly for deciles and quartiles)
- Just like the histogram is an approximation to the pdf, the percentiles contain information about the cumulative distribution function

### Median and Mode
- The mode is simply the value with the most data-points
- Assuming one-dimensional data, the median is the value such that half
of all points have a higher value and half a lower
- If there is a gap in the data, there may well be a range of values which can claim to be the median
- There is a weak convention, in such cases, to use the mid-point of the range

### References
- [Probability, Statistics and Stochastic Processes](http://bactra.org/prob-notes/srl.pdf)
