---
title: "Device Drivers"
draft: false
weight: 2
katex: true
---

### Describing Device Drivers
- A device driver refers to software
- It is used for the following reasons:
	- Monitoring devices attached to a computer
	- Informing the system of any operations performed
- In other words, a driver is a translator between a hardware device and any application

### Describing Device Controllers
- A device controller refers to physical hardware
- It is used for handling incoming and outgoing CPU signals
- For example:
	- Every device is connected to a computer via plug
	- The plug is connected to a device controller
- A device controller is used for the following:
	- Converts a serial bit stream to a block of bytes
	- Performs error correction as required
- All controllers are connected to the CPU via the common bus

### Illustrating Device Controllers
- The memory is connected to a memory controller
- The monitor is connected to a video controller
- The keyboard is connected to a keyboard controller
- The disk drive is connected to a disk controller
- The USB drive is connected to a USB controller

### Defining the Life Cycle of Device Controllers
1. A device controller receives data from a connected device
2. The device controller stores that data temporarily
	- It is stored in a special purpose register
	- This registed is called a local buffer
	- Implying, the local buffer is inside the controller
3. The device controler interprets the signal for the device driver
4. The device driver receives the interpreted signal

### References
- [Defining the Differences between Drivers and Controllers](https://pediaa.com/what-is-the-difference-between-device-driver-and-device-controller/)
