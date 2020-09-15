---
title: "Security"
draft: false
weight: 9
katex: true
---

### Describing the `limit_request_line` Setting
- The setting in the configuration file is:
	- `limit_request_line`
- The setting in the CLI is:
	- `--limit-request-line INT`
- It defaults to `4094`
- This setting specifies the maximum size of HTTP request line in bytes
- This parameter is used to limit the allowed size of the client's HTTP request-line
- This parameter can be used to prevent any DDOS attack

### Describing the `limit_request_fields` Setting
- The setting in the configuration file is:
	- `limit_request_fields`
- The setting in the CLI is:
	- `--limit-request-fields INT`
- It defaults to `100`
- This setting specifies the limit of the number of an HTTP header field in a request
- This parameter is used to prevent any DDOS attack

### Describing the `limit_request_field_size` Setting
- The setting in the configuration file is:
	- `limit_request_field_size`
- The setting in the CLI is:
	- `--limit-request-field-size INT`
- It defaults to `8109`
- This setting specifies the limit of the size of an HTTP header field in a request
- This parameter is used to prevent any DDOS attack

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#security)
