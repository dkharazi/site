---
title: "Server Hooks"
draft: false
weight: 10
katex: true
---

### Describing the `on_starting` Setting
- The setting in the configuration file is:
	- `on_starting`
-  The setting can be defined using the function:

```python
>>> def on_starting(server):
...     pass
```

- This function is called before the master process is initialized
- It needs to accept a single instance variable

### Describing the `on_reload` Setting
- The setting in the configuration file is:
	- `on_reload`
-  The setting can be defined using the function:

```python
>>> def on_reload(server):
...     pass
```

- This function recycles workers during a reload
- It needs to accept a single instance variable 

### Describing the `when_ready` Setting
- The setting in the configuration file is:
	- `when_ready`
-  The setting can be defined using the function:

```python
>>> def when_ready(server):
...     pass
```

- This function is called after the server is started
- It needs to accept a single instance variable 

### Describing the `pre_fork` Setting
- The setting in the configuration file is:
	- `pre_fork`
-  The setting can be defined using the function:

```python
>>> def pre_fork(server, worker):
...     pass
```

- This function is called before a worker is forked
- It needs to accept two instance variables

### Describing the `post_fork` Setting
- The setting in the configuration file is:
	- `post_fork`
-  The setting can be defined using the function:

```python
>>> def post_fork(server, worker):
...     pass
```

- This function is called after a worker is forked
- It needs to accept two instance variables

### Describing the `post_worker_init` Setting
- The setting in the configuration file is:
	- `post_worker_init`
-  The setting can be defined using the function:

```python
>>> def post_worker_init(worker):
...     pass
```

- This function is called after a worker has initialized the application
- It needs to accept a single instance variable

### Describing the `worker_init` Setting
- The setting in the configuration file is:
	- `worker_init`
-  The setting can be defined using the function:

```python
>>> def worker_init(worker):
...     pass
```

- This function is called after a worker exited
- It needs to accept a single instance variable for the initialized Worker

### Describing the `worker_abort` Setting
- The setting in the configuration file is:
	- `worker_abort`
-  The setting can be defined using the function:

```python
>>> def worker_abort(worker):
...     pass
```

- This function is called when a worker is aborted
- It needs to accept a single instance variable for the initialized Worker

### Describing the `pre_exec` Setting
- The setting in the configuration file is:
	- `pre_exec`
-  The setting can be defined using the function:

```python
>>> def pre_exec(server):
...     pass
```

- This function is called just before a new master process is forked
- It needs to accept a single instance variable

### Describing the `pre_request` Setting
- The setting in the configuration file is:
	- `pre_request`
-  The setting can be defined using the function:

```python
>>> def pre_request(worker, req):
...     worker.log.debug("%s %s" % (req.method, req.path))
```

- This function is called just before a worker processes the request
- It needs to accept a two instances that are a worker and request

### Describing the `post_request` Setting
- The setting in the configuration file is:
	- `post_request`
-  The setting can be defined using the function:

```python
>>> def post_request(worker, req, environ, resp):
...     pass
```

- This function is called after a worker processes the request
- It needs to accept a two instances that are a worker and request

### Describing the `child_exit` Setting
- The setting in the configuration file is:
	- `child_exit`
-  The setting can be defined using the function:

```python
>>> def child_exit(server, worker):
...     pass
```

- This function is called just after a worker has exited in the master process
- It needs to accept a two instances that are a server and worker

### Describing the `worker_exit` Setting
- The setting in the configuration file is:
	- `worker_exit`
-  The setting can be defined using the function:

```python
>>> def worker_exit(server, worker):
...     pass
```

- This function is called after a worker has been exited in the worker process
- It needs to accept a two instances that are a server and worker

### Describing the `nworkers_changed` Setting
- The setting in the configuration file is:
	- `nworkers_changed`
-  The setting can be defined using the function:

```python
>>> def nworkers_changed(server, new_value, old_value):
...     pass
```

- This function is called after *num_workers* has been changed
- It needs to accept a single instance
- It also needs to accept two integers
	- The number of workers before the change
	- The number of workers after the change

### Describing the `on_exit` Setting
- The setting in the configuration file is:
	- `on_exit`
-  The setting can be defined using the function:

```python
>>> def on_exit(server):
...     pass
```

- This function is called before exiting Gunicorn
- It needs to accept a single instance variable

### Example of Server Hook
- A `.py` server file can be defined as:

```python
# server.py
>>> def on_starting(server):
...     app.logger.info('Starting Server')
```

- A `.py` configuration file can be defined as:

```python
# config.py
>>> import server
>>> on_starting = server.on_starting
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#server-hooks)
- [How to Use Server Hooks](https://github.com/benoitc/gunicorn/issues/2136#issuecomment-542907480)
