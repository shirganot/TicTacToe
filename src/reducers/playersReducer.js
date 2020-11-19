import produce from 'immer';
import * as types from '../helpers/actionTypes';

const initialState = {
  p1: 'x',
  p2: 'o',
  turn: 'p1',
};

export default function playersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.PICK_A_SYMBOL:
      return produce(state, (draft) => {
        draft[payload.player] = payload.symbol;
      });

    case types.TOGGLE_TURN:
      return produce(state, (draft) => {
        draft.turn = draft.turn === 'p1' ? 'p2' : 'p1';
      });
    default:
      return state;
  }
}
