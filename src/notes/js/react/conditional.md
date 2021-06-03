---
title: "Conditional Rendering"
draft: false
weight: 7
katex: true
---

### Defining Types of Conditional Rendering in React
- In React, there are four different approaches for conditional rendering
- Conditional rendering in React works similarly as conditional statements in vanilla JavaScript
- In React, the four approaches include the following:
	- if/else statements
	- Element variables
	- Ternary conditional operators
	- Short circuit operations

### Setting Up a `UserGreeting` Component
- Before illustrating the four different approaches in greater detail, we'll set up a `UserGreeting` class component
- Each approach will be prefaced using this code:

```jsx
class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }
```

### Approach 1: `if`/`else` statements
- React supports conditional rendering using ordinary if statements
- However, if statements musts be outside of any return statement
- This is because these statements don't work inside of JSX
- Specifically, JSX is just syntactic sugar for function calls and object construction
- Meaning, adding if statements inside these function calls wouldn't make sense and would throw errors

```jsx
render() {
  if (this.state.isLoggedIn) {
    return <div>Welcome User</div>;
  } else {
    return <div>Welcome Guest</div>;
  }
}
```

### Approach 2: Element Variables
- In the previous approach, we couldn't use if statements in the JSX
- By initializing a variable, we can conditionally assign a value to it
- The benefit of this approach is it can be used within JSX

```jsx
render() {
  let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome User</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
  return <div>{message}</div>;
}
```

### Approach 3: Ternary Conditional
- Although the second approach removes code redundancy, the ternary operator supports an even simpler approach
- The benefit of this approach is it can be used within JSX as well
- Additionally, most users feel this approach is even more readable

```jsx
render() {
  return this.state.isLoggedIn ? (
    <div>Welcome User</div>
  ) : (
    <div>Welcome Guest</div>
  );
}
```

### Approach 4: Short Circuit Conditional
- Generally, we'll most likely use the ternary approach for conditional rendering
- However, if we want to render either *something* or *nothing*, then we'll use the short circuit operator
- The short circuit operator is just a specific case of the ternary operator

```jsx
render() {
  return this.state.isLoggedIn && 
    <div>Welcome User</div>;
}
```

- Here, the div elements will only render if the user is logged in
- Otherwise, nothing will be rendered
- To do this, we use the short circuit conditional
- If the left side is false, then the right side won't be rendered
- However, if the left hand side is true, then it will be rendered
- Meaning, we'll only render the div elements if the left hand side is true

### References
- [Video about Conditional Rendering](https://www.youtube.com/watch?v=7o5FPaVA9m0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=16)
