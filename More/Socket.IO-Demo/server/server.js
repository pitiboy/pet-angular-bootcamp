const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let visitCount = 0;

io.on('connection', function (socket) {
  console.log('connected');
  visitCount++;
  socket.on('ping', () => io.emit('visitCount', visitCount));
  io.emit('visitCount', visitCount);
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
