---
title: "filter"
draft: false
weight: 2
katex: true
---

### Describing the `filter` Operation
- `filter` is used for filtering an array based on a condition
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

### Using the `filter` Operation
```js
// Regular function
fruits.filter(function(item, index, array) {
    return item.length > 5;
})
// Array["Banana"]

// Arrow function
fruits.filter(item => item.length > 5);
// Array["Banana"]
```
