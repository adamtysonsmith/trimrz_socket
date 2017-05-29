const io = require('socket.io')();
const port = process.env.PORT || 4000;

io.listen(port);
console.log(`INFO: Socket server listening on port ${port}`);

io.on('connection', socket => console.log('INFO: Socket server connected to client'));

io.on('error', err => console.log('ERROR: Socket server error event', err));
