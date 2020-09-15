---
title: "Signal Handling"
draft: false
weight: 16
katex: true
---

### Describing Signals for the Master Process
- `QUIT:` Quick shutdown
- `TERM:` Graceful shutdown
	- Waits for workers to finish their current requests
- `HUP:` Reloads the configuration
	- Starts the new worker processes with a new configuration
	- Then, gracefully shuts down older workers
	- If the application is not preloaded, then Gunicorn will also load the new version of it
- `TTIN:` Increment the number of processes by one
- `TTOU:` Decrement the number of processes by one
- `USR1:` Reopens the log files
- `USR2:` Upgrades Gunicorn on the fly
	- This gracefully shuts down old master processes
- `WINCH:` Gracefully shuts down the worker processes when Gunicorn is daemonized

### Describing Signals for the Worker Process
- Typically, sending signals to the workers is unnecessary
- If the master process is running, any exited worker will be automatically respawned
- The following are valid signals:
	- `QUIT:` Quick shutdown
	- `TERM:` Graceful shutdown
	- `USR1:` Reopen the log files

### Reloading the Configuration
- The `HUP` signal is used to reload Gunicorn configuration
- An example looks like:

```sh
2013-06-29 [20682] [INFO] Handling signal: hup
2013-06-29 [20682] [INFO] Hang up: Master
2013-06-29 [20703] [INFO] Booting worker with pid: 20703
2013-06-29 [20702] [INFO] Booting worker with pid: 20702
2013-06-29 [20688] [INFO] Worker exiting (pid: 20688)
2013-06-29 [20687] [INFO] Worker exiting (pid: 20687)
2013-06-29 [20689] [INFO] Worker exiting (pid: 20689)
2013-06-29 [20704] [INFO] Booting worker with pid: 20704
```

- Sending a `HUP` signal will:
	- Reload the configuration
	- Start the new worker processes
	- Gracefully shutdown older workers

### References
- [Signal Handling](https://docs.gunicorn.org/en/stable/signals.html)
