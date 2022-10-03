---
title: "Kafka"
draft: false
weight: 5
katex: true
---

### Describing Use-Cases for Event Streaming
- Processing payments and financial transactions in real-time
    - E.g. stock exchanges, banks, and insurances
- Tracking and monitoring trucks, fleets, and shipments in real-time
    - E.g. logistics and the automotive industry
- Continuously capturing and analyzing sensor data from IoT devices
    - E.g. factories and wind parks
- Collecting and immediately reacting to customer orders
    - E.g. orders in retail, the travel industry, and mobile applications
- Monitoring patients in hospital care
- Connecting, storing, and making available data produced by different areas of the company
- Serving as the foundation for data platforms, event-driven architectures, and microservices

### Defining Terminology for Kafka
- An *event* is a message and can be thought of as a file in a filesystem
- A *producer* is a user application that publishes the event
- A *consumer* is a user application that reads the event
- A *topic* is the location to which events are stored
    - In RabbitMQ, this is similar to a queue
    - A topic can be thought of as a folder in a filesystem, where the events are the files associated to that folder
    - For example, a topic could be called `payments` and the messages published by the producers would represent the files in that `payments` folder
    - The consumers could then go and read those files in that `payments` folder by subscribing to the `payments` topic

### Comparing Kafka's Pub/Sub Architecture with RPC
- If a user makes a request and expects an immediate and meaningful response, then the request-response model might be preferred
    - Use Kafka if the user making the request typically **is not interested** in a response (besides a response that the message has been sent)
    - Use REST if the user making the request typically **is interested** in a response (not a response that the message has been sent, but instead a response that is meaninful to the user e.g. some computed result)
- If the user expects a forward-flow of data and doesn't expect a response back, then Kafka might be preferred
    - Data is sent to Kafka and is usually sent to multiple topics (i.e. order, inventory, etc.) until landing in the database
    - Once the response is sent back to the user for REST, then the response is over and stored in a database

### References
- [Kafka Documentation](https://kafka.apache.org/documentation/)
- [Creating a Pub-Sub System for a Request-Response Pattern](https://www.rabbitmq.com/tutorials/tutorial-six-python.html)
- [Post comparing Kafka Messaging and REST Calling](https://stackoverflow.com/a/57909743/12777044)
- [Article comparing Request-Driven and Event-Driven Microservices](https://supunbhagya.medium.com/request-driven-vs-event-driven-microservices-7b1fe40dccde)
- [Video about Publish-Subsribe and Request-Response Patterns](https://www.youtube.com/watch?v=DXTHb9TqJOs&ab_channel=HusseinNasser)
- [Video defining the Publisher-Subscriber Model](https://www.youtube.com/watch?v=FMhbR_kQeHw&ab_channel=GauravSen)
- [Video defining Event-Driven Systems](https://www.youtube.com/watch?v=rJHTK2TfZ1I&ab_channel=GauravSen)