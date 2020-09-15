---
title: "URL Routing"
draft: false
weight: 1
katex: true
---

### Describing URL Routing
- Modern web applications use meaningful URLs to help users
- A server binds a socket to a listening web service
- The `route` decorator binds a function to a URL
- The following is an example:

```python
>>> @app.route('/')
... def index():
...     return 'Index page'

>>> @app.route('/hello')
... def hello():
...     return 'Hello world'
```

- We can also attach multiple rules to a function
- This makes part of the URL dynamic
- Specifically, these are called *variable rules*

### Describing Variable Rules
- We can add variable sections to a URL by marking sections
- We can mark secions with `<variable_name>`
- Then, a function receives the `<variable_name>` as a keyword argument
- The following is an example:

```python
>>> from markupsafe import escape
>>> @app.route(/user/<username>')
... def show_user_profile(username):
...     return 'User %s' % escape(username)
```

### Describing Redirection Behavior
- The following two rules differ in their behavior:

```python
>>> @app.route('/projects/')
... def projects():
...     return 'The project page'

>>> @app.route('/about')
... def about():
...     return 'The about page'
```

- If we access the `projects` URL:
	- Flask successfully accepts `/projects/`
	- Flask redirects `/projects` to `/projects/`
- If we access the `about` URL:
	- Flask successfully accepts `/about`
	- Flask produces a $404$ error for `/about/`
- This approach helps keep URLs unique
- This helps search engines avoid indexing the same page twice

### Describing URL Building
- The `url_for` function builds a URL to a specific function
- Its first argument is a function
- Typically, we'll prefer building URLs instead of hard-coding them
- These are some reasons:
	1. The `url_for` function is more descriptive
	2. Related URLs can be captured by one `url_for` function
	3. Related URLs can be changed in one place
	4. URL building handles escaping special characters
	5. URL building handles unicode data well
	6. The generated paths are absolute

### Describing HTTP Methods
- Web applications use different HTTP methods when accessing URLs
- A route only answers to `GET` requests by default
- We can specify additional HTTP methods using the `methods` argument
- The following provides an example of this:

```python
>>> from flask import request
>>> @app.route('/login', methods=['GET', 'POST'])
>>> def login():
...     if request.method == 'POST':
...         return do_the_login()
...     else:
...         return show_the_login_form()
```

### References
- [Defining URL Routing](https://flask.palletsprojects.com/en/1.1.x/quickstart/#routing)
- [What are Canonical URLs?](https://stackoverflow.com/a/1047459/12777044)
