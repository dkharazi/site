---
title: "The Doc Class"
draft: false
weight: 1
katex: true
---

### What is a Doc?
- A `Doc` takes in our raw input text
- A `Doc` returns a sequence of `Token` objects
- A `Doc` object is an array of `Token` objects

### Sample Code
```python
>>> from spacy.tokens import Doc

# We can initialize Docs using nlp
>>> doc = nlp('Hello World! This is an example.')

# Check type of object
>>> type(doc)
spacy.tokens.doc.Doc

# Docs are basically arrays
>>> doc[0].text
'Hello'
>>> doc[2].text
'!'
>>> doc[5].text
'an'

# Check type of elements in Doc
>>> type(doc[0])
spacy.tokens.token.Token
```

### References
- [Doc Class](https://spacy.io/api/doc)
