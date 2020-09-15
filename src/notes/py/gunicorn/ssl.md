---
title: "SSL"
draft: false
weight: 8
katex: true
---

### Describing the `keyfile` Setting
- The setting in the configuration file is:
	- `keyfile`
- The setting in the CLI is:
	- `--keyfile FILE`
- It defaults to `None`
- This setting specifies a file with SSL keys

### Describing the `certfile` Setting
- The setting in the configuration file is:
	- `certfile`
- The setting in the CLI is:
	- `--certfile FILE`
- It defaults to `None`
- This setting specifies a file with SSL certificates

### Describing the `ssl_version` Setting
- The setting in the configuration file is:
	- `ssl_version`
- The setting in the CLI is:
	- `--ssl-version VERS`
- It defaults to `_SSLMETHOD.PROTOCOL_TLS`
- This setting specifies an SSL version
- The following are valid versions:

| **-ssl-version** | **description**                                      |
| ---------------- | ---------------------------------------------------- |
| SSLv3            | SSLv3 is not-secure and is strongly discouraged      |
| SSLv23           | Alias for TLS. Deprecated                            |
| TLS              | Negotiate highest version between client/server      |
| TLSv1            | TLS 1.0                                              |
| TLSv1_1          | TLS 1.1                                              |
| TLSv1_2          | TLS 1.2                                              |
| TLS_SERVER       | Auto-negotiate the highest protocol version like TLS |

### Describing the `cert_reqs` Setting
- The setting in the configuration file is:
	- `cert_reqs`
- The setting in the CLI is:
	- `--cert-reqs`
- It defaults to `VerifyMode.CERT_NONE`
- This setting specifies whether a client certificate is required

### Describing the `ca_certs` Setting
- The setting in the configuration file is:
	- `ca_cert`
- The setting in the CLI is:
	- `--ca-certs FILE`
- It defaults to `None`
- This setting specifies a file with CA certificates

### Describing the `suppress_ragged_eofs` Setting
- The setting in the configuration file is:
	- `suppress_ragged_eofs`
- The setting in the CLI is:
	- `--suppress-ragged-eofs`
- It defaults to `True`
- This setting specifies whether to suppress ragged EOFs

### Describing the `do_handshake_on_connect` Setting
- The setting in the configuration file is:
	- `do_handshake_on_connect`
- The setting in the CLI is:
	- `--do-handshake-on-connect`
- It defaults to `False`
- This setting specifies whether to perform an SSL handshake on socket connect

### References
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/settings.html#ssl)
