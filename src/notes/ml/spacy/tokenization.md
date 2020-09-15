---
title: "Tokenization"
draft: false
weight: 6
katex: true
---

### Describing Tokenization
- Tokenization is the task of splitting input text into meaningful segments called *tokens*
- The input to the tokenizer is a unicode text
- The output is a `Doc` object
- To construct a `Doc` object, we need a `Vocab` objecy, a sequence of stringed words, and optionally a sequence of booleaned spaces

### The Algorithm for Tokenization
1. The `Tokenizer` receives some raw text.
2. Iterate over whitespace-separated substrings.
3. Check whether we have an explicitly defined rule for this substring. If we do, then we should use the rule and skip the remaining steps.
4. Otherwise, try consuming a prefix. Return to step 2 if we consume a prefix.
5. Otherwise, try consuming a suffix. Return to step 2 if we consume a suffix.
6. Otherwise, try consuming a special case (e.g. symbol). Return to step 2 if we consume a special case.
7. Otherwise, try consuming infixes (e.g. hyphens) and split the substring into tokens on all infixes.
8. Once we get to this step without any consumption or discovered rule, then handle the substring as a single token.

![Tokenization](/img/tokenization.svg)

### Spacy Pseudocode for Tokenization
```python
tokenizer_pseudo_code(self, special_cases, prefix_search,
                      suffix_search, infix_finditer, token_match):
    tokens = []
    for substring in text.split():
        suffixes = []
        while substring:
            while (prefix_search(substring) or 
                   suffix_search(substring)):
                if substring in special_cases:
                    tokens.extend(special_cases[substring])
                    substring = ''
                    break
                if prefix_search(substring):
                    split = prefix_search(substring).end()
                    tokens.append(substring[:split])
                    substring = substring[split:]
                    if substring in special_cases:
                        continue
                if suffix_search(substring):
                    split = suffix_search(substring).start()
                    suffixes.append(substring[split:])
                    substring = substring[:split]
            if substring in special_cases:
                tokens.extend(special_cases[substring])
                substring = ''
            elif token_match(substring):
                tokens.append(substring)
                substring = ''
            elif list(infix_finditer(substring)):
                infixes = infix_finditer(substring)
                offset = 0
                for match in infixes:
                    tokens.append(substring[offset:match.start()])
                    match_interval = match.start():match.end()
                    tokens.append(substring[match_interval])
                    offset = match.end()
                if substring[offset:]:
                    tokens.append(substring[offset:])
                substring = ''
            elif substring:
                tokens.append(substring)
                substring = ''
        tokens.extend(reversed(suffixes))
    return tokens
```

### References
- [Tokenization in Spacy](https://spacy.io/usage/linguistic-features#tokenization)
- [Tokenizer Class](https://spacy.io/api/tokenizer)
