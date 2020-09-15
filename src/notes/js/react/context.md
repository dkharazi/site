---
title: "Context"
draft: false
weight: 21
katex: true
---

### Motivating Contexts in React
- Context is used for passing data through the component tree without passing props down manually
- In React applications, data is passed parent-to-child via props
- However, this can become cumbersome for certain props:
	- Locale preferences
	- UI themese
- These props are required by many components within an application

### Use Cases for Context
- Context is used for sharing data that may be considered as *global* for a tree of React components
- The following are a few examples:
	- Authenticated user
	- Theme
	- Preferred language
	- etc.
- Essentially, context is used when data needs to be accessed by many components at different nesting levels
- It should be used sparingly, since reusing components becomes difficult
- If we're only interested in avoiding passing props through many levels, then component composition is often a simpler

### References
- [Video about Use Cases of Context](https://www.youtube.com/watch?v=j3j8St50fNY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=38)
- [Video about Defining Context in React](https://www.youtube.com/watch?v=lTjQjWemKgE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=39)
- [Video about Details for Context in React](https://www.youtube.com/watch?v=A9WlkhdLnn0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=40)
- [Sample Code for Contexts in React](https://github.com/gopinav/React-Tutorials/tree/master/React%20Fundamentals/advanced-guide-demo/src/components)
- [Context in React Docs](https://reactjs.org/docs/context.html)
