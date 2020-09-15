---
title: "Web Servers"
draft: false
weight: 2
katex: true
---

### Defining a Web Server
- A web server is a server that runs software
- Specifically, this software handles client requests
- It serves clients with files stored on its server
- Typically, these files are:
	- HTML files
	- CSS files
	- Some JavaScript files
- In other words, it usually serves static files to the client
- These static files include images, videos, forms, etc.
- Communication between the web server and its client must take the form of HTTP messages

### Describing the Functions of a Web Server
- A web server can be used for the following functions:
	- An **HTTP cache**
	- A **mail proxy**
	- A **reverse proxy**
	- A **load balancer**
- A reverse proxy is a server sending resources to a client
- It fulfills the following functions:
	- Accepts a request from a client
	- Forwards that request to a server that can fulfill it
	- Returns the server's response to the client
- A load balancer is a server that distributes network traffic across multiple servers
	- A load balancer is a reverse proxy
- There is a lot of overlap between these functions
- Therefore, web servers attempt to provide these functions in a centralized service
- Nginx is a popular web service that achieves this goal

### Defining an Application Server
- An application server is a server that runs software
- Specifically, this software serves files generated on the fly
- Some examples of this software are:
	- Gunicorn (Python)
	- Unicorn (Ruby)
- Web servers achieve the functionality of application servers
- However, they can remove load from the web server

### Motivating Web Proxies
- Generally, a *proxy* refers to something acting on behalf of something else
- Technically, a *proxy* refers to a server acting on behalf of another server
- There are two forms of web proxies:
	- Forward proxy
	- Reverse proxy

### Defining a Forward Proxy
- A forward proxy is performed client-side
- It refers to an intermediary server on the client-side
- This intermediary server forwards client requests to a server
- Specifically, it forwards these requests to some web server
- A forward proxy is used by a client for the following reasons:
	- Client wants to send many requests to a server
	- Client wants to bypass a firewall
	- Client wants to get access to a blocked site
- The following example involves the use of a forward proxy:
	- There is a client from `www.client.com`
	- The client is blocked from `www.server.com`
	- The client uses a proxy server `www.proxy.com`
	- The proxy server forwards client requests to the server

### Defining a Reverse Proxy
- A reverse proxy is performed server-side
- It refers to an intermediary server on the server-side
- This intermediary server forwards client requests to a server
- Specifically, it forwards these requests to another web server
- A reverse proxy is used by a server for the following reasons:
	- Server wants to perform load balancing
	- Server wants to prevent DOS attacks
	- Server wants to add a level of security between the client and applciation server
- The following example involves the use of a reverse proxy:
	- There is a client from `www.client.com`
	- The client sends a request to the `www.server.com`
	- The server forwards the request to another server internally
	- This server forwards the request to the application

### References
- [Difference between Web Servers and Application Servers](https://stackoverflow.com/a/35360821/12777044)
- [How Web and Application Servers work Together](https://www.nginx.com/resources/glossary/application-server-vs-web-server/)
- [Using WSGI Frameworks with Web Servers](https://stackoverflow.com/a/12798019/12777044)
- [Setting up WSGI Servers with Web Servers](https://stackoverflow.com/a/8691337/12777044)
- [What is Nginx?](https://kinsta.com/knowledgebase/what-is-nginx/)
- [Examples of Nginx Configurations](https://www.nginx.com/resources/wiki/start/topics/examples/full/)
- [Rate Limiting with Nginx](https://www.nginx.com/blog/rate-limiting-nginx/)
- [Blog Post about Forward and Reverse Proxies](https://medium.com/@abhishekbhardwaj510/forward-proxy-and-reverse-proxy-128e05e9e43a)
