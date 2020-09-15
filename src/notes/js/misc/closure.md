---
title: "Function Closures"
draft: false
weight: 3
katex: true
---

### Defining a Closure
- A closure refers to an inner function within an outer function
- Specifically, a closure is the combination of a function enclosed within its surrounding state
- Here, the surrounding environment refers to the lexical environment
- In other words, a closure provides an inner function with access to the scope of an outer function
- Closures are created when a function is created (at function creation time)

### Describing Lexical Environments
- Nested functions have access to variables declared in their outer scope
- Lexical scoping refers to using the location where a variable is declared
- This is done to determine where that variable is available
- Lexical scoping describes how the parser resolves variable names when functions are nested
- Roughly, a lexical environment and function scope can be used interchangeably

### Describing a Closure
- A closure is the combination of:
	- A function
	- The lexical environment that function was declared in
- This lexical environment consists of any local variables that are in-scope

### Illustrating Closures
```js
function makeFunc() {
    // name is a local variable
    // created by makeFunc
    var name = 'Mozilla';
    // displayName is a closure
    function displayName() {
        // use variable declared
        // in the parent function
        alert(name);
    }
    return displayName;
}
let myFunc = makeFunc();
myFunc();
```

### Another Example of Closures
- Here, `makeAdder` is a function factory
- Also, `add5` and `add10` are both closures
- They share the same function body definition
- However, they store different lexical environments
	- The lexical environment of `add5` assigns `x` as 5
	- The lexical environment of `add10` assigns `x` as 10

```js
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);  // closure
var add10 = makeAdder(10);  // another closure

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

### References
- [JavaScriptFunction Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
