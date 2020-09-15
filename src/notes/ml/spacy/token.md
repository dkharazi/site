---
title: "The Token Class"
draft: false
weight: 2
katex: true
---

### What is a Token?
- A `Token` represents a word, punctuation symbol, whitespace, etc.
- Each `Token` represents an input string from a `Doc` object encoded to hash values
- Linguistic annotations are available as `Token` [attributes](https://spacy.io/api/token#attributes)
- To get the readable attribute representation of an attribute, we need to add an underscore `_` to its name

## More on Token Attributes
- `text:` The input text content
- `lemma_:` Base form of the token
- `pos_:` Generic part-of-speech tags found [here](https://spacy.io/api/annotation#pos-universal)
- `tag_:` Specific part-of-speech tags found [here](https://spacy.io/api/annotation#pos-en)
- `dep_:` Dependency relation found [here](https://spacy.io/api/annotation#dependency-parsing-universal)
- `shape_:` Orthographic features of token
- `is_alpha:` Does the token consist of non-alphabetical characters?

### Sample Code
```python
>>> doc = nlp("Wow! Spacy is a great tool and I'm wanting to learn more. Please, teach me, sir.")

# Text of token
>>> doc[10].text
'wanting'

# Lemma of token
>>> doc[10].lemma
7597692042947428029  # some hash value
>>> doc[10].lemma_
'want'

# Generic POS of token
>>> doc[10].pos_
'VERB'

# Specific POS of token
>>> doc[10].tag_
'VBG'

# Dependency of token
>>> doc[10].dep_
'ROOT'

# Shape of token
>>> doc[10].shape_
'xxxx'
```

### References
- [Token Class](https://spacy.io/api/token)
