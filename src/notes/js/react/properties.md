---
title: "Properties and State"
draft: false
weight: 2
katex: true
---

### Defining Properties in React
- Properties hold information that influences the UI
- Specifically, properties maintain data about a component that isn't expected to change over time
- Properties are passed to a component
- Meaning, they are managed outside of a component
- Properties are referred to as `props`
- Properties are declared as function parameters
- Properties are immutable
	- Since properties are defined outside of a component, a component isn't allowed to change the function parameter
- Properties can be accessed as:
	- **Functional Component**: `props`
	- **Class Component**: `this.props`

### Defining State in React
- State holds information that influences the UI
- Specifically, state maintains data about a component that is expected to change over time
- State is managed within the component
- Meaning, they are managed within a component
- State is referred to as `state`
- State is declared in the function or class body
- State is mutable
	- Since state is defined within a component, a component is capable of changing the state
- State can be accessed as:
	- **Functional Component**: `useState` Hook
	- **Class Component**: `this.state`

### Overview of `props` and `state`
- Mutability
	- Properties are used for passing immutable data
	- State is used for passing mutable data
- Location
	- Properties are passed to components
	- State is defined in a component
- Generally, a state is used for holding data updated by event handlers

### Describing the `setState` Method
- The state should never be modified directly
	- Instead, the state should be updated using `setState`
	- The UI isn't rerendered unless `setState` is used
- The second argument of `setState` accepts a callback
	- This is used for executing code after the state has been updated
- The first argument of `setState` accepts an object or callback
	- This first argument is used for changing the state
	- The callback is used when we need to:
		- Update the state based on the previous state
		- Access any properties
	- The callback accepts two arguments:
		- First, the previous state `prevState`
		- Second, the properties `props`

```jsx
// 1a. Bad: never modify state directly
increment() {
  this.state.count = this.state.count + 1;
}

// 1b. Good: modify the state using setState
increment() {
  this.setState = ({
    count: this.state.count + 1;
  })
}

// 2. Good: arguments
//      updater: function:
//                 object
//                 function:
//                   prevState
//                   props
//      callback: function
this.setState(updater, [,callback]);

// 3. Good: accepts two arguments
this.setState((state, props) => ({
  count: state.count + props.increment
}));
```

### Illustrating Functional Component with Properties
```jsx
const Greet = props => {
  return(
    <div>
      <h1>
        Hello {props.nickName}, or {props.FirstName}
      </h1>
      {props.children}
    </div>
  )
}
```

### Illustrating Class Component with State
```jsx
class Greet extends Component {
  constructor() {
    super()
    this.state = {
      messsage: 'Hello!'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thanks you for clicking';
    })
  }

  render() {
    return(
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Click me</button>
        {props.children}
      </div>
    )
  }
}
```

### Illustrating Class Component with Properties and State
```jsx
class Greet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello ' + props.name;
    }
  }

  // Passing object
  changeMessage() {
    this.setState({
      message: 'Thanks for clicking';
    })
  }

  // Passing callback function
  // changeMessage() {
  //   this.setState((prevState, props) => ({
  //     message: 'Thanks for clicking' + props.name;
  //   }))
  // }

  render() {
    return(
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Click me</button>
        {props.children}
      </div>
    )
  }
}
```

### References
- [Video about Functional Components](https://www.youtube.com/watch?v=Cla1WwguArA&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=5)
- [Good Practices for State](https://reactjs.org/docs/state-and-lifecycle.html)
