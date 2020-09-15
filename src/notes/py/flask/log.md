---
title: "Logging"
draft: false
weight: 4
katex: true
---

### Describing Logging in Flask
- Flask uses the standard Python `logging` module
- Messages are logged with `app.logger`
- This takes the same name as `app.name`
- The following is an example of this:

```python
>>> @app.route('/login', methods=['POST'])
>>> def login():
...     user = get_user(request.form['username'])
...     if user.check_password(request.form['password']):
...         login_user(user)
...         app.logger.info('%s success', user.username)
...         return redirect(url_for('index'))
...     else:
...         app.logger.info('%s failed', user.username)
...         abort(401)
```

### Basic Configuration
- Logging should happen at the start of a program
- The logger should be configured before the application object is created
- This is an example of logging configuration:

```python
>>> from logging.config import dictConfig

>>> dictConfig({
...     'version': 1,
...     'formatters': {'default': {
...         'format': 'message'
...     }},
...     'handlers': {'wsgi': {
...         'class': 'logging.StreamHandler',
...         'stream': 'ext://flask.logging.ers',
...         'formatter': 'default'
...     }},
...     'root': {
...         'level': 'INFO',
...         'handlers': ['wsgi']
...     }
... })

>>> app = Flask(__name__)
```

### References
- [Basic Logging Configurations](https://flask.palletsprojects.com/en/1.1.x/logging/)
