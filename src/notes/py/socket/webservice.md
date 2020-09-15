---
title: "Web Apps and Services"
draft: false
weight: 1
katex: true
---

### Motivating Network Communication
- Servers communicate with each other by sending packets
- These packets follow a network-layer protocol
- A few network-layer protocols include:
	- IP
	- TCP
- There are data chunks within those packets
- These data chunks follow an application-layer protocol
- A few application-layer protocols include:
	- SOAP
	- HTTP
	- HTTPS
	- FTP
	- SMTP

### Defining a Web and REST API
- An API is a set of methods
- It is used for communicating with other software components
- An API with methods following an application-layer protocol is referred to as a *web API*
- A web API that satisfies the following is considered a *REST API*:
	- Resources are unambiguously requested via URIs
	- HATEOUS
- **H**ypermedia **a**s **t**he **e**ngine **o**f **a**pplication **s**tate is abbreviated as *HATEOUS*
- HATEOUS is satisfied if transitions and actions are clearly exposed to the client by the server via hyperlinks and hypertext

### Defining a Web Service
- Generally, a web service doesn't need a user interface
- A web service operates over HTTP
- A web service refers to software
- This software is in the form of an API
- This API can be designed as a REST or SOAP API
- A web service serves data in any format
- This includes data formatted as XML, JSON, etc.
- The following frameworks can be used to build web APIs:
	- Node.js
	- Flask
	- Spring Boot
- In other words, these frameworks can be used to build webservices

### Defining a Web Application
- Generally, a web application involves a user interface
- A web application operates over HTTP
- A web application refers to software
- This software is in the form of the following:
	- HTML
	- CSS
	- JavaScript
- In other words, the following properties are listed below:
	- `Web Service:` Runs on the *server*
	- `Web Application:` Runs as the *client*

### Separating the Front-End and Back-End
- Typically, the frontend and backend refer to different networks
- The frontend does the following:
	- Sends HTTP-formatted requests to the backend
	- Interprets HTTP-formatted responses
	- Extracts the JSON-formatted data if successful
- The backend does the following:
	- Interprets HTTP-formatted requests
	- Sends HTTP-formatted responses to the frontend
		- These contain a response code and JSON-formatted data

### Defining a Microservice
- A microservice is a software architecture
- It is based on using web services
- This architecture simplifies big applications by splitting them into smaller applications
- Each smaller application serves an individual purpose
- These smaller applications are web services
- This architecture allows a web service to use other web services easily
- By doing this, we can:
	- Build new web services linked to old web services
	- Remove rdundancies from building many large applications
- The word *micro* in *microservices* emphasises the idea of how they're based on making web services as small as possible

### Examples of Web Services
- The Yahoo Weather API
- The Google Maps API
- The Facebook Marketing API
- Spotify API

### Describing Stateless Applications
- Statelessness is a property of a web service
- A stateless application doesn't store any information from a client request
- Meaning, `Sessions` and `Cookies` should be avoided
- Typically, web services should try to be stateless
- However, certain webservices are inherently stateful
- For example, a shopping cart is a stateful feature by design
- Therefore, a web application implementing a shopping cart should be stateful

### References
- [Defining a Web Service](https://stackoverflow.com/a/2849464/12777044)
- [Describing Web Servers and Web Services](https://stackoverflow.com/a/2205802/12777044)
- [Categorizing Web Servers and Services](https://stackoverflow.com/a/8196949/12777044)
- [Differentiating Web Services and Apps](https://stackoverflow.com/a/12955284/12777044)
- [Defining Web Services and Applications](https://stackoverflow.com/a/9111708/12777044)
- [Generalizing Web Applications](https://stackoverflow.com/a/9113891/12777044)
- [Differentiating a Web Service and Microservice](https://stackoverflow.com/a/45453646/12777044)
- [What is a Web Service?](https://stackoverflow.com/a/1353702/12777044)
- [Detailed Description of Microservices](https://stackoverflow.com/a/46576330/12777044)
- [Entertaining Parody of Microservices](https://www.youtube.com/watch?v=y8OnoxKotPQ)
- [Blog Post about HATEOUS](https://medium.com/unexpected-token/how-your-api-could-benefit-from-hypermedia-b62780771ccb)
- [Definition of HATEOUS](https://restfulapi.net/hateoas/)
- [Comparing a SOAP and REST API](https://stackoverflow.com/a/19884975/12777044)
- [Comparing a Web and REST API](https://stackoverflow.com/a/19844272/12777044)
