---
title: "Default Binding"
draft: false
weight: 3
katex: true
---

### Describing Default Binding
- Default binding occurs when `this` is the global context
- And `this` is the global object when a function is invoked without either implicit or explicit binding
- Meaning, it is the global object when we aren't using:
	- A dot
	- The `.call()` method
	- The `.apply()` method
	- The `.bind()` method
- The global context is used depending on where we're working
- In the browser, `this` will be the `window`
- In strict mode, the global context is undefined

### Illustrating Default Binding
```js
console.log(this);
// Window {parent: Window, opener: null, ...}
```

### References
- [Context for this Keyword](https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262)
