'use strict';

let activePlayers = {
  p1: false,
  p2: false,
};

let playersSymbols = {
  p1: '',
  p2: '',
};

let turn = 'p1';

let resetCount = 0;

module.exports = (app) => {
  const serverSocket = require('socket.io')(app);

  serverSocket.on('connection', (client) => {
    console.log('connect in server', client.id);

    // get the players status
    client.on('get-players-status', () => {
      serverSocket.emit('return-players-status', playersSymbols);
    });

    //update players symbol
    client.on('put-players-symbol', ({ symbol }) => {
      if (!playersSymbols.p1) playersSymbols.p1 = symbol;
      else playersSymbols.p2 = symbol;
      serverSocket.emit('return-players-status', playersSymbols);
    });

    // determine which player the use is
    client.on('which-player-I-am', () => {
      let whichPlayerIAm = !activePlayers.p1 ? 'p1' : 'p2';
      activePlayers[whichPlayerIAm] = true;

      if (activePlayers.p1 && activePlayers.p2) resetCount = 0;

      serverSocket.to(client.id).emit('return-which-player-I-am', whichPlayerIAm);
    });

    //Handles cell changed
    client.on('cell-changed', ({ cellId }) => {
      const symbol = playersSymbols[turn];
      turn = turn === 'p1' ? 'p2' : 'p1';
      serverSocket.emit('return-cell-changed', { cellId, symbol, turn });
    });

    client.on('reset-all-socket-server-values', () => {
      if (resetCount === 0) {
        activePlayers = {
          p1: false,
          p2: false,
        };
        playersSymbols = {
          p1: '',
          p2: '',
        };

        turn = 'p1';
        resetCount++;
      }

      serverSocket.emit('reset-values-success');
    });
  });
};
