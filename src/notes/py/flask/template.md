---
title: "Templates"
draft: false
weight: 2
katex: true
---

### Motivating Template Rendering
- Generating HTML from within Python is not fun
- It can also be cumbersome
- This is because HTML escaping needs to be done manually
- To avoid this issue, the Jinja2 template engine is configured automatically in Flask

### Describing Template Rendering
- The `render_template` method is used to render templates
- It requires the following as arguments:
	- The name of the template
	- The variables passed to the template engine
- The following is an example of rendering a template named `hello.html`:

```python
>>> from flask import render_template

>>> @app.route('/hello/')
>>> @app.route('/hello/<name>')
>>> def hello(name=None):
...     return render_template('hello.html', name=name)
```

### Handling Templates in Flask
- First, flask looks for templates in the `templates` folder
- If we're using a module:

```
FlaskApp/
├── application.py
└── templates/
    └── hello.html
```

- If we're using a package:

```
FlaskApp/
└── application/
    ├── __init__.py
    └── templates/
        └── hello.html
```

- This is an example of a Jinja2 template:

```html
<!doctype html>
<title>Hello from Flask</title>
{% if name %}
  <h1>Hello {{ name }}!</h1>
{% else %}
  <h1>Hello, World!</h1>
{% endif %}
```

- Inside templates, we also have access to objects:
	- `request`
	- `session`
	- `g`

### Benefits of Templates
- Templates are especially useful if inheritance is used
- Template inheritance refers to building parent-child templates
- These individual templates represent pieces of a larger template
- For example, we can use template inheritance to keep certain elements on each page:
	- Headers
	- Navigations
	- Footers
	- etc.
- Automatic escaping is enabled
- This ensures security on our sites

### References
- [Describing Rendering of Templates](https://flask.palletsprojects.com/en/1.1.x/quickstart/#rendering-templates)
- [Jinja2 Template Documentation](https://jinja.palletsprojects.com/en/2.11.x/templates/)
- [Describing Template Inheritance](https://flask.palletsprojects.com/en/1.1.x/patterns/templateinheritance/#template-inheritance)
