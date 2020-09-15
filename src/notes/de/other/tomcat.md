---
title: "Tomcat"
draft: false
weight: 2
katex: true
---

### Motivating a Java Servlet
- Making Java web applications involves writing HTTP server code
- This process of writing HTTP server code has been automated via Java Application Servers
- Apache Tomcat is the most popular Java Application Server
- Python's WSGI server is the closest equivalent to Java servlets

### Describing Java Servlets
- A java servlet is a Java software component
- It extends the capabilities of a web server
- Servlets can respond to many types of requests
- However, they typically implement web containers
- Web containers are used for hosting web apps on a web server
- Web servlets are the Java counterpart to other dynamic content technologies, like PHP and ASP.NET

### Defining about Web Containers
- A web container must be used to run a servlet
- A web container is also known as a servlet container
- It is used for:
	- Interacting with servlets
	- Managing the lifecycle of servlets
	- Mapping a URL to a particular servlet
	- Ensuring the client has correct access rights
- A servlet is an object receiving a request
- It generates a response based on that request

### Describing the `Servlet` Framework in Java
- The basic `Servlet` package is used for:
	- Defining Java objects to represent servlet requests/responses
	- Defining objects that reflect configurations
	- Defining objects that reflect the execution environment
- The basic `Servlet.http` package is used for:
	- Defining HTTP-specific subclasses of generic servlets
	- Defining objects for managing sessions
- Servlets are packaged in a WAR file as a web application

### References
- [Documentation for Apache Tomcat](http://tomcat.apache.org/)
- [Wiki on Apache Tomcat](https://en.wikipedia.org/wiki/Apache_Tomcat)
- [Wiki on Java Servlets](https://en.wikipedia.org/wiki/Java_servlet)
- [ELI5 of Java Servlets](https://www.reddit.com/r/AskProgramming/comments/b0rxvg/can_someone_eli5_what_a_java_servlet_is/)
- [Closest thing to Tomcat in Python](https://stackoverflow.com/a/6157070/12777044)
