---
title: "Lifting State"
draft: false
weight: 18
katex: true
---

### Motivating State Lifting
- In React, we can share state between multiple components
- This can be done by moving state to the closest common ancestor of the components
- This is called *lifting the state*
- As an example, this may include moving the state from a child component to a parent component
- Then, the parent component becomes the source of truth of state

### Use Cases of Lifting State
- When we want a change in one component to affect another component, then we can lift the state to the parent component
- This includes the following:
	- Move child states to the parent
	- Move child methods to the parent
	- Parent passes state as properties
	- Children access state properties as props

### Pros and Cons of Lifting State
- Advantages:
	- Single source of truth for any data that changes in React
	- Takes less time to find and isolate bugs
- Disadvantages:
	- Involves writing more boilerplate code

### Example without Lifting State

```js
// App.js
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Counter />
      </div>
    );
  }
}
```

```js
// Counter.js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>
          increment
        </button>
        <button onClick={this.decrement}>
          decrement
        </button>
      </div>
    );
  }
}
```

### Example with Lifting State

```js
// App.js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          decrement={this.decrement}
          increment={this.increment}
        />
        <Counter
          count={this.state.count}
          decrement={this.decrement}
          increment={this.increment}
        />
      </div>
    );
  }
}
```

```js
// Counter.js
function Counter(props) {
  return (
    <div>
      <div>count: {this.props.count}</div>
      <button onClick={this.props.increment}>
        increment
      </button>
      <button onClick={this.props.decrement}>
        decrement
      </button>
    </div>
  );
}
```

### References
- [Lifting State in React Docs](https://reactjs.org/docs/lifting-state-up.html)
- [Example and Use Cases of Lifting State](https://www.youtube.com/watch?v=ZluNj0-NpNI)
