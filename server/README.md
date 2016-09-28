##BigPanda Interview - App Server
### Run the server
To run the server that service the api run the following commands from inside this folder:

```
npm install
node server.js
```

The server is now available for requests at
> http://localhost:4000

The server will only have any functionality if you run a mongo DB at
> mongodb://127.0.0.1:27017/local

###Server Architecture

The server is comprised of two JS modules:

 - **server.js**: This module defines the behaviour of the server and imports all the relevant modules.
 - **api.js**: This module defines the API that the server serves up. Namely the service of returning the current comment feed and submitting a new comment.