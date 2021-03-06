import produce from 'immer';
import * as types from '../helpers/actionTypes';

const initialState = {
  winner: '',
};

export default function playersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GAME_RESULTS:
      return produce(state, (draft) => {
        draft.winner = payload.whoWon;
      });

    case types.RESET_ALL_VALUES:
      return initialState;

    default:
      return state;
  }
}
