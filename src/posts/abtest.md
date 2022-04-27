---
title: "Outlining the A/B Testing Procedure"
date: "2022-02-28"
tags: ["machine learning"]
draft: false
katex: true
---

Experimentation using A/B testing is a crucial component in measuring customers' changes in behavior when making any changes to a business, including site changes, product changes, etc. Most of the information in this post was outlined in [Dan Lee's video](https://www.youtube.com/watch?v=DUNk4GPZ9bw&ab_channel=DataInterview), which does a terrific job of defining the key steps in A/B tests. Visit his channel for more detailed A/B testing walkthroughs.

In general, Dan outlines $7$ general steps when designing and running tests, which include the following:
1. Defining a Problem Statement
2. Designing a Hypothesis Test
3. Designing an Experiment
4. Running the Experiment
5. Validating the Experiment and its Results
6. Interpreting the Results
7. Launching a Decision

Some software, such as Optimizely, will do some of these steps for you behind-the-scenes. For additional details about A/B testing and its benefits, refer to [this article](https://www.optimizely.com/optimization-glossary/ab-testing/) about common A/B tests outlined by a popular A/B testing software called *Optimizely*.

## Defining a Problem Statement
Before designing any experiments or hypotheses, everyone that is a part of the test must align on a few key success metrics and an overarching goal of the experiment. Creating a user journey can be helpful in some cases as well. Metrics are created in an attempt to measure the customer or user's behavior, and great success metrics will either perfectly capture the behavior or at least be an accurate proxy for capturing the behavior. Typically, effective success metrics are crafted around the following principles:

- **Measurable:** Will the metric track the customer's behavior using data collected throughout the experiment?
- **Attributable:** Will the metric accurately capture any potential change in the customer's behavior when the customer is introduced to the treatment?
- **Sensitive:** Will the metric be sensitive enough so it always will detect a change in behavior when there is an actual change?
- **Timely:** Will the metric measure the customer's behavior in a short time window?

Each of these principles should be considered in any test when building effective success metrics. Examples of useful success metrics could include average daily revenue, average click-to-open ratios, or average click-through ratios (or CTR).

Sometimes, a metric accurately measures what a team wants to assess in an A/B test, but the metrics is determined to be insensitive. In these situations, we can use alternative metrics, try proxy metrics, and apply transformations to a metric to increase its sensitivity for a test. Some transformations include the following:
- Applying a log transformation $x \to \log(1 + x)$
- Capping the value at a fixed maximum $x \to clip(upper=100)$
- Changing the metrics aggregation level $\frac{x}{n} \to x$

As stated already, using proxy metrics can increase sensitivity if the goal is to reach a short-term goal versus a long-term goal. Also, converting metrics into other format can increase sensitivity, such as proportions, conditional averages, or percentiles. For a more detailed walkthrough of ensuring metrics are sensitive, refer to [this write-up by Microsoft](https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/beyond-power-analysis-metric-sensitivity-in-a-b-tests/) about the importance of performing a sensitivity analysis, or refer to [this article by Microsoft](https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/why-tenant-randomized-a-b-test-is-challenging-and-tenant-pairing-may-not-work/) for variance reduction methods.

## Designing a Hypothesis Test
After there is alignment on the problem statement and a set of business KPIs, then the testing team can design a hypothesis test using these components. Arguably, the most important piece of the hypothesis test is including the null hypothesis the alternative hypothesis. As an example, our null hypothesis might be assuming there isn't a statistically significant difference in average daily revenue between our current product ranking algorithm and our new product ranking algorithm. Additionally, the test should include the following parameters as well:
- Significance level
- Statistical power
- Minimum detectable effect (or MDE)

Using our example, the significance level refers to the probability of observing a statistically significant difference in average daily revenue between our two ranking algorithms when *there isn't* actually a difference. By default, the significance level is assigned to $\alpha = 0.05$. On the other hand, the statistical power refers to the probability of observing a statistically significant difference in average daily revenue between our two ranking algorithms when *there is* actually a difference. The statistical power can be evaluated by the minimum detectable effect (or MDE) in a power analysis. By default, the $MDE$ is set at $1\%$ lift, meaning a $1\%$ lift in our metric between the control and treatment group is practically significant. For detailed definitions of each of these components typically found in a power analysis, refer to the [R documentation](https://www.statmethods.net/stats/power.html).

## Designing an Experiment
After outlining the hypothesis test, our experiment should define any necessary and relevant parameters. In particular, the experiment should define basic units of measure, including who the test will randomize (e.g. buyers, email users, mobile app users, etc.). The test should also include the target population, the sample size, and the duration of the experiment. The following are some examples of relevant parameters in a test:
- **Test Split:** 50/50
- **Randomization Unit:** User
- **Target Population:** US men's site visitors
- **Duration of the Experiment:** 1 to 2 weeks
- **Sample Size:** Number of customers based on power analysis
$$
n \approx \frac{16 \sigma^{2}}{\delta^{2}}
$$
- **Next Steps for each Hypothesis:** Replace ranking system for any improvement, but do not rollout change otherwise
- **Success Metric stratified by Cohorts of Customers:** Spend by order history, spend by gender, spend by age, spend by newness of customer, etc.

## Running the Experiment
Next, the experiment must be run. Before jumping right into this step, it's important to note that the appropriate instruments and data pipelines must be set up. Additionally, the correct data, specifically any data used for success metrics, must be collected in preparation for the experiment.

Once the pipelines are implemented, the test should run for the entirety of the duration. Specifically, the test shouldn't be stopped at any point, even if a small p-value is observed early on. Obviously, the sample size will be small early on, which will cause the p-value to fluctuate in the beginning. For this reason, the test shouldn't be stopped early.

## Validating the Experiment
Once the experiment is finished running, there should be initial checks made to ensure the experiment ran successfully without any bugs. Specifically, there should be guardrail metrics set up and analyzed afterwards, such as system latency times, to make sure the data was collected correctly.

Other errors and biases must be validated afterwardsm including external factors. These external factors could include less obvious biases, such as running the test during a recession, during an abnormally high spending period, during the holiday season, etc. Stratifying for external variables can help alleviate these biases, along with running ad-hoc analyses on other years or time periods for comparison.

Another important check is a validation for selection bias, which could include validating similar distributions for cohorts of users or other variables between the control and test groups. For example, we should account for a novelty effect amongst customers by segmenting customers into new and old cohorts, then stratifying them to avoid any potential selection bias. Lastly, users should be validated to make sure there is a $50/50$ split. Sometimes, a randomized experiment could lead to a $49/50$ split, which should be checked. For more examples of validations, refer to [Dan Lee's video](https://www.youtube.com/watch?v=DUNk4GPZ9bw&ab_channel=DataInterview). The above validations are listed in the table below:

| Bias                   | Check                            |
| ---------------------- | -------------------------------- |
| Instrumentation Effect | Guardrail metrics                |
| External Factors       | Holidays, distruptions, etc.     |
| Selection Bias         | A/A Test                         |
| Sample Ratio Mismatch  | Chi-Square Goodness of Fit Test  |
| Novelty Effect         | Segment by new and old customers |

## Interpreting the Results
Once the experiment and its results have been validated, the results then must be interpreted for the team who is interested in them. Results should be analyzed to ensure they're practical and statistically significant. This can be done by evaluating the results from the hypothesis tests and power analysis after running the experiment, while measuring the lifts in our designated success metrics between the control and treatment groups also. For example, p-values, relative and absolute lift differences, and confidence intervals should be reported to the team.

## Launching a Decision
After communicating the results to the team, next steps should be in place to make a final decision about the tested feature. Any trade-offs should be discussed in detail before making a final decision. For exmaple, evaluating the trade-offs of observing lifts in secondary and tertiary success metrics should be taken into consideration if lifts in primary success metrics aren't observed. Additionally, evaluating the financial cost of launching the service should be considered if the lift is marginal. There are plenty of other important trade-offs to consider as well, such as the severity of any false positives arising from the test.