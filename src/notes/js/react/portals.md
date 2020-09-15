---
title: "Portals"
draft: false
weight: 16
katex: true
---

### Defining Portals in React
- Portals provide a way to render children into a DOM node that exists outside of the DOM hierarchy of the parent component
- Normally, child components are mounted into the DOM of the nearest parent component
- The following illustrates this notion:

```js
render() {
  // React mounts a new div 
  // and renders the children into it
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```

- However, sometimes it’s useful to insert a child into a different location in the DOM
- When using portals, React doesn't create a new div
- Instead, it renders the children into `domNode`
- Here, `domNode` is any valid DOM node
- The following illustrates this notion:

```js
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

### Use Case of Portals
- Typically, portals can be used when a parent component has:
	- `overflow: hidden`
	- `z-index`
- We may need the child component to *break out* of its container
- For example, dialogs, hovercards, and tooltips

### Illustrating Portals in React

```html
<!-- index.html -->
<html>
  <body>
    <div id="root"></div>
    <div id="portal-root"></div>
  </body>
</html>
```

```js
// App.js
class App extends Component {
  render() {
    return(
      <div className="App">
        <PortalDemo />
      </div>
    )
  }
}
```

```js
// PortalDemo.js
function PortalDemon() {
  return ReactDOM.createPortal(
    <h1>Hello World</h1>,
    document.getElementById('portal-root')
  )
}
```

```html
<!-- Output -->
<html>
  <body>
    <div id="root">
      <div class="App"></div>
    </div>
    <div id="portal-root">
      <h1>Hello World</h1>
    </div>
  </body>
</html>
```

### References
- [Video about Portals in React](https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31)
- [Portals in React Docs](https://reactjs.org/docs/portals.html)
- [Example of Portals for Modals](https://codesandbox.io/s/00254q4n6p)
