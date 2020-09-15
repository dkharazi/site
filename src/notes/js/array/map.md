---
title: "map"
draft: false
weight: 5
katex: true
---

### Describing the `map` Operation
- The `map` operation is used for applying a function to each element of an array;
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

### Using the `map` Operation
```js
// Regular function
let f = fruits.map(function(item, index, array) {
    return item + " Pie";
})
console.log(f);
// ["Apple Pie", "Banana Pie"]

// Arrow function
let f = fruits.map(item => item + " Pie");
console.log(f);
// ["Apple Pie", "Banana Pie"]

// forEach
let f = fruits.forEach(item => item + " Pie");
console.log(f);
// undefined
```
