const express = require('express');
const port = process.env.PORT || 4000;
const server = express().listen(port);
const io = require('socket.io')(server);
console.log('INFO: Listening on port:', port);

io.on('error', err => console.log('ERROR: Socket server error event', err));

io.on('connection', client => {
  console.log('INFO: Connected to client', client.id);

  const hired = 'hired event';
  const applied = 'job response event';
  const job = 'new job event';

  client.on(hired, broadcastToClients(hired))
  client.on(applied, broadcastToClients(applied))
  client.on(job, broadcastToClients(job))

  client.on('disconnect', () => console.log('INFO: Client disconnected', client.id))
});


function broadcastToClients(eventName) {
  return (data) => io.emit(eventName, data);
}
