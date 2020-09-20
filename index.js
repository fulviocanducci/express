const express = require('express');
const cors = require('cors');

const factory = require('./factory/index');

const server = express();
server.use(cors());

factory(server);

server.listen(8989, () => {
  console.log('Server Up Port 8989 ...');
});
