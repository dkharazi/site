---
title: "Bios"
draft: false
weight: 1
katex: true
---

### Describing the BIOS
- The BIOS is a program stored in a chip on the motherboard
- The BIOS is used for:
	- Booting up the operating system
	- Initializing hardware and device drivers
	- Loading the kernel into memory
- The kernel is program started by the BIOS
- It is used for:
	- Translating software commands to the CPU
	- Interacting with the device drivers

### Motivating Device Drivers
- A device driver is a computer program
- It is used for:
	- Monitoring devices attached to a computer
	- Informing the system of any operations performed
- These operations include the following:
	- Mouse I/O
	- Keyboard I/O
	- RAM
	- etc.
- Essentially, a device driver is a software interface for hardware devices
- This enables other programs to access hardware functions
- Specifically, drivers abstract precise details about the actual hardware
- As a result, these programs don't need to interact with these details

### References
- [Defining Drivers and the Kernel](https://unix.stackexchange.com/a/47250)
- [Defining the Kernel and BIOS](https://www.quora.com/What-is-Kernel-BIOS-and-Drivers-How-do-they-differ-from-each-other)
