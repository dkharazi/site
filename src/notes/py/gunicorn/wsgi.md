---
title: "Web Server Gateway Interface"
draft: false
weight: 1
katex: true
---

### Describing a WSGI Server
- A web server gateway interface (WSGI) is a server specification programmed in Python
- Specifically, a WSGI server is used to forward requests from a web server to a web application in Python
- The web server can be an Apache or Nginx web server
- The backend web application can be Flask, Django, etc.
- By doing this, we can free up the web server from serving dynamic content using heavyweight Python threads
- In other words, a WSGI server is used for serving clients with files containing dynamic business logic
- A WSGI framework is used for creating web applications

### Describing the Functions of a WSGI Server
- Gunicorn is a popular WSGI server
- Gunicorn provides the following functions:
	- Control the number of worker threads for handling requests
	- Control the maximum number of simultaneous clients
	- Control the maximum number of pending connections
	- Limit the allowed size of an HTTP request header field
	- Control the maximum number of requests a worker will process before restarting
- The above functions are only a few of the many capabilities of Gunicorn

### Responsibilities between a Web and WSGI Server
- Three common building blocks when deploying a Python web application to production are the following:
	- A web server (like nginx)
	- A WSGI application server (like Gunicorn)
	- Our actual application (written using Django or Flask)
- The web server does the following:
	- Accepts requests
	- Handles general domain logic
	- Handles HTTP connections
- A WSGI server does the following:
	- Only handles requests meant for an application
- The application server only cares about requests meant for the application it is associated with
- By doing this, we can achieve the following:
	- Communicate with a single web server
	- Remove some of the web server's load
	- Only run one process for a web application
- In other words, Gunicorn takes care of everything happening between the web server and an application

### A WSGI Server as an Application Server
- Specifically, a WSGI server acts as an application server
- An application server serves clients with files with business logic
- Typically, this content containing business logic is dynamic
- Specifically, the application server is responsible for running code that transforms data to provide a specialized functionality
- Communication between the application server and its client doesn’t need to take the form of HTTP messages

### Describing WSGI Frameworks
- As stated previously, a WSGI framework is used for creating web applications
- The most popular WSGI frameworks are flask and django
- However, most frameworks support the following functions:
	- URL routing
	- Receiving requests
	- Sending responses
	- Using template engines
- Requests are typically in the form of request objects
- Responses take the form of response objects
- These objects contain the information received from and sent to a user's browser
- URL routing involves matching an incoming HTTP request to a particular piece of Python code to be invoked
- Template engines represent dynamic behavior associated with HTML output
- These template engines are obviously represented using Python code

### References
- [Describing a Gunicorn Pipeline with Nginx](https://vsupalov.com/what-is-gunicorn/)
- [Why use a WSGI Server?](https://stackoverflow.com/a/7740171/12777044)
- [Basics of a WSGI Server](http://ivory.idyll.org/articles/wsgi-intro/what-is-wsgi.html)
- [Setting Up a WSGI and Web Server](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-14-04)
- [Functions of a WSGI Server](https://stackoverflow.com/a/44166631/12777044)
- [PEP 333: WSGI as a Python Standard](https://www.python.org/dev/peps/pep-0333/)
- [Differentiating between WSGI Framework and WSGI Server](https://stackoverflow.com/a/8691337/12777044)
- [Another Basic Description of WSGI](https://rufuspollock.com/2006/09/28/wsgi-middleware/)
- [Describing Configurations in Gunicorn](https://stackoverflow.com/a/13929101/12777044)
- [Functions of a WSGI Framework](https://docs.python-guide.org/scenarios/web/)
