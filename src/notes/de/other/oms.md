---
title: "OMS"
draft: false
weight: 6
katex: true
---

### Summarizing the Common Order Lifecycle
1. Order placement
2. Store recommendations for order lines
3. Order scheduled
4. Order release
5. Order picking/packing, or backordering (if items are unfound)
6. Order shipped

### Summarizing the Order Scheduling Step
- This step is done after a ship node is recommended for a given order line
- In this step, the order line is scheduled for delivery/fulfillment
- This step involves determining the following:
    - When the order will be delivered
    - What carrier should be used for delivery
- In the status table, any order that has been scheduled but not yet released will acquire a *scheduled* status

### Summarizing the Order Release Step
- This step is done after either of the following steps:
    - An order is scheduled
    - Or if an order is initially backordered
- In this step, the inventory is checked for availability in the system
    - If the system says there is enough stock, then the inventory is *released*
- The concept of *releasing and order* refers to the process of moving an order from a state of being on hold/pending to a state where it can progress through the fulfillment process
    - When an order is released, it typically means that it has met certain criteria or conditions necessary for further processing or fulfillment
    - The specific criteria includes the following:
        - Reported inventory availability
        - Payment verification
        - Fraud checks
        - Order completeness
        - Any additional custom business rules
- Once the order is released, it is added to the release tables
- As a result, the status of each order line will become *released*

### Summarizing the Order Picking/Packing Step
- This step happens after an order has been released or re-released (i.e., after a backorder)
- In this step, each order line will be *picked* (i.e., prepared for packing)
- When an order is picked, it signifies that the items or products included in that order have been physically retrieved from the inventory shelves of a store or DC in preparation for packing and shipping to fulfill the customer's order
- The picking process involves the following steps:
    - Locating the items in a store or DC
    - Gathering the items
    - Packing the items
    - Updating the order status (to inform OMS that the item has either been shipped or must be backordered)
- If an order is successfully picked/packed, then the order moves on to the *order shipment* step
- If an order is unsuccessfully picked/packed, then the order is backordered
    - Sometimes, the item can either not be found in the store/DC, doesn't physically exist, or the reported inventory in the OMS system is incorrect
    - In these scenarios, the unfound items will be backordered
    - Once an order line is backordered, the order line will receive a *backordered* status and cycle back through the release $\to$ picking $\to$ shipped process once there is available inventory either at that store or another store/DC
    - If the order line is backordered, then it will either be re-released to that ship node or another shop node with available inventory
- Once an order line is released and begins the picking process, then a shipment key is added to the shipment table with $\text{quantity} = 0$
    - If the order line successfully completes the picking process, then its release status is assigned to *shipped* and the shipment quantity is assigned to $1$
    - If the order line doesn't successfully complete the picking process then it will be backordered, maintain a $\text{quantity} = 0$, and a new shipment key will be generated for the order line

### Summarizing the Order Shipment Step
- This step happens after the order has been successfully picked/packed
- In this step, the order line will be shipped once inventory is confirmed from the picking process, the item is packaged, and successfully shipped
- All successfully shipped order lines will have a $\text{quantity} = 1$ in the shipment table

### Describing Additional Details around the Process
- The $\text{status_quantity} = 1$ to indicate the current status in the release table
- As a result, there can only be one release key with a $\text{status_quantity} = 1$ for a given order line
- The $\text{quantity} = 1$ is to show if an order line added to the shipment table has been successfully shipped, since it will remain as $0$ if it's backordered, re-released (under the same or a different node), and given a new shipment key

### References
- [OMS Documentation for Release Status Codes](https://www.ibm.com/docs/en/fulfillmentoptimizer?topic=types-order-line-status-data-type-ol)