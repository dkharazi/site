---
title: "Currying"
draft: false
weight: 4
katex: true
---

### Use Cases for Currying
- Creating functions that accept an unfixed number of arguments
- Useful in event handling
- Little functions can be reused with ease

### Illustrating Ordinary Function
```js
function add(a,b,c) {
    return a + b + c;
}

add(1,2,3)    // 6
add(1,2)      // NaN
add(1,2,3,4)  // 6 (extra arguments ignored)
```

### Illustrating Curried Function
```js
function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);
curriedSum(1)(2);  // 3
```

### References
- [Currying in JavaScript](https://javascript.info/currying-partials)
- [Examples of Currying](https://codeburst.io/currying-in-javascript-ba51eb9778dc)
