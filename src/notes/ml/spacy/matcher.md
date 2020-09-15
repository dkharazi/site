---
title: "Rule-Based Matching"
draft: false
weight: 10
katex: true
---

### Motivating Rule-Based Matching
- The `Matcher` class operates over `Token` objects
- The `PhraseMatcher` class operates over `Doc` objects
- These rule matches can refer to token annotations or large terminology lists
- For example, we may use the `Matcher` class to find a combination of three tokens:
	- A token whose **lowercase form matches *hello***
	- A token whose **`is_punct` flag is set to `True`**
	- A token whose **lowercase form matches *world***

### Sample Code
```python
>>> doc = nlp('Barack Obama defends his healthcare reforms')

# Initialize and add rules
>>> matcher = PhraseMatcher(nlp.vocab)
>>> matcher.add('OBAMA', None, nlp('Barack Obama'))
>>> matcher.add('HEALTH', None,
...             nlp('health care reform'),
...             nlp('healthcare reforms'))

# Find matches
>>> matcher(doc)
[(7732777389095836264, 0, 2), (3161894980173008574, 4, 6)]

# Get match ids
>>> nlp.vocab.strings[7732777389095836264]
'OBAMA'
>>> nlp.vocab.strings[3161894980173008574]
'HEALTH'
```

### References
- [Rule-Based Matching](https://spacy.io/usage/rule-based-matching)
- [PhraseMatcher Class](https://spacy.io/api/phrasematcher)
- [Difference between Matcher and PhraseMatcher Classes](https://stackoverflow.com/questions/55852115/token-extension-versus-matcher-versus-phrase-matcher-vs-entity-ruler-in-spacy)
