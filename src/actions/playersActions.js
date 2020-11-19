import * as types from '../helpers/actionTypes';

// export const toggleTurn = () => ({ type: types.DRAW_SYMBOL_ON_CELL });

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
