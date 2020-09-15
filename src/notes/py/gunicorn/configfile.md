---
title: "Config File"
draft: false
weight: 4
katex: true
---

### Describing a Configuration File
- There is a list of settings for Gunicorn
- Some of these settings are only usable in a configuration file
- Some of these settings have CLI counterparts as well
- They can be specified using environment variable `GUNICORN_CMD_ARGS`
- The following is an example including `--bind`:

```sh
$ GUNICORN_CMD_ARGS="--bind=127.0.0.1" gunicorn app:app
```

### Describing the `config` Setting
- The setting in the configuration file is:
	- `config`
- The setting in the CLI can be:
	- c CONFIG`
	- Or `--config CONFIG`
- This setting specifies a Gunicorn config file
- The `CONFIG` file can be formatted as any of the following:
	- `PATH`
	- `file:PATH`
	- `python:MODULE_NAME`
- The config gile can be a `.py` or `.ini` file

### Example of the `config` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> timeout = 120
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `timeout` setting using the CLI:

```sh
$ gunicorn --timeout 120 ...
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#config-file)
- [Example of Specifying the Configuration File](https://stackoverflow.com/a/13340800/12777044)
