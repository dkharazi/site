---
title: "Part-of-Speech Tagging"
draft: false
weight: 7
katex: true
---

### Introducing POS Tagging
- After the tokenization process is completed and transforms the raw text into a `Doc` object, spacy can perform POS tagging on that `Doc` object
- This is where the statistical model comes into play
- The statistical model is used to make predictions about which tags most likely apply to a token in the given context

### The Algorithm for Tagging
1. The `Tagger` receives a `Doc` object.
2. The `Tagger` iterates over the `Token` objects.
3. The `Tagger` assigns each `Token` object a `tag` attribute based on a CNN.

### References
- [Part-of-Speech Tagging in Spacy](https://spacy.io/usage/linguistic-features#pos-tagging)
- [Tagger Class](https://spacy.io/api/tagger)
