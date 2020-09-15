---
title: "Language Data"
draft: false
weight: 4
katex: true
---

### Introducing Language Data
- There are some rules that are generalized across languages
- Most languages are full of special rules and exceptions
- These exceptions are hard-coded and organized in simple Python files
- Specifically, these hard-coded files are called language data in spacy
- There are two types of language data in spacy:
	- Shared language data
		- This refers to rules that are generalized across languages
		- E.g. rules for basic punctuation, emojis, and norms for equivalent tokens with different spellings, such as `"` and `”`
	- Individual language data
		- This refers to rules that are specific to a particular language
		- It also takes care of putting together all the components of the `Language` subclass
		- E.g. `English` or `German`

![LanguageData](/img/language_data.svg)

### Components of a Pipeline
- `Stop Words:` List of most common words of a language that are often useful to filter our
	- E.g. *and*, *I*, etc.
	- Matching tokens will return `True` for `is_stop`
- `Tokenizer Exceptions:` Special-case rules for the tokenizer
	- I.e. contractions and abbreviations
	- E.g. *can't*, *U.K.*, etc.
- `Norm Exceptions:` Special-case rules for normalizing tokens
	- Used to improve the model's predictions
	- E.g. American versus British spelling
- `Punctuation Rules:` Regular expressions for splitting tokens
	- This includes rules for prefixes, suffices, and infixes
	- E.g. punctuation, special characters, and emojis
- `Character Classes:` Character classes to be used in regular expressions
	- E.g. latin characters, quotes, hyphens, or icons
- `Lexical Attributes:` Custom functions for setting lexical attributes on tokens
	- E.g. `like_num` which includes language-specific words
	- E.g. *ten*, *hundred*, etc.
- `Syntax Iterators:` Functions that compute views of a `Doc` object based on its syntax
	- At the moment, only used for noun chunks
- `Tag Map:` Dictionary mapping strings in our tag set to [Universal Dependencies](https://universaldependencies.org/u/pos/all.html) tags
- `Morph Rules:` Exception rules for morphological analysis of irregular words
	- E.g. personal pronouns, etc.
- `Lemmatizer:` Lemmatization rules or a lookup-based lemmatization table to assign base forms
	- E.g. *be* for *was*


| Variable               | Type  | Description        |
|------------------------|-------|--------------------|
| `STOP_WORDS`           | set   | Individual words   |
| `TOKENIZER_EXCEPTIONS` | dict  | Keyed by strings mapped to list of one dict per token with token attributes |
| `TOKEN_MATCH`          | regex | Regexes to match complex tokens, e.g. URLS |
| `NORM_EXCEPTIONS`      | dict  | Keyed by strings, mapped to their norms |
| `TOKENIZER_PREFIXES`   | list  | Strings or regexes usually not customized |
| `TOKENIZER_SUFFIXES`   | list  | Strings or regexes usually not customized |
| `TOKENIZER_INFIXES`    | list  | Strings or regexes usually not customizes |
| `LEX_ATTRS`            | dict  | Attribute ID mapped to function |
| `SYNTAX_ITERATORS`     | dict  | Iterator ID mapped to function |
| `TAG_MAP`              | dict  | Keyed by strings mapped to Universal Dependencies tags |
| `MORPH_RULE`           | dict  | Keyed by strings mapped to a dict of their morphological features |

### References
- [Description of Language Data](https://spacy.io/usage/adding-languages#language-data)
