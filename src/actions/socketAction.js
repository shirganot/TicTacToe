import * as types from '../helpers/actionTypes';
import clientSocket from '../clientSocket';

// only because the work didnt complete.
/* eslint-disable-next-line import/prefer-default-export */
export const connectToSocket = () => {
  clientSocket.on('connect', () => {
    console.log('connect from clientttttt');
  });

  return {
    type: types.CONNECT_TO_SOCKET,
  };
};
