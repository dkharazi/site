---
title: "Fragments"
draft: false
weight: 13
katex: true
---

### Wrapping JSX in `<div>` Tag
- Up until now, we've been wrapping JSX elements in `<div>` tags
- Specifically, we do this when we want to return multiple elements
- In order to do this, we've needed to enclose these elements within a div element
- The following is an example of this:

```jsx
function Demo() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello Again</h2>
    </div>
  )
}
```

### Using React Fragments
- To prevent the use of unnecessary div elements, we can use Fragments
- In React, Fragments allow a component to return multiple elements
- The following is an example of this:

```jsx
function Demo() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h2>Hello Again</h2>
    </React.Fragment>
  )
}
```

### Use Case: Table and Column Components
```jsx
// Column.js
function Column() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Address</td>
    </React.Fragment>
  )
}

// Table.js
function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Column />
        </tr>
      </tbody>
    </table>
  )
}
```

### References
- [Video about Fragments in React](https://www.youtube.com/watch?v=bHdh1T0-US4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=25)
- [Fragments in React Docs](https://reactjs.org/docs/fragments.html)
- [Example of Column Component](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/advanced-guide-demo/src/components/Columns.js)
- [Example of Table Component](https://github.com/gopinav/React-Tutorials/blob/master/React%20Fundamentals/advanced-guide-demo/src/components/Table.js)
