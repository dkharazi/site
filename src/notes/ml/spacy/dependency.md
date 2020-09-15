---
title: "Dependency Parsing"
draft: false
weight: 8
katex: true
---

### Motivating Dependency Parsing
- The `DependencyParser` assigns syntactic labels describing the relations between individual tokens
- The parser also supports sentence boundary detection
- This lets us iterate over base noun phrases (or *chunks*)
- Noun chunks refer to a noun plus the words describing the noun
- For example, *the lavish green grass* is a noun chunk

### Sample Dependency Tree

```python
>>> doc = nlp("Wow! Spacy is a great tool and I want to learn more.")

# Plot dependency tree
>>> displacy.serve(doc, style="dep")
```

![DependencyTree](/img/token.svg)

### Relevant Functions and Attributes
- `Token.head:` The syntactic parent of *governor* of this token
- `Token.children:` A sequence of this token's immediate syntactic children
- `Token.ancestors:` The rightmost token of this token's syntactic descendants
- `Token.lefts:` The leftward immediate children of this token in the syntacic dependency parse
- `Token.rights:` The rightward immediate children of this token in the syntactic dependency parse
- `Token.subtree:` A sequence containing this token and all of its syntactic descendants

### Navigating the Parse Tree

```python
>>> doc = nlp("Wow! Spacy is a great tool and I want to learn more.")

# Find parent of token
>>> spacy_token = doc[2]
>>> is_token = doc[3]
>>> a_token = doc[4]

>>> spacy_token.head.text
'is'
>>> is_token.head.text
'is'
>>> a_token.head.text
'tool'

# Find all ancestors
>>> [i.text for i in spacy_token.ancestors]
['is']
>>> [i.text for i in is_token.ancestors]
[]
>>> [i.text for i in a_token.ancestors]
['tool', 'is']

# Find immediate children
>>> [i.text for i in spacy_token.children]
[]
>>> [i.text for i in is_token.children]
['Spacy', 'tool', 'and', 'want']
>>> [i.text for i in a_token.children]
[]

# Find leftmost children
>>> [i.text for i in spacy_token.lefts]
[]
>>> [i.text for i in is_token.lefts]
['Spacy']
>>> [i.text for i in a_token.lefts]
[]

# Find rightmost children
>>> [i.text for i in spacy_token.rights]
[]
>>> [i.text for i in is_token.rights]
['tool', 'and', 'want']
>>> [i.text for i in a_token.rights]
[]

# Find all children
>>> [i.text for i in spacy_token.subtree]
['Spacy']
>>> [i.text for i in is_token.subtree]
['Spacy', 'is', 'a', 'great', 'tool', 'and',
'I', 'want', 'to', 'learn', 'more', '.']
>>> [i.text for i in a_token.subtree]
['a']
```

### References
- [DependencyParser Class](https://spacy.io/api/dependencyparser)
