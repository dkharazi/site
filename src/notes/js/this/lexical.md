---
title: "Lexical Binding"
draft: false
weight: 4
katex: true
---

### Describing Lexical Binding
- Lexical scoping defines how variable names are resolved in nested functions
- Inner functions contain the scope of the parent function

### Illustrating Lexical Scoping
```js
let o = (function() {
    let priv = () => "hello";
    return {id: 1, pub: priv()};
})();

console.log(o);  // {id: 1, pub: "hello"}
```

### References
- [Context for this Keyword](https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)
- [Summary of Lexical Scoping](https://stackoverflow.com/a/2896899/12777044)
