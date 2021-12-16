const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Sever listening on port', PORT);
})