import * as types from '../helpers/actionTypes';

export const updatePlayersStatus = (playersStatus) => {
  return {
    type: types.UPDATE_PLAYER_SYMBOL,
    payload: {
      players: playersStatus,
    },
  };
};

export const updateCurrTurn = (turn) => ({
  type: types.UPDATE_CURR_TURN,
  payload: { turn },
});
