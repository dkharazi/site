---
title: "Explicit Binding"
draft: false
weight: 2
katex: true
---

### Describing Explicit Binding
- Explicit binding occurs when any of the following are used on a function
	- `.call()`
	- `.apply()`
	- `.bind()`
- This is *explicit* because we're explicitely passing the `this` contect to `.call()`, `.apply()`, or `.bind()`

### Describing the `call` Method
- The `.call()` method is used for passing the `this` keyword as an argument
- Use cases include:
	- Calling a function on a set of objects
	- Calling a function on multiple objects simultaneously
	- Many more

### Describing the `apply` Method
- The `.apply()` method works almost the same as `.call()`
- However, `.apply()` passes in any array of parameters for any optional arguments following the `this` keyword
```js
// call
myFunc.call(thisContext, param1, param2, ...);

// apply
myFunc.apply(thisContext, [param1, param2, ...]);
```

### Illustrating Explicit Binding
```js
function add(obj) {
    return obj.x + obj.y;
}

class Num {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  minus() {
    return y - x;
  }
}

// One use case
let n = [new Num(10,20), new Num(30,40)];
for (let i of n) {
    console.log(add(i));
}
// 30
// 70

// Another use case
let n = new Num(10,20);
console.log(Num.prototype.add(10,20));  // NaN
console.log(Num.prototype.add.call(n));  // 30
```

### References
- [Context for this Keyword](https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)
