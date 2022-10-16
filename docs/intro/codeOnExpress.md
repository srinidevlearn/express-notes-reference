---
lang: en-US
title: Code Express App
description: How to setup monogdb ?
previous: './expresssetup.md'
---
- use below code for starting with express app

```js
// Import express
const express = require('express');
// Call express function and store it into varaible name app
const app = express();
// define port number
const port = 3000;
// run express app on defined port number
app.listen(port);

```

- to make get request in express app
- just use **.get(endpoint,callbackFunction)**

```js
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

<StackBlitz id="node-8b5gs2"/>

- This app starts a server and listens on port 3000 for connections. 
- The app responds with “Hello World!” for requests to the root URL (/) or route. 
- For every other path, it will respond with a 404 Not Found.