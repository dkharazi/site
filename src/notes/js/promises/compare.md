---
title: "Async Comparison"
draft: false
weight: 1
katex: true
---

### Callback Hell
```js
getUser(function(err, user) {
  getProfile(user, function(err, prof) {
    getAccount(prof, function(err, acct) {
      getReport(acct, function(err, rept) {
        sendStats(rept);
      });
    });
  });  
});
```

### Better with Promises
```js
getUser()
    .then(getProfile)
    .then(getAccount)
    .then(GetReport)
    .then(sendStats)
    .catch(function (err) {
        console.error(err);
    });
```

### Much Better with Async/Await
```js
async function sendAsync() {
    let user = await getUser(1);
    let prof = await getProfile(user);
    let acct = await getAccount(prof);
    let rept = await getReport(acct);
    let send = sendStats(rept);
}
```

### References
- [Chapter on Asynchronous Programming](https://eloquentjavascript.net/11_async.html)
