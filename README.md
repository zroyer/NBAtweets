# NBA Tweets
Real-time Twitter stream for the 2016 NBA Playoffs - React, Express, Node, and socket.io

![Alt url](./public/img/nbaplayoffs2.jpg)


## Setup

Make sure you have MongoDB and Node.js installed. Navigate to the root directory and install all packages:

```
npm install
```

Inside of the root directory, create a `/data/db` path.

From the root directory, start your Mongo database:

```
mongod --dbpath data/db
```

Navigate to your root directory and start your Node.js server:

```
node server.js
```

Finally, navigate to `http://localhost:4040` to stream the tweets in real-time!
