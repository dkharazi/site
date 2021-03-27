---
title: "The useEffect Hook"
draft: false
weight: 25
katex: true
---

### Defining the Effect Hook
- The effect hook performs side effects
- Specifically, it performs side effects in functional components
- It is close replacement for the following:
	- componentDidMount
	- componentDidUpdate
	- componentWillUnmount

### What Does `useEffect` Do?
- This hook tells React what to do after each render
- React will remember the function you passed
- This function is referred to as an *effect*
- Then, React calls the effect after performing the DOM updates
- In this effect, we may call things like:
	- Setting the document title
	- Fetching data
	- Calling some imperative API

### Does `useEffect` Run after Every Render?
- By default, this hook runs after every render
- Specifically, it runs after both mouting and updating
- Instead of thinking in terms of *mounting* and *updating*, it's easier to think of effects happening *after render*
- React guarantees the DOM is updated once it runs the effects

### Illustrating Side Effects without Hooks
- Without using the `useEffect` hook, we must use class components to implement side effects
- The following is an example of this:

```jsx
class Counter extends Component {
  contructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    let title = document.title;
    title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate() {
    let title = document.title;
    title = `Clicked ${this.state.count} times`
  }

  addCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    let
    return (
      <div>
        <button onclick={addCount}>
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}
```

### Illustrating Side Effects with `useEffect`
- When specifying `useEffect`, we request execution of the function passed as an argument
- Specifically, this function is executed every time the component renders
- This hook is placed inside the component in order to easily access the component's state and props without extra code
- The following interprets the above example using the `useEffect` hook:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // Changes title during mounting and updating
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <button onclick={() => setCount(count+1)}>
        Click {count} times
      </button>
    </div>
  )
}
```

### References
- [Video about Basics of useEffect Hook](https://www.youtube.com/watch?v=06Y6aJzTmXY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=49)
- [Video about Rendering with useEffect Hook](https://www.youtube.com/watch?v=nAuWOnFMlOw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=50)
- [Video about Fetching Data with useEffect 1](https://www.youtube.com/watch?v=bYFYF2GnMy8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=55)
- [Video about Fetching Data with useEffect 2](https://www.youtube.com/watch?v=1tfd6ANaNRY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=56)
- [Video about Fetching Data with useEffect 3](https://www.youtube.com/watch?v=zm_09NER-R0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=57)
- [Effect Hooks in React Docs](https://reactjs.org/docs/hooks-effect.html)
