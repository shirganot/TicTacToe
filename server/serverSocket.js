'use strict';

module.exports = (app) => {
  const io = require('socket.io')(app);

  console.log('inside socket serverrrrrrrr');

  io.on('connection', (client) => {
    console.log('connect in server');
    //   client.on('subscribeToTimer', (interval) => {
    //     console.log('client is subscribing to timer with interval ', interval);
    //     setInterval(() => {
    //       client.emit('timer', new Date());
    //     }, interval);
    //   });
  });
};
