---
title: "forEach"
draft: false
weight: 1
katex: true
---

### Describing the `forEach` Operation
- The `forEach` method is used for looping over an array
- It accepts a callback function with the following arguments:
	- `currentValue:` Current element processed in the array
	- `index`: Optional index of `currentValue`
	- `array`: Optional array that is called
	- `thisArg`: Optional value to use as `this`

### Defining an Array
```js
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2
```

### Using the `forEach` Operation
```js
// Regular function
fruits.forEach(function(item, index, array) {
    console.log(item, index);
})
// Apple 0
// Banana 1

// Arrow function
fruits.forEach(item => console.log(item));
// Apple
// Banana
```
