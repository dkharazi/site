---
title: "The useState Hook"
draft: false
weight: 23
katex: true
---

### Outlining Standard Stateful Logic
- So far, we can only implement stateful logic using class components
- Generally, any stateful logic is implemented in three steps
- There are three generic steps behind defining stateful logic:
	1. Define a class component
	2. Initialize a state variable
	3. Create a method for setting this state value using `setState`

```js
// Step 1: Define class component
class Counter extends Components {
  constructor(props) {
    super(props);

    // Step 2: Define count value in state property
    this.state = {
      count: 0;
    }
  }

  // Step 3: Define method for setting count value
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1;
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Count {this.state.count}
        </button>
      </div>
    )
  }
}
```

### Implementing Stateful Logic with Hooks
- With hooks, we can implement stateful logic using function components
- Generally, any stateful logic is implemented in three steps
- These steps behind defining stateful logic using hooks:
	1. Define a functional component
	2. Initialize a state variable using `useState`
	3. The `useState` function outputs a method for setting this state value

```js
// Step 1: Define functional component
function Counter {
  // Step 2: Initialize state variable as 0
  // Step 3: Receive setCount method for setting
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Count {count}
      </button>
    </div>
  )
}
```

### Receiving Parameters from Hook
- The `setCount` method has a few optional parameters
- Specifically, we receive a parameter for the previous value
- By using this parameter, we can implement a safer way of incrementing and decrementing our state value
- The following is an example of this:

```js
function Counter {
  const [count, setCount] = useState(0);
  let addCount = () => 
    setCount(prevCount => prevCount+1);

  return (
    <div>
      <button onClick={addCount}>
        Count {count}
      </button>
    </div>
  )
}
```

### Acceptable State Variables
- The `useState` function accepts various parameter types
- Specifically, it is able to accept an object
- Whereas the `setState` function merges changes to object values, the `useState` function doesn't do this
- Instead, it replaces any input values
- The following is an example of this:

```js
function Namer {
  let nameObj = {'firstName': '', 'lastName': ''};
  const [name, setName] = useState(nameObj);
  
  let changeFirstName = () =>
    setName({...name, firstName: 'Mike'});

  return (
    <div>
      <button onClick={changeFirstName}>
        Name {name}
      </button>
    </div>
  )
}
```

### References
- [Video about useState Hook](https://www.youtube.com/watch?v=lAW1Jmmr9hc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=45)
- [Video about useState Hook with Previous State](https://www.youtube.com/watch?v=d0plTCQgsXs&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=46)
- [Video about useState Hook with Object](https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=47)
- [Video about useState Hook with Array](https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=48)
- [Using State in the React Docs](https://reactjs.org/docs/hooks-state.html)
