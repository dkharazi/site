---
title: "Render Props"
draft: false
weight: 21
katex: true
---

### Motivating Render Props
- Again, render props refers to a design pattern
- Implying, it is not part of the React API
- It is used for sharing code between React components
- To do this, it uses a prop whose value is a function

### Defining Render Props
- In React, a prop can be a function
- Functions passed as props control what a component renders
- This is the main idea behind the *render props* pattern
- Again, render props refers to a design pattern
- It is used for sharing code between React components
- To do this, it uses a prop whose value is a function

### Illustrating Render Props
- Here, we move all of the common functionality to a single component `Counter.js`
- It basically does the following:
	- Defines the `count` state and method
	- Handles the logic of the state and method
- This provides us with flexibility when we go to render any `Counter` components

```js
// App.js
class App extends Component {
  render() {
    return(
      <div className="App">
        <Counter
          render={(count, incCount) => (
            <ClickCounter
              count={count}
              incCount={incCount}
            />
          )}
        />
        <Counter
          render={(count, incCount) => (
            <HoverCounter
              count={count}
              incCount={incCount}
            />
          )}
        />
      </div>
    )
  }
}
```

```js
// Counter.js
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}
```

```js
// ClickCounter.js
class ClickCounter extends Component {
  render() {
    const { count, incCount } = this.props
      return (
        <button onClick={incCount}>
          {this.props.name} Clicked{count} times
        </button>
      )
  }
}
```

```js
// HoverCounter.js
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        Hovered {count} times
      </h2>
    )
  }
}
```

### References
- [Video about Use Case for Render Props](https://www.youtube.com/watch?v=NdapMDgNhtE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=36)
- [Video about Defining Render Props](https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37)
- [Render Props in the React Docs](https://reactjs.org/docs/render-props.html)
