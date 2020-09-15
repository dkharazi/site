---
title: "Signals"
draft: false
weight: 6
katex: true
---

### Describing Signals
- Signals are used for decoupling applications
- They do this by sending notifications when actions occur
- Essentially, signals allow certain senders to notify subscribers that something happened
- Signals are intended to notify subscribers
- They aren't intended for subscribers to modify data
- We can subscribe to signals safely
- Moreover, we can achieve this in a split second
- These temporary subscriptions are helpful for unit testing
- This is the benefit of using signals over handlers

### Subscribing to Signals
- The `connect` method can be used to subscribe to signals
- The first argument is a function
- This function is called when the signal is emitted
- There is an optional second argument that specifies a sender
- The `disconnect` method can be used to unsubscribe
- A *sender* is the application that issued the signal

### References
- [Basics of Signals in Flask](https://flask.palletsprojects.com/en/1.1.x/signals/)
