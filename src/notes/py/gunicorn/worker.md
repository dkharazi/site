---
title: "Worker Processes"
draft: false
weight: 13
katex: true
---

### Describing the `workers` Setting
- The setting in the configuration file is:
	- `workers`
- The setting in the CLI is:
	- `--workers INT`
- It defaults to `1`
- This setting specifies the number of worker processes for handling requests
- Generally, this parameter is in the range of:

$$
(2 \times numcores) + 1
$$

- Here, $n$ is some number between $2$ and $4$
- We'll want to adjust $n$ to find the $n$ that best handles our application's work load

### Describing the `worker_class` Setting
- The setting in the configuration file is:
	- `worker_class`
- The setting in the CLI is:
	- `--worker-class STRING`
- It defaults to `sync`
- This setting specifies the types of workers
- Some valid types of workers are:
	- `sync`
	- `eventlet`
	- `gevent`
	- `tornado`
	- `gthread`

### Describing the `threads` Setting
- The setting in the configuration file is:
	- `threads`
- The setting in the CLI is:
	- `--threads INT`
- It defaults to `1`
- This setting specifies the number of threads per worker
- These threads are used for handling requests
- This parameter only goes into effect when `gthread` is the `worker_class`

### Describing the `worker_connections` Setting
- The setting in the configuration file is:
	- `worker_connections`
- The setting in the CLI is:
	- `--worker-connections INT`
- It defaults to `1000`
- This setting specifies the maximum number of simulataneous clients
- This setting only affects the `eventlet` and `gevent` worker types

### Describing the `max_requests` Setting
- The setting in the configuration file is:
	- `max_requests`
- The setting in the CLI is:
	- `--max-requests INT`
- It defaults to `0`
- This setting specifies the number of requests that a worker will process before restarting
- Since the default is $0$, the restarts are disabled
- This helps limit the damage of memory leaks

### Describing the `max_requests_jitter` Setting
- The setting in the configuration file is:
	- `max_requests_jitter`
- The setting in the CLI is:
	- `--max-requests-jitter INT`
- It defaults to `0`
- This setting specifies the maximum jitter to add to `max_requests`
- The jitter causes the restart per worker to be randomized by `randint(0, max_requests_jitter)`
- This is used to avoid workers from restarting simultaneously

### Describing the `timeout` Setting
- The setting in the configuration file is:
	- `timeout`
- The setting in the CLI is:
	- `--timeout INT`
- It defaults to `30`
- This setting specifies the seconds for which workers need to be silent until they are killed and restarted
- Generally, this is set to $30$ seconds

### Describing the `graceful_timeout` Setting
- The setting in the configuration file is:
	- `graceful_timeout`
- The setting in the CLI is:
	- `--graceful-timeout INT`
- It defaults to `30`
- This setting specifies the timeout needed for greaceful workers to restart
- After receiving a restart signal, workers have this much time to finish serving requests
- Workers still alive after the timeout are restarted

### Describing the `keepalive` Setting
- The setting in the configuration file is:
	- `keepalive`
- The setting in the CLI is:
	- `--keep-alive INT`
- It defaults to `2`
- This setting specifies the seconds that requests should be waited on until blocked
- Specifically, this refers to a keep-alive connection
- Generally, this is set to $1-5$ seconds

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#worker-processes)
- [Advice for Number of Workers and Threads](https://stackoverflow.com/a/41696500/12777044)
