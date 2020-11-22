import produce from 'immer';
import * as types from '../helpers/actionTypes';

const initialState = {
  p1: '',
  p2: '',
  turn: 'p1',
};

export default function playersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.UPDATE_PLAYER_SYMBOL: {
      const { p1, p2 } = payload.players;
      return produce(state, (draft) => {
        draft.p1 = p1;
        draft.p2 = p2;
      });
    }

    case types.UPDATE_CURR_TURN:
      return produce(state, (draft) => {
        draft.turn = payload.turn;
      });

    case types.RESET_ALL_VALUES:
      return initialState;

    default:
      return state;
  }
}
