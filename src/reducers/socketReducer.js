// import produce from 'immer';
import * as types from '../helpers/actionTypes';
import clientSocket from '../clientSocket';

const initialState = {
  socket: clientSocket,
  whichPlayerIAm: '',
};

export default function socketReducer(
  state = initialState,
  {
    type,
    // payload
  },
) {
  switch (type) {
    case types.CONNECT_TO_SOCKET:
      return state;

    default:
      return state;
  }
}
