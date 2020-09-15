---
title: "Introducing Components"
draft: false
weight: 1
katex: true
---

### Defining Components in React
- A component represents a part of the user interface
- Many React applications contain the following components:
	- A component for the header
	- A component for the sidenav
	- A component for the footer
	- A component for the main content
	- A root component
- The root component is usually named `App.js`

![ReactComponent](/img/reactcomponent.svg)

### Properties of Components
- Components are reusable
	- Multiple components can be used with different properties
	- Components can contain other components
- Components usually are contained in their own JavaScript file
	- For example, the `AppComponent` is placed in `App.js`

### Two Types of Components
- Functional Component
	- These are stateless
	- Functional components are defined by JavaScript functions
	- They return HTML that describe the UI
- Class Component
	- These are stateful
	- Class components are defined by extending the React Component class
	- They must contain a render method
	- This render method returns HTML

### Describing the React Components
- Function and class components both render HTML
- To do this, we can specify JSX in the return statements
- By doing this, we're able to use familiar HTML syntax to achieve more flexible functionality
- JSX is just syntactic sugar for more low-level React commands
- For most users, JSX ends up being more flexible in the end
- Throughout JSX, we'll notice variables specified in curly braces
- The curly braces are a special syntax in JSX
- It lets the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string
- Meaning, any JavaScript code specified in JSX needs to include surrounding curly braces

### Details about Functional Components
- Functional components optionally receive an object of properties
- This object is referred to as `props`
- Functional components are stateless
- They are mainly responsible for UI layouts
- They are generally preferred over class components (if applicable)
- Functional components must return a single HTML element

$$ \overbrace{\text{Properties}}^{\text{Optional Input}} \to \overbrace{\boxed{\text{JavaScript Function}}}^{\text{Functional Component}} \to \overbrace{\text{HTML}}^{\text{Output}} $$

```js
function Greet(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

### Details about Class Components
- Class components use `this` keyword
- Typically, they are more feature rich
- They maintain their own private data (i.e. stateful)
- They are mainly responsible for complex UI logic
- They provide lifecycle hooks
- Class components must return a single HTML element

$$ \overbrace{\text{Properties}}^{\text{Optional Input}} \to \overbrace{\boxed{\text{ES6 Class}}}^{\text{Class Component}} \to \overbrace{\text{HTML}}^{\text{Output}} $$

```js
class Greet extends React.Component {
    render() {
        return <h1>Hello, {props.name}</h1>;
    }
}
```

### References
- [Video about JavaScript Components](https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4)
- [Video about Functional Components](https://www.youtube.com/watch?v=Cla1WwguArA&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=5)
- [Video about Class Components](https://www.youtube.com/watch?v=lnV34uLEzis&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=6)
- [Using Curly Braces in JSX throughout React](https://stackoverflow.com/a/43904857/12777044)
