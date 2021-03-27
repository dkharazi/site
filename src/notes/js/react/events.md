---
title: "Basic Event Handling"
draft: false
weight: 4
katex: true
---

### Handling Events in Functional Components
```jsx
function functionClick() {
  function clickHandler() {
    console.log('Button clicked');
  }
  return (
    <div>
      <button onClick={clickHandler}>
        Click
      </button>
    </div>
  )
}
```

### Handling Events in Class Components
```jsx
class ClassClick extends Component {
  clickHandler() {
    console.log('Button clicked');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Click
        </button>
      </div>
    )
  }
}
```

### References
- [Video about Event Handling](https://www.youtube.com/watch?v=Znqv84xi8Vs&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=13)
