---
title: "Destructuring Assignment"
draft: false
weight: 2
katex: true
---

### The Destructuring Assignment
- The destructuring assignment unpacks values from:
	- Arrays
	- Or properties from objects
- These values are unpacked into distinct values

### Defining an Array
```js
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2
```
### Using the Destructuring Assignment
```js
let a, b, c;
[a,b,c] = [10,20,30,40,50];

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

[a,b,...c] = [10,20,30,40,50];

console.log(a); // 10
console.log(b); // 20
console.log(c); // [30,40,50]
```
