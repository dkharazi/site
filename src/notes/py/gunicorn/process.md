---
title: "Process Naming"
draft: false
weight: 7
katex: true
---

### Describing the `proc_name` Setting
- The setting in the configuration file is:
	- `proc_name`
- The setting in the CLI is:
	- `-n STRING`
	- Or `--name STRING`
- It defaults to `None`
- This setting specifies the name of a process
- This name can be observed using things like `ps` and `top`
- We'll probably want to use this if we're running more than one instance of Gunicorn
- This requires that you install the `setproctitle` module
- If not specified, the `default_proc_name` setting will be used

### Describing the `default_proc_name` Setting
- The setting in the configuration file is:
	- `default_proc_name`
- It defaults to `gunicorn`
- This setting specifies an internal setting
- It is adjusted for each type of application

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#process-naming)
