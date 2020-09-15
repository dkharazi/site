---
title: "Server Socket"
draft: false
weight: 12
katex: true
---

### Describing the `bind` Setting
- The setting in the configuration file is:
	- `bind`
- The setting in the CLI is:
	- `--bind ADDRESS`
- It defaults to `['127.0.0.1:8000']`
- This setting specifies the host socket
- It is a string in the form of `HOST:PORT`
- An IP is a valid `HOST`

### Describing the `backlog` Setting
- The setting in the configuration file is:
	- `backlog`
- The setting in the CLI is:
	- `--backlog INT`
- It defaults to `2048`
- This setting specifies the maximum number of pending connections 
- This refers to the number of clients that can be waiting
- Exceeding this number results in the client getting an error when attempting to connect
- Generally, this is set in the range of $64-2048$

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#server-socket)
