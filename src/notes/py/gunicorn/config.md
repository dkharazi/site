---
title: "Configuration"
draft: false
weight: 3
katex: true
---

### Describing Configurations in Gunicorn
- Gunicorn pull configurations from three different places:
	1. Framework settings
	2. Configuration file
	3. Command line

### Describing Configurations via Framework Settings
- Gunicorn will try reading from framework-specific file for configurations first
- Currently, only Paster applications have access to framework specific settings

### Describing Configurations via Configuration File
- Gunicorn will try reading from a configuration file
- This file is optionally specified on the command line
- Anything specified in the Gunicorn config file will override any framework specific settings
- This configuration file should be a valid Python file
- For example, the file could be called `gunicorn.conf.py`
- It only needs to be readable from the file system
- Any Python is valid
- This file is started every time Gunicorn is started
- A Django `config.py` is a good example of this
- An example looks like the following:

```python
>>> import multiprocessing
>>> bind = '127.0.0.1:8000'
>>> workers = multiprocessing.cpu_count() * 2 + 1
```

### Describing Configurations via Command Line
- The command line arguments used to invoke Gunicorn are the final place considered for configuration settings
- This value will be used if an option is specified on the CLI
- It overrides the first two configuration options if specified
- Not all Gunicorn settings are available to be set from the CLI
- To see the full list of command line settings:

```bash
$ gunicorn -h
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/configure.html#)
