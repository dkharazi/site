---
title: "every"
draft: false
weight: 4
katex: true
---

### Describing the `every` Operation
- The `every` operation is used for testing if every element of an array satisfies a condition
- It accepts a callback function with the following arguments:
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

### Using the `every` Operation
```js
// Regular function
fruits.every(function(item, index, array) {
    return item.length > 10;
})
// false

// Arrow function
fruits.every(item => item.length > 2);
// true
```
