---
title: "Blueprints"
draft: false
weight: 10
katex: true
---

### Describing Blueprints in Flask
- A `Blueprint` object behaves similarly as a `Flask` object
- However, a blueprint is not actually an application
- Instead, it is a *blueprint* of how to construct applications
- Blueprints don't need to implement applications or view functions
- Blueprints are registered to an application
- Blueprints achieve the following:
	- Making application components more modular
	- Supporting common patterns across applications
	- Simplifying how large applications work

### Defining the Use Cases of Blueprints
1. Factors an application into a set of blueprints
	- This is ideal for larger applications
	- As a result, a project could do the following:
		- Instantiate an application object
		- Initialize several extensions
		- Register a collection of blueprints
2. Registers a blueprint to an application
	- Registers it at a URL prefix and/or subdomain
	- Parameters in the URL become common view arguments
	- These view arguments can be used by any view function in the blueprint
3. Registers a blueprint multiple times on an application
	- To do this, it registers with different URL rules
4. Blueprints provide the following:
	- Template filters
	- Static files
	- Templates
	- Other utilities
5. Blueprints replace a need for creating multiple application objects
	- Creating many application objects require separate config files
	- Those config files then need to be managed by a WSGI
	- With blueprints, we only need to register to an application multiple times
	- This is done in the Flask code, rather than the WSGI

### Summarizing the Use Cases of Blueprints 
- A blueprint in Flask is not a pluggable app
- Meaning it is not actually an application
- Instead, it’s a set of operations registered to an application
- Blueprints can be registered to an app multiple times
- Blueprints provide shareable application configurations
- They can change an registered application object as necessary
- However, blueprints can't be unregistered to an application without destroying the application

### Illustrating the Concept of Blueprints
- Essentially, blueprints record operations
- Then, they execute them when registered to an application
- The following is a basic blueprint:

```python
# myapp.py
>>> from flask import Blueprint
>>> from flas import render_template, abort
>>> from jinja2 import TemplateNoteFound

>>> mypage = Blueprint('mypage',
...                    __name__,
...                    template_folder='templates')

>>> @mypage.route('/', defaults={'page': 'index'})
... @mypage.route('/<page>')
... def show(page):
...     try:
...         return render_template('pages/%s.html' % page)
...     except TemplateNotFound:
...         abort(404)
```

- Here, we create a `mypage` blueprint
- The `mypage.route` decorator binds the `show` function to a URL
- Then, the blueprint will record the intention of registering the function `show` to the application
- It will prefix the endpoint of `show` with `mypage`
- This is because it was given to the `Blueprint` constructor
- The blueprint’s name does not modify the URL, only the endpoint

### Registering Blueprints in Flask
- The `register_blueprint` method registers blueprints to apps
- The following is an example of registering a blueprint:

```python
>>> from flask import Flask
>>> from myapp.mypage import mypage

>>> app = Flask(__name__)
>>> app.register_blueprint(mypage)
```

- The registered rules on the application can be accessed
- The following is an example of the rules:

```python
>>> app.url_map
Map([
  <Rule '/static/<file>' (HEAD, OPTIONS, GET) -> static>,
  <Rule '/<page>' (HEAD, OPTIONS, GET) -> mypage.show>,
  <Rule '/' (HEAD, OPTIONS, GET) -> mypage.show>
])
```

- The first rule is the application itself
- The two other rules refer to the `show` function
- Notice, the function is prefixed by the blueprint `mypage`

### References
- [Basics of Blueprints in Flask](https://flask.palletsprojects.com/en/1.1.x/blueprints/)
