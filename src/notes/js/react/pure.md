---
title: "Pure Components"
draft: false
weight: 13
katex: true
---

### Defining Pure Components
- They are created by extending the `PureComponent` class
- A PureComponent implements the `shouldComponentUpdate` lifecycle method
- A shallow comparison is performed on props/state of components
- If there isn't a difference, the component isn't rerendered
- Implying, a pure component is used for performance boosts
- Children components may be pure components to avoid unexpected behavior
- The state shouldn't be mutated for pure components
- A new object should be returned that reflects the new state

### Illustrating a Parent Component
```js
class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mike'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Mike'
      })
    }, 2000)
  }

  render() {
    console.log('Parent Comp render');
    return (
      <div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

```

### Illustrating a Regular Component
```js
class RegComp extends Component {
  render() {
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}
```

### Illustrating a Pure Component
```js
class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}
```

### Illustrating the Difference
- A regular component doesn't implement the `shouldComponentUpdate` method
- For a regular component, it always returns true by default
- A pure component implements the `shouldComponentUpdate` method with a shallow props and state comparison
- For example, a shallow comparison will always return true if the strings are the same values
- However, two objects return false if they don't have the same identity

```
Parent Comp render
Reg Comp render
Pure Comp render

Parent Comp render
Reg Comp render

Parent Comp render
Reg Comp render

...
```

### References
- [Video about Pure Components in React](https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26)
- [Pure Components in React Docs](https://reactjs.org/docs/react-api.html#reactpurecomponent)
- [Code for Parent Component](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/advanced-guide-demo/src/components/ParentComp.js)
- [Code for Regular Component](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/advanced-guide-demo/src/components/RegComp.js)
- [Code for Pure Component](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/advanced-guide-demo/src/components/PureComp.js)
