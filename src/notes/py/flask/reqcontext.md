---
title: "Request Contexts"
draft: false
weight: 9
katex: true
---

### Describing the Request Context
- The request context tracks the request-level data during a request
- Flask avoids passing a request to each function
- It does this by creating objects `request` and `session`
- This is similar to the the application context

### Purpose of the Context
- A `Flask` application handles a request
- It creates a `Request` object based on the environment it received from the WSGI server
- A worker handles only one request at a time
- The request data can be considered global to that worker during that request
- Flask automatically pushes a request context when handling a request
- The following functions have access to the `request` proxy:
	- View functions
	- Error handlers
	- Other functions

### Motivating the Lifetime of the Context
- A flask application handles a request
- Then, it pushes a request context
- When the request ends, then the request:
	- Pops the request context
	- Pops the application context
- The context is unique to each thread
- The `request` proxy cannot be passed to another thread
- The other thread will have a different context stack
- Specifically, it doesn't know about the request that the parent thread was pointing to


### Defining the Structure of Request Contexts
- There is a stack that manages request contexts
- This stack is referred to as the request context stack
	- In the code, this is `_request_ctx_stack`
- Each element in the stack is a single request context
	- In the code, this is an `RequestContext` class
- Each request context is essentially a list of two objects:
	- A single `request` object
	- A single `session` object
- In the code, these are represented using the `Request` and `Session` classes

### Implementing a Request Context in Flask
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

### Defining the Lifetime of Request Contexts
- A request context is created based on the following steps:
	- WSGI server forwards request to flask app 
	- Flask app receives an HTTP request 
	- Flask app assigns the HTTP request to a `request` object
	- Then, Flask assigns the `request` object to a request context
- The `Request` class is used to create a `request` object
- The `RequestContext` class represents a request context

### Methods for Creating Request Contexts
- A request context is **manually** created in two ways:
	- `with app.request_context(environ)`
		- This manually creates a real request context
		- This can be difficult and unnecessary
		- See PEP3333 for more information
	- `with app.test_request_context('/')`
		- This manually creates an artifical request context
		- This should not be used for production
		- This should only be used for testing
- Essentially, a `session` is a view of the session cookies
- These cookies are stored in the request context
- A `session` is represented as a dictionary

### Notes on Proxies
- Some of the objects provided by Flask are proxies to other objects
- The proxies are accessed in the same way for each worker thread
- However, they point to the unique object bound to each worker
- These workers are behind the scenes
- There is a slight distinction between objects and proxies
- This distinction should be noted for the following:
	- The proxy objects can't fake their type as the actual objects
	- References to proxied object is needed in some situations

### References
- [Basics of Request Contexts](https://flask.palletsprojects.com/en/1.1.x/reqcontext/)
