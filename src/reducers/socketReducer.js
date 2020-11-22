import produce from 'immer';
import * as types from '../helpers/actionTypes';
import clientSocket from '../clientSocket';

const initialState = {
  socket: clientSocket,
  whichPlayerIAm: '',
  connected: false,
};

export default function socketReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.CONNECT_TO_SOCKET:
      return produce(state, (draft) => {
        draft.connected = true;
      });
    case types.DETERMINE_WHICH_PLAYER_I_AM:
      return produce(state, (draft) => {
        draft.whichPlayerIAm = payload.whichPlayerIAm;
      });

    case types.RESET_ALL_VALUES:
      return initialState;

    default:
      return state;
  }
}
