---
title: "Component Composition"
draft: false
weight: 6
katex: true
---

### Describing Properties when using Composition
- When a parent component renders a child component, the child component can inherit the properties of the parent component
- The child component can also inherit methods as properties
- The simplest way of achieving this is with arrow functions

### Illustrating a Parent Component
```jsx
class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: 'Parent'
    }
  }
  
  // arrow function required for
  // binding callback
  greetParent = (childName) => {
    alert(`The parent is ${this.state.parentName}
           and child is ${childName}`)
  }
  
  // pass parent method to child component
  // as property
  render() {
    return (
      <div>
        <Child gHndlr={this.greetParent} />
      </div>
    )
  }
}
```

### Illustrating a Child Component
```jsx
// retrieve parent method
// from properties
const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.gHndlr('child')}>
        Greet Parent
      </button>
    </div>
  )
}
```

### A Practical Example of Composition
- Facebook uses thousands of components
- However, they haven't found any use cases for creating inheritance hierarchies over component hierarchies
- Sometimes, components are thought of as *special cases* of other components
- For example, a `WelcomeDialog` is a special case of `Dialog`
- In React, this is achieved by composition, instead of inheritance
- Specifically, a more *specific* component renders a more *generic* component and configures it with props
- The following is an example of this:

```jsx
// Dialog.js
function Dialog(props) {
  return (
    <h1>{props.title}</h1>
    <p>{props.message}</p>
  );
}
```

```jsx
// WelcomeDialog.js
function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="How are you?" />
  );
}
```

### References
- [Video about Passing Methods as Properties](https://www.youtube.com/watch?v=QpfyjwhY9kg&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=15)
- [Composition and Inheritance with Components](https://reactjs.org/docs/composition-vs-inheritance.html)
