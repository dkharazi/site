---
title: "Race Conditions and Deadlocks"
draft: false
weight: 17
katex: true
---

### Defining Intuition of Locks
- A Lock is an object that acts like a hall pass
- Only one thread at a time can have the Lock
- Any other thread that wants the Lock must wait until the owner of the Lock gives it up
- Specifically, a **lock** allows only one thread to enter locked code
- Only one thread can *acquire* the lock at a time

### Motivating the Use of Locks
- Splitting a process into multiple threads can create issues
- Specifically, we can experience race conditions
- A **race condition** occurs when:
	- Two or more threads access shared data
	- They try to change it at the same time
- To prevent race conditions, we can introduce locking
- However, incorrect locking can lead to deadlocks

### Defining Problems related to Locks
- A **deadlock** occurs when:
	- Two or more threads are waiting on a resource being used
	- As a result, they are blocking each other
- For example:
	- Resource $A$ and resource $B$ are used by thread $X$ and thread $Y$
		1. $X$ starts to use $A$
		2. $X$ and $Y$ try to start using $B$
		3. $Y$ wins and gets B first
		4. Now $Y$ needs to use $A$
		5. $A$ is locked by $X$, which is waiting for $Y$

### Illustrating Race Conditions with ATM Transactions
- Let's say a husband and wife have a debit card for the same checking account
- They have $100$ dollars in this bank account
- Suppose they make $2$ different transactions at the same time
- The wife purchases a meal for $10$ dollars
- The husband purchases a set of pots for $50$ dollars
- Specifically, this scenario involves the following:
	- `T1:` $-\text{\textdollar}10$
	- `T2:` $-\text{\textdollar}50$
	- `Bank Account:` $\text{\textdollar}100$
- In this scenario, the bank must take:
	- Receive a transaction amount
	- Read what is currently in their account
	- Then modify the amount
- Since these transactions happen at the same time, the transactions could look like the following:

| Step in Time | $T_{1}$                                   | $T_{2}$                                   |
| ------------ | ----------------------------------------- | ----------------------------------------- |
| $1$          | Read account: $\text{\textdollar}100$     |                                           |
| $2$          |                                           | Read account: $\text{\textdollar}100$     |
| $3$          | Write new amt: $\text{\textdollar}90$     |                                           |
| $4$          |                                           | Write new amt: $\text{\textdollar}50$     |
| $5$          |                                           | end                                       |
| $6$          | end                                       |                                           |

- After both transactions, the account has $50$ dollars
- Without locking, this is $10$ dollars more than it should be
- This scenario is a race condition

### Illustrating Deadlocks with ATM Transactions
- The transactions between the husband and wife are expected to be *serializable*
- Meaning, the balance would be the same if the transactions had occurred different times
- Therefore, we need to introduce locks
- However, introducing locks can introduce deadlocks
- A deadlock can occur in the following scenario:

| Step in Time | $T_{1}$       | $T_{2}$       |
| ------------ | ------------- | ------------- |
| $1$          | Lock($x$)     |               |
| $2$          |               | Lock($y$)     |
| $3$          | Write $x=1$   |               |
| $4$          |               | Write $y=19$  |
| $5$          | Lock(y)       |               |
| $6$          | Write $y=x+1$ |               |
| $7$          |               | Lock(x)       |
| $8$          |               | Write $x=y+2$ |
| $9$          | Unlock(x)     |               |
| $10$         |               | Unlock(x)     |
| $11$         | Unlock(y)     |               |
| $12$         |               | Unlock(y)     |

- Specifically, line $5$ contains a deadlock
- $T_{1}$ and $T_{2}$ attempt to grab each other's resources $y$ and $x$
- However, they can't acquire them because they are locked
- Meaning, they will continue waiting forever for each other's resource

### Illustrating Deadlocks from Old Crime Scenes
- Imagine a criminal and a cop are at a standoff with each other
- The criminal holds a hostage, while the cop holds the criminal's friend
- The criminal and cop will only release their held person if the other releases their person first
- Specifically, the cop will only release the criminal's friend if the criminal releases the hostage first
- Similarly, the criminal will only release the hostage if the cop releases the criminal's friend first
- Therefore, they are at a deadlock:
- In this analogy, the characters represent:
	- `Cop:` Thread 1
	- `Criminal:` Thread 2
	- `Hostage:` Resource 1
	- `Criminal's Friend:` Resource 2
- In this analogy, the following can be translated:
	- Thread 1 demands resource 2, but thread 2 owns the lock
	- Thread 2 demands resource 1, but thread 1 owns the lock
	- The owner of resource 2 is thread 1
	- The owner of resource 1 is thread 2

### References
- [Python Essential References](http://index-of.co.uk/Python/Python%20Essential%20Reference,%20Fourth%20Edition.pdf)
- [Documentation for Threading API](https://docs.python.org/3/library/threading.html)
- [Race Conditions with Locking](https://stackoverflow.com/a/34550/12777044)
- [Example of a Deadlock](https://stackoverflow.com/a/34520/12777044)
- [Crime Example of Deadlocks](https://stackoverflow.com/a/35640575/12777044)
- [Illustrating Race Conditions with Transactions](https://stackoverflow.com/a/3130212/12777044)
