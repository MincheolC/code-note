const socket = require('socket.io-client')('http://localhost:12345');
socket.on('connect', () => {
  console.log('connected');
});
socket.on('message', (data) => {
  console.log(data);
});
socket.on('disconnect', () => {
  console.log('disconnected');
});