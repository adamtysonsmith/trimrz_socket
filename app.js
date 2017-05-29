const io = require('socket.io')();
const port = process.env.PORT || 8080;

io.listen(port);

io.on('connection', socket => console.log('INFO: Socket server connected to client.', socket));

io.on('error', err => console.log('ERROR: Socket server error event.', err));
