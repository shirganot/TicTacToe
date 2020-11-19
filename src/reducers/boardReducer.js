import produce from 'immer';
import * as types from '../helpers/actionTypes';

const initialState = new Array(9).fill(null);

export default function boardReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.DRAW_SYMBOL_ON_CELL: {
      const { cellId, symbol } = payload;
      return produce(state, (draft) => {
        draft[cellId] = symbol;
      });
    }
    default:
      return state;
  }
}
