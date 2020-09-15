---
title: "Factory Function"
draft: false
weight: 2
katex: true
---

### Motivating Factory Functions
- There are three ways to create objects:
	- Constructor Functions
	- Classes
	- Factory Functions
- In JavaScript, each function is a function object
- An object is a collection of properties
- A property is an association between a name (or key) and a value
- Each of these approaches stores methods on a shared prototype
- Implying, these approaches offer most of the same features

### Creating Objects with Constructor Functions
```js
// constructor
function ConstructorCar() {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car1 = new ConstructorCar();
console.log(car1.drive());
```

### Creating Objects with Classes
```js
// class
class ClassCar {
  drive () {
    console.log('Vroom!');
  }
}

const car2 = new ClassCar();
console.log(car1.drive());
```

### Creating Objects with Factory Functions
```js
// factory
const proto = {
  drive () {
    console.log('Vroom!');
  }
};

const factoryCar = () => Object.create(proto);

const car3 = factoryCar();
console.log(car3.drive());
```

### Comparing Classes to Constructors
- Prototype functions have been around before ES6
- Classes were included in the ES6 release
- ES6 classes desugar constructor functions

### Benefits of Factories and Constructors
- Inheritance is easier with prototypes
- Private properties better suited for factories

### References
- [Factory Functions in JavaScript](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- [Object Creation in JavaScript](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
- [Benefits and Drawbacks of Factory Functions](https://stackoverflow.com/a/14172862/12777044)
