import { io } from 'socket.io-client';

const clientSocket = io('http://localhost:8000', {
  transports: ['websocket', 'polling', 'flashsocket'],
});

export default clientSocket;
