import * as types from '../helpers/actionTypes';

// only because the work didnt complete.
/* eslint-disable-next-line import/prefer-default-export */
export const updateBoard = (cellId, symbol) => ({
  type: types.DRAW_SYMBOL_ON_CELL,
  payload: {
    cellId,
    symbol,
  },
});
