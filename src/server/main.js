const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const cors = require('cors');

const PORT = 3001;

const app = express();
app.use(cors());

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on('connection', (socket) => {
  socket.on('enter_room', (msg, done) => {
    console.log(msg);
    setTimeout(() => {
      done();
    }, 3000);
  });
  console.log(socket);
});

const handleListen = () => console.log(`Listening on ${PORT}`);
httpServer.listen(PORT, handleListen);
