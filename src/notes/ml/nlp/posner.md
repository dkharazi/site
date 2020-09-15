---
title: "POS Tagging and NER Recognition"
draft: false
weight: 3
katex: true
---

### Describing Part-of-Speech Tagging
- Part-of-Speeach (or POS) tagging is used for determining whether or not a given word belongs to part-of-speech (or some grammatical group)
- Specifically, POS tagging typically refers to determining whether a word is a noun, verb, adjective, etc.
- For example, the sentance `Manchester United is looking to sign Harry Kane for $90 million dollars` could return the following using POS tagging

| Word       | POS   |
| ---------- | ----- |
| Manchester | PRON  |
| United     | ADJ   |
| is         | VERB  |
| looking    | VERB  |
| to         | PREP  |
| sign       | VERB  |
| Harry      | PRON  |
| Kane       | PRON  |
| for        | PREP  |
| $          | PUNCT |
| 90         | NUM   |
| million    | NUM   |
| dollars    | NOUN  |

- We can see that POS tagging determines our results by taking in the context of the entire sentance
- Therefore, POS is more of a global problem, since there can be relationships between the first and last word of a sentance

### Describing Named Entity Recognition
- Named Entity Recognition (or NER) is used for determining whether or not a given word belongs to a named entity
- Named entities refer to people, locations, organizations, time expressions, etc.
- Specifically, NER tagging typically refers to determining whether a word is in some general group
- For example, the sentance `Manchester United is looking to sign Harry Kane for $90 million dollars` could return the following using NER:

| Phrase              | NE     |
| ------------------- |------- |
| Manchester United   | ORG    |
| Harry Kane          | PERSON |
| $90 million dollars | MONEY  |

- This problem can be broken down into the following steps:
	- Detect of names (i.e. distinguish between two different words Manchester and United versus one word Manchester United)
	- Classify names into the corresponding categories (i.e. need to manually determine which words belong to which category beforehand)
- Therefore, NER is more of a local problem, since we only really need to look at surrounding words when recognizing a named entity

### References
- [Difference between POS Tagging and NER Recognition](https://www.quora.com/What-is-the-difference-between-POS-Tag-and-Named-Entity-Recognition)
- [Example of POS Tagging and NER Recognition](https://stackabuse.com/python-for-nlp-parts-of-speech-tagging-and-named-entity-recognition/)
