---
title: "Logging"
draft: false
weight: 6
katex: true
---

### Describing the `accesslog` Setting
- The setting in the configuration file is:
	- `accesslog`
- The setting in the CLI is:
	- `--access-logfile FILE`
- It defaults to `None`
- This setting specifies the file used for logging access
- If `-` is specified, then access logging is written to stdout

### Describing the `disable_redirect_access_to_syslog` Setting
- The setting in the configuration file is:
	- `disable_redirect_access_to_syslog`
- The setting in the CLI is:
	- `--disable-redirect-access-to-syslog`
- It defaults to `False`
- This setting specifies whether to redirect access logs to syslog
- The syslog protocol transports messages to a logging server

### Describing the `access_log_format` Setting
- The setting in the configuration file is:
	- `access_log_format`
- The setting in the CLI is:
	- `--access-logformat STRING`
- It defaults to `%(h)s %(l)s %(u)s %(t)s '%(r)s' %(s)s %(b)s '%(f)s' '%(a)s'`
- This setting specifies the access log format
- Refer to this [list of identifiers](https://docs.gunicorn.org/en/stable/settings.html#access-log-format) for more information
- The following identifers are a few popular ones:

| **identifier** | **description**                      |
| -------------- | ------------------------------------ |
| h              | remote address                       |
| l              | `-`                                  |
| u              | user name                            |
| t              | date of the request                  |
| r              | status line (e.g. `GET / HTTP/1.1` ) |
| s              | status                               |
| b              | response length                      |
| f              | referer                              |
| a              | user agent                           |

### Describing the `errorlog` Setting
- The setting in the configuration file is:
        - `loglevel`
- The setting in the CLI is:
        - `--error-logfile FILE`
- It defaults to `-`
- This setting specifies the file used for writing errors
- If `-` is specified, then error logging is written to stdout

### Describing the `loglevel` Setting
- The setting in the configuration file is:
	- `loglevel`
- The setting in the CLI is:
	- `--log-level LEVEL`
- It defaults to `info`
- This setting specifies the granularity of the error in the error log
- Valid level names are the following:
	- `debug`
	- `info`
	- `warning`
	- `error`
	- `critical`

### Describing the `capture_output` Setting
- The setting in the configuration file is:
	- `capture_output`
- The setting in the CLI is:
	- `--capture-output`
- It defaults to `False`
- This setting specifies whether to redirect error logs to stderr

### Describing the `logger_class` Setting
- The setting in the configuration file is:
	- `logger_class`
- The setting in the CLI is:
        - `--logger-class STRING`
- It defaults to `gunicorn.glogging.Logger`
- This setting specifies the logger used to log events in Gunicorn
- The default `gunicorn.glogging.Logger` handles most normal functionalities for logging
- Specifically, it provides error and access logging
- We can customize our own logger and provide it using this setting

### Describing the `logconfig` Setting
- The setting in the configuration file is:
	- `logconfig`
- The setting in the CLI is:
	- `--log-config FILE`
- It defaults to `None`
- This setting specifies the configuration file used for logging
- Gunicorn uses the configuration file format in the standard Python logging module

### Describing the `logconfig_dict` Setting
- The setting in the configuration file is:
	- `logconfig_dict`
- The setting in the CLI is:
	- `--log-config-dict DICT`
- It defaults to `{}`
- This setting specifies a configuration file as a dictionary
- This configuration file is used for logging
- For more information about the format, refer to the [docs](https://docs.python.org/3/library/logging.config.html#logging.config.dictConfig)
- This option takes precedence over the `logconfig` option
- This is because the `logconfig` setting uses the older file configuration format

### Describing the `syslog_addr` Setting
- The setting in the configuration file is:
	- `syslog_addr`
- The setting in the CLI is:
	- `--log-syslog-to SYSLOG_ADDR`
- It defaults to `udp://localhost:514`
- This setting specifies an address to send syslog messages
- The address is a string of the following format:
	- `tcp://HOST:PORT`
	- Or `udp://HOST:PORT`

### Describing the `syslog` Setting
- The setting in the configuration file is:
	- `syslog`
- The setting in the CLI is:
	- `--log-syslog`
- It defaults to `False`
- This setting specifies whether to send Gunicorn logs to syslog
- Sending access logs can be disabled using the `disable_redirect_access_to_syslog` setting

### Describing the `syslog_prefix` Setting
- The setting in the configuration file is:
	- `syslog_prefix`
- The setting in the CLI is:
	- `--log-syslog-prefix SYSLOG_PREFIX`
- It defaults to `None`
- This setting specifies a `SYSLOG_PREFIX` parameter used in the syslog entries as the program name

### Describing the `syslog_facility` Setting
- The setting in the configuration file is:
	- `syslog_facility`
- The setting in the CLI is:
	- `--log-syslog-facility SYSLOG_FACILITY`
- It defaults to `user`
- This setting specifies a `SYSLOG_FACILITY` name

### Example of the `accesslog` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> accesslog = 'myfile.log'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `accesslog` setting using the CLI:

```sh
$ gunicorn --access-logfile myfile.log  ...
```

### Example of `access_log_format` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> access_log_format = 'remote_ip: %(h)s'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `access_log_format` setting using the CLI:

```sh
$ gunicorn --access_log_format %(h)s  ...
```

### Example of `errorlog` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> errorlog = 'myerrors.log'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `loglevel` setting using the CLI:

```sh
$ gunicorn --error-logfile myerrors.log  ...
```

### Example of `loglevel` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> errorfile = 'myerrors.log'
>>> loglevel = 'warning'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `loglevel` setting using the CLI:

```sh
$ gunicorn --log-level warning  ...
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#logging)
