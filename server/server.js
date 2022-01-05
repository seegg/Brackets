const express = require('express');
const path = require('path');

const server = express();

const { randomDelay } = require('./randomDelay');
const cellRoutes = require('./routes/cells');

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

// server.use('/', randomDelay(100, 500));

server.use("/home", (req, res) => {
  res.send("hello");
})

server.use('/cell', cellRoutes);

module.exports = server;