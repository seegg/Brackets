const express = require('express');
const path = require('path');

const server = express();

const cellRoutes = require('./routes/cells');

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

server.use("/home", (req, res) => {
  res.send("hello");
})

server.use('/cell', cellRoutes);

module.exports = server;