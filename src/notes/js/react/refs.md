---
title: "Refs"
draft: false
weight: 16
katex: true
---

### Motivating Refs in React
- Up until now, the only way for a parent component to interact with its children is via props
- In this case, we'd modify a child by rerendering it with new props
- Props are used to pass static parameters to components
- For example, we can pass a size or name from a parent component to a child component
- Refs are used to access the real DOM (not just virtual DOM)
- Specifically, refs are used for accessing a particular DOM

### Use Cases for Refs
- Managing focus of a DOM
- Managing text selection
- Managing media playback
- Triggering animations
- Integrating with third-party DOM libraries

### Use Case 1: Focusing Text Field

```jsx
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // focuses field after mounting and rendering
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}
```

### Use Case 2: Fetching Input Value

```jsx
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    // alerts input value from buttom DOM
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>
          Click
        </button>
      </div>
    )
  }
}
```

### Use Case 3: Adding a Ref to DOM Elements

```jsx
class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

### Use Case 4: Adding a Ref to Class Components

```jsx
class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
```

### References
- [Video about the Basics of Refs](https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=28)
- [Video about Adding Refs to Class Components](https://www.youtube.com/watch?v=8aCXVC9Qmto&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=29)
- [Video about Forwarding Refs](https://www.youtube.com/watch?v=RLWniwmfdq4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=30)
- [Details about Refs in the React Docs](https://reactjs.org/docs/refs-and-the-dom.html)
- [Comparing Props and Refs in React](https://stackoverflow.com/a/31770187/12777044)
