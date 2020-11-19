import * as types from '../helpers/actionTypes';

export const pickASymbol = (symbol, player) => ({
  type: types.PICK_A_SYMBOL,
  payload: {
    symbol,
    player,
  },
});

export const turnToggle = () => ({
  type: types.TOGGLE_TURN,
});
