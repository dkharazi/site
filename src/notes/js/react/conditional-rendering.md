---
title: "Conditional Rendering with Hooks"
draft: false
weight: 26
katex: true
---

### Illustrating Conditional Rendering without Hooks
- Here, we have a class component
- The state variable `count` is initialized to 0
- The state variable `name` is initialized to an empty name
- In the render method, we have a button element
- For the button element, we add an event handler for any `onclick` event

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState != this.state.count) {
      document.title = `Clicked ${this.state.count}` times
    }
  }

  addCount = () => {
    this.setState({count: this.state.count+1})
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={changeName}
        />
        <button onClick={addCount}>
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}
```

### Illustrating Conditional Rendering with Hooks
- Using the `useEffect` hook, we can achieve a similar conditional rendering as the one above
- We can run `useEffect` only when the `count` value changes
- In class components, we must add a check for this condition
- This pattern is so common, where the React team decided to build conditional rendering into the `useEffect` hook
- In particular, to conditionally execute an effect, we can pass in a second parameter to the `useEffect` hook
- This parameter is an array that only checks specified props/state
- The following is an example of this:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Second parameter is the state value count,
  // since we only want to change title when
  // count is updated
  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count])

  const addCount = () => {
    setCount(count+1);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={changeName}
      />
      <button onClick={addCount}>
        Click {count} times
      </button>
    </div>
  )
}
```

### Mimicking `componentDidMount` with `useEffect`
- By specifying an empty array in the second parameter for `useEffect`, we can recreate the functionality for `componentDidMount`
- The following is an example of this:

```jsx
function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveMouse = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }

  // We tell React this effect doesnt
  // depend on any props or state
  useEffect({
    window.addEventListener('mousemove', moveMouse)
  }, [])

  return (
    <div>
      X: {x} Y: {y}
    </div>
  )
}
```

### Tips when Using `useEffect`
- To recreate functionality of `componentDidMount`, specify an empty dependency array that is the second parameter
- To recreate functionality of `componentDidUnmount`, return a function executed when unmounting in `useEffect`
- Be careful about specifying states/props in the dependency array
- Organize multiple effects in separate `useEffect` functions for any single component

### References
- [Video about Conditional Rendering with useEffect](https://www.youtube.com/watch?v=8DYlzVUTC7s&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=51)
- [Video about Running Effects Once](https://www.youtube.com/watch?v=BH4xvzHa7H8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=52)
- [Video about Cleaning up with useEffect Hook](https://www.youtube.com/watch?v=DTlmk6QeOHY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=53)
- [Video about Mistakes with useEffect Hook](https://www.youtube.com/watch?v=SP-NrbQHFww&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=54)
- [Effect Hooks in React Docs](https://reactjs.org/docs/hooks-effect.html)
