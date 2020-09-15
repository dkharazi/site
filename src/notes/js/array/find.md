---
title: "find"
draft: false
weight: 3
katex: true
---

### Describing the `find` Operation
- The `find` operation is used for returning the first element of an array satisfying a condition
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

### Using the `find` Operation
```js
// Regular function
fruits.find(function(item, index, array) {
    return item.length < 10;
})
// "Apple"

// Arrow function
fruits.find(item => item.length < 10);
// "Apple"
```
