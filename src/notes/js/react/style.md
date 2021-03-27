---
title: "Styling and CSS"
draft: false
weight: 9
katex: true
---

### Styling Components in React
- There are four options for styling components in React:
	- CSS stylesheets
	- Inline styling
	- CSS modules
	- CSS in JS libraries
- We'll mostly cover the first three options

### Approach 1: CSS Stylesheets
- Usually, we'll want to style a component
- To do this, a JavaScript file must depend on a CSS file:

```css
/*  myStyle.css */
.primary {
  color: blue;
}
```

- Then, we can import the CSS in any JavaScript file
- Lastly, we can specify the `className` to match elements based on the contents of their class attribute
- The following is an example of this:

```jsx
import './myStyle.css'

function Component() {
  return (
    <div>
      <h1 className='primary'>Hello World</h1>
    </div>
  )
}
```

### Approach 2: Inline Styling
- Inline style attributes can also be specified
- In React, inline styling if straightforward
- We can apply style attributes using an object:

```jsx
const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Component() {
  return (
    <div>
      <h1 style={heading}>Hello World</h1>
    </div>
  )
}
```

### Approach 3: CSS Modules
- There is a naming convention for CSS modules in React
- The file name must be suffixed with `.module.js`
- Following this approach, a CSS file must be defined:

```css
/* myStyle.module.css */
.success {
  color: green;
}
```

- Then, we can import the CSS in any JavaScript file
- Lastly, we can specify the `className` to import CSS classes from a CSS module
- The following is an example of this:

```jsx
import styles from './myStyle.module.css'

function Component() {
  return (
    <div>
      <h1 className={styles.success}>
        Hello World
      </h1>
    </div>
  )
}
```

### Comparing CSS Modules with Stylesheets
- An advantage of using a module is that classes are locally scoped
- A class from a CSS stylesheet can be used in child components
- Whereas, a class from a CSS module can only be used in the component in which it has been imported
- This is because it uses a variable for the module, which can't be referenced in other components (unless imported)
- Implying, modules can help avoid CSS conflicts

### References
- [Video about Styling and CSS in React](https://www.youtube.com/watch?v=j5P9FHiBVNo&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=20)
- [Styling and CSS in React Docs](https://reactjs.org/docs/faq-styling.html)
