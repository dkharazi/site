---
title: "Higher Order Components"
draft: false
weight: 20
katex: true
---

### Motivating Higher-Order Components
- A higher-order component (HOC) are used for sharing common functionality between components
- Lifting the state up may achieve this goal as a side effect
- However, HOCs are geared more towards reusability
- Whereas, lifting state is more geared towards a component demonstrating behavior dependent on another component

### Defining Higher-Order Components
- HOCs are not part of the React API
- Rather, they are a pattern that emerges from React’s compositional nature
- HOCs are functions that accepts a component and returns an enhanced component
- They are used to share common functionality between components without having to repeat code
- If a component is thought to transform props into UI, then an HOC transforms a component into another component
- At a high level, an HOC is a pattern where a function takes a component as an argument and returns a new component
- HOCs only add functionality to an already existing component
- As an analogy, its implementation is similar to the following:

```js
const IronMan = withSuit(TonyStark);
```

### Illustrating a Basic Higher-Order Component
- Again, an HOC is just a design pattern
- It isn't part of the React API
- Specifically, it refers to a standard function
- The following function is an example of an HOC:

```js
// hoc.js
const hoc = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent />
    }
  }
  return HOC;
}
export default hoc;

// SomeComponent.js
import hoc from './hoc'
class SomeComponent extends Component {
  render() {
    return <h1>Hello World</h1>
  }
}
export default hoc(SomeComponent)
```

### Illustrating A Higher-Order Component with Props
- The HOC listed above isn't very interesting, since it doesn't include any additional functionality
- The following HOC has a prop tied to it:

```js
const HOC = OriginalComponent => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent name='Mike' />
    }
  }
  return NewComponent;
}
```

### Illustrating a Reusable Higher-Order Component
- The component `WithCounter` maintains:
	- The state containing a `count` property
	- A method for incrementing the `count` property
- Both the state and method are passed as props to the `ClickCounter` and `HoverCounter`
- The `HoverCounter` is returned with the enhanced properties
- Then, the control returns to both the `ClickCounter` and `HoverCounter` components
- Here, the `count` prop and `addCount` method are passed in and destructured from the HOC
- These are then rendered in both the `ClickCounter` and `HoverCounter` components
- Essentially, the HOC maintains the state and increments it
- However, both the `ClickCounter` and `HoverCounter` components receive separate states
- Meaning, incrementing the `ClickCounter` component will not affect the `HoverCounter` component, and vice versa

```js
// App.js
class App extends Component {
  render() {
    return(
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}
export default App;

// ClickCounter.js
class ClickCounter extends Component {
  render() {
    const { count, addCount } = this.props;
    return (
      <button onClick={addCount}>
        Clicked {count} times
      </button>
    )
  }
}
export default withCounter(ClickCounter);

// HoverCounter.js
class HoverCounter extends Component {
  render() {
    const { count, addCount } = this.props;
    return (
      <button onMouseOver={addCount}>
        Clicked {count} times
      </button>
    )
  }
}
export default withCounter(HoverCounter);

// withCounter.js
const withCounter = WrappedComponent => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }
    }

    addCount = () => {
      this.setState(prevState => {
        return {count: prevState.count+1};
      }
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          addCount={this.addCount}
        />
      )
    }
  }
  return WithCounter;
}
export default withCounter;
```

### Passing Properties between HOCs
- Properties passed to the `ClickCounter` component are passed to `WithCounter`, but not `WrappedComponent`
- To fix this issue, the remaining props must be passed down to the `WrappedComponent` using the spread operator

```js
// App.js
class App extends Component {
  render() {
    return(
      <div className="App">
        // this line has changed
        <ClickCounter name='Mike' />
        <HoverCounter />
      </div>
    )
  }
}

// ClickCounter.js
class ClickCounter extends Component {
  render() {
    const { count, addCount } = this.props;
    return (
      <button onClick={addCount}>
        // this line has changed
        {this.props.name} Clicked {count} times
      </button>
    )
  }
}

// withCounter.js
...
  render() {
      return (
        // this line has changed
        <WrappedComponent
          count={this.state.count}
          addCount={this.addCount}
          {...this.props}
        />
     )
  }
...
```

### Passing Parameters to the HOC
- Sometimes, we'll want to pass parameters to the HOC
- In our example, we may want to increment by a different value depending on the component that is passed to the HOC
- The following is an example of this:

```js
// withCounter.js
const withCounter = (WrappedComponent, incNum) => {
  ...
  addCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + incNum}
    }
  }
}

// ClickCounter.js
...
export default withCounter(ClickCounter, 5);

// HoverCounter.js
...
export default withCounter(HoverCounter, 3);
```

### References
- [Video about Use Cases of Higher Order Components](https://www.youtube.com/watch?v=B6aNv8nkUSw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=33)
- [Video about Defining Higher Order Components](https://www.youtube.com/watch?v=rsBQj6X7UK8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=34)
- [Video about Passing Properties with HOCs](https://www.youtube.com/watch?v=l8V59zIdBXU&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=35)
- [Higher Order Components in React Docs](https://reactjs.org/docs/higher-order-components.html)
