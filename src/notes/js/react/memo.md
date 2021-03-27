---
title: "Memo Components"
draft: false
weight: 15
katex: true
---

### Defining Memo Components
- Memo components are similar to pure components
- However, they're used for function components instead
- `React.memo` can be used for performance boosts
- This boost comes from memoizing the results
- Meaning, React will skip rendering the component and reuse the previously rendered result
- By default, it will only perform a shallow comparison of objects in the props object
- `React.memo` only checks for prop changes

### Illustrating a Parent Component

```jsx
class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Memo'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Memo'
      })
    }, 2000)
  }

  render() {
    console.log('Parent Comp render');
    return (
      <div>
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}
```

### Illustrating a Memo Component

```jsx
function MemoComp({name}) {
  console.log('Rendering MemoComponent')
  return (
    <div>
      {name}
    </div>
  )
}
```

### References
- [Video about Memo Components in React](https://www.youtube.com/watch?v=7TaBhrnPH78&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=27)
- [React memo in the React Docs](https://reactjs.org/docs/react-api.html#reactmemo)
