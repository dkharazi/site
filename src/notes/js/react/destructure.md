---
title: "Destructuring Properties"
draft: false
weight: 3
katex: true
---

### Sample `Greet.js` Component
```js
const Greet = props => {
  return (
    <div>
      <h1>
        Hello {props.nickName} or {props.firstName};
      </h1>
    </div>
  )
}
```

### Destructuring Properties in Parameters
```js
const Greet = ({nickName, firstName}) => {
  return (
    <div>  
      <h1>
        Hello {nickName} or {firstName};
      </h1>
    </div>
  )
}
```

### Destructuring Properties in the Function Body
```js
const Greet = props => {
  const {nickName, firstName} = props;
  return (
    <div>
      <h1>
        Hello {nickName} or {firstName};
      </h1>
    </div>
  )
}
```

### References
- [Video about Destructuring Properties](https://www.youtube.com/watch?v=5_PdMS9CLLI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=12)
