---
title: "Debugging"
draft: false
weight: 5
katex: true
---

### Describing the `reload` Setting
- The setting in the configuration file is:
	- `reload`
- The setting in the CLI is:
	- `--reload`
- It defaults to `False`
- This setting specifies that workers will restart when code changes
- Note, there is no restart if there are changes to the config file
- This setting is intended for development only

### Describing the `reload_engine` Setting
- The setting in the configuration file is:
	- `reload_engine`
- The setting in the CLI is:
	- `--reload-engine STRING`
- It defaults to `auto`
- This setting specifies the reload engine used for the `reload` setting
- The following are valid engines:
	- `auto`
	- `poll`
	- `inotify`

### Describing the `reload_extra_files` Setting
- The setting in the configuration file is:
	- `reload_extra_files`
- The setting in the CLI is:
	- `--reload-extra-files FILES`
- It defaults to `[]`
- This is an extension of the `reload` option
- It watches and reloads and specifies files
- Suppose we wanted workers to restart when changes were made to a config file
- Then, we would specify `--reload-extra-file config.py`

### Describing the `spew` Setting
- The setting in the configuration file is:
	- `spew`
- The setting in the CLI is:
	- `--spew`
- It defaults to `False`
- It specifies whether the server should log executed lines

### Describing the `check_config` Setting
- The setting in the configuration file is:
	- `check_config`
- The setting in the CLI is:
	- `--check-config`
- It defaults to `False`
- It specifies whether the syntax of the config file should be checked

### Example of the `reload` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> reload = True
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `reload` setting using the CLI:

```sh
$ gunicorn --reload ...
```

### Example of the `reload_engine` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> reload = True
>>> reload_engine = 'inotify'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `reload_engine` setting using the CLI:

```sh
$ gunicorn --reload --reload-engine inotify ...
```

### Example of the `reload_extra_files` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> reload = True
>>> reload_extra_file = 'config.py'
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `reload_extra_files` setting using the CLI:

```sh
$ gunicorn --reload --reload-extra-file config.py ...
```

### Example of the `spew` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> spew = True
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `spew` setting using the CLI:

```sh
$ gunicorn --spew ...
```

### Example of the `check_config` Setting
- A `.py` configuration file can be defined as:

```python
# config.py
>>> check_config = True
```

- We can specify it using the `-c` flag:

```sh
$ gunicorn -c config.py ...
```

- Or we can specify the `check_config` setting using the CLI:

```sh
$ gunicorn -c config.py --check-config ...
```

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#debugging)
- [Conversation about Auto Reloads in Gunicorn](https://stackoverflow.com/a/24893069/12777044)
