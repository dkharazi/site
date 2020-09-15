---
title: "Spread Operator"
draft: false
weight: 1
katex: true
---

### Describing the `spread` Operation
- The `spread` operator is represented using `...` the syntax
- It allows an iterable to be expanded as arguments
- This iterable can be an array, string, etc.
- This operator is useful in function calls

### Defining an Array
```js
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2
```

### Defining a Custom Function
```js
function combine(x, y) {
    return x + y;
}
```

### Using the `spread` Operation
```js
console.log(combine(...fruits));
// "AppleBanana"
```
