---
title: "Basics of Form Handling"
draft: false
weight: 10
katex: true
---

### Defining Controlled Components
- Managing form elements in ordinary JavaScript and HTML can become complicated and tedious
- In React, we can control form elements, which includes:
	- Input elements
	- Text field elements
	- Form submission elements
- We can do this using controlled components in React

### Creating a Controlled Component for Input
- By using controlled components, the state in React represents a single source of truth for input elements
- In the example below, the `username` is a state property
- It is assigned as the value attribute of our input element
- Whenever the value is updated by a user, the new value is propagated to the `changeUser` callback
- This callback then sets the `username` to the new value

```js
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  changeUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return(
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUser}
          />
        </div>
      </form>
    )
  }
}
```

### Adding a Controlled Component for Submission

```js
class Form extends Component {
  ...

  handleSubmit = event => {
    console.log(`${this.state.username}`); 
    event.preventDefault(); 
  }

  render() {
    <form onSubmit={this.handleSubmit}>
      ...
      <button type="submit">Submit</button>
    </form
  }
}
```

### References
- [Video about Basic Form Handling](https://www.youtube.com/watch?v=7Vo_VCcWupQ&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=21)
- [Form Handling in React Docs](https://reactjs.org/docs/forms.html)
- [Detailed Example of Multiple Controlled Components](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/forms-demo/src/Form.js)
