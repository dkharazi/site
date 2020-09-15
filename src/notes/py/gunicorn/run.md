---
title: "Basic Usage"
draft: false
weight: 2
katex: true
---

### Motivating Gunicorn
- We can run Gunicorn to integrate with popular frameworks
- These frameworks include:
	- Django
	- Flask
	- Pyramid
	- etc.
- Gunicorn is accessible via command line scripts

### Describing its Basic Usage
- Gunicorn commands follow this format:

```bash
$ gunicorn [OPTIONS] APP_MODULE
```

- Here, `APP_MODULE` is formatted as `$(MODULE_NAME):$(VARIABLE_NAME)`
- Then, the `MODULE_NAME` refers to a full dotted path
- And, the `VARIABLE_NAME` refers to a WSGI callable
- This callable should be found in the specified module


### Example of Basic Gunicorn Setup
- Suppose we have the following Python function:

```python
# test.py
>>> def app(env, start_response):
...     data = b'Hello World!'
...     status = '200 OK'
...     response_headers = [
...         ('Content-type', 'text/plain'),
...         ('Content-Length', str(len(data)))
...         ]
...     start_response(status, response_headers)
...     return iter([data])
```

- We can run the app with the following command

```bash
$ gunicorn --workers=2 test:app
```

### Example of Application Factory
- The variable name can also be a function call
- In this case, the name will be imported from the module
- Then, the name will be called to get the application object
- This is commonly referred to as the *application factory* pattern
- The following is an example of this:

```python
>>> def create_app():
...     app = FrameworkApp()
...     ...
...     return app
```

- We can run the WSGI callable with the following command

```sh
$ gunicorn --workers=2 'test:create_app()'
```

### Listing Common Arguments
- Positional and keyword argument can be passed
- However, this is not recommended
- Instead, these configurations should be loaded from environment variables
- The following are commonly used arguments:
	- `-c CONFIG` or `--config=CONFIG`
		- Specifies a config file in the form of `$(PATH)`
	- `-b BIND` or `--bind=BIND`
		- Specifies a server socket to bind
		- Server sockets are in the form of `$(HOST)`
		- An IP is a valid `($HOST)`
	- `-w WORKERS` or `--workers=WORKERS`
		- Specifies the number of worker processes
		- This number should be between $2-4$ workers per core
	- `-k WORKERCLASS` or `--worker-class=WORKERCLASS`
		- Specifies the type of worker process to run
		- It is in the form of `($NAME)`
		- `NAME` defaults to `sync`
		- Other options include `eventlet`, `gevent`, etc.
	- `-n APP_NAME` or `--name=APP_NAME`
		- Specifies the name of the Gunicorn process

### Describing Integration with Django
- Gunicorn provides integration with Django
- Gunicorn looks for a WSGI callable named `application` if unspecified
- For a typical Django project, invoking Gunicorn looks like:

```sh
$ gunicorn myproject.wsgi
```

- The `-env` option is used to load options
- An example of this is the following:

```sh
$ gunicorn --env DJANGO_SETTINGS_MODULE=p.settings p.wsgi
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/run.html#)
