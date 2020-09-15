---
title: "Server Mechanics"
draft: false
weight: 11
katex: true
---

### Describing the `preload_app` Setting
- The setting in the configuration file is:
	- `preload_app`
- The setting in the CLI is:
	- `--preload`
- It defaults to `False`
- This setting specifies whether to load application code before the worker processes are forked
- This can do the following:
	- Save RAM resources
	- Speed up server boot times

### Describing the `sendfile` Setting
- The setting in the configuration file is:
	- `sendfile`
- The setting in the CLI is:
	- `--no-sendfile`
- It defaults to `None`
- This setting specifies whether the use of `sendfile()` is disabled
- If not set, the value of the `SENDFILE` environment variable is used to enable or disable its usage

### Describing the `reuse_port` Setting
- The setting in the configuration file is:
	- `reuse_port`
- The setting in the CLI is:
	- `--reuse-port`
- It defaults to `False`
- This setting specifies whether the `SO_REUSEPORT` flag is set on the listening port

### Describing the `chdir` Setting
- The setting in the configuration file is:
	- `chdir`
- The setting in the CLI is:
	- `--chdir`
- It defaults to `/home/doc/...`
- This setting specifies a directory before apps are loaded

### Describing the `daemon` Setting
- The setting in the configuration file is:
	- `daemon`
- The setting in the CLI is:
	- `--daemon`
- It defaults to `False`
- This setting specifies whether to daemonize the Gunicorn process
- It will detach the server from the controlling terminal and enter the background

### Describing the `raw_env` Setting
- The setting in the configuration file is:
	- `raw_env`
- The setting in the CLI is:
	- `--env ENV`
- It defaults to `[]`
- This setting specifies an environment variable

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#server-mechanics)
