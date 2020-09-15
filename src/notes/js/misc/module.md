---
title: "Module System"
draft: false
weight: 5
katex: true
---

### Function Declarations and Expressions
- The function name can be omitted in function expressions
- This creates an anonymous function
- Typically, a function expression is used as an IIFE
- As a result, function expressions run as soon as its defined
- Consequently, they aren't hoisted to the global scope

### Illustrating Declarations and Expressions
```js
// function declaration
function multiply(num1, num2) {
    return num1 * num2;
}

// function expression
let multiply = function(num1, num2) {
    return num1 * num2;
}
```

### Illustrating Function Hoisting
```js
hoisted(); // logs "foo"
notHoisted(); // TypeError: notHoisted not a function

function hoisted() {
    console.log('foo');
}

var notHoisted = function() {
    console.log('bar');
};
```

### Sample Structure of Modules
- Refer to [this project](https://github.com/mdn/js-examples/tree/master/modules/basic-modules) for more information

```
index.html
main.js
modules/
    canvas.js  // module
    square.js  // module
```

### References
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Summary of Module Design Pattern](https://stackoverflow.com/a/19801321/12777044)
- [Overview of Function Hoisting](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)
