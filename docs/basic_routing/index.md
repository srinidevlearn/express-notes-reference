---
lang: en-US
title: basic Routing?
description: why express
next: './expresssetup.md'
---
How to Route incoming request inside express app?

- Routing refers to determining how an application responds to a client request to a particular endpoint.
    - It must have URI (or path).
    - It must have HTTP request method (GET, POST, and so on).
- Each route can have one or more handler functions, which are executed when the route is matched.

```js
app.METHOD(PATH, HANDLER)
```

> Where:
>  > - **app** is an instance of express.
>  > - **METHOD** is an HTTP request method, in lowercase.
>  > - **PATH** is a path on the server.
>  > - **HANDLER** is the function executed when the route is matched.


<StackBlitz id="express-simple-q77h7t"/>
