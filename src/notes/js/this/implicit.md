---
title: "Implicit Binding"
draft: false
weight: 1
katex: true
---

### Describing Implicit Binding
- Implicit binding occurs when dot notation is used to invoke a function
- In implicit binding, whatever is to the left of the dot becomes the context for this in the function

### Illustrating Implicit Binding
```js
class Num {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let n = Num(10,20);
console.log(n.x);  // 10
```

### References
- [Context for this Keyword](https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)
