---
title: "Binding Event Handlers"
draft: false
weight: 5
katex: true
---

### Motivating Event Handler Binding
- In event handling, `this` can behave unexpectedly
- When a method is used as a callback (or event handler), `this` becomes the global context
- In other words, `this` becomes the `Window` object
- In strict mode, we can't reference the `Window` object through `this` in browsers
- Without using strict mode, let's say we define the following script:

```html
<script>
function hello() {
  console.log(this);
}
</script>
```

- If our body includes a single button, `this` takes on the following:

```html
<!-- Scenario 1 -->
<!-- Clicking logs <button> -->
<body>
  <button onclick='console.log(this)'>
    Click Me
  </button>
</body>

<!-- Scenario 2 -->
<!-- Clicking logs <Window> -->
<body>
  <button onclick='hello()'>
    Click Me
  </button>
</body>
```

- In React, we'll typically want to use a method as a callback
- As a result, `this` will become `undefined` in the method
- To illustrate this point, refer to the following example:

```jsx
class Greet extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }
  }

  goodbye() {
    // Oh no!
    // this is undefined
    this.setState({
      message: 'goodbye'
    })
  }

  // Clicking the button
  // doesn't change the message
  // from hello to goodbye
  render() {
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        <button onClick={this.goodbye}>
          Click Me
        </button>
      </div>
    )
  }
}
```

### Solution 1: Using `bind`
- This solution is okay for smaller web applications
- However, any update to the state causes component rerendering
- As a result, a new event handler will be created for each render
- Therefore, this solution shouldn't be used for larger apps
- Also, this solution makes it difficult to pass parameter values

```jsx
class Greet extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }
  }

  goodbye() {
    // Hooray!
    // this is component instance
    this.setState({
      message: 'goodbye'
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        // change this line
        <button onClick={this.goodbye.bind(this)}>
          Click Me
        </button>
      </div>
    )
  }
}
```

### Solution 2: Using Arrow Functions
- This solution is okay for smaller web applications
- However, any update to the state causes component rerendering
- As a result, a new event handler will be created for each render
- Therefore, this solution shouldn't be used for larger apps
- This solutions makes it simple to pass parameter values

```jsx
class Greet extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }
  }

  goodbye() {
    // Hooray!
    // this is component instance
    this.setState({
      message: 'goodbye'
    })
  }

  render() {    
    return (
      <div>
        <div>
          {this.state.message}   
        </div>
        // change this line
        <button onClick={() => this.goodbye()}>  
          Click Me
        </button>
      </div>
    )
  }
}
```

### Solution 3: Using `bind` in the Constructor
- This solution is preferred for larger applications
- Any update to the state doesn't cause component rerendering
- Therefore, a new event handler won't be created for each render

```jsx
class Greet extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }

    // add this line
    this.goodbye = this.goodbye.bind(this)
  } 

  goodbye() {
    // Hooray!
    // this is component instance
    this.setState({
      message: 'goodbye'
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        // and change this line
        <button onClick={this.goodbye}>   
          Click Me
        </button>
      </div>
    )
  }
}
```

### Solution 4: Redefine the Method as an Arrow Function
- This solution is preferred for larger applications
- Any update to the state doesn't cause component rerendering
- Therefore, a new event handler won't be created for each render
- This solutions makes it simple to pass parameter values

```jsx
class Greet extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }
  } 

  // change this line
  goodbye = () => {
    // Hooray!
    // this is component instance
    this.setState({
      message: 'goodbye'
    })
  }

  render() {  
    return (
      <div>
        <div>
          {this.state.message}
        </div>
        // and change this line
        <button onClick={this.goodbye}>        
          Click Me
        </button>
      </div>
    )
  }
}
```

### References
- [Video about Binding Event Handlers](https://www.youtube.com/watch?v=kVWpBtRjkCk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=14)
- [Issue with this in Callbacks](https://stackoverflow.com/a/20279485/12777044)
- [Behavior of this Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
