---
title: "Configuration"
draft: false
weight: 5
katex: true
---

### Describing Configuration Handling
- Applications need some kind of configuration
- There are different settings depending on the application environment
- These settings include:
	- Toggling the debug mode
	- Setting the secret key
	- Setting environment-specific things
- Flask sets configuration values in the `config` attribute
- Specifically, there is a `config` attribute for every `Flask` object
- This is where we can set our own configurations

### Basics of Configuration
- The `config` is a subclass of a dictionary
- Implying, it can be modified like any dictionary
- The following is an example of this behavior:

```python
>>> app = Flask(__name__)
>>> app.config['TESTING'] = True
```

- Some configuration values are forwarded to the `Flask` object
- This is so we can read and write from the object
- The following is an example:

```python
>>> app.testing = True
```

- The `update` method updates multiple keys at once:

```python
>>> app.config.update(
...     TESTING=True
...     SECRET_KEY=b'_5#y2L"F4Q8z\n\xec]/'
... )
```

### Configuration Best Practices
- Create an application in a function
- Register blueprints to the application
	- This allows us to create multiple instance of our application with different configurations
	- This makes unit testing much easier
- Never write code that needs configuration at import time

### Creating Development and Production Environments
- Most applications need more than one configuartion
- There should be two separate configurations for:
	- Production
	- Development
	- Testing
- We can do either of the following approach:
1. Create separate config files

```python
>>> from config import PROD_SETTINGS
>>> from config import TEST_SETTINGS

>>> prod = Flask(__name__)
>>> prod.config.from_object('PROD_SETTINGS')

>>> test = Flask(__name__)
>>> test.config.from_object('TEST_SETTINGS')
```

2. Create configuration classes

```python
>>> class Config(object):
...     DEBUG = False
...     TESTING = False
...     DATABASE_URI = 'sqlite:///:memory:'
>>> class ProdConfig(Config):
...     DATABASE_URI = 'mysql://user@localhost/foo'
>>> class TestConfig(Config):
...     DEBUG = True

>>> prod.config.from_object('ProdConfig')
>>> test.config.from_object('TestConfig')
```

### References
- [Details about Configuration Handling in Flask](https://flask.palletsprojects.com/en/1.1.x/config/)
