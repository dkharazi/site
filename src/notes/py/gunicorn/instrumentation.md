---
title: "Instrumentation"
draft: false
weight: 14
katex: true
---

### Logging Metrics in Gunicorn
- Gunicorn provides an optional instrumentation of:
	- The arbiter
	- The workers
- This is provided using the `statsD` protocol over UDP
- Specifically, Gunicorn uses the `gunicorn.instrument.statsd` module
- As a result, Gunicorn becomes a `statsD` client
- Using UDP ensures the following:
	- Gunicorn is isolated from the receiving end of `statsD`
	- Gunicorn is not held up by a slow `statsD` consumer

### Usage of `statsD` in Gunicorn
- An example of the `statsD` server is the following:

```sh
$ gunicorn --statsd-host=localhost:8125 ...
```

### Details about the `statsD` Logger
- The `statsD` logger overrides `gunicorn.glogging.Logger`
- This tracks all of the requests
- The following metrics are generated:
	- `gunicorn.requests`: Request rate per seconds
	- `gunicorn.request.duration`: Histogram of request duration (in milliseconds)
	- `gunicorn.workers`: Number of workers managed by the arbiter (gauge)
	- `gunicorn.log.critical`: Rate of critical log messages
	- `gunicorn.log.error`: Rate of error log messages
	- `gunicorn.log.warning`: Rate of warning log messages
	- `gunicorn.log.exception`: Rate of exceptional log messages

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/instrumentation.html)
