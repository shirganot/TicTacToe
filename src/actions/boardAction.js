import * as types from '../helpers/actionTypes';

export const updateBoard = (cellId, symbol) => ({
  type: types.DRAW_SYMBOL_ON_CELL,
  payload: {
    cellId,
    symbol,
  },
});
