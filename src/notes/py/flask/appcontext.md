---
title: "Application Contexts"
draft: false
weight: 8
katex: true
---

### Describing the Application Context
- An application context tracks application-level data from:
	- A request
	- A CLI command
	- Other activity
- Flask avoids passing an application to each function
- It does this by creating objects `g` and `current_app`
- These are proxies that can be accessed at any point

### Issue with Importing `app` Instances
- Every `Flask` application object has attributes
- The `config` attribute is one example
- Attributes are useful to access within views and CLI commands
- However, importing an `app` instance within a module is prone to circular imports
- An `app` instance can't be imported using the [app factory pattern](https://flask.palletsprojects.com/en/1.1.x/patterns/appfactories/)
- Flask solves this problem with the *application context*

### The Purpose of the Application Context
- With application contexts, we don't refer to an `app` directly
- Instead, we use a `current_app` proxy
- This points to the application handling the current activity
- Flask automatically pushes an application context when handling a request
- The following functions have access to `current_app`:
	- View functions
	- Error handlers
	- Other functions

### Defining the Structure of Application Contexts
- There is a stack that manages application contexts
- This stack is referred to as the application context stack
	- In the code, this is `_app_ctx_stack`
- Eac element in the stack is a single application context
	- In the code, this is an `AppContext` class
- Each application context is essentially a list of two objects:
	- A single `g` object
	- A single `current_app` object

### Implementing an Application Context in Flask
- Flask needs a `Flask` object to create an application context
- Flask needs an environment dictionary to create a request context
- The environment dictionary has all the client data and is taken from the browser
- The applications and request context are both created simultaneously
- The steps include the following:
	1. A `Flask` object is created
	2. An application context is created when an `app` variable is assigned
	3. A request context is then created when getting an environment dictionary
	4. View functions are invoked
	5. Gain access to objects `g`, `current_app`, `request`, and `session`

### Lifetieme of the Context
- The application context is created and destroyed as necessary
- A Flask application begins by handling a request
- Then, it pushes an application context and a request context
- Once a request ends, it does the following:
	- Pops the request context
	- Then, pops the application context
- Typically, an application context will have the same lifetime as a request

### Storing Data with the Application Context
- The application context is used for storing common data
- Specifically, this data refers to a request or CLI command
- Flask provides the `g` object for this purpose
	- `g` stands for `global`
	- This refers to data being global *within* a context
- The data on `g` is lost after the context ends
- Implying, it is not used for storing data between requests
	- To store data across requests, we can use `session` or store data in a database
- It is a simple namespace object that has the same lifetime as an application context

### References
- [Basics of the Application Context](https://flask.palletsprojects.com/en/1.1.x/appcontext/)
- [Describing App Factory Patterns](https://flask.palletsprojects.com/en/1.1.x/patterns/appfactories/)
