---
title: "Selection Bias and COVID-19"
date: "2020-06-11"
tags: ["machine learning"]
draft: false
katex: true
---

Survivorship bias refers to our tendency of only focusing on the observations that make it past some selection process, while overlooking those that do not. Typically, these observations aren't detected in some study due to some lack of visibility. Implying, survivorship bias is a type of selection bias.

This form of bias can lead to overly optimistic beliefs and conflation of correlation with causation. As an example, if the few founders of successful tech startups all dropped out of college, someone may believe that college is unnecessary or may believe tech startups have a better chance of succeeding when they're founded by college drop-outs. Obviously, we know this isn't true, since there are many students who drop out and fail, but their stories are rarely ever told.

Wikipedia illustrates many more [examples](https://en.wikipedia.org/wiki/Survivorship_bias) of survivorship bias. Refer to it for more detailed cases involving survivorship bias, which include military and other historical examples.

## State of COVID-19 Testing
As hinted at earlier, survivorship bias is a special case of selection bias, which refers to the selection of *survivors*. In the case of COVID-19, the current state of testing informs us about the selection of *non-survivors*. The CDC states on their [website](https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html):

> Most people have mild illness and can recover at home without medical care. Contact your healthcare provider if your symptoms are getting worse or if you have questions about your health.

In other words, those with mild symptoms are suggested to not visit the hospital, which is important for protecting health workers. Consequently, this significantly decreases the chance of ever including this group of people in the overall case count, since they're discouraged to visit the hospital early on. Furthermore, the CDC goes on to say:

> An antibody test might tell you if you had a past infection. An antibody test might not show if you have a current infection because it can take 1–3 weeks after infection for your body to make antibodies. Having antibodies to the virus that causes COVID-19 might provide protection from getting infected with the virus again. If it does, we do not know how much protection the antibodies might provide or how long this protection might last.

Personally, I have tried getting a test from nearby testing centers in my city. I searched for local testing centers and found that most of them needed an appointment scheduled days in advance. Even after scheduling an appointment, nearly each test could only return results within 5-7 days. The limited testing capacities and lack of real-time reporting felt discouraging, since I essentially would need to quarantine for a week before learning if I have the virus or not. Or, I would need to drive almost an hour to a testing center much further away from my residence, and I would need to take time off from work. From someone who attempts to follow all of the CDC guidelines, this process was deflating and unrealistic.

Regarding antibody tests, I have never received one. Based on the information from the CDC, I personally would walk away from an antibody test feeling slightly unconfident with my results, given the uncertainty associated with it. Although most of this uncertainty is arguably unavoidable, these factors disincentivize symptomless people from getting tested. For more information about the potential shortcomings of antibody tests, refer to [this article](https://www.scientificamerican.com/article/coronavirus-antibody-tests-have-a-mathematical-pitfall/).

## Converse of Survivorship Bias
Most likely, the factors listed above contribute to fewer asymptomatic people getting tested, which can be seen in studies like [this one](https://www.cidrap.umn.edu/news-perspective/2020/04/study-many-asymptomatic-covid-19-cases-undetected). The testing in hospitals tells us little about the spread of the virus because the results are prone to distortion.

Again, the survivorship bias refers to the selection of survivors. However, in the case of COVID-19, we're almost witnessing the converse of a survivorship bias. Instead, the observations in our study mostly include non-survivors, and many of the asymptomatic survivors are excluded from the case count. As a result, the virus is likely much [more contagious](https://news.usc.edu/170565/covid-19-antibody-study-coronavirus-infections-los-angeles-county/) than expected, causing the death rate to be smaller in reality. To be clear, I am not suggesting a smaller death rate means the virus shouldn't be taken as seriously. Rather, contact tracing and large-scale testing should be taken more seriously to capture a comprehensive understanding of the virus. Then, transmission models would become accurate and robust enough to better control COVID-19.

Successful countries have followed this response strategy, like South Korea. Rather than enforcing an official lockdown, they focused on aggressive testing, which specifically includes the following:
- Early and frequent testing
- Tracing using high-tech surveillance
- Zero-tolerance isolation

As a result, South Korea is considered one of the hallmarks of the countries having contained COVID-19. For more information about South Korea's response, refer to [this article](https://www.theatlantic.com/ideas/archive/2020/05/whats-south-koreas-secret/611215/)
