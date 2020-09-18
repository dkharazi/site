---
title: "Spacy Pipeline"
draft: false
weight: 3
katex: true
---

### Introducing the Spacy Pipeline
- When you call `nlp` on a text, spacy first tokenizes the text to produce a `Doc` object
- The `Doc` is then processed in several different steps
- This is referred to as the processing pipeline
- The pipeline typically consists of a pos tagger, parser, and entity recognizer
- Each pipeline component returns the processed `Doc`, which is then passed on to the next component

![Pipeline](../../../img/pipeline.svg)

### Describing the Pipeline
- The `Tokenizer` component separates raw text into tokens
- The `Tagger` component assigns part-of-speech tags
- The `DependencyParser` component assigns dependency labels
- The `EntityRecognizer` component detects and labels named entities
- The `TextCategorizer` component assigns document labels

| Name          | Component          | Creates        |
|---------------|--------------------|----------------|
| **tokenizer** | `Tokenizer`        | `Doc`          |
| **tagger**    | `Tagger`           | `Doc[i].tag_`  |
| **parser**    | `DependencyParser` | `Doc[i].dep_`  |
| **ner**       | `EntityRecognizer` | `Doc[i].ents_` |
| **textcat**   | `TextCategorizer`  | `Doc.cats`     |

### References
- [Description of the Pipeline Class](https://spacy.io/usage/spacy-101#pipelines)
