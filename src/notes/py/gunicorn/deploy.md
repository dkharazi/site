---
title: "Deployment"
draft: false
weight: 15
katex: true
---

### Describing an Nginx Configuration
- Gunicorn should sit behind a proxy server
- Nginx is one of the most popular HTTP proxies
- [This configuration file](https://docs.gunicorn.org/en/stable/deploy.html#id5) is fast for clients with Nginx

### Using a `Virtualenv`
- Typically, we should serve an app from a virtual environment
- To do this, we should install Gunicorn directly into `Virtualenv`
- This will create a set of Gunicorn scripts for that Virtualenv
- These can be used to run applications normally
- With `Virtualenv` installed, we can run:

```sh
$ mkdir ~/venvs/
$ virtualenv ~/venvs/webapp
$ source ~/venvs/webapp/bin/activate
$ pip install gunicorn
$ deactivate
```

- To activate a virtual environment, we can run:

```sh
$ source ~/venvs/webapp/bin/activate
$ pip install -I gunicorn
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/deploy.html)
