---
title: "Named Entity Recognition"
draft: false
weight: 9
katex: true
---

### Motivating Named Entity Recognition
- An `EntityRecognizer` object will assign named entity labels to a `Span` of tokens
- A `Span` object is a slice from a `Doc` object
- A named entity is a *real-world object* that is assigned a name
- These names typically refer to a person, country, product, book title, etc.
- Spacy is able to recognize [various types](https://spacy.io/api/annotation#named-entities) of named entities
- An `EntityRecognizer` uses a CNN model to predict these named entities 

### Accessing Entity Annotations
- The standard way of accessing entity annotations is the `Doc.ents` property
- This will produce a sequence of `Span` objects
- The `Span` object acts as a sequence of tokens, so we can iterate over the entity
- We can also retrieve information entity annotations for each `Token` using an IOB scheme
- The IOB scheme includes the following annotations:
	- `I:` Token is inside an entity
	- `O:` Token is outside an entity
	- `B:` Token is the beginning of an entity

### Sample Code

```python
>>> import spacy
>>> from spacy.tokens import Span

>>> doc = nlp("San Francisco considers banning sidewalk delivery robots")

# Document level entity annotations
>>> [(e.text, e.start_char, e.end_char, e.label_) for e in doc.ents]
[('San Francisco', 0, 13, 'GPE')]

# Token level entity annotations
>>> [doc[0].text, doc[0].ent_iob_, doc[0].ent_type_]
['San', 'B', 'GPE']
>>> [doc[1].text, doc[1].ent_iob_, doc[1].ent_type_]
['Francisco', 'I', 'GPE']

# Create new Doc
>>> doc = nlp("fb is hiring a new vice president of global policy")

# Check if organization
>>> [(e.text, e.start_char, e.end_char, e.label_) for e in doc.ents]
[]

# Set entity annotation
>>> fb_ent = Span(doc, 0, 1, label="ORG") # create Span for new entity
>>> doc.ents = list(doc.ents) + [fb_ent]
>>> [(e.text, e.start_char, e.end_char, e.label_) for e in doc.ents]
[('fb', 0, 2, 'ORG')]
```

### References
- [Spacy Named Entities](https://spacy.io/usage/linguistic-features#named-entities)
- [EntityRecognizer Class](https://spacy.io/api/entityrecognizer)
- [Named Entity Annotations](https://spacy.io/api/annotation#named-entities)
- [Span Class](https://spacy.io/api/span)
