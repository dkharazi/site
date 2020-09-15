---
title: "reduce"
draft: false
weight: 6
katex: true
---

### Describing the `reduce` Operation
- The `reduce` operation is used for testing if every element of an array satisfies a condition
- It accepts a callback function with the following arguments:
	- `accumulator`: Accumulated value previously returned
	- `currentValue:` Current element processed in the array
	- `index`: Optional index of `currentValue`
	- `array`: Optional array that is called
	- `thisArg`: Optional value to use as `this`

### Defining an Array
```js
let fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2
```

### Using the `reduce` Operation
```js
// Regular function
fruits.reduce(function(accum, item) {
    return accum + item;
})
// "AppleBanana"

// Arrow function
fruits.reduce((accum, item) => accum + item);
// "AppleBanana"
```
