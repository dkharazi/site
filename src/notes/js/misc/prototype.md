---
title: "Prototype"
draft: false
weight: 1
katex: true
---

### Defining Prototypes in JavaScript
- JavaScript is an object-based language based on prototypes
- JavaScript isn't class-based for creating and managing its objects
- A prototype-based language does not make the distinction between classes and instances
- Instead, it just simply has objects

### Properties of Prototype-based JavaScript
- All objects can inherit from another object
- Classes and instances are distinct entities
- Prototypes define and create a set of objects with constructor functions
- Objects are created using the `new` operator
- A resulting object hierarchy is constructed by assigning an objects as the prototype associated with a constructor function
- Objects inherit properties by following the prototype chain
- An initial set of properties is specified by either:
	- A constructor function
	- A prototype
- Properties can be added and removed dynamically to individual objects
	- They can also be added to an entire set of objects dynamically
- Objects just see a prototype as property

### Creating Objects with Constructors
- By convention, constructors are meant to be capitalized functions
- Constructors are called with the `new` operator to create an object
- Calling `new Constructor()` does the following:
	- Creates a new object
	- Assigns the object to the `this` value in the constructor
	- Reserves the `prototype` property for internal use
	- The new object is implicitly returned by the constructor
		- This is why constructors don't have return statements
- Anything defined in the constructor's prototype becomes available to instances
	- Specifically, by calling the `new` operator on the constructor
- Assigning properties in a constructor will create a global variable

### Illustrating Object Creation with Constructors
```js
// constructor function
function Person() {
   this.a = function() { return 'a' };
}

Person.prototype.b = function() { return 'b' };
Person.c = function() { return 'c' };

var test = new Person();  // person object
test.a();  // works
test.b();  // works
test.c();  // error
test.prototype.b();  // error
```

### Use Cases for Constructors
- Define properties in constructors when:
	- Defining properties based on arguments of constructor function
	- Defining public methods with access to private variables
- Define methods on the prototype property when:
	- Defining dynamic methods and properties based on arguments from constructor function
	- Needing better performance
		- Each method has to be created every time the constructor function runs
		- Methods on the prototype chain are created once and then *inherited* by each instance

### Illustrating Use Cases for Constructors
```js
// Properties defined within constructor
// based on arguments
function Person(a, b) {
   this.a = a;
   this.b = b;
}

// Methods defined within constructor
// using private variables
function Person(name) {
   let prefix = 'hello ';
   this.a = prefix + a;
   this.b = function() { return prefix + a };
}

// Methods defined in prototype
// for dynamic functions
function Person(a, b) {
   this.a = a;
   this.b = b;
}
Person.prototype.c = function() { return a+b };
```

### Illustrating Comparison of Constructors and Prototypes
```js
// Accessing constructor from object instances
obj1.constructor === Object  // true
obj2.constructor === SomeConstructor  // true

// Accessing prototype from object instances
// ...with a Constructor
mike.__proto__ === Person.prototype  // true
mike.__proto__.__proto__ === Object.prototype  // true

// ...and with a Factory
mike.__proto__ === Object.Prototype  // true
```

### References
- [Use Cases of Prototypes](https://stackoverflow.com/a/4508498/12777044)
- [Details of Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript Constructors and Prototypes](https://stackoverflow.com/a/37999611/12777044)
- [JavaScript Constructors and Factories](https://stackoverflow.com/a/36492127/12777044)
- [Details about JavaScript Prototypes](https://medium.com/@chamikakasun/javascript-factory-functions-vs-constructor-functions-585919818afe)
- [Comparing Prototypes and ES6 Object Literals](https://stackoverflow.com/a/12175459/12777044)
