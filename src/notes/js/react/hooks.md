---
title: "Hooks"
draft: false
weight: 22
katex: true
---

### Defining Hooks in React
- Hooks are an addition to React in version 16.8
- They allow us to use React features without writing a class
- Previously, we could only access state using class components
- With hooks, we can access state using functional components
- Thus, hooks don't work inside of class components

### Motivating Hooks in React
- Avoiding the whole confusion with `this` keyword
	- With hooks, stateful logic is accessible with functional components
	- Class components require a certain level of knowledge about the `this` keyword in JavaScript
	- Due to the behavior of `this`, we must bind event handlers
	- Classes don't minify very well
- Reusing stateful component logic can be difficult
	- The HOC and render props patterns address this problem
	- These patterns require restructuring our components
	- This restructuring can cause our code to look awkward, since we wrap our components with other components
	- So, there's a need to improve sharing stateful logic
	- With hooks, we can reuse stateful logic without creating and wrapping additional components
- Organizing complex scenarios as functional components
	- Without hooks, related code isn't organized in one place
	- With hooks, we can create components for complex scenarios (e.g. data fetching, event subscribing, etc.)
	- For example, fetching happens in `componentDidMount` and `componentDidUpdate` without hooks
	- Also, event listeners are set up in `componentDidMount` and `componentDidUpdate` without hooks
	- Because of stateful logic, we can't break components into smaller ones

### Rules for Hooks
- Only call hooks at the top level
- Meaning, don't call hooks inside loops, conditions, etc.
- Only call hooks from React functions
- Meaning, call them from within funcitonal components in React

### References
- [Video about the Basics of Hooks](https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=44)
- [Introducing Hooks in React Docs](https://reactjs.org/docs/hooks-intro.html)
